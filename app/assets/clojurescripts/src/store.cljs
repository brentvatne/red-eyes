(ns redeyes.store
  (:require [om.core :as om]
            [redeyes.api :as api]
            [redeyes.dispatcher :as dispatcher]
            [redeyes.util :refer [active? log log-clj]]))

;; Holds the state for the entire app
;; Wrapped in Cursors when handed to Om, need to use swap! or reset! to update
;; app-state directly, or om/transact! or om/update! to update the cursor

(def app-state (atom {:apps []}))

;; Dispatcher handlers
;; Handle UI events as they come in - update the UI and sync to the server
;;
;; Note: a bit awkward here - need to make sure you call vec on the result
;; of conj/filter or a cursor won't be made from the result

(dispatcher/stream :clear-deactivated (fn [{:keys [apps]}]
  (om/transact! apps (fn [a] (vec (filter active? a))))))

(dispatcher/stream :create (fn [{:keys [url apps]}]
  (om/transact! apps (fn [a] (vec (conj a {"url" url "active" true}))))))

(dispatcher/stream :update-status (fn [{:keys [active app]}]
  (om/transact! app (fn [a] (assoc a "active" active)))))
