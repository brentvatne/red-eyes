// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__17265__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__17265 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__17265__delegate.call(this,m,k,f,x1,x2,xs);};
G__17265.cljs$lang$maxFixedArity = 5;
G__17265.cljs$lang$applyTo = (function (arglist__17266){
var m = cljs.core.first(arglist__17266);
arglist__17266 = cljs.core.next(arglist__17266);
var k = cljs.core.first(arglist__17266);
arglist__17266 = cljs.core.next(arglist__17266);
var f = cljs.core.first(arglist__17266);
arglist__17266 = cljs.core.next(arglist__17266);
var x1 = cljs.core.first(arglist__17266);
arglist__17266 = cljs.core.next(arglist__17266);
var x2 = cljs.core.first(arglist__17266);
var xs = cljs.core.rest(arglist__17266);
return G__17265__delegate(m,k,f,x1,x2,xs);
});
G__17265.cljs$core$IFn$_invoke$arity$variadic = G__17265__delegate;
return G__17265;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__9387__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17275_17281 = cljs.core.seq.call(null,m);
var chunk__17276_17282 = null;
var count__17277_17283 = (0);
var i__17278_17284 = (0);
while(true){
if((i__17278_17284 < count__17277_17283)){
var vec__17279_17285 = cljs.core._nth.call(null,chunk__17276_17282,i__17278_17284);
var k_17286 = cljs.core.nth.call(null,vec__17279_17285,(0),null);
var v_17287 = cljs.core.nth.call(null,vec__17279_17285,(1),null);
var m17274_17288 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17274_17288,k_17286,f.call(null,v_17287)));

var G__17289 = seq__17275_17281;
var G__17290 = chunk__17276_17282;
var G__17291 = count__17277_17283;
var G__17292 = (i__17278_17284 + (1));
seq__17275_17281 = G__17289;
chunk__17276_17282 = G__17290;
count__17277_17283 = G__17291;
i__17278_17284 = G__17292;
continue;
} else {
var temp__4126__auto___17293 = cljs.core.seq.call(null,seq__17275_17281);
if(temp__4126__auto___17293){
var seq__17275_17294__$1 = temp__4126__auto___17293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17275_17294__$1)){
var c__4425__auto___17295 = cljs.core.chunk_first.call(null,seq__17275_17294__$1);
var G__17296 = cljs.core.chunk_rest.call(null,seq__17275_17294__$1);
var G__17297 = c__4425__auto___17295;
var G__17298 = cljs.core.count.call(null,c__4425__auto___17295);
var G__17299 = (0);
seq__17275_17281 = G__17296;
chunk__17276_17282 = G__17297;
count__17277_17283 = G__17298;
i__17278_17284 = G__17299;
continue;
} else {
var vec__17280_17300 = cljs.core.first.call(null,seq__17275_17294__$1);
var k_17301 = cljs.core.nth.call(null,vec__17280_17300,(0),null);
var v_17302 = cljs.core.nth.call(null,vec__17280_17300,(1),null);
var m17274_17303 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17274_17303,k_17301,f.call(null,v_17302)));

var G__17304 = cljs.core.next.call(null,seq__17275_17294__$1);
var G__17305 = null;
var G__17306 = (0);
var G__17307 = (0);
seq__17275_17281 = G__17304;
chunk__17276_17282 = G__17305;
count__17277_17283 = G__17306;
i__17278_17284 = G__17307;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9387__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__9387__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17316_17322 = cljs.core.seq.call(null,m);
var chunk__17317_17323 = null;
var count__17318_17324 = (0);
var i__17319_17325 = (0);
while(true){
if((i__17319_17325 < count__17318_17324)){
var vec__17320_17326 = cljs.core._nth.call(null,chunk__17317_17323,i__17319_17325);
var k_17327 = cljs.core.nth.call(null,vec__17320_17326,(0),null);
var v_17328 = cljs.core.nth.call(null,vec__17320_17326,(1),null);
var m17315_17329 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17315_17329,f.call(null,k_17327),v_17328));

