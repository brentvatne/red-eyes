(ns redeyes.core
    (:require [reagent.core :as reagent :refer [atom]])
    (:use [jayq.core :only [$ css html ajax]]))

(def data (atom []))
(def base-url "/sleepy_apps")
(defn css-classes [& classes] (apply str (interpose " " classes)))
(defn active? [app] (= true (.-active app)))

(defn debugger []
  (js/eval "debugger"))

; API functions

(defn fetch-data [callback]
  (ajax base-url
      {:dataType "json"
       :success (fn [new-data] (swap! data replace new-data)
                       (.log js/console (clj->js @data))
                       (if (nil? callback) nil (callback)))}))

(defn persist-active-status [app callback]
  (ajax (str base-url "/" (.-id app) "/activate")
      {:dataType "json"
       :method "post"
       :success (fn [] (callback))}))

(defn persist-inactive-status [app callback]
  (ajax (str base-url "/" (.-id app) "/deactivate")
      {:dataType "json"
       :method "post"
       :success (fn [] (callback))}))

(defn wake-all [callback]
  (ajax (str base-url "/wake_all")
        {:dataType "json"
         :method "get"
         :success (fn [] (callback))}))

(defn clear-deactivated [callback]
  (ajax (str base-url "/clear_deactivated")
        {:dataType "json"
         :method "post"
         :success (fn [] (callback))}))

(defn update-active-status [e app]
  (if (.-checked (.-target e))
    (persist-active-status app fetch-data)
    (persist-inactive-status app fetch-data))
  (.log js/console app))

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

(defn sleepy-app [app]
  (let [url (.-url app)
        last-wake-up (.-lastWokenUpAt app)]
  [:tr {:class (css-classes "sleepy-app" (when (active? app) "active"))}
   [:td {:class "sleepy-app-active-col"} (sleepy-app-checkbox app)]
   [:td url]
   [:td (if (nil? last-wake-up) "Never by us" last-wake-up)]]))

(defn sleepy-app-checkbox [app]
    [:input {:type "checkbox"
             :checked (active? app)
             :on-change (fn [e] (update-active-status e app))}])

(defn wake-up-all-button []
  (fn []
    [:a {:class "btn btn-default"
         :on-click (fn [e] (.preventDefault e)
                           (wake-all fetch-data))}
     "Wake up all apps now"]))

(defn clear-deactivated-button []
  (fn []
    [:a {:class "btn btn-default"
         :on-click (fn [e] (.preventDefault e)
                           (clear-deactivated fetch-data))}
     "Clear deactivated"]))

(defn handle-submit-new-app [e new-url]
  (.preventDefault e)
  (submit-new-app @new-url fetch-data)
  (.log js/console e))

(defn submit-new-app [url callback]
  (ajax base-url
        {:dataType "json"
         :method "post"
         :data {:url url}
         :success (fn [] (callback))}))

(defn new-sleepy-app-form []
  (let [new-url (atom "")]
    [:form {:class "new-sleepy-app-form form-inline"
            :on-submit (fn [e] (handle-submit-new-app e new-url))}
     [:div {:class "form-group"}
       [:div {:class "input-group"}
        [:div {:class "input-group-addon"} "http://"]
        [:input {:class "form-control"
                 :id "sleepy-app-url"
                 :type "text"
                 :on-change #(reset! new-url (-> % .-target .-value))
                 :placeholder "URL here please"}]
        [:a {:class "btn btn-default input-group-addon"
             :on-click (fn [e] (handle-submit-new-app e new-url))}
         "Add site"]]]]))

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
       [clear-deactivated-button]]]
   ])

(defn render-app []
  (reagent/render-component [redeyes]
                           (.getElementById js/document "app")))

(fetch-data render-app)
