// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$84,(function (p1__13014__13015__auto__){
var G__27554 = p1__13014__13015__auto__;
if(G__27554){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__27554.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__27554.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__27554);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__27554);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27555_SHARP_){
return (cljs.core.val(p1__27555_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__27557 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27557,(1),null);
var p = vec__27557;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$71,cljs.core.constant$keyword$98,cljs.core.constant$keyword$56,k,cljs.core.constant$keyword$97,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___27567 = schema.utils.use_fn_validation;
var output_schema27558_27568 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema27559_27569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker27560_27570 = schema.core.checker(input_schema27559_27569);
var output_checker27561_27571 = schema.core.checker(output_schema27558_27568);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___27567,output_schema27558_27568,input_schema27559_27569,input_checker27560_27570,output_checker27561_27571){
return (function unwrap_schema_form_key(G__27562){
var validate__12984__auto__ = ufv___27567.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___27572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27562], null);
var temp__4126__auto___27573 = (function (){var G__27565 = args__12985__auto___27572;
return (input_checker27560_27570.cljs$core$IFn$_invoke$arity$1 ? input_checker27560_27570.cljs$core$IFn$_invoke$arity$1(G__27565) : input_checker27560_27570.call(null,G__27565));
})();
if(cljs.core.truth_(temp__4126__auto___27573)){
var error__12986__auto___27574 = temp__4126__auto___27573;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27574], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27574,cljs.core.constant$keyword$72,args__12985__auto___27572,cljs.core.constant$keyword$73,input_schema27559_27569,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var k = G__27562;
while(true){
if(schema.core.specific_key_QMARK_(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___27575 = (function (){var G__27566 = o__12987__auto__;
return (output_checker27561_27571.cljs$core$IFn$_invoke$arity$1 ? output_checker27561_27571.cljs$core$IFn$_invoke$arity$1(G__27566) : output_checker27561_27571.call(null,G__27566));
})();
if(cljs.core.truth_(temp__4126__auto___27575)){
var error__12986__auto___27576 = temp__4126__auto___27575;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27576], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27576,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27558_27568,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27567,output_schema27558_27568,input_schema27559_27569,input_checker27560_27570,output_checker27561_27571))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema27558_27568,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27559_27569], null)));
var ufv___27586 = schema.utils.use_fn_validation;
var output_schema27577_27587 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema27578_27588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker27579_27589 = schema.core.checker(input_schema27578_27588);
var output_checker27580_27590 = schema.core.checker(output_schema27577_27587);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___27586,output_schema27577_27587,input_schema27578_27588,input_checker27579_27589,output_checker27580_27590){
return (function explicit_schema_key_map(G__27581){
var validate__12984__auto__ = ufv___27586.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___27591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27581], null);
var temp__4126__auto___27592 = (function (){var G__27584 = args__12985__auto___27591;
return (input_checker27579_27589.cljs$core$IFn$_invoke$arity$1 ? input_checker27579_27589.cljs$core$IFn$_invoke$arity$1(G__27584) : input_checker27579_27589.call(null,G__27584));
})();
if(cljs.core.truth_(temp__4126__auto___27592)){
var error__12986__auto___27593 = temp__4126__auto___27592;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27593], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27593,cljs.core.constant$keyword$72,args__12985__auto___27591,cljs.core.constant$keyword$73,input_schema27578_27588,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var s = G__27581;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___27594 = (function (){var G__27585 = o__12987__auto__;
return (output_checker27580_27590.cljs$core$IFn$_invoke$arity$1 ? output_checker27580_27590.cljs$core$IFn$_invoke$arity$1(G__27585) : output_checker27580_27590.call(null,G__27585));
})();
if(cljs.core.truth_(temp__4126__auto___27594)){
var error__12986__auto___27595 = temp__4126__auto___27594;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27595], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27595,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27577_27587,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27586,output_schema27577_27587,input_schema27578_27588,input_checker27579_27589,output_checker27580_27590))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema27577_27587,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27578_27588], null)));
var ufv___27605 = schema.utils.use_fn_validation;
var output_schema27596_27606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema27597_27607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker27598_27608 = schema.core.checker(input_schema27597_27607);
var output_checker27599_27609 = schema.core.checker(output_schema27596_27606);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___27605,output_schema27596_27606,input_schema27597_27607,input_checker27598_27608,output_checker27599_27609){
return (function split_schema_keys(G__27600){
var validate__12984__auto__ = ufv___27605.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___27610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27600], null);
var temp__4126__auto___27611 = (function (){var G__27603 = args__12985__auto___27610;
return (input_checker27598_27608.cljs$core$IFn$_invoke$arity$1 ? input_checker27598_27608.cljs$core$IFn$_invoke$arity$1(G__27603) : input_checker27598_27608.call(null,G__27603));
})();
if(cljs.core.truth_(temp__4126__auto___27611)){
var error__12986__auto___27612 = temp__4126__auto___27611;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27612], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27612,cljs.core.constant$keyword$72,args__12985__auto___27610,cljs.core.constant$keyword$73,input_schema27597_27607,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var s = G__27600;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___27613 = (function (){var G__27604 = o__12987__auto__;
return (output_checker27599_27609.cljs$core$IFn$_invoke$arity$1 ? output_checker27599_27609.cljs$core$IFn$_invoke$arity$1(G__27604) : output_checker27599_27609.call(null,G__27604));
})();
if(cljs.core.truth_(temp__4126__auto___27613)){
var error__12986__auto___27614 = temp__4126__auto___27613;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27614], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27614,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27596_27606,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27605,output_schema27596_27606,input_schema27597_27607,input_checker27598_27608,output_checker27599_27609))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema27596_27606,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27597_27607], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__27623){
var vec__27624 = p__27623;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624,(1),null);
var pk = (function (){var G__27625 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__27625) : key_project.call(null,G__27625));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__27626 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27626,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27626,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27627 = ok;
var G__27628 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__27627,G__27628) : key_combine.call(null,G__27627,G__27628));
})(),(function (){var G__27629 = ov;
var G__27630 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__27629,G__27630) : val_combine.call(null,G__27629,G__27630));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__27631){
var key_project = cljs.core.first(arglist__27631);
arglist__27631 = cljs.core.next(arglist__27631);
var key_combine = cljs.core.first(arglist__27631);
arglist__27631 = cljs.core.next(arglist__27631);
var val_combine = cljs.core.first(arglist__27631);
var maps = cljs.core.rest(arglist__27631);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___27645 = schema.utils.use_fn_validation;
var output_schema27633_27646 = plumbing.fnk.schema.InputSchema;
var input_schema27634_27647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker27635_27648 = schema.core.checker(input_schema27634_27647);
var output_checker27636_27649 = schema.core.checker(output_schema27633_27646);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649){
return (function union_input_schemata(G__27637,G__27638){
var validate__12984__auto__ = ufv___27645.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___27650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27637,G__27638], null);
var temp__4126__auto___27651 = (function (){var G__27643 = args__12985__auto___27650;
return (input_checker27635_27648.cljs$core$IFn$_invoke$arity$1 ? input_checker27635_27648.cljs$core$IFn$_invoke$arity$1(G__27643) : input_checker27635_27648.call(null,G__27643));
})();
if(cljs.core.truth_(temp__4126__auto___27651)){
var error__12986__auto___27652 = temp__4126__auto___27651;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27652], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27652,cljs.core.constant$keyword$72,args__12985__auto___27650,cljs.core.constant$keyword$73,input_schema27634_27647,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var i1 = G__27637;
var i2 = G__27638;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12984__auto__,ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649){
return (function (p1__27632_SHARP_){
if(schema.core.specific_key_QMARK_(p1__27632_SHARP_)){
return schema.core.explicit_schema_key(p1__27632_SHARP_);
} else {
return cljs.core.constant$keyword$99;
}
});})(validate__12984__auto__,ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649))
,((function (validate__12984__auto__,ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649){
return (function (k1,k2){
if(schema.core.required_key_QMARK_(k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_(k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_(k1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0)))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__12984__auto__,ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649))
,((function (validate__12984__auto__,ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12984__auto__,ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___27653 = (function (){var G__27644 = o__12987__auto__;
return (output_checker27636_27649.cljs$core$IFn$_invoke$arity$1 ? output_checker27636_27649.cljs$core$IFn$_invoke$arity$1(G__27644) : output_checker27636_27649.call(null,G__27644));
})();
if(cljs.core.truth_(temp__4126__auto___27653)){
var error__12986__auto___27654 = temp__4126__auto___27653;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27654], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27654,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27633_27646,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27645,output_schema27633_27646,input_schema27634_27647,input_checker27635_27648,output_checker27636_27649))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema27633_27646,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27634_27647], null)));
var ufv___27664 = schema.utils.use_fn_validation;
var output_schema27655_27665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema27656_27666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker27657_27667 = schema.core.checker(input_schema27656_27666);
var output_checker27658_27668 = schema.core.checker(output_schema27655_27665);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___27664,output_schema27655_27665,input_schema27656_27666,input_checker27657_27667,output_checker27658_27668){
return (function required_toplevel_keys(G__27659){
var validate__12984__auto__ = ufv___27664.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___27669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27659], null);
var temp__4126__auto___27670 = (function (){var G__27662 = args__12985__auto___27669;
return (input_checker27657_27667.cljs$core$IFn$_invoke$arity$1 ? input_checker27657_27667.cljs$core$IFn$_invoke$arity$1(G__27662) : input_checker27657_27667.call(null,G__27662));
})();
if(cljs.core.truth_(temp__4126__auto___27670)){
var error__12986__auto___27671 = temp__4126__auto___27670;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27671], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27671,cljs.core.constant$keyword$72,args__12985__auto___27669,cljs.core.constant$keyword$73,input_schema27656_27666,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var input_schema = G__27659;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12984__auto__,ufv___27664,output_schema27655_27665,input_schema27656_27666,input_checker27657_27667,output_checker27658_27668){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12984__auto__,ufv___27664,output_schema27655_27665,input_schema27656_27666,input_checker27657_27667,output_checker27658_27668))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___27672 = (function (){var G__27663 = o__12987__auto__;
return (output_checker27658_27668.cljs$core$IFn$_invoke$arity$1 ? output_checker27658_27668.cljs$core$IFn$_invoke$arity$1(G__27663) : output_checker27658_27668.call(null,G__27663));
})();
if(cljs.core.truth_(temp__4126__auto___27672)){
var error__12986__auto___27673 = temp__4126__auto___27672;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27673], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27673,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27655_27665,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27664,output_schema27655_27665,input_schema27656_27666,input_checker27657_27667,output_checker27658_27668))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema27655_27665,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27656_27666], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = (function iter__27688(s__27689){
return (new cljs.core.LazySeq(null,(function (){
var s__27689__$1 = s__27689;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__27689__$1);
if(temp__4126__auto__){
var s__27689__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27689__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__27689__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__27691 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__27690 = (0);
while(true){
if((i__27690 < size__4391__auto__)){
var vec__27696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__27690);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27696,(1),null);
cljs.core.chunk_append(b__27691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__27698 = (i__27690 + (1));
i__27690 = G__27698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27691),iter__27688(cljs.core.chunk_rest(s__27689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27691),null);
}
} else {
var vec__27697 = cljs.core.first(s__27689__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27697,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__27688(cljs.core.rest(s__27689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4392__auto__(expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = (function iter__27717(s__27718){
return (new cljs.core.LazySeq(null,(function (){
var s__27718__$1 = s__27718;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__27718__$1);
if(temp__4126__auto__){
var s__27718__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27718__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__27718__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__27720 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__27719 = (0);
while(true){
if((i__27719 < size__4391__auto__)){
var vec__27725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__27719);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__27720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__27727 = (i__27719 + (1));
i__27719 = G__27727;
continue;
} else {
var G__27728 = (i__27719 + (1));
i__27719 = G__27728;
continue;
}
} else {
var G__27729 = (i__27719 + (1));
i__27719 = G__27729;
continue;
}
} else {
var G__27730 = (i__27719 + (1));
i__27719 = G__27730;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27720),iter__27717(cljs.core.chunk_rest(s__27718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27720),null);
}
} else {
var vec__27726 = cljs.core.first(s__27718__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27726,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__27717(cljs.core.rest(s__27718__$2)));
} else {
var G__27731 = cljs.core.rest(s__27718__$2);
s__27718__$1 = G__27731;
continue;
}
} else {
var G__27732 = cljs.core.rest(s__27718__$2);
s__27718__$1 = G__27732;
continue;
}
} else {
var G__27733 = cljs.core.rest(s__27718__$2);
s__27718__$1 = G__27733;
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
return iter__4392__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,cljs.core.constant$keyword$101,cljs.core.constant$keyword$100,fails], null));
} else {
return null;
}
});
var ufv___27760 = schema.utils.use_fn_validation;
var output_schema27734_27761 = schema.core.Any;
var input_schema27735_27762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker27736_27763 = schema.core.checker(input_schema27735_27762);
var output_checker27737_27764 = schema.core.checker(output_schema27734_27761);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___27760,output_schema27734_27761,input_schema27735_27762,input_checker27736_27763,output_checker27737_27764){
return (function compose_schemata(G__27738,G__27739){
var validate__12984__auto__ = true;
if(validate__12984__auto__){
var args__12985__auto___27765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27738,G__27739], null);
var temp__4126__auto___27766 = (function (){var G__27750 = args__12985__auto___27765;
return (input_checker27736_27763.cljs$core$IFn$_invoke$arity$1 ? input_checker27736_27763.cljs$core$IFn$_invoke$arity$1(G__27750) : input_checker27736_27763.call(null,G__27750));
})();
if(cljs.core.truth_(temp__4126__auto___27766)){
var error__12986__auto___27767 = temp__4126__auto___27766;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27767], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27767,cljs.core.constant$keyword$72,args__12985__auto___27765,cljs.core.constant$keyword$73,input_schema27735_27762,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var G__27753 = G__27738;
var vec__27755 = G__27753;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27755,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27755,(1),null);
var G__27754 = G__27739;
var vec__27756 = G__27754;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27756,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27756,(1),null);
var G__27753__$1 = G__27753;
var G__27754__$1 = G__27754;
while(true){
var vec__27757 = G__27753__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(1),null);
var vec__27758 = G__27754__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12984__auto__){
var temp__4126__auto___27768 = (function (){var G__27759 = o__12987__auto__;
return (output_checker27737_27764.cljs$core$IFn$_invoke$arity$1 ? output_checker27737_27764.cljs$core$IFn$_invoke$arity$1(G__27759) : output_checker27737_27764.call(null,G__27759));
})();
if(cljs.core.truth_(temp__4126__auto___27768)){
var error__12986__auto___27769 = temp__4126__auto___27768;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27769], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27769,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27734_27761,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27760,output_schema27734_27761,input_schema27735_27762,input_checker27736_27763,output_checker27737_27764))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema27734_27761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27735_27762], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___27872 = schema.utils.use_fn_validation;
var output_schema27770_27873 = schema.core.Any;
var input_schema27771_27874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker27772_27875 = schema.core.checker(input_schema27771_27874);
var output_checker27773_27876 = schema.core.checker(output_schema27770_27873);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876){
return (function split_schema(G__27774,G__27775){
var validate__12984__auto__ = ufv___27872.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___27877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27774,G__27775], null);
var temp__4126__auto___27878 = (function (){var G__27824 = args__12985__auto___27877;
return (input_checker27772_27875.cljs$core$IFn$_invoke$arity$1 ? input_checker27772_27875.cljs$core$IFn$_invoke$arity$1(G__27824) : input_checker27772_27875.call(null,G__27824));
})();
if(cljs.core.truth_(temp__4126__auto___27878)){
var error__12986__auto___27879 = temp__4126__auto___27878;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27879], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27879,cljs.core.constant$keyword$72,args__12985__auto___27877,cljs.core.constant$keyword$73,input_schema27771_27874,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var s = G__27774;
var ks = G__27775;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4392__auto__ = ((function (ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876){
return (function iter__27825(s__27826){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876){
return (function (){
var s__27826__$1 = s__27826;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__27826__$1);
if(temp__4126__auto__){
var s__27826__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27826__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__27826__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__27828 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__27827 = (0);
while(true){
if((i__27827 < size__4391__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__27827);
cljs.core.chunk_append(b__27828,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = ((function (i__27827,in_QMARK_,c__4390__auto__,size__4391__auto__,b__27828,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876){
return (function iter__27851(s__27852){
return (new cljs.core.LazySeq(null,((function (i__27827,in_QMARK_,c__4390__auto__,size__4391__auto__,b__27828,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876){
return (function (){
var s__27852__$1 = s__27852;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__27852__$1);
if(temp__4126__auto____$1){
var s__27852__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27852__$2)){
var c__4390__auto____$1 = cljs.core.chunk_first(s__27852__$2);
var size__4391__auto____$1 = cljs.core.count(c__4390__auto____$1);
var b__27854 = cljs.core.chunk_buffer(size__4391__auto____$1);
if((function (){var i__27853 = (0);
while(true){
if((i__27853 < size__4391__auto____$1)){
var vec__27859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto____$1,i__27853);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__27854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27880 = (i__27853 + (1));
i__27853 = G__27880;
continue;
} else {
var G__27881 = (i__27853 + (1));
i__27853 = G__27881;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27854),iter__27851(cljs.core.chunk_rest(s__27852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27854),null);
}
} else {
var vec__27860 = cljs.core.first(s__27852__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27860,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__27851(cljs.core.rest(s__27852__$2)));
} else {
var G__27882 = cljs.core.rest(s__27852__$2);
s__27852__$1 = G__27882;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__27827,in_QMARK_,c__4390__auto__,size__4391__auto__,b__27828,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876))
,null,null));
});})(i__27827,in_QMARK_,c__4390__auto__,size__4391__auto__,b__27828,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876))
;
return iter__4392__auto__(s);
})()));

var G__27883 = (i__27827 + (1));
i__27827 = G__27883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27828),iter__27825(cljs.core.chunk_rest(s__27826__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27828),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__27826__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = ((function (in_QMARK_,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876){
return (function iter__27861(s__27862){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876){
return (function (){
var s__27862__$1 = s__27862;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__27862__$1);
if(temp__4126__auto____$1){
var s__27862__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27862__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__27862__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__27864 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__27863 = (0);
while(true){
if((i__27863 < size__4391__auto__)){
var vec__27869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__27863);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27869,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__27864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27884 = (i__27863 + (1));
i__27863 = G__27884;
continue;
} else {
var G__27885 = (i__27863 + (1));
i__27863 = G__27885;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27864),iter__27861(cljs.core.chunk_rest(s__27862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27864),null);
}
} else {
var vec__27870 = cljs.core.first(s__27862__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__27861(cljs.core.rest(s__27862__$2)));
} else {
var G__27886 = cljs.core.rest(s__27862__$2);
s__27862__$1 = G__27886;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876))
,null,null));
});})(in_QMARK_,s__27826__$2,temp__4126__auto__,ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876))
;
return iter__4392__auto__(s);
})()),iter__27825(cljs.core.rest(s__27826__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876))
,null,null));
});})(ks__$1,validate__12984__auto__,ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876))
;
return iter__4392__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___27887 = (function (){var G__27871 = o__12987__auto__;
return (output_checker27773_27876.cljs$core$IFn$_invoke$arity$1 ? output_checker27773_27876.cljs$core$IFn$_invoke$arity$1(G__27871) : output_checker27773_27876.call(null,G__27871));
})();
if(cljs.core.truth_(temp__4126__auto___27887)){
var error__12986__auto___27888 = temp__4126__auto___27887;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27888], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27888,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27770_27873,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27872,output_schema27770_27873,input_schema27771_27874,input_checker27772_27875,output_checker27773_27876))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema27770_27873,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27771_27874], null)));
var ufv___27923 = schema.utils.use_fn_validation;
var output_schema27889_27924 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema27890_27925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker27891_27926 = schema.core.checker(input_schema27890_27925);
var output_checker27892_27927 = schema.core.checker(output_schema27889_27924);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___27923,output_schema27889_27924,input_schema27890_27925,input_checker27891_27926,output_checker27892_27927){
return (function sequence_schemata(G__27893,G__27894){
var validate__12984__auto__ = ufv___27923.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___27928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27893,G__27894], null);
var temp__4126__auto___27929 = (function (){var G__27909 = args__12985__auto___27928;
return (input_checker27891_27926.cljs$core$IFn$_invoke$arity$1 ? input_checker27891_27926.cljs$core$IFn$_invoke$arity$1(G__27909) : input_checker27891_27926.call(null,G__27909));
})();
if(cljs.core.truth_(temp__4126__auto___27929)){
var error__12986__auto___27930 = temp__4126__auto___27929;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27930], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27930,cljs.core.constant$keyword$72,args__12985__auto___27928,cljs.core.constant$keyword$73,input_schema27890_27925,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var G__27913 = G__27893;
var vec__27915 = G__27913;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27915,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27915,(1),null);
var G__27914 = G__27894;
var vec__27916 = G__27914;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(0),null);
var vec__27917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27917,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27917,(1),null);
var G__27913__$1 = G__27913;
var G__27914__$1 = G__27914;
while(true){
var vec__27918 = G__27913__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27918,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27918,(1),null);
var vec__27919 = G__27914__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919,(0),null);
var vec__27920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27920,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27920,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__27921 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___27931 = (function (){var G__27922 = o__12987__auto__;
return (output_checker27892_27927.cljs$core$IFn$_invoke$arity$1 ? output_checker27892_27927.cljs$core$IFn$_invoke$arity$1(G__27922) : output_checker27892_27927.call(null,G__27922));
})();
if(cljs.core.truth_(temp__4126__auto___27931)){
var error__12986__auto___27932 = temp__4126__auto___27931;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___27932], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___27932,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema27889_27924,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___27923,output_schema27889_27924,input_schema27890_27925,input_checker27891_27926,output_checker27892_27927))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema27889_27924,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27890_27925], null)));
