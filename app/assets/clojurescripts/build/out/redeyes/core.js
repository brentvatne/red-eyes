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

var ufv___15809 = schema.utils.use_fn_validation;
var output_schema15783_15810 = schema.core.Any;
var input_schema15784_15811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker15785_15812 = schema.core.checker(input_schema15784_15811);
var output_checker15786_15813 = schema.core.checker(output_schema15783_15810);
/**
* Inputs: [apps owner]
* 
* A form where the user can enter a new url to watch
*/
redeyes.core.new_sleepy_app_form = ((function (ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function new_sleepy_app_form(G__15787,G__15788){
var validate__12984__auto__ = ufv___15809.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___15814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15787,G__15788], null);
var temp__4126__auto___15815 = (function (){var G__15799 = args__12985__auto___15814;
return (input_checker15785_15812.cljs$core$IFn$_invoke$arity$1 ? input_checker15785_15812.cljs$core$IFn$_invoke$arity$1(G__15799) : input_checker15785_15812.call(null,G__15799));
})();
if(cljs.core.truth_(temp__4126__auto___15815)){
var error__12986__auto___15816 = temp__4126__auto___15815;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15816], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15816,cljs.core.constant$keyword$72,args__12985__auto___15814,cljs.core.constant$keyword$73,input_schema15784_15811,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var apps = G__15787;
var owner = G__15788;
while(true){
if(typeof redeyes.core.t15800 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t15800 = (function (input_checker15785,G__15788,new_sleepy_app_form,owner,apps,input_schema15784,G__15787,output_checker15786,validate__12984__auto__,output_schema15783,ufv__,meta15801){
this.input_checker15785 = input_checker15785;
this.G__15788 = G__15788;
this.new_sleepy_app_form = new_sleepy_app_form;
this.owner = owner;
this.apps = apps;
this.input_schema15784 = input_schema15784;
this.G__15787 = G__15787;
this.output_checker15786 = output_checker15786;
this.validate__12984__auto__ = validate__12984__auto__;
this.output_schema15783 = output_schema15783;
this.ufv__ = ufv__;
this.meta15801 = meta15801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t15800.prototype.om$core$IDisplayName$ = true;

redeyes.core.t15800.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (_){
var self__ = this;
var ___$1 = this;
return "new-sleepy-app-form";
});})(validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

redeyes.core.t15800.prototype.om$core$IRenderState$ = true;

redeyes.core.t15800.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var url = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(state);
var apps__$1 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(state);
var update_url_state_BANG_ = ((function (url,apps__$1,___$1,validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (new_val){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$68,new_val);
});})(url,apps__$1,___$1,validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;
var handle_change_input = ((function (url,apps__$1,update_url_state_BANG_,___$1,validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (e){
return update_url_state_BANG_(e.target.value);
});})(url,apps__$1,update_url_state_BANG_,___$1,validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;
var handle_submit_url = ((function (url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (e){
e.preventDefault();

var G__15803_15817 = cljs.core.constant$keyword$103;
var G__15804_15818 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,url,cljs.core.constant$keyword$66,apps__$1], null);
(redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 ? redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2(G__15803_15817,G__15804_15818) : redeyes.dispatcher.dispatch_BANG_.call(null,G__15803_15817,G__15804_15818));

return update_url_state_BANG_("");
});})(url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.form,{"onSubmit": om_tools.dom.format_opts(handle_submit_url), "className": "new-sleepy-app-form form-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15805 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$106,"http://"], null),cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,"Add URL",cljs.core.constant$keyword$107,handle_submit_url], null)], null);
var G__15806 = (function (){var G__15807 = {"placeholder": "URL here please!", "onChange": om_tools.dom.format_opts(handle_change_input), "value": om_tools.dom.format_opts(url), "id": "sleepy-app-url", "className": "form-control", "ref": "new-url", "type": "text"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15807) : om.dom.input.call(null,G__15807));
})();
return (redeyes.util.input_with_addons.cljs$core$IFn$_invoke$arity$2 ? redeyes.util.input_with_addons.cljs$core$IFn$_invoke$arity$2(G__15805,G__15806) : redeyes.util.input_with_addons.call(null,G__15805,G__15806));
})()],null))));
});})(validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

redeyes.core.t15800.prototype.om$core$IInitState$ = true;

redeyes.core.t15800.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"",cljs.core.constant$keyword$66,self__.apps], null);
});})(validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

redeyes.core.t15800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (_15802){
var self__ = this;
var _15802__$1 = this;
return self__.meta15801;
});})(validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

redeyes.core.t15800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (_15802,meta15801__$1){
var self__ = this;
var _15802__$1 = this;
return (new redeyes.core.t15800(self__.input_checker15785,self__.G__15788,self__.new_sleepy_app_form,self__.owner,self__.apps,self__.input_schema15784,self__.G__15787,self__.output_checker15786,self__.validate__12984__auto__,self__.output_schema15783,self__.ufv__,meta15801__$1));
});})(validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

redeyes.core.t15800.cljs$lang$type = true;

redeyes.core.t15800.cljs$lang$ctorStr = "redeyes.core/t15800";

redeyes.core.t15800.cljs$lang$ctorPrWriter = ((function (validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"redeyes.core/t15800");
});})(validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

redeyes.core.__GT_t15800 = ((function (validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813){
return (function __GT_t15800(input_checker15785__$1,G__15788__$1,new_sleepy_app_form__$1,owner__$1,apps__$1,input_schema15784__$1,G__15787__$1,output_checker15786__$1,validate__12984__auto____$1,output_schema15783__$1,ufv____$1,meta15801){
return (new redeyes.core.t15800(input_checker15785__$1,G__15788__$1,new_sleepy_app_form__$1,owner__$1,apps__$1,input_schema15784__$1,G__15787__$1,output_checker15786__$1,validate__12984__auto____$1,output_schema15783__$1,ufv____$1,meta15801));
});})(validate__12984__auto__,ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

}

return (new redeyes.core.t15800(input_checker15785_15812,G__15788,new_sleepy_app_form,owner,apps,input_schema15784_15811,G__15787,output_checker15786_15813,validate__12984__auto__,output_schema15783_15810,ufv___15809,null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___15819 = (function (){var G__15808 = o__12987__auto__;
return (output_checker15786_15813.cljs$core$IFn$_invoke$arity$1 ? output_checker15786_15813.cljs$core$IFn$_invoke$arity$1(G__15808) : output_checker15786_15813.call(null,G__15808));
})();
if(cljs.core.truth_(temp__4126__auto___15819)){
var error__12986__auto___15820 = temp__4126__auto___15819;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15820], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15820,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema15783_15810,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___15809,output_schema15783_15810,input_schema15784_15811,input_checker15785_15812,output_checker15786_15813))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(redeyes.core.new_sleepy_app_form),schema.core.make_fn_schema(output_schema15783_15810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15784_15811], null)));

