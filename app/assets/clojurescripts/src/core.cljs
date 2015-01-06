(ns redeyes.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [om.core :as om]
            [redeyes.api :as api]
            [redeyes.undo :refer [add-undo]]
            [redeyes.dispatcher :as dispatcher :refer [dispatch!]]
            [redeyes.util :refer [css-classes active? log log-clj input-with-addons button button-group]]
            [cljs.core.async :refer [chan put! <!]]
            [om-tools.core :refer-macros [defcomponent defcomponentk]]
            [om-tools.dom :as dom :include-macros true]))

;; Holds the state for the entire app
;; Wrapped in Cursors when handed to Om, need to use swap! or reset! to update
;; app-state directly, or om/transact! or om/update! to update the cursor

(def app-state (atom {:apps []}))

(defn fetch-data []
  "Fetch the app state data from the server (just a list of apps) and update
  it, forcing a re-render. Used to init the app and update everything at
  various points."
  (api/fetch-data app-state))

;; Undo on the front-end, just for fun, doesn't sync
;; To access it, open the browser console and type undo()

(add-undo app-state)

;; Dispatcher handlers
;; Handle UI events as they come in - update the UI and sync to the server

(dispatcher/stream :clear-deactivated (fn [{:keys [apps]}]
  (om/update! apps (filter active? @apps))
  (api/clear-deactivated fetch-data)))

(dispatcher/stream :create (fn [{:keys [url apps]}]
  (om/update! apps (conj @apps {"url" url "active" true}))
  (api/submit-new-app url fetch-data)))

(dispatcher/stream :wake-up-now (fn [{:keys [apps]}]
  (api/wake-all #(fetch-data))))

(dispatcher/stream :update-status (fn [{:keys [active app]}]
  (om/update! app ["active"] active)
  (if active
    (api/persist-active-status @app)
    (api/persist-inactive-status @app))))

;; UI Components

(defcomponent new-sleepy-app-form
  "A form where the user can enter a new url to watch"
  [apps owner]
  (init-state [_]
    {:url "" :apps apps})
  (render-state [_ state]
    (let [url (:url state)
          apps (:apps state)
          update-url-state! (fn [new-val]
            (om/set-state! owner :url new-val))
          handle-change-input (fn [e]
            (update-url-state! (.. e -target -value)))
          handle-submit-url (fn [e]
            (.preventDefault e)
            (dispatch! :create {:url url :apps apps})
            (update-url-state! ""))]

      (dom/form {:className "new-sleepy-app-form form-inline"
                 :onSubmit handle-submit-url}
         (input-with-addons {:before {:text "http://"}
                             :after  {:text "Add URL" :onClick handle-submit-url}}
           (dom/input {:type "text"
                       :ref "new-url"
                       :className "form-control"
                       :id "sleepy-app-url"
                       :value url
                       :onChange handle-change-input
                       :placeholder "URL here please!"}))))))

(defcomponent sleepy-app-checkbox
  "Checkbox that indicates whether or not an app is enabled to be woken up"
  [app owner]
  (render [_]
    (let [handle-change-checked (fn [e]
            (dispatch! :update-status
                         {:app app :active (.. e -target -checked)}))]
      (dom/input {:type "checkbox"
                  :onChange handle-change-checked
                  :checked (active? app)}))))

(defcomponent sleepy-app
  "A row in the sleepy-app-list table"
  [app owner]
  (render [_]
    (let [url (get app "url")
          last-wake-up (get app "lastWokenUpAt")
          last-wake-up-text (if (nil? last-wake-up) "Never" last-wake-up)]
      (dom/tr {:className (css-classes "sleepy-app" (when (active? app) "active"))}
        (dom/td (om/build sleepy-app-checkbox app))
        (dom/td url)
        (dom/td last-wake-up-text)))))

(defcomponent sleepy-app-list
  "Renders out each of the sleepy-apps"
  [apps owner]
  (render [_]
    (if (empty? apps)
      (dom/div "No apps")
      (dom/div
        (dom/table {:className "table"}
          (dom/thead
            (dom/tr
              (dom/th {:className "sleepy-app-active-col"} "")
              (dom/th)
              (dom/th)))
          (apply dom/tbody {}
            (om/build-all sleepy-app apps)))))))

(defcomponent wake-up-now-button
  [apps owner]
  (render [_]
    (let [handle-button-click #(dispatch! :wake-up-now {:apps apps})]
      (button {:onClick handle-button-click} "Wake up all apps now!"))))

(defcomponent clear-deactivated-button
  [apps owner]
  (render [_]
    (let [handle-button-click #(dispatch! :clear-deactivated {:apps apps})]
      (button {:onClick handle-button-click} "Clear deactivated apps"))))

(defcomponent redeyes-app
  "Root component for the app"
  [app-state owner]
  (will-mount [_]
    (fetch-data))
  (render [_]
    (dom/div
      (dom/h1 "Apps to wake up")
      (dom/hr)
      (om/build new-sleepy-app-form (:apps app-state))
      (dom/div {:className "sleepy-app-list"}
        (om/build sleepy-app-list (:apps app-state)))
      (button-group
        (om/build wake-up-now-button (:apps app-state))
        (om/build clear-deactivated-button (:apps app-state))))))

;; Main entry point into the app - creates an event bus to dispatch commands
;; from actions performed in the app, and renders it

(defn ^:export run []
  "Render the app out into the #app div"
  (let [bus (chan)]
    (om/root redeyes-app
             app-state
             {:shared {:bus bus}
              :tx-listen (fn [data root-cursor] (log data))
              :target (.getElementById js/document "app")})))
