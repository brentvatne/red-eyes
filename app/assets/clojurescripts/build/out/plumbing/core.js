// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$102;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28367) : f.call(null,G__28367));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28369 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28368,G__28369) : f.call(null,G__28368,G__28369));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28371 = x1;
var G__28372 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28370,G__28371,G__28372) : f.call(null,G__28370,G__28371,G__28372));
})());
});
var update__6 = (function() { 
var G__28373__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__28373 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__28373__delegate.call(this,m,k,f,x1,x2,xs);};
G__28373.cljs$lang$maxFixedArity = 5;
G__28373.cljs$lang$applyTo = (function (arglist__28374){
var m = cljs.core.first(arglist__28374);
arglist__28374 = cljs.core.next(arglist__28374);
var k = cljs.core.first(arglist__28374);
arglist__28374 = cljs.core.next(arglist__28374);
var f = cljs.core.first(arglist__28374);
arglist__28374 = cljs.core.next(arglist__28374);
var x1 = cljs.core.first(arglist__28374);
arglist__28374 = cljs.core.next(arglist__28374);
var x2 = cljs.core.first(arglist__28374);
var xs = cljs.core.rest(arglist__28374);
return G__28373__delegate(m,k,f,x1,x2,xs);
});
G__28373.cljs$core$IFn$_invoke$arity$variadic = G__28373__delegate;
return G__28373;
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
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__28394 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28394) : f.call(null,G__28394));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__28395 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28395) : f.call(null,G__28395));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14485__auto__ = (function (){var G__28397 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28397) : cljs.core.atom.call(null,G__28397));
})();
var seq__28398_28413 = cljs.core.seq(m);
var chunk__28399_28414 = null;
var count__28400_28415 = (0);
var i__28401_28416 = (0);
while(true){
if((i__28401_28416 < count__28400_28415)){
var vec__28402_28417 = chunk__28399_28414.cljs$core$IIndexed$_nth$arity$2(null,i__28401_28416);
var k_28418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28402_28417,(0),null);
var v_28419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28402_28417,(1),null);
var m28396_28420 = (function (){var G__28403 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28403) : cljs.core.deref.call(null,G__28403));
})();
var G__28404_28421 = m_atom__14485__auto__;
var G__28405_28422 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28396_28420,k_28418,(function (){var G__28406 = v_28419;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28406) : f.call(null,G__28406));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28404_28421,G__28405_28422) : cljs.core.reset_BANG_.call(null,G__28404_28421,G__28405_28422));

var G__28423 = seq__28398_28413;
var G__28424 = chunk__28399_28414;
var G__28425 = count__28400_28415;
var G__28426 = (i__28401_28416 + (1));
seq__28398_28413 = G__28423;
chunk__28399_28414 = G__28424;
count__28400_28415 = G__28425;
i__28401_28416 = G__28426;
continue;
} else {
var temp__4126__auto___28427 = cljs.core.seq(seq__28398_28413);
if(temp__4126__auto___28427){
var seq__28398_28428__$1 = temp__4126__auto___28427;
if(cljs.core.chunked_seq_QMARK_(seq__28398_28428__$1)){
var c__4423__auto___28429 = cljs.core.chunk_first(seq__28398_28428__$1);
var G__28430 = cljs.core.chunk_rest(seq__28398_28428__$1);
var G__28431 = c__4423__auto___28429;
var G__28432 = cljs.core.count(c__4423__auto___28429);
var G__28433 = (0);
seq__28398_28413 = G__28430;
chunk__28399_28414 = G__28431;
count__28400_28415 = G__28432;
i__28401_28416 = G__28433;
continue;
} else {
var vec__28407_28434 = cljs.core.first(seq__28398_28428__$1);
var k_28435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407_28434,(0),null);
var v_28436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407_28434,(1),null);
var m28396_28437 = (function (){var G__28408 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28408) : cljs.core.deref.call(null,G__28408));
})();
var G__28409_28438 = m_atom__14485__auto__;
var G__28410_28439 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28396_28437,k_28435,(function (){var G__28411 = v_28436;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28411) : f.call(null,G__28411));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28409_28438,G__28410_28439) : cljs.core.reset_BANG_.call(null,G__28409_28438,G__28410_28439));