redeyes.core.__GT_new_sleepy_app_form = (function() {
var __GT_new_sleepy_app_form = null;
var __GT_new_sleepy_app_form__1 = (function (cursor__14772__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.new_sleepy_app_form,cursor__14772__auto__);
});
var __GT_new_sleepy_app_form__2 = (function (cursor__14772__auto__,m15782){
return om.core.build.cljs$core$IFn$_invoke$arity$3(redeyes.core.new_sleepy_app_form,cursor__14772__auto__,m15782);
});
__GT_new_sleepy_app_form = function(cursor__14772__auto__,m15782){
switch(arguments.length){
case 1:
return __GT_new_sleepy_app_form__1.call(this,cursor__14772__auto__);
case 2:
return __GT_new_sleepy_app_form__2.call(this,cursor__14772__auto__,m15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$1 = __GT_new_sleepy_app_form__1;
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$2 = __GT_new_sleepy_app_form__2;
return __GT_new_sleepy_app_form;
})()
;

var ufv___15846 = schema.utils.use_fn_validation;
var output_schema15822_15847 = schema.core.Any;
var input_schema15823_15848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker15824_15849 = schema.core.checker(input_schema15823_15848);
var output_checker15825_15850 = schema.core.checker(output_schema15822_15847);
/**
* Inputs: [app owner]
* 
* Checkbox that indicates whether or not an app is enabled to be woken up
*/
redeyes.core.sleepy_app_checkbox = ((function (ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function sleepy_app_checkbox(G__15826,G__15827){
var validate__12984__auto__ = ufv___15846.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___15851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15826,G__15827], null);
var temp__4126__auto___15852 = (function (){var G__15837 = args__12985__auto___15851;
return (input_checker15824_15849.cljs$core$IFn$_invoke$arity$1 ? input_checker15824_15849.cljs$core$IFn$_invoke$arity$1(G__15837) : input_checker15824_15849.call(null,G__15837));
})();
if(cljs.core.truth_(temp__4126__auto___15852)){
var error__12986__auto___15853 = temp__4126__auto___15852;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15853], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15853,cljs.core.constant$keyword$72,args__12985__auto___15851,cljs.core.constant$keyword$73,input_schema15823_15848,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var app = G__15826;
var owner = G__15827;
while(true){
if(typeof redeyes.core.t15838 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t15838 = (function (owner,input_schema15823,sleepy_app_checkbox,output_schema15822,input_checker15824,G__15826,G__15827,output_checker15825,validate__12984__auto__,app,ufv__,meta15839){
this.owner = owner;
this.input_schema15823 = input_schema15823;
this.sleepy_app_checkbox = sleepy_app_checkbox;
this.output_schema15822 = output_schema15822;
this.input_checker15824 = input_checker15824;
this.G__15826 = G__15826;
this.G__15827 = G__15827;
this.output_checker15825 = output_checker15825;
this.validate__12984__auto__ = validate__12984__auto__;
this.app = app;
this.ufv__ = ufv__;
this.meta15839 = meta15839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t15838.prototype.om$core$IDisplayName$ = true;

redeyes.core.t15838.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-checkbox";
});})(validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;

redeyes.core.t15838.prototype.om$core$IRender$ = true;

redeyes.core.t15838.prototype.om$core$IRender$render$arity$1 = ((function (validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_change_checked = ((function (___$1,validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function (e){
var G__15841 = cljs.core.constant$keyword$108;
var G__15842 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,self__.app,cljs.core.constant$keyword$110,e.target.checked], null);
return (redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 ? redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2(G__15841,G__15842) : redeyes.dispatcher.dispatch_BANG_.call(null,G__15841,G__15842));
});})(___$1,validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;
var G__15843 = {"checked": om_tools.dom.format_opts((function (){var G__15844 = self__.app;
return (redeyes.util.active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? redeyes.util.active_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15844) : redeyes.util.active_QMARK_.call(null,G__15844));
})()), "onChange": om_tools.dom.format_opts(handle_change_checked), "type": "checkbox"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15843) : om.dom.input.call(null,G__15843));
});})(validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;

redeyes.core.t15838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function (_15840){
var self__ = this;
var _15840__$1 = this;
return self__.meta15839;
});})(validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;

redeyes.core.t15838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function (_15840,meta15839__$1){
var self__ = this;
var _15840__$1 = this;
return (new redeyes.core.t15838(self__.owner,self__.input_schema15823,self__.sleepy_app_checkbox,self__.output_schema15822,self__.input_checker15824,self__.G__15826,self__.G__15827,self__.output_checker15825,self__.validate__12984__auto__,self__.app,self__.ufv__,meta15839__$1));
});})(validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;

redeyes.core.t15838.cljs$lang$type = true;

redeyes.core.t15838.cljs$lang$ctorStr = "redeyes.core/t15838";

redeyes.core.t15838.cljs$lang$ctorPrWriter = ((function (validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"redeyes.core/t15838");
});})(validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;

redeyes.core.__GT_t15838 = ((function (validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850){
return (function __GT_t15838(owner__$1,input_schema15823__$1,sleepy_app_checkbox__$1,output_schema15822__$1,input_checker15824__$1,G__15826__$1,G__15827__$1,output_checker15825__$1,validate__12984__auto____$1,app__$1,ufv____$1,meta15839){
return (new redeyes.core.t15838(owner__$1,input_schema15823__$1,sleepy_app_checkbox__$1,output_schema15822__$1,input_checker15824__$1,G__15826__$1,G__15827__$1,output_checker15825__$1,validate__12984__auto____$1,app__$1,ufv____$1,meta15839));
});})(validate__12984__auto__,ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;

}

return (new redeyes.core.t15838(owner,input_schema15823_15848,sleepy_app_checkbox,output_schema15822_15847,input_checker15824_15849,G__15826,G__15827,output_checker15825_15850,validate__12984__auto__,app,ufv___15846,null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___15854 = (function (){var G__15845 = o__12987__auto__;
return (output_checker15825_15850.cljs$core$IFn$_invoke$arity$1 ? output_checker15825_15850.cljs$core$IFn$_invoke$arity$1(G__15845) : output_checker15825_15850.call(null,G__15845));
})();
if(cljs.core.truth_(temp__4126__auto___15854)){
var error__12986__auto___15855 = temp__4126__auto___15854;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15855], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15855,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema15822_15847,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___15846,output_schema15822_15847,input_schema15823_15848,input_checker15824_15849,output_checker15825_15850))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(redeyes.core.sleepy_app_checkbox),schema.core.make_fn_schema(output_schema15822_15847,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15823_15848], null)));

