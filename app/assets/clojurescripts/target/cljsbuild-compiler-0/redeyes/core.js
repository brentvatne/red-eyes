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
var G__51079 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__51079) {
case "update-status":
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(params))){
return redeyes.core.activate.call(null,new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(params));
} else {
return redeyes.core.deactivate.call(null,new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(params));
}

break;
case "create":
return redeyes.api.submit_new_app.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(params),((function (G__51079){
return (function (){
return redeyes.core.fetch_data.call(null,app_state);
});})(G__51079))
);

break;
case "wake-up-now":
return redeyes.api.wake_all.call(null,((function (G__51079){
return (function (){
return redeyes.core.fetch_data.call(null,app_state);
});})(G__51079))
);

break;
case "clear-deactivated":
return redeyes.api.clear_deactivated.call(null,((function (G__51079){
return (function (){
return redeyes.core.fetch_data.call(null,app_state);
});})(G__51079))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));

}
});

var ufv___51094 = schema.utils.use_fn_validation;
var output_schema51082_51095 = schema.core.Any;
var input_schema51083_51096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51084_51097 = schema.core.checker.call(null,input_schema51083_51096);
var output_checker51085_51098 = schema.core.checker.call(null,output_schema51082_51095);
/**
* Inputs: [data owner]
* 
* A form where the user can enter a new url to watch
*/
redeyes.core.new_sleepy_app_form = ((function (ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function new_sleepy_app_form(G__51086,G__51087){
var validate__8050__auto__ = ufv___51094.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51086,G__51087], null);
var temp__4126__auto___51100 = input_checker51084_51097.call(null,args__8051__auto___51099);
if(cljs.core.truth_(temp__4126__auto___51100)){
var error__8052__auto___51101 = temp__4126__auto___51100;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8052__auto___51101)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51101,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51099,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51083_51096,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var data = G__51086;
var owner = G__51087;
while(true){
if(typeof redeyes.core.t51091 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51091 = (function (new_sleepy_app_form,owner,validate__8050__auto__,data,G__51087,input_schema51083,output_checker51085,G__51086,output_schema51082,input_checker51084,ufv__,meta51092){
this.new_sleepy_app_form = new_sleepy_app_form;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.data = data;
this.G__51087 = G__51087;
this.input_schema51083 = input_schema51083;
this.output_checker51085 = output_checker51085;
this.G__51086 = G__51086;
this.output_schema51082 = output_schema51082;
this.input_checker51084 = input_checker51084;
this.ufv__ = ufv__;
this.meta51092 = meta51092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51091.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51091.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (_){
var self__ = this;
var ___$1 = this;
return "new-sleepy-app-form";
});})(validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

redeyes.core.t51091.prototype.om$core$IRenderState$ = true;

redeyes.core.t51091.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state);
var bus = new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));
var update_url_state_BANG_ = ((function (url,bus,___$1,validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (new_val){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"url","url",276297046),new_val);
});})(url,bus,___$1,validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;
var handle_change_input = ((function (url,bus,update_url_state_BANG_,___$1,validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (e){
return update_url_state_BANG_.call(null,e.target.value);
});})(url,bus,update_url_state_BANG_,___$1,validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;
var handle_submit_url = ((function (url,bus,update_url_state_BANG_,handle_change_input,___$1,validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (e){
e.preventDefault();

cljs.core.async.put_BANG_.call(null,bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null)], null));

return update_url_state_BANG_.call(null,"");
});})(url,bus,update_url_state_BANG_,handle_change_input,___$1,validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;
return cljs.core.apply.call(null,React.DOM.form,{"onSubmit": om_tools.dom.format_opts.call(null,handle_submit_url), "className": "new-sleepy-app-form form-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[redeyes.helpers.input_with_addons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"http://"], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add URL",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_submit_url], null)], null),om.dom.input.call(null,{"placeholder": "URL here please!", "onChange": om_tools.dom.format_opts.call(null,handle_change_input), "value": om_tools.dom.format_opts.call(null,url), "id": "sleepy-app-url", "className": "form-control", "ref": "new-url", "type": "text"}))],null))));
});})(validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

redeyes.core.t51091.prototype.om$core$IInitState$ = true;

redeyes.core.t51091.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),""], null);
});})(validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

redeyes.core.t51091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (_51093){
var self__ = this;
var _51093__$1 = this;
return self__.meta51092;
});})(validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

redeyes.core.t51091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (_51093,meta51092__$1){
var self__ = this;
var _51093__$1 = this;
return (new redeyes.core.t51091(self__.new_sleepy_app_form,self__.owner,self__.validate__8050__auto__,self__.data,self__.G__51087,self__.input_schema51083,self__.output_checker51085,self__.G__51086,self__.output_schema51082,self__.input_checker51084,self__.ufv__,meta51092__$1));
});})(validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

redeyes.core.t51091.cljs$lang$type = true;

redeyes.core.t51091.cljs$lang$ctorStr = "redeyes.core/t51091";

redeyes.core.t51091.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51091");
});})(validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

redeyes.core.__GT_t51091 = ((function (validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098){
return (function __GT_t51091(new_sleepy_app_form__$1,owner__$1,validate__8050__auto____$1,data__$1,G__51087__$1,input_schema51083__$1,output_checker51085__$1,G__51086__$1,output_schema51082__$1,input_checker51084__$1,ufv____$1,meta51092){
return (new redeyes.core.t51091(new_sleepy_app_form__$1,owner__$1,validate__8050__auto____$1,data__$1,G__51087__$1,input_schema51083__$1,output_checker51085__$1,G__51086__$1,output_schema51082__$1,input_checker51084__$1,ufv____$1,meta51092));
});})(validate__8050__auto__,ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

}

return (new redeyes.core.t51091(new_sleepy_app_form,owner,validate__8050__auto__,data,G__51087,input_schema51083_51096,output_checker51085_51098,G__51086,output_schema51082_51095,input_checker51084_51097,ufv___51094,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51102 = output_checker51085_51098.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51102)){
var error__8052__auto___51103 = temp__4126__auto___51102;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"new-sleepy-app-form","new-sleepy-app-form",1878618051,null),cljs.core.pr_str.call(null,error__8052__auto___51103)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51103,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51082_51095,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51094,output_schema51082_51095,input_schema51083_51096,input_checker51084_51097,output_checker51085_51098))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.new_sleepy_app_form),schema.core.make_fn_schema.call(null,output_schema51082_51095,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51083_51096], null)));

