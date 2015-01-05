// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.core');
goog.require('cljs.core');
goog.require('redeyes.helpers');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('redeyes.api');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('om.core');
redeyes.core.activate = (function activate(app){
om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null),true);

return redeyes.api.persist_active_status.call(null,cljs.core.deref.call(null,app));
});
redeyes.core.deactivate = (function deactivate(app){
om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null),false);

return redeyes.api.persist_inactive_status.call(null,cljs.core.deref.call(null,app));
});
/**
* Gets the list of apps already saved to the server, then fires the
* callback. Used to load the initial state before rendering the app.
*/
redeyes.core.fetch_data = (function fetch_data(state){
return redeyes.api.fetch_data.call(null,state);
});
redeyes.core.dispatch = (function dispatch(command,params,app_state){
var G__51293 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__51293) {
case "update-status":
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(params))){
return redeyes.core.activate.call(null,new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(params));
} else {
return redeyes.core.deactivate.call(null,new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(params));
}

break;
case "create":
return redeyes.api.submit_new_app.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(params),((function (G__51293){
return (function (){
return redeyes.core.fetch_data.call(null,app_state);
});})(G__51293))
);

break;
case "wake-up-now":
return redeyes.api.wake_all.call(null,((function (G__51293){
return (function (){
return redeyes.core.fetch_data.call(null,app_state);
});})(G__51293))
);

break;
case "clear-deactivated":
return redeyes.api.clear_deactivated.call(null,((function (G__51293){
return (function (){
return redeyes.core.fetch_data.call(null,app_state);
});})(G__51293))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));

}
});

var ufv___51308 = schema.utils.use_fn_validation;
var output_schema51296_51309 = schema.core.Any;
var input_schema51297_51310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51298_51311 = schema.core.checker.call(null,input_schema51297_51310);
var output_checker51299_51312 = schema.core.checker.call(null,output_schema51296_51309);
/**
* Inputs: [data owner]
* 
* A form where the user can enter a new url to watch
*/
redeyes.core.new_sleepy_app_form = ((function (ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function new_sleepy_app_form(G__51300,G__51301){
var validate__8050__auto__ = ufv___51308.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51300,G__51301], null);
var temp__4126__auto___51314 = input_checker51298_51311.call(null,args__8051__auto___51313);
if(cljs.core.truth_(temp__4126__auto___51314)){
var error__8052__auto___51315 = temp__4126__auto___51314;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8052__auto___51315)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51315,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51313,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51297_51310,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var data = G__51300;
var owner = G__51301;
while(true){
if(typeof redeyes.core.t51305 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51305 = (function (G__51301,new_sleepy_app_form,owner,validate__8050__auto__,input_schema51297,data,output_checker51299,input_checker51298,output_schema51296,ufv__,G__51300,meta51306){
this.G__51301 = G__51301;
this.new_sleepy_app_form = new_sleepy_app_form;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.input_schema51297 = input_schema51297;
this.data = data;
this.output_checker51299 = output_checker51299;
this.input_checker51298 = input_checker51298;
this.output_schema51296 = output_schema51296;
this.ufv__ = ufv__;
this.G__51300 = G__51300;
this.meta51306 = meta51306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51305.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51305.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (_){
var self__ = this;
var ___$1 = this;
return "new-sleepy-app-form";
});})(validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

redeyes.core.t51305.prototype.om$core$IRenderState$ = true;

redeyes.core.t51305.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state);
var bus = new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));
var update_url_state_BANG_ = ((function (url,bus,___$1,validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (new_val){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"url","url",276297046),new_val);
});})(url,bus,___$1,validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;
var handle_change_input = ((function (url,bus,update_url_state_BANG_,___$1,validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (e){
return update_url_state_BANG_.call(null,e.target.value);
});})(url,bus,update_url_state_BANG_,___$1,validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;
var handle_submit_url = ((function (url,bus,update_url_state_BANG_,handle_change_input,___$1,validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (e){
e.preventDefault();

cljs.core.async.put_BANG_.call(null,bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null)], null));

return update_url_state_BANG_.call(null,"");
});})(url,bus,update_url_state_BANG_,handle_change_input,___$1,validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;
return cljs.core.apply.call(null,React.DOM.form,{"onSubmit": om_tools.dom.format_opts.call(null,handle_submit_url), "className": "new-sleepy-app-form form-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[redeyes.helpers.input_with_addons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"http://"], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add URL",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_submit_url], null)], null),om.dom.input.call(null,{"placeholder": "URL here please!", "onChange": om_tools.dom.format_opts.call(null,handle_change_input), "value": om_tools.dom.format_opts.call(null,url), "id": "sleepy-app-url", "className": "form-control", "ref": "new-url", "type": "text"}))],null))));
});})(validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

redeyes.core.t51305.prototype.om$core$IInitState$ = true;

redeyes.core.t51305.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),""], null);
});})(validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

redeyes.core.t51305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (_51307){
var self__ = this;
var _51307__$1 = this;
return self__.meta51306;
});})(validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

redeyes.core.t51305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (_51307,meta51306__$1){
var self__ = this;
var _51307__$1 = this;
return (new redeyes.core.t51305(self__.G__51301,self__.new_sleepy_app_form,self__.owner,self__.validate__8050__auto__,self__.input_schema51297,self__.data,self__.output_checker51299,self__.input_checker51298,self__.output_schema51296,self__.ufv__,self__.G__51300,meta51306__$1));
});})(validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

redeyes.core.t51305.cljs$lang$type = true;

redeyes.core.t51305.cljs$lang$ctorStr = "redeyes.core/t51305";

redeyes.core.t51305.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51305");
});})(validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

redeyes.core.__GT_t51305 = ((function (validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312){
return (function __GT_t51305(G__51301__$1,new_sleepy_app_form__$1,owner__$1,validate__8050__auto____$1,input_schema51297__$1,data__$1,output_checker51299__$1,input_checker51298__$1,output_schema51296__$1,ufv____$1,G__51300__$1,meta51306){
return (new redeyes.core.t51305(G__51301__$1,new_sleepy_app_form__$1,owner__$1,validate__8050__auto____$1,input_schema51297__$1,data__$1,output_checker51299__$1,input_checker51298__$1,output_schema51296__$1,ufv____$1,G__51300__$1,meta51306));
});})(validate__8050__auto__,ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

}

return (new redeyes.core.t51305(G__51301,new_sleepy_app_form,owner,validate__8050__auto__,input_schema51297_51310,data,output_checker51299_51312,input_checker51298_51311,output_schema51296_51309,ufv___51308,G__51300,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51316 = output_checker51299_51312.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51316)){
var error__8052__auto___51317 = temp__4126__auto___51316;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8052__auto___51317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51317,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51296_51309,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51308,output_schema51296_51309,input_schema51297_51310,input_checker51298_51311,output_checker51299_51312))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.new_sleepy_app_form),schema.core.make_fn_schema.call(null,output_schema51296_51309,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51297_51310], null)));

