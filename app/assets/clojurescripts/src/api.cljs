(ns redeyes.api
  (:use [jayq.core :only [ajax]])
  (:require [om.core :as om]))

(def base-url "/sleepy_apps")

(defn fetch-data [data]
  (ajax base-url
      {:dataType "json"
       :success (fn [new-data] (om/update! data [:apps] (js->clj new-data)))}))

(defn persist-active-status [app]
  (ajax (str base-url "/" (get app "id") "/activate")
      {:dataType "json"
       :method "post"}))

(defn persist-inactive-status [app]
  (ajax (str base-url "/" (get app "id") "/deactivate")
      {:dataType "json"
       :method "post"}))

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

(defn submit-new-app [url callback]
  (ajax base-url
        {:dataType "json"
         :method "post"
         :data {:url url}
         :success (fn [] (callback))}))
