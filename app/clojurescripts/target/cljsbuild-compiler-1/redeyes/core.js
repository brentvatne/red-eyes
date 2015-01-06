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

var ufv___26654 = schema.utils.use_fn_validation;
var output_schema26642_26655 = schema.core.Any;
var input_schema26643_26656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26644_26657 = schema.core.checker.call(null,input_schema26643_26656);
var output_checker26645_26658 = schema.core.checker.call(null,output_schema26642_26655);
/**
* Inputs: [apps owner]
* 
* A form where the user can enter a new url to watch
*/
redeyes.core.new_sleepy_app_form = ((function (ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function new_sleepy_app_form(G__26646,G__26647){
var validate__8048__auto__ = ufv___26654.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26646,G__26647], null);
var temp__4126__auto___26660 = input_checker26644_26657.call(null,args__8049__auto___26659);
if(cljs.core.truth_(temp__4126__auto___26660)){
var error__8050__auto___26661 = temp__4126__auto___26660;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8050__auto___26661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26661,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26659,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26643_26656,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26646;
var owner = G__26647;
while(true){
if(typeof redeyes.core.t26651 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26651 = (function (G__26646,input_schema26643,new_sleepy_app_form,owner,validate__8048__auto__,apps,input_checker26644,G__26647,output_checker26645,output_schema26642,ufv__,meta26652){
this.G__26646 = G__26646;
this.input_schema26643 = input_schema26643;
this.new_sleepy_app_form = new_sleepy_app_form;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.input_checker26644 = input_checker26644;
this.G__26647 = G__26647;
this.output_checker26645 = output_checker26645;
this.output_schema26642 = output_schema26642;
this.ufv__ = ufv__;
this.meta26652 = meta26652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26651.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26651.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (_){
var self__ = this;
var ___$1 = this;
return "new-sleepy-app-form";
});})(validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

redeyes.core.t26651.prototype.om$core$IRenderState$ = true;

redeyes.core.t26651.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state);
var apps__$1 = new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(state);
var update_url_state_BANG_ = ((function (url,apps__$1,___$1,validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (new_val){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"url","url",276297046),new_val);
});})(url,apps__$1,___$1,validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;
var handle_change_input = ((function (url,apps__$1,update_url_state_BANG_,___$1,validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (e){
return update_url_state_BANG_.call(null,e.target.value);
});})(url,apps__$1,update_url_state_BANG_,___$1,validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;
var handle_submit_url = ((function (url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (e){
e.preventDefault();

redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"apps","apps",844744865),apps__$1], null));

return update_url_state_BANG_.call(null,"");
});})(url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;
return cljs.core.apply.call(null,React.DOM.form,{"onSubmit": om_tools.dom.format_opts.call(null,handle_submit_url), "className": "new-sleepy-app-form form-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[redeyes.util.input_with_addons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"http://"], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add URL",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_submit_url], null)], null),om.dom.input.call(null,{"placeholder": "URL here please!", "onChange": om_tools.dom.format_opts.call(null,handle_change_input), "value": om_tools.dom.format_opts.call(null,url), "id": "sleepy-app-url", "className": "form-control", "ref": "new-url", "type": "text"}))],null))));
});})(validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

redeyes.core.t26651.prototype.om$core$IInitState$ = true;

redeyes.core.t26651.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null);
});})(validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

redeyes.core.t26651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (_26653){
var self__ = this;
var _26653__$1 = this;
return self__.meta26652;
});})(validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

redeyes.core.t26651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (_26653,meta26652__$1){
var self__ = this;
var _26653__$1 = this;
return (new redeyes.core.t26651(self__.G__26646,self__.input_schema26643,self__.new_sleepy_app_form,self__.owner,self__.validate__8048__auto__,self__.apps,self__.input_checker26644,self__.G__26647,self__.output_checker26645,self__.output_schema26642,self__.ufv__,meta26652__$1));
});})(validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

redeyes.core.t26651.cljs$lang$type = true;

redeyes.core.t26651.cljs$lang$ctorStr = "redeyes.core/t26651";

redeyes.core.t26651.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26651");
});})(validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

redeyes.core.__GT_t26651 = ((function (validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658){
return (function __GT_t26651(G__26646__$1,input_schema26643__$1,new_sleepy_app_form__$1,owner__$1,validate__8048__auto____$1,apps__$1,input_checker26644__$1,G__26647__$1,output_checker26645__$1,output_schema26642__$1,ufv____$1,meta26652){
return (new redeyes.core.t26651(G__26646__$1,input_schema26643__$1,new_sleepy_app_form__$1,owner__$1,validate__8048__auto____$1,apps__$1,input_checker26644__$1,G__26647__$1,output_checker26645__$1,output_schema26642__$1,ufv____$1,meta26652));
});})(validate__8048__auto__,ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

}

return (new redeyes.core.t26651(G__26646,input_schema26643_26656,new_sleepy_app_form,owner,validate__8048__auto__,apps,input_checker26644_26657,G__26647,output_checker26645_26658,output_schema26642_26655,ufv___26654,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26662 = output_checker26645_26658.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26662)){
var error__8050__auto___26663 = temp__4126__auto___26662;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8050__auto___26663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26663,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26642_26655,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26654,output_schema26642_26655,input_schema26643_26656,input_checker26644_26657,output_checker26645_26658))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.new_sleepy_app_form),schema.core.make_fn_schema.call(null,output_schema26642_26655,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26643_26656], null)));

