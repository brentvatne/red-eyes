// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.api');
goog.require('cljs.core');
goog.require('om.core');
goog.require('jayq.core');
redeyes.api.base_url = "/sleepy_apps";
redeyes.api.fetch_data = (function fetch_data(data){
return jayq.core.ajax.call(null,redeyes.api.base_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"success","success",1890645906),(function (new_data){
return om.core.update_BANG_.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apps","apps",844744865)], null),cljs.core.js__GT_clj.call(null,new_data));
})], null));
});
redeyes.api.persist_active_status = (function persist_active_status(app){
return jayq.core.ajax.call(null,[cljs.core.str(redeyes.api.base_url),cljs.core.str("/"),cljs.core.str(cljs.core.get.call(null,app,"id")),cljs.core.str("/activate")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"method","method",55703592),"post"], null));
});
redeyes.api.persist_inactive_status = (function persist_inactive_status(app){
return jayq.core.ajax.call(null,[cljs.core.str(redeyes.api.base_url),cljs.core.str("/"),cljs.core.str(cljs.core.get.call(null,app,"id")),cljs.core.str("/deactivate")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"method","method",55703592),"post"], null));
});
redeyes.api.wake_all = (function wake_all(callback){
return jayq.core.ajax.call(null,[cljs.core.str(redeyes.api.base_url),cljs.core.str("/wake_all")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"method","method",55703592),"get",new cljs.core.Keyword(null,"success","success",1890645906),(function (){
return callback.call(null);
})], null));
});
redeyes.api.clear_deactivated = (function clear_deactivated(callback){
return jayq.core.ajax.call(null,[cljs.core.str(redeyes.api.base_url),cljs.core.str("/clear_deactivated")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"success","success",1890645906),(function (){
return callback.call(null);
})], null));
});
redeyes.api.submit_new_app = (function submit_new_app(url,callback){
return jayq.core.ajax.call(null,redeyes.api.base_url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null),new cljs.core.Keyword(null,"success","success",1890645906),(function (){
return callback.call(null);
})], null));
});