redeyes.core.__GT_new_sleepy_app_form = (function() {
var __GT_new_sleepy_app_form = null;
var __GT_new_sleepy_app_form__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9838__auto__);
});
var __GT_new_sleepy_app_form__2 = (function (cursor__9838__auto__,m51295){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9838__auto__,m51295);
});
__GT_new_sleepy_app_form = function(cursor__9838__auto__,m51295){
switch(arguments.length){
case 1:
return __GT_new_sleepy_app_form__1.call(this,cursor__9838__auto__);
case 2:
return __GT_new_sleepy_app_form__2.call(this,cursor__9838__auto__,m51295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$1 = __GT_new_sleepy_app_form__1;
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$2 = __GT_new_sleepy_app_form__2;
return __GT_new_sleepy_app_form;
})()
;

var ufv___51331 = schema.utils.use_fn_validation;
var output_schema51319_51332 = schema.core.Any;
var input_schema51320_51333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51321_51334 = schema.core.checker.call(null,input_schema51320_51333);
var output_checker51322_51335 = schema.core.checker.call(null,output_schema51319_51332);
/**
* Inputs: [app owner]
* 
* Checkbox that indicates whether or not an app is enabled to be woken up
*/
redeyes.core.sleepy_app_checkbox = ((function (ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function sleepy_app_checkbox(G__51323,G__51324){
var validate__8050__auto__ = ufv___51331.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51323,G__51324], null);
var temp__4126__auto___51337 = input_checker51321_51334.call(null,args__8051__auto___51336);
if(cljs.core.truth_(temp__4126__auto___51337)){
var error__8052__auto___51338 = temp__4126__auto___51337;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8052__auto___51338)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51338,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51336,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51320_51333,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app = G__51323;
var owner = G__51324;
while(true){
if(typeof redeyes.core.t51328 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51328 = (function (owner,input_schema51320,validate__8050__auto__,output_schema51319,sleepy_app_checkbox,G__51324,output_checker51322,input_checker51321,G__51323,app,ufv__,meta51329){
this.owner = owner;
this.input_schema51320 = input_schema51320;
this.validate__8050__auto__ = validate__8050__auto__;
this.output_schema51319 = output_schema51319;
this.sleepy_app_checkbox = sleepy_app_checkbox;
this.G__51324 = G__51324;
this.output_checker51322 = output_checker51322;
this.input_checker51321 = input_checker51321;
this.G__51323 = G__51323;
this.app = app;
this.ufv__ = ufv__;
this.meta51329 = meta51329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51328.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51328.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-checkbox";
});})(validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;

redeyes.core.t51328.prototype.om$core$IRender$ = true;

redeyes.core.t51328.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function (_){
var self__ = this;
var ___$1 = this;
var bus = new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));
var handle_change_checked = ((function (bus,___$1,validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function (e){
return cljs.core.async.put_BANG_.call(null,bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"active","active",1895962068),e.target.checked], null)], null));
});})(bus,___$1,validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;
return om.dom.input.call(null,{"checked": om_tools.dom.format_opts.call(null,redeyes.helpers.active_QMARK_.call(null,self__.app)), "onChange": om_tools.dom.format_opts.call(null,handle_change_checked), "type": "checkbox"});
});})(validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;

redeyes.core.t51328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function (_51330){
var self__ = this;
var _51330__$1 = this;
return self__.meta51329;
});})(validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;

redeyes.core.t51328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function (_51330,meta51329__$1){
var self__ = this;
var _51330__$1 = this;
return (new redeyes.core.t51328(self__.owner,self__.input_schema51320,self__.validate__8050__auto__,self__.output_schema51319,self__.sleepy_app_checkbox,self__.G__51324,self__.output_checker51322,self__.input_checker51321,self__.G__51323,self__.app,self__.ufv__,meta51329__$1));
});})(validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;

redeyes.core.t51328.cljs$lang$type = true;

redeyes.core.t51328.cljs$lang$ctorStr = "redeyes.core/t51328";

redeyes.core.t51328.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51328");
});})(validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;

redeyes.core.__GT_t51328 = ((function (validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335){
return (function __GT_t51328(owner__$1,input_schema51320__$1,validate__8050__auto____$1,output_schema51319__$1,sleepy_app_checkbox__$1,G__51324__$1,output_checker51322__$1,input_checker51321__$1,G__51323__$1,app__$1,ufv____$1,meta51329){
return (new redeyes.core.t51328(owner__$1,input_schema51320__$1,validate__8050__auto____$1,output_schema51319__$1,sleepy_app_checkbox__$1,G__51324__$1,output_checker51322__$1,input_checker51321__$1,G__51323__$1,app__$1,ufv____$1,meta51329));
});})(validate__8050__auto__,ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;

}

return (new redeyes.core.t51328(owner,input_schema51320_51333,validate__8050__auto__,output_schema51319_51332,sleepy_app_checkbox,G__51324,output_checker51322_51335,input_checker51321_51334,G__51323,app,ufv___51331,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51339 = output_checker51322_51335.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51339)){
var error__8052__auto___51340 = temp__4126__auto___51339;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8052__auto___51340)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51340,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51319_51332,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51331,output_schema51319_51332,input_schema51320_51333,input_checker51321_51334,output_checker51322_51335))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_checkbox),schema.core.make_fn_schema.call(null,output_schema51319_51332,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51320_51333], null)));

