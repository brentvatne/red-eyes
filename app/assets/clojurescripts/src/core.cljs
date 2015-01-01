(ns redeyes.core
    (:require [reagent.core :as reagent :refer [atom]])
    (:use [jayq.core :only [$ css html ajax]]))

(def data (atom []))

(defn css-classes [& classes] (apply str (interpose " " classes)))

(defn fetch-data [callback]
  (ajax "http://red-eyes.dev/sleepy_apps"
              {:dataType "json"
               :success (fn [new-data] (swap! data replace new-data)
                               (.log js/console (clj->js @data))
                               (if (nil? callback) nil (callback)))}))

(defn persist-active-status [app callback]
  (ajax (str "http://red-eyes.dev/sleepy_apps/" (.-id app) "/activate")
              {:dataType "json"
               :method "post"
               :success (fn [] (callback))}))

(defn persist-inactive-status [app callback]
  (ajax (str "http://red-eyes.dev/sleepy_apps/" (.-id app) "/deactivate")
              {:dataType "json"
               :method "post"
               :success (fn [] (callback))}))

(defn active? [app]
  (= true (.-active app)))

(defn debugger []
  (js/eval "debugger"))

(defn update-active-status [e app]
  (if (.-checked (.-target e))
    (persist-active-status app fetch-data)
    (persist-inactive-status app fetch-data))
  (.log js/console app))


(defn render-app []
  (reagent/render-component [redeyes]
                           (.getElementById js/document "app")))

(def redeyes
  (with-meta
    (fn []
      (let [apps @data]
        (if (empty? apps)
          [:div "No apps"]
          [:table
           (for [app apps]
             [sleepy-app app]) ])))))

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

(fetch-data render-app)
