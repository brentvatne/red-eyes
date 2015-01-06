// Compiled by ClojureScript 0.0-2511
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){
if(cljs.core.truth_((function (){var or__3636__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__3636__auto__){
return or__3636__auto__;
} else {
var G__16481 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__16481) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){
var G__16484 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__16484) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
* Returns potentially formatted name for DOM element attribute.
* Converts kebab-case to camelCase.
*/
om_tools.dom.format_opt_key = (function format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
* Returns potentially modified value for DOM element attribute.
* Recursively formats map values (ie :style attribute)
*/
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16488){
var vec__16489 = p__16488;
var k = cljs.core.nth.call(null,vec__16489,(0),null);
var v = cljs.core.nth.call(null,vec__16489,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function valid_element_QMARK_(x){
return (function (){var or__3636__auto__ = React.isValidElement;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
* Returns a vector of [opts children] for from first and second
* argument given to DOM function
*/
om_tools.dom.element_args = (function element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){
var vec__16491 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__16491,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__16491,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
/**
* @param {...*} var_args
*/
om_tools.dom.a = (function() {
var a = null;
var a__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});
var a__2 = (function() { 
var G__16492__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__7808__auto__,children__7809__auto__);
};
var G__16492 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16492__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16492.cljs$lang$maxFixedArity = 1;
G__16492.cljs$lang$applyTo = (function (arglist__16493){
var opts__7808__auto__ = cljs.core.first(arglist__16493);
var children__7809__auto__ = cljs.core.rest(arglist__16493);
return G__16492__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16492.cljs$core$IFn$_invoke$arity$variadic = G__16492__delegate;
return G__16492;
})()
;
a = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return a__0.call(this);
default:
return a__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
a.cljs$lang$maxFixedArity = 1;
a.cljs$lang$applyTo = a__2.cljs$lang$applyTo;
a.cljs$core$IFn$_invoke$arity$0 = a__0;
a.cljs$core$IFn$_invoke$arity$variadic = a__2.cljs$core$IFn$_invoke$arity$variadic;
return a;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.abbr = (function() {
var abbr = null;
var abbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});
var abbr__2 = (function() { 
var G__16494__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__7808__auto__,children__7809__auto__);
};
var G__16494 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16494__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16494.cljs$lang$maxFixedArity = 1;
G__16494.cljs$lang$applyTo = (function (arglist__16495){
var opts__7808__auto__ = cljs.core.first(arglist__16495);
var children__7809__auto__ = cljs.core.rest(arglist__16495);
return G__16494__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16494.cljs$core$IFn$_invoke$arity$variadic = G__16494__delegate;
return G__16494;
})()
;
abbr = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return abbr__0.call(this);
default:
return abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
abbr.cljs$lang$maxFixedArity = 1;
abbr.cljs$lang$applyTo = abbr__2.cljs$lang$applyTo;
abbr.cljs$core$IFn$_invoke$arity$0 = abbr__0;
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__2.cljs$core$IFn$_invoke$arity$variadic;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.address = (function() {
var address = null;
var address__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});
var address__2 = (function() { 
var G__16496__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__7808__auto__,children__7809__auto__);
};
var G__16496 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16496__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16496.cljs$lang$maxFixedArity = 1;
G__16496.cljs$lang$applyTo = (function (arglist__16497){
var opts__7808__auto__ = cljs.core.first(arglist__16497);
var children__7809__auto__ = cljs.core.rest(arglist__16497);
return G__16496__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16496.cljs$core$IFn$_invoke$arity$variadic = G__16496__delegate;
return G__16496;
})()
;
address = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return address__0.call(this);
default:
return address__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
address.cljs$lang$maxFixedArity = 1;
address.cljs$lang$applyTo = address__2.cljs$lang$applyTo;
address.cljs$core$IFn$_invoke$arity$0 = address__0;
address.cljs$core$IFn$_invoke$arity$variadic = address__2.cljs$core$IFn$_invoke$arity$variadic;
return address;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.area = (function() {
var area = null;
var area__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});
var area__2 = (function() { 
var G__16498__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__7808__auto__,children__7809__auto__);
};
var G__16498 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16498__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16498.cljs$lang$maxFixedArity = 1;
G__16498.cljs$lang$applyTo = (function (arglist__16499){
var opts__7808__auto__ = cljs.core.first(arglist__16499);
var children__7809__auto__ = cljs.core.rest(arglist__16499);
return G__16498__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16498.cljs$core$IFn$_invoke$arity$variadic = G__16498__delegate;
return G__16498;
})()
;
area = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return area__0.call(this);
default:
return area__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
area.cljs$lang$maxFixedArity = 1;
area.cljs$lang$applyTo = area__2.cljs$lang$applyTo;
area.cljs$core$IFn$_invoke$arity$0 = area__0;
area.cljs$core$IFn$_invoke$arity$variadic = area__2.cljs$core$IFn$_invoke$arity$variadic;
return area;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.article = (function() {
var article = null;
var article__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});
var article__2 = (function() { 
var G__16500__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__7808__auto__,children__7809__auto__);
};
var G__16500 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16500__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16500.cljs$lang$maxFixedArity = 1;
G__16500.cljs$lang$applyTo = (function (arglist__16501){
var opts__7808__auto__ = cljs.core.first(arglist__16501);
var children__7809__auto__ = cljs.core.rest(arglist__16501);
return G__16500__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16500.cljs$core$IFn$_invoke$arity$variadic = G__16500__delegate;
return G__16500;
})()
;
article = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return article__0.call(this);
default:
return article__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
article.cljs$lang$maxFixedArity = 1;
article.cljs$lang$applyTo = article__2.cljs$lang$applyTo;
article.cljs$core$IFn$_invoke$arity$0 = article__0;
article.cljs$core$IFn$_invoke$arity$variadic = article__2.cljs$core$IFn$_invoke$arity$variadic;
return article;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.aside = (function() {
var aside = null;
var aside__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});
var aside__2 = (function() { 
var G__16502__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__7808__auto__,children__7809__auto__);
};
var G__16502 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16502__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16502.cljs$lang$maxFixedArity = 1;
G__16502.cljs$lang$applyTo = (function (arglist__16503){
var opts__7808__auto__ = cljs.core.first(arglist__16503);
var children__7809__auto__ = cljs.core.rest(arglist__16503);
return G__16502__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16502.cljs$core$IFn$_invoke$arity$variadic = G__16502__delegate;
return G__16502;
})()
;
aside = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return aside__0.call(this);
default:
return aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aside.cljs$lang$maxFixedArity = 1;
aside.cljs$lang$applyTo = aside__2.cljs$lang$applyTo;
aside.cljs$core$IFn$_invoke$arity$0 = aside__0;
aside.cljs$core$IFn$_invoke$arity$variadic = aside__2.cljs$core$IFn$_invoke$arity$variadic;
return aside;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.audio = (function() {
var audio = null;
var audio__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});
var audio__2 = (function() { 
var G__16504__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__7808__auto__,children__7809__auto__);
};
var G__16504 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16504__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16504.cljs$lang$maxFixedArity = 1;
G__16504.cljs$lang$applyTo = (function (arglist__16505){
var opts__7808__auto__ = cljs.core.first(arglist__16505);
var children__7809__auto__ = cljs.core.rest(arglist__16505);
return G__16504__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16504.cljs$core$IFn$_invoke$arity$variadic = G__16504__delegate;
return G__16504;
})()
;
audio = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return audio__0.call(this);
default:
return audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
audio.cljs$lang$maxFixedArity = 1;
audio.cljs$lang$applyTo = audio__2.cljs$lang$applyTo;
audio.cljs$core$IFn$_invoke$arity$0 = audio__0;
audio.cljs$core$IFn$_invoke$arity$variadic = audio__2.cljs$core$IFn$_invoke$arity$variadic;
return audio;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.b = (function() {
var b = null;
var b__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});
var b__2 = (function() { 
var G__16506__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__7808__auto__,children__7809__auto__);
};
var G__16506 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16506__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16506.cljs$lang$maxFixedArity = 1;
G__16506.cljs$lang$applyTo = (function (arglist__16507){
var opts__7808__auto__ = cljs.core.first(arglist__16507);
var children__7809__auto__ = cljs.core.rest(arglist__16507);
return G__16506__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16506.cljs$core$IFn$_invoke$arity$variadic = G__16506__delegate;
return G__16506;
})()
;
b = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return b__0.call(this);
default:
return b__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
b.cljs$lang$maxFixedArity = 1;
b.cljs$lang$applyTo = b__2.cljs$lang$applyTo;
b.cljs$core$IFn$_invoke$arity$0 = b__0;
b.cljs$core$IFn$_invoke$arity$variadic = b__2.cljs$core$IFn$_invoke$arity$variadic;
return b;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.base = (function() {
var base = null;
var base__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});
var base__2 = (function() { 
var G__16508__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__7808__auto__,children__7809__auto__);
};
var G__16508 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16508__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16508.cljs$lang$maxFixedArity = 1;
G__16508.cljs$lang$applyTo = (function (arglist__16509){
var opts__7808__auto__ = cljs.core.first(arglist__16509);
var children__7809__auto__ = cljs.core.rest(arglist__16509);
return G__16508__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16508.cljs$core$IFn$_invoke$arity$variadic = G__16508__delegate;
return G__16508;
})()
;
base = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return base__0.call(this);
default:
return base__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
base.cljs$lang$maxFixedArity = 1;
base.cljs$lang$applyTo = base__2.cljs$lang$applyTo;
base.cljs$core$IFn$_invoke$arity$0 = base__0;
base.cljs$core$IFn$_invoke$arity$variadic = base__2.cljs$core$IFn$_invoke$arity$variadic;
return base;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdi = (function() {
var bdi = null;
var bdi__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});
var bdi__2 = (function() { 
var G__16510__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__7808__auto__,children__7809__auto__);
};
var G__16510 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16510__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16510.cljs$lang$maxFixedArity = 1;
G__16510.cljs$lang$applyTo = (function (arglist__16511){
var opts__7808__auto__ = cljs.core.first(arglist__16511);
var children__7809__auto__ = cljs.core.rest(arglist__16511);
return G__16510__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16510.cljs$core$IFn$_invoke$arity$variadic = G__16510__delegate;
return G__16510;
})()
;
bdi = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return bdi__0.call(this);
default:
return bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdi.cljs$lang$maxFixedArity = 1;
bdi.cljs$lang$applyTo = bdi__2.cljs$lang$applyTo;
bdi.cljs$core$IFn$_invoke$arity$0 = bdi__0;
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__2.cljs$core$IFn$_invoke$arity$variadic;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdo = (function() {
var bdo = null;
var bdo__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});
var bdo__2 = (function() { 
var G__16512__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__7808__auto__,children__7809__auto__);
};
var G__16512 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16512__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16512.cljs$lang$maxFixedArity = 1;
G__16512.cljs$lang$applyTo = (function (arglist__16513){
var opts__7808__auto__ = cljs.core.first(arglist__16513);
var children__7809__auto__ = cljs.core.rest(arglist__16513);
return G__16512__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16512.cljs$core$IFn$_invoke$arity$variadic = G__16512__delegate;
return G__16512;
})()
;
bdo = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return bdo__0.call(this);
default:
return bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdo.cljs$lang$maxFixedArity = 1;
bdo.cljs$lang$applyTo = bdo__2.cljs$lang$applyTo;
bdo.cljs$core$IFn$_invoke$arity$0 = bdo__0;
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__2.cljs$core$IFn$_invoke$arity$variadic;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.big = (function() {
var big = null;
var big__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});
var big__2 = (function() { 
var G__16514__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__7808__auto__,children__7809__auto__);
};
var G__16514 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16514__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16514.cljs$lang$maxFixedArity = 1;
G__16514.cljs$lang$applyTo = (function (arglist__16515){
var opts__7808__auto__ = cljs.core.first(arglist__16515);
var children__7809__auto__ = cljs.core.rest(arglist__16515);
return G__16514__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16514.cljs$core$IFn$_invoke$arity$variadic = G__16514__delegate;
return G__16514;
})()
;
big = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return big__0.call(this);
default:
return big__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big.cljs$lang$maxFixedArity = 1;
big.cljs$lang$applyTo = big__2.cljs$lang$applyTo;
big.cljs$core$IFn$_invoke$arity$0 = big__0;
big.cljs$core$IFn$_invoke$arity$variadic = big__2.cljs$core$IFn$_invoke$arity$variadic;
return big;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.blockquote = (function() {
var blockquote = null;
var blockquote__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});
var blockquote__2 = (function() { 
var G__16516__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__7808__auto__,children__7809__auto__);
};
var G__16516 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16516__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16516.cljs$lang$maxFixedArity = 1;
G__16516.cljs$lang$applyTo = (function (arglist__16517){
var opts__7808__auto__ = cljs.core.first(arglist__16517);
var children__7809__auto__ = cljs.core.rest(arglist__16517);
return G__16516__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16516.cljs$core$IFn$_invoke$arity$variadic = G__16516__delegate;
return G__16516;
})()
;
blockquote = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return blockquote__0.call(this);
default:
return blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blockquote.cljs$lang$maxFixedArity = 1;
blockquote.cljs$lang$applyTo = blockquote__2.cljs$lang$applyTo;
blockquote.cljs$core$IFn$_invoke$arity$0 = blockquote__0;
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__2.cljs$core$IFn$_invoke$arity$variadic;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.body = (function() {
var body = null;
var body__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});
var body__2 = (function() { 
var G__16518__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__7808__auto__,children__7809__auto__);
};
var G__16518 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16518__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16518.cljs$lang$maxFixedArity = 1;
G__16518.cljs$lang$applyTo = (function (arglist__16519){
var opts__7808__auto__ = cljs.core.first(arglist__16519);
var children__7809__auto__ = cljs.core.rest(arglist__16519);
return G__16518__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16518.cljs$core$IFn$_invoke$arity$variadic = G__16518__delegate;
return G__16518;
})()
;
body = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return body__0.call(this);
default:
return body__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
body.cljs$lang$maxFixedArity = 1;
body.cljs$lang$applyTo = body__2.cljs$lang$applyTo;
body.cljs$core$IFn$_invoke$arity$0 = body__0;
body.cljs$core$IFn$_invoke$arity$variadic = body__2.cljs$core$IFn$_invoke$arity$variadic;
return body;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.br = (function() {
var br = null;
var br__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});
var br__2 = (function() { 
var G__16520__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__7808__auto__,children__7809__auto__);
};
var G__16520 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16520__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16520.cljs$lang$maxFixedArity = 1;
G__16520.cljs$lang$applyTo = (function (arglist__16521){
var opts__7808__auto__ = cljs.core.first(arglist__16521);
var children__7809__auto__ = cljs.core.rest(arglist__16521);
return G__16520__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16520.cljs$core$IFn$_invoke$arity$variadic = G__16520__delegate;
return G__16520;
})()
;
br = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return br__0.call(this);
default:
return br__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
br.cljs$lang$maxFixedArity = 1;
br.cljs$lang$applyTo = br__2.cljs$lang$applyTo;
br.cljs$core$IFn$_invoke$arity$0 = br__0;
br.cljs$core$IFn$_invoke$arity$variadic = br__2.cljs$core$IFn$_invoke$arity$variadic;
return br;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.button = (function() {
var button = null;
var button__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});
var button__2 = (function() { 
var G__16522__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__7808__auto__,children__7809__auto__);
};
var G__16522 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16522__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16522.cljs$lang$maxFixedArity = 1;
G__16522.cljs$lang$applyTo = (function (arglist__16523){
var opts__7808__auto__ = cljs.core.first(arglist__16523);
var children__7809__auto__ = cljs.core.rest(arglist__16523);
return G__16522__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16522.cljs$core$IFn$_invoke$arity$variadic = G__16522__delegate;
return G__16522;
})()
;
button = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return button__0.call(this);
default:
return button__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = button__2.cljs$lang$applyTo;
button.cljs$core$IFn$_invoke$arity$0 = button__0;
button.cljs$core$IFn$_invoke$arity$variadic = button__2.cljs$core$IFn$_invoke$arity$variadic;
return button;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.canvas = (function() {
var canvas = null;
var canvas__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});
var canvas__2 = (function() { 
var G__16524__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__7808__auto__,children__7809__auto__);
};
var G__16524 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16524__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16524.cljs$lang$maxFixedArity = 1;
G__16524.cljs$lang$applyTo = (function (arglist__16525){
var opts__7808__auto__ = cljs.core.first(arglist__16525);
var children__7809__auto__ = cljs.core.rest(arglist__16525);
return G__16524__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16524.cljs$core$IFn$_invoke$arity$variadic = G__16524__delegate;
return G__16524;
})()
;
canvas = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return canvas__0.call(this);
default:
return canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas.cljs$lang$maxFixedArity = 1;
canvas.cljs$lang$applyTo = canvas__2.cljs$lang$applyTo;
canvas.cljs$core$IFn$_invoke$arity$0 = canvas__0;
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__2.cljs$core$IFn$_invoke$arity$variadic;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.caption = (function() {
var caption = null;
var caption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});
var caption__2 = (function() { 
var G__16526__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__7808__auto__,children__7809__auto__);
};
var G__16526 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16526__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16526.cljs$lang$maxFixedArity = 1;
G__16526.cljs$lang$applyTo = (function (arglist__16527){
var opts__7808__auto__ = cljs.core.first(arglist__16527);
var children__7809__auto__ = cljs.core.rest(arglist__16527);
return G__16526__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16526.cljs$core$IFn$_invoke$arity$variadic = G__16526__delegate;
return G__16526;
})()
;
caption = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return caption__0.call(this);
default:
return caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
caption.cljs$lang$maxFixedArity = 1;
caption.cljs$lang$applyTo = caption__2.cljs$lang$applyTo;
caption.cljs$core$IFn$_invoke$arity$0 = caption__0;
caption.cljs$core$IFn$_invoke$arity$variadic = caption__2.cljs$core$IFn$_invoke$arity$variadic;
return caption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.cite = (function() {
var cite = null;
var cite__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});
var cite__2 = (function() { 
var G__16528__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__7808__auto__,children__7809__auto__);
};
var G__16528 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16528__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16528.cljs$lang$maxFixedArity = 1;
G__16528.cljs$lang$applyTo = (function (arglist__16529){
var opts__7808__auto__ = cljs.core.first(arglist__16529);
var children__7809__auto__ = cljs.core.rest(arglist__16529);
return G__16528__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16528.cljs$core$IFn$_invoke$arity$variadic = G__16528__delegate;
return G__16528;
})()
;
cite = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return cite__0.call(this);
default:
return cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cite.cljs$lang$maxFixedArity = 1;
cite.cljs$lang$applyTo = cite__2.cljs$lang$applyTo;
cite.cljs$core$IFn$_invoke$arity$0 = cite__0;
cite.cljs$core$IFn$_invoke$arity$variadic = cite__2.cljs$core$IFn$_invoke$arity$variadic;
return cite;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.code = (function() {
var code = null;
var code__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});
var code__2 = (function() { 
var G__16530__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__7808__auto__,children__7809__auto__);
};
var G__16530 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16530__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16530.cljs$lang$maxFixedArity = 1;
G__16530.cljs$lang$applyTo = (function (arglist__16531){
var opts__7808__auto__ = cljs.core.first(arglist__16531);
var children__7809__auto__ = cljs.core.rest(arglist__16531);
return G__16530__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16530.cljs$core$IFn$_invoke$arity$variadic = G__16530__delegate;
return G__16530;
})()
;
code = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return code__0.call(this);
default:
return code__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
code.cljs$lang$maxFixedArity = 1;
code.cljs$lang$applyTo = code__2.cljs$lang$applyTo;
code.cljs$core$IFn$_invoke$arity$0 = code__0;
code.cljs$core$IFn$_invoke$arity$variadic = code__2.cljs$core$IFn$_invoke$arity$variadic;
return code;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.col = (function() {
var col = null;
var col__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});
var col__2 = (function() { 
var G__16532__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__7808__auto__,children__7809__auto__);
};
var G__16532 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16532__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16532.cljs$lang$maxFixedArity = 1;
G__16532.cljs$lang$applyTo = (function (arglist__16533){
var opts__7808__auto__ = cljs.core.first(arglist__16533);
var children__7809__auto__ = cljs.core.rest(arglist__16533);
return G__16532__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16532.cljs$core$IFn$_invoke$arity$variadic = G__16532__delegate;
return G__16532;
})()
;
col = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return col__0.call(this);
default:
return col__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = col__2.cljs$lang$applyTo;
col.cljs$core$IFn$_invoke$arity$0 = col__0;
col.cljs$core$IFn$_invoke$arity$variadic = col__2.cljs$core$IFn$_invoke$arity$variadic;
return col;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.colgroup = (function() {
var colgroup = null;
var colgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});
var colgroup__2 = (function() { 
var G__16534__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__7808__auto__,children__7809__auto__);
};
var G__16534 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16534__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16534.cljs$lang$maxFixedArity = 1;
G__16534.cljs$lang$applyTo = (function (arglist__16535){
var opts__7808__auto__ = cljs.core.first(arglist__16535);
var children__7809__auto__ = cljs.core.rest(arglist__16535);
return G__16534__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16534.cljs$core$IFn$_invoke$arity$variadic = G__16534__delegate;
return G__16534;
})()
;
colgroup = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return colgroup__0.call(this);
default:
return colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
colgroup.cljs$lang$maxFixedArity = 1;
colgroup.cljs$lang$applyTo = colgroup__2.cljs$lang$applyTo;
colgroup.cljs$core$IFn$_invoke$arity$0 = colgroup__0;
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.data = (function() {
var data = null;
var data__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});
var data__2 = (function() { 
var G__16536__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__7808__auto__,children__7809__auto__);
};
var G__16536 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16536__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16536.cljs$lang$maxFixedArity = 1;
G__16536.cljs$lang$applyTo = (function (arglist__16537){
var opts__7808__auto__ = cljs.core.first(arglist__16537);
var children__7809__auto__ = cljs.core.rest(arglist__16537);
return G__16536__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16536.cljs$core$IFn$_invoke$arity$variadic = G__16536__delegate;
return G__16536;
})()
;
data = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return data__0.call(this);
default:
return data__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
data.cljs$lang$maxFixedArity = 1;
data.cljs$lang$applyTo = data__2.cljs$lang$applyTo;
data.cljs$core$IFn$_invoke$arity$0 = data__0;
data.cljs$core$IFn$_invoke$arity$variadic = data__2.cljs$core$IFn$_invoke$arity$variadic;
return data;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.datalist = (function() {
var datalist = null;
var datalist__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});
var datalist__2 = (function() { 
var G__16538__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__7808__auto__,children__7809__auto__);
};
var G__16538 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16538__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16538.cljs$lang$maxFixedArity = 1;
G__16538.cljs$lang$applyTo = (function (arglist__16539){
var opts__7808__auto__ = cljs.core.first(arglist__16539);
var children__7809__auto__ = cljs.core.rest(arglist__16539);
return G__16538__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16538.cljs$core$IFn$_invoke$arity$variadic = G__16538__delegate;
return G__16538;
})()
;
datalist = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return datalist__0.call(this);
default:
return datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datalist.cljs$lang$maxFixedArity = 1;
datalist.cljs$lang$applyTo = datalist__2.cljs$lang$applyTo;
datalist.cljs$core$IFn$_invoke$arity$0 = datalist__0;
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__2.cljs$core$IFn$_invoke$arity$variadic;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dd = (function() {
var dd = null;
var dd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});
var dd__2 = (function() { 
var G__16540__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__7808__auto__,children__7809__auto__);
};
var G__16540 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16540__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16540.cljs$lang$maxFixedArity = 1;
G__16540.cljs$lang$applyTo = (function (arglist__16541){
var opts__7808__auto__ = cljs.core.first(arglist__16541);
var children__7809__auto__ = cljs.core.rest(arglist__16541);
return G__16540__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16540.cljs$core$IFn$_invoke$arity$variadic = G__16540__delegate;
return G__16540;
})()
;
dd = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return dd__0.call(this);
default:
return dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dd.cljs$lang$maxFixedArity = 1;
dd.cljs$lang$applyTo = dd__2.cljs$lang$applyTo;
dd.cljs$core$IFn$_invoke$arity$0 = dd__0;
dd.cljs$core$IFn$_invoke$arity$variadic = dd__2.cljs$core$IFn$_invoke$arity$variadic;
return dd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.del = (function() {
var del = null;
var del__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});
var del__2 = (function() { 
var G__16542__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__7808__auto__,children__7809__auto__);
};
var G__16542 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16542__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16542.cljs$lang$maxFixedArity = 1;
G__16542.cljs$lang$applyTo = (function (arglist__16543){
var opts__7808__auto__ = cljs.core.first(arglist__16543);
var children__7809__auto__ = cljs.core.rest(arglist__16543);
return G__16542__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16542.cljs$core$IFn$_invoke$arity$variadic = G__16542__delegate;
return G__16542;
})()
;
del = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return del__0.call(this);
default:
return del__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
del.cljs$lang$maxFixedArity = 1;
del.cljs$lang$applyTo = del__2.cljs$lang$applyTo;
del.cljs$core$IFn$_invoke$arity$0 = del__0;
del.cljs$core$IFn$_invoke$arity$variadic = del__2.cljs$core$IFn$_invoke$arity$variadic;
return del;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dfn = (function() {
var dfn = null;
var dfn__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});
var dfn__2 = (function() { 
var G__16544__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__7808__auto__,children__7809__auto__);
};
var G__16544 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16544__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16544.cljs$lang$maxFixedArity = 1;
G__16544.cljs$lang$applyTo = (function (arglist__16545){
var opts__7808__auto__ = cljs.core.first(arglist__16545);
var children__7809__auto__ = cljs.core.rest(arglist__16545);
return G__16544__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16544.cljs$core$IFn$_invoke$arity$variadic = G__16544__delegate;
return G__16544;
})()
;
dfn = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return dfn__0.call(this);
default:
return dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dfn.cljs$lang$maxFixedArity = 1;
dfn.cljs$lang$applyTo = dfn__2.cljs$lang$applyTo;
dfn.cljs$core$IFn$_invoke$arity$0 = dfn__0;
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__2.cljs$core$IFn$_invoke$arity$variadic;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.div = (function() {
var div = null;
var div__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});
var div__2 = (function() { 
var G__16546__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__7808__auto__,children__7809__auto__);
};
var G__16546 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16546__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16546.cljs$lang$maxFixedArity = 1;
G__16546.cljs$lang$applyTo = (function (arglist__16547){
var opts__7808__auto__ = cljs.core.first(arglist__16547);
var children__7809__auto__ = cljs.core.rest(arglist__16547);
return G__16546__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16546.cljs$core$IFn$_invoke$arity$variadic = G__16546__delegate;
return G__16546;
})()
;
div = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return div__0.call(this);
default:
return div__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
div.cljs$lang$maxFixedArity = 1;
div.cljs$lang$applyTo = div__2.cljs$lang$applyTo;
div.cljs$core$IFn$_invoke$arity$0 = div__0;
div.cljs$core$IFn$_invoke$arity$variadic = div__2.cljs$core$IFn$_invoke$arity$variadic;
return div;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dl = (function() {
var dl = null;
var dl__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});
var dl__2 = (function() { 
var G__16548__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__7808__auto__,children__7809__auto__);
};
var G__16548 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16548__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16548.cljs$lang$maxFixedArity = 1;
G__16548.cljs$lang$applyTo = (function (arglist__16549){
var opts__7808__auto__ = cljs.core.first(arglist__16549);
var children__7809__auto__ = cljs.core.rest(arglist__16549);
return G__16548__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16548.cljs$core$IFn$_invoke$arity$variadic = G__16548__delegate;
return G__16548;
})()
;
dl = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return dl__0.call(this);
default:
return dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dl.cljs$lang$maxFixedArity = 1;
dl.cljs$lang$applyTo = dl__2.cljs$lang$applyTo;
dl.cljs$core$IFn$_invoke$arity$0 = dl__0;
dl.cljs$core$IFn$_invoke$arity$variadic = dl__2.cljs$core$IFn$_invoke$arity$variadic;
return dl;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dt = (function() {
var dt = null;
var dt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});
var dt__2 = (function() { 
var G__16550__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__7808__auto__,children__7809__auto__);
};
var G__16550 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16550__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16550.cljs$lang$maxFixedArity = 1;
G__16550.cljs$lang$applyTo = (function (arglist__16551){
var opts__7808__auto__ = cljs.core.first(arglist__16551);
var children__7809__auto__ = cljs.core.rest(arglist__16551);
return G__16550__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16550.cljs$core$IFn$_invoke$arity$variadic = G__16550__delegate;
return G__16550;
})()
;
dt = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return dt__0.call(this);
default:
return dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dt.cljs$lang$maxFixedArity = 1;
dt.cljs$lang$applyTo = dt__2.cljs$lang$applyTo;
dt.cljs$core$IFn$_invoke$arity$0 = dt__0;
dt.cljs$core$IFn$_invoke$arity$variadic = dt__2.cljs$core$IFn$_invoke$arity$variadic;
return dt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.em = (function() {
var em = null;
var em__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});
var em__2 = (function() { 
var G__16552__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__7808__auto__,children__7809__auto__);
};
var G__16552 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16552__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16552.cljs$lang$maxFixedArity = 1;
G__16552.cljs$lang$applyTo = (function (arglist__16553){
var opts__7808__auto__ = cljs.core.first(arglist__16553);
var children__7809__auto__ = cljs.core.rest(arglist__16553);
return G__16552__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16552.cljs$core$IFn$_invoke$arity$variadic = G__16552__delegate;
return G__16552;
})()
;
em = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return em__0.call(this);
default:
return em__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
em.cljs$lang$maxFixedArity = 1;
em.cljs$lang$applyTo = em__2.cljs$lang$applyTo;
em.cljs$core$IFn$_invoke$arity$0 = em__0;
em.cljs$core$IFn$_invoke$arity$variadic = em__2.cljs$core$IFn$_invoke$arity$variadic;
return em;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.embed = (function() {
var embed = null;
var embed__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});
var embed__2 = (function() { 
var G__16554__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__7808__auto__,children__7809__auto__);
};
var G__16554 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16554__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16554.cljs$lang$maxFixedArity = 1;
G__16554.cljs$lang$applyTo = (function (arglist__16555){
var opts__7808__auto__ = cljs.core.first(arglist__16555);
var children__7809__auto__ = cljs.core.rest(arglist__16555);
return G__16554__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16554.cljs$core$IFn$_invoke$arity$variadic = G__16554__delegate;
return G__16554;
})()
;
embed = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return embed__0.call(this);
default:
return embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
embed.cljs$lang$maxFixedArity = 1;
embed.cljs$lang$applyTo = embed__2.cljs$lang$applyTo;
embed.cljs$core$IFn$_invoke$arity$0 = embed__0;
embed.cljs$core$IFn$_invoke$arity$variadic = embed__2.cljs$core$IFn$_invoke$arity$variadic;
return embed;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.fieldset = (function() {
var fieldset = null;
var fieldset__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});
var fieldset__2 = (function() { 
var G__16556__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__7808__auto__,children__7809__auto__);
};
var G__16556 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16556__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16556.cljs$lang$maxFixedArity = 1;
G__16556.cljs$lang$applyTo = (function (arglist__16557){
var opts__7808__auto__ = cljs.core.first(arglist__16557);
var children__7809__auto__ = cljs.core.rest(arglist__16557);
return G__16556__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16556.cljs$core$IFn$_invoke$arity$variadic = G__16556__delegate;
return G__16556;
})()
;
fieldset = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return fieldset__0.call(this);
default:
return fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fieldset.cljs$lang$maxFixedArity = 1;
fieldset.cljs$lang$applyTo = fieldset__2.cljs$lang$applyTo;
fieldset.cljs$core$IFn$_invoke$arity$0 = fieldset__0;
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__2.cljs$core$IFn$_invoke$arity$variadic;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figcaption = (function() {
var figcaption = null;
var figcaption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});
var figcaption__2 = (function() { 
var G__16558__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__7808__auto__,children__7809__auto__);
};
var G__16558 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16558__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16558.cljs$lang$maxFixedArity = 1;
G__16558.cljs$lang$applyTo = (function (arglist__16559){
var opts__7808__auto__ = cljs.core.first(arglist__16559);
var children__7809__auto__ = cljs.core.rest(arglist__16559);
return G__16558__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16558.cljs$core$IFn$_invoke$arity$variadic = G__16558__delegate;
return G__16558;
})()
;
figcaption = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return figcaption__0.call(this);
default:
return figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figcaption.cljs$lang$maxFixedArity = 1;
figcaption.cljs$lang$applyTo = figcaption__2.cljs$lang$applyTo;
figcaption.cljs$core$IFn$_invoke$arity$0 = figcaption__0;
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__2.cljs$core$IFn$_invoke$arity$variadic;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figure = (function() {
var figure = null;
var figure__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});
var figure__2 = (function() { 
var G__16560__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__7808__auto__,children__7809__auto__);
};
var G__16560 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16560__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16560.cljs$lang$maxFixedArity = 1;
G__16560.cljs$lang$applyTo = (function (arglist__16561){
var opts__7808__auto__ = cljs.core.first(arglist__16561);
var children__7809__auto__ = cljs.core.rest(arglist__16561);
return G__16560__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16560.cljs$core$IFn$_invoke$arity$variadic = G__16560__delegate;
return G__16560;
})()
;
figure = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return figure__0.call(this);
default:
return figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figure.cljs$lang$maxFixedArity = 1;
figure.cljs$lang$applyTo = figure__2.cljs$lang$applyTo;
figure.cljs$core$IFn$_invoke$arity$0 = figure__0;
figure.cljs$core$IFn$_invoke$arity$variadic = figure__2.cljs$core$IFn$_invoke$arity$variadic;
return figure;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.footer = (function() {
var footer = null;
var footer__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});
var footer__2 = (function() { 
var G__16562__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__7808__auto__,children__7809__auto__);
};
var G__16562 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16562__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16562.cljs$lang$maxFixedArity = 1;
G__16562.cljs$lang$applyTo = (function (arglist__16563){
var opts__7808__auto__ = cljs.core.first(arglist__16563);
var children__7809__auto__ = cljs.core.rest(arglist__16563);
return G__16562__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16562.cljs$core$IFn$_invoke$arity$variadic = G__16562__delegate;
return G__16562;
})()
;
footer = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return footer__0.call(this);
default:
return footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
footer.cljs$lang$maxFixedArity = 1;
footer.cljs$lang$applyTo = footer__2.cljs$lang$applyTo;
footer.cljs$core$IFn$_invoke$arity$0 = footer__0;
footer.cljs$core$IFn$_invoke$arity$variadic = footer__2.cljs$core$IFn$_invoke$arity$variadic;
return footer;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.form = (function() {
var form = null;
var form__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});
var form__2 = (function() { 
var G__16564__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__7808__auto__,children__7809__auto__);
};
var G__16564 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16564__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16564.cljs$lang$maxFixedArity = 1;
G__16564.cljs$lang$applyTo = (function (arglist__16565){
var opts__7808__auto__ = cljs.core.first(arglist__16565);
var children__7809__auto__ = cljs.core.rest(arglist__16565);
return G__16564__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16564.cljs$core$IFn$_invoke$arity$variadic = G__16564__delegate;
return G__16564;
})()
;
form = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return form__0.call(this);
default:
return form__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
form.cljs$lang$maxFixedArity = 1;
form.cljs$lang$applyTo = form__2.cljs$lang$applyTo;
form.cljs$core$IFn$_invoke$arity$0 = form__0;
form.cljs$core$IFn$_invoke$arity$variadic = form__2.cljs$core$IFn$_invoke$arity$variadic;
return form;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h1 = (function() {
var h1 = null;
var h1__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});
var h1__2 = (function() { 
var G__16566__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__7808__auto__,children__7809__auto__);
};
var G__16566 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16566__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16566.cljs$lang$maxFixedArity = 1;
G__16566.cljs$lang$applyTo = (function (arglist__16567){
var opts__7808__auto__ = cljs.core.first(arglist__16567);
var children__7809__auto__ = cljs.core.rest(arglist__16567);
return G__16566__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16566.cljs$core$IFn$_invoke$arity$variadic = G__16566__delegate;
return G__16566;
})()
;
h1 = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return h1__0.call(this);
default:
return h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h1.cljs$lang$maxFixedArity = 1;
h1.cljs$lang$applyTo = h1__2.cljs$lang$applyTo;
h1.cljs$core$IFn$_invoke$arity$0 = h1__0;
h1.cljs$core$IFn$_invoke$arity$variadic = h1__2.cljs$core$IFn$_invoke$arity$variadic;
return h1;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h2 = (function() {
var h2 = null;
var h2__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});
var h2__2 = (function() { 
var G__16568__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__7808__auto__,children__7809__auto__);
};
var G__16568 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16568__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16568.cljs$lang$maxFixedArity = 1;
G__16568.cljs$lang$applyTo = (function (arglist__16569){
var opts__7808__auto__ = cljs.core.first(arglist__16569);
var children__7809__auto__ = cljs.core.rest(arglist__16569);
return G__16568__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16568.cljs$core$IFn$_invoke$arity$variadic = G__16568__delegate;
return G__16568;
})()
;
h2 = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return h2__0.call(this);
default:
return h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h2.cljs$lang$maxFixedArity = 1;
h2.cljs$lang$applyTo = h2__2.cljs$lang$applyTo;
h2.cljs$core$IFn$_invoke$arity$0 = h2__0;
h2.cljs$core$IFn$_invoke$arity$variadic = h2__2.cljs$core$IFn$_invoke$arity$variadic;
return h2;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h3 = (function() {
var h3 = null;
var h3__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});
var h3__2 = (function() { 
var G__16570__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__7808__auto__,children__7809__auto__);
};
var G__16570 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16570__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16570.cljs$lang$maxFixedArity = 1;
G__16570.cljs$lang$applyTo = (function (arglist__16571){
var opts__7808__auto__ = cljs.core.first(arglist__16571);
var children__7809__auto__ = cljs.core.rest(arglist__16571);
return G__16570__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16570.cljs$core$IFn$_invoke$arity$variadic = G__16570__delegate;
return G__16570;
})()
;
h3 = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return h3__0.call(this);
default:
return h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h3.cljs$lang$maxFixedArity = 1;
h3.cljs$lang$applyTo = h3__2.cljs$lang$applyTo;
h3.cljs$core$IFn$_invoke$arity$0 = h3__0;
h3.cljs$core$IFn$_invoke$arity$variadic = h3__2.cljs$core$IFn$_invoke$arity$variadic;
return h3;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h4 = (function() {
var h4 = null;
var h4__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});
var h4__2 = (function() { 
var G__16572__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__7808__auto__,children__7809__auto__);
};
var G__16572 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16572__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16572.cljs$lang$maxFixedArity = 1;
G__16572.cljs$lang$applyTo = (function (arglist__16573){
var opts__7808__auto__ = cljs.core.first(arglist__16573);
var children__7809__auto__ = cljs.core.rest(arglist__16573);
return G__16572__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16572.cljs$core$IFn$_invoke$arity$variadic = G__16572__delegate;
return G__16572;
})()
;
h4 = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return h4__0.call(this);
default:
return h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h4.cljs$lang$maxFixedArity = 1;
h4.cljs$lang$applyTo = h4__2.cljs$lang$applyTo;
h4.cljs$core$IFn$_invoke$arity$0 = h4__0;
h4.cljs$core$IFn$_invoke$arity$variadic = h4__2.cljs$core$IFn$_invoke$arity$variadic;
return h4;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h5 = (function() {
var h5 = null;
var h5__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});
var h5__2 = (function() { 
var G__16574__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__7808__auto__,children__7809__auto__);
};
var G__16574 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16574__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16574.cljs$lang$maxFixedArity = 1;
G__16574.cljs$lang$applyTo = (function (arglist__16575){
var opts__7808__auto__ = cljs.core.first(arglist__16575);
var children__7809__auto__ = cljs.core.rest(arglist__16575);
return G__16574__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16574.cljs$core$IFn$_invoke$arity$variadic = G__16574__delegate;
return G__16574;
})()
;
h5 = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return h5__0.call(this);
default:
return h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h5.cljs$lang$maxFixedArity = 1;
h5.cljs$lang$applyTo = h5__2.cljs$lang$applyTo;
h5.cljs$core$IFn$_invoke$arity$0 = h5__0;
h5.cljs$core$IFn$_invoke$arity$variadic = h5__2.cljs$core$IFn$_invoke$arity$variadic;
return h5;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h6 = (function() {
var h6 = null;
var h6__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});
var h6__2 = (function() { 
var G__16576__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__7808__auto__,children__7809__auto__);
};
var G__16576 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16576__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16576.cljs$lang$maxFixedArity = 1;
G__16576.cljs$lang$applyTo = (function (arglist__16577){
var opts__7808__auto__ = cljs.core.first(arglist__16577);
var children__7809__auto__ = cljs.core.rest(arglist__16577);
return G__16576__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16576.cljs$core$IFn$_invoke$arity$variadic = G__16576__delegate;
return G__16576;
})()
;
h6 = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return h6__0.call(this);
default:
return h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h6.cljs$lang$maxFixedArity = 1;
h6.cljs$lang$applyTo = h6__2.cljs$lang$applyTo;
h6.cljs$core$IFn$_invoke$arity$0 = h6__0;
h6.cljs$core$IFn$_invoke$arity$variadic = h6__2.cljs$core$IFn$_invoke$arity$variadic;
return h6;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.head = (function() {
var head = null;
var head__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});
var head__2 = (function() { 
var G__16578__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__7808__auto__,children__7809__auto__);
};
var G__16578 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16578__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16578.cljs$lang$maxFixedArity = 1;
G__16578.cljs$lang$applyTo = (function (arglist__16579){
var opts__7808__auto__ = cljs.core.first(arglist__16579);
var children__7809__auto__ = cljs.core.rest(arglist__16579);
return G__16578__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16578.cljs$core$IFn$_invoke$arity$variadic = G__16578__delegate;
return G__16578;
})()
;
head = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return head__0.call(this);
default:
return head__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = head__2.cljs$lang$applyTo;
head.cljs$core$IFn$_invoke$arity$0 = head__0;
head.cljs$core$IFn$_invoke$arity$variadic = head__2.cljs$core$IFn$_invoke$arity$variadic;
return head;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.header = (function() {
var header = null;
var header__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});
var header__2 = (function() { 
var G__16580__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__7808__auto__,children__7809__auto__);
};
var G__16580 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16580__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16580.cljs$lang$maxFixedArity = 1;
G__16580.cljs$lang$applyTo = (function (arglist__16581){
var opts__7808__auto__ = cljs.core.first(arglist__16581);
var children__7809__auto__ = cljs.core.rest(arglist__16581);
return G__16580__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16580.cljs$core$IFn$_invoke$arity$variadic = G__16580__delegate;
return G__16580;
})()
;
header = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return header__0.call(this);
default:
return header__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
header.cljs$lang$maxFixedArity = 1;
header.cljs$lang$applyTo = header__2.cljs$lang$applyTo;
header.cljs$core$IFn$_invoke$arity$0 = header__0;
header.cljs$core$IFn$_invoke$arity$variadic = header__2.cljs$core$IFn$_invoke$arity$variadic;
return header;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.hr = (function() {
var hr = null;
var hr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});
var hr__2 = (function() { 
var G__16582__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__7808__auto__,children__7809__auto__);
};
var G__16582 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16582__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16582.cljs$lang$maxFixedArity = 1;
G__16582.cljs$lang$applyTo = (function (arglist__16583){
var opts__7808__auto__ = cljs.core.first(arglist__16583);
var children__7809__auto__ = cljs.core.rest(arglist__16583);
return G__16582__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16582.cljs$core$IFn$_invoke$arity$variadic = G__16582__delegate;
return G__16582;
})()
;
hr = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return hr__0.call(this);
default:
return hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hr.cljs$lang$maxFixedArity = 1;
hr.cljs$lang$applyTo = hr__2.cljs$lang$applyTo;
hr.cljs$core$IFn$_invoke$arity$0 = hr__0;
hr.cljs$core$IFn$_invoke$arity$variadic = hr__2.cljs$core$IFn$_invoke$arity$variadic;
return hr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.html = (function() {
var html = null;
var html__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});
var html__2 = (function() { 
var G__16584__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__7808__auto__,children__7809__auto__);
};
var G__16584 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16584__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16584.cljs$lang$maxFixedArity = 1;
G__16584.cljs$lang$applyTo = (function (arglist__16585){
var opts__7808__auto__ = cljs.core.first(arglist__16585);
var children__7809__auto__ = cljs.core.rest(arglist__16585);
return G__16584__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16584.cljs$core$IFn$_invoke$arity$variadic = G__16584__delegate;
return G__16584;
})()
;
html = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return html__0.call(this);
default:
return html__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
html.cljs$lang$maxFixedArity = 1;
html.cljs$lang$applyTo = html__2.cljs$lang$applyTo;
html.cljs$core$IFn$_invoke$arity$0 = html__0;
html.cljs$core$IFn$_invoke$arity$variadic = html__2.cljs$core$IFn$_invoke$arity$variadic;
return html;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.i = (function() {
var i = null;
var i__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});
var i__2 = (function() { 
var G__16586__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__7808__auto__,children__7809__auto__);
};
var G__16586 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16586__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16586.cljs$lang$maxFixedArity = 1;
G__16586.cljs$lang$applyTo = (function (arglist__16587){
var opts__7808__auto__ = cljs.core.first(arglist__16587);
var children__7809__auto__ = cljs.core.rest(arglist__16587);
return G__16586__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16586.cljs$core$IFn$_invoke$arity$variadic = G__16586__delegate;
return G__16586;
})()
;
i = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return i__0.call(this);
default:
return i__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
i.cljs$lang$maxFixedArity = 1;
i.cljs$lang$applyTo = i__2.cljs$lang$applyTo;
i.cljs$core$IFn$_invoke$arity$0 = i__0;
i.cljs$core$IFn$_invoke$arity$variadic = i__2.cljs$core$IFn$_invoke$arity$variadic;
return i;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.iframe = (function() {
var iframe = null;
var iframe__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});
var iframe__2 = (function() { 
var G__16588__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__7808__auto__,children__7809__auto__);
};
var G__16588 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16588__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16588.cljs$lang$maxFixedArity = 1;
G__16588.cljs$lang$applyTo = (function (arglist__16589){
var opts__7808__auto__ = cljs.core.first(arglist__16589);
var children__7809__auto__ = cljs.core.rest(arglist__16589);
return G__16588__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16588.cljs$core$IFn$_invoke$arity$variadic = G__16588__delegate;
return G__16588;
})()
;
iframe = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return iframe__0.call(this);
default:
return iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
iframe.cljs$lang$maxFixedArity = 1;
iframe.cljs$lang$applyTo = iframe__2.cljs$lang$applyTo;
iframe.cljs$core$IFn$_invoke$arity$0 = iframe__0;
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__2.cljs$core$IFn$_invoke$arity$variadic;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.img = (function() {
var img = null;
var img__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});
var img__2 = (function() { 
var G__16590__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__7808__auto__,children__7809__auto__);
};
var G__16590 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16590__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16590.cljs$lang$maxFixedArity = 1;
G__16590.cljs$lang$applyTo = (function (arglist__16591){
var opts__7808__auto__ = cljs.core.first(arglist__16591);
var children__7809__auto__ = cljs.core.rest(arglist__16591);
return G__16590__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16590.cljs$core$IFn$_invoke$arity$variadic = G__16590__delegate;
return G__16590;
})()
;
img = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return img__0.call(this);
default:
return img__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
img.cljs$lang$maxFixedArity = 1;
img.cljs$lang$applyTo = img__2.cljs$lang$applyTo;
img.cljs$core$IFn$_invoke$arity$0 = img__0;
img.cljs$core$IFn$_invoke$arity$variadic = img__2.cljs$core$IFn$_invoke$arity$variadic;
return img;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ins = (function() {
var ins = null;
var ins__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});
var ins__2 = (function() { 
var G__16592__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__7808__auto__,children__7809__auto__);
};
var G__16592 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16592__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16592.cljs$lang$maxFixedArity = 1;
G__16592.cljs$lang$applyTo = (function (arglist__16593){
var opts__7808__auto__ = cljs.core.first(arglist__16593);
var children__7809__auto__ = cljs.core.rest(arglist__16593);
return G__16592__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16592.cljs$core$IFn$_invoke$arity$variadic = G__16592__delegate;
return G__16592;
})()
;
ins = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return ins__0.call(this);
default:
return ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ins.cljs$lang$maxFixedArity = 1;
ins.cljs$lang$applyTo = ins__2.cljs$lang$applyTo;
ins.cljs$core$IFn$_invoke$arity$0 = ins__0;
ins.cljs$core$IFn$_invoke$arity$variadic = ins__2.cljs$core$IFn$_invoke$arity$variadic;
return ins;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.kbd = (function() {
var kbd = null;
var kbd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});
var kbd__2 = (function() { 
var G__16594__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__7808__auto__,children__7809__auto__);
};
var G__16594 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16594__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16594.cljs$lang$maxFixedArity = 1;
G__16594.cljs$lang$applyTo = (function (arglist__16595){
var opts__7808__auto__ = cljs.core.first(arglist__16595);
var children__7809__auto__ = cljs.core.rest(arglist__16595);
return G__16594__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16594.cljs$core$IFn$_invoke$arity$variadic = G__16594__delegate;
return G__16594;
})()
;
kbd = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return kbd__0.call(this);
default:
return kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kbd.cljs$lang$maxFixedArity = 1;
kbd.cljs$lang$applyTo = kbd__2.cljs$lang$applyTo;
kbd.cljs$core$IFn$_invoke$arity$0 = kbd__0;
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__2.cljs$core$IFn$_invoke$arity$variadic;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.keygen = (function() {
var keygen = null;
var keygen__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});
var keygen__2 = (function() { 
var G__16596__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__7808__auto__,children__7809__auto__);
};
var G__16596 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16596__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16596.cljs$lang$maxFixedArity = 1;
G__16596.cljs$lang$applyTo = (function (arglist__16597){
var opts__7808__auto__ = cljs.core.first(arglist__16597);
var children__7809__auto__ = cljs.core.rest(arglist__16597);
return G__16596__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16596.cljs$core$IFn$_invoke$arity$variadic = G__16596__delegate;
return G__16596;
})()
;
keygen = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return keygen__0.call(this);
default:
return keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keygen.cljs$lang$maxFixedArity = 1;
keygen.cljs$lang$applyTo = keygen__2.cljs$lang$applyTo;
keygen.cljs$core$IFn$_invoke$arity$0 = keygen__0;
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__2.cljs$core$IFn$_invoke$arity$variadic;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.label = (function() {
var label = null;
var label__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});
var label__2 = (function() { 
var G__16598__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__7808__auto__,children__7809__auto__);
};
var G__16598 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16598__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16598.cljs$lang$maxFixedArity = 1;
G__16598.cljs$lang$applyTo = (function (arglist__16599){
var opts__7808__auto__ = cljs.core.first(arglist__16599);
var children__7809__auto__ = cljs.core.rest(arglist__16599);
return G__16598__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16598.cljs$core$IFn$_invoke$arity$variadic = G__16598__delegate;
return G__16598;
})()
;
label = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return label__0.call(this);
default:
return label__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = label__2.cljs$lang$applyTo;
label.cljs$core$IFn$_invoke$arity$0 = label__0;
label.cljs$core$IFn$_invoke$arity$variadic = label__2.cljs$core$IFn$_invoke$arity$variadic;
return label;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.legend = (function() {
var legend = null;
var legend__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});
var legend__2 = (function() { 
var G__16600__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__7808__auto__,children__7809__auto__);
};
var G__16600 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16600__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16600.cljs$lang$maxFixedArity = 1;
G__16600.cljs$lang$applyTo = (function (arglist__16601){
var opts__7808__auto__ = cljs.core.first(arglist__16601);
var children__7809__auto__ = cljs.core.rest(arglist__16601);
return G__16600__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16600.cljs$core$IFn$_invoke$arity$variadic = G__16600__delegate;
return G__16600;
})()
;
legend = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return legend__0.call(this);
default:
return legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
legend.cljs$lang$maxFixedArity = 1;
legend.cljs$lang$applyTo = legend__2.cljs$lang$applyTo;
legend.cljs$core$IFn$_invoke$arity$0 = legend__0;
legend.cljs$core$IFn$_invoke$arity$variadic = legend__2.cljs$core$IFn$_invoke$arity$variadic;
return legend;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.li = (function() {
var li = null;
var li__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});
var li__2 = (function() { 
var G__16602__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__7808__auto__,children__7809__auto__);
};
var G__16602 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16602__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16602.cljs$lang$maxFixedArity = 1;
G__16602.cljs$lang$applyTo = (function (arglist__16603){
var opts__7808__auto__ = cljs.core.first(arglist__16603);
var children__7809__auto__ = cljs.core.rest(arglist__16603);
return G__16602__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16602.cljs$core$IFn$_invoke$arity$variadic = G__16602__delegate;
return G__16602;
})()
;
li = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return li__0.call(this);
default:
return li__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
li.cljs$lang$maxFixedArity = 1;
li.cljs$lang$applyTo = li__2.cljs$lang$applyTo;
li.cljs$core$IFn$_invoke$arity$0 = li__0;
li.cljs$core$IFn$_invoke$arity$variadic = li__2.cljs$core$IFn$_invoke$arity$variadic;
return li;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.link = (function() {
var link = null;
var link__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});
var link__2 = (function() { 
var G__16604__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__7808__auto__,children__7809__auto__);
};
var G__16604 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16604__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16604.cljs$lang$maxFixedArity = 1;
G__16604.cljs$lang$applyTo = (function (arglist__16605){
var opts__7808__auto__ = cljs.core.first(arglist__16605);
var children__7809__auto__ = cljs.core.rest(arglist__16605);
return G__16604__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16604.cljs$core$IFn$_invoke$arity$variadic = G__16604__delegate;
return G__16604;
})()
;
link = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return link__0.call(this);
default:
return link__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
link.cljs$lang$maxFixedArity = 1;
link.cljs$lang$applyTo = link__2.cljs$lang$applyTo;
link.cljs$core$IFn$_invoke$arity$0 = link__0;
link.cljs$core$IFn$_invoke$arity$variadic = link__2.cljs$core$IFn$_invoke$arity$variadic;
return link;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.main = (function() {
var main = null;
var main__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});
var main__2 = (function() { 
var G__16606__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__7808__auto__,children__7809__auto__);
};
var G__16606 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16606__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16606.cljs$lang$maxFixedArity = 1;
G__16606.cljs$lang$applyTo = (function (arglist__16607){
var opts__7808__auto__ = cljs.core.first(arglist__16607);
var children__7809__auto__ = cljs.core.rest(arglist__16607);
return G__16606__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16606.cljs$core$IFn$_invoke$arity$variadic = G__16606__delegate;
return G__16606;
})()
;
main = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return main__0.call(this);
default:
return main__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main.cljs$lang$maxFixedArity = 1;
main.cljs$lang$applyTo = main__2.cljs$lang$applyTo;
main.cljs$core$IFn$_invoke$arity$0 = main__0;
main.cljs$core$IFn$_invoke$arity$variadic = main__2.cljs$core$IFn$_invoke$arity$variadic;
return main;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.map = (function() {
var map = null;
var map__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});
var map__2 = (function() { 
var G__16608__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__7808__auto__,children__7809__auto__);
};
var G__16608 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16608__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16608.cljs$lang$maxFixedArity = 1;
G__16608.cljs$lang$applyTo = (function (arglist__16609){
var opts__7808__auto__ = cljs.core.first(arglist__16609);
var children__7809__auto__ = cljs.core.rest(arglist__16609);
return G__16608__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16608.cljs$core$IFn$_invoke$arity$variadic = G__16608__delegate;
return G__16608;
})()
;
map = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return map__0.call(this);
default:
return map__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 1;
map.cljs$lang$applyTo = map__2.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$0 = map__0;
map.cljs$core$IFn$_invoke$arity$variadic = map__2.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.mark = (function() {
var mark = null;
var mark__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});
var mark__2 = (function() { 
var G__16610__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__7808__auto__,children__7809__auto__);
};
var G__16610 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16610__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16610.cljs$lang$maxFixedArity = 1;
G__16610.cljs$lang$applyTo = (function (arglist__16611){
var opts__7808__auto__ = cljs.core.first(arglist__16611);
var children__7809__auto__ = cljs.core.rest(arglist__16611);
return G__16610__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16610.cljs$core$IFn$_invoke$arity$variadic = G__16610__delegate;
return G__16610;
})()
;
mark = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return mark__0.call(this);
default:
return mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mark.cljs$lang$maxFixedArity = 1;
mark.cljs$lang$applyTo = mark__2.cljs$lang$applyTo;
mark.cljs$core$IFn$_invoke$arity$0 = mark__0;
mark.cljs$core$IFn$_invoke$arity$variadic = mark__2.cljs$core$IFn$_invoke$arity$variadic;
return mark;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menu = (function() {
var menu = null;
var menu__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});
var menu__2 = (function() { 
var G__16612__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__7808__auto__,children__7809__auto__);
};
var G__16612 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16612__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16612.cljs$lang$maxFixedArity = 1;
G__16612.cljs$lang$applyTo = (function (arglist__16613){
var opts__7808__auto__ = cljs.core.first(arglist__16613);
var children__7809__auto__ = cljs.core.rest(arglist__16613);
return G__16612__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16612.cljs$core$IFn$_invoke$arity$variadic = G__16612__delegate;
return G__16612;
})()
;
menu = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return menu__0.call(this);
default:
return menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menu.cljs$lang$maxFixedArity = 1;
menu.cljs$lang$applyTo = menu__2.cljs$lang$applyTo;
menu.cljs$core$IFn$_invoke$arity$0 = menu__0;
menu.cljs$core$IFn$_invoke$arity$variadic = menu__2.cljs$core$IFn$_invoke$arity$variadic;
return menu;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menuitem = (function() {
var menuitem = null;
var menuitem__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});
var menuitem__2 = (function() { 
var G__16614__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__7808__auto__,children__7809__auto__);
};
var G__16614 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16614__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16614.cljs$lang$maxFixedArity = 1;
G__16614.cljs$lang$applyTo = (function (arglist__16615){
var opts__7808__auto__ = cljs.core.first(arglist__16615);
var children__7809__auto__ = cljs.core.rest(arglist__16615);
return G__16614__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16614.cljs$core$IFn$_invoke$arity$variadic = G__16614__delegate;
return G__16614;
})()
;
menuitem = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return menuitem__0.call(this);
default:
return menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menuitem.cljs$lang$maxFixedArity = 1;
menuitem.cljs$lang$applyTo = menuitem__2.cljs$lang$applyTo;
menuitem.cljs$core$IFn$_invoke$arity$0 = menuitem__0;
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__2.cljs$core$IFn$_invoke$arity$variadic;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meta = (function() {
var meta = null;
var meta__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});
var meta__2 = (function() { 
var G__16616__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__7808__auto__,children__7809__auto__);
};
var G__16616 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16616__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16616.cljs$lang$maxFixedArity = 1;
G__16616.cljs$lang$applyTo = (function (arglist__16617){
var opts__7808__auto__ = cljs.core.first(arglist__16617);
var children__7809__auto__ = cljs.core.rest(arglist__16617);
return G__16616__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16616.cljs$core$IFn$_invoke$arity$variadic = G__16616__delegate;
return G__16616;
})()
;
meta = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return meta__0.call(this);
default:
return meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meta.cljs$lang$maxFixedArity = 1;
meta.cljs$lang$applyTo = meta__2.cljs$lang$applyTo;
meta.cljs$core$IFn$_invoke$arity$0 = meta__0;
meta.cljs$core$IFn$_invoke$arity$variadic = meta__2.cljs$core$IFn$_invoke$arity$variadic;
return meta;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meter = (function() {
var meter = null;
var meter__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});
var meter__2 = (function() { 
var G__16618__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__7808__auto__,children__7809__auto__);
};
var G__16618 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16618__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16618.cljs$lang$maxFixedArity = 1;
G__16618.cljs$lang$applyTo = (function (arglist__16619){
var opts__7808__auto__ = cljs.core.first(arglist__16619);
var children__7809__auto__ = cljs.core.rest(arglist__16619);
return G__16618__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16618.cljs$core$IFn$_invoke$arity$variadic = G__16618__delegate;
return G__16618;
})()
;
meter = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return meter__0.call(this);
default:
return meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meter.cljs$lang$maxFixedArity = 1;
meter.cljs$lang$applyTo = meter__2.cljs$lang$applyTo;
meter.cljs$core$IFn$_invoke$arity$0 = meter__0;
meter.cljs$core$IFn$_invoke$arity$variadic = meter__2.cljs$core$IFn$_invoke$arity$variadic;
return meter;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.nav = (function() {
var nav = null;
var nav__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});
var nav__2 = (function() { 
var G__16620__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__7808__auto__,children__7809__auto__);
};
var G__16620 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16620__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16620.cljs$lang$maxFixedArity = 1;
G__16620.cljs$lang$applyTo = (function (arglist__16621){
var opts__7808__auto__ = cljs.core.first(arglist__16621);
var children__7809__auto__ = cljs.core.rest(arglist__16621);
return G__16620__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16620.cljs$core$IFn$_invoke$arity$variadic = G__16620__delegate;
return G__16620;
})()
;
nav = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return nav__0.call(this);
default:
return nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = nav__2.cljs$lang$applyTo;
nav.cljs$core$IFn$_invoke$arity$0 = nav__0;
nav.cljs$core$IFn$_invoke$arity$variadic = nav__2.cljs$core$IFn$_invoke$arity$variadic;
return nav;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.noscript = (function() {
var noscript = null;
var noscript__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});
var noscript__2 = (function() { 
var G__16622__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__7808__auto__,children__7809__auto__);
};
var G__16622 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16622__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16622.cljs$lang$maxFixedArity = 1;
G__16622.cljs$lang$applyTo = (function (arglist__16623){
var opts__7808__auto__ = cljs.core.first(arglist__16623);
var children__7809__auto__ = cljs.core.rest(arglist__16623);
return G__16622__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16622.cljs$core$IFn$_invoke$arity$variadic = G__16622__delegate;
return G__16622;
})()
;
noscript = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return noscript__0.call(this);
default:
return noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noscript.cljs$lang$maxFixedArity = 1;
noscript.cljs$lang$applyTo = noscript__2.cljs$lang$applyTo;
noscript.cljs$core$IFn$_invoke$arity$0 = noscript__0;
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__2.cljs$core$IFn$_invoke$arity$variadic;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.object = (function() {
var object = null;
var object__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});
var object__2 = (function() { 
var G__16624__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__7808__auto__,children__7809__auto__);
};
var G__16624 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16624__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16624.cljs$lang$maxFixedArity = 1;
G__16624.cljs$lang$applyTo = (function (arglist__16625){
var opts__7808__auto__ = cljs.core.first(arglist__16625);
var children__7809__auto__ = cljs.core.rest(arglist__16625);
return G__16624__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16624.cljs$core$IFn$_invoke$arity$variadic = G__16624__delegate;
return G__16624;
})()
;
object = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return object__0.call(this);
default:
return object__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object.cljs$lang$maxFixedArity = 1;
object.cljs$lang$applyTo = object__2.cljs$lang$applyTo;
object.cljs$core$IFn$_invoke$arity$0 = object__0;
object.cljs$core$IFn$_invoke$arity$variadic = object__2.cljs$core$IFn$_invoke$arity$variadic;
return object;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ol = (function() {
var ol = null;
var ol__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});
var ol__2 = (function() { 
var G__16626__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__7808__auto__,children__7809__auto__);
};
var G__16626 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16626__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16626.cljs$lang$maxFixedArity = 1;
G__16626.cljs$lang$applyTo = (function (arglist__16627){
var opts__7808__auto__ = cljs.core.first(arglist__16627);
var children__7809__auto__ = cljs.core.rest(arglist__16627);
return G__16626__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16626.cljs$core$IFn$_invoke$arity$variadic = G__16626__delegate;
return G__16626;
})()
;
ol = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return ol__0.call(this);
default:
return ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ol.cljs$lang$maxFixedArity = 1;
ol.cljs$lang$applyTo = ol__2.cljs$lang$applyTo;
ol.cljs$core$IFn$_invoke$arity$0 = ol__0;
ol.cljs$core$IFn$_invoke$arity$variadic = ol__2.cljs$core$IFn$_invoke$arity$variadic;
return ol;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.optgroup = (function() {
var optgroup = null;
var optgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});
var optgroup__2 = (function() { 
var G__16628__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__7808__auto__,children__7809__auto__);
};
var G__16628 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16628__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16628.cljs$lang$maxFixedArity = 1;
G__16628.cljs$lang$applyTo = (function (arglist__16629){
var opts__7808__auto__ = cljs.core.first(arglist__16629);
var children__7809__auto__ = cljs.core.rest(arglist__16629);
return G__16628__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16628.cljs$core$IFn$_invoke$arity$variadic = G__16628__delegate;
return G__16628;
})()
;
optgroup = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return optgroup__0.call(this);
default:
return optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
optgroup.cljs$lang$maxFixedArity = 1;
optgroup.cljs$lang$applyTo = optgroup__2.cljs$lang$applyTo;
optgroup.cljs$core$IFn$_invoke$arity$0 = optgroup__0;
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.output = (function() {
var output = null;
var output__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});
var output__2 = (function() { 
var G__16630__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__7808__auto__,children__7809__auto__);
};
var G__16630 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16630__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16630.cljs$lang$maxFixedArity = 1;
G__16630.cljs$lang$applyTo = (function (arglist__16631){
var opts__7808__auto__ = cljs.core.first(arglist__16631);
var children__7809__auto__ = cljs.core.rest(arglist__16631);
return G__16630__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16630.cljs$core$IFn$_invoke$arity$variadic = G__16630__delegate;
return G__16630;
})()
;
output = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return output__0.call(this);
default:
return output__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
output.cljs$lang$maxFixedArity = 1;
output.cljs$lang$applyTo = output__2.cljs$lang$applyTo;
output.cljs$core$IFn$_invoke$arity$0 = output__0;
output.cljs$core$IFn$_invoke$arity$variadic = output__2.cljs$core$IFn$_invoke$arity$variadic;
return output;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.p = (function() {
var p = null;
var p__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});
var p__2 = (function() { 
var G__16632__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__7808__auto__,children__7809__auto__);
};
var G__16632 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16632__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16632.cljs$lang$maxFixedArity = 1;
G__16632.cljs$lang$applyTo = (function (arglist__16633){
var opts__7808__auto__ = cljs.core.first(arglist__16633);
var children__7809__auto__ = cljs.core.rest(arglist__16633);
return G__16632__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16632.cljs$core$IFn$_invoke$arity$variadic = G__16632__delegate;
return G__16632;
})()
;
p = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return p__0.call(this);
default:
return p__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p.cljs$lang$maxFixedArity = 1;
p.cljs$lang$applyTo = p__2.cljs$lang$applyTo;
p.cljs$core$IFn$_invoke$arity$0 = p__0;
p.cljs$core$IFn$_invoke$arity$variadic = p__2.cljs$core$IFn$_invoke$arity$variadic;
return p;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.param = (function() {
var param = null;
var param__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});
var param__2 = (function() { 
var G__16634__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__7808__auto__,children__7809__auto__);
};
var G__16634 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16634__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16634.cljs$lang$maxFixedArity = 1;
G__16634.cljs$lang$applyTo = (function (arglist__16635){
var opts__7808__auto__ = cljs.core.first(arglist__16635);
var children__7809__auto__ = cljs.core.rest(arglist__16635);
return G__16634__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16634.cljs$core$IFn$_invoke$arity$variadic = G__16634__delegate;
return G__16634;
})()
;
param = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return param__0.call(this);
default:
return param__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
param.cljs$lang$maxFixedArity = 1;
param.cljs$lang$applyTo = param__2.cljs$lang$applyTo;
param.cljs$core$IFn$_invoke$arity$0 = param__0;
param.cljs$core$IFn$_invoke$arity$variadic = param__2.cljs$core$IFn$_invoke$arity$variadic;
return param;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.pre = (function() {
var pre = null;
var pre__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});
var pre__2 = (function() { 
var G__16636__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__7808__auto__,children__7809__auto__);
};
var G__16636 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16636__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16636.cljs$lang$maxFixedArity = 1;
G__16636.cljs$lang$applyTo = (function (arglist__16637){
var opts__7808__auto__ = cljs.core.first(arglist__16637);
var children__7809__auto__ = cljs.core.rest(arglist__16637);
return G__16636__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16636.cljs$core$IFn$_invoke$arity$variadic = G__16636__delegate;
return G__16636;
})()
;
pre = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return pre__0.call(this);
default:
return pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pre.cljs$lang$maxFixedArity = 1;
pre.cljs$lang$applyTo = pre__2.cljs$lang$applyTo;
pre.cljs$core$IFn$_invoke$arity$0 = pre__0;
pre.cljs$core$IFn$_invoke$arity$variadic = pre__2.cljs$core$IFn$_invoke$arity$variadic;
return pre;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.progress = (function() {
var progress = null;
var progress__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});
var progress__2 = (function() { 
var G__16638__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__7808__auto__,children__7809__auto__);
};
var G__16638 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16638__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16638.cljs$lang$maxFixedArity = 1;
G__16638.cljs$lang$applyTo = (function (arglist__16639){
var opts__7808__auto__ = cljs.core.first(arglist__16639);
var children__7809__auto__ = cljs.core.rest(arglist__16639);
return G__16638__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16638.cljs$core$IFn$_invoke$arity$variadic = G__16638__delegate;
return G__16638;
})()
;
progress = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return progress__0.call(this);
default:
return progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
progress.cljs$lang$maxFixedArity = 1;
progress.cljs$lang$applyTo = progress__2.cljs$lang$applyTo;
progress.cljs$core$IFn$_invoke$arity$0 = progress__0;
progress.cljs$core$IFn$_invoke$arity$variadic = progress__2.cljs$core$IFn$_invoke$arity$variadic;
return progress;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.q = (function() {
var q = null;
var q__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});
var q__2 = (function() { 
var G__16640__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__7808__auto__,children__7809__auto__);
};
var G__16640 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16640__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16640.cljs$lang$maxFixedArity = 1;
G__16640.cljs$lang$applyTo = (function (arglist__16641){
var opts__7808__auto__ = cljs.core.first(arglist__16641);
var children__7809__auto__ = cljs.core.rest(arglist__16641);
return G__16640__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16640.cljs$core$IFn$_invoke$arity$variadic = G__16640__delegate;
return G__16640;
})()
;
q = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return q__0.call(this);
default:
return q__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = q__2.cljs$lang$applyTo;
q.cljs$core$IFn$_invoke$arity$0 = q__0;
q.cljs$core$IFn$_invoke$arity$variadic = q__2.cljs$core$IFn$_invoke$arity$variadic;
return q;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rp = (function() {
var rp = null;
var rp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});
var rp__2 = (function() { 
var G__16642__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__7808__auto__,children__7809__auto__);
};
var G__16642 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16642__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16642.cljs$lang$maxFixedArity = 1;
G__16642.cljs$lang$applyTo = (function (arglist__16643){
var opts__7808__auto__ = cljs.core.first(arglist__16643);
var children__7809__auto__ = cljs.core.rest(arglist__16643);
return G__16642__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16642.cljs$core$IFn$_invoke$arity$variadic = G__16642__delegate;
return G__16642;
})()
;
rp = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return rp__0.call(this);
default:
return rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rp.cljs$lang$maxFixedArity = 1;
rp.cljs$lang$applyTo = rp__2.cljs$lang$applyTo;
rp.cljs$core$IFn$_invoke$arity$0 = rp__0;
rp.cljs$core$IFn$_invoke$arity$variadic = rp__2.cljs$core$IFn$_invoke$arity$variadic;
return rp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rt = (function() {
var rt = null;
var rt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});
var rt__2 = (function() { 
var G__16644__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__7808__auto__,children__7809__auto__);
};
var G__16644 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16644__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16644.cljs$lang$maxFixedArity = 1;
G__16644.cljs$lang$applyTo = (function (arglist__16645){
var opts__7808__auto__ = cljs.core.first(arglist__16645);
var children__7809__auto__ = cljs.core.rest(arglist__16645);
return G__16644__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16644.cljs$core$IFn$_invoke$arity$variadic = G__16644__delegate;
return G__16644;
})()
;
rt = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return rt__0.call(this);
default:
return rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rt.cljs$lang$maxFixedArity = 1;
rt.cljs$lang$applyTo = rt__2.cljs$lang$applyTo;
rt.cljs$core$IFn$_invoke$arity$0 = rt__0;
rt.cljs$core$IFn$_invoke$arity$variadic = rt__2.cljs$core$IFn$_invoke$arity$variadic;
return rt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ruby = (function() {
var ruby = null;
var ruby__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});
var ruby__2 = (function() { 
var G__16646__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__7808__auto__,children__7809__auto__);
};
var G__16646 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16646__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16646.cljs$lang$maxFixedArity = 1;
G__16646.cljs$lang$applyTo = (function (arglist__16647){
var opts__7808__auto__ = cljs.core.first(arglist__16647);
var children__7809__auto__ = cljs.core.rest(arglist__16647);
return G__16646__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16646.cljs$core$IFn$_invoke$arity$variadic = G__16646__delegate;
return G__16646;
})()
;
ruby = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return ruby__0.call(this);
default:
return ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ruby.cljs$lang$maxFixedArity = 1;
ruby.cljs$lang$applyTo = ruby__2.cljs$lang$applyTo;
ruby.cljs$core$IFn$_invoke$arity$0 = ruby__0;
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__2.cljs$core$IFn$_invoke$arity$variadic;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.s = (function() {
var s = null;
var s__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});
var s__2 = (function() { 
var G__16648__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__7808__auto__,children__7809__auto__);
};
var G__16648 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16648__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16648.cljs$lang$maxFixedArity = 1;
G__16648.cljs$lang$applyTo = (function (arglist__16649){
var opts__7808__auto__ = cljs.core.first(arglist__16649);
var children__7809__auto__ = cljs.core.rest(arglist__16649);
return G__16648__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16648.cljs$core$IFn$_invoke$arity$variadic = G__16648__delegate;
return G__16648;
})()
;
s = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return s__0.call(this);
default:
return s__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
s.cljs$lang$maxFixedArity = 1;
s.cljs$lang$applyTo = s__2.cljs$lang$applyTo;
s.cljs$core$IFn$_invoke$arity$0 = s__0;
s.cljs$core$IFn$_invoke$arity$variadic = s__2.cljs$core$IFn$_invoke$arity$variadic;
return s;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.samp = (function() {
var samp = null;
var samp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});
var samp__2 = (function() { 
var G__16650__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__7808__auto__,children__7809__auto__);
};
var G__16650 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16650__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16650.cljs$lang$maxFixedArity = 1;
G__16650.cljs$lang$applyTo = (function (arglist__16651){
var opts__7808__auto__ = cljs.core.first(arglist__16651);
var children__7809__auto__ = cljs.core.rest(arglist__16651);
return G__16650__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16650.cljs$core$IFn$_invoke$arity$variadic = G__16650__delegate;
return G__16650;
})()
;
samp = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return samp__0.call(this);
default:
return samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
samp.cljs$lang$maxFixedArity = 1;
samp.cljs$lang$applyTo = samp__2.cljs$lang$applyTo;
samp.cljs$core$IFn$_invoke$arity$0 = samp__0;
samp.cljs$core$IFn$_invoke$arity$variadic = samp__2.cljs$core$IFn$_invoke$arity$variadic;
return samp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.script = (function() {
var script = null;
var script__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});
var script__2 = (function() { 
var G__16652__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__7808__auto__,children__7809__auto__);
};
var G__16652 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16652__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16652.cljs$lang$maxFixedArity = 1;
G__16652.cljs$lang$applyTo = (function (arglist__16653){
var opts__7808__auto__ = cljs.core.first(arglist__16653);
var children__7809__auto__ = cljs.core.rest(arglist__16653);
return G__16652__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16652.cljs$core$IFn$_invoke$arity$variadic = G__16652__delegate;
return G__16652;
})()
;
script = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return script__0.call(this);
default:
return script__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
script.cljs$lang$maxFixedArity = 1;
script.cljs$lang$applyTo = script__2.cljs$lang$applyTo;
script.cljs$core$IFn$_invoke$arity$0 = script__0;
script.cljs$core$IFn$_invoke$arity$variadic = script__2.cljs$core$IFn$_invoke$arity$variadic;
return script;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.section = (function() {
var section = null;
var section__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});
var section__2 = (function() { 
var G__16654__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__7808__auto__,children__7809__auto__);
};
var G__16654 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16654__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16654.cljs$lang$maxFixedArity = 1;
G__16654.cljs$lang$applyTo = (function (arglist__16655){
var opts__7808__auto__ = cljs.core.first(arglist__16655);
var children__7809__auto__ = cljs.core.rest(arglist__16655);
return G__16654__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16654.cljs$core$IFn$_invoke$arity$variadic = G__16654__delegate;
return G__16654;
})()
;
section = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return section__0.call(this);
default:
return section__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
section.cljs$lang$maxFixedArity = 1;
section.cljs$lang$applyTo = section__2.cljs$lang$applyTo;
section.cljs$core$IFn$_invoke$arity$0 = section__0;
section.cljs$core$IFn$_invoke$arity$variadic = section__2.cljs$core$IFn$_invoke$arity$variadic;
return section;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.select = (function() {
var select = null;
var select__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});
var select__2 = (function() { 
var G__16656__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__7808__auto__,children__7809__auto__);
};
var G__16656 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16656__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16656.cljs$lang$maxFixedArity = 1;
G__16656.cljs$lang$applyTo = (function (arglist__16657){
var opts__7808__auto__ = cljs.core.first(arglist__16657);
var children__7809__auto__ = cljs.core.rest(arglist__16657);
return G__16656__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16656.cljs$core$IFn$_invoke$arity$variadic = G__16656__delegate;
return G__16656;
})()
;
select = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return select__0.call(this);
default:
return select__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$lang$maxFixedArity = 1;
select.cljs$lang$applyTo = select__2.cljs$lang$applyTo;
select.cljs$core$IFn$_invoke$arity$0 = select__0;
select.cljs$core$IFn$_invoke$arity$variadic = select__2.cljs$core$IFn$_invoke$arity$variadic;
return select;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.small = (function() {
var small = null;
var small__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});
var small__2 = (function() { 
var G__16658__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__7808__auto__,children__7809__auto__);
};
var G__16658 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16658__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16658.cljs$lang$maxFixedArity = 1;
G__16658.cljs$lang$applyTo = (function (arglist__16659){
var opts__7808__auto__ = cljs.core.first(arglist__16659);
var children__7809__auto__ = cljs.core.rest(arglist__16659);
return G__16658__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16658.cljs$core$IFn$_invoke$arity$variadic = G__16658__delegate;
return G__16658;
})()
;
small = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return small__0.call(this);
default:
return small__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
small.cljs$lang$maxFixedArity = 1;
small.cljs$lang$applyTo = small__2.cljs$lang$applyTo;
small.cljs$core$IFn$_invoke$arity$0 = small__0;
small.cljs$core$IFn$_invoke$arity$variadic = small__2.cljs$core$IFn$_invoke$arity$variadic;
return small;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.source = (function() {
var source = null;
var source__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});
var source__2 = (function() { 
var G__16660__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__7808__auto__,children__7809__auto__);
};
var G__16660 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16660__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16660.cljs$lang$maxFixedArity = 1;
G__16660.cljs$lang$applyTo = (function (arglist__16661){
var opts__7808__auto__ = cljs.core.first(arglist__16661);
var children__7809__auto__ = cljs.core.rest(arglist__16661);
return G__16660__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16660.cljs$core$IFn$_invoke$arity$variadic = G__16660__delegate;
return G__16660;
})()
;
source = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return source__0.call(this);
default:
return source__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
source.cljs$lang$maxFixedArity = 1;
source.cljs$lang$applyTo = source__2.cljs$lang$applyTo;
source.cljs$core$IFn$_invoke$arity$0 = source__0;
source.cljs$core$IFn$_invoke$arity$variadic = source__2.cljs$core$IFn$_invoke$arity$variadic;
return source;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.span = (function() {
var span = null;
var span__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});
var span__2 = (function() { 
var G__16662__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__7808__auto__,children__7809__auto__);
};
var G__16662 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16662__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16662.cljs$lang$maxFixedArity = 1;
G__16662.cljs$lang$applyTo = (function (arglist__16663){
var opts__7808__auto__ = cljs.core.first(arglist__16663);
var children__7809__auto__ = cljs.core.rest(arglist__16663);
return G__16662__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16662.cljs$core$IFn$_invoke$arity$variadic = G__16662__delegate;
return G__16662;
})()
;
span = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return span__0.call(this);
default:
return span__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
span.cljs$lang$maxFixedArity = 1;
span.cljs$lang$applyTo = span__2.cljs$lang$applyTo;
span.cljs$core$IFn$_invoke$arity$0 = span__0;
span.cljs$core$IFn$_invoke$arity$variadic = span__2.cljs$core$IFn$_invoke$arity$variadic;
return span;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.strong = (function() {
var strong = null;
var strong__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});
var strong__2 = (function() { 
var G__16664__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__7808__auto__,children__7809__auto__);
};
var G__16664 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16664__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16664.cljs$lang$maxFixedArity = 1;
G__16664.cljs$lang$applyTo = (function (arglist__16665){
var opts__7808__auto__ = cljs.core.first(arglist__16665);
var children__7809__auto__ = cljs.core.rest(arglist__16665);
return G__16664__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16664.cljs$core$IFn$_invoke$arity$variadic = G__16664__delegate;
return G__16664;
})()
;
strong = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return strong__0.call(this);
default:
return strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
strong.cljs$lang$maxFixedArity = 1;
strong.cljs$lang$applyTo = strong__2.cljs$lang$applyTo;
strong.cljs$core$IFn$_invoke$arity$0 = strong__0;
strong.cljs$core$IFn$_invoke$arity$variadic = strong__2.cljs$core$IFn$_invoke$arity$variadic;
return strong;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.style = (function() {
var style = null;
var style__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});
var style__2 = (function() { 
var G__16666__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__7808__auto__,children__7809__auto__);
};
var G__16666 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16666__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16666.cljs$lang$maxFixedArity = 1;
G__16666.cljs$lang$applyTo = (function (arglist__16667){
var opts__7808__auto__ = cljs.core.first(arglist__16667);
var children__7809__auto__ = cljs.core.rest(arglist__16667);
return G__16666__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16666.cljs$core$IFn$_invoke$arity$variadic = G__16666__delegate;
return G__16666;
})()
;
style = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return style__0.call(this);
default:
return style__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = style__2.cljs$lang$applyTo;
style.cljs$core$IFn$_invoke$arity$0 = style__0;
style.cljs$core$IFn$_invoke$arity$variadic = style__2.cljs$core$IFn$_invoke$arity$variadic;
return style;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sub = (function() {
var sub = null;
var sub__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});
var sub__2 = (function() { 
var G__16668__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__7808__auto__,children__7809__auto__);
};
var G__16668 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16668__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16668.cljs$lang$maxFixedArity = 1;
G__16668.cljs$lang$applyTo = (function (arglist__16669){
var opts__7808__auto__ = cljs.core.first(arglist__16669);
var children__7809__auto__ = cljs.core.rest(arglist__16669);
return G__16668__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16668.cljs$core$IFn$_invoke$arity$variadic = G__16668__delegate;
return G__16668;
})()
;
sub = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return sub__0.call(this);
default:
return sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$lang$maxFixedArity = 1;
sub.cljs$lang$applyTo = sub__2.cljs$lang$applyTo;
sub.cljs$core$IFn$_invoke$arity$0 = sub__0;
sub.cljs$core$IFn$_invoke$arity$variadic = sub__2.cljs$core$IFn$_invoke$arity$variadic;
return sub;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.summary = (function() {
var summary = null;
var summary__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});
var summary__2 = (function() { 
var G__16670__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__7808__auto__,children__7809__auto__);
};
var G__16670 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16670__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16670.cljs$lang$maxFixedArity = 1;
G__16670.cljs$lang$applyTo = (function (arglist__16671){
var opts__7808__auto__ = cljs.core.first(arglist__16671);
var children__7809__auto__ = cljs.core.rest(arglist__16671);
return G__16670__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16670.cljs$core$IFn$_invoke$arity$variadic = G__16670__delegate;
return G__16670;
})()
;
summary = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return summary__0.call(this);
default:
return summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary.cljs$lang$maxFixedArity = 1;
summary.cljs$lang$applyTo = summary__2.cljs$lang$applyTo;
summary.cljs$core$IFn$_invoke$arity$0 = summary__0;
summary.cljs$core$IFn$_invoke$arity$variadic = summary__2.cljs$core$IFn$_invoke$arity$variadic;
return summary;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sup = (function() {
var sup = null;
var sup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});
var sup__2 = (function() { 
var G__16672__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__7808__auto__,children__7809__auto__);
};
var G__16672 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16672__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16672.cljs$lang$maxFixedArity = 1;
G__16672.cljs$lang$applyTo = (function (arglist__16673){
var opts__7808__auto__ = cljs.core.first(arglist__16673);
var children__7809__auto__ = cljs.core.rest(arglist__16673);
return G__16672__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16672.cljs$core$IFn$_invoke$arity$variadic = G__16672__delegate;
return G__16672;
})()
;
sup = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return sup__0.call(this);
default:
return sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sup.cljs$lang$maxFixedArity = 1;
sup.cljs$lang$applyTo = sup__2.cljs$lang$applyTo;
sup.cljs$core$IFn$_invoke$arity$0 = sup__0;
sup.cljs$core$IFn$_invoke$arity$variadic = sup__2.cljs$core$IFn$_invoke$arity$variadic;
return sup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.table = (function() {
var table = null;
var table__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});
var table__2 = (function() { 
var G__16674__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__7808__auto__,children__7809__auto__);
};
var G__16674 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16674__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16674.cljs$lang$maxFixedArity = 1;
G__16674.cljs$lang$applyTo = (function (arglist__16675){
var opts__7808__auto__ = cljs.core.first(arglist__16675);
var children__7809__auto__ = cljs.core.rest(arglist__16675);
return G__16674__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16674.cljs$core$IFn$_invoke$arity$variadic = G__16674__delegate;
return G__16674;
})()
;
table = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return table__0.call(this);
default:
return table__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table.cljs$lang$maxFixedArity = 1;
table.cljs$lang$applyTo = table__2.cljs$lang$applyTo;
table.cljs$core$IFn$_invoke$arity$0 = table__0;
table.cljs$core$IFn$_invoke$arity$variadic = table__2.cljs$core$IFn$_invoke$arity$variadic;
return table;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tbody = (function() {
var tbody = null;
var tbody__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});
var tbody__2 = (function() { 
var G__16676__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__7808__auto__,children__7809__auto__);
};
var G__16676 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16676__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16676.cljs$lang$maxFixedArity = 1;
G__16676.cljs$lang$applyTo = (function (arglist__16677){
var opts__7808__auto__ = cljs.core.first(arglist__16677);
var children__7809__auto__ = cljs.core.rest(arglist__16677);
return G__16676__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16676.cljs$core$IFn$_invoke$arity$variadic = G__16676__delegate;
return G__16676;
})()
;
tbody = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return tbody__0.call(this);
default:
return tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tbody.cljs$lang$maxFixedArity = 1;
tbody.cljs$lang$applyTo = tbody__2.cljs$lang$applyTo;
tbody.cljs$core$IFn$_invoke$arity$0 = tbody__0;
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__2.cljs$core$IFn$_invoke$arity$variadic;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.td = (function() {
var td = null;
var td__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});
var td__2 = (function() { 
var G__16678__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__7808__auto__,children__7809__auto__);
};
var G__16678 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16678__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16678.cljs$lang$maxFixedArity = 1;
G__16678.cljs$lang$applyTo = (function (arglist__16679){
var opts__7808__auto__ = cljs.core.first(arglist__16679);
var children__7809__auto__ = cljs.core.rest(arglist__16679);
return G__16678__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16678.cljs$core$IFn$_invoke$arity$variadic = G__16678__delegate;
return G__16678;
})()
;
td = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return td__0.call(this);
default:
return td__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
td.cljs$lang$maxFixedArity = 1;
td.cljs$lang$applyTo = td__2.cljs$lang$applyTo;
td.cljs$core$IFn$_invoke$arity$0 = td__0;
td.cljs$core$IFn$_invoke$arity$variadic = td__2.cljs$core$IFn$_invoke$arity$variadic;
return td;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tfoot = (function() {
var tfoot = null;
var tfoot__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});
var tfoot__2 = (function() { 
var G__16680__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__7808__auto__,children__7809__auto__);
};
var G__16680 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16680__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16680.cljs$lang$maxFixedArity = 1;
G__16680.cljs$lang$applyTo = (function (arglist__16681){
var opts__7808__auto__ = cljs.core.first(arglist__16681);
var children__7809__auto__ = cljs.core.rest(arglist__16681);
return G__16680__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16680.cljs$core$IFn$_invoke$arity$variadic = G__16680__delegate;
return G__16680;
})()
;
tfoot = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return tfoot__0.call(this);
default:
return tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tfoot.cljs$lang$maxFixedArity = 1;
tfoot.cljs$lang$applyTo = tfoot__2.cljs$lang$applyTo;
tfoot.cljs$core$IFn$_invoke$arity$0 = tfoot__0;
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__2.cljs$core$IFn$_invoke$arity$variadic;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.th = (function() {
var th = null;
var th__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});
var th__2 = (function() { 
var G__16682__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__7808__auto__,children__7809__auto__);
};
var G__16682 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16682__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16682.cljs$lang$maxFixedArity = 1;
G__16682.cljs$lang$applyTo = (function (arglist__16683){
var opts__7808__auto__ = cljs.core.first(arglist__16683);
var children__7809__auto__ = cljs.core.rest(arglist__16683);
return G__16682__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16682.cljs$core$IFn$_invoke$arity$variadic = G__16682__delegate;
return G__16682;
})()
;
th = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return th__0.call(this);
default:
return th__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
th.cljs$lang$maxFixedArity = 1;
th.cljs$lang$applyTo = th__2.cljs$lang$applyTo;
th.cljs$core$IFn$_invoke$arity$0 = th__0;
th.cljs$core$IFn$_invoke$arity$variadic = th__2.cljs$core$IFn$_invoke$arity$variadic;
return th;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.thead = (function() {
var thead = null;
var thead__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});
var thead__2 = (function() { 
var G__16684__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__7808__auto__,children__7809__auto__);
};
var G__16684 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16684__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16684.cljs$lang$maxFixedArity = 1;
G__16684.cljs$lang$applyTo = (function (arglist__16685){
var opts__7808__auto__ = cljs.core.first(arglist__16685);
var children__7809__auto__ = cljs.core.rest(arglist__16685);
return G__16684__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16684.cljs$core$IFn$_invoke$arity$variadic = G__16684__delegate;
return G__16684;
})()
;
thead = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return thead__0.call(this);
default:
return thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thead.cljs$lang$maxFixedArity = 1;
thead.cljs$lang$applyTo = thead__2.cljs$lang$applyTo;
thead.cljs$core$IFn$_invoke$arity$0 = thead__0;
thead.cljs$core$IFn$_invoke$arity$variadic = thead__2.cljs$core$IFn$_invoke$arity$variadic;
return thead;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.time = (function() {
var time = null;
var time__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});
var time__2 = (function() { 
var G__16686__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__7808__auto__,children__7809__auto__);
};
var G__16686 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16686__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16686.cljs$lang$maxFixedArity = 1;
G__16686.cljs$lang$applyTo = (function (arglist__16687){
var opts__7808__auto__ = cljs.core.first(arglist__16687);
var children__7809__auto__ = cljs.core.rest(arglist__16687);
return G__16686__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16686.cljs$core$IFn$_invoke$arity$variadic = G__16686__delegate;
return G__16686;
})()
;
time = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return time__0.call(this);
default:
return time__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time.cljs$lang$maxFixedArity = 1;
time.cljs$lang$applyTo = time__2.cljs$lang$applyTo;
time.cljs$core$IFn$_invoke$arity$0 = time__0;
time.cljs$core$IFn$_invoke$arity$variadic = time__2.cljs$core$IFn$_invoke$arity$variadic;
return time;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.title = (function() {
var title = null;
var title__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});
var title__2 = (function() { 
var G__16688__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__7808__auto__,children__7809__auto__);
};
var G__16688 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16688__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16688.cljs$lang$maxFixedArity = 1;
G__16688.cljs$lang$applyTo = (function (arglist__16689){
var opts__7808__auto__ = cljs.core.first(arglist__16689);
var children__7809__auto__ = cljs.core.rest(arglist__16689);
return G__16688__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16688.cljs$core$IFn$_invoke$arity$variadic = G__16688__delegate;
return G__16688;
})()
;
title = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return title__0.call(this);
default:
return title__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
title.cljs$lang$maxFixedArity = 1;
title.cljs$lang$applyTo = title__2.cljs$lang$applyTo;
title.cljs$core$IFn$_invoke$arity$0 = title__0;
title.cljs$core$IFn$_invoke$arity$variadic = title__2.cljs$core$IFn$_invoke$arity$variadic;
return title;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tr = (function() {
var tr = null;
var tr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});
var tr__2 = (function() { 
var G__16690__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__7808__auto__,children__7809__auto__);
};
var G__16690 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16690__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16690.cljs$lang$maxFixedArity = 1;
G__16690.cljs$lang$applyTo = (function (arglist__16691){
var opts__7808__auto__ = cljs.core.first(arglist__16691);
var children__7809__auto__ = cljs.core.rest(arglist__16691);
return G__16690__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16690.cljs$core$IFn$_invoke$arity$variadic = G__16690__delegate;
return G__16690;
})()
;
tr = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return tr__0.call(this);
default:
return tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tr.cljs$lang$maxFixedArity = 1;
tr.cljs$lang$applyTo = tr__2.cljs$lang$applyTo;
tr.cljs$core$IFn$_invoke$arity$0 = tr__0;
tr.cljs$core$IFn$_invoke$arity$variadic = tr__2.cljs$core$IFn$_invoke$arity$variadic;
return tr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.track = (function() {
var track = null;
var track__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});
var track__2 = (function() { 
var G__16692__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__7808__auto__,children__7809__auto__);
};
var G__16692 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16692__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16692.cljs$lang$maxFixedArity = 1;
G__16692.cljs$lang$applyTo = (function (arglist__16693){
var opts__7808__auto__ = cljs.core.first(arglist__16693);
var children__7809__auto__ = cljs.core.rest(arglist__16693);
return G__16692__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16692.cljs$core$IFn$_invoke$arity$variadic = G__16692__delegate;
return G__16692;
})()
;
track = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return track__0.call(this);
default:
return track__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
track.cljs$lang$maxFixedArity = 1;
track.cljs$lang$applyTo = track__2.cljs$lang$applyTo;
track.cljs$core$IFn$_invoke$arity$0 = track__0;
track.cljs$core$IFn$_invoke$arity$variadic = track__2.cljs$core$IFn$_invoke$arity$variadic;
return track;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.u = (function() {
var u = null;
var u__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});
var u__2 = (function() { 
var G__16694__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__7808__auto__,children__7809__auto__);
};
var G__16694 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16694__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16694.cljs$lang$maxFixedArity = 1;
G__16694.cljs$lang$applyTo = (function (arglist__16695){
var opts__7808__auto__ = cljs.core.first(arglist__16695);
var children__7809__auto__ = cljs.core.rest(arglist__16695);
return G__16694__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16694.cljs$core$IFn$_invoke$arity$variadic = G__16694__delegate;
return G__16694;
})()
;
u = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return u__0.call(this);
default:
return u__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
u.cljs$lang$maxFixedArity = 1;
u.cljs$lang$applyTo = u__2.cljs$lang$applyTo;
u.cljs$core$IFn$_invoke$arity$0 = u__0;
u.cljs$core$IFn$_invoke$arity$variadic = u__2.cljs$core$IFn$_invoke$arity$variadic;
return u;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ul = (function() {
var ul = null;
var ul__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});
var ul__2 = (function() { 
var G__16696__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__7808__auto__,children__7809__auto__);
};
var G__16696 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16696__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16696.cljs$lang$maxFixedArity = 1;
G__16696.cljs$lang$applyTo = (function (arglist__16697){
var opts__7808__auto__ = cljs.core.first(arglist__16697);
var children__7809__auto__ = cljs.core.rest(arglist__16697);
return G__16696__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16696.cljs$core$IFn$_invoke$arity$variadic = G__16696__delegate;
return G__16696;
})()
;
ul = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return ul__0.call(this);
default:
return ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ul.cljs$lang$maxFixedArity = 1;
ul.cljs$lang$applyTo = ul__2.cljs$lang$applyTo;
ul.cljs$core$IFn$_invoke$arity$0 = ul__0;
ul.cljs$core$IFn$_invoke$arity$variadic = ul__2.cljs$core$IFn$_invoke$arity$variadic;
return ul;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.var$ = (function() {
var var$ = null;
var var$__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});
var var$__2 = (function() { 
var G__16698__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__7808__auto__,children__7809__auto__);
};
var G__16698 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16698__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16698.cljs$lang$maxFixedArity = 1;
G__16698.cljs$lang$applyTo = (function (arglist__16699){
var opts__7808__auto__ = cljs.core.first(arglist__16699);
var children__7809__auto__ = cljs.core.rest(arglist__16699);
return G__16698__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16698.cljs$core$IFn$_invoke$arity$variadic = G__16698__delegate;
return G__16698;
})()
;
var$ = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return var$__0.call(this);
default:
return var$__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
var$.cljs$lang$maxFixedArity = 1;
var$.cljs$lang$applyTo = var$__2.cljs$lang$applyTo;
var$.cljs$core$IFn$_invoke$arity$0 = var$__0;
var$.cljs$core$IFn$_invoke$arity$variadic = var$__2.cljs$core$IFn$_invoke$arity$variadic;
return var$;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.video = (function() {
var video = null;
var video__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});
var video__2 = (function() { 
var G__16700__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__7808__auto__,children__7809__auto__);
};
var G__16700 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16700__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16700.cljs$lang$maxFixedArity = 1;
G__16700.cljs$lang$applyTo = (function (arglist__16701){
var opts__7808__auto__ = cljs.core.first(arglist__16701);
var children__7809__auto__ = cljs.core.rest(arglist__16701);
return G__16700__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16700.cljs$core$IFn$_invoke$arity$variadic = G__16700__delegate;
return G__16700;
})()
;
video = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return video__0.call(this);
default:
return video__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
video.cljs$lang$maxFixedArity = 1;
video.cljs$lang$applyTo = video__2.cljs$lang$applyTo;
video.cljs$core$IFn$_invoke$arity$0 = video__0;
video.cljs$core$IFn$_invoke$arity$variadic = video__2.cljs$core$IFn$_invoke$arity$variadic;
return video;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.wbr = (function() {
var wbr = null;
var wbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});
var wbr__2 = (function() { 
var G__16702__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__7808__auto__,children__7809__auto__);
};
var G__16702 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16702__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16702.cljs$lang$maxFixedArity = 1;
G__16702.cljs$lang$applyTo = (function (arglist__16703){
var opts__7808__auto__ = cljs.core.first(arglist__16703);
var children__7809__auto__ = cljs.core.rest(arglist__16703);
return G__16702__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16702.cljs$core$IFn$_invoke$arity$variadic = G__16702__delegate;
return G__16702;
})()
;
wbr = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return wbr__0.call(this);
default:
return wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wbr.cljs$lang$maxFixedArity = 1;
wbr.cljs$lang$applyTo = wbr__2.cljs$lang$applyTo;
wbr.cljs$core$IFn$_invoke$arity$0 = wbr__0;
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__2.cljs$core$IFn$_invoke$arity$variadic;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.circle = (function() {
var circle = null;
var circle__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});
var circle__2 = (function() { 
var G__16704__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__7808__auto__,children__7809__auto__);
};
var G__16704 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16704__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16704.cljs$lang$maxFixedArity = 1;
G__16704.cljs$lang$applyTo = (function (arglist__16705){
var opts__7808__auto__ = cljs.core.first(arglist__16705);
var children__7809__auto__ = cljs.core.rest(arglist__16705);
return G__16704__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16704.cljs$core$IFn$_invoke$arity$variadic = G__16704__delegate;
return G__16704;
})()
;
circle = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return circle__0.call(this);
default:
return circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
circle.cljs$lang$maxFixedArity = 1;
circle.cljs$lang$applyTo = circle__2.cljs$lang$applyTo;
circle.cljs$core$IFn$_invoke$arity$0 = circle__0;
circle.cljs$core$IFn$_invoke$arity$variadic = circle__2.cljs$core$IFn$_invoke$arity$variadic;
return circle;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ellipse = (function() {
var ellipse = null;
var ellipse__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});
var ellipse__2 = (function() { 
var G__16706__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__7808__auto__,children__7809__auto__);
};
var G__16706 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16706__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16706.cljs$lang$maxFixedArity = 1;
G__16706.cljs$lang$applyTo = (function (arglist__16707){
var opts__7808__auto__ = cljs.core.first(arglist__16707);
var children__7809__auto__ = cljs.core.rest(arglist__16707);
return G__16706__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16706.cljs$core$IFn$_invoke$arity$variadic = G__16706__delegate;
return G__16706;
})()
;
ellipse = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return ellipse__0.call(this);
default:
return ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ellipse.cljs$lang$maxFixedArity = 1;
ellipse.cljs$lang$applyTo = ellipse__2.cljs$lang$applyTo;
ellipse.cljs$core$IFn$_invoke$arity$0 = ellipse__0;
ellipse.cljs$core$IFn$_invoke$arity$variadic = ellipse__2.cljs$core$IFn$_invoke$arity$variadic;
return ellipse;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.g = (function() {
var g = null;
var g__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});
var g__2 = (function() { 
var G__16708__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__7808__auto__,children__7809__auto__);
};
var G__16708 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16708__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16708.cljs$lang$maxFixedArity = 1;
G__16708.cljs$lang$applyTo = (function (arglist__16709){
var opts__7808__auto__ = cljs.core.first(arglist__16709);
var children__7809__auto__ = cljs.core.rest(arglist__16709);
return G__16708__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16708.cljs$core$IFn$_invoke$arity$variadic = G__16708__delegate;
return G__16708;
})()
;
g = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return g__0.call(this);
default:
return g__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
g.cljs$lang$maxFixedArity = 1;
g.cljs$lang$applyTo = g__2.cljs$lang$applyTo;
g.cljs$core$IFn$_invoke$arity$0 = g__0;
g.cljs$core$IFn$_invoke$arity$variadic = g__2.cljs$core$IFn$_invoke$arity$variadic;
return g;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.line = (function() {
var line = null;
var line__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});
var line__2 = (function() { 
var G__16710__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__7808__auto__,children__7809__auto__);
};
var G__16710 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16710__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16710.cljs$lang$maxFixedArity = 1;
G__16710.cljs$lang$applyTo = (function (arglist__16711){
var opts__7808__auto__ = cljs.core.first(arglist__16711);
var children__7809__auto__ = cljs.core.rest(arglist__16711);
return G__16710__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16710.cljs$core$IFn$_invoke$arity$variadic = G__16710__delegate;
return G__16710;
})()
;
line = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return line__0.call(this);
default:
return line__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line.cljs$lang$maxFixedArity = 1;
line.cljs$lang$applyTo = line__2.cljs$lang$applyTo;
line.cljs$core$IFn$_invoke$arity$0 = line__0;
line.cljs$core$IFn$_invoke$arity$variadic = line__2.cljs$core$IFn$_invoke$arity$variadic;
return line;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.path = (function() {
var path = null;
var path__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});
var path__2 = (function() { 
var G__16712__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__7808__auto__,children__7809__auto__);
};
var G__16712 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16712__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16712.cljs$lang$maxFixedArity = 1;
G__16712.cljs$lang$applyTo = (function (arglist__16713){
var opts__7808__auto__ = cljs.core.first(arglist__16713);
var children__7809__auto__ = cljs.core.rest(arglist__16713);
return G__16712__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16712.cljs$core$IFn$_invoke$arity$variadic = G__16712__delegate;
return G__16712;
})()
;
path = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return path__0.call(this);
default:
return path__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = path__2.cljs$lang$applyTo;
path.cljs$core$IFn$_invoke$arity$0 = path__0;
path.cljs$core$IFn$_invoke$arity$variadic = path__2.cljs$core$IFn$_invoke$arity$variadic;
return path;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polyline = (function() {
var polyline = null;
var polyline__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});
var polyline__2 = (function() { 
var G__16714__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__7808__auto__,children__7809__auto__);
};
var G__16714 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16714__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16714.cljs$lang$maxFixedArity = 1;
G__16714.cljs$lang$applyTo = (function (arglist__16715){
var opts__7808__auto__ = cljs.core.first(arglist__16715);
var children__7809__auto__ = cljs.core.rest(arglist__16715);
return G__16714__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16714.cljs$core$IFn$_invoke$arity$variadic = G__16714__delegate;
return G__16714;
})()
;
polyline = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return polyline__0.call(this);
default:
return polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polyline.cljs$lang$maxFixedArity = 1;
polyline.cljs$lang$applyTo = polyline__2.cljs$lang$applyTo;
polyline.cljs$core$IFn$_invoke$arity$0 = polyline__0;
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__2.cljs$core$IFn$_invoke$arity$variadic;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rect = (function() {
var rect = null;
var rect__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});
var rect__2 = (function() { 
var G__16716__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__7808__auto__,children__7809__auto__);
};
var G__16716 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16716__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16716.cljs$lang$maxFixedArity = 1;
G__16716.cljs$lang$applyTo = (function (arglist__16717){
var opts__7808__auto__ = cljs.core.first(arglist__16717);
var children__7809__auto__ = cljs.core.rest(arglist__16717);
return G__16716__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16716.cljs$core$IFn$_invoke$arity$variadic = G__16716__delegate;
return G__16716;
})()
;
rect = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return rect__0.call(this);
default:
return rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rect.cljs$lang$maxFixedArity = 1;
rect.cljs$lang$applyTo = rect__2.cljs$lang$applyTo;
rect.cljs$core$IFn$_invoke$arity$0 = rect__0;
rect.cljs$core$IFn$_invoke$arity$variadic = rect__2.cljs$core$IFn$_invoke$arity$variadic;
return rect;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.svg = (function() {
var svg = null;
var svg__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});
var svg__2 = (function() { 
var G__16718__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__7808__auto__,children__7809__auto__);
};
var G__16718 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16718__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16718.cljs$lang$maxFixedArity = 1;
G__16718.cljs$lang$applyTo = (function (arglist__16719){
var opts__7808__auto__ = cljs.core.first(arglist__16719);
var children__7809__auto__ = cljs.core.rest(arglist__16719);
return G__16718__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16718.cljs$core$IFn$_invoke$arity$variadic = G__16718__delegate;
return G__16718;
})()
;
svg = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return svg__0.call(this);
default:
return svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
svg.cljs$lang$maxFixedArity = 1;
svg.cljs$lang$applyTo = svg__2.cljs$lang$applyTo;
svg.cljs$core$IFn$_invoke$arity$0 = svg__0;
svg.cljs$core$IFn$_invoke$arity$variadic = svg__2.cljs$core$IFn$_invoke$arity$variadic;
return svg;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.text = (function() {
var text = null;
var text__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});
var text__2 = (function() { 
var G__16720__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__7808__auto__,children__7809__auto__);
};
var G__16720 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16720__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16720.cljs$lang$maxFixedArity = 1;
G__16720.cljs$lang$applyTo = (function (arglist__16721){
var opts__7808__auto__ = cljs.core.first(arglist__16721);
var children__7809__auto__ = cljs.core.rest(arglist__16721);
return G__16720__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16720.cljs$core$IFn$_invoke$arity$variadic = G__16720__delegate;
return G__16720;
})()
;
text = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return text__0.call(this);
default:
return text__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$lang$maxFixedArity = 1;
text.cljs$lang$applyTo = text__2.cljs$lang$applyTo;
text.cljs$core$IFn$_invoke$arity$0 = text__0;
text.cljs$core$IFn$_invoke$arity$variadic = text__2.cljs$core$IFn$_invoke$arity$variadic;
return text;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.defs = (function() {
var defs = null;
var defs__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});
var defs__2 = (function() { 
var G__16722__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__7808__auto__,children__7809__auto__);
};
var G__16722 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16722__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16722.cljs$lang$maxFixedArity = 1;
G__16722.cljs$lang$applyTo = (function (arglist__16723){
var opts__7808__auto__ = cljs.core.first(arglist__16723);
var children__7809__auto__ = cljs.core.rest(arglist__16723);
return G__16722__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16722.cljs$core$IFn$_invoke$arity$variadic = G__16722__delegate;
return G__16722;
})()
;
defs = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return defs__0.call(this);
default:
return defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
defs.cljs$lang$maxFixedArity = 1;
defs.cljs$lang$applyTo = defs__2.cljs$lang$applyTo;
defs.cljs$core$IFn$_invoke$arity$0 = defs__0;
defs.cljs$core$IFn$_invoke$arity$variadic = defs__2.cljs$core$IFn$_invoke$arity$variadic;
return defs;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.linearGradient = (function() {
var linearGradient = null;
var linearGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});
var linearGradient__2 = (function() { 
var G__16724__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__7808__auto__,children__7809__auto__);
};
var G__16724 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16724__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16724.cljs$lang$maxFixedArity = 1;
G__16724.cljs$lang$applyTo = (function (arglist__16725){
var opts__7808__auto__ = cljs.core.first(arglist__16725);
var children__7809__auto__ = cljs.core.rest(arglist__16725);
return G__16724__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16724.cljs$core$IFn$_invoke$arity$variadic = G__16724__delegate;
return G__16724;
})()
;
linearGradient = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return linearGradient__0.call(this);
default:
return linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linearGradient.cljs$lang$maxFixedArity = 1;
linearGradient.cljs$lang$applyTo = linearGradient__2.cljs$lang$applyTo;
linearGradient.cljs$core$IFn$_invoke$arity$0 = linearGradient__0;
linearGradient.cljs$core$IFn$_invoke$arity$variadic = linearGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return linearGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polygon = (function() {
var polygon = null;
var polygon__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});
var polygon__2 = (function() { 
var G__16726__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__7808__auto__,children__7809__auto__);
};
var G__16726 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16726__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16726.cljs$lang$maxFixedArity = 1;
G__16726.cljs$lang$applyTo = (function (arglist__16727){
var opts__7808__auto__ = cljs.core.first(arglist__16727);
var children__7809__auto__ = cljs.core.rest(arglist__16727);
return G__16726__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16726.cljs$core$IFn$_invoke$arity$variadic = G__16726__delegate;
return G__16726;
})()
;
polygon = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return polygon__0.call(this);
default:
return polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polygon.cljs$lang$maxFixedArity = 1;
polygon.cljs$lang$applyTo = polygon__2.cljs$lang$applyTo;
polygon.cljs$core$IFn$_invoke$arity$0 = polygon__0;
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__2.cljs$core$IFn$_invoke$arity$variadic;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.radialGradient = (function() {
var radialGradient = null;
var radialGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});
var radialGradient__2 = (function() { 
var G__16728__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__7808__auto__,children__7809__auto__);
};
var G__16728 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16728__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16728.cljs$lang$maxFixedArity = 1;
G__16728.cljs$lang$applyTo = (function (arglist__16729){
var opts__7808__auto__ = cljs.core.first(arglist__16729);
var children__7809__auto__ = cljs.core.rest(arglist__16729);
return G__16728__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16728.cljs$core$IFn$_invoke$arity$variadic = G__16728__delegate;
return G__16728;
})()
;
radialGradient = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return radialGradient__0.call(this);
default:
return radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radialGradient.cljs$lang$maxFixedArity = 1;
radialGradient.cljs$lang$applyTo = radialGradient__2.cljs$lang$applyTo;
radialGradient.cljs$core$IFn$_invoke$arity$0 = radialGradient__0;
radialGradient.cljs$core$IFn$_invoke$arity$variadic = radialGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return radialGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.stop = (function() {
var stop = null;
var stop__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});
var stop__2 = (function() { 
var G__16730__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__7808__auto__,children__7809__auto__);
};
var G__16730 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16730__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16730.cljs$lang$maxFixedArity = 1;
G__16730.cljs$lang$applyTo = (function (arglist__16731){
var opts__7808__auto__ = cljs.core.first(arglist__16731);
var children__7809__auto__ = cljs.core.rest(arglist__16731);
return G__16730__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16730.cljs$core$IFn$_invoke$arity$variadic = G__16730__delegate;
return G__16730;
})()
;
stop = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return stop__0.call(this);
default:
return stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stop.cljs$lang$maxFixedArity = 1;
stop.cljs$lang$applyTo = stop__2.cljs$lang$applyTo;
stop.cljs$core$IFn$_invoke$arity$0 = stop__0;
stop.cljs$core$IFn$_invoke$arity$variadic = stop__2.cljs$core$IFn$_invoke$arity$variadic;
return stop;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tspan = (function() {
var tspan = null;
var tspan__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});
var tspan__2 = (function() { 
var G__16732__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__7808__auto__,children__7809__auto__);
};
var G__16732 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16732__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16732.cljs$lang$maxFixedArity = 1;
G__16732.cljs$lang$applyTo = (function (arglist__16733){
var opts__7808__auto__ = cljs.core.first(arglist__16733);
var children__7809__auto__ = cljs.core.rest(arglist__16733);
return G__16732__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16732.cljs$core$IFn$_invoke$arity$variadic = G__16732__delegate;
return G__16732;
})()
;
tspan = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return tspan__0.call(this);
default:
return tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tspan.cljs$lang$maxFixedArity = 1;
tspan.cljs$lang$applyTo = tspan__2.cljs$lang$applyTo;
tspan.cljs$core$IFn$_invoke$arity$0 = tspan__0;
tspan.cljs$core$IFn$_invoke$arity$variadic = tspan__2.cljs$core$IFn$_invoke$arity$variadic;
return tspan;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.input = (function() {
var input = null;
var input__0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});
var input__2 = (function() { 
var G__16734__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__7808__auto__,children__7809__auto__);
};
var G__16734 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16734__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16734.cljs$lang$maxFixedArity = 1;
G__16734.cljs$lang$applyTo = (function (arglist__16735){
var opts__7808__auto__ = cljs.core.first(arglist__16735);
var children__7809__auto__ = cljs.core.rest(arglist__16735);
return G__16734__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16734.cljs$core$IFn$_invoke$arity$variadic = G__16734__delegate;
return G__16734;
})()
;
input = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return input__0.call(this);
default:
return input__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = input__2.cljs$lang$applyTo;
input.cljs$core$IFn$_invoke$arity$0 = input__0;
input.cljs$core$IFn$_invoke$arity$variadic = input__2.cljs$core$IFn$_invoke$arity$variadic;
return input;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.textarea = (function() {
var textarea = null;
var textarea__0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});
var textarea__2 = (function() { 
var G__16736__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__7808__auto__,children__7809__auto__);
};
var G__16736 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16736__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16736.cljs$lang$maxFixedArity = 1;
G__16736.cljs$lang$applyTo = (function (arglist__16737){
var opts__7808__auto__ = cljs.core.first(arglist__16737);
var children__7809__auto__ = cljs.core.rest(arglist__16737);
return G__16736__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16736.cljs$core$IFn$_invoke$arity$variadic = G__16736__delegate;
return G__16736;
})()
;
textarea = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return textarea__0.call(this);
default:
return textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
textarea.cljs$lang$maxFixedArity = 1;
textarea.cljs$lang$applyTo = textarea__2.cljs$lang$applyTo;
textarea.cljs$core$IFn$_invoke$arity$0 = textarea__0;
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__2.cljs$core$IFn$_invoke$arity$variadic;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.option = (function() {
var option = null;
var option__0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});
var option__2 = (function() { 
var G__16738__delegate = function (opts__7808__auto__,children__7809__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__7808__auto__,children__7809__auto__);
};
var G__16738 = function (opts__7808__auto__,var_args){
var children__7809__auto__ = null;
if (arguments.length > 1) {
  children__7809__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16738__delegate.call(this,opts__7808__auto__,children__7809__auto__);};
G__16738.cljs$lang$maxFixedArity = 1;
G__16738.cljs$lang$applyTo = (function (arglist__16739){
var opts__7808__auto__ = cljs.core.first(arglist__16739);
var children__7809__auto__ = cljs.core.rest(arglist__16739);
return G__16738__delegate(opts__7808__auto__,children__7809__auto__);
});
G__16738.cljs$core$IFn$_invoke$arity$variadic = G__16738__delegate;
return G__16738;
})()
;
option = function(opts__7808__auto__,var_args){
var children__7809__auto__ = var_args;
switch(arguments.length){
case 0:
return option__0.call(this);
default:
return option__2.cljs$core$IFn$_invoke$arity$variadic(opts__7808__auto__, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
option.cljs$lang$maxFixedArity = 1;
option.cljs$lang$applyTo = option__2.cljs$lang$applyTo;
option.cljs$core$IFn$_invoke$arity$0 = option__0;
option.cljs$core$IFn$_invoke$arity$variadic = option__2.cljs$core$IFn$_invoke$arity$variadic;
return option;
})()
;
om_tools.dom.class_set = (function class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});