redeyes.core.__GT_sleepy_app_checkbox = (function() {
var __GT_sleepy_app_checkbox = null;
var __GT_sleepy_app_checkbox__1 = (function (cursor__14772__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.sleepy_app_checkbox,cursor__14772__auto__);
});
var __GT_sleepy_app_checkbox__2 = (function (cursor__14772__auto__,m15821){
return om.core.build.cljs$core$IFn$_invoke$arity$3(redeyes.core.sleepy_app_checkbox,cursor__14772__auto__,m15821);
});
__GT_sleepy_app_checkbox = function(cursor__14772__auto__,m15821){
switch(arguments.length){
case 1:
return __GT_sleepy_app_checkbox__1.call(this,cursor__14772__auto__);
case 2:
return __GT_sleepy_app_checkbox__2.call(this,cursor__14772__auto__,m15821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_checkbox__1;
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_checkbox__2;
return __GT_sleepy_app_checkbox;
})()
;

var ufv___15879 = schema.utils.use_fn_validation;
var output_schema15857_15880 = schema.core.Any;
var input_schema15858_15881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker15859_15882 = schema.core.checker(input_schema15858_15881);
var output_checker15860_15883 = schema.core.checker(output_schema15857_15880);
/**
* Inputs: [app owner]
* 
* A row in the sleepy-app-list table
*/
redeyes.core.sleepy_app = ((function (ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883){
return (function sleepy_app(G__15861,G__15862){
var validate__12984__auto__ = ufv___15879.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___15884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15861,G__15862], null);
var temp__4126__auto___15885 = (function (){var G__15871 = args__12985__auto___15884;
return (input_checker15859_15882.cljs$core$IFn$_invoke$arity$1 ? input_checker15859_15882.cljs$core$IFn$_invoke$arity$1(G__15871) : input_checker15859_15882.call(null,G__15871));
})();
if(cljs.core.truth_(temp__4126__auto___15885)){
var error__12986__auto___15886 = temp__4126__auto___15885;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15886], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15886,cljs.core.constant$keyword$72,args__12985__auto___15884,cljs.core.constant$keyword$73,input_schema15858_15881,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var app = G__15861;
var owner = G__15862;
while(true){
if(typeof redeyes.core.t15872 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t15872 = (function (input_schema15858,owner,output_checker15860,input_checker15859,output_schema15857,G__15861,sleepy_app,G__15862,validate__12984__auto__,app,ufv__,meta15873){
this.input_schema15858 = input_schema15858;
this.owner = owner;
this.output_checker15860 = output_checker15860;
this.input_checker15859 = input_checker15859;
this.output_schema15857 = output_schema15857;
this.G__15861 = G__15861;
this.sleepy_app = sleepy_app;
this.G__15862 = G__15862;
this.validate__12984__auto__ = validate__12984__auto__;
this.app = app;
this.ufv__ = ufv__;
this.meta15873 = meta15873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t15872.prototype.om$core$IDisplayName$ = true;

redeyes.core.t15872.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app";
});})(validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883))
;

redeyes.core.t15872.prototype.om$core$IRender$ = true;

redeyes.core.t15872.prototype.om$core$IRender$render$arity$1 = ((function (validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883){
return (function (_){
var self__ = this;
var ___$1 = this;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.app,"url");
var last_wake_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.app,"lastWokenUpAt");
var last_wake_up_text = (((last_wake_up == null))?"Never":last_wake_up);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,{"className": om_tools.dom.format_opts((function (){var G__15875 = "sleepy-app";
var G__15876 = (cljs.core.truth_((function (){var G__15877 = self__.app;
return (redeyes.util.active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? redeyes.util.active_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15877) : redeyes.util.active_QMARK_.call(null,G__15877));
})())?"active":null);
return (redeyes.util.css_classes.cljs$core$IFn$_invoke$arity$2 ? redeyes.util.css_classes.cljs$core$IFn$_invoke$arity$2(G__15875,G__15876) : redeyes.util.css_classes.call(null,G__15875,G__15876));
})())},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.td,om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.sleepy_app_checkbox,self__.app),cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.td,url,cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.td,last_wake_up_text,cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883))
;

redeyes.core.t15872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883){
return (function (_15874){
var self__ = this;
var _15874__$1 = this;
return self__.meta15873;
});})(validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883))
;

redeyes.core.t15872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883){
return (function (_15874,meta15873__$1){
var self__ = this;
var _15874__$1 = this;
return (new redeyes.core.t15872(self__.input_schema15858,self__.owner,self__.output_checker15860,self__.input_checker15859,self__.output_schema15857,self__.G__15861,self__.sleepy_app,self__.G__15862,self__.validate__12984__auto__,self__.app,self__.ufv__,meta15873__$1));
});})(validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883))
;

