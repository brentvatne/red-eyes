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
var G__17332__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__17332 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__17332__delegate.call(this,m,k,f,x1,x2,xs);};
G__17332.cljs$lang$maxFixedArity = 5;
G__17332.cljs$lang$applyTo = (function (arglist__17333){
var m = cljs.core.first(arglist__17333);
arglist__17333 = cljs.core.next(arglist__17333);
var k = cljs.core.first(arglist__17333);
arglist__17333 = cljs.core.next(arglist__17333);
var f = cljs.core.first(arglist__17333);
arglist__17333 = cljs.core.next(arglist__17333);
var x1 = cljs.core.first(arglist__17333);
arglist__17333 = cljs.core.next(arglist__17333);
var x2 = cljs.core.first(arglist__17333);
var xs = cljs.core.rest(arglist__17333);
return G__17332__delegate(m,k,f,x1,x2,xs);
});
G__17332.cljs$core$IFn$_invoke$arity$variadic = G__17332__delegate;
return G__17332;
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
var m_atom__9549__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17342_17348 = cljs.core.seq.call(null,m);
var chunk__17343_17349 = null;
var count__17344_17350 = (0);
var i__17345_17351 = (0);
while(true){
if((i__17345_17351 < count__17344_17350)){
var vec__17346_17352 = cljs.core._nth.call(null,chunk__17343_17349,i__17345_17351);
var k_17353 = cljs.core.nth.call(null,vec__17346_17352,(0),null);
var v_17354 = cljs.core.nth.call(null,vec__17346_17352,(1),null);
var m17341_17355 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17341_17355,k_17353,f.call(null,v_17354)));

var G__17356 = seq__17342_17348;
var G__17357 = chunk__17343_17349;
var G__17358 = count__17344_17350;
var G__17359 = (i__17345_17351 + (1));
seq__17342_17348 = G__17356;
chunk__17343_17349 = G__17357;
count__17344_17350 = G__17358;
i__17345_17351 = G__17359;
continue;
} else {
var temp__4126__auto___17360 = cljs.core.seq.call(null,seq__17342_17348);
if(temp__4126__auto___17360){
var seq__17342_17361__$1 = temp__4126__auto___17360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17342_17361__$1)){
var c__4423__auto___17362 = cljs.core.chunk_first.call(null,seq__17342_17361__$1);
var G__17363 = cljs.core.chunk_rest.call(null,seq__17342_17361__$1);
var G__17364 = c__4423__auto___17362;
var G__17365 = cljs.core.count.call(null,c__4423__auto___17362);
var G__17366 = (0);
seq__17342_17348 = G__17363;
chunk__17343_17349 = G__17364;
count__17344_17350 = G__17365;
i__17345_17351 = G__17366;
continue;
} else {
var vec__17347_17367 = cljs.core.first.call(null,seq__17342_17361__$1);
var k_17368 = cljs.core.nth.call(null,vec__17347_17367,(0),null);
var v_17369 = cljs.core.nth.call(null,vec__17347_17367,(1),null);
var m17341_17370 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17341_17370,k_17368,f.call(null,v_17369)));

var G__17371 = cljs.core.next.call(null,seq__17342_17361__$1);
var G__17372 = null;
var G__17373 = (0);
var G__17374 = (0);
seq__17342_17348 = G__17371;
chunk__17343_17349 = G__17372;
count__17344_17350 = G__17373;
i__17345_17351 = G__17374;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9549__auto__));

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
var m_atom__9549__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17383_17389 = cljs.core.seq.call(null,m);
var chunk__17384_17390 = null;
var count__17385_17391 = (0);
var i__17386_17392 = (0);
while(true){
if((i__17386_17392 < count__17385_17391)){
var vec__17387_17393 = cljs.core._nth.call(null,chunk__17384_17390,i__17386_17392);
var k_17394 = cljs.core.nth.call(null,vec__17387_17393,(0),null);
var v_17395 = cljs.core.nth.call(null,vec__17387_17393,(1),null);
var m17382_17396 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17382_17396,f.call(null,k_17394),v_17395));

