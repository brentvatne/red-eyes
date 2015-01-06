// Compiled by ClojureScript 0.0-2511
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7916__7917__auto__){
var G__16679 = p1__7916__7917__auto__;
if(G__16679){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__16679.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__16679.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__16679);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__16679);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__16680_SHARP_){
return (cljs.core.val.call(null,p1__16680_SHARP_) > (1));
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

var vec__16682 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__16682,(0),null);
var v = cljs.core.nth.call(null,vec__16682,(1),null);
var p = vec__16682;
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
var ufv___16688 = schema.utils.use_fn_validation;
var output_schema16683_16689 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema16684_16690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker16685_16691 = schema.core.checker.call(null,input_schema16684_16690);
var output_checker16686_16692 = schema.core.checker.call(null,output_schema16683_16689);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___16688,output_schema16683_16689,input_schema16684_16690,input_checker16685_16691,output_checker16686_16692){
return (function unwrap_schema_form_key(G__16687){
var validate__7886__auto__ = ufv___16688.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___16693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16687], null);
var temp__4126__auto___16694 = input_checker16685_16691.call(null,args__7887__auto___16693);
if(cljs.core.truth_(temp__4126__auto___16694)){
var error__7888__auto___16695 = temp__4126__auto___16694;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7888__auto___16695)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16695,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16693,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16684_16690,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var k = G__16687;
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
var temp__4126__auto___16696 = output_checker16686_16692.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16696)){
var error__7888__auto___16697 = temp__4126__auto___16696;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7888__auto___16697)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16697,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16683_16689,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16688,output_schema16683_16689,input_schema16684_16690,input_checker16685_16691,output_checker16686_16692))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema16683_16689,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16684_16690], null)));
var ufv___16703 = schema.utils.use_fn_validation;
var output_schema16698_16704 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema16699_16705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker16700_16706 = schema.core.checker.call(null,input_schema16699_16705);
var output_checker16701_16707 = schema.core.checker.call(null,output_schema16698_16704);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___16703,output_schema16698_16704,input_schema16699_16705,input_checker16700_16706,output_checker16701_16707){
return (function explicit_schema_key_map(G__16702){
var validate__7886__auto__ = ufv___16703.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___16708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16702], null);
var temp__4126__auto___16709 = input_checker16700_16706.call(null,args__7887__auto___16708);
if(cljs.core.truth_(temp__4126__auto___16709)){
var error__7888__auto___16710 = temp__4126__auto___16709;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7888__auto___16710)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16710,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16708,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16699_16705,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var s = G__16702;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___16711 = output_checker16701_16707.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16711)){
var error__7888__auto___16712 = temp__4126__auto___16711;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7888__auto___16712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16712,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16698_16704,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16703,output_schema16698_16704,input_schema16699_16705,input_checker16700_16706,output_checker16701_16707))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema16698_16704,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16699_16705], null)));
var ufv___16718 = schema.utils.use_fn_validation;
var output_schema16713_16719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema16714_16720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker16715_16721 = schema.core.checker.call(null,input_schema16714_16720);
var output_checker16716_16722 = schema.core.checker.call(null,output_schema16713_16719);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___16718,output_schema16713_16719,input_schema16714_16720,input_checker16715_16721,output_checker16716_16722){
return (function split_schema_keys(G__16717){
var validate__7886__auto__ = ufv___16718.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___16723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16717], null);
var temp__4126__auto___16724 = input_checker16715_16721.call(null,args__7887__auto___16723);
if(cljs.core.truth_(temp__4126__auto___16724)){
var error__7888__auto___16725 = temp__4126__auto___16724;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7888__auto___16725)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16725,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16723,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16714_16720,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var s = G__16717;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___16726 = output_checker16716_16722.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16726)){
var error__7888__auto___16727 = temp__4126__auto___16726;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7888__auto___16727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16727,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16713_16719,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16718,output_schema16713_16719,input_schema16714_16720,input_checker16715_16721,output_checker16716_16722))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema16713_16719,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16714_16720], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__16731){
var vec__16732 = p__16731;
var k = cljs.core.nth.call(null,vec__16732,(0),null);
var v = cljs.core.nth.call(null,vec__16732,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__16733 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__16733,(0),null);
var ov = cljs.core.nth.call(null,vec__16733,(1),null);
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
merge_on_with.cljs$lang$applyTo = (function (arglist__16734){
var key_project = cljs.core.first(arglist__16734);
arglist__16734 = cljs.core.next(arglist__16734);
var key_combine = cljs.core.first(arglist__16734);
arglist__16734 = cljs.core.next(arglist__16734);
var val_combine = cljs.core.first(arglist__16734);
var maps = cljs.core.rest(arglist__16734);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___16742 = schema.utils.use_fn_validation;
var output_schema16736_16743 = plumbing.fnk.schema.InputSchema;
var input_schema16737_16744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker16738_16745 = schema.core.checker.call(null,input_schema16737_16744);
var output_checker16739_16746 = schema.core.checker.call(null,output_schema16736_16743);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746){
return (function union_input_schemata(G__16740,G__16741){
var validate__7886__auto__ = ufv___16742.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___16747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16740,G__16741], null);
var temp__4126__auto___16748 = input_checker16738_16745.call(null,args__7887__auto___16747);
if(cljs.core.truth_(temp__4126__auto___16748)){
var error__7888__auto___16749 = temp__4126__auto___16748;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7888__auto___16749)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16749,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16747,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16737_16744,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var i1 = G__16740;
var i2 = G__16741;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7886__auto__,ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746){
return (function (p1__16735_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__16735_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__16735_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__7886__auto__,ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746))
,((function (validate__7886__auto__,ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746){
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
});})(validate__7886__auto__,ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746))
,((function (validate__7886__auto__,ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7886__auto__,ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___16750 = output_checker16739_16746.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16750)){
var error__7888__auto___16751 = temp__4126__auto___16750;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7888__auto___16751)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16751,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16736_16743,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16742,output_schema16736_16743,input_schema16737_16744,input_checker16738_16745,output_checker16739_16746))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema16736_16743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16737_16744], null)));
var ufv___16757 = schema.utils.use_fn_validation;
var output_schema16752_16758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema16753_16759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker16754_16760 = schema.core.checker.call(null,input_schema16753_16759);
var output_checker16755_16761 = schema.core.checker.call(null,output_schema16752_16758);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___16757,output_schema16752_16758,input_schema16753_16759,input_checker16754_16760,output_checker16755_16761){
return (function required_toplevel_keys(G__16756){
var validate__7886__auto__ = ufv___16757.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___16762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16756], null);
var temp__4126__auto___16763 = input_checker16754_16760.call(null,args__7887__auto___16762);
if(cljs.core.truth_(temp__4126__auto___16763)){
var error__7888__auto___16764 = temp__4126__auto___16763;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7888__auto___16764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16764,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16762,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16753_16759,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var input_schema = G__16756;
while(true){
return cljs.core.keep.call(null,((function (validate__7886__auto__,ufv___16757,output_schema16752_16758,input_schema16753_16759,input_checker16754_16760,output_checker16755_16761){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__7886__auto__,ufv___16757,output_schema16752_16758,input_schema16753_16759,input_checker16754_16760,output_checker16755_16761))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___16765 = output_checker16755_16761.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16765)){
var error__7888__auto___16766 = temp__4126__auto___16765;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7888__auto___16766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16766,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16752_16758,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16757,output_schema16752_16758,input_schema16753_16759,input_checker16754_16760,output_checker16755_16761))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema16752_16758,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16753_16759], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = (function iter__16775(s__16776){
return (new cljs.core.LazySeq(null,(function (){
var s__16776__$1 = s__16776;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16776__$1);
if(temp__4126__auto__){
var s__16776__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16776__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__16776__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__16778 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__16777 = (0);
while(true){
if((i__16777 < size__4393__auto__)){
var vec__16781 = cljs.core._nth.call(null,c__4392__auto__,i__16777);
var k = cljs.core.nth.call(null,vec__16781,(0),null);
var v = cljs.core.nth.call(null,vec__16781,(1),null);
cljs.core.chunk_append.call(null,b__16778,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__16783 = (i__16777 + (1));
i__16777 = G__16783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16778),iter__16775.call(null,cljs.core.chunk_rest.call(null,s__16776__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16778),null);
}
} else {
var vec__16782 = cljs.core.first.call(null,s__16776__$2);
var k = cljs.core.nth.call(null,vec__16782,(0),null);
var v = cljs.core.nth.call(null,vec__16782,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__16775.call(null,cljs.core.rest.call(null,s__16776__$2)));
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = (function iter__16792(s__16793){
return (new cljs.core.LazySeq(null,(function (){
var s__16793__$1 = s__16793;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16793__$1);
if(temp__4126__auto__){
var s__16793__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16793__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__16793__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__16795 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__16794 = (0);
while(true){
if((i__16794 < size__4393__auto__)){
var vec__16798 = cljs.core._nth.call(null,c__4392__auto__,i__16794);
var k = cljs.core.nth.call(null,vec__16798,(0),null);
var v = cljs.core.nth.call(null,vec__16798,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__16795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__16800 = (i__16794 + (1));
i__16794 = G__16800;
continue;
} else {
var G__16801 = (i__16794 + (1));
i__16794 = G__16801;
continue;
}
} else {
var G__16802 = (i__16794 + (1));
i__16794 = G__16802;
continue;
}
} else {
var G__16803 = (i__16794 + (1));
i__16794 = G__16803;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16795),iter__16792.call(null,cljs.core.chunk_rest.call(null,s__16793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16795),null);
}
} else {
var vec__16799 = cljs.core.first.call(null,s__16793__$2);
var k = cljs.core.nth.call(null,vec__16799,(0),null);
var v = cljs.core.nth.call(null,vec__16799,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__16792.call(null,cljs.core.rest.call(null,s__16793__$2)));
} else {
var G__16804 = cljs.core.rest.call(null,s__16793__$2);
s__16793__$1 = G__16804;
continue;
}
} else {
var G__16805 = cljs.core.rest.call(null,s__16793__$2);
s__16793__$1 = G__16805;
continue;
}
} else {
var G__16806 = cljs.core.rest.call(null,s__16793__$2);
s__16793__$1 = G__16806;
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
var ufv___16829 = schema.utils.use_fn_validation;
var output_schema16807_16830 = schema.core.Any;
var input_schema16808_16831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker16809_16832 = schema.core.checker.call(null,input_schema16808_16831);
var output_checker16810_16833 = schema.core.checker.call(null,output_schema16807_16830);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___16829,output_schema16807_16830,input_schema16808_16831,input_checker16809_16832,output_checker16810_16833){
return (function compose_schemata(G__16811,G__16812){
var validate__7886__auto__ = true;
if(validate__7886__auto__){
var args__7887__auto___16834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16811,G__16812], null);
var temp__4126__auto___16835 = input_checker16809_16832.call(null,args__7887__auto___16834);
if(cljs.core.truth_(temp__4126__auto___16835)){
var error__7888__auto___16836 = temp__4126__auto___16835;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7888__auto___16836)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16836,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16834,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16808_16831,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var G__16823 = G__16811;
var vec__16825 = G__16823;
var i2 = cljs.core.nth.call(null,vec__16825,(0),null);
var o2 = cljs.core.nth.call(null,vec__16825,(1),null);
var G__16824 = G__16812;
var vec__16826 = G__16824;
var i1 = cljs.core.nth.call(null,vec__16826,(0),null);
var o1 = cljs.core.nth.call(null,vec__16826,(1),null);
var G__16823__$1 = G__16823;
var G__16824__$1 = G__16824;
while(true){
var vec__16827 = G__16823__$1;
var i2__$1 = cljs.core.nth.call(null,vec__16827,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__16827,(1),null);
var vec__16828 = G__16824__$1;
var i1__$1 = cljs.core.nth.call(null,vec__16828,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__16828,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__7886__auto__){
var temp__4126__auto___16837 = output_checker16810_16833.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16837)){
var error__7888__auto___16838 = temp__4126__auto___16837;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7888__auto___16838)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16838,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16807_16830,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16829,output_schema16807_16830,input_schema16808_16831,input_checker16809_16832,output_checker16810_16833))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema16807_16830,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16808_16831], null)));
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
var ufv___16917 = schema.utils.use_fn_validation;
var output_schema16839_16918 = schema.core.Any;
var input_schema16840_16919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker16841_16920 = schema.core.checker.call(null,input_schema16840_16919);
var output_checker16842_16921 = schema.core.checker.call(null,output_schema16839_16918);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921){
return (function split_schema(G__16843,G__16844){
var validate__7886__auto__ = ufv___16917.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___16922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16843,G__16844], null);
var temp__4126__auto___16923 = input_checker16841_16920.call(null,args__7887__auto___16922);
if(cljs.core.truth_(temp__4126__auto___16923)){
var error__7888__auto___16924 = temp__4126__auto___16923;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7888__auto___16924)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16924,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16922,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16840_16919,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var s = G__16843;
var ks = G__16844;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4394__auto__ = ((function (ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921){
return (function iter__16881(s__16882){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921){
return (function (){
var s__16882__$1 = s__16882;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16882__$1);
if(temp__4126__auto__){
var s__16882__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16882__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__16882__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__16884 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__16883 = (0);
while(true){
if((i__16883 < size__4393__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4392__auto__,i__16883);
cljs.core.chunk_append.call(null,b__16884,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = ((function (i__16883,in_QMARK_,c__4392__auto__,size__4393__auto__,b__16884,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921){
return (function iter__16901(s__16902){
return (new cljs.core.LazySeq(null,((function (i__16883,in_QMARK_,c__4392__auto__,size__4393__auto__,b__16884,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921){
return (function (){
var s__16902__$1 = s__16902;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16902__$1);
if(temp__4126__auto____$1){
var s__16902__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16902__$2)){
var c__4392__auto____$1 = cljs.core.chunk_first.call(null,s__16902__$2);
var size__4393__auto____$1 = cljs.core.count.call(null,c__4392__auto____$1);
var b__16904 = cljs.core.chunk_buffer.call(null,size__4393__auto____$1);
if((function (){var i__16903 = (0);
while(true){
if((i__16903 < size__4393__auto____$1)){
var vec__16907 = cljs.core._nth.call(null,c__4392__auto____$1,i__16903);
var k = cljs.core.nth.call(null,vec__16907,(0),null);
var v = cljs.core.nth.call(null,vec__16907,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__16904,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16925 = (i__16903 + (1));
i__16903 = G__16925;
continue;
} else {
var G__16926 = (i__16903 + (1));
i__16903 = G__16926;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16904),iter__16901.call(null,cljs.core.chunk_rest.call(null,s__16902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16904),null);
}
} else {
var vec__16908 = cljs.core.first.call(null,s__16902__$2);
var k = cljs.core.nth.call(null,vec__16908,(0),null);
var v = cljs.core.nth.call(null,vec__16908,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__16901.call(null,cljs.core.rest.call(null,s__16902__$2)));
} else {
var G__16927 = cljs.core.rest.call(null,s__16902__$2);
s__16902__$1 = G__16927;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__16883,in_QMARK_,c__4392__auto__,size__4393__auto__,b__16884,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921))
,null,null));
});})(i__16883,in_QMARK_,c__4392__auto__,size__4393__auto__,b__16884,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921))
;
return iter__4394__auto__.call(null,s);
})()));

var G__16928 = (i__16883 + (1));
i__16883 = G__16928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16884),iter__16881.call(null,cljs.core.chunk_rest.call(null,s__16882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16884),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__16882__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4394__auto__ = ((function (in_QMARK_,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921){
return (function iter__16909(s__16910){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921){
return (function (){
var s__16910__$1 = s__16910;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16910__$1);
if(temp__4126__auto____$1){
var s__16910__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16910__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__16910__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__16912 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__16911 = (0);
while(true){
if((i__16911 < size__4393__auto__)){
var vec__16915 = cljs.core._nth.call(null,c__4392__auto__,i__16911);
var k = cljs.core.nth.call(null,vec__16915,(0),null);
var v = cljs.core.nth.call(null,vec__16915,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__16912,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16929 = (i__16911 + (1));
i__16911 = G__16929;
continue;
} else {
var G__16930 = (i__16911 + (1));
i__16911 = G__16930;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16912),iter__16909.call(null,cljs.core.chunk_rest.call(null,s__16910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16912),null);
}
} else {
var vec__16916 = cljs.core.first.call(null,s__16910__$2);
var k = cljs.core.nth.call(null,vec__16916,(0),null);
var v = cljs.core.nth.call(null,vec__16916,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__16909.call(null,cljs.core.rest.call(null,s__16910__$2)));
} else {
var G__16931 = cljs.core.rest.call(null,s__16910__$2);
s__16910__$1 = G__16931;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921))
,null,null));
});})(in_QMARK_,s__16882__$2,temp__4126__auto__,ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921))
;
return iter__4394__auto__.call(null,s);
})()),iter__16881.call(null,cljs.core.rest.call(null,s__16882__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921))
,null,null));
});})(ks__$1,validate__7886__auto__,ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921))
;
return iter__4394__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___16932 = output_checker16842_16921.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16932)){
var error__7888__auto___16933 = temp__4126__auto___16932;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7888__auto___16933)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16933,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16839_16918,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16917,output_schema16839_16918,input_schema16840_16919,input_checker16841_16920,output_checker16842_16921))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema16839_16918,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16840_16919], null)));
var ufv___16964 = schema.utils.use_fn_validation;
var output_schema16934_16965 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema16935_16966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker16936_16967 = schema.core.checker.call(null,input_schema16935_16966);
var output_checker16937_16968 = schema.core.checker.call(null,output_schema16934_16965);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___16964,output_schema16934_16965,input_schema16935_16966,input_checker16936_16967,output_checker16937_16968){
return (function sequence_schemata(G__16938,G__16939){
var validate__7886__auto__ = ufv___16964.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___16969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16938,G__16939], null);
var temp__4126__auto___16970 = input_checker16936_16967.call(null,args__7887__auto___16969);
if(cljs.core.truth_(temp__4126__auto___16970)){
var error__7888__auto___16971 = temp__4126__auto___16970;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7888__auto___16971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16971,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___16969,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16935_16966,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var G__16955 = G__16938;
var vec__16957 = G__16955;
var i1 = cljs.core.nth.call(null,vec__16957,(0),null);
var o1 = cljs.core.nth.call(null,vec__16957,(1),null);
var G__16956 = G__16939;
var vec__16958 = G__16956;
var k = cljs.core.nth.call(null,vec__16958,(0),null);
var vec__16959 = cljs.core.nth.call(null,vec__16958,(1),null);
var i2 = cljs.core.nth.call(null,vec__16959,(0),null);
var o2 = cljs.core.nth.call(null,vec__16959,(1),null);
var G__16955__$1 = G__16955;
var G__16956__$1 = G__16956;
while(true){
var vec__16960 = G__16955__$1;
var i1__$1 = cljs.core.nth.call(null,vec__16960,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__16960,(1),null);
var vec__16961 = G__16956__$1;
var k__$1 = cljs.core.nth.call(null,vec__16961,(0),null);
var vec__16962 = cljs.core.nth.call(null,vec__16961,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__16962,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__16962,(1),null);
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

var vec__16963 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__16963,(0),null);
var unused = cljs.core.nth.call(null,vec__16963,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___16972 = output_checker16937_16968.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___16972)){
var error__7888__auto___16973 = temp__4126__auto___16972;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7888__auto___16973)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___16973,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16934_16965,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___16964,output_schema16934_16965,input_schema16935_16966,input_checker16936_16967,output_checker16937_16968))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema16934_16965,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16935_16966], null)));