var G__28440 = cljs.core.next(seq__28398_28428__$1);
var G__28441 = null;
var G__28442 = (0);
var G__28443 = (0);
seq__28398_28413 = G__28440;
chunk__28399_28414 = G__28441;
count__28400_28415 = G__28442;
i__28401_28416 = G__28443;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__28412 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28412) : cljs.core.deref.call(null,G__28412));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__28462 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28462) : f.call(null,G__28462));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14485__auto__ = (function (){var G__28464 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28464) : cljs.core.atom.call(null,G__28464));
})();
var seq__28465_28480 = cljs.core.seq(m);
var chunk__28466_28481 = null;
var count__28467_28482 = (0);
var i__28468_28483 = (0);
while(true){
if((i__28468_28483 < count__28467_28482)){
var vec__28469_28484 = chunk__28466_28481.cljs$core$IIndexed$_nth$arity$2(null,i__28468_28483);
var k_28485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28469_28484,(0),null);
var v_28486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28469_28484,(1),null);
var m28463_28487 = (function (){var G__28470 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28470) : cljs.core.deref.call(null,G__28470));
})();
var G__28471_28488 = m_atom__14485__auto__;
var G__28472_28489 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28463_28487,(function (){var G__28473 = k_28485;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28473) : f.call(null,G__28473));
})(),v_28486);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28471_28488,G__28472_28489) : cljs.core.reset_BANG_.call(null,G__28471_28488,G__28472_28489));

var G__28490 = seq__28465_28480;
var G__28491 = chunk__28466_28481;
var G__28492 = count__28467_28482;
var G__28493 = (i__28468_28483 + (1));
seq__28465_28480 = G__28490;
chunk__28466_28481 = G__28491;
count__28467_28482 = G__28492;
i__28468_28483 = G__28493;
continue;
} else {
var temp__4126__auto___28494 = cljs.core.seq(seq__28465_28480);
if(temp__4126__auto___28494){
var seq__28465_28495__$1 = temp__4126__auto___28494;
if(cljs.core.chunked_seq_QMARK_(seq__28465_28495__$1)){
var c__4423__auto___28496 = cljs.core.chunk_first(seq__28465_28495__$1);
var G__28497 = cljs.core.chunk_rest(seq__28465_28495__$1);
var G__28498 = c__4423__auto___28496;
var G__28499 = cljs.core.count(c__4423__auto___28496);
var G__28500 = (0);
seq__28465_28480 = G__28497;
chunk__28466_28481 = G__28498;
count__28467_28482 = G__28499;
i__28468_28483 = G__28500;
continue;
} else {
var vec__28474_28501 = cljs.core.first(seq__28465_28495__$1);
var k_28502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474_28501,(0),null);
var v_28503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474_28501,(1),null);
var m28463_28504 = (function (){var G__28475 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28475) : cljs.core.deref.call(null,G__28475));
})();
var G__28476_28505 = m_atom__14485__auto__;
var G__28477_28506 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28463_28504,(function (){var G__28478 = k_28502;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28478) : f.call(null,G__28478));
})(),v_28503);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28476_28505,G__28477_28506) : cljs.core.reset_BANG_.call(null,G__28476_28505,G__28477_28506));

var G__28507 = cljs.core.next(seq__28465_28495__$1);
var G__28508 = null;
var G__28509 = (0);
var G__28510 = (0);
seq__28465_28480 = G__28507;
chunk__28466_28481 = G__28508;
count__28467_28482 = G__28509;
i__28468_28483 = G__28510;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__28479 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28479) : cljs.core.deref.call(null,G__28479));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14485__auto__ = (function (){var G__28527 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28527) : cljs.core.atom.call(null,G__28527));
})();
var seq__28528_28541 = cljs.core.seq(ks);
var chunk__28529_28542 = null;
var count__28530_28543 = (0);
var i__28531_28544 = (0);
while(true){
if((i__28531_28544 < count__28530_28543)){
var k_28545 = chunk__28529_28542.cljs$core$IIndexed$_nth$arity$2(null,i__28531_28544);
var m28526_28546 = (function (){var G__28532 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28532) : cljs.core.deref.call(null,G__28532));
})();
var G__28533_28547 = m_atom__14485__auto__;
var G__28534_28548 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28526_28546,k_28545,(function (){var G__28535 = k_28545;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28535) : f.call(null,G__28535));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28533_28547,G__28534_28548) : cljs.core.reset_BANG_.call(null,G__28533_28547,G__28534_28548));