var G__17397 = seq__17383_17389;
var G__17398 = chunk__17384_17390;
var G__17399 = count__17385_17391;
var G__17400 = (i__17386_17392 + (1));
seq__17383_17389 = G__17397;
chunk__17384_17390 = G__17398;
count__17385_17391 = G__17399;
i__17386_17392 = G__17400;
continue;
} else {
var temp__4126__auto___17401 = cljs.core.seq.call(null,seq__17383_17389);
if(temp__4126__auto___17401){
var seq__17383_17402__$1 = temp__4126__auto___17401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17383_17402__$1)){
var c__4423__auto___17403 = cljs.core.chunk_first.call(null,seq__17383_17402__$1);
var G__17404 = cljs.core.chunk_rest.call(null,seq__17383_17402__$1);
var G__17405 = c__4423__auto___17403;
var G__17406 = cljs.core.count.call(null,c__4423__auto___17403);
var G__17407 = (0);
seq__17383_17389 = G__17404;
chunk__17384_17390 = G__17405;
count__17385_17391 = G__17406;
i__17386_17392 = G__17407;
continue;
} else {
var vec__17388_17408 = cljs.core.first.call(null,seq__17383_17402__$1);
var k_17409 = cljs.core.nth.call(null,vec__17388_17408,(0),null);
var v_17410 = cljs.core.nth.call(null,vec__17388_17408,(1),null);
var m17382_17411 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17382_17411,f.call(null,k_17409),v_17410));

var G__17412 = cljs.core.next.call(null,seq__17383_17402__$1);
var G__17413 = null;
var G__17414 = (0);
var G__17415 = (0);
seq__17383_17389 = G__17412;
chunk__17384_17390 = G__17413;
count__17385_17391 = G__17414;
i__17386_17392 = G__17415;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9549__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__9549__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17422_17426 = cljs.core.seq.call(null,ks);
var chunk__17423_17427 = null;
var count__17424_17428 = (0);
var i__17425_17429 = (0);
while(true){
if((i__17425_17429 < count__17424_17428)){
var k_17430 = cljs.core._nth.call(null,chunk__17423_17427,i__17425_17429);
var m17421_17431 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17421_17431,k_17430,f.call(null,k_17430)));

var G__17432 = seq__17422_17426;
var G__17433 = chunk__17423_17427;
var G__17434 = count__17424_17428;
var G__17435 = (i__17425_17429 + (1));
seq__17422_17426 = G__17432;
chunk__17423_17427 = G__17433;
count__17424_17428 = G__17434;
i__17425_17429 = G__17435;
continue;
} else {
var temp__4126__auto___17436 = cljs.core.seq.call(null,seq__17422_17426);
if(temp__4126__auto___17436){
var seq__17422_17437__$1 = temp__4126__auto___17436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17422_17437__$1)){
var c__4423__auto___17438 = cljs.core.chunk_first.call(null,seq__17422_17437__$1);
var G__17439 = cljs.core.chunk_rest.call(null,seq__17422_17437__$1);
var G__17440 = c__4423__auto___17438;
var G__17441 = cljs.core.count.call(null,c__4423__auto___17438);
var G__17442 = (0);
seq__17422_17426 = G__17439;
chunk__17423_17427 = G__17440;
count__17424_17428 = G__17441;
i__17425_17429 = G__17442;
continue;
} else {
var k_17443 = cljs.core.first.call(null,seq__17422_17437__$1);
var m17421_17444 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17421_17444,k_17443,f.call(null,k_17443)));

var G__17445 = cljs.core.next.call(null,seq__17422_17437__$1);
var G__17446 = null;
var G__17447 = (0);
var G__17448 = (0);
seq__17422_17426 = G__17445;
chunk__17423_17427 = G__17446;
count__17424_17428 = G__17447;
i__17425_17429 = G__17448;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9549__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__9549__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17455_17459 = cljs.core.seq.call(null,vs);
var chunk__17456_17460 = null;
var count__17457_17461 = (0);
var i__17458_17462 = (0);
while(true){
if((i__17458_17462 < count__17457_17461)){
var v_17463 = cljs.core._nth.call(null,chunk__17456_17460,i__17458_17462);
var m17454_17464 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17454_17464,f.call(null,v_17463),v_17463));

var G__17465 = seq__17455_17459;
var G__17466 = chunk__17456_17460;
var G__17467 = count__17457_17461;
var G__17468 = (i__17458_17462 + (1));
seq__17455_17459 = G__17465;
chunk__17456_17460 = G__17466;
count__17457_17461 = G__17467;
i__17458_17462 = G__17468;
continue;
} else {
var temp__4126__auto___17469 = cljs.core.seq.call(null,seq__17455_17459);
if(temp__4126__auto___17469){
var seq__17455_17470__$1 = temp__4126__auto___17469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17455_17470__$1)){
var c__4423__auto___17471 = cljs.core.chunk_first.call(null,seq__17455_17470__$1);
var G__17472 = cljs.core.chunk_rest.call(null,seq__17455_17470__$1);
var G__17473 = c__4423__auto___17471;
var G__17474 = cljs.core.count.call(null,c__4423__auto___17471);
var G__17475 = (0);
seq__17455_17459 = G__17472;
chunk__17456_17460 = G__17473;
count__17457_17461 = G__17474;
i__17458_17462 = G__17475;
continue;
} else {
var v_17476 = cljs.core.first.call(null,seq__17455_17470__$1);
var m17454_17477 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17454_17477,f.call(null,v_17476),v_17476));

