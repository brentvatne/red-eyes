// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.util');
goog.require('cljs.core');
goog.require('om_tools.dom');
redeyes.util.input_with_addons = (function input_with_addons(opts,input){
return cljs.core.apply.call(null,React.DOM.div,{"className": "form-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"text","text",-1790561697)], null))],null)))),input,cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"onClick","onClick",-1991238530)], null))), "className": "btn btn-default input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"text","text",-1790561697)], null))],null))))],null))))],null))));
});
redeyes.util.button = (function button(opts,text){
return cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"onClick","onClick",-1991238530).cljs$core$IFn$_invoke$arity$1(opts)), "className": "btn btn-default"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[text],null))));
});
/**
* @param {...*} var_args
*/
redeyes.util.button_group = (function() { 
var button_group__delegate = function (buttons){
return cljs.core.apply.call(null,React.DOM.div,{"className": "btn-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[buttons],null))));
};
var button_group = function (var_args){
var buttons = null;
if (arguments.length > 0) {
  buttons = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return button_group__delegate.call(this,buttons);};
button_group.cljs$lang$maxFixedArity = 0;
button_group.cljs$lang$applyTo = (function (arglist__26802){
var buttons = cljs.core.seq(arglist__26802);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes));
};
var css_classes = function (var_args){
var classes = null;
if (arguments.length > 0) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return css_classes__delegate.call(this,classes);};
css_classes.cljs$lang$maxFixedArity = 0;
css_classes.cljs$lang$applyTo = (function (arglist__26803){
var classes = cljs.core.seq(arglist__26803);
return css_classes__delegate(classes);
});
css_classes.cljs$core$IFn$_invoke$arity$variadic = css_classes__delegate;
return css_classes;
})()
;
redeyes.util.active_QMARK_ = (function active_QMARK_(app){
return cljs.core._EQ_.call(null,true,cljs.core.get.call(null,app,"active"));
});
redeyes.util.log = (function log(msg){
return console.log(msg);
});
redeyes.util.log_clj = (function log_clj(obj){
return redeyes.util.log.call(null,cljs.core.clj__GT_js.call(null,obj));
});
