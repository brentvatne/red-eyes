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

var ufv___25287 = schema.utils.use_fn_validation;
var output_schema25275_25288 = schema.core.Any;
var input_schema25276_25289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker25277_25290 = schema.core.checker.call(null,input_schema25276_25289);
var output_checker25278_25291 = schema.core.checker.call(null,output_schema25275_25288);
/**
* Inputs: [apps owner]
* 
* A form where the user can enter a new url to watch
*/
redeyes.core.new_sleepy_app_form = ((function (ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function new_sleepy_app_form(G__25279,G__25280){
var validate__8048__auto__ = ufv___25287.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___25292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25279,G__25280], null);
var temp__4126__auto___25293 = input_checker25277_25290.call(null,args__8049__auto___25292);
if(cljs.core.truth_(temp__4126__auto___25293)){
var error__8050__auto___25294 = temp__4126__auto___25293;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8050__auto___25294)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25294,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___25292,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25276_25289,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__25279;
var owner = G__25280;
while(true){
if(typeof redeyes.core.t25284 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t25284 = (function (input_schema25276,new_sleepy_app_form,owner,validate__8048__auto__,apps,input_checker25277,output_checker25278,G__25280,output_schema25275,G__25279,ufv__,meta25285){
this.input_schema25276 = input_schema25276;
this.new_sleepy_app_form = new_sleepy_app_form;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.input_checker25277 = input_checker25277;
this.output_checker25278 = output_checker25278;
this.G__25280 = G__25280;
this.output_schema25275 = output_schema25275;
this.G__25279 = G__25279;
this.ufv__ = ufv__;
this.meta25285 = meta25285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t25284.prototype.om$core$IDisplayName$ = true;

redeyes.core.t25284.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (_){
var self__ = this;
var ___$1 = this;
return "new-sleepy-app-form";
});})(validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

redeyes.core.t25284.prototype.om$core$IRenderState$ = true;

redeyes.core.t25284.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state);
var apps__$1 = new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(state);
var update_url_state_BANG_ = ((function (url,apps__$1,___$1,validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (new_val){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"url","url",276297046),new_val);
});})(url,apps__$1,___$1,validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;
var handle_change_input = ((function (url,apps__$1,update_url_state_BANG_,___$1,validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (e){
return update_url_state_BANG_.call(null,e.target.value);
});})(url,apps__$1,update_url_state_BANG_,___$1,validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;
var handle_submit_url = ((function (url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (e){
e.preventDefault();

redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"apps","apps",844744865),apps__$1], null));

return update_url_state_BANG_.call(null,"");
});})(url,apps__$1,update_url_state_BANG_,handle_change_input,___$1,validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;
return cljs.core.apply.call(null,React.DOM.form,{"onSubmit": om_tools.dom.format_opts.call(null,handle_submit_url), "className": "new-sleepy-app-form form-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[redeyes.util.input_with_addons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"http://"], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add URL",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_submit_url], null)], null),om.dom.input.call(null,{"placeholder": "URL here please!", "onChange": om_tools.dom.format_opts.call(null,handle_change_input), "value": om_tools.dom.format_opts.call(null,url), "id": "sleepy-app-url", "className": "form-control", "ref": "new-url", "type": "text"}))],null))));
});})(validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

redeyes.core.t25284.prototype.om$core$IInitState$ = true;

redeyes.core.t25284.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null);
});})(validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

redeyes.core.t25284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (_25286){
var self__ = this;
var _25286__$1 = this;
return self__.meta25285;
});})(validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

redeyes.core.t25284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (_25286,meta25285__$1){
var self__ = this;
var _25286__$1 = this;
return (new redeyes.core.t25284(self__.input_schema25276,self__.new_sleepy_app_form,self__.owner,self__.validate__8048__auto__,self__.apps,self__.input_checker25277,self__.output_checker25278,self__.G__25280,self__.output_schema25275,self__.G__25279,self__.ufv__,meta25285__$1));
});})(validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

redeyes.core.t25284.cljs$lang$type = true;

redeyes.core.t25284.cljs$lang$ctorStr = "redeyes.core/t25284";

redeyes.core.t25284.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t25284");
});})(validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

redeyes.core.__GT_t25284 = ((function (validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291){
return (function __GT_t25284(input_schema25276__$1,new_sleepy_app_form__$1,owner__$1,validate__8048__auto____$1,apps__$1,input_checker25277__$1,output_checker25278__$1,G__25280__$1,output_schema25275__$1,G__25279__$1,ufv____$1,meta25285){
return (new redeyes.core.t25284(input_schema25276__$1,new_sleepy_app_form__$1,owner__$1,validate__8048__auto____$1,apps__$1,input_checker25277__$1,output_checker25278__$1,G__25280__$1,output_schema25275__$1,G__25279__$1,ufv____$1,meta25285));
});})(validate__8048__auto__,ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

}

return (new redeyes.core.t25284(input_schema25276_25289,new_sleepy_app_form,owner,validate__8048__auto__,apps,input_checker25277_25290,output_checker25278_25291,G__25280,output_schema25275_25288,G__25279,ufv___25287,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___25295 = output_checker25278_25291.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___25295)){
var error__8050__auto___25296 = temp__4126__auto___25295;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8050__auto___25296)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25296,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25275_25288,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___25287,output_schema25275_25288,input_schema25276_25289,input_checker25277_25290,output_checker25278_25291))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.new_sleepy_app_form),schema.core.make_fn_schema.call(null,output_schema25275_25288,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25276_25289], null)));