var G__28549 = seq__28528_28541;
var G__28550 = chunk__28529_28542;
var G__28551 = count__28530_28543;
var G__28552 = (i__28531_28544 + (1));
seq__28528_28541 = G__28549;
chunk__28529_28542 = G__28550;
count__28530_28543 = G__28551;
i__28531_28544 = G__28552;
continue;
} else {
var temp__4126__auto___28553 = cljs.core.seq(seq__28528_28541);
if(temp__4126__auto___28553){
var seq__28528_28554__$1 = temp__4126__auto___28553;
if(cljs.core.chunked_seq_QMARK_(seq__28528_28554__$1)){
var c__4423__auto___28555 = cljs.core.chunk_first(seq__28528_28554__$1);
var G__28556 = cljs.core.chunk_rest(seq__28528_28554__$1);
var G__28557 = c__4423__auto___28555;
var G__28558 = cljs.core.count(c__4423__auto___28555);
var G__28559 = (0);
seq__28528_28541 = G__28556;
chunk__28529_28542 = G__28557;
count__28530_28543 = G__28558;
i__28531_28544 = G__28559;
continue;
} else {
var k_28560 = cljs.core.first(seq__28528_28554__$1);
var m28526_28561 = (function (){var G__28536 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28536) : cljs.core.deref.call(null,G__28536));
})();
var G__28537_28562 = m_atom__14485__auto__;
var G__28538_28563 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28526_28561,k_28560,(function (){var G__28539 = k_28560;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28539) : f.call(null,G__28539));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28537_28562,G__28538_28563) : cljs.core.reset_BANG_.call(null,G__28537_28562,G__28538_28563));

var G__28564 = cljs.core.next(seq__28528_28554__$1);
var G__28565 = null;
var G__28566 = (0);
var G__28567 = (0);
seq__28528_28541 = G__28564;
chunk__28529_28542 = G__28565;
count__28530_28543 = G__28566;
i__28531_28544 = G__28567;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__28540 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28540) : cljs.core.deref.call(null,G__28540));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14485__auto__ = (function (){var G__28584 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28584) : cljs.core.atom.call(null,G__28584));
})();
var seq__28585_28598 = cljs.core.seq(vs);
var chunk__28586_28599 = null;
var count__28587_28600 = (0);
var i__28588_28601 = (0);
while(true){
if((i__28588_28601 < count__28587_28600)){
var v_28602 = chunk__28586_28599.cljs$core$IIndexed$_nth$arity$2(null,i__28588_28601);
var m28583_28603 = (function (){var G__28589 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28589) : cljs.core.deref.call(null,G__28589));
})();
var G__28590_28604 = m_atom__14485__auto__;
var G__28591_28605 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28583_28603,(function (){var G__28592 = v_28602;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28592) : f.call(null,G__28592));
})(),v_28602);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28590_28604,G__28591_28605) : cljs.core.reset_BANG_.call(null,G__28590_28604,G__28591_28605));

var G__28606 = seq__28585_28598;
var G__28607 = chunk__28586_28599;
var G__28608 = count__28587_28600;
var G__28609 = (i__28588_28601 + (1));
seq__28585_28598 = G__28606;
chunk__28586_28599 = G__28607;
count__28587_28600 = G__28608;
i__28588_28601 = G__28609;
continue;
} else {
var temp__4126__auto___28610 = cljs.core.seq(seq__28585_28598);
if(temp__4126__auto___28610){
var seq__28585_28611__$1 = temp__4126__auto___28610;
if(cljs.core.chunked_seq_QMARK_(seq__28585_28611__$1)){
var c__4423__auto___28612 = cljs.core.chunk_first(seq__28585_28611__$1);
var G__28613 = cljs.core.chunk_rest(seq__28585_28611__$1);
var G__28614 = c__4423__auto___28612;
var G__28615 = cljs.core.count(c__4423__auto___28612);
var G__28616 = (0);
seq__28585_28598 = G__28613;
chunk__28586_28599 = G__28614;
count__28587_28600 = G__28615;
i__28588_28601 = G__28616;
continue;
} else {
var v_28617 = cljs.core.first(seq__28585_28611__$1);
var m28583_28618 = (function (){var G__28593 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28593) : cljs.core.deref.call(null,G__28593));
})();
var G__28594_28619 = m_atom__14485__auto__;
var G__28595_28620 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28583_28618,(function (){var G__28596 = v_28617;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28596) : f.call(null,G__28596));
})(),v_28617);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28594_28619,G__28595_28620) : cljs.core.reset_BANG_.call(null,G__28594_28619,G__28595_28620));