redeyes.core.__GT_new_sleepy_app_form = (function() {
var __GT_new_sleepy_app_form = null;
var __GT_new_sleepy_app_form__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9836__auto__);
});
var __GT_new_sleepy_app_form__2 = (function (cursor__9836__auto__,m26641){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9836__auto__,m26641);
});
__GT_new_sleepy_app_form = function(cursor__9836__auto__,m26641){
switch(arguments.length){
case 1:
return __GT_new_sleepy_app_form__1.call(this,cursor__9836__auto__);
case 2:
return __GT_new_sleepy_app_form__2.call(this,cursor__9836__auto__,m26641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$1 = __GT_new_sleepy_app_form__1;
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$2 = __GT_new_sleepy_app_form__2;
return __GT_new_sleepy_app_form;
})()
;

var ufv___26677 = schema.utils.use_fn_validation;
var output_schema26665_26678 = schema.core.Any;
var input_schema26666_26679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26667_26680 = schema.core.checker.call(null,input_schema26666_26679);
var output_checker26668_26681 = schema.core.checker.call(null,output_schema26665_26678);
/**
* Inputs: [app owner]
* 
* Checkbox that indicates whether or not an app is enabled to be woken up
*/
redeyes.core.sleepy_app_checkbox = ((function (ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function sleepy_app_checkbox(G__26669,G__26670){
var validate__8048__auto__ = ufv___26677.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26669,G__26670], null);
var temp__4126__auto___26683 = input_checker26667_26680.call(null,args__8049__auto___26682);
if(cljs.core.truth_(temp__4126__auto___26683)){
var error__8050__auto___26684 = temp__4126__auto___26683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8050__auto___26684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26684,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26682,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26666_26679,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app = G__26669;
var owner = G__26670;
while(true){
if(typeof redeyes.core.t26674 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26674 = (function (output_checker26668,owner,validate__8048__auto__,sleepy_app_checkbox,output_schema26665,G__26670,input_checker26667,input_schema26666,app,ufv__,G__26669,meta26675){
this.output_checker26668 = output_checker26668;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.sleepy_app_checkbox = sleepy_app_checkbox;
this.output_schema26665 = output_schema26665;
this.G__26670 = G__26670;
this.input_checker26667 = input_checker26667;
this.input_schema26666 = input_schema26666;
this.app = app;
this.ufv__ = ufv__;
this.G__26669 = G__26669;
this.meta26675 = meta26675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26674.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26674.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-checkbox";
});})(validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;

redeyes.core.t26674.prototype.om$core$IRender$ = true;

redeyes.core.t26674.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_change_checked = ((function (___$1,validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function (e){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"active","active",1895962068),e.target.checked], null));
});})(___$1,validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;
return om.dom.input.call(null,{"checked": om_tools.dom.format_opts.call(null,redeyes.util.active_QMARK_.call(null,self__.app)), "onChange": om_tools.dom.format_opts.call(null,handle_change_checked), "type": "checkbox"});
});})(validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;

redeyes.core.t26674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function (_26676){
var self__ = this;
var _26676__$1 = this;
return self__.meta26675;
});})(validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;

redeyes.core.t26674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function (_26676,meta26675__$1){
var self__ = this;
var _26676__$1 = this;
return (new redeyes.core.t26674(self__.output_checker26668,self__.owner,self__.validate__8048__auto__,self__.sleepy_app_checkbox,self__.output_schema26665,self__.G__26670,self__.input_checker26667,self__.input_schema26666,self__.app,self__.ufv__,self__.G__26669,meta26675__$1));
});})(validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;

redeyes.core.t26674.cljs$lang$type = true;

redeyes.core.t26674.cljs$lang$ctorStr = "redeyes.core/t26674";

redeyes.core.t26674.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26674");
});})(validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;

redeyes.core.__GT_t26674 = ((function (validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681){
return (function __GT_t26674(output_checker26668__$1,owner__$1,validate__8048__auto____$1,sleepy_app_checkbox__$1,output_schema26665__$1,G__26670__$1,input_checker26667__$1,input_schema26666__$1,app__$1,ufv____$1,G__26669__$1,meta26675){
return (new redeyes.core.t26674(output_checker26668__$1,owner__$1,validate__8048__auto____$1,sleepy_app_checkbox__$1,output_schema26665__$1,G__26670__$1,input_checker26667__$1,input_schema26666__$1,app__$1,ufv____$1,G__26669__$1,meta26675));
});})(validate__8048__auto__,ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;

}

return (new redeyes.core.t26674(output_checker26668_26681,owner,validate__8048__auto__,sleepy_app_checkbox,output_schema26665_26678,G__26670,input_checker26667_26680,input_schema26666_26679,app,ufv___26677,G__26669,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26685 = output_checker26668_26681.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26685)){
var error__8050__auto___26686 = temp__4126__auto___26685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8050__auto___26686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26686,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26665_26678,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26677,output_schema26665_26678,input_schema26666_26679,input_checker26667_26680,output_checker26668_26681))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_checkbox),schema.core.make_fn_schema.call(null,output_schema26665_26678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26666_26679], null)));