redeyes.core.__GT_new_sleepy_app_form = (function() {
var __GT_new_sleepy_app_form = null;
var __GT_new_sleepy_app_form__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9836__auto__);
});
var __GT_new_sleepy_app_form__2 = (function (cursor__9836__auto__,m25274){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9836__auto__,m25274);
});
__GT_new_sleepy_app_form = function(cursor__9836__auto__,m25274){
switch(arguments.length){
case 1:
return __GT_new_sleepy_app_form__1.call(this,cursor__9836__auto__);
case 2:
return __GT_new_sleepy_app_form__2.call(this,cursor__9836__auto__,m25274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$1 = __GT_new_sleepy_app_form__1;
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$2 = __GT_new_sleepy_app_form__2;
return __GT_new_sleepy_app_form;
})()
;

var ufv___25310 = schema.utils.use_fn_validation;
var output_schema25298_25311 = schema.core.Any;
var input_schema25299_25312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker25300_25313 = schema.core.checker.call(null,input_schema25299_25312);
var output_checker25301_25314 = schema.core.checker.call(null,output_schema25298_25311);
/**
* Inputs: [app owner]
* 
* Checkbox that indicates whether or not an app is enabled to be woken up
*/
redeyes.core.sleepy_app_checkbox = ((function (ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function sleepy_app_checkbox(G__25302,G__25303){
var validate__8048__auto__ = ufv___25310.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___25315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25302,G__25303], null);
var temp__4126__auto___25316 = input_checker25300_25313.call(null,args__8049__auto___25315);
if(cljs.core.truth_(temp__4126__auto___25316)){
var error__8050__auto___25317 = temp__4126__auto___25316;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8050__auto___25317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25317,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___25315,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25299_25312,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app = G__25302;
var owner = G__25303;
while(true){
if(typeof redeyes.core.t25307 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t25307 = (function (G__25302,output_schema25298,output_checker25301,owner,validate__8048__auto__,input_checker25300,sleepy_app_checkbox,G__25303,app,ufv__,input_schema25299,meta25308){
this.G__25302 = G__25302;
this.output_schema25298 = output_schema25298;
this.output_checker25301 = output_checker25301;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.input_checker25300 = input_checker25300;
this.sleepy_app_checkbox = sleepy_app_checkbox;
this.G__25303 = G__25303;
this.app = app;
this.ufv__ = ufv__;
this.input_schema25299 = input_schema25299;
this.meta25308 = meta25308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t25307.prototype.om$core$IDisplayName$ = true;

redeyes.core.t25307.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-checkbox";
});})(validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;

redeyes.core.t25307.prototype.om$core$IRender$ = true;

redeyes.core.t25307.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_change_checked = ((function (___$1,validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function (e){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"active","active",1895962068),e.target.checked], null));
});})(___$1,validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;
return om.dom.input.call(null,{"checked": om_tools.dom.format_opts.call(null,redeyes.util.active_QMARK_.call(null,self__.app)), "onChange": om_tools.dom.format_opts.call(null,handle_change_checked), "type": "checkbox"});
});})(validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;

redeyes.core.t25307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function (_25309){
var self__ = this;
var _25309__$1 = this;
return self__.meta25308;
});})(validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;

redeyes.core.t25307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function (_25309,meta25308__$1){
var self__ = this;
var _25309__$1 = this;
return (new redeyes.core.t25307(self__.G__25302,self__.output_schema25298,self__.output_checker25301,self__.owner,self__.validate__8048__auto__,self__.input_checker25300,self__.sleepy_app_checkbox,self__.G__25303,self__.app,self__.ufv__,self__.input_schema25299,meta25308__$1));
});})(validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;

redeyes.core.t25307.cljs$lang$type = true;

redeyes.core.t25307.cljs$lang$ctorStr = "redeyes.core/t25307";

redeyes.core.t25307.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t25307");
});})(validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;

redeyes.core.__GT_t25307 = ((function (validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314){
return (function __GT_t25307(G__25302__$1,output_schema25298__$1,output_checker25301__$1,owner__$1,validate__8048__auto____$1,input_checker25300__$1,sleepy_app_checkbox__$1,G__25303__$1,app__$1,ufv____$1,input_schema25299__$1,meta25308){
return (new redeyes.core.t25307(G__25302__$1,output_schema25298__$1,output_checker25301__$1,owner__$1,validate__8048__auto____$1,input_checker25300__$1,sleepy_app_checkbox__$1,G__25303__$1,app__$1,ufv____$1,input_schema25299__$1,meta25308));
});})(validate__8048__auto__,ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;

}

return (new redeyes.core.t25307(G__25302,output_schema25298_25311,output_checker25301_25314,owner,validate__8048__auto__,input_checker25300_25313,sleepy_app_checkbox,G__25303,app,ufv___25310,input_schema25299_25312,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___25318 = output_checker25301_25314.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___25318)){
var error__8050__auto___25319 = temp__4126__auto___25318;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8050__auto___25319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25319,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25298_25311,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___25310,output_schema25298_25311,input_schema25299_25312,input_checker25300_25313,output_checker25301_25314))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_checkbox),schema.core.make_fn_schema.call(null,output_schema25298_25311,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25299_25312], null)));

