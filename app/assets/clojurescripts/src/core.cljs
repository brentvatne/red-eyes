(ns redeyes.core
    (:require [reagent.core :as reagent :refer [atom]])
    (:use [jayq.core :only [$ css html ajax]]))

(def apps (atom []))

(defn redeyes-app [props]
  (ajax "http://red-eyes.dev/sleepy_apps"
          {:dataType "json"
           :success (fn [data] (swap! apps replace data)
                               (.log js/console (clj->js @apps)))})
  [:div
    (map @apps (fn [app] [:div (.url app)]))])

(reagent/render-component [redeyes-app]
                             (.getElementById js/document "app"))
