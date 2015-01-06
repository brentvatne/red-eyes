// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.store');
goog.require('cljs.core');
goog.require('redeyes.util');
goog.require('redeyes.dispatcher');
goog.require('redeyes.api');
goog.require('om.core');
redeyes.store.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),cljs.core.PersistentVector.EMPTY], null));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),(function (p__23117){
var map__23118 = p__23117;
var map__23118__$1 = ((cljs.core.seq_QMARK_.call(null,map__23118))?cljs.core.apply.call(null,cljs.core.hash_map,map__23118):map__23118);
var apps = cljs.core.get.call(null,map__23118__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
om.core.update_BANG_.call(null,apps,cljs.core.filter.call(null,redeyes.util.active_QMARK_,cljs.core.deref.call(null,apps)));

return redeyes.api.clear_deactivated.call(null,redeyes.store.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (p__23119){
var map__23120 = p__23119;
var map__23120__$1 = ((cljs.core.seq_QMARK_.call(null,map__23120))?cljs.core.apply.call(null,cljs.core.hash_map,map__23120):map__23120);
var apps = cljs.core.get.call(null,map__23120__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
var url = cljs.core.get.call(null,map__23120__$1,new cljs.core.Keyword(null,"url","url",276297046));
om.core.update_BANG_.call(null,apps,cljs.core.conj.call(null,cljs.core.deref.call(null,apps),new cljs.core.PersistentArrayMap(null, 2, ["url",url,"active",true], null)));

return redeyes.api.submit_new_app.call(null,url,redeyes.store.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),(function (p__23121){
var map__23122 = p__23121;
var map__23122__$1 = ((cljs.core.seq_QMARK_.call(null,map__23122))?cljs.core.apply.call(null,cljs.core.hash_map,map__23122):map__23122);
var apps = cljs.core.get.call(null,map__23122__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return redeyes.api.wake_all.call(null,((function (map__23122,map__23122__$1,apps){
return (function (){
return redeyes.store.fetch_data.call(null);
});})(map__23122,map__23122__$1,apps))
);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),(function (p__23123){
var map__23124 = p__23123;
var map__23124__$1 = ((cljs.core.seq_QMARK_.call(null,map__23124))?cljs.core.apply.call(null,cljs.core.hash_map,map__23124):map__23124);
var app = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var active = cljs.core.get.call(null,map__23124__$1,new cljs.core.Keyword(null,"active","active",1895962068));
om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null),active);

if(cljs.core.truth_(active)){
return redeyes.api.persist_active_status.call(null,cljs.core.deref.call(null,app));
} else {
return redeyes.api.persist_inactive_status.call(null,cljs.core.deref.call(null,app));
}
}));