redeyes.core.__GT_sleepy_app_checkbox = (function() {
var __GT_sleepy_app_checkbox = null;
var __GT_sleepy_app_checkbox__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9836__auto__);
});
var __GT_sleepy_app_checkbox__2 = (function (cursor__9836__auto__,m25297){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9836__auto__,m25297);
});
__GT_sleepy_app_checkbox = function(cursor__9836__auto__,m25297){
switch(arguments.length){
case 1:
return __GT_sleepy_app_checkbox__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app_checkbox__2.call(this,cursor__9836__auto__,m25297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_checkbox__1;
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_checkbox__2;
return __GT_sleepy_app_checkbox;
})()
;

var ufv___25333 = schema.utils.use_fn_validation;
var output_schema25321_25334 = schema.core.Any;
var input_schema25322_25335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker25323_25336 = schema.core.checker.call(null,input_schema25322_25335);
var output_checker25324_25337 = schema.core.checker.call(null,output_schema25321_25334);
/**
* Inputs: [app owner]
* 
* A row in the sleepy-app-list table
*/
redeyes.core.sleepy_app = ((function (ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337){
return (function sleepy_app(G__25325,G__25326){
var validate__8048__auto__ = ufv___25333.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___25338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25325,G__25326], null);
var temp__4126__auto___25339 = input_checker25323_25336.call(null,args__8049__auto___25338);
if(cljs.core.truth_(temp__4126__auto___25339)){
var error__8050__auto___25340 = temp__4126__auto___25339;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8050__auto___25340)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25340,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___25338,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25322_25335,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app = G__25325;
var owner = G__25326;
while(true){
if(typeof redeyes.core.t25330 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t25330 = (function (G__25326,owner,validate__8048__auto__,output_checker25324,output_schema25321,input_schema25322,sleepy_app,input_checker25323,G__25325,app,ufv__,meta25331){
this.G__25326 = G__25326;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.output_checker25324 = output_checker25324;
this.output_schema25321 = output_schema25321;
this.input_schema25322 = input_schema25322;
this.sleepy_app = sleepy_app;
this.input_checker25323 = input_checker25323;
this.G__25325 = G__25325;
this.app = app;
this.ufv__ = ufv__;
this.meta25331 = meta25331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t25330.prototype.om$core$IDisplayName$ = true;

redeyes.core.t25330.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app";
});})(validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337))
;

redeyes.core.t25330.prototype.om$core$IRender$ = true;

redeyes.core.t25330.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337){
return (function (_){
var self__ = this;
var ___$1 = this;
var url = cljs.core.get.call(null,self__.app,"url");
var last_wake_up = cljs.core.get.call(null,self__.app,"lastWokenUpAt");
var last_wake_up_text = (((last_wake_up == null))?"Never":last_wake_up);
return cljs.core.apply.call(null,React.DOM.tr,{"className": om_tools.dom.format_opts.call(null,redeyes.util.css_classes.call(null,"sleepy-app",((redeyes.util.active_QMARK_.call(null,self__.app))?"active":null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,om.core.build.call(null,redeyes.core.sleepy_app_checkbox,self__.app),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,url,cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,last_wake_up_text,cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337))
;

redeyes.core.t25330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337){
return (function (_25332){
var self__ = this;
var _25332__$1 = this;
return self__.meta25331;
});})(validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337))
;

redeyes.core.t25330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337){
return (function (_25332,meta25331__$1){
var self__ = this;
var _25332__$1 = this;
return (new redeyes.core.t25330(self__.G__25326,self__.owner,self__.validate__8048__auto__,self__.output_checker25324,self__.output_schema25321,self__.input_schema25322,self__.sleepy_app,self__.input_checker25323,self__.G__25325,self__.app,self__.ufv__,meta25331__$1));
});})(validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337))
;

redeyes.core.t25330.cljs$lang$type = true;

redeyes.core.t25330.cljs$lang$ctorStr = "redeyes.core/t25330";

redeyes.core.t25330.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t25330");
});})(validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337))
;

