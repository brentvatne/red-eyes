// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.core.test');
goog.require('cljs.core');
goog.require('redeyes.core');
goog.require('cemerick.cljs.test');
goog.require('redeyes.test_helper');
goog.require('om.dom');
goog.require('om.core');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
redeyes.core.test.app_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["url","http://www.brentvatne.ca","active",true], null),new cljs.core.PersistentArrayMap(null, 2, ["url","http://www.madriska.com","active",true], null),new cljs.core.PersistentArrayMap(null, 2, ["url","http://www.google.com","active",false], null)], null));
cljs.core.println.call(null,redeyes.test_helper.om_root__GT_$.call(null,redeyes.core.sleepy_app_list,redeyes.core.test.app_state).text());
cljs.core.println.call(null,redeyes.test_helper.om__GT_$.call(null,redeyes.core.sleepy_app_list,cljs.core.deref.call(null,redeyes.core.test.app_state)).text());
cemerick.cljs.test.run_tests_STAR_.call(null,new cljs.core.Symbol(null,"redeyes.core.test","redeyes.core.test",1887249744,null));
