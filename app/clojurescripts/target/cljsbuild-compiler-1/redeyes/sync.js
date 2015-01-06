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
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),(function (p__26136){
var map__26137 = p__26136;
var map__26137__$1 = ((cljs.core.seq_QMARK_.call(null,map__26137))?cljs.core.apply.call(null,cljs.core.hash_map,map__26137):map__26137);
var apps = cljs.core.get.call(null,map__26137__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return redeyes.api.clear_deactivated.call(null);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (p__26138){
var map__26139 = p__26138;
var map__26139__$1 = ((cljs.core.seq_QMARK_.call(null,map__26139))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var apps = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
var url = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"url","url",276297046));
return redeyes.api.submit_new_app.call(null,url,redeyes.sync.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),(function (p__26140){
var map__26141 = p__26140;
var map__26141__$1 = ((cljs.core.seq_QMARK_.call(null,map__26141))?cljs.core.apply.call(null,cljs.core.hash_map,map__26141):map__26141);
var apps = cljs.core.get.call(null,map__26141__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return redeyes.api.wake_all.call(null,redeyes.sync.fetch_data);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),(function (p__26142){
var map__26143 = p__26142;
var map__26143__$1 = ((cljs.core.seq_QMARK_.call(null,map__26143))?cljs.core.apply.call(null,cljs.core.hash_map,map__26143):map__26143);
var app = cljs.core.get.call(null,map__26143__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var active = cljs.core.get.call(null,map__26143__$1,new cljs.core.Keyword(null,"active","active",1895962068));
if(cljs.core.truth_(active)){
return redeyes.api.persist_active_status.call(null,cljs.core.deref.call(null,app));
} else {
return redeyes.api.persist_inactive_status.call(null,cljs.core.deref.call(null,app));
}
}));