redeyes.core.__GT_sleepy_app_checkbox = (function() {
var __GT_sleepy_app_checkbox = null;
var __GT_sleepy_app_checkbox__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9838__auto__);
});
var __GT_sleepy_app_checkbox__2 = (function (cursor__9838__auto__,m51318){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9838__auto__,m51318);
});
__GT_sleepy_app_checkbox = function(cursor__9838__auto__,m51318){
switch(arguments.length){
case 1:
return __GT_sleepy_app_checkbox__1.call(this,cursor__9838__auto__);
case 2:
return __GT_sleepy_app_checkbox__2.call(this,cursor__9838__auto__,m51318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_checkbox__1;
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_checkbox__2;
return __GT_sleepy_app_checkbox;
})()
;

var ufv___51354 = schema.utils.use_fn_validation;
var output_schema51342_51355 = schema.core.Any;
var input_schema51343_51356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51344_51357 = schema.core.checker.call(null,input_schema51343_51356);
var output_checker51345_51358 = schema.core.checker.call(null,output_schema51342_51355);
/**
* Inputs: [app owner]
* 
* A row in the sleepy-app-list table
*/
redeyes.core.sleepy_app = ((function (ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358){
return (function sleepy_app(G__51346,G__51347){
var validate__8050__auto__ = ufv___51354.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51346,G__51347], null);
var temp__4126__auto___51360 = input_checker51344_51357.call(null,args__8051__auto___51359);
if(cljs.core.truth_(temp__4126__auto___51360)){
var error__8052__auto___51361 = temp__4126__auto___51360;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8052__auto___51361)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51361,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51359,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51343_51356,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app = G__51346;
var owner = G__51347;
while(true){
if(typeof redeyes.core.t51351 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51351 = (function (owner,validate__8050__auto__,output_checker51345,input_schema51343,G__51347,sleepy_app,input_checker51344,G__51346,app,ufv__,output_schema51342,meta51352){
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.output_checker51345 = output_checker51345;
this.input_schema51343 = input_schema51343;
this.G__51347 = G__51347;
this.sleepy_app = sleepy_app;
this.input_checker51344 = input_checker51344;
this.G__51346 = G__51346;
this.app = app;
this.ufv__ = ufv__;
this.output_schema51342 = output_schema51342;
this.meta51352 = meta51352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51351.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51351.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app";
});})(validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358))
;

redeyes.core.t51351.prototype.om$core$IRender$ = true;

redeyes.core.t51351.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358){
return (function (_){
var self__ = this;
var ___$1 = this;
var url = cljs.core.get.call(null,self__.app,"url");
var last_wake_up = cljs.core.get.call(null,self__.app,"lastWokenUpAt");
var last_wake_up_text = (((last_wake_up == null))?"Never":last_wake_up);
return cljs.core.apply.call(null,React.DOM.tr,{"className": om_tools.dom.format_opts.call(null,redeyes.helpers.css_classes.call(null,"sleepy-app",((redeyes.helpers.active_QMARK_.call(null,self__.app))?"active":null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,om.core.build.call(null,redeyes.core.sleepy_app_checkbox,self__.app),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,url,cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,last_wake_up_text,cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358))
;

redeyes.core.t51351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358){
return (function (_51353){
var self__ = this;
var _51353__$1 = this;
return self__.meta51352;
});})(validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358))
;

redeyes.core.t51351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358){
return (function (_51353,meta51352__$1){
var self__ = this;
var _51353__$1 = this;
return (new redeyes.core.t51351(self__.owner,self__.validate__8050__auto__,self__.output_checker51345,self__.input_schema51343,self__.G__51347,self__.sleepy_app,self__.input_checker51344,self__.G__51346,self__.app,self__.ufv__,self__.output_schema51342,meta51352__$1));
});})(validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358))
;

redeyes.core.t51351.cljs$lang$type = true;

redeyes.core.t51351.cljs$lang$ctorStr = "redeyes.core/t51351";

redeyes.core.t51351.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51351");
});})(validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358))
;