redeyes.core.t15872.cljs$lang$type = true;

redeyes.core.t15872.cljs$lang$ctorStr = "redeyes.core/t15872";

redeyes.core.t15872.cljs$lang$ctorPrWriter = ((function (validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"redeyes.core/t15872");
});})(validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883))
;

redeyes.core.__GT_t15872 = ((function (validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883){
return (function __GT_t15872(input_schema15858__$1,owner__$1,output_checker15860__$1,input_checker15859__$1,output_schema15857__$1,G__15861__$1,sleepy_app__$1,G__15862__$1,validate__12984__auto____$1,app__$1,ufv____$1,meta15873){
return (new redeyes.core.t15872(input_schema15858__$1,owner__$1,output_checker15860__$1,input_checker15859__$1,output_schema15857__$1,G__15861__$1,sleepy_app__$1,G__15862__$1,validate__12984__auto____$1,app__$1,ufv____$1,meta15873));
});})(validate__12984__auto__,ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883))
;

}

return (new redeyes.core.t15872(input_schema15858_15881,owner,output_checker15860_15883,input_checker15859_15882,output_schema15857_15880,G__15861,sleepy_app,G__15862,validate__12984__auto__,app,ufv___15879,null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___15887 = (function (){var G__15878 = o__12987__auto__;
return (output_checker15860_15883.cljs$core$IFn$_invoke$arity$1 ? output_checker15860_15883.cljs$core$IFn$_invoke$arity$1(G__15878) : output_checker15860_15883.call(null,G__15878));
})();
if(cljs.core.truth_(temp__4126__auto___15887)){
var error__12986__auto___15888 = temp__4126__auto___15887;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15888], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15888,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema15857_15880,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___15879,output_schema15857_15880,input_schema15858_15881,input_checker15859_15882,output_checker15860_15883))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(redeyes.core.sleepy_app),schema.core.make_fn_schema(output_schema15857_15880,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15858_15881], null)));

redeyes.core.__GT_sleepy_app = (function() {
var __GT_sleepy_app = null;
var __GT_sleepy_app__1 = (function (cursor__14772__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.sleepy_app,cursor__14772__auto__);
});
var __GT_sleepy_app__2 = (function (cursor__14772__auto__,m15856){
return om.core.build.cljs$core$IFn$_invoke$arity$3(redeyes.core.sleepy_app,cursor__14772__auto__,m15856);
});
__GT_sleepy_app = function(cursor__14772__auto__,m15856){
switch(arguments.length){
case 1:
return __GT_sleepy_app__1.call(this,cursor__14772__auto__);
case 2:
return __GT_sleepy_app__2.call(this,cursor__14772__auto__,m15856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app__1;
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app__2;
return __GT_sleepy_app;
})()
;

var ufv___15918 = schema.utils.use_fn_validation;
var output_schema15890_15919 = schema.core.Any;
var input_schema15891_15920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker15892_15921 = schema.core.checker(input_schema15891_15920);
var output_checker15893_15922 = schema.core.checker(output_schema15890_15919);
/**
* Inputs: [apps owner]
* 
* Renders out each of the sleepy-apps
*/
redeyes.core.sleepy_app_list = ((function (ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922){
return (function sleepy_app_list(G__15894,G__15895){
var validate__12984__auto__ = ufv___15918.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___15923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15894,G__15895], null);
var temp__4126__auto___15924 = (function (){var G__15907 = args__12985__auto___15923;
return (input_checker15892_15921.cljs$core$IFn$_invoke$arity$1 ? input_checker15892_15921.cljs$core$IFn$_invoke$arity$1(G__15907) : input_checker15892_15921.call(null,G__15907));
})();
if(cljs.core.truth_(temp__4126__auto___15924)){
var error__12986__auto___15925 = temp__4126__auto___15924;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15925], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15925,cljs.core.constant$keyword$72,args__12985__auto___15923,cljs.core.constant$keyword$73,input_schema15891_15920,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var apps = G__15894;
var owner = G__15895;
while(true){
if(typeof redeyes.core.t15908 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t15908 = (function (owner,apps,output_checker15893,G__15894,G__15895,input_schema15891,sleepy_app_list,output_schema15890,validate__12984__auto__,ufv__,input_checker15892,meta15909){
this.owner = owner;
this.apps = apps;
this.output_checker15893 = output_checker15893;
this.G__15894 = G__15894;
this.G__15895 = G__15895;
this.input_schema15891 = input_schema15891;
this.sleepy_app_list = sleepy_app_list;
this.output_schema15890 = output_schema15890;
this.validate__12984__auto__ = validate__12984__auto__;
this.ufv__ = ufv__;
this.input_checker15892 = input_checker15892;
this.meta15909 = meta15909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t15908.prototype.om$core$IDisplayName$ = true;

redeyes.core.t15908.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-list";
});})(validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922))
;

redeyes.core.t15908.prototype.om$core$IRender$ = true;

redeyes.core.t15908.prototype.om$core$IRender$render$arity$1 = ((function (validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.empty_QMARK_(self__.apps)){
var G__15911 = null;
var G__15912 = "No apps";
return React.DOM.div(G__15911,G__15912);
} else {
return om_tools.dom.element(React.DOM.div,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.table,{"className": "table"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.thead,om_tools.dom.element(React.DOM.tr,(function (){var G__15913 = {"className": "sleepy-app-active-col"};
var G__15914 = "";
return React.DOM.th(G__15913,G__15914);
})(),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15915 = null;
return React.DOM.th(G__15915);
})(),(function (){var G__15916 = null;
return React.DOM.th(G__15916);
})()],null))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_tools.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,om.core.build_all.cljs$core$IFn$_invoke$arity$2(redeyes.core.sleepy_app,self__.apps))],null)))),cljs.core.PersistentVector.EMPTY);
}
});})(validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922))
;

redeyes.core.t15908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922){
return (function (_15910){
var self__ = this;
var _15910__$1 = this;
return self__.meta15909;
});})(validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922))
;

