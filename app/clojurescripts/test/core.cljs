(ns redeyes.core.test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:use [jayq.core :only [$ html]])
  (:require [om.core :as om]
            [om.dom :as dom :include-macros true]
            [redeyes.test-helper :refer (om->$ om-root->$)]
            [cemerick.cljs.test :as t]
            [redeyes.core :refer (redeyes-app sleepy-app-list)]))

(enable-console-print!)

(def app-state
  (atom [{"url" "http://www.brentvatne.ca" "active" true}
         {"url" "http://www.madriska.com" "active" true}
         {"url" "http://www.google.com" "active" false}]))

(println (.text (om-root->$ sleepy-app-list app-state) ))
(println (.text (om->$ sleepy-app-list @app-state)))

; (deftest redeyes-app-test
;   (is (= (.text (om->$ redeyes-app {}))
;          "Hello there")))

(run-tests)