var G__17478 = cljs.core.next.call(null,seq__17455_17470__$1);
var G__17479 = null;
var G__17480 = (0);
var G__17481 = (0);
seq__17455_17459 = G__17478;
chunk__17456_17460 = G__17479;
count__17457_17461 = G__17480;
i__17458_17462 = G__17481;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9549__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__17482){
var vec__17484 = p__17482;
var k = cljs.core.nth.call(null,vec__17484,(0),null);
var ks = cljs.core.nthnext.call(null,vec__17484,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3624__auto__ = ks;
if(and__3624__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__3624__auto__;
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
var m_atom__9549__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__17493_17499 = cljs.core.seq.call(null,x);
var chunk__17494_17500 = null;
var count__17495_17501 = (0);
var i__17496_17502 = (0);
while(true){
if((i__17496_17502 < count__17495_17501)){
var vec__17497_17503 = cljs.core._nth.call(null,chunk__17494_17500,i__17496_17502);
var k_17504 = cljs.core.nth.call(null,vec__17497_17503,(0),null);
var v_17505 = cljs.core.nth.call(null,vec__17497_17503,(1),null);
var m17492_17506 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17492_17506,((typeof k_17504 === 'string')?cljs.core.keyword.call(null,k_17504):k_17504),keywordize_map.call(null,v_17505)));

var G__17507 = seq__17493_17499;
var G__17508 = chunk__17494_17500;
var G__17509 = count__17495_17501;
var G__17510 = (i__17496_17502 + (1));
seq__17493_17499 = G__17507;
chunk__17494_17500 = G__17508;
count__17495_17501 = G__17509;
i__17496_17502 = G__17510;
continue;
} else {
var temp__4126__auto___17511 = cljs.core.seq.call(null,seq__17493_17499);
if(temp__4126__auto___17511){
var seq__17493_17512__$1 = temp__4126__auto___17511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17493_17512__$1)){
var c__4423__auto___17513 = cljs.core.chunk_first.call(null,seq__17493_17512__$1);
var G__17514 = cljs.core.chunk_rest.call(null,seq__17493_17512__$1);
var G__17515 = c__4423__auto___17513;
var G__17516 = cljs.core.count.call(null,c__4423__auto___17513);
var G__17517 = (0);
seq__17493_17499 = G__17514;
chunk__17494_17500 = G__17515;
count__17495_17501 = G__17516;
i__17496_17502 = G__17517;
continue;
} else {
var vec__17498_17518 = cljs.core.first.call(null,seq__17493_17512__$1);
var k_17519 = cljs.core.nth.call(null,vec__17498_17518,(0),null);
var v_17520 = cljs.core.nth.call(null,vec__17498_17518,(1),null);
var m17492_17521 = cljs.core.deref.call(null,m_atom__9549__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9549__auto__,cljs.core.assoc_BANG_.call(null,m17492_17521,((typeof k_17519 === 'string')?cljs.core.keyword.call(null,k_17519):k_17519),keywordize_map.call(null,v_17520)));

var G__17522 = cljs.core.next.call(null,seq__17493_17512__$1);
var G__17523 = null;
var G__17524 = (0);
var G__17525 = (0);
seq__17493_17499 = G__17522;
chunk__17494_17500 = G__17523;
count__17495_17501 = G__17524;
i__17496_17502 = G__17525;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9549__auto__));
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
var pair__9618__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__9618__auto__);
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
var G__17526 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__17527 = cljs.core.next.call(null,ks);
m = G__17526;
ks = G__17527;
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