redeyes.core.t15908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922){
return (function (_15910,meta15909__$1){
var self__ = this;
var _15910__$1 = this;
return (new redeyes.core.t15908(self__.owner,self__.apps,self__.output_checker15893,self__.G__15894,self__.G__15895,self__.input_schema15891,self__.sleepy_app_list,self__.output_schema15890,self__.validate__12984__auto__,self__.ufv__,self__.input_checker15892,meta15909__$1));
});})(validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922))
;

redeyes.core.t15908.cljs$lang$type = true;

redeyes.core.t15908.cljs$lang$ctorStr = "redeyes.core/t15908";

redeyes.core.t15908.cljs$lang$ctorPrWriter = ((function (validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"redeyes.core/t15908");
});})(validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922))
;

redeyes.core.__GT_t15908 = ((function (validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922){
return (function __GT_t15908(owner__$1,apps__$1,output_checker15893__$1,G__15894__$1,G__15895__$1,input_schema15891__$1,sleepy_app_list__$1,output_schema15890__$1,validate__12984__auto____$1,ufv____$1,input_checker15892__$1,meta15909){
return (new redeyes.core.t15908(owner__$1,apps__$1,output_checker15893__$1,G__15894__$1,G__15895__$1,input_schema15891__$1,sleepy_app_list__$1,output_schema15890__$1,validate__12984__auto____$1,ufv____$1,input_checker15892__$1,meta15909));
});})(validate__12984__auto__,ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922))
;

}

return (new redeyes.core.t15908(owner,apps,output_checker15893_15922,G__15894,G__15895,input_schema15891_15920,sleepy_app_list,output_schema15890_15919,validate__12984__auto__,ufv___15918,input_checker15892_15921,null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___15926 = (function (){var G__15917 = o__12987__auto__;
return (output_checker15893_15922.cljs$core$IFn$_invoke$arity$1 ? output_checker15893_15922.cljs$core$IFn$_invoke$arity$1(G__15917) : output_checker15893_15922.call(null,G__15917));
})();
if(cljs.core.truth_(temp__4126__auto___15926)){
var error__12986__auto___15927 = temp__4126__auto___15926;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15927], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15927,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema15890_15919,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___15918,output_schema15890_15919,input_schema15891_15920,input_checker15892_15921,output_checker15893_15922))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(redeyes.core.sleepy_app_list),schema.core.make_fn_schema(output_schema15890_15919,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15891_15920], null)));

redeyes.core.__GT_sleepy_app_list = (function() {
var __GT_sleepy_app_list = null;
var __GT_sleepy_app_list__1 = (function (cursor__14772__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.sleepy_app_list,cursor__14772__auto__);
});
var __GT_sleepy_app_list__2 = (function (cursor__14772__auto__,m15889){
return om.core.build.cljs$core$IFn$_invoke$arity$3(redeyes.core.sleepy_app_list,cursor__14772__auto__,m15889);
});
__GT_sleepy_app_list = function(cursor__14772__auto__,m15889){
switch(arguments.length){
case 1:
return __GT_sleepy_app_list__1.call(this,cursor__14772__auto__);
case 2:
return __GT_sleepy_app_list__2.call(this,cursor__14772__auto__,m15889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_list__1;
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_list__2;
return __GT_sleepy_app_list;
})()
;

var ufv___15953 = schema.utils.use_fn_validation;
var output_schema15929_15954 = schema.core.Any;
var input_schema15930_15955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker15931_15956 = schema.core.checker(input_schema15930_15955);
var output_checker15932_15957 = schema.core.checker(output_schema15929_15954);
/**
* Inputs: [apps owner]
*/
redeyes.core.wake_up_now_button = ((function (ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function wake_up_now_button(G__15933,G__15934){
var validate__12984__auto__ = ufv___15953.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___15958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15933,G__15934], null);
var temp__4126__auto___15959 = (function (){var G__15944 = args__12985__auto___15958;
return (input_checker15931_15956.cljs$core$IFn$_invoke$arity$1 ? input_checker15931_15956.cljs$core$IFn$_invoke$arity$1(G__15944) : input_checker15931_15956.call(null,G__15944));
})();
if(cljs.core.truth_(temp__4126__auto___15959)){
var error__12986__auto___15960 = temp__4126__auto___15959;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15960], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15960,cljs.core.constant$keyword$72,args__12985__auto___15958,cljs.core.constant$keyword$73,input_schema15930_15955,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var apps = G__15933;
var owner = G__15934;
while(true){
if(typeof redeyes.core.t15945 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t15945 = (function (owner,output_checker15932,apps,input_schema15930,output_schema15929,G__15934,G__15933,wake_up_now_button,validate__12984__auto__,input_checker15931,ufv__,meta15946){
this.owner = owner;
this.output_checker15932 = output_checker15932;
this.apps = apps;
this.input_schema15930 = input_schema15930;
this.output_schema15929 = output_schema15929;
this.G__15934 = G__15934;
this.G__15933 = G__15933;
this.wake_up_now_button = wake_up_now_button;
this.validate__12984__auto__ = validate__12984__auto__;
this.input_checker15931 = input_checker15931;
this.ufv__ = ufv__;
this.meta15946 = meta15946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t15945.prototype.om$core$IDisplayName$ = true;

redeyes.core.t15945.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function (_){
var self__ = this;
var ___$1 = this;
return "wake-up-now-button";
});})(validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;

redeyes.core.t15945.prototype.om$core$IRender$ = true;

redeyes.core.t15945.prototype.om$core$IRender$render$arity$1 = ((function (validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function (){
var G__15948 = cljs.core.constant$keyword$111;
var G__15949 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,self__.apps], null);
return (redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 ? redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2(G__15948,G__15949) : redeyes.dispatcher.dispatch_BANG_.call(null,G__15948,G__15949));
});})(___$1,validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;
var G__15950 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,handle_button_click], null);
var G__15951 = "Wake up all apps now!";
return (redeyes.util.button.cljs$core$IFn$_invoke$arity$2 ? redeyes.util.button.cljs$core$IFn$_invoke$arity$2(G__15950,G__15951) : redeyes.util.button.call(null,G__15950,G__15951));
});})(validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;

redeyes.core.t15945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function (_15947){
var self__ = this;
var _15947__$1 = this;
return self__.meta15946;
});})(validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;

redeyes.core.t15945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function (_15947,meta15946__$1){
var self__ = this;
var _15947__$1 = this;
return (new redeyes.core.t15945(self__.owner,self__.output_checker15932,self__.apps,self__.input_schema15930,self__.output_schema15929,self__.G__15934,self__.G__15933,self__.wake_up_now_button,self__.validate__12984__auto__,self__.input_checker15931,self__.ufv__,meta15946__$1));
});})(validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;

redeyes.core.t15945.cljs$lang$type = true;

redeyes.core.t15945.cljs$lang$ctorStr = "redeyes.core/t15945";

redeyes.core.t15945.cljs$lang$ctorPrWriter = ((function (validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"redeyes.core/t15945");
});})(validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;

redeyes.core.__GT_t15945 = ((function (validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957){
return (function __GT_t15945(owner__$1,output_checker15932__$1,apps__$1,input_schema15930__$1,output_schema15929__$1,G__15934__$1,G__15933__$1,wake_up_now_button__$1,validate__12984__auto____$1,input_checker15931__$1,ufv____$1,meta15946){
return (new redeyes.core.t15945(owner__$1,output_checker15932__$1,apps__$1,input_schema15930__$1,output_schema15929__$1,G__15934__$1,G__15933__$1,wake_up_now_button__$1,validate__12984__auto____$1,input_checker15931__$1,ufv____$1,meta15946));
});})(validate__12984__auto__,ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;

}

return (new redeyes.core.t15945(owner,output_checker15932_15957,apps,input_schema15930_15955,output_schema15929_15954,G__15934,G__15933,wake_up_now_button,validate__12984__auto__,input_checker15931_15956,ufv___15953,null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___15961 = (function (){var G__15952 = o__12987__auto__;
return (output_checker15932_15957.cljs$core$IFn$_invoke$arity$1 ? output_checker15932_15957.cljs$core$IFn$_invoke$arity$1(G__15952) : output_checker15932_15957.call(null,G__15952));
})();
if(cljs.core.truth_(temp__4126__auto___15961)){
var error__12986__auto___15962 = temp__4126__auto___15961;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15962], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15962,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema15929_15954,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___15953,output_schema15929_15954,input_schema15930_15955,input_checker15931_15956,output_checker15932_15957))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(redeyes.core.wake_up_now_button),schema.core.make_fn_schema(output_schema15929_15954,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15930_15955], null)));