redeyes.core.__GT_t51351 = ((function (validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358){
return (function __GT_t51351(owner__$1,validate__8050__auto____$1,output_checker51345__$1,input_schema51343__$1,G__51347__$1,sleepy_app__$1,input_checker51344__$1,G__51346__$1,app__$1,ufv____$1,output_schema51342__$1,meta51352){
return (new redeyes.core.t51351(owner__$1,validate__8050__auto____$1,output_checker51345__$1,input_schema51343__$1,G__51347__$1,sleepy_app__$1,input_checker51344__$1,G__51346__$1,app__$1,ufv____$1,output_schema51342__$1,meta51352));
});})(validate__8050__auto__,ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358))
;

}

return (new redeyes.core.t51351(owner,validate__8050__auto__,output_checker51345_51358,input_schema51343_51356,G__51347,sleepy_app,input_checker51344_51357,G__51346,app,ufv___51354,output_schema51342_51355,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51362 = output_checker51345_51358.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51362)){
var error__8052__auto___51363 = temp__4126__auto___51362;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8052__auto___51363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51363,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51342_51355,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51354,output_schema51342_51355,input_schema51343_51356,input_checker51344_51357,output_checker51345_51358))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app),schema.core.make_fn_schema.call(null,output_schema51342_51355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51343_51356], null)));

redeyes.core.__GT_sleepy_app = (function() {
var __GT_sleepy_app = null;
var __GT_sleepy_app__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9838__auto__);
});
var __GT_sleepy_app__2 = (function (cursor__9838__auto__,m51341){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9838__auto__,m51341);
});
__GT_sleepy_app = function(cursor__9838__auto__,m51341){
switch(arguments.length){
case 1:
return __GT_sleepy_app__1.call(this,cursor__9838__auto__);
case 2:
return __GT_sleepy_app__2.call(this,cursor__9838__auto__,m51341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app__1;
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app__2;
return __GT_sleepy_app;
})()
;

var ufv___51377 = schema.utils.use_fn_validation;
var output_schema51365_51378 = schema.core.Any;
var input_schema51366_51379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51367_51380 = schema.core.checker.call(null,input_schema51366_51379);
var output_checker51368_51381 = schema.core.checker.call(null,output_schema51365_51378);
/**
* Inputs: [apps owner]
* 
* Renders out each of the sleepy-apps
*/
redeyes.core.sleepy_app_list = ((function (ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381){
return (function sleepy_app_list(G__51369,G__51370){
var validate__8050__auto__ = ufv___51377.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51369,G__51370], null);
var temp__4126__auto___51383 = input_checker51367_51380.call(null,args__8051__auto___51382);
if(cljs.core.truth_(temp__4126__auto___51383)){
var error__8052__auto___51384 = temp__4126__auto___51383;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8052__auto___51384)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51384,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51382,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51366_51379,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var apps = G__51369;
var owner = G__51370;
while(true){
if(typeof redeyes.core.t51374 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51374 = (function (owner,G__51369,validate__8050__auto__,apps,output_schema51365,sleepy_app_list,output_checker51368,input_checker51367,input_schema51366,ufv__,G__51370,meta51375){
this.owner = owner;
this.G__51369 = G__51369;
this.validate__8050__auto__ = validate__8050__auto__;
this.apps = apps;
this.output_schema51365 = output_schema51365;
this.sleepy_app_list = sleepy_app_list;
this.output_checker51368 = output_checker51368;
this.input_checker51367 = input_checker51367;
this.input_schema51366 = input_schema51366;
this.ufv__ = ufv__;
this.G__51370 = G__51370;
this.meta51375 = meta51375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51374.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51374.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-list";
});})(validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381))
;

redeyes.core.t51374.prototype.om$core$IRender$ = true;

redeyes.core.t51374.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.empty_QMARK_.call(null,self__.apps)){
return React.DOM.div(null,"No apps");
} else {
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.table,{"className": "table"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.thead,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.th({"className": "sleepy-app-active-col"},""),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(null),React.DOM.th(null)],null))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,om_tools.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,om.core.build_all.call(null,redeyes.core.sleepy_app,self__.apps))],null)))),cljs.core.PersistentVector.EMPTY);
}
});})(validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381))
;