redeyes.core.__GT_sleepy_app_checkbox = (function() {
var __GT_sleepy_app_checkbox = null;
var __GT_sleepy_app_checkbox__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9836__auto__);
});
var __GT_sleepy_app_checkbox__2 = (function (cursor__9836__auto__,m26664){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9836__auto__,m26664);
});
__GT_sleepy_app_checkbox = function(cursor__9836__auto__,m26664){
switch(arguments.length){
case 1:
return __GT_sleepy_app_checkbox__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app_checkbox__2.call(this,cursor__9836__auto__,m26664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_checkbox__1;
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_checkbox__2;
return __GT_sleepy_app_checkbox;
})()
;

var ufv___26700 = schema.utils.use_fn_validation;
var output_schema26688_26701 = schema.core.Any;
var input_schema26689_26702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26690_26703 = schema.core.checker.call(null,input_schema26689_26702);
var output_checker26691_26704 = schema.core.checker.call(null,output_schema26688_26701);
/**
* Inputs: [app owner]
* 
* A row in the sleepy-app-list table
*/
redeyes.core.sleepy_app = ((function (ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704){
return (function sleepy_app(G__26692,G__26693){
var validate__8048__auto__ = ufv___26700.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26692,G__26693], null);
var temp__4126__auto___26706 = input_checker26690_26703.call(null,args__8049__auto___26705);
if(cljs.core.truth_(temp__4126__auto___26706)){
var error__8050__auto___26707 = temp__4126__auto___26706;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8050__auto___26707)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26707,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26705,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26689_26702,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app = G__26692;
var owner = G__26693;
while(true){
if(typeof redeyes.core.t26697 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26697 = (function (owner,validate__8048__auto__,input_checker26690,output_checker26691,input_schema26689,G__26692,output_schema26688,sleepy_app,G__26693,app,ufv__,meta26698){
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.input_checker26690 = input_checker26690;
this.output_checker26691 = output_checker26691;
this.input_schema26689 = input_schema26689;
this.G__26692 = G__26692;
this.output_schema26688 = output_schema26688;
this.sleepy_app = sleepy_app;
this.G__26693 = G__26693;
this.app = app;
this.ufv__ = ufv__;
this.meta26698 = meta26698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26697.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26697.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app";
});})(validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704))
;

redeyes.core.t26697.prototype.om$core$IRender$ = true;

redeyes.core.t26697.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704){
return (function (_){
var self__ = this;
var ___$1 = this;
var url = cljs.core.get.call(null,self__.app,"url");
var last_wake_up = cljs.core.get.call(null,self__.app,"lastWokenUpAt");
var last_wake_up_text = (((last_wake_up == null))?"Never":last_wake_up);
return cljs.core.apply.call(null,React.DOM.tr,{"className": om_tools.dom.format_opts.call(null,redeyes.util.css_classes.call(null,"sleepy-app",((redeyes.util.active_QMARK_.call(null,self__.app))?"active":null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,om.core.build.call(null,redeyes.core.sleepy_app_checkbox,self__.app),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,url,cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,last_wake_up_text,cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704))
;

redeyes.core.t26697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704){
return (function (_26699){
var self__ = this;
var _26699__$1 = this;
return self__.meta26698;
});})(validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704))
;

redeyes.core.t26697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704){
return (function (_26699,meta26698__$1){
var self__ = this;
var _26699__$1 = this;
return (new redeyes.core.t26697(self__.owner,self__.validate__8048__auto__,self__.input_checker26690,self__.output_checker26691,self__.input_schema26689,self__.G__26692,self__.output_schema26688,self__.sleepy_app,self__.G__26693,self__.app,self__.ufv__,meta26698__$1));
});})(validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704))
;

redeyes.core.t26697.cljs$lang$type = true;

redeyes.core.t26697.cljs$lang$ctorStr = "redeyes.core/t26697";

redeyes.core.t26697.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26697");
});})(validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704))
;