redeyes.core.__GT_t25330 = ((function (validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337){
return (function __GT_t25330(G__25326__$1,owner__$1,validate__8048__auto____$1,output_checker25324__$1,output_schema25321__$1,input_schema25322__$1,sleepy_app__$1,input_checker25323__$1,G__25325__$1,app__$1,ufv____$1,meta25331){
return (new redeyes.core.t25330(G__25326__$1,owner__$1,validate__8048__auto____$1,output_checker25324__$1,output_schema25321__$1,input_schema25322__$1,sleepy_app__$1,input_checker25323__$1,G__25325__$1,app__$1,ufv____$1,meta25331));
});})(validate__8048__auto__,ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337))
;

}

return (new redeyes.core.t25330(G__25326,owner,validate__8048__auto__,output_checker25324_25337,output_schema25321_25334,input_schema25322_25335,sleepy_app,input_checker25323_25336,G__25325,app,ufv___25333,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___25341 = output_checker25324_25337.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___25341)){
var error__8050__auto___25342 = temp__4126__auto___25341;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8050__auto___25342)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25342,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25321_25334,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___25333,output_schema25321_25334,input_schema25322_25335,input_checker25323_25336,output_checker25324_25337))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app),schema.core.make_fn_schema.call(null,output_schema25321_25334,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25322_25335], null)));

redeyes.core.__GT_sleepy_app = (function() {
var __GT_sleepy_app = null;
var __GT_sleepy_app__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9836__auto__);
});
var __GT_sleepy_app__2 = (function (cursor__9836__auto__,m25320){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9836__auto__,m25320);
});
__GT_sleepy_app = function(cursor__9836__auto__,m25320){
switch(arguments.length){
case 1:
return __GT_sleepy_app__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app__2.call(this,cursor__9836__auto__,m25320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app__1;
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app__2;
return __GT_sleepy_app;
})()
;

var ufv___25356 = schema.utils.use_fn_validation;
var output_schema25344_25357 = schema.core.Any;
var input_schema25345_25358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker25346_25359 = schema.core.checker.call(null,input_schema25345_25358);
var output_checker25347_25360 = schema.core.checker.call(null,output_schema25344_25357);
/**
* Inputs: [apps owner]
* 
* Renders out each of the sleepy-apps
*/
redeyes.core.sleepy_app_list = ((function (ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360){
return (function sleepy_app_list(G__25348,G__25349){
var validate__8048__auto__ = ufv___25356.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___25361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25348,G__25349], null);
var temp__4126__auto___25362 = input_checker25346_25359.call(null,args__8049__auto___25361);
if(cljs.core.truth_(temp__4126__auto___25362)){
var error__8050__auto___25363 = temp__4126__auto___25362;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8050__auto___25363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25363,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___25361,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25345_25358,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__25348;
var owner = G__25349;
while(true){
if(typeof redeyes.core.t25353 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t25353 = (function (owner,output_checker25347,validate__8048__auto__,input_checker25346,apps,G__25348,input_schema25345,sleepy_app_list,G__25349,ufv__,output_schema25344,meta25354){
this.owner = owner;
this.output_checker25347 = output_checker25347;
this.validate__8048__auto__ = validate__8048__auto__;
this.input_checker25346 = input_checker25346;
this.apps = apps;
this.G__25348 = G__25348;
this.input_schema25345 = input_schema25345;
this.sleepy_app_list = sleepy_app_list;
this.G__25349 = G__25349;
this.ufv__ = ufv__;
this.output_schema25344 = output_schema25344;
this.meta25354 = meta25354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t25353.prototype.om$core$IDisplayName$ = true;

redeyes.core.t25353.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-list";
});})(validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360))
;

redeyes.core.t25353.prototype.om$core$IRender$ = true;

redeyes.core.t25353.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.empty_QMARK_.call(null,self__.apps)){
return React.DOM.div(null,"No apps");
} else {
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.table,{"className": "table"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.thead,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.th({"className": "sleepy-app-active-col"},""),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(null),React.DOM.th(null)],null))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,om_tools.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,om.core.build_all.call(null,redeyes.core.sleepy_app,self__.apps))],null)))),cljs.core.PersistentVector.EMPTY);
}
});})(validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360))
;