var G__17330 = seq__17316_17322;
var G__17331 = chunk__17317_17323;
var G__17332 = count__17318_17324;
var G__17333 = (i__17319_17325 + (1));
seq__17316_17322 = G__17330;
chunk__17317_17323 = G__17331;
count__17318_17324 = G__17332;
i__17319_17325 = G__17333;
continue;
} else {
var temp__4126__auto___17334 = cljs.core.seq.call(null,seq__17316_17322);
if(temp__4126__auto___17334){
var seq__17316_17335__$1 = temp__4126__auto___17334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17316_17335__$1)){
var c__4425__auto___17336 = cljs.core.chunk_first.call(null,seq__17316_17335__$1);
var G__17337 = cljs.core.chunk_rest.call(null,seq__17316_17335__$1);
var G__17338 = c__4425__auto___17336;
var G__17339 = cljs.core.count.call(null,c__4425__auto___17336);
var G__17340 = (0);
seq__17316_17322 = G__17337;
chunk__17317_17323 = G__17338;
count__17318_17324 = G__17339;
i__17319_17325 = G__17340;
continue;
} else {
var vec__17321_17341 = cljs.core.first.call(null,seq__17316_17335__$1);
var k_17342 = cljs.core.nth.call(null,vec__17321_17341,(0),null);
var v_17343 = cljs.core.nth.call(null,vec__17321_17341,(1),null);
var m17315_17344 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17315_17344,f.call(null,k_17342),v_17343));

var G__17345 = cljs.core.next.call(null,seq__17316_17335__$1);
var G__17346 = null;
var G__17347 = (0);
var G__17348 = (0);
seq__17316_17322 = G__17345;
chunk__17317_17323 = G__17346;
count__17318_17324 = G__17347;
i__17319_17325 = G__17348;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9387__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__9387__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17355_17359 = cljs.core.seq.call(null,ks);
var chunk__17356_17360 = null;
var count__17357_17361 = (0);
var i__17358_17362 = (0);
while(true){
if((i__17358_17362 < count__17357_17361)){
var k_17363 = cljs.core._nth.call(null,chunk__17356_17360,i__17358_17362);
var m17354_17364 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17354_17364,k_17363,f.call(null,k_17363)));

var G__17365 = seq__17355_17359;
var G__17366 = chunk__17356_17360;
var G__17367 = count__17357_17361;
var G__17368 = (i__17358_17362 + (1));
seq__17355_17359 = G__17365;
chunk__17356_17360 = G__17366;
count__17357_17361 = G__17367;
i__17358_17362 = G__17368;
continue;
} else {
var temp__4126__auto___17369 = cljs.core.seq.call(null,seq__17355_17359);
if(temp__4126__auto___17369){
var seq__17355_17370__$1 = temp__4126__auto___17369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17355_17370__$1)){
var c__4425__auto___17371 = cljs.core.chunk_first.call(null,seq__17355_17370__$1);
var G__17372 = cljs.core.chunk_rest.call(null,seq__17355_17370__$1);
var G__17373 = c__4425__auto___17371;
var G__17374 = cljs.core.count.call(null,c__4425__auto___17371);
var G__17375 = (0);
seq__17355_17359 = G__17372;
chunk__17356_17360 = G__17373;
count__17357_17361 = G__17374;
i__17358_17362 = G__17375;
continue;
} else {
var k_17376 = cljs.core.first.call(null,seq__17355_17370__$1);
var m17354_17377 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17354_17377,k_17376,f.call(null,k_17376)));

var G__17378 = cljs.core.next.call(null,seq__17355_17370__$1);
var G__17379 = null;
var G__17380 = (0);
var G__17381 = (0);
seq__17355_17359 = G__17378;
chunk__17356_17360 = G__17379;
count__17357_17361 = G__17380;
i__17358_17362 = G__17381;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9387__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__9387__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17388_17392 = cljs.core.seq.call(null,vs);
var chunk__17389_17393 = null;
var count__17390_17394 = (0);
var i__17391_17395 = (0);
while(true){
if((i__17391_17395 < count__17390_17394)){
var v_17396 = cljs.core._nth.call(null,chunk__17389_17393,i__17391_17395);
var m17387_17397 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17387_17397,f.call(null,v_17396),v_17396));

