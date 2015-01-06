// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.core');
goog.require('cljs.core');
goog.require('redeyes.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('redeyes.api');
goog.require('redeyes.dispatcher');
goog.require('redeyes.store');
goog.require('redeyes.sync');
goog.require('om.core');

var ufv___26493 = schema.utils.use_fn_validation;
var output_schema26481_26494 = schema.core.Any;
var input_schema26482_26495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26483_26496 = schema.core.checker.call(null,input_schema26482_26495);
var output_checker26484_26497 = schema.core.checker.call(null,output_schema26481_26494);
/**
* Inputs: [apps owner]
* 
* A form where the user can enter a new url to watch
*/
redeyes.core.new_sleepy_app_form = ((function (ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function new_sleepy_app_form(G__26485,G__26486){
var validate__8048__auto__ = ufv___26493.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26485,G__26486], null);
var temp__4126__auto___26499 = input_checker26483_26496.call(null,args__8049__auto___26498);
if(cljs.core.truth_(temp__4126__auto___26499)){
var error__8050__auto___26500 = temp__4126__auto___26499;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8050__auto___26500)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26500,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26498,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26482_26495,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26485;
var owner = G__26486;
while(true){
if(typeof redeyes.core.t26490 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26490 = (function (new_sleepy_app_form,owner,validate__8048__auto__,G__26486,apps,input_checker26483,G__26485,input_schema26482,output_schema26481,ufv__,output_checker26484,meta26491){
this.new_sleepy_app_form = new_sleepy_app_form;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.G__26486 = G__26486;
this.apps = apps;
this.input_checker26483 = input_checker26483;
this.G__26485 = G__26485;
this.input_schema26482 = input_schema26482;
this.output_schema26481 = output_schema26481;
this.ufv__ = ufv__;
this.output_checker26484 = output_checker26484;
this.meta26491 = meta26491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26490.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26490.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (_){
var self__ = this;
var ___$1 = this;
return "new-sleepy-app-form";
});})(validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

redeyes.core.t26490.prototype.om$core$IRenderState$ = true;

redeyes.core.t26490.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state);
var apps__$1 = new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(state);
var update_url_state_BANG_ = ((function (url,apps__$1,___$1,validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (new_val){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"url","url",276297046),new_val);
});})(url,apps__$1,___$1,validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;
var handle_change_input = ((function (url,apps__$1,update_url_state_BANG_,___$1,validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (e){
return update_url_state_BANG_.call(null,e.target.value);
});})(url,apps__$1,update_url_state_BANG_,___$1,validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;
var handle_submit_url = ((function (url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (e){
e.preventDefault();

redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"apps","apps",844744865),apps__$1], null));

return update_url_state_BANG_.call(null,"");
});})(url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;
return cljs.core.apply.call(null,React.DOM.form,{"onSubmit": om_tools.dom.format_opts.call(null,handle_submit_url), "className": "new-sleepy-app-form form-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[redeyes.util.input_with_addons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"http://"], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add URL",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_submit_url], null)], null),om.dom.input.call(null,{"placeholder": "URL here please!", "onChange": om_tools.dom.format_opts.call(null,handle_change_input), "value": om_tools.dom.format_opts.call(null,url), "id": "sleepy-app-url", "className": "form-control", "ref": "new-url", "type": "text"}))],null))));
});})(validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

redeyes.core.t26490.prototype.om$core$IInitState$ = true;

redeyes.core.t26490.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null);
});})(validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

redeyes.core.t26490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (_26492){
var self__ = this;
var _26492__$1 = this;
return self__.meta26491;
});})(validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

redeyes.core.t26490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (_26492,meta26491__$1){
var self__ = this;
var _26492__$1 = this;
return (new redeyes.core.t26490(self__.new_sleepy_app_form,self__.owner,self__.validate__8048__auto__,self__.G__26486,self__.apps,self__.input_checker26483,self__.G__26485,self__.input_schema26482,self__.output_schema26481,self__.ufv__,self__.output_checker26484,meta26491__$1));
});})(validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

redeyes.core.t26490.cljs$lang$type = true;

redeyes.core.t26490.cljs$lang$ctorStr = "redeyes.core/t26490";

redeyes.core.t26490.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26490");
});})(validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

redeyes.core.__GT_t26490 = ((function (validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497){
return (function __GT_t26490(new_sleepy_app_form__$1,owner__$1,validate__8048__auto____$1,G__26486__$1,apps__$1,input_checker26483__$1,G__26485__$1,input_schema26482__$1,output_schema26481__$1,ufv____$1,output_checker26484__$1,meta26491){
return (new redeyes.core.t26490(new_sleepy_app_form__$1,owner__$1,validate__8048__auto____$1,G__26486__$1,apps__$1,input_checker26483__$1,G__26485__$1,input_schema26482__$1,output_schema26481__$1,ufv____$1,output_checker26484__$1,meta26491));
});})(validate__8048__auto__,ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

}

return (new redeyes.core.t26490(new_sleepy_app_form,owner,validate__8048__auto__,G__26486,apps,input_checker26483_26496,G__26485,input_schema26482_26495,output_schema26481_26494,ufv___26493,output_checker26484_26497,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26501 = output_checker26484_26497.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26501)){
var error__8050__auto___26502 = temp__4126__auto___26501;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8050__auto___26502)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26502,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26481_26494,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26493,output_schema26481_26494,input_schema26482_26495,input_checker26483_26496,output_checker26484_26497))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.new_sleepy_app_form),schema.core.make_fn_schema.call(null,output_schema26481_26494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26482_26495], null)));

