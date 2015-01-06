// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__8078__8079__auto__){
var G__16746 = p1__8078__8079__auto__;
if(G__16746){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__16746.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__16746.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__16746);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__16746);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__16747_SHARP_){
return (cljs.core.val.call(null,p1__16747_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__16749 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__16749,(0),null);
var v = cljs.core.nth.call(null,vec__16749,(1),null);
var p = vec__16749;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

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
var ufv___16755 = schema.utils.use_fn_validation;
var output_schema16750_16756 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema16751_16757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker16752_16758 = schema.core.checker.call(null,input_schema16751_16757);
var output_checker16753_16759 = schema.core.checker.call(null,output_schema16750_16756);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___16755,output_schema16750_16756,input_schema16751_16757,input_checker16752_16758,output_checker16753_16759){
return (function unwrap_schema_form_key(G__16754){
var validate__8048__auto__ = ufv___16755.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___16760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16754], null);
var temp__4126__auto___16761 = input_checker16752_16758.call(null,args__8049__auto___16760);
if(cljs.core.truth_(temp__4126__auto___16761)){
var error__8050__auto___16762 = temp__4126__auto___16761;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__8050__auto___16762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16762,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___16760,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16751_16757,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var k = G__16754;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___16763 = output_checker16753_16759.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___16763)){
var error__8050__auto___16764 = temp__4126__auto___16763;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__8050__auto___16764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16764,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16750_16756,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___16755,output_schema16750_16756,input_schema16751_16757,input_checker16752_16758,output_checker16753_16759))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema16750_16756,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16751_16757], null)));
var ufv___16770 = schema.utils.use_fn_validation;
var output_schema16765_16771 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema16766_16772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker16767_16773 = schema.core.checker.call(null,input_schema16766_16772);
var output_checker16768_16774 = schema.core.checker.call(null,output_schema16765_16771);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___16770,output_schema16765_16771,input_schema16766_16772,input_checker16767_16773,output_checker16768_16774){
return (function explicit_schema_key_map(G__16769){
var validate__8048__auto__ = ufv___16770.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___16775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16769], null);
var temp__4126__auto___16776 = input_checker16767_16773.call(null,args__8049__auto___16775);
if(cljs.core.truth_(temp__4126__auto___16776)){
var error__8050__auto___16777 = temp__4126__auto___16776;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__8050__auto___16777)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16777,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___16775,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16766_16772,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var s = G__16769;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___16778 = output_checker16768_16774.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___16778)){
var error__8050__auto___16779 = temp__4126__auto___16778;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__8050__auto___16779)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16779,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16765_16771,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___16770,output_schema16765_16771,input_schema16766_16772,input_checker16767_16773,output_checker16768_16774))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema16765_16771,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16766_16772], null)));
var ufv___16785 = schema.utils.use_fn_validation;
var output_schema16780_16786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema16781_16787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker16782_16788 = schema.core.checker.call(null,input_schema16781_16787);
var output_checker16783_16789 = schema.core.checker.call(null,output_schema16780_16786);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___16785,output_schema16780_16786,input_schema16781_16787,input_checker16782_16788,output_checker16783_16789){
return (function split_schema_keys(G__16784){
var validate__8048__auto__ = ufv___16785.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___16790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16784], null);
var temp__4126__auto___16791 = input_checker16782_16788.call(null,args__8049__auto___16790);
if(cljs.core.truth_(temp__4126__auto___16791)){
var error__8050__auto___16792 = temp__4126__auto___16791;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__8050__auto___16792)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16792,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___16790,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16781_16787,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var s = G__16784;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___16793 = output_checker16783_16789.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___16793)){
var error__8050__auto___16794 = temp__4126__auto___16793;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__8050__auto___16794)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16794,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16780_16786,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___16785,output_schema16780_16786,input_schema16781_16787,input_checker16782_16788,output_checker16783_16789))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema16780_16786,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16781_16787], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__16798){
var vec__16799 = p__16798;
var k = cljs.core.nth.call(null,vec__16799,(0),null);
var v = cljs.core.nth.call(null,vec__16799,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__16800 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__16800,(0),null);
var ov = cljs.core.nth.call(null,vec__16800,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__16801){
var key_project = cljs.core.first(arglist__16801);
arglist__16801 = cljs.core.next(arglist__16801);
var key_combine = cljs.core.first(arglist__16801);
arglist__16801 = cljs.core.next(arglist__16801);
var val_combine = cljs.core.first(arglist__16801);
var maps = cljs.core.rest(arglist__16801);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___16809 = schema.utils.use_fn_validation;
var output_schema16803_16810 = plumbing.fnk.schema.InputSchema;
var input_schema16804_16811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker16805_16812 = schema.core.checker.call(null,input_schema16804_16811);
var output_checker16806_16813 = schema.core.checker.call(null,output_schema16803_16810);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813){
return (function union_input_schemata(G__16807,G__16808){
var validate__8048__auto__ = ufv___16809.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___16814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16807,G__16808], null);
var temp__4126__auto___16815 = input_checker16805_16812.call(null,args__8049__auto___16814);
if(cljs.core.truth_(temp__4126__auto___16815)){
var error__8050__auto___16816 = temp__4126__auto___16815;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__8050__auto___16816)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16816,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___16814,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16804_16811,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var i1 = G__16807;
var i2 = G__16808;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__8048__auto__,ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813){
return (function (p1__16802_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__16802_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__16802_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__8048__auto__,ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813))
,((function (validate__8048__auto__,ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__8048__auto__,ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813))
,((function (validate__8048__auto__,ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__8048__auto__,ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___16817 = output_checker16806_16813.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___16817)){
var error__8050__auto___16818 = temp__4126__auto___16817;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__8050__auto___16818)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16818,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16803_16810,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___16809,output_schema16803_16810,input_schema16804_16811,input_checker16805_16812,output_checker16806_16813))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema16803_16810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16804_16811], null)));
var ufv___16824 = schema.utils.use_fn_validation;
var output_schema16819_16825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema16820_16826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker16821_16827 = schema.core.checker.call(null,input_schema16820_16826);
var output_checker16822_16828 = schema.core.checker.call(null,output_schema16819_16825);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___16824,output_schema16819_16825,input_schema16820_16826,input_checker16821_16827,output_checker16822_16828){
return (function required_toplevel_keys(G__16823){
var validate__8048__auto__ = ufv___16824.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___16829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16823], null);
var temp__4126__auto___16830 = input_checker16821_16827.call(null,args__8049__auto___16829);
if(cljs.core.truth_(temp__4126__auto___16830)){
var error__8050__auto___16831 = temp__4126__auto___16830;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__8050__auto___16831)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16831,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___16829,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16820_16826,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var input_schema = G__16823;
while(true){
return cljs.core.keep.call(null,((function (validate__8048__auto__,ufv___16824,output_schema16819_16825,input_schema16820_16826,input_checker16821_16827,output_checker16822_16828){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__8048__auto__,ufv___16824,output_schema16819_16825,input_schema16820_16826,input_checker16821_16827,output_checker16822_16828))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___16832 = output_checker16822_16828.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___16832)){
var error__8050__auto___16833 = temp__4126__auto___16832;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__8050__auto___16833)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16833,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16819_16825,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___16824,output_schema16819_16825,input_schema16820_16826,input_checker16821_16827,output_checker16822_16828))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema16819_16825,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16820_16826], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = (function iter__16842(s__16843){
return (new cljs.core.LazySeq(null,(function (){
var s__16843__$1 = s__16843;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16843__$1);
if(temp__4126__auto__){
var s__16843__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16843__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__16843__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__16845 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__16844 = (0);
while(true){
if((i__16844 < size__4391__auto__)){
var vec__16848 = cljs.core._nth.call(null,c__4390__auto__,i__16844);
var k = cljs.core.nth.call(null,vec__16848,(0),null);
var v = cljs.core.nth.call(null,vec__16848,(1),null);
cljs.core.chunk_append.call(null,b__16845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__16850 = (i__16844 + (1));
i__16844 = G__16850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16845),iter__16842.call(null,cljs.core.chunk_rest.call(null,s__16843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16845),null);
}
} else {
var vec__16849 = cljs.core.first.call(null,s__16843__$2);
var k = cljs.core.nth.call(null,vec__16849,(0),null);
var v = cljs.core.nth.call(null,vec__16849,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__16842.call(null,cljs.core.rest.call(null,s__16843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4392__auto__.call(null,expr);
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
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = (function iter__16859(s__16860){
return (new cljs.core.LazySeq(null,(function (){
var s__16860__$1 = s__16860;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16860__$1);
if(temp__4126__auto__){
var s__16860__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16860__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__16860__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__16862 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__16861 = (0);
while(true){
if((i__16861 < size__4391__auto__)){
var vec__16865 = cljs.core._nth.call(null,c__4390__auto__,i__16861);
var k = cljs.core.nth.call(null,vec__16865,(0),null);
var v = cljs.core.nth.call(null,vec__16865,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__16862,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__16867 = (i__16861 + (1));
i__16861 = G__16867;
continue;
} else {
var G__16868 = (i__16861 + (1));
i__16861 = G__16868;
continue;
}
} else {
var G__16869 = (i__16861 + (1));
i__16861 = G__16869;
continue;
}
} else {
var G__16870 = (i__16861 + (1));
i__16861 = G__16870;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16862),iter__16859.call(null,cljs.core.chunk_rest.call(null,s__16860__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16862),null);
}
} else {
var vec__16866 = cljs.core.first.call(null,s__16860__$2);
var k = cljs.core.nth.call(null,vec__16866,(0),null);
var v = cljs.core.nth.call(null,vec__16866,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__16859.call(null,cljs.core.rest.call(null,s__16860__$2)));
} else {
var G__16871 = cljs.core.rest.call(null,s__16860__$2);
s__16860__$1 = G__16871;
continue;
}
} else {
var G__16872 = cljs.core.rest.call(null,s__16860__$2);
s__16860__$1 = G__16872;
continue;
}
} else {
var G__16873 = cljs.core.rest.call(null,s__16860__$2);
s__16860__$1 = G__16873;
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
return iter__4392__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___16896 = schema.utils.use_fn_validation;
var output_schema16874_16897 = schema.core.Any;
var input_schema16875_16898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker16876_16899 = schema.core.checker.call(null,input_schema16875_16898);
var output_checker16877_16900 = schema.core.checker.call(null,output_schema16874_16897);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___16896,output_schema16874_16897,input_schema16875_16898,input_checker16876_16899,output_checker16877_16900){
return (function compose_schemata(G__16878,G__16879){
var validate__8048__auto__ = true;
if(validate__8048__auto__){
var args__8049__auto___16901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16878,G__16879], null);
var temp__4126__auto___16902 = input_checker16876_16899.call(null,args__8049__auto___16901);
if(cljs.core.truth_(temp__4126__auto___16902)){
var error__8050__auto___16903 = temp__4126__auto___16902;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__8050__auto___16903)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16903,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___16901,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16875_16898,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var G__16890 = G__16878;
var vec__16892 = G__16890;
var i2 = cljs.core.nth.call(null,vec__16892,(0),null);
var o2 = cljs.core.nth.call(null,vec__16892,(1),null);
var G__16891 = G__16879;
var vec__16893 = G__16891;
var i1 = cljs.core.nth.call(null,vec__16893,(0),null);
var o1 = cljs.core.nth.call(null,vec__16893,(1),null);
var G__16890__$1 = G__16890;
var G__16891__$1 = G__16891;
while(true){
var vec__16894 = G__16890__$1;
var i2__$1 = cljs.core.nth.call(null,vec__16894,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__16894,(1),null);
var vec__16895 = G__16891__$1;
var i1__$1 = cljs.core.nth.call(null,vec__16895,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__16895,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__8048__auto__){
var temp__4126__auto___16904 = output_checker16877_16900.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___16904)){
var error__8050__auto___16905 = temp__4126__auto___16904;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__8050__auto___16905)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16905,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16874_16897,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___16896,output_schema16874_16897,input_schema16875_16898,input_checker16876_16899,output_checker16877_16900))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema16874_16897,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16875_16898], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___16984 = schema.utils.use_fn_validation;
var output_schema16906_16985 = schema.core.Any;
var input_schema16907_16986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker16908_16987 = schema.core.checker.call(null,input_schema16907_16986);
var output_checker16909_16988 = schema.core.checker.call(null,output_schema16906_16985);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988){
return (function split_schema(G__16910,G__16911){
var validate__8048__auto__ = ufv___16984.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___16989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16910,G__16911], null);
var temp__4126__auto___16990 = input_checker16908_16987.call(null,args__8049__auto___16989);
if(cljs.core.truth_(temp__4126__auto___16990)){
var error__8050__auto___16991 = temp__4126__auto___16990;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__8050__auto___16991)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___16991,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___16989,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16907_16986,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var s = G__16910;
var ks = G__16911;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4392__auto__ = ((function (ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988){
return (function iter__16948(s__16949){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988){
return (function (){
var s__16949__$1 = s__16949;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16949__$1);
if(temp__4126__auto__){
var s__16949__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16949__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__16949__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__16951 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__16950 = (0);
while(true){
if((i__16950 < size__4391__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4390__auto__,i__16950);
cljs.core.chunk_append.call(null,b__16951,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = ((function (i__16950,in_QMARK_,c__4390__auto__,size__4391__auto__,b__16951,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988){
return (function iter__16968(s__16969){
return (new cljs.core.LazySeq(null,((function (i__16950,in_QMARK_,c__4390__auto__,size__4391__auto__,b__16951,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988){
return (function (){
var s__16969__$1 = s__16969;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16969__$1);
if(temp__4126__auto____$1){
var s__16969__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16969__$2)){
var c__4390__auto____$1 = cljs.core.chunk_first.call(null,s__16969__$2);
var size__4391__auto____$1 = cljs.core.count.call(null,c__4390__auto____$1);
var b__16971 = cljs.core.chunk_buffer.call(null,size__4391__auto____$1);
if((function (){var i__16970 = (0);
while(true){
if((i__16970 < size__4391__auto____$1)){
var vec__16974 = cljs.core._nth.call(null,c__4390__auto____$1,i__16970);
var k = cljs.core.nth.call(null,vec__16974,(0),null);
var v = cljs.core.nth.call(null,vec__16974,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__16971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16992 = (i__16970 + (1));
i__16970 = G__16992;
continue;
} else {
var G__16993 = (i__16970 + (1));
i__16970 = G__16993;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16971),iter__16968.call(null,cljs.core.chunk_rest.call(null,s__16969__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16971),null);
}
} else {
var vec__16975 = cljs.core.first.call(null,s__16969__$2);
var k = cljs.core.nth.call(null,vec__16975,(0),null);
var v = cljs.core.nth.call(null,vec__16975,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__16968.call(null,cljs.core.rest.call(null,s__16969__$2)));
} else {
var G__16994 = cljs.core.rest.call(null,s__16969__$2);
s__16969__$1 = G__16994;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__16950,in_QMARK_,c__4390__auto__,size__4391__auto__,b__16951,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988))
,null,null));
});})(i__16950,in_QMARK_,c__4390__auto__,size__4391__auto__,b__16951,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988))
;
return iter__4392__auto__.call(null,s);
})()));

var G__16995 = (i__16950 + (1));
i__16950 = G__16995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16951),iter__16948.call(null,cljs.core.chunk_rest.call(null,s__16949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16951),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__16949__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = ((function (in_QMARK_,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988){
return (function iter__16976(s__16977){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988){
return (function (){
var s__16977__$1 = s__16977;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16977__$1);
if(temp__4126__auto____$1){
var s__16977__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16977__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__16977__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__16979 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__16978 = (0);
while(true){
if((i__16978 < size__4391__auto__)){
var vec__16982 = cljs.core._nth.call(null,c__4390__auto__,i__16978);
var k = cljs.core.nth.call(null,vec__16982,(0),null);
var v = cljs.core.nth.call(null,vec__16982,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__16979,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16996 = (i__16978 + (1));
i__16978 = G__16996;
continue;
} else {
var G__16997 = (i__16978 + (1));
i__16978 = G__16997;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16979),iter__16976.call(null,cljs.core.chunk_rest.call(null,s__16977__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16979),null);
}
} else {
var vec__16983 = cljs.core.first.call(null,s__16977__$2);
var k = cljs.core.nth.call(null,vec__16983,(0),null);
var v = cljs.core.nth.call(null,vec__16983,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__16976.call(null,cljs.core.rest.call(null,s__16977__$2)));
} else {
var G__16998 = cljs.core.rest.call(null,s__16977__$2);
s__16977__$1 = G__16998;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988))
,null,null));
});})(in_QMARK_,s__16949__$2,temp__4126__auto__,ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988))
;
return iter__4392__auto__.call(null,s);
})()),iter__16948.call(null,cljs.core.rest.call(null,s__16949__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988))
,null,null));
});})(ks__$1,validate__8048__auto__,ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988))
;
return iter__4392__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___16999 = output_checker16909_16988.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___16999)){
var error__8050__auto___17000 = temp__4126__auto___16999;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__8050__auto___17000)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___17000,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16906_16985,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___16984,output_schema16906_16985,input_schema16907_16986,input_checker16908_16987,output_checker16909_16988))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema16906_16985,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16907_16986], null)));
var ufv___17031 = schema.utils.use_fn_validation;
var output_schema17001_17032 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema17002_17033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker17003_17034 = schema.core.checker.call(null,input_schema17002_17033);
var output_checker17004_17035 = schema.core.checker.call(null,output_schema17001_17032);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___17031,output_schema17001_17032,input_schema17002_17033,input_checker17003_17034,output_checker17004_17035){
return (function sequence_schemata(G__17005,G__17006){
var validate__8048__auto__ = ufv___17031.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___17036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17005,G__17006], null);
var temp__4126__auto___17037 = input_checker17003_17034.call(null,args__8049__auto___17036);
if(cljs.core.truth_(temp__4126__auto___17037)){
var error__8050__auto___17038 = temp__4126__auto___17037;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__8050__auto___17038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___17038,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___17036,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17002_17033,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var G__17022 = G__17005;
var vec__17024 = G__17022;
var i1 = cljs.core.nth.call(null,vec__17024,(0),null);
var o1 = cljs.core.nth.call(null,vec__17024,(1),null);
var G__17023 = G__17006;
var vec__17025 = G__17023;
var k = cljs.core.nth.call(null,vec__17025,(0),null);
var vec__17026 = cljs.core.nth.call(null,vec__17025,(1),null);
var i2 = cljs.core.nth.call(null,vec__17026,(0),null);
var o2 = cljs.core.nth.call(null,vec__17026,(1),null);
var G__17022__$1 = G__17022;
var G__17023__$1 = G__17023;
while(true){
var vec__17027 = G__17022__$1;
var i1__$1 = cljs.core.nth.call(null,vec__17027,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__17027,(1),null);
var vec__17028 = G__17023__$1;
var k__$1 = cljs.core.nth.call(null,vec__17028,(0),null);
var vec__17029 = cljs.core.nth.call(null,vec__17028,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__17029,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__17029,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__17030 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__17030,(0),null);
var unused = cljs.core.nth.call(null,vec__17030,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___17039 = output_checker17004_17035.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___17039)){
var error__8050__auto___17040 = temp__4126__auto___17039;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__8050__auto___17040)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___17040,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17001_17032,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___17031,output_schema17001_17032,input_schema17002_17033,input_checker17003_17034,output_checker17004_17035))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema17001_17032,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17002_17033], null)));
