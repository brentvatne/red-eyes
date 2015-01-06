// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.sync');
goog.require('cljs.core');
goog.require('redeyes.util');
goog.require('redeyes.dispatcher');
goog.require('redeyes.api');
goog.require('redeyes.store');
goog.require('om.core');
redeyes.sync.fetch_data = (function fetch_data(){

return redeyes.api.fetch_data(redeyes.store.app_state);
});
redeyes.dispatcher.stream(cljs.core.constant$keyword$112,(function (p__20500){
var map__20501 = p__20500;
var map__20501__$1 = ((cljs.core.seq_QMARK_(map__20501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20501):map__20501);
var apps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20501__$1,cljs.core.constant$keyword$66);
return redeyes.api.clear_deactivated();
}));
redeyes.dispatcher.stream(cljs.core.constant$keyword$103,(function (p__20502){
var map__20503 = p__20502;
var map__20503__$1 = ((cljs.core.seq_QMARK_(map__20503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20503):map__20503);
var apps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20503__$1,cljs.core.constant$keyword$66);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20503__$1,cljs.core.constant$keyword$68);
return redeyes.api.submit_new_app(url,redeyes.sync.fetch_data);
}));
redeyes.dispatcher.stream(cljs.core.constant$keyword$111,(function (p__20504){
var map__20505 = p__20504;
var map__20505__$1 = ((cljs.core.seq_QMARK_(map__20505))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20505):map__20505);
var apps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505__$1,cljs.core.constant$keyword$66);
return redeyes.api.wake_all(redeyes.sync.fetch_data);
}));
redeyes.dispatcher.stream(cljs.core.constant$keyword$108,(function (p__20506){
var map__20507 = p__20506;
var map__20507__$1 = ((cljs.core.seq_QMARK_(map__20507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20507):map__20507);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20507__$1,cljs.core.constant$keyword$109);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20507__$1,cljs.core.constant$keyword$110);
if(cljs.core.truth_(active)){
return redeyes.api.persist_active_status((function (){var G__20508 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20508) : cljs.core.deref.call(null,G__20508));
})());
} else {
return redeyes.api.persist_inactive_status((function (){var G__20509 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20509) : cljs.core.deref.call(null,G__20509));
})());
}
}));