redeyes.core.__GT_new_sleepy_app_form = (function() {
var __GT_new_sleepy_app_form = null;
var __GT_new_sleepy_app_form__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9838__auto__);
});
var __GT_new_sleepy_app_form__2 = (function (cursor__9838__auto__,m51081){
return om.core.build.call(null,redeyes.core.new_sleepy_app_form,cursor__9838__auto__,m51081);
});
__GT_new_sleepy_app_form = function(cursor__9838__auto__,m51081){
switch(arguments.length){
case 1:
return __GT_new_sleepy_app_form__1.call(this,cursor__9838__auto__);
case 2:
return __GT_new_sleepy_app_form__2.call(this,cursor__9838__auto__,m51081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$1 = __GT_new_sleepy_app_form__1;
__GT_new_sleepy_app_form.cljs$core$IFn$_invoke$arity$2 = __GT_new_sleepy_app_form__2;
return __GT_new_sleepy_app_form;
})()
;

var ufv___51117 = schema.utils.use_fn_validation;
var output_schema51105_51118 = schema.core.Any;
var input_schema51106_51119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51107_51120 = schema.core.checker.call(null,input_schema51106_51119);
var output_checker51108_51121 = schema.core.checker.call(null,output_schema51105_51118);
/**
* Inputs: [app owner]
* 
* Checkbox that indicates whether or not an app is enabled to be woken up
*/
redeyes.core.sleepy_app_checkbox = ((function (ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function sleepy_app_checkbox(G__51109,G__51110){
var validate__8050__auto__ = ufv___51117.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51109,G__51110], null);
var temp__4126__auto___51123 = input_checker51107_51120.call(null,args__8051__auto___51122);
if(cljs.core.truth_(temp__4126__auto___51123)){
var error__8052__auto___51124 = temp__4126__auto___51123;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8052__auto___51124)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51124,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51122,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51106_51119,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app = G__51109;
var owner = G__51110;
while(true){
if(typeof redeyes.core.t51114 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51114 = (function (owner,output_checker51108,validate__8050__auto__,input_schema51106,G__51109,sleepy_app_checkbox,output_schema51105,app,ufv__,input_checker51107,G__51110,meta51115){
this.owner = owner;
this.output_checker51108 = output_checker51108;
this.validate__8050__auto__ = validate__8050__auto__;
this.input_schema51106 = input_schema51106;
this.G__51109 = G__51109;
this.sleepy_app_checkbox = sleepy_app_checkbox;
this.output_schema51105 = output_schema51105;
this.app = app;
this.ufv__ = ufv__;
this.input_checker51107 = input_checker51107;
this.G__51110 = G__51110;
this.meta51115 = meta51115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51114.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51114.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-checkbox";
});})(validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;

redeyes.core.t51114.prototype.om$core$IRender$ = true;

redeyes.core.t51114.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function (_){
var self__ = this;
var ___$1 = this;
var bus = new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));
var handle_change_checked = ((function (bus,___$1,validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function (e){
return cljs.core.async.put_BANG_.call(null,bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"active","active",1895962068),e.target.checked], null)], null));
});})(bus,___$1,validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;
return om.dom.input.call(null,{"checked": om_tools.dom.format_opts.call(null,redeyes.helpers.active_QMARK_.call(null,self__.app)), "onChange": om_tools.dom.format_opts.call(null,handle_change_checked), "type": "checkbox"});
});})(validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;

redeyes.core.t51114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function (_51116){
var self__ = this;
var _51116__$1 = this;
return self__.meta51115;
});})(validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;

redeyes.core.t51114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function (_51116,meta51115__$1){
var self__ = this;
var _51116__$1 = this;
return (new redeyes.core.t51114(self__.owner,self__.output_checker51108,self__.validate__8050__auto__,self__.input_schema51106,self__.G__51109,self__.sleepy_app_checkbox,self__.output_schema51105,self__.app,self__.ufv__,self__.input_checker51107,self__.G__51110,meta51115__$1));
});})(validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;

redeyes.core.t51114.cljs$lang$type = true;

redeyes.core.t51114.cljs$lang$ctorStr = "redeyes.core/t51114";

redeyes.core.t51114.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51114");
});})(validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;

redeyes.core.__GT_t51114 = ((function (validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121){
return (function __GT_t51114(owner__$1,output_checker51108__$1,validate__8050__auto____$1,input_schema51106__$1,G__51109__$1,sleepy_app_checkbox__$1,output_schema51105__$1,app__$1,ufv____$1,input_checker51107__$1,G__51110__$1,meta51115){
return (new redeyes.core.t51114(owner__$1,output_checker51108__$1,validate__8050__auto____$1,input_schema51106__$1,G__51109__$1,sleepy_app_checkbox__$1,output_schema51105__$1,app__$1,ufv____$1,input_checker51107__$1,G__51110__$1,meta51115));
});})(validate__8050__auto__,ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;

}

return (new redeyes.core.t51114(owner,output_checker51108_51121,validate__8050__auto__,input_schema51106_51119,G__51109,sleepy_app_checkbox,output_schema51105_51118,app,ufv___51117,input_checker51107_51120,G__51110,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51125 = output_checker51108_51121.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51125)){
var error__8052__auto___51126 = temp__4126__auto___51125;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-checkbox","sleepy-app-checkbox",-602225618,null),cljs.core.pr_str.call(null,error__8052__auto___51126)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51126,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51105_51118,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51117,output_schema51105_51118,input_schema51106_51119,input_checker51107_51120,output_checker51108_51121))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_checkbox),schema.core.make_fn_schema.call(null,output_schema51105_51118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51106_51119], null)));

redeyes.core.__GT_sleepy_app_checkbox = (function() {
var __GT_sleepy_app_checkbox = null;
var __GT_sleepy_app_checkbox__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9838__auto__);
});
var __GT_sleepy_app_checkbox__2 = (function (cursor__9838__auto__,m51104){
return om.core.build.call(null,redeyes.core.sleepy_app_checkbox,cursor__9838__auto__,m51104);
});
__GT_sleepy_app_checkbox = function(cursor__9838__auto__,m51104){
switch(arguments.length){
case 1:
return __GT_sleepy_app_checkbox__1.call(this,cursor__9838__auto__);
case 2:
return __GT_sleepy_app_checkbox__2.call(this,cursor__9838__auto__,m51104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_checkbox__1;
__GT_sleepy_app_checkbox.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_checkbox__2;
return __GT_sleepy_app_checkbox;
})()
;

var ufv___51140 = schema.utils.use_fn_validation;
var output_schema51128_51141 = schema.core.Any;
var input_schema51129_51142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51130_51143 = schema.core.checker.call(null,input_schema51129_51142);
var output_checker51131_51144 = schema.core.checker.call(null,output_schema51128_51141);
/**
* Inputs: [app owner]
* 
* A row in the sleepy-app-list table
*/
redeyes.core.sleepy_app = ((function (ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144){
return (function sleepy_app(G__51132,G__51133){
var validate__8050__auto__ = ufv___51140.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51132,G__51133], null);
var temp__4126__auto___51146 = input_checker51130_51143.call(null,args__8051__auto___51145);
if(cljs.core.truth_(temp__4126__auto___51146)){
var error__8052__auto___51147 = temp__4126__auto___51146;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8052__auto___51147)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51147,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51145,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51129_51142,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app = G__51132;
var owner = G__51133;
while(true){
if(typeof redeyes.core.t51137 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51137 = (function (output_checker51131,owner,G__51133,input_schema51129,validate__8050__auto__,output_schema51128,sleepy_app,G__51132,app,input_checker51130,ufv__,meta51138){
this.output_checker51131 = output_checker51131;
this.owner = owner;
this.G__51133 = G__51133;
this.input_schema51129 = input_schema51129;
this.validate__8050__auto__ = validate__8050__auto__;
this.output_schema51128 = output_schema51128;
this.sleepy_app = sleepy_app;
this.G__51132 = G__51132;
this.app = app;
this.input_checker51130 = input_checker51130;
this.ufv__ = ufv__;
this.meta51138 = meta51138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51137.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51137.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app";
});})(validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144))
;

redeyes.core.t51137.prototype.om$core$IRender$ = true;

redeyes.core.t51137.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144){
return (function (_){
var self__ = this;
var ___$1 = this;
var url = cljs.core.get.call(null,self__.app,"url");
var last_wake_up = cljs.core.get.call(null,self__.app,"lastWokenUpAt");
var last_wake_up_text = (((last_wake_up == null))?"Never":last_wake_up);
return cljs.core.apply.call(null,React.DOM.tr,{"className": om_tools.dom.format_opts.call(null,redeyes.helpers.css_classes.call(null,"sleepy-app",((redeyes.helpers.active_QMARK_.call(null,self__.app))?"active":null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,om.core.build.call(null,redeyes.core.sleepy_app_checkbox,self__.app),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,url,cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.td,last_wake_up_text,cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144))
;

redeyes.core.t51137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144){
return (function (_51139){
var self__ = this;
var _51139__$1 = this;
return self__.meta51138;
});})(validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144))
;

redeyes.core.t51137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144){
return (function (_51139,meta51138__$1){
var self__ = this;
var _51139__$1 = this;
return (new redeyes.core.t51137(self__.output_checker51131,self__.owner,self__.G__51133,self__.input_schema51129,self__.validate__8050__auto__,self__.output_schema51128,self__.sleepy_app,self__.G__51132,self__.app,self__.input_checker51130,self__.ufv__,meta51138__$1));
});})(validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144))
;

redeyes.core.t51137.cljs$lang$type = true;

redeyes.core.t51137.cljs$lang$ctorStr = "redeyes.core/t51137";

redeyes.core.t51137.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51137");
});})(validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144))
;