return cljs.core.into.call(null,(function (){var or__3636__auto__ = m;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4392__auto__ = (function iter__17536(s__17537){
return (new cljs.core.LazySeq(null,(function (){
var s__17537__$1 = s__17537;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17537__$1);
if(temp__4126__auto__){
var s__17537__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17537__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__17537__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__17539 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__17538 = (0);
while(true){
if((i__17538 < size__4391__auto__)){
var vec__17542 = cljs.core._nth.call(null,c__4390__auto__,i__17538);
var k = cljs.core.nth.call(null,vec__17542,(0),null);
var v = cljs.core.nth.call(null,vec__17542,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__17539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__17544 = (i__17538 + (1));
i__17538 = G__17544;
continue;
} else {
var G__17545 = (i__17538 + (1));
i__17538 = G__17545;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17539),iter__17536.call(null,cljs.core.chunk_rest.call(null,s__17537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17539),null);
}
} else {
var vec__17543 = cljs.core.first.call(null,s__17537__$2);
var k = cljs.core.nth.call(null,vec__17543,(0),null);
var v = cljs.core.nth.call(null,vec__17543,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__17536.call(null,cljs.core.rest.call(null,s__17537__$2)));
} else {
var G__17546 = cljs.core.rest.call(null,s__17537__$2);
s__17537__$1 = G__17546;
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
return iter__4392__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__17547){
var m = cljs.core.first(arglist__17547);
var kvs = cljs.core.rest(arglist__17547);
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
update_in_when.cljs$lang$applyTo = (function (arglist__17548){
var m = cljs.core.first(arglist__17548);
arglist__17548 = cljs.core.next(arglist__17548);
var key_seq = cljs.core.first(arglist__17548);
arglist__17548 = cljs.core.next(arglist__17548);
var f = cljs.core.first(arglist__17548);
var args = cljs.core.rest(arglist__17548);
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
var iter__4392__auto__ = ((function (s){
return (function iter__17553(s__17554){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__17554__$1 = s__17554;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17554__$1);
if(temp__4126__auto__){
var s__17554__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17554__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__17554__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__17556 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__17555 = (0);
while(true){
if((i__17555 < size__4391__auto__)){
var x = cljs.core._nth.call(null,c__4390__auto__,i__17555);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__17556,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__17557 = (i__17555 + (1));
i__17555 = G__17557;
continue;
} else {
var G__17558 = (i__17555 + (1));
i__17555 = G__17558;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17556),iter__17553.call(null,cljs.core.chunk_rest.call(null,s__17554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17556),null);
}
} else {
var x = cljs.core.first.call(null,s__17554__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__17553.call(null,cljs.core.rest.call(null,s__17554__$2)));
} else {
var G__17559 = cljs.core.rest.call(null,s__17554__$2);
s__17554__$1 = G__17559;
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
return iter__4392__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__17560){
var colls = cljs.core.seq(arglist__17560);
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
var G__17561__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__17562 = conj_when.call(null,coll,x);
var G__17563 = cljs.core.first.call(null,xs);
var G__17564 = cljs.core.next.call(null,xs);
coll = G__17562;
x = G__17563;
xs = G__17564;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__17561 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17561__delegate.call(this,coll,x,xs);};
G__17561.cljs$lang$maxFixedArity = 2;
G__17561.cljs$lang$applyTo = (function (arglist__17565){
var coll = cljs.core.first(arglist__17565);
arglist__17565 = cljs.core.next(arglist__17565);
var x = cljs.core.first(arglist__17565);
var xs = cljs.core.rest(arglist__17565);
return G__17561__delegate(coll,x,xs);
});
G__17561.cljs$core$IFn$_invoke$arity$variadic = G__17561__delegate;
return G__17561;
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
var G__17567__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__17566_SHARP_){
return cljs.core.apply.call(null,f,p1__17566_SHARP_,args);
}));
};
var G__17567 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17567__delegate.call(this,a,f,args);};
G__17567.cljs$lang$maxFixedArity = 2;
G__17567.cljs$lang$applyTo = (function (arglist__17568){
var a = cljs.core.first(arglist__17568);
arglist__17568 = cljs.core.next(arglist__17568);
var f = cljs.core.first(arglist__17568);
var args = cljs.core.rest(arglist__17568);
return G__17567__delegate(a,f,args);
});
G__17567.cljs$core$IFn$_invoke$arity$variadic = G__17567__delegate;
return G__17567;
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
var G__17569__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__17569 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17569__delegate.call(this,f,arg,args);};
G__17569.cljs$lang$maxFixedArity = 2;
G__17569.cljs$lang$applyTo = (function (arglist__17570){
var f = cljs.core.first(arglist__17570);
arglist__17570 = cljs.core.next(arglist__17570);
var arg = cljs.core.first(arglist__17570);
var args = cljs.core.rest(arglist__17570);
return G__17569__delegate(f,arg,args);
});
G__17569.cljs$core$IFn$_invoke$arity$variadic = G__17569__delegate;
return G__17569;
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
