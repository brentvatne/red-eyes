(ns redeyes.undo)

(defn add-undo [app-state]
  (def app-history (atom [@app-state]))

  (add-watch app-state :history
    (fn [_ _ _ n]
      (when-not (= (last @app-history) n)
        (swap! app-history conj n))))

  (aset js/window "undo"
    (fn [e]
      (when (> (count @app-history) 1)
        (swap! app-history pop)
        (reset! app-state (last @app-history))))))
