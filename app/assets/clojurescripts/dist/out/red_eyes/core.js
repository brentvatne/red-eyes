// Compiled by ClojureScript 0.0-2511
goog.provide('red_eyes.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('reagent.core');
red_eyes.core.child = (function child(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hi, I am ",name], null);
});
red_eyes.core.childcaller = (function childcaller(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [red_eyes.core.child,"Brent"], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [red_eyes.core.childcaller], null),document.getElementById("app"));