redeyes.core.__GT_t26697 = ((function (validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704){
return (function __GT_t26697(owner__$1,validate__8048__auto____$1,input_checker26690__$1,output_checker26691__$1,input_schema26689__$1,G__26692__$1,output_schema26688__$1,sleepy_app__$1,G__26693__$1,app__$1,ufv____$1,meta26698){
return (new redeyes.core.t26697(owner__$1,validate__8048__auto____$1,input_checker26690__$1,output_checker26691__$1,input_schema26689__$1,G__26692__$1,output_schema26688__$1,sleepy_app__$1,G__26693__$1,app__$1,ufv____$1,meta26698));
});})(validate__8048__auto__,ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704))
;

}

return (new redeyes.core.t26697(owner,validate__8048__auto__,input_checker26690_26703,output_checker26691_26704,input_schema26689_26702,G__26692,output_schema26688_26701,sleepy_app,G__26693,app,ufv___26700,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26708 = output_checker26691_26704.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26708)){
var error__8050__auto___26709 = temp__4126__auto___26708;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8050__auto___26709)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26709,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26688_26701,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26700,output_schema26688_26701,input_schema26689_26702,input_checker26690_26703,output_checker26691_26704))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app),schema.core.make_fn_schema.call(null,output_schema26688_26701,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26689_26702], null)));

redeyes.core.__GT_sleepy_app = (function() {
var __GT_sleepy_app = null;
var __GT_sleepy_app__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9836__auto__);
});
var __GT_sleepy_app__2 = (function (cursor__9836__auto__,m26687){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9836__auto__,m26687);
});
__GT_sleepy_app = function(cursor__9836__auto__,m26687){
switch(arguments.length){
case 1:
return __GT_sleepy_app__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app__2.call(this,cursor__9836__auto__,m26687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app__1;
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app__2;
return __GT_sleepy_app;
})()
;

var ufv___26723 = schema.utils.use_fn_validation;
var output_schema26711_26724 = schema.core.Any;
var input_schema26712_26725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26713_26726 = schema.core.checker.call(null,input_schema26712_26725);
var output_checker26714_26727 = schema.core.checker.call(null,output_schema26711_26724);
/**
* Inputs: [apps owner]
* 
* Renders out each of the sleepy-apps
*/
redeyes.core.sleepy_app_list = ((function (ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727){
return (function sleepy_app_list(G__26715,G__26716){
var validate__8048__auto__ = ufv___26723.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26715,G__26716], null);
var temp__4126__auto___26729 = input_checker26713_26726.call(null,args__8049__auto___26728);
if(cljs.core.truth_(temp__4126__auto___26729)){
var error__8050__auto___26730 = temp__4126__auto___26729;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8050__auto___26730)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26730,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26728,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26712_26725,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26715;
var owner = G__26716;
while(true){
if(typeof redeyes.core.t26720 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26720 = (function (output_checker26714,owner,input_schema26712,validate__8048__auto__,G__26715,apps,output_schema26711,sleepy_app_list,G__26716,input_checker26713,ufv__,meta26721){
this.output_checker26714 = output_checker26714;
this.owner = owner;
this.input_schema26712 = input_schema26712;
this.validate__8048__auto__ = validate__8048__auto__;
this.G__26715 = G__26715;
this.apps = apps;
this.output_schema26711 = output_schema26711;
this.sleepy_app_list = sleepy_app_list;
this.G__26716 = G__26716;
this.input_checker26713 = input_checker26713;
this.ufv__ = ufv__;
this.meta26721 = meta26721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26720.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26720.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-list";
});})(validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727))
;

redeyes.core.t26720.prototype.om$core$IRender$ = true;

redeyes.core.t26720.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.empty_QMARK_.call(null,self__.apps)){
return React.DOM.div(null,"No apps");
} else {
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.table,{"className": "table"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.thead,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.th({"className": "sleepy-app-active-col"},""),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(null),React.DOM.th(null)],null))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,om_tools.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,om.core.build_all.call(null,redeyes.core.sleepy_app,self__.apps))],null)))),cljs.core.PersistentVector.EMPTY);
}
});})(validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727))
;