redeyes.core.t51374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381){
return (function (_51376){
var self__ = this;
var _51376__$1 = this;
return self__.meta51375;
});})(validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381))
;

redeyes.core.t51374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381){
return (function (_51376,meta51375__$1){
var self__ = this;
var _51376__$1 = this;
return (new redeyes.core.t51374(self__.owner,self__.G__51369,self__.validate__8050__auto__,self__.apps,self__.output_schema51365,self__.sleepy_app_list,self__.output_checker51368,self__.input_checker51367,self__.input_schema51366,self__.ufv__,self__.G__51370,meta51375__$1));
});})(validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381))
;

redeyes.core.t51374.cljs$lang$type = true;

redeyes.core.t51374.cljs$lang$ctorStr = "redeyes.core/t51374";

redeyes.core.t51374.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51374");
});})(validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381))
;

redeyes.core.__GT_t51374 = ((function (validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381){
return (function __GT_t51374(owner__$1,G__51369__$1,validate__8050__auto____$1,apps__$1,output_schema51365__$1,sleepy_app_list__$1,output_checker51368__$1,input_checker51367__$1,input_schema51366__$1,ufv____$1,G__51370__$1,meta51375){
return (new redeyes.core.t51374(owner__$1,G__51369__$1,validate__8050__auto____$1,apps__$1,output_schema51365__$1,sleepy_app_list__$1,output_checker51368__$1,input_checker51367__$1,input_schema51366__$1,ufv____$1,G__51370__$1,meta51375));
});})(validate__8050__auto__,ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381))
;

}

return (new redeyes.core.t51374(owner,G__51369,validate__8050__auto__,apps,output_schema51365_51378,sleepy_app_list,output_checker51368_51381,input_checker51367_51380,input_schema51366_51379,ufv___51377,G__51370,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51385 = output_checker51368_51381.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51385)){
var error__8052__auto___51386 = temp__4126__auto___51385;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8052__auto___51386)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51386,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51365_51378,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51377,output_schema51365_51378,input_schema51366_51379,input_checker51367_51380,output_checker51368_51381))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_list),schema.core.make_fn_schema.call(null,output_schema51365_51378,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51366_51379], null)));

redeyes.core.__GT_sleepy_app_list = (function() {
var __GT_sleepy_app_list = null;
var __GT_sleepy_app_list__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9838__auto__);
});
var __GT_sleepy_app_list__2 = (function (cursor__9838__auto__,m51364){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9838__auto__,m51364);
});
__GT_sleepy_app_list = function(cursor__9838__auto__,m51364){
switch(arguments.length){
case 1:
return __GT_sleepy_app_list__1.call(this,cursor__9838__auto__);
case 2:
return __GT_sleepy_app_list__2.call(this,cursor__9838__auto__,m51364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_list__1;
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_list__2;
return __GT_sleepy_app_list;
})()
;

var ufv___51400 = schema.utils.use_fn_validation;
var output_schema51388_51401 = schema.core.Any;
var input_schema51389_51402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51390_51403 = schema.core.checker.call(null,input_schema51389_51402);
var output_checker51391_51404 = schema.core.checker.call(null,output_schema51388_51401);
/**
* Inputs: [app-state owner]
*/
redeyes.core.wake_up_now_button = ((function (ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function wake_up_now_button(G__51392,G__51393){
var validate__8050__auto__ = ufv___51400.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51392,G__51393], null);
var temp__4126__auto___51406 = input_checker51390_51403.call(null,args__8051__auto___51405);
if(cljs.core.truth_(temp__4126__auto___51406)){
var error__8052__auto___51407 = temp__4126__auto___51406;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8052__auto___51407)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51407,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51405,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51389_51402,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app_state = G__51392;
var owner = G__51393;
while(true){
if(typeof redeyes.core.t51397 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51397 = (function (output_schema51388,owner,validate__8050__auto__,G__51393,input_schema51389,wake_up_now_button,app_state,output_checker51391,G__51392,input_checker51390,ufv__,meta51398){
this.output_schema51388 = output_schema51388;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.G__51393 = G__51393;
this.input_schema51389 = input_schema51389;
this.wake_up_now_button = wake_up_now_button;
this.app_state = app_state;
this.output_checker51391 = output_checker51391;
this.G__51392 = G__51392;
this.input_checker51390 = input_checker51390;
this.ufv__ = ufv__;
this.meta51398 = meta51398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51397.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51397.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function (_){
var self__ = this;
var ___$1 = this;
return "wake-up-now-button";
});})(validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;

redeyes.core.t51397.prototype.om$core$IRender$ = true;

redeyes.core.t51397.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),cljs.core.PersistentArrayMap.EMPTY], null));
});})(___$1,validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;
return redeyes.helpers.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Wake up all apps now!");
});})(validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;

redeyes.core.t51397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function (_51399){
var self__ = this;
var _51399__$1 = this;
return self__.meta51398;
});})(validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;

redeyes.core.t51397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function (_51399,meta51398__$1){
var self__ = this;
var _51399__$1 = this;
return (new redeyes.core.t51397(self__.output_schema51388,self__.owner,self__.validate__8050__auto__,self__.G__51393,self__.input_schema51389,self__.wake_up_now_button,self__.app_state,self__.output_checker51391,self__.G__51392,self__.input_checker51390,self__.ufv__,meta51398__$1));
});})(validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;

redeyes.core.t51397.cljs$lang$type = true;

redeyes.core.t51397.cljs$lang$ctorStr = "redeyes.core/t51397";

redeyes.core.t51397.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51397");
});})(validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;

redeyes.core.__GT_t51397 = ((function (validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404){
return (function __GT_t51397(output_schema51388__$1,owner__$1,validate__8050__auto____$1,G__51393__$1,input_schema51389__$1,wake_up_now_button__$1,app_state__$1,output_checker51391__$1,G__51392__$1,input_checker51390__$1,ufv____$1,meta51398){
return (new redeyes.core.t51397(output_schema51388__$1,owner__$1,validate__8050__auto____$1,G__51393__$1,input_schema51389__$1,wake_up_now_button__$1,app_state__$1,output_checker51391__$1,G__51392__$1,input_checker51390__$1,ufv____$1,meta51398));
});})(validate__8050__auto__,ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;

}

return (new redeyes.core.t51397(output_schema51388_51401,owner,validate__8050__auto__,G__51393,input_schema51389_51402,wake_up_now_button,app_state,output_checker51391_51404,G__51392,input_checker51390_51403,ufv___51400,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51408 = output_checker51391_51404.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51408)){
var error__8052__auto___51409 = temp__4126__auto___51408;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8052__auto___51409)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51409,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51388_51401,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51400,output_schema51388_51401,input_schema51389_51402,input_checker51390_51403,output_checker51391_51404))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.wake_up_now_button),schema.core.make_fn_schema.call(null,output_schema51388_51401,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51389_51402], null)));

