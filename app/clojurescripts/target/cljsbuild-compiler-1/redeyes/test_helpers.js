// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.test_helpers');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('jayq.core');
console.log("hi");
redeyes.test_helpers.om__GT_$ = (function om__GT_$(c,opts){
return jayq.core.$.call(null,om.dom.render_to_str.call(null,om.core.build.call(null,c,opts)));
});