redeyes.core.__GT_t51137 = ((function (validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144){
return (function __GT_t51137(output_checker51131__$1,owner__$1,G__51133__$1,input_schema51129__$1,validate__8050__auto____$1,output_schema51128__$1,sleepy_app__$1,G__51132__$1,app__$1,input_checker51130__$1,ufv____$1,meta51138){
return (new redeyes.core.t51137(output_checker51131__$1,owner__$1,G__51133__$1,input_schema51129__$1,validate__8050__auto____$1,output_schema51128__$1,sleepy_app__$1,G__51132__$1,app__$1,input_checker51130__$1,ufv____$1,meta51138));
});})(validate__8050__auto__,ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144))
;

}

return (new redeyes.core.t51137(output_checker51131_51144,owner,G__51133,input_schema51129_51142,validate__8050__auto__,output_schema51128_51141,sleepy_app,G__51132,app,input_checker51130_51143,ufv___51140,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51148 = output_checker51131_51144.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51148)){
var error__8052__auto___51149 = temp__4126__auto___51148;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app","sleepy-app",1906857267,null),cljs.core.pr_str.call(null,error__8052__auto___51149)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51149,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51128_51141,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51140,output_schema51128_51141,input_schema51129_51142,input_checker51130_51143,output_checker51131_51144))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app),schema.core.make_fn_schema.call(null,output_schema51128_51141,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51129_51142], null)));

redeyes.core.__GT_sleepy_app = (function() {
var __GT_sleepy_app = null;
var __GT_sleepy_app__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9838__auto__);
});
var __GT_sleepy_app__2 = (function (cursor__9838__auto__,m51127){
return om.core.build.call(null,redeyes.core.sleepy_app,cursor__9838__auto__,m51127);
});
__GT_sleepy_app = function(cursor__9838__auto__,m51127){
switch(arguments.length){
case 1:
return __GT_sleepy_app__1.call(this,cursor__9838__auto__);
case 2:
return __GT_sleepy_app__2.call(this,cursor__9838__auto__,m51127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app__1;
__GT_sleepy_app.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app__2;
return __GT_sleepy_app;
})()
;

var ufv___51163 = schema.utils.use_fn_validation;
var output_schema51151_51164 = schema.core.Any;
var input_schema51152_51165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"apps","apps",-1809690904,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51153_51166 = schema.core.checker.call(null,input_schema51152_51165);
var output_checker51154_51167 = schema.core.checker.call(null,output_schema51151_51164);
/**
* Inputs: [apps owner]
* 
* Renders out each of the sleepy-apps
*/
redeyes.core.sleepy_app_list = ((function (ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167){
return (function sleepy_app_list(G__51155,G__51156){
var validate__8050__auto__ = ufv___51163.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51155,G__51156], null);
var temp__4126__auto___51169 = input_checker51153_51166.call(null,args__8051__auto___51168);
if(cljs.core.truth_(temp__4126__auto___51169)){
var error__8052__auto___51170 = temp__4126__auto___51169;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8052__auto___51170)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51170,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51168,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51152_51165,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var apps = G__51155;
var owner = G__51156;
while(true){
if(typeof redeyes.core.t51160 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51160 = (function (owner,validate__8050__auto__,output_schema51151,G__51155,apps,input_schema51152,G__51156,output_checker51154,sleepy_app_list,input_checker51153,ufv__,meta51161){
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.output_schema51151 = output_schema51151;
this.G__51155 = G__51155;
this.apps = apps;
this.input_schema51152 = input_schema51152;
this.G__51156 = G__51156;
this.output_checker51154 = output_checker51154;
this.sleepy_app_list = sleepy_app_list;
this.input_checker51153 = input_checker51153;
this.ufv__ = ufv__;
this.meta51161 = meta51161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51160.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51160.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sleepy-app-list";
});})(validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167))
;

redeyes.core.t51160.prototype.om$core$IRender$ = true;

redeyes.core.t51160.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.empty_QMARK_.call(null,self__.apps)){
return React.DOM.div(null,"No apps");
} else {
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.table,{"className": "table"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.thead,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.th({"className": "sleepy-app-active-col"},""),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(null),React.DOM.th(null)],null))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,om_tools.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,om.core.build_all.call(null,redeyes.core.sleepy_app,self__.apps))],null)))),cljs.core.PersistentVector.EMPTY);
}
});})(validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167))
;

