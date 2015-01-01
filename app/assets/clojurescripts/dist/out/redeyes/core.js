// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('reagent.core');
redeyes.core.apps = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
redeyes.core.redeyes_app = (function redeyes_app(props){
jayq.core.ajax.call(null,"http://red-eyes.dev/sleepy_apps",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"success","success",1890645906),(function (data){
cljs.core.swap_BANG_.call(null,redeyes.core.apps,cljs.core.replace,data);

return console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,redeyes.core.apps)));
})], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,cljs.core.deref.call(null,redeyes.core.apps),(function (app){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),app.url()], null);
}))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.redeyes_app], null),document.getElementById("app"));
