// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.synch');
goog.require('cljs.core');
goog.require('redeyes.util');
goog.require('redeyes.dispatcher');
goog.require('redeyes.api');
goog.require('redeyes.store');
goog.require('om.core');
redeyes.synch.fetch_data = (function fetch_data(){

return redeyes.api.fetch_data.call(null,redeyes.store.app_state);
});
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),(function (p__23954){
var map__23955 = p__23954;
var map__23955__$1 = ((cljs.core.seq_QMARK_.call(null,map__23955))?cljs.core.apply.call(null,cljs.core.hash_map,map__23955):map__23955);
var apps = cljs.core.get.call(null,map__23955__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return redeyes.api.clear_deactivated.call(null,redeyes.synch.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (p__23956){
var map__23957 = p__23956;
var map__23957__$1 = ((cljs.core.seq_QMARK_.call(null,map__23957))?cljs.core.apply.call(null,cljs.core.hash_map,map__23957):map__23957);
var apps = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
var url = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"url","url",276297046));
return redeyes.api.submit_new_app.call(null,url,redeyes.synch.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),(function (p__23958){
var map__23959 = p__23958;
var map__23959__$1 = ((cljs.core.seq_QMARK_.call(null,map__23959))?cljs.core.apply.call(null,cljs.core.hash_map,map__23959):map__23959);
var apps = cljs.core.get.call(null,map__23959__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return redeyes.api.wake_all.call(null,((function (map__23959,map__23959__$1,apps){
return (function (){
return redeyes.synch.fetch_data.call(null);
});})(map__23959,map__23959__$1,apps))
);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),(function (p__23960){
var map__23961 = p__23960;
var map__23961__$1 = ((cljs.core.seq_QMARK_.call(null,map__23961))?cljs.core.apply.call(null,cljs.core.hash_map,map__23961):map__23961);
var app = cljs.core.get.call(null,map__23961__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var active = cljs.core.get.call(null,map__23961__$1,new cljs.core.Keyword(null,"active","active",1895962068));
if(cljs.core.truth_(active)){
return redeyes.api.persist_active_status.call(null,cljs.core.deref.call(null,app));
} else {
return redeyes.api.persist_inactive_status.call(null,cljs.core.deref.call(null,app));
}
}));