redeyes.core.__GT_wake_up_now_button = (function() {
var __GT_wake_up_now_button = null;
var __GT_wake_up_now_button__1 = (function (cursor__14772__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.wake_up_now_button,cursor__14772__auto__);
});
var __GT_wake_up_now_button__2 = (function (cursor__14772__auto__,m15928){
return om.core.build.cljs$core$IFn$_invoke$arity$3(redeyes.core.wake_up_now_button,cursor__14772__auto__,m15928);
});
__GT_wake_up_now_button = function(cursor__14772__auto__,m15928){
switch(arguments.length){
case 1:
return __GT_wake_up_now_button__1.call(this,cursor__14772__auto__);
case 2:
return __GT_wake_up_now_button__2.call(this,cursor__14772__auto__,m15928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$1 = __GT_wake_up_now_button__1;
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$2 = __GT_wake_up_now_button__2;
return __GT_wake_up_now_button;
})()
;

var ufv___15988 = schema.utils.use_fn_validation;
var output_schema15964_15989 = schema.core.Any;
var input_schema15965_15990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker15966_15991 = schema.core.checker(input_schema15965_15990);
var output_checker15967_15992 = schema.core.checker(output_schema15964_15989);
/**
* Inputs: [apps owner]
*/
redeyes.core.clear_deactivated_button = ((function (ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function clear_deactivated_button(G__15968,G__15969){
var validate__12984__auto__ = ufv___15988.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___15993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15968,G__15969], null);
var temp__4126__auto___15994 = (function (){var G__15979 = args__12985__auto___15993;
return (input_checker15966_15991.cljs$core$IFn$_invoke$arity$1 ? input_checker15966_15991.cljs$core$IFn$_invoke$arity$1(G__15979) : input_checker15966_15991.call(null,G__15979));
})();
if(cljs.core.truth_(temp__4126__auto___15994)){
var error__12986__auto___15995 = temp__4126__auto___15994;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15995], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15995,cljs.core.constant$keyword$72,args__12985__auto___15993,cljs.core.constant$keyword$73,input_schema15965_15990,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var apps = G__15968;
var owner = G__15969;
while(true){
if(typeof redeyes.core.t15980 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t15980 = (function (owner,input_checker15966,G__15968,apps,clear_deactivated_button,output_schema15964,input_schema15965,G__15969,validate__12984__auto__,output_checker15967,ufv__,meta15981){
this.owner = owner;
this.input_checker15966 = input_checker15966;
this.G__15968 = G__15968;
this.apps = apps;
this.clear_deactivated_button = clear_deactivated_button;
this.output_schema15964 = output_schema15964;
this.input_schema15965 = input_schema15965;
this.G__15969 = G__15969;
this.validate__12984__auto__ = validate__12984__auto__;
this.output_checker15967 = output_checker15967;
this.ufv__ = ufv__;
this.meta15981 = meta15981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t15980.prototype.om$core$IDisplayName$ = true;

redeyes.core.t15980.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function (_){
var self__ = this;
var ___$1 = this;
return "clear-deactivated-button";
});})(validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;

redeyes.core.t15980.prototype.om$core$IRender$ = true;

redeyes.core.t15980.prototype.om$core$IRender$render$arity$1 = ((function (validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function (){
var G__15983 = cljs.core.constant$keyword$112;
var G__15984 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,self__.apps], null);
return (redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 ? redeyes.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2(G__15983,G__15984) : redeyes.dispatcher.dispatch_BANG_.call(null,G__15983,G__15984));
});})(___$1,validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;
var G__15985 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,handle_button_click], null);
var G__15986 = "Clear deactivated apps";
return (redeyes.util.button.cljs$core$IFn$_invoke$arity$2 ? redeyes.util.button.cljs$core$IFn$_invoke$arity$2(G__15985,G__15986) : redeyes.util.button.call(null,G__15985,G__15986));
});})(validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;

redeyes.core.t15980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function (_15982){
var self__ = this;
var _15982__$1 = this;
return self__.meta15981;
});})(validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;

redeyes.core.t15980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function (_15982,meta15981__$1){
var self__ = this;
var _15982__$1 = this;
return (new redeyes.core.t15980(self__.owner,self__.input_checker15966,self__.G__15968,self__.apps,self__.clear_deactivated_button,self__.output_schema15964,self__.input_schema15965,self__.G__15969,self__.validate__12984__auto__,self__.output_checker15967,self__.ufv__,meta15981__$1));
});})(validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;

redeyes.core.t15980.cljs$lang$type = true;

redeyes.core.t15980.cljs$lang$ctorStr = "redeyes.core/t15980";

redeyes.core.t15980.cljs$lang$ctorPrWriter = ((function (validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"redeyes.core/t15980");
});})(validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;

redeyes.core.__GT_t15980 = ((function (validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992){
return (function __GT_t15980(owner__$1,input_checker15966__$1,G__15968__$1,apps__$1,clear_deactivated_button__$1,output_schema15964__$1,input_schema15965__$1,G__15969__$1,validate__12984__auto____$1,output_checker15967__$1,ufv____$1,meta15981){
return (new redeyes.core.t15980(owner__$1,input_checker15966__$1,G__15968__$1,apps__$1,clear_deactivated_button__$1,output_schema15964__$1,input_schema15965__$1,G__15969__$1,validate__12984__auto____$1,output_checker15967__$1,ufv____$1,meta15981));
});})(validate__12984__auto__,ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;

}

return (new redeyes.core.t15980(owner,input_checker15966_15991,G__15968,apps,clear_deactivated_button,output_schema15964_15989,input_schema15965_15990,G__15969,validate__12984__auto__,output_checker15967_15992,ufv___15988,null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___15996 = (function (){var G__15987 = o__12987__auto__;
return (output_checker15967_15992.cljs$core$IFn$_invoke$arity$1 ? output_checker15967_15992.cljs$core$IFn$_invoke$arity$1(G__15987) : output_checker15967_15992.call(null,G__15987));
})();
if(cljs.core.truth_(temp__4126__auto___15996)){
var error__12986__auto___15997 = temp__4126__auto___15996;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___15997], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___15997,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema15964_15989,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___15988,output_schema15964_15989,input_schema15965_15990,input_checker15966_15991,output_checker15967_15992))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(redeyes.core.clear_deactivated_button),schema.core.make_fn_schema(output_schema15964_15989,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15965_15990], null)));

