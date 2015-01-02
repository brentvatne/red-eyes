(ns redeyes.core
    (:require [reagent.core :as r :refer [atom]]
              [redeyes.api :as api])
    (:use [jayq.core :only [$ css html ajax]]))

(def data (r/atom []))
(defn css-classes [& classes] (apply str (interpose " " classes)))
(defn active? [app] (= true (get app "active")))
(defn fetch-data [callback] (api/fetch-data data callback))

(defn update-app [app opts]
  (swap! data replace
    (map (fn [this-app]
            (if (= this-app app)
                (merge app opts)
                (identity this-app))) @data)))

(defn activate [app]
  (update-app app {"active" true})
  (api/persist-active-status app))

(defn deactivate [app]
  (update-app app {"active" false})
  (api/persist-inactive-status app))

(defn update-active-status [e app]
  (if (.-checked (.-target e)) (activate app) (deactivate app)))

(defn sleepy-app-checkbox [app]
    [:input {:type "checkbox"
             :checked (active? app)
             :on-change (fn [e] (update-active-status e app))}])

(defn wake-up-all-button []
  (fn []
    [:a {:class "btn btn-default"
         :on-click (fn [e] (.preventDefault e)
                           (api/wake-all fetch-data))}
     "Wake up all apps now"]))

(defn clear-deactivated-button []
  (fn []
    [:a {:class "btn btn-default"
         :on-click (fn [e] (.preventDefault e)
                           (api/clear-deactivated fetch-data))}
     "Clear deactivated"]))

(defn handle-submit-new-app [e new-url]
  (.preventDefault e)
  (api/submit-new-app @new-url fetch-data)
  (reset! new-url ""))

(defn new-url-input [value]
 [:div {:class "form-group"}
   [:div {:class "input-group"}
    [:div {:class "input-group-addon"} "http://"]
    [:input {:type "text"
             :value @value
             :placeholder "URL here please!"
             :class "form-control"
             :id "sleepy-app-url"
             :on-change #(reset! value (-> % .-target .-value))}]
    [:a {:class "btn btn-default input-group-addon"
         :on-click (fn [e] (handle-submit-new-app e value))}
     "Add site"]]])

(defn new-sleepy-app-form []
  (let [url-input-text (atom "")]
    [:form {:class "new-sleepy-app-form form-inline"
            :on-submit (fn [e] (handle-submit-new-app e url-input-text))}
      [new-url-input url-input-text]]))

(defn sleepy-app [app]
  (let [url (get app "url")
        last-wake-up (get app "lastWokenUpAt")]
  [:tr {:class (css-classes "sleepy-app" (when (active? app) "active"))}
   [:td {:class "sleepy-app-active-col"} (sleepy-app-checkbox app)]
   [:td url]
   [:td (if (nil? last-wake-up) "Never by us" last-wake-up)]]))

(defn sleepy-app-list []
 (let [apps @data]
  (if (empty? apps)
    [:div "No apps"]
    [:div
      [:table {:class "table"}
       [:thead
         [:tr
           [:th {:class "sleepy-app-active-col"}]
           [:th]
           [:th]]]
       [:tbody
         (for [app apps]
         [sleepy-app app])]]])))

(defn redeyes []
  [:div
   [:h1 "Apps to wake up"]
   [:hr]
   [new-sleepy-app-form]
   [:div {:class "sleepy-app-list"}
     [sleepy-app-list]
     [:hr]
     [:div {:class "btn-group"}
       [wake-up-all-button]
       [clear-deactivated-button]]]])

(defn render-app []
  (r/render-component [redeyes]
    (.getElementById js/document "app")))

(fetch-data render-app)