var G__28621 = cljs.core.next(seq__28585_28611__$1);
var G__28622 = null;
var G__28623 = (0);
var G__28624 = (0);
seq__28585_28598 = G__28621;
chunk__28586_28599 = G__28622;
count__28587_28600 = G__28623;
i__28588_28601 = G__28624;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__28597 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28597) : cljs.core.deref.call(null,G__28597));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__28625){
var vec__28631 = p__28625;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(0),null);
var ks = cljs.core.nthnext(vec__28631,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3624__auto__ = ks;
if(and__3624__auto__){
return dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__3624__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
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
if(cljs.core.map_QMARK_(x)){
var m_atom__14485__auto__ = (function (){var G__28650 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28650) : cljs.core.atom.call(null,G__28650));
})();
var seq__28651_28664 = cljs.core.seq(x);
var chunk__28652_28665 = null;
var count__28653_28666 = (0);
var i__28654_28667 = (0);
while(true){
if((i__28654_28667 < count__28653_28666)){
var vec__28655_28668 = chunk__28652_28665.cljs$core$IIndexed$_nth$arity$2(null,i__28654_28667);
var k_28669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28655_28668,(0),null);
var v_28670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28655_28668,(1),null);
var m28649_28671 = (function (){var G__28656 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28656) : cljs.core.deref.call(null,G__28656));
})();
var G__28657_28672 = m_atom__14485__auto__;
var G__28658_28673 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28649_28671,((typeof k_28669 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_28669):k_28669),keywordize_map(v_28670));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28657_28672,G__28658_28673) : cljs.core.reset_BANG_.call(null,G__28657_28672,G__28658_28673));

var G__28674 = seq__28651_28664;
var G__28675 = chunk__28652_28665;
var G__28676 = count__28653_28666;
var G__28677 = (i__28654_28667 + (1));
seq__28651_28664 = G__28674;
chunk__28652_28665 = G__28675;
count__28653_28666 = G__28676;
i__28654_28667 = G__28677;
continue;
} else {
var temp__4126__auto___28678 = cljs.core.seq(seq__28651_28664);
if(temp__4126__auto___28678){
var seq__28651_28679__$1 = temp__4126__auto___28678;
if(cljs.core.chunked_seq_QMARK_(seq__28651_28679__$1)){
var c__4423__auto___28680 = cljs.core.chunk_first(seq__28651_28679__$1);
var G__28681 = cljs.core.chunk_rest(seq__28651_28679__$1);
var G__28682 = c__4423__auto___28680;
var G__28683 = cljs.core.count(c__4423__auto___28680);
var G__28684 = (0);
seq__28651_28664 = G__28681;
chunk__28652_28665 = G__28682;
count__28653_28666 = G__28683;
i__28654_28667 = G__28684;
continue;
} else {
var vec__28659_28685 = cljs.core.first(seq__28651_28679__$1);
var k_28686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28659_28685,(0),null);
var v_28687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28659_28685,(1),null);
var m28649_28688 = (function (){var G__28660 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28660) : cljs.core.deref.call(null,G__28660));
})();
var G__28661_28689 = m_atom__14485__auto__;
var G__28662_28690 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m28649_28688,((typeof k_28686 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_28686):k_28686),keywordize_map(v_28687));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28661_28689,G__28662_28690) : cljs.core.reset_BANG_.call(null,G__28661_28689,G__28662_28690));