var G__17398 = seq__17388_17392;
var G__17399 = chunk__17389_17393;
var G__17400 = count__17390_17394;
var G__17401 = (i__17391_17395 + (1));
seq__17388_17392 = G__17398;
chunk__17389_17393 = G__17399;
count__17390_17394 = G__17400;
i__17391_17395 = G__17401;
continue;
} else {
var temp__4126__auto___17402 = cljs.core.seq.call(null,seq__17388_17392);
if(temp__4126__auto___17402){
var seq__17388_17403__$1 = temp__4126__auto___17402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17388_17403__$1)){
var c__4425__auto___17404 = cljs.core.chunk_first.call(null,seq__17388_17403__$1);
var G__17405 = cljs.core.chunk_rest.call(null,seq__17388_17403__$1);
var G__17406 = c__4425__auto___17404;
var G__17407 = cljs.core.count.call(null,c__4425__auto___17404);
var G__17408 = (0);
seq__17388_17392 = G__17405;
chunk__17389_17393 = G__17406;
count__17390_17394 = G__17407;
i__17391_17395 = G__17408;
continue;
} else {
var v_17409 = cljs.core.first.call(null,seq__17388_17403__$1);
var m17387_17410 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17387_17410,f.call(null,v_17409),v_17409));

var G__17411 = cljs.core.next.call(null,seq__17388_17403__$1);
var G__17412 = null;
var G__17413 = (0);
var G__17414 = (0);
seq__17388_17392 = G__17411;
chunk__17389_17393 = G__17412;
count__17390_17394 = G__17413;
i__17391_17395 = G__17414;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9387__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__17415){
var vec__17417 = p__17415;
var k = cljs.core.nth.call(null,vec__17417,(0),null);
var ks = cljs.core.nthnext.call(null,vec__17417,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3626__auto__ = ks;
if(and__3626__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__3626__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__9387__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17426_17432 = cljs.core.seq.call(null,x);
var chunk__17427_17433 = null;
var count__17428_17434 = (0);
var i__17429_17435 = (0);
while(true){
if((i__17429_17435 < count__17428_17434)){
var vec__17430_17436 = cljs.core._nth.call(null,chunk__17427_17433,i__17429_17435);
var k_17437 = cljs.core.nth.call(null,vec__17430_17436,(0),null);
var v_17438 = cljs.core.nth.call(null,vec__17430_17436,(1),null);
var m17425_17439 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17425_17439,((typeof k_17437 === 'string')?cljs.core.keyword.call(null,k_17437):k_17437),keywordize_map.call(null,v_17438)));

var G__17440 = seq__17426_17432;
var G__17441 = chunk__17427_17433;
var G__17442 = count__17428_17434;
var G__17443 = (i__17429_17435 + (1));
seq__17426_17432 = G__17440;
chunk__17427_17433 = G__17441;
count__17428_17434 = G__17442;
i__17429_17435 = G__17443;
continue;
} else {
var temp__4126__auto___17444 = cljs.core.seq.call(null,seq__17426_17432);
if(temp__4126__auto___17444){
var seq__17426_17445__$1 = temp__4126__auto___17444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17426_17445__$1)){
var c__4425__auto___17446 = cljs.core.chunk_first.call(null,seq__17426_17445__$1);
var G__17447 = cljs.core.chunk_rest.call(null,seq__17426_17445__$1);
var G__17448 = c__4425__auto___17446;
var G__17449 = cljs.core.count.call(null,c__4425__auto___17446);
var G__17450 = (0);
seq__17426_17432 = G__17447;
chunk__17427_17433 = G__17448;
count__17428_17434 = G__17449;
i__17429_17435 = G__17450;
continue;
} else {
var vec__17431_17451 = cljs.core.first.call(null,seq__17426_17445__$1);
var k_17452 = cljs.core.nth.call(null,vec__17431_17451,(0),null);
var v_17453 = cljs.core.nth.call(null,vec__17431_17451,(1),null);
var m17425_17454 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m17425_17454,((typeof k_17452 === 'string')?cljs.core.keyword.call(null,k_17452):k_17452),keywordize_map.call(null,v_17453)));

var G__17455 = cljs.core.next.call(null,seq__17426_17445__$1);
var G__17456 = null;
var G__17457 = (0);
var G__17458 = (0);
seq__17426_17432 = G__17455;
chunk__17427_17433 = G__17456;
count__17428_17434 = G__17457;
i__17429_17435 = G__17458;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9387__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__9456__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__9456__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__17459 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__17460 = cljs.core.next.call(null,ks);
m = G__17459;
ks = G__17460;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3638__auto__ = m;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4394__auto__ = (function iter__17469(s__17470){
return (new cljs.core.LazySeq(null,(function (){
var s__17470__$1 = s__17470;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17470__$1);
if(temp__4126__auto__){
var s__17470__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17470__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__17470__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__17472 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__17471 = (0);
while(true){
if((i__17471 < size__4393__auto__)){
var vec__17475 = cljs.core._nth.call(null,c__4392__auto__,i__17471);
var k = cljs.core.nth.call(null,vec__17475,(0),null);
var v = cljs.core.nth.call(null,vec__17475,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__17472,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__17477 = (i__17471 + (1));
i__17471 = G__17477;
continue;
} else {
var G__17478 = (i__17471 + (1));
i__17471 = G__17478;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17472),iter__17469.call(null,cljs.core.chunk_rest.call(null,s__17470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17472),null);
}
} else {
var vec__17476 = cljs.core.first.call(null,s__17470__$2);
var k = cljs.core.nth.call(null,vec__17476,(0),null);
var v = cljs.core.nth.call(null,vec__17476,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__17469.call(null,cljs.core.rest.call(null,s__17470__$2)));
} else {
var G__17479 = cljs.core.rest.call(null,s__17470__$2);
s__17470__$1 = G__17479;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__17480){
var m = cljs.core.first(arglist__17480);
var kvs = cljs.core.rest(arglist__17480);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__17481){
var m = cljs.core.first(arglist__17481);
arglist__17481 = cljs.core.next(arglist__17481);
var key_seq = cljs.core.first(arglist__17481);
arglist__17481 = cljs.core.next(arglist__17481);
var f = cljs.core.first(arglist__17481);
var args = cljs.core.rest(arglist__17481);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4394__auto__ = ((function (s){
return (function iter__17486(s__17487){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__17487__$1 = s__17487;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17487__$1);
if(temp__4126__auto__){
var s__17487__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17487__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__17487__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__17489 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__17488 = (0);
while(true){
if((i__17488 < size__4393__auto__)){
var x = cljs.core._nth.call(null,c__4392__auto__,i__17488);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__17489,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__17490 = (i__17488 + (1));
i__17488 = G__17490;
continue;
} else {
var G__17491 = (i__17488 + (1));
i__17488 = G__17491;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17489),iter__17486.call(null,cljs.core.chunk_rest.call(null,s__17487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17489),null);
}
} else {
var x = cljs.core.first.call(null,s__17487__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__17486.call(null,cljs.core.rest.call(null,s__17487__$2)));
} else {
var G__17492 = cljs.core.rest.call(null,s__17487__$2);
s__17487__$1 = G__17492;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4394__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__17493){
var colls = cljs.core.seq(arglist__17493);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__17494__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__17495 = conj_when.call(null,coll,x);
var G__17496 = cljs.core.first.call(null,xs);
var G__17497 = cljs.core.next.call(null,xs);
coll = G__17495;
x = G__17496;
xs = G__17497;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__17494 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17494__delegate.call(this,coll,x,xs);};
G__17494.cljs$lang$maxFixedArity = 2;
G__17494.cljs$lang$applyTo = (function (arglist__17498){
var coll = cljs.core.first(arglist__17498);
arglist__17498 = cljs.core.next(arglist__17498);
var x = cljs.core.first(arglist__17498);
var xs = cljs.core.rest(arglist__17498);
return G__17494__delegate(coll,x,xs);
});
G__17494.cljs$core$IFn$_invoke$arity$variadic = G__17494__delegate;
return G__17494;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__17500__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__17499_SHARP_){
return cljs.core.apply.call(null,f,p1__17499_SHARP_,args);
}));
};
var G__17500 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17500__delegate.call(this,a,f,args);};
G__17500.cljs$lang$maxFixedArity = 2;
G__17500.cljs$lang$applyTo = (function (arglist__17501){
var a = cljs.core.first(arglist__17501);
arglist__17501 = cljs.core.next(arglist__17501);
var f = cljs.core.first(arglist__17501);
var args = cljs.core.rest(arglist__17501);
return G__17500__delegate(a,f,args);
});
G__17500.cljs$core$IFn$_invoke$arity$variadic = G__17500__delegate;
return G__17500;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__17502__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__17502 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17502__delegate.call(this,f,arg,args);};
G__17502.cljs$lang$maxFixedArity = 2;
G__17502.cljs$lang$applyTo = (function (arglist__17503){
var f = cljs.core.first(arglist__17503);
arglist__17503 = cljs.core.next(arglist__17503);
var arg = cljs.core.first(arglist__17503);
var args = cljs.core.rest(arglist__17503);
return G__17502__delegate(f,arg,args);
});
G__17502.cljs$core$IFn$_invoke$arity$variadic = G__17502__delegate;
return G__17502;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
