// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('redeyes.api');
goog.require('reagent.core');
redeyes.core.data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
redeyes.core.css_classes = (function() { 
var css_classes__delegate = function (classes){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes));
};
var css_classes = function (var_args){
var classes = null;
if (arguments.length > 0) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return css_classes__delegate.call(this,classes);};
css_classes.cljs$lang$maxFixedArity = 0;
css_classes.cljs$lang$applyTo = (function (arglist__7188){
var classes = cljs.core.seq(arglist__7188);
return css_classes__delegate(classes);
});
css_classes.cljs$core$IFn$_invoke$arity$variadic = css_classes__delegate;
return css_classes;
})()
;
redeyes.core.active_QMARK_ = (function active_QMARK_(app){
return cljs.core._EQ_.call(null,true,cljs.core.get.call(null,app,"active"));
});
redeyes.core.fetch_data = (function fetch_data(callback){
return redeyes.api.fetch_data.call(null,redeyes.core.data,callback);
});
redeyes.core.update_app = (function update_app(apps,app,opts){
return cljs.core.map.call(null,(function (p1__7189_SHARP_){
if(cljs.core._EQ_.call(null,p1__7189_SHARP_,app)){
return cljs.core.merge.call(null,p1__7189_SHARP_,opts);
} else {
return cljs.core.identity.call(null,p1__7189_SHARP_);
}
}),apps);
});
redeyes.core.remove_apps = (function remove_apps(apps,apps_to_remove){
return cljs.core.filter.call(null,(function (p1__7190_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__7190_SHARP_], true),apps_to_remove));
}),apps);
});
redeyes.core.activate = (function activate(app){
cljs.core.swap_BANG_.call(null,redeyes.core.data,redeyes.core.update_app,app,new cljs.core.PersistentArrayMap(null, 1, ["active",true], null));

return redeyes.api.persist_active_status.call(null,app);
});
redeyes.core.deactivate = (function deactivate(app){
cljs.core.swap_BANG_.call(null,redeyes.core.data,redeyes.core.update_app,app,new cljs.core.PersistentArrayMap(null, 1, ["active",false], null));

return redeyes.api.persist_inactive_status.call(null,app);
});
redeyes.core.update_active_status = (function update_active_status(e,app){
if(cljs.core.truth_(e.target.checked)){
return redeyes.core.activate.call(null,app);
} else {
return redeyes.core.deactivate.call(null,app);
}
});
redeyes.core.sleepy_app_checkbox = (function sleepy_app_checkbox(app){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),redeyes.core.active_QMARK_.call(null,app),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return redeyes.core.update_active_status.call(null,e,app);
})], null)], null);
});
redeyes.core.wake_up_all_button = (function wake_up_all_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return redeyes.api.wake_all.call(null,redeyes.core.fetch_data);
})], null),"Wake up all apps now"], null);
});
});
redeyes.core.inactive_apps = (function inactive_apps(){
return cljs.core.filter.call(null,cljs.core.complement.call(null,redeyes.core.active_QMARK_),cljs.core.deref.call(null,redeyes.core.data));
});
redeyes.core.clear_deactivated_button = (function clear_deactivated_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

redeyes.api.clear_deactivated.call(null,redeyes.core.fetch_data);

return cljs.core.swap_BANG_.call(null,redeyes.core.data,redeyes.core.remove_apps,redeyes.core.inactive_apps.call(null));
})], null),"Clear deactivated"], null);
});
});
redeyes.core.handle_submit_new_app = (function handle_submit_new_app(e,new_url){
e.preventDefault();

redeyes.api.submit_new_app.call(null,cljs.core.deref.call(null,new_url),redeyes.core.fetch_data);

return cljs.core.reset_BANG_.call(null,new_url,"");
});
redeyes.core.new_url_input = (function new_url_input(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group-addon"], null),"http://"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"URL here please!",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),"sleepy-app-url",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7191_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__7191_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default input-group-addon",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return redeyes.core.handle_submit_new_app.call(null,e,value);
})], null),"Add site"], null)], null)], null);
});
redeyes.core.new_sleepy_app_form = (function new_sleepy_app_form(){
var url_input_text = reagent.core.atom.call(null,"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-sleepy-app-form form-inline",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (url_input_text){
return (function (e){
return redeyes.core.handle_submit_new_app.call(null,e,url_input_text);
});})(url_input_text))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.new_url_input,url_input_text], null)], null);
});
redeyes.core.sleepy_app = (function sleepy_app(app){
var url = cljs.core.get.call(null,app,"url");
var last_wake_up = cljs.core.get.call(null,app,"lastWokenUpAt");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),redeyes.core.css_classes.call(null,"sleepy-app",((redeyes.core.active_QMARK_.call(null,app))?"active":null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sleepy-app-active-col"], null),redeyes.core.sleepy_app_checkbox.call(null,app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((last_wake_up == null))?"Never by us":last_wake_up)], null)], null);
});
redeyes.core.sleepy_app_list = (function sleepy_app_list(){
var apps = cljs.core.deref.call(null,redeyes.core.data);
if(cljs.core.empty_QMARK_.call(null,apps)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No apps"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sleepy-app-active-col"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4394__auto__ = ((function (apps){
return (function iter__7196(s__7197){
return (new cljs.core.LazySeq(null,((function (apps){
return (function (){
var s__7197__$1 = s__7197;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7197__$1);
if(temp__4126__auto__){
var s__7197__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7197__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__7197__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__7199 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__7198 = (0);
while(true){
if((i__7198 < size__4393__auto__)){
var app = cljs.core._nth.call(null,c__4392__auto__,i__7198);
cljs.core.chunk_append.call(null,b__7199,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.sleepy_app,app], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),app], null)));

var G__7200 = (i__7198 + (1));
i__7198 = G__7200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7199),iter__7196.call(null,cljs.core.chunk_rest.call(null,s__7197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7199),null);
}
} else {
var app = cljs.core.first.call(null,s__7197__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.sleepy_app,app], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),app], null)),iter__7196.call(null,cljs.core.rest.call(null,s__7197__$2)));
}
} else {
return null;
}
break;
}
});})(apps))
,null,null));
});})(apps))
;
return iter__4394__auto__.call(null,apps);
})()], null)], null)], null);
}
});
redeyes.core.redeyes = (function redeyes__$1(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Apps to wake up"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.new_sleepy_app_form], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sleepy-app-list"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.sleepy_app_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.wake_up_all_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.clear_deactivated_button], null)], null)], null)], null);
});
redeyes.core.render_app = (function render_app(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.redeyes], null),document.getElementById("app"));
});
redeyes.core.fetch_data.call(null,redeyes.core.render_app);