redeyes.core.t51160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167){
return (function (_51162){
var self__ = this;
var _51162__$1 = this;
return self__.meta51161;
});})(validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167))
;

redeyes.core.t51160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167){
return (function (_51162,meta51161__$1){
var self__ = this;
var _51162__$1 = this;
return (new redeyes.core.t51160(self__.owner,self__.validate__8050__auto__,self__.output_schema51151,self__.G__51155,self__.apps,self__.input_schema51152,self__.G__51156,self__.output_checker51154,self__.sleepy_app_list,self__.input_checker51153,self__.ufv__,meta51161__$1));
});})(validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167))
;

redeyes.core.t51160.cljs$lang$type = true;

redeyes.core.t51160.cljs$lang$ctorStr = "redeyes.core/t51160";

redeyes.core.t51160.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51160");
});})(validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167))
;

redeyes.core.__GT_t51160 = ((function (validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167){
return (function __GT_t51160(owner__$1,validate__8050__auto____$1,output_schema51151__$1,G__51155__$1,apps__$1,input_schema51152__$1,G__51156__$1,output_checker51154__$1,sleepy_app_list__$1,input_checker51153__$1,ufv____$1,meta51161){
return (new redeyes.core.t51160(owner__$1,validate__8050__auto____$1,output_schema51151__$1,G__51155__$1,apps__$1,input_schema51152__$1,G__51156__$1,output_checker51154__$1,sleepy_app_list__$1,input_checker51153__$1,ufv____$1,meta51161));
});})(validate__8050__auto__,ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167))
;

}