redeyes.core.__GT_new_sleepy_app_form = (function() {
var __GT_new_sleepy_app_form = null;
var __GT_new_sleepy_app_form__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9836__auto__);
});
var __GT_new_sleepy_app_form__2 = (function (cursor__9836__auto__,m26480){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9836__auto__,m26480);
});
__GT_new_sleepy_app_form = function(cursor__9836__auto__,m26480){
switch(arguments.length){
case 1:
return __GT_new_sleepy_app_form__1.call(this,cursor__9836__auto__);
case 2:
return __GT_new_sleepy_app_form__2.call(this,cursor__9836__auto__,m26480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$1 = __GT_new_sleepy_app_form__1;
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$2 = __GT_new_sleepy_app_form__2;
return __GT_new_sleepy_app_form;
})()
;

var ufv___26516 = schema.utils.use_fn_validation;
var output_schema26504_26517 = schema.core.Any;
var input_schema26505_26518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26506_26519 = schema.core.checker.call(null,input_schema26505_26518);
var output_checker26507_26520 = schema.core.checker.call(null,output_schema26504_26517);
/**
* Inputs: [app owner]
* 
* Checkbox that indicates whether or not an app is enabled to be woken up
*/
redeyes.core.sleepy_app_checkbox = ((function (ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function sleepy_app_checkbox(G__26508,G__26509){
var validate__8048__auto__ = ufv___26516.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26508,G__26509], null);
var temp__4126__auto___26522 = input_checker26506_26519.call(null,args__8049__auto___26521);
if(cljs.core.truth_(temp__4126__auto___26522)){
var error__8050__auto___26523 = temp__4126__auto___26522;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8050__auto___26523)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26523,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26521,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26505_26518,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app = G__26508;
var owner = G__26509;
while(true){
if(typeof redeyes.core.t26513 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26513 = (function (input_schema26505,input_checker26506,owner,validate__8048__auto__,sleepy_app_checkbox,output_schema26504,output_checker26507,G__26509,G__26508,app,ufv__,meta26514){
this.input_schema26505 = input_schema26505;
this.input_checker26506 = input_checker26506;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.sleepy_app_checkbox = sleepy_app_checkbox;
this.output_schema26504 = output_schema26504;
this.output_checker26507 = output_checker26507;
this.G__26509 = G__26509;
this.G__26508 = G__26508;
this.app = app;
this.ufv__ = ufv__;
this.meta26514 = meta26514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26513.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26513.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-checkbox";
});})(validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;

redeyes.core.t26513.prototype.om$core$IRender$ = true;

redeyes.core.t26513.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_change_checked = ((function (___$1,validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function (e){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"active","active",1895962068),e.target.checked], null));
});})(___$1,validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;
return om.dom.input.call(null,{"checked": om_tools.dom.format_opts.call(null,redeyes.util.active_QMARK_.call(null,self__.app)), "onChange": om_tools.dom.format_opts.call(null,handle_change_checked), "type": "checkbox"});
});})(validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;

redeyes.core.t26513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function (_26515){
var self__ = this;
var _26515__$1 = this;
return self__.meta26514;
});})(validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;

redeyes.core.t26513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function (_26515,meta26514__$1){
var self__ = this;
var _26515__$1 = this;
return (new redeyes.core.t26513(self__.input_schema26505,self__.input_checker26506,self__.owner,self__.validate__8048__auto__,self__.sleepy_app_checkbox,self__.output_schema26504,self__.output_checker26507,self__.G__26509,self__.G__26508,self__.app,self__.ufv__,meta26514__$1));
});})(validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;

redeyes.core.t26513.cljs$lang$type = true;

redeyes.core.t26513.cljs$lang$ctorStr = "redeyes.core/t26513";

redeyes.core.t26513.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26513");
});})(validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;

redeyes.core.__GT_t26513 = ((function (validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520){
return (function __GT_t26513(input_schema26505__$1,input_checker26506__$1,owner__$1,validate__8048__auto____$1,sleepy_app_checkbox__$1,output_schema26504__$1,output_checker26507__$1,G__26509__$1,G__26508__$1,app__$1,ufv____$1,meta26514){
return (new redeyes.core.t26513(input_schema26505__$1,input_checker26506__$1,owner__$1,validate__8048__auto____$1,sleepy_app_checkbox__$1,output_schema26504__$1,output_checker26507__$1,G__26509__$1,G__26508__$1,app__$1,ufv____$1,meta26514));
});})(validate__8048__auto__,ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;

}

return (new redeyes.core.t26513(input_schema26505_26518,input_checker26506_26519,owner,validate__8048__auto__,sleepy_app_checkbox,output_schema26504_26517,output_checker26507_26520,G__26509,G__26508,app,ufv___26516,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26524 = output_checker26507_26520.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26524)){
var error__8050__auto___26525 = temp__4126__auto___26524;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8050__auto___26525)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26525,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26504_26517,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26516,output_schema26504_26517,input_schema26505_26518,input_checker26506_26519,output_checker26507_26520))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_checkbox),schema.core.make_fn_schema.call(null,output_schema26504_26517,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26505_26518], null)));

