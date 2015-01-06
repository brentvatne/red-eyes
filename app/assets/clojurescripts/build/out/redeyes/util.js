// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.util');
goog.require('cljs.core');
goog.require('om_tools.dom');
redeyes.util.input_with_addons = (function input_with_addons(opts,input){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "form-group"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "input-group"},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "input-group-addon"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$106], null))],null)))),input,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,{"onClick": om_tools.dom.format_opts(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105,cljs.core.constant$keyword$107], null))), "className": "btn btn-default input-group-addon"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105,cljs.core.constant$keyword$106], null))],null))))],null))))],null))));
});
redeyes.util.button = (function button(opts,text){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,{"onClick": om_tools.dom.format_opts(cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(opts)), "className": "btn btn-default"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[text],null))));
});
/**
* @param {...*} var_args
*/
redeyes.util.button_group = (function() { 
var button_group__delegate = function (buttons){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "btn-group"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[buttons],null))));
};
var button_group = function (var_args){
var buttons = null;
if (arguments.length > 0) {
  buttons = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return button_group__delegate.call(this,buttons);};
button_group.cljs$lang$maxFixedArity = 0;
button_group.cljs$lang$applyTo = (function (arglist__20510){
var buttons = cljs.core.seq(arglist__20510);
return button_group__delegate(buttons);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;
/**
* @param {...*} var_args
*/
redeyes.util.css_classes = (function() { 
var css_classes__delegate = function (classes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",classes));
};
var css_classes = function (var_args){
var classes = null;
if (arguments.length > 0) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return css_classes__delegate.call(this,classes);};
css_classes.cljs$lang$maxFixedArity = 0;
css_classes.cljs$lang$applyTo = (function (arglist__20511){
var classes = cljs.core.seq(arglist__20511);
return css_classes__delegate(classes);
});
css_classes.cljs$core$IFn$_invoke$arity$variadic = css_classes__delegate;
return css_classes;
})()
;
redeyes.util.active_QMARK_ = (function active_QMARK_(app){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app,"active"));
});
redeyes.util.log = (function log(msg){
return console.log(msg);
});
redeyes.util.log_clj = (function log_clj(obj){
return redeyes.util.log(cljs.core.clj__GT_js(obj));
});
