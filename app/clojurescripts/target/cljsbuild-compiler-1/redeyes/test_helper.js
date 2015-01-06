// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.test_helper');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('jayq.core');
redeyes.test_helper.test_container = cljs.core.first.call(null,jayq.core.$.call(null,"<div id='testing'></div>"));
/**
* Builds the given component by initializing it with jQuery based on the
* om.dom/render-to-str html string output.
*/
redeyes.test_helper.om__GT_$ = (function om__GT_$(c,opts){
return jayq.core.$.call(null,om.dom.render_to_str.call(null,om.core.build.call(null,c,opts)));
});
/**
* Builds the given component as the root, so that the state does not need
* to be passed in derefed. Returns a jQuery object that contains the
* component.
*/
redeyes.test_helper.om_root__GT_$ = (function om_root__GT_$(c,opts){
om.core.root.call(null,c,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),redeyes.test_helper.test_container], null));

return jayq.core.$.call(null,redeyes.test_helper.test_container);
});