redeyes.core.__GT_wake_up_now_button = (function() {
var __GT_wake_up_now_button = null;
var __GT_wake_up_now_button__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9838__auto__);
});
var __GT_wake_up_now_button__2 = (function (cursor__9838__auto__,m51387){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9838__auto__,m51387);
});
__GT_wake_up_now_button = function(cursor__9838__auto__,m51387){
switch(arguments.length){
case 1:
return __GT_wake_up_now_button__1.call(this,cursor__9838__auto__);
case 2:
return __GT_wake_up_now_button__2.call(this,cursor__9838__auto__,m51387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$1 = __GT_wake_up_now_button__1;
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$2 = __GT_wake_up_now_button__2;
return __GT_wake_up_now_button;
})()
;

var ufv___51423 = schema.utils.use_fn_validation;
var output_schema51411_51424 = schema.core.Any;
var input_schema51412_51425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51413_51426 = schema.core.checker.call(null,input_schema51412_51425);
var output_checker51414_51427 = schema.core.checker.call(null,output_schema51411_51424);
/**
* Inputs: [app-state owner]
*/
redeyes.core.clear_deactivated_button = ((function (ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function clear_deactivated_button(G__51415,G__51416){
var validate__8050__auto__ = ufv___51423.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51415,G__51416], null);
var temp__4126__auto___51429 = input_checker51413_51426.call(null,args__8051__auto___51428);
if(cljs.core.truth_(temp__4126__auto___51429)){
var error__8052__auto___51430 = temp__4126__auto___51429;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8052__auto___51430)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51430,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51428,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51412_51425,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app_state = G__51415;
var owner = G__51416;
while(true){
if(typeof redeyes.core.t51420 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51420 = (function (input_schema51412,owner,validate__8050__auto__,G__51415,clear_deactivated_button,output_schema51411,input_checker51413,G__51416,output_checker51414,app_state,ufv__,meta51421){
this.input_schema51412 = input_schema51412;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.G__51415 = G__51415;
this.clear_deactivated_button = clear_deactivated_button;
this.output_schema51411 = output_schema51411;
this.input_checker51413 = input_checker51413;
this.G__51416 = G__51416;
this.output_checker51414 = output_checker51414;
this.app_state = app_state;
this.ufv__ = ufv__;
this.meta51421 = meta51421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51420.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51420.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function (_){
var self__ = this;
var ___$1 = this;
return "clear-deactivated-button";
});})(validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;

redeyes.core.t51420.prototype.om$core$IRender$ = true;

redeyes.core.t51420.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),cljs.core.PersistentArrayMap.EMPTY], null));
});})(___$1,validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;
return redeyes.helpers.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Clear deactivated apps");
});})(validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;

redeyes.core.t51420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function (_51422){
var self__ = this;
var _51422__$1 = this;
return self__.meta51421;
});})(validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;

redeyes.core.t51420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function (_51422,meta51421__$1){
var self__ = this;
var _51422__$1 = this;
return (new redeyes.core.t51420(self__.input_schema51412,self__.owner,self__.validate__8050__auto__,self__.G__51415,self__.clear_deactivated_button,self__.output_schema51411,self__.input_checker51413,self__.G__51416,self__.output_checker51414,self__.app_state,self__.ufv__,meta51421__$1));
});})(validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;

redeyes.core.t51420.cljs$lang$type = true;

redeyes.core.t51420.cljs$lang$ctorStr = "redeyes.core/t51420";

redeyes.core.t51420.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51420");
});})(validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;

redeyes.core.__GT_t51420 = ((function (validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427){
return (function __GT_t51420(input_schema51412__$1,owner__$1,validate__8050__auto____$1,G__51415__$1,clear_deactivated_button__$1,output_schema51411__$1,input_checker51413__$1,G__51416__$1,output_checker51414__$1,app_state__$1,ufv____$1,meta51421){
return (new redeyes.core.t51420(input_schema51412__$1,owner__$1,validate__8050__auto____$1,G__51415__$1,clear_deactivated_button__$1,output_schema51411__$1,input_checker51413__$1,G__51416__$1,output_checker51414__$1,app_state__$1,ufv____$1,meta51421));
});})(validate__8050__auto__,ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;

}

return (new redeyes.core.t51420(input_schema51412_51425,owner,validate__8050__auto__,G__51415,clear_deactivated_button,output_schema51411_51424,input_checker51413_51426,G__51416,output_checker51414_51427,app_state,ufv___51423,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51431 = output_checker51414_51427.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51431)){
var error__8052__auto___51432 = temp__4126__auto___51431;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8052__auto___51432)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51432,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51411_51424,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51423,output_schema51411_51424,input_schema51412_51425,input_checker51413_51426,output_checker51414_51427))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.clear_deactivated_button),schema.core.make_fn_schema.call(null,output_schema51411_51424,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51412_51425], null)));