redeyes.core.__GT_clear_deactivated_button = (function() {
var __GT_clear_deactivated_button = null;
var __GT_clear_deactivated_button__1 = (function (cursor__14772__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.clear_deactivated_button,cursor__14772__auto__);
});
var __GT_clear_deactivated_button__2 = (function (cursor__14772__auto__,m15963){
return om.core.build.cljs$core$IFn$_invoke$arity$3(redeyes.core.clear_deactivated_button,cursor__14772__auto__,m15963);
});
__GT_clear_deactivated_button = function(cursor__14772__auto__,m15963){
switch(arguments.length){
case 1:
return __GT_clear_deactivated_button__1.call(this,cursor__14772__auto__);
case 2:
return __GT_clear_deactivated_button__2.call(this,cursor__14772__auto__,m15963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$1 = __GT_clear_deactivated_button__1;
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$2 = __GT_clear_deactivated_button__2;
return __GT_clear_deactivated_button;
})()
;

var ufv___16025 = schema.utils.use_fn_validation;
var output_schema15999_16026 = schema.core.Any;
var input_schema16000_16027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker16001_16028 = schema.core.checker(input_schema16000_16027);
var output_checker16002_16029 = schema.core.checker(output_schema15999_16026);
/**
* Inputs: [app-state owner]
* 
* Root component for the app
*/
redeyes.core.redeyes_app = ((function (ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function redeyes_app(G__16003,G__16004){
var validate__12984__auto__ = ufv___16025.get_cell();
if(cljs.core.truth_(validate__12984__auto__)){
var args__12985__auto___16030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16003,G__16004], null);
var temp__4126__auto___16031 = (function (){var G__16015 = args__12985__auto___16030;
return (input_checker16001_16028.cljs$core$IFn$_invoke$arity$1 ? input_checker16001_16028.cljs$core$IFn$_invoke$arity$1(G__16015) : input_checker16001_16028.call(null,G__16015));
})();
if(cljs.core.truth_(temp__4126__auto___16031)){
var error__12986__auto___16032 = temp__4126__auto___16031;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___16032], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___16032,cljs.core.constant$keyword$72,args__12985__auto___16030,cljs.core.constant$keyword$73,input_schema16000_16027,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

var o__12987__auto__ = (function (){var app_state = G__16003;
var owner = G__16004;
while(true){
if(typeof redeyes.core.t16016 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t16016 = (function (owner,redeyes_app,output_schema15999,G__16004,input_schema16000,input_checker16001,output_checker16002,app_state,validate__12984__auto__,G__16003,ufv__,meta16017){
this.owner = owner;
this.redeyes_app = redeyes_app;
this.output_schema15999 = output_schema15999;
this.G__16004 = G__16004;
this.input_schema16000 = input_schema16000;
this.input_checker16001 = input_checker16001;
this.output_checker16002 = output_checker16002;
this.app_state = app_state;
this.validate__12984__auto__ = validate__12984__auto__;
this.G__16003 = G__16003;
this.ufv__ = ufv__;
this.meta16017 = meta16017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t16016.prototype.om$core$IDisplayName$ = true;

redeyes.core.t16016.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function (_){
var self__ = this;
var ___$1 = this;
return "redeyes-app";
});})(validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

redeyes.core.t16016.prototype.om$core$IRender$ = true;

redeyes.core.t16016.prototype.om$core$IRender$render$arity$1 = ((function (validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element(React.DOM.div,(function (){var G__16019 = null;
var G__16020 = "Apps to wake up";
return React.DOM.h1(G__16019,G__16020);
})(),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__16021 = null;
return React.DOM.hr(G__16021);
})(),om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.new_sleepy_app_form,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(self__.app_state)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "sleepy-app-list"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.sleepy_app_list,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(self__.app_state))],null)))),(function (){var G__16022 = om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.wake_up_now_button,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(self__.app_state));
var G__16023 = om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.clear_deactivated_button,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(self__.app_state));
return (redeyes.util.button_group.cljs$core$IFn$_invoke$arity$2 ? redeyes.util.button_group.cljs$core$IFn$_invoke$arity$2(G__16022,G__16023) : redeyes.util.button_group.call(null,G__16022,G__16023));
})()],null)));
});})(validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

redeyes.core.t16016.prototype.om$core$IWillMount$ = true;

redeyes.core.t16016.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function (_){
var self__ = this;
var ___$1 = this;
return (redeyes.sync.fetch_data.cljs$core$IFn$_invoke$arity$0 ? redeyes.sync.fetch_data.cljs$core$IFn$_invoke$arity$0() : redeyes.sync.fetch_data.call(null));
});})(validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

redeyes.core.t16016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function (_16018){
var self__ = this;
var _16018__$1 = this;
return self__.meta16017;
});})(validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

redeyes.core.t16016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function (_16018,meta16017__$1){
var self__ = this;
var _16018__$1 = this;
return (new redeyes.core.t16016(self__.owner,self__.redeyes_app,self__.output_schema15999,self__.G__16004,self__.input_schema16000,self__.input_checker16001,self__.output_checker16002,self__.app_state,self__.validate__12984__auto__,self__.G__16003,self__.ufv__,meta16017__$1));
});})(validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

redeyes.core.t16016.cljs$lang$type = true;

redeyes.core.t16016.cljs$lang$ctorStr = "redeyes.core/t16016";

redeyes.core.t16016.cljs$lang$ctorPrWriter = ((function (validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"redeyes.core/t16016");
});})(validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

redeyes.core.__GT_t16016 = ((function (validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029){
return (function __GT_t16016(owner__$1,redeyes_app__$1,output_schema15999__$1,G__16004__$1,input_schema16000__$1,input_checker16001__$1,output_checker16002__$1,app_state__$1,validate__12984__auto____$1,G__16003__$1,ufv____$1,meta16017){
return (new redeyes.core.t16016(owner__$1,redeyes_app__$1,output_schema15999__$1,G__16004__$1,input_schema16000__$1,input_checker16001__$1,output_checker16002__$1,app_state__$1,validate__12984__auto____$1,G__16003__$1,ufv____$1,meta16017));
});})(validate__12984__auto__,ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

}

return (new redeyes.core.t16016(owner,redeyes_app,output_schema15999_16026,G__16004,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029,app_state,validate__12984__auto__,G__16003,ufv___16025,null));
break;
}
})();
if(cljs.core.truth_(validate__12984__auto__)){
var temp__4126__auto___16033 = (function (){var G__16024 = o__12987__auto__;
return (output_checker16002_16029.cljs$core$IFn$_invoke$arity$1 ? output_checker16002_16029.cljs$core$IFn$_invoke$arity$1(G__16024) : output_checker16002_16029.call(null,G__16024));
})();
if(cljs.core.truth_(temp__4126__auto___16033)){
var error__12986__auto___16034 = temp__4126__auto___16033;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12986__auto___16034], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error__12986__auto___16034,cljs.core.constant$keyword$72,o__12987__auto__,cljs.core.constant$keyword$73,output_schema15999_16026,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}
} else {
}

