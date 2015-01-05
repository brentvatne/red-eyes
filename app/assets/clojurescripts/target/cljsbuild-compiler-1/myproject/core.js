// Compiled by ClojureScript 0.0-2511
goog.provide('myproject.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
myproject.core.log = (function log(msg){
return console.log(msg);
});

var ufv___12249 = schema.utils.use_fn_validation;
var output_schema12237_12250 = schema.core.Any;
var input_schema12238_12251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"name","name",-810760592,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker12239_12252 = schema.core.checker.call(null,input_schema12238_12251);
var output_checker12240_12253 = schema.core.checker.call(null,output_schema12237_12250);
/**
* Inputs: [name owner]
*/
myproject.core.child_component = ((function (ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function child_component(G__12241,G__12242){
var validate__8050__auto__ = ufv___12249.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___12254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12241,G__12242], null);
var temp__4126__auto___12255 = input_checker12239_12252.call(null,args__8051__auto___12254);
if(cljs.core.truth_(temp__4126__auto___12255)){
var error__8052__auto___12256 = temp__4126__auto___12255;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-component","child-component",-574562502,null),cljs.core.pr_str.call(null,error__8052__auto___12256)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___12256,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___12254,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12238_12251,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var name = G__12241;
var owner = G__12242;
while(true){
if(typeof myproject.core.t12246 !== 'undefined'){
} else {

/**
* @constructor
*/
myproject.core.t12246 = (function (output_schema12237,G__12241,owner,validate__8050__auto__,input_checker12239,input_schema12238,name,output_checker12240,child_component,G__12242,ufv__,meta12247){
this.output_schema12237 = output_schema12237;
this.G__12241 = G__12241;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.input_checker12239 = input_checker12239;
this.input_schema12238 = input_schema12238;
this.name = name;
this.output_checker12240 = output_checker12240;
this.child_component = child_component;
this.G__12242 = G__12242;
this.ufv__ = ufv__;
this.meta12247 = meta12247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
myproject.core.t12246.prototype.om$core$IDisplayName$ = true;

myproject.core.t12246.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function (_){
var self__ = this;
var ___$1 = this;
return "child-component";
});})(validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

myproject.core.t12246.prototype.om$core$IRender$ = true;

myproject.core.t12246.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Hi, I am ",self__.name,"!"],null))));
});})(validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

myproject.core.t12246.prototype.om$core$IDidMount$ = true;

myproject.core.t12246.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function (_){
var self__ = this;
var ___$1 = this;
myproject.core.log.call(null,self__.owner);

return myproject.core.log.call(null,"mounted child-component");
});})(validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

myproject.core.t12246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function (_12248){
var self__ = this;
var _12248__$1 = this;
return self__.meta12247;
});})(validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

myproject.core.t12246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function (_12248,meta12247__$1){
var self__ = this;
var _12248__$1 = this;
return (new myproject.core.t12246(self__.output_schema12237,self__.G__12241,self__.owner,self__.validate__8050__auto__,self__.input_checker12239,self__.input_schema12238,self__.name,self__.output_checker12240,self__.child_component,self__.G__12242,self__.ufv__,meta12247__$1));
});})(validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

myproject.core.t12246.cljs$lang$type = true;

myproject.core.t12246.cljs$lang$ctorStr = "myproject.core/t12246";

myproject.core.t12246.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"myproject.core/t12246");
});})(validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

myproject.core.__GT_t12246 = ((function (validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253){
return (function __GT_t12246(output_schema12237__$1,G__12241__$1,owner__$1,validate__8050__auto____$1,input_checker12239__$1,input_schema12238__$1,name__$1,output_checker12240__$1,child_component__$1,G__12242__$1,ufv____$1,meta12247){
return (new myproject.core.t12246(output_schema12237__$1,G__12241__$1,owner__$1,validate__8050__auto____$1,input_checker12239__$1,input_schema12238__$1,name__$1,output_checker12240__$1,child_component__$1,G__12242__$1,ufv____$1,meta12247));
});})(validate__8050__auto__,ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

}

return (new myproject.core.t12246(output_schema12237_12250,G__12241,owner,validate__8050__auto__,input_checker12239_12252,input_schema12238_12251,name,output_checker12240_12253,child_component,G__12242,ufv___12249,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___12257 = output_checker12240_12253.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___12257)){
var error__8052__auto___12258 = temp__4126__auto___12257;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-component","child-component",-574562502,null),cljs.core.pr_str.call(null,error__8052__auto___12258)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___12258,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12237_12250,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___12249,output_schema12237_12250,input_schema12238_12251,input_checker12239_12252,output_checker12240_12253))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,myproject.core.child_component),schema.core.make_fn_schema.call(null,output_schema12237_12250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12238_12251], null)));

myproject.core.__GT_child_component = (function() {
var __GT_child_component = null;
var __GT_child_component__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,myproject.core.child_component,cursor__9838__auto__);
});
var __GT_child_component__2 = (function (cursor__9838__auto__,m12236){
return om.core.build.call(null,myproject.core.child_component,cursor__9838__auto__,m12236);
});
__GT_child_component = function(cursor__9838__auto__,m12236){
switch(arguments.length){
case 1:
return __GT_child_component__1.call(this,cursor__9838__auto__);
case 2:
return __GT_child_component__2.call(this,cursor__9838__auto__,m12236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_child_component.cljs$core$IFn$_invoke$arity$1 = __GT_child_component__1;
__GT_child_component.cljs$core$IFn$_invoke$arity$2 = __GT_child_component__2;
return __GT_child_component;
})()
;

var component_fnk__9869__auto___12278 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema12264 = schema.core.Any;
var input_schema12265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"age","age",-604307804),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map12262","map12262",-291933693,null))], null);
var input_checker12266 = schema.core.checker.call(null,input_schema12265);
var output_checker12267 = schema.core.checker.call(null,output_schema12264);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267){
return (function constructor12260(G__12268){
var validate__8050__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___12279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12268], null);
var temp__4126__auto___12280 = input_checker12266.call(null,args__8051__auto___12279);
if(cljs.core.truth_(temp__4126__auto___12280)){
var error__8052__auto___12281 = temp__4126__auto___12280;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor12260","constructor12260",-2006665135,null),cljs.core.pr_str.call(null,error__8052__auto___12281)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___12281,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___12279,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12265,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var map12262 = G__12268;
while(true){
if(cljs.core.map_QMARK_.call(null,map12262)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map12262)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map12262,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var map12263 = plumbing.fnk.schema.safe_get.call(null,map12262,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var name = plumbing.fnk.schema.safe_get.call(null,map12263,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var age = plumbing.fnk.schema.safe_get.call(null,map12263,new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(typeof myproject.core.t12272 !== 'undefined'){
} else {

/**
* @constructor
*/
myproject.core.t12272 = (function (map12262,owner,validate__8050__auto__,map12263,age,output_checker12267,name,constructor12260,input_schema12265,output_schema12264,input_checker12266,G__12268,ufv__,meta12273){
this.map12262 = map12262;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.map12263 = map12263;
this.age = age;
this.output_checker12267 = output_checker12267;
this.name = name;
this.constructor12260 = constructor12260;
this.input_schema12265 = input_schema12265;
this.output_schema12264 = output_schema12264;
this.input_checker12266 = input_checker12266;
this.G__12268 = G__12268;
this.ufv__ = ufv__;
this.meta12273 = meta12273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
myproject.core.t12272.prototype.om$core$IDisplayName$ = true;

myproject.core.t12272.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267){
return (function (_){
var self__ = this;
var ___$1 = this;
return "parent-component";
});})(age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267))
;

myproject.core.t12272.prototype.om$core$IRender$ = true;

myproject.core.t12272.prototype.om$core$IRender$render$arity$1 = ((function (age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267){
return (function (_){
var self__ = this;
var ___$1 = this;
myproject.core.log.call(null,self__.name);

myproject.core.log.call(null,self__.age);

return om.core.build.call(null,myproject.core.child_component,self__.name);
});})(age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267))
;

myproject.core.t12272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267){
return (function (_12274){
var self__ = this;
var _12274__$1 = this;
return self__.meta12273;
});})(age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267))
;

myproject.core.t12272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267){
return (function (_12274,meta12273__$1){
var self__ = this;
var _12274__$1 = this;
return (new myproject.core.t12272(self__.map12262,self__.owner,self__.validate__8050__auto__,self__.map12263,self__.age,self__.output_checker12267,self__.name,self__.constructor12260,self__.input_schema12265,self__.output_schema12264,self__.input_checker12266,self__.G__12268,self__.ufv__,meta12273__$1));
});})(age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267))
;

myproject.core.t12272.cljs$lang$type = true;

myproject.core.t12272.cljs$lang$ctorStr = "myproject.core/t12272";

myproject.core.t12272.cljs$lang$ctorPrWriter = ((function (age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"myproject.core/t12272");
});})(age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267))
;