redeyes.core.__GT_sleepy_app_checkbox = (function() {
var __GT_sleepy_app_checkbox = null;
var __GT_sleepy_app_checkbox__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9836__auto__);
});
var __GT_sleepy_app_checkbox__2 = (function (cursor__9836__auto__,m26503){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9836__auto__,m26503);
});
__GT_sleepy_app_checkbox = function(cursor__9836__auto__,m26503){
switch(arguments.length){
case 1:
return __GT_sleepy_app_checkbox__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app_checkbox__2.call(this,cursor__9836__auto__,m26503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_checkbox__1;
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_checkbox__2;
return __GT_sleepy_app_checkbox;
})()
;

var ufv___26539 = schema.utils.use_fn_validation;
var output_schema26527_26540 = schema.core.Any;
var input_schema26528_26541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26529_26542 = schema.core.checker.call(null,input_schema26528_26541);
var output_checker26530_26543 = schema.core.checker.call(null,output_schema26527_26540);
/**
* Inputs: [app owner]
* 
* A row in the sleepy-app-list table
*/
redeyes.core.sleepy_app = ((function (ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543){
return (function sleepy_app(G__26531,G__26532){
var validate__8048__auto__ = ufv___26539.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26531,G__26532], null);
var temp__4126__auto___26545 = input_checker26529_26542.call(null,args__8049__auto___26544);
if(cljs.core.truth_(temp__4126__auto___26545)){
var error__8050__auto___26546 = temp__4126__auto___26545;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8050__auto___26546)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26546,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26544,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26528_26541,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app = G__26531;
var owner = G__26532;
while(true){
if(typeof redeyes.core.t26536 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26536 = (function (output_checker26530,G__26532,output_schema26527,owner,validate__8048__auto__,input_checker26529,input_schema26528,G__26531,sleepy_app,app,ufv__,meta26537){
this.output_checker26530 = output_checker26530;
this.G__26532 = G__26532;
this.output_schema26527 = output_schema26527;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.input_checker26529 = input_checker26529;
this.input_schema26528 = input_schema26528;
this.G__26531 = G__26531;
this.sleepy_app = sleepy_app;
this.app = app;
this.ufv__ = ufv__;
this.meta26537 = meta26537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26536.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26536.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app";
});})(validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543))
;

redeyes.core.t26536.prototype.om$core$IRender$ = true;

redeyes.core.t26536.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543){
return (function (_){
var self__ = this;
var ___$1 = this;
var url = cljs.core.get.call(null,self__.app,"url");
var last_wake_up = cljs.core.get.call(null,self__.app,"lastWokenUpAt");
var last_wake_up_text = (((last_wake_up == null))?"Never":last_wake_up);
return cljs.core.apply.call(null,React.DOM.tr,{"className": om_tools.dom.format_opts.call(null,redeyes.util.css_classes.call(null,"sleepy-app",((redeyes.util.active_QMARK_.call(null,self__.app))?"active":null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,om.core.build.call(null,redeyes.core.sleepy_app_checkbox,self__.app),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,url,cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,last_wake_up_text,cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543))
;

redeyes.core.t26536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543){
return (function (_26538){
var self__ = this;
var _26538__$1 = this;
return self__.meta26537;
});})(validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543))
;

redeyes.core.t26536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543){
return (function (_26538,meta26537__$1){
var self__ = this;
var _26538__$1 = this;
return (new redeyes.core.t26536(self__.output_checker26530,self__.G__26532,self__.output_schema26527,self__.owner,self__.validate__8048__auto__,self__.input_checker26529,self__.input_schema26528,self__.G__26531,self__.sleepy_app,self__.app,self__.ufv__,meta26537__$1));
});})(validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543))
;

redeyes.core.t26536.cljs$lang$type = true;

redeyes.core.t26536.cljs$lang$ctorStr = "redeyes.core/t26536";

redeyes.core.t26536.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26536");
});})(validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543))
;