return (new redeyes.core.t51160(owner,validate__8050__auto__,output_schema51151_51164,G__51155,apps,input_schema51152_51165,G__51156,output_checker51154_51167,sleepy_app_list,input_checker51153_51166,ufv___51163,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51171 = output_checker51154_51167.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51171)){
var error__8052__auto___51172 = temp__4126__auto___51171;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sleepy-app-list","sleepy-app-list",-1428849935,null),cljs.core.pr_str.call(null,error__8052__auto___51172)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51172,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51151_51164,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51163,output_schema51151_51164,input_schema51152_51165,input_checker51153_51166,output_checker51154_51167))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.sleepy_app_list),schema.core.make_fn_schema.call(null,output_schema51151_51164,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51152_51165], null)));

redeyes.core.__GT_sleepy_app_list = (function() {
var __GT_sleepy_app_list = null;
var __GT_sleepy_app_list__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9838__auto__);
});
var __GT_sleepy_app_list__2 = (function (cursor__9838__auto__,m51150){
return om.core.build.call(null,redeyes.core.sleepy_app_list,cursor__9838__auto__,m51150);
});
__GT_sleepy_app_list = function(cursor__9838__auto__,m51150){
switch(arguments.length){
case 1:
return __GT_sleepy_app_list__1.call(this,cursor__9838__auto__);
case 2:
return __GT_sleepy_app_list__2.call(this,cursor__9838__auto__,m51150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$1 = __GT_sleepy_app_list__1;
__GT_sleepy_app_list.cljs$core$IFn$_invoke$arity$2 = __GT_sleepy_app_list__2;
return __GT_sleepy_app_list;
})()
;

var ufv___51186 = schema.utils.use_fn_validation;
var output_schema51174_51187 = schema.core.Any;
var input_schema51175_51188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51176_51189 = schema.core.checker.call(null,input_schema51175_51188);
var output_checker51177_51190 = schema.core.checker.call(null,output_schema51174_51187);
/**
* Inputs: [app-state owner]
*/
redeyes.core.wake_up_now_button = ((function (ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function wake_up_now_button(G__51178,G__51179){
var validate__8050__auto__ = ufv___51186.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51178,G__51179], null);
var temp__4126__auto___51192 = input_checker51176_51189.call(null,args__8051__auto___51191);
if(cljs.core.truth_(temp__4126__auto___51192)){
var error__8052__auto___51193 = temp__4126__auto___51192;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8052__auto___51193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51193,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51191,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51175_51188,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app_state = G__51178;
var owner = G__51179;
while(true){
if(typeof redeyes.core.t51183 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51183 = (function (output_checker51177,input_schema51175,owner,validate__8050__auto__,G__51179,G__51178,wake_up_now_button,input_checker51176,output_schema51174,app_state,ufv__,meta51184){
this.output_checker51177 = output_checker51177;
this.input_schema51175 = input_schema51175;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.G__51179 = G__51179;
this.G__51178 = G__51178;
this.wake_up_now_button = wake_up_now_button;
this.input_checker51176 = input_checker51176;
this.output_schema51174 = output_schema51174;
this.app_state = app_state;
this.ufv__ = ufv__;
this.meta51184 = meta51184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51183.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51183.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function (_){
var self__ = this;
var ___$1 = this;
return "wake-up-now-button";
});})(validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;

redeyes.core.t51183.prototype.om$core$IRender$ = true;

redeyes.core.t51183.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wake-up-now","wake-up-now",99841662),cljs.core.PersistentArrayMap.EMPTY], null));
});})(___$1,validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;
return redeyes.helpers.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Wake up all apps now!");
});})(validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;

redeyes.core.t51183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function (_51185){
var self__ = this;
var _51185__$1 = this;
return self__.meta51184;
});})(validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;

redeyes.core.t51183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function (_51185,meta51184__$1){
var self__ = this;
var _51185__$1 = this;
return (new redeyes.core.t51183(self__.output_checker51177,self__.input_schema51175,self__.owner,self__.validate__8050__auto__,self__.G__51179,self__.G__51178,self__.wake_up_now_button,self__.input_checker51176,self__.output_schema51174,self__.app_state,self__.ufv__,meta51184__$1));
});})(validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;

redeyes.core.t51183.cljs$lang$type = true;

redeyes.core.t51183.cljs$lang$ctorStr = "redeyes.core/t51183";

redeyes.core.t51183.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51183");
});})(validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;

redeyes.core.__GT_t51183 = ((function (validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190){
return (function __GT_t51183(output_checker51177__$1,input_schema51175__$1,owner__$1,validate__8050__auto____$1,G__51179__$1,G__51178__$1,wake_up_now_button__$1,input_checker51176__$1,output_schema51174__$1,app_state__$1,ufv____$1,meta51184){
return (new redeyes.core.t51183(output_checker51177__$1,input_schema51175__$1,owner__$1,validate__8050__auto____$1,G__51179__$1,G__51178__$1,wake_up_now_button__$1,input_checker51176__$1,output_schema51174__$1,app_state__$1,ufv____$1,meta51184));
});})(validate__8050__auto__,ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;

}

return (new redeyes.core.t51183(output_checker51177_51190,input_schema51175_51188,owner,validate__8050__auto__,G__51179,G__51178,wake_up_now_button,input_checker51176_51189,output_schema51174_51187,app_state,ufv___51186,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51194 = output_checker51177_51190.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51194)){
var error__8052__auto___51195 = temp__4126__auto___51194;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"wake-up-now-button","wake-up-now-button",171873651,null),cljs.core.pr_str.call(null,error__8052__auto___51195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51195,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51174_51187,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51186,output_schema51174_51187,input_schema51175_51188,input_checker51176_51189,output_checker51177_51190))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.wake_up_now_button),schema.core.make_fn_schema.call(null,output_schema51174_51187,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51175_51188], null)));

