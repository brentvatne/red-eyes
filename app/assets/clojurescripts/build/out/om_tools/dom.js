// Compiled by ClojureScript 0.0-2511
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){
if(cljs.core.truth_((function (){var or__3636__auto__ = (cljs.core.count(attr) < (5));
if(or__3636__auto__){
return or__3636__auto__;
} else {
var G__27275 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__27275) {
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
return om_tools.dom.camel_case(attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){
var G__27278 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__27278) {
case "for":
return cljs.core.constant$keyword$69;

break;
case "class":
return cljs.core.constant$keyword$70;

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
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
* Returns potentially modified value for DOM element attribute.
* Recursively formats map values (ie :style attribute)
*/
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
var G__27281 = opt_val;
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(G__27281) : om_tools.dom.format_opts.call(null,G__27281));
} else {
return opt_val;

}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27284){
var vec__27285 = p__27284;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27285,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
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
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
* Returns a vector of [opts children] for from first and second
* argument given to DOM function
*/
om_tools.dom.element_args = (function element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){
var vec__27287 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27287,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27287,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
/**
* @param {...*} var_args
*/
om_tools.dom.a = (function() {
var a = null;
var a__0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});
var a__2 = (function() { 
var G__27288__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.a,opts__12744__auto__,children__12745__auto__);
};
var G__27288 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27288__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27288.cljs$lang$maxFixedArity = 1;
G__27288.cljs$lang$applyTo = (function (arglist__27289){
var opts__12744__auto__ = cljs.core.first(arglist__27289);
var children__12745__auto__ = cljs.core.rest(arglist__27289);
return G__27288__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27288.cljs$core$IFn$_invoke$arity$variadic = G__27288__delegate;
return G__27288;
})()
;
a = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return a__0.call(this);
default:
return a__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.abbr,null,null);
});
var abbr__2 = (function() { 
var G__27290__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__12744__auto__,children__12745__auto__);
};
var G__27290 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27290__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27290.cljs$lang$maxFixedArity = 1;
G__27290.cljs$lang$applyTo = (function (arglist__27291){
var opts__12744__auto__ = cljs.core.first(arglist__27291);
var children__12745__auto__ = cljs.core.rest(arglist__27291);
return G__27290__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27290.cljs$core$IFn$_invoke$arity$variadic = G__27290__delegate;
return G__27290;
})()
;
abbr = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return abbr__0.call(this);
default:
return abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.address,null,null);
});
var address__2 = (function() { 
var G__27292__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.address,opts__12744__auto__,children__12745__auto__);
};
var G__27292 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27292__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27292.cljs$lang$maxFixedArity = 1;
G__27292.cljs$lang$applyTo = (function (arglist__27293){
var opts__12744__auto__ = cljs.core.first(arglist__27293);
var children__12745__auto__ = cljs.core.rest(arglist__27293);
return G__27292__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27292.cljs$core$IFn$_invoke$arity$variadic = G__27292__delegate;
return G__27292;
})()
;
address = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return address__0.call(this);
default:
return address__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.area,null,null);
});
var area__2 = (function() { 
var G__27294__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.area,opts__12744__auto__,children__12745__auto__);
};
var G__27294 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27294__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27294.cljs$lang$maxFixedArity = 1;
G__27294.cljs$lang$applyTo = (function (arglist__27295){
var opts__12744__auto__ = cljs.core.first(arglist__27295);
var children__12745__auto__ = cljs.core.rest(arglist__27295);
return G__27294__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27294.cljs$core$IFn$_invoke$arity$variadic = G__27294__delegate;
return G__27294;
})()
;
area = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return area__0.call(this);
default:
return area__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.article,null,null);
});
var article__2 = (function() { 
var G__27296__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.article,opts__12744__auto__,children__12745__auto__);
};
var G__27296 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27296__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27296.cljs$lang$maxFixedArity = 1;
G__27296.cljs$lang$applyTo = (function (arglist__27297){
var opts__12744__auto__ = cljs.core.first(arglist__27297);
var children__12745__auto__ = cljs.core.rest(arglist__27297);
return G__27296__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27296.cljs$core$IFn$_invoke$arity$variadic = G__27296__delegate;
return G__27296;
})()
;
article = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return article__0.call(this);
default:
return article__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.aside,null,null);
});
var aside__2 = (function() { 
var G__27298__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.aside,opts__12744__auto__,children__12745__auto__);
};
var G__27298 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27298__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27298.cljs$lang$maxFixedArity = 1;
G__27298.cljs$lang$applyTo = (function (arglist__27299){
var opts__12744__auto__ = cljs.core.first(arglist__27299);
var children__12745__auto__ = cljs.core.rest(arglist__27299);
return G__27298__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27298.cljs$core$IFn$_invoke$arity$variadic = G__27298__delegate;
return G__27298;
})()
;
aside = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return aside__0.call(this);
default:
return aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.audio,null,null);
});
var audio__2 = (function() { 
var G__27300__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.audio,opts__12744__auto__,children__12745__auto__);
};
var G__27300 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27300__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27300.cljs$lang$maxFixedArity = 1;
G__27300.cljs$lang$applyTo = (function (arglist__27301){
var opts__12744__auto__ = cljs.core.first(arglist__27301);
var children__12745__auto__ = cljs.core.rest(arglist__27301);
return G__27300__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27300.cljs$core$IFn$_invoke$arity$variadic = G__27300__delegate;
return G__27300;
})()
;
audio = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return audio__0.call(this);
default:
return audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.b,null,null);
});
var b__2 = (function() { 
var G__27302__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.b,opts__12744__auto__,children__12745__auto__);
};
var G__27302 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27302__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27302.cljs$lang$maxFixedArity = 1;
G__27302.cljs$lang$applyTo = (function (arglist__27303){
var opts__12744__auto__ = cljs.core.first(arglist__27303);
var children__12745__auto__ = cljs.core.rest(arglist__27303);
return G__27302__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27302.cljs$core$IFn$_invoke$arity$variadic = G__27302__delegate;
return G__27302;
})()
;
b = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return b__0.call(this);
default:
return b__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.base,null,null);
});
var base__2 = (function() { 
var G__27304__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.base,opts__12744__auto__,children__12745__auto__);
};
var G__27304 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27304__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27304.cljs$lang$maxFixedArity = 1;
G__27304.cljs$lang$applyTo = (function (arglist__27305){
var opts__12744__auto__ = cljs.core.first(arglist__27305);
var children__12745__auto__ = cljs.core.rest(arglist__27305);
return G__27304__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27304.cljs$core$IFn$_invoke$arity$variadic = G__27304__delegate;
return G__27304;
})()
;
base = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return base__0.call(this);
default:
return base__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.bdi,null,null);
});
var bdi__2 = (function() { 
var G__27306__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__12744__auto__,children__12745__auto__);
};
var G__27306 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27306__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27306.cljs$lang$maxFixedArity = 1;
G__27306.cljs$lang$applyTo = (function (arglist__27307){
var opts__12744__auto__ = cljs.core.first(arglist__27307);
var children__12745__auto__ = cljs.core.rest(arglist__27307);
return G__27306__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27306.cljs$core$IFn$_invoke$arity$variadic = G__27306__delegate;
return G__27306;
})()
;
bdi = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return bdi__0.call(this);
default:
return bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.bdo,null,null);
});
var bdo__2 = (function() { 
var G__27308__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__12744__auto__,children__12745__auto__);
};
var G__27308 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27308__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27308.cljs$lang$maxFixedArity = 1;
G__27308.cljs$lang$applyTo = (function (arglist__27309){
var opts__12744__auto__ = cljs.core.first(arglist__27309);
var children__12745__auto__ = cljs.core.rest(arglist__27309);
return G__27308__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27308.cljs$core$IFn$_invoke$arity$variadic = G__27308__delegate;
return G__27308;
})()
;
bdo = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return bdo__0.call(this);
default:
return bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.big,null,null);
});
var big__2 = (function() { 
var G__27310__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.big,opts__12744__auto__,children__12745__auto__);
};
var G__27310 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27310__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27310.cljs$lang$maxFixedArity = 1;
G__27310.cljs$lang$applyTo = (function (arglist__27311){
var opts__12744__auto__ = cljs.core.first(arglist__27311);
var children__12745__auto__ = cljs.core.rest(arglist__27311);
return G__27310__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27310.cljs$core$IFn$_invoke$arity$variadic = G__27310__delegate;
return G__27310;
})()
;
big = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return big__0.call(this);
default:
return big__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.blockquote,null,null);
});
var blockquote__2 = (function() { 
var G__27312__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__12744__auto__,children__12745__auto__);
};
var G__27312 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27312__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27312.cljs$lang$maxFixedArity = 1;
G__27312.cljs$lang$applyTo = (function (arglist__27313){
var opts__12744__auto__ = cljs.core.first(arglist__27313);
var children__12745__auto__ = cljs.core.rest(arglist__27313);
return G__27312__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27312.cljs$core$IFn$_invoke$arity$variadic = G__27312__delegate;
return G__27312;
})()
;
blockquote = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return blockquote__0.call(this);
default:
return blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.body,null,null);
});
var body__2 = (function() { 
var G__27314__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.body,opts__12744__auto__,children__12745__auto__);
};
var G__27314 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27314__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27314.cljs$lang$maxFixedArity = 1;
G__27314.cljs$lang$applyTo = (function (arglist__27315){
var opts__12744__auto__ = cljs.core.first(arglist__27315);
var children__12745__auto__ = cljs.core.rest(arglist__27315);
return G__27314__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27314.cljs$core$IFn$_invoke$arity$variadic = G__27314__delegate;
return G__27314;
})()
;
body = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return body__0.call(this);
default:
return body__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.br,null,null);
});
var br__2 = (function() { 
var G__27316__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.br,opts__12744__auto__,children__12745__auto__);
};
var G__27316 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27316__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27316.cljs$lang$maxFixedArity = 1;
G__27316.cljs$lang$applyTo = (function (arglist__27317){
var opts__12744__auto__ = cljs.core.first(arglist__27317);
var children__12745__auto__ = cljs.core.rest(arglist__27317);
return G__27316__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27316.cljs$core$IFn$_invoke$arity$variadic = G__27316__delegate;
return G__27316;
})()
;
br = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return br__0.call(this);
default:
return br__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.button,null,null);
});
var button__2 = (function() { 
var G__27318__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.button,opts__12744__auto__,children__12745__auto__);
};
var G__27318 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27318__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27318.cljs$lang$maxFixedArity = 1;
G__27318.cljs$lang$applyTo = (function (arglist__27319){
var opts__12744__auto__ = cljs.core.first(arglist__27319);
var children__12745__auto__ = cljs.core.rest(arglist__27319);
return G__27318__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27318.cljs$core$IFn$_invoke$arity$variadic = G__27318__delegate;
return G__27318;
})()
;
button = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return button__0.call(this);
default:
return button__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.canvas,null,null);
});
var canvas__2 = (function() { 
var G__27320__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__12744__auto__,children__12745__auto__);
};
var G__27320 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27320__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27320.cljs$lang$maxFixedArity = 1;
G__27320.cljs$lang$applyTo = (function (arglist__27321){
var opts__12744__auto__ = cljs.core.first(arglist__27321);
var children__12745__auto__ = cljs.core.rest(arglist__27321);
return G__27320__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27320.cljs$core$IFn$_invoke$arity$variadic = G__27320__delegate;
return G__27320;
})()
;
canvas = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return canvas__0.call(this);
default:
return canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.caption,null,null);
});
var caption__2 = (function() { 
var G__27322__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.caption,opts__12744__auto__,children__12745__auto__);
};
var G__27322 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27322__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27322.cljs$lang$maxFixedArity = 1;
G__27322.cljs$lang$applyTo = (function (arglist__27323){
var opts__12744__auto__ = cljs.core.first(arglist__27323);
var children__12745__auto__ = cljs.core.rest(arglist__27323);
return G__27322__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27322.cljs$core$IFn$_invoke$arity$variadic = G__27322__delegate;
return G__27322;
})()
;
caption = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return caption__0.call(this);
default:
return caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.cite,null,null);
});
var cite__2 = (function() { 
var G__27324__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.cite,opts__12744__auto__,children__12745__auto__);
};
var G__27324 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27324__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27324.cljs$lang$maxFixedArity = 1;
G__27324.cljs$lang$applyTo = (function (arglist__27325){
var opts__12744__auto__ = cljs.core.first(arglist__27325);
var children__12745__auto__ = cljs.core.rest(arglist__27325);
return G__27324__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27324.cljs$core$IFn$_invoke$arity$variadic = G__27324__delegate;
return G__27324;
})()
;
cite = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return cite__0.call(this);
default:
return cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.code,null,null);
});
var code__2 = (function() { 
var G__27326__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.code,opts__12744__auto__,children__12745__auto__);
};
var G__27326 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27326__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27326.cljs$lang$maxFixedArity = 1;
G__27326.cljs$lang$applyTo = (function (arglist__27327){
var opts__12744__auto__ = cljs.core.first(arglist__27327);
var children__12745__auto__ = cljs.core.rest(arglist__27327);
return G__27326__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27326.cljs$core$IFn$_invoke$arity$variadic = G__27326__delegate;
return G__27326;
})()
;
code = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return code__0.call(this);
default:
return code__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.col,null,null);
});
var col__2 = (function() { 
var G__27328__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.col,opts__12744__auto__,children__12745__auto__);
};
var G__27328 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27328__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27328.cljs$lang$maxFixedArity = 1;
G__27328.cljs$lang$applyTo = (function (arglist__27329){
var opts__12744__auto__ = cljs.core.first(arglist__27329);
var children__12745__auto__ = cljs.core.rest(arglist__27329);
return G__27328__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27328.cljs$core$IFn$_invoke$arity$variadic = G__27328__delegate;
return G__27328;
})()
;
col = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return col__0.call(this);
default:
return col__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.colgroup,null,null);
});
var colgroup__2 = (function() { 
var G__27330__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__12744__auto__,children__12745__auto__);
};
var G__27330 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27330__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27330.cljs$lang$maxFixedArity = 1;
G__27330.cljs$lang$applyTo = (function (arglist__27331){
var opts__12744__auto__ = cljs.core.first(arglist__27331);
var children__12745__auto__ = cljs.core.rest(arglist__27331);
return G__27330__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27330.cljs$core$IFn$_invoke$arity$variadic = G__27330__delegate;
return G__27330;
})()
;
colgroup = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return colgroup__0.call(this);
default:
return colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.data,null,null);
});
var data__2 = (function() { 
var G__27332__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.data,opts__12744__auto__,children__12745__auto__);
};
var G__27332 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27332__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27332.cljs$lang$maxFixedArity = 1;
G__27332.cljs$lang$applyTo = (function (arglist__27333){
var opts__12744__auto__ = cljs.core.first(arglist__27333);
var children__12745__auto__ = cljs.core.rest(arglist__27333);
return G__27332__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27332.cljs$core$IFn$_invoke$arity$variadic = G__27332__delegate;
return G__27332;
})()
;
data = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return data__0.call(this);
default:
return data__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.datalist,null,null);
});
var datalist__2 = (function() { 
var G__27334__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__12744__auto__,children__12745__auto__);
};
var G__27334 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27334__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27334.cljs$lang$maxFixedArity = 1;
G__27334.cljs$lang$applyTo = (function (arglist__27335){
var opts__12744__auto__ = cljs.core.first(arglist__27335);
var children__12745__auto__ = cljs.core.rest(arglist__27335);
return G__27334__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27334.cljs$core$IFn$_invoke$arity$variadic = G__27334__delegate;
return G__27334;
})()
;
datalist = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return datalist__0.call(this);
default:
return datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.dd,null,null);
});
var dd__2 = (function() { 
var G__27336__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.dd,opts__12744__auto__,children__12745__auto__);
};
var G__27336 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27336__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27336.cljs$lang$maxFixedArity = 1;
G__27336.cljs$lang$applyTo = (function (arglist__27337){
var opts__12744__auto__ = cljs.core.first(arglist__27337);
var children__12745__auto__ = cljs.core.rest(arglist__27337);
return G__27336__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27336.cljs$core$IFn$_invoke$arity$variadic = G__27336__delegate;
return G__27336;
})()
;
dd = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return dd__0.call(this);
default:
return dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.del,null,null);
});
var del__2 = (function() { 
var G__27338__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.del,opts__12744__auto__,children__12745__auto__);
};
var G__27338 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27338__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27338.cljs$lang$maxFixedArity = 1;
G__27338.cljs$lang$applyTo = (function (arglist__27339){
var opts__12744__auto__ = cljs.core.first(arglist__27339);
var children__12745__auto__ = cljs.core.rest(arglist__27339);
return G__27338__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27338.cljs$core$IFn$_invoke$arity$variadic = G__27338__delegate;
return G__27338;
})()
;
del = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return del__0.call(this);
default:
return del__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.dfn,null,null);
});
var dfn__2 = (function() { 
var G__27340__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__12744__auto__,children__12745__auto__);
};
var G__27340 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27340__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27340.cljs$lang$maxFixedArity = 1;
G__27340.cljs$lang$applyTo = (function (arglist__27341){
var opts__12744__auto__ = cljs.core.first(arglist__27341);
var children__12745__auto__ = cljs.core.rest(arglist__27341);
return G__27340__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27340.cljs$core$IFn$_invoke$arity$variadic = G__27340__delegate;
return G__27340;
})()
;
dfn = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return dfn__0.call(this);
default:
return dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.div,null,null);
});
var div__2 = (function() { 
var G__27342__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.div,opts__12744__auto__,children__12745__auto__);
};
var G__27342 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27342__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27342.cljs$lang$maxFixedArity = 1;
G__27342.cljs$lang$applyTo = (function (arglist__27343){
var opts__12744__auto__ = cljs.core.first(arglist__27343);
var children__12745__auto__ = cljs.core.rest(arglist__27343);
return G__27342__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27342.cljs$core$IFn$_invoke$arity$variadic = G__27342__delegate;
return G__27342;
})()
;
div = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return div__0.call(this);
default:
return div__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.dl,null,null);
});
var dl__2 = (function() { 
var G__27344__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.dl,opts__12744__auto__,children__12745__auto__);
};
var G__27344 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27344__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27344.cljs$lang$maxFixedArity = 1;
G__27344.cljs$lang$applyTo = (function (arglist__27345){
var opts__12744__auto__ = cljs.core.first(arglist__27345);
var children__12745__auto__ = cljs.core.rest(arglist__27345);
return G__27344__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27344.cljs$core$IFn$_invoke$arity$variadic = G__27344__delegate;
return G__27344;
})()
;
dl = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return dl__0.call(this);
default:
return dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.dt,null,null);
});
var dt__2 = (function() { 
var G__27346__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.dt,opts__12744__auto__,children__12745__auto__);
};
var G__27346 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27346__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27346.cljs$lang$maxFixedArity = 1;
G__27346.cljs$lang$applyTo = (function (arglist__27347){
var opts__12744__auto__ = cljs.core.first(arglist__27347);
var children__12745__auto__ = cljs.core.rest(arglist__27347);
return G__27346__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27346.cljs$core$IFn$_invoke$arity$variadic = G__27346__delegate;
return G__27346;
})()
;
dt = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return dt__0.call(this);
default:
return dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.em,null,null);
});
var em__2 = (function() { 
var G__27348__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.em,opts__12744__auto__,children__12745__auto__);
};
var G__27348 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27348__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27348.cljs$lang$maxFixedArity = 1;
G__27348.cljs$lang$applyTo = (function (arglist__27349){
var opts__12744__auto__ = cljs.core.first(arglist__27349);
var children__12745__auto__ = cljs.core.rest(arglist__27349);
return G__27348__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27348.cljs$core$IFn$_invoke$arity$variadic = G__27348__delegate;
return G__27348;
})()
;
em = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return em__0.call(this);
default:
return em__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.embed,null,null);
});
var embed__2 = (function() { 
var G__27350__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.embed,opts__12744__auto__,children__12745__auto__);
};
var G__27350 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27350__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27350.cljs$lang$maxFixedArity = 1;
G__27350.cljs$lang$applyTo = (function (arglist__27351){
var opts__12744__auto__ = cljs.core.first(arglist__27351);
var children__12745__auto__ = cljs.core.rest(arglist__27351);
return G__27350__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27350.cljs$core$IFn$_invoke$arity$variadic = G__27350__delegate;
return G__27350;
})()
;
embed = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return embed__0.call(this);
default:
return embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.fieldset,null,null);
});
var fieldset__2 = (function() { 
var G__27352__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__12744__auto__,children__12745__auto__);
};
var G__27352 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27352__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27352.cljs$lang$maxFixedArity = 1;
G__27352.cljs$lang$applyTo = (function (arglist__27353){
var opts__12744__auto__ = cljs.core.first(arglist__27353);
var children__12745__auto__ = cljs.core.rest(arglist__27353);
return G__27352__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27352.cljs$core$IFn$_invoke$arity$variadic = G__27352__delegate;
return G__27352;
})()
;
fieldset = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return fieldset__0.call(this);
default:
return fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.figcaption,null,null);
});
var figcaption__2 = (function() { 
var G__27354__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__12744__auto__,children__12745__auto__);
};
var G__27354 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27354__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27354.cljs$lang$maxFixedArity = 1;
G__27354.cljs$lang$applyTo = (function (arglist__27355){
var opts__12744__auto__ = cljs.core.first(arglist__27355);
var children__12745__auto__ = cljs.core.rest(arglist__27355);
return G__27354__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27354.cljs$core$IFn$_invoke$arity$variadic = G__27354__delegate;
return G__27354;
})()
;
figcaption = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return figcaption__0.call(this);
default:
return figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.figure,null,null);
});
var figure__2 = (function() { 
var G__27356__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.figure,opts__12744__auto__,children__12745__auto__);
};
var G__27356 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27356__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27356.cljs$lang$maxFixedArity = 1;
G__27356.cljs$lang$applyTo = (function (arglist__27357){
var opts__12744__auto__ = cljs.core.first(arglist__27357);
var children__12745__auto__ = cljs.core.rest(arglist__27357);
return G__27356__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27356.cljs$core$IFn$_invoke$arity$variadic = G__27356__delegate;
return G__27356;
})()
;
figure = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return figure__0.call(this);
default:
return figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.footer,null,null);
});
var footer__2 = (function() { 
var G__27358__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.footer,opts__12744__auto__,children__12745__auto__);
};
var G__27358 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27358__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27358.cljs$lang$maxFixedArity = 1;
G__27358.cljs$lang$applyTo = (function (arglist__27359){
var opts__12744__auto__ = cljs.core.first(arglist__27359);
var children__12745__auto__ = cljs.core.rest(arglist__27359);
return G__27358__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27358.cljs$core$IFn$_invoke$arity$variadic = G__27358__delegate;
return G__27358;
})()
;
footer = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return footer__0.call(this);
default:
return footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.form,null,null);
});
var form__2 = (function() { 
var G__27360__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.form,opts__12744__auto__,children__12745__auto__);
};
var G__27360 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27360__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27360.cljs$lang$maxFixedArity = 1;
G__27360.cljs$lang$applyTo = (function (arglist__27361){
var opts__12744__auto__ = cljs.core.first(arglist__27361);
var children__12745__auto__ = cljs.core.rest(arglist__27361);
return G__27360__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27360.cljs$core$IFn$_invoke$arity$variadic = G__27360__delegate;
return G__27360;
})()
;
form = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return form__0.call(this);
default:
return form__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.h1,null,null);
});
var h1__2 = (function() { 
var G__27362__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.h1,opts__12744__auto__,children__12745__auto__);
};
var G__27362 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27362__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27362.cljs$lang$maxFixedArity = 1;
G__27362.cljs$lang$applyTo = (function (arglist__27363){
var opts__12744__auto__ = cljs.core.first(arglist__27363);
var children__12745__auto__ = cljs.core.rest(arglist__27363);
return G__27362__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27362.cljs$core$IFn$_invoke$arity$variadic = G__27362__delegate;
return G__27362;
})()
;
h1 = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return h1__0.call(this);
default:
return h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.h2,null,null);
});
var h2__2 = (function() { 
var G__27364__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.h2,opts__12744__auto__,children__12745__auto__);
};
var G__27364 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27364__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27364.cljs$lang$maxFixedArity = 1;
G__27364.cljs$lang$applyTo = (function (arglist__27365){
var opts__12744__auto__ = cljs.core.first(arglist__27365);
var children__12745__auto__ = cljs.core.rest(arglist__27365);
return G__27364__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27364.cljs$core$IFn$_invoke$arity$variadic = G__27364__delegate;
return G__27364;
})()
;
h2 = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return h2__0.call(this);
default:
return h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.h3,null,null);
});
var h3__2 = (function() { 
var G__27366__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.h3,opts__12744__auto__,children__12745__auto__);
};
var G__27366 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27366__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27366.cljs$lang$maxFixedArity = 1;
G__27366.cljs$lang$applyTo = (function (arglist__27367){
var opts__12744__auto__ = cljs.core.first(arglist__27367);
var children__12745__auto__ = cljs.core.rest(arglist__27367);
return G__27366__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27366.cljs$core$IFn$_invoke$arity$variadic = G__27366__delegate;
return G__27366;
})()
;
h3 = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return h3__0.call(this);
default:
return h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.h4,null,null);
});
var h4__2 = (function() { 
var G__27368__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.h4,opts__12744__auto__,children__12745__auto__);
};
var G__27368 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27368__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27368.cljs$lang$maxFixedArity = 1;
G__27368.cljs$lang$applyTo = (function (arglist__27369){
var opts__12744__auto__ = cljs.core.first(arglist__27369);
var children__12745__auto__ = cljs.core.rest(arglist__27369);
return G__27368__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27368.cljs$core$IFn$_invoke$arity$variadic = G__27368__delegate;
return G__27368;
})()
;
h4 = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return h4__0.call(this);
default:
return h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.h5,null,null);
});
var h5__2 = (function() { 
var G__27370__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.h5,opts__12744__auto__,children__12745__auto__);
};
var G__27370 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27370__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27370.cljs$lang$maxFixedArity = 1;
G__27370.cljs$lang$applyTo = (function (arglist__27371){
var opts__12744__auto__ = cljs.core.first(arglist__27371);
var children__12745__auto__ = cljs.core.rest(arglist__27371);
return G__27370__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27370.cljs$core$IFn$_invoke$arity$variadic = G__27370__delegate;
return G__27370;
})()
;
h5 = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return h5__0.call(this);
default:
return h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.h6,null,null);
});
var h6__2 = (function() { 
var G__27372__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.h6,opts__12744__auto__,children__12745__auto__);
};
var G__27372 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27372__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27372.cljs$lang$maxFixedArity = 1;
G__27372.cljs$lang$applyTo = (function (arglist__27373){
var opts__12744__auto__ = cljs.core.first(arglist__27373);
var children__12745__auto__ = cljs.core.rest(arglist__27373);
return G__27372__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27372.cljs$core$IFn$_invoke$arity$variadic = G__27372__delegate;
return G__27372;
})()
;
h6 = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return h6__0.call(this);
default:
return h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.head,null,null);
});
var head__2 = (function() { 
var G__27374__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.head,opts__12744__auto__,children__12745__auto__);
};
var G__27374 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27374__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27374.cljs$lang$maxFixedArity = 1;
G__27374.cljs$lang$applyTo = (function (arglist__27375){
var opts__12744__auto__ = cljs.core.first(arglist__27375);
var children__12745__auto__ = cljs.core.rest(arglist__27375);
return G__27374__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27374.cljs$core$IFn$_invoke$arity$variadic = G__27374__delegate;
return G__27374;
})()
;
head = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return head__0.call(this);
default:
return head__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.header,null,null);
});
var header__2 = (function() { 
var G__27376__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.header,opts__12744__auto__,children__12745__auto__);
};
var G__27376 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27376__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27376.cljs$lang$maxFixedArity = 1;
G__27376.cljs$lang$applyTo = (function (arglist__27377){
var opts__12744__auto__ = cljs.core.first(arglist__27377);
var children__12745__auto__ = cljs.core.rest(arglist__27377);
return G__27376__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27376.cljs$core$IFn$_invoke$arity$variadic = G__27376__delegate;
return G__27376;
})()
;
header = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return header__0.call(this);
default:
return header__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.hr,null,null);
});
var hr__2 = (function() { 
var G__27378__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.hr,opts__12744__auto__,children__12745__auto__);
};
var G__27378 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27378__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27378.cljs$lang$maxFixedArity = 1;
G__27378.cljs$lang$applyTo = (function (arglist__27379){
var opts__12744__auto__ = cljs.core.first(arglist__27379);
var children__12745__auto__ = cljs.core.rest(arglist__27379);
return G__27378__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27378.cljs$core$IFn$_invoke$arity$variadic = G__27378__delegate;
return G__27378;
})()
;
hr = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return hr__0.call(this);
default:
return hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.html,null,null);
});
var html__2 = (function() { 
var G__27380__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.html,opts__12744__auto__,children__12745__auto__);
};
var G__27380 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27380__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27380.cljs$lang$maxFixedArity = 1;
G__27380.cljs$lang$applyTo = (function (arglist__27381){
var opts__12744__auto__ = cljs.core.first(arglist__27381);
var children__12745__auto__ = cljs.core.rest(arglist__27381);
return G__27380__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27380.cljs$core$IFn$_invoke$arity$variadic = G__27380__delegate;
return G__27380;
})()
;
html = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return html__0.call(this);
default:
return html__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.i,null,null);
});
var i__2 = (function() { 
var G__27382__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.i,opts__12744__auto__,children__12745__auto__);
};
var G__27382 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27382__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27382.cljs$lang$maxFixedArity = 1;
G__27382.cljs$lang$applyTo = (function (arglist__27383){
var opts__12744__auto__ = cljs.core.first(arglist__27383);
var children__12745__auto__ = cljs.core.rest(arglist__27383);
return G__27382__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27382.cljs$core$IFn$_invoke$arity$variadic = G__27382__delegate;
return G__27382;
})()
;
i = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return i__0.call(this);
default:
return i__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.iframe,null,null);
});
var iframe__2 = (function() { 
var G__27384__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__12744__auto__,children__12745__auto__);
};
var G__27384 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27384__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27384.cljs$lang$maxFixedArity = 1;
G__27384.cljs$lang$applyTo = (function (arglist__27385){
var opts__12744__auto__ = cljs.core.first(arglist__27385);
var children__12745__auto__ = cljs.core.rest(arglist__27385);
return G__27384__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27384.cljs$core$IFn$_invoke$arity$variadic = G__27384__delegate;
return G__27384;
})()
;
iframe = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return iframe__0.call(this);
default:
return iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.img,null,null);
});
var img__2 = (function() { 
var G__27386__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.img,opts__12744__auto__,children__12745__auto__);
};
var G__27386 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27386__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27386.cljs$lang$maxFixedArity = 1;
G__27386.cljs$lang$applyTo = (function (arglist__27387){
var opts__12744__auto__ = cljs.core.first(arglist__27387);
var children__12745__auto__ = cljs.core.rest(arglist__27387);
return G__27386__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27386.cljs$core$IFn$_invoke$arity$variadic = G__27386__delegate;
return G__27386;
})()
;
img = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return img__0.call(this);
default:
return img__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.ins,null,null);
});
var ins__2 = (function() { 
var G__27388__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.ins,opts__12744__auto__,children__12745__auto__);
};
var G__27388 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27388__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27388.cljs$lang$maxFixedArity = 1;
G__27388.cljs$lang$applyTo = (function (arglist__27389){
var opts__12744__auto__ = cljs.core.first(arglist__27389);
var children__12745__auto__ = cljs.core.rest(arglist__27389);
return G__27388__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27388.cljs$core$IFn$_invoke$arity$variadic = G__27388__delegate;
return G__27388;
})()
;
ins = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return ins__0.call(this);
default:
return ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.kbd,null,null);
});
var kbd__2 = (function() { 
var G__27390__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__12744__auto__,children__12745__auto__);
};
var G__27390 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27390__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27390.cljs$lang$maxFixedArity = 1;
G__27390.cljs$lang$applyTo = (function (arglist__27391){
var opts__12744__auto__ = cljs.core.first(arglist__27391);
var children__12745__auto__ = cljs.core.rest(arglist__27391);
return G__27390__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27390.cljs$core$IFn$_invoke$arity$variadic = G__27390__delegate;
return G__27390;
})()
;
kbd = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return kbd__0.call(this);
default:
return kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.keygen,null,null);
});
var keygen__2 = (function() { 
var G__27392__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__12744__auto__,children__12745__auto__);
};
var G__27392 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27392__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27392.cljs$lang$maxFixedArity = 1;
G__27392.cljs$lang$applyTo = (function (arglist__27393){
var opts__12744__auto__ = cljs.core.first(arglist__27393);
var children__12745__auto__ = cljs.core.rest(arglist__27393);
return G__27392__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27392.cljs$core$IFn$_invoke$arity$variadic = G__27392__delegate;
return G__27392;
})()
;
keygen = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return keygen__0.call(this);
default:
return keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.label,null,null);
});
var label__2 = (function() { 
var G__27394__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.label,opts__12744__auto__,children__12745__auto__);
};
var G__27394 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27394__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27394.cljs$lang$maxFixedArity = 1;
G__27394.cljs$lang$applyTo = (function (arglist__27395){
var opts__12744__auto__ = cljs.core.first(arglist__27395);
var children__12745__auto__ = cljs.core.rest(arglist__27395);
return G__27394__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27394.cljs$core$IFn$_invoke$arity$variadic = G__27394__delegate;
return G__27394;
})()
;
label = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return label__0.call(this);
default:
return label__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.legend,null,null);
});
var legend__2 = (function() { 
var G__27396__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.legend,opts__12744__auto__,children__12745__auto__);
};
var G__27396 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27396__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27396.cljs$lang$maxFixedArity = 1;
G__27396.cljs$lang$applyTo = (function (arglist__27397){
var opts__12744__auto__ = cljs.core.first(arglist__27397);
var children__12745__auto__ = cljs.core.rest(arglist__27397);
return G__27396__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27396.cljs$core$IFn$_invoke$arity$variadic = G__27396__delegate;
return G__27396;
})()
;
legend = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return legend__0.call(this);
default:
return legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.li,null,null);
});
var li__2 = (function() { 
var G__27398__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.li,opts__12744__auto__,children__12745__auto__);
};
var G__27398 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27398__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27398.cljs$lang$maxFixedArity = 1;
G__27398.cljs$lang$applyTo = (function (arglist__27399){
var opts__12744__auto__ = cljs.core.first(arglist__27399);
var children__12745__auto__ = cljs.core.rest(arglist__27399);
return G__27398__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27398.cljs$core$IFn$_invoke$arity$variadic = G__27398__delegate;
return G__27398;
})()
;
li = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return li__0.call(this);
default:
return li__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.link,null,null);
});
var link__2 = (function() { 
var G__27400__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.link,opts__12744__auto__,children__12745__auto__);
};
var G__27400 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27400__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27400.cljs$lang$maxFixedArity = 1;
G__27400.cljs$lang$applyTo = (function (arglist__27401){
var opts__12744__auto__ = cljs.core.first(arglist__27401);
var children__12745__auto__ = cljs.core.rest(arglist__27401);
return G__27400__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27400.cljs$core$IFn$_invoke$arity$variadic = G__27400__delegate;
return G__27400;
})()
;
link = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return link__0.call(this);
default:
return link__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.main,null,null);
});
var main__2 = (function() { 
var G__27402__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.main,opts__12744__auto__,children__12745__auto__);
};
var G__27402 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27402__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27402.cljs$lang$maxFixedArity = 1;
G__27402.cljs$lang$applyTo = (function (arglist__27403){
var opts__12744__auto__ = cljs.core.first(arglist__27403);
var children__12745__auto__ = cljs.core.rest(arglist__27403);
return G__27402__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27402.cljs$core$IFn$_invoke$arity$variadic = G__27402__delegate;
return G__27402;
})()
;
main = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return main__0.call(this);
default:
return main__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.map,null,null);
});
var map__2 = (function() { 
var G__27404__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.map,opts__12744__auto__,children__12745__auto__);
};
var G__27404 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27404__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27404.cljs$lang$maxFixedArity = 1;
G__27404.cljs$lang$applyTo = (function (arglist__27405){
var opts__12744__auto__ = cljs.core.first(arglist__27405);
var children__12745__auto__ = cljs.core.rest(arglist__27405);
return G__27404__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27404.cljs$core$IFn$_invoke$arity$variadic = G__27404__delegate;
return G__27404;
})()
;
map = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return map__0.call(this);
default:
return map__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.mark,null,null);
});
var mark__2 = (function() { 
var G__27406__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.mark,opts__12744__auto__,children__12745__auto__);
};
var G__27406 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27406__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27406.cljs$lang$maxFixedArity = 1;
G__27406.cljs$lang$applyTo = (function (arglist__27407){
var opts__12744__auto__ = cljs.core.first(arglist__27407);
var children__12745__auto__ = cljs.core.rest(arglist__27407);
return G__27406__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27406.cljs$core$IFn$_invoke$arity$variadic = G__27406__delegate;
return G__27406;
})()
;
mark = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return mark__0.call(this);
default:
return mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.menu,null,null);
});
var menu__2 = (function() { 
var G__27408__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.menu,opts__12744__auto__,children__12745__auto__);
};
var G__27408 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27408__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27408.cljs$lang$maxFixedArity = 1;
G__27408.cljs$lang$applyTo = (function (arglist__27409){
var opts__12744__auto__ = cljs.core.first(arglist__27409);
var children__12745__auto__ = cljs.core.rest(arglist__27409);
return G__27408__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27408.cljs$core$IFn$_invoke$arity$variadic = G__27408__delegate;
return G__27408;
})()
;
menu = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return menu__0.call(this);
default:
return menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.menuitem,null,null);
});
var menuitem__2 = (function() { 
var G__27410__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__12744__auto__,children__12745__auto__);
};
var G__27410 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27410__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27410.cljs$lang$maxFixedArity = 1;
G__27410.cljs$lang$applyTo = (function (arglist__27411){
var opts__12744__auto__ = cljs.core.first(arglist__27411);
var children__12745__auto__ = cljs.core.rest(arglist__27411);
return G__27410__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27410.cljs$core$IFn$_invoke$arity$variadic = G__27410__delegate;
return G__27410;
})()
;
menuitem = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return menuitem__0.call(this);
default:
return menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.meta,null,null);
});
var meta__2 = (function() { 
var G__27412__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.meta,opts__12744__auto__,children__12745__auto__);
};
var G__27412 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27412__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27412.cljs$lang$maxFixedArity = 1;
G__27412.cljs$lang$applyTo = (function (arglist__27413){
var opts__12744__auto__ = cljs.core.first(arglist__27413);
var children__12745__auto__ = cljs.core.rest(arglist__27413);
return G__27412__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27412.cljs$core$IFn$_invoke$arity$variadic = G__27412__delegate;
return G__27412;
})()
;
meta = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return meta__0.call(this);
default:
return meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.meter,null,null);
});
var meter__2 = (function() { 
var G__27414__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.meter,opts__12744__auto__,children__12745__auto__);
};
var G__27414 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27414__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27414.cljs$lang$maxFixedArity = 1;
G__27414.cljs$lang$applyTo = (function (arglist__27415){
var opts__12744__auto__ = cljs.core.first(arglist__27415);
var children__12745__auto__ = cljs.core.rest(arglist__27415);
return G__27414__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27414.cljs$core$IFn$_invoke$arity$variadic = G__27414__delegate;
return G__27414;
})()
;
meter = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return meter__0.call(this);
default:
return meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.nav,null,null);
});
var nav__2 = (function() { 
var G__27416__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.nav,opts__12744__auto__,children__12745__auto__);
};
var G__27416 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27416__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27416.cljs$lang$maxFixedArity = 1;
G__27416.cljs$lang$applyTo = (function (arglist__27417){
var opts__12744__auto__ = cljs.core.first(arglist__27417);
var children__12745__auto__ = cljs.core.rest(arglist__27417);
return G__27416__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27416.cljs$core$IFn$_invoke$arity$variadic = G__27416__delegate;
return G__27416;
})()
;
nav = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return nav__0.call(this);
default:
return nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.noscript,null,null);
});
var noscript__2 = (function() { 
var G__27418__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__12744__auto__,children__12745__auto__);
};
var G__27418 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27418__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27418.cljs$lang$maxFixedArity = 1;
G__27418.cljs$lang$applyTo = (function (arglist__27419){
var opts__12744__auto__ = cljs.core.first(arglist__27419);
var children__12745__auto__ = cljs.core.rest(arglist__27419);
return G__27418__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27418.cljs$core$IFn$_invoke$arity$variadic = G__27418__delegate;
return G__27418;
})()
;
noscript = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return noscript__0.call(this);
default:
return noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.object,null,null);
});
var object__2 = (function() { 
var G__27420__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.object,opts__12744__auto__,children__12745__auto__);
};
var G__27420 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27420__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27420.cljs$lang$maxFixedArity = 1;
G__27420.cljs$lang$applyTo = (function (arglist__27421){
var opts__12744__auto__ = cljs.core.first(arglist__27421);
var children__12745__auto__ = cljs.core.rest(arglist__27421);
return G__27420__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27420.cljs$core$IFn$_invoke$arity$variadic = G__27420__delegate;
return G__27420;
})()
;
object = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return object__0.call(this);
default:
return object__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.ol,null,null);
});
var ol__2 = (function() { 
var G__27422__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.ol,opts__12744__auto__,children__12745__auto__);
};
var G__27422 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27422__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27422.cljs$lang$maxFixedArity = 1;
G__27422.cljs$lang$applyTo = (function (arglist__27423){
var opts__12744__auto__ = cljs.core.first(arglist__27423);
var children__12745__auto__ = cljs.core.rest(arglist__27423);
return G__27422__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27422.cljs$core$IFn$_invoke$arity$variadic = G__27422__delegate;
return G__27422;
})()
;
ol = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return ol__0.call(this);
default:
return ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.optgroup,null,null);
});
var optgroup__2 = (function() { 
var G__27424__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__12744__auto__,children__12745__auto__);
};
var G__27424 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27424__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27424.cljs$lang$maxFixedArity = 1;
G__27424.cljs$lang$applyTo = (function (arglist__27425){
var opts__12744__auto__ = cljs.core.first(arglist__27425);
var children__12745__auto__ = cljs.core.rest(arglist__27425);
return G__27424__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27424.cljs$core$IFn$_invoke$arity$variadic = G__27424__delegate;
return G__27424;
})()
;
optgroup = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return optgroup__0.call(this);
default:
return optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.output,null,null);
});
var output__2 = (function() { 
var G__27426__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.output,opts__12744__auto__,children__12745__auto__);
};
var G__27426 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27426__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27426.cljs$lang$maxFixedArity = 1;
G__27426.cljs$lang$applyTo = (function (arglist__27427){
var opts__12744__auto__ = cljs.core.first(arglist__27427);
var children__12745__auto__ = cljs.core.rest(arglist__27427);
return G__27426__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27426.cljs$core$IFn$_invoke$arity$variadic = G__27426__delegate;
return G__27426;
})()
;
output = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return output__0.call(this);
default:
return output__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.p,null,null);
});
var p__2 = (function() { 
var G__27428__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.p,opts__12744__auto__,children__12745__auto__);
};
var G__27428 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27428__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27428.cljs$lang$maxFixedArity = 1;
G__27428.cljs$lang$applyTo = (function (arglist__27429){
var opts__12744__auto__ = cljs.core.first(arglist__27429);
var children__12745__auto__ = cljs.core.rest(arglist__27429);
return G__27428__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27428.cljs$core$IFn$_invoke$arity$variadic = G__27428__delegate;
return G__27428;
})()
;
p = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return p__0.call(this);
default:
return p__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.param,null,null);
});
var param__2 = (function() { 
var G__27430__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.param,opts__12744__auto__,children__12745__auto__);
};
var G__27430 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27430__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27430.cljs$lang$maxFixedArity = 1;
G__27430.cljs$lang$applyTo = (function (arglist__27431){
var opts__12744__auto__ = cljs.core.first(arglist__27431);
var children__12745__auto__ = cljs.core.rest(arglist__27431);
return G__27430__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27430.cljs$core$IFn$_invoke$arity$variadic = G__27430__delegate;
return G__27430;
})()
;
param = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return param__0.call(this);
default:
return param__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.pre,null,null);
});
var pre__2 = (function() { 
var G__27432__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.pre,opts__12744__auto__,children__12745__auto__);
};
var G__27432 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27432__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27432.cljs$lang$maxFixedArity = 1;
G__27432.cljs$lang$applyTo = (function (arglist__27433){
var opts__12744__auto__ = cljs.core.first(arglist__27433);
var children__12745__auto__ = cljs.core.rest(arglist__27433);
return G__27432__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27432.cljs$core$IFn$_invoke$arity$variadic = G__27432__delegate;
return G__27432;
})()
;
pre = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return pre__0.call(this);
default:
return pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.progress,null,null);
});
var progress__2 = (function() { 
var G__27434__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.progress,opts__12744__auto__,children__12745__auto__);
};
var G__27434 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27434__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27434.cljs$lang$maxFixedArity = 1;
G__27434.cljs$lang$applyTo = (function (arglist__27435){
var opts__12744__auto__ = cljs.core.first(arglist__27435);
var children__12745__auto__ = cljs.core.rest(arglist__27435);
return G__27434__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27434.cljs$core$IFn$_invoke$arity$variadic = G__27434__delegate;
return G__27434;
})()
;
progress = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return progress__0.call(this);
default:
return progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.q,null,null);
});
var q__2 = (function() { 
var G__27436__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.q,opts__12744__auto__,children__12745__auto__);
};
var G__27436 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27436__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27436.cljs$lang$maxFixedArity = 1;
G__27436.cljs$lang$applyTo = (function (arglist__27437){
var opts__12744__auto__ = cljs.core.first(arglist__27437);
var children__12745__auto__ = cljs.core.rest(arglist__27437);
return G__27436__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27436.cljs$core$IFn$_invoke$arity$variadic = G__27436__delegate;
return G__27436;
})()
;
q = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return q__0.call(this);
default:
return q__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.rp,null,null);
});
var rp__2 = (function() { 
var G__27438__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.rp,opts__12744__auto__,children__12745__auto__);
};
var G__27438 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27438__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27438.cljs$lang$maxFixedArity = 1;
G__27438.cljs$lang$applyTo = (function (arglist__27439){
var opts__12744__auto__ = cljs.core.first(arglist__27439);
var children__12745__auto__ = cljs.core.rest(arglist__27439);
return G__27438__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27438.cljs$core$IFn$_invoke$arity$variadic = G__27438__delegate;
return G__27438;
})()
;
rp = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return rp__0.call(this);
default:
return rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.rt,null,null);
});
var rt__2 = (function() { 
var G__27440__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.rt,opts__12744__auto__,children__12745__auto__);
};
var G__27440 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27440__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27440.cljs$lang$maxFixedArity = 1;
G__27440.cljs$lang$applyTo = (function (arglist__27441){
var opts__12744__auto__ = cljs.core.first(arglist__27441);
var children__12745__auto__ = cljs.core.rest(arglist__27441);
return G__27440__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27440.cljs$core$IFn$_invoke$arity$variadic = G__27440__delegate;
return G__27440;
})()
;
rt = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return rt__0.call(this);
default:
return rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.ruby,null,null);
});
var ruby__2 = (function() { 
var G__27442__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__12744__auto__,children__12745__auto__);
};
var G__27442 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27442__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27442.cljs$lang$maxFixedArity = 1;
G__27442.cljs$lang$applyTo = (function (arglist__27443){
var opts__12744__auto__ = cljs.core.first(arglist__27443);
var children__12745__auto__ = cljs.core.rest(arglist__27443);
return G__27442__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27442.cljs$core$IFn$_invoke$arity$variadic = G__27442__delegate;
return G__27442;
})()
;
ruby = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return ruby__0.call(this);
default:
return ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.s,null,null);
});
var s__2 = (function() { 
var G__27444__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.s,opts__12744__auto__,children__12745__auto__);
};
var G__27444 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27444__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27444.cljs$lang$maxFixedArity = 1;
G__27444.cljs$lang$applyTo = (function (arglist__27445){
var opts__12744__auto__ = cljs.core.first(arglist__27445);
var children__12745__auto__ = cljs.core.rest(arglist__27445);
return G__27444__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27444.cljs$core$IFn$_invoke$arity$variadic = G__27444__delegate;
return G__27444;
})()
;
s = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return s__0.call(this);
default:
return s__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.samp,null,null);
});
var samp__2 = (function() { 
var G__27446__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.samp,opts__12744__auto__,children__12745__auto__);
};
var G__27446 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27446__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27446.cljs$lang$maxFixedArity = 1;
G__27446.cljs$lang$applyTo = (function (arglist__27447){
var opts__12744__auto__ = cljs.core.first(arglist__27447);
var children__12745__auto__ = cljs.core.rest(arglist__27447);
return G__27446__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27446.cljs$core$IFn$_invoke$arity$variadic = G__27446__delegate;
return G__27446;
})()
;
samp = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return samp__0.call(this);
default:
return samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.script,null,null);
});
var script__2 = (function() { 
var G__27448__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.script,opts__12744__auto__,children__12745__auto__);
};
var G__27448 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27448__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27448.cljs$lang$maxFixedArity = 1;
G__27448.cljs$lang$applyTo = (function (arglist__27449){
var opts__12744__auto__ = cljs.core.first(arglist__27449);
var children__12745__auto__ = cljs.core.rest(arglist__27449);
return G__27448__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27448.cljs$core$IFn$_invoke$arity$variadic = G__27448__delegate;
return G__27448;
})()
;
script = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return script__0.call(this);
default:
return script__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.section,null,null);
});
var section__2 = (function() { 
var G__27450__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.section,opts__12744__auto__,children__12745__auto__);
};
var G__27450 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27450__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27450.cljs$lang$maxFixedArity = 1;
G__27450.cljs$lang$applyTo = (function (arglist__27451){
var opts__12744__auto__ = cljs.core.first(arglist__27451);
var children__12745__auto__ = cljs.core.rest(arglist__27451);
return G__27450__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27450.cljs$core$IFn$_invoke$arity$variadic = G__27450__delegate;
return G__27450;
})()
;
section = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return section__0.call(this);
default:
return section__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.select,null,null);
});
var select__2 = (function() { 
var G__27452__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.select,opts__12744__auto__,children__12745__auto__);
};
var G__27452 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27452__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27452.cljs$lang$maxFixedArity = 1;
G__27452.cljs$lang$applyTo = (function (arglist__27453){
var opts__12744__auto__ = cljs.core.first(arglist__27453);
var children__12745__auto__ = cljs.core.rest(arglist__27453);
return G__27452__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27452.cljs$core$IFn$_invoke$arity$variadic = G__27452__delegate;
return G__27452;
})()
;
select = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return select__0.call(this);
default:
return select__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.small,null,null);
});
var small__2 = (function() { 
var G__27454__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.small,opts__12744__auto__,children__12745__auto__);
};
var G__27454 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27454__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27454.cljs$lang$maxFixedArity = 1;
G__27454.cljs$lang$applyTo = (function (arglist__27455){
var opts__12744__auto__ = cljs.core.first(arglist__27455);
var children__12745__auto__ = cljs.core.rest(arglist__27455);
return G__27454__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27454.cljs$core$IFn$_invoke$arity$variadic = G__27454__delegate;
return G__27454;
})()
;
small = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return small__0.call(this);
default:
return small__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.source,null,null);
});
var source__2 = (function() { 
var G__27456__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.source,opts__12744__auto__,children__12745__auto__);
};
var G__27456 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27456__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27456.cljs$lang$maxFixedArity = 1;
G__27456.cljs$lang$applyTo = (function (arglist__27457){
var opts__12744__auto__ = cljs.core.first(arglist__27457);
var children__12745__auto__ = cljs.core.rest(arglist__27457);
return G__27456__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27456.cljs$core$IFn$_invoke$arity$variadic = G__27456__delegate;
return G__27456;
})()
;
source = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return source__0.call(this);
default:
return source__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.span,null,null);
});
var span__2 = (function() { 
var G__27458__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.span,opts__12744__auto__,children__12745__auto__);
};
var G__27458 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27458__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27458.cljs$lang$maxFixedArity = 1;
G__27458.cljs$lang$applyTo = (function (arglist__27459){
var opts__12744__auto__ = cljs.core.first(arglist__27459);
var children__12745__auto__ = cljs.core.rest(arglist__27459);
return G__27458__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27458.cljs$core$IFn$_invoke$arity$variadic = G__27458__delegate;
return G__27458;
})()
;
span = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return span__0.call(this);
default:
return span__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.strong,null,null);
});
var strong__2 = (function() { 
var G__27460__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.strong,opts__12744__auto__,children__12745__auto__);
};
var G__27460 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27460__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27460.cljs$lang$maxFixedArity = 1;
G__27460.cljs$lang$applyTo = (function (arglist__27461){
var opts__12744__auto__ = cljs.core.first(arglist__27461);
var children__12745__auto__ = cljs.core.rest(arglist__27461);
return G__27460__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27460.cljs$core$IFn$_invoke$arity$variadic = G__27460__delegate;
return G__27460;
})()
;
strong = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return strong__0.call(this);
default:
return strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.style,null,null);
});
var style__2 = (function() { 
var G__27462__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.style,opts__12744__auto__,children__12745__auto__);
};
var G__27462 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27462__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27462.cljs$lang$maxFixedArity = 1;
G__27462.cljs$lang$applyTo = (function (arglist__27463){
var opts__12744__auto__ = cljs.core.first(arglist__27463);
var children__12745__auto__ = cljs.core.rest(arglist__27463);
return G__27462__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27462.cljs$core$IFn$_invoke$arity$variadic = G__27462__delegate;
return G__27462;
})()
;
style = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return style__0.call(this);
default:
return style__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.sub,null,null);
});
var sub__2 = (function() { 
var G__27464__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.sub,opts__12744__auto__,children__12745__auto__);
};
var G__27464 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27464__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27464.cljs$lang$maxFixedArity = 1;
G__27464.cljs$lang$applyTo = (function (arglist__27465){
var opts__12744__auto__ = cljs.core.first(arglist__27465);
var children__12745__auto__ = cljs.core.rest(arglist__27465);
return G__27464__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27464.cljs$core$IFn$_invoke$arity$variadic = G__27464__delegate;
return G__27464;
})()
;
sub = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return sub__0.call(this);
default:
return sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.summary,null,null);
});
var summary__2 = (function() { 
var G__27466__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.summary,opts__12744__auto__,children__12745__auto__);
};
var G__27466 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27466__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27466.cljs$lang$maxFixedArity = 1;
G__27466.cljs$lang$applyTo = (function (arglist__27467){
var opts__12744__auto__ = cljs.core.first(arglist__27467);
var children__12745__auto__ = cljs.core.rest(arglist__27467);
return G__27466__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27466.cljs$core$IFn$_invoke$arity$variadic = G__27466__delegate;
return G__27466;
})()
;
summary = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return summary__0.call(this);
default:
return summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.sup,null,null);
});
var sup__2 = (function() { 
var G__27468__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.sup,opts__12744__auto__,children__12745__auto__);
};
var G__27468 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27468__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27468.cljs$lang$maxFixedArity = 1;
G__27468.cljs$lang$applyTo = (function (arglist__27469){
var opts__12744__auto__ = cljs.core.first(arglist__27469);
var children__12745__auto__ = cljs.core.rest(arglist__27469);
return G__27468__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27468.cljs$core$IFn$_invoke$arity$variadic = G__27468__delegate;
return G__27468;
})()
;
sup = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return sup__0.call(this);
default:
return sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.table,null,null);
});
var table__2 = (function() { 
var G__27470__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.table,opts__12744__auto__,children__12745__auto__);
};
var G__27470 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27470__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27470.cljs$lang$maxFixedArity = 1;
G__27470.cljs$lang$applyTo = (function (arglist__27471){
var opts__12744__auto__ = cljs.core.first(arglist__27471);
var children__12745__auto__ = cljs.core.rest(arglist__27471);
return G__27470__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27470.cljs$core$IFn$_invoke$arity$variadic = G__27470__delegate;
return G__27470;
})()
;
table = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return table__0.call(this);
default:
return table__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.tbody,null,null);
});
var tbody__2 = (function() { 
var G__27472__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__12744__auto__,children__12745__auto__);
};
var G__27472 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27472__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27472.cljs$lang$maxFixedArity = 1;
G__27472.cljs$lang$applyTo = (function (arglist__27473){
var opts__12744__auto__ = cljs.core.first(arglist__27473);
var children__12745__auto__ = cljs.core.rest(arglist__27473);
return G__27472__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27472.cljs$core$IFn$_invoke$arity$variadic = G__27472__delegate;
return G__27472;
})()
;
tbody = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return tbody__0.call(this);
default:
return tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.td,null,null);
});
var td__2 = (function() { 
var G__27474__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.td,opts__12744__auto__,children__12745__auto__);
};
var G__27474 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27474__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27474.cljs$lang$maxFixedArity = 1;
G__27474.cljs$lang$applyTo = (function (arglist__27475){
var opts__12744__auto__ = cljs.core.first(arglist__27475);
var children__12745__auto__ = cljs.core.rest(arglist__27475);
return G__27474__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27474.cljs$core$IFn$_invoke$arity$variadic = G__27474__delegate;
return G__27474;
})()
;
td = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return td__0.call(this);
default:
return td__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.tfoot,null,null);
});
var tfoot__2 = (function() { 
var G__27476__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__12744__auto__,children__12745__auto__);
};
var G__27476 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27476__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27476.cljs$lang$maxFixedArity = 1;
G__27476.cljs$lang$applyTo = (function (arglist__27477){
var opts__12744__auto__ = cljs.core.first(arglist__27477);
var children__12745__auto__ = cljs.core.rest(arglist__27477);
return G__27476__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27476.cljs$core$IFn$_invoke$arity$variadic = G__27476__delegate;
return G__27476;
})()
;
tfoot = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return tfoot__0.call(this);
default:
return tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.th,null,null);
});
var th__2 = (function() { 
var G__27478__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.th,opts__12744__auto__,children__12745__auto__);
};
var G__27478 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27478__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27478.cljs$lang$maxFixedArity = 1;
G__27478.cljs$lang$applyTo = (function (arglist__27479){
var opts__12744__auto__ = cljs.core.first(arglist__27479);
var children__12745__auto__ = cljs.core.rest(arglist__27479);
return G__27478__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27478.cljs$core$IFn$_invoke$arity$variadic = G__27478__delegate;
return G__27478;
})()
;
th = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return th__0.call(this);
default:
return th__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.thead,null,null);
});
var thead__2 = (function() { 
var G__27480__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.thead,opts__12744__auto__,children__12745__auto__);
};
var G__27480 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27480__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27480.cljs$lang$maxFixedArity = 1;
G__27480.cljs$lang$applyTo = (function (arglist__27481){
var opts__12744__auto__ = cljs.core.first(arglist__27481);
var children__12745__auto__ = cljs.core.rest(arglist__27481);
return G__27480__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27480.cljs$core$IFn$_invoke$arity$variadic = G__27480__delegate;
return G__27480;
})()
;
thead = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return thead__0.call(this);
default:
return thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.time,null,null);
});
var time__2 = (function() { 
var G__27482__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.time,opts__12744__auto__,children__12745__auto__);
};
var G__27482 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27482__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27482.cljs$lang$maxFixedArity = 1;
G__27482.cljs$lang$applyTo = (function (arglist__27483){
var opts__12744__auto__ = cljs.core.first(arglist__27483);
var children__12745__auto__ = cljs.core.rest(arglist__27483);
return G__27482__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27482.cljs$core$IFn$_invoke$arity$variadic = G__27482__delegate;
return G__27482;
})()
;
time = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return time__0.call(this);
default:
return time__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.title,null,null);
});
var title__2 = (function() { 
var G__27484__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.title,opts__12744__auto__,children__12745__auto__);
};
var G__27484 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27484__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27484.cljs$lang$maxFixedArity = 1;
G__27484.cljs$lang$applyTo = (function (arglist__27485){
var opts__12744__auto__ = cljs.core.first(arglist__27485);
var children__12745__auto__ = cljs.core.rest(arglist__27485);
return G__27484__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27484.cljs$core$IFn$_invoke$arity$variadic = G__27484__delegate;
return G__27484;
})()
;
title = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return title__0.call(this);
default:
return title__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.tr,null,null);
});
var tr__2 = (function() { 
var G__27486__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.tr,opts__12744__auto__,children__12745__auto__);
};
var G__27486 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27486__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27486.cljs$lang$maxFixedArity = 1;
G__27486.cljs$lang$applyTo = (function (arglist__27487){
var opts__12744__auto__ = cljs.core.first(arglist__27487);
var children__12745__auto__ = cljs.core.rest(arglist__27487);
return G__27486__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27486.cljs$core$IFn$_invoke$arity$variadic = G__27486__delegate;
return G__27486;
})()
;
tr = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return tr__0.call(this);
default:
return tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.track,null,null);
});
var track__2 = (function() { 
var G__27488__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.track,opts__12744__auto__,children__12745__auto__);
};
var G__27488 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27488__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27488.cljs$lang$maxFixedArity = 1;
G__27488.cljs$lang$applyTo = (function (arglist__27489){
var opts__12744__auto__ = cljs.core.first(arglist__27489);
var children__12745__auto__ = cljs.core.rest(arglist__27489);
return G__27488__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27488.cljs$core$IFn$_invoke$arity$variadic = G__27488__delegate;
return G__27488;
})()
;
track = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return track__0.call(this);
default:
return track__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.u,null,null);
});
var u__2 = (function() { 
var G__27490__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.u,opts__12744__auto__,children__12745__auto__);
};
var G__27490 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27490__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27490.cljs$lang$maxFixedArity = 1;
G__27490.cljs$lang$applyTo = (function (arglist__27491){
var opts__12744__auto__ = cljs.core.first(arglist__27491);
var children__12745__auto__ = cljs.core.rest(arglist__27491);
return G__27490__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27490.cljs$core$IFn$_invoke$arity$variadic = G__27490__delegate;
return G__27490;
})()
;
u = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return u__0.call(this);
default:
return u__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.ul,null,null);
});
var ul__2 = (function() { 
var G__27492__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.ul,opts__12744__auto__,children__12745__auto__);
};
var G__27492 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27492__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27492.cljs$lang$maxFixedArity = 1;
G__27492.cljs$lang$applyTo = (function (arglist__27493){
var opts__12744__auto__ = cljs.core.first(arglist__27493);
var children__12745__auto__ = cljs.core.rest(arglist__27493);
return G__27492__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27492.cljs$core$IFn$_invoke$arity$variadic = G__27492__delegate;
return G__27492;
})()
;
ul = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return ul__0.call(this);
default:
return ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.var$,null,null);
});
var var$__2 = (function() { 
var G__27494__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.var$,opts__12744__auto__,children__12745__auto__);
};
var G__27494 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27494__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27494.cljs$lang$maxFixedArity = 1;
G__27494.cljs$lang$applyTo = (function (arglist__27495){
var opts__12744__auto__ = cljs.core.first(arglist__27495);
var children__12745__auto__ = cljs.core.rest(arglist__27495);
return G__27494__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27494.cljs$core$IFn$_invoke$arity$variadic = G__27494__delegate;
return G__27494;
})()
;
var$ = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return var$__0.call(this);
default:
return var$__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.video,null,null);
});
var video__2 = (function() { 
var G__27496__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.video,opts__12744__auto__,children__12745__auto__);
};
var G__27496 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27496__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27496.cljs$lang$maxFixedArity = 1;
G__27496.cljs$lang$applyTo = (function (arglist__27497){
var opts__12744__auto__ = cljs.core.first(arglist__27497);
var children__12745__auto__ = cljs.core.rest(arglist__27497);
return G__27496__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27496.cljs$core$IFn$_invoke$arity$variadic = G__27496__delegate;
return G__27496;
})()
;
video = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return video__0.call(this);
default:
return video__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.wbr,null,null);
});
var wbr__2 = (function() { 
var G__27498__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__12744__auto__,children__12745__auto__);
};
var G__27498 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27498__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27498.cljs$lang$maxFixedArity = 1;
G__27498.cljs$lang$applyTo = (function (arglist__27499){
var opts__12744__auto__ = cljs.core.first(arglist__27499);
var children__12745__auto__ = cljs.core.rest(arglist__27499);
return G__27498__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27498.cljs$core$IFn$_invoke$arity$variadic = G__27498__delegate;
return G__27498;
})()
;
wbr = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return wbr__0.call(this);
default:
return wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.circle,null,null);
});
var circle__2 = (function() { 
var G__27500__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.circle,opts__12744__auto__,children__12745__auto__);
};
var G__27500 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27500__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27500.cljs$lang$maxFixedArity = 1;
G__27500.cljs$lang$applyTo = (function (arglist__27501){
var opts__12744__auto__ = cljs.core.first(arglist__27501);
var children__12745__auto__ = cljs.core.rest(arglist__27501);
return G__27500__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27500.cljs$core$IFn$_invoke$arity$variadic = G__27500__delegate;
return G__27500;
})()
;
circle = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return circle__0.call(this);
default:
return circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.ellipse,null,null);
});
var ellipse__2 = (function() { 
var G__27502__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__12744__auto__,children__12745__auto__);
};
var G__27502 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27502__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27502.cljs$lang$maxFixedArity = 1;
G__27502.cljs$lang$applyTo = (function (arglist__27503){
var opts__12744__auto__ = cljs.core.first(arglist__27503);
var children__12745__auto__ = cljs.core.rest(arglist__27503);
return G__27502__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27502.cljs$core$IFn$_invoke$arity$variadic = G__27502__delegate;
return G__27502;
})()
;
ellipse = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return ellipse__0.call(this);
default:
return ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.g,null,null);
});
var g__2 = (function() { 
var G__27504__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.g,opts__12744__auto__,children__12745__auto__);
};
var G__27504 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27504__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27504.cljs$lang$maxFixedArity = 1;
G__27504.cljs$lang$applyTo = (function (arglist__27505){
var opts__12744__auto__ = cljs.core.first(arglist__27505);
var children__12745__auto__ = cljs.core.rest(arglist__27505);
return G__27504__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27504.cljs$core$IFn$_invoke$arity$variadic = G__27504__delegate;
return G__27504;
})()
;
g = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return g__0.call(this);
default:
return g__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.line,null,null);
});
var line__2 = (function() { 
var G__27506__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.line,opts__12744__auto__,children__12745__auto__);
};
var G__27506 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27506__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27506.cljs$lang$maxFixedArity = 1;
G__27506.cljs$lang$applyTo = (function (arglist__27507){
var opts__12744__auto__ = cljs.core.first(arglist__27507);
var children__12745__auto__ = cljs.core.rest(arglist__27507);
return G__27506__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27506.cljs$core$IFn$_invoke$arity$variadic = G__27506__delegate;
return G__27506;
})()
;
line = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return line__0.call(this);
default:
return line__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.path,null,null);
});
var path__2 = (function() { 
var G__27508__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.path,opts__12744__auto__,children__12745__auto__);
};
var G__27508 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27508__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27508.cljs$lang$maxFixedArity = 1;
G__27508.cljs$lang$applyTo = (function (arglist__27509){
var opts__12744__auto__ = cljs.core.first(arglist__27509);
var children__12745__auto__ = cljs.core.rest(arglist__27509);
return G__27508__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27508.cljs$core$IFn$_invoke$arity$variadic = G__27508__delegate;
return G__27508;
})()
;
path = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return path__0.call(this);
default:
return path__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.polyline,null,null);
});
var polyline__2 = (function() { 
var G__27510__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__12744__auto__,children__12745__auto__);
};
var G__27510 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27510__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27510.cljs$lang$maxFixedArity = 1;
G__27510.cljs$lang$applyTo = (function (arglist__27511){
var opts__12744__auto__ = cljs.core.first(arglist__27511);
var children__12745__auto__ = cljs.core.rest(arglist__27511);
return G__27510__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27510.cljs$core$IFn$_invoke$arity$variadic = G__27510__delegate;
return G__27510;
})()
;
polyline = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return polyline__0.call(this);
default:
return polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.rect,null,null);
});
var rect__2 = (function() { 
var G__27512__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.rect,opts__12744__auto__,children__12745__auto__);
};
var G__27512 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27512__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27512.cljs$lang$maxFixedArity = 1;
G__27512.cljs$lang$applyTo = (function (arglist__27513){
var opts__12744__auto__ = cljs.core.first(arglist__27513);
var children__12745__auto__ = cljs.core.rest(arglist__27513);
return G__27512__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27512.cljs$core$IFn$_invoke$arity$variadic = G__27512__delegate;
return G__27512;
})()
;
rect = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return rect__0.call(this);
default:
return rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.svg,null,null);
});
var svg__2 = (function() { 
var G__27514__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.svg,opts__12744__auto__,children__12745__auto__);
};
var G__27514 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27514__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27514.cljs$lang$maxFixedArity = 1;
G__27514.cljs$lang$applyTo = (function (arglist__27515){
var opts__12744__auto__ = cljs.core.first(arglist__27515);
var children__12745__auto__ = cljs.core.rest(arglist__27515);
return G__27514__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27514.cljs$core$IFn$_invoke$arity$variadic = G__27514__delegate;
return G__27514;
})()
;
svg = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return svg__0.call(this);
default:
return svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.text,null,null);
});
var text__2 = (function() { 
var G__27516__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.text,opts__12744__auto__,children__12745__auto__);
};
var G__27516 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27516__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27516.cljs$lang$maxFixedArity = 1;
G__27516.cljs$lang$applyTo = (function (arglist__27517){
var opts__12744__auto__ = cljs.core.first(arglist__27517);
var children__12745__auto__ = cljs.core.rest(arglist__27517);
return G__27516__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27516.cljs$core$IFn$_invoke$arity$variadic = G__27516__delegate;
return G__27516;
})()
;
text = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return text__0.call(this);
default:
return text__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.defs,null,null);
});
var defs__2 = (function() { 
var G__27518__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.defs,opts__12744__auto__,children__12745__auto__);
};
var G__27518 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27518__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27518.cljs$lang$maxFixedArity = 1;
G__27518.cljs$lang$applyTo = (function (arglist__27519){
var opts__12744__auto__ = cljs.core.first(arglist__27519);
var children__12745__auto__ = cljs.core.rest(arglist__27519);
return G__27518__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27518.cljs$core$IFn$_invoke$arity$variadic = G__27518__delegate;
return G__27518;
})()
;
defs = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return defs__0.call(this);
default:
return defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});
var linearGradient__2 = (function() { 
var G__27520__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__12744__auto__,children__12745__auto__);
};
var G__27520 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27520__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27520.cljs$lang$maxFixedArity = 1;
G__27520.cljs$lang$applyTo = (function (arglist__27521){
var opts__12744__auto__ = cljs.core.first(arglist__27521);
var children__12745__auto__ = cljs.core.rest(arglist__27521);
return G__27520__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27520.cljs$core$IFn$_invoke$arity$variadic = G__27520__delegate;
return G__27520;
})()
;
linearGradient = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return linearGradient__0.call(this);
default:
return linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.polygon,null,null);
});
var polygon__2 = (function() { 
var G__27522__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__12744__auto__,children__12745__auto__);
};
var G__27522 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27522__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27522.cljs$lang$maxFixedArity = 1;
G__27522.cljs$lang$applyTo = (function (arglist__27523){
var opts__12744__auto__ = cljs.core.first(arglist__27523);
var children__12745__auto__ = cljs.core.rest(arglist__27523);
return G__27522__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27522.cljs$core$IFn$_invoke$arity$variadic = G__27522__delegate;
return G__27522;
})()
;
polygon = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return polygon__0.call(this);
default:
return polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});
var radialGradient__2 = (function() { 
var G__27524__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__12744__auto__,children__12745__auto__);
};
var G__27524 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27524__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27524.cljs$lang$maxFixedArity = 1;
G__27524.cljs$lang$applyTo = (function (arglist__27525){
var opts__12744__auto__ = cljs.core.first(arglist__27525);
var children__12745__auto__ = cljs.core.rest(arglist__27525);
return G__27524__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27524.cljs$core$IFn$_invoke$arity$variadic = G__27524__delegate;
return G__27524;
})()
;
radialGradient = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return radialGradient__0.call(this);
default:
return radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.stop,null,null);
});
var stop__2 = (function() { 
var G__27526__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.stop,opts__12744__auto__,children__12745__auto__);
};
var G__27526 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27526__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27526.cljs$lang$maxFixedArity = 1;
G__27526.cljs$lang$applyTo = (function (arglist__27527){
var opts__12744__auto__ = cljs.core.first(arglist__27527);
var children__12745__auto__ = cljs.core.rest(arglist__27527);
return G__27526__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27526.cljs$core$IFn$_invoke$arity$variadic = G__27526__delegate;
return G__27526;
})()
;
stop = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return stop__0.call(this);
default:
return stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(React.DOM.tspan,null,null);
});
var tspan__2 = (function() { 
var G__27528__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__12744__auto__,children__12745__auto__);
};
var G__27528 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27528__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27528.cljs$lang$maxFixedArity = 1;
G__27528.cljs$lang$applyTo = (function (arglist__27529){
var opts__12744__auto__ = cljs.core.first(arglist__27529);
var children__12745__auto__ = cljs.core.rest(arglist__27529);
return G__27528__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27528.cljs$core$IFn$_invoke$arity$variadic = G__27528__delegate;
return G__27528;
})()
;
tspan = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return tspan__0.call(this);
default:
return tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(om.dom.input,null,null);
});
var input__2 = (function() { 
var G__27530__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(om.dom.input,opts__12744__auto__,children__12745__auto__);
};
var G__27530 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27530__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27530.cljs$lang$maxFixedArity = 1;
G__27530.cljs$lang$applyTo = (function (arglist__27531){
var opts__12744__auto__ = cljs.core.first(arglist__27531);
var children__12745__auto__ = cljs.core.rest(arglist__27531);
return G__27530__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27530.cljs$core$IFn$_invoke$arity$variadic = G__27530__delegate;
return G__27530;
})()
;
input = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return input__0.call(this);
default:
return input__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(om.dom.textarea,null,null);
});
var textarea__2 = (function() { 
var G__27532__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(om.dom.textarea,opts__12744__auto__,children__12745__auto__);
};
var G__27532 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27532__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27532.cljs$lang$maxFixedArity = 1;
G__27532.cljs$lang$applyTo = (function (arglist__27533){
var opts__12744__auto__ = cljs.core.first(arglist__27533);
var children__12745__auto__ = cljs.core.rest(arglist__27533);
return G__27532__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27532.cljs$core$IFn$_invoke$arity$variadic = G__27532__delegate;
return G__27532;
})()
;
textarea = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return textarea__0.call(this);
default:
return textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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
return om_tools.dom.element(om.dom.option,null,null);
});
var option__2 = (function() { 
var G__27534__delegate = function (opts__12744__auto__,children__12745__auto__){
return om_tools.dom.element(om.dom.option,opts__12744__auto__,children__12745__auto__);
};
var G__27534 = function (opts__12744__auto__,var_args){
var children__12745__auto__ = null;
if (arguments.length > 1) {
  children__12745__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27534__delegate.call(this,opts__12744__auto__,children__12745__auto__);};
G__27534.cljs$lang$maxFixedArity = 1;
G__27534.cljs$lang$applyTo = (function (arglist__27535){
var opts__12744__auto__ = cljs.core.first(arglist__27535);
var children__12745__auto__ = cljs.core.rest(arglist__27535);
return G__27534__delegate(opts__12744__auto__,children__12745__auto__);
});
G__27534.cljs$core$IFn$_invoke$arity$variadic = G__27534__delegate;
return G__27534;
})()
;
option = function(opts__12744__auto__,var_args){
var children__12745__auto__ = var_args;
switch(arguments.length){
case 0:
return option__0.call(this);
default:
return option__2.cljs$core$IFn$_invoke$arity$variadic(opts__12744__auto__, cljs.core.array_seq(arguments, 1));
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

var temp__4126__auto__ = cljs.core.seq(cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