redeyes.core.__GT_t26536 = ((function (validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543){
return (function __GT_t26536(output_checker26530__$1,G__26532__$1,output_schema26527__$1,owner__$1,validate__8048__auto____$1,input_checker26529__$1,input_schema26528__$1,G__26531__$1,sleepy_app__$1,app__$1,ufv____$1,meta26537){
return (new redeyes.core.t26536(output_checker26530__$1,G__26532__$1,output_schema26527__$1,owner__$1,validate__8048__auto____$1,input_checker26529__$1,input_schema26528__$1,G__26531__$1,sleepy_app__$1,app__$1,ufv____$1,meta26537));
});})(validate__8048__auto__,ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543))
;

}

return (new redeyes.core.t26536(output_checker26530_26543,G__26532,output_schema26527_26540,owner,validate__8048__auto__,input_checker26529_26542,input_schema26528_26541,G__26531,sleepy_app,app,ufv___26539,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26547 = output_checker26530_26543.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26547)){
var error__8050__auto___26548 = temp__4126__auto___26547;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8050__auto___26548)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26548,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26527_26540,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26539,output_schema26527_26540,input_schema26528_26541,input_checker26529_26542,output_checker26530_26543))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app),schema.core.make_fn_schema.call(null,output_schema26527_26540,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26528_26541], null)));

redeyes.core.__GT_sleepy_app = (function() {
var __GT_sleepy_app = null;
var __GT_sleepy_app__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9836__auto__);
});
var __GT_sleepy_app__2 = (function (cursor__9836__auto__,m26526){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9836__auto__,m26526);
});
__GT_sleepy_app = function(cursor__9836__auto__,m26526){
switch(arguments.length){
case 1:
return __GT_sleepy_app__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app__2.call(this,cursor__9836__auto__,m26526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app__1;
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app__2;
return __GT_sleepy_app;
})()
;

var ufv___26562 = schema.utils.use_fn_validation;
var output_schema26550_26563 = schema.core.Any;
var input_schema26551_26564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26552_26565 = schema.core.checker.call(null,input_schema26551_26564);
var output_checker26553_26566 = schema.core.checker.call(null,output_schema26550_26563);
/**
* Inputs: [apps owner]
* 
* Renders out each of the sleepy-apps
*/
redeyes.core.sleepy_app_list = ((function (ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566){
return (function sleepy_app_list(G__26554,G__26555){
var validate__8048__auto__ = ufv___26562.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26554,G__26555], null);
var temp__4126__auto___26568 = input_checker26552_26565.call(null,args__8049__auto___26567);
if(cljs.core.truth_(temp__4126__auto___26568)){
var error__8050__auto___26569 = temp__4126__auto___26568;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8050__auto___26569)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26569,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26567,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26551_26564,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26554;
var owner = G__26555;
while(true){
if(typeof redeyes.core.t26559 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26559 = (function (owner,validate__8048__auto__,apps,G__26554,sleepy_app_list,output_checker26553,input_checker26552,input_schema26551,output_schema26550,ufv__,G__26555,meta26560){
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.G__26554 = G__26554;
this.sleepy_app_list = sleepy_app_list;
this.output_checker26553 = output_checker26553;
this.input_checker26552 = input_checker26552;
this.input_schema26551 = input_schema26551;
this.output_schema26550 = output_schema26550;
this.ufv__ = ufv__;
this.G__26555 = G__26555;
this.meta26560 = meta26560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26559.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26559.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-list";
});})(validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566))
;

redeyes.core.t26559.prototype.om$core$IRender$ = true;

redeyes.core.t26559.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.empty_QMARK_.call(null,self__.apps)){
return React.DOM.div(null,"No apps");
} else {
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.table,{"className": "table"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.thead,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.th({"className": "sleepy-app-active-col"},""),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(null),React.DOM.th(null)],null))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,om_tools.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,om.core.build_all.call(null,redeyes.core.sleepy_app,self__.apps))],null)))),cljs.core.PersistentVector.EMPTY);
}
});})(validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566))
;

