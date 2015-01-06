// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7916__7917__auto__){
var G__12305 = p1__7916__7917__auto__;
if(G__12305){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__12305.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__12305.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__12305);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__12305);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__12306_SHARP_){
return (cljs.core.val.call(null,p1__12306_SHARP_) > (1));
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

var vec__12308 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__12308,(0),null);
var v = cljs.core.nth.call(null,vec__12308,(1),null);
var p = vec__12308;
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
var ufv___12314 = schema.utils.use_fn_validation;
var output_schema12309_12315 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema12310_12316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker12311_12317 = schema.core.checker.call(null,input_schema12310_12316);
var output_checker12312_12318 = schema.core.checker.call(null,output_schema12309_12315);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___12314,output_schema12309_12315,input_schema12310_12316,input_checker12311_12317,output_checker12312_12318){
return (function unwrap_schema_form_key(G__12313){
var validate__7886__auto__ = ufv___12314.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___12319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12313], null);
var temp__4126__auto___12320 = input_checker12311_12317.call(null,args__7887__auto___12319);
if(cljs.core.truth_(temp__4126__auto___12320)){
var error__7888__auto___12321 = temp__4126__auto___12320;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7888__auto___12321)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12321,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12319,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12310_12316,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var k = G__12313;
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
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___12322 = output_checker12312_12318.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12322)){
var error__7888__auto___12323 = temp__4126__auto___12322;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7888__auto___12323)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12323,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12309_12315,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12314,output_schema12309_12315,input_schema12310_12316,input_checker12311_12317,output_checker12312_12318))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema12309_12315,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12310_12316], null)));
var ufv___12329 = schema.utils.use_fn_validation;
var output_schema12324_12330 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema12325_12331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker12326_12332 = schema.core.checker.call(null,input_schema12325_12331);
var output_checker12327_12333 = schema.core.checker.call(null,output_schema12324_12330);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___12329,output_schema12324_12330,input_schema12325_12331,input_checker12326_12332,output_checker12327_12333){
return (function explicit_schema_key_map(G__12328){
var validate__7886__auto__ = ufv___12329.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___12334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12328], null);
var temp__4126__auto___12335 = input_checker12326_12332.call(null,args__7887__auto___12334);
if(cljs.core.truth_(temp__4126__auto___12335)){
var error__7888__auto___12336 = temp__4126__auto___12335;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7888__auto___12336)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12336,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12334,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12325_12331,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var s = G__12328;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___12337 = output_checker12327_12333.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12337)){
var error__7888__auto___12338 = temp__4126__auto___12337;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7888__auto___12338)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12338,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12324_12330,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12329,output_schema12324_12330,input_schema12325_12331,input_checker12326_12332,output_checker12327_12333))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema12324_12330,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12325_12331], null)));
var ufv___12344 = schema.utils.use_fn_validation;
var output_schema12339_12345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema12340_12346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker12341_12347 = schema.core.checker.call(null,input_schema12340_12346);
var output_checker12342_12348 = schema.core.checker.call(null,output_schema12339_12345);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___12344,output_schema12339_12345,input_schema12340_12346,input_checker12341_12347,output_checker12342_12348){
return (function split_schema_keys(G__12343){
var validate__7886__auto__ = ufv___12344.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___12349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12343], null);
var temp__4126__auto___12350 = input_checker12341_12347.call(null,args__7887__auto___12349);
if(cljs.core.truth_(temp__4126__auto___12350)){
var error__7888__auto___12351 = temp__4126__auto___12350;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7888__auto___12351)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12351,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12349,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12340_12346,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var s = G__12343;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___12352 = output_checker12342_12348.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12352)){
var error__7888__auto___12353 = temp__4126__auto___12352;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7888__auto___12353)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12353,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12339_12345,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12344,output_schema12339_12345,input_schema12340_12346,input_checker12341_12347,output_checker12342_12348))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema12339_12345,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12340_12346], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__12357){
var vec__12358 = p__12357;
var k = cljs.core.nth.call(null,vec__12358,(0),null);
var v = cljs.core.nth.call(null,vec__12358,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__12359 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__12359,(0),null);
var ov = cljs.core.nth.call(null,vec__12359,(1),null);
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
merge_on_with.cljs$lang$applyTo = (function (arglist__12360){
var key_project = cljs.core.first(arglist__12360);
arglist__12360 = cljs.core.next(arglist__12360);
var key_combine = cljs.core.first(arglist__12360);
arglist__12360 = cljs.core.next(arglist__12360);
var val_combine = cljs.core.first(arglist__12360);
var maps = cljs.core.rest(arglist__12360);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___12368 = schema.utils.use_fn_validation;
var output_schema12362_12369 = plumbing.fnk.schema.InputSchema;
var input_schema12363_12370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker12364_12371 = schema.core.checker.call(null,input_schema12363_12370);
var output_checker12365_12372 = schema.core.checker.call(null,output_schema12362_12369);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372){
return (function union_input_schemata(G__12366,G__12367){
var validate__7886__auto__ = ufv___12368.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___12373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12366,G__12367], null);
var temp__4126__auto___12374 = input_checker12364_12371.call(null,args__7887__auto___12373);
if(cljs.core.truth_(temp__4126__auto___12374)){
var error__7888__auto___12375 = temp__4126__auto___12374;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7888__auto___12375)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12375,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12373,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12363_12370,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var i1 = G__12366;
var i2 = G__12367;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7886__auto__,ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372){
return (function (p1__12361_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__12361_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__12361_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__7886__auto__,ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372))
,((function (validate__7886__auto__,ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372){
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
});})(validate__7886__auto__,ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372))
,((function (validate__7886__auto__,ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7886__auto__,ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___12376 = output_checker12365_12372.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12376)){
var error__7888__auto___12377 = temp__4126__auto___12376;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7888__auto___12377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12377,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12362_12369,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12368,output_schema12362_12369,input_schema12363_12370,input_checker12364_12371,output_checker12365_12372))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema12362_12369,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12363_12370], null)));
var ufv___12383 = schema.utils.use_fn_validation;
var output_schema12378_12384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema12379_12385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker12380_12386 = schema.core.checker.call(null,input_schema12379_12385);
var output_checker12381_12387 = schema.core.checker.call(null,output_schema12378_12384);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___12383,output_schema12378_12384,input_schema12379_12385,input_checker12380_12386,output_checker12381_12387){
return (function required_toplevel_keys(G__12382){
var validate__7886__auto__ = ufv___12383.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___12388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12382], null);
var temp__4126__auto___12389 = input_checker12380_12386.call(null,args__7887__auto___12388);
if(cljs.core.truth_(temp__4126__auto___12389)){
var error__7888__auto___12390 = temp__4126__auto___12389;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7888__auto___12390)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12390,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12388,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12379_12385,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var input_schema = G__12382;
while(true){
return cljs.core.keep.call(null,((function (validate__7886__auto__,ufv___12383,output_schema12378_12384,input_schema12379_12385,input_checker12380_12386,output_checker12381_12387){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__7886__auto__,ufv___12383,output_schema12378_12384,input_schema12379_12385,input_checker12380_12386,output_checker12381_12387))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___12391 = output_checker12381_12387.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12391)){
var error__7888__auto___12392 = temp__4126__auto___12391;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7888__auto___12392)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12392,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12378_12384,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12383,output_schema12378_12384,input_schema12379_12385,input_checker12380_12386,output_checker12381_12387))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema12378_12384,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12379_12385], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = (function iter__12401(s__12402){
return (new cljs.core.LazySeq(null,(function (){
var s__12402__$1 = s__12402;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12402__$1);
if(temp__4126__auto__){
var s__12402__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12402__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__12402__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__12404 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__12403 = (0);
while(true){
if((i__12403 < size__4393__auto__)){
var vec__12407 = cljs.core._nth.call(null,c__4392__auto__,i__12403);
var k = cljs.core.nth.call(null,vec__12407,(0),null);
var v = cljs.core.nth.call(null,vec__12407,(1),null);
cljs.core.chunk_append.call(null,b__12404,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__12409 = (i__12403 + (1));
i__12403 = G__12409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12404),iter__12401.call(null,cljs.core.chunk_rest.call(null,s__12402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12404),null);
}
} else {
var vec__12408 = cljs.core.first.call(null,s__12402__$2);
var k = cljs.core.nth.call(null,vec__12408,(0),null);
var v = cljs.core.nth.call(null,vec__12408,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__12401.call(null,cljs.core.rest.call(null,s__12402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,expr);
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = (function iter__12418(s__12419){
return (new cljs.core.LazySeq(null,(function (){
var s__12419__$1 = s__12419;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12419__$1);
if(temp__4126__auto__){
var s__12419__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12419__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__12419__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__12421 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__12420 = (0);
while(true){
if((i__12420 < size__4393__auto__)){
var vec__12424 = cljs.core._nth.call(null,c__4392__auto__,i__12420);
var k = cljs.core.nth.call(null,vec__12424,(0),null);
var v = cljs.core.nth.call(null,vec__12424,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__12421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__12426 = (i__12420 + (1));
i__12420 = G__12426;
continue;
} else {
var G__12427 = (i__12420 + (1));
i__12420 = G__12427;
continue;
}
} else {
var G__12428 = (i__12420 + (1));
i__12420 = G__12428;
continue;
}
} else {
var G__12429 = (i__12420 + (1));
i__12420 = G__12429;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12421),iter__12418.call(null,cljs.core.chunk_rest.call(null,s__12419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12421),null);
}
} else {
var vec__12425 = cljs.core.first.call(null,s__12419__$2);
var k = cljs.core.nth.call(null,vec__12425,(0),null);
var v = cljs.core.nth.call(null,vec__12425,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__12418.call(null,cljs.core.rest.call(null,s__12419__$2)));
} else {
var G__12430 = cljs.core.rest.call(null,s__12419__$2);
s__12419__$1 = G__12430;
continue;
}
} else {
var G__12431 = cljs.core.rest.call(null,s__12419__$2);
s__12419__$1 = G__12431;
continue;
}
} else {
var G__12432 = cljs.core.rest.call(null,s__12419__$2);
s__12419__$1 = G__12432;
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
return iter__4394__auto__.call(null,input_schema);
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
var ufv___12455 = schema.utils.use_fn_validation;
var output_schema12433_12456 = schema.core.Any;
var input_schema12434_12457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker12435_12458 = schema.core.checker.call(null,input_schema12434_12457);
var output_checker12436_12459 = schema.core.checker.call(null,output_schema12433_12456);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___12455,output_schema12433_12456,input_schema12434_12457,input_checker12435_12458,output_checker12436_12459){
return (function compose_schemata(G__12437,G__12438){
var validate__7886__auto__ = true;
if(validate__7886__auto__){
var args__7887__auto___12460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12437,G__12438], null);
var temp__4126__auto___12461 = input_checker12435_12458.call(null,args__7887__auto___12460);
if(cljs.core.truth_(temp__4126__auto___12461)){
var error__7888__auto___12462 = temp__4126__auto___12461;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7888__auto___12462)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12462,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12460,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12434_12457,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var G__12449 = G__12437;
var vec__12451 = G__12449;
var i2 = cljs.core.nth.call(null,vec__12451,(0),null);
var o2 = cljs.core.nth.call(null,vec__12451,(1),null);
var G__12450 = G__12438;
var vec__12452 = G__12450;
var i1 = cljs.core.nth.call(null,vec__12452,(0),null);
var o1 = cljs.core.nth.call(null,vec__12452,(1),null);
var G__12449__$1 = G__12449;
var G__12450__$1 = G__12450;
while(true){
var vec__12453 = G__12449__$1;
var i2__$1 = cljs.core.nth.call(null,vec__12453,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__12453,(1),null);
var vec__12454 = G__12450__$1;
var i1__$1 = cljs.core.nth.call(null,vec__12454,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__12454,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__7886__auto__){
var temp__4126__auto___12463 = output_checker12436_12459.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12463)){
var error__7888__auto___12464 = temp__4126__auto___12463;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7888__auto___12464)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12464,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12433_12456,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12455,output_schema12433_12456,input_schema12434_12457,input_checker12435_12458,output_checker12436_12459))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema12433_12456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12434_12457], null)));
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
var ufv___12543 = schema.utils.use_fn_validation;
var output_schema12465_12544 = schema.core.Any;
var input_schema12466_12545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker12467_12546 = schema.core.checker.call(null,input_schema12466_12545);
var output_checker12468_12547 = schema.core.checker.call(null,output_schema12465_12544);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547){
return (function split_schema(G__12469,G__12470){
var validate__7886__auto__ = ufv___12543.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___12548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12469,G__12470], null);
var temp__4126__auto___12549 = input_checker12467_12546.call(null,args__7887__auto___12548);
if(cljs.core.truth_(temp__4126__auto___12549)){
var error__7888__auto___12550 = temp__4126__auto___12549;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7888__auto___12550)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12550,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12548,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12466_12545,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var s = G__12469;
var ks = G__12470;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4394__auto__ = ((function (ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547){
return (function iter__12507(s__12508){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547){
return (function (){
var s__12508__$1 = s__12508;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12508__$1);
if(temp__4126__auto__){
var s__12508__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12508__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__12508__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__12510 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__12509 = (0);
while(true){
if((i__12509 < size__4393__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4392__auto__,i__12509);
cljs.core.chunk_append.call(null,b__12510,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = ((function (i__12509,in_QMARK_,c__4392__auto__,size__4393__auto__,b__12510,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547){
return (function iter__12527(s__12528){
return (new cljs.core.LazySeq(null,((function (i__12509,in_QMARK_,c__4392__auto__,size__4393__auto__,b__12510,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547){
return (function (){
var s__12528__$1 = s__12528;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12528__$1);
if(temp__4126__auto____$1){
var s__12528__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12528__$2)){
var c__4392__auto____$1 = cljs.core.chunk_first.call(null,s__12528__$2);
var size__4393__auto____$1 = cljs.core.count.call(null,c__4392__auto____$1);
var b__12530 = cljs.core.chunk_buffer.call(null,size__4393__auto____$1);
if((function (){var i__12529 = (0);
while(true){
if((i__12529 < size__4393__auto____$1)){
var vec__12533 = cljs.core._nth.call(null,c__4392__auto____$1,i__12529);
var k = cljs.core.nth.call(null,vec__12533,(0),null);
var v = cljs.core.nth.call(null,vec__12533,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__12530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__12551 = (i__12529 + (1));
i__12529 = G__12551;
continue;
} else {
var G__12552 = (i__12529 + (1));
i__12529 = G__12552;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12530),iter__12527.call(null,cljs.core.chunk_rest.call(null,s__12528__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12530),null);
}
} else {
var vec__12534 = cljs.core.first.call(null,s__12528__$2);
var k = cljs.core.nth.call(null,vec__12534,(0),null);
var v = cljs.core.nth.call(null,vec__12534,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__12527.call(null,cljs.core.rest.call(null,s__12528__$2)));
} else {
var G__12553 = cljs.core.rest.call(null,s__12528__$2);
s__12528__$1 = G__12553;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__12509,in_QMARK_,c__4392__auto__,size__4393__auto__,b__12510,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547))
,null,null));
});})(i__12509,in_QMARK_,c__4392__auto__,size__4393__auto__,b__12510,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547))
;
return iter__4394__auto__.call(null,s);
})()));

var G__12554 = (i__12509 + (1));
i__12509 = G__12554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12510),iter__12507.call(null,cljs.core.chunk_rest.call(null,s__12508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12510),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__12508__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = ((function (in_QMARK_,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547){
return (function iter__12535(s__12536){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547){
return (function (){
var s__12536__$1 = s__12536;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12536__$1);
if(temp__4126__auto____$1){
var s__12536__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12536__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__12536__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__12538 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__12537 = (0);
while(true){
if((i__12537 < size__4393__auto__)){
var vec__12541 = cljs.core._nth.call(null,c__4392__auto__,i__12537);
var k = cljs.core.nth.call(null,vec__12541,(0),null);
var v = cljs.core.nth.call(null,vec__12541,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__12538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__12555 = (i__12537 + (1));
i__12537 = G__12555;
continue;
} else {
var G__12556 = (i__12537 + (1));
i__12537 = G__12556;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12538),iter__12535.call(null,cljs.core.chunk_rest.call(null,s__12536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12538),null);
}
} else {
var vec__12542 = cljs.core.first.call(null,s__12536__$2);
var k = cljs.core.nth.call(null,vec__12542,(0),null);
var v = cljs.core.nth.call(null,vec__12542,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__12535.call(null,cljs.core.rest.call(null,s__12536__$2)));
} else {
var G__12557 = cljs.core.rest.call(null,s__12536__$2);
s__12536__$1 = G__12557;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547))
,null,null));
});})(in_QMARK_,s__12508__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547))
;
return iter__4394__auto__.call(null,s);
})()),iter__12507.call(null,cljs.core.rest.call(null,s__12508__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547))
,null,null));
});})(ks__$1,validate__7886__auto__,ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547))
;
return iter__4394__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___12558 = output_checker12468_12547.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12558)){
var error__7888__auto___12559 = temp__4126__auto___12558;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7888__auto___12559)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12559,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12465_12544,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12543,output_schema12465_12544,input_schema12466_12545,input_checker12467_12546,output_checker12468_12547))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema12465_12544,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12466_12545], null)));
var ufv___12590 = schema.utils.use_fn_validation;
var output_schema12560_12591 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema12561_12592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker12562_12593 = schema.core.checker.call(null,input_schema12561_12592);
var output_checker12563_12594 = schema.core.checker.call(null,output_schema12560_12591);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___12590,output_schema12560_12591,input_schema12561_12592,input_checker12562_12593,output_checker12563_12594){
return (function sequence_schemata(G__12564,G__12565){
var validate__7886__auto__ = ufv___12590.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___12595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12564,G__12565], null);
var temp__4126__auto___12596 = input_checker12562_12593.call(null,args__7887__auto___12595);
if(cljs.core.truth_(temp__4126__auto___12596)){
var error__7888__auto___12597 = temp__4126__auto___12596;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7888__auto___12597)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12597,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___12595,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12561_12592,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var G__12581 = G__12564;
var vec__12583 = G__12581;
var i1 = cljs.core.nth.call(null,vec__12583,(0),null);
var o1 = cljs.core.nth.call(null,vec__12583,(1),null);
var G__12582 = G__12565;
var vec__12584 = G__12582;
var k = cljs.core.nth.call(null,vec__12584,(0),null);
var vec__12585 = cljs.core.nth.call(null,vec__12584,(1),null);
var i2 = cljs.core.nth.call(null,vec__12585,(0),null);
var o2 = cljs.core.nth.call(null,vec__12585,(1),null);
var G__12581__$1 = G__12581;
var G__12582__$1 = G__12582;
while(true){
var vec__12586 = G__12581__$1;
var i1__$1 = cljs.core.nth.call(null,vec__12586,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__12586,(1),null);
var vec__12587 = G__12582__$1;
var k__$1 = cljs.core.nth.call(null,vec__12587,(0),null);
var vec__12588 = cljs.core.nth.call(null,vec__12587,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__12588,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__12588,(1),null);
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

var vec__12589 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__12589,(0),null);
var unused = cljs.core.nth.call(null,vec__12589,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___12598 = output_checker12563_12594.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___12598)){
var error__7888__auto___12599 = temp__4126__auto___12598;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7888__auto___12599)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___12599,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12560_12591,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___12590,output_schema12560_12591,input_schema12561_12592,input_checker12562_12593,output_checker12563_12594))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema12560_12591,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12561_12592], null)));
