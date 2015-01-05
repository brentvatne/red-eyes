(defproject redeyes-frontend "1.0.0"
  :description "redeyes frontend"
  :url "http://github.com/brentvatne/red-eyes"

  :source-paths ["src"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [com.facebook/react "0.11.2"]
                 [riddley "0.1.7"]
                 [om "0.7.3"]
                 [prismatic/om-tools "0.3.10"]
                 [jayq "2.5.2"]
                 [org.clojure/clojurescript "0.0-2511" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [leiningen "2.5.0"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [com.cemerick/clojurescript.test "0.3.3"]]

  :cljsbuild {:builds {:app {:source-paths ["src"]
                             :compiler {:output-to     "build/main.js"
                                        :externs       ["react/externs/react.js"]
                                        :optimizations :simple
                                        :pretty-print  true}}
                       :test {:source-paths ["src" "test"]
                              :compiler {:output-to     "build/test.js"
                                         :externs       ["react/externs/react.js"]
                                         :optimizations :simple
                                         :pretty-print  true}}}

              :test-commands {"unit" ["phantomjs"
                                      "test/runner.js"
                                      "test/runner.html"]}})