redeyes.core.t26559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566){
return (function (_26561){
var self__ = this;
var _26561__$1 = this;
return self__.meta26560;
});})(validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566))
;

redeyes.core.t26559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566){
return (function (_26561,meta26560__$1){
var self__ = this;
var _26561__$1 = this;
return (new redeyes.core.t26559(self__.owner,self__.validate__8048__auto__,self__.apps,self__.G__26554,self__.sleepy_app_list,self__.output_checker26553,self__.input_checker26552,self__.input_schema26551,self__.output_schema26550,self__.ufv__,self__.G__26555,meta26560__$1));
});})(validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566))
;

redeyes.core.t26559.cljs$lang$type = true;

redeyes.core.t26559.cljs$lang$ctorStr = "redeyes.core/t26559";

redeyes.core.t26559.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26559");
});})(validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566))
;

redeyes.core.__GT_t26559 = ((function (validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566){
return (function __GT_t26559(owner__$1,validate__8048__auto____$1,apps__$1,G__26554__$1,sleepy_app_list__$1,output_checker26553__$1,input_checker26552__$1,input_schema26551__$1,output_schema26550__$1,ufv____$1,G__26555__$1,meta26560){
return (new redeyes.core.t26559(owner__$1,validate__8048__auto____$1,apps__$1,G__26554__$1,sleepy_app_list__$1,output_checker26553__$1,input_checker26552__$1,input_schema26551__$1,output_schema26550__$1,ufv____$1,G__26555__$1,meta26560));
});})(validate__8048__auto__,ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566))
;

}

return (new redeyes.core.t26559(owner,validate__8048__auto__,apps,G__26554,sleepy_app_list,output_checker26553_26566,input_checker26552_26565,input_schema26551_26564,output_schema26550_26563,ufv___26562,G__26555,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26570 = output_checker26553_26566.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26570)){
var error__8050__auto___26571 = temp__4126__auto___26570;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8050__auto___26571)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26571,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26550_26563,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26562,output_schema26550_26563,input_schema26551_26564,input_checker26552_26565,output_checker26553_26566))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_list),schema.core.make_fn_schema.call(null,output_schema26550_26563,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26551_26564], null)));

