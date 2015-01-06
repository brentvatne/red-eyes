// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.api');
goog.require('cljs.core');
goog.require('om.core');
goog.require('jayq.core');
redeyes.api.base_url = "/sleepy_apps";
redeyes.api.fetch_data = (function fetch_data(data){
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2(redeyes.api.base_url,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$65,"json",cljs.core.constant$keyword$31,(function (new_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,cljs.core.constant$keyword$66,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new_data));
})], null));
});
redeyes.api.persist_active_status = (function persist_active_status(app){
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2([cljs.core.str(redeyes.api.base_url),cljs.core.str("/"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app,"id")),cljs.core.str("/activate")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$65,"json",cljs.core.constant$keyword$67,"post"], null));
});
redeyes.api.persist_inactive_status = (function persist_inactive_status(app){
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2([cljs.core.str(redeyes.api.base_url),cljs.core.str("/"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app,"id")),cljs.core.str("/deactivate")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$65,"json",cljs.core.constant$keyword$67,"post"], null));
});
redeyes.api.wake_all = (function wake_all(callback){
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2([cljs.core.str(redeyes.api.base_url),cljs.core.str("/wake_all")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$65,"json",cljs.core.constant$keyword$67,"get",cljs.core.constant$keyword$31,(function (){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
})], null));
});
redeyes.api.clear_deactivated = (function clear_deactivated(){
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2([cljs.core.str(redeyes.api.base_url),cljs.core.str("/clear_deactivated")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$65,"json",cljs.core.constant$keyword$67,"post"], null));
});
redeyes.api.submit_new_app = (function submit_new_app(url,callback){
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2(redeyes.api.base_url,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,"json",cljs.core.constant$keyword$67,"post",cljs.core.constant$keyword$29,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,url], null),cljs.core.constant$keyword$31,(function (){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
})], null));
});