redeyes.core.t25353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360){
return (function (_25355){
var self__ = this;
var _25355__$1 = this;
return self__.meta25354;
});})(validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360))
;

redeyes.core.t25353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360){
return (function (_25355,meta25354__$1){
var self__ = this;
var _25355__$1 = this;
return (new redeyes.core.t25353(self__.owner,self__.output_checker25347,self__.validate__8048__auto__,self__.input_checker25346,self__.apps,self__.G__25348,self__.input_schema25345,self__.sleepy_app_list,self__.G__25349,self__.ufv__,self__.output_schema25344,meta25354__$1));
});})(validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360))
;

redeyes.core.t25353.cljs$lang$type = true;

redeyes.core.t25353.cljs$lang$ctorStr = "redeyes.core/t25353";

redeyes.core.t25353.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t25353");
});})(validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360))
;

redeyes.core.__GT_t25353 = ((function (validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360){
return (function __GT_t25353(owner__$1,output_checker25347__$1,validate__8048__auto____$1,input_checker25346__$1,apps__$1,G__25348__$1,input_schema25345__$1,sleepy_app_list__$1,G__25349__$1,ufv____$1,output_schema25344__$1,meta25354){
return (new redeyes.core.t25353(owner__$1,output_checker25347__$1,validate__8048__auto____$1,input_checker25346__$1,apps__$1,G__25348__$1,input_schema25345__$1,sleepy_app_list__$1,G__25349__$1,ufv____$1,output_schema25344__$1,meta25354));
});})(validate__8048__auto__,ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360))
;

}

return (new redeyes.core.t25353(owner,output_checker25347_25360,validate__8048__auto__,input_checker25346_25359,apps,G__25348,input_schema25345_25358,sleepy_app_list,G__25349,ufv___25356,output_schema25344_25357,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___25364 = output_checker25347_25360.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___25364)){
var error__8050__auto___25365 = temp__4126__auto___25364;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8050__auto___25365)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25365,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25344_25357,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___25356,output_schema25344_25357,input_schema25345_25358,input_checker25346_25359,output_checker25347_25360))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_list),schema.core.make_fn_schema.call(null,output_schema25344_25357,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25345_25358], null)));

redeyes.core.__GT_sleepy_app_list = (function() {
var __GT_sleepy_app_list = null;
var __GT_sleepy_app_list__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9836__auto__);
});
var __GT_sleepy_app_list__2 = (function (cursor__9836__auto__,m25343){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9836__auto__,m25343);
});
__GT_sleepy_app_list = function(cursor__9836__auto__,m25343){
switch(arguments.length){
case 1:
return __GT_sleepy_app_list__1.call(this,cursor__9836__auto__);
case 2:
return __GT_sleepy_app_list__2.call(this,cursor__9836__auto__,m25343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_list__1;
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_list__2;
return __GT_sleepy_app_list;
})()
;

var ufv___25379 = schema.utils.use_fn_validation;
var output_schema25367_25380 = schema.core.Any;
var input_schema25368_25381 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker25369_25382 = schema.core.checker.call(null,input_schema25368_25381);
var output_checker25370_25383 = schema.core.checker.call(null,output_schema25367_25380);
/**
* Inputs: [apps owner]
*/
redeyes.core.wake_up_now_button = ((function (ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function wake_up_now_button(G__25371,G__25372){
var validate__8048__auto__ = ufv___25379.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___25384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25371,G__25372], null);
var temp__4126__auto___25385 = input_checker25369_25382.call(null,args__8049__auto___25384);
if(cljs.core.truth_(temp__4126__auto___25385)){
var error__8050__auto___25386 = temp__4126__auto___25385;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8050__auto___25386)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25386,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___25384,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25368_25381,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__25371;
var owner = G__25372;
while(true){
if(typeof redeyes.core.t25376 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t25376 = (function (owner,output_schema25367,G__25371,validate__8048__auto__,apps,G__25372,input_schema25368,input_checker25369,output_checker25370,wake_up_now_button,ufv__,meta25377){
this.owner = owner;
this.output_schema25367 = output_schema25367;
this.G__25371 = G__25371;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.G__25372 = G__25372;
this.input_schema25368 = input_schema25368;
this.input_checker25369 = input_checker25369;
this.output_checker25370 = output_checker25370;
this.wake_up_now_button = wake_up_now_button;
this.ufv__ = ufv__;
this.meta25377 = meta25377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t25376.prototype.om$core$IDisplayName$ = true;

redeyes.core.t25376.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function (_){
var self__ = this;
var ___$1 = this;
return "wake-up-now-button";
});})(validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;

redeyes.core.t25376.prototype.om$core$IRender$ = true;

redeyes.core.t25376.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function (){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null));
});})(___$1,validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;
return redeyes.util.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Wake up all apps now!");
});})(validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;

redeyes.core.t25376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function (_25378){
var self__ = this;
var _25378__$1 = this;
return self__.meta25377;
});})(validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;

redeyes.core.t25376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function (_25378,meta25377__$1){
var self__ = this;
var _25378__$1 = this;
return (new redeyes.core.t25376(self__.owner,self__.output_schema25367,self__.G__25371,self__.validate__8048__auto__,self__.apps,self__.G__25372,self__.input_schema25368,self__.input_checker25369,self__.output_checker25370,self__.wake_up_now_button,self__.ufv__,meta25377__$1));
});})(validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;

redeyes.core.t25376.cljs$lang$type = true;

redeyes.core.t25376.cljs$lang$ctorStr = "redeyes.core/t25376";

redeyes.core.t25376.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t25376");
});})(validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;

redeyes.core.__GT_t25376 = ((function (validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383){
return (function __GT_t25376(owner__$1,output_schema25367__$1,G__25371__$1,validate__8048__auto____$1,apps__$1,G__25372__$1,input_schema25368__$1,input_checker25369__$1,output_checker25370__$1,wake_up_now_button__$1,ufv____$1,meta25377){
return (new redeyes.core.t25376(owner__$1,output_schema25367__$1,G__25371__$1,validate__8048__auto____$1,apps__$1,G__25372__$1,input_schema25368__$1,input_checker25369__$1,output_checker25370__$1,wake_up_now_button__$1,ufv____$1,meta25377));
});})(validate__8048__auto__,ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;

}

return (new redeyes.core.t25376(owner,output_schema25367_25380,G__25371,validate__8048__auto__,apps,G__25372,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383,wake_up_now_button,ufv___25379,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___25387 = output_checker25370_25383.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___25387)){
var error__8050__auto___25388 = temp__4126__auto___25387;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8050__auto___25388)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25388,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25367_25380,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___25379,output_schema25367_25380,input_schema25368_25381,input_checker25369_25382,output_checker25370_25383))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.wake_up_now_button),schema.core.make_fn_schema.call(null,output_schema25367_25380,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25368_25381], null)));