redeyes.core.__GT_clear_deactivated_button = (function() {
var __GT_clear_deactivated_button = null;
var __GT_clear_deactivated_button__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9838__auto__);
});
var __GT_clear_deactivated_button__2 = (function (cursor__9838__auto__,m51410){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9838__auto__,m51410);
});
__GT_clear_deactivated_button = function(cursor__9838__auto__,m51410){
switch(arguments.length){
case 1:
return __GT_clear_deactivated_button__1.call(this,cursor__9838__auto__);
case 2:
return __GT_clear_deactivated_button__2.call(this,cursor__9838__auto__,m51410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$1 = __GT_clear_deactivated_button__1;
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$2 = __GT_clear_deactivated_button__2;
return __GT_clear_deactivated_button;
})()
;

var ufv___51492 = schema.utils.use_fn_validation;
var output_schema51434_51493 = schema.core.Any;
var input_schema51435_51494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51436_51495 = schema.core.checker.call(null,input_schema51435_51494);
var output_checker51437_51496 = schema.core.checker.call(null,output_schema51434_51493);
/**
* Inputs: [app-state owner]
* 
* Root component for the app
*/
redeyes.core.redeyes_app = ((function (ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function redeyes_app(G__51438,G__51439){
var validate__8050__auto__ = ufv___51492.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51438,G__51439], null);
var temp__4126__auto___51498 = input_checker51436_51495.call(null,args__8051__auto___51497);
if(cljs.core.truth_(temp__4126__auto___51498)){
var error__8052__auto___51499 = temp__4126__auto___51498;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8052__auto___51499)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51499,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51497,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51435_51494,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app_state = G__51438;
var owner = G__51439;
while(true){
if(typeof redeyes.core.t51466 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51466 = (function (owner,validate__8050__auto__,redeyes_app,G__51439,input_checker51436,output_checker51437,G__51438,output_schema51434,app_state,input_schema51435,ufv__,meta51467){
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.redeyes_app = redeyes_app;
this.G__51439 = G__51439;
this.input_checker51436 = input_checker51436;
this.output_checker51437 = output_checker51437;
this.G__51438 = G__51438;
this.output_schema51434 = output_schema51434;
this.app_state = app_state;
this.input_schema51435 = input_schema51435;
this.ufv__ = ufv__;
this.meta51467 = meta51467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51466.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51466.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (_){
var self__ = this;
var ___$1 = this;
return "redeyes-app";
});})(validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

redeyes.core.t51466.prototype.om$core$IRender$ = true;

redeyes.core.t51466.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h1(null,"Apps to wake up"),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.hr(null),om.core.build.call(null,redeyes.core.new_sleepy_app_form,cljs.core.PersistentArrayMap.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "sleepy-app-list"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,redeyes.core.sleepy_app_list,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state))],null)))),redeyes.helpers.button_group.call(null,om.core.build.call(null,redeyes.core.wake_up_now_button,self__.app_state),om.core.build.call(null,redeyes.core.clear_deactivated_button,self__.app_state))],null)));
});})(validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

redeyes.core.t51466.prototype.om$core$IWillMount$ = true;

redeyes.core.t51466.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (_){
var self__ = this;
var ___$1 = this;
var bus = new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));
redeyes.api.fetch_data.call(null,self__.app_state);

