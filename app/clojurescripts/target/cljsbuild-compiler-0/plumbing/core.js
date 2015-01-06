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
var G__12891__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__12891 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12891__delegate.call(this,m,k,f,x1,x2,xs);};
G__12891.cljs$lang$maxFixedArity = 5;
G__12891.cljs$lang$applyTo = (function (arglist__12892){
var m = cljs.core.first(arglist__12892);
arglist__12892 = cljs.core.next(arglist__12892);
var k = cljs.core.first(arglist__12892);
arglist__12892 = cljs.core.next(arglist__12892);
var f = cljs.core.first(arglist__12892);
arglist__12892 = cljs.core.next(arglist__12892);
var x1 = cljs.core.first(arglist__12892);
arglist__12892 = cljs.core.next(arglist__12892);
var x2 = cljs.core.first(arglist__12892);
var xs = cljs.core.rest(arglist__12892);
return G__12891__delegate(m,k,f,x1,x2,xs);
});
G__12891.cljs$core$IFn$_invoke$arity$variadic = G__12891__delegate;
return G__12891;
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
var seq__12901_12907 = cljs.core.seq.call(null,m);
var chunk__12902_12908 = null;
var count__12903_12909 = (0);
var i__12904_12910 = (0);
while(true){
if((i__12904_12910 < count__12903_12909)){
var vec__12905_12911 = cljs.core._nth.call(null,chunk__12902_12908,i__12904_12910);
var k_12912 = cljs.core.nth.call(null,vec__12905_12911,(0),null);
var v_12913 = cljs.core.nth.call(null,vec__12905_12911,(1),null);
var m12900_12914 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m12900_12914,k_12912,f.call(null,v_12913)));

var G__12915 = seq__12901_12907;
var G__12916 = chunk__12902_12908;
var G__12917 = count__12903_12909;
var G__12918 = (i__12904_12910 + (1));
seq__12901_12907 = G__12915;
chunk__12902_12908 = G__12916;
count__12903_12909 = G__12917;
i__12904_12910 = G__12918;
continue;
} else {
var temp__4126__auto___12919 = cljs.core.seq.call(null,seq__12901_12907);
if(temp__4126__auto___12919){
var seq__12901_12920__$1 = temp__4126__auto___12919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12901_12920__$1)){
var c__4425__auto___12921 = cljs.core.chunk_first.call(null,seq__12901_12920__$1);
var G__12922 = cljs.core.chunk_rest.call(null,seq__12901_12920__$1);
var G__12923 = c__4425__auto___12921;
var G__12924 = cljs.core.count.call(null,c__4425__auto___12921);
var G__12925 = (0);
seq__12901_12907 = G__12922;
chunk__12902_12908 = G__12923;
count__12903_12909 = G__12924;
i__12904_12910 = G__12925;
continue;
} else {
var vec__12906_12926 = cljs.core.first.call(null,seq__12901_12920__$1);
var k_12927 = cljs.core.nth.call(null,vec__12906_12926,(0),null);
var v_12928 = cljs.core.nth.call(null,vec__12906_12926,(1),null);
var m12900_12929 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m12900_12929,k_12927,f.call(null,v_12928)));

var G__12930 = cljs.core.next.call(null,seq__12901_12920__$1);
var G__12931 = null;
var G__12932 = (0);
var G__12933 = (0);
seq__12901_12907 = G__12930;
chunk__12902_12908 = G__12931;
count__12903_12909 = G__12932;
i__12904_12910 = G__12933;
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
var seq__12942_12948 = cljs.core.seq.call(null,m);
var chunk__12943_12949 = null;
var count__12944_12950 = (0);
var i__12945_12951 = (0);
while(true){
if((i__12945_12951 < count__12944_12950)){
var vec__12946_12952 = cljs.core._nth.call(null,chunk__12943_12949,i__12945_12951);
var k_12953 = cljs.core.nth.call(null,vec__12946_12952,(0),null);
var v_12954 = cljs.core.nth.call(null,vec__12946_12952,(1),null);
var m12941_12955 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m12941_12955,f.call(null,k_12953),v_12954));