redeyes.core.__GT_wake_up_now_button = (function() {
var __GT_wake_up_now_button = null;
var __GT_wake_up_now_button__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9836__auto__);
});
var __GT_wake_up_now_button__2 = (function (cursor__9836__auto__,m25366){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9836__auto__,m25366);
});
__GT_wake_up_now_button = function(cursor__9836__auto__,m25366){
switch(arguments.length){
case 1:
return __GT_wake_up_now_button__1.call(this,cursor__9836__auto__);
case 2:
return __GT_wake_up_now_button__2.call(this,cursor__9836__auto__,m25366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$1 = __GT_wake_up_now_button__1;
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$2 = __GT_wake_up_now_button__2;
return __GT_wake_up_now_button;
})()
;

var ufv___25402 = schema.utils.use_fn_validation;
var output_schema25390_25403 = schema.core.Any;
var input_schema25391_25404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker25392_25405 = schema.core.checker.call(null,input_schema25391_25404);
var output_checker25393_25406 = schema.core.checker.call(null,output_schema25390_25403);
/**
* Inputs: [apps owner]
*/
redeyes.core.clear_deactivated_button = ((function (ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function clear_deactivated_button(G__25394,G__25395){
var validate__8048__auto__ = ufv___25402.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___25407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25394,G__25395], null);
var temp__4126__auto___25408 = input_checker25392_25405.call(null,args__8049__auto___25407);
if(cljs.core.truth_(temp__4126__auto___25408)){
var error__8050__auto___25409 = temp__4126__auto___25408;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8050__auto___25409)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25409,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___25407,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25391_25404,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var apps = G__25394;
var owner = G__25395;
while(true){
if(typeof redeyes.core.t25399 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t25399 = (function (owner,output_checker25393,validate__8048__auto__,apps,input_schema25391,clear_deactivated_button,G__25395,G__25394,output_schema25390,ufv__,input_checker25392,meta25400){
this.owner = owner;
this.output_checker25393 = output_checker25393;
this.validate__8048__auto__ = validate__8048__auto__;
this.apps = apps;
this.input_schema25391 = input_schema25391;
this.clear_deactivated_button = clear_deactivated_button;
this.G__25395 = G__25395;
this.G__25394 = G__25394;
this.output_schema25390 = output_schema25390;
this.ufv__ = ufv__;
this.input_checker25392 = input_checker25392;
this.meta25400 = meta25400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t25399.prototype.om$core$IDisplayName$ = true;

redeyes.core.t25399.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function (_){
var self__ = this;
var ___$1 = this;
return "clear-deactivated-button";
});})(validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;

redeyes.core.t25399.prototype.om$core$IRender$ = true;

redeyes.core.t25399.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function (){
return redeyes.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),self__.apps], null));
});})(___$1,validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;
return redeyes.util.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Clear deactivated apps");
});})(validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;

redeyes.core.t25399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function (_25401){
var self__ = this;
var _25401__$1 = this;
return self__.meta25400;
});})(validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;

redeyes.core.t25399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function (_25401,meta25400__$1){
var self__ = this;
var _25401__$1 = this;
return (new redeyes.core.t25399(self__.owner,self__.output_checker25393,self__.validate__8048__auto__,self__.apps,self__.input_schema25391,self__.clear_deactivated_button,self__.G__25395,self__.G__25394,self__.output_schema25390,self__.ufv__,self__.input_checker25392,meta25400__$1));
});})(validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;

redeyes.core.t25399.cljs$lang$type = true;

redeyes.core.t25399.cljs$lang$ctorStr = "redeyes.core/t25399";

redeyes.core.t25399.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t25399");
});})(validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;

redeyes.core.__GT_t25399 = ((function (validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406){
return (function __GT_t25399(owner__$1,output_checker25393__$1,validate__8048__auto____$1,apps__$1,input_schema25391__$1,clear_deactivated_button__$1,G__25395__$1,G__25394__$1,output_schema25390__$1,ufv____$1,input_checker25392__$1,meta25400){
return (new redeyes.core.t25399(owner__$1,output_checker25393__$1,validate__8048__auto____$1,apps__$1,input_schema25391__$1,clear_deactivated_button__$1,G__25395__$1,G__25394__$1,output_schema25390__$1,ufv____$1,input_checker25392__$1,meta25400));
});})(validate__8048__auto__,ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;

}

return (new redeyes.core.t25399(owner,output_checker25393_25406,validate__8048__auto__,apps,input_schema25391_25404,clear_deactivated_button,G__25395,G__25394,output_schema25390_25403,ufv___25402,input_checker25392_25405,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___25410 = output_checker25393_25406.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___25410)){
var error__8050__auto___25411 = temp__4126__auto___25410;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8050__auto___25411)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25411,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25390_25403,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___25402,output_schema25390_25403,input_schema25391_25404,input_checker25392_25405,output_checker25393_25406))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.clear_deactivated_button),schema.core.make_fn_schema.call(null,output_schema25390_25403,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25391_25404], null)));