redeyes.core.t26720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727){
return (function (_26722){
var self__ = this;
var _26722__$1 = this;
return self__.meta26721;
});})(validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727))
;

redeyes.core.t26720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727){
return (function (_26722,meta26721__$1){
var self__ = this;
var _26722__$1 = this;
return (new redeyes.core.t26720(self__.output_checker26714,self__.owner,self__.input_schema26712,self__.validate__8048__auto__,self__.G__26715,self__.apps,self__.output_schema26711,self__.sleepy_app_list,self__.G__26716,self__.input_checker26713,self__.ufv__,meta26721__$1));
});})(validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727))
;

redeyes.core.t26720.cljs$lang$type = true;

redeyes.core.t26720.cljs$lang$ctorStr = "redeyes.core/t26720";

redeyes.core.t26720.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26720");
});})(validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727))
;

redeyes.core.__GT_t26720 = ((function (validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727){
return (function __GT_t26720(output_checker26714__$1,owner__$1,input_schema26712__$1,validate__8048__auto____$1,G__26715__$1,apps__$1,output_schema26711__$1,sleepy_app_list__$1,G__26716__$1,input_checker26713__$1,ufv____$1,meta26721){
return (new redeyes.core.t26720(output_checker26714__$1,owner__$1,input_schema26712__$1,validate__8048__auto____$1,G__26715__$1,apps__$1,output_schema26711__$1,sleepy_app_list__$1,G__26716__$1,input_checker26713__$1,ufv____$1,meta26721));
});})(validate__8048__auto__,ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727))
;

}

return (new redeyes.core.t26720(output_checker26714_26727,owner,input_schema26712_26725,validate__8048__auto__,G__26715,apps,output_schema26711_26724,sleepy_app_list,G__26716,input_checker26713_26726,ufv___26723,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26731 = output_checker26714_26727.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26731)){
var error__8050__auto___26732 = temp__4126__auto___26731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8050__auto___26732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26732,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26711_26724,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26723,output_schema26711_26724,input_schema26712_26725,input_checker26713_26726,output_checker26714_26727))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_list),schema.core.make_fn_schema.call(null,output_schema26711_26724,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26712_26725], null)));

