// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.core');
goog.require('cljs.core');
goog.require('jayq.core');
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
css_classes.cljs$lang$applyTo = (function (arglist__6396){
var classes = cljs.core.seq(arglist__6396);
return css_classes__delegate(classes);
});
css_classes.cljs$core$IFn$_invoke$arity$variadic = css_classes__delegate;
return css_classes;
})()
;
redeyes.core.fetch_data = (function fetch_data(callback){
return jayq.core.ajax.call(null,"http://red-eyes.dev/sleepy_apps",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"success","success",1890645906),(function (new_data){
cljs.core.swap_BANG_.call(null,redeyes.core.data,cljs.core.replace,new_data);

console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,redeyes.core.data)));

if((callback == null)){
return null;
} else {
return callback.call(null);
}
})], null));
});
redeyes.core.persist_active_status = (function persist_active_status(app,callback){
return jayq.core.ajax.call(null,[cljs.core.str("http://red-eyes.dev/sleepy_apps/"),cljs.core.str(app.id),cljs.core.str("/activate")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"success","success",1890645906),(function (){
return callback.call(null);
})], null));
});
redeyes.core.persist_inactive_status = (function persist_inactive_status(app,callback){
return jayq.core.ajax.call(null,[cljs.core.str("http://red-eyes.dev/sleepy_apps/"),cljs.core.str(app.id),cljs.core.str("/deactivate")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataType","dataType",1069893619),"json",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"success","success",1890645906),(function (){
return callback.call(null);
})], null));
});
redeyes.core.active_QMARK_ = (function active_QMARK_(app){
return cljs.core._EQ_.call(null,true,app.active);
});
redeyes.core.debugger$ = (function debugger$(){
return eval("debugger");
});
redeyes.core.update_active_status = (function update_active_status(e,app){
if(cljs.core.truth_(e.target.checked)){
redeyes.core.persist_active_status.call(null,app,redeyes.core.fetch_data);
} else {
redeyes.core.persist_inactive_status.call(null,app,redeyes.core.fetch_data);
}

return console.log(app);
});
redeyes.core.render_app = (function render_app(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.redeyes], null),document.getElementById("app"));
});
redeyes.core.redeyes = cljs.core.with_meta.call(null,(function (){
var apps = cljs.core.deref.call(null,redeyes.core.data);
if(cljs.core.empty_QMARK_.call(null,apps)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No apps"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var iter__4394__auto__ = ((function (apps){
return (function iter__6397(s__6398){
return (new cljs.core.LazySeq(null,((function (apps){
return (function (){
var s__6398__$1 = s__6398;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6398__$1);
if(temp__4126__auto__){
var s__6398__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6398__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__6398__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__6400 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__6399 = (0);
while(true){
if((i__6399 < size__4393__auto__)){
var app = cljs.core._nth.call(null,c__4392__auto__,i__6399);
cljs.core.chunk_append.call(null,b__6400,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.sleepy_app,app], null));

var G__6401 = (i__6399 + (1));
i__6399 = G__6401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6400),iter__6397.call(null,cljs.core.chunk_rest.call(null,s__6398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6400),null);
}
} else {
var app = cljs.core.first.call(null,s__6398__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [redeyes.core.sleepy_app,app], null),iter__6397.call(null,cljs.core.rest.call(null,s__6398__$2)));
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
})()], null);
}
}));
redeyes.core.sleepy_app = (function sleepy_app(app){
var url = app.url;
var last_wake_up = app.lastWokenUpAt;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),redeyes.core.css_classes.call(null,"sleepy-app",((redeyes.core.active_QMARK_.call(null,app))?"active":null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sleepy-app-active-col"], null),redeyes.core.sleepy_app_checkbox.call(null,app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),url], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((last_wake_up == null))?"Never by us":last_wake_up)], null)], null);
});
redeyes.core.sleepy_app_checkbox = (function sleepy_app_checkbox(app){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),redeyes.core.active_QMARK_.call(null,app),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return redeyes.core.update_active_status.call(null,e,app);
})], null)], null);
});
redeyes.core.fetch_data.call(null,redeyes.core.render_app);
