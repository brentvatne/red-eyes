(ns redeyes.core
  (:require [om.core :as om]
            [redeyes.store :as store]
            [redeyes.sync :as sync]
            [redeyes.api :as api]
            [redeyes.dispatcher :as dispatcher :refer [dispatch!]]
            [redeyes.util :refer [css-classes active? log log-clj input-with-addons button button-group]]
            [om-tools.core :refer-macros [defcomponent defcomponentk]]
            [om-tools.dom :as dom :include-macros true]))

(defcomponent new-sleepy-app-form
  "A form where the user can enter a new url to watch"
  [apps owner]
  (init-state [_]
    {:url "" :apps apps})
  (render-state [_ state]
    (let [url (:url state)
          apps (:apps state)
          update-url-state! (fn [new-val] (om/set-state! owner :url new-val))
          handle-change-input (fn [e] (update-url-state! (.. e -target -value)))
          handle-submit-url
            (fn [e]
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
            (dispatch! :update-status {:app app :active (.. e -target -checked)}))]
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
    (sync/fetch-data))
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
  (om/root redeyes-app
           store/app-state
           {:tx-listen (fn [data root-cursor] (log data) (log-clj data))
            :target (.getElementById js/document "app")}))