return o__12987__auto__;
});})(ufv___16025,output_schema15999_16026,input_schema16000_16027,input_checker16001_16028,output_checker16002_16029))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(redeyes.core.redeyes_app),schema.core.make_fn_schema(output_schema15999_16026,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16000_16027], null)));

redeyes.core.__GT_redeyes_app = (function() {
var __GT_redeyes_app = null;
var __GT_redeyes_app__1 = (function (cursor__14772__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(redeyes.core.redeyes_app,cursor__14772__auto__);
});
var __GT_redeyes_app__2 = (function (cursor__14772__auto__,m15998){
return om.core.build.cljs$core$IFn$_invoke$arity$3(redeyes.core.redeyes_app,cursor__14772__auto__,m15998);
});
__GT_redeyes_app = function(cursor__14772__auto__,m15998){
switch(arguments.length){
case 1:
return __GT_redeyes_app__1.call(this,cursor__14772__auto__);
case 2:
return __GT_redeyes_app__2.call(this,cursor__14772__auto__,m15998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_redeyes_app.cljs$core$IFn$_invoke$arity$1 = __GT_redeyes_app__1;
__GT_redeyes_app.cljs$core$IFn$_invoke$arity$2 = __GT_redeyes_app__2;
return __GT_redeyes_app;
})()
;
redeyes.core.run = (function run(){

return om.core.root(redeyes.core.redeyes_app,redeyes.store.app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,(function (data,root_cursor){
var G__16037_16039 = data;
(redeyes.util.log.cljs$core$IFn$_invoke$arity$1 ? redeyes.util.log.cljs$core$IFn$_invoke$arity$1(G__16037_16039) : redeyes.util.log.call(null,G__16037_16039));

var G__16038 = data;
return (redeyes.util.log_clj.cljs$core$IFn$_invoke$arity$1 ? redeyes.util.log_clj.cljs$core$IFn$_invoke$arity$1(G__16038) : redeyes.util.log_clj.call(null,G__16038));
}),cljs.core.constant$keyword$64,document.getElementById("app")], null));
});
goog.exportSymbol('redeyes.core.run', redeyes.core.run);