redeyes.core.__GT_sleepy_app_list = (function() {
var __GT_sleepy_app_list = null;
var __GT_sleepy_app_list__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9836__auto__);
});
var __GT_sleepy_app_list__2 = (function (cursor__9836__auto__,m26549){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9836__auto__,m26549);
});
__GT_sleepy_app_list = function(cursor__9836__auto__,m26549){
switch(arguments.length){
case 1:
return __GT_sleepy_app_list__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app_list__2.call(this,cursor__9836__auto__,m26549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_list__1;
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_list__2;
return __GT_sleepy_app_list;
})()
;

var ufv___26585 = schema.utils.use_fn_validation;
var output_schema26573_26586 = schema.core.Any;
var input_schema26574_26587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26575_26588 = schema.core.checker.call(null,input_schema26574_26587);
var output_checker26576_26589 = schema.core.checker.call(null,output_schema26573_26586);
/**
* Inputs: [apps owner]
*/
redeyes.core.wake_up_now_button = ((function (ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function wake_up_now_button(G__26577,G__26578){
var validate__8048__auto__ = ufv___26585.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26577,G__26578], null);
var temp__4126__auto___26591 = input_checker26575_26588.call(null,args__8049__auto___26590);
if(cljs.core.truth_(temp__4126__auto___26591)){
var error__8050__auto___26592 = temp__4126__auto___26591;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8050__auto___26592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26592,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26590,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26574_26587,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26577;
var owner = G__26578;
while(true){
if(typeof redeyes.core.t26582 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26582 = (function (owner,validate__8048__auto__,input_schema26574,G__26578,input_checker26575,apps,wake_up_now_button,G__26577,output_schema26573,ufv__,output_checker26576,meta26583){
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.input_schema26574 = input_schema26574;
this.G__26578 = G__26578;
this.input_checker26575 = input_checker26575;
this.apps = apps;
this.wake_up_now_button = wake_up_now_button;
this.G__26577 = G__26577;
this.output_schema26573 = output_schema26573;
this.ufv__ = ufv__;
this.output_checker26576 = output_checker26576;
this.meta26583 = meta26583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26582.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26582.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function (_){
var self__ = this;
var ___$1 = this;
return "wake-up-now-button";
});})(validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;

redeyes.core.t26582.prototype.om$core$IRender$ = true;

redeyes.core.t26582.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function (){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null));
});})(___$1,validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;
return redeyes.util.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Wake up all apps now!");
});})(validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;

redeyes.core.t26582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function (_26584){
var self__ = this;
var _26584__$1 = this;
return self__.meta26583;
});})(validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;

redeyes.core.t26582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function (_26584,meta26583__$1){
var self__ = this;
var _26584__$1 = this;
return (new redeyes.core.t26582(self__.owner,self__.validate__8048__auto__,self__.input_schema26574,self__.G__26578,self__.input_checker26575,self__.apps,self__.wake_up_now_button,self__.G__26577,self__.output_schema26573,self__.ufv__,self__.output_checker26576,meta26583__$1));
});})(validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;

redeyes.core.t26582.cljs$lang$type = true;

redeyes.core.t26582.cljs$lang$ctorStr = "redeyes.core/t26582";

redeyes.core.t26582.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26582");
});})(validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;

redeyes.core.__GT_t26582 = ((function (validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589){
return (function __GT_t26582(owner__$1,validate__8048__auto____$1,input_schema26574__$1,G__26578__$1,input_checker26575__$1,apps__$1,wake_up_now_button__$1,G__26577__$1,output_schema26573__$1,ufv____$1,output_checker26576__$1,meta26583){
return (new redeyes.core.t26582(owner__$1,validate__8048__auto____$1,input_schema26574__$1,G__26578__$1,input_checker26575__$1,apps__$1,wake_up_now_button__$1,G__26577__$1,output_schema26573__$1,ufv____$1,output_checker26576__$1,meta26583));
});})(validate__8048__auto__,ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;

}

return (new redeyes.core.t26582(owner,validate__8048__auto__,input_schema26574_26587,G__26578,input_checker26575_26588,apps,wake_up_now_button,G__26577,output_schema26573_26586,ufv___26585,output_checker26576_26589,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26593 = output_checker26576_26589.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26593)){
var error__8050__auto___26594 = temp__4126__auto___26593;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8050__auto___26594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26594,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26573_26586,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26585,output_schema26573_26586,input_schema26574_26587,input_checker26575_26588,output_checker26576_26589))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.wake_up_now_button),schema.core.make_fn_schema.call(null,output_schema26573_26586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26574_26587], null)));

