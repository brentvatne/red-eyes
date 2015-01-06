(ns redeyes.sync
  (:require [om.core :as om]
            [redeyes.store :as store]
            [redeyes.api :as api]
            [redeyes.dispatcher :as dispatcher]
            [redeyes.util :refer [active? log log-clj]]))

(defn fetch-data []
  "Fetch the app state data from the server (just a list of apps) and update
  it, forcing a re-render. Used to init the app and update everything at
  various points."
  (api/fetch-data store/app-state))

(dispatcher/stream :clear-deactivated (fn [{:keys [apps]}]
  (api/clear-deactivated)))

(dispatcher/stream :create (fn [{:keys [url apps]}]
  (api/submit-new-app url fetch-data)))

(dispatcher/stream :wake-up-now (fn [{:keys [apps]}]
  (api/wake-all fetch-data)))

(dispatcher/stream :update-status (fn [{:keys [active app]}]
  (if active
    (api/persist-active-status @app)
    (api/persist-inactive-status @app))))
