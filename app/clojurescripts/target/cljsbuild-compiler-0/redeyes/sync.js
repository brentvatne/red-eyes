// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.sync');
goog.require('cljs.core');
goog.require('redeyes.util');
goog.require('redeyes.dispatcher');
goog.require('redeyes.api');
goog.require('redeyes.store');
goog.require('om.core');
redeyes.sync.fetch_data = (function fetch_data(){

return redeyes.api.fetch_data.call(null,redeyes.store.app_state);
});
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),(function (p__25451){
var map__25452 = p__25451;
var map__25452__$1 = ((cljs.core.seq_QMARK_.call(null,map__25452))?cljs.core.apply.call(null,cljs.core.hash_map,map__25452):map__25452);
var apps = cljs.core.get.call(null,map__25452__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return redeyes.api.clear_deactivated.call(null,redeyes.sync.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (p__25453){
var map__25454 = p__25453;
var map__25454__$1 = ((cljs.core.seq_QMARK_.call(null,map__25454))?cljs.core.apply.call(null,cljs.core.hash_map,map__25454):map__25454);
var apps = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
var url = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"url","url",276297046));
return redeyes.api.submit_new_app.call(null,url,redeyes.sync.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),(function (p__25455){
var map__25456 = p__25455;
var map__25456__$1 = ((cljs.core.seq_QMARK_.call(null,map__25456))?cljs.core.apply.call(null,cljs.core.hash_map,map__25456):map__25456);
var apps = cljs.core.get.call(null,map__25456__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return redeyes.api.wake_all.call(null,redeyes.sync.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),(function (p__25457){
var map__25458 = p__25457;
var map__25458__$1 = ((cljs.core.seq_QMARK_.call(null,map__25458))?cljs.core.apply.call(null,cljs.core.hash_map,map__25458):map__25458);
var app = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var active = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"active","active",1895962068));
if(cljs.core.truth_(active)){
return redeyes.api.persist_active_status.call(null,cljs.core.deref.call(null,app));
} else {
return redeyes.api.persist_inactive_status.call(null,cljs.core.deref.call(null,app));
}
}));
