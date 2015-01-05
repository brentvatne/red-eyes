// Compiled by ClojureScript 0.0-2511
goog.provide('myproject.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
myproject.core.log = (function log(msg){
return console.log(msg);
});

var ufv___10492 = schema.utils.use_fn_validation;
var output_schema10480_10493 = schema.core.Any;
var input_schema10481_10494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"name","name",-810760592,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker10482_10495 = schema.core.checker.call(null,input_schema10481_10494);
var output_checker10483_10496 = schema.core.checker.call(null,output_schema10480_10493);
/**
* Inputs: [name owner]
*/
myproject.core.child_component = ((function (ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function child_component(G__10484,G__10485){
var validate__7886__auto__ = ufv___10492.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___10497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10484,G__10485], null);
var temp__4126__auto___10498 = input_checker10482_10495.call(null,args__7887__auto___10497);
if(cljs.core.truth_(temp__4126__auto___10498)){
var error__7888__auto___10499 = temp__4126__auto___10498;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-component","child-component",-574562502,null),cljs.core.pr_str.call(null,error__7888__auto___10499)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___10499,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___10497,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10481_10494,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var name = G__10484;
var owner = G__10485;
while(true){
if(typeof myproject.core.t10489 !== 'undefined'){
} else {

/**
* @constructor
*/
myproject.core.t10489 = (function (output_schema10480,owner,G__10485,input_checker10482,name,output_checker10483,child_component,ufv__,G__10484,input_schema10481,validate__7886__auto__,meta10490){
this.output_schema10480 = output_schema10480;
this.owner = owner;
this.G__10485 = G__10485;
this.input_checker10482 = input_checker10482;
this.name = name;
this.output_checker10483 = output_checker10483;
this.child_component = child_component;
this.ufv__ = ufv__;
this.G__10484 = G__10484;
this.input_schema10481 = input_schema10481;
this.validate__7886__auto__ = validate__7886__auto__;
this.meta10490 = meta10490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
myproject.core.t10489.prototype.om$core$IDisplayName$ = true;

myproject.core.t10489.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function (_){
var self__ = this;
var ___$1 = this;
return "child-component";
});})(validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

myproject.core.t10489.prototype.om$core$IRender$ = true;

myproject.core.t10489.prototype.om$core$IRender$render$arity$1 = ((function (validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Hi, I am ",self__.name,"!"],null))));
});})(validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

myproject.core.t10489.prototype.om$core$IDidMount$ = true;

myproject.core.t10489.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function (_){
var self__ = this;
var ___$1 = this;
myproject.core.log.call(null,self__.owner);

return myproject.core.log.call(null,"mounted child-component");
});})(validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

myproject.core.t10489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function (_10491){
var self__ = this;
var _10491__$1 = this;
return self__.meta10490;
});})(validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

myproject.core.t10489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function (_10491,meta10490__$1){
var self__ = this;
var _10491__$1 = this;
return (new myproject.core.t10489(self__.output_schema10480,self__.owner,self__.G__10485,self__.input_checker10482,self__.name,self__.output_checker10483,self__.child_component,self__.ufv__,self__.G__10484,self__.input_schema10481,self__.validate__7886__auto__,meta10490__$1));
});})(validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

myproject.core.t10489.cljs$lang$type = true;

myproject.core.t10489.cljs$lang$ctorStr = "myproject.core/t10489";

myproject.core.t10489.cljs$lang$ctorPrWriter = ((function (validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"myproject.core/t10489");
});})(validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

myproject.core.__GT_t10489 = ((function (validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496){
return (function __GT_t10489(output_schema10480__$1,owner__$1,G__10485__$1,input_checker10482__$1,name__$1,output_checker10483__$1,child_component__$1,ufv____$1,G__10484__$1,input_schema10481__$1,validate__7886__auto____$1,meta10490){
return (new myproject.core.t10489(output_schema10480__$1,owner__$1,G__10485__$1,input_checker10482__$1,name__$1,output_checker10483__$1,child_component__$1,ufv____$1,G__10484__$1,input_schema10481__$1,validate__7886__auto____$1,meta10490));
});})(validate__7886__auto__,ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

}

return (new myproject.core.t10489(output_schema10480_10493,owner,G__10485,input_checker10482_10495,name,output_checker10483_10496,child_component,ufv___10492,G__10484,input_schema10481_10494,validate__7886__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___10500 = output_checker10483_10496.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___10500)){
var error__7888__auto___10501 = temp__4126__auto___10500;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-component","child-component",-574562502,null),cljs.core.pr_str.call(null,error__7888__auto___10501)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___10501,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10480_10493,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv___10492,output_schema10480_10493,input_schema10481_10494,input_checker10482_10495,output_checker10483_10496))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,myproject.core.child_component),schema.core.make_fn_schema.call(null,output_schema10480_10493,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10481_10494], null)));

myproject.core.__GT_child_component = (function() {
var __GT_child_component = null;
var __GT_child_component__1 = (function (cursor__9674__auto__){
return om.core.build.call(null,myproject.core.child_component,cursor__9674__auto__);
});
var __GT_child_component__2 = (function (cursor__9674__auto__,m10479){
return om.core.build.call(null,myproject.core.child_component,cursor__9674__auto__,m10479);
});
__GT_child_component = function(cursor__9674__auto__,m10479){
switch(arguments.length){
case 1:
return __GT_child_component__1.call(this,cursor__9674__auto__);
case 2:
return __GT_child_component__2.call(this,cursor__9674__auto__,m10479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_child_component.cljs$core$IFn$_invoke$arity$1 = __GT_child_component__1;
__GT_child_component.cljs$core$IFn$_invoke$arity$2 = __GT_child_component__2;
return __GT_child_component;
})()
;

var component_fnk__9705__auto___10521 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema10507 = schema.core.Any;
var input_schema10508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"age","age",-604307804),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map10505","map10505",-1419455500,null))], null);
var input_checker10509 = schema.core.checker.call(null,input_schema10508);
var output_checker10510 = schema.core.checker.call(null,output_schema10507);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510){
return (function constructor10503(G__10511){
var validate__7886__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__7886__auto__)){
var args__7887__auto___10522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10511], null);
var temp__4126__auto___10523 = input_checker10509.call(null,args__7887__auto___10522);
if(cljs.core.truth_(temp__4126__auto___10523)){
var error__7888__auto___10524 = temp__4126__auto___10523;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor10503","constructor10503",-520851264,null),cljs.core.pr_str.call(null,error__7888__auto___10524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___10524,new cljs.core.Keyword(null,"value","value",305978217),args__7887__auto___10522,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10508,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7889__auto__ = (function (){var map10505 = G__10511;
while(true){
if(cljs.core.map_QMARK_.call(null,map10505)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map10505)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map10505,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var map10506 = plumbing.fnk.schema.safe_get.call(null,map10505,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var name = plumbing.fnk.schema.safe_get.call(null,map10506,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var age = plumbing.fnk.schema.safe_get.call(null,map10506,new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(typeof myproject.core.t10515 !== 'undefined'){
} else {

/**
* @constructor
*/
myproject.core.t10515 = (function (constructor10503,owner,map10506,age,input_checker10509,name,output_checker10510,input_schema10508,map10505,G__10511,output_schema10507,ufv__,validate__7886__auto__,meta10516){
this.constructor10503 = constructor10503;
this.owner = owner;
this.map10506 = map10506;
this.age = age;
this.input_checker10509 = input_checker10509;
this.name = name;
this.output_checker10510 = output_checker10510;
this.input_schema10508 = input_schema10508;
this.map10505 = map10505;
this.G__10511 = G__10511;
this.output_schema10507 = output_schema10507;
this.ufv__ = ufv__;
this.validate__7886__auto__ = validate__7886__auto__;
this.meta10516 = meta10516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
myproject.core.t10515.prototype.om$core$IDisplayName$ = true;

myproject.core.t10515.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510){
return (function (_){
var self__ = this;
var ___$1 = this;
return "parent-component";
});})(age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510))
;

myproject.core.t10515.prototype.om$core$IRender$ = true;

myproject.core.t10515.prototype.om$core$IRender$render$arity$1 = ((function (age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510){
return (function (_){
var self__ = this;
var ___$1 = this;
myproject.core.log.call(null,self__.name);

myproject.core.log.call(null,self__.age);

return om.core.build.call(null,myproject.core.child_component,self__.name);
});})(age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510))
;

myproject.core.t10515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510){
return (function (_10517){
var self__ = this;
var _10517__$1 = this;
return self__.meta10516;
});})(age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510))
;

myproject.core.t10515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510){
return (function (_10517,meta10516__$1){
var self__ = this;
var _10517__$1 = this;
return (new myproject.core.t10515(self__.constructor10503,self__.owner,self__.map10506,self__.age,self__.input_checker10509,self__.name,self__.output_checker10510,self__.input_schema10508,self__.map10505,self__.G__10511,self__.output_schema10507,self__.ufv__,self__.validate__7886__auto__,meta10516__$1));
});})(age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510))
;

myproject.core.t10515.cljs$lang$type = true;

myproject.core.t10515.cljs$lang$ctorStr = "myproject.core/t10515";

myproject.core.t10515.cljs$lang$ctorPrWriter = ((function (age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"myproject.core/t10515");
});})(age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510))
;