redeyes.core.__GT_wake_up_now_button = (function() {
var __GT_wake_up_now_button = null;
var __GT_wake_up_now_button__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9838__auto__);
});
var __GT_wake_up_now_button__2 = (function (cursor__9838__auto__,m51173){
return om.core.build.call(null,redeyes.core.wake_up_now_button,cursor__9838__auto__,m51173);
});
__GT_wake_up_now_button = function(cursor__9838__auto__,m51173){
switch(arguments.length){
case 1:
return __GT_wake_up_now_button__1.call(this,cursor__9838__auto__);
case 2:
return __GT_wake_up_now_button__2.call(this,cursor__9838__auto__,m51173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$1 = __GT_wake_up_now_button__1;
__GT_wake_up_now_button.cljs$core$IFn$_invoke$arity$2 = __GT_wake_up_now_button__2;
return __GT_wake_up_now_button;
})()
;

var ufv___51209 = schema.utils.use_fn_validation;
var output_schema51197_51210 = schema.core.Any;
var input_schema51198_51211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51199_51212 = schema.core.checker.call(null,input_schema51198_51211);
var output_checker51200_51213 = schema.core.checker.call(null,output_schema51197_51210);
/**
* Inputs: [app-state owner]
*/
redeyes.core.clear_deactivated_button = ((function (ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function clear_deactivated_button(G__51201,G__51202){
var validate__8050__auto__ = ufv___51209.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51201,G__51202], null);
var temp__4126__auto___51215 = input_checker51199_51212.call(null,args__8051__auto___51214);
if(cljs.core.truth_(temp__4126__auto___51215)){
var error__8052__auto___51216 = temp__4126__auto___51215;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8052__auto___51216)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51216,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51214,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51198_51211,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app_state = G__51201;
var owner = G__51202;
while(true){
if(typeof redeyes.core.t51206 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51206 = (function (input_schema51198,owner,validate__8050__auto__,G__51202,G__51201,input_checker51199,clear_deactivated_button,output_schema51197,output_checker51200,app_state,ufv__,meta51207){
this.input_schema51198 = input_schema51198;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.G__51202 = G__51202;
this.G__51201 = G__51201;
this.input_checker51199 = input_checker51199;
this.clear_deactivated_button = clear_deactivated_button;
this.output_schema51197 = output_schema51197;
this.output_checker51200 = output_checker51200;
this.app_state = app_state;
this.ufv__ = ufv__;
this.meta51207 = meta51207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51206.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51206.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function (_){
var self__ = this;
var ___$1 = this;
return "clear-deactivated-button";
});})(validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;

redeyes.core.t51206.prototype.om$core$IRender$ = true;

redeyes.core.t51206.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function (_){
var self__ = this;
var ___$1 = this;
var handle_button_click = ((function (___$1,validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-deactivated","clear-deactivated",484214381),cljs.core.PersistentArrayMap.EMPTY], null));
});})(___$1,validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;
return redeyes.helpers.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_button_click], null),"Clear deactivated apps");
});})(validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;

redeyes.core.t51206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function (_51208){
var self__ = this;
var _51208__$1 = this;
return self__.meta51207;
});})(validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;

redeyes.core.t51206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function (_51208,meta51207__$1){
var self__ = this;
var _51208__$1 = this;
return (new redeyes.core.t51206(self__.input_schema51198,self__.owner,self__.validate__8050__auto__,self__.G__51202,self__.G__51201,self__.input_checker51199,self__.clear_deactivated_button,self__.output_schema51197,self__.output_checker51200,self__.app_state,self__.ufv__,meta51207__$1));
});})(validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;

redeyes.core.t51206.cljs$lang$type = true;

redeyes.core.t51206.cljs$lang$ctorStr = "redeyes.core/t51206";

redeyes.core.t51206.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51206");
});})(validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;

redeyes.core.__GT_t51206 = ((function (validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213){
return (function __GT_t51206(input_schema51198__$1,owner__$1,validate__8050__auto____$1,G__51202__$1,G__51201__$1,input_checker51199__$1,clear_deactivated_button__$1,output_schema51197__$1,output_checker51200__$1,app_state__$1,ufv____$1,meta51207){
return (new redeyes.core.t51206(input_schema51198__$1,owner__$1,validate__8050__auto____$1,G__51202__$1,G__51201__$1,input_checker51199__$1,clear_deactivated_button__$1,output_schema51197__$1,output_checker51200__$1,app_state__$1,ufv____$1,meta51207));
});})(validate__8050__auto__,ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;

}

return (new redeyes.core.t51206(input_schema51198_51211,owner,validate__8050__auto__,G__51202,G__51201,input_checker51199_51212,clear_deactivated_button,output_schema51197_51210,output_checker51200_51213,app_state,ufv___51209,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51217 = output_checker51200_51213.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51217)){
var error__8052__auto___51218 = temp__4126__auto___51217;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clear-deactivated-button","clear-deactivated-button",-1567232053,null),cljs.core.pr_str.call(null,error__8052__auto___51218)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51218,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51197_51210,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51209,output_schema51197_51210,input_schema51198_51211,input_checker51199_51212,output_checker51200_51213))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.clear_deactivated_button),schema.core.make_fn_schema.call(null,output_schema51197_51210,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51198_51211], null)));

redeyes.core.__GT_clear_deactivated_button = (function() {
var __GT_clear_deactivated_button = null;
var __GT_clear_deactivated_button__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9838__auto__);
});
var __GT_clear_deactivated_button__2 = (function (cursor__9838__auto__,m51196){
return om.core.build.call(null,redeyes.core.clear_deactivated_button,cursor__9838__auto__,m51196);
});
__GT_clear_deactivated_button = function(cursor__9838__auto__,m51196){
switch(arguments.length){
case 1:
return __GT_clear_deactivated_button__1.call(this,cursor__9838__auto__);
case 2:
return __GT_clear_deactivated_button__2.call(this,cursor__9838__auto__,m51196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$1 = __GT_clear_deactivated_button__1;
__GT_clear_deactivated_button.cljs$core$IFn$_invoke$arity$2 = __GT_clear_deactivated_button__2;
return __GT_clear_deactivated_button;
})()
;

var ufv___51278 = schema.utils.use_fn_validation;
var output_schema51220_51279 = schema.core.Any;
var input_schema51221_51280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker51222_51281 = schema.core.checker.call(null,input_schema51221_51280);
var output_checker51223_51282 = schema.core.checker.call(null,output_schema51220_51279);
/**
* Inputs: [app-state owner]
* 
* Root component for the app
*/
redeyes.core.redeyes_app = ((function (ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function redeyes_app(G__51224,G__51225){
var validate__8050__auto__ = ufv___51278.get_cell();
if(cljs.core.truth_(validate__8050__auto__)){
var args__8051__auto___51283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51224,G__51225], null);
var temp__4126__auto___51284 = input_checker51222_51281.call(null,args__8051__auto___51283);
if(cljs.core.truth_(temp__4126__auto___51284)){
var error__8052__auto___51285 = temp__4126__auto___51284;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8052__auto___51285)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51285,new cljs.core.Keyword(null,"value","value",305978217),args__8051__auto___51283,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51221_51280,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8053__auto__ = (function (){var app_state = G__51224;
var owner = G__51225;
while(true){
if(typeof redeyes.core.t51252 !== 'undefined'){
} else {

/**
* @constructor
*/
redeyes.core.t51252 = (function (input_checker51222,owner,validate__8050__auto__,redeyes_app,output_schema51220,G__51224,output_checker51223,G__51225,app_state,ufv__,input_schema51221,meta51253){
this.input_checker51222 = input_checker51222;
this.owner = owner;
this.validate__8050__auto__ = validate__8050__auto__;
this.redeyes_app = redeyes_app;
this.output_schema51220 = output_schema51220;
this.G__51224 = G__51224;
this.output_checker51223 = output_checker51223;
this.G__51225 = G__51225;
this.app_state = app_state;
this.ufv__ = ufv__;
this.input_schema51221 = input_schema51221;
this.meta51253 = meta51253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
redeyes.core.t51252.prototype.om$core$IDisplayName$ = true;

redeyes.core.t51252.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (_){
var self__ = this;
var ___$1 = this;
return "redeyes-app";
});})(validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

redeyes.core.t51252.prototype.om$core$IRender$ = true;

redeyes.core.t51252.prototype.om$core$IRender$render$arity$1 = ((function (validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h1(null,"Apps to wake up"),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.hr(null),om.core.build.call(null,redeyes.core.new_sleepy_app_form,cljs.core.PersistentArrayMap.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "sleepy-app-list"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,redeyes.core.sleepy_app_list,new cljs.core.Keyword(null,"apps","apps",844744865).cljs$core$IFn$_invoke$arity$1(self__.app_state))],null)))),redeyes.helpers.button_group.call(null,om.core.build.call(null,redeyes.core.wake_up_now_button,self__.app_state),om.core.build.call(null,redeyes.core.clear_deactivated_button,self__.app_state))],null)));
});})(validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

redeyes.core.t51252.prototype.om$core$IWillMount$ = true;

redeyes.core.t51252.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (_){
var self__ = this;
var ___$1 = this;
var bus = new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));
redeyes.api.fetch_data.call(null,self__.app_state);