redeyes.core.__GT_wake_up_now_button = (function() {
var __GT_wake_up_now_button = null;
var __GT_wake_up_now_button__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9836__auto__);
});
var __GT_wake_up_now_button__2 = (function (cursor__9836__auto__,m26572){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9836__auto__,m26572);
});
__GT_wake_up_now_button = function(cursor__9836__auto__,m26572){
switch(arguments.length){
case 1:
return __GT_wake_up_now_button__1.call(this,cursor__9836__auto__);
case 2:
return __GT_wake_up_now_button__2.call(this,cursor__9836__auto__,m26572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$1 = __GT_wake_up_now_button__1;
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$2 = __GT_wake_up_now_button__2;
return __GT_wake_up_now_button;
})()
;

var ufv___26608 = schema.utils.use_fn_validation;
var output_schema26596_26609 = schema.core.Any;
var input_schema26597_26610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26598_26611 = schema.core.checker.call(null,input_schema26597_26610);
var output_checker26599_26612 = schema.core.checker.call(null,output_schema26596_26609);
/**
* Inputs: [apps owner]
*/
redeyes.core.clear_deactivated_button = ((function (ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function clear_deactivated_button(G__26600,G__26601){
var validate__8048__auto__ = ufv___26608.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26600,G__26601], null);
var temp__4126__auto___26614 = input_checker26598_26611.call(null,args__8049__auto___26613);
if(cljs.core.truth_(temp__4126__auto___26614)){
var error__8050__auto___26615 = temp__4126__auto___26614;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8050__auto___26615)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26615,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26613,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26597_26610,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26600;
var owner = G__26601;
while(true){
if(typeof redeyes.core.t26605 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26605 = (function (G__26601,input_schema26597,owner,validate__8048__auto__,apps,clear_deactivated_button,output_checker26599,G__26600,output_schema26596,input_checker26598,ufv__,meta26606){
this.G__26601 = G__26601;
this.input_schema26597 = input_schema26597;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.clear_deactivated_button = clear_deactivated_button;
this.output_checker26599 = output_checker26599;
this.G__26600 = G__26600;
this.output_schema26596 = output_schema26596;
this.input_checker26598 = input_checker26598;
this.ufv__ = ufv__;
this.meta26606 = meta26606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26605.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26605.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function (_){
var self__ = this;
var ___$1 = this;
return "clear-deactivated-button";
});})(validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;

redeyes.core.t26605.prototype.om$core$IRender$ = true;

redeyes.core.t26605.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function (){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null));
});})(___$1,validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;
return redeyes.util.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Clear deactivated apps");
});})(validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;

redeyes.core.t26605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function (_26607){
var self__ = this;
var _26607__$1 = this;
return self__.meta26606;
});})(validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;

redeyes.core.t26605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function (_26607,meta26606__$1){
var self__ = this;
var _26607__$1 = this;
return (new redeyes.core.t26605(self__.G__26601,self__.input_schema26597,self__.owner,self__.validate__8048__auto__,self__.apps,self__.clear_deactivated_button,self__.output_checker26599,self__.G__26600,self__.output_schema26596,self__.input_checker26598,self__.ufv__,meta26606__$1));
});})(validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;

redeyes.core.t26605.cljs$lang$type = true;

redeyes.core.t26605.cljs$lang$ctorStr = "redeyes.core/t26605";

redeyes.core.t26605.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26605");
});})(validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;

redeyes.core.__GT_t26605 = ((function (validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612){
return (function __GT_t26605(G__26601__$1,input_schema26597__$1,owner__$1,validate__8048__auto____$1,apps__$1,clear_deactivated_button__$1,output_checker26599__$1,G__26600__$1,output_schema26596__$1,input_checker26598__$1,ufv____$1,meta26606){
return (new redeyes.core.t26605(G__26601__$1,input_schema26597__$1,owner__$1,validate__8048__auto____$1,apps__$1,clear_deactivated_button__$1,output_checker26599__$1,G__26600__$1,output_schema26596__$1,input_checker26598__$1,ufv____$1,meta26606));
});})(validate__8048__auto__,ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;

}

return (new redeyes.core.t26605(G__26601,input_schema26597_26610,owner,validate__8048__auto__,apps,clear_deactivated_button,output_checker26599_26612,G__26600,output_schema26596_26609,input_checker26598_26611,ufv___26608,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26616 = output_checker26599_26612.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26616)){
var error__8050__auto___26617 = temp__4126__auto___26616;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8050__auto___26617)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26617,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26596_26609,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26608,output_schema26596_26609,input_schema26597_26610,input_checker26598_26611,output_checker26599_26612))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.clear_deactivated_button),schema.core.make_fn_schema.call(null,output_schema26596_26609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26597_26610], null)));

