// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.store');
goog.require('cljs.core');
goog.require('redeyes.util');
goog.require('redeyes.dispatcher');
goog.require('redeyes.api');
goog.require('om.core');
redeyes.store.app_state = (function (){var G__36854 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36854) : cljs.core.atom.call(null,G__36854));
})();
redeyes.dispatcher.stream(cljs.core.constant$keyword$112,(function (p__36855){
var map__36856 = p__36855;
var map__36856__$1 = ((cljs.core.seq_QMARK_(map__36856))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36856):map__36856);
var apps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36856__$1,cljs.core.constant$keyword$66);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(apps,((function (map__36856,map__36856__$1,apps){
return (function (a){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(redeyes.util.active_QMARK_,a));
});})(map__36856,map__36856__$1,apps))
);
}));
redeyes.dispatcher.stream(cljs.core.constant$keyword$103,(function (p__36857){
var map__36858 = p__36857;
var map__36858__$1 = ((cljs.core.seq_QMARK_(map__36858))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36858):map__36858);
var apps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36858__$1,cljs.core.constant$keyword$66);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36858__$1,cljs.core.constant$keyword$68);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(apps,((function (map__36858,map__36858__$1,apps,url){
return (function (a){
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentArrayMap(null, 2, ["url",url,"active",true], null)));
});})(map__36858,map__36858__$1,apps,url))
);
}));
redeyes.dispatcher.stream(cljs.core.constant$keyword$108,(function (p__36859){
var map__36860 = p__36859;
var map__36860__$1 = ((cljs.core.seq_QMARK_(map__36860))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36860):map__36860);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36860__$1,cljs.core.constant$keyword$109);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36860__$1,cljs.core.constant$keyword$110);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,((function (map__36860,map__36860__$1,app,active){
return (function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,"active",active);
});})(map__36860,map__36860__$1,app,active))
);
}));
