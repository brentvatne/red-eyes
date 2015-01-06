(ns redeyes.dispatcher
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :as async :refer [chan put! pub sub unsub <!]]))

(let [dispatch-chan (chan)
      dispatch-pub (pub dispatch-chan (fn [data] (first data)))]

  (defn register [tag]
    (sub dispatch-pub tag (chan)))

  (defn unregister [tag chan]
    (unsub dispatch-pub tag chan))

  (defn dispatch! [tag options]
    (put! dispatch-chan [tag options]))

  (defn stream [tag handler]
    (let [this-chan (register tag)]
      (go-loop []
        (let [data (<! this-chan)]
          (handler (last data)))
        (recur)))))
