(ns redeyes.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [om.core :as om]
            [redeyes.api :as api]
            [redeyes.undo :refer [add-undo]]
            [redeyes.helpers :as helpers :refer [css-classes active? log log-clj input-with-addons button button-group]]
            [cljs.core.async :refer [chan put! <!]]
            [om-tools.core :refer-macros [defcomponent defcomponentk]]
            [om-tools.dom :as dom :include-macros true]))

;; Handling events through core.async channels and a dispatcher

(defn activate [app]
  (om/update! app ["active"] true)
  (api/persist-active-status @app))

(defn deactivate [app]
  (om/update! app ["active"] false)
  (api/persist-inactive-status @app))

(defn fetch-data
  "Gets the list of apps already saved to the server, then fires the
  callback. Used to load the initial state before rendering the app."
  [state]
  (api/fetch-data state))

;; Our app dispatcher function

(defn dispatch
  [command params app-state]
  (case command
    :clear-deactivated
      (do (om/transact! app-state :apps (fn [apps] (filter #(active? %) apps)))
          (api/clear-deactivated #(fetch-data app-state)))
    :wake-up-now
      (api/wake-all #(fetch-data app-state))
    :create
      (do (om/transact! app-state :apps (fn [apps] (conj apps {"url" (:url params) "active" true})))
          (api/submit-new-app (:url params) #(fetch-data app-state))
          (+ 1 1))
    :update-status
      (if (:active params) (activate (:app params)) (deactivate (:app params)))))

(defcomponent new-sleepy-app-form
  "A form where the user can enter a new url to watch"
  [data owner]
  (init-state [_]
    {:url ""})
  (render-state [_ state]
    (let [url (:url state)
          bus (:bus (om/get-shared owner))
          update-url-state! (fn [new-val]
            (om/set-state! owner :url new-val))
          handle-change-input (fn [e]
            (update-url-state! (.. e -target -value)))
          handle-submit-url (fn [e]
            (.preventDefault e)
            (put! bus [:create {:url url}])
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
    (let [bus (:bus (om/get-shared owner))
          handle-change-checked (fn [e]
            (put! bus [:update-status {:app app :active (.. e -target -checked)}]))]
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
  [app-state owner]
  (render [_]
    (let [handle-button-click
          #(put! (:bus (om/get-shared owner)) [:wake-up-now {}])]
      (button {:onClick handle-button-click} "Wake up all apps now!"))))

(defcomponent clear-deactivated-button
  [app-state owner]
  (render [_]
    (let [handle-button-click
          #(put! (:bus (om/get-shared owner)) [:clear-deactivated {}])]
      (button {:onClick handle-button-click} "Clear deactivated apps"))))

(defcomponent redeyes-app
  "Root component for the app"
  [app-state owner]
  (will-mount [_]
    (let [bus (:bus (om/get-shared owner))]
      (api/fetch-data app-state)
      (go-loop []
        (let [[command params] (<! bus)]
          (dispatch command params app-state))
          (recur))))
  (render [_]
    (dom/div
      (dom/h1 "Apps to wake up")
      (dom/hr)
      (om/build new-sleepy-app-form {})
      (dom/div {:className "sleepy-app-list"}
        (om/build sleepy-app-list (:apps app-state)))
      (button-group
        (om/build wake-up-now-button app-state)
        (om/build clear-deactivated-button app-state)))))

;; Main entry point into the app - creates an event bus to dispatch commands
;; from actions performed in the app, and renders it
(def app-state (atom {:apps []}))

;; Undo on the front-end, just for fun, doesn't sync
(add-undo app-state)

(defn ^:export run []
  "Render the app out into the #app div"
  (let [bus (chan)]
    (om/root redeyes-app
             app-state
             {:shared {:bus bus}
              :tx-listen (fn [data root-cursor] (log data))
              :target (.getElementById js/document "app")})))

;; Hey look you can access the app-state from outside of Om component -
;; this could be useful for predicate methods that operate on state

; (.setTimeout js/window #(.log js/console app-state) 5000)
; (.setTimeout js/window #(.log js/console (clj->js app-state)) 5000)
; (.setTimeout js/window #(.log js/console (clj->js (:apps @app-state))) 5000)
; (.setTimeout js/window #(reset! app-state {:apps [{"url" "ha!"}]}) 5000)
