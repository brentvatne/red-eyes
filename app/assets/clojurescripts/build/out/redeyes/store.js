// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.store');
goog.require('cljs.core');
goog.require('redeyes.util');
goog.require('redeyes.dispatcher');
goog.require('redeyes.api');
goog.require('om.core');
redeyes.store.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),cljs.core.PersistentVector.EMPTY], null));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),(function (p__26144){
var map__26145 = p__26144;
var map__26145__$1 = ((cljs.core.seq_QMARK_.call(null,map__26145))?cljs.core.apply.call(null,cljs.core.hash_map,map__26145):map__26145);
var apps = cljs.core.get.call(null,map__26145__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
return om.core.transact_BANG_.call(null,apps,((function (map__26145,map__26145__$1,apps){
return (function (a){
return cljs.core.vec.call(null,cljs.core.filter.call(null,redeyes.util.active_QMARK_,a));
});})(map__26145,map__26145__$1,apps))
);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (p__26146){
var map__26147 = p__26146;
var map__26147__$1 = ((cljs.core.seq_QMARK_.call(null,map__26147))?cljs.core.apply.call(null,cljs.core.hash_map,map__26147):map__26147);
var apps = cljs.core.get.call(null,map__26147__$1,new cljs.core.Keyword(null,"apps","apps",844744865));
var url = cljs.core.get.call(null,map__26147__$1,new cljs.core.Keyword(null,"url","url",276297046));
return om.core.transact_BANG_.call(null,apps,((function (map__26147,map__26147__$1,apps,url){
return (function (a){
return cljs.core.vec.call(null,cljs.core.conj.call(null,a,new cljs.core.PersistentArrayMap(null, 2, ["url",url,"active",true], null)));
});})(map__26147,map__26147__$1,apps,url))
);
}));
redeyes.dispatcher.stream.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),(function (p__26148){
var map__26149 = p__26148;
var map__26149__$1 = ((cljs.core.seq_QMARK_.call(null,map__26149))?cljs.core.apply.call(null,cljs.core.hash_map,map__26149):map__26149);
var app = cljs.core.get.call(null,map__26149__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var active = cljs.core.get.call(null,map__26149__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return om.core.transact_BANG_.call(null,app,((function (map__26149,map__26149__$1,app,active){
return (function (a){
return cljs.core.assoc.call(null,a,"active",active);
});})(map__26149,map__26149__$1,app,active))
);
}));