var c__11113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (state_51266){
var state_val_51267 = (state_51266[(1)]);
if((state_val_51267 === (4))){
var inst_51258 = (state_51266[(2)]);
var inst_51259 = cljs.core.nth.call(null,inst_51258,(0),null);
var inst_51260 = cljs.core.nth.call(null,inst_51258,(1),null);
var inst_51261 = redeyes.core.dispatch.call(null,inst_51259,inst_51260,self__.app_state);
var state_51266__$1 = (function (){var statearr_51268 = state_51266;
(statearr_51268[(7)] = inst_51261);

return statearr_51268;
})();
var statearr_51269_51286 = state_51266__$1;
(statearr_51269_51286[(2)] = null);

(statearr_51269_51286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51267 === (3))){
var inst_51264 = (state_51266[(2)]);
var state_51266__$1 = state_51266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51266__$1,inst_51264);
} else {
if((state_val_51267 === (2))){
var state_51266__$1 = state_51266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51266__$1,(4),bus);
} else {
if((state_val_51267 === (1))){
var state_51266__$1 = state_51266;
var statearr_51270_51287 = state_51266__$1;
(statearr_51270_51287[(2)] = null);

(statearr_51270_51287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;
return ((function (switch__11098__auto__,c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_51274 = [null,null,null,null,null,null,null,null];
(statearr_51274[(0)] = state_machine__11099__auto__);

(statearr_51274[(1)] = (1));

return statearr_51274;
});
var state_machine__11099__auto____1 = (function (state_51266){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_51266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e51275){if((e51275 instanceof Object)){
var ex__11102__auto__ = e51275;
var statearr_51276_51288 = state_51266;
(statearr_51276_51288[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51289 = state_51266;
state_51266 = G__51289;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_51266){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_51266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
})();
var state__11115__auto__ = (function (){var statearr_51277 = f__11114__auto__.call(null);
(statearr_51277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_51277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto__,bus,___$1,validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
);

return c__11113__auto__;
});})(validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

redeyes.core.t51252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (_51254){
var self__ = this;
var _51254__$1 = this;
return self__.meta51253;
});})(validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

redeyes.core.t51252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (_51254,meta51253__$1){
var self__ = this;
var _51254__$1 = this;
return (new redeyes.core.t51252(self__.input_checker51222,self__.owner,self__.validate__8050__auto__,self__.redeyes_app,self__.output_schema51220,self__.G__51224,self__.output_checker51223,self__.G__51225,self__.app_state,self__.ufv__,self__.input_schema51221,meta51253__$1));
});})(validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

redeyes.core.t51252.cljs$lang$type = true;

redeyes.core.t51252.cljs$lang$ctorStr = "redeyes.core/t51252";

redeyes.core.t51252.cljs$lang$ctorPrWriter = ((function (validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"redeyes.core/t51252");
});})(validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

redeyes.core.__GT_t51252 = ((function (validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282){
return (function __GT_t51252(input_checker51222__$1,owner__$1,validate__8050__auto____$1,redeyes_app__$1,output_schema51220__$1,G__51224__$1,output_checker51223__$1,G__51225__$1,app_state__$1,ufv____$1,input_schema51221__$1,meta51253){
return (new redeyes.core.t51252(input_checker51222__$1,owner__$1,validate__8050__auto____$1,redeyes_app__$1,output_schema51220__$1,G__51224__$1,output_checker51223__$1,G__51225__$1,app_state__$1,ufv____$1,input_schema51221__$1,meta51253));
});})(validate__8050__auto__,ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

}

return (new redeyes.core.t51252(input_checker51222_51281,owner,validate__8050__auto__,redeyes_app,output_schema51220_51279,G__51224,output_checker51223_51282,G__51225,app_state,ufv___51278,input_schema51221_51280,null));
break;
}
})();
if(cljs.core.truth_(validate__8050__auto__)){
var temp__4126__auto___51290 = output_checker51223_51282.call(null,o__8053__auto__);
if(cljs.core.truth_(temp__4126__auto___51290)){
var error__8052__auto___51291 = temp__4126__auto___51290;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"redeyes-app","redeyes-app",-1794386648,null),cljs.core.pr_str.call(null,error__8052__auto___51291)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8052__auto___51291,new cljs.core.Keyword(null,"value","value",305978217),o__8053__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51220_51279,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8053__auto__;
});})(ufv___51278,output_schema51220_51279,input_schema51221_51280,input_checker51222_51281,output_checker51223_51282))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,redeyes.core.redeyes_app),schema.core.make_fn_schema.call(null,output_schema51220_51279,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51221_51280], null)));

redeyes.core.__GT_redeyes_app = (function() {
var __GT_redeyes_app = null;
var __GT_redeyes_app__1 = (function (cursor__9838__auto__){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9838__auto__);
});
var __GT_redeyes_app__2 = (function (cursor__9838__auto__,m51219){
return om.core.build.call(null,redeyes.core.redeyes_app,cursor__9838__auto__,m51219);
});
__GT_redeyes_app = function(cursor__9838__auto__,m51219){
switch(arguments.length){
case 1:
return __GT_redeyes_app__1.call(this,cursor__9838__auto__);
case 2:
return __GT_redeyes_app__2.call(this,cursor__9838__auto__,m51219);
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