redeyes.core.__GT_sleepy_app_list = (function() {
var __GT_sleepy_app_list = null;
var __GT_sleepy_app_list__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9836__auto__);
});
var __GT_sleepy_app_list__2 = (function (cursor__9836__auto__,m26710){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9836__auto__,m26710);
});
__GT_sleepy_app_list = function(cursor__9836__auto__,m26710){
switch(arguments.length){
case 1:
return __GT_sleepy_app_list__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app_list__2.call(this,cursor__9836__auto__,m26710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_list__1;
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_list__2;
return __GT_sleepy_app_list;
})()
;

var ufv___26746 = schema.utils.use_fn_validation;
var output_schema26734_26747 = schema.core.Any;
var input_schema26735_26748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26736_26749 = schema.core.checker.call(null,input_schema26735_26748);
var output_checker26737_26750 = schema.core.checker.call(null,output_schema26734_26747);
/**
* Inputs: [apps owner]
*/
redeyes.core.wake_up_now_button = ((function (ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function wake_up_now_button(G__26738,G__26739){
var validate__8048__auto__ = ufv___26746.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26738,G__26739], null);
var temp__4126__auto___26752 = input_checker26736_26749.call(null,args__8049__auto___26751);
if(cljs.core.truth_(temp__4126__auto___26752)){
var error__8050__auto___26753 = temp__4126__auto___26752;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8050__auto___26753)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26753,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26751,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26735_26748,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26738;
var owner = G__26739;
while(true){
if(typeof redeyes.core.t26743 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26743 = (function (owner,validate__8048__auto__,apps,G__26739,G__26738,wake_up_now_button,output_schema26734,output_checker26737,input_schema26735,input_checker26736,ufv__,meta26744){
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.G__26739 = G__26739;
this.G__26738 = G__26738;
this.wake_up_now_button = wake_up_now_button;
this.output_schema26734 = output_schema26734;
this.output_checker26737 = output_checker26737;
this.input_schema26735 = input_schema26735;
this.input_checker26736 = input_checker26736;
this.ufv__ = ufv__;
this.meta26744 = meta26744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26743.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26743.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function (_){
var self__ = this;
var ___$1 = this;
return "wake-up-now-button";
});})(validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;

redeyes.core.t26743.prototype.om$core$IRender$ = true;

redeyes.core.t26743.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function (){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null));
});})(___$1,validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;
return redeyes.util.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Wake up all apps now!");
});})(validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;

redeyes.core.t26743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function (_26745){
var self__ = this;
var _26745__$1 = this;
return self__.meta26744;
});})(validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;

redeyes.core.t26743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function (_26745,meta26744__$1){
var self__ = this;
var _26745__$1 = this;
return (new redeyes.core.t26743(self__.owner,self__.validate__8048__auto__,self__.apps,self__.G__26739,self__.G__26738,self__.wake_up_now_button,self__.output_schema26734,self__.output_checker26737,self__.input_schema26735,self__.input_checker26736,self__.ufv__,meta26744__$1));
});})(validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;

redeyes.core.t26743.cljs$lang$type = true;

redeyes.core.t26743.cljs$lang$ctorStr = "redeyes.core/t26743";

redeyes.core.t26743.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26743");
});})(validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;

redeyes.core.__GT_t26743 = ((function (validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750){
return (function __GT_t26743(owner__$1,validate__8048__auto____$1,apps__$1,G__26739__$1,G__26738__$1,wake_up_now_button__$1,output_schema26734__$1,output_checker26737__$1,input_schema26735__$1,input_checker26736__$1,ufv____$1,meta26744){
return (new redeyes.core.t26743(owner__$1,validate__8048__auto____$1,apps__$1,G__26739__$1,G__26738__$1,wake_up_now_button__$1,output_schema26734__$1,output_checker26737__$1,input_schema26735__$1,input_checker26736__$1,ufv____$1,meta26744));
});})(validate__8048__auto__,ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;

}

return (new redeyes.core.t26743(owner,validate__8048__auto__,apps,G__26739,G__26738,wake_up_now_button,output_schema26734_26747,output_checker26737_26750,input_schema26735_26748,input_checker26736_26749,ufv___26746,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26754 = output_checker26737_26750.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26754)){
var error__8050__auto___26755 = temp__4126__auto___26754;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8050__auto___26755)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26755,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26734_26747,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26746,output_schema26734_26747,input_schema26735_26748,input_checker26736_26749,output_checker26737_26750))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.wake_up_now_button),schema.core.make_fn_schema.call(null,output_schema26734_26747,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26735_26748], null)));