myproject.core.__GT_t12272 = ((function (age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267){
return (function __GT_t12272(map12262__$1,owner__$1,validate__8050__auto____$1,map12263__$1,age__$1,output_checker12267__$1,name__$1,constructor12260__$1,input_schema12265__$1,output_schema12264__$1,input_checker12266__$1,G__12268__$1,ufv____$1,meta12273){
return (new myproject.core.t12272(map12262__$1,owner__$1,validate__8050__auto____$1,map12263__$1,age__$1,output_checker12267__$1,name__$1,constructor12260__$1,input_schema12265__$1,output_schema12264__$1,input_checker12266__$1,G__12268__$1,ufv____$1,meta12273));
});})(age,name,map12263,owner,validate__8050__auto__,ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267))
;

}

return (new myproject.core.t12272(map12262,owner,validate__8050__auto__,map12263,age,output_checker12267,name,constructor12260,input_schema12265,output_schema12264,input_checker12266,G__12268,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___12282 = output_checker12267.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___12282)){
var error__8052__auto___12283 = temp__4126__auto___12282;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor12260","constructor12260",-2006665135,null),cljs.core.pr_str.call(null,error__8052__auto___12283)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___12283,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12264,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv__,output_schema12264,input_schema12265,input_checker12266,output_checker12267))
,schema.core.make_fn_schema.call(null,output_schema12264,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12265], null)));
})();
/**
* @param {...*} var_args
*/
myproject.core.parent_component = ((function (component_fnk__9869__auto___12278){
return (function() { 
var parent_component__delegate = function (data__9870__auto__,owner12259,p__12275){
var vec__12277 = p__12275;
var opts__9871__auto__ = cljs.core.nth.call(null,vec__12277,(0),null);
return component_fnk__9869__auto___12278.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9871__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner12259,new cljs.core.Keyword(null,"data","data",-232669377),data__9870__auto__], null));
};
var parent_component = function (data__9870__auto__,owner12259,var_args){
var p__12275 = null;
if (arguments.length > 2) {
  p__12275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return parent_component__delegate.call(this,data__9870__auto__,owner12259,p__12275);};
parent_component.cljs$lang$maxFixedArity = 2;
parent_component.cljs$lang$applyTo = (function (arglist__12284){
var data__9870__auto__ = cljs.core.first(arglist__12284);
arglist__12284 = cljs.core.next(arglist__12284);
var owner12259 = cljs.core.first(arglist__12284);
var p__12275 = cljs.core.rest(arglist__12284);
return parent_component__delegate(data__9870__auto__,owner12259,p__12275);
});
parent_component.cljs$core$IFn$_invoke$arity$variadic = parent_component__delegate;
return parent_component;
})()
;})(component_fnk__9869__auto___12278))
;

myproject.core.__GT_parent_component = (function() {
var __GT_parent_component = null;
var __GT_parent_component__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,myproject.core.parent_component,cursor__9838__auto__);
});
var __GT_parent_component__2 = (function (cursor__9838__auto__,m12261){
return om.core.build.call(null,myproject.core.parent_component,cursor__9838__auto__,m12261);
});
__GT_parent_component = function(cursor__9838__auto__,m12261){
switch(arguments.length){
case 1:
return __GT_parent_component__1.call(this,cursor__9838__auto__);
case 2:
return __GT_parent_component__2.call(this,cursor__9838__auto__,m12261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_parent_component.cljs$core$IFn$_invoke$arity$1 = __GT_parent_component__1;
__GT_parent_component.cljs$core$IFn$_invoke$arity$2 = __GT_parent_component__2;
return __GT_parent_component;
})()
;
myproject.core.main = (function main(container_id){
return om.core.root.call(null,myproject.core.parent_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brent",new cljs.core.Keyword(null,"age","age",-604307804),(28)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(container_id)], null));
});
goog.exportSymbol('myproject.core.main', myproject.core.main);