myproject.core.__GT_t10515 = ((function (age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510){
return (function __GT_t10515(constructor10503__$1,owner__$1,map10506__$1,age__$1,input_checker10509__$1,name__$1,output_checker10510__$1,input_schema10508__$1,map10505__$1,G__10511__$1,output_schema10507__$1,ufv____$1,validate__7886__auto____$1,meta10516){
return (new myproject.core.t10515(constructor10503__$1,owner__$1,map10506__$1,age__$1,input_checker10509__$1,name__$1,output_checker10510__$1,input_schema10508__$1,map10505__$1,G__10511__$1,output_schema10507__$1,ufv____$1,validate__7886__auto____$1,meta10516));
});})(age,name,map10506,owner,validate__7886__auto__,ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510))
;

}

return (new myproject.core.t10515(constructor10503,owner,map10506,age,input_checker10509,name,output_checker10510,input_schema10508,map10505,G__10511,output_schema10507,ufv__,validate__7886__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__7886__auto__)){
var temp__4126__auto___10525 = output_checker10510.call(null,o__7889__auto__);
if(cljs.core.truth_(temp__4126__auto___10525)){
var error__7888__auto___10526 = temp__4126__auto___10525;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor10503","constructor10503",-520851264,null),cljs.core.pr_str.call(null,error__7888__auto___10526)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7888__auto___10526,new cljs.core.Keyword(null,"value","value",305978217),o__7889__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10507,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7889__auto__;
});})(ufv__,output_schema10507,input_schema10508,input_checker10509,output_checker10510))
,schema.core.make_fn_schema.call(null,output_schema10507,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10508], null)));
})();
/**
* @param {...*} var_args
*/
myproject.core.parent_component = ((function (component_fnk__9705__auto___10521){
return (function() { 
var parent_component__delegate = function (data__9706__auto__,owner10502,p__10518){
var vec__10520 = p__10518;
var opts__9707__auto__ = cljs.core.nth.call(null,vec__10520,(0),null);
return component_fnk__9705__auto___10521.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9707__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner10502,new cljs.core.Keyword(null,"data","data",-232669377),data__9706__auto__], null));
};
var parent_component = function (data__9706__auto__,owner10502,var_args){
var p__10518 = null;
if (arguments.length > 2) {
  p__10518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return parent_component__delegate.call(this,data__9706__auto__,owner10502,p__10518);};
parent_component.cljs$lang$maxFixedArity = 2;
parent_component.cljs$lang$applyTo = (function (arglist__10527){
var data__9706__auto__ = cljs.core.first(arglist__10527);
arglist__10527 = cljs.core.next(arglist__10527);
var owner10502 = cljs.core.first(arglist__10527);
var p__10518 = cljs.core.rest(arglist__10527);
return parent_component__delegate(data__9706__auto__,owner10502,p__10518);
});
parent_component.cljs$core$IFn$_invoke$arity$variadic = parent_component__delegate;
return parent_component;
})()
;})(component_fnk__9705__auto___10521))
;

myproject.core.__GT_parent_component = (function() {
var __GT_parent_component = null;
var __GT_parent_component__1 = (function (cursor__9674__auto__){
return om.core.build.call(null,myproject.core.parent_component,cursor__9674__auto__);
});
var __GT_parent_component__2 = (function (cursor__9674__auto__,m10504){
return om.core.build.call(null,myproject.core.parent_component,cursor__9674__auto__,m10504);
});
__GT_parent_component = function(cursor__9674__auto__,m10504){
switch(arguments.length){
case 1:
return __GT_parent_component__1.call(this,cursor__9674__auto__);
case 2:
return __GT_parent_component__2.call(this,cursor__9674__auto__,m10504);
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