var c__11113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (state_51480){
var state_val_51481 = (state_51480[(1)]);
if((state_val_51481 === (4))){
var inst_51472 = (state_51480[(2)]);
var inst_51473 = cljs.core.nth.call(null,inst_51472,(0),null);
var inst_51474 = cljs.core.nth.call(null,inst_51472,(1),null);
var inst_51475 = redeyes.core.dispatch.call(null,inst_51473,inst_51474,self__.app_state);
var state_51480__$1 = (function (){var statearr_51482 = state_51480;
(statearr_51482[(7)] = inst_51475);

return statearr_51482;
})();
var statearr_51483_51500 = state_51480__$1;
(statearr_51483_51500[(2)] = null);

(statearr_51483_51500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51481 === (3))){
var inst_51478 = (state_51480[(2)]);
var state_51480__$1 = state_51480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51480__$1,inst_51478);
} else {
if((state_val_51481 === (2))){
var state_51480__$1 = state_51480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51480__$1,(4),bus);
} else {
if((state_val_51481 === (1))){
var state_51480__$1 = state_51480;
var statearr_51484_51501 = state_51480__$1;
(statearr_51484_51501[(2)] = null);

(statearr_51484_51501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;
return ((function (switch__11098__auto__,c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_51488 = [null,null,null,null,null,null,null,null];
(statearr_51488[(0)] = state_machine__11099__auto__);

(statearr_51488[(1)] = (1));

return statearr_51488;
});
var state_machine__11099__auto____1 = (function (state_51480){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_51480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e51489){if((e51489 instanceof Object)){
var ex__11102__auto__ = e51489;
var statearr_51490_51502 = state_51480;
(statearr_51490_51502[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51503 = state_51480;
state_51480 = G__51503;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_51480){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_51480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
})();
var state__11115__auto__ = (function (){var statearr_51491 = f__11114__auto__.call(null);
(statearr_51491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_51491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
);

return c__11113__auto__;
});})(validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

redeyes.core.t51466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (_51468){
var self__ = this;
var _51468__$1 = this;
return self__.meta51467;
});})(validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

redeyes.core.t51466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (_51468,meta51467__$1){
var self__ = this;
var _51468__$1 = this;
return (new redeyes.core.t51466(self__.owner,self__.validate__8050__auto__,self__.redeyes_app,self__.G__51439,self__.input_checker51436,self__.output_checker51437,self__.G__51438,self__.output_schema51434,self__.app_state,self__.input_schema51435,self__.ufv__,meta51467__$1));
});})(validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

redeyes.core.t51466.cljs$lang$type = true;

redeyes.core.t51466.cljs$lang$ctorStr = "redeyes.core/t51466";

redeyes.core.t51466.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51466");
});})(validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

redeyes.core.__GT_t51466 = ((function (validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496){
return (function __GT_t51466(owner__$1,validate__8050__auto____$1,redeyes_app__$1,G__51439__$1,input_checker51436__$1,output_checker51437__$1,G__51438__$1,output_schema51434__$1,app_state__$1,input_schema51435__$1,ufv____$1,meta51467){
return (new redeyes.core.t51466(owner__$1,validate__8050__auto____$1,redeyes_app__$1,G__51439__$1,input_checker51436__$1,output_checker51437__$1,G__51438__$1,output_schema51434__$1,app_state__$1,input_schema51435__$1,ufv____$1,meta51467));
});})(validate__8050__auto__,ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

}

return (new redeyes.core.t51466(owner,validate__8050__auto__,redeyes_app,G__51439,input_checker51436_51495,output_checker51437_51496,G__51438,output_schema51434_51493,app_state,input_schema51435_51494,ufv___51492,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51504 = output_checker51437_51496.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51504)){
var error__8052__auto___51505 = temp__4126__auto___51504;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8052__auto___51505)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51505,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51434_51493,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51492,output_schema51434_51493,input_schema51435_51494,input_checker51436_51495,output_checker51437_51496))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.redeyes_app),schema.core.make_fn_schema.call(null,output_schema51434_51493,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51435_51494], null)));

redeyes.core.__GT_redeyes_app = (function() {
var __GT_redeyes_app = null;
var __GT_redeyes_app__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9838__auto__);
});
var __GT_redeyes_app__2 = (function (cursor__9838__auto__,m51433){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9838__auto__,m51433);
});
__GT_redeyes_app = function(cursor__9838__auto__,m51433){
switch(arguments.length){
case 1:
return __GT_redeyes_app__1.call(this,cursor__9838__auto__);
case 2:
return __GT_redeyes_app__2.call(this,cursor__9838__auto__,m51433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_redeyes_app.cljs$core$IFn$_invoke$arity$1 = __GT_redeyes_app__1;
__GT_redeyes_app.cljs$core$IFn$_invoke$arity$2 = __GT_redeyes_app__2;
return __GT_redeyes_app;
})()
;
redeyes.core.run = (function run(){

var bus = cljs.core.async.chan.call(null);
return om.core.root.call(null,redeyes.core.redeyes_app,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apps","apps",844744865),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bus","bus",-1090873603),bus], null),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
goog.exportSymbol('redeyes.core.run', redeyes.core.run);