redeyes.core.__GT_clear_deactivated_button = (function() {
var __GT_clear_deactivated_button = null;
var __GT_clear_deactivated_button__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9836__auto__);
});
var __GT_clear_deactivated_button__2 = (function (cursor__9836__auto__,m25389){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9836__auto__,m25389);
});
__GT_clear_deactivated_button = function(cursor__9836__auto__,m25389){
switch(arguments.length){
case 1:
return __GT_clear_deactivated_button__1.call(this,cursor__9836__auto__);
case 2:
return __GT_clear_deactivated_button__2.call(this,cursor__9836__auto__,m25389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$1 = __GT_clear_deactivated_button__1;
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$2 = __GT_clear_deactivated_button__2;
return __GT_clear_deactivated_button;
})()
;

var ufv___25425 = schema.utils.use_fn_validation;
var output_schema25413_25426 = schema.core.Any;
var input_schema25414_25427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker25415_25428 = schema.core.checker.call(null,input_schema25414_25427);
var output_checker25416_25429 = schema.core.checker.call(null,output_schema25413_25426);
/**
* Inputs: [app-state owner]
* 
* Root component for the app
*/
redeyes.core.redeyes_app = ((function (ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function redeyes_app(G__25417,G__25418){
var validate__8048__auto__ = ufv___25425.get_cell();
if(cljs.core.truth_(validate__8048__auto__)){
var args__8049__auto___25430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25417,G__25418], null);
var temp__4126__auto___25431 = input_checker25415_25428.call(null,args__8049__auto___25430);
if(cljs.core.truth_(temp__4126__auto___25431)){
var error__8050__auto___25432 = temp__4126__auto___25431;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8050__auto___25432)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25432,new cljs.core.Keyword(null,"value","value",305978217),args__8049__auto___25430,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25414_25427,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8051__auto__ = (function (){var app_state = G__25417;
var owner = G__25418;
while(true){
if(typeof redeyes.core.t25422 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t25422 = (function (output_checker25416,owner,validate__8048__auto__,redeyes_app,input_schema25414,G__25417,output_schema25413,app_state,G__25418,input_checker25415,ufv__,meta25423){
this.output_checker25416 = output_checker25416;
this.owner = owner;
this.validate__8048__auto__ = validate__8048__auto__;
this.redeyes_app = redeyes_app;
this.input_schema25414 = input_schema25414;
this.G__25417 = G__25417;
this.output_schema25413 = output_schema25413;
this.app_state = app_state;
this.G__25418 = G__25418;
this.input_checker25415 = input_checker25415;
this.ufv__ = ufv__;
this.meta25423 = meta25423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t25422.prototype.om$core$IDisplayName$ = true;

redeyes.core.t25422.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function (_){
var self__ = this;
var ___$1 = this;
return "redeyes-app";
});})(validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

redeyes.core.t25422.prototype.om$core$IRender$ = true;

redeyes.core.t25422.prototype.om$core$IRender$render$arity$1 = ((function (validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h1(null,"Apps to wake up"),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.hr(null),om.core.build.call(null,redeyes.core.new_sleepy_app_form,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)),cljs.core.apply.call(null,React.DOM.div,{"className": "sleepy-app-list"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,redeyes.core.sleepy_app_list,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state))],null)))),redeyes.util.button_group.call(null,om.core.build.call(null,redeyes.core.wake_up_now_button,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)),om.core.build.call(null,redeyes.core.clear_deactivated_button,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state)))],null)));
});})(validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

redeyes.core.t25422.prototype.om$core$IWillMount$ = true;

redeyes.core.t25422.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function (_){
var self__ = this;
var ___$1 = this;
return redeyes.sync.fetch_data.call(null);
});})(validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

redeyes.core.t25422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function (_25424){
var self__ = this;
var _25424__$1 = this;
return self__.meta25423;
});})(validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

redeyes.core.t25422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function (_25424,meta25423__$1){
var self__ = this;
var _25424__$1 = this;
return (new redeyes.core.t25422(self__.output_checker25416,self__.owner,self__.validate__8048__auto__,self__.redeyes_app,self__.input_schema25414,self__.G__25417,self__.output_schema25413,self__.app_state,self__.G__25418,self__.input_checker25415,self__.ufv__,meta25423__$1));
});})(validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

redeyes.core.t25422.cljs$lang$type = true;

redeyes.core.t25422.cljs$lang$ctorStr = "redeyes.core/t25422";

redeyes.core.t25422.cljs$lang$ctorPrWriter = ((function (validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"redeyes.core/t25422");
});})(validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

redeyes.core.__GT_t25422 = ((function (validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429){
return (function __GT_t25422(output_checker25416__$1,owner__$1,validate__8048__auto____$1,redeyes_app__$1,input_schema25414__$1,G__25417__$1,output_schema25413__$1,app_state__$1,G__25418__$1,input_checker25415__$1,ufv____$1,meta25423){
return (new redeyes.core.t25422(output_checker25416__$1,owner__$1,validate__8048__auto____$1,redeyes_app__$1,input_schema25414__$1,G__25417__$1,output_schema25413__$1,app_state__$1,G__25418__$1,input_checker25415__$1,ufv____$1,meta25423));
});})(validate__8048__auto__,ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

}

return (new redeyes.core.t25422(output_checker25416_25429,owner,validate__8048__auto__,redeyes_app,input_schema25414_25427,G__25417,output_schema25413_25426,app_state,G__25418,input_checker25415_25428,ufv___25425,null));
break;
}
})();
if(cljs.core.truth_(validate__8048__auto__)){
var temp__4126__auto___25433 = output_checker25416_25429.call(null,o__8051__auto__);
if(cljs.core.truth_(temp__4126__auto___25433)){
var error__8050__auto___25434 = temp__4126__auto___25433;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8050__auto___25434)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8050__auto___25434,new cljs.core.Keyword(null,"value","value",305978217),o__8051__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25413_25426,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8051__auto__;
});})(ufv___25425,output_schema25413_25426,input_schema25414_25427,input_checker25415_25428,output_checker25416_25429))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.redeyes_app),schema.core.make_fn_schema.call(null,output_schema25413_25426,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25414_25427], null)));

redeyes.core.__GT_redeyes_app = (function() {
var __GT_redeyes_app = null;
var __GT_redeyes_app__1 = (function (cursor__9836__auto__){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9836__auto__);
});
var __GT_redeyes_app__2 = (function (cursor__9836__auto__,m25412){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9836__auto__,m25412);
});
__GT_redeyes_app = function(cursor__9836__auto__,m25412){
switch(arguments.length){
case 1:
return __GT_redeyes_app__1.call(this,cursor__9836__auto__);
case 2:
return __GT_redeyes_app__2.call(this,cursor__9836__auto__,m25412);
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
return redeyes.util.log.call(null,data);
}),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
goog.exportSymbol('redeyes.core.run', redeyes.core.run);