redeyes.core.__GT_wake_up_now_button = (function() {
var __GT_wake_up_now_button = null;
var __GT_wake_up_now_button__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9836__auto__);
});
var __GT_wake_up_now_button__2 = (function (cursor__9836__auto__,m26733){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9836__auto__,m26733);
});
__GT_wake_up_now_button = function(cursor__9836__auto__,m26733){
switch(arguments.length){
case 1:
return __GT_wake_up_now_button__1.call(this,cursor__9836__auto__);
case 2:
return __GT_wake_up_now_button__2.call(this,cursor__9836__auto__,m26733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$1 = __GT_wake_up_now_button__1;
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$2 = __GT_wake_up_now_button__2;
return __GT_wake_up_now_button;
})()
;

var ufv___26769 = schema.utils.use_fn_validation;
var output_schema26757_26770 = schema.core.Any;
var input_schema26758_26771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26759_26772 = schema.core.checker.call(null,input_schema26758_26771);
var output_checker26760_26773 = schema.core.checker.call(null,output_schema26757_26770);
/**
* Inputs: [apps owner]
*/
redeyes.core.clear_deactivated_button = ((function (ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function clear_deactivated_button(G__26761,G__26762){
var validate__8048__auto__ = ufv___26769.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26761,G__26762], null);
var temp__4126__auto___26775 = input_checker26759_26772.call(null,args__8049__auto___26774);
if(cljs.core.truth_(temp__4126__auto___26775)){
var error__8050__auto___26776 = temp__4126__auto___26775;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8050__auto___26776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26776,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26774,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26758_26771,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__26761;
var owner = G__26762;
while(true){
if(typeof redeyes.core.t26766 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26766 = (function (output_checker26760,G__26761,owner,validate__8048__auto__,apps,clear_deactivated_button,G__26762,output_schema26757,input_checker26759,ufv__,input_schema26758,meta26767){
this.output_checker26760 = output_checker26760;
this.G__26761 = G__26761;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.clear_deactivated_button = clear_deactivated_button;
this.G__26762 = G__26762;
this.output_schema26757 = output_schema26757;
this.input_checker26759 = input_checker26759;
this.ufv__ = ufv__;
this.input_schema26758 = input_schema26758;
this.meta26767 = meta26767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26766.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26766.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function (_){
var self__ = this;
var ___$1 = this;
return "clear-deactivated-button";
});})(validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;

redeyes.core.t26766.prototype.om$core$IRender$ = true;

redeyes.core.t26766.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function (){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null));
});})(___$1,validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;
return redeyes.util.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Clear deactivated apps");
});})(validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;

redeyes.core.t26766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function (_26768){
var self__ = this;
var _26768__$1 = this;
return self__.meta26767;
});})(validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;

redeyes.core.t26766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function (_26768,meta26767__$1){
var self__ = this;
var _26768__$1 = this;
return (new redeyes.core.t26766(self__.output_checker26760,self__.G__26761,self__.owner,self__.validate__8048__auto__,self__.apps,self__.clear_deactivated_button,self__.G__26762,self__.output_schema26757,self__.input_checker26759,self__.ufv__,self__.input_schema26758,meta26767__$1));
});})(validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;

redeyes.core.t26766.cljs$lang$type = true;

redeyes.core.t26766.cljs$lang$ctorStr = "redeyes.core/t26766";

redeyes.core.t26766.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26766");
});})(validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;

redeyes.core.__GT_t26766 = ((function (validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773){
return (function __GT_t26766(output_checker26760__$1,G__26761__$1,owner__$1,validate__8048__auto____$1,apps__$1,clear_deactivated_button__$1,G__26762__$1,output_schema26757__$1,input_checker26759__$1,ufv____$1,input_schema26758__$1,meta26767){
return (new redeyes.core.t26766(output_checker26760__$1,G__26761__$1,owner__$1,validate__8048__auto____$1,apps__$1,clear_deactivated_button__$1,G__26762__$1,output_schema26757__$1,input_checker26759__$1,ufv____$1,input_schema26758__$1,meta26767));
});})(validate__8048__auto__,ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;

}

return (new redeyes.core.t26766(output_checker26760_26773,G__26761,owner,validate__8048__auto__,apps,clear_deactivated_button,G__26762,output_schema26757_26770,input_checker26759_26772,ufv___26769,input_schema26758_26771,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26777 = output_checker26760_26773.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26777)){
var error__8050__auto___26778 = temp__4126__auto___26777;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8050__auto___26778)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26778,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26757_26770,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26769,output_schema26757_26770,input_schema26758_26771,input_checker26759_26772,output_checker26760_26773))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.clear_deactivated_button),schema.core.make_fn_schema.call(null,output_schema26757_26770,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26758_26771], null)));

