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
var G__11919 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__11919) {
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
var G__11922 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__11922) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11926){
var vec__11927 = p__11926;
var k = cljs.core.nth.call(null,vec__11927,(0),null);
var v = cljs.core.nth.call(null,vec__11927,(1),null);
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
var vec__11929 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__11929,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__11929,(1),null);
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
var G__11930__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__7620__auto__,children__7621__auto__);
};
var G__11930 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11930__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11930.cljs$lang$maxFixedArity = 1;
G__11930.cljs$lang$applyTo = (function (arglist__11931){
var opts__7620__auto__ = cljs.core.first(arglist__11931);
var children__7621__auto__ = cljs.core.rest(arglist__11931);
return G__11930__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11930.cljs$core$IFn$_invoke$arity$variadic = G__11930__delegate;
return G__11930;
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
var G__11932__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__7620__auto__,children__7621__auto__);
};
var G__11932 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11932__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11932.cljs$lang$maxFixedArity = 1;
G__11932.cljs$lang$applyTo = (function (arglist__11933){
var opts__7620__auto__ = cljs.core.first(arglist__11933);
var children__7621__auto__ = cljs.core.rest(arglist__11933);
return G__11932__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11932.cljs$core$IFn$_invoke$arity$variadic = G__11932__delegate;
return G__11932;
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
var G__11934__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__7620__auto__,children__7621__auto__);
};
var G__11934 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11934__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11934.cljs$lang$maxFixedArity = 1;
G__11934.cljs$lang$applyTo = (function (arglist__11935){
var opts__7620__auto__ = cljs.core.first(arglist__11935);
var children__7621__auto__ = cljs.core.rest(arglist__11935);
return G__11934__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11934.cljs$core$IFn$_invoke$arity$variadic = G__11934__delegate;
return G__11934;
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
var G__11936__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__7620__auto__,children__7621__auto__);
};
var G__11936 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11936__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11936.cljs$lang$maxFixedArity = 1;
G__11936.cljs$lang$applyTo = (function (arglist__11937){
var opts__7620__auto__ = cljs.core.first(arglist__11937);
var children__7621__auto__ = cljs.core.rest(arglist__11937);
return G__11936__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11936.cljs$core$IFn$_invoke$arity$variadic = G__11936__delegate;
return G__11936;
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
var G__11938__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__7620__auto__,children__7621__auto__);
};
var G__11938 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11938__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11938.cljs$lang$maxFixedArity = 1;
G__11938.cljs$lang$applyTo = (function (arglist__11939){
var opts__7620__auto__ = cljs.core.first(arglist__11939);
var children__7621__auto__ = cljs.core.rest(arglist__11939);
return G__11938__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11938.cljs$core$IFn$_invoke$arity$variadic = G__11938__delegate;
return G__11938;
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
var G__11940__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__7620__auto__,children__7621__auto__);
};
var G__11940 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11940__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11940.cljs$lang$maxFixedArity = 1;
G__11940.cljs$lang$applyTo = (function (arglist__11941){
var opts__7620__auto__ = cljs.core.first(arglist__11941);
var children__7621__auto__ = cljs.core.rest(arglist__11941);
return G__11940__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11940.cljs$core$IFn$_invoke$arity$variadic = G__11940__delegate;
return G__11940;
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
var G__11942__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__7620__auto__,children__7621__auto__);
};
var G__11942 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11942__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11942.cljs$lang$maxFixedArity = 1;
G__11942.cljs$lang$applyTo = (function (arglist__11943){
var opts__7620__auto__ = cljs.core.first(arglist__11943);
var children__7621__auto__ = cljs.core.rest(arglist__11943);
return G__11942__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11942.cljs$core$IFn$_invoke$arity$variadic = G__11942__delegate;
return G__11942;
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
var G__11944__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__7620__auto__,children__7621__auto__);
};
var G__11944 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11944__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11944.cljs$lang$maxFixedArity = 1;
G__11944.cljs$lang$applyTo = (function (arglist__11945){
var opts__7620__auto__ = cljs.core.first(arglist__11945);
var children__7621__auto__ = cljs.core.rest(arglist__11945);
return G__11944__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11944.cljs$core$IFn$_invoke$arity$variadic = G__11944__delegate;
return G__11944;
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
var G__11946__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__7620__auto__,children__7621__auto__);
};
var G__11946 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11946__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11946.cljs$lang$maxFixedArity = 1;
G__11946.cljs$lang$applyTo = (function (arglist__11947){
var opts__7620__auto__ = cljs.core.first(arglist__11947);
var children__7621__auto__ = cljs.core.rest(arglist__11947);
return G__11946__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11946.cljs$core$IFn$_invoke$arity$variadic = G__11946__delegate;
return G__11946;
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
var G__11948__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__7620__auto__,children__7621__auto__);
};
var G__11948 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11948__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11948.cljs$lang$maxFixedArity = 1;
G__11948.cljs$lang$applyTo = (function (arglist__11949){
var opts__7620__auto__ = cljs.core.first(arglist__11949);
var children__7621__auto__ = cljs.core.rest(arglist__11949);
return G__11948__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11948.cljs$core$IFn$_invoke$arity$variadic = G__11948__delegate;
return G__11948;
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
var G__11950__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__7620__auto__,children__7621__auto__);
};
var G__11950 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11950__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11950.cljs$lang$maxFixedArity = 1;
G__11950.cljs$lang$applyTo = (function (arglist__11951){
var opts__7620__auto__ = cljs.core.first(arglist__11951);
var children__7621__auto__ = cljs.core.rest(arglist__11951);
return G__11950__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11950.cljs$core$IFn$_invoke$arity$variadic = G__11950__delegate;
return G__11950;
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
var G__11952__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__7620__auto__,children__7621__auto__);
};
var G__11952 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11952__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11952.cljs$lang$maxFixedArity = 1;
G__11952.cljs$lang$applyTo = (function (arglist__11953){
var opts__7620__auto__ = cljs.core.first(arglist__11953);
var children__7621__auto__ = cljs.core.rest(arglist__11953);
return G__11952__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11952.cljs$core$IFn$_invoke$arity$variadic = G__11952__delegate;
return G__11952;
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
var G__11954__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__7620__auto__,children__7621__auto__);
};
var G__11954 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11954__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11954.cljs$lang$maxFixedArity = 1;
G__11954.cljs$lang$applyTo = (function (arglist__11955){
var opts__7620__auto__ = cljs.core.first(arglist__11955);
var children__7621__auto__ = cljs.core.rest(arglist__11955);
return G__11954__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11954.cljs$core$IFn$_invoke$arity$variadic = G__11954__delegate;
return G__11954;
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
var G__11956__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__7620__auto__,children__7621__auto__);
};
var G__11956 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11956__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11956.cljs$lang$maxFixedArity = 1;
G__11956.cljs$lang$applyTo = (function (arglist__11957){
var opts__7620__auto__ = cljs.core.first(arglist__11957);
var children__7621__auto__ = cljs.core.rest(arglist__11957);
return G__11956__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11956.cljs$core$IFn$_invoke$arity$variadic = G__11956__delegate;
return G__11956;
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
var G__11958__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__7620__auto__,children__7621__auto__);
};
var G__11958 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11958__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11958.cljs$lang$maxFixedArity = 1;
G__11958.cljs$lang$applyTo = (function (arglist__11959){
var opts__7620__auto__ = cljs.core.first(arglist__11959);
var children__7621__auto__ = cljs.core.rest(arglist__11959);
return G__11958__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11958.cljs$core$IFn$_invoke$arity$variadic = G__11958__delegate;
return G__11958;
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
var G__11960__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__7620__auto__,children__7621__auto__);
};
var G__11960 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11960__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11960.cljs$lang$maxFixedArity = 1;
G__11960.cljs$lang$applyTo = (function (arglist__11961){
var opts__7620__auto__ = cljs.core.first(arglist__11961);
var children__7621__auto__ = cljs.core.rest(arglist__11961);
return G__11960__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11960.cljs$core$IFn$_invoke$arity$variadic = G__11960__delegate;
return G__11960;
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
var G__11962__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__7620__auto__,children__7621__auto__);
};
var G__11962 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11962__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11962.cljs$lang$maxFixedArity = 1;
G__11962.cljs$lang$applyTo = (function (arglist__11963){
var opts__7620__auto__ = cljs.core.first(arglist__11963);
var children__7621__auto__ = cljs.core.rest(arglist__11963);
return G__11962__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11962.cljs$core$IFn$_invoke$arity$variadic = G__11962__delegate;
return G__11962;
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
var G__11964__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__7620__auto__,children__7621__auto__);
};
var G__11964 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11964__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11964.cljs$lang$maxFixedArity = 1;
G__11964.cljs$lang$applyTo = (function (arglist__11965){
var opts__7620__auto__ = cljs.core.first(arglist__11965);
var children__7621__auto__ = cljs.core.rest(arglist__11965);
return G__11964__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11964.cljs$core$IFn$_invoke$arity$variadic = G__11964__delegate;
return G__11964;
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
var G__11966__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__7620__auto__,children__7621__auto__);
};
var G__11966 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11966__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11966.cljs$lang$maxFixedArity = 1;
G__11966.cljs$lang$applyTo = (function (arglist__11967){
var opts__7620__auto__ = cljs.core.first(arglist__11967);
var children__7621__auto__ = cljs.core.rest(arglist__11967);
return G__11966__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11966.cljs$core$IFn$_invoke$arity$variadic = G__11966__delegate;
return G__11966;
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
var G__11968__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__7620__auto__,children__7621__auto__);
};
var G__11968 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11968__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11968.cljs$lang$maxFixedArity = 1;
G__11968.cljs$lang$applyTo = (function (arglist__11969){
var opts__7620__auto__ = cljs.core.first(arglist__11969);
var children__7621__auto__ = cljs.core.rest(arglist__11969);
return G__11968__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11968.cljs$core$IFn$_invoke$arity$variadic = G__11968__delegate;
return G__11968;
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
var G__11970__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__7620__auto__,children__7621__auto__);
};
var G__11970 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11970__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11970.cljs$lang$maxFixedArity = 1;
G__11970.cljs$lang$applyTo = (function (arglist__11971){
var opts__7620__auto__ = cljs.core.first(arglist__11971);
var children__7621__auto__ = cljs.core.rest(arglist__11971);
return G__11970__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11970.cljs$core$IFn$_invoke$arity$variadic = G__11970__delegate;
return G__11970;
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
var G__11972__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__7620__auto__,children__7621__auto__);
};
var G__11972 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11972__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11972.cljs$lang$maxFixedArity = 1;
G__11972.cljs$lang$applyTo = (function (arglist__11973){
var opts__7620__auto__ = cljs.core.first(arglist__11973);
var children__7621__auto__ = cljs.core.rest(arglist__11973);
return G__11972__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11972.cljs$core$IFn$_invoke$arity$variadic = G__11972__delegate;
return G__11972;
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
var G__11974__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__7620__auto__,children__7621__auto__);
};
var G__11974 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11974__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11974.cljs$lang$maxFixedArity = 1;
G__11974.cljs$lang$applyTo = (function (arglist__11975){
var opts__7620__auto__ = cljs.core.first(arglist__11975);
var children__7621__auto__ = cljs.core.rest(arglist__11975);
return G__11974__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11974.cljs$core$IFn$_invoke$arity$variadic = G__11974__delegate;
return G__11974;
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
var G__11976__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__7620__auto__,children__7621__auto__);
};
var G__11976 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11976__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11976.cljs$lang$maxFixedArity = 1;
G__11976.cljs$lang$applyTo = (function (arglist__11977){
var opts__7620__auto__ = cljs.core.first(arglist__11977);
var children__7621__auto__ = cljs.core.rest(arglist__11977);
return G__11976__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11976.cljs$core$IFn$_invoke$arity$variadic = G__11976__delegate;
return G__11976;
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
var G__11978__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__7620__auto__,children__7621__auto__);
};
var G__11978 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11978__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11978.cljs$lang$maxFixedArity = 1;
G__11978.cljs$lang$applyTo = (function (arglist__11979){
var opts__7620__auto__ = cljs.core.first(arglist__11979);
var children__7621__auto__ = cljs.core.rest(arglist__11979);
return G__11978__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11978.cljs$core$IFn$_invoke$arity$variadic = G__11978__delegate;
return G__11978;
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
var G__11980__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__7620__auto__,children__7621__auto__);
};
var G__11980 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11980__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11980.cljs$lang$maxFixedArity = 1;
G__11980.cljs$lang$applyTo = (function (arglist__11981){
var opts__7620__auto__ = cljs.core.first(arglist__11981);
var children__7621__auto__ = cljs.core.rest(arglist__11981);
return G__11980__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11980.cljs$core$IFn$_invoke$arity$variadic = G__11980__delegate;
return G__11980;
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
var G__11982__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__7620__auto__,children__7621__auto__);
};
var G__11982 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11982__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11982.cljs$lang$maxFixedArity = 1;
G__11982.cljs$lang$applyTo = (function (arglist__11983){
var opts__7620__auto__ = cljs.core.first(arglist__11983);
var children__7621__auto__ = cljs.core.rest(arglist__11983);
return G__11982__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11982.cljs$core$IFn$_invoke$arity$variadic = G__11982__delegate;
return G__11982;
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
var G__11984__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__7620__auto__,children__7621__auto__);
};
var G__11984 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11984__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11984.cljs$lang$maxFixedArity = 1;
G__11984.cljs$lang$applyTo = (function (arglist__11985){
var opts__7620__auto__ = cljs.core.first(arglist__11985);
var children__7621__auto__ = cljs.core.rest(arglist__11985);
return G__11984__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11984.cljs$core$IFn$_invoke$arity$variadic = G__11984__delegate;
return G__11984;
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
var G__11986__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__7620__auto__,children__7621__auto__);
};
var G__11986 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11986__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11986.cljs$lang$maxFixedArity = 1;
G__11986.cljs$lang$applyTo = (function (arglist__11987){
var opts__7620__auto__ = cljs.core.first(arglist__11987);
var children__7621__auto__ = cljs.core.rest(arglist__11987);
return G__11986__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11986.cljs$core$IFn$_invoke$arity$variadic = G__11986__delegate;
return G__11986;
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
var G__11988__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__7620__auto__,children__7621__auto__);
};
var G__11988 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11988__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11988.cljs$lang$maxFixedArity = 1;
G__11988.cljs$lang$applyTo = (function (arglist__11989){
var opts__7620__auto__ = cljs.core.first(arglist__11989);
var children__7621__auto__ = cljs.core.rest(arglist__11989);
return G__11988__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11988.cljs$core$IFn$_invoke$arity$variadic = G__11988__delegate;
return G__11988;
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
var G__11990__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__7620__auto__,children__7621__auto__);
};
var G__11990 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11990__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11990.cljs$lang$maxFixedArity = 1;
G__11990.cljs$lang$applyTo = (function (arglist__11991){
var opts__7620__auto__ = cljs.core.first(arglist__11991);
var children__7621__auto__ = cljs.core.rest(arglist__11991);
return G__11990__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11990.cljs$core$IFn$_invoke$arity$variadic = G__11990__delegate;
return G__11990;
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
var G__11992__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__7620__auto__,children__7621__auto__);
};
var G__11992 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11992__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11992.cljs$lang$maxFixedArity = 1;
G__11992.cljs$lang$applyTo = (function (arglist__11993){
var opts__7620__auto__ = cljs.core.first(arglist__11993);
var children__7621__auto__ = cljs.core.rest(arglist__11993);
return G__11992__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11992.cljs$core$IFn$_invoke$arity$variadic = G__11992__delegate;
return G__11992;
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
var G__11994__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__7620__auto__,children__7621__auto__);
};
var G__11994 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11994__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11994.cljs$lang$maxFixedArity = 1;
G__11994.cljs$lang$applyTo = (function (arglist__11995){
var opts__7620__auto__ = cljs.core.first(arglist__11995);
var children__7621__auto__ = cljs.core.rest(arglist__11995);
return G__11994__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11994.cljs$core$IFn$_invoke$arity$variadic = G__11994__delegate;
return G__11994;
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
var G__11996__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__7620__auto__,children__7621__auto__);
};
var G__11996 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11996__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11996.cljs$lang$maxFixedArity = 1;
G__11996.cljs$lang$applyTo = (function (arglist__11997){
var opts__7620__auto__ = cljs.core.first(arglist__11997);
var children__7621__auto__ = cljs.core.rest(arglist__11997);
return G__11996__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11996.cljs$core$IFn$_invoke$arity$variadic = G__11996__delegate;
return G__11996;
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
var G__11998__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__7620__auto__,children__7621__auto__);
};
var G__11998 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11998__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__11998.cljs$lang$maxFixedArity = 1;
G__11998.cljs$lang$applyTo = (function (arglist__11999){
var opts__7620__auto__ = cljs.core.first(arglist__11999);
var children__7621__auto__ = cljs.core.rest(arglist__11999);
return G__11998__delegate(opts__7620__auto__,children__7621__auto__);
});
G__11998.cljs$core$IFn$_invoke$arity$variadic = G__11998__delegate;
return G__11998;
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
var G__12000__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__7620__auto__,children__7621__auto__);
};
var G__12000 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12000__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12000.cljs$lang$maxFixedArity = 1;
G__12000.cljs$lang$applyTo = (function (arglist__12001){
var opts__7620__auto__ = cljs.core.first(arglist__12001);
var children__7621__auto__ = cljs.core.rest(arglist__12001);
return G__12000__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12000.cljs$core$IFn$_invoke$arity$variadic = G__12000__delegate;
return G__12000;
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
var G__12002__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__7620__auto__,children__7621__auto__);
};
var G__12002 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12002__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12002.cljs$lang$maxFixedArity = 1;
G__12002.cljs$lang$applyTo = (function (arglist__12003){
var opts__7620__auto__ = cljs.core.first(arglist__12003);
var children__7621__auto__ = cljs.core.rest(arglist__12003);
return G__12002__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12002.cljs$core$IFn$_invoke$arity$variadic = G__12002__delegate;
return G__12002;
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
var G__12004__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__7620__auto__,children__7621__auto__);
};
var G__12004 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12004__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12004.cljs$lang$maxFixedArity = 1;
G__12004.cljs$lang$applyTo = (function (arglist__12005){
var opts__7620__auto__ = cljs.core.first(arglist__12005);
var children__7621__auto__ = cljs.core.rest(arglist__12005);
return G__12004__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12004.cljs$core$IFn$_invoke$arity$variadic = G__12004__delegate;
return G__12004;
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
var G__12006__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__7620__auto__,children__7621__auto__);
};
var G__12006 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12006__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12006.cljs$lang$maxFixedArity = 1;
G__12006.cljs$lang$applyTo = (function (arglist__12007){
var opts__7620__auto__ = cljs.core.first(arglist__12007);
var children__7621__auto__ = cljs.core.rest(arglist__12007);
return G__12006__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12006.cljs$core$IFn$_invoke$arity$variadic = G__12006__delegate;
return G__12006;
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
var G__12008__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__7620__auto__,children__7621__auto__);
};
var G__12008 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12008__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12008.cljs$lang$maxFixedArity = 1;
G__12008.cljs$lang$applyTo = (function (arglist__12009){
var opts__7620__auto__ = cljs.core.first(arglist__12009);
var children__7621__auto__ = cljs.core.rest(arglist__12009);
return G__12008__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12008.cljs$core$IFn$_invoke$arity$variadic = G__12008__delegate;
return G__12008;
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
var G__12010__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__7620__auto__,children__7621__auto__);
};
var G__12010 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12010__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12010.cljs$lang$maxFixedArity = 1;
G__12010.cljs$lang$applyTo = (function (arglist__12011){
var opts__7620__auto__ = cljs.core.first(arglist__12011);
var children__7621__auto__ = cljs.core.rest(arglist__12011);
return G__12010__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12010.cljs$core$IFn$_invoke$arity$variadic = G__12010__delegate;
return G__12010;
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
var G__12012__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__7620__auto__,children__7621__auto__);
};
var G__12012 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12012__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12012.cljs$lang$maxFixedArity = 1;
G__12012.cljs$lang$applyTo = (function (arglist__12013){
var opts__7620__auto__ = cljs.core.first(arglist__12013);
var children__7621__auto__ = cljs.core.rest(arglist__12013);
return G__12012__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12012.cljs$core$IFn$_invoke$arity$variadic = G__12012__delegate;
return G__12012;
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
var G__12014__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__7620__auto__,children__7621__auto__);
};
var G__12014 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12014__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12014.cljs$lang$maxFixedArity = 1;
G__12014.cljs$lang$applyTo = (function (arglist__12015){
var opts__7620__auto__ = cljs.core.first(arglist__12015);
var children__7621__auto__ = cljs.core.rest(arglist__12015);
return G__12014__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12014.cljs$core$IFn$_invoke$arity$variadic = G__12014__delegate;
return G__12014;
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
var G__12016__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__7620__auto__,children__7621__auto__);
};
var G__12016 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12016__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12016.cljs$lang$maxFixedArity = 1;
G__12016.cljs$lang$applyTo = (function (arglist__12017){
var opts__7620__auto__ = cljs.core.first(arglist__12017);
var children__7621__auto__ = cljs.core.rest(arglist__12017);
return G__12016__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12016.cljs$core$IFn$_invoke$arity$variadic = G__12016__delegate;
return G__12016;
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
var G__12018__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__7620__auto__,children__7621__auto__);
};
var G__12018 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12018__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12018.cljs$lang$maxFixedArity = 1;
G__12018.cljs$lang$applyTo = (function (arglist__12019){
var opts__7620__auto__ = cljs.core.first(arglist__12019);
var children__7621__auto__ = cljs.core.rest(arglist__12019);
return G__12018__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12018.cljs$core$IFn$_invoke$arity$variadic = G__12018__delegate;
return G__12018;
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
var G__12020__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__7620__auto__,children__7621__auto__);
};
var G__12020 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12020__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12020.cljs$lang$maxFixedArity = 1;
G__12020.cljs$lang$applyTo = (function (arglist__12021){
var opts__7620__auto__ = cljs.core.first(arglist__12021);
var children__7621__auto__ = cljs.core.rest(arglist__12021);
return G__12020__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12020.cljs$core$IFn$_invoke$arity$variadic = G__12020__delegate;
return G__12020;
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
var G__12022__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__7620__auto__,children__7621__auto__);
};
var G__12022 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12022__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12022.cljs$lang$maxFixedArity = 1;
G__12022.cljs$lang$applyTo = (function (arglist__12023){
var opts__7620__auto__ = cljs.core.first(arglist__12023);
var children__7621__auto__ = cljs.core.rest(arglist__12023);
return G__12022__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12022.cljs$core$IFn$_invoke$arity$variadic = G__12022__delegate;
return G__12022;
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
var G__12024__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__7620__auto__,children__7621__auto__);
};
var G__12024 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12024__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12024.cljs$lang$maxFixedArity = 1;
G__12024.cljs$lang$applyTo = (function (arglist__12025){
var opts__7620__auto__ = cljs.core.first(arglist__12025);
var children__7621__auto__ = cljs.core.rest(arglist__12025);
return G__12024__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12024.cljs$core$IFn$_invoke$arity$variadic = G__12024__delegate;
return G__12024;
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
var G__12026__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__7620__auto__,children__7621__auto__);
};
var G__12026 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12026__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12026.cljs$lang$maxFixedArity = 1;
G__12026.cljs$lang$applyTo = (function (arglist__12027){
var opts__7620__auto__ = cljs.core.first(arglist__12027);
var children__7621__auto__ = cljs.core.rest(arglist__12027);
return G__12026__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12026.cljs$core$IFn$_invoke$arity$variadic = G__12026__delegate;
return G__12026;
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
var G__12028__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__7620__auto__,children__7621__auto__);
};
var G__12028 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12028__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12028.cljs$lang$maxFixedArity = 1;
G__12028.cljs$lang$applyTo = (function (arglist__12029){
var opts__7620__auto__ = cljs.core.first(arglist__12029);
var children__7621__auto__ = cljs.core.rest(arglist__12029);
return G__12028__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12028.cljs$core$IFn$_invoke$arity$variadic = G__12028__delegate;
return G__12028;
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
var G__12030__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__7620__auto__,children__7621__auto__);
};
var G__12030 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12030__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12030.cljs$lang$maxFixedArity = 1;
G__12030.cljs$lang$applyTo = (function (arglist__12031){
var opts__7620__auto__ = cljs.core.first(arglist__12031);
var children__7621__auto__ = cljs.core.rest(arglist__12031);
return G__12030__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12030.cljs$core$IFn$_invoke$arity$variadic = G__12030__delegate;
return G__12030;
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
var G__12032__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__7620__auto__,children__7621__auto__);
};
var G__12032 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12032__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12032.cljs$lang$maxFixedArity = 1;
G__12032.cljs$lang$applyTo = (function (arglist__12033){
var opts__7620__auto__ = cljs.core.first(arglist__12033);
var children__7621__auto__ = cljs.core.rest(arglist__12033);
return G__12032__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12032.cljs$core$IFn$_invoke$arity$variadic = G__12032__delegate;
return G__12032;
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
var G__12034__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__7620__auto__,children__7621__auto__);
};
var G__12034 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12034__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12034.cljs$lang$maxFixedArity = 1;
G__12034.cljs$lang$applyTo = (function (arglist__12035){
var opts__7620__auto__ = cljs.core.first(arglist__12035);
var children__7621__auto__ = cljs.core.rest(arglist__12035);
return G__12034__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12034.cljs$core$IFn$_invoke$arity$variadic = G__12034__delegate;
return G__12034;
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
var G__12036__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__7620__auto__,children__7621__auto__);
};
var G__12036 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12036__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12036.cljs$lang$maxFixedArity = 1;
G__12036.cljs$lang$applyTo = (function (arglist__12037){
var opts__7620__auto__ = cljs.core.first(arglist__12037);
var children__7621__auto__ = cljs.core.rest(arglist__12037);
return G__12036__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12036.cljs$core$IFn$_invoke$arity$variadic = G__12036__delegate;
return G__12036;
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
var G__12038__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__7620__auto__,children__7621__auto__);
};
var G__12038 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12038__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12038.cljs$lang$maxFixedArity = 1;
G__12038.cljs$lang$applyTo = (function (arglist__12039){
var opts__7620__auto__ = cljs.core.first(arglist__12039);
var children__7621__auto__ = cljs.core.rest(arglist__12039);
return G__12038__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12038.cljs$core$IFn$_invoke$arity$variadic = G__12038__delegate;
return G__12038;
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
var G__12040__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__7620__auto__,children__7621__auto__);
};
var G__12040 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12040__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12040.cljs$lang$maxFixedArity = 1;
G__12040.cljs$lang$applyTo = (function (arglist__12041){
var opts__7620__auto__ = cljs.core.first(arglist__12041);
var children__7621__auto__ = cljs.core.rest(arglist__12041);
return G__12040__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12040.cljs$core$IFn$_invoke$arity$variadic = G__12040__delegate;
return G__12040;
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
var G__12042__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__7620__auto__,children__7621__auto__);
};
var G__12042 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12042__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12042.cljs$lang$maxFixedArity = 1;
G__12042.cljs$lang$applyTo = (function (arglist__12043){
var opts__7620__auto__ = cljs.core.first(arglist__12043);
var children__7621__auto__ = cljs.core.rest(arglist__12043);
return G__12042__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12042.cljs$core$IFn$_invoke$arity$variadic = G__12042__delegate;
return G__12042;
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
var G__12044__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__7620__auto__,children__7621__auto__);
};
var G__12044 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12044__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12044.cljs$lang$maxFixedArity = 1;
G__12044.cljs$lang$applyTo = (function (arglist__12045){
var opts__7620__auto__ = cljs.core.first(arglist__12045);
var children__7621__auto__ = cljs.core.rest(arglist__12045);
return G__12044__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12044.cljs$core$IFn$_invoke$arity$variadic = G__12044__delegate;
return G__12044;
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
var G__12046__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__7620__auto__,children__7621__auto__);
};
var G__12046 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12046__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12046.cljs$lang$maxFixedArity = 1;
G__12046.cljs$lang$applyTo = (function (arglist__12047){
var opts__7620__auto__ = cljs.core.first(arglist__12047);
var children__7621__auto__ = cljs.core.rest(arglist__12047);
return G__12046__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12046.cljs$core$IFn$_invoke$arity$variadic = G__12046__delegate;
return G__12046;
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
var G__12048__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__7620__auto__,children__7621__auto__);
};
var G__12048 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12048__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12048.cljs$lang$maxFixedArity = 1;
G__12048.cljs$lang$applyTo = (function (arglist__12049){
var opts__7620__auto__ = cljs.core.first(arglist__12049);
var children__7621__auto__ = cljs.core.rest(arglist__12049);
return G__12048__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12048.cljs$core$IFn$_invoke$arity$variadic = G__12048__delegate;
return G__12048;
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
var G__12050__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__7620__auto__,children__7621__auto__);
};
var G__12050 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12050__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12050.cljs$lang$maxFixedArity = 1;
G__12050.cljs$lang$applyTo = (function (arglist__12051){
var opts__7620__auto__ = cljs.core.first(arglist__12051);
var children__7621__auto__ = cljs.core.rest(arglist__12051);
return G__12050__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12050.cljs$core$IFn$_invoke$arity$variadic = G__12050__delegate;
return G__12050;
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
var G__12052__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__7620__auto__,children__7621__auto__);
};
var G__12052 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12052__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12052.cljs$lang$maxFixedArity = 1;
G__12052.cljs$lang$applyTo = (function (arglist__12053){
var opts__7620__auto__ = cljs.core.first(arglist__12053);
var children__7621__auto__ = cljs.core.rest(arglist__12053);
return G__12052__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12052.cljs$core$IFn$_invoke$arity$variadic = G__12052__delegate;
return G__12052;
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
var G__12054__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__7620__auto__,children__7621__auto__);
};
var G__12054 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12054__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12054.cljs$lang$maxFixedArity = 1;
G__12054.cljs$lang$applyTo = (function (arglist__12055){
var opts__7620__auto__ = cljs.core.first(arglist__12055);
var children__7621__auto__ = cljs.core.rest(arglist__12055);
return G__12054__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12054.cljs$core$IFn$_invoke$arity$variadic = G__12054__delegate;
return G__12054;
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
var G__12056__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__7620__auto__,children__7621__auto__);
};
var G__12056 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12056__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12056.cljs$lang$maxFixedArity = 1;
G__12056.cljs$lang$applyTo = (function (arglist__12057){
var opts__7620__auto__ = cljs.core.first(arglist__12057);
var children__7621__auto__ = cljs.core.rest(arglist__12057);
return G__12056__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12056.cljs$core$IFn$_invoke$arity$variadic = G__12056__delegate;
return G__12056;
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
var G__12058__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__7620__auto__,children__7621__auto__);
};
var G__12058 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12058__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12058.cljs$lang$maxFixedArity = 1;
G__12058.cljs$lang$applyTo = (function (arglist__12059){
var opts__7620__auto__ = cljs.core.first(arglist__12059);
var children__7621__auto__ = cljs.core.rest(arglist__12059);
return G__12058__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12058.cljs$core$IFn$_invoke$arity$variadic = G__12058__delegate;
return G__12058;
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
var G__12060__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__7620__auto__,children__7621__auto__);
};
var G__12060 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12060__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12060.cljs$lang$maxFixedArity = 1;
G__12060.cljs$lang$applyTo = (function (arglist__12061){
var opts__7620__auto__ = cljs.core.first(arglist__12061);
var children__7621__auto__ = cljs.core.rest(arglist__12061);
return G__12060__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12060.cljs$core$IFn$_invoke$arity$variadic = G__12060__delegate;
return G__12060;
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
var G__12062__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__7620__auto__,children__7621__auto__);
};
var G__12062 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12062__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12062.cljs$lang$maxFixedArity = 1;
G__12062.cljs$lang$applyTo = (function (arglist__12063){
var opts__7620__auto__ = cljs.core.first(arglist__12063);
var children__7621__auto__ = cljs.core.rest(arglist__12063);
return G__12062__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12062.cljs$core$IFn$_invoke$arity$variadic = G__12062__delegate;
return G__12062;
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
var G__12064__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__7620__auto__,children__7621__auto__);
};
var G__12064 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12064__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12064.cljs$lang$maxFixedArity = 1;
G__12064.cljs$lang$applyTo = (function (arglist__12065){
var opts__7620__auto__ = cljs.core.first(arglist__12065);
var children__7621__auto__ = cljs.core.rest(arglist__12065);
return G__12064__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12064.cljs$core$IFn$_invoke$arity$variadic = G__12064__delegate;
return G__12064;
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
var G__12066__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__7620__auto__,children__7621__auto__);
};
var G__12066 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12066__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12066.cljs$lang$maxFixedArity = 1;
G__12066.cljs$lang$applyTo = (function (arglist__12067){
var opts__7620__auto__ = cljs.core.first(arglist__12067);
var children__7621__auto__ = cljs.core.rest(arglist__12067);
return G__12066__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12066.cljs$core$IFn$_invoke$arity$variadic = G__12066__delegate;
return G__12066;
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
var G__12068__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__7620__auto__,children__7621__auto__);
};
var G__12068 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12068__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12068.cljs$lang$maxFixedArity = 1;
G__12068.cljs$lang$applyTo = (function (arglist__12069){
var opts__7620__auto__ = cljs.core.first(arglist__12069);
var children__7621__auto__ = cljs.core.rest(arglist__12069);
return G__12068__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12068.cljs$core$IFn$_invoke$arity$variadic = G__12068__delegate;
return G__12068;
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
var G__12070__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__7620__auto__,children__7621__auto__);
};
var G__12070 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12070__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12070.cljs$lang$maxFixedArity = 1;
G__12070.cljs$lang$applyTo = (function (arglist__12071){
var opts__7620__auto__ = cljs.core.first(arglist__12071);
var children__7621__auto__ = cljs.core.rest(arglist__12071);
return G__12070__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12070.cljs$core$IFn$_invoke$arity$variadic = G__12070__delegate;
return G__12070;
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
var G__12072__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__7620__auto__,children__7621__auto__);
};
var G__12072 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12072__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12072.cljs$lang$maxFixedArity = 1;
G__12072.cljs$lang$applyTo = (function (arglist__12073){
var opts__7620__auto__ = cljs.core.first(arglist__12073);
var children__7621__auto__ = cljs.core.rest(arglist__12073);
return G__12072__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12072.cljs$core$IFn$_invoke$arity$variadic = G__12072__delegate;
return G__12072;
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
var G__12074__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__7620__auto__,children__7621__auto__);
};
var G__12074 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12074__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12074.cljs$lang$maxFixedArity = 1;
G__12074.cljs$lang$applyTo = (function (arglist__12075){
var opts__7620__auto__ = cljs.core.first(arglist__12075);
var children__7621__auto__ = cljs.core.rest(arglist__12075);
return G__12074__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12074.cljs$core$IFn$_invoke$arity$variadic = G__12074__delegate;
return G__12074;
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
var G__12076__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__7620__auto__,children__7621__auto__);
};
var G__12076 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12076__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12076.cljs$lang$maxFixedArity = 1;
G__12076.cljs$lang$applyTo = (function (arglist__12077){
var opts__7620__auto__ = cljs.core.first(arglist__12077);
var children__7621__auto__ = cljs.core.rest(arglist__12077);
return G__12076__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12076.cljs$core$IFn$_invoke$arity$variadic = G__12076__delegate;
return G__12076;
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
var G__12078__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__7620__auto__,children__7621__auto__);
};
var G__12078 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12078__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12078.cljs$lang$maxFixedArity = 1;
G__12078.cljs$lang$applyTo = (function (arglist__12079){
var opts__7620__auto__ = cljs.core.first(arglist__12079);
var children__7621__auto__ = cljs.core.rest(arglist__12079);
return G__12078__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12078.cljs$core$IFn$_invoke$arity$variadic = G__12078__delegate;
return G__12078;
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
var G__12080__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__7620__auto__,children__7621__auto__);
};
var G__12080 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12080__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12080.cljs$lang$maxFixedArity = 1;
G__12080.cljs$lang$applyTo = (function (arglist__12081){
var opts__7620__auto__ = cljs.core.first(arglist__12081);
var children__7621__auto__ = cljs.core.rest(arglist__12081);
return G__12080__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12080.cljs$core$IFn$_invoke$arity$variadic = G__12080__delegate;
return G__12080;
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
var G__12082__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__7620__auto__,children__7621__auto__);
};
var G__12082 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12082__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12082.cljs$lang$maxFixedArity = 1;
G__12082.cljs$lang$applyTo = (function (arglist__12083){
var opts__7620__auto__ = cljs.core.first(arglist__12083);
var children__7621__auto__ = cljs.core.rest(arglist__12083);
return G__12082__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12082.cljs$core$IFn$_invoke$arity$variadic = G__12082__delegate;
return G__12082;
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
var G__12084__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__7620__auto__,children__7621__auto__);
};
var G__12084 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12084__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12084.cljs$lang$maxFixedArity = 1;
G__12084.cljs$lang$applyTo = (function (arglist__12085){
var opts__7620__auto__ = cljs.core.first(arglist__12085);
var children__7621__auto__ = cljs.core.rest(arglist__12085);
return G__12084__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12084.cljs$core$IFn$_invoke$arity$variadic = G__12084__delegate;
return G__12084;
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
var G__12086__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__7620__auto__,children__7621__auto__);
};
var G__12086 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12086__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12086.cljs$lang$maxFixedArity = 1;
G__12086.cljs$lang$applyTo = (function (arglist__12087){
var opts__7620__auto__ = cljs.core.first(arglist__12087);
var children__7621__auto__ = cljs.core.rest(arglist__12087);
return G__12086__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12086.cljs$core$IFn$_invoke$arity$variadic = G__12086__delegate;
return G__12086;
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
var G__12088__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__7620__auto__,children__7621__auto__);
};
var G__12088 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12088__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12088.cljs$lang$maxFixedArity = 1;
G__12088.cljs$lang$applyTo = (function (arglist__12089){
var opts__7620__auto__ = cljs.core.first(arglist__12089);
var children__7621__auto__ = cljs.core.rest(arglist__12089);
return G__12088__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12088.cljs$core$IFn$_invoke$arity$variadic = G__12088__delegate;
return G__12088;
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
var G__12090__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__7620__auto__,children__7621__auto__);
};
var G__12090 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12090__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12090.cljs$lang$maxFixedArity = 1;
G__12090.cljs$lang$applyTo = (function (arglist__12091){
var opts__7620__auto__ = cljs.core.first(arglist__12091);
var children__7621__auto__ = cljs.core.rest(arglist__12091);
return G__12090__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12090.cljs$core$IFn$_invoke$arity$variadic = G__12090__delegate;
return G__12090;
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
var G__12092__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__7620__auto__,children__7621__auto__);
};
var G__12092 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12092__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12092.cljs$lang$maxFixedArity = 1;
G__12092.cljs$lang$applyTo = (function (arglist__12093){
var opts__7620__auto__ = cljs.core.first(arglist__12093);
var children__7621__auto__ = cljs.core.rest(arglist__12093);
return G__12092__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12092.cljs$core$IFn$_invoke$arity$variadic = G__12092__delegate;
return G__12092;
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
var G__12094__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__7620__auto__,children__7621__auto__);
};
var G__12094 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12094__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12094.cljs$lang$maxFixedArity = 1;
G__12094.cljs$lang$applyTo = (function (arglist__12095){
var opts__7620__auto__ = cljs.core.first(arglist__12095);
var children__7621__auto__ = cljs.core.rest(arglist__12095);
return G__12094__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12094.cljs$core$IFn$_invoke$arity$variadic = G__12094__delegate;
return G__12094;
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
var G__12096__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__7620__auto__,children__7621__auto__);
};
var G__12096 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12096__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12096.cljs$lang$maxFixedArity = 1;
G__12096.cljs$lang$applyTo = (function (arglist__12097){
var opts__7620__auto__ = cljs.core.first(arglist__12097);
var children__7621__auto__ = cljs.core.rest(arglist__12097);
return G__12096__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12096.cljs$core$IFn$_invoke$arity$variadic = G__12096__delegate;
return G__12096;
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
var G__12098__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__7620__auto__,children__7621__auto__);
};
var G__12098 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12098__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12098.cljs$lang$maxFixedArity = 1;
G__12098.cljs$lang$applyTo = (function (arglist__12099){
var opts__7620__auto__ = cljs.core.first(arglist__12099);
var children__7621__auto__ = cljs.core.rest(arglist__12099);
return G__12098__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12098.cljs$core$IFn$_invoke$arity$variadic = G__12098__delegate;
return G__12098;
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
var G__12100__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__7620__auto__,children__7621__auto__);
};
var G__12100 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12100__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12100.cljs$lang$maxFixedArity = 1;
G__12100.cljs$lang$applyTo = (function (arglist__12101){
var opts__7620__auto__ = cljs.core.first(arglist__12101);
var children__7621__auto__ = cljs.core.rest(arglist__12101);
return G__12100__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12100.cljs$core$IFn$_invoke$arity$variadic = G__12100__delegate;
return G__12100;
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
var G__12102__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__7620__auto__,children__7621__auto__);
};
var G__12102 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12102__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12102.cljs$lang$maxFixedArity = 1;
G__12102.cljs$lang$applyTo = (function (arglist__12103){
var opts__7620__auto__ = cljs.core.first(arglist__12103);
var children__7621__auto__ = cljs.core.rest(arglist__12103);
return G__12102__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12102.cljs$core$IFn$_invoke$arity$variadic = G__12102__delegate;
return G__12102;
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
var G__12104__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__7620__auto__,children__7621__auto__);
};
var G__12104 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12104__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12104.cljs$lang$maxFixedArity = 1;
G__12104.cljs$lang$applyTo = (function (arglist__12105){
var opts__7620__auto__ = cljs.core.first(arglist__12105);
var children__7621__auto__ = cljs.core.rest(arglist__12105);
return G__12104__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12104.cljs$core$IFn$_invoke$arity$variadic = G__12104__delegate;
return G__12104;
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
var G__12106__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__7620__auto__,children__7621__auto__);
};
var G__12106 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12106__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12106.cljs$lang$maxFixedArity = 1;
G__12106.cljs$lang$applyTo = (function (arglist__12107){
var opts__7620__auto__ = cljs.core.first(arglist__12107);
var children__7621__auto__ = cljs.core.rest(arglist__12107);
return G__12106__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12106.cljs$core$IFn$_invoke$arity$variadic = G__12106__delegate;
return G__12106;
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
var G__12108__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__7620__auto__,children__7621__auto__);
};
var G__12108 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12108__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12108.cljs$lang$maxFixedArity = 1;
G__12108.cljs$lang$applyTo = (function (arglist__12109){
var opts__7620__auto__ = cljs.core.first(arglist__12109);
var children__7621__auto__ = cljs.core.rest(arglist__12109);
return G__12108__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12108.cljs$core$IFn$_invoke$arity$variadic = G__12108__delegate;
return G__12108;
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
var G__12110__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__7620__auto__,children__7621__auto__);
};
var G__12110 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12110__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12110.cljs$lang$maxFixedArity = 1;
G__12110.cljs$lang$applyTo = (function (arglist__12111){
var opts__7620__auto__ = cljs.core.first(arglist__12111);
var children__7621__auto__ = cljs.core.rest(arglist__12111);
return G__12110__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12110.cljs$core$IFn$_invoke$arity$variadic = G__12110__delegate;
return G__12110;
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
var G__12112__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__7620__auto__,children__7621__auto__);
};
var G__12112 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12112__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12112.cljs$lang$maxFixedArity = 1;
G__12112.cljs$lang$applyTo = (function (arglist__12113){
var opts__7620__auto__ = cljs.core.first(arglist__12113);
var children__7621__auto__ = cljs.core.rest(arglist__12113);
return G__12112__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12112.cljs$core$IFn$_invoke$arity$variadic = G__12112__delegate;
return G__12112;
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
var G__12114__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__7620__auto__,children__7621__auto__);
};
var G__12114 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12114__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12114.cljs$lang$maxFixedArity = 1;
G__12114.cljs$lang$applyTo = (function (arglist__12115){
var opts__7620__auto__ = cljs.core.first(arglist__12115);
var children__7621__auto__ = cljs.core.rest(arglist__12115);
return G__12114__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12114.cljs$core$IFn$_invoke$arity$variadic = G__12114__delegate;
return G__12114;
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
var G__12116__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__7620__auto__,children__7621__auto__);
};
var G__12116 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12116__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12116.cljs$lang$maxFixedArity = 1;
G__12116.cljs$lang$applyTo = (function (arglist__12117){
var opts__7620__auto__ = cljs.core.first(arglist__12117);
var children__7621__auto__ = cljs.core.rest(arglist__12117);
return G__12116__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12116.cljs$core$IFn$_invoke$arity$variadic = G__12116__delegate;
return G__12116;
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
var G__12118__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__7620__auto__,children__7621__auto__);
};
var G__12118 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12118__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12118.cljs$lang$maxFixedArity = 1;
G__12118.cljs$lang$applyTo = (function (arglist__12119){
var opts__7620__auto__ = cljs.core.first(arglist__12119);
var children__7621__auto__ = cljs.core.rest(arglist__12119);
return G__12118__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12118.cljs$core$IFn$_invoke$arity$variadic = G__12118__delegate;
return G__12118;
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
var G__12120__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__7620__auto__,children__7621__auto__);
};
var G__12120 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12120__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12120.cljs$lang$maxFixedArity = 1;
G__12120.cljs$lang$applyTo = (function (arglist__12121){
var opts__7620__auto__ = cljs.core.first(arglist__12121);
var children__7621__auto__ = cljs.core.rest(arglist__12121);
return G__12120__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12120.cljs$core$IFn$_invoke$arity$variadic = G__12120__delegate;
return G__12120;
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
var G__12122__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__7620__auto__,children__7621__auto__);
};
var G__12122 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12122__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12122.cljs$lang$maxFixedArity = 1;
G__12122.cljs$lang$applyTo = (function (arglist__12123){
var opts__7620__auto__ = cljs.core.first(arglist__12123);
var children__7621__auto__ = cljs.core.rest(arglist__12123);
return G__12122__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12122.cljs$core$IFn$_invoke$arity$variadic = G__12122__delegate;
return G__12122;
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
var G__12124__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__7620__auto__,children__7621__auto__);
};
var G__12124 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12124__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12124.cljs$lang$maxFixedArity = 1;
G__12124.cljs$lang$applyTo = (function (arglist__12125){
var opts__7620__auto__ = cljs.core.first(arglist__12125);
var children__7621__auto__ = cljs.core.rest(arglist__12125);
return G__12124__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12124.cljs$core$IFn$_invoke$arity$variadic = G__12124__delegate;
return G__12124;
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
var G__12126__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__7620__auto__,children__7621__auto__);
};
var G__12126 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12126__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12126.cljs$lang$maxFixedArity = 1;
G__12126.cljs$lang$applyTo = (function (arglist__12127){
var opts__7620__auto__ = cljs.core.first(arglist__12127);
var children__7621__auto__ = cljs.core.rest(arglist__12127);
return G__12126__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12126.cljs$core$IFn$_invoke$arity$variadic = G__12126__delegate;
return G__12126;
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
var G__12128__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__7620__auto__,children__7621__auto__);
};
var G__12128 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12128__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12128.cljs$lang$maxFixedArity = 1;
G__12128.cljs$lang$applyTo = (function (arglist__12129){
var opts__7620__auto__ = cljs.core.first(arglist__12129);
var children__7621__auto__ = cljs.core.rest(arglist__12129);
return G__12128__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12128.cljs$core$IFn$_invoke$arity$variadic = G__12128__delegate;
return G__12128;
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
var G__12130__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__7620__auto__,children__7621__auto__);
};
var G__12130 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12130__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12130.cljs$lang$maxFixedArity = 1;
G__12130.cljs$lang$applyTo = (function (arglist__12131){
var opts__7620__auto__ = cljs.core.first(arglist__12131);
var children__7621__auto__ = cljs.core.rest(arglist__12131);
return G__12130__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12130.cljs$core$IFn$_invoke$arity$variadic = G__12130__delegate;
return G__12130;
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
var G__12132__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__7620__auto__,children__7621__auto__);
};
var G__12132 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12132__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12132.cljs$lang$maxFixedArity = 1;
G__12132.cljs$lang$applyTo = (function (arglist__12133){
var opts__7620__auto__ = cljs.core.first(arglist__12133);
var children__7621__auto__ = cljs.core.rest(arglist__12133);
return G__12132__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12132.cljs$core$IFn$_invoke$arity$variadic = G__12132__delegate;
return G__12132;
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
var G__12134__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__7620__auto__,children__7621__auto__);
};
var G__12134 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12134__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12134.cljs$lang$maxFixedArity = 1;
G__12134.cljs$lang$applyTo = (function (arglist__12135){
var opts__7620__auto__ = cljs.core.first(arglist__12135);
var children__7621__auto__ = cljs.core.rest(arglist__12135);
return G__12134__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12134.cljs$core$IFn$_invoke$arity$variadic = G__12134__delegate;
return G__12134;
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
var G__12136__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__7620__auto__,children__7621__auto__);
};
var G__12136 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12136__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12136.cljs$lang$maxFixedArity = 1;
G__12136.cljs$lang$applyTo = (function (arglist__12137){
var opts__7620__auto__ = cljs.core.first(arglist__12137);
var children__7621__auto__ = cljs.core.rest(arglist__12137);
return G__12136__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12136.cljs$core$IFn$_invoke$arity$variadic = G__12136__delegate;
return G__12136;
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
var G__12138__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__7620__auto__,children__7621__auto__);
};
var G__12138 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12138__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12138.cljs$lang$maxFixedArity = 1;
G__12138.cljs$lang$applyTo = (function (arglist__12139){
var opts__7620__auto__ = cljs.core.first(arglist__12139);
var children__7621__auto__ = cljs.core.rest(arglist__12139);
return G__12138__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12138.cljs$core$IFn$_invoke$arity$variadic = G__12138__delegate;
return G__12138;
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
var G__12140__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__7620__auto__,children__7621__auto__);
};
var G__12140 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12140__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12140.cljs$lang$maxFixedArity = 1;
G__12140.cljs$lang$applyTo = (function (arglist__12141){
var opts__7620__auto__ = cljs.core.first(arglist__12141);
var children__7621__auto__ = cljs.core.rest(arglist__12141);
return G__12140__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12140.cljs$core$IFn$_invoke$arity$variadic = G__12140__delegate;
return G__12140;
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
var G__12142__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__7620__auto__,children__7621__auto__);
};
var G__12142 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12142__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12142.cljs$lang$maxFixedArity = 1;
G__12142.cljs$lang$applyTo = (function (arglist__12143){
var opts__7620__auto__ = cljs.core.first(arglist__12143);
var children__7621__auto__ = cljs.core.rest(arglist__12143);
return G__12142__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12142.cljs$core$IFn$_invoke$arity$variadic = G__12142__delegate;
return G__12142;
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
var G__12144__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__7620__auto__,children__7621__auto__);
};
var G__12144 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12144__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12144.cljs$lang$maxFixedArity = 1;
G__12144.cljs$lang$applyTo = (function (arglist__12145){
var opts__7620__auto__ = cljs.core.first(arglist__12145);
var children__7621__auto__ = cljs.core.rest(arglist__12145);
return G__12144__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12144.cljs$core$IFn$_invoke$arity$variadic = G__12144__delegate;
return G__12144;
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
var G__12146__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__7620__auto__,children__7621__auto__);
};
var G__12146 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12146__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12146.cljs$lang$maxFixedArity = 1;
G__12146.cljs$lang$applyTo = (function (arglist__12147){
var opts__7620__auto__ = cljs.core.first(arglist__12147);
var children__7621__auto__ = cljs.core.rest(arglist__12147);
return G__12146__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12146.cljs$core$IFn$_invoke$arity$variadic = G__12146__delegate;
return G__12146;
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
var G__12148__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__7620__auto__,children__7621__auto__);
};
var G__12148 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12148__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12148.cljs$lang$maxFixedArity = 1;
G__12148.cljs$lang$applyTo = (function (arglist__12149){
var opts__7620__auto__ = cljs.core.first(arglist__12149);
var children__7621__auto__ = cljs.core.rest(arglist__12149);
return G__12148__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12148.cljs$core$IFn$_invoke$arity$variadic = G__12148__delegate;
return G__12148;
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
var G__12150__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__7620__auto__,children__7621__auto__);
};
var G__12150 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12150__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12150.cljs$lang$maxFixedArity = 1;
G__12150.cljs$lang$applyTo = (function (arglist__12151){
var opts__7620__auto__ = cljs.core.first(arglist__12151);
var children__7621__auto__ = cljs.core.rest(arglist__12151);
return G__12150__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12150.cljs$core$IFn$_invoke$arity$variadic = G__12150__delegate;
return G__12150;
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
var G__12152__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__7620__auto__,children__7621__auto__);
};
var G__12152 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12152__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12152.cljs$lang$maxFixedArity = 1;
G__12152.cljs$lang$applyTo = (function (arglist__12153){
var opts__7620__auto__ = cljs.core.first(arglist__12153);
var children__7621__auto__ = cljs.core.rest(arglist__12153);
return G__12152__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12152.cljs$core$IFn$_invoke$arity$variadic = G__12152__delegate;
return G__12152;
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
var G__12154__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__7620__auto__,children__7621__auto__);
};
var G__12154 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12154__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12154.cljs$lang$maxFixedArity = 1;
G__12154.cljs$lang$applyTo = (function (arglist__12155){
var opts__7620__auto__ = cljs.core.first(arglist__12155);
var children__7621__auto__ = cljs.core.rest(arglist__12155);
return G__12154__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12154.cljs$core$IFn$_invoke$arity$variadic = G__12154__delegate;
return G__12154;
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
var G__12156__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__7620__auto__,children__7621__auto__);
};
var G__12156 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12156__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12156.cljs$lang$maxFixedArity = 1;
G__12156.cljs$lang$applyTo = (function (arglist__12157){
var opts__7620__auto__ = cljs.core.first(arglist__12157);
var children__7621__auto__ = cljs.core.rest(arglist__12157);
return G__12156__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12156.cljs$core$IFn$_invoke$arity$variadic = G__12156__delegate;
return G__12156;
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
var G__12158__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__7620__auto__,children__7621__auto__);
};
var G__12158 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12158__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12158.cljs$lang$maxFixedArity = 1;
G__12158.cljs$lang$applyTo = (function (arglist__12159){
var opts__7620__auto__ = cljs.core.first(arglist__12159);
var children__7621__auto__ = cljs.core.rest(arglist__12159);
return G__12158__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12158.cljs$core$IFn$_invoke$arity$variadic = G__12158__delegate;
return G__12158;
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
var G__12160__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__7620__auto__,children__7621__auto__);
};
var G__12160 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12160__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12160.cljs$lang$maxFixedArity = 1;
G__12160.cljs$lang$applyTo = (function (arglist__12161){
var opts__7620__auto__ = cljs.core.first(arglist__12161);
var children__7621__auto__ = cljs.core.rest(arglist__12161);
return G__12160__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12160.cljs$core$IFn$_invoke$arity$variadic = G__12160__delegate;
return G__12160;
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
var G__12162__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__7620__auto__,children__7621__auto__);
};
var G__12162 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12162__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12162.cljs$lang$maxFixedArity = 1;
G__12162.cljs$lang$applyTo = (function (arglist__12163){
var opts__7620__auto__ = cljs.core.first(arglist__12163);
var children__7621__auto__ = cljs.core.rest(arglist__12163);
return G__12162__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12162.cljs$core$IFn$_invoke$arity$variadic = G__12162__delegate;
return G__12162;
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
var G__12164__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__7620__auto__,children__7621__auto__);
};
var G__12164 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12164__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12164.cljs$lang$maxFixedArity = 1;
G__12164.cljs$lang$applyTo = (function (arglist__12165){
var opts__7620__auto__ = cljs.core.first(arglist__12165);
var children__7621__auto__ = cljs.core.rest(arglist__12165);
return G__12164__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12164.cljs$core$IFn$_invoke$arity$variadic = G__12164__delegate;
return G__12164;
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
var G__12166__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__7620__auto__,children__7621__auto__);
};
var G__12166 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12166__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12166.cljs$lang$maxFixedArity = 1;
G__12166.cljs$lang$applyTo = (function (arglist__12167){
var opts__7620__auto__ = cljs.core.first(arglist__12167);
var children__7621__auto__ = cljs.core.rest(arglist__12167);
return G__12166__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12166.cljs$core$IFn$_invoke$arity$variadic = G__12166__delegate;
return G__12166;
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
var G__12168__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__7620__auto__,children__7621__auto__);
};
var G__12168 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12168__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12168.cljs$lang$maxFixedArity = 1;
G__12168.cljs$lang$applyTo = (function (arglist__12169){
var opts__7620__auto__ = cljs.core.first(arglist__12169);
var children__7621__auto__ = cljs.core.rest(arglist__12169);
return G__12168__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12168.cljs$core$IFn$_invoke$arity$variadic = G__12168__delegate;
return G__12168;
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
var G__12170__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__7620__auto__,children__7621__auto__);
};
var G__12170 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12170__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12170.cljs$lang$maxFixedArity = 1;
G__12170.cljs$lang$applyTo = (function (arglist__12171){
var opts__7620__auto__ = cljs.core.first(arglist__12171);
var children__7621__auto__ = cljs.core.rest(arglist__12171);
return G__12170__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12170.cljs$core$IFn$_invoke$arity$variadic = G__12170__delegate;
return G__12170;
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
var G__12172__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__7620__auto__,children__7621__auto__);
};
var G__12172 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12172__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12172.cljs$lang$maxFixedArity = 1;
G__12172.cljs$lang$applyTo = (function (arglist__12173){
var opts__7620__auto__ = cljs.core.first(arglist__12173);
var children__7621__auto__ = cljs.core.rest(arglist__12173);
return G__12172__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12172.cljs$core$IFn$_invoke$arity$variadic = G__12172__delegate;
return G__12172;
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
var G__12174__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__7620__auto__,children__7621__auto__);
};
var G__12174 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12174__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12174.cljs$lang$maxFixedArity = 1;
G__12174.cljs$lang$applyTo = (function (arglist__12175){
var opts__7620__auto__ = cljs.core.first(arglist__12175);
var children__7621__auto__ = cljs.core.rest(arglist__12175);
return G__12174__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12174.cljs$core$IFn$_invoke$arity$variadic = G__12174__delegate;
return G__12174;
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
var G__12176__delegate = function (opts__7620__auto__,children__7621__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__7620__auto__,children__7621__auto__);
};
var G__12176 = function (opts__7620__auto__,var_args){
var children__7621__auto__ = null;
if (arguments.length > 1) {
  children__7621__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12176__delegate.call(this,opts__7620__auto__,children__7621__auto__);};
G__12176.cljs$lang$maxFixedArity = 1;
G__12176.cljs$lang$applyTo = (function (arglist__12177){
var opts__7620__auto__ = cljs.core.first(arglist__12177);
var children__7621__auto__ = cljs.core.rest(arglist__12177);
return G__12176__delegate(opts__7620__auto__,children__7621__auto__);
});
G__12176.cljs$core$IFn$_invoke$arity$variadic = G__12176__delegate;
return G__12176;
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