var G__28691 = cljs.core.next(seq__28651_28679__$1);
var G__28692 = null;
var G__28693 = (0);
var G__28694 = (0);
seq__28651_28664 = G__28691;
chunk__28652_28665 = G__28692;
count__28653_28666 = G__28693;
i__28654_28667 = G__28694;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__28663 = m_atom__14485__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28663) : cljs.core.deref.call(null,G__28663));
})());
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
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
var temp__4124__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__14554__auto__ = temp__4124__auto__;
return cljs.core.val(pair__14554__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__28695 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__28696 = cljs.core.next(ks);
m = G__28695;
ks = G__28696;
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
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3636__auto__ = m;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4392__auto__ = (function iter__28707(s__28708){
return (new cljs.core.LazySeq(null,(function (){
var s__28708__$1 = s__28708;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28708__$1);
if(temp__4126__auto__){
var s__28708__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28708__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28708__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28710 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28709 = (0);
while(true){
if((i__28709 < size__4391__auto__)){
var vec__28715 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28709);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28715,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28715,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__28710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__28717 = (i__28709 + (1));
i__28709 = G__28717;
continue;
} else {
var G__28718 = (i__28709 + (1));
i__28709 = G__28718;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28710),iter__28707(cljs.core.chunk_rest(s__28708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28710),null);
}
} else {
var vec__28716 = cljs.core.first(s__28708__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__28707(cljs.core.rest(s__28708__$2)));
} else {
var G__28719 = cljs.core.rest(s__28708__$2);
s__28708__$1 = G__28719;
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
return iter__4392__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__28720){
var m = cljs.core.first(arglist__28720);
var kvs = cljs.core.rest(arglist__28720);
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
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
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
update_in_when.cljs$lang$applyTo = (function (arglist__28721){
var m = cljs.core.first(arglist__28721);
arglist__28721 = cljs.core.next(arglist__28721);
var key_seq = cljs.core.first(arglist__28721);
arglist__28721 = cljs.core.next(arglist__28721);
var f = cljs.core.first(arglist__28721);
var args = cljs.core.rest(arglist__28721);
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
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__28724 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__28724) : key_fn.call(null,G__28724));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__28725 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__28725) : map_fn.call(null,G__28725));
})()));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next(s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat(n);
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
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return unchunk(cljs.core.rest(s));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
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
var temp__4126__auto__ = cljs.core.seq(xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((function (){var G__28729 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28729) : f.call(null,G__28729));
})())){
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
var s = (function (){var G__28745 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28745) : cljs.core.atom.call(null,G__28745));
})();
var iter__4392__auto__ = ((function (s){
return (function iter__28746(s__28747){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__28747__$1 = s__28747;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28747__$1);
if(temp__4126__auto__){
var s__28747__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28747__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28747__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28749 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28748 = (0);
while(true){
if((i__28748 < size__4391__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28748);
var id = (function (){var G__28756 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28756) : f.call(null,G__28756));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__28757 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28757) : cljs.core.deref.call(null,G__28757));
})(),id))){
cljs.core.chunk_append(b__28749,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__28760 = (i__28748 + (1));
i__28748 = G__28760;
continue;
} else {
var G__28761 = (i__28748 + (1));
i__28748 = G__28761;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28749),iter__28746(cljs.core.chunk_rest(s__28747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28749),null);
}
} else {
var x = cljs.core.first(s__28747__$2);
var id = (function (){var G__28758 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28758) : f.call(null,G__28758));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__28759 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28759) : cljs.core.deref.call(null,G__28759));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__28746(cljs.core.rest(s__28747__$2)));
} else {
var G__28762 = cljs.core.rest(s__28747__$2);
s__28747__$1 = G__28762;
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
return iter__4392__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__28765){
var colls = cljs.core.seq(arglist__28765);
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
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__28770__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__28771 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__28772 = cljs.core.first(xs);
var G__28773 = cljs.core.next(xs);
coll = G__28771;
x = G__28772;
xs = G__28773;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__28770 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28770__delegate.call(this,coll,x,xs);};
G__28770.cljs$lang$maxFixedArity = 2;
G__28770.cljs$lang$applyTo = (function (arglist__28774){
var coll = cljs.core.first(arglist__28774);
arglist__28774 = cljs.core.next(arglist__28774);
var x = cljs.core.first(arglist__28774);
var xs = cljs.core.rest(arglist__28774);
return G__28770__delegate(coll,x,xs);
});
G__28770.cljs$core$IFn$_invoke$arity$variadic = G__28770__delegate;
return G__28770;
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
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = (function (){var G__28780 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28780) : cljs.core.deref.call(null,G__28780));
})();
var new_val = (function (){var G__28781 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28781) : f.call(null,G__28781));
})();
if(cljs.core.compare_and_set_BANG_(a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__28782__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__28775_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__28775_SHARP_,args);
}));
};
var G__28782 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28782__delegate.call(this,a,f,args);};
G__28782.cljs$lang$maxFixedArity = 2;
G__28782.cljs$lang$applyTo = (function (arglist__28783){
var a = cljs.core.first(arglist__28783);
arglist__28783 = cljs.core.next(arglist__28783);
var f = cljs.core.first(arglist__28783);
var args = cljs.core.rest(arglist__28783);
return G__28782__delegate(a,f,args);
});
G__28782.cljs$core$IFn$_invoke$arity$variadic = G__28782__delegate;
return G__28782;
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
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__28784__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__28784 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28784__delegate.call(this,f,arg,args);};
G__28784.cljs$lang$maxFixedArity = 2;
G__28784.cljs$lang$applyTo = (function (arglist__28785){
var f = cljs.core.first(arglist__28785);
arglist__28785 = cljs.core.next(arglist__28785);
var arg = cljs.core.first(arglist__28785);
var args = cljs.core.rest(arglist__28785);
return G__28784__delegate(f,arg,args);
});
G__28784.cljs$core$IFn$_invoke$arity$variadic = G__28784__delegate;
return G__28784;
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