var G__12956 = seq__12942_12948;
var G__12957 = chunk__12943_12949;
var G__12958 = count__12944_12950;
var G__12959 = (i__12945_12951 + (1));
seq__12942_12948 = G__12956;
chunk__12943_12949 = G__12957;
count__12944_12950 = G__12958;
i__12945_12951 = G__12959;
continue;
} else {
var temp__4126__auto___12960 = cljs.core.seq.call(null,seq__12942_12948);
if(temp__4126__auto___12960){
var seq__12942_12961__$1 = temp__4126__auto___12960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12942_12961__$1)){
var c__4425__auto___12962 = cljs.core.chunk_first.call(null,seq__12942_12961__$1);
var G__12963 = cljs.core.chunk_rest.call(null,seq__12942_12961__$1);
var G__12964 = c__4425__auto___12962;
var G__12965 = cljs.core.count.call(null,c__4425__auto___12962);
var G__12966 = (0);
seq__12942_12948 = G__12963;
chunk__12943_12949 = G__12964;
count__12944_12950 = G__12965;
i__12945_12951 = G__12966;
continue;
} else {
var vec__12947_12967 = cljs.core.first.call(null,seq__12942_12961__$1);
var k_12968 = cljs.core.nth.call(null,vec__12947_12967,(0),null);
var v_12969 = cljs.core.nth.call(null,vec__12947_12967,(1),null);
var m12941_12970 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m12941_12970,f.call(null,k_12968),v_12969));

var G__12971 = cljs.core.next.call(null,seq__12942_12961__$1);
var G__12972 = null;
var G__12973 = (0);
var G__12974 = (0);
seq__12942_12948 = G__12971;
chunk__12943_12949 = G__12972;
count__12944_12950 = G__12973;
i__12945_12951 = G__12974;
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
var seq__12981_12985 = cljs.core.seq.call(null,ks);
var chunk__12982_12986 = null;
var count__12983_12987 = (0);
var i__12984_12988 = (0);
while(true){
if((i__12984_12988 < count__12983_12987)){
var k_12989 = cljs.core._nth.call(null,chunk__12982_12986,i__12984_12988);
var m12980_12990 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m12980_12990,k_12989,f.call(null,k_12989)));

var G__12991 = seq__12981_12985;
var G__12992 = chunk__12982_12986;
var G__12993 = count__12983_12987;
var G__12994 = (i__12984_12988 + (1));
seq__12981_12985 = G__12991;
chunk__12982_12986 = G__12992;
count__12983_12987 = G__12993;
i__12984_12988 = G__12994;
continue;
} else {
var temp__4126__auto___12995 = cljs.core.seq.call(null,seq__12981_12985);
if(temp__4126__auto___12995){
var seq__12981_12996__$1 = temp__4126__auto___12995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12981_12996__$1)){
var c__4425__auto___12997 = cljs.core.chunk_first.call(null,seq__12981_12996__$1);
var G__12998 = cljs.core.chunk_rest.call(null,seq__12981_12996__$1);
var G__12999 = c__4425__auto___12997;
var G__13000 = cljs.core.count.call(null,c__4425__auto___12997);
var G__13001 = (0);
seq__12981_12985 = G__12998;
chunk__12982_12986 = G__12999;
count__12983_12987 = G__13000;
i__12984_12988 = G__13001;
continue;
} else {
var k_13002 = cljs.core.first.call(null,seq__12981_12996__$1);
var m12980_13003 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m12980_13003,k_13002,f.call(null,k_13002)));

var G__13004 = cljs.core.next.call(null,seq__12981_12996__$1);
var G__13005 = null;
var G__13006 = (0);
var G__13007 = (0);
seq__12981_12985 = G__13004;
chunk__12982_12986 = G__13005;
count__12983_12987 = G__13006;
i__12984_12988 = G__13007;
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
var seq__13014_13018 = cljs.core.seq.call(null,vs);
var chunk__13015_13019 = null;
var count__13016_13020 = (0);
var i__13017_13021 = (0);
while(true){
if((i__13017_13021 < count__13016_13020)){
var v_13022 = cljs.core._nth.call(null,chunk__13015_13019,i__13017_13021);
var m13013_13023 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m13013_13023,f.call(null,v_13022),v_13022));

var G__13024 = seq__13014_13018;
var G__13025 = chunk__13015_13019;
var G__13026 = count__13016_13020;
var G__13027 = (i__13017_13021 + (1));
seq__13014_13018 = G__13024;
chunk__13015_13019 = G__13025;
count__13016_13020 = G__13026;
i__13017_13021 = G__13027;
continue;
} else {
var temp__4126__auto___13028 = cljs.core.seq.call(null,seq__13014_13018);
if(temp__4126__auto___13028){
var seq__13014_13029__$1 = temp__4126__auto___13028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13014_13029__$1)){
var c__4425__auto___13030 = cljs.core.chunk_first.call(null,seq__13014_13029__$1);
var G__13031 = cljs.core.chunk_rest.call(null,seq__13014_13029__$1);
var G__13032 = c__4425__auto___13030;
var G__13033 = cljs.core.count.call(null,c__4425__auto___13030);
var G__13034 = (0);
seq__13014_13018 = G__13031;
chunk__13015_13019 = G__13032;
count__13016_13020 = G__13033;
i__13017_13021 = G__13034;
continue;
} else {
var v_13035 = cljs.core.first.call(null,seq__13014_13029__$1);
var m13013_13036 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m13013_13036,f.call(null,v_13035),v_13035));