redeyes.core.__GT_clear_deactivated_button = (function() {
var __GT_clear_deactivated_button = null;
var __GT_clear_deactivated_button__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9836__auto__);
});
var __GT_clear_deactivated_button__2 = (function (cursor__9836__auto__,m26595){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9836__auto__,m26595);
});
__GT_clear_deactivated_button = function(cursor__9836__auto__,m26595){
switch(arguments.length){
case 1:
return __GT_clear_deactivated_button__1.call(this,cursor__9836__auto__);
case 2:
return __GT_clear_deactivated_button__2.call(this,cursor__9836__auto__,m26595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$1 = __GT_clear_deactivated_button__1;
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$2 = __GT_clear_deactivated_button__2;
return __GT_clear_deactivated_button;
})()
;

var ufv___26631 = schema.utils.use_fn_validation;
var output_schema26619_26632 = schema.core.Any;
var input_schema26620_26633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26621_26634 = schema.core.checker.call(null,input_schema26620_26633);
var output_checker26622_26635 = schema.core.checker.call(null,output_schema26619_26632);
/**
* Inputs: [app-state owner]
* 
* Root component for the app
*/
redeyes.core.redeyes_app = ((function (ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function redeyes_app(G__26623,G__26624){
var validate__8048__auto__ = ufv___26631.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26623,G__26624], null);
var temp__4126__auto___26637 = input_checker26621_26634.call(null,args__8049__auto___26636);
if(cljs.core.truth_(temp__4126__auto___26637)){
var error__8050__auto___26638 = temp__4126__auto___26637;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8050__auto___26638)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26638,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26636,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26620_26633,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app_state = G__26623;
var owner = G__26624;
while(true){
if(typeof redeyes.core.t26628 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26628 = (function (input_schema26620,owner,validate__8048__auto__,redeyes_app,input_checker26621,G__26624,G__26623,output_checker26622,app_state,output_schema26619,ufv__,meta26629){
this.input_schema26620 = input_schema26620;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.redeyes_app = redeyes_app;
this.input_checker26621 = input_checker26621;
this.G__26624 = G__26624;
this.G__26623 = G__26623;
this.output_checker26622 = output_checker26622;
this.app_state = app_state;
this.output_schema26619 = output_schema26619;
this.ufv__ = ufv__;
this.meta26629 = meta26629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26628.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26628.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function (_){
var self__ = this;
var ___$1 = this;
return "redeyes-app";
});})(validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

redeyes.core.t26628.prototype.om$core$IRender$ = true;

redeyes.core.t26628.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h1(null,"Apps to wake up"),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.hr(null),om.core.build.call(null,redeyes.core.new_sleepy_app_form,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)),cljs.core.apply.call(null,React.DOM.div,{"className": "sleepy-app-list"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,redeyes.core.sleepy_app_list,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state))],null)))),redeyes.util.button_group.call(null,om.core.build.call(null,redeyes.core.wake_up_now_button,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)),om.core.build.call(null,redeyes.core.clear_deactivated_button,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)))],null)));
});})(validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

redeyes.core.t26628.prototype.om$core$IWillMount$ = true;

redeyes.core.t26628.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function (_){
var self__ = this;
var ___$1 = this;
return redeyes.sync.fetch_data.call(null);
});})(validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

redeyes.core.t26628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function (_26630){
var self__ = this;
var _26630__$1 = this;
return self__.meta26629;
});})(validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

redeyes.core.t26628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function (_26630,meta26629__$1){
var self__ = this;
var _26630__$1 = this;
return (new redeyes.core.t26628(self__.input_schema26620,self__.owner,self__.validate__8048__auto__,self__.redeyes_app,self__.input_checker26621,self__.G__26624,self__.G__26623,self__.output_checker26622,self__.app_state,self__.output_schema26619,self__.ufv__,meta26629__$1));
});})(validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

redeyes.core.t26628.cljs$lang$type = true;

redeyes.core.t26628.cljs$lang$ctorStr = "redeyes.core/t26628";

redeyes.core.t26628.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26628");
});})(validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

redeyes.core.__GT_t26628 = ((function (validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635){
return (function __GT_t26628(input_schema26620__$1,owner__$1,validate__8048__auto____$1,redeyes_app__$1,input_checker26621__$1,G__26624__$1,G__26623__$1,output_checker26622__$1,app_state__$1,output_schema26619__$1,ufv____$1,meta26629){
return (new redeyes.core.t26628(input_schema26620__$1,owner__$1,validate__8048__auto____$1,redeyes_app__$1,input_checker26621__$1,G__26624__$1,G__26623__$1,output_checker26622__$1,app_state__$1,output_schema26619__$1,ufv____$1,meta26629));
});})(validate__8048__auto__,ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

}

return (new redeyes.core.t26628(input_schema26620_26633,owner,validate__8048__auto__,redeyes_app,input_checker26621_26634,G__26624,G__26623,output_checker26622_26635,app_state,output_schema26619_26632,ufv___26631,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26639 = output_checker26622_26635.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26639)){
var error__8050__auto___26640 = temp__4126__auto___26639;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8050__auto___26640)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26640,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26619_26632,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26631,output_schema26619_26632,input_schema26620_26633,input_checker26621_26634,output_checker26622_26635))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.redeyes_app),schema.core.make_fn_schema.call(null,output_schema26619_26632,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26620_26633], null)));

redeyes.core.__GT_redeyes_app = (function() {
var __GT_redeyes_app = null;
var __GT_redeyes_app__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9836__auto__);
});
var __GT_redeyes_app__2 = (function (cursor__9836__auto__,m26618){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9836__auto__,m26618);
});
__GT_redeyes_app = function(cursor__9836__auto__,m26618){
switch(arguments.length){
case 1:
return __GT_redeyes_app__1.call(this,cursor__9836__auto__);
case 2:
return __GT_redeyes_app__2.call(this,cursor__9836__auto__,m26618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_redeyes_app.cljs$core$IFn$_invoke$arity$1 = __GT_redeyes_app__1;
__GT_redeyes_app.cljs$core$IFn$_invoke$arity$2 = __GT_redeyes_app__2;
return __GT_redeyes_app;
})()
;
redeyes.core.run = (function run(){

return om.core.root.call(null,redeyes.core.redeyes_app,redeyes.store.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),(function (data,root_cursor){
redeyes.util.log.call(null,data);

return redeyes.util.log_clj.call(null,data);
}),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
goog.exportSymbol('redeyes.core.run', redeyes.core.run);
