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
if(cljs.core.truth_((function (){var or__3638__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__3638__auto__){
return or__3638__auto__;
} else {
var G__16414 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__16414) {
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
var G__16417 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__16417) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16421){
var vec__16422 = p__16421;
var k = cljs.core.nth.call(null,vec__16422,(0),null);
var v = cljs.core.nth.call(null,vec__16422,(1),null);
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
return (function (){var or__3638__auto__ = React.isValidElement;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
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
var vec__16424 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__16424,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__16424,(1),null);
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
var G__16425__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__7620__auto__,children__7621__auto__);
};
var G__16425 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16425__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16425.cljs$lang$maxFixedArity = 1;
G__16425.cljs$lang$applyTo = (function (arglist__16426){
var opts__7620__auto__ = cljs.core.first(arglist__16426);
var children__7621__auto__ = cljs.core.rest(arglist__16426);
return G__16425__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16425.cljs$core$IFn$_invoke$arity$variadic = G__16425__delegate;
return G__16425;
})()
;
a = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return a__0.call(this);
default:
return a__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16427__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__7620__auto__,children__7621__auto__);
};
var G__16427 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16427__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16427.cljs$lang$maxFixedArity = 1;
G__16427.cljs$lang$applyTo = (function (arglist__16428){
var opts__7620__auto__ = cljs.core.first(arglist__16428);
var children__7621__auto__ = cljs.core.rest(arglist__16428);
return G__16427__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16427.cljs$core$IFn$_invoke$arity$variadic = G__16427__delegate;
return G__16427;
})()
;
abbr = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return abbr__0.call(this);
default:
return abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16429__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__7620__auto__,children__7621__auto__);
};
var G__16429 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16429__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16429.cljs$lang$maxFixedArity = 1;
G__16429.cljs$lang$applyTo = (function (arglist__16430){
var opts__7620__auto__ = cljs.core.first(arglist__16430);
var children__7621__auto__ = cljs.core.rest(arglist__16430);
return G__16429__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16429.cljs$core$IFn$_invoke$arity$variadic = G__16429__delegate;
return G__16429;
})()
;
address = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return address__0.call(this);
default:
return address__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16431__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__7620__auto__,children__7621__auto__);
};
var G__16431 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16431__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16431.cljs$lang$maxFixedArity = 1;
G__16431.cljs$lang$applyTo = (function (arglist__16432){
var opts__7620__auto__ = cljs.core.first(arglist__16432);
var children__7621__auto__ = cljs.core.rest(arglist__16432);
return G__16431__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16431.cljs$core$IFn$_invoke$arity$variadic = G__16431__delegate;
return G__16431;
})()
;
area = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return area__0.call(this);
default:
return area__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16433__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__7620__auto__,children__7621__auto__);
};
var G__16433 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16433__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16433.cljs$lang$maxFixedArity = 1;
G__16433.cljs$lang$applyTo = (function (arglist__16434){
var opts__7620__auto__ = cljs.core.first(arglist__16434);
var children__7621__auto__ = cljs.core.rest(arglist__16434);
return G__16433__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16433.cljs$core$IFn$_invoke$arity$variadic = G__16433__delegate;
return G__16433;
})()
;
article = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return article__0.call(this);
default:
return article__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16435__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__7620__auto__,children__7621__auto__);
};
var G__16435 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16435__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16435.cljs$lang$maxFixedArity = 1;
G__16435.cljs$lang$applyTo = (function (arglist__16436){
var opts__7620__auto__ = cljs.core.first(arglist__16436);
var children__7621__auto__ = cljs.core.rest(arglist__16436);
return G__16435__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16435.cljs$core$IFn$_invoke$arity$variadic = G__16435__delegate;
return G__16435;
})()
;
aside = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return aside__0.call(this);
default:
return aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16437__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__7620__auto__,children__7621__auto__);
};
var G__16437 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16437__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16437.cljs$lang$maxFixedArity = 1;
G__16437.cljs$lang$applyTo = (function (arglist__16438){
var opts__7620__auto__ = cljs.core.first(arglist__16438);
var children__7621__auto__ = cljs.core.rest(arglist__16438);
return G__16437__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16437.cljs$core$IFn$_invoke$arity$variadic = G__16437__delegate;
return G__16437;
})()
;
audio = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return audio__0.call(this);
default:
return audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16439__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__7620__auto__,children__7621__auto__);
};
var G__16439 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16439__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16439.cljs$lang$maxFixedArity = 1;
G__16439.cljs$lang$applyTo = (function (arglist__16440){
var opts__7620__auto__ = cljs.core.first(arglist__16440);
var children__7621__auto__ = cljs.core.rest(arglist__16440);
return G__16439__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16439.cljs$core$IFn$_invoke$arity$variadic = G__16439__delegate;
return G__16439;
})()
;
b = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return b__0.call(this);
default:
return b__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16441__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__7620__auto__,children__7621__auto__);
};
var G__16441 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16441__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16441.cljs$lang$maxFixedArity = 1;
G__16441.cljs$lang$applyTo = (function (arglist__16442){
var opts__7620__auto__ = cljs.core.first(arglist__16442);
var children__7621__auto__ = cljs.core.rest(arglist__16442);
return G__16441__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16441.cljs$core$IFn$_invoke$arity$variadic = G__16441__delegate;
return G__16441;
})()
;
base = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return base__0.call(this);
default:
return base__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16443__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__7620__auto__,children__7621__auto__);
};
var G__16443 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16443__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16443.cljs$lang$maxFixedArity = 1;
G__16443.cljs$lang$applyTo = (function (arglist__16444){
var opts__7620__auto__ = cljs.core.first(arglist__16444);
var children__7621__auto__ = cljs.core.rest(arglist__16444);
return G__16443__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16443.cljs$core$IFn$_invoke$arity$variadic = G__16443__delegate;
return G__16443;
})()
;
bdi = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return bdi__0.call(this);
default:
return bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16445__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__7620__auto__,children__7621__auto__);
};
var G__16445 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16445__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16445.cljs$lang$maxFixedArity = 1;
G__16445.cljs$lang$applyTo = (function (arglist__16446){
var opts__7620__auto__ = cljs.core.first(arglist__16446);
var children__7621__auto__ = cljs.core.rest(arglist__16446);
return G__16445__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16445.cljs$core$IFn$_invoke$arity$variadic = G__16445__delegate;
return G__16445;
})()
;
bdo = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return bdo__0.call(this);
default:
return bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16447__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__7620__auto__,children__7621__auto__);
};
var G__16447 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16447__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16447.cljs$lang$maxFixedArity = 1;
G__16447.cljs$lang$applyTo = (function (arglist__16448){
var opts__7620__auto__ = cljs.core.first(arglist__16448);
var children__7621__auto__ = cljs.core.rest(arglist__16448);
return G__16447__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16447.cljs$core$IFn$_invoke$arity$variadic = G__16447__delegate;
return G__16447;
})()
;
big = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return big__0.call(this);
default:
return big__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16449__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__7620__auto__,children__7621__auto__);
};
var G__16449 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16449__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16449.cljs$lang$maxFixedArity = 1;
G__16449.cljs$lang$applyTo = (function (arglist__16450){
var opts__7620__auto__ = cljs.core.first(arglist__16450);
var children__7621__auto__ = cljs.core.rest(arglist__16450);
return G__16449__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16449.cljs$core$IFn$_invoke$arity$variadic = G__16449__delegate;
return G__16449;
})()
;
blockquote = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return blockquote__0.call(this);
default:
return blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16451__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__7620__auto__,children__7621__auto__);
};
var G__16451 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16451__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16451.cljs$lang$maxFixedArity = 1;
G__16451.cljs$lang$applyTo = (function (arglist__16452){
var opts__7620__auto__ = cljs.core.first(arglist__16452);
var children__7621__auto__ = cljs.core.rest(arglist__16452);
return G__16451__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16451.cljs$core$IFn$_invoke$arity$variadic = G__16451__delegate;
return G__16451;
})()
;
body = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return body__0.call(this);
default:
return body__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16453__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__7620__auto__,children__7621__auto__);
};
var G__16453 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16453__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16453.cljs$lang$maxFixedArity = 1;
G__16453.cljs$lang$applyTo = (function (arglist__16454){
var opts__7620__auto__ = cljs.core.first(arglist__16454);
var children__7621__auto__ = cljs.core.rest(arglist__16454);
return G__16453__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16453.cljs$core$IFn$_invoke$arity$variadic = G__16453__delegate;
return G__16453;
})()
;
br = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return br__0.call(this);
default:
return br__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16455__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__7620__auto__,children__7621__auto__);
};
var G__16455 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16455__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16455.cljs$lang$maxFixedArity = 1;
G__16455.cljs$lang$applyTo = (function (arglist__16456){
var opts__7620__auto__ = cljs.core.first(arglist__16456);
var children__7621__auto__ = cljs.core.rest(arglist__16456);
return G__16455__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16455.cljs$core$IFn$_invoke$arity$variadic = G__16455__delegate;
return G__16455;
})()
;
button = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return button__0.call(this);
default:
return button__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16457__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__7620__auto__,children__7621__auto__);
};
var G__16457 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16457__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16457.cljs$lang$maxFixedArity = 1;
G__16457.cljs$lang$applyTo = (function (arglist__16458){
var opts__7620__auto__ = cljs.core.first(arglist__16458);
var children__7621__auto__ = cljs.core.rest(arglist__16458);
return G__16457__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16457.cljs$core$IFn$_invoke$arity$variadic = G__16457__delegate;
return G__16457;
})()
;
canvas = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return canvas__0.call(this);
default:
return canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16459__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__7620__auto__,children__7621__auto__);
};
var G__16459 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16459__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16459.cljs$lang$maxFixedArity = 1;
G__16459.cljs$lang$applyTo = (function (arglist__16460){
var opts__7620__auto__ = cljs.core.first(arglist__16460);
var children__7621__auto__ = cljs.core.rest(arglist__16460);
return G__16459__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16459.cljs$core$IFn$_invoke$arity$variadic = G__16459__delegate;
return G__16459;
})()
;
caption = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return caption__0.call(this);
default:
return caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16461__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__7620__auto__,children__7621__auto__);
};
var G__16461 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16461__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16461.cljs$lang$maxFixedArity = 1;
G__16461.cljs$lang$applyTo = (function (arglist__16462){
var opts__7620__auto__ = cljs.core.first(arglist__16462);
var children__7621__auto__ = cljs.core.rest(arglist__16462);
return G__16461__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16461.cljs$core$IFn$_invoke$arity$variadic = G__16461__delegate;
return G__16461;
})()
;
cite = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return cite__0.call(this);
default:
return cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16463__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__7620__auto__,children__7621__auto__);
};
var G__16463 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16463__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16463.cljs$lang$maxFixedArity = 1;
G__16463.cljs$lang$applyTo = (function (arglist__16464){
var opts__7620__auto__ = cljs.core.first(arglist__16464);
var children__7621__auto__ = cljs.core.rest(arglist__16464);
return G__16463__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16463.cljs$core$IFn$_invoke$arity$variadic = G__16463__delegate;
return G__16463;
})()
;
code = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return code__0.call(this);
default:
return code__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16465__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__7620__auto__,children__7621__auto__);
};
var G__16465 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16465__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16465.cljs$lang$maxFixedArity = 1;
G__16465.cljs$lang$applyTo = (function (arglist__16466){
var opts__7620__auto__ = cljs.core.first(arglist__16466);
var children__7621__auto__ = cljs.core.rest(arglist__16466);
return G__16465__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16465.cljs$core$IFn$_invoke$arity$variadic = G__16465__delegate;
return G__16465;
})()
;
col = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return col__0.call(this);
default:
return col__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16467__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__7620__auto__,children__7621__auto__);
};
var G__16467 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16467__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16467.cljs$lang$maxFixedArity = 1;
G__16467.cljs$lang$applyTo = (function (arglist__16468){
var opts__7620__auto__ = cljs.core.first(arglist__16468);
var children__7621__auto__ = cljs.core.rest(arglist__16468);
return G__16467__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16467.cljs$core$IFn$_invoke$arity$variadic = G__16467__delegate;
return G__16467;
})()
;
colgroup = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return colgroup__0.call(this);
default:
return colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16469__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__7620__auto__,children__7621__auto__);
};
var G__16469 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16469__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16469.cljs$lang$maxFixedArity = 1;
G__16469.cljs$lang$applyTo = (function (arglist__16470){
var opts__7620__auto__ = cljs.core.first(arglist__16470);
var children__7621__auto__ = cljs.core.rest(arglist__16470);
return G__16469__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16469.cljs$core$IFn$_invoke$arity$variadic = G__16469__delegate;
return G__16469;
})()
;
data = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return data__0.call(this);
default:
return data__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16471__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__7620__auto__,children__7621__auto__);
};
var G__16471 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16471__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16471.cljs$lang$maxFixedArity = 1;
G__16471.cljs$lang$applyTo = (function (arglist__16472){
var opts__7620__auto__ = cljs.core.first(arglist__16472);
var children__7621__auto__ = cljs.core.rest(arglist__16472);
return G__16471__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16471.cljs$core$IFn$_invoke$arity$variadic = G__16471__delegate;
return G__16471;
})()
;
datalist = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return datalist__0.call(this);
default:
return datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16473__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__7620__auto__,children__7621__auto__);
};
var G__16473 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16473__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16473.cljs$lang$maxFixedArity = 1;
G__16473.cljs$lang$applyTo = (function (arglist__16474){
var opts__7620__auto__ = cljs.core.first(arglist__16474);
var children__7621__auto__ = cljs.core.rest(arglist__16474);
return G__16473__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16473.cljs$core$IFn$_invoke$arity$variadic = G__16473__delegate;
return G__16473;
})()
;
dd = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return dd__0.call(this);
default:
return dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16475__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__7620__auto__,children__7621__auto__);
};
var G__16475 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16475__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16475.cljs$lang$maxFixedArity = 1;
G__16475.cljs$lang$applyTo = (function (arglist__16476){
var opts__7620__auto__ = cljs.core.first(arglist__16476);
var children__7621__auto__ = cljs.core.rest(arglist__16476);
return G__16475__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16475.cljs$core$IFn$_invoke$arity$variadic = G__16475__delegate;
return G__16475;
})()
;
del = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return del__0.call(this);
default:
return del__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16477__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__7620__auto__,children__7621__auto__);
};
var G__16477 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16477__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16477.cljs$lang$maxFixedArity = 1;
G__16477.cljs$lang$applyTo = (function (arglist__16478){
var opts__7620__auto__ = cljs.core.first(arglist__16478);
var children__7621__auto__ = cljs.core.rest(arglist__16478);
return G__16477__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16477.cljs$core$IFn$_invoke$arity$variadic = G__16477__delegate;
return G__16477;
})()
;
dfn = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return dfn__0.call(this);
default:
return dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16479__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__7620__auto__,children__7621__auto__);
};
var G__16479 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16479__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16479.cljs$lang$maxFixedArity = 1;
G__16479.cljs$lang$applyTo = (function (arglist__16480){
var opts__7620__auto__ = cljs.core.first(arglist__16480);
var children__7621__auto__ = cljs.core.rest(arglist__16480);
return G__16479__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16479.cljs$core$IFn$_invoke$arity$variadic = G__16479__delegate;
return G__16479;
})()
;
div = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return div__0.call(this);
default:
return div__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16481__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__7620__auto__,children__7621__auto__);
};
var G__16481 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16481__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16481.cljs$lang$maxFixedArity = 1;
G__16481.cljs$lang$applyTo = (function (arglist__16482){
var opts__7620__auto__ = cljs.core.first(arglist__16482);
var children__7621__auto__ = cljs.core.rest(arglist__16482);
return G__16481__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16481.cljs$core$IFn$_invoke$arity$variadic = G__16481__delegate;
return G__16481;
})()
;
dl = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return dl__0.call(this);
default:
return dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16483__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__7620__auto__,children__7621__auto__);
};
var G__16483 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16483__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16483.cljs$lang$maxFixedArity = 1;
G__16483.cljs$lang$applyTo = (function (arglist__16484){
var opts__7620__auto__ = cljs.core.first(arglist__16484);
var children__7621__auto__ = cljs.core.rest(arglist__16484);
return G__16483__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16483.cljs$core$IFn$_invoke$arity$variadic = G__16483__delegate;
return G__16483;
})()
;
dt = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return dt__0.call(this);
default:
return dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16485__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__7620__auto__,children__7621__auto__);
};
var G__16485 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16485__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16485.cljs$lang$maxFixedArity = 1;
G__16485.cljs$lang$applyTo = (function (arglist__16486){
var opts__7620__auto__ = cljs.core.first(arglist__16486);
var children__7621__auto__ = cljs.core.rest(arglist__16486);
return G__16485__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16485.cljs$core$IFn$_invoke$arity$variadic = G__16485__delegate;
return G__16485;
})()
;
em = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return em__0.call(this);
default:
return em__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16487__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__7620__auto__,children__7621__auto__);
};
var G__16487 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16487__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16487.cljs$lang$maxFixedArity = 1;
G__16487.cljs$lang$applyTo = (function (arglist__16488){
var opts__7620__auto__ = cljs.core.first(arglist__16488);
var children__7621__auto__ = cljs.core.rest(arglist__16488);
return G__16487__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16487.cljs$core$IFn$_invoke$arity$variadic = G__16487__delegate;
return G__16487;
})()
;
embed = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return embed__0.call(this);
default:
return embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16489__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__7620__auto__,children__7621__auto__);
};
var G__16489 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16489__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16489.cljs$lang$maxFixedArity = 1;
G__16489.cljs$lang$applyTo = (function (arglist__16490){
var opts__7620__auto__ = cljs.core.first(arglist__16490);
var children__7621__auto__ = cljs.core.rest(arglist__16490);
return G__16489__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16489.cljs$core$IFn$_invoke$arity$variadic = G__16489__delegate;
return G__16489;
})()
;
fieldset = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return fieldset__0.call(this);
default:
return fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16491__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__7620__auto__,children__7621__auto__);
};
var G__16491 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16491__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16491.cljs$lang$maxFixedArity = 1;
G__16491.cljs$lang$applyTo = (function (arglist__16492){
var opts__7620__auto__ = cljs.core.first(arglist__16492);
var children__7621__auto__ = cljs.core.rest(arglist__16492);
return G__16491__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16491.cljs$core$IFn$_invoke$arity$variadic = G__16491__delegate;
return G__16491;
})()
;
figcaption = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return figcaption__0.call(this);
default:
return figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16493__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__7620__auto__,children__7621__auto__);
};
var G__16493 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16493__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16493.cljs$lang$maxFixedArity = 1;
G__16493.cljs$lang$applyTo = (function (arglist__16494){
var opts__7620__auto__ = cljs.core.first(arglist__16494);
var children__7621__auto__ = cljs.core.rest(arglist__16494);
return G__16493__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16493.cljs$core$IFn$_invoke$arity$variadic = G__16493__delegate;
return G__16493;
})()
;
figure = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return figure__0.call(this);
default:
return figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16495__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__7620__auto__,children__7621__auto__);
};
var G__16495 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16495__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16495.cljs$lang$maxFixedArity = 1;
G__16495.cljs$lang$applyTo = (function (arglist__16496){
var opts__7620__auto__ = cljs.core.first(arglist__16496);
var children__7621__auto__ = cljs.core.rest(arglist__16496);
return G__16495__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16495.cljs$core$IFn$_invoke$arity$variadic = G__16495__delegate;
return G__16495;
})()
;
footer = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return footer__0.call(this);
default:
return footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16497__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__7620__auto__,children__7621__auto__);
};
var G__16497 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16497__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16497.cljs$lang$maxFixedArity = 1;
G__16497.cljs$lang$applyTo = (function (arglist__16498){
var opts__7620__auto__ = cljs.core.first(arglist__16498);
var children__7621__auto__ = cljs.core.rest(arglist__16498);
return G__16497__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16497.cljs$core$IFn$_invoke$arity$variadic = G__16497__delegate;
return G__16497;
})()
;
form = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return form__0.call(this);
default:
return form__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16499__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__7620__auto__,children__7621__auto__);
};
var G__16499 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16499__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16499.cljs$lang$maxFixedArity = 1;
G__16499.cljs$lang$applyTo = (function (arglist__16500){
var opts__7620__auto__ = cljs.core.first(arglist__16500);
var children__7621__auto__ = cljs.core.rest(arglist__16500);
return G__16499__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16499.cljs$core$IFn$_invoke$arity$variadic = G__16499__delegate;
return G__16499;
})()
;
h1 = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return h1__0.call(this);
default:
return h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16501__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__7620__auto__,children__7621__auto__);
};
var G__16501 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16501__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16501.cljs$lang$maxFixedArity = 1;
G__16501.cljs$lang$applyTo = (function (arglist__16502){
var opts__7620__auto__ = cljs.core.first(arglist__16502);
var children__7621__auto__ = cljs.core.rest(arglist__16502);
return G__16501__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16501.cljs$core$IFn$_invoke$arity$variadic = G__16501__delegate;
return G__16501;
})()
;
h2 = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return h2__0.call(this);
default:
return h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16503__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__7620__auto__,children__7621__auto__);
};
var G__16503 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16503__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16503.cljs$lang$maxFixedArity = 1;
G__16503.cljs$lang$applyTo = (function (arglist__16504){
var opts__7620__auto__ = cljs.core.first(arglist__16504);
var children__7621__auto__ = cljs.core.rest(arglist__16504);
return G__16503__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16503.cljs$core$IFn$_invoke$arity$variadic = G__16503__delegate;
return G__16503;
})()
;
h3 = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return h3__0.call(this);
default:
return h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16505__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__7620__auto__,children__7621__auto__);
};
var G__16505 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16505__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16505.cljs$lang$maxFixedArity = 1;
G__16505.cljs$lang$applyTo = (function (arglist__16506){
var opts__7620__auto__ = cljs.core.first(arglist__16506);
var children__7621__auto__ = cljs.core.rest(arglist__16506);
return G__16505__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16505.cljs$core$IFn$_invoke$arity$variadic = G__16505__delegate;
return G__16505;
})()
;
h4 = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return h4__0.call(this);
default:
return h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16507__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__7620__auto__,children__7621__auto__);
};
var G__16507 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16507__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16507.cljs$lang$maxFixedArity = 1;
G__16507.cljs$lang$applyTo = (function (arglist__16508){
var opts__7620__auto__ = cljs.core.first(arglist__16508);
var children__7621__auto__ = cljs.core.rest(arglist__16508);
return G__16507__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16507.cljs$core$IFn$_invoke$arity$variadic = G__16507__delegate;
return G__16507;
})()
;
h5 = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return h5__0.call(this);
default:
return h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16509__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__7620__auto__,children__7621__auto__);
};
var G__16509 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16509__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16509.cljs$lang$maxFixedArity = 1;
G__16509.cljs$lang$applyTo = (function (arglist__16510){
var opts__7620__auto__ = cljs.core.first(arglist__16510);
var children__7621__auto__ = cljs.core.rest(arglist__16510);
return G__16509__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16509.cljs$core$IFn$_invoke$arity$variadic = G__16509__delegate;
return G__16509;
})()
;
h6 = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return h6__0.call(this);
default:
return h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16511__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__7620__auto__,children__7621__auto__);
};
var G__16511 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16511__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16511.cljs$lang$maxFixedArity = 1;
G__16511.cljs$lang$applyTo = (function (arglist__16512){
var opts__7620__auto__ = cljs.core.first(arglist__16512);
var children__7621__auto__ = cljs.core.rest(arglist__16512);
return G__16511__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16511.cljs$core$IFn$_invoke$arity$variadic = G__16511__delegate;
return G__16511;
})()
;
head = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return head__0.call(this);
default:
return head__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16513__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__7620__auto__,children__7621__auto__);
};
var G__16513 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16513__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16513.cljs$lang$maxFixedArity = 1;
G__16513.cljs$lang$applyTo = (function (arglist__16514){
var opts__7620__auto__ = cljs.core.first(arglist__16514);
var children__7621__auto__ = cljs.core.rest(arglist__16514);
return G__16513__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16513.cljs$core$IFn$_invoke$arity$variadic = G__16513__delegate;
return G__16513;
})()
;
header = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return header__0.call(this);
default:
return header__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16515__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__7620__auto__,children__7621__auto__);
};
var G__16515 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16515__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16515.cljs$lang$maxFixedArity = 1;
G__16515.cljs$lang$applyTo = (function (arglist__16516){
var opts__7620__auto__ = cljs.core.first(arglist__16516);
var children__7621__auto__ = cljs.core.rest(arglist__16516);
return G__16515__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16515.cljs$core$IFn$_invoke$arity$variadic = G__16515__delegate;
return G__16515;
})()
;
hr = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return hr__0.call(this);
default:
return hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16517__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__7620__auto__,children__7621__auto__);
};
var G__16517 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16517__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16517.cljs$lang$maxFixedArity = 1;
G__16517.cljs$lang$applyTo = (function (arglist__16518){
var opts__7620__auto__ = cljs.core.first(arglist__16518);
var children__7621__auto__ = cljs.core.rest(arglist__16518);
return G__16517__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16517.cljs$core$IFn$_invoke$arity$variadic = G__16517__delegate;
return G__16517;
})()
;
html = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return html__0.call(this);
default:
return html__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16519__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__7620__auto__,children__7621__auto__);
};
var G__16519 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16519__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16519.cljs$lang$maxFixedArity = 1;
G__16519.cljs$lang$applyTo = (function (arglist__16520){
var opts__7620__auto__ = cljs.core.first(arglist__16520);
var children__7621__auto__ = cljs.core.rest(arglist__16520);
return G__16519__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16519.cljs$core$IFn$_invoke$arity$variadic = G__16519__delegate;
return G__16519;
})()
;
i = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return i__0.call(this);
default:
return i__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16521__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__7620__auto__,children__7621__auto__);
};
var G__16521 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16521__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16521.cljs$lang$maxFixedArity = 1;
G__16521.cljs$lang$applyTo = (function (arglist__16522){
var opts__7620__auto__ = cljs.core.first(arglist__16522);
var children__7621__auto__ = cljs.core.rest(arglist__16522);
return G__16521__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16521.cljs$core$IFn$_invoke$arity$variadic = G__16521__delegate;
return G__16521;
})()
;
iframe = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return iframe__0.call(this);
default:
return iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16523__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__7620__auto__,children__7621__auto__);
};
var G__16523 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16523__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16523.cljs$lang$maxFixedArity = 1;
G__16523.cljs$lang$applyTo = (function (arglist__16524){
var opts__7620__auto__ = cljs.core.first(arglist__16524);
var children__7621__auto__ = cljs.core.rest(arglist__16524);
return G__16523__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16523.cljs$core$IFn$_invoke$arity$variadic = G__16523__delegate;
return G__16523;
})()
;
img = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return img__0.call(this);
default:
return img__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16525__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__7620__auto__,children__7621__auto__);
};
var G__16525 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16525__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16525.cljs$lang$maxFixedArity = 1;
G__16525.cljs$lang$applyTo = (function (arglist__16526){
var opts__7620__auto__ = cljs.core.first(arglist__16526);
var children__7621__auto__ = cljs.core.rest(arglist__16526);
return G__16525__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16525.cljs$core$IFn$_invoke$arity$variadic = G__16525__delegate;
return G__16525;
})()
;
ins = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return ins__0.call(this);
default:
return ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16527__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__7620__auto__,children__7621__auto__);
};
var G__16527 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16527__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16527.cljs$lang$maxFixedArity = 1;
G__16527.cljs$lang$applyTo = (function (arglist__16528){
var opts__7620__auto__ = cljs.core.first(arglist__16528);
var children__7621__auto__ = cljs.core.rest(arglist__16528);
return G__16527__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16527.cljs$core$IFn$_invoke$arity$variadic = G__16527__delegate;
return G__16527;
})()
;
kbd = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return kbd__0.call(this);
default:
return kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16529__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__7620__auto__,children__7621__auto__);
};
var G__16529 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16529__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16529.cljs$lang$maxFixedArity = 1;
G__16529.cljs$lang$applyTo = (function (arglist__16530){
var opts__7620__auto__ = cljs.core.first(arglist__16530);
var children__7621__auto__ = cljs.core.rest(arglist__16530);
return G__16529__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16529.cljs$core$IFn$_invoke$arity$variadic = G__16529__delegate;
return G__16529;
})()
;
keygen = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return keygen__0.call(this);
default:
return keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16531__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__7620__auto__,children__7621__auto__);
};
var G__16531 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16531__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16531.cljs$lang$maxFixedArity = 1;
G__16531.cljs$lang$applyTo = (function (arglist__16532){
var opts__7620__auto__ = cljs.core.first(arglist__16532);
var children__7621__auto__ = cljs.core.rest(arglist__16532);
return G__16531__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16531.cljs$core$IFn$_invoke$arity$variadic = G__16531__delegate;
return G__16531;
})()
;
label = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return label__0.call(this);
default:
return label__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16533__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__7620__auto__,children__7621__auto__);
};
var G__16533 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16533__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16533.cljs$lang$maxFixedArity = 1;
G__16533.cljs$lang$applyTo = (function (arglist__16534){
var opts__7620__auto__ = cljs.core.first(arglist__16534);
var children__7621__auto__ = cljs.core.rest(arglist__16534);
return G__16533__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16533.cljs$core$IFn$_invoke$arity$variadic = G__16533__delegate;
return G__16533;
})()
;
legend = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return legend__0.call(this);
default:
return legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16535__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__7620__auto__,children__7621__auto__);
};
var G__16535 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16535__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16535.cljs$lang$maxFixedArity = 1;
G__16535.cljs$lang$applyTo = (function (arglist__16536){
var opts__7620__auto__ = cljs.core.first(arglist__16536);
var children__7621__auto__ = cljs.core.rest(arglist__16536);
return G__16535__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16535.cljs$core$IFn$_invoke$arity$variadic = G__16535__delegate;
return G__16535;
})()
;
li = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return li__0.call(this);
default:
return li__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16537__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__7620__auto__,children__7621__auto__);
};
var G__16537 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16537__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16537.cljs$lang$maxFixedArity = 1;
G__16537.cljs$lang$applyTo = (function (arglist__16538){
var opts__7620__auto__ = cljs.core.first(arglist__16538);
var children__7621__auto__ = cljs.core.rest(arglist__16538);
return G__16537__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16537.cljs$core$IFn$_invoke$arity$variadic = G__16537__delegate;
return G__16537;
})()
;
link = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return link__0.call(this);
default:
return link__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16539__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__7620__auto__,children__7621__auto__);
};
var G__16539 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16539__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16539.cljs$lang$maxFixedArity = 1;
G__16539.cljs$lang$applyTo = (function (arglist__16540){
var opts__7620__auto__ = cljs.core.first(arglist__16540);
var children__7621__auto__ = cljs.core.rest(arglist__16540);
return G__16539__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16539.cljs$core$IFn$_invoke$arity$variadic = G__16539__delegate;
return G__16539;
})()
;
main = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return main__0.call(this);
default:
return main__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16541__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__7620__auto__,children__7621__auto__);
};
var G__16541 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16541__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16541.cljs$lang$maxFixedArity = 1;
G__16541.cljs$lang$applyTo = (function (arglist__16542){
var opts__7620__auto__ = cljs.core.first(arglist__16542);
var children__7621__auto__ = cljs.core.rest(arglist__16542);
return G__16541__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16541.cljs$core$IFn$_invoke$arity$variadic = G__16541__delegate;
return G__16541;
})()
;
map = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return map__0.call(this);
default:
return map__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16543__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__7620__auto__,children__7621__auto__);
};
var G__16543 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16543__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16543.cljs$lang$maxFixedArity = 1;
G__16543.cljs$lang$applyTo = (function (arglist__16544){
var opts__7620__auto__ = cljs.core.first(arglist__16544);
var children__7621__auto__ = cljs.core.rest(arglist__16544);
return G__16543__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16543.cljs$core$IFn$_invoke$arity$variadic = G__16543__delegate;
return G__16543;
})()
;
mark = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return mark__0.call(this);
default:
return mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16545__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__7620__auto__,children__7621__auto__);
};
var G__16545 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16545__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16545.cljs$lang$maxFixedArity = 1;
G__16545.cljs$lang$applyTo = (function (arglist__16546){
var opts__7620__auto__ = cljs.core.first(arglist__16546);
var children__7621__auto__ = cljs.core.rest(arglist__16546);
return G__16545__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16545.cljs$core$IFn$_invoke$arity$variadic = G__16545__delegate;
return G__16545;
})()
;
menu = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return menu__0.call(this);
default:
return menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16547__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__7620__auto__,children__7621__auto__);
};
var G__16547 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16547__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16547.cljs$lang$maxFixedArity = 1;
G__16547.cljs$lang$applyTo = (function (arglist__16548){
var opts__7620__auto__ = cljs.core.first(arglist__16548);
var children__7621__auto__ = cljs.core.rest(arglist__16548);
return G__16547__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16547.cljs$core$IFn$_invoke$arity$variadic = G__16547__delegate;
return G__16547;
})()
;
menuitem = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return menuitem__0.call(this);
default:
return menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16549__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__7620__auto__,children__7621__auto__);
};
var G__16549 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16549__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16549.cljs$lang$maxFixedArity = 1;
G__16549.cljs$lang$applyTo = (function (arglist__16550){
var opts__7620__auto__ = cljs.core.first(arglist__16550);
var children__7621__auto__ = cljs.core.rest(arglist__16550);
return G__16549__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16549.cljs$core$IFn$_invoke$arity$variadic = G__16549__delegate;
return G__16549;
})()
;
meta = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return meta__0.call(this);
default:
return meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16551__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__7620__auto__,children__7621__auto__);
};
var G__16551 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16551__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16551.cljs$lang$maxFixedArity = 1;
G__16551.cljs$lang$applyTo = (function (arglist__16552){
var opts__7620__auto__ = cljs.core.first(arglist__16552);
var children__7621__auto__ = cljs.core.rest(arglist__16552);
return G__16551__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16551.cljs$core$IFn$_invoke$arity$variadic = G__16551__delegate;
return G__16551;
})()
;
meter = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return meter__0.call(this);
default:
return meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16553__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__7620__auto__,children__7621__auto__);
};
var G__16553 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16553__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16553.cljs$lang$maxFixedArity = 1;
G__16553.cljs$lang$applyTo = (function (arglist__16554){
var opts__7620__auto__ = cljs.core.first(arglist__16554);
var children__7621__auto__ = cljs.core.rest(arglist__16554);
return G__16553__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16553.cljs$core$IFn$_invoke$arity$variadic = G__16553__delegate;
return G__16553;
})()
;
nav = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return nav__0.call(this);
default:
return nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16555__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__7620__auto__,children__7621__auto__);
};
var G__16555 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16555__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16555.cljs$lang$maxFixedArity = 1;
G__16555.cljs$lang$applyTo = (function (arglist__16556){
var opts__7620__auto__ = cljs.core.first(arglist__16556);
var children__7621__auto__ = cljs.core.rest(arglist__16556);
return G__16555__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16555.cljs$core$IFn$_invoke$arity$variadic = G__16555__delegate;
return G__16555;
})()
;
noscript = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return noscript__0.call(this);
default:
return noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16557__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__7620__auto__,children__7621__auto__);
};
var G__16557 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16557__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16557.cljs$lang$maxFixedArity = 1;
G__16557.cljs$lang$applyTo = (function (arglist__16558){
var opts__7620__auto__ = cljs.core.first(arglist__16558);
var children__7621__auto__ = cljs.core.rest(arglist__16558);
return G__16557__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16557.cljs$core$IFn$_invoke$arity$variadic = G__16557__delegate;
return G__16557;
})()
;
object = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return object__0.call(this);
default:
return object__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16559__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__7620__auto__,children__7621__auto__);
};
var G__16559 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16559__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16559.cljs$lang$maxFixedArity = 1;
G__16559.cljs$lang$applyTo = (function (arglist__16560){
var opts__7620__auto__ = cljs.core.first(arglist__16560);
var children__7621__auto__ = cljs.core.rest(arglist__16560);
return G__16559__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16559.cljs$core$IFn$_invoke$arity$variadic = G__16559__delegate;
return G__16559;
})()
;
ol = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return ol__0.call(this);
default:
return ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16561__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__7620__auto__,children__7621__auto__);
};
var G__16561 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16561__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16561.cljs$lang$maxFixedArity = 1;
G__16561.cljs$lang$applyTo = (function (arglist__16562){
var opts__7620__auto__ = cljs.core.first(arglist__16562);
var children__7621__auto__ = cljs.core.rest(arglist__16562);
return G__16561__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16561.cljs$core$IFn$_invoke$arity$variadic = G__16561__delegate;
return G__16561;
})()
;
optgroup = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return optgroup__0.call(this);
default:
return optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16563__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__7620__auto__,children__7621__auto__);
};
var G__16563 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16563__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16563.cljs$lang$maxFixedArity = 1;
G__16563.cljs$lang$applyTo = (function (arglist__16564){
var opts__7620__auto__ = cljs.core.first(arglist__16564);
var children__7621__auto__ = cljs.core.rest(arglist__16564);
return G__16563__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16563.cljs$core$IFn$_invoke$arity$variadic = G__16563__delegate;
return G__16563;
})()
;
output = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return output__0.call(this);
default:
return output__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16565__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__7620__auto__,children__7621__auto__);
};
var G__16565 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16565__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16565.cljs$lang$maxFixedArity = 1;
G__16565.cljs$lang$applyTo = (function (arglist__16566){
var opts__7620__auto__ = cljs.core.first(arglist__16566);
var children__7621__auto__ = cljs.core.rest(arglist__16566);
return G__16565__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16565.cljs$core$IFn$_invoke$arity$variadic = G__16565__delegate;
return G__16565;
})()
;
p = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return p__0.call(this);
default:
return p__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16567__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__7620__auto__,children__7621__auto__);
};
var G__16567 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16567__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16567.cljs$lang$maxFixedArity = 1;
G__16567.cljs$lang$applyTo = (function (arglist__16568){
var opts__7620__auto__ = cljs.core.first(arglist__16568);
var children__7621__auto__ = cljs.core.rest(arglist__16568);
return G__16567__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16567.cljs$core$IFn$_invoke$arity$variadic = G__16567__delegate;
return G__16567;
})()
;
param = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return param__0.call(this);
default:
return param__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16569__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__7620__auto__,children__7621__auto__);
};
var G__16569 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16569__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16569.cljs$lang$maxFixedArity = 1;
G__16569.cljs$lang$applyTo = (function (arglist__16570){
var opts__7620__auto__ = cljs.core.first(arglist__16570);
var children__7621__auto__ = cljs.core.rest(arglist__16570);
return G__16569__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16569.cljs$core$IFn$_invoke$arity$variadic = G__16569__delegate;
return G__16569;
})()
;
pre = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return pre__0.call(this);
default:
return pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16571__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__7620__auto__,children__7621__auto__);
};
var G__16571 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16571__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16571.cljs$lang$maxFixedArity = 1;
G__16571.cljs$lang$applyTo = (function (arglist__16572){
var opts__7620__auto__ = cljs.core.first(arglist__16572);
var children__7621__auto__ = cljs.core.rest(arglist__16572);
return G__16571__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16571.cljs$core$IFn$_invoke$arity$variadic = G__16571__delegate;
return G__16571;
})()
;
progress = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return progress__0.call(this);
default:
return progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16573__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__7620__auto__,children__7621__auto__);
};
var G__16573 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16573__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16573.cljs$lang$maxFixedArity = 1;
G__16573.cljs$lang$applyTo = (function (arglist__16574){
var opts__7620__auto__ = cljs.core.first(arglist__16574);
var children__7621__auto__ = cljs.core.rest(arglist__16574);
return G__16573__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16573.cljs$core$IFn$_invoke$arity$variadic = G__16573__delegate;
return G__16573;
})()
;
q = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return q__0.call(this);
default:
return q__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16575__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__7620__auto__,children__7621__auto__);
};
var G__16575 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16575__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16575.cljs$lang$maxFixedArity = 1;
G__16575.cljs$lang$applyTo = (function (arglist__16576){
var opts__7620__auto__ = cljs.core.first(arglist__16576);
var children__7621__auto__ = cljs.core.rest(arglist__16576);
return G__16575__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16575.cljs$core$IFn$_invoke$arity$variadic = G__16575__delegate;
return G__16575;
})()
;
rp = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return rp__0.call(this);
default:
return rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16577__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__7620__auto__,children__7621__auto__);
};
var G__16577 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16577__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16577.cljs$lang$maxFixedArity = 1;
G__16577.cljs$lang$applyTo = (function (arglist__16578){
var opts__7620__auto__ = cljs.core.first(arglist__16578);
var children__7621__auto__ = cljs.core.rest(arglist__16578);
return G__16577__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16577.cljs$core$IFn$_invoke$arity$variadic = G__16577__delegate;
return G__16577;
})()
;
rt = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return rt__0.call(this);
default:
return rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16579__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__7620__auto__,children__7621__auto__);
};
var G__16579 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16579__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16579.cljs$lang$maxFixedArity = 1;
G__16579.cljs$lang$applyTo = (function (arglist__16580){
var opts__7620__auto__ = cljs.core.first(arglist__16580);
var children__7621__auto__ = cljs.core.rest(arglist__16580);
return G__16579__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16579.cljs$core$IFn$_invoke$arity$variadic = G__16579__delegate;
return G__16579;
})()
;
ruby = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return ruby__0.call(this);
default:
return ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16581__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__7620__auto__,children__7621__auto__);
};
var G__16581 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16581__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16581.cljs$lang$maxFixedArity = 1;
G__16581.cljs$lang$applyTo = (function (arglist__16582){
var opts__7620__auto__ = cljs.core.first(arglist__16582);
var children__7621__auto__ = cljs.core.rest(arglist__16582);
return G__16581__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16581.cljs$core$IFn$_invoke$arity$variadic = G__16581__delegate;
return G__16581;
})()
;
s = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return s__0.call(this);
default:
return s__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16583__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__7620__auto__,children__7621__auto__);
};
var G__16583 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16583__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16583.cljs$lang$maxFixedArity = 1;
G__16583.cljs$lang$applyTo = (function (arglist__16584){
var opts__7620__auto__ = cljs.core.first(arglist__16584);
var children__7621__auto__ = cljs.core.rest(arglist__16584);
return G__16583__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16583.cljs$core$IFn$_invoke$arity$variadic = G__16583__delegate;
return G__16583;
})()
;
samp = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return samp__0.call(this);
default:
return samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16585__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__7620__auto__,children__7621__auto__);
};
var G__16585 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16585__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16585.cljs$lang$maxFixedArity = 1;
G__16585.cljs$lang$applyTo = (function (arglist__16586){
var opts__7620__auto__ = cljs.core.first(arglist__16586);
var children__7621__auto__ = cljs.core.rest(arglist__16586);
return G__16585__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16585.cljs$core$IFn$_invoke$arity$variadic = G__16585__delegate;
return G__16585;
})()
;
script = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return script__0.call(this);
default:
return script__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16587__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__7620__auto__,children__7621__auto__);
};
var G__16587 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16587__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16587.cljs$lang$maxFixedArity = 1;
G__16587.cljs$lang$applyTo = (function (arglist__16588){
var opts__7620__auto__ = cljs.core.first(arglist__16588);
var children__7621__auto__ = cljs.core.rest(arglist__16588);
return G__16587__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16587.cljs$core$IFn$_invoke$arity$variadic = G__16587__delegate;
return G__16587;
})()
;
section = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return section__0.call(this);
default:
return section__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16589__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__7620__auto__,children__7621__auto__);
};
var G__16589 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16589__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16589.cljs$lang$maxFixedArity = 1;
G__16589.cljs$lang$applyTo = (function (arglist__16590){
var opts__7620__auto__ = cljs.core.first(arglist__16590);
var children__7621__auto__ = cljs.core.rest(arglist__16590);
return G__16589__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16589.cljs$core$IFn$_invoke$arity$variadic = G__16589__delegate;
return G__16589;
})()
;
select = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return select__0.call(this);
default:
return select__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16591__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__7620__auto__,children__7621__auto__);
};
var G__16591 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16591__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16591.cljs$lang$maxFixedArity = 1;
G__16591.cljs$lang$applyTo = (function (arglist__16592){
var opts__7620__auto__ = cljs.core.first(arglist__16592);
var children__7621__auto__ = cljs.core.rest(arglist__16592);
return G__16591__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16591.cljs$core$IFn$_invoke$arity$variadic = G__16591__delegate;
return G__16591;
})()
;
small = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return small__0.call(this);
default:
return small__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16593__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__7620__auto__,children__7621__auto__);
};
var G__16593 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16593__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16593.cljs$lang$maxFixedArity = 1;
G__16593.cljs$lang$applyTo = (function (arglist__16594){
var opts__7620__auto__ = cljs.core.first(arglist__16594);
var children__7621__auto__ = cljs.core.rest(arglist__16594);
return G__16593__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16593.cljs$core$IFn$_invoke$arity$variadic = G__16593__delegate;
return G__16593;
})()
;
source = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return source__0.call(this);
default:
return source__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16595__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__7620__auto__,children__7621__auto__);
};
var G__16595 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16595__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16595.cljs$lang$maxFixedArity = 1;
G__16595.cljs$lang$applyTo = (function (arglist__16596){
var opts__7620__auto__ = cljs.core.first(arglist__16596);
var children__7621__auto__ = cljs.core.rest(arglist__16596);
return G__16595__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16595.cljs$core$IFn$_invoke$arity$variadic = G__16595__delegate;
return G__16595;
})()
;
span = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return span__0.call(this);
default:
return span__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16597__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__7620__auto__,children__7621__auto__);
};
var G__16597 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16597__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16597.cljs$lang$maxFixedArity = 1;
G__16597.cljs$lang$applyTo = (function (arglist__16598){
var opts__7620__auto__ = cljs.core.first(arglist__16598);
var children__7621__auto__ = cljs.core.rest(arglist__16598);
return G__16597__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16597.cljs$core$IFn$_invoke$arity$variadic = G__16597__delegate;
return G__16597;
})()
;
strong = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return strong__0.call(this);
default:
return strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16599__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__7620__auto__,children__7621__auto__);
};
var G__16599 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16599__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16599.cljs$lang$maxFixedArity = 1;
G__16599.cljs$lang$applyTo = (function (arglist__16600){
var opts__7620__auto__ = cljs.core.first(arglist__16600);
var children__7621__auto__ = cljs.core.rest(arglist__16600);
return G__16599__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16599.cljs$core$IFn$_invoke$arity$variadic = G__16599__delegate;
return G__16599;
})()
;
style = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return style__0.call(this);
default:
return style__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16601__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__7620__auto__,children__7621__auto__);
};
var G__16601 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16601__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16601.cljs$lang$maxFixedArity = 1;
G__16601.cljs$lang$applyTo = (function (arglist__16602){
var opts__7620__auto__ = cljs.core.first(arglist__16602);
var children__7621__auto__ = cljs.core.rest(arglist__16602);
return G__16601__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16601.cljs$core$IFn$_invoke$arity$variadic = G__16601__delegate;
return G__16601;
})()
;
sub = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return sub__0.call(this);
default:
return sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16603__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__7620__auto__,children__7621__auto__);
};
var G__16603 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16603__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16603.cljs$lang$maxFixedArity = 1;
G__16603.cljs$lang$applyTo = (function (arglist__16604){
var opts__7620__auto__ = cljs.core.first(arglist__16604);
var children__7621__auto__ = cljs.core.rest(arglist__16604);
return G__16603__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16603.cljs$core$IFn$_invoke$arity$variadic = G__16603__delegate;
return G__16603;
})()
;
summary = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return summary__0.call(this);
default:
return summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16605__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__7620__auto__,children__7621__auto__);
};
var G__16605 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16605__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16605.cljs$lang$maxFixedArity = 1;
G__16605.cljs$lang$applyTo = (function (arglist__16606){
var opts__7620__auto__ = cljs.core.first(arglist__16606);
var children__7621__auto__ = cljs.core.rest(arglist__16606);
return G__16605__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16605.cljs$core$IFn$_invoke$arity$variadic = G__16605__delegate;
return G__16605;
})()
;
sup = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return sup__0.call(this);
default:
return sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16607__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__7620__auto__,children__7621__auto__);
};
var G__16607 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16607__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16607.cljs$lang$maxFixedArity = 1;
G__16607.cljs$lang$applyTo = (function (arglist__16608){
var opts__7620__auto__ = cljs.core.first(arglist__16608);
var children__7621__auto__ = cljs.core.rest(arglist__16608);
return G__16607__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16607.cljs$core$IFn$_invoke$arity$variadic = G__16607__delegate;
return G__16607;
})()
;
table = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return table__0.call(this);
default:
return table__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16609__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__7620__auto__,children__7621__auto__);
};
var G__16609 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16609__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16609.cljs$lang$maxFixedArity = 1;
G__16609.cljs$lang$applyTo = (function (arglist__16610){
var opts__7620__auto__ = cljs.core.first(arglist__16610);
var children__7621__auto__ = cljs.core.rest(arglist__16610);
return G__16609__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16609.cljs$core$IFn$_invoke$arity$variadic = G__16609__delegate;
return G__16609;
})()
;
tbody = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return tbody__0.call(this);
default:
return tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16611__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__7620__auto__,children__7621__auto__);
};
var G__16611 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16611__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16611.cljs$lang$maxFixedArity = 1;
G__16611.cljs$lang$applyTo = (function (arglist__16612){
var opts__7620__auto__ = cljs.core.first(arglist__16612);
var children__7621__auto__ = cljs.core.rest(arglist__16612);
return G__16611__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16611.cljs$core$IFn$_invoke$arity$variadic = G__16611__delegate;
return G__16611;
})()
;
td = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return td__0.call(this);
default:
return td__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16613__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__7620__auto__,children__7621__auto__);
};
var G__16613 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16613__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16613.cljs$lang$maxFixedArity = 1;
G__16613.cljs$lang$applyTo = (function (arglist__16614){
var opts__7620__auto__ = cljs.core.first(arglist__16614);
var children__7621__auto__ = cljs.core.rest(arglist__16614);
return G__16613__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16613.cljs$core$IFn$_invoke$arity$variadic = G__16613__delegate;
return G__16613;
})()
;
tfoot = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return tfoot__0.call(this);
default:
return tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16615__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__7620__auto__,children__7621__auto__);
};
var G__16615 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16615__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16615.cljs$lang$maxFixedArity = 1;
G__16615.cljs$lang$applyTo = (function (arglist__16616){
var opts__7620__auto__ = cljs.core.first(arglist__16616);
var children__7621__auto__ = cljs.core.rest(arglist__16616);
return G__16615__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16615.cljs$core$IFn$_invoke$arity$variadic = G__16615__delegate;
return G__16615;
})()
;
th = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return th__0.call(this);
default:
return th__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16617__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__7620__auto__,children__7621__auto__);
};
var G__16617 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16617__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16617.cljs$lang$maxFixedArity = 1;
G__16617.cljs$lang$applyTo = (function (arglist__16618){
var opts__7620__auto__ = cljs.core.first(arglist__16618);
var children__7621__auto__ = cljs.core.rest(arglist__16618);
return G__16617__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16617.cljs$core$IFn$_invoke$arity$variadic = G__16617__delegate;
return G__16617;
})()
;
thead = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return thead__0.call(this);
default:
return thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16619__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__7620__auto__,children__7621__auto__);
};
var G__16619 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16619__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16619.cljs$lang$maxFixedArity = 1;
G__16619.cljs$lang$applyTo = (function (arglist__16620){
var opts__7620__auto__ = cljs.core.first(arglist__16620);
var children__7621__auto__ = cljs.core.rest(arglist__16620);
return G__16619__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16619.cljs$core$IFn$_invoke$arity$variadic = G__16619__delegate;
return G__16619;
})()
;
time = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return time__0.call(this);
default:
return time__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16621__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__7620__auto__,children__7621__auto__);
};
var G__16621 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16621__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16621.cljs$lang$maxFixedArity = 1;
G__16621.cljs$lang$applyTo = (function (arglist__16622){
var opts__7620__auto__ = cljs.core.first(arglist__16622);
var children__7621__auto__ = cljs.core.rest(arglist__16622);
return G__16621__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16621.cljs$core$IFn$_invoke$arity$variadic = G__16621__delegate;
return G__16621;
})()
;
title = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return title__0.call(this);
default:
return title__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16623__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__7620__auto__,children__7621__auto__);
};
var G__16623 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16623__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16623.cljs$lang$maxFixedArity = 1;
G__16623.cljs$lang$applyTo = (function (arglist__16624){
var opts__7620__auto__ = cljs.core.first(arglist__16624);
var children__7621__auto__ = cljs.core.rest(arglist__16624);
return G__16623__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16623.cljs$core$IFn$_invoke$arity$variadic = G__16623__delegate;
return G__16623;
})()
;
tr = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return tr__0.call(this);
default:
return tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16625__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__7620__auto__,children__7621__auto__);
};
var G__16625 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16625__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16625.cljs$lang$maxFixedArity = 1;
G__16625.cljs$lang$applyTo = (function (arglist__16626){
var opts__7620__auto__ = cljs.core.first(arglist__16626);
var children__7621__auto__ = cljs.core.rest(arglist__16626);
return G__16625__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16625.cljs$core$IFn$_invoke$arity$variadic = G__16625__delegate;
return G__16625;
})()
;
track = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return track__0.call(this);
default:
return track__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16627__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__7620__auto__,children__7621__auto__);
};
var G__16627 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16627__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16627.cljs$lang$maxFixedArity = 1;
G__16627.cljs$lang$applyTo = (function (arglist__16628){
var opts__7620__auto__ = cljs.core.first(arglist__16628);
var children__7621__auto__ = cljs.core.rest(arglist__16628);
return G__16627__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16627.cljs$core$IFn$_invoke$arity$variadic = G__16627__delegate;
return G__16627;
})()
;
u = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return u__0.call(this);
default:
return u__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16629__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__7620__auto__,children__7621__auto__);
};
var G__16629 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16629__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16629.cljs$lang$maxFixedArity = 1;
G__16629.cljs$lang$applyTo = (function (arglist__16630){
var opts__7620__auto__ = cljs.core.first(arglist__16630);
var children__7621__auto__ = cljs.core.rest(arglist__16630);
return G__16629__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16629.cljs$core$IFn$_invoke$arity$variadic = G__16629__delegate;
return G__16629;
})()
;
ul = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return ul__0.call(this);
default:
return ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16631__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__7620__auto__,children__7621__auto__);
};
var G__16631 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16631__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16631.cljs$lang$maxFixedArity = 1;
G__16631.cljs$lang$applyTo = (function (arglist__16632){
var opts__7620__auto__ = cljs.core.first(arglist__16632);
var children__7621__auto__ = cljs.core.rest(arglist__16632);
return G__16631__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16631.cljs$core$IFn$_invoke$arity$variadic = G__16631__delegate;
return G__16631;
})()
;
var$ = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return var$__0.call(this);
default:
return var$__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16633__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__7620__auto__,children__7621__auto__);
};
var G__16633 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16633__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16633.cljs$lang$maxFixedArity = 1;
G__16633.cljs$lang$applyTo = (function (arglist__16634){
var opts__7620__auto__ = cljs.core.first(arglist__16634);
var children__7621__auto__ = cljs.core.rest(arglist__16634);
return G__16633__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16633.cljs$core$IFn$_invoke$arity$variadic = G__16633__delegate;
return G__16633;
})()
;
video = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return video__0.call(this);
default:
return video__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16635__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__7620__auto__,children__7621__auto__);
};
var G__16635 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16635__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16635.cljs$lang$maxFixedArity = 1;
G__16635.cljs$lang$applyTo = (function (arglist__16636){
var opts__7620__auto__ = cljs.core.first(arglist__16636);
var children__7621__auto__ = cljs.core.rest(arglist__16636);
return G__16635__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16635.cljs$core$IFn$_invoke$arity$variadic = G__16635__delegate;
return G__16635;
})()
;
wbr = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return wbr__0.call(this);
default:
return wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16637__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__7620__auto__,children__7621__auto__);
};
var G__16637 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16637__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16637.cljs$lang$maxFixedArity = 1;
G__16637.cljs$lang$applyTo = (function (arglist__16638){
var opts__7620__auto__ = cljs.core.first(arglist__16638);
var children__7621__auto__ = cljs.core.rest(arglist__16638);
return G__16637__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16637.cljs$core$IFn$_invoke$arity$variadic = G__16637__delegate;
return G__16637;
})()
;
circle = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return circle__0.call(this);
default:
return circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16639__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__7620__auto__,children__7621__auto__);
};
var G__16639 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16639__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16639.cljs$lang$maxFixedArity = 1;
G__16639.cljs$lang$applyTo = (function (arglist__16640){
var opts__7620__auto__ = cljs.core.first(arglist__16640);
var children__7621__auto__ = cljs.core.rest(arglist__16640);
return G__16639__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16639.cljs$core$IFn$_invoke$arity$variadic = G__16639__delegate;
return G__16639;
})()
;
ellipse = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return ellipse__0.call(this);
default:
return ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16641__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__7620__auto__,children__7621__auto__);
};
var G__16641 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16641__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16641.cljs$lang$maxFixedArity = 1;
G__16641.cljs$lang$applyTo = (function (arglist__16642){
var opts__7620__auto__ = cljs.core.first(arglist__16642);
var children__7621__auto__ = cljs.core.rest(arglist__16642);
return G__16641__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16641.cljs$core$IFn$_invoke$arity$variadic = G__16641__delegate;
return G__16641;
})()
;
g = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return g__0.call(this);
default:
return g__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16643__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__7620__auto__,children__7621__auto__);
};
var G__16643 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16643__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16643.cljs$lang$maxFixedArity = 1;
G__16643.cljs$lang$applyTo = (function (arglist__16644){
var opts__7620__auto__ = cljs.core.first(arglist__16644);
var children__7621__auto__ = cljs.core.rest(arglist__16644);
return G__16643__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16643.cljs$core$IFn$_invoke$arity$variadic = G__16643__delegate;
return G__16643;
})()
;
line = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return line__0.call(this);
default:
return line__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16645__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__7620__auto__,children__7621__auto__);
};
var G__16645 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16645__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16645.cljs$lang$maxFixedArity = 1;
G__16645.cljs$lang$applyTo = (function (arglist__16646){
var opts__7620__auto__ = cljs.core.first(arglist__16646);
var children__7621__auto__ = cljs.core.rest(arglist__16646);
return G__16645__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16645.cljs$core$IFn$_invoke$arity$variadic = G__16645__delegate;
return G__16645;
})()
;
path = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return path__0.call(this);
default:
return path__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16647__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__7620__auto__,children__7621__auto__);
};
var G__16647 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16647__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16647.cljs$lang$maxFixedArity = 1;
G__16647.cljs$lang$applyTo = (function (arglist__16648){
var opts__7620__auto__ = cljs.core.first(arglist__16648);
var children__7621__auto__ = cljs.core.rest(arglist__16648);
return G__16647__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16647.cljs$core$IFn$_invoke$arity$variadic = G__16647__delegate;
return G__16647;
})()
;
polyline = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return polyline__0.call(this);
default:
return polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16649__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__7620__auto__,children__7621__auto__);
};
var G__16649 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16649__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16649.cljs$lang$maxFixedArity = 1;
G__16649.cljs$lang$applyTo = (function (arglist__16650){
var opts__7620__auto__ = cljs.core.first(arglist__16650);
var children__7621__auto__ = cljs.core.rest(arglist__16650);
return G__16649__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16649.cljs$core$IFn$_invoke$arity$variadic = G__16649__delegate;
return G__16649;
})()
;
rect = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return rect__0.call(this);
default:
return rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16651__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__7620__auto__,children__7621__auto__);
};
var G__16651 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16651__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16651.cljs$lang$maxFixedArity = 1;
G__16651.cljs$lang$applyTo = (function (arglist__16652){
var opts__7620__auto__ = cljs.core.first(arglist__16652);
var children__7621__auto__ = cljs.core.rest(arglist__16652);
return G__16651__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16651.cljs$core$IFn$_invoke$arity$variadic = G__16651__delegate;
return G__16651;
})()
;
svg = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return svg__0.call(this);
default:
return svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16653__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__7620__auto__,children__7621__auto__);
};
var G__16653 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16653__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16653.cljs$lang$maxFixedArity = 1;
G__16653.cljs$lang$applyTo = (function (arglist__16654){
var opts__7620__auto__ = cljs.core.first(arglist__16654);
var children__7621__auto__ = cljs.core.rest(arglist__16654);
return G__16653__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16653.cljs$core$IFn$_invoke$arity$variadic = G__16653__delegate;
return G__16653;
})()
;
text = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return text__0.call(this);
default:
return text__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16655__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__7620__auto__,children__7621__auto__);
};
var G__16655 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16655__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16655.cljs$lang$maxFixedArity = 1;
G__16655.cljs$lang$applyTo = (function (arglist__16656){
var opts__7620__auto__ = cljs.core.first(arglist__16656);
var children__7621__auto__ = cljs.core.rest(arglist__16656);
return G__16655__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16655.cljs$core$IFn$_invoke$arity$variadic = G__16655__delegate;
return G__16655;
})()
;
defs = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return defs__0.call(this);
default:
return defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16657__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__7620__auto__,children__7621__auto__);
};
var G__16657 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16657__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16657.cljs$lang$maxFixedArity = 1;
G__16657.cljs$lang$applyTo = (function (arglist__16658){
var opts__7620__auto__ = cljs.core.first(arglist__16658);
var children__7621__auto__ = cljs.core.rest(arglist__16658);
return G__16657__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16657.cljs$core$IFn$_invoke$arity$variadic = G__16657__delegate;
return G__16657;
})()
;
linearGradient = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return linearGradient__0.call(this);
default:
return linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16659__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__7620__auto__,children__7621__auto__);
};
var G__16659 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16659__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16659.cljs$lang$maxFixedArity = 1;
G__16659.cljs$lang$applyTo = (function (arglist__16660){
var opts__7620__auto__ = cljs.core.first(arglist__16660);
var children__7621__auto__ = cljs.core.rest(arglist__16660);
return G__16659__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16659.cljs$core$IFn$_invoke$arity$variadic = G__16659__delegate;
return G__16659;
})()
;
polygon = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return polygon__0.call(this);
default:
return polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16661__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__7620__auto__,children__7621__auto__);
};
var G__16661 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16661__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16661.cljs$lang$maxFixedArity = 1;
G__16661.cljs$lang$applyTo = (function (arglist__16662){
var opts__7620__auto__ = cljs.core.first(arglist__16662);
var children__7621__auto__ = cljs.core.rest(arglist__16662);
return G__16661__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16661.cljs$core$IFn$_invoke$arity$variadic = G__16661__delegate;
return G__16661;
})()
;
radialGradient = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return radialGradient__0.call(this);
default:
return radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16663__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__7620__auto__,children__7621__auto__);
};
var G__16663 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16663__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16663.cljs$lang$maxFixedArity = 1;
G__16663.cljs$lang$applyTo = (function (arglist__16664){
var opts__7620__auto__ = cljs.core.first(arglist__16664);
var children__7621__auto__ = cljs.core.rest(arglist__16664);
return G__16663__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16663.cljs$core$IFn$_invoke$arity$variadic = G__16663__delegate;
return G__16663;
})()
;
stop = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return stop__0.call(this);
default:
return stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16665__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__7620__auto__,children__7621__auto__);
};
var G__16665 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16665__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16665.cljs$lang$maxFixedArity = 1;
G__16665.cljs$lang$applyTo = (function (arglist__16666){
var opts__7620__auto__ = cljs.core.first(arglist__16666);
var children__7621__auto__ = cljs.core.rest(arglist__16666);
return G__16665__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16665.cljs$core$IFn$_invoke$arity$variadic = G__16665__delegate;
return G__16665;
})()
;
tspan = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return tspan__0.call(this);
default:
return tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16667__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__7620__auto__,children__7621__auto__);
};
var G__16667 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16667__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16667.cljs$lang$maxFixedArity = 1;
G__16667.cljs$lang$applyTo = (function (arglist__16668){
var opts__7620__auto__ = cljs.core.first(arglist__16668);
var children__7621__auto__ = cljs.core.rest(arglist__16668);
return G__16667__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16667.cljs$core$IFn$_invoke$arity$variadic = G__16667__delegate;
return G__16667;
})()
;
input = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return input__0.call(this);
default:
return input__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16669__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__7620__auto__,children__7621__auto__);
};
var G__16669 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16669__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16669.cljs$lang$maxFixedArity = 1;
G__16669.cljs$lang$applyTo = (function (arglist__16670){
var opts__7620__auto__ = cljs.core.first(arglist__16670);
var children__7621__auto__ = cljs.core.rest(arglist__16670);
return G__16669__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16669.cljs$core$IFn$_invoke$arity$variadic = G__16669__delegate;
return G__16669;
})()
;
textarea = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return textarea__0.call(this);
default:
return textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
var G__16671__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__7620__auto__,children__7621__auto__);
};
var G__16671 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16671__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__16671.cljs$lang$maxFixedArity = 1;
G__16671.cljs$lang$applyTo = (function (arglist__16672){
var opts__7620__auto__ = cljs.core.first(arglist__16672);
var children__7621__auto__ = cljs.core.rest(arglist__16672);
return G__16671__delegate(opts__7620__auto__,children__7621__auto__);
});
G__16671.cljs$core$IFn$_invoke$arity$variadic = G__16671__delegate;
return G__16671;
})()
;
option = function(opts__7620__auto__,var_args){
var children__7621__auto__ = var_args;
switch(arguments.length){
case 0:
return option__0.call(this);
default:
return option__2.cljs$core$IFn$_invoke$arity$variadic(opts__7620__auto__, cljs.core.array_seq(arguments, 1));
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
