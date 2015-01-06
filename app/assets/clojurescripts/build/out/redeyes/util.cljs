(ns redeyes.util
  (:require [om-tools.dom :as dom :include-macros true]))

(defn input-with-addons
  [opts input]
  (dom/div {:className "form-group"}
    (dom/div {:className "input-group"}
       (dom/div {:className "input-group-addon"}
        (get-in opts [:before :text]))
       input
       (dom/a {:className "btn btn-default input-group-addon"
               :onClick (get-in opts [:after :onClick])}
        (get-in opts [:after :text])))))

(defn button
  [opts text]
  (dom/a {:className "btn btn-default" :onClick (:onClick opts)}
    text))

(defn button-group
  [& buttons]
  (dom/div {:className "btn-group"} buttons))

(defn css-classes
  [& classes]
  (apply str (interpose " " classes)))

(defn active?
  [app]
  (= true (get app "active")))

(defn log
  [msg]
  (.log js/console msg))

(defn log-clj
  [obj]
  (log (clj->js obj)))