var G__13037 = cljs.core.next.call(null,seq__13014_13029__$1);
var G__13038 = null;
var G__13039 = (0);
var G__13040 = (0);
seq__13014_13018 = G__13037;
chunk__13015_13019 = G__13038;
count__13016_13020 = G__13039;
i__13017_13021 = G__13040;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__13041){
var vec__13043 = p__13041;
var k = cljs.core.nth.call(null,vec__13043,(0),null);
var ks = cljs.core.nthnext.call(null,vec__13043,(1));
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
var seq__13052_13058 = cljs.core.seq.call(null,x);
var chunk__13053_13059 = null;
var count__13054_13060 = (0);
var i__13055_13061 = (0);
while(true){
if((i__13055_13061 < count__13054_13060)){
var vec__13056_13062 = cljs.core._nth.call(null,chunk__13053_13059,i__13055_13061);
var k_13063 = cljs.core.nth.call(null,vec__13056_13062,(0),null);
var v_13064 = cljs.core.nth.call(null,vec__13056_13062,(1),null);
var m13051_13065 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m13051_13065,((typeof k_13063 === 'string')?cljs.core.keyword.call(null,k_13063):k_13063),keywordize_map.call(null,v_13064)));

var G__13066 = seq__13052_13058;
var G__13067 = chunk__13053_13059;
var G__13068 = count__13054_13060;
var G__13069 = (i__13055_13061 + (1));
seq__13052_13058 = G__13066;
chunk__13053_13059 = G__13067;
count__13054_13060 = G__13068;
i__13055_13061 = G__13069;
continue;
} else {
var temp__4126__auto___13070 = cljs.core.seq.call(null,seq__13052_13058);
if(temp__4126__auto___13070){
var seq__13052_13071__$1 = temp__4126__auto___13070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13052_13071__$1)){
var c__4425__auto___13072 = cljs.core.chunk_first.call(null,seq__13052_13071__$1);
var G__13073 = cljs.core.chunk_rest.call(null,seq__13052_13071__$1);
var G__13074 = c__4425__auto___13072;
var G__13075 = cljs.core.count.call(null,c__4425__auto___13072);
var G__13076 = (0);
seq__13052_13058 = G__13073;
chunk__13053_13059 = G__13074;
count__13054_13060 = G__13075;
i__13055_13061 = G__13076;
continue;
} else {
var vec__13057_13077 = cljs.core.first.call(null,seq__13052_13071__$1);
var k_13078 = cljs.core.nth.call(null,vec__13057_13077,(0),null);
var v_13079 = cljs.core.nth.call(null,vec__13057_13077,(1),null);
var m13051_13080 = cljs.core.deref.call(null,m_atom__9387__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9387__auto__,cljs.core.assoc_BANG_.call(null,m13051_13080,((typeof k_13078 === 'string')?cljs.core.keyword.call(null,k_13078):k_13078),keywordize_map.call(null,v_13079)));

var G__13081 = cljs.core.next.call(null,seq__13052_13071__$1);
var G__13082 = null;
var G__13083 = (0);
var G__13084 = (0);
seq__13052_13058 = G__13081;
chunk__13053_13059 = G__13082;
count__13054_13060 = G__13083;
i__13055_13061 = G__13084;
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
var G__13085 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__13086 = cljs.core.next.call(null,ks);
m = G__13085;
ks = G__13086;
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
})(),(function (){var iter__4394__auto__ = (function iter__13095(s__13096){
return (new cljs.core.LazySeq(null,(function (){
var s__13096__$1 = s__13096;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13096__$1);
if(temp__4126__auto__){
var s__13096__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13096__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__13096__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__13098 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__13097 = (0);
while(true){
if((i__13097 < size__4393__auto__)){
var vec__13101 = cljs.core._nth.call(null,c__4392__auto__,i__13097);
var k = cljs.core.nth.call(null,vec__13101,(0),null);
var v = cljs.core.nth.call(null,vec__13101,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__13098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__13103 = (i__13097 + (1));
i__13097 = G__13103;
continue;
} else {
var G__13104 = (i__13097 + (1));
i__13097 = G__13104;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13098),iter__13095.call(null,cljs.core.chunk_rest.call(null,s__13096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13098),null);
}
} else {
var vec__13102 = cljs.core.first.call(null,s__13096__$2);
var k = cljs.core.nth.call(null,vec__13102,(0),null);
var v = cljs.core.nth.call(null,vec__13102,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__13095.call(null,cljs.core.rest.call(null,s__13096__$2)));
} else {
var G__13105 = cljs.core.rest.call(null,s__13096__$2);
s__13096__$1 = G__13105;
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
assoc_when.cljs$lang$applyTo = (function (arglist__13106){
var m = cljs.core.first(arglist__13106);
var kvs = cljs.core.rest(arglist__13106);
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
update_in_when.cljs$lang$applyTo = (function (arglist__13107){
var m = cljs.core.first(arglist__13107);
arglist__13107 = cljs.core.next(arglist__13107);
var key_seq = cljs.core.first(arglist__13107);
arglist__13107 = cljs.core.next(arglist__13107);
var f = cljs.core.first(arglist__13107);
var args = cljs.core.rest(arglist__13107);
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
return (function iter__13112(s__13113){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__13113__$1 = s__13113;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13113__$1);
if(temp__4126__auto__){
var s__13113__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13113__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__13113__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__13115 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__13114 = (0);
while(true){
if((i__13114 < size__4393__auto__)){
var x = cljs.core._nth.call(null,c__4392__auto__,i__13114);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__13115,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__13116 = (i__13114 + (1));
i__13114 = G__13116;
continue;
} else {
var G__13117 = (i__13114 + (1));
i__13114 = G__13117;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13115),iter__13112.call(null,cljs.core.chunk_rest.call(null,s__13113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13115),null);
}
} else {
var x = cljs.core.first.call(null,s__13113__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__13112.call(null,cljs.core.rest.call(null,s__13113__$2)));
} else {
var G__13118 = cljs.core.rest.call(null,s__13113__$2);
s__13113__$1 = G__13118;
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
interleave_all.cljs$lang$applyTo = (function (arglist__13119){
var colls = cljs.core.seq(arglist__13119);
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
var G__13120__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__13121 = conj_when.call(null,coll,x);
var G__13122 = cljs.core.first.call(null,xs);
var G__13123 = cljs.core.next.call(null,xs);
coll = G__13121;
x = G__13122;
xs = G__13123;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__13120 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13120__delegate.call(this,coll,x,xs);};
G__13120.cljs$lang$maxFixedArity = 2;
G__13120.cljs$lang$applyTo = (function (arglist__13124){
var coll = cljs.core.first(arglist__13124);
arglist__13124 = cljs.core.next(arglist__13124);
var x = cljs.core.first(arglist__13124);
var xs = cljs.core.rest(arglist__13124);
return G__13120__delegate(coll,x,xs);
});
G__13120.cljs$core$IFn$_invoke$arity$variadic = G__13120__delegate;
return G__13120;
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
var G__13126__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__13125_SHARP_){
return cljs.core.apply.call(null,f,p1__13125_SHARP_,args);
}));
};
var G__13126 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13126__delegate.call(this,a,f,args);};
G__13126.cljs$lang$maxFixedArity = 2;
G__13126.cljs$lang$applyTo = (function (arglist__13127){
var a = cljs.core.first(arglist__13127);
arglist__13127 = cljs.core.next(arglist__13127);
var f = cljs.core.first(arglist__13127);
var args = cljs.core.rest(arglist__13127);
return G__13126__delegate(a,f,args);
});
G__13126.cljs$core$IFn$_invoke$arity$variadic = G__13126__delegate;
return G__13126;
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
var G__13128__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__13128 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13128__delegate.call(this,f,arg,args);};
G__13128.cljs$lang$maxFixedArity = 2;
G__13128.cljs$lang$applyTo = (function (arglist__13129){
var f = cljs.core.first(arglist__13129);
arglist__13129 = cljs.core.next(arglist__13129);
var arg = cljs.core.first(arglist__13129);
var args = cljs.core.rest(arglist__13129);
return G__13128__delegate(f,arg,args);
});
G__13128.cljs$core$IFn$_invoke$arity$variadic = G__13128__delegate;
return G__13128;
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