redeyes.core.__GT_clear_deactivated_button = (function() {
var __GT_clear_deactivated_button = null;
var __GT_clear_deactivated_button__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9836__auto__);
});
var __GT_clear_deactivated_button__2 = (function (cursor__9836__auto__,m26756){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9836__auto__,m26756);
});
__GT_clear_deactivated_button = function(cursor__9836__auto__,m26756){
switch(arguments.length){
case 1:
return __GT_clear_deactivated_button__1.call(this,cursor__9836__auto__);
case 2:
return __GT_clear_deactivated_button__2.call(this,cursor__9836__auto__,m26756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$1 = __GT_clear_deactivated_button__1;
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$2 = __GT_clear_deactivated_button__2;
return __GT_clear_deactivated_button;
})()
;

var ufv___26792 = schema.utils.use_fn_validation;
var output_schema26780_26793 = schema.core.Any;
var input_schema26781_26794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26782_26795 = schema.core.checker.call(null,input_schema26781_26794);
var output_checker26783_26796 = schema.core.checker.call(null,output_schema26780_26793);
/**
* Inputs: [app-state owner]
* 
* Root component for the app
*/
redeyes.core.redeyes_app = ((function (ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function redeyes_app(G__26784,G__26785){
var validate__8048__auto__ = ufv___26792.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___26797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26784,G__26785], null);
var temp__4126__auto___26798 = input_checker26782_26795.call(null,args__8049__auto___26797);
if(cljs.core.truth_(temp__4126__auto___26798)){
var error__8050__auto___26799 = temp__4126__auto___26798;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8050__auto___26799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26799,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___26797,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26781_26794,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app_state = G__26784;
var owner = G__26785;
while(true){
if(typeof redeyes.core.t26789 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t26789 = (function (input_schema26781,owner,validate__8048__auto__,redeyes_app,G__26785,input_checker26782,output_schema26780,output_checker26783,app_state,G__26784,ufv__,meta26790){
this.input_schema26781 = input_schema26781;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.redeyes_app = redeyes_app;
this.G__26785 = G__26785;
this.input_checker26782 = input_checker26782;
this.output_schema26780 = output_schema26780;
this.output_checker26783 = output_checker26783;
this.app_state = app_state;
this.G__26784 = G__26784;
this.ufv__ = ufv__;
this.meta26790 = meta26790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t26789.prototype.om$core$IDisplayName$ = true;

redeyes.core.t26789.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function (_){
var self__ = this;
var ___$1 = this;
return "redeyes-app";
});})(validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

redeyes.core.t26789.prototype.om$core$IRender$ = true;

redeyes.core.t26789.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h1(null,"Apps to wake up"),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.hr(null),om.core.build.call(null,redeyes.core.new_sleepy_app_form,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)),cljs.core.apply.call(null,React.DOM.div,{"className": "sleepy-app-list"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,redeyes.core.sleepy_app_list,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state))],null)))),redeyes.util.button_group.call(null,om.core.build.call(null,redeyes.core.wake_up_now_button,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)),om.core.build.call(null,redeyes.core.clear_deactivated_button,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)))],null)));
});})(validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

redeyes.core.t26789.prototype.om$core$IWillMount$ = true;

redeyes.core.t26789.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function (_){
var self__ = this;
var ___$1 = this;
return redeyes.sync.fetch_data.call(null);
});})(validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

redeyes.core.t26789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function (_26791){
var self__ = this;
var _26791__$1 = this;
return self__.meta26790;
});})(validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

redeyes.core.t26789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function (_26791,meta26790__$1){
var self__ = this;
var _26791__$1 = this;
return (new redeyes.core.t26789(self__.input_schema26781,self__.owner,self__.validate__8048__auto__,self__.redeyes_app,self__.G__26785,self__.input_checker26782,self__.output_schema26780,self__.output_checker26783,self__.app_state,self__.G__26784,self__.ufv__,meta26790__$1));
});})(validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

redeyes.core.t26789.cljs$lang$type = true;

redeyes.core.t26789.cljs$lang$ctorStr = "redeyes.core/t26789";

redeyes.core.t26789.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t26789");
});})(validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

redeyes.core.__GT_t26789 = ((function (validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796){
return (function __GT_t26789(input_schema26781__$1,owner__$1,validate__8048__auto____$1,redeyes_app__$1,G__26785__$1,input_checker26782__$1,output_schema26780__$1,output_checker26783__$1,app_state__$1,G__26784__$1,ufv____$1,meta26790){
return (new redeyes.core.t26789(input_schema26781__$1,owner__$1,validate__8048__auto____$1,redeyes_app__$1,G__26785__$1,input_checker26782__$1,output_schema26780__$1,output_checker26783__$1,app_state__$1,G__26784__$1,ufv____$1,meta26790));
});})(validate__8048__auto__,ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

}

return (new redeyes.core.t26789(input_schema26781_26794,owner,validate__8048__auto__,redeyes_app,G__26785,input_checker26782_26795,output_schema26780_26793,output_checker26783_26796,app_state,G__26784,ufv___26792,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___26800 = output_checker26783_26796.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___26800)){
var error__8050__auto___26801 = temp__4126__auto___26800;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8050__auto___26801)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___26801,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26780_26793,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___26792,output_schema26780_26793,input_schema26781_26794,input_checker26782_26795,output_checker26783_26796))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.redeyes_app),schema.core.make_fn_schema.call(null,output_schema26780_26793,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26781_26794], null)));

redeyes.core.__GT_redeyes_app = (function() {
var __GT_redeyes_app = null;
var __GT_redeyes_app__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9836__auto__);
});
var __GT_redeyes_app__2 = (function (cursor__9836__auto__,m26779){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9836__auto__,m26779);
});
__GT_redeyes_app = function(cursor__9836__auto__,m26779){
switch(arguments.length){
case 1:
return __GT_redeyes_app__1.call(this,cursor__9836__auto__);
case 2:
return __GT_redeyes_app__2.call(this,cursor__9836__auto__,m26779);
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
