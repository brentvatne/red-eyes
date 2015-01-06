// Compiled by ClojureScript 0.0-2511
goog.provide('myproject.core.test');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
goog.require('myproject.core');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('om.core');
goog.require('redeyes.test_helper');
cljs.core.enable_console_print_BANG_.call(null);
myproject.core.test.child_component_test = (function child_component_test(){
return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),myproject.core.test.child_component_test);
});

myproject.core.test.child_component_test = cljs.core.with_meta.call(null,myproject.core.test.child_component_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),31,new cljs.core.Keyword(null,"end-line","end-line",1837326455),13,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/test/core.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("myproject.core.test","child-component-test","myproject.core.test/child-component-test",231265285,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),31,new cljs.core.Keyword(null,"end-line","end-line",1837326455),13,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/test/core.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function child_component_test_test(test_ctx__12005__auto__){
var _test_ctx = test_ctx__12005__auto__;
var async_QMARK___11920__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));
var _STAR_test_ctx_STAR_12345 = cemerick.cljs.test._STAR_test_ctx_STAR_;
try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11920__auto__)?null:_test_ctx);

try{var _test_ctx__$1 = _test_ctx;
var async_QMARK___11920__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));
var _STAR_test_ctx_STAR_12347 = cemerick.cljs.test._STAR_test_ctx_STAR_;
try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11920__auto____$1)?null:_test_ctx__$1);

try{try{var values__11940__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hi, I am Some name!"),redeyes.test_helper.om__GT_$.call(null,myproject.core.child_component,"Some name").text());
var result__11941__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__11940__auto__);
if((result__11941__auto__ instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__11941__auto__)){
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,".text",".text",-1996712275,null),cljs.core.list(new cljs.core.Symbol(null,"om->$","om->$",-332208109,null),new cljs.core.Symbol("subject","child-component","subject/child-component",-1397938962,null),"Some name")),"Hi, I am Some name!"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__11940__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,".text",".text",-1996712275,null),cljs.core.list(new cljs.core.Symbol(null,"om->$","om->$",-332208109,null),new cljs.core.Symbol("subject","child-component","subject/child-component",-1397938962,null),"Some name")),"Hi, I am Some name!"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11940__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11941__auto__;
}catch (e12349){if((e12349 instanceof Error)){
var t__11977__auto__ = e12349;
return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,".text",".text",-1996712275,null),cljs.core.list(new cljs.core.Symbol(null,"om->$","om->$",-332208109,null),new cljs.core.Symbol("subject","child-component","subject/child-component",-1397938962,null),"Some name")),"Hi, I am Some name!"),new cljs.core.Keyword(null,"actual","actual",107306363),t__11977__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
throw e12349;

}
}}catch (e12348){if((e12348 instanceof Error)){
var e__11921__auto__ = e12348;
if(cljs.core.truth_(async_QMARK___11920__auto____$1)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__11921__auto__);
} else {
throw e__11921__auto__;
}
} else {
throw e12348;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_12347;
}}catch (e12346){if((e12346 instanceof Error)){
var e__11921__auto__ = e12346;
if(cljs.core.truth_(async_QMARK___11920__auto__)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__11921__auto__);
} else {
throw e__11921__auto__;
}
} else {
throw e12346;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_12345;
}})], null)));

cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"myproject.core.test","myproject.core.test",1257198318,null),new cljs.core.Symbol("myproject.core.test","child-component-test","myproject.core.test/child-component-test",231265285,null),myproject.core.test.child_component_test);

myproject.core.test.parent_component = (function parent_component(){
return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),myproject.core.test.parent_component);
});

myproject.core.test.parent_component = cljs.core.with_meta.call(null,myproject.core.test.parent_component,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),27,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/test/core.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("myproject.core.test","parent-component","myproject.core.test/parent-component",463453203,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),27,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/test/core.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function parent_component_test(test_ctx__12005__auto__){
var _test_ctx = test_ctx__12005__auto__;
var async_QMARK___11920__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));
var _STAR_test_ctx_STAR_12355 = cemerick.cljs.test._STAR_test_ctx_STAR_;
try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11920__auto__)?null:_test_ctx);

try{var _test_ctx__$1 = _test_ctx;
var async_QMARK___11920__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));
var _STAR_test_ctx_STAR_12357 = cemerick.cljs.test._STAR_test_ctx_STAR_;
try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11920__auto____$1)?null:_test_ctx__$1);

try{try{var values__11940__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hi, I am Brent!"),redeyes.test_helper.om__GT_$.call(null,myproject.core.parent_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brent",new cljs.core.Keyword(null,"age","age",-604307804),(28)], null)).text());
var result__11941__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__11940__auto__);
if((result__11941__auto__ instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__11941__auto__)){
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,".text",".text",-1996712275,null),cljs.core.list(new cljs.core.Symbol(null,"om->$","om->$",-332208109,null),new cljs.core.Symbol("subject","parent-component","subject/parent-component",696448903,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brent",new cljs.core.Keyword(null,"age","age",-604307804),(28)], null))),"Hi, I am Brent!"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__11940__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,".text",".text",-1996712275,null),cljs.core.list(new cljs.core.Symbol(null,"om->$","om->$",-332208109,null),new cljs.core.Symbol("subject","parent-component","subject/parent-component",696448903,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brent",new cljs.core.Keyword(null,"age","age",-604307804),(28)], null))),"Hi, I am Brent!"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11940__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11941__auto__;
}catch (e12359){if((e12359 instanceof Error)){
var t__11977__auto__ = e12359;
return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,".text",".text",-1996712275,null),cljs.core.list(new cljs.core.Symbol(null,"om->$","om->$",-332208109,null),new cljs.core.Symbol("subject","parent-component","subject/parent-component",696448903,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Brent",new cljs.core.Keyword(null,"age","age",-604307804),(28)], null))),"Hi, I am Brent!"),new cljs.core.Keyword(null,"actual","actual",107306363),t__11977__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
throw e12359;

}
}}catch (e12358){if((e12358 instanceof Error)){
var e__11921__auto__ = e12358;
if(cljs.core.truth_(async_QMARK___11920__auto____$1)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__11921__auto__);
} else {
throw e__11921__auto__;
}
} else {
throw e12358;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_12357;
}}catch (e12356){if((e12356 instanceof Error)){
var e__11921__auto__ = e12356;
if(cljs.core.truth_(async_QMARK___11920__auto__)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__11921__auto__);
} else {
throw e__11921__auto__;
}
} else {
throw e12356;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_12355;
}})], null)));

cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"myproject.core.test","myproject.core.test",1257198318,null),new cljs.core.Symbol("myproject.core.test","parent-component","myproject.core.test/parent-component",463453203,null),myproject.core.test.parent_component);

cemerick.cljs.test.run_tests_STAR_.call(null,new cljs.core.Symbol(null,"myproject.core.test","myproject.core.test",1257198318,null));
