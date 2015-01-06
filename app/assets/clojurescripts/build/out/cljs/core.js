// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2511";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$2,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$3,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$4,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$5,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20514__delegate = function (args){
return console.log.apply(console,(function (){var G__20513 = args;
return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__20513) : cljs.core.into_array.call(null,G__20513));
})());
};
var G__20514 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20514__delegate.call(this,args);};
G__20514.cljs$lang$maxFixedArity = 0;
G__20514.cljs$lang$applyTo = (function (arglist__20515){
var args = cljs.core.seq(arglist__20515);
return G__20514__delegate(args);
});
G__20514.cljs$core$IFn$_invoke$arity$variadic = G__20514__delegate;
return G__20514;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var G__20517 = x;
return goog.isString(G__20517);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[(function (){var G__20519 = x__$1;
return goog.typeOf(G__20519);
})()])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
var ty = cljs.core.type(obj);
var ty__$1 = (cljs.core.truth_((function (){var and__3624__auto__ = ty;
if(cljs.core.truth_(and__3624__auto__)){
return ty.cljs$lang$type;
} else {
return and__3624__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__20521 = obj;
return goog.typeOf(G__20521);
})());
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){
var temp__4124__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && (((function (){var G__20523 = Symbol;
return goog.typeOf(G__20523);
})() === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__4523__auto___20525 = len;
var i_20526 = (0);
while(true){
if((i_20526 < n__4523__auto___20525)){
(new_arr[i_20526] = (arr[i_20526]));

var G__20527 = (i_20526 + (1));
i_20526 = G__20527;
continue;
} else {
}
break;
}

return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__20536__delegate = function (array,i,idxs){
var G__20533 = aget;
var G__20534 = aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__20535 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__20533,G__20534,G__20535) : cljs.core.apply.call(null,G__20533,G__20534,G__20535));
};
var G__20536 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20536__delegate.call(this,array,i,idxs);};
G__20536.cljs$lang$maxFixedArity = 2;
G__20536.cljs$lang$applyTo = (function (arglist__20537){
var array = cljs.core.first(arglist__20537);
arglist__20537 = cljs.core.next(arglist__20537);
var i = cljs.core.first(arglist__20537);
var idxs = cljs.core.rest(arglist__20537);
return G__20536__delegate(array,i,idxs);
});
G__20536.cljs$core$IFn$_invoke$arity$variadic = G__20536__delegate;
return G__20536;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){
return (array[i] = val);
});
var aset__4 = (function() { 
var G__20546__delegate = function (array,idx,idx2,idxv){
var G__20542 = aset;
var G__20543 = (array[idx]);
var G__20544 = idx2;
var G__20545 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__20542,G__20543,G__20544,G__20545) : cljs.core.apply.call(null,G__20542,G__20543,G__20544,G__20545));
};
var G__20546 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20546__delegate.call(this,array,idx,idx2,idxv);};
G__20546.cljs$lang$maxFixedArity = 3;
G__20546.cljs$lang$applyTo = (function (arglist__20547){
var array = cljs.core.first(arglist__20547);
arglist__20547 = cljs.core.next(arglist__20547);
var idx = cljs.core.first(arglist__20547);
arglist__20547 = cljs.core.next(arglist__20547);
var idx2 = cljs.core.first(arglist__20547);
var idxv = cljs.core.rest(arglist__20547);
return G__20546__delegate(array,idx,idx2,idxv);
});
G__20546.cljs$core$IFn$_invoke$arity$variadic = G__20546__delegate;
return G__20546;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
var G__20553 = (function (a,x){
a.push(x);

return a;
});
var G__20554 = [];
var G__20555 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__20553,G__20554,G__20555) : cljs.core.reduce.call(null,G__20553,G__20554,G__20555));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
/**
* Invoke JavaScript object method via string. Needed when the
* string is not a valid unquoted property name.
* @param {...*} var_args
*/
cljs.core.js_invoke = (function() { 
var js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return js_invoke__delegate.call(this,obj,s,args);};
js_invoke.cljs$lang$maxFixedArity = 2;
js_invoke.cljs$lang$applyTo = (function (arglist__20556){
var obj = cljs.core.first(arglist__20556);
arglist__20556 = cljs.core.next(arglist__20556);
var s = cljs.core.first(arglist__20556);
var args = cljs.core.rest(arglist__20556);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj20558 = {};
return obj20558;
})();


cljs.core.IFn = (function (){var obj20560 = {};
return obj20560;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20606 = x__4280__auto__;
return goog.typeOf(G__20606);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20608 = x__4280__auto__;
return goog.typeOf(G__20608);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20610 = x__4280__auto__;
return goog.typeOf(G__20610);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20612 = x__4280__auto__;
return goog.typeOf(G__20612);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20614 = x__4280__auto__;
return goog.typeOf(G__20614);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20616 = x__4280__auto__;
return goog.typeOf(G__20616);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20618 = x__4280__auto__;
return goog.typeOf(G__20618);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20620 = x__4280__auto__;
return goog.typeOf(G__20620);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20622 = x__4280__auto__;
return goog.typeOf(G__20622);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20624 = x__4280__auto__;
return goog.typeOf(G__20624);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20626 = x__4280__auto__;
return goog.typeOf(G__20626);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20628 = x__4280__auto__;
return goog.typeOf(G__20628);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20630 = x__4280__auto__;
return goog.typeOf(G__20630);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20632 = x__4280__auto__;
return goog.typeOf(G__20632);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20634 = x__4280__auto__;
return goog.typeOf(G__20634);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20636 = x__4280__auto__;
return goog.typeOf(G__20636);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20638 = x__4280__auto__;
return goog.typeOf(G__20638);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20640 = x__4280__auto__;
return goog.typeOf(G__20640);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20642 = x__4280__auto__;
return goog.typeOf(G__20642);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20644 = x__4280__auto__;
return goog.typeOf(G__20644);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20646 = x__4280__auto__;
return goog.typeOf(G__20646);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._invoke[(function (){var G__20648 = x__4280__auto__;
return goog.typeOf(G__20648);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._invoke["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;


cljs.core.ICloneable = (function (){var obj20650 = {};
return obj20650;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3624__auto__ = value;
if(and__3624__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3624__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4280__auto__ = (((value == null))?null:value);
return (function (){var or__3636__auto__ = (cljs.core._clone[(function (){var G__20654 = x__4280__auto__;
return goog.typeOf(G__20654);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._clone["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj20656 = {};
return obj20656;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._count[(function (){var G__20660 = x__4280__auto__;
return goog.typeOf(G__20660);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._count["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj20662 = {};
return obj20662;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._empty[(function (){var G__20666 = x__4280__auto__;
return goog.typeOf(G__20666);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._empty["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj20668 = {};
return obj20668;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._conj[(function (){var G__20672 = x__4280__auto__;
return goog.typeOf(G__20672);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._conj["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj20674 = {};
return obj20674;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._nth[(function (){var G__20680 = x__4280__auto__;
return goog.typeOf(G__20680);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._nth["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._nth[(function (){var G__20682 = x__4280__auto__;
return goog.typeOf(G__20682);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._nth["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;


cljs.core.ASeq = (function (){var obj20684 = {};
return obj20684;
})();


cljs.core.ISeq = (function (){var obj20686 = {};
return obj20686;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._first[(function (){var G__20690 = x__4280__auto__;
return goog.typeOf(G__20690);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._first["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._rest[(function (){var G__20694 = x__4280__auto__;
return goog.typeOf(G__20694);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._rest["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj20696 = {};
return obj20696;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._next[(function (){var G__20700 = x__4280__auto__;
return goog.typeOf(G__20700);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._next["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj20702 = {};
return obj20702;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._lookup[(function (){var G__20708 = x__4280__auto__;
return goog.typeOf(G__20708);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._lookup["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._lookup[(function (){var G__20710 = x__4280__auto__;
return goog.typeOf(G__20710);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._lookup["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;


cljs.core.IAssociative = (function (){var obj20712 = {};
return obj20712;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__20716 = x__4280__auto__;
return goog.typeOf(G__20716);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._assoc[(function (){var G__20720 = x__4280__auto__;
return goog.typeOf(G__20720);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._assoc["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj20722 = {};
return obj20722;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._dissoc[(function (){var G__20726 = x__4280__auto__;
return goog.typeOf(G__20726);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj20728 = {};
return obj20728;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._key[(function (){var G__20732 = x__4280__auto__;
return goog.typeOf(G__20732);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._key["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._val[(function (){var G__20736 = x__4280__auto__;
return goog.typeOf(G__20736);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._val["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj20738 = {};
return obj20738;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._disjoin[(function (){var G__20742 = x__4280__auto__;
return goog.typeOf(G__20742);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj20744 = {};
return obj20744;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._peek[(function (){var G__20748 = x__4280__auto__;
return goog.typeOf(G__20748);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._peek["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._pop[(function (){var G__20752 = x__4280__auto__;
return goog.typeOf(G__20752);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._pop["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj20754 = {};
return obj20754;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._assoc_n[(function (){var G__20758 = x__4280__auto__;
return goog.typeOf(G__20758);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj20760 = {};
return obj20760;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._deref[(function (){var G__20764 = x__4280__auto__;
return goog.typeOf(G__20764);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._deref["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj20766 = {};
return obj20766;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._deref_with_timeout[(function (){var G__20770 = x__4280__auto__;
return goog.typeOf(G__20770);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj20772 = {};
return obj20772;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._meta[(function (){var G__20776 = x__4280__auto__;
return goog.typeOf(G__20776);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._meta["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj20778 = {};
return obj20778;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._with_meta[(function (){var G__20782 = x__4280__auto__;
return goog.typeOf(G__20782);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj20784 = {};
return obj20784;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._reduce[(function (){var G__20790 = x__4280__auto__;
return goog.typeOf(G__20790);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._reduce["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._reduce[(function (){var G__20792 = x__4280__auto__;
return goog.typeOf(G__20792);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._reduce["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj20794 = {};
return obj20794;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._kv_reduce[(function (){var G__20798 = x__4280__auto__;
return goog.typeOf(G__20798);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj20800 = {};
return obj20800;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._equiv[(function (){var G__20804 = x__4280__auto__;
return goog.typeOf(G__20804);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._equiv["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj20806 = {};
return obj20806;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._hash[(function (){var G__20810 = x__4280__auto__;
return goog.typeOf(G__20810);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._hash["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj20812 = {};
return obj20812;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._seq[(function (){var G__20816 = x__4280__auto__;
return goog.typeOf(G__20816);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._seq["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj20818 = {};
return obj20818;
})();


cljs.core.IList = (function (){var obj20820 = {};
return obj20820;
})();


cljs.core.IRecord = (function (){var obj20822 = {};
return obj20822;
})();


cljs.core.IReversible = (function (){var obj20824 = {};
return obj20824;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._rseq[(function (){var G__20828 = x__4280__auto__;
return goog.typeOf(G__20828);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._rseq["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj20830 = {};
return obj20830;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._sorted_seq[(function (){var G__20834 = x__4280__auto__;
return goog.typeOf(G__20834);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._sorted_seq_from[(function (){var G__20838 = x__4280__auto__;
return goog.typeOf(G__20838);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._entry_key[(function (){var G__20842 = x__4280__auto__;
return goog.typeOf(G__20842);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._comparator[(function (){var G__20846 = x__4280__auto__;
return goog.typeOf(G__20846);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._comparator["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj20848 = {};
return obj20848;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3624__auto__ = writer;
if(and__3624__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3624__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4280__auto__ = (((writer == null))?null:writer);
return (function (){var or__3636__auto__ = (cljs.core._write[(function (){var G__20852 = x__4280__auto__;
return goog.typeOf(G__20852);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._write["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3624__auto__ = writer;
if(and__3624__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3624__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4280__auto__ = (((writer == null))?null:writer);
return (function (){var or__3636__auto__ = (cljs.core._flush[(function (){var G__20856 = x__4280__auto__;
return goog.typeOf(G__20856);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._flush["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj20858 = {};
return obj20858;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._pr_writer[(function (){var G__20862 = x__4280__auto__;
return goog.typeOf(G__20862);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj20864 = {};
return obj20864;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3624__auto__ = d;
if(and__3624__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4280__auto__ = (((d == null))?null:d);
return (function (){var or__3636__auto__ = (cljs.core._realized_QMARK_[(function (){var G__20868 = x__4280__auto__;
return goog.typeOf(G__20868);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj20870 = {};
return obj20870;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._notify_watches[(function (){var G__20874 = x__4280__auto__;
return goog.typeOf(G__20874);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._add_watch[(function (){var G__20878 = x__4280__auto__;
return goog.typeOf(G__20878);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3624__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (cljs.core._remove_watch[(function (){var G__20882 = x__4280__auto__;
return goog.typeOf(G__20882);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj20884 = {};
return obj20884;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._as_transient[(function (){var G__20888 = x__4280__auto__;
return goog.typeOf(G__20888);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj20890 = {};
return obj20890;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3624__auto__ = tcoll;
if(and__3624__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4280__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3636__auto__ = (cljs.core._conj_BANG_[(function (){var G__20894 = x__4280__auto__;
return goog.typeOf(G__20894);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3624__auto__ = tcoll;
if(and__3624__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4280__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3636__auto__ = (cljs.core._persistent_BANG_[(function (){var G__20898 = x__4280__auto__;
return goog.typeOf(G__20898);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj20900 = {};
return obj20900;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3624__auto__ = tcoll;
if(and__3624__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4280__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3636__auto__ = (cljs.core._assoc_BANG_[(function (){var G__20904 = x__4280__auto__;
return goog.typeOf(G__20904);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj20906 = {};
return obj20906;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3624__auto__ = tcoll;
if(and__3624__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4280__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3636__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__20910 = x__4280__auto__;
return goog.typeOf(G__20910);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj20912 = {};
return obj20912;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3624__auto__ = tcoll;
if(and__3624__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4280__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3636__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__20916 = x__4280__auto__;
return goog.typeOf(G__20916);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3624__auto__ = tcoll;
if(and__3624__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4280__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3636__auto__ = (cljs.core._pop_BANG_[(function (){var G__20920 = x__4280__auto__;
return goog.typeOf(G__20920);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj20922 = {};
return obj20922;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3624__auto__ = tcoll;
if(and__3624__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4280__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3636__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__20926 = x__4280__auto__;
return goog.typeOf(G__20926);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj20928 = {};
return obj20928;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3624__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (cljs.core._compare[(function (){var G__20932 = x__4280__auto__;
return goog.typeOf(G__20932);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._compare["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj20934 = {};
return obj20934;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._drop_first[(function (){var G__20938 = x__4280__auto__;
return goog.typeOf(G__20938);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj20940 = {};
return obj20940;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._chunked_first[(function (){var G__20944 = x__4280__auto__;
return goog.typeOf(G__20944);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._chunked_rest[(function (){var G__20948 = x__4280__auto__;
return goog.typeOf(G__20948);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj20950 = {};
return obj20950;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._chunked_next[(function (){var G__20954 = x__4280__auto__;
return goog.typeOf(G__20954);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj20956 = {};
return obj20956;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3624__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (cljs.core._name[(function (){var G__20960 = x__4280__auto__;
return goog.typeOf(G__20960);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._name["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3624__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (cljs.core._namespace[(function (){var G__20964 = x__4280__auto__;
return goog.typeOf(G__20964);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._namespace["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj20966 = {};
return obj20966;
})();


cljs.core.IReset = (function (){var obj20968 = {};
return obj20968;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._reset_BANG_[(function (){var G__20972 = x__4280__auto__;
return goog.typeOf(G__20972);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj20974 = {};
return obj20974;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._swap_BANG_[(function (){var G__20984 = x__4280__auto__;
return goog.typeOf(G__20984);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._swap_BANG_[(function (){var G__20986 = x__4280__auto__;
return goog.typeOf(G__20986);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._swap_BANG_[(function (){var G__20988 = x__4280__auto__;
return goog.typeOf(G__20988);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._swap_BANG_[(function (){var G__20990 = x__4280__auto__;
return goog.typeOf(G__20990);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;


cljs.core.IVolatile = (function (){var obj20992 = {};
return obj20992;
})();

cljs.core._vreset_BANG_ = (function _vreset_BANG_(o,new_value){
if((function (){var and__3624__auto__ = o;
if(and__3624__auto__){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2(o,new_value);
} else {
var x__4280__auto__ = (((o == null))?null:o);
return (function (){var or__3636__auto__ = (cljs.core._vreset_BANG_[(function (){var G__20996 = x__4280__auto__;
return goog.typeOf(G__20996);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._vreset_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IVolatile.-vreset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.IIterable = (function (){var obj20998 = {};
return obj20998;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3624__auto__ = coll;
if(and__3624__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3624__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4280__auto__ = (((coll == null))?null:coll);
return (function (){var or__3636__auto__ = (cljs.core._iterator[(function (){var G__21002 = x__4280__auto__;
return goog.typeOf(G__21002);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._iterator["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());

writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__21005 = (4294967295);
var G__21006 = (5);
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__21005,G__21006) : Math.imul.call(null,G__21005,G__21006));
})() === (0))))){
cljs.core.imul = (function imul(a,b){
var G__21009 = a;
var G__21010 = b;
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__21009,G__21010) : Math.imul.call(null,G__21009,G__21010));
});
} else {
cljs.core.imul = (function imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){
return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){
return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul(h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul(h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1(in$);
var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);
return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__21011 = (i + (2));
var G__21012 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__21011;
h1 = G__21012;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj21014 = {};
return obj21014;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__21015 = (i + (1));
var G__21016 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__21015;
hash = G__21016;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_(k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj21020 = {};
return obj21020;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){
if((function (){var G__21023 = o;
if(G__21023){
var bit__4310__auto__ = (G__21023.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4310__auto__) || (G__21023.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(null);
} else {
if(typeof o === 'number'){
return ((function (){var G__21024 = o;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__21024) : Math.floor.call(null,G__21024));
})() % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash(o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){
return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){
if((a.str === b.str)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3624__auto__ = cljs.core.not(a.ns);
if(and__3624__auto__){
return b.ns;
} else {
return and__3624__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__21031 = a.ns;
var G__21032 = b.ns;
return goog.array.defaultCompare(G__21031,G__21032);
})();
if(((0) === nsc)){
var G__21033 = a.name;
var G__21034 = b.name;
return goog.array.defaultCompare(G__21033,G__21034);
} else {
return nsc;
}
}
} else {
var G__21035 = a.name;
var G__21036 = b.name;
return goog.array.defaultCompare(G__21035,G__21036);

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,self__.str);
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__4057__auto__ = self__._hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.call = (function() {
var G__21038 = null;
var G__21038__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__21038__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__21038 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__21038__2.call(this,self__,coll);
case 3:
return G__21038__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21038.cljs$core$IFn$_invoke$arity$2 = G__21038__2;
G__21038.cljs$core$IFn$_invoke$arity$3 = G__21038__3;
return G__21038;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args21037){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21037)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;

/**
* @constructor
*/
cljs.core.Var = (function (val,sym,_meta){
this.val = val;
this.sym = sym;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 163840;
})
cljs.core.Var.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Var.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.Var.cljs$lang$type = true;

cljs.core.Var.cljs$lang$ctorStr = "cljs.core/Var";

cljs.core.Var.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Var");
});

cljs.core.__GT_Var = (function __GT_Var(val,sym,_meta){
return (new cljs.core.Var(val,sym,_meta));
});



cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__21042 = x;
if(G__21042){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__21042.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__21042.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__21042);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__21042);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__21044 = value;
if(G__21044){
var bit__4317__auto__ = (G__21044.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4317__auto__) || (G__21044.cljs$core$ICloneable$)){
return true;
} else {
if((!G__21044.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__21044);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__21044);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__21046 = coll;
if(G__21046){
var bit__4310__auto__ = (G__21046.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4310__auto__) || (G__21046.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll)){
return cljs.core._seq(coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__21048 = coll;
if(G__21048){
var bit__4310__auto__ = (G__21048.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4310__auto__) || (G__21048.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if((s == null)){
return null;
} else {
return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null))){
if((function (){var G__21050 = coll;
if(G__21050){
var bit__4310__auto__ = (G__21050.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4310__auto__) || (G__21050.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if(s){
return cljs.core._rest(s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__21052 = coll;
if(G__21052){
var bit__4310__auto__ = (G__21052.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4310__auto__) || (G__21052.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$INext$_next$arity$1(null);
} else {
return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__21057__delegate = function (x,y,more){
while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__21058 = y;
var G__21059 = cljs.core.first(more);
var G__21060 = cljs.core.next(more);
x = G__21058;
y = G__21059;
more = G__21060;
continue;
} else {
return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__21057 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21057__delegate.call(this,x,y,more);};
G__21057.cljs$lang$maxFixedArity = 2;
G__21057.cljs$lang$applyTo = (function (arglist__21061){
var x = cljs.core.first(arglist__21061);
arglist__21061 = cljs.core.next(arglist__21061);
var y = cljs.core.first(arglist__21061);
var more = cljs.core.rest(arglist__21061);
return G__21057__delegate(x,y,more);
});
G__21057.cljs$core$IFn$_invoke$arity$variadic = G__21057__delegate;
return G__21057;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": x};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = (function (){var G__21062 = self__.iter;
return (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(G__21062) : cljs.core.es6_iterator_seq.call(null,G__21062));
})();
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function __GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1(hash_basis);
var h1__$1 = cljs.core.m3_mix_H1(h1,k1);
return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__21063 = (n + (1));
var G__21064 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__21065 = cljs.core.next(coll__$1);
n = G__21063;
hash_code = G__21064;
coll__$1 = G__21065;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__21066 = (n + (1));
var G__21067 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__21068 = cljs.core.next(coll__$1);
n = G__21066;
hash_code = G__21067;
coll__$1 = G__21068;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));

(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
var G__21069 = o;
return goog.getUid(G__21069);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function __GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
* If x is already reduced?, returns it, else returns (reduced x)
*/
cljs.core.ensure_reduced = (function ensure_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return x;
} else {
return cljs.core.reduced(x);
}
});
/**
* If x is reduced?, returns (deref x), else returns x
*/
cljs.core.unreduced = (function unreduced(x){
if(cljs.core.reduced_QMARK_(x)){
var G__21071 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21071) : cljs.core.deref.call(null,G__21071));
} else {
return x;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__21078 = val;
var G__21079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21078,G__21079) : f.call(null,G__21078,G__21079));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__21084 = nval;
var G__21085 = (n + (1));
val = G__21084;
n = G__21085;
continue;
}
} else {
return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__21080 = val__$1;
var G__21081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21080,G__21081) : f.call(null,G__21080,G__21081));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__21086 = nval;
var G__21087 = (n + (1));
val__$1 = G__21086;
n = G__21087;
continue;
}
} else {
return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__21082 = val__$1;
var G__21083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21082,G__21083) : f.call(null,G__21082,G__21083));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__21088 = nval;
var G__21089 = (n + (1));
val__$1 = G__21088;
n = G__21089;
continue;
}
} else {
return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__21096 = val;
var G__21097 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21096,G__21097) : f.call(null,G__21096,G__21097));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__21102 = nval;
var G__21103 = (n + (1));
val = G__21102;
n = G__21103;
continue;
}
} else {
return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__21098 = val__$1;
var G__21099 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21098,G__21099) : f.call(null,G__21098,G__21099));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__21104 = nval;
var G__21105 = (n + (1));
val__$1 = G__21104;
n = G__21105;
continue;
}
} else {
return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__21100 = val__$1;
var G__21101 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21100,G__21101) : f.call(null,G__21100,G__21101));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__21106 = nval;
var G__21107 = (n + (1));
val__$1 = G__21106;
n = G__21107;
continue;
}
} else {
return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;



/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__21109 = x;
if(G__21109){
var bit__4317__auto__ = (G__21109.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4317__auto__) || (G__21109.cljs$core$ICounted$)){
return true;
} else {
if((!G__21109.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__21109);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__21109);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__21111 = x;
if(G__21111){
var bit__4317__auto__ = (G__21111.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4317__auto__) || (G__21111.cljs$core$IIndexed$)){
return true;
} else {
if((!G__21111.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__21111);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__21111);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count(coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__21112 = coll__$1;
var G__21113 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__21112,G__21113) : cljs.core.equiv_sequential.call(null,G__21112,G__21113));
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__21114 = o;
var G__21115 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__21114,G__21115) : cljs.core.cons.call(null,G__21114,G__21115));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__21118 = coll__$1;
var G__21119 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__21118,G__21119) : cljs.core.equiv_sequential.call(null,G__21118,G__21119));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__21120 = cljs.core.List.EMPTY;
var G__21121 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__21120,G__21121) : cljs.core.with_meta.call(null,G__21120,G__21121));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
var G__21122 = f;
var G__21123 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__21122,G__21123) : cljs.core.seq_reduce.call(null,G__21122,G__21123));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
var G__21124 = f;
var G__21125 = start;
var G__21126 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__21124,G__21125,G__21126) : cljs.core.seq_reduce.call(null,G__21124,G__21125,G__21126));
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__21127 = o;
var G__21128 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__21127,G__21128) : cljs.core.cons.call(null,G__21127,G__21128));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null))){
var G__21129 = sn;
s = G__21129;
continue;
} else {
return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){
return coll;
});
var conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj(coll,x);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__21134__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__21135 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__21136 = cljs.core.first(xs);
var G__21137 = cljs.core.next(xs);
coll = G__21135;
x = G__21136;
xs = G__21137;
continue;
} else {
return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__21134 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21134__delegate.call(this,coll,x,xs);};
G__21134.cljs$lang$maxFixedArity = 2;
G__21134.cljs$lang$applyTo = (function (arglist__21138){
var coll = cljs.core.first(arglist__21138);
arglist__21138 = cljs.core.next(arglist__21138);
var x = cljs.core.first(arglist__21138);
var xs = cljs.core.rest(arglist__21138);
return G__21134__delegate(coll,x,xs);
});
G__21134.cljs$core$IFn$_invoke$arity$variadic = G__21134__delegate;
return G__21134;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_(s)){
return (acc + cljs.core._count(s));
} else {
var G__21139 = cljs.core.next(s);
var G__21140 = (acc + (1));
s = G__21139;
acc = G__21140;
continue;
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(!((coll == null))){
if((function (){var G__21142 = coll;
if(G__21142){
var bit__4310__auto__ = (G__21142.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4310__auto__) || (G__21142.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(null);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll)){
return cljs.core._count(coll);
} else {
return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if(cljs.core.seq(coll)){
var G__21143 = cljs.core.next(coll);
var G__21144 = (n - (1));
coll = G__21143;
n = G__21144;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
if(cljs.core.seq(coll)){
var G__21145 = cljs.core.next(coll);
var G__21146 = (n - (1));
var G__21147 = not_found;
coll = G__21145;
n = G__21146;
not_found = G__21147;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__21152 = coll;
if(G__21152){
var bit__4310__auto__ = (G__21152.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4310__auto__) || (G__21152.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__21153 = coll;
if(G__21153){
var bit__4317__auto__ = (G__21153.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4317__auto__) || (G__21153.cljs$core$ISeq$)){
return true;
} else {
if((!G__21153.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21153);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21153);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__21154 = coll;
if(G__21154){
var bit__4310__auto__ = (G__21154.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4310__auto__) || (G__21154.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__21155 = coll;
if(G__21155){
var bit__4317__auto__ = (G__21155.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4317__auto__) || (G__21155.cljs$core$ISeq$)){
return true;
} else {
if((!G__21155.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21155);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21155);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the nth rest of coll, coll when n is 0.
*/
cljs.core.nthrest = (function nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq(xs))){
var G__21156 = (n__$1 - (1));
var G__21157 = cljs.core.rest(xs);
n__$1 = G__21156;
xs = G__21157;
continue;
} else {
return xs;
}
break;
}
});
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__21160 = o;
if(G__21160){
var bit__4310__auto__ = (G__21160.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4310__auto__) || (G__21160.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else {
return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__21161 = o;
if(G__21161){
var bit__4310__auto__ = (G__21161.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4310__auto__) || (G__21161.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc(coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__21165__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__21166 = ret;
var G__21167 = cljs.core.first(kvs);
var G__21168 = cljs.core.second(kvs);
var G__21169 = cljs.core.nnext(kvs);
coll = G__21166;
k = G__21167;
v = G__21168;
kvs = G__21169;
continue;
} else {
return ret;
}
break;
}
};
var G__21165 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21165__delegate.call(this,coll,k,v,kvs);};
G__21165.cljs$lang$maxFixedArity = 3;
G__21165.cljs$lang$applyTo = (function (arglist__21170){
var coll = cljs.core.first(arglist__21170);
arglist__21170 = cljs.core.next(arglist__21170);
var k = cljs.core.first(arglist__21170);
arglist__21170 = cljs.core.next(arglist__21170);
var v = cljs.core.first(arglist__21170);
var kvs = cljs.core.rest(arglist__21170);
return G__21165__delegate(coll,k,v,kvs);
});
G__21165.cljs$core$IFn$_invoke$arity$variadic = G__21165__delegate;
return G__21165;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__21173__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__21174 = ret;
var G__21175 = cljs.core.first(ks);
var G__21176 = cljs.core.next(ks);
coll = G__21174;
k = G__21175;
ks = G__21176;
continue;
} else {
return ret;
}
}
break;
}
};
var G__21173 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21173__delegate.call(this,coll,k,ks);};
G__21173.cljs$lang$maxFixedArity = 2;
G__21173.cljs$lang$applyTo = (function (arglist__21177){
var coll = cljs.core.first(arglist__21177);
arglist__21177 = cljs.core.next(arglist__21177);
var k = cljs.core.first(arglist__21177);
var ks = cljs.core.rest(arglist__21177);
return G__21173__delegate(coll,k,ks);
});
G__21173.cljs$core$IFn$_invoke$arity$variadic = G__21173__delegate;
return G__21173;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3636__auto__ = (function (){var G__21182 = f;
return goog.isFunction(G__21182);
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var G__21183 = f;
if(G__21183){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto____$1 = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
return G__21183.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__21183.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__21183);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__21183);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.prototype.call = (function() {
var G__21649 = null;
var G__21649__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__21649__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21185 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__21185) : self__.afn.call(null,G__21185));
});
var G__21649__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21186 = a;
var G__21187 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__21186,G__21187) : self__.afn.call(null,G__21186,G__21187));
});
var G__21649__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21188 = a;
var G__21189 = b;
var G__21190 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__21188,G__21189,G__21190) : self__.afn.call(null,G__21188,G__21189,G__21190));
});
var G__21649__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21191 = a;
var G__21192 = b;
var G__21193 = c;
var G__21194 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__21191,G__21192,G__21193,G__21194) : self__.afn.call(null,G__21191,G__21192,G__21193,G__21194));
});
var G__21649__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21195 = a;
var G__21196 = b;
var G__21197 = c;
var G__21198 = d;
var G__21199 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__21195,G__21196,G__21197,G__21198,G__21199) : self__.afn.call(null,G__21195,G__21196,G__21197,G__21198,G__21199));
});
var G__21649__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21200 = a;
var G__21201 = b;
var G__21202 = c;
var G__21203 = d;
var G__21204 = e;
var G__21205 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__21200,G__21201,G__21202,G__21203,G__21204,G__21205) : self__.afn.call(null,G__21200,G__21201,G__21202,G__21203,G__21204,G__21205));
});
var G__21649__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21206 = a;
var G__21207 = b;
var G__21208 = c;
var G__21209 = d;
var G__21210 = e;
var G__21211 = f;
var G__21212 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__21206,G__21207,G__21208,G__21209,G__21210,G__21211,G__21212) : self__.afn.call(null,G__21206,G__21207,G__21208,G__21209,G__21210,G__21211,G__21212));
});
var G__21649__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21213 = a;
var G__21214 = b;
var G__21215 = c;
var G__21216 = d;
var G__21217 = e;
var G__21218 = f;
var G__21219 = g;
var G__21220 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__21213,G__21214,G__21215,G__21216,G__21217,G__21218,G__21219,G__21220) : self__.afn.call(null,G__21213,G__21214,G__21215,G__21216,G__21217,G__21218,G__21219,G__21220));
});
var G__21649__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21221 = a;
var G__21222 = b;
var G__21223 = c;
var G__21224 = d;
var G__21225 = e;
var G__21226 = f;
var G__21227 = g;
var G__21228 = h;
var G__21229 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__21221,G__21222,G__21223,G__21224,G__21225,G__21226,G__21227,G__21228,G__21229) : self__.afn.call(null,G__21221,G__21222,G__21223,G__21224,G__21225,G__21226,G__21227,G__21228,G__21229));
});
var G__21649__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21230 = a;
var G__21231 = b;
var G__21232 = c;
var G__21233 = d;
var G__21234 = e;
var G__21235 = f;
var G__21236 = g;
var G__21237 = h;
var G__21238 = i;
var G__21239 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__21230,G__21231,G__21232,G__21233,G__21234,G__21235,G__21236,G__21237,G__21238,G__21239) : self__.afn.call(null,G__21230,G__21231,G__21232,G__21233,G__21234,G__21235,G__21236,G__21237,G__21238,G__21239));
});
var G__21649__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21240 = a;
var G__21241 = b;
var G__21242 = c;
var G__21243 = d;
var G__21244 = e;
var G__21245 = f;
var G__21246 = g;
var G__21247 = h;
var G__21248 = i;
var G__21249 = j;
var G__21250 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__21240,G__21241,G__21242,G__21243,G__21244,G__21245,G__21246,G__21247,G__21248,G__21249,G__21250) : self__.afn.call(null,G__21240,G__21241,G__21242,G__21243,G__21244,G__21245,G__21246,G__21247,G__21248,G__21249,G__21250));
});
var G__21649__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21251 = a;
var G__21252 = b;
var G__21253 = c;
var G__21254 = d;
var G__21255 = e;
var G__21256 = f;
var G__21257 = g;
var G__21258 = h;
var G__21259 = i;
var G__21260 = j;
var G__21261 = k;
var G__21262 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__21251,G__21252,G__21253,G__21254,G__21255,G__21256,G__21257,G__21258,G__21259,G__21260,G__21261,G__21262) : self__.afn.call(null,G__21251,G__21252,G__21253,G__21254,G__21255,G__21256,G__21257,G__21258,G__21259,G__21260,G__21261,G__21262));
});
var G__21649__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21263 = a;
var G__21264 = b;
var G__21265 = c;
var G__21266 = d;
var G__21267 = e;
var G__21268 = f;
var G__21269 = g;
var G__21270 = h;
var G__21271 = i;
var G__21272 = j;
var G__21273 = k;
var G__21274 = l;
var G__21275 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__21263,G__21264,G__21265,G__21266,G__21267,G__21268,G__21269,G__21270,G__21271,G__21272,G__21273,G__21274,G__21275) : self__.afn.call(null,G__21263,G__21264,G__21265,G__21266,G__21267,G__21268,G__21269,G__21270,G__21271,G__21272,G__21273,G__21274,G__21275));
});
var G__21649__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21276 = a;
var G__21277 = b;
var G__21278 = c;
var G__21279 = d;
var G__21280 = e;
var G__21281 = f;
var G__21282 = g;
var G__21283 = h;
var G__21284 = i;
var G__21285 = j;
var G__21286 = k;
var G__21287 = l;
var G__21288 = m;
var G__21289 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__21276,G__21277,G__21278,G__21279,G__21280,G__21281,G__21282,G__21283,G__21284,G__21285,G__21286,G__21287,G__21288,G__21289) : self__.afn.call(null,G__21276,G__21277,G__21278,G__21279,G__21280,G__21281,G__21282,G__21283,G__21284,G__21285,G__21286,G__21287,G__21288,G__21289));
});
var G__21649__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21290 = a;
var G__21291 = b;
var G__21292 = c;
var G__21293 = d;
var G__21294 = e;
var G__21295 = f;
var G__21296 = g;
var G__21297 = h;
var G__21298 = i;
var G__21299 = j;
var G__21300 = k;
var G__21301 = l;
var G__21302 = m;
var G__21303 = n;
var G__21304 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__21290,G__21291,G__21292,G__21293,G__21294,G__21295,G__21296,G__21297,G__21298,G__21299,G__21300,G__21301,G__21302,G__21303,G__21304) : self__.afn.call(null,G__21290,G__21291,G__21292,G__21293,G__21294,G__21295,G__21296,G__21297,G__21298,G__21299,G__21300,G__21301,G__21302,G__21303,G__21304));
});
var G__21649__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21305 = a;
var G__21306 = b;
var G__21307 = c;
var G__21308 = d;
var G__21309 = e;
var G__21310 = f;
var G__21311 = g;
var G__21312 = h;
var G__21313 = i;
var G__21314 = j;
var G__21315 = k;
var G__21316 = l;
var G__21317 = m;
var G__21318 = n;
var G__21319 = o;
var G__21320 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__21305,G__21306,G__21307,G__21308,G__21309,G__21310,G__21311,G__21312,G__21313,G__21314,G__21315,G__21316,G__21317,G__21318,G__21319,G__21320) : self__.afn.call(null,G__21305,G__21306,G__21307,G__21308,G__21309,G__21310,G__21311,G__21312,G__21313,G__21314,G__21315,G__21316,G__21317,G__21318,G__21319,G__21320));
});
var G__21649__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21321 = a;
var G__21322 = b;
var G__21323 = c;
var G__21324 = d;
var G__21325 = e;
var G__21326 = f;
var G__21327 = g;
var G__21328 = h;
var G__21329 = i;
var G__21330 = j;
var G__21331 = k;
var G__21332 = l;
var G__21333 = m;
var G__21334 = n;
var G__21335 = o;
var G__21336 = p;
var G__21337 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__21321,G__21322,G__21323,G__21324,G__21325,G__21326,G__21327,G__21328,G__21329,G__21330,G__21331,G__21332,G__21333,G__21334,G__21335,G__21336,G__21337) : self__.afn.call(null,G__21321,G__21322,G__21323,G__21324,G__21325,G__21326,G__21327,G__21328,G__21329,G__21330,G__21331,G__21332,G__21333,G__21334,G__21335,G__21336,G__21337));
});
var G__21649__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21338 = a;
var G__21339 = b;
var G__21340 = c;
var G__21341 = d;
var G__21342 = e;
var G__21343 = f;
var G__21344 = g;
var G__21345 = h;
var G__21346 = i;
var G__21347 = j;
var G__21348 = k;
var G__21349 = l;
var G__21350 = m;
var G__21351 = n;
var G__21352 = o;
var G__21353 = p;
var G__21354 = q;
var G__21355 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__21338,G__21339,G__21340,G__21341,G__21342,G__21343,G__21344,G__21345,G__21346,G__21347,G__21348,G__21349,G__21350,G__21351,G__21352,G__21353,G__21354,G__21355) : self__.afn.call(null,G__21338,G__21339,G__21340,G__21341,G__21342,G__21343,G__21344,G__21345,G__21346,G__21347,G__21348,G__21349,G__21350,G__21351,G__21352,G__21353,G__21354,G__21355));
});
var G__21649__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21356 = a;
var G__21357 = b;
var G__21358 = c;
var G__21359 = d;
var G__21360 = e;
var G__21361 = f;
var G__21362 = g;
var G__21363 = h;
var G__21364 = i;
var G__21365 = j;
var G__21366 = k;
var G__21367 = l;
var G__21368 = m;
var G__21369 = n;
var G__21370 = o;
var G__21371 = p;
var G__21372 = q;
var G__21373 = r;
var G__21374 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__21356,G__21357,G__21358,G__21359,G__21360,G__21361,G__21362,G__21363,G__21364,G__21365,G__21366,G__21367,G__21368,G__21369,G__21370,G__21371,G__21372,G__21373,G__21374) : self__.afn.call(null,G__21356,G__21357,G__21358,G__21359,G__21360,G__21361,G__21362,G__21363,G__21364,G__21365,G__21366,G__21367,G__21368,G__21369,G__21370,G__21371,G__21372,G__21373,G__21374));
});
var G__21649__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21375 = a;
var G__21376 = b;
var G__21377 = c;
var G__21378 = d;
var G__21379 = e;
var G__21380 = f;
var G__21381 = g;
var G__21382 = h;
var G__21383 = i;
var G__21384 = j;
var G__21385 = k;
var G__21386 = l;
var G__21387 = m;
var G__21388 = n;
var G__21389 = o;
var G__21390 = p;
var G__21391 = q;
var G__21392 = r;
var G__21393 = s;
var G__21394 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__21375,G__21376,G__21377,G__21378,G__21379,G__21380,G__21381,G__21382,G__21383,G__21384,G__21385,G__21386,G__21387,G__21388,G__21389,G__21390,G__21391,G__21392,G__21393,G__21394) : self__.afn.call(null,G__21375,G__21376,G__21377,G__21378,G__21379,G__21380,G__21381,G__21382,G__21383,G__21384,G__21385,G__21386,G__21387,G__21388,G__21389,G__21390,G__21391,G__21392,G__21393,G__21394));
});
var G__21649__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__21395 = self__.afn;
var G__21396 = a;
var G__21397 = b;
var G__21398 = c;
var G__21399 = d;
var G__21400 = e;
var G__21401 = f;
var G__21402 = g;
var G__21403 = h;
var G__21404 = i;
var G__21405 = j;
var G__21406 = k;
var G__21407 = l;
var G__21408 = m;
var G__21409 = n;
var G__21410 = o;
var G__21411 = p;
var G__21412 = q;
var G__21413 = r;
var G__21414 = s;
var G__21415 = t;
var G__21416 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__21395,G__21396,G__21397,G__21398,G__21399,G__21400,G__21401,G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412,G__21413,G__21414,G__21415,G__21416) : cljs.core.apply.call(null,G__21395,G__21396,G__21397,G__21398,G__21399,G__21400,G__21401,G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412,G__21413,G__21414,G__21415,G__21416));
});
G__21649 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__21649__1.call(this,self__);
case 2:
return G__21649__2.call(this,self__,a);
case 3:
return G__21649__3.call(this,self__,a,b);
case 4:
return G__21649__4.call(this,self__,a,b,c);
case 5:
return G__21649__5.call(this,self__,a,b,c,d);
case 6:
return G__21649__6.call(this,self__,a,b,c,d,e);
case 7:
return G__21649__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__21649__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__21649__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__21649__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__21649__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__21649__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__21649__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__21649__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__21649__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__21649__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__21649__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__21649__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__21649__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__21649__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__21649__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__21649__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21649.cljs$core$IFn$_invoke$arity$1 = G__21649__1;
G__21649.cljs$core$IFn$_invoke$arity$2 = G__21649__2;
G__21649.cljs$core$IFn$_invoke$arity$3 = G__21649__3;
G__21649.cljs$core$IFn$_invoke$arity$4 = G__21649__4;
G__21649.cljs$core$IFn$_invoke$arity$5 = G__21649__5;
G__21649.cljs$core$IFn$_invoke$arity$6 = G__21649__6;
G__21649.cljs$core$IFn$_invoke$arity$7 = G__21649__7;
G__21649.cljs$core$IFn$_invoke$arity$8 = G__21649__8;
G__21649.cljs$core$IFn$_invoke$arity$9 = G__21649__9;
G__21649.cljs$core$IFn$_invoke$arity$10 = G__21649__10;
G__21649.cljs$core$IFn$_invoke$arity$11 = G__21649__11;
G__21649.cljs$core$IFn$_invoke$arity$12 = G__21649__12;
G__21649.cljs$core$IFn$_invoke$arity$13 = G__21649__13;
G__21649.cljs$core$IFn$_invoke$arity$14 = G__21649__14;
G__21649.cljs$core$IFn$_invoke$arity$15 = G__21649__15;
G__21649.cljs$core$IFn$_invoke$arity$16 = G__21649__16;
G__21649.cljs$core$IFn$_invoke$arity$17 = G__21649__17;
G__21649.cljs$core$IFn$_invoke$arity$18 = G__21649__18;
G__21649.cljs$core$IFn$_invoke$arity$19 = G__21649__19;
G__21649.cljs$core$IFn$_invoke$arity$20 = G__21649__20;
G__21649.cljs$core$IFn$_invoke$arity$21 = G__21649__21;
G__21649.cljs$core$IFn$_invoke$arity$22 = G__21649__22;
return G__21649;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args21184){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21184)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
var G__21417 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__21417) : self__.afn.call(null,G__21417));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
var G__21418 = a;
var G__21419 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__21418,G__21419) : self__.afn.call(null,G__21418,G__21419));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
var G__21420 = a;
var G__21421 = b;
var G__21422 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__21420,G__21421,G__21422) : self__.afn.call(null,G__21420,G__21421,G__21422));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
var G__21423 = a;
var G__21424 = b;
var G__21425 = c;
var G__21426 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__21423,G__21424,G__21425,G__21426) : self__.afn.call(null,G__21423,G__21424,G__21425,G__21426));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
var G__21427 = a;
var G__21428 = b;
var G__21429 = c;
var G__21430 = d;
var G__21431 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__21427,G__21428,G__21429,G__21430,G__21431) : self__.afn.call(null,G__21427,G__21428,G__21429,G__21430,G__21431));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
var G__21432 = a;
var G__21433 = b;
var G__21434 = c;
var G__21435 = d;
var G__21436 = e;
var G__21437 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__21432,G__21433,G__21434,G__21435,G__21436,G__21437) : self__.afn.call(null,G__21432,G__21433,G__21434,G__21435,G__21436,G__21437));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
var G__21438 = a;
var G__21439 = b;
var G__21440 = c;
var G__21441 = d;
var G__21442 = e;
var G__21443 = f;
var G__21444 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__21438,G__21439,G__21440,G__21441,G__21442,G__21443,G__21444) : self__.afn.call(null,G__21438,G__21439,G__21440,G__21441,G__21442,G__21443,G__21444));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
var G__21445 = a;
var G__21446 = b;
var G__21447 = c;
var G__21448 = d;
var G__21449 = e;
var G__21450 = f;
var G__21451 = g;
var G__21452 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__21445,G__21446,G__21447,G__21448,G__21449,G__21450,G__21451,G__21452) : self__.afn.call(null,G__21445,G__21446,G__21447,G__21448,G__21449,G__21450,G__21451,G__21452));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
var G__21453 = a;
var G__21454 = b;
var G__21455 = c;
var G__21456 = d;
var G__21457 = e;
var G__21458 = f;
var G__21459 = g;
var G__21460 = h;
var G__21461 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__21453,G__21454,G__21455,G__21456,G__21457,G__21458,G__21459,G__21460,G__21461) : self__.afn.call(null,G__21453,G__21454,G__21455,G__21456,G__21457,G__21458,G__21459,G__21460,G__21461));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
var G__21462 = a;
var G__21463 = b;
var G__21464 = c;
var G__21465 = d;
var G__21466 = e;
var G__21467 = f;
var G__21468 = g;
var G__21469 = h;
var G__21470 = i;
var G__21471 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__21462,G__21463,G__21464,G__21465,G__21466,G__21467,G__21468,G__21469,G__21470,G__21471) : self__.afn.call(null,G__21462,G__21463,G__21464,G__21465,G__21466,G__21467,G__21468,G__21469,G__21470,G__21471));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
var G__21472 = a;
var G__21473 = b;
var G__21474 = c;
var G__21475 = d;
var G__21476 = e;
var G__21477 = f;
var G__21478 = g;
var G__21479 = h;
var G__21480 = i;
var G__21481 = j;
var G__21482 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__21472,G__21473,G__21474,G__21475,G__21476,G__21477,G__21478,G__21479,G__21480,G__21481,G__21482) : self__.afn.call(null,G__21472,G__21473,G__21474,G__21475,G__21476,G__21477,G__21478,G__21479,G__21480,G__21481,G__21482));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
var G__21483 = a;
var G__21484 = b;
var G__21485 = c;
var G__21486 = d;
var G__21487 = e;
var G__21488 = f;
var G__21489 = g;
var G__21490 = h;
var G__21491 = i;
var G__21492 = j;
var G__21493 = k;
var G__21494 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__21483,G__21484,G__21485,G__21486,G__21487,G__21488,G__21489,G__21490,G__21491,G__21492,G__21493,G__21494) : self__.afn.call(null,G__21483,G__21484,G__21485,G__21486,G__21487,G__21488,G__21489,G__21490,G__21491,G__21492,G__21493,G__21494));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
var G__21495 = a;
var G__21496 = b;
var G__21497 = c;
var G__21498 = d;
var G__21499 = e;
var G__21500 = f;
var G__21501 = g;
var G__21502 = h;
var G__21503 = i;
var G__21504 = j;
var G__21505 = k;
var G__21506 = l;
var G__21507 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__21495,G__21496,G__21497,G__21498,G__21499,G__21500,G__21501,G__21502,G__21503,G__21504,G__21505,G__21506,G__21507) : self__.afn.call(null,G__21495,G__21496,G__21497,G__21498,G__21499,G__21500,G__21501,G__21502,G__21503,G__21504,G__21505,G__21506,G__21507));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
var G__21508 = a;
var G__21509 = b;
var G__21510 = c;
var G__21511 = d;
var G__21512 = e;
var G__21513 = f;
var G__21514 = g;
var G__21515 = h;
var G__21516 = i;
var G__21517 = j;
var G__21518 = k;
var G__21519 = l;
var G__21520 = m;
var G__21521 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__21508,G__21509,G__21510,G__21511,G__21512,G__21513,G__21514,G__21515,G__21516,G__21517,G__21518,G__21519,G__21520,G__21521) : self__.afn.call(null,G__21508,G__21509,G__21510,G__21511,G__21512,G__21513,G__21514,G__21515,G__21516,G__21517,G__21518,G__21519,G__21520,G__21521));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
var G__21522 = a;
var G__21523 = b;
var G__21524 = c;
var G__21525 = d;
var G__21526 = e;
var G__21527 = f;
var G__21528 = g;
var G__21529 = h;
var G__21530 = i;
var G__21531 = j;
var G__21532 = k;
var G__21533 = l;
var G__21534 = m;
var G__21535 = n;
var G__21536 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__21522,G__21523,G__21524,G__21525,G__21526,G__21527,G__21528,G__21529,G__21530,G__21531,G__21532,G__21533,G__21534,G__21535,G__21536) : self__.afn.call(null,G__21522,G__21523,G__21524,G__21525,G__21526,G__21527,G__21528,G__21529,G__21530,G__21531,G__21532,G__21533,G__21534,G__21535,G__21536));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
var G__21537 = a;
var G__21538 = b;
var G__21539 = c;
var G__21540 = d;
var G__21541 = e;
var G__21542 = f;
var G__21543 = g;
var G__21544 = h;
var G__21545 = i;
var G__21546 = j;
var G__21547 = k;
var G__21548 = l;
var G__21549 = m;
var G__21550 = n;
var G__21551 = o;
var G__21552 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__21537,G__21538,G__21539,G__21540,G__21541,G__21542,G__21543,G__21544,G__21545,G__21546,G__21547,G__21548,G__21549,G__21550,G__21551,G__21552) : self__.afn.call(null,G__21537,G__21538,G__21539,G__21540,G__21541,G__21542,G__21543,G__21544,G__21545,G__21546,G__21547,G__21548,G__21549,G__21550,G__21551,G__21552));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
var G__21553 = a;
var G__21554 = b;
var G__21555 = c;
var G__21556 = d;
var G__21557 = e;
var G__21558 = f;
var G__21559 = g;
var G__21560 = h;
var G__21561 = i;
var G__21562 = j;
var G__21563 = k;
var G__21564 = l;
var G__21565 = m;
var G__21566 = n;
var G__21567 = o;
var G__21568 = p;
var G__21569 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__21553,G__21554,G__21555,G__21556,G__21557,G__21558,G__21559,G__21560,G__21561,G__21562,G__21563,G__21564,G__21565,G__21566,G__21567,G__21568,G__21569) : self__.afn.call(null,G__21553,G__21554,G__21555,G__21556,G__21557,G__21558,G__21559,G__21560,G__21561,G__21562,G__21563,G__21564,G__21565,G__21566,G__21567,G__21568,G__21569));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
var G__21570 = a;
var G__21571 = b;
var G__21572 = c;
var G__21573 = d;
var G__21574 = e;
var G__21575 = f;
var G__21576 = g;
var G__21577 = h;
var G__21578 = i;
var G__21579 = j;
var G__21580 = k;
var G__21581 = l;
var G__21582 = m;
var G__21583 = n;
var G__21584 = o;
var G__21585 = p;
var G__21586 = q;
var G__21587 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__21570,G__21571,G__21572,G__21573,G__21574,G__21575,G__21576,G__21577,G__21578,G__21579,G__21580,G__21581,G__21582,G__21583,G__21584,G__21585,G__21586,G__21587) : self__.afn.call(null,G__21570,G__21571,G__21572,G__21573,G__21574,G__21575,G__21576,G__21577,G__21578,G__21579,G__21580,G__21581,G__21582,G__21583,G__21584,G__21585,G__21586,G__21587));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
var G__21588 = a;
var G__21589 = b;
var G__21590 = c;
var G__21591 = d;
var G__21592 = e;
var G__21593 = f;
var G__21594 = g;
var G__21595 = h;
var G__21596 = i;
var G__21597 = j;
var G__21598 = k;
var G__21599 = l;
var G__21600 = m;
var G__21601 = n;
var G__21602 = o;
var G__21603 = p;
var G__21604 = q;
var G__21605 = r;
var G__21606 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__21588,G__21589,G__21590,G__21591,G__21592,G__21593,G__21594,G__21595,G__21596,G__21597,G__21598,G__21599,G__21600,G__21601,G__21602,G__21603,G__21604,G__21605,G__21606) : self__.afn.call(null,G__21588,G__21589,G__21590,G__21591,G__21592,G__21593,G__21594,G__21595,G__21596,G__21597,G__21598,G__21599,G__21600,G__21601,G__21602,G__21603,G__21604,G__21605,G__21606));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
var G__21607 = a;
var G__21608 = b;
var G__21609 = c;
var G__21610 = d;
var G__21611 = e;
var G__21612 = f;
var G__21613 = g;
var G__21614 = h;
var G__21615 = i;
var G__21616 = j;
var G__21617 = k;
var G__21618 = l;
var G__21619 = m;
var G__21620 = n;
var G__21621 = o;
var G__21622 = p;
var G__21623 = q;
var G__21624 = r;
var G__21625 = s;
var G__21626 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__21607,G__21608,G__21609,G__21610,G__21611,G__21612,G__21613,G__21614,G__21615,G__21616,G__21617,G__21618,G__21619,G__21620,G__21621,G__21622,G__21623,G__21624,G__21625,G__21626) : self__.afn.call(null,G__21607,G__21608,G__21609,G__21610,G__21611,G__21612,G__21613,G__21614,G__21615,G__21616,G__21617,G__21618,G__21619,G__21620,G__21621,G__21622,G__21623,G__21624,G__21625,G__21626));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
var G__21627 = self__.afn;
var G__21628 = a;
var G__21629 = b;
var G__21630 = c;
var G__21631 = d;
var G__21632 = e;
var G__21633 = f;
var G__21634 = g;
var G__21635 = h;
var G__21636 = i;
var G__21637 = j;
var G__21638 = k;
var G__21639 = l;
var G__21640 = m;
var G__21641 = n;
var G__21642 = o;
var G__21643 = p;
var G__21644 = q;
var G__21645 = r;
var G__21646 = s;
var G__21647 = t;
var G__21648 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__21627,G__21628,G__21629,G__21630,G__21631,G__21632,G__21633,G__21634,G__21635,G__21636,G__21637,G__21638,G__21639,G__21640,G__21641,G__21642,G__21643,G__21644,G__21645,G__21646,G__21647,G__21648) : cljs.core.apply.call(null,G__21627,G__21628,G__21629,G__21630,G__21631,G__21632,G__21633,G__21634,G__21635,G__21636,G__21637,G__21638,G__21639,G__21640,G__21641,G__21642,G__21643,G__21644,G__21645,G__21646,G__21647,G__21648));
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__21653 = o;
if(G__21653){
var bit__4317__auto__ = (G__21653.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4317__auto__) || (G__21653.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__21653.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__21653);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__21653);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var and__3624__auto__ = !((o == null));
if(and__3624__auto__){
var G__21657 = o;
if(G__21657){
var bit__4317__auto__ = (G__21657.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4317__auto__) || (G__21657.cljs$core$IMeta$)){
return true;
} else {
if((!G__21657.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__21657);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__21657);
}
} else {
return and__3624__auto__;
}
})()){
return cljs.core._meta(o);
} else {
return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__21660__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__21661 = ret;
var G__21662 = cljs.core.first(ks);
var G__21663 = cljs.core.next(ks);
coll = G__21661;
k = G__21662;
ks = G__21663;
continue;
} else {
return ret;
}
}
break;
}
};
var G__21660 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21660__delegate.call(this,coll,k,ks);};
G__21660.cljs$lang$maxFixedArity = 2;
G__21660.cljs$lang$applyTo = (function (arglist__21664){
var coll = cljs.core.first(arglist__21664);
arglist__21664 = cljs.core.next(arglist__21664);
var k = cljs.core.first(arglist__21664);
var ks = cljs.core.rest(arglist__21664);
return G__21660__delegate(coll,k,ks);
});
G__21660.cljs$core$IFn$_invoke$arity$variadic = G__21660__delegate;
return G__21660;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__21666 = x;
if(G__21666){
var bit__4317__auto__ = (G__21666.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4317__auto__) || (G__21666.cljs$core$ICollection$)){
return true;
} else {
if((!G__21666.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__21666);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__21666);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__21668 = x;
if(G__21668){
var bit__4317__auto__ = (G__21668.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4317__auto__) || (G__21668.cljs$core$ISet$)){
return true;
} else {
if((!G__21668.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__21668);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__21668);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__21670 = x;
if(G__21670){
var bit__4317__auto__ = (G__21670.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4317__auto__) || (G__21670.cljs$core$IAssociative$)){
return true;
} else {
if((!G__21670.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__21670);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__21670);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__21672 = x;
if(G__21672){
var bit__4317__auto__ = (G__21672.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4317__auto__) || (G__21672.cljs$core$ISequential$)){
return true;
} else {
if((!G__21672.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__21672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__21672);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__21674 = x;
if(G__21674){
var bit__4317__auto__ = (G__21674.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4317__auto__) || (G__21674.cljs$core$ISorted$)){
return true;
} else {
if((!G__21674.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__21674);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__21674);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__21676 = x;
if(G__21676){
var bit__4317__auto__ = (G__21676.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4317__auto__) || (G__21676.cljs$core$IReduce$)){
return true;
} else {
if((!G__21676.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__21676);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__21676);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__21678 = x;
if(G__21678){
var bit__4317__auto__ = (G__21678.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4317__auto__) || (G__21678.cljs$core$IMap$)){
return true;
} else {
if((!G__21678.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__21678);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__21678);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__21680 = x;
if(G__21680){
var bit__4317__auto__ = (G__21680.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4317__auto__) || (G__21680.cljs$core$IVector$)){
return true;
} else {
if((!G__21680.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__21680);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__21680);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__21682 = x;
if(G__21682){
var bit__4310__auto__ = (G__21682.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4310__auto__) || (G__21682.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
var obj21688 = {};
return obj21688;
});
var js_obj__1 = (function() { 
var G__21691__delegate = function (keyvals){
var G__21689 = goog.object.create;
var G__21690 = keyvals;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__21689,G__21690) : cljs.core.apply.call(null,G__21689,G__21690));
};
var G__21691 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21691__delegate.call(this,keyvals);};
G__21691.cljs$lang$maxFixedArity = 0;
G__21691.cljs$lang$applyTo = (function (arglist__21692){
var keyvals = cljs.core.seq(arglist__21692);
return G__21691__delegate(keyvals);
});
G__21691.cljs$core$IFn$_invoke$arity$variadic = G__21691__delegate;
return G__21691;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
var G__21695_21697 = obj;
var G__21696_21698 = ((function (G__21695_21697,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__21695_21697,keys))
;
goog.object.forEach(G__21695_21697,G__21696_21698);

return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__21699 = (i__$1 + (1));
var G__21700 = (j__$1 + (1));
var G__21701 = (len__$1 - (1));
i__$1 = G__21699;
j__$1 = G__21700;
len__$1 = G__21701;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__21702 = (i__$1 - (1));
var G__21703 = (j__$1 - (1));
var G__21704 = (len__$1 - (1));
i__$1 = G__21702;
j__$1 = G__21703;
len__$1 = G__21704;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj21706 = {};
return obj21706;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__21708 = s;
if(G__21708){
var bit__4317__auto__ = (G__21708.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4317__auto__) || (G__21708.cljs$core$ISeq$)){
return true;
} else {
if((!G__21708.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21708);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__21708);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__21710 = s;
if(G__21710){
var bit__4317__auto__ = (G__21710.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4317__auto__) || (G__21710.cljs$core$ISeqable$)){
return true;
} else {
if((!G__21710.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21710);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21710);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3636__auto__ = cljs.core.fn_QMARK_(f);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var G__21714 = f;
if(G__21714){
var bit__4317__auto__ = (G__21714.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4317__auto__) || (G__21714.cljs$core$IFn$)){
return true;
} else {
if((!G__21714.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__21714);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__21714);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (cljs.core.not((function (){var G__21727 = n;
return isNaN(G__21727);
})())) && (!((n === Infinity))) && (((function (){var G__21728 = n;
return parseFloat(G__21728);
})() === (function (){var G__21729 = n;
var G__21730 = (10);
return parseInt(G__21729,G__21730);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else {
return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__21731__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_(s,x__$1)){
return false;
} else {
var G__21732 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__21733 = etc;
s = G__21732;
xs = G__21733;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__21731 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21731__delegate.call(this,x,y,more);};
G__21731.cljs$lang$maxFixedArity = 2;
G__21731.cljs$lang$applyTo = (function (arglist__21734){
var x = cljs.core.first(arglist__21734);
arglist__21734 = cljs.core.next(arglist__21734);
var y = cljs.core.first(arglist__21734);
var more = cljs.core.rest(arglist__21734);
return G__21731__delegate(x,y,more);
});
G__21731.cljs$core$IFn$_invoke$arity$variadic = G__21731__delegate;
return G__21731;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3636__auto__ = cljs.core.seq(coll);
if(or__3636__auto__){
return or__3636__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type(x) === cljs.core.type(y))){
if((function (){var G__21738 = x;
if(G__21738){
var bit__4310__auto__ = (G__21738.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4310__auto__) || (G__21738.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else {
var G__21739 = x;
var G__21740 = y;
return goog.array.defaultCompare(G__21739,G__21740);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__21745 = xs;
var G__21746 = ys;
var G__21747 = len;
var G__21748 = (n + (1));
xs = G__21745;
ys = G__21746;
len = G__21747;
n = G__21748;
continue;
} else {
return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (function (){var G__21753 = x;
var G__21754 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21753,G__21754) : f.call(null,G__21753,G__21754));
})();
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__21755 = y;
var G__21756 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21755,G__21756) : f.call(null,G__21755,G__21756));
})())){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (function (){var G__21762 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__21762) : cljs.core.to_array.call(null,G__21762));
})();
var G__21763_21765 = a;
var G__21764_21766 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__21763_21765,G__21764_21766);

return cljs.core.seq(a);
} else {
return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__21772 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__21772) : keyfn.call(null,G__21772));
})(),(function (){var G__21773 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__21773) : keyfn.call(null,G__21773));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
var G__21779 = f;
var G__21780 = cljs.core.first(s);
var G__21781 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__21779,G__21780,G__21781) : cljs.core.reduce.call(null,G__21779,G__21780,G__21781));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__21782 = val__$1;
var G__21783 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21782,G__21783) : f.call(null,G__21782,G__21783));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__21784 = nval;
var G__21785 = cljs.core.next(coll__$1);
val__$1 = G__21784;
coll__$1 = G__21785;
continue;
}
} else {
return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = (function (){var G__21789 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__21789) : cljs.core.to_array.call(null,G__21789));
})();
var G__21790_21792 = a;
goog.array.shuffle(G__21790_21792);

var G__21791 = a;
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__21791) : cljs.core.vec.call(null,G__21791));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__21795 = coll;
if(G__21795){
var bit__4310__auto__ = (G__21795.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4310__auto__) || (G__21795.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__21796 = coll;
if(G__21796){
var bit__4310__auto__ = (G__21796.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4310__auto__) || (G__21796.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce(coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function identity(x){
return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){
return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){
return (function() {
var G__21805 = null;
var G__21805__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__21805__1 = (function (x){
var G__21802 = x;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__21802) : cf.call(null,G__21802));
});
var G__21805__2 = (function (x,y){
var G__21803 = x;
var G__21804 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21803,G__21804) : f.call(null,G__21803,G__21804));
});
G__21805 = function(x,y){
switch(arguments.length){
case 0:
return G__21805__0.call(this);
case 1:
return G__21805__1.call(this,x);
case 2:
return G__21805__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21805.cljs$core$IFn$_invoke$arity$0 = G__21805__0;
G__21805.cljs$core$IFn$_invoke$arity$1 = G__21805__1;
G__21805.cljs$core$IFn$_invoke$arity$2 = G__21805__2;
return G__21805;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){
return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){
var f__$1 = (function (){var G__21812 = f;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__21812) : xform.call(null,G__21812));
})();
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
var G__21813 = ret;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__21813) : f__$1.call(null,G__21813));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return (0);
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__21814__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__21814 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21814__delegate.call(this,x,y,more);};
G__21814.cljs$lang$maxFixedArity = 2;
G__21814.cljs$lang$applyTo = (function (arglist__21815){
var x = cljs.core.first(arglist__21815);
arglist__21815 = cljs.core.next(arglist__21815);
var y = cljs.core.first(arglist__21815);
var more = cljs.core.rest(arglist__21815);
return G__21814__delegate(x,y,more);
});
G__21814.cljs$core$IFn$_invoke$arity$variadic = G__21814__delegate;
return G__21814;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__21816__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__21816 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21816__delegate.call(this,x,y,more);};
G__21816.cljs$lang$maxFixedArity = 2;
G__21816.cljs$lang$applyTo = (function (arglist__21817){
var x = cljs.core.first(arglist__21817);
arglist__21817 = cljs.core.next(arglist__21817);
var y = cljs.core.first(arglist__21817);
var more = cljs.core.rest(arglist__21817);
return G__21816__delegate(x,y,more);
});
G__21816.cljs$core$IFn$_invoke$arity$variadic = G__21816__delegate;
return G__21816;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return (1);
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__21818__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__21818 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21818__delegate.call(this,x,y,more);};
G__21818.cljs$lang$maxFixedArity = 2;
G__21818.cljs$lang$applyTo = (function (arglist__21819){
var x = cljs.core.first(arglist__21819);
arglist__21819 = cljs.core.next(arglist__21819);
var y = cljs.core.first(arglist__21819);
var more = cljs.core.rest(arglist__21819);
return G__21818__delegate(x,y,more);
});
G__21818.cljs$core$IFn$_invoke$arity$variadic = G__21818__delegate;
return G__21818;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__21824__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__21824 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21824__delegate.call(this,x,y,more);};
G__21824.cljs$lang$maxFixedArity = 2;
G__21824.cljs$lang$applyTo = (function (arglist__21825){
var x = cljs.core.first(arglist__21825);
arglist__21825 = cljs.core.next(arglist__21825);
var y = cljs.core.first(arglist__21825);
var more = cljs.core.rest(arglist__21825);
return G__21824__delegate(x,y,more);
});
G__21824.cljs$core$IFn$_invoke$arity$variadic = G__21824__delegate;
return G__21824;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__21826__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__21827 = y;
var G__21828 = cljs.core.first(more);
var G__21829 = cljs.core.next(more);
x = G__21827;
y = G__21828;
more = G__21829;
continue;
} else {
return (y < cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__21826 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21826__delegate.call(this,x,y,more);};
G__21826.cljs$lang$maxFixedArity = 2;
G__21826.cljs$lang$applyTo = (function (arglist__21830){
var x = cljs.core.first(arglist__21830);
arglist__21830 = cljs.core.next(arglist__21830);
var y = cljs.core.first(arglist__21830);
var more = cljs.core.rest(arglist__21830);
return G__21826__delegate(x,y,more);
});
G__21826.cljs$core$IFn$_invoke$arity$variadic = G__21826__delegate;
return G__21826;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__21831__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__21832 = y;
var G__21833 = cljs.core.first(more);
var G__21834 = cljs.core.next(more);
x = G__21832;
y = G__21833;
more = G__21834;
continue;
} else {
return (y <= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__21831 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21831__delegate.call(this,x,y,more);};
G__21831.cljs$lang$maxFixedArity = 2;
G__21831.cljs$lang$applyTo = (function (arglist__21835){
var x = cljs.core.first(arglist__21835);
arglist__21835 = cljs.core.next(arglist__21835);
var y = cljs.core.first(arglist__21835);
var more = cljs.core.rest(arglist__21835);
return G__21831__delegate(x,y,more);
});
G__21831.cljs$core$IFn$_invoke$arity$variadic = G__21831__delegate;
return G__21831;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__21836__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__21837 = y;
var G__21838 = cljs.core.first(more);
var G__21839 = cljs.core.next(more);
x = G__21837;
y = G__21838;
more = G__21839;
continue;
} else {
return (y > cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__21836 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21836__delegate.call(this,x,y,more);};
G__21836.cljs$lang$maxFixedArity = 2;
G__21836.cljs$lang$applyTo = (function (arglist__21840){
var x = cljs.core.first(arglist__21840);
arglist__21840 = cljs.core.next(arglist__21840);
var y = cljs.core.first(arglist__21840);
var more = cljs.core.rest(arglist__21840);
return G__21836__delegate(x,y,more);
});
G__21836.cljs$core$IFn$_invoke$arity$variadic = G__21836__delegate;
return G__21836;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__21841__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__21842 = y;
var G__21843 = cljs.core.first(more);
var G__21844 = cljs.core.next(more);
x = G__21842;
y = G__21843;
more = G__21844;
continue;
} else {
return (y >= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__21841 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21841__delegate.call(this,x,y,more);};
G__21841.cljs$lang$maxFixedArity = 2;
G__21841.cljs$lang$applyTo = (function (arglist__21845){
var x = cljs.core.first(arglist__21845);
arglist__21845 = cljs.core.next(arglist__21845);
var y = cljs.core.first(arglist__21845);
var more = cljs.core.rest(arglist__21845);
return G__21841__delegate(x,y,more);
});
G__21841.cljs$core$IFn$_invoke$arity$variadic = G__21841__delegate;
return G__21841;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
var x__3953__auto__ = x;
var y__3954__auto__ = y;
return ((x__3953__auto__ > y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
});
var max__3 = (function() { 
var G__21846__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3953__auto__ = x;
var y__3954__auto__ = y;
return ((x__3953__auto__ > y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})(),more);
};
var G__21846 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21846__delegate.call(this,x,y,more);};
G__21846.cljs$lang$maxFixedArity = 2;
G__21846.cljs$lang$applyTo = (function (arglist__21847){
var x = cljs.core.first(arglist__21847);
arglist__21847 = cljs.core.next(arglist__21847);
var y = cljs.core.first(arglist__21847);
var more = cljs.core.rest(arglist__21847);
return G__21846__delegate(x,y,more);
});
G__21846.cljs$core$IFn$_invoke$arity$variadic = G__21846__delegate;
return G__21846;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
var x__3960__auto__ = x;
var y__3961__auto__ = y;
return ((x__3960__auto__ < y__3961__auto__) ? x__3960__auto__ : y__3961__auto__);
});
var min__3 = (function() { 
var G__21848__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3960__auto__ = x;
var y__3961__auto__ = y;
return ((x__3960__auto__ < y__3961__auto__) ? x__3960__auto__ : y__3961__auto__);
})(),more);
};
var G__21848 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21848__delegate.call(this,x,y,more);};
G__21848.cljs$lang$maxFixedArity = 2;
G__21848.cljs$lang$applyTo = (function (arglist__21849){
var x = cljs.core.first(arglist__21849);
arglist__21849 = cljs.core.next(arglist__21849);
var y = cljs.core.first(arglist__21849);
var more = cljs.core.rest(arglist__21849);
return G__21848__delegate(x,y,more);
});
G__21848.cljs$core$IFn$_invoke$arity$variadic = G__21848__delegate;
return G__21848;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){
return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){
return x;
});
cljs.core.float$ = (function float$(x){
return x;
});
cljs.core.double$ = (function double$(x){
return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){
return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){
return (0);
});
var unchecked_add__1 = (function (x){
return x;
});
var unchecked_add__2 = (function (x,y){
return (x + y);
});
var unchecked_add__3 = (function() { 
var G__21850__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__21850 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21850__delegate.call(this,x,y,more);};
G__21850.cljs$lang$maxFixedArity = 2;
G__21850.cljs$lang$applyTo = (function (arglist__21851){
var x = cljs.core.first(arglist__21851);
arglist__21851 = cljs.core.next(arglist__21851);
var y = cljs.core.first(arglist__21851);
var more = cljs.core.rest(arglist__21851);
return G__21850__delegate(x,y,more);
});
G__21850.cljs$core$IFn$_invoke$arity$variadic = G__21850__delegate;
return G__21850;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){
return (0);
});
var unchecked_add_int__1 = (function (x){
return x;
});
var unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__21852__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__21852 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21852__delegate.call(this,x,y,more);};
G__21852.cljs$lang$maxFixedArity = 2;
G__21852.cljs$lang$applyTo = (function (arglist__21853){
var x = cljs.core.first(arglist__21853);
arglist__21853 = cljs.core.next(arglist__21853);
var y = cljs.core.first(arglist__21853);
var more = cljs.core.rest(arglist__21853);
return G__21852__delegate(x,y,more);
});
G__21852.cljs$core$IFn$_invoke$arity$variadic = G__21852__delegate;
return G__21852;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){
return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){
return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__21858__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__21858 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21858__delegate.call(this,x,y,more);};
G__21858.cljs$lang$maxFixedArity = 2;
G__21858.cljs$lang$applyTo = (function (arglist__21859){
var x = cljs.core.first(arglist__21859);
arglist__21859 = cljs.core.next(arglist__21859);
var y = cljs.core.first(arglist__21859);
var more = cljs.core.rest(arglist__21859);
return G__21858__delegate(x,y,more);
});
G__21858.cljs$core$IFn$_invoke$arity$variadic = G__21858__delegate;
return G__21858;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){
return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){
return (1);
});
var unchecked_multiply__1 = (function (x){
return x;
});
var unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__21860__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__21860 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21860__delegate.call(this,x,y,more);};
G__21860.cljs$lang$maxFixedArity = 2;
G__21860.cljs$lang$applyTo = (function (arglist__21861){
var x = cljs.core.first(arglist__21861);
arglist__21861 = cljs.core.next(arglist__21861);
var y = cljs.core.first(arglist__21861);
var more = cljs.core.rest(arglist__21861);
return G__21860__delegate(x,y,more);
});
G__21860.cljs$core$IFn$_invoke$arity$variadic = G__21860__delegate;
return G__21860;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){
return (1);
});
var unchecked_multiply_int__1 = (function (x){
return x;
});
var unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__21862__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__21862 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21862__delegate.call(this,x,y,more);};
G__21862.cljs$lang$maxFixedArity = 2;
G__21862.cljs$lang$applyTo = (function (arglist__21863){
var x = cljs.core.first(arglist__21863);
arglist__21863 = cljs.core.next(arglist__21863);
var y = cljs.core.first(arglist__21863);
var more = cljs.core.rest(arglist__21863);
return G__21862__delegate(x,y,more);
});
G__21862.cljs$core$IFn$_invoke$arity$variadic = G__21862__delegate;
return G__21862;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){
var G__21866 = x;
var G__21867 = n;
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__21866,G__21867) : cljs.core.mod.call(null,G__21866,G__21867));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){
return (- x);
});
var unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__21868__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__21868 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21868__delegate.call(this,x,y,more);};
G__21868.cljs$lang$maxFixedArity = 2;
G__21868.cljs$lang$applyTo = (function (arglist__21869){
var x = cljs.core.first(arglist__21869);
arglist__21869 = cljs.core.next(arglist__21869);
var y = cljs.core.first(arglist__21869);
var more = cljs.core.rest(arglist__21869);
return G__21868__delegate(x,y,more);
});
G__21868.cljs$core$IFn$_invoke$arity$variadic = G__21868__delegate;
return G__21868;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){
return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__21870__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__21870 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21870__delegate.call(this,x,y,more);};
G__21870.cljs$lang$maxFixedArity = 2;
G__21870.cljs$lang$applyTo = (function (arglist__21871){
var x = cljs.core.first(arglist__21871);
arglist__21871 = cljs.core.next(arglist__21871);
var y = cljs.core.first(arglist__21871);
var more = cljs.core.rest(arglist__21871);
return G__21870__delegate(x,y,more);
});
G__21870.cljs$core$IFn$_invoke$arity$variadic = G__21870__delegate;
return G__21870;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){
if((q >= (0))){
var G__21874 = q;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__21874) : Math.floor.call(null,G__21874));
} else {
var G__21875 = q;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__21875) : Math.ceil.call(null,G__21875));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){
return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){
return x;
});
cljs.core.bytes = (function bytes(x){
return x;
});
cljs.core.chars = (function chars(x){
return x;
});
cljs.core.shorts = (function shorts(x){
return x;
});
cljs.core.ints = (function ints(x){
return x;
});
cljs.core.floats = (function floats(x){
return x;
});
cljs.core.doubles = (function doubles(x){
return x;
});
cljs.core.longs = (function longs(x){
return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__21880__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__21881 = y;
var G__21882 = cljs.core.first(more);
var G__21883 = cljs.core.next(more);
x = G__21881;
y = G__21882;
more = G__21883;
continue;
} else {
return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__21880 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21880__delegate.call(this,x,y,more);};
G__21880.cljs$lang$maxFixedArity = 2;
G__21880.cljs$lang$applyTo = (function (arglist__21884){
var x = cljs.core.first(arglist__21884);
arglist__21884 = cljs.core.next(arglist__21884);
var y = cljs.core.first(arglist__21884);
var more = cljs.core.rest(arglist__21884);
return G__21880__delegate(x,y,more);
});
G__21880.cljs$core$IFn$_invoke$arity$variadic = G__21880__delegate;
return G__21880;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__21885 = (n__$1 - (1));
var G__21886 = cljs.core.next(xs);
n__$1 = G__21885;
xs = G__21886;
continue;
} else {
return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((x == null)){
return "";
} else {
var G__21890 = x;
return goog.string.buildString(G__21890);
}
});
var str__2 = (function() { 
var G__21891__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__21892 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__21893 = cljs.core.next(more);
sb = G__21892;
more = G__21893;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__21891 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21891__delegate.call(this,x,ys);};
G__21891.cljs$lang$maxFixedArity = 1;
G__21891.cljs$lang$applyTo = (function (arglist__21894){
var x = cljs.core.first(arglist__21894);
var ys = cljs.core.rest(arglist__21894);
return G__21891__delegate(x,ys);
});
G__21891.cljs$core$IFn$_invoke$arity$variadic = G__21891__delegate;
return G__21891;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;

/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__21895 = cljs.core.next(xs);
var G__21896 = cljs.core.next(ys);
xs = G__21895;
ys = G__21896;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){
if(cljs.core.seq(coll)){
var res = cljs.core.hash(cljs.core.first(coll));
var s = cljs.core.next(coll);
while(true){
if((s == null)){
return res;
} else {
var G__21897 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__21898 = cljs.core.next(s);
res = G__21897;
s = G__21898;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function hash_imap(m){
var h = (0);
var s = cljs.core.seq(m);
while(true){
if(s){
var e = cljs.core.first(s);
var G__21903 = ((h + (cljs.core.hash((function (){var G__21901 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__21901) : cljs.core.key.call(null,G__21901));
})()) ^ cljs.core.hash((function (){var G__21902 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__21902) : cljs.core.val.call(null,G__21902));
})()))) % (4503599627370496));
var G__21904 = cljs.core.next(s);
h = G__21903;
s = G__21904;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1){
var e = cljs.core.first(s__$1);
var G__21905 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__21906 = cljs.core.next(s__$1);
h = G__21905;
s__$1 = G__21906;
continue;
} else {
return h;
}
break;
}
});


/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__21917_21927 = cljs.core.seq(fn_map);
var chunk__21918_21928 = null;
var count__21919_21929 = (0);
var i__21920_21930 = (0);
while(true){
if((i__21920_21930 < count__21919_21929)){
var vec__21921_21931 = chunk__21918_21928.cljs$core$IIndexed$_nth$arity$2(null,i__21920_21930);
var key_name_21932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21921_21931,(0),null);
var f_21933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21921_21931,(1),null);
var str_name_21934 = (function (){var G__21922 = key_name_21932;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__21922) : cljs.core.name.call(null,G__21922));
})();
(obj[str_name_21934] = f_21933);

var G__21935 = seq__21917_21927;
var G__21936 = chunk__21918_21928;
var G__21937 = count__21919_21929;
var G__21938 = (i__21920_21930 + (1));
seq__21917_21927 = G__21935;
chunk__21918_21928 = G__21936;
count__21919_21929 = G__21937;
i__21920_21930 = G__21938;
continue;
} else {
var temp__4126__auto___21939 = cljs.core.seq(seq__21917_21927);
if(temp__4126__auto___21939){
var seq__21917_21940__$1 = temp__4126__auto___21939;
if(cljs.core.chunked_seq_QMARK_(seq__21917_21940__$1)){
var c__4423__auto___21941 = (function (){var G__21923 = seq__21917_21940__$1;
return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__21923) : cljs.core.chunk_first.call(null,G__21923));
})();
var G__21942 = (function (){var G__21924 = seq__21917_21940__$1;
return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__21924) : cljs.core.chunk_rest.call(null,G__21924));
})();
var G__21943 = c__4423__auto___21941;
var G__21944 = cljs.core.count(c__4423__auto___21941);
var G__21945 = (0);
seq__21917_21927 = G__21942;
chunk__21918_21928 = G__21943;
count__21919_21929 = G__21944;
i__21920_21930 = G__21945;
continue;
} else {
var vec__21925_21946 = cljs.core.first(seq__21917_21940__$1);
var key_name_21947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925_21946,(0),null);
var f_21948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925_21946,(1),null);
var str_name_21949 = (function (){var G__21926 = key_name_21947;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__21926) : cljs.core.name.call(null,G__21926));
})();
(obj[str_name_21949] = f_21948);

var G__21950 = cljs.core.next(seq__21917_21940__$1);
var G__21951 = null;
var G__21952 = (0);
var G__21953 = (0);
seq__21917_21927 = G__21950;
chunk__21918_21928 = G__21951;
count__21919_21929 = G__21952;
i__21920_21930 = G__21953;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest(coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__21955 = coll;
if(G__21955){
var bit__4317__auto__ = (G__21955.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4317__auto__) || (G__21955.cljs$core$IReversible$)){
return true;
} else {
if((!G__21955.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__21955);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__21955);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll)){
return cljs.core.rseq(coll);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));

var G__21956 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__21956;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__21957 = (i - (1));
var G__21958 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__21957;
r = G__21958;
continue;
} else {
return r;
}
break;
}
};
var list = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__21959){
var xs = cljs.core.seq(arglist__21959);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq(self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3636__auto__ = (coll == null);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var G__21963 = coll;
if(G__21963){
var bit__4310__auto__ = (G__21963.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4310__auto__) || (G__21963.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__21965 = x;
if(G__21965){
var bit__4317__auto__ = (G__21965.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4317__auto__) || (G__21965.cljs$core$IList$)){
return true;
} else {
if((!G__21965.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__21965);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__21965);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});
cljs.core.compare_keywords = (function compare_keywords(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3624__auto__ = cljs.core.not(a.ns);
if(and__3624__auto__){
return b.ns;
} else {
return and__3624__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__21972 = a.ns;
var G__21973 = b.ns;
return goog.array.defaultCompare(G__21972,G__21973);
})();
if(((0) === nsc)){
var G__21974 = a.name;
var G__21975 = b.name;
return goog.array.defaultCompare(G__21974,G__21975);
} else {
return nsc;
}
}
} else {
var G__21976 = a.name;
var G__21977 = b.name;
return goog.array.defaultCompare(G__21976,G__21977);

}
}
}
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4057__auto__ = self__._hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__21979 = null;
var G__21979__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__21979__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__21979 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__21979__2.call(this,self__,coll);
case 3:
return G__21979__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21979.cljs$core$IFn$_invoke$arity$2 = G__21979__2;
G__21979.cljs$core$IFn$_invoke$arity$3 = G__21979__3;
return G__21979;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args21978){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21978)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var G__21981 = x;
if(G__21981){
var bit__4310__auto__ = (G__21981.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4310__auto__) || (G__21981.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(null);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__21983 = name;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__21983) : cljs.core.name.call(null,G__21983));
})(),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if(!((self__.s == null))){
return cljs.core.rest(self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__21984 = ls.sval();
ls = G__21984;
continue;
} else {
self__.s = ls;

return cljs.core.seq(self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq(self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__21986 = s;
if(G__21986){
var bit__4310__auto__ = (G__21986.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4310__auto__) || (G__21986.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next(s);
} else {
return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1)){
ary.push(cljs.core.first(s__$1));

var G__21987 = cljs.core.next(s__$1);
s__$1 = G__21987;
continue;
} else {
return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = (new Array(cljs.core.count(coll)));
var i_21988 = (0);
var xs_21989 = cljs.core.seq(coll);
while(true){
if(xs_21989){
(ret[i_21988] = cljs.core.to_array(cljs.core.first(xs_21989)));

var G__21990 = (i_21988 + (1));
var G__21991 = cljs.core.next(xs_21989);
i_21988 = G__21990;
xs_21989 = G__21991;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__21994 = (i + (1));
var G__21995 = cljs.core.next(s__$1);
i = G__21994;
s__$1 = G__21995;
continue;
} else {
return a;
}
break;
}
} else {
var n__4523__auto___21996 = size;
var i_21997 = (0);
while(true){
if((i_21997 < n__4523__auto___21996)){
(a[i_21997] = init_val_or_seq);

var G__21998 = (i_21997 + (1));
i_21997 = G__21998;
continue;
} else {
}
break;
}

return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__22001 = (i + (1));
var G__22002 = cljs.core.next(s__$1);
i = G__22001;
s__$1 = G__22002;
continue;
} else {
return a;
}
break;
}
} else {
var n__4523__auto___22003 = size;
var i_22004 = (0);
while(true){
if((i_22004 < n__4523__auto___22003)){
(a[i_22004] = init_val_or_seq);

var G__22005 = (i_22004 + (1));
i_22004 = G__22005;
continue;
} else {
}
break;
}

return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__22008 = (i + (1));
var G__22009 = cljs.core.next(s__$1);
i = G__22008;
s__$1 = G__22009;
continue;
} else {
return a;
}
break;
}
} else {
var n__4523__auto___22010 = size;
var i_22011 = (0);
while(true){
if((i_22011 < n__4523__auto___22010)){
(a[i_22011] = init_val_or_seq);

var G__22012 = (i_22011 + (1));
i_22011 = G__22012;
continue;
} else {
}
break;
}

return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__22015 = (i + (1));
var G__22016 = cljs.core.next(s__$1);
i = G__22015;
s__$1 = G__22016;
continue;
} else {
return a;
}
break;
}
} else {
var n__4523__auto___22017 = size;
var i_22018 = (0);
while(true){
if((i_22018 < n__4523__auto___22017)){
(a[i_22018] = init_val_or_seq);

var G__22019 = (i_22018 + (1));
i_22018 = G__22019;
continue;
} else {
}
break;
}

return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s)){
return cljs.core.count(s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq(s__$1))){
var G__22020 = cljs.core.next(s__$1);
var G__22021 = (i - (1));
var G__22022 = (sum + (1));
s__$1 = G__22020;
i = G__22021;
sum = G__22022;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next(arglist) == null)){
return cljs.core.seq(cljs.core.first(arglist));
} else {
return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq(x);
if(s){
if(cljs.core.chunked_seq_QMARK_(s)){
return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else {
return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else {
return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__22042__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_(xys__$1)){
return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else {
return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__22042 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__22042__delegate.call(this,x,y,zs);};
G__22042.cljs$lang$maxFixedArity = 2;
G__22042.cljs$lang$applyTo = (function (arglist__22043){
var x = cljs.core.first(arglist__22043);
arglist__22043 = cljs.core.next(arglist__22043);
var y = cljs.core.first(arglist__22043);
var zs = cljs.core.rest(arglist__22043);
return G__22042__delegate(x,y,zs);
});
G__22042.cljs$core$IFn$_invoke$arity$variadic = G__22042__delegate;
return G__22042;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__22044__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__22044 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__22044__delegate.call(this,a,b,c,d,more);};
G__22044.cljs$lang$maxFixedArity = 4;
G__22044.cljs$lang$applyTo = (function (arglist__22045){
var a = cljs.core.first(arglist__22045);
arglist__22045 = cljs.core.next(arglist__22045);
var b = cljs.core.first(arglist__22045);
arglist__22045 = cljs.core.next(arglist__22045);
var c = cljs.core.first(arglist__22045);
arglist__22045 = cljs.core.next(arglist__22045);
var d = cljs.core.first(arglist__22045);
var more = cljs.core.rest(arglist__22045);
return G__22044__delegate(a,b,c,d,more);
});
G__22044.cljs$core$IFn$_invoke$arity$variadic = G__22044__delegate;
return G__22044;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){
return coll;
});
var conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__22046__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__22047 = ntcoll;
var G__22048 = cljs.core.first(vals);
var G__22049 = cljs.core.next(vals);
tcoll = G__22047;
val = G__22048;
vals = G__22049;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__22046 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__22046__delegate.call(this,tcoll,val,vals);};
G__22046.cljs$lang$maxFixedArity = 2;
G__22046.cljs$lang$applyTo = (function (arglist__22050){
var tcoll = cljs.core.first(arglist__22050);
arglist__22050 = cljs.core.next(arglist__22050);
var val = cljs.core.first(arglist__22050);
var vals = cljs.core.rest(arglist__22050);
return G__22046__delegate(tcoll,val,vals);
});
G__22046.cljs$core$IFn$_invoke$arity$variadic = G__22046__delegate;
return G__22046;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__22051__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__22052 = ntcoll;
var G__22053 = cljs.core.first(kvs);
var G__22054 = cljs.core.second(kvs);
var G__22055 = cljs.core.nnext(kvs);
tcoll = G__22052;
key = G__22053;
val = G__22054;
kvs = G__22055;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__22051 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22051__delegate.call(this,tcoll,key,val,kvs);};
G__22051.cljs$lang$maxFixedArity = 3;
G__22051.cljs$lang$applyTo = (function (arglist__22056){
var tcoll = cljs.core.first(arglist__22056);
arglist__22056 = cljs.core.next(arglist__22056);
var key = cljs.core.first(arglist__22056);
arglist__22056 = cljs.core.next(arglist__22056);
var val = cljs.core.first(arglist__22056);
var kvs = cljs.core.rest(arglist__22056);
return G__22051__delegate(tcoll,key,val,kvs);
});
G__22051.cljs$core$IFn$_invoke$arity$variadic = G__22051__delegate;
return G__22051;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__22057__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__22058 = ntcoll;
var G__22059 = cljs.core.first(ks);
var G__22060 = cljs.core.next(ks);
tcoll = G__22058;
key = G__22059;
ks = G__22060;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__22057 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__22057__delegate.call(this,tcoll,key,ks);};
G__22057.cljs$lang$maxFixedArity = 2;
G__22057.cljs$lang$applyTo = (function (arglist__22061){
var tcoll = cljs.core.first(arglist__22061);
arglist__22061 = cljs.core.next(arglist__22061);
var key = cljs.core.first(arglist__22061);
var ks = cljs.core.rest(arglist__22061);
return G__22057__delegate(tcoll,key,ks);
});
G__22057.cljs$core$IFn$_invoke$arity$variadic = G__22057__delegate;
return G__22057;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__22062__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__22063 = ntcoll;
var G__22064 = cljs.core.first(vals);
var G__22065 = cljs.core.next(vals);
tcoll = G__22063;
val = G__22064;
vals = G__22065;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__22062 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__22062__delegate.call(this,tcoll,val,vals);};
G__22062.cljs$lang$maxFixedArity = 2;
G__22062.cljs$lang$applyTo = (function (arglist__22066){
var tcoll = cljs.core.first(arglist__22066);
arglist__22066 = cljs.core.next(arglist__22066);
var val = cljs.core.first(arglist__22066);
var vals = cljs.core.rest(arglist__22066);
return G__22062__delegate(tcoll,val,vals);
});
G__22062.cljs$core$IFn$_invoke$arity$variadic = G__22062__delegate;
return G__22062;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;

cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var a4567 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4567);
} else {
var G__22277 = a4567;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22277) : f.call(null,G__22277));
}
} else {
var b4568 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4567,b4568);
} else {
var G__22278 = a4567;
var G__22279 = b4568;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22278,G__22279) : f.call(null,G__22278,G__22279));
}
} else {
var c4569 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4567,b4568,c4569);
} else {
var G__22280 = a4567;
var G__22281 = b4568;
var G__22282 = c4569;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22280,G__22281,G__22282) : f.call(null,G__22280,G__22281,G__22282));
}
} else {
var d4570 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4567,b4568,c4569,d4570);
} else {
var G__22283 = a4567;
var G__22284 = b4568;
var G__22285 = c4569;
var G__22286 = d4570;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22283,G__22284,G__22285,G__22286) : f.call(null,G__22283,G__22284,G__22285,G__22286));
}
} else {
var e4571 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4567,b4568,c4569,d4570,e4571);
} else {
var G__22287 = a4567;
var G__22288 = b4568;
var G__22289 = c4569;
var G__22290 = d4570;
var G__22291 = e4571;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__22287,G__22288,G__22289,G__22290,G__22291) : f.call(null,G__22287,G__22288,G__22289,G__22290,G__22291));
}
} else {
var f4572 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4567,b4568,c4569,d4570,e4571,f4572);
} else {
var G__22292 = a4567;
var G__22293 = b4568;
var G__22294 = c4569;
var G__22295 = d4570;
var G__22296 = e4571;
var G__22297 = f4572;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__22292,G__22293,G__22294,G__22295,G__22296,G__22297) : f.call(null,G__22292,G__22293,G__22294,G__22295,G__22296,G__22297));
}
} else {
var g4573 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4567,b4568,c4569,d4570,e4571,f4572,g4573);
} else {
var G__22298 = a4567;
var G__22299 = b4568;
var G__22300 = c4569;
var G__22301 = d4570;
var G__22302 = e4571;
var G__22303 = f4572;
var G__22304 = g4573;
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__22298,G__22299,G__22300,G__22301,G__22302,G__22303,G__22304) : f.call(null,G__22298,G__22299,G__22300,G__22301,G__22302,G__22303,G__22304));
}
} else {
var h4574 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574);
} else {
var G__22305 = a4567;
var G__22306 = b4568;
var G__22307 = c4569;
var G__22308 = d4570;
var G__22309 = e4571;
var G__22310 = f4572;
var G__22311 = g4573;
var G__22312 = h4574;
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__22305,G__22306,G__22307,G__22308,G__22309,G__22310,G__22311,G__22312) : f.call(null,G__22305,G__22306,G__22307,G__22308,G__22309,G__22310,G__22311,G__22312));
}
} else {
var i4575 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575);
} else {
var G__22313 = a4567;
var G__22314 = b4568;
var G__22315 = c4569;
var G__22316 = d4570;
var G__22317 = e4571;
var G__22318 = f4572;
var G__22319 = g4573;
var G__22320 = h4574;
var G__22321 = i4575;
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__22313,G__22314,G__22315,G__22316,G__22317,G__22318,G__22319,G__22320,G__22321) : f.call(null,G__22313,G__22314,G__22315,G__22316,G__22317,G__22318,G__22319,G__22320,G__22321));
}
} else {
var j4576 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576);
} else {
var G__22322 = a4567;
var G__22323 = b4568;
var G__22324 = c4569;
var G__22325 = d4570;
var G__22326 = e4571;
var G__22327 = f4572;
var G__22328 = g4573;
var G__22329 = h4574;
var G__22330 = i4575;
var G__22331 = j4576;
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__22322,G__22323,G__22324,G__22325,G__22326,G__22327,G__22328,G__22329,G__22330,G__22331) : f.call(null,G__22322,G__22323,G__22324,G__22325,G__22326,G__22327,G__22328,G__22329,G__22330,G__22331));
}
} else {
var k4577 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577);
} else {
var G__22332 = a4567;
var G__22333 = b4568;
var G__22334 = c4569;
var G__22335 = d4570;
var G__22336 = e4571;
var G__22337 = f4572;
var G__22338 = g4573;
var G__22339 = h4574;
var G__22340 = i4575;
var G__22341 = j4576;
var G__22342 = k4577;
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__22332,G__22333,G__22334,G__22335,G__22336,G__22337,G__22338,G__22339,G__22340,G__22341,G__22342) : f.call(null,G__22332,G__22333,G__22334,G__22335,G__22336,G__22337,G__22338,G__22339,G__22340,G__22341,G__22342));
}
} else {
var l4578 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578);
} else {
var G__22343 = a4567;
var G__22344 = b4568;
var G__22345 = c4569;
var G__22346 = d4570;
var G__22347 = e4571;
var G__22348 = f4572;
var G__22349 = g4573;
var G__22350 = h4574;
var G__22351 = i4575;
var G__22352 = j4576;
var G__22353 = k4577;
var G__22354 = l4578;
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__22343,G__22344,G__22345,G__22346,G__22347,G__22348,G__22349,G__22350,G__22351,G__22352,G__22353,G__22354) : f.call(null,G__22343,G__22344,G__22345,G__22346,G__22347,G__22348,G__22349,G__22350,G__22351,G__22352,G__22353,G__22354));
}
} else {
var m4579 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579);
} else {
var G__22355 = a4567;
var G__22356 = b4568;
var G__22357 = c4569;
var G__22358 = d4570;
var G__22359 = e4571;
var G__22360 = f4572;
var G__22361 = g4573;
var G__22362 = h4574;
var G__22363 = i4575;
var G__22364 = j4576;
var G__22365 = k4577;
var G__22366 = l4578;
var G__22367 = m4579;
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__22355,G__22356,G__22357,G__22358,G__22359,G__22360,G__22361,G__22362,G__22363,G__22364,G__22365,G__22366,G__22367) : f.call(null,G__22355,G__22356,G__22357,G__22358,G__22359,G__22360,G__22361,G__22362,G__22363,G__22364,G__22365,G__22366,G__22367));
}
} else {
var n4580 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579,n4580);
} else {
var G__22368 = a4567;
var G__22369 = b4568;
var G__22370 = c4569;
var G__22371 = d4570;
var G__22372 = e4571;
var G__22373 = f4572;
var G__22374 = g4573;
var G__22375 = h4574;
var G__22376 = i4575;
var G__22377 = j4576;
var G__22378 = k4577;
var G__22379 = l4578;
var G__22380 = m4579;
var G__22381 = n4580;
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__22368,G__22369,G__22370,G__22371,G__22372,G__22373,G__22374,G__22375,G__22376,G__22377,G__22378,G__22379,G__22380,G__22381) : f.call(null,G__22368,G__22369,G__22370,G__22371,G__22372,G__22373,G__22374,G__22375,G__22376,G__22377,G__22378,G__22379,G__22380,G__22381));
}
} else {
var o4581 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579,n4580,o4581);
} else {
var G__22382 = a4567;
var G__22383 = b4568;
var G__22384 = c4569;
var G__22385 = d4570;
var G__22386 = e4571;
var G__22387 = f4572;
var G__22388 = g4573;
var G__22389 = h4574;
var G__22390 = i4575;
var G__22391 = j4576;
var G__22392 = k4577;
var G__22393 = l4578;
var G__22394 = m4579;
var G__22395 = n4580;
var G__22396 = o4581;
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__22382,G__22383,G__22384,G__22385,G__22386,G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,G__22394,G__22395,G__22396) : f.call(null,G__22382,G__22383,G__22384,G__22385,G__22386,G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,G__22394,G__22395,G__22396));
}
} else {
var p4582 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579,n4580,o4581,p4582);
} else {
var G__22397 = a4567;
var G__22398 = b4568;
var G__22399 = c4569;
var G__22400 = d4570;
var G__22401 = e4571;
var G__22402 = f4572;
var G__22403 = g4573;
var G__22404 = h4574;
var G__22405 = i4575;
var G__22406 = j4576;
var G__22407 = k4577;
var G__22408 = l4578;
var G__22409 = m4579;
var G__22410 = n4580;
var G__22411 = o4581;
var G__22412 = p4582;
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__22397,G__22398,G__22399,G__22400,G__22401,G__22402,G__22403,G__22404,G__22405,G__22406,G__22407,G__22408,G__22409,G__22410,G__22411,G__22412) : f.call(null,G__22397,G__22398,G__22399,G__22400,G__22401,G__22402,G__22403,G__22404,G__22405,G__22406,G__22407,G__22408,G__22409,G__22410,G__22411,G__22412));
}
} else {
var q4583 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579,n4580,o4581,p4582,q4583);
} else {
var G__22413 = a4567;
var G__22414 = b4568;
var G__22415 = c4569;
var G__22416 = d4570;
var G__22417 = e4571;
var G__22418 = f4572;
var G__22419 = g4573;
var G__22420 = h4574;
var G__22421 = i4575;
var G__22422 = j4576;
var G__22423 = k4577;
var G__22424 = l4578;
var G__22425 = m4579;
var G__22426 = n4580;
var G__22427 = o4581;
var G__22428 = p4582;
var G__22429 = q4583;
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__22413,G__22414,G__22415,G__22416,G__22417,G__22418,G__22419,G__22420,G__22421,G__22422,G__22423,G__22424,G__22425,G__22426,G__22427,G__22428,G__22429) : f.call(null,G__22413,G__22414,G__22415,G__22416,G__22417,G__22418,G__22419,G__22420,G__22421,G__22422,G__22423,G__22424,G__22425,G__22426,G__22427,G__22428,G__22429));
}
} else {
var r4584 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579,n4580,o4581,p4582,q4583,r4584);
} else {
var G__22430 = a4567;
var G__22431 = b4568;
var G__22432 = c4569;
var G__22433 = d4570;
var G__22434 = e4571;
var G__22435 = f4572;
var G__22436 = g4573;
var G__22437 = h4574;
var G__22438 = i4575;
var G__22439 = j4576;
var G__22440 = k4577;
var G__22441 = l4578;
var G__22442 = m4579;
var G__22443 = n4580;
var G__22444 = o4581;
var G__22445 = p4582;
var G__22446 = q4583;
var G__22447 = r4584;
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__22430,G__22431,G__22432,G__22433,G__22434,G__22435,G__22436,G__22437,G__22438,G__22439,G__22440,G__22441,G__22442,G__22443,G__22444,G__22445,G__22446,G__22447) : f.call(null,G__22430,G__22431,G__22432,G__22433,G__22434,G__22435,G__22436,G__22437,G__22438,G__22439,G__22440,G__22441,G__22442,G__22443,G__22444,G__22445,G__22446,G__22447));
}
} else {
var s4585 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579,n4580,o4581,p4582,q4583,r4584,s4585);
} else {
var G__22448 = a4567;
var G__22449 = b4568;
var G__22450 = c4569;
var G__22451 = d4570;
var G__22452 = e4571;
var G__22453 = f4572;
var G__22454 = g4573;
var G__22455 = h4574;
var G__22456 = i4575;
var G__22457 = j4576;
var G__22458 = k4577;
var G__22459 = l4578;
var G__22460 = m4579;
var G__22461 = n4580;
var G__22462 = o4581;
var G__22463 = p4582;
var G__22464 = q4583;
var G__22465 = r4584;
var G__22466 = s4585;
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__22448,G__22449,G__22450,G__22451,G__22452,G__22453,G__22454,G__22455,G__22456,G__22457,G__22458,G__22459,G__22460,G__22461,G__22462,G__22463,G__22464,G__22465,G__22466) : f.call(null,G__22448,G__22449,G__22450,G__22451,G__22452,G__22453,G__22454,G__22455,G__22456,G__22457,G__22458,G__22459,G__22460,G__22461,G__22462,G__22463,G__22464,G__22465,G__22466));
}
} else {
var t4586 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4567,b4568,c4569,d4570,e4571,f4572,g4573,h4574,i4575,j4576,k4577,l4578,m4579,n4580,o4581,p4582,q4583,r4584,s4585,t4586);
} else {
var G__22467 = a4567;
var G__22468 = b4568;
var G__22469 = c4569;
var G__22470 = d4570;
var G__22471 = e4571;
var G__22472 = f4572;
var G__22473 = g4573;
var G__22474 = h4574;
var G__22475 = i4575;
var G__22476 = j4576;
var G__22477 = k4577;
var G__22478 = l4578;
var G__22479 = m4579;
var G__22480 = n4580;
var G__22481 = o4581;
var G__22482 = p4582;
var G__22483 = q4583;
var G__22484 = r4584;
var G__22485 = s4585;
var G__22486 = t4586;
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__22467,G__22468,G__22469,G__22470,G__22471,G__22472,G__22473,G__22474,G__22475,G__22476,G__22477,G__22478,G__22479,G__22480,G__22481,G__22482,G__22483,G__22484,G__22485,G__22486) : f.call(null,G__22467,G__22468,G__22469,G__22470,G__22471,G__22472,G__22473,G__22474,G__22475,G__22476,G__22477,G__22478,G__22479,G__22480,G__22481,G__22482,G__22483,G__22484,G__22485,G__22486));
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__22487__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__22487 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__22487__delegate.call(this,f,a,b,c,d,args);};
G__22487.cljs$lang$maxFixedArity = 5;
G__22487.cljs$lang$applyTo = (function (arglist__22488){
var f = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var a = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var b = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var c = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var d = cljs.core.first(arglist__22488);
var args = cljs.core.rest(arglist__22488);
return G__22487__delegate(f,a,b,c,d,args);
});
G__22487.cljs$core$IFn$_invoke$arity$variadic = G__22487__delegate;
return G__22487;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){
return cljs.core.with_meta(obj,(function (){var G__22504 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22504) : f.call(null,G__22504));
})());
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__22505 = cljs.core.meta(obj);
var G__22506 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22505,G__22506) : f.call(null,G__22505,G__22506));
})());
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__22507 = cljs.core.meta(obj);
var G__22508 = a;
var G__22509 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22507,G__22508,G__22509) : f.call(null,G__22507,G__22508,G__22509));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__22510 = cljs.core.meta(obj);
var G__22511 = a;
var G__22512 = b;
var G__22513 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22510,G__22511,G__22512,G__22513) : f.call(null,G__22510,G__22511,G__22512,G__22513));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__22514 = cljs.core.meta(obj);
var G__22515 = a;
var G__22516 = b;
var G__22517 = c;
var G__22518 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__22514,G__22515,G__22516,G__22517,G__22518) : f.call(null,G__22514,G__22515,G__22516,G__22517,G__22518));
})());
});
var vary_meta__7 = (function() { 
var G__22519__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__22519 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__22519__delegate.call(this,obj,f,a,b,c,d,args);};
G__22519.cljs$lang$maxFixedArity = 6;
G__22519.cljs$lang$applyTo = (function (arglist__22520){
var obj = cljs.core.first(arglist__22520);
arglist__22520 = cljs.core.next(arglist__22520);
var f = cljs.core.first(arglist__22520);
arglist__22520 = cljs.core.next(arglist__22520);
var a = cljs.core.first(arglist__22520);
arglist__22520 = cljs.core.next(arglist__22520);
var b = cljs.core.first(arglist__22520);
arglist__22520 = cljs.core.next(arglist__22520);
var c = cljs.core.first(arglist__22520);
arglist__22520 = cljs.core.next(arglist__22520);
var d = cljs.core.first(arglist__22520);
var args = cljs.core.rest(arglist__22520);
return G__22519__delegate(obj,f,a,b,c,d,args);
});
G__22519.cljs$core$IFn$_invoke$arity$variadic = G__22519__delegate;
return G__22519;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__22521__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__22521 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__22521__delegate.call(this,x,y,more);};
G__22521.cljs$lang$maxFixedArity = 2;
G__22521.cljs$lang$applyTo = (function (arglist__22522){
var x = cljs.core.first(arglist__22522);
arglist__22522 = cljs.core.next(arglist__22522);
var y = cljs.core.first(arglist__22522);
var more = cljs.core.rest(arglist__22522);
return G__22521__delegate(x,y,more);
});
G__22521.cljs$core$IFn$_invoke$arity$variadic = G__22521__delegate;
return G__22521;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function nil_iter(){
if(typeof cljs.core.t22526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t22526 = (function (nil_iter,meta22527){
this.nil_iter = nil_iter;
this.meta22527 = meta22527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t22526.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t22526.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t22526.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t22526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22528){
var self__ = this;
var _22528__$1 = this;
return self__.meta22527;
});

cljs.core.t22526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22528,meta22527__$1){
var self__ = this;
var _22528__$1 = this;
return (new cljs.core.t22526(self__.nil_iter,meta22527__$1));
});

cljs.core.t22526.cljs$lang$type = true;

cljs.core.t22526.cljs$lang$ctorStr = "cljs.core/t22526";

cljs.core.t22526.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/t22526");
});

cljs.core.__GT_t22526 = (function __GT_t22526(nil_iter__$1,meta22527){
return (new cljs.core.t22526(nil_iter__$1,meta22527));
});

}

return (new cljs.core.t22526(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,54,cljs.core.constant$keyword$9,3007,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,3003,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq(self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next(self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not(this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first(self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){
if((coll == null)){
return cljs.core.nil_iter();
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter(coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter(coll);
} else {
if(cljs.core.iterable_QMARK_(coll)){
return cljs.core._iterator(coll);
} else {
if(cljs.core.seqable_QMARK_(coll)){
return cljs.core.seq_iter(coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3624__auto__ = !((lt.stepper == null));
if(and__3624__auto__){
return self__.iter.hasNext();
} else {
return and__3624__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__22529 = lt;
var G__22530 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__22529,G__22530) : self__.xform.call(null,G__22529,G__22530));
})())){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__22531 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__22531) : self__.xform.call(null,G__22531));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function stepper(xform,iter){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return result;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__22533 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__22533) : xform.call(null,G__22533));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq(self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first(iters__$1);
if(cljs.core.not(iter.hasNext())){
return false;
} else {
var G__22535 = cljs.core.next(iters__$1);
iters__$1 = G__22535;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__4523__auto___22536 = self__.iters.length;
var i_22537 = (0);
while(true){
if((i_22537 < n__4523__auto___22536)){
(self__.nexts[i_22537] = (self__.iters[i_22537]).next());

var G__22538 = (i_22537 + (1));
i_22537 = G__22538;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3624__auto__ = !((lt.stepper == null));
if(and__3624__auto__){
return this$.hasNext();
} else {
return and__3624__auto__;
}
})())){
if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__22534 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__22534) : self__.xform.call(null,G__22534));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){
return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return lt;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__22543 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__22543) : xform.call(null,G__22543));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq(self__.rest);
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll(this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq(this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential(this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,cljs.core._seq(this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__22544_22548 = cljs.core.seq(colls);
var chunk__22545_22549 = null;
var count__22546_22550 = (0);
var i__22547_22551 = (0);
while(true){
if((i__22547_22551 < count__22546_22550)){
var coll_22552 = chunk__22545_22549.cljs$core$IIndexed$_nth$arity$2(null,i__22547_22551);
iters.push(cljs.core.iter(coll_22552));

var G__22553 = seq__22544_22548;
var G__22554 = chunk__22545_22549;
var G__22555 = count__22546_22550;
var G__22556 = (i__22547_22551 + (1));
seq__22544_22548 = G__22553;
chunk__22545_22549 = G__22554;
count__22546_22550 = G__22555;
i__22547_22551 = G__22556;
continue;
} else {
var temp__4126__auto___22557 = cljs.core.seq(seq__22544_22548);
if(temp__4126__auto___22557){
var seq__22544_22558__$1 = temp__4126__auto___22557;
if(cljs.core.chunked_seq_QMARK_(seq__22544_22558__$1)){
var c__4423__auto___22559 = cljs.core.chunk_first(seq__22544_22558__$1);
var G__22560 = cljs.core.chunk_rest(seq__22544_22558__$1);
var G__22561 = c__4423__auto___22559;
var G__22562 = cljs.core.count(c__4423__auto___22559);
var G__22563 = (0);
seq__22544_22548 = G__22560;
chunk__22545_22549 = G__22561;
count__22546_22550 = G__22562;
i__22547_22551 = G__22563;
continue;
} else {
var coll_22564 = cljs.core.first(seq__22544_22558__$1);
iters.push(cljs.core.iter(coll_22564));

var G__22565 = cljs.core.next(seq__22544_22558__$1);
var G__22566 = null;
var G__22567 = (0);
var G__22568 = (0);
seq__22544_22548 = G__22565;
chunk__22545_22549 = G__22566;
count__22546_22550 = G__22567;
i__22547_22551 = G__22568;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3636__auto__ = cljs.core.seq(coll);
if(or__3636__auto__){
return or__3636__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__22569__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__22569 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__22569__delegate.call(this,xform,coll,colls);};
G__22569.cljs$lang$maxFixedArity = 2;
G__22569.cljs$lang$applyTo = (function (arglist__22570){
var xform = cljs.core.first(arglist__22570);
arglist__22570 = cljs.core.next(arglist__22570);
var coll = cljs.core.first(arglist__22570);
var colls = cljs.core.rest(arglist__22570);
return G__22569__delegate(xform,coll,colls);
});
G__22569.cljs$core$IFn$_invoke$arity$variadic = G__22569__delegate;
return G__22569;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null)){
return true;
} else {
if(cljs.core.truth_((function (){var G__22572 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22572) : pred.call(null,G__22572));
})())){
var G__22573 = pred;
var G__22574 = cljs.core.next(coll);
pred = G__22573;
coll = G__22574;
continue;
} else {
return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll)){
var or__3636__auto__ = (function (){var G__22578 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22578) : pred.call(null,G__22578));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var G__22579 = pred;
var G__22580 = cljs.core.next(coll);
pred = G__22579;
coll = G__22580;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__22587 = null;
var G__22587__0 = (function (){
return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__22587__1 = (function (x){
return cljs.core.not((function (){var G__22584 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22584) : f.call(null,G__22584));
})());
});
var G__22587__2 = (function (x,y){
return cljs.core.not((function (){var G__22585 = x;
var G__22586 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22585,G__22586) : f.call(null,G__22585,G__22586));
})());
});
var G__22587__3 = (function() { 
var G__22588__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__22588 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__22588__delegate.call(this,x,y,zs);};
G__22588.cljs$lang$maxFixedArity = 2;
G__22588.cljs$lang$applyTo = (function (arglist__22589){
var x = cljs.core.first(arglist__22589);
arglist__22589 = cljs.core.next(arglist__22589);
var y = cljs.core.first(arglist__22589);
var zs = cljs.core.rest(arglist__22589);
return G__22588__delegate(x,y,zs);
});
G__22588.cljs$core$IFn$_invoke$arity$variadic = G__22588__delegate;
return G__22588;
})()
;
G__22587 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__22587__0.call(this);
case 1:
return G__22587__1.call(this,x);
case 2:
return G__22587__2.call(this,x,y);
default:
return G__22587__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22587.cljs$lang$maxFixedArity = 2;
G__22587.cljs$lang$applyTo = G__22587__3.cljs$lang$applyTo;
G__22587.cljs$core$IFn$_invoke$arity$0 = G__22587__0;
G__22587.cljs$core$IFn$_invoke$arity$1 = G__22587__1;
G__22587.cljs$core$IFn$_invoke$arity$2 = G__22587__2;
G__22587.cljs$core$IFn$_invoke$arity$variadic = G__22587__3.cljs$core$IFn$_invoke$arity$variadic;
return G__22587;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__22590__delegate = function (args){
return x;
};
var G__22590 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22590__delegate.call(this,args);};
G__22590.cljs$lang$maxFixedArity = 0;
G__22590.cljs$lang$applyTo = (function (arglist__22591){
var args = cljs.core.seq(arglist__22591);
return G__22590__delegate(args);
});
G__22590.cljs$core$IFn$_invoke$arity$variadic = G__22590__delegate;
return G__22590;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__22646 = null;
var G__22646__0 = (function (){
var G__22619 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22619) : f.call(null,G__22619));
});
var G__22646__1 = (function (x){
var G__22620 = (function (){var G__22621 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22621) : g.call(null,G__22621));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22620) : f.call(null,G__22620));
});
var G__22646__2 = (function (x,y){
var G__22622 = (function (){var G__22623 = x;
var G__22624 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__22623,G__22624) : g.call(null,G__22623,G__22624));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22622) : f.call(null,G__22622));
});
var G__22646__3 = (function (x,y,z){
var G__22625 = (function (){var G__22626 = x;
var G__22627 = y;
var G__22628 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__22626,G__22627,G__22628) : g.call(null,G__22626,G__22627,G__22628));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22625) : f.call(null,G__22625));
});
var G__22646__4 = (function() { 
var G__22647__delegate = function (x,y,z,args){
var G__22629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22629) : f.call(null,G__22629));
};
var G__22647 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22647__delegate.call(this,x,y,z,args);};
G__22647.cljs$lang$maxFixedArity = 3;
G__22647.cljs$lang$applyTo = (function (arglist__22648){
var x = cljs.core.first(arglist__22648);
arglist__22648 = cljs.core.next(arglist__22648);
var y = cljs.core.first(arglist__22648);
arglist__22648 = cljs.core.next(arglist__22648);
var z = cljs.core.first(arglist__22648);
var args = cljs.core.rest(arglist__22648);
return G__22647__delegate(x,y,z,args);
});
G__22647.cljs$core$IFn$_invoke$arity$variadic = G__22647__delegate;
return G__22647;
})()
;
G__22646 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__22646__0.call(this);
case 1:
return G__22646__1.call(this,x);
case 2:
return G__22646__2.call(this,x,y);
case 3:
return G__22646__3.call(this,x,y,z);
default:
return G__22646__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22646.cljs$lang$maxFixedArity = 3;
G__22646.cljs$lang$applyTo = G__22646__4.cljs$lang$applyTo;
G__22646.cljs$core$IFn$_invoke$arity$0 = G__22646__0;
G__22646.cljs$core$IFn$_invoke$arity$1 = G__22646__1;
G__22646.cljs$core$IFn$_invoke$arity$2 = G__22646__2;
G__22646.cljs$core$IFn$_invoke$arity$3 = G__22646__3;
G__22646.cljs$core$IFn$_invoke$arity$variadic = G__22646__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22646;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__22649 = null;
var G__22649__0 = (function (){
var G__22630 = (function (){var G__22631 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22631) : g.call(null,G__22631));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22630) : f.call(null,G__22630));
});
var G__22649__1 = (function (x){
var G__22632 = (function (){var G__22633 = (function (){var G__22634 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__22634) : h.call(null,G__22634));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22633) : g.call(null,G__22633));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22632) : f.call(null,G__22632));
});
var G__22649__2 = (function (x,y){
var G__22635 = (function (){var G__22636 = (function (){var G__22637 = x;
var G__22638 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__22637,G__22638) : h.call(null,G__22637,G__22638));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22636) : g.call(null,G__22636));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22635) : f.call(null,G__22635));
});
var G__22649__3 = (function (x,y,z){
var G__22639 = (function (){var G__22640 = (function (){var G__22641 = x;
var G__22642 = y;
var G__22643 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__22641,G__22642,G__22643) : h.call(null,G__22641,G__22642,G__22643));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22640) : g.call(null,G__22640));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22639) : f.call(null,G__22639));
});
var G__22649__4 = (function() { 
var G__22650__delegate = function (x,y,z,args){
var G__22644 = (function (){var G__22645 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__22645) : g.call(null,G__22645));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22644) : f.call(null,G__22644));
};
var G__22650 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22650__delegate.call(this,x,y,z,args);};
G__22650.cljs$lang$maxFixedArity = 3;
G__22650.cljs$lang$applyTo = (function (arglist__22651){
var x = cljs.core.first(arglist__22651);
arglist__22651 = cljs.core.next(arglist__22651);
var y = cljs.core.first(arglist__22651);
arglist__22651 = cljs.core.next(arglist__22651);
var z = cljs.core.first(arglist__22651);
var args = cljs.core.rest(arglist__22651);
return G__22650__delegate(x,y,z,args);
});
G__22650.cljs$core$IFn$_invoke$arity$variadic = G__22650__delegate;
return G__22650;
})()
;
G__22649 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__22649__0.call(this);
case 1:
return G__22649__1.call(this,x);
case 2:
return G__22649__2.call(this,x,y);
case 3:
return G__22649__3.call(this,x,y,z);
default:
return G__22649__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22649.cljs$lang$maxFixedArity = 3;
G__22649.cljs$lang$applyTo = G__22649__4.cljs$lang$applyTo;
G__22649.cljs$core$IFn$_invoke$arity$0 = G__22649__0;
G__22649.cljs$core$IFn$_invoke$arity$1 = G__22649__1;
G__22649.cljs$core$IFn$_invoke$arity$2 = G__22649__2;
G__22649.cljs$core$IFn$_invoke$arity$3 = G__22649__3;
G__22649.cljs$core$IFn$_invoke$arity$variadic = G__22649__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22649;
})()
});
var comp__4 = (function() { 
var G__22652__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__22653__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__22654 = cljs.core.first(fs__$2).call(null,ret);
var G__22655 = cljs.core.next(fs__$2);
ret = G__22654;
fs__$2 = G__22655;
continue;
} else {
return ret;
}
break;
}
};
var G__22653 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22653__delegate.call(this,args);};
G__22653.cljs$lang$maxFixedArity = 0;
G__22653.cljs$lang$applyTo = (function (arglist__22656){
var args = cljs.core.seq(arglist__22656);
return G__22653__delegate(args);
});
G__22653.cljs$core$IFn$_invoke$arity$variadic = G__22653__delegate;
return G__22653;
})()
;
;})(fs__$1))
};
var G__22652 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22652__delegate.call(this,f1,f2,f3,fs);};
G__22652.cljs$lang$maxFixedArity = 3;
G__22652.cljs$lang$applyTo = (function (arglist__22657){
var f1 = cljs.core.first(arglist__22657);
arglist__22657 = cljs.core.next(arglist__22657);
var f2 = cljs.core.first(arglist__22657);
arglist__22657 = cljs.core.next(arglist__22657);
var f3 = cljs.core.first(arglist__22657);
var fs = cljs.core.rest(arglist__22657);
return G__22652__delegate(f1,f2,f3,fs);
});
G__22652.cljs$core$IFn$_invoke$arity$variadic = G__22652__delegate;
return G__22652;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){
return f;
});
var partial__2 = (function (f,arg1){
return (function() {
var G__22742 = null;
var G__22742__0 = (function (){
var G__22700 = arg1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22700) : f.call(null,G__22700));
});
var G__22742__1 = (function (x){
var G__22701 = arg1;
var G__22702 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22701,G__22702) : f.call(null,G__22701,G__22702));
});
var G__22742__2 = (function (x,y){
var G__22703 = arg1;
var G__22704 = x;
var G__22705 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22703,G__22704,G__22705) : f.call(null,G__22703,G__22704,G__22705));
});
var G__22742__3 = (function (x,y,z){
var G__22706 = arg1;
var G__22707 = x;
var G__22708 = y;
var G__22709 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22706,G__22707,G__22708,G__22709) : f.call(null,G__22706,G__22707,G__22708,G__22709));
});
var G__22742__4 = (function() { 
var G__22743__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,x,y,z,cljs.core.array_seq([args], 0));
};
var G__22743 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22743__delegate.call(this,x,y,z,args);};
G__22743.cljs$lang$maxFixedArity = 3;
G__22743.cljs$lang$applyTo = (function (arglist__22744){
var x = cljs.core.first(arglist__22744);
arglist__22744 = cljs.core.next(arglist__22744);
var y = cljs.core.first(arglist__22744);
arglist__22744 = cljs.core.next(arglist__22744);
var z = cljs.core.first(arglist__22744);
var args = cljs.core.rest(arglist__22744);
return G__22743__delegate(x,y,z,args);
});
G__22743.cljs$core$IFn$_invoke$arity$variadic = G__22743__delegate;
return G__22743;
})()
;
G__22742 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__22742__0.call(this);
case 1:
return G__22742__1.call(this,x);
case 2:
return G__22742__2.call(this,x,y);
case 3:
return G__22742__3.call(this,x,y,z);
default:
return G__22742__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22742.cljs$lang$maxFixedArity = 3;
G__22742.cljs$lang$applyTo = G__22742__4.cljs$lang$applyTo;
G__22742.cljs$core$IFn$_invoke$arity$0 = G__22742__0;
G__22742.cljs$core$IFn$_invoke$arity$1 = G__22742__1;
G__22742.cljs$core$IFn$_invoke$arity$2 = G__22742__2;
G__22742.cljs$core$IFn$_invoke$arity$3 = G__22742__3;
G__22742.cljs$core$IFn$_invoke$arity$variadic = G__22742__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22742;
})()
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__22745 = null;
var G__22745__0 = (function (){
var G__22710 = arg1;
var G__22711 = arg2;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22710,G__22711) : f.call(null,G__22710,G__22711));
});
var G__22745__1 = (function (x){
var G__22712 = arg1;
var G__22713 = arg2;
var G__22714 = x;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22712,G__22713,G__22714) : f.call(null,G__22712,G__22713,G__22714));
});
var G__22745__2 = (function (x,y){
var G__22715 = arg1;
var G__22716 = arg2;
var G__22717 = x;
var G__22718 = y;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22715,G__22716,G__22717,G__22718) : f.call(null,G__22715,G__22716,G__22717,G__22718));
});
var G__22745__3 = (function (x,y,z){
var G__22719 = arg1;
var G__22720 = arg2;
var G__22721 = x;
var G__22722 = y;
var G__22723 = z;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__22719,G__22720,G__22721,G__22722,G__22723) : f.call(null,G__22719,G__22720,G__22721,G__22722,G__22723));
});
var G__22745__4 = (function() { 
var G__22746__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,x,y,cljs.core.array_seq([z,args], 0));
};
var G__22746 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22746__delegate.call(this,x,y,z,args);};
G__22746.cljs$lang$maxFixedArity = 3;
G__22746.cljs$lang$applyTo = (function (arglist__22747){
var x = cljs.core.first(arglist__22747);
arglist__22747 = cljs.core.next(arglist__22747);
var y = cljs.core.first(arglist__22747);
arglist__22747 = cljs.core.next(arglist__22747);
var z = cljs.core.first(arglist__22747);
var args = cljs.core.rest(arglist__22747);
return G__22746__delegate(x,y,z,args);
});
G__22746.cljs$core$IFn$_invoke$arity$variadic = G__22746__delegate;
return G__22746;
})()
;
G__22745 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__22745__0.call(this);
case 1:
return G__22745__1.call(this,x);
case 2:
return G__22745__2.call(this,x,y);
case 3:
return G__22745__3.call(this,x,y,z);
default:
return G__22745__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22745.cljs$lang$maxFixedArity = 3;
G__22745.cljs$lang$applyTo = G__22745__4.cljs$lang$applyTo;
G__22745.cljs$core$IFn$_invoke$arity$0 = G__22745__0;
G__22745.cljs$core$IFn$_invoke$arity$1 = G__22745__1;
G__22745.cljs$core$IFn$_invoke$arity$2 = G__22745__2;
G__22745.cljs$core$IFn$_invoke$arity$3 = G__22745__3;
G__22745.cljs$core$IFn$_invoke$arity$variadic = G__22745__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22745;
})()
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__22748 = null;
var G__22748__0 = (function (){
var G__22724 = arg1;
var G__22725 = arg2;
var G__22726 = arg3;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22724,G__22725,G__22726) : f.call(null,G__22724,G__22725,G__22726));
});
var G__22748__1 = (function (x){
var G__22727 = arg1;
var G__22728 = arg2;
var G__22729 = arg3;
var G__22730 = x;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22727,G__22728,G__22729,G__22730) : f.call(null,G__22727,G__22728,G__22729,G__22730));
});
var G__22748__2 = (function (x,y){
var G__22731 = arg1;
var G__22732 = arg2;
var G__22733 = arg3;
var G__22734 = x;
var G__22735 = y;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__22731,G__22732,G__22733,G__22734,G__22735) : f.call(null,G__22731,G__22732,G__22733,G__22734,G__22735));
});
var G__22748__3 = (function (x,y,z){
var G__22736 = arg1;
var G__22737 = arg2;
var G__22738 = arg3;
var G__22739 = x;
var G__22740 = y;
var G__22741 = z;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__22736,G__22737,G__22738,G__22739,G__22740,G__22741) : f.call(null,G__22736,G__22737,G__22738,G__22739,G__22740,G__22741));
});
var G__22748__4 = (function() { 
var G__22749__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3,x,cljs.core.array_seq([y,z,args], 0));
};
var G__22749 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22749__delegate.call(this,x,y,z,args);};
G__22749.cljs$lang$maxFixedArity = 3;
G__22749.cljs$lang$applyTo = (function (arglist__22750){
var x = cljs.core.first(arglist__22750);
arglist__22750 = cljs.core.next(arglist__22750);
var y = cljs.core.first(arglist__22750);
arglist__22750 = cljs.core.next(arglist__22750);
var z = cljs.core.first(arglist__22750);
var args = cljs.core.rest(arglist__22750);
return G__22749__delegate(x,y,z,args);
});
G__22749.cljs$core$IFn$_invoke$arity$variadic = G__22749__delegate;
return G__22749;
})()
;
G__22748 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__22748__0.call(this);
case 1:
return G__22748__1.call(this,x);
case 2:
return G__22748__2.call(this,x,y);
case 3:
return G__22748__3.call(this,x,y,z);
default:
return G__22748__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22748.cljs$lang$maxFixedArity = 3;
G__22748.cljs$lang$applyTo = G__22748__4.cljs$lang$applyTo;
G__22748.cljs$core$IFn$_invoke$arity$0 = G__22748__0;
G__22748.cljs$core$IFn$_invoke$arity$1 = G__22748__1;
G__22748.cljs$core$IFn$_invoke$arity$2 = G__22748__2;
G__22748.cljs$core$IFn$_invoke$arity$3 = G__22748__3;
G__22748.cljs$core$IFn$_invoke$arity$variadic = G__22748__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22748;
})()
});
var partial__5 = (function() { 
var G__22751__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__22752__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__22752 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22752__delegate.call(this,args);};
G__22752.cljs$lang$maxFixedArity = 0;
G__22752.cljs$lang$applyTo = (function (arglist__22753){
var args = cljs.core.seq(arglist__22753);
return G__22752__delegate(args);
});
G__22752.cljs$core$IFn$_invoke$arity$variadic = G__22752__delegate;
return G__22752;
})()
;
};
var G__22751 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__22751__delegate.call(this,f,arg1,arg2,arg3,more);};
G__22751.cljs$lang$maxFixedArity = 4;
G__22751.cljs$lang$applyTo = (function (arglist__22754){
var f = cljs.core.first(arglist__22754);
arglist__22754 = cljs.core.next(arglist__22754);
var arg1 = cljs.core.first(arglist__22754);
arglist__22754 = cljs.core.next(arglist__22754);
var arg2 = cljs.core.first(arglist__22754);
arglist__22754 = cljs.core.next(arglist__22754);
var arg3 = cljs.core.first(arglist__22754);
var more = cljs.core.rest(arglist__22754);
return G__22751__delegate(f,arg1,arg2,arg3,more);
});
G__22751.cljs$core$IFn$_invoke$arity$variadic = G__22751__delegate;
return G__22751;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__22787 = null;
var G__22787__1 = (function (a){
var G__22771 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22771) : f.call(null,G__22771));
});
var G__22787__2 = (function (a,b){
var G__22772 = (((a == null))?x:a);
var G__22773 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22772,G__22773) : f.call(null,G__22772,G__22773));
});
var G__22787__3 = (function (a,b,c){
var G__22774 = (((a == null))?x:a);
var G__22775 = b;
var G__22776 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22774,G__22775,G__22776) : f.call(null,G__22774,G__22775,G__22776));
});
var G__22787__4 = (function() { 
var G__22788__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__22788 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22788__delegate.call(this,a,b,c,ds);};
G__22788.cljs$lang$maxFixedArity = 3;
G__22788.cljs$lang$applyTo = (function (arglist__22789){
var a = cljs.core.first(arglist__22789);
arglist__22789 = cljs.core.next(arglist__22789);
var b = cljs.core.first(arglist__22789);
arglist__22789 = cljs.core.next(arglist__22789);
var c = cljs.core.first(arglist__22789);
var ds = cljs.core.rest(arglist__22789);
return G__22788__delegate(a,b,c,ds);
});
G__22788.cljs$core$IFn$_invoke$arity$variadic = G__22788__delegate;
return G__22788;
})()
;
G__22787 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__22787__1.call(this,a);
case 2:
return G__22787__2.call(this,a,b);
case 3:
return G__22787__3.call(this,a,b,c);
default:
return G__22787__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22787.cljs$lang$maxFixedArity = 3;
G__22787.cljs$lang$applyTo = G__22787__4.cljs$lang$applyTo;
G__22787.cljs$core$IFn$_invoke$arity$1 = G__22787__1;
G__22787.cljs$core$IFn$_invoke$arity$2 = G__22787__2;
G__22787.cljs$core$IFn$_invoke$arity$3 = G__22787__3;
G__22787.cljs$core$IFn$_invoke$arity$variadic = G__22787__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22787;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__22790 = null;
var G__22790__2 = (function (a,b){
var G__22777 = (((a == null))?x:a);
var G__22778 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22777,G__22778) : f.call(null,G__22777,G__22778));
});
var G__22790__3 = (function (a,b,c){
var G__22779 = (((a == null))?x:a);
var G__22780 = (((b == null))?y:b);
var G__22781 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22779,G__22780,G__22781) : f.call(null,G__22779,G__22780,G__22781));
});
var G__22790__4 = (function() { 
var G__22791__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__22791 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22791__delegate.call(this,a,b,c,ds);};
G__22791.cljs$lang$maxFixedArity = 3;
G__22791.cljs$lang$applyTo = (function (arglist__22792){
var a = cljs.core.first(arglist__22792);
arglist__22792 = cljs.core.next(arglist__22792);
var b = cljs.core.first(arglist__22792);
arglist__22792 = cljs.core.next(arglist__22792);
var c = cljs.core.first(arglist__22792);
var ds = cljs.core.rest(arglist__22792);
return G__22791__delegate(a,b,c,ds);
});
G__22791.cljs$core$IFn$_invoke$arity$variadic = G__22791__delegate;
return G__22791;
})()
;
G__22790 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__22790__2.call(this,a,b);
case 3:
return G__22790__3.call(this,a,b,c);
default:
return G__22790__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22790.cljs$lang$maxFixedArity = 3;
G__22790.cljs$lang$applyTo = G__22790__4.cljs$lang$applyTo;
G__22790.cljs$core$IFn$_invoke$arity$2 = G__22790__2;
G__22790.cljs$core$IFn$_invoke$arity$3 = G__22790__3;
G__22790.cljs$core$IFn$_invoke$arity$variadic = G__22790__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22790;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__22793 = null;
var G__22793__2 = (function (a,b){
var G__22782 = (((a == null))?x:a);
var G__22783 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22782,G__22783) : f.call(null,G__22782,G__22783));
});
var G__22793__3 = (function (a,b,c){
var G__22784 = (((a == null))?x:a);
var G__22785 = (((b == null))?y:b);
var G__22786 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22784,G__22785,G__22786) : f.call(null,G__22784,G__22785,G__22786));
});
var G__22793__4 = (function() { 
var G__22794__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__22794 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__22794__delegate.call(this,a,b,c,ds);};
G__22794.cljs$lang$maxFixedArity = 3;
G__22794.cljs$lang$applyTo = (function (arglist__22795){
var a = cljs.core.first(arglist__22795);
arglist__22795 = cljs.core.next(arglist__22795);
var b = cljs.core.first(arglist__22795);
arglist__22795 = cljs.core.next(arglist__22795);
var c = cljs.core.first(arglist__22795);
var ds = cljs.core.rest(arglist__22795);
return G__22794__delegate(a,b,c,ds);
});
G__22794.cljs$core$IFn$_invoke$arity$variadic = G__22794__delegate;
return G__22794;
})()
;
G__22793 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__22793__2.call(this,a,b);
case 3:
return G__22793__3.call(this,a,b,c);
default:
return G__22793__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22793.cljs$lang$maxFixedArity = 3;
G__22793.cljs$lang$applyTo = G__22793__4.cljs$lang$applyTo;
G__22793.cljs$core$IFn$_invoke$arity$2 = G__22793__2;
G__22793.cljs$core$IFn$_invoke$arity$3 = G__22793__3;
G__22793.cljs$core$IFn$_invoke$arity$variadic = G__22793__4.cljs$core$IFn$_invoke$arity$variadic;
return G__22793;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4523__auto___22844 = size;
var i_22845 = (0);
while(true){
if((i_22845 < n__4523__auto___22844)){
cljs.core.chunk_append(b,(function (){var G__22840 = (idx + i_22845);
var G__22841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_22845);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22840,G__22841) : f.call(null,G__22840,G__22841));
})());

var G__22846 = (i_22845 + (1));
i_22845 = G__22846;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__22842 = idx;
var G__22843 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22842,G__22843) : f.call(null,G__22842,G__22843));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){
return (function (rf){
return (function() {
var G__22865 = null;
var G__22865__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__22865__1 = (function (result){
var G__22859 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__22859) : rf.call(null,G__22859));
});
var G__22865__2 = (function (result,input){
var v = (function (){var G__22860 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22860) : f.call(null,G__22860));
})();
if((v == null)){
return result;
} else {
var G__22861 = result;
var G__22862 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__22861,G__22862) : rf.call(null,G__22861,G__22862));
}
});
G__22865 = function(result,input){
switch(arguments.length){
case 0:
return G__22865__0.call(this);
case 1:
return G__22865__1.call(this,result);
case 2:
return G__22865__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22865.cljs$core$IFn$_invoke$arity$0 = G__22865__0;
G__22865.cljs$core$IFn$_invoke$arity$1 = G__22865__1;
G__22865.cljs$core$IFn$_invoke$arity$2 = G__22865__2;
return G__22865;
})()
});
});
var keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4523__auto___22866 = size;
var i_22867 = (0);
while(true){
if((i_22867 < n__4523__auto___22866)){
var x_22868 = (function (){var G__22863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_22867);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22863) : f.call(null,G__22863));
})();
if((x_22868 == null)){
} else {
cljs.core.chunk_append(b,x_22868);
}

var G__22869 = (i_22867 + (1));
i_22867 = G__22869;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__22864 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22864) : f.call(null,G__22864));
})();
if((x == null)){
return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else {
return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__22870 = this$__$1;
return goog.getUid(G__22870);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__22871 = cljs.core.seq(self__.watches);
var chunk__22872 = null;
var count__22873 = (0);
var i__22874 = (0);
while(true){
if((i__22874 < count__22873)){
var vec__22875 = chunk__22872.cljs$core$IIndexed$_nth$arity$2(null,i__22874);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(1),null);
var G__22876_22885 = key;
var G__22877_22886 = this$__$1;
var G__22878_22887 = oldval;
var G__22879_22888 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22876_22885,G__22877_22886,G__22878_22887,G__22879_22888) : f.call(null,G__22876_22885,G__22877_22886,G__22878_22887,G__22879_22888));

var G__22889 = seq__22871;
var G__22890 = chunk__22872;
var G__22891 = count__22873;
var G__22892 = (i__22874 + (1));
seq__22871 = G__22889;
chunk__22872 = G__22890;
count__22873 = G__22891;
i__22874 = G__22892;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__22871);
if(temp__4126__auto__){
var seq__22871__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22871__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__22871__$1);
var G__22893 = cljs.core.chunk_rest(seq__22871__$1);
var G__22894 = c__4423__auto__;
var G__22895 = cljs.core.count(c__4423__auto__);
var G__22896 = (0);
seq__22871 = G__22893;
chunk__22872 = G__22894;
count__22873 = G__22895;
i__22874 = G__22896;
continue;
} else {
var vec__22880 = cljs.core.first(seq__22871__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880,(1),null);
var G__22881_22897 = key;
var G__22882_22898 = this$__$1;
var G__22883_22899 = oldval;
var G__22884_22900 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__22881_22897,G__22882_22898,G__22883_22899,G__22884_22900) : f.call(null,G__22881_22897,G__22882_22898,G__22883_22899,G__22884_22900));

var G__22901 = cljs.core.next(seq__22871__$1);
var G__22902 = null;
var G__22903 = (0);
var G__22904 = (0);
seq__22871 = G__22901;
chunk__22872 = G__22902;
count__22873 = G__22903;
i__22874 = G__22904;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__22908__delegate = function (x,p__22905){
var map__22907 = p__22905;
var map__22907__$1 = ((cljs.core.seq_QMARK_(map__22907))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22907):map__22907);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22907__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22907__$1,cljs.core.constant$keyword$3);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__22908 = function (x,var_args){
var p__22905 = null;
if (arguments.length > 1) {
  p__22905 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__22908__delegate.call(this,x,p__22905);};
G__22908.cljs$lang$maxFixedArity = 1;
G__22908.cljs$lang$applyTo = (function (arglist__22909){
var x = cljs.core.first(arglist__22909);
var p__22905 = cljs.core.rest(arglist__22909);
return G__22908__delegate(x,p__22905);
});
G__22908.cljs$core$IFn$_invoke$arity$variadic = G__22908__delegate;
return G__22908;
})()
;
atom = function(x,var_args){
var p__22905 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_((function (){var G__22912 = new_value;
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__22912) : validate.call(null,G__22912));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__22913 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__22913) : cljs.core.pr_str.call(null,G__22913));
})())].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches(a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__22920 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22920) : f.call(null,G__22920));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__22921 = a.state;
var G__22922 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22921,G__22922) : f.call(null,G__22921,G__22922));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__22923 = a.state;
var G__22924 = x;
var G__22925 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22923,G__22924,G__22925) : f.call(null,G__22923,G__22924,G__22925));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__22926__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__22926 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__22926__delegate.call(this,a,f,x,y,more);};
G__22926.cljs$lang$maxFixedArity = 4;
G__22926.cljs$lang$applyTo = (function (arglist__22927){
var a = cljs.core.first(arglist__22927);
arglist__22927 = cljs.core.next(arglist__22927);
var f = cljs.core.first(arglist__22927);
arglist__22927 = cljs.core.next(arglist__22927);
var x = cljs.core.first(arglist__22927);
arglist__22927 = cljs.core.next(arglist__22927);
var y = cljs.core.first(arglist__22927);
var more = cljs.core.rest(arglist__22927);
return G__22926__delegate(a,f,x,y,more);
});
G__22926.cljs$core$IFn$_invoke$arity$variadic = G__22926__delegate;
return G__22926;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval)){
cljs.core.reset_BANG_(a,newval);

return true;
} else {
return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});

/**
* @constructor
*/
cljs.core.Volatile = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Volatile.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Volatile.prototype.cljs$core$IVolatile$ = true;

cljs.core.Volatile.prototype.cljs$core$IVolatile$_vreset_BANG_$arity$2 = (function (_,new_state){
var self__ = this;
var ___$1 = this;
return self__.state = new_state;
});

cljs.core.Volatile.cljs$lang$type = true;

cljs.core.Volatile.cljs$lang$ctorStr = "cljs.core/Volatile";

cljs.core.Volatile.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Volatile");
});

cljs.core.__GT_Volatile = (function __GT_Volatile(state){
return (new cljs.core.Volatile(state));
});

/**
* Creates and returns a Volatile with an initial value of val.
*/
cljs.core.volatile_BANG_ = (function volatile_BANG_(val){
return (new cljs.core.Volatile(val));
});
/**
* Returns true if x is a volatile.
*/
cljs.core.volatile_QMARK_ = (function volatile_QMARK_(x){
return (x instanceof cljs.core.Volatile);
});
/**
* Sets the value of volatile to newval without regard for the
* current value. Returns newval.
*/
cljs.core.vreset_BANG_ = (function vreset_BANG_(vol,newval){
return cljs.core._vreset_BANG_(vol,newval);
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__22994 = null;
var G__22994__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__22994__1 = (function (result){
var G__22961 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__22961) : rf.call(null,G__22961));
});
var G__22994__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var v = (function (){var G__22962 = i;
var G__22963 = input;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22962,G__22963) : f.call(null,G__22962,G__22963));
})();
if((v == null)){
return result;
} else {
var G__22964 = result;
var G__22965 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__22964,G__22965) : rf.call(null,G__22964,G__22965));
}
});
G__22994 = function(result,input){
switch(arguments.length){
case 0:
return G__22994__0.call(this);
case 1:
return G__22994__1.call(this,result);
case 2:
return G__22994__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22994.cljs$core$IFn$_invoke$arity$0 = G__22994__0;
G__22994.cljs$core$IFn$_invoke$arity$1 = G__22994__1;
G__22994.cljs$core$IFn$_invoke$arity$2 = G__22994__2;
return G__22994;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4523__auto___22995 = size;
var i_22996 = (0);
while(true){
if((i_22996 < n__4523__auto___22995)){
var x_22997 = (function (){var G__22990 = (idx + i_22996);
var G__22991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_22996);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22990,G__22991) : f.call(null,G__22990,G__22991));
})();
if((x_22997 == null)){
} else {
cljs.core.chunk_append(b,x_22997);
}

var G__22998 = (i_22996 + (1));
i_22996 = G__22998;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__22992 = idx;
var G__22993 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22992,G__22993) : f.call(null,G__22992,G__22993));
})();
if((x == null)){
return keepi((idx + (1)),cljs.core.rest(s));
} else {
return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((function (){var G__23212 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23212) : p.call(null,G__23212));
})());
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23214 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23214) : p.call(null,G__23214));
})();
if(cljs.core.truth_(and__3624__auto__)){
var G__23215 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23215) : p.call(null,G__23215));
} else {
return and__3624__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23217 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23217) : p.call(null,G__23217));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23219 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23219) : p.call(null,G__23219));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var G__23220 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23220) : p.call(null,G__23220));
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__23389__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__23389 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23389__delegate.call(this,x,y,z,args);};
G__23389.cljs$lang$maxFixedArity = 3;
G__23389.cljs$lang$applyTo = (function (arglist__23390){
var x = cljs.core.first(arglist__23390);
arglist__23390 = cljs.core.next(arglist__23390);
var y = cljs.core.first(arglist__23390);
arglist__23390 = cljs.core.next(arglist__23390);
var z = cljs.core.first(arglist__23390);
var args = cljs.core.rest(arglist__23390);
return G__23389__delegate(x,y,z,args);
});
G__23389.cljs$core$IFn$_invoke$arity$variadic = G__23389__delegate;
return G__23389;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23252 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23252) : p1.call(null,G__23252));
})();
if(cljs.core.truth_(and__3624__auto__)){
var G__23253 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23253) : p2.call(null,G__23253));
} else {
return and__3624__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23255 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23255) : p1.call(null,G__23255));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23257 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23257) : p1.call(null,G__23257));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var and__3624__auto____$2 = (function (){var G__23259 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23259) : p2.call(null,G__23259));
})();
if(cljs.core.truth_(and__3624__auto____$2)){
var G__23260 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23260) : p2.call(null,G__23260));
} else {
return and__3624__auto____$2;
}
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23262 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23262) : p1.call(null,G__23262));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23264 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23264) : p1.call(null,G__23264));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var and__3624__auto____$2 = (function (){var G__23266 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23266) : p1.call(null,G__23266));
})();
if(cljs.core.truth_(and__3624__auto____$2)){
var and__3624__auto____$3 = (function (){var G__23268 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23268) : p2.call(null,G__23268));
})();
if(cljs.core.truth_(and__3624__auto____$3)){
var and__3624__auto____$4 = (function (){var G__23270 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23270) : p2.call(null,G__23270));
})();
if(cljs.core.truth_(and__3624__auto____$4)){
var G__23271 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23271) : p2.call(null,G__23271));
} else {
return and__3624__auto____$4;
}
} else {
return and__3624__auto____$3;
}
} else {
return and__3624__auto____$2;
}
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__23391__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__22999_SHARP_){
var and__3624__auto__ = (function (){var G__23276 = p1__22999_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23276) : p1.call(null,G__23276));
})();
if(cljs.core.truth_(and__3624__auto__)){
var G__23277 = p1__22999_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23277) : p2.call(null,G__23277));
} else {
return and__3624__auto__;
}
}),args)));
};
var G__23391 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23391__delegate.call(this,x,y,z,args);};
G__23391.cljs$lang$maxFixedArity = 3;
G__23391.cljs$lang$applyTo = (function (arglist__23392){
var x = cljs.core.first(arglist__23392);
arglist__23392 = cljs.core.next(arglist__23392);
var y = cljs.core.first(arglist__23392);
arglist__23392 = cljs.core.next(arglist__23392);
var z = cljs.core.first(arglist__23392);
var args = cljs.core.rest(arglist__23392);
return G__23391__delegate(x,y,z,args);
});
G__23391.cljs$core$IFn$_invoke$arity$variadic = G__23391__delegate;
return G__23391;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23323 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23323) : p1.call(null,G__23323));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23325 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23325) : p2.call(null,G__23325));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var G__23326 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23326) : p3.call(null,G__23326));
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23328 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23328) : p1.call(null,G__23328));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23330 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23330) : p2.call(null,G__23330));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var and__3624__auto____$2 = (function (){var G__23332 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23332) : p3.call(null,G__23332));
})();
if(cljs.core.truth_(and__3624__auto____$2)){
var and__3624__auto____$3 = (function (){var G__23334 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23334) : p1.call(null,G__23334));
})();
if(cljs.core.truth_(and__3624__auto____$3)){
var and__3624__auto____$4 = (function (){var G__23336 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23336) : p2.call(null,G__23336));
})();
if(cljs.core.truth_(and__3624__auto____$4)){
var G__23337 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23337) : p3.call(null,G__23337));
} else {
return and__3624__auto____$4;
}
} else {
return and__3624__auto____$3;
}
} else {
return and__3624__auto____$2;
}
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3624__auto__ = (function (){var G__23339 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23339) : p1.call(null,G__23339));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23341 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23341) : p2.call(null,G__23341));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var and__3624__auto____$2 = (function (){var G__23343 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23343) : p3.call(null,G__23343));
})();
if(cljs.core.truth_(and__3624__auto____$2)){
var and__3624__auto____$3 = (function (){var G__23345 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23345) : p1.call(null,G__23345));
})();
if(cljs.core.truth_(and__3624__auto____$3)){
var and__3624__auto____$4 = (function (){var G__23347 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23347) : p2.call(null,G__23347));
})();
if(cljs.core.truth_(and__3624__auto____$4)){
var and__3624__auto____$5 = (function (){var G__23349 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23349) : p3.call(null,G__23349));
})();
if(cljs.core.truth_(and__3624__auto____$5)){
var and__3624__auto____$6 = (function (){var G__23351 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23351) : p1.call(null,G__23351));
})();
if(cljs.core.truth_(and__3624__auto____$6)){
var and__3624__auto____$7 = (function (){var G__23353 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23353) : p2.call(null,G__23353));
})();
if(cljs.core.truth_(and__3624__auto____$7)){
var G__23354 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23354) : p3.call(null,G__23354));
} else {
return and__3624__auto____$7;
}
} else {
return and__3624__auto____$6;
}
} else {
return and__3624__auto____$5;
}
} else {
return and__3624__auto____$4;
}
} else {
return and__3624__auto____$3;
}
} else {
return and__3624__auto____$2;
}
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__23393__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__23000_SHARP_){
var and__3624__auto__ = (function (){var G__23361 = p1__23000_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23361) : p1.call(null,G__23361));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23363 = p1__23000_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23363) : p2.call(null,G__23363));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var G__23364 = p1__23000_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23364) : p3.call(null,G__23364));
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
}),args)));
};
var G__23393 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23393__delegate.call(this,x,y,z,args);};
G__23393.cljs$lang$maxFixedArity = 3;
G__23393.cljs$lang$applyTo = (function (arglist__23394){
var x = cljs.core.first(arglist__23394);
arglist__23394 = cljs.core.next(arglist__23394);
var y = cljs.core.first(arglist__23394);
arglist__23394 = cljs.core.next(arglist__23394);
var z = cljs.core.first(arglist__23394);
var args = cljs.core.rest(arglist__23394);
return G__23393__delegate(x,y,z,args);
});
G__23393.cljs$core$IFn$_invoke$arity$variadic = G__23393__delegate;
return G__23393;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__23395__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__23001_SHARP_){
var G__23380 = x;
return (p1__23001_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23001_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23380) : p1__23001_SHARP_.call(null,G__23380));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__23002_SHARP_){
var and__3624__auto__ = (function (){var G__23382 = x;
return (p1__23002_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23002_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23382) : p1__23002_SHARP_.call(null,G__23382));
})();
if(cljs.core.truth_(and__3624__auto__)){
var G__23383 = y;
return (p1__23002_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23002_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23383) : p1__23002_SHARP_.call(null,G__23383));
} else {
return and__3624__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__23003_SHARP_){
var and__3624__auto__ = (function (){var G__23385 = x;
return (p1__23003_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23003_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23385) : p1__23003_SHARP_.call(null,G__23385));
})();
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__23387 = y;
return (p1__23003_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23003_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23387) : p1__23003_SHARP_.call(null,G__23387));
})();
if(cljs.core.truth_(and__3624__auto____$1)){
var G__23388 = z;
return (p1__23003_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23003_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23388) : p1__23003_SHARP_.call(null,G__23388));
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__23396__delegate = function (x,y,z,args){
return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__23004_SHARP_){
return cljs.core.every_QMARK_(p1__23004_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__23396 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23396__delegate.call(this,x,y,z,args);};
G__23396.cljs$lang$maxFixedArity = 3;
G__23396.cljs$lang$applyTo = (function (arglist__23397){
var x = cljs.core.first(arglist__23397);
arglist__23397 = cljs.core.next(arglist__23397);
var y = cljs.core.first(arglist__23397);
arglist__23397 = cljs.core.next(arglist__23397);
var z = cljs.core.first(arglist__23397);
var args = cljs.core.rest(arglist__23397);
return G__23396__delegate(x,y,z,args);
});
G__23396.cljs$core$IFn$_invoke$arity$variadic = G__23396__delegate;
return G__23396;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__23395 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23395__delegate.call(this,p1,p2,p3,ps);};
G__23395.cljs$lang$maxFixedArity = 3;
G__23395.cljs$lang$applyTo = (function (arglist__23398){
var p1 = cljs.core.first(arglist__23398);
arglist__23398 = cljs.core.next(arglist__23398);
var p2 = cljs.core.first(arglist__23398);
arglist__23398 = cljs.core.next(arglist__23398);
var p3 = cljs.core.first(arglist__23398);
var ps = cljs.core.rest(arglist__23398);
return G__23395__delegate(p1,p2,p3,ps);
});
G__23395.cljs$core$IFn$_invoke$arity$variadic = G__23395__delegate;
return G__23395;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
var G__23604 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23604) : p.call(null,G__23604));
});
var sp1__2 = (function (x,y){
var or__3636__auto__ = (function (){var G__23606 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23606) : p.call(null,G__23606));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var G__23607 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23607) : p.call(null,G__23607));
}
});
var sp1__3 = (function (x,y,z){
var or__3636__auto__ = (function (){var G__23609 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23609) : p.call(null,G__23609));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var G__23611 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23611) : p.call(null,G__23611));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var G__23612 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23612) : p.call(null,G__23612));
}
}
});
var sp1__4 = (function() { 
var G__23773__delegate = function (x,y,z,args){
var or__3636__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__23773 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23773__delegate.call(this,x,y,z,args);};
G__23773.cljs$lang$maxFixedArity = 3;
G__23773.cljs$lang$applyTo = (function (arglist__23774){
var x = cljs.core.first(arglist__23774);
arglist__23774 = cljs.core.next(arglist__23774);
var y = cljs.core.first(arglist__23774);
arglist__23774 = cljs.core.next(arglist__23774);
var z = cljs.core.first(arglist__23774);
var args = cljs.core.rest(arglist__23774);
return G__23773__delegate(x,y,z,args);
});
G__23773.cljs$core$IFn$_invoke$arity$variadic = G__23773__delegate;
return G__23773;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3636__auto__ = (function (){var G__23644 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23644) : p1.call(null,G__23644));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var G__23645 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23645) : p2.call(null,G__23645));
}
});
var sp2__2 = (function (x,y){
var or__3636__auto__ = (function (){var G__23647 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23647) : p1.call(null,G__23647));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var G__23649 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23649) : p1.call(null,G__23649));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = (function (){var G__23651 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23651) : p2.call(null,G__23651));
})();
if(cljs.core.truth_(or__3636__auto____$2)){
return or__3636__auto____$2;
} else {
var G__23652 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23652) : p2.call(null,G__23652));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3636__auto__ = (function (){var G__23654 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23654) : p1.call(null,G__23654));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var G__23656 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23656) : p1.call(null,G__23656));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = (function (){var G__23658 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23658) : p1.call(null,G__23658));
})();
if(cljs.core.truth_(or__3636__auto____$2)){
return or__3636__auto____$2;
} else {
var or__3636__auto____$3 = (function (){var G__23660 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23660) : p2.call(null,G__23660));
})();
if(cljs.core.truth_(or__3636__auto____$3)){
return or__3636__auto____$3;
} else {
var or__3636__auto____$4 = (function (){var G__23662 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23662) : p2.call(null,G__23662));
})();
if(cljs.core.truth_(or__3636__auto____$4)){
return or__3636__auto____$4;
} else {
var G__23663 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23663) : p2.call(null,G__23663));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__23775__delegate = function (x,y,z,args){
var or__3636__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.some(((function (or__3636__auto__){
return (function (p1__23399_SHARP_){
var or__3636__auto____$1 = (function (){var G__23665 = p1__23399_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23665) : p1.call(null,G__23665));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var G__23666 = p1__23399_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23666) : p2.call(null,G__23666));
}
});})(or__3636__auto__))
,args);
}
};
var G__23775 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23775__delegate.call(this,x,y,z,args);};
G__23775.cljs$lang$maxFixedArity = 3;
G__23775.cljs$lang$applyTo = (function (arglist__23776){
var x = cljs.core.first(arglist__23776);
arglist__23776 = cljs.core.next(arglist__23776);
var y = cljs.core.first(arglist__23776);
arglist__23776 = cljs.core.next(arglist__23776);
var z = cljs.core.first(arglist__23776);
var args = cljs.core.rest(arglist__23776);
return G__23775__delegate(x,y,z,args);
});
G__23775.cljs$core$IFn$_invoke$arity$variadic = G__23775__delegate;
return G__23775;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3636__auto__ = (function (){var G__23712 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23712) : p1.call(null,G__23712));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var G__23714 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23714) : p2.call(null,G__23714));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var G__23715 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23715) : p3.call(null,G__23715));
}
}
});
var sp3__2 = (function (x,y){
var or__3636__auto__ = (function (){var G__23717 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23717) : p1.call(null,G__23717));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var G__23719 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23719) : p2.call(null,G__23719));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = (function (){var G__23721 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23721) : p3.call(null,G__23721));
})();
if(cljs.core.truth_(or__3636__auto____$2)){
return or__3636__auto____$2;
} else {
var or__3636__auto____$3 = (function (){var G__23723 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23723) : p1.call(null,G__23723));
})();
if(cljs.core.truth_(or__3636__auto____$3)){
return or__3636__auto____$3;
} else {
var or__3636__auto____$4 = (function (){var G__23725 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23725) : p2.call(null,G__23725));
})();
if(cljs.core.truth_(or__3636__auto____$4)){
return or__3636__auto____$4;
} else {
var G__23726 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23726) : p3.call(null,G__23726));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3636__auto__ = (function (){var G__23728 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23728) : p1.call(null,G__23728));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var G__23730 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23730) : p2.call(null,G__23730));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = (function (){var G__23732 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23732) : p3.call(null,G__23732));
})();
if(cljs.core.truth_(or__3636__auto____$2)){
return or__3636__auto____$2;
} else {
var or__3636__auto____$3 = (function (){var G__23734 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23734) : p1.call(null,G__23734));
})();
if(cljs.core.truth_(or__3636__auto____$3)){
return or__3636__auto____$3;
} else {
var or__3636__auto____$4 = (function (){var G__23736 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23736) : p2.call(null,G__23736));
})();
if(cljs.core.truth_(or__3636__auto____$4)){
return or__3636__auto____$4;
} else {
var or__3636__auto____$5 = (function (){var G__23738 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23738) : p3.call(null,G__23738));
})();
if(cljs.core.truth_(or__3636__auto____$5)){
return or__3636__auto____$5;
} else {
var or__3636__auto____$6 = (function (){var G__23740 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23740) : p1.call(null,G__23740));
})();
if(cljs.core.truth_(or__3636__auto____$6)){
return or__3636__auto____$6;
} else {
var or__3636__auto____$7 = (function (){var G__23742 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23742) : p2.call(null,G__23742));
})();
if(cljs.core.truth_(or__3636__auto____$7)){
return or__3636__auto____$7;
} else {
var G__23743 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23743) : p3.call(null,G__23743));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__23777__delegate = function (x,y,z,args){
var or__3636__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.some(((function (or__3636__auto__){
return (function (p1__23400_SHARP_){
var or__3636__auto____$1 = (function (){var G__23745 = p1__23400_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__23745) : p1.call(null,G__23745));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = (function (){var G__23747 = p1__23400_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__23747) : p2.call(null,G__23747));
})();
if(cljs.core.truth_(or__3636__auto____$2)){
return or__3636__auto____$2;
} else {
var G__23748 = p1__23400_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__23748) : p3.call(null,G__23748));
}
}
});})(or__3636__auto__))
,args);
}
};
var G__23777 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23777__delegate.call(this,x,y,z,args);};
G__23777.cljs$lang$maxFixedArity = 3;
G__23777.cljs$lang$applyTo = (function (arglist__23778){
var x = cljs.core.first(arglist__23778);
arglist__23778 = cljs.core.next(arglist__23778);
var y = cljs.core.first(arglist__23778);
arglist__23778 = cljs.core.next(arglist__23778);
var z = cljs.core.first(arglist__23778);
var args = cljs.core.rest(arglist__23778);
return G__23777__delegate(x,y,z,args);
});
G__23777.cljs$core$IFn$_invoke$arity$variadic = G__23777__delegate;
return G__23777;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__23779__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__23401_SHARP_){
var G__23764 = x;
return (p1__23401_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23401_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23764) : p1__23401_SHARP_.call(null,G__23764));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__23402_SHARP_){
var or__3636__auto__ = (function (){var G__23766 = x;
return (p1__23402_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23402_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23766) : p1__23402_SHARP_.call(null,G__23766));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var G__23767 = y;
return (p1__23402_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23402_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23767) : p1__23402_SHARP_.call(null,G__23767));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__23403_SHARP_){
var or__3636__auto__ = (function (){var G__23769 = x;
return (p1__23403_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23403_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23769) : p1__23403_SHARP_.call(null,G__23769));
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var G__23771 = y;
return (p1__23403_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23403_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23771) : p1__23403_SHARP_.call(null,G__23771));
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var G__23772 = z;
return (p1__23403_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23403_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23772) : p1__23403_SHARP_.call(null,G__23772));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__23780__delegate = function (x,y,z,args){
var or__3636__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.some(((function (or__3636__auto__,ps__$1){
return (function (p1__23404_SHARP_){
return cljs.core.some(p1__23404_SHARP_,args);
});})(or__3636__auto__,ps__$1))
,ps__$1);
}
};
var G__23780 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23780__delegate.call(this,x,y,z,args);};
G__23780.cljs$lang$maxFixedArity = 3;
G__23780.cljs$lang$applyTo = (function (arglist__23781){
var x = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var y = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var z = cljs.core.first(arglist__23781);
var args = cljs.core.rest(arglist__23781);
return G__23780__delegate(x,y,z,args);
});
G__23780.cljs$core$IFn$_invoke$arity$variadic = G__23780__delegate;
return G__23780;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__23779 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23779__delegate.call(this,p1,p2,p3,ps);};
G__23779.cljs$lang$maxFixedArity = 3;
G__23779.cljs$lang$applyTo = (function (arglist__23782){
var p1 = cljs.core.first(arglist__23782);
arglist__23782 = cljs.core.next(arglist__23782);
var p2 = cljs.core.first(arglist__23782);
arglist__23782 = cljs.core.next(arglist__23782);
var p3 = cljs.core.first(arglist__23782);
var ps = cljs.core.rest(arglist__23782);
return G__23779__delegate(p1,p2,p3,ps);
});
G__23779.cljs$core$IFn$_invoke$arity$variadic = G__23779__delegate;
return G__23779;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){
return (function (rf){
return (function() {
var G__23837 = null;
var G__23837__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23837__1 = (function (result){
var G__23823 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23823) : rf.call(null,G__23823));
});
var G__23837__2 = (function (result,input){
var G__23824 = result;
var G__23825 = (function (){var G__23826 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23826) : f.call(null,G__23826));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23824,G__23825) : rf.call(null,G__23824,G__23825));
});
var G__23837__3 = (function() { 
var G__23838__delegate = function (result,input,inputs){
var G__23827 = result;
var G__23828 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23827,G__23828) : rf.call(null,G__23827,G__23828));
};
var G__23838 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23838__delegate.call(this,result,input,inputs);};
G__23838.cljs$lang$maxFixedArity = 2;
G__23838.cljs$lang$applyTo = (function (arglist__23839){
var result = cljs.core.first(arglist__23839);
arglist__23839 = cljs.core.next(arglist__23839);
var input = cljs.core.first(arglist__23839);
var inputs = cljs.core.rest(arglist__23839);
return G__23838__delegate(result,input,inputs);
});
G__23838.cljs$core$IFn$_invoke$arity$variadic = G__23838__delegate;
return G__23838;
})()
;
G__23837 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__23837__0.call(this);
case 1:
return G__23837__1.call(this,result);
case 2:
return G__23837__2.call(this,result,input);
default:
return G__23837__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23837.cljs$lang$maxFixedArity = 2;
G__23837.cljs$lang$applyTo = G__23837__3.cljs$lang$applyTo;
G__23837.cljs$core$IFn$_invoke$arity$0 = G__23837__0;
G__23837.cljs$core$IFn$_invoke$arity$1 = G__23837__1;
G__23837.cljs$core$IFn$_invoke$arity$2 = G__23837__2;
G__23837.cljs$core$IFn$_invoke$arity$variadic = G__23837__3.cljs$core$IFn$_invoke$arity$variadic;
return G__23837;
})()
});
});
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4523__auto___23840 = size;
var i_23841 = (0);
while(true){
if((i_23841 < n__4523__auto___23840)){
cljs.core.chunk_append(b,(function (){var G__23829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23841);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23829) : f.call(null,G__23829));
})());

var G__23842 = (i_23841 + (1));
i_23841 = G__23842;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__23830 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23830) : f.call(null,G__23830));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons((function (){var G__23831 = cljs.core.first(s1);
var G__23832 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23831,G__23832) : f.call(null,G__23831,G__23832));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons((function (){var G__23833 = cljs.core.first(s1);
var G__23834 = cljs.core.first(s2);
var G__23835 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23833,G__23834,G__23835) : f.call(null,G__23833,G__23834,G__23835));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__23843__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__23783_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__23783_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__23843 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__23843__delegate.call(this,f,c1,c2,c3,colls);};
G__23843.cljs$lang$maxFixedArity = 4;
G__23843.cljs$lang$applyTo = (function (arglist__23844){
var f = cljs.core.first(arglist__23844);
arglist__23844 = cljs.core.next(arglist__23844);
var c1 = cljs.core.first(arglist__23844);
arglist__23844 = cljs.core.next(arglist__23844);
var c2 = cljs.core.first(arglist__23844);
arglist__23844 = cljs.core.next(arglist__23844);
var c3 = cljs.core.first(arglist__23844);
var colls = cljs.core.rest(arglist__23844);
return G__23843__delegate(f,c1,c2,c3,colls);
});
G__23843.cljs$core$IFn$_invoke$arity$variadic = G__23843__delegate;
return G__23843;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__23853 = null;
var G__23853__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23853__1 = (function (result){
var G__23850 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23850) : rf.call(null,G__23850));
});
var G__23853__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));
var result__$1 = (((n__$1 > (0)))?(function (){var G__23851 = result;
var G__23852 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23851,G__23852) : rf.call(null,G__23851,G__23852));
})():result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__23853 = function(result,input){
switch(arguments.length){
case 0:
return G__23853__0.call(this);
case 1:
return G__23853__1.call(this,result);
case 2:
return G__23853__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23853.cljs$core$IFn$_invoke$arity$0 = G__23853__0;
G__23853.cljs$core$IFn$_invoke$arity$1 = G__23853__1;
G__23853.cljs$core$IFn$_invoke$arity$2 = G__23853__2;
return G__23853;
})()
;})(na))
});
});
var take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__23860 = null;
var G__23860__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23860__1 = (function (result){
var G__23857 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23857) : rf.call(null,G__23857));
});
var G__23860__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));

if((n__$1 > (0))){
return result;
} else {
var G__23858 = result;
var G__23859 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23858,G__23859) : rf.call(null,G__23858,G__23859));
}
});
G__23860 = function(result,input){
switch(arguments.length){
case 0:
return G__23860__0.call(this);
case 1:
return G__23860__1.call(this,result);
case 2:
return G__23860__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23860.cljs$core$IFn$_invoke$arity$0 = G__23860__0;
G__23860.cljs$core$IFn$_invoke$arity$1 = G__23860__1;
G__23860.cljs$core$IFn$_invoke$arity$2 = G__23860__2;
return G__23860;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__23861 = (n__$1 - (1));
var G__23862 = cljs.core.rest(s);
n__$1 = G__23861;
coll__$1 = G__23862;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){
return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));
while(true){
if(lead){
var G__23865 = cljs.core.next(s);
var G__23866 = cljs.core.next(lead);
s = G__23865;
lead = G__23866;
continue;
} else {
return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.volatile_BANG_(true);
return ((function (da){
return (function() {
var G__23879 = null;
var G__23879__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23879__1 = (function (result){
var G__23873 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23873) : rf.call(null,G__23873));
});
var G__23879__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__3624__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3624__auto__)){
var G__23874 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23874) : pred.call(null,G__23874));
} else {
return and__3624__auto__;
}
})())){
return result;
} else {
cljs.core.vreset_BANG_(da,null);

var G__23875 = result;
var G__23876 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23875,G__23876) : rf.call(null,G__23875,G__23876));
}
});
G__23879 = function(result,input){
switch(arguments.length){
case 0:
return G__23879__0.call(this);
case 1:
return G__23879__1.call(this,result);
case 2:
return G__23879__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23879.cljs$core$IFn$_invoke$arity$0 = G__23879__0;
G__23879.cljs$core$IFn$_invoke$arity$1 = G__23879__1;
G__23879.cljs$core$IFn$_invoke$arity$2 = G__23879__2;
return G__23879;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3624__auto__ = s;
if(and__3624__auto__){
var G__23878 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__23878) : pred__$1.call(null,G__23878));
} else {
return and__3624__auto__;
}
})())){
var G__23880 = pred__$1;
var G__23881 = cljs.core.rest(s);
pred__$1 = G__23880;
coll__$1 = G__23881;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else {
return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){
return iterate(f,(function (){var G__23890 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23890) : f.call(null,G__23890));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__23893__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__23893 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23893__delegate.call(this,c1,c2,colls);};
G__23893.cljs$lang$maxFixedArity = 2;
G__23893.cljs$lang$applyTo = (function (arglist__23894){
var c1 = cljs.core.first(arglist__23894);
arglist__23894 = cljs.core.next(arglist__23894);
var c2 = cljs.core.first(arglist__23894);
var colls = cljs.core.rest(arglist__23894);
return G__23893__delegate(c1,c2,colls);
});
G__23893.cljs$core$IFn$_invoke$arity$variadic = G__23893__delegate;
return G__23893;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var coll__$1 = temp__4124__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else {
if(cljs.core.seq(colls__$1)){
return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__23903__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__23903 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__23903__delegate.call(this,f,colls);};
G__23903.cljs$lang$maxFixedArity = 1;
G__23903.cljs$lang$applyTo = (function (arglist__23904){
var f = cljs.core.first(arglist__23904);
var colls = cljs.core.rest(arglist__23904);
return G__23903__delegate(f,colls);
});
G__23903.cljs$core$IFn$_invoke$arity$variadic = G__23903__delegate;
return G__23903;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__23923 = null;
var G__23923__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23923__1 = (function (result){
var G__23917 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__23917) : rf.call(null,G__23917));
});
var G__23923__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__23918 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23918) : pred.call(null,G__23918));
})())){
var G__23919 = result;
var G__23920 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23919,G__23920) : rf.call(null,G__23919,G__23920));
} else {
return result;
}
});
G__23923 = function(result,input){
switch(arguments.length){
case 0:
return G__23923__0.call(this);
case 1:
return G__23923__1.call(this,result);
case 2:
return G__23923__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23923.cljs$core$IFn$_invoke$arity$0 = G__23923__0;
G__23923.cljs$core$IFn$_invoke$arity$1 = G__23923__1;
G__23923.cljs$core$IFn$_invoke$arity$2 = G__23923__2;
return G__23923;
})()
});
});
var filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4523__auto___23924 = size;
var i_23925 = (0);
while(true){
if((i_23925 < n__4523__auto___23924)){
if(cljs.core.truth_((function (){var G__23921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23925);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23921) : pred.call(null,G__23921));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23925));
} else {
}

var G__23926 = (i_23925 + (1));
i_23925 = G__23926;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((function (){var G__23922 = f;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23922) : pred.call(null,G__23922));
})())){
return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else {
return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else {
return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_((function (){var G__23933 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23933) : branch_QMARK_.call(null,G__23933));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__23934 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__23934) : children.call(null,G__23934));
})()], 0)):null));
}),null,null));
});
return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23935_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__23935_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__23938 = to;
if(G__23938){
var bit__4310__auto__ = (G__23938.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4310__auto__) || (G__23938.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){
if((function (){var G__23939 = to;
if(G__23939){
var bit__4310__auto__ = (G__23939.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4310__auto__) || (G__23939.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__23941 = o;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23941) : f.call(null,G__23941));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__23942__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__23942 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__23942__delegate.call(this,f,c1,c2,c3,colls);};
G__23942.cljs$lang$maxFixedArity = 4;
G__23942.cljs$lang$applyTo = (function (arglist__23943){
var f = cljs.core.first(arglist__23943);
arglist__23943 = cljs.core.next(arglist__23943);
var c1 = cljs.core.first(arglist__23943);
arglist__23943 = cljs.core.next(arglist__23943);
var c2 = cljs.core.first(arglist__23943);
arglist__23943 = cljs.core.next(arglist__23943);
var c3 = cljs.core.first(arglist__23943);
var colls = cljs.core.rest(arglist__23943);
return G__23942__delegate(f,c1,c2,c3,colls);
});
G__23942.cljs$core$IFn$_invoke$arity$variadic = G__23942__delegate;
return G__23942;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.truth_((function (){var G__23945 = o;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23945) : pred.call(null,G__23945));
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else {
return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else {
return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
if(!((function (){var G__23960 = m__$1;
if(G__23960){
var bit__4317__auto__ = (G__23960.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4317__auto__) || (G__23960.cljs$core$ILookup$)){
return true;
} else {
if((!G__23960.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__23960);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__23960);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__23961 = sentinel;
var G__23962 = m__$2;
var G__23963 = cljs.core.next(ks__$1);
sentinel = G__23961;
m__$1 = G__23962;
ks__$1 = G__23963;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__23964,v){
var vec__23969 = p__23964;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23969,(0),null);
var ks = cljs.core.nthnext(vec__23969,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__23970,f){
var vec__24008 = p__23970;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008,(0),null);
var ks = cljs.core.nthnext(vec__24008,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24009) : f.call(null,G__24009));
})());
}
});
var update_in__4 = (function (m,p__23971,f,a){
var vec__24010 = p__23971;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24010,(0),null);
var ks = cljs.core.nthnext(vec__24010,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24012 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24011,G__24012) : f.call(null,G__24011,G__24012));
})());
}
});
var update_in__5 = (function (m,p__23972,f,a,b){
var vec__24013 = p__23972;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24013,(0),null);
var ks = cljs.core.nthnext(vec__24013,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24015 = a;
var G__24016 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24014,G__24015,G__24016) : f.call(null,G__24014,G__24015,G__24016));
})());
}
});
var update_in__6 = (function (m,p__23973,f,a,b,c){
var vec__24017 = p__23973;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(0),null);
var ks = cljs.core.nthnext(vec__24017,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24019 = a;
var G__24020 = b;
var G__24021 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__24018,G__24019,G__24020,G__24021) : f.call(null,G__24018,G__24019,G__24020,G__24021));
})());
}
});
var update_in__7 = (function() { 
var G__24023__delegate = function (m,p__23974,f,a,b,c,args){
var vec__24022 = p__23974;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24022,(0),null);
var ks = cljs.core.nthnext(vec__24022,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__24023 = function (m,p__23974,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__24023__delegate.call(this,m,p__23974,f,a,b,c,args);};
G__24023.cljs$lang$maxFixedArity = 6;
G__24023.cljs$lang$applyTo = (function (arglist__24024){
var m = cljs.core.first(arglist__24024);
arglist__24024 = cljs.core.next(arglist__24024);
var p__23974 = cljs.core.first(arglist__24024);
arglist__24024 = cljs.core.next(arglist__24024);
var f = cljs.core.first(arglist__24024);
arglist__24024 = cljs.core.next(arglist__24024);
var a = cljs.core.first(arglist__24024);
arglist__24024 = cljs.core.next(arglist__24024);
var b = cljs.core.first(arglist__24024);
arglist__24024 = cljs.core.next(arglist__24024);
var c = cljs.core.first(arglist__24024);
var args = cljs.core.rest(arglist__24024);
return G__24023__delegate(m,p__23974,f,a,b,c,args);
});
G__24023.cljs$core$IFn$_invoke$arity$variadic = G__24023__delegate;
return G__24023;
})()
;
update_in = function(m,p__23974,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__23974,f);
case 4:
return update_in__4.call(this,m,p__23974,f,a);
case 5:
return update_in__5.call(this,m,p__23974,f,a,b);
case 6:
return update_in__6.call(this,m,p__23974,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__23974,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;
/**
* 'Updates' a value in an associative structure, where k is a
* key and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* structure.  If the key does not exist, nil is passed as the old value.
* @param {...*} var_args
*/
cljs.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24035) : f.call(null,G__24035));
})());
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24037 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24036,G__24037) : f.call(null,G__24036,G__24037));
})());
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24039 = x;
var G__24040 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24038,G__24039,G__24040) : f.call(null,G__24038,G__24039,G__24040));
})());
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24042 = x;
var G__24043 = y;
var G__24044 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__24041,G__24042,G__24043,G__24044) : f.call(null,G__24041,G__24042,G__24043,G__24044));
})());
});
var update__7 = (function() { 
var G__24045__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__24045 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__24045__delegate.call(this,m,k,f,x,y,z,more);};
G__24045.cljs$lang$maxFixedArity = 6;
G__24045.cljs$lang$applyTo = (function (arglist__24046){
var m = cljs.core.first(arglist__24046);
arglist__24046 = cljs.core.next(arglist__24046);
var k = cljs.core.first(arglist__24046);
arglist__24046 = cljs.core.next(arglist__24046);
var f = cljs.core.first(arglist__24046);
arglist__24046 = cljs.core.next(arglist__24046);
var x = cljs.core.first(arglist__24046);
arglist__24046 = cljs.core.next(arglist__24046);
var y = cljs.core.first(arglist__24046);
arglist__24046 = cljs.core.next(arglist__24046);
var z = cljs.core.first(arglist__24046);
var more = cljs.core.rest(arglist__24046);
return G__24045__delegate(m,k,f,x,y,z,more);
});
G__24045.cljs$core$IFn$_invoke$arity$variadic = G__24045__delegate;
return G__24045;
})()
;
update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x);
case 5:
return update__5.call(this,m,k,f,x,y);
case 6:
return update__6.call(this,m,k,f,x,y,z);
default:
return update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 6;
update.cljs$lang$applyTo = update__7.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$6 = update__6;
update.cljs$core$IFn$_invoke$arity$variadic = update__7.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,(0),embed);
var G__24047 = (ll - (5));
var G__24048 = r;
ll = G__24047;
ret = G__24048;
continue;
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset(ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null))){
var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__24053 = cljs.core.pv_aget(node,(0));
var G__24054 = (level - (5));
node = G__24053;
level = G__24054;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off(pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__24055 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__24056 = (level - (5));
node = G__24055;
level = G__24056;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for(pv,i);
} else {
return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === (0))){
cljs.core.pv_aset(ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__24066 = init__$2;
var G__24067 = (j + i);
var G__24068 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24066,G__24067,G__24068) : f.call(null,G__24066,G__24067,G__24068));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__24079 = (j + (1));
var G__24080 = init__$3;
j = G__24079;
init__$2 = G__24080;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__24069 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24069) : cljs.core.deref.call(null,G__24069));
} else {
var G__24081 = (i + len);
var G__24082 = init__$2;
i = G__24081;
init__$1 = G__24082;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(coll__$1) <= n)){
var new_tail = cljs.core.aclone(self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj(coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count(other))){
var me_iter = cljs.core._iterator(coll__$1);
var you_iter = cljs.core._iterator(other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential(coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__24070 = self__.root;
return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__24070) : cljs.core.tv_editable_root.call(null,G__24070));
})(),(function (){var G__24071 = self__.tail;
return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__24071) : cljs.core.tv_editable_tail.call(null,G__24071));
})()));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__24072 = init__$2;
var G__24073 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24072,G__24073) : f.call(null,G__24072,G__24073));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__24083 = (j + (1));
var G__24084 = init__$3;
j = G__24083;
init__$2 = G__24084;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__24074 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24074) : cljs.core.deref.call(null,G__24074));
} else {
var G__24085 = (i + len);
var G__24086 = init__$2;
i = G__24085;
init__$1 = G__24086;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n(coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
var G__24075 = coll__$1;
var G__24076 = cljs.core.first_array_for_longvec(coll__$1);
var G__24077 = (0);
var G__24078 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__24075,G__24076,G__24077,G__24078) : cljs.core.chunked_seq.call(null,G__24075,G__24076,G__24077,G__24078));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__4523__auto___24087 = len;
var i_24088 = (0);
while(true){
if((i_24088 < n__4523__auto___24087)){
(new_tail[i_24088] = (self__.tail[i_24088]));

var G__24089 = (i_24088 + (1));
i_24088 = G__24089;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,(0),self__.root);

cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__24090 = null;
var G__24090__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__24090__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__24090 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24090__2.call(this,self__,k);
case 3:
return G__24090__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24090.cljs$core$IFn$_invoke$arity$2 = G__24090__2;
G__24090.cljs$core$IFn$_invoke$arity$3 = G__24090__3;
return G__24090;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args24065){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24065)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);
while(true){
if((i < l)){
var G__24091 = (i + (1));
var G__24092 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__24091;
out = G__24092;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__24093){
var args = cljs.core.seq(arglist__24093);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__24094 = self__.vec;
var G__24095 = self__.node;
var G__24096 = self__.i;
var G__24097 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__24094,G__24095,G__24096,G__24097) : cljs.core.chunked_seq.call(null,G__24094,G__24095,G__24096,G__24097));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__24098 = self__.vec;
var G__24099 = (self__.i + self__.off);
var G__24100 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__24098,G__24099,G__24100) : cljs.core.subvec.call(null,G__24098,G__24099,G__24100));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__24101 = self__.vec;
var G__24102 = (self__.i + self__.off);
var G__24103 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__24101,G__24102,G__24103) : cljs.core.subvec.call(null,G__24101,G__24102,G__24103));
})(),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__24104 = self__.vec;
var G__24105 = self__.node;
var G__24106 = self__.i;
var G__24107 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__24104,G__24105,G__24106,G__24107) : cljs.core.chunked_seq.call(null,G__24104,G__24105,G__24106,G__24107));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__24108 = self__.vec;
var G__24109 = cljs.core.unchecked_array_for(self__.vec,end);
var G__24110 = end;
var G__24111 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__24108,G__24109,G__24110,G__24111) : cljs.core.chunked_seq.call(null,G__24108,G__24109,G__24110,G__24111));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
var G__24112 = self__.vec;
var G__24113 = self__.node;
var G__24114 = self__.i;
var G__24115 = self__.off;
var G__24116 = m;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__24112,G__24113,G__24114,G__24115,G__24116) : cljs.core.chunked_seq.call(null,G__24112,G__24113,G__24114,G__24115,G__24116));
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__24117 = self__.vec;
var G__24118 = cljs.core.unchecked_array_for(self__.vec,end);
var G__24119 = end;
var G__24120 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__24117,G__24118,G__24119,G__24120) : cljs.core.chunked_seq.call(null,G__24117,G__24118,G__24119,G__24120));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
var G__24122 = self__.meta;
var G__24123 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__24124 = self__.start;
var G__24125 = (function (){var x__3953__auto__ = self__.end;
var y__3954__auto__ = (v_pos + (1));
return ((x__3953__auto__ > y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();
var G__24126 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__24122,G__24123,G__24124,G__24125,G__24126) : cljs.core.build_subvec.call(null,G__24122,G__24123,G__24124,G__24125,G__24126));
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
var G__24127 = self__.meta;
var G__24128 = self__.v;
var G__24129 = self__.start;
var G__24130 = (self__.end - (1));
var G__24131 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__24127,G__24128,G__24129,G__24130,G__24131) : cljs.core.build_subvec.call(null,G__24127,G__24128,G__24129,G__24130,G__24131));
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n(coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq(self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
var G__24133 = meta__$1;
var G__24134 = self__.v;
var G__24135 = self__.start;
var G__24136 = self__.end;
var G__24137 = self__.__hash;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__24133,G__24134,G__24135,G__24136,G__24137) : cljs.core.build_subvec.call(null,G__24133,G__24134,G__24135,G__24136,G__24137));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__24138 = self__.meta;
var G__24139 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__24140 = self__.start;
var G__24141 = (self__.end + (1));
var G__24142 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__24138,G__24139,G__24140,G__24141,G__24142) : cljs.core.build_subvec.call(null,G__24138,G__24139,G__24140,G__24141,G__24142));
});

cljs.core.Subvec.prototype.call = (function() {
var G__24143 = null;
var G__24143__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__24143__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__24143 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24143__2.call(this,self__,k);
case 3:
return G__24143__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24143.cljs$core$IFn$_invoke$arity$2 = G__24143__2;
G__24143.cljs$core$IFn$_invoke$arity$3 = G__24143__3;
return G__24143;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args24121){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24121)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__24144 = meta;
var G__24145 = v.v;
var G__24146 = (v.start + start);
var G__24147 = (v.start + end);
var G__24148 = __hash;
meta = G__24144;
v = G__24145;
start = G__24146;
end = G__24147;
__hash = G__24148;
continue;
} else {
var c = cljs.core.count(v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj24155 = {};
return obj24155;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null))){
return tv_push_tail(tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off(tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__24163 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__24164 = (level - (5));
node = G__24163;
level = G__24164;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.prototype.call = (function() {
var G__24168 = null;
var G__24168__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24168__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24168 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24168__2.call(this,self__,k);
case 3:
return G__24168__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24168.cljs$core$IFn$_invoke$arity$2 = G__24168__2;
G__24168.cljs$core$IFn$_invoke$arity$3 = G__24168__3;
return G__24168;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args24165){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24165)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset(node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_(tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty(coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentQueue.EMPTY,self__.meta);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest(cljs.core.seq(coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__3636__auto__ = self__.front;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3636__auto__ = self__.rear;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__24169 = (i + incr);
i = G__24169;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash(a);
var b__$1 = cljs.core.hash(b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__24170 = (i + (1));
var G__24171 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__24170;
out = G__24171;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj24175 = {};
return obj24175;
})();
var l = ks.length;
var i_24176 = (0);
while(true){
if((i_24176 < l)){
var k_24177 = (ks[i_24176]);
(new_obj[k_24177] = (obj[k_24177]));

var G__24178 = (i_24176 + (1));
i_24176 = G__24178;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3624__auto__ = (function (){var G__24182 = k;
return goog.isString(G__24182);
})();
if(cljs.core.truth_(and__3624__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3624__auto__;
}
})())){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1)){
var k = cljs.core.first(keys__$1);
var init__$2 = (function (){var G__24183 = init__$1;
var G__24184 = k;
var G__24185 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24183,G__24184,G__24185) : f.call(null,G__24183,G__24184,G__24185));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__24186 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24186) : cljs.core.deref.call(null,G__24186));
} else {
var G__24192 = cljs.core.rest(keys__$1);
var G__24193 = init__$2;
keys__$1 = G__24192;
init__$1 = G__24193;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3624__auto__ = (function (){var G__24188 = k;
return goog.isString(G__24188);
})();
if(cljs.core.truth_(and__3624__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3624__auto__;
}
})())){
var new_keys = cljs.core.aclone(self__.keys);
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var G__24189 = k;
return goog.isString(G__24189);
})())){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else {
if(!((cljs.core.scan_array((1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = cljs.core.aclone(self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3624__auto__ = (function (){var G__24191 = k;
return goog.isString(G__24191);
})();
if(cljs.core.truth_(and__3624__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3624__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__24179_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__24179_SHARP_,(self__.strobj[p1__24179_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__24194 = null;
var G__24194__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24194__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24194 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24194__2.call(this,self__,k);
case 3:
return G__24194__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24194.cljs$core$IFn$_invoke$arity$2 = G__24194__2;
G__24194.cljs$core$IFn$_invoke$arity$3 = G__24194__3;
return G__24194;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args24180){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24180)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj24196 = {};
return obj24196;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__24197 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24197,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24197,(1),null);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [x,x]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__24198 = (i + (2));
i = G__24198;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__24199 = (i + (2));
i = G__24199;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__24200 = (i + (2));
i = G__24200;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__24201 = (i + (2));
i = G__24201;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i]))){
return i;
} else {
var G__24202 = (i + (2));
i = G__24202;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else {
if(cljs.core.truth_((function (){var or__3636__auto__ = (function (){var G__24206 = k;
return goog.isString(G__24206);
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return typeof k === 'number';
}
})())){
return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_24207 = (0);
while(true){
if((i_24207 < l)){
(narr[i_24207] = (arr[i_24207]));

var G__24208 = (i_24207 + (1));
i_24207 = G__24208;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__24210 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__24210) : cljs.core.keys.call(null,G__24210));
})());
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__24211 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__24211) : cljs.core.vals.call(null,G__24211));
})());
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__24212 = cljs.core.seq(coll);
var chunk__24213 = null;
var count__24214 = (0);
var i__24215 = (0);
while(true){
if((i__24215 < count__24214)){
var vec__24216 = chunk__24213.cljs$core$IIndexed$_nth$arity$2(null,i__24215);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24216,(1),null);
var G__24217_24230 = v;
var G__24218_24231 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24217_24230,G__24218_24231) : f.call(null,G__24217_24230,G__24218_24231));

var G__24232 = seq__24212;
var G__24233 = chunk__24213;
var G__24234 = count__24214;
var G__24235 = (i__24215 + (1));
seq__24212 = G__24232;
chunk__24213 = G__24233;
count__24214 = G__24234;
i__24215 = G__24235;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24212);
if(temp__4126__auto__){
var seq__24212__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24212__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__24212__$1);
var G__24236 = cljs.core.chunk_rest(seq__24212__$1);
var G__24237 = c__4423__auto__;
var G__24238 = cljs.core.count(c__4423__auto__);
var G__24239 = (0);
seq__24212 = G__24236;
chunk__24213 = G__24237;
count__24214 = G__24238;
i__24215 = G__24239;
continue;
} else {
var vec__24219 = cljs.core.first(seq__24212__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24219,(1),null);
var G__24220_24240 = v;
var G__24221_24241 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24220_24240,G__24221_24241) : f.call(null,G__24220_24240,G__24221_24241));

var G__24242 = cljs.core.next(seq__24212__$1);
var G__24243 = null;
var G__24244 = (0);
var G__24245 = (0);
seq__24212 = G__24242;
chunk__24213 = G__24243;
count__24214 = G__24244;
i__24215 = G__24245;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var G__24222 = init__$1;
var G__24223 = (self__.arr[i]);
var G__24224 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24222,G__24223,G__24224) : f.call(null,G__24222,G__24223,G__24224));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__24225 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24225) : cljs.core.deref.call(null,G__24225));
} else {
var G__24246 = (i + (2));
var G__24247 = init__$2;
i = G__24246;
init__$1 = G__24247;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__24226 = other;
if(G__24226){
var bit__4310__auto__ = (G__24226.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4310__auto__) || (G__24226.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null))){
var i = (0);
while(true){
if((i < alen)){
var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v)){
var G__24248 = (i + (2));
i = G__24248;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map(coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj24228 = {};
return obj24228;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty(coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s]))){
var G__24249 = (s + (2));
var G__24250 = d;
s = G__24249;
d = G__24250;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__24251 = (s + (2));
var G__24252 = (d + (2));
s = G__24251;
d = G__24252;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__24229 = cljs.core.aclone(self__.arr);
(G__24229[(idx + (1))] = v);

return G__24229;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__24253 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__24254 = cljs.core.next(es);
ret = G__24253;
es = G__24254;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__24255 = null;
var G__24255__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24255__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24255 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24255__2.call(this,self__,k);
case 3:
return G__24255__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24255.cljs$core$IFn$_invoke$arity$2 = G__24255__2;
G__24255.cljs$core$IFn$_invoke$arity$3 = G__24255__3;
return G__24255;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args24209){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24209)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__24256 = (i + (2));
var G__24257 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__24256;
ret = G__24257;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__24258_24266 = self__.arr;
G__24258_24266.pop();

G__24258_24266.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__24259 = self__.len;
var G__24260 = self__.arr;
return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__24259,G__24260) : cljs.core.array__GT_transient_hash_map.call(null,G__24259,G__24260));
})(),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__24261 = o;
if(G__24261){
var bit__4317__auto__ = (G__24261.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4317__auto__) || (G__24261.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__24261.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__24261);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__24261);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__24262 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__24262) : cljs.core.key.call(null,G__24262));
})(),(function (){var G__24263 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__24263) : cljs.core.val.call(null,G__24263));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__24267 = cljs.core.next(es);
var G__24268 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__24264 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__24264) : cljs.core.key.call(null,G__24264));
})(),(function (){var G__24265 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__24265) : cljs.core.val.call(null,G__24265));
})());
es = G__24267;
tcoll__$2 = G__24268;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot(self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__24269 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__24270 = (i + (2));
out = G__24269;
i = G__24270;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function __GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_(key,other)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__24273 = cljs.core.aclone(arr);
(G__24273[i] = a);

return G__24273;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__24274 = cljs.core.aclone(arr);
(G__24274[i] = a);

(G__24274[j] = b);

return G__24274;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
var G__24279 = init__$1;
var G__24280 = k;
var G__24281 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24279,G__24280,G__24281) : f.call(null,G__24279,G__24280,G__24281));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__24282 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24282) : cljs.core.deref.call(null,G__24282));
} else {
var G__24283 = (i + (2));
var G__24284 = init__$2;
i = G__24283;
init__$1 = G__24284;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count(self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__24285 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__24285) : cljs.core.create_inode_seq.call(null,G__24285));
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_24299 = (0);
var j_24300 = (0);
while(true){
if((i_24299 < (32))){
if((((self__.bitmap >>> i_24299) & (1)) === (0))){
var G__24301 = (i_24299 + (1));
var G__24302 = j_24300;
i_24299 = G__24301;
j_24300 = G__24302;
continue;
} else {
(nodes[i_24299] = ((!(((self__.arr[j_24300]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_24300])),(self__.arr[j_24300]),(self__.arr[(j_24300 + (1))]),added_leaf_QMARK_):(self__.arr[(j_24300 + (1))])));

var G__24303 = (i_24299 + (1));
var G__24304 = (j_24300 + (2));
i_24299 = G__24303;
j_24300 = G__24304;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__24286 = edit__$1;
var G__24287 = (shift + (5));
var G__24288 = key_or_nil;
var G__24289 = val_or_node;
var G__24290 = hash;
var G__24291 = key;
var G__24292 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__24286,G__24287,G__24288,G__24289,G__24290,G__24291,G__24292) : cljs.core.create_node.call(null,G__24286,G__24287,G__24288,G__24289,G__24290,G__24291,G__24292));
})());

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_24305 = (0);
var j_24306 = (0);
while(true){
if((i_24305 < (32))){
if((((self__.bitmap >>> i_24305) & (1)) === (0))){
var G__24307 = (i_24305 + (1));
var G__24308 = j_24306;
i_24305 = G__24307;
j_24306 = G__24308;
continue;
} else {
(nodes[i_24305] = ((!(((self__.arr[j_24306]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_24306])),(self__.arr[j_24306]),(self__.arr[(j_24306 + (1))]),added_leaf_QMARK_):(self__.arr[(j_24306 + (1))])));

var G__24309 = (i_24305 + (1));
var G__24310 = (j_24306 + (2));
i_24305 = G__24309;
j_24306 = G__24310;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__24293 = (shift + (5));
var G__24294 = key_or_nil;
var G__24295 = val_or_node;
var G__24296 = hash;
var G__24297 = key;
var G__24298 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__24293,G__24294,G__24295,G__24296,G__24297,G__24298) : cljs.core.create_node.call(null,G__24293,G__24294,G__24295,G__24296,G__24297,G__24298));
})())));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__24311 = (i + (1));
var G__24312 = (j + (2));
var G__24313 = (bitmap | ((1) << i));
i = G__24311;
j = G__24312;
bitmap = G__24313;
continue;
} else {
var G__24314 = (i + (1));
var G__24315 = j;
var G__24316 = bitmap;
i = G__24314;
j = G__24315;
bitmap = G__24316;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__24317 = self__.arr;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__24317) : cljs.core.create_array_node_seq.call(null,G__24317));
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
var G__24318 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24318) : cljs.core.deref.call(null,G__24318));
} else {
var G__24319 = (i + (1));
var G__24320 = init__$2;
i = G__24319;
init__$1 = G__24320;
continue;
}
} else {
var G__24321 = (i + (1));
var G__24322 = init__$1;
i = G__24321;
init__$1 = G__24322;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test(key,(arr[i]))){
return i;
} else {
var G__24323 = (i + (2));
i = G__24323;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__24324 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__24324) : cljs.core.create_inode_seq.call(null,G__24324));
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
var G__24325 = self__.nodes;
var G__24326 = (self__.i + (2));
var G__24327 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__24325,G__24326,G__24327) : cljs.core.create_inode_seq.call(null,G__24325,G__24326,G__24327));
} else {
var G__24328 = self__.nodes;
var G__24329 = self__.i;
var G__24330 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__24328,G__24329,G__24330) : cljs.core.create_inode_seq.call(null,G__24328,G__24329,G__24330));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4124__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var node_seq = temp__4124__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__24334 = (j + (2));
j = G__24334;
continue;
}
} else {
var G__24335 = (j + (2));
j = G__24335;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__24336 = null;
var G__24337 = self__.nodes;
var G__24338 = self__.i;
var G__24339 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__24336,G__24337,G__24338,G__24339) : cljs.core.create_array_node_seq.call(null,G__24336,G__24337,G__24338,G__24339));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4124__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4124__auto__)){
var nj = temp__4124__auto__;
var temp__4124__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var ns = temp__4124__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__24344 = (j + (1));
j = G__24344;
continue;
}
} else {
var G__24345 = (j + (1));
j = G__24345;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__24347 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__24347) : cljs.core.keys.call(null,G__24347));
})());
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__24348 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__24348) : cljs.core.vals.call(null,G__24348));
})());
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__24349 = cljs.core.seq(coll);
var chunk__24350 = null;
var count__24351 = (0);
var i__24352 = (0);
while(true){
if((i__24352 < count__24351)){
var vec__24353 = chunk__24350.cljs$core$IIndexed$_nth$arity$2(null,i__24352);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(1),null);
var G__24354_24365 = v;
var G__24355_24366 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24354_24365,G__24355_24366) : f.call(null,G__24354_24365,G__24355_24366));

var G__24367 = seq__24349;
var G__24368 = chunk__24350;
var G__24369 = count__24351;
var G__24370 = (i__24352 + (1));
seq__24349 = G__24367;
chunk__24350 = G__24368;
count__24351 = G__24369;
i__24352 = G__24370;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24349);
if(temp__4126__auto__){
var seq__24349__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24349__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__24349__$1);
var G__24371 = cljs.core.chunk_rest(seq__24349__$1);
var G__24372 = c__4423__auto__;
var G__24373 = cljs.core.count(c__4423__auto__);
var G__24374 = (0);
seq__24349 = G__24371;
chunk__24350 = G__24372;
count__24351 = G__24373;
i__24352 = G__24374;
continue;
} else {
var vec__24356 = cljs.core.first(seq__24349__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356,(1),null);
var G__24357_24375 = v;
var G__24358_24376 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24357_24375,G__24358_24376) : f.call(null,G__24357_24375,G__24358_24376));

var G__24377 = cljs.core.next(seq__24349__$1);
var G__24378 = null;
var G__24379 = (0);
var G__24380 = (0);
seq__24349 = G__24377;
chunk__24350 = G__24378;
count__24351 = G__24379;
i__24352 = G__24380;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__24359 = init;
var G__24360 = null;
var G__24361 = self__.nil_val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24359,G__24360,G__24361) : f.call(null,G__24359,G__24360,G__24361));
})():init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__24362 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24362) : cljs.core.deref.call(null,G__24362));
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj24364 = {};
return obj24364;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__24381 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__24382 = cljs.core.next(es);
ret = G__24381;
es = G__24382;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__24383 = null;
var G__24383__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24383__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24383 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24383__2.call(this,self__,k);
case 3:
return G__24383__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24383.cljs$core$IFn$_invoke$arity$2 = G__24383__2;
G__24383.cljs$core$IFn$_invoke$arity$3 = G__24383__3;
return G__24383;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args24346){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24346)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__24384 = (i + (1));
var G__24385 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__24384;
out = G__24385;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__24386 = o;
if(G__24386){
var bit__4317__auto__ = (G__24386.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4317__auto__) || (G__24386.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__24386.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__24386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__24386);
}
})()){
return tcoll.assoc_BANG_((function (){var G__24387 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__24387) : cljs.core.key.call(null,G__24387));
})(),(function (){var G__24388 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__24388) : cljs.core.val.call(null,G__24388));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__24391 = cljs.core.next(es);
var G__24392 = tcoll__$1.assoc_BANG_((function (){var G__24389 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__24389) : cljs.core.key.call(null,G__24389));
})(),(function (){var G__24390 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__24390) : cljs.core.val.call(null,G__24390));
})());
es = G__24391;
tcoll__$1 = G__24392;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__24393 = ((ascending_QMARK_)?t.left:t.right);
var G__24394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__24393;
stack__$1 = G__24394;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right(key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left(key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__24407 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24407) : cljs.core.deref.call(null,G__24407));
} else {
var init__$2 = (function (){var G__24408 = init__$1;
var G__24409 = node.key;
var G__24410 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24408,G__24409,G__24410) : f.call(null,G__24408,G__24409,G__24410));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__24411 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24411) : cljs.core.deref.call(null,G__24411));
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
var G__24412 = init__$3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24412) : cljs.core.deref.call(null,G__24412));
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__24414 = null;
var G__24414__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24414__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24414 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24414__2.call(this,self__,k);
case 3:
return G__24414__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24414.cljs$core$IFn$_invoke$arity$2 = G__24414__2;
G__24414.cljs$core$IFn$_invoke$arity$3 = G__24414__3;
return G__24414;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args24413){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24413)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__24416 = null;
var G__24416__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24416__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24416 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24416__2.call(this,self__,k);
case 3:
return G__24416__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24416.cljs$core$IFn$_invoke$arity$2 = G__24416__2;
G__24416.cljs$core$IFn$_invoke$arity$3 = G__24416__3;
return G__24416;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args24415){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24415)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__24429 = k;
var G__24430 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__24429,G__24430) : comp.call(null,G__24429,G__24430));
})();
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else {
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = (function (){var G__24449 = k;
var G__24450 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__24449,G__24450) : comp.call(null,G__24449,G__24450));
})();
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append(tree.left,tree.right);
} else {
if((c < (0))){
var del = tree_map_remove(comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = tree_map_remove(comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (function (){var G__24461 = k;
var G__24462 = tk;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__24461,G__24462) : comp.call(null,G__24461,G__24462));
})();
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__24464 = cljs.core.seq(coll);
var chunk__24465 = null;
var count__24466 = (0);
var i__24467 = (0);
while(true){
if((i__24467 < count__24466)){
var vec__24468 = chunk__24465.cljs$core$IIndexed$_nth$arity$2(null,i__24467);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24468,(1),null);
var G__24469_24481 = v;
var G__24470_24482 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24469_24481,G__24470_24482) : f.call(null,G__24469_24481,G__24470_24482));

var G__24483 = seq__24464;
var G__24484 = chunk__24465;
var G__24485 = count__24466;
var G__24486 = (i__24467 + (1));
seq__24464 = G__24483;
chunk__24465 = G__24484;
count__24466 = G__24485;
i__24467 = G__24486;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24464);
if(temp__4126__auto__){
var seq__24464__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24464__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__24464__$1);
var G__24487 = cljs.core.chunk_rest(seq__24464__$1);
var G__24488 = c__4423__auto__;
var G__24489 = cljs.core.count(c__4423__auto__);
var G__24490 = (0);
seq__24464 = G__24487;
chunk__24465 = G__24488;
count__24466 = G__24489;
i__24467 = G__24490;
continue;
} else {
var vec__24471 = cljs.core.first(seq__24464__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24471,(1),null);
var G__24472_24491 = v;
var G__24473_24492 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24472_24491,G__24473_24492) : f.call(null,G__24472_24491,G__24473_24492));

var G__24493 = cljs.core.next(seq__24464__$1);
var G__24494 = null;
var G__24495 = (0);
var G__24496 = (0);
seq__24464 = G__24493;
chunk__24465 = G__24494;
count__24466 = G__24495;
i__24467 = G__24496;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__24474 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__24474) : cljs.core.keys.call(null,G__24474));
})());
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__24475 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__24475) : cljs.core.vals.call(null,G__24475));
})());
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__24476 = k;
var G__24477 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__24476,G__24477) : self__.comp.call(null,G__24476,G__24477));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__24497 = t.left;
t = G__24497;
continue;
} else {
var G__24498 = t.right;
t = G__24498;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,(0)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__24499 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__24500 = cljs.core.next(es);
ret = G__24499;
es = G__24500;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__24501 = null;
var G__24501__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24501__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24501 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24501__2.call(this,self__,k);
case 3:
return G__24501__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24501.cljs$core$IFn$_invoke$arity$2 = G__24501__2;
G__24501.cljs$core$IFn$_invoke$arity$3 = G__24501__3;
return G__24501;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args24463){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24463)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__24478 = k;
var G__24479 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__24478,G__24479) : self__.comp.call(null,G__24478,G__24479));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__24502 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__24503 = t.left;
stack = G__24502;
t = G__24503;
continue;
} else {
var G__24504 = stack;
var G__24505 = t.right;
stack = G__24504;
t = G__24505;
continue;
}
} else {
if((c > (0))){
var G__24506 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__24507 = t.right;
stack = G__24506;
t = G__24507;
continue;
} else {
var G__24508 = stack;
var G__24509 = t.left;
stack = G__24508;
t = G__24509;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
var G__24480 = entry;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__24480) : cljs.core.key.call(null,G__24480));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__24510 = cljs.core.nnext(in$);
var G__24511 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__24510;
out = G__24511;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__24512){
var keyvals = cljs.core.seq(arglist__24512);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),true,false);
};
var array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__24513){
var keyvals = cljs.core.seq(arglist__24513);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj24517 = {};
return obj24517;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__24518 = cljs.core.nnext(kvs);
kvs = G__24518;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__24519){
var keyvals = cljs.core.seq(arglist__24519);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__24520 = cljs.core.nnext(in$);
var G__24521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__24520;
out = G__24521;
continue;
} else {
return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__24522){
var keyvals = cljs.core.seq(arglist__24522);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__24523 = cljs.core.nnext(in$);
var G__24524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__24523;
out = G__24524;
continue;
} else {
return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__24525){
var comparator = cljs.core.first(arglist__24525);
var keyvals = cljs.core.rest(arglist__24525);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__24526 = self__.mseq;
if(G__24526){
var bit__4317__auto__ = (G__24526.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4317__auto__) || (G__24526.cljs$core$INext$)){
return true;
} else {
if((!G__24526.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24526);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24526);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_key$arity$1(null);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__24527 = self__.mseq;
if(G__24527){
var bit__4317__auto__ = (G__24527.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4317__auto__) || (G__24527.cljs$core$INext$)){
return true;
} else {
if((!G__24527.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24527);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24527);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__24528 = self__.mseq;
if(G__24528){
var bit__4317__auto__ = (G__24528.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4317__auto__) || (G__24528.cljs$core$INext$)){
return true;
} else {
if((!G__24528.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24528);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24528);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_val$arity$1(null);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__24529 = self__.mseq;
if(G__24529){
var bit__4317__auto__ = (G__24529.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4317__auto__) || (G__24529.cljs$core$INext$)){
return true;
} else {
if((!G__24529.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24529);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__24529);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24530_SHARP_,p2__24531_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3636__auto__ = p1__24530_SHARP_;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__24531_SHARP_);
}),maps);
} else {
return null;
}
};
var merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__24532){
var maps = cljs.core.seq(arglist__24532);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24536 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24535,G__24536) : f.call(null,G__24535,G__24536));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3636__auto__ = m1;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__24537){
var f = cljs.core.first(arglist__24537);
var maps = cljs.core.rest(arglist__24537);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys){
var key = cljs.core.first(keys);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$14);
var G__24538 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$14))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__24539 = cljs.core.next(keys);
ret = G__24538;
keys = G__24539;
continue;
} else {
return cljs.core.with_meta(ret,cljs.core.meta(map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__24542 = cljs.core.seq(coll);
var chunk__24543 = null;
var count__24544 = (0);
var i__24545 = (0);
while(true){
if((i__24545 < count__24544)){
var vec__24546 = chunk__24543.cljs$core$IIndexed$_nth$arity$2(null,i__24545);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24546,(1),null);
var G__24547_24552 = v;
var G__24548_24553 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24547_24552,G__24548_24553) : f.call(null,G__24547_24552,G__24548_24553));

var G__24554 = seq__24542;
var G__24555 = chunk__24543;
var G__24556 = count__24544;
var G__24557 = (i__24545 + (1));
seq__24542 = G__24554;
chunk__24543 = G__24555;
count__24544 = G__24556;
i__24545 = G__24557;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24542);
if(temp__4126__auto__){
var seq__24542__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24542__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__24542__$1);
var G__24558 = cljs.core.chunk_rest(seq__24542__$1);
var G__24559 = c__4423__auto__;
var G__24560 = cljs.core.count(c__4423__auto__);
var G__24561 = (0);
seq__24542 = G__24558;
chunk__24543 = G__24559;
count__24544 = G__24560;
i__24545 = G__24561;
continue;
} else {
var vec__24549 = cljs.core.first(seq__24542__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24549,(1),null);
var G__24550_24562 = v;
var G__24551_24563 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24550_24562,G__24551_24563) : f.call(null,G__24550_24562,G__24551_24563));

var G__24564 = cljs.core.next(seq__24542__$1);
var G__24565 = null;
var G__24566 = (0);
var G__24567 = (0);
seq__24542 = G__24564;
chunk__24543 = G__24565;
count__24544 = G__24566;
i__24545 = G__24567;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__24540_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__24540_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__24568 = null;
var G__24568__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24568__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24568 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24568__2.call(this,self__,k);
case 3:
return G__24568__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24568.cljs$core$IFn$_invoke$arity$2 = G__24568__2;
G__24568.cljs$core$IFn$_invoke$arity$3 = G__24568__3;
return G__24568;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args24541){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24541)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone(items));
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__24569 = (i + (1));
var G__24570 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__24569;
out = G__24570;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__24571 = (i + (1));
var G__24572 = cljs.core._conj_BANG_(out,(items[i]));
i = G__24571;
out = G__24572;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.prototype.call = (function() {
var G__24574 = null;
var G__24574__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__24574__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__24574 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24574__2.call(this,self__,k);
case 3:
return G__24574__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24574.cljs$core$IFn$_invoke$arity$2 = G__24574__2;
G__24574.cljs$core$IFn$_invoke$arity$3 = G__24574__3;
return G__24574;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args24573){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24573)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count(self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__24577 = cljs.core.seq(coll);
var chunk__24578 = null;
var count__24579 = (0);
var i__24580 = (0);
while(true){
if((i__24580 < count__24579)){
var vec__24581 = chunk__24578.cljs$core$IIndexed$_nth$arity$2(null,i__24580);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24581,(1),null);
var G__24582_24587 = v;
var G__24583_24588 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24582_24587,G__24583_24588) : f.call(null,G__24582_24587,G__24583_24588));

var G__24589 = seq__24577;
var G__24590 = chunk__24578;
var G__24591 = count__24579;
var G__24592 = (i__24580 + (1));
seq__24577 = G__24589;
chunk__24578 = G__24590;
count__24579 = G__24591;
i__24580 = G__24592;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24577);
if(temp__4126__auto__){
var seq__24577__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24577__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__24577__$1);
var G__24593 = cljs.core.chunk_rest(seq__24577__$1);
var G__24594 = c__4423__auto__;
var G__24595 = cljs.core.count(c__4423__auto__);
var G__24596 = (0);
seq__24577 = G__24593;
chunk__24578 = G__24594;
count__24579 = G__24595;
i__24580 = G__24596;
continue;
} else {
var vec__24584 = cljs.core.first(seq__24577__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24584,(1),null);
var G__24585_24597 = v;
var G__24586_24598 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24585_24597,G__24586_24598) : f.call(null,G__24585_24597,G__24586_24598));

var G__24599 = cljs.core.next(seq__24577__$1);
var G__24600 = null;
var G__24601 = (0);
var G__24602 = (0);
seq__24577 = G__24599;
chunk__24578 = G__24600;
count__24579 = G__24601;
i__24580 = G__24602;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count(self__.tree_map) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__24575_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__24575_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core._empty(self__.tree_map),(0)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__24603 = null;
var G__24603__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24603__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24603 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24603__2.call(this,self__,k);
case 3:
return G__24603__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24603.cljs$core$IFn$_invoke$arity$2 = G__24603__2;
G__24603.cljs$core$IFn$_invoke$arity$3 = G__24603__3;
return G__24603;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args24576){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24576)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator(self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4517__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4517__auto__.length)){
var G__24604 = (i + (1));
var G__24605 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__24604;
res = G__24605;
continue;
} else {
return res;
}
break;
}
})();
return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$ = cljs.core.seq(coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq(in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__24606 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__24607 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__24606;
out = G__24607;
continue;
} else {
return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__24608__delegate = function (keys){
return cljs.core.set(keys);
};
var G__24608 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24608__delegate.call(this,keys);};
G__24608.cljs$lang$maxFixedArity = 0;
G__24608.cljs$lang$applyTo = (function (arglist__24609){
var keys = cljs.core.seq(arglist__24609);
return G__24608__delegate(keys);
});
G__24608.cljs$core$IFn$_invoke$arity$variadic = G__24608__delegate;
return G__24608;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__24610){
var keys = cljs.core.seq(arglist__24610);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__24611){
var comparator = cljs.core.first(arglist__24611);
var keys = cljs.core.rest(arglist__24611);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24612_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__24612_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val(e);
} else {
return p1__24612_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_(coll)){
var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){
var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24613_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__24613_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second(e);
} else {
return p1__24613_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__24624,seen__$1){
while(true){
var vec__24625 = p__24624;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24625,(0),null);
var xs__$1 = vec__24625;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__24626 = cljs.core.rest(s);
var G__24627 = seen__$1;
p__24624 = G__24626;
seen__$1 = G__24627;
continue;
} else {
return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1)){
var G__24628 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__24629 = cljs.core.next(s__$1);
ret = G__24628;
s__$1 = G__24629;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((function (){var G__24631 = x;
if(G__24631){
var bit__4310__auto__ = (G__24631.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4310__auto__) || (G__24631.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_name$arity$1(null);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((ks) && (vs)){
var G__24632 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__24633 = cljs.core.next(ks);
var G__24634 = cljs.core.next(vs);
map = G__24632;
ks = G__24633;
vs = G__24634;
continue;
} else {
return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((function (){var G__24645 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24645) : k.call(null,G__24645));
})() > (function (){var G__24646 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24646) : k.call(null,G__24646));
})())){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__24647__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24635_SHARP_,p2__24636_SHARP_){
return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__24635_SHARP_,p2__24636_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__24647 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24647__delegate.call(this,k,x,y,more);};
G__24647.cljs$lang$maxFixedArity = 3;
G__24647.cljs$lang$applyTo = (function (arglist__24648){
var k = cljs.core.first(arglist__24648);
arglist__24648 = cljs.core.next(arglist__24648);
var x = cljs.core.first(arglist__24648);
arglist__24648 = cljs.core.next(arglist__24648);
var y = cljs.core.first(arglist__24648);
var more = cljs.core.rest(arglist__24648);
return G__24647__delegate(k,x,y,more);
});
G__24647.cljs$core$IFn$_invoke$arity$variadic = G__24647__delegate;
return G__24647;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((function (){var G__24659 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24659) : k.call(null,G__24659));
})() < (function (){var G__24660 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__24660) : k.call(null,G__24660));
})())){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__24661__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24649_SHARP_,p2__24650_SHARP_){
return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__24649_SHARP_,p2__24650_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__24661 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24661__delegate.call(this,k,x,y,more);};
G__24661.cljs$lang$maxFixedArity = 3;
G__24661.cljs$lang$applyTo = (function (arglist__24662){
var k = cljs.core.first(arglist__24662);
arglist__24662 = cljs.core.next(arglist__24662);
var x = cljs.core.first(arglist__24662);
arglist__24662 = cljs.core.next(arglist__24662);
var y = cljs.core.first(arglist__24662);
var more = cljs.core.rest(arglist__24662);
return G__24661__delegate(k,x,y,more);
});
G__24661.cljs$core$IFn$_invoke$arity$variadic = G__24661__delegate;
return G__24661;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function array_list(){
return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list();
return ((function (a){
return (function() {
var G__24679 = null;
var G__24679__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24679__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__24674 = result;
var G__24675 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24674,G__24675) : rf.call(null,G__24674,G__24675));
})());
})());
var G__24676 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24676) : rf.call(null,G__24676));
});
var G__24679__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

var G__24677 = result;
var G__24678 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24677,G__24678) : rf.call(null,G__24677,G__24678));
} else {
return result;
}
});
G__24679 = function(result,input){
switch(arguments.length){
case 0:
return G__24679__0.call(this);
case 1:
return G__24679__1.call(this,result);
case 2:
return G__24679__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24679.cljs$core$IFn$_invoke$arity$0 = G__24679__0;
G__24679.cljs$core$IFn$_invoke$arity$1 = G__24679__1;
G__24679.cljs$core$IFn$_invoke$arity$2 = G__24679__2;
return G__24679;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){
return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__24692 = null;
var G__24692__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24692__1 = (function (result){
var G__24687 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24687) : rf.call(null,G__24687));
});
var G__24692__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__24688 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24688) : pred.call(null,G__24688));
})())){
var G__24689 = result;
var G__24690 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24689,G__24690) : rf.call(null,G__24689,G__24690));
} else {
return cljs.core.reduced(result);
}
});
G__24692 = function(result,input){
switch(arguments.length){
case 0:
return G__24692__0.call(this);
case 1:
return G__24692__1.call(this,result);
case 2:
return G__24692__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24692.cljs$core$IFn$_invoke$arity$0 = G__24692__0;
G__24692.cljs$core$IFn$_invoke$arity$1 = G__24692__1;
G__24692.cljs$core$IFn$_invoke$arity$2 = G__24692__2;
return G__24692;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_((function (){var G__24691 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24691) : pred.call(null,G__24691));
})())){
return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
var G__24697 = (function (){var G__24699 = cljs.core._entry_key(sc,e);
var G__24700 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__24699,G__24700) : comp.call(null,G__24699,G__24700));
})();
var G__24698 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__24697,G__24698) : test.call(null,G__24697,G__24698));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__24704 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24704,(0),null);
var s = vec__24704;
if(cljs.core.truth_((function (){var G__24705 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__24705) : include.call(null,G__24705));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__24706 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24706,(0),null);
var s = vec__24706;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__24710 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24710,(0),null);
var s = vec__24710;
if(cljs.core.truth_((function (){var G__24711 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__24711) : include.call(null,G__24711));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__24712 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24712,(0),null);
var s = vec__24712;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not(cljs.core._seq(rng__$1))){
return (0);
} else {
var G__24713 = ((self__.end - self__.start) / self__.step);
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__24713) : Math.ceil.call(null,G__24713));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential(rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = (function (){var G__24714 = ret;
var G__24715 = i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24714,G__24715) : f.call(null,G__24714,G__24715));
})();
if(cljs.core.reduced_QMARK_(ret__$1)){
var G__24716 = ret__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24716) : cljs.core.deref.call(null,G__24716));
} else {
var G__24717 = (i + self__.step);
var G__24718 = ret__$1;
i = G__24717;
ret = G__24718;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq(rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq(rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons(o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){
return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){
return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__24736 = null;
var G__24736__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24736__1 = (function (result){
var G__24733 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24733) : rf.call(null,G__24733));
});
var G__24736__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
if((cljs.core.rem(i,n) === (0))){
var G__24734 = result;
var G__24735 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24734,G__24735) : rf.call(null,G__24734,G__24735));
} else {
return result;
}
});
G__24736 = function(result,input){
switch(arguments.length){
case 0:
return G__24736__0.call(this);
case 1:
return G__24736__1.call(this,result);
case 2:
return G__24736__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24736.cljs$core$IFn$_invoke$arity$0 = G__24736__0;
G__24736.cljs$core$IFn$_invoke$arity$1 = G__24736__1;
G__24736.cljs$core$IFn$_invoke$arity$2 = G__24736__2;
return G__24736;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else {
return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list();
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (a,pa){
return (function() {
var G__24758 = null;
var G__24758__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__24758__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__24749 = result;
var G__24750 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24749,G__24750) : rf.call(null,G__24749,G__24750));
})());
})());
var G__24751 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__24751) : rf.call(null,G__24751));
});
var G__24758__2 = (function (result,input){
var pval = (function (){var G__24752 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24752) : cljs.core.deref.call(null,G__24752));
})();
var val = (function (){var G__24753 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24753) : f.call(null,G__24753));
})();
cljs.core.vreset_BANG_(pa,val);

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$15)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (function (){var G__24754 = result;
var G__24755 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__24754,G__24755) : rf.call(null,G__24754,G__24755));
})();
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__24758 = function(result,input){
switch(arguments.length){
case 0:
return G__24758__0.call(this);
case 1:
return G__24758__1.call(this,result);
case 2:
return G__24758__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24758.cljs$core$IFn$_invoke$arity$0 = G__24758__0;
G__24758.cljs$core$IFn$_invoke$arity$1 = G__24758__1;
G__24758.cljs$core$IFn$_invoke$arity$2 = G__24758__2;
return G__24758;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var fst = cljs.core.first(s);
var fv = (function (){var G__24756 = fst;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24756) : f.call(null,G__24756));
})();
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__24737_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__24757 = p1__24737_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24757) : f.call(null,G__24757));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));
return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else {
return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__24767 = init;
var G__24768 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24767,G__24768) : f.call(null,G__24767,G__24768));
})(),cljs.core.rest(s));
} else {
return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__24863 = null;
var G__24863__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__24863__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24821 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24821) : f.call(null,G__24821));
})()],null));
});
var G__24863__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24822 = x;
var G__24823 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24822,G__24823) : f.call(null,G__24822,G__24823));
})()],null));
});
var G__24863__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24824 = x;
var G__24825 = y;
var G__24826 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24824,G__24825,G__24826) : f.call(null,G__24824,G__24825,G__24826));
})()],null));
});
var G__24863__4 = (function() { 
var G__24864__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__24864 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24864__delegate.call(this,x,y,z,args);};
G__24864.cljs$lang$maxFixedArity = 3;
G__24864.cljs$lang$applyTo = (function (arglist__24865){
var x = cljs.core.first(arglist__24865);
arglist__24865 = cljs.core.next(arglist__24865);
var y = cljs.core.first(arglist__24865);
arglist__24865 = cljs.core.next(arglist__24865);
var z = cljs.core.first(arglist__24865);
var args = cljs.core.rest(arglist__24865);
return G__24864__delegate(x,y,z,args);
});
G__24864.cljs$core$IFn$_invoke$arity$variadic = G__24864__delegate;
return G__24864;
})()
;
G__24863 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24863__0.call(this);
case 1:
return G__24863__1.call(this,x);
case 2:
return G__24863__2.call(this,x,y);
case 3:
return G__24863__3.call(this,x,y,z);
default:
return G__24863__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24863.cljs$lang$maxFixedArity = 3;
G__24863.cljs$lang$applyTo = G__24863__4.cljs$lang$applyTo;
G__24863.cljs$core$IFn$_invoke$arity$0 = G__24863__0;
G__24863.cljs$core$IFn$_invoke$arity$1 = G__24863__1;
G__24863.cljs$core$IFn$_invoke$arity$2 = G__24863__2;
G__24863.cljs$core$IFn$_invoke$arity$3 = G__24863__3;
G__24863.cljs$core$IFn$_invoke$arity$variadic = G__24863__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24863;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__24866 = null;
var G__24866__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__24866__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24827 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24827) : f.call(null,G__24827));
})(),(function (){var G__24828 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__24828) : g.call(null,G__24828));
})()],null));
});
var G__24866__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24829 = x;
var G__24830 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24829,G__24830) : f.call(null,G__24829,G__24830));
})(),(function (){var G__24831 = x;
var G__24832 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__24831,G__24832) : g.call(null,G__24831,G__24832));
})()],null));
});
var G__24866__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24833 = x;
var G__24834 = y;
var G__24835 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24833,G__24834,G__24835) : f.call(null,G__24833,G__24834,G__24835));
})(),(function (){var G__24836 = x;
var G__24837 = y;
var G__24838 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__24836,G__24837,G__24838) : g.call(null,G__24836,G__24837,G__24838));
})()],null));
});
var G__24866__4 = (function() { 
var G__24867__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__24867 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24867__delegate.call(this,x,y,z,args);};
G__24867.cljs$lang$maxFixedArity = 3;
G__24867.cljs$lang$applyTo = (function (arglist__24868){
var x = cljs.core.first(arglist__24868);
arglist__24868 = cljs.core.next(arglist__24868);
var y = cljs.core.first(arglist__24868);
arglist__24868 = cljs.core.next(arglist__24868);
var z = cljs.core.first(arglist__24868);
var args = cljs.core.rest(arglist__24868);
return G__24867__delegate(x,y,z,args);
});
G__24867.cljs$core$IFn$_invoke$arity$variadic = G__24867__delegate;
return G__24867;
})()
;
G__24866 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24866__0.call(this);
case 1:
return G__24866__1.call(this,x);
case 2:
return G__24866__2.call(this,x,y);
case 3:
return G__24866__3.call(this,x,y,z);
default:
return G__24866__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24866.cljs$lang$maxFixedArity = 3;
G__24866.cljs$lang$applyTo = G__24866__4.cljs$lang$applyTo;
G__24866.cljs$core$IFn$_invoke$arity$0 = G__24866__0;
G__24866.cljs$core$IFn$_invoke$arity$1 = G__24866__1;
G__24866.cljs$core$IFn$_invoke$arity$2 = G__24866__2;
G__24866.cljs$core$IFn$_invoke$arity$3 = G__24866__3;
G__24866.cljs$core$IFn$_invoke$arity$variadic = G__24866__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24866;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__24869 = null;
var G__24869__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__24869__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24839 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24839) : f.call(null,G__24839));
})(),(function (){var G__24840 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__24840) : g.call(null,G__24840));
})(),(function (){var G__24841 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__24841) : h.call(null,G__24841));
})()],null));
});
var G__24869__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24842 = x;
var G__24843 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24842,G__24843) : f.call(null,G__24842,G__24843));
})(),(function (){var G__24844 = x;
var G__24845 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__24844,G__24845) : g.call(null,G__24844,G__24845));
})(),(function (){var G__24846 = x;
var G__24847 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__24846,G__24847) : h.call(null,G__24846,G__24847));
})()],null));
});
var G__24869__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__24848 = x;
var G__24849 = y;
var G__24850 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24848,G__24849,G__24850) : f.call(null,G__24848,G__24849,G__24850));
})(),(function (){var G__24851 = x;
var G__24852 = y;
var G__24853 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__24851,G__24852,G__24853) : g.call(null,G__24851,G__24852,G__24853));
})(),(function (){var G__24854 = x;
var G__24855 = y;
var G__24856 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__24854,G__24855,G__24856) : h.call(null,G__24854,G__24855,G__24856));
})()],null));
});
var G__24869__4 = (function() { 
var G__24870__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__24870 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24870__delegate.call(this,x,y,z,args);};
G__24870.cljs$lang$maxFixedArity = 3;
G__24870.cljs$lang$applyTo = (function (arglist__24871){
var x = cljs.core.first(arglist__24871);
arglist__24871 = cljs.core.next(arglist__24871);
var y = cljs.core.first(arglist__24871);
arglist__24871 = cljs.core.next(arglist__24871);
var z = cljs.core.first(arglist__24871);
var args = cljs.core.rest(arglist__24871);
return G__24870__delegate(x,y,z,args);
});
G__24870.cljs$core$IFn$_invoke$arity$variadic = G__24870__delegate;
return G__24870;
})()
;
G__24869 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24869__0.call(this);
case 1:
return G__24869__1.call(this,x);
case 2:
return G__24869__2.call(this,x,y);
case 3:
return G__24869__3.call(this,x,y,z);
default:
return G__24869__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24869.cljs$lang$maxFixedArity = 3;
G__24869.cljs$lang$applyTo = G__24869__4.cljs$lang$applyTo;
G__24869.cljs$core$IFn$_invoke$arity$0 = G__24869__0;
G__24869.cljs$core$IFn$_invoke$arity$1 = G__24869__1;
G__24869.cljs$core$IFn$_invoke$arity$2 = G__24869__2;
G__24869.cljs$core$IFn$_invoke$arity$3 = G__24869__3;
G__24869.cljs$core$IFn$_invoke$arity$variadic = G__24869__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24869;
})()
});
var juxt__4 = (function() { 
var G__24872__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__24873 = null;
var G__24873__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24769_SHARP_,p2__24770_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24769_SHARP_,(function (){return (p2__24770_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__24770_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__24770_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24873__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24771_SHARP_,p2__24772_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24771_SHARP_,(function (){var G__24857 = x;
return (p2__24772_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__24772_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24857) : p2__24772_SHARP_.call(null,G__24857));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24873__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24773_SHARP_,p2__24774_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24773_SHARP_,(function (){var G__24858 = x;
var G__24859 = y;
return (p2__24774_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__24774_SHARP_.cljs$core$IFn$_invoke$arity$2(G__24858,G__24859) : p2__24774_SHARP_.call(null,G__24858,G__24859));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24873__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24775_SHARP_,p2__24776_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24775_SHARP_,(function (){var G__24860 = x;
var G__24861 = y;
var G__24862 = z;
return (p2__24776_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__24776_SHARP_.cljs$core$IFn$_invoke$arity$3(G__24860,G__24861,G__24862) : p2__24776_SHARP_.call(null,G__24860,G__24861,G__24862));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24873__4 = (function() { 
var G__24874__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__24777_SHARP_,p2__24778_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24777_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__24778_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__24874 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24874__delegate.call(this,x,y,z,args);};
G__24874.cljs$lang$maxFixedArity = 3;
G__24874.cljs$lang$applyTo = (function (arglist__24875){
var x = cljs.core.first(arglist__24875);
arglist__24875 = cljs.core.next(arglist__24875);
var y = cljs.core.first(arglist__24875);
arglist__24875 = cljs.core.next(arglist__24875);
var z = cljs.core.first(arglist__24875);
var args = cljs.core.rest(arglist__24875);
return G__24874__delegate(x,y,z,args);
});
G__24874.cljs$core$IFn$_invoke$arity$variadic = G__24874__delegate;
return G__24874;
})()
;
G__24873 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24873__0.call(this);
case 1:
return G__24873__1.call(this,x);
case 2:
return G__24873__2.call(this,x,y);
case 3:
return G__24873__3.call(this,x,y,z);
default:
return G__24873__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24873.cljs$lang$maxFixedArity = 3;
G__24873.cljs$lang$applyTo = G__24873__4.cljs$lang$applyTo;
G__24873.cljs$core$IFn$_invoke$arity$0 = G__24873__0;
G__24873.cljs$core$IFn$_invoke$arity$1 = G__24873__1;
G__24873.cljs$core$IFn$_invoke$arity$2 = G__24873__2;
G__24873.cljs$core$IFn$_invoke$arity$3 = G__24873__3;
G__24873.cljs$core$IFn$_invoke$arity$variadic = G__24873__4.cljs$core$IFn$_invoke$arity$variadic;
return G__24873;
})()
;})(fs__$1))
};
var G__24872 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24872__delegate.call(this,f,g,h,fs);};
G__24872.cljs$lang$maxFixedArity = 3;
G__24872.cljs$lang$applyTo = (function (arglist__24876){
var f = cljs.core.first(arglist__24876);
arglist__24876 = cljs.core.next(arglist__24876);
var g = cljs.core.first(arglist__24876);
arglist__24876 = cljs.core.next(arglist__24876);
var h = cljs.core.first(arglist__24876);
var fs = cljs.core.rest(arglist__24876);
return G__24872__delegate(f,g,h,fs);
});
G__24872.cljs$core$IFn$_invoke$arity$variadic = G__24872__delegate;
return G__24872;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll)){
var G__24877 = cljs.core.next(coll);
coll = G__24877;
continue;
} else {
return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq(coll)) && ((n > (0)))){
var G__24878 = (n - (1));
var G__24879 = cljs.core.next(coll);
n = G__24878;
coll = G__24879;
continue;
} else {
return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);

return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);

return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s)){
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__24883 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24883,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24883,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24883,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_24891 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__24892_24898 = cljs.core.first(coll);
var G__24893_24899 = writer;
var G__24894_24900 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24892_24898,G__24893_24899,G__24894_24900) : print_one.call(null,G__24892_24898,G__24893_24899,G__24894_24900));
} else {
}

var coll_24901__$1 = cljs.core.next(coll);
var n_24902 = (cljs.core.constant$keyword$5.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_24901__$1) && (((n_24902 == null)) || (!((n_24902 === (0)))))){
cljs.core._write(writer,sep);

var G__24895_24903 = cljs.core.first(coll_24901__$1);
var G__24896_24904 = writer;
var G__24897_24905 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24895_24903,G__24896_24904,G__24897_24905) : print_one.call(null,G__24895_24903,G__24896_24904,G__24897_24905));

var G__24906 = cljs.core.next(coll_24901__$1);
var G__24907 = (n_24902 - (1));
coll_24901__$1 = G__24906;
n_24902 = G__24907;
continue;
} else {
if((cljs.core.seq(coll_24901__$1)) && ((n_24902 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_24891;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__24912 = cljs.core.seq(ss);
var chunk__24913 = null;
var count__24914 = (0);
var i__24915 = (0);
while(true){
if((i__24915 < count__24914)){
var s = chunk__24913.cljs$core$IIndexed$_nth$arity$2(null,i__24915);
cljs.core._write(writer,s);

var G__24916 = seq__24912;
var G__24917 = chunk__24913;
var G__24918 = count__24914;
var G__24919 = (i__24915 + (1));
seq__24912 = G__24916;
chunk__24913 = G__24917;
count__24914 = G__24918;
i__24915 = G__24919;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24912);
if(temp__4126__auto__){
var seq__24912__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24912__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__24912__$1);
var G__24920 = cljs.core.chunk_rest(seq__24912__$1);
var G__24921 = c__4423__auto__;
var G__24922 = cljs.core.count(c__4423__auto__);
var G__24923 = (0);
seq__24912 = G__24920;
chunk__24913 = G__24921;
count__24914 = G__24922;
i__24915 = G__24923;
continue;
} else {
var s = cljs.core.first(seq__24912__$1);
cljs.core._write(writer,s);

var G__24924 = cljs.core.next(seq__24912__$1);
var G__24925 = null;
var G__24926 = (0);
var G__24927 = (0);
seq__24912 = G__24924;
chunk__24913 = G__24925;
count__24914 = G__24926;
i__24915 = G__24927;
continue;
}
} else {
return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__24928){
var writer = cljs.core.first(arglist__24928);
var ss = cljs.core.rest(arglist__24928);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));

return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj24930 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj24930;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace((function (){var G__24933 = "[\\\\\"\b\f\n\r\t]";
var G__24934 = "g";
return RegExp(G__24933,G__24934);
})(),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write(writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__3624__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$3);
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = (function (){var G__24948 = obj;
if(G__24948){
var bit__4317__auto__ = (G__24948.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4317__auto__) || (G__24948.cljs$core$IMeta$)){
return true;
} else {
if((!G__24948.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__24948);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__24948);
}
})();
if(and__3624__auto____$1){
return cljs.core.meta(obj);
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})())){
cljs.core._write(writer,"^");

pr_writer(cljs.core.meta(obj),writer,opts);

cljs.core._write(writer," ");
} else {
}

if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__24949 = obj;
if(G__24949){
var bit__4310__auto__ = (G__24949.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4310__auto__) || (G__24949.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else {
if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_(obj)){
cljs.core._write(writer,"#js ");

var G__24950 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__24951 = pr_writer;
var G__24952 = writer;
var G__24953 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__24950,G__24951,G__24952,G__24953) : cljs.core.print_map.call(null,G__24950,G__24951,G__24952,G__24953));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(cljs.core.truth_((function (){var G__24954 = obj;
return goog.isString(G__24954);
})())){
if(cljs.core.truth_(cljs.core.constant$keyword$2.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write(writer,cljs.core.quote_string(obj));
} else {
return cljs.core._write(writer,obj);
}
} else {
if(cljs.core.fn_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len)){
var G__24956 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__24956;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else {
if(cljs.core.regexp_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else {
if((function (){var G__24955 = obj;
if(G__24955){
var bit__4317__auto__ = (G__24955.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4317__auto__) || (G__24955.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__24955.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__24955);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__24955);
}
})()){
return cljs.core._pr_writer(obj,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);

var seq__24961 = cljs.core.seq(cljs.core.next(objs));
var chunk__24962 = null;
var count__24963 = (0);
var i__24964 = (0);
while(true){
if((i__24964 < count__24963)){
var obj = chunk__24962.cljs$core$IIndexed$_nth$arity$2(null,i__24964);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__24965 = seq__24961;
var G__24966 = chunk__24962;
var G__24967 = count__24963;
var G__24968 = (i__24964 + (1));
seq__24961 = G__24965;
chunk__24962 = G__24966;
count__24963 = G__24967;
i__24964 = G__24968;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24961);
if(temp__4126__auto__){
var seq__24961__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24961__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__24961__$1);
var G__24969 = cljs.core.chunk_rest(seq__24961__$1);
var G__24970 = c__4423__auto__;
var G__24971 = cljs.core.count(c__4423__auto__);
var G__24972 = (0);
seq__24961 = G__24969;
chunk__24962 = G__24970;
count__24963 = G__24971;
i__24964 = G__24972;
continue;
} else {
var obj = cljs.core.first(seq__24961__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__24973 = cljs.core.next(seq__24961__$1);
var G__24974 = null;
var G__24975 = (0);
var G__24976 = (0);
seq__24961 = G__24973;
chunk__24962 = G__24974;
count__24963 = G__24975;
i__24964 = G__24976;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1))){
return cljs.core.flush();
} else {
return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__24977){
var objs = cljs.core.seq(arglist__24977);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__24978){
var objs = cljs.core.seq(arglist__24978);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__24979){
var objs = cljs.core.seq(arglist__24979);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__24980){
var objs = cljs.core.seq(arglist__24980);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__24981){
var objs = cljs.core.seq(arglist__24981);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var println = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__24982){
var objs = cljs.core.seq(arglist__24982);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__24983){
var objs = cljs.core.seq(arglist__24983);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__24984){
var objs = cljs.core.seq(arglist__24984);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__24991_24997 = cljs.core.key(e);
var G__24992_24998 = w;
var G__24993_24999 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24991_24997,G__24992_24998,G__24993_24999) : print_one.call(null,G__24991_24997,G__24992_24998,G__24993_24999));

cljs.core._write(w," ");

var G__24994 = cljs.core.val(e);
var G__24995 = w;
var G__24996 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__24994,G__24995,G__24996) : print_one.call(null,G__24994,G__24995,G__24996));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Volatile: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(a__$1.sym,writer,opts);
});

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write(writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_keywords(x__$1,y);
});

cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__25000){
var iref = cljs.core.first(arglist__25000);
arglist__25000 = cljs.core.next(arglist__25000);
var f = cljs.core.first(arglist__25000);
var args = cljs.core.rest(arglist__25000);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = (function (){var G__25003 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25003) : cljs.core.atom.call(null,G__25003));
})();
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not(self__.f);
});

cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function __GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x)){
var G__25005 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25005) : cljs.core.deref.call(null,G__25005));
} else {
return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){
return (function (p1__25006_SHARP_,p2__25007_SHARP_){
var ret = (function (){var G__25010 = p1__25006_SHARP_;
var G__25011 = p2__25007_SHARP_;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__25010,G__25011) : rf.call(null,G__25010,G__25011));
})();
if(cljs.core.reduced_QMARK_(ret)){
return cljs.core.reduced(ret);
} else {
return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){
var rf1 = cljs.core.preserving_reduced(rf);
return ((function (rf1){
return (function() {
var G__25014 = null;
var G__25014__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__25014__1 = (function (result){
var G__25013 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__25013) : rf.call(null,G__25013));
});
var G__25014__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__25014 = function(result,input){
switch(arguments.length){
case 0:
return G__25014__0.call(this);
case 1:
return G__25014__1.call(this,result);
case 2:
return G__25014__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25014.cljs$core$IFn$_invoke$arity$0 = G__25014__0;
G__25014.cljs$core$IFn$_invoke$arity$1 = G__25014__1;
G__25014.cljs$core$IFn$_invoke$arity$2 = G__25014__2;
return G__25014;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){
return (function (rf){
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (pa){
return (function() {
var G__25023 = null;
var G__25023__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__25023__1 = (function (result){
var G__25019 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__25019) : rf.call(null,G__25019));
});
var G__25023__2 = (function (result,input){
var prior = (function (){var G__25020 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25020) : cljs.core.deref.call(null,G__25020));
})();
cljs.core.vreset_BANG_(pa,input);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
var G__25021 = result;
var G__25022 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__25021,G__25022) : rf.call(null,G__25021,G__25022));
}
});
G__25023 = function(result,input){
switch(arguments.length){
case 0:
return G__25023__0.call(this);
case 1:
return G__25023__1.call(this,result);
case 2:
return G__25023__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25023.cljs$core$IFn$_invoke$arity$0 = G__25023__0;
G__25023.cljs$core$IFn$_invoke$arity$1 = G__25023__1;
G__25023.cljs$core$IFn$_invoke$arity$2 = G__25023__2;
return G__25023;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4614__auto__ = this;
return cljs.core.es6_iterator(this__4614__auto__);
}));
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25025_SHARP_,p2__25024_SHARP_){
var G__25027 = p2__25024_SHARP_;
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__25027) : proc.call(null,G__25027));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj25029 = {};
return obj25029;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3624__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (cljs.core._clj__GT_js[(function (){var G__25033 = x__4280__auto__;
return goog.typeOf(G__25033);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3624__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (cljs.core._key__GT_js[(function (){var G__25037 = x__4280__auto__;
return goog.typeOf(G__25037);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__25040 = k;
if(G__25040){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__25040.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__25040.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__25040);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__25040);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
var G__25041 = k;
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__25041) : cljs.core.clj__GT_js.call(null,G__25041));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__25057 = x;
if(G__25057){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__25057.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__25057.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__25057);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__25057);
}
})()){
return cljs.core._clj__GT_js(x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
var m = (function (){var obj25059 = {};
return obj25059;
})();
var seq__25060_25070 = cljs.core.seq(x);
var chunk__25061_25071 = null;
var count__25062_25072 = (0);
var i__25063_25073 = (0);
while(true){
if((i__25063_25073 < count__25062_25072)){
var vec__25064_25074 = chunk__25061_25071.cljs$core$IIndexed$_nth$arity$2(null,i__25063_25073);
var k_25075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25064_25074,(0),null);
var v_25076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25064_25074,(1),null);
(m[cljs.core.key__GT_js(k_25075)] = clj__GT_js(v_25076));

var G__25077 = seq__25060_25070;
var G__25078 = chunk__25061_25071;
var G__25079 = count__25062_25072;
var G__25080 = (i__25063_25073 + (1));
seq__25060_25070 = G__25077;
chunk__25061_25071 = G__25078;
count__25062_25072 = G__25079;
i__25063_25073 = G__25080;
continue;
} else {
var temp__4126__auto___25081 = cljs.core.seq(seq__25060_25070);
if(temp__4126__auto___25081){
var seq__25060_25082__$1 = temp__4126__auto___25081;
if(cljs.core.chunked_seq_QMARK_(seq__25060_25082__$1)){
var c__4423__auto___25083 = cljs.core.chunk_first(seq__25060_25082__$1);
var G__25084 = cljs.core.chunk_rest(seq__25060_25082__$1);
var G__25085 = c__4423__auto___25083;
var G__25086 = cljs.core.count(c__4423__auto___25083);
var G__25087 = (0);
seq__25060_25070 = G__25084;
chunk__25061_25071 = G__25085;
count__25062_25072 = G__25086;
i__25063_25073 = G__25087;
continue;
} else {
var vec__25065_25088 = cljs.core.first(seq__25060_25082__$1);
var k_25089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25065_25088,(0),null);
var v_25090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25065_25088,(1),null);
(m[cljs.core.key__GT_js(k_25089)] = clj__GT_js(v_25090));

var G__25091 = cljs.core.next(seq__25060_25082__$1);
var G__25092 = null;
var G__25093 = (0);
var G__25094 = (0);
seq__25060_25070 = G__25091;
chunk__25061_25071 = G__25092;
count__25062_25072 = G__25093;
i__25063_25073 = G__25094;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_(x)){
var arr = [];
var seq__25066_25095 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));
var chunk__25067_25096 = null;
var count__25068_25097 = (0);
var i__25069_25098 = (0);
while(true){
if((i__25069_25098 < count__25068_25097)){
var x_25099__$1 = chunk__25067_25096.cljs$core$IIndexed$_nth$arity$2(null,i__25069_25098);
arr.push(x_25099__$1);

var G__25100 = seq__25066_25095;
var G__25101 = chunk__25067_25096;
var G__25102 = count__25068_25097;
var G__25103 = (i__25069_25098 + (1));
seq__25066_25095 = G__25100;
chunk__25067_25096 = G__25101;
count__25068_25097 = G__25102;
i__25069_25098 = G__25103;
continue;
} else {
var temp__4126__auto___25104 = cljs.core.seq(seq__25066_25095);
if(temp__4126__auto___25104){
var seq__25066_25105__$1 = temp__4126__auto___25104;
if(cljs.core.chunked_seq_QMARK_(seq__25066_25105__$1)){
var c__4423__auto___25106 = cljs.core.chunk_first(seq__25066_25105__$1);
var G__25107 = cljs.core.chunk_rest(seq__25066_25105__$1);
var G__25108 = c__4423__auto___25106;
var G__25109 = cljs.core.count(c__4423__auto___25106);
var G__25110 = (0);
seq__25066_25095 = G__25107;
chunk__25067_25096 = G__25108;
count__25068_25097 = G__25109;
i__25069_25098 = G__25110;
continue;
} else {
var x_25111__$1 = cljs.core.first(seq__25066_25105__$1);
arr.push(x_25111__$1);

var G__25112 = cljs.core.next(seq__25066_25105__$1);
var G__25113 = null;
var G__25114 = (0);
var G__25115 = (0);
seq__25066_25095 = G__25112;
chunk__25067_25096 = G__25113;
count__25068_25097 = G__25114;
i__25069_25098 = G__25115;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj25117 = {};
return obj25117;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3624__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (cljs.core._js__GT_clj[(function (){var G__25121 = x__4280__auto__;
return goog.typeOf(G__25121);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){
return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__25178__delegate = function (x,opts){
var map__25151 = opts;
var map__25151__$1 = ((cljs.core.seq_QMARK_(map__25151))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25151):map__25151);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25151__$1,cljs.core.constant$keyword$16);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__25151,map__25151__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__25167 = x__$1;
if(G__25167){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__25167.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__25167.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__25167);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__25167);
}
})()){
return cljs.core._js__GT_clj(x__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = ((function (map__25151,map__25151__$1,keywordize_keys,keyfn){
return (function iter__25168(s__25169){
return (new cljs.core.LazySeq(null,((function (map__25151,map__25151__$1,keywordize_keys,keyfn){
return (function (){
var s__25169__$1 = s__25169;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__25169__$1);
if(temp__4126__auto__){
var s__25169__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25169__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__25169__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__25171 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__25170 = (0);
while(true){
if((i__25170 < size__4391__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__25170);
cljs.core.chunk_append(b__25171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25176 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__25176) : keyfn.call(null,G__25176));
})(),thisfn((x__$1[k]))], null));

var G__25179 = (i__25170 + (1));
i__25170 = G__25179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25171),iter__25168(cljs.core.chunk_rest(s__25169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25171),null);
}
} else {
var k = cljs.core.first(s__25169__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25177 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__25177) : keyfn.call(null,G__25177));
})(),thisfn((x__$1[k]))], null),iter__25168(cljs.core.rest(s__25169__$2)));
}
} else {
return null;
}
break;
}
});})(map__25151,map__25151__$1,keywordize_keys,keyfn))
,null,null));
});})(map__25151,map__25151__$1,keywordize_keys,keyfn))
;
return iter__4392__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__25151,map__25151__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__25178 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25178__delegate.call(this,x,opts);};
G__25178.cljs$lang$maxFixedArity = 1;
G__25178.cljs$lang$applyTo = (function (arglist__25180){
var x = cljs.core.first(arglist__25180);
var opts = cljs.core.rest(arglist__25180);
return G__25178__delegate(x,opts);
});
G__25178.cljs$core$IFn$_invoke$arity$variadic = G__25178__delegate;
return G__25178;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = (function (){var G__25183 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25183) : cljs.core.atom.call(null,G__25183));
})();
return ((function (mem){
return (function() { 
var G__25185__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__25184 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25184) : cljs.core.deref.call(null,G__25184));
})(),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__25185 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25185__delegate.call(this,args);};
G__25185.cljs$lang$maxFixedArity = 0;
G__25185.cljs$lang$applyTo = (function (arglist__25186){
var args = cljs.core.seq(arglist__25186);
return G__25185__delegate(args);
});
G__25185.cljs$core$IFn$_invoke$arity$variadic = G__25185__delegate;
return G__25185;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();
if(cljs.core.fn_QMARK_(ret)){
var G__25188 = ret;
f = G__25188;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__25189__delegate = function (f,args){
return trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__25189 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25189__delegate.call(this,f,args);};
G__25189.cljs$lang$maxFixedArity = 1;
G__25189.cljs$lang$applyTo = (function (arglist__25190){
var f = cljs.core.first(arglist__25190);
var args = cljs.core.rest(arglist__25190);
return G__25189__delegate(f,args);
});
G__25189.cljs$core$IFn$_invoke$arity$variadic = G__25189__delegate;
return G__25189;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){
return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
var G__25193 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__25193) : Math.floor.call(null,G__25193));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__25195 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25195) : f.call(null,G__25195));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$18,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$19,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = (function (){var G__25197 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25197) : cljs.core.atom.call(null,G__25197));
})();
} else {
}

return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__25198){
var f = cljs.core.first(arglist__25198);
var args = cljs.core.rest(arglist__25198);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__25263 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25263) : cljs.core.deref.call(null,G__25263));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3636__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
var and__3624__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3624__auto__){
var and__3624__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3624__auto____$1){
var and__3624__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3624__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__25288 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__25286 = i;
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__25286) : child.call(null,G__25286));
})(),(function (){var G__25287 = i;
return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__25287) : parent.call(null,G__25287));
})());
var G__25289 = (i + (1));
ret = G__25288;
i = G__25289;
continue;
}
break;
}
} else {
return and__3624__auto____$2;
}
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__25293 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25293) : cljs.core.deref.call(null,G__25293));
})(),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__25297 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25297) : cljs.core.deref.call(null,G__25297));
})(),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__25301 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25301) : cljs.core.deref.call(null,G__25301));
})(),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

var tp = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var td = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h);
var ta = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__25310 = target;
return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__25310) : targets.call(null,G__25310));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__25311 = source;
return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__25311) : sources.call(null,G__25311));
})()));
});})(tp,td,ta))
;
var or__3636__auto__ = ((cljs.core.contains_QMARK_((function (){var G__25315 = tag;
return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__25315) : tp.call(null,G__25315));
})(),parent))?null:(function (){
if(cljs.core.contains_QMARK_((function (){var G__25316 = tag;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__25316) : ta.call(null,G__25316));
})(),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((function (){var G__25317 = parent;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__25317) : ta.call(null,G__25317));
})(),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$19,tf(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$18,tf(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_((function (){var G__25324 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__25324) : parentMap.call(null,G__25324));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__25325 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__25325) : parentMap.call(null,G__25325));
})(),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__25318_SHARP_){
return cljs.core.cons(cljs.core.first(p1__25318_SHARP_),cljs.core.interpose(cljs.core.first(p1__25318_SHARP_),cljs.core.second(p1__25318_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((function (){var G__25326 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__25326) : parentMap.call(null,G__25326));
})(),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__25319_SHARP_,p2__25320_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__25319_SHARP_,p2__25320_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else {
return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){
var G__25329 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25329) : cljs.core.deref.call(null,G__25329));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
var G__25330 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25330) : cljs.core.deref.call(null,G__25330));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = (function (){var G__25346 = prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25346) : cljs.core.deref.call(null,G__25346));
})().call(null,x);
var or__3636__auto__ = (cljs.core.truth_((function (){var and__3624__auto__ = xprefs;
if(cljs.core.truth_(and__3624__auto__)){
var G__25348 = y;
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__25348) : xprefs.call(null,G__25348));
} else {
return and__3624__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__25349 = cljs.core.rest(ps);
ps = G__25349;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__25350 = cljs.core.rest(ps);
ps = G__25350;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3636__auto____$2)){
return or__3636__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3636__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__25364){
var vec__25365 = p__25364;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25365,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25365,(1),null);
var e = vec__25365;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__25366 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25366) : cljs.core.deref.call(null,G__25366));
})(),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3636__auto__ = (be == null);
if(or__3636__auto__){
return or__3636__auto__;
} else {
return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,(function (){var G__25367 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25367) : cljs.core.deref.call(null,G__25367));
})());
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__25368 = cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25368) : cljs.core.deref.call(null,G__25368));
})(),(function (){var G__25369 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25369) : cljs.core.deref.call(null,G__25369));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));

return cljs.core.second(best_entry);
} else {
cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);

return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj25371 = {};
return obj25371;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3624__auto__ = mf;
if(and__3624__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3624__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4280__auto__ = (((mf == null))?null:mf);
return (function (){var or__3636__auto__ = (cljs.core._reset[(function (){var G__25375 = x__4280__auto__;
return goog.typeOf(G__25375);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._reset["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3624__auto__ = mf;
if(and__3624__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3624__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4280__auto__ = (((mf == null))?null:mf);
return (function (){var or__3636__auto__ = (cljs.core._add_method[(function (){var G__25379 = x__4280__auto__;
return goog.typeOf(G__25379);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._add_method["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3624__auto__ = mf;
if(and__3624__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3624__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4280__auto__ = (((mf == null))?null:mf);
return (function (){var or__3636__auto__ = (cljs.core._remove_method[(function (){var G__25383 = x__4280__auto__;
return goog.typeOf(G__25383);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3624__auto__ = mf;
if(and__3624__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3624__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4280__auto__ = (((mf == null))?null:mf);
return (function (){var or__3636__auto__ = (cljs.core._prefer_method[(function (){var G__25387 = x__4280__auto__;
return goog.typeOf(G__25387);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3624__auto__ = mf;
if(and__3624__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3624__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4280__auto__ = (((mf == null))?null:mf);
return (function (){var or__3636__auto__ = (cljs.core._get_method[(function (){var G__25391 = x__4280__auto__;
return goog.typeOf(G__25391);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._get_method["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3624__auto__ = mf;
if(and__3624__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3624__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4280__auto__ = (((mf == null))?null:mf);
return (function (){var or__3636__auto__ = (cljs.core._methods[(function (){var G__25395 = x__4280__auto__;
return goog.typeOf(G__25395);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._methods["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3624__auto__ = mf;
if(and__3624__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3624__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4280__auto__ = (((mf == null))?null:mf);
return (function (){var or__3636__auto__ = (cljs.core._prefers[(function (){var G__25399 = x__4280__auto__;
return goog.typeOf(G__25399);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core._prefers["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__25401 = this$__$1;
return goog.getUid(G__25401);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__25402 = self__.cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25402) : cljs.core.deref.call(null,G__25402));
})(),(function (){var G__25403 = self__.hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25403) : cljs.core.deref.call(null,G__25403));
})())){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = (function (){var G__25404 = self__.method_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25404) : cljs.core.deref.call(null,G__25404));
})().call(null,dispatch_val);
if(cljs.core.truth_(temp__4124__auto__)){
var target_fn = temp__4124__auto__;
return target_fn;
} else {
var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4124__auto____$1)){
var target_fn = temp__4124__auto____$1;
return target_fn;
} else {
return (function (){var G__25405 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25405) : cljs.core.deref.call(null,G__25405));
})().call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__25406 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25406) : cljs.core.deref.call(null,G__25406));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__25407 = self__.prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25407) : cljs.core.deref.call(null,G__25407));
});

cljs.core.MultiFn.prototype.call = (function() {
var G__26248 = null;
var G__26248__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});
var G__26248__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25408 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__25408) : self__.dispatch_fn.call(null,G__25408));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25409 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__25409) : target_fn.call(null,G__25409));
});
var G__26248__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25410 = a;
var G__25411 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__25410,G__25411) : self__.dispatch_fn.call(null,G__25410,G__25411));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25412 = a;
var G__25413 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__25412,G__25413) : target_fn.call(null,G__25412,G__25413));
});
var G__26248__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25414 = a;
var G__25415 = b;
var G__25416 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__25414,G__25415,G__25416) : self__.dispatch_fn.call(null,G__25414,G__25415,G__25416));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25417 = a;
var G__25418 = b;
var G__25419 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__25417,G__25418,G__25419) : target_fn.call(null,G__25417,G__25418,G__25419));
});
var G__26248__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25420 = a;
var G__25421 = b;
var G__25422 = c;
var G__25423 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__25420,G__25421,G__25422,G__25423) : self__.dispatch_fn.call(null,G__25420,G__25421,G__25422,G__25423));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25424 = a;
var G__25425 = b;
var G__25426 = c;
var G__25427 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__25424,G__25425,G__25426,G__25427) : target_fn.call(null,G__25424,G__25425,G__25426,G__25427));
});
var G__26248__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25428 = a;
var G__25429 = b;
var G__25430 = c;
var G__25431 = d;
var G__25432 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__25428,G__25429,G__25430,G__25431,G__25432) : self__.dispatch_fn.call(null,G__25428,G__25429,G__25430,G__25431,G__25432));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25433 = a;
var G__25434 = b;
var G__25435 = c;
var G__25436 = d;
var G__25437 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__25433,G__25434,G__25435,G__25436,G__25437) : target_fn.call(null,G__25433,G__25434,G__25435,G__25436,G__25437));
});
var G__26248__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25438 = a;
var G__25439 = b;
var G__25440 = c;
var G__25441 = d;
var G__25442 = e;
var G__25443 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__25438,G__25439,G__25440,G__25441,G__25442,G__25443) : self__.dispatch_fn.call(null,G__25438,G__25439,G__25440,G__25441,G__25442,G__25443));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25444 = a;
var G__25445 = b;
var G__25446 = c;
var G__25447 = d;
var G__25448 = e;
var G__25449 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__25444,G__25445,G__25446,G__25447,G__25448,G__25449) : target_fn.call(null,G__25444,G__25445,G__25446,G__25447,G__25448,G__25449));
});
var G__26248__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25450 = a;
var G__25451 = b;
var G__25452 = c;
var G__25453 = d;
var G__25454 = e;
var G__25455 = f;
var G__25456 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__25450,G__25451,G__25452,G__25453,G__25454,G__25455,G__25456) : self__.dispatch_fn.call(null,G__25450,G__25451,G__25452,G__25453,G__25454,G__25455,G__25456));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25457 = a;
var G__25458 = b;
var G__25459 = c;
var G__25460 = d;
var G__25461 = e;
var G__25462 = f;
var G__25463 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__25457,G__25458,G__25459,G__25460,G__25461,G__25462,G__25463) : target_fn.call(null,G__25457,G__25458,G__25459,G__25460,G__25461,G__25462,G__25463));
});
var G__26248__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25464 = a;
var G__25465 = b;
var G__25466 = c;
var G__25467 = d;
var G__25468 = e;
var G__25469 = f;
var G__25470 = g;
var G__25471 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__25464,G__25465,G__25466,G__25467,G__25468,G__25469,G__25470,G__25471) : self__.dispatch_fn.call(null,G__25464,G__25465,G__25466,G__25467,G__25468,G__25469,G__25470,G__25471));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25472 = a;
var G__25473 = b;
var G__25474 = c;
var G__25475 = d;
var G__25476 = e;
var G__25477 = f;
var G__25478 = g;
var G__25479 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__25472,G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,G__25479) : target_fn.call(null,G__25472,G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,G__25479));
});
var G__26248__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25480 = a;
var G__25481 = b;
var G__25482 = c;
var G__25483 = d;
var G__25484 = e;
var G__25485 = f;
var G__25486 = g;
var G__25487 = h;
var G__25488 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__25480,G__25481,G__25482,G__25483,G__25484,G__25485,G__25486,G__25487,G__25488) : self__.dispatch_fn.call(null,G__25480,G__25481,G__25482,G__25483,G__25484,G__25485,G__25486,G__25487,G__25488));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25489 = a;
var G__25490 = b;
var G__25491 = c;
var G__25492 = d;
var G__25493 = e;
var G__25494 = f;
var G__25495 = g;
var G__25496 = h;
var G__25497 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__25489,G__25490,G__25491,G__25492,G__25493,G__25494,G__25495,G__25496,G__25497) : target_fn.call(null,G__25489,G__25490,G__25491,G__25492,G__25493,G__25494,G__25495,G__25496,G__25497));
});
var G__26248__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25498 = a;
var G__25499 = b;
var G__25500 = c;
var G__25501 = d;
var G__25502 = e;
var G__25503 = f;
var G__25504 = g;
var G__25505 = h;
var G__25506 = i;
var G__25507 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__25498,G__25499,G__25500,G__25501,G__25502,G__25503,G__25504,G__25505,G__25506,G__25507) : self__.dispatch_fn.call(null,G__25498,G__25499,G__25500,G__25501,G__25502,G__25503,G__25504,G__25505,G__25506,G__25507));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25508 = a;
var G__25509 = b;
var G__25510 = c;
var G__25511 = d;
var G__25512 = e;
var G__25513 = f;
var G__25514 = g;
var G__25515 = h;
var G__25516 = i;
var G__25517 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__25508,G__25509,G__25510,G__25511,G__25512,G__25513,G__25514,G__25515,G__25516,G__25517) : target_fn.call(null,G__25508,G__25509,G__25510,G__25511,G__25512,G__25513,G__25514,G__25515,G__25516,G__25517));
});
var G__26248__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25518 = a;
var G__25519 = b;
var G__25520 = c;
var G__25521 = d;
var G__25522 = e;
var G__25523 = f;
var G__25524 = g;
var G__25525 = h;
var G__25526 = i;
var G__25527 = j;
var G__25528 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__25518,G__25519,G__25520,G__25521,G__25522,G__25523,G__25524,G__25525,G__25526,G__25527,G__25528) : self__.dispatch_fn.call(null,G__25518,G__25519,G__25520,G__25521,G__25522,G__25523,G__25524,G__25525,G__25526,G__25527,G__25528));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25529 = a;
var G__25530 = b;
var G__25531 = c;
var G__25532 = d;
var G__25533 = e;
var G__25534 = f;
var G__25535 = g;
var G__25536 = h;
var G__25537 = i;
var G__25538 = j;
var G__25539 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__25529,G__25530,G__25531,G__25532,G__25533,G__25534,G__25535,G__25536,G__25537,G__25538,G__25539) : target_fn.call(null,G__25529,G__25530,G__25531,G__25532,G__25533,G__25534,G__25535,G__25536,G__25537,G__25538,G__25539));
});
var G__26248__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25540 = a;
var G__25541 = b;
var G__25542 = c;
var G__25543 = d;
var G__25544 = e;
var G__25545 = f;
var G__25546 = g;
var G__25547 = h;
var G__25548 = i;
var G__25549 = j;
var G__25550 = k;
var G__25551 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__25540,G__25541,G__25542,G__25543,G__25544,G__25545,G__25546,G__25547,G__25548,G__25549,G__25550,G__25551) : self__.dispatch_fn.call(null,G__25540,G__25541,G__25542,G__25543,G__25544,G__25545,G__25546,G__25547,G__25548,G__25549,G__25550,G__25551));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25552 = a;
var G__25553 = b;
var G__25554 = c;
var G__25555 = d;
var G__25556 = e;
var G__25557 = f;
var G__25558 = g;
var G__25559 = h;
var G__25560 = i;
var G__25561 = j;
var G__25562 = k;
var G__25563 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__25552,G__25553,G__25554,G__25555,G__25556,G__25557,G__25558,G__25559,G__25560,G__25561,G__25562,G__25563) : target_fn.call(null,G__25552,G__25553,G__25554,G__25555,G__25556,G__25557,G__25558,G__25559,G__25560,G__25561,G__25562,G__25563));
});
var G__26248__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25564 = a;
var G__25565 = b;
var G__25566 = c;
var G__25567 = d;
var G__25568 = e;
var G__25569 = f;
var G__25570 = g;
var G__25571 = h;
var G__25572 = i;
var G__25573 = j;
var G__25574 = k;
var G__25575 = l;
var G__25576 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__25564,G__25565,G__25566,G__25567,G__25568,G__25569,G__25570,G__25571,G__25572,G__25573,G__25574,G__25575,G__25576) : self__.dispatch_fn.call(null,G__25564,G__25565,G__25566,G__25567,G__25568,G__25569,G__25570,G__25571,G__25572,G__25573,G__25574,G__25575,G__25576));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25577 = a;
var G__25578 = b;
var G__25579 = c;
var G__25580 = d;
var G__25581 = e;
var G__25582 = f;
var G__25583 = g;
var G__25584 = h;
var G__25585 = i;
var G__25586 = j;
var G__25587 = k;
var G__25588 = l;
var G__25589 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__25577,G__25578,G__25579,G__25580,G__25581,G__25582,G__25583,G__25584,G__25585,G__25586,G__25587,G__25588,G__25589) : target_fn.call(null,G__25577,G__25578,G__25579,G__25580,G__25581,G__25582,G__25583,G__25584,G__25585,G__25586,G__25587,G__25588,G__25589));
});
var G__26248__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25590 = a;
var G__25591 = b;
var G__25592 = c;
var G__25593 = d;
var G__25594 = e;
var G__25595 = f;
var G__25596 = g;
var G__25597 = h;
var G__25598 = i;
var G__25599 = j;
var G__25600 = k;
var G__25601 = l;
var G__25602 = m;
var G__25603 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__25590,G__25591,G__25592,G__25593,G__25594,G__25595,G__25596,G__25597,G__25598,G__25599,G__25600,G__25601,G__25602,G__25603) : self__.dispatch_fn.call(null,G__25590,G__25591,G__25592,G__25593,G__25594,G__25595,G__25596,G__25597,G__25598,G__25599,G__25600,G__25601,G__25602,G__25603));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25604 = a;
var G__25605 = b;
var G__25606 = c;
var G__25607 = d;
var G__25608 = e;
var G__25609 = f;
var G__25610 = g;
var G__25611 = h;
var G__25612 = i;
var G__25613 = j;
var G__25614 = k;
var G__25615 = l;
var G__25616 = m;
var G__25617 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__25604,G__25605,G__25606,G__25607,G__25608,G__25609,G__25610,G__25611,G__25612,G__25613,G__25614,G__25615,G__25616,G__25617) : target_fn.call(null,G__25604,G__25605,G__25606,G__25607,G__25608,G__25609,G__25610,G__25611,G__25612,G__25613,G__25614,G__25615,G__25616,G__25617));
});
var G__26248__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25618 = a;
var G__25619 = b;
var G__25620 = c;
var G__25621 = d;
var G__25622 = e;
var G__25623 = f;
var G__25624 = g;
var G__25625 = h;
var G__25626 = i;
var G__25627 = j;
var G__25628 = k;
var G__25629 = l;
var G__25630 = m;
var G__25631 = n;
var G__25632 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__25618,G__25619,G__25620,G__25621,G__25622,G__25623,G__25624,G__25625,G__25626,G__25627,G__25628,G__25629,G__25630,G__25631,G__25632) : self__.dispatch_fn.call(null,G__25618,G__25619,G__25620,G__25621,G__25622,G__25623,G__25624,G__25625,G__25626,G__25627,G__25628,G__25629,G__25630,G__25631,G__25632));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25633 = a;
var G__25634 = b;
var G__25635 = c;
var G__25636 = d;
var G__25637 = e;
var G__25638 = f;
var G__25639 = g;
var G__25640 = h;
var G__25641 = i;
var G__25642 = j;
var G__25643 = k;
var G__25644 = l;
var G__25645 = m;
var G__25646 = n;
var G__25647 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__25633,G__25634,G__25635,G__25636,G__25637,G__25638,G__25639,G__25640,G__25641,G__25642,G__25643,G__25644,G__25645,G__25646,G__25647) : target_fn.call(null,G__25633,G__25634,G__25635,G__25636,G__25637,G__25638,G__25639,G__25640,G__25641,G__25642,G__25643,G__25644,G__25645,G__25646,G__25647));
});
var G__26248__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25648 = a;
var G__25649 = b;
var G__25650 = c;
var G__25651 = d;
var G__25652 = e;
var G__25653 = f;
var G__25654 = g;
var G__25655 = h;
var G__25656 = i;
var G__25657 = j;
var G__25658 = k;
var G__25659 = l;
var G__25660 = m;
var G__25661 = n;
var G__25662 = o;
var G__25663 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__25648,G__25649,G__25650,G__25651,G__25652,G__25653,G__25654,G__25655,G__25656,G__25657,G__25658,G__25659,G__25660,G__25661,G__25662,G__25663) : self__.dispatch_fn.call(null,G__25648,G__25649,G__25650,G__25651,G__25652,G__25653,G__25654,G__25655,G__25656,G__25657,G__25658,G__25659,G__25660,G__25661,G__25662,G__25663));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25664 = a;
var G__25665 = b;
var G__25666 = c;
var G__25667 = d;
var G__25668 = e;
var G__25669 = f;
var G__25670 = g;
var G__25671 = h;
var G__25672 = i;
var G__25673 = j;
var G__25674 = k;
var G__25675 = l;
var G__25676 = m;
var G__25677 = n;
var G__25678 = o;
var G__25679 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__25664,G__25665,G__25666,G__25667,G__25668,G__25669,G__25670,G__25671,G__25672,G__25673,G__25674,G__25675,G__25676,G__25677,G__25678,G__25679) : target_fn.call(null,G__25664,G__25665,G__25666,G__25667,G__25668,G__25669,G__25670,G__25671,G__25672,G__25673,G__25674,G__25675,G__25676,G__25677,G__25678,G__25679));
});
var G__26248__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25680 = a;
var G__25681 = b;
var G__25682 = c;
var G__25683 = d;
var G__25684 = e;
var G__25685 = f;
var G__25686 = g;
var G__25687 = h;
var G__25688 = i;
var G__25689 = j;
var G__25690 = k;
var G__25691 = l;
var G__25692 = m;
var G__25693 = n;
var G__25694 = o;
var G__25695 = p;
var G__25696 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__25680,G__25681,G__25682,G__25683,G__25684,G__25685,G__25686,G__25687,G__25688,G__25689,G__25690,G__25691,G__25692,G__25693,G__25694,G__25695,G__25696) : self__.dispatch_fn.call(null,G__25680,G__25681,G__25682,G__25683,G__25684,G__25685,G__25686,G__25687,G__25688,G__25689,G__25690,G__25691,G__25692,G__25693,G__25694,G__25695,G__25696));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25697 = a;
var G__25698 = b;
var G__25699 = c;
var G__25700 = d;
var G__25701 = e;
var G__25702 = f;
var G__25703 = g;
var G__25704 = h;
var G__25705 = i;
var G__25706 = j;
var G__25707 = k;
var G__25708 = l;
var G__25709 = m;
var G__25710 = n;
var G__25711 = o;
var G__25712 = p;
var G__25713 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__25697,G__25698,G__25699,G__25700,G__25701,G__25702,G__25703,G__25704,G__25705,G__25706,G__25707,G__25708,G__25709,G__25710,G__25711,G__25712,G__25713) : target_fn.call(null,G__25697,G__25698,G__25699,G__25700,G__25701,G__25702,G__25703,G__25704,G__25705,G__25706,G__25707,G__25708,G__25709,G__25710,G__25711,G__25712,G__25713));
});
var G__26248__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25714 = a;
var G__25715 = b;
var G__25716 = c;
var G__25717 = d;
var G__25718 = e;
var G__25719 = f;
var G__25720 = g;
var G__25721 = h;
var G__25722 = i;
var G__25723 = j;
var G__25724 = k;
var G__25725 = l;
var G__25726 = m;
var G__25727 = n;
var G__25728 = o;
var G__25729 = p;
var G__25730 = q;
var G__25731 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__25714,G__25715,G__25716,G__25717,G__25718,G__25719,G__25720,G__25721,G__25722,G__25723,G__25724,G__25725,G__25726,G__25727,G__25728,G__25729,G__25730,G__25731) : self__.dispatch_fn.call(null,G__25714,G__25715,G__25716,G__25717,G__25718,G__25719,G__25720,G__25721,G__25722,G__25723,G__25724,G__25725,G__25726,G__25727,G__25728,G__25729,G__25730,G__25731));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25732 = a;
var G__25733 = b;
var G__25734 = c;
var G__25735 = d;
var G__25736 = e;
var G__25737 = f;
var G__25738 = g;
var G__25739 = h;
var G__25740 = i;
var G__25741 = j;
var G__25742 = k;
var G__25743 = l;
var G__25744 = m;
var G__25745 = n;
var G__25746 = o;
var G__25747 = p;
var G__25748 = q;
var G__25749 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__25732,G__25733,G__25734,G__25735,G__25736,G__25737,G__25738,G__25739,G__25740,G__25741,G__25742,G__25743,G__25744,G__25745,G__25746,G__25747,G__25748,G__25749) : target_fn.call(null,G__25732,G__25733,G__25734,G__25735,G__25736,G__25737,G__25738,G__25739,G__25740,G__25741,G__25742,G__25743,G__25744,G__25745,G__25746,G__25747,G__25748,G__25749));
});
var G__26248__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25750 = a;
var G__25751 = b;
var G__25752 = c;
var G__25753 = d;
var G__25754 = e;
var G__25755 = f;
var G__25756 = g;
var G__25757 = h;
var G__25758 = i;
var G__25759 = j;
var G__25760 = k;
var G__25761 = l;
var G__25762 = m;
var G__25763 = n;
var G__25764 = o;
var G__25765 = p;
var G__25766 = q;
var G__25767 = r;
var G__25768 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__25750,G__25751,G__25752,G__25753,G__25754,G__25755,G__25756,G__25757,G__25758,G__25759,G__25760,G__25761,G__25762,G__25763,G__25764,G__25765,G__25766,G__25767,G__25768) : self__.dispatch_fn.call(null,G__25750,G__25751,G__25752,G__25753,G__25754,G__25755,G__25756,G__25757,G__25758,G__25759,G__25760,G__25761,G__25762,G__25763,G__25764,G__25765,G__25766,G__25767,G__25768));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25769 = a;
var G__25770 = b;
var G__25771 = c;
var G__25772 = d;
var G__25773 = e;
var G__25774 = f;
var G__25775 = g;
var G__25776 = h;
var G__25777 = i;
var G__25778 = j;
var G__25779 = k;
var G__25780 = l;
var G__25781 = m;
var G__25782 = n;
var G__25783 = o;
var G__25784 = p;
var G__25785 = q;
var G__25786 = r;
var G__25787 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__25769,G__25770,G__25771,G__25772,G__25773,G__25774,G__25775,G__25776,G__25777,G__25778,G__25779,G__25780,G__25781,G__25782,G__25783,G__25784,G__25785,G__25786,G__25787) : target_fn.call(null,G__25769,G__25770,G__25771,G__25772,G__25773,G__25774,G__25775,G__25776,G__25777,G__25778,G__25779,G__25780,G__25781,G__25782,G__25783,G__25784,G__25785,G__25786,G__25787));
});
var G__26248__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__25788 = a;
var G__25789 = b;
var G__25790 = c;
var G__25791 = d;
var G__25792 = e;
var G__25793 = f;
var G__25794 = g;
var G__25795 = h;
var G__25796 = i;
var G__25797 = j;
var G__25798 = k;
var G__25799 = l;
var G__25800 = m;
var G__25801 = n;
var G__25802 = o;
var G__25803 = p;
var G__25804 = q;
var G__25805 = r;
var G__25806 = s;
var G__25807 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__25788,G__25789,G__25790,G__25791,G__25792,G__25793,G__25794,G__25795,G__25796,G__25797,G__25798,G__25799,G__25800,G__25801,G__25802,G__25803,G__25804,G__25805,G__25806,G__25807) : self__.dispatch_fn.call(null,G__25788,G__25789,G__25790,G__25791,G__25792,G__25793,G__25794,G__25795,G__25796,G__25797,G__25798,G__25799,G__25800,G__25801,G__25802,G__25803,G__25804,G__25805,G__25806,G__25807));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25808 = a;
var G__25809 = b;
var G__25810 = c;
var G__25811 = d;
var G__25812 = e;
var G__25813 = f;
var G__25814 = g;
var G__25815 = h;
var G__25816 = i;
var G__25817 = j;
var G__25818 = k;
var G__25819 = l;
var G__25820 = m;
var G__25821 = n;
var G__25822 = o;
var G__25823 = p;
var G__25824 = q;
var G__25825 = r;
var G__25826 = s;
var G__25827 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__25808,G__25809,G__25810,G__25811,G__25812,G__25813,G__25814,G__25815,G__25816,G__25817,G__25818,G__25819,G__25820,G__25821,G__25822,G__25823,G__25824,G__25825,G__25826,G__25827) : target_fn.call(null,G__25808,G__25809,G__25810,G__25811,G__25812,G__25813,G__25814,G__25815,G__25816,G__25817,G__25818,G__25819,G__25820,G__25821,G__25822,G__25823,G__25824,G__25825,G__25826,G__25827));
});
var G__26248__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__26248 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__26248__1.call(this,self__);
case 2:
return G__26248__2.call(this,self__,a);
case 3:
return G__26248__3.call(this,self__,a,b);
case 4:
return G__26248__4.call(this,self__,a,b,c);
case 5:
return G__26248__5.call(this,self__,a,b,c,d);
case 6:
return G__26248__6.call(this,self__,a,b,c,d,e);
case 7:
return G__26248__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__26248__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__26248__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__26248__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__26248__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__26248__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__26248__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__26248__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__26248__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__26248__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__26248__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__26248__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__26248__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__26248__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__26248__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__26248__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26248.cljs$core$IFn$_invoke$arity$1 = G__26248__1;
G__26248.cljs$core$IFn$_invoke$arity$2 = G__26248__2;
G__26248.cljs$core$IFn$_invoke$arity$3 = G__26248__3;
G__26248.cljs$core$IFn$_invoke$arity$4 = G__26248__4;
G__26248.cljs$core$IFn$_invoke$arity$5 = G__26248__5;
G__26248.cljs$core$IFn$_invoke$arity$6 = G__26248__6;
G__26248.cljs$core$IFn$_invoke$arity$7 = G__26248__7;
G__26248.cljs$core$IFn$_invoke$arity$8 = G__26248__8;
G__26248.cljs$core$IFn$_invoke$arity$9 = G__26248__9;
G__26248.cljs$core$IFn$_invoke$arity$10 = G__26248__10;
G__26248.cljs$core$IFn$_invoke$arity$11 = G__26248__11;
G__26248.cljs$core$IFn$_invoke$arity$12 = G__26248__12;
G__26248.cljs$core$IFn$_invoke$arity$13 = G__26248__13;
G__26248.cljs$core$IFn$_invoke$arity$14 = G__26248__14;
G__26248.cljs$core$IFn$_invoke$arity$15 = G__26248__15;
G__26248.cljs$core$IFn$_invoke$arity$16 = G__26248__16;
G__26248.cljs$core$IFn$_invoke$arity$17 = G__26248__17;
G__26248.cljs$core$IFn$_invoke$arity$18 = G__26248__18;
G__26248.cljs$core$IFn$_invoke$arity$19 = G__26248__19;
G__26248.cljs$core$IFn$_invoke$arity$20 = G__26248__20;
G__26248.cljs$core$IFn$_invoke$arity$21 = G__26248__21;
G__26248.cljs$core$IFn$_invoke$arity$22 = G__26248__22;
return G__26248;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args25400){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25400)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25828 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__25828) : self__.dispatch_fn.call(null,G__25828));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25829 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__25829) : target_fn.call(null,G__25829));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25830 = a;
var G__25831 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__25830,G__25831) : self__.dispatch_fn.call(null,G__25830,G__25831));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25832 = a;
var G__25833 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__25832,G__25833) : target_fn.call(null,G__25832,G__25833));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25834 = a;
var G__25835 = b;
var G__25836 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__25834,G__25835,G__25836) : self__.dispatch_fn.call(null,G__25834,G__25835,G__25836));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25837 = a;
var G__25838 = b;
var G__25839 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__25837,G__25838,G__25839) : target_fn.call(null,G__25837,G__25838,G__25839));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25840 = a;
var G__25841 = b;
var G__25842 = c;
var G__25843 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__25840,G__25841,G__25842,G__25843) : self__.dispatch_fn.call(null,G__25840,G__25841,G__25842,G__25843));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25844 = a;
var G__25845 = b;
var G__25846 = c;
var G__25847 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__25844,G__25845,G__25846,G__25847) : target_fn.call(null,G__25844,G__25845,G__25846,G__25847));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25848 = a;
var G__25849 = b;
var G__25850 = c;
var G__25851 = d;
var G__25852 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__25848,G__25849,G__25850,G__25851,G__25852) : self__.dispatch_fn.call(null,G__25848,G__25849,G__25850,G__25851,G__25852));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25853 = a;
var G__25854 = b;
var G__25855 = c;
var G__25856 = d;
var G__25857 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__25853,G__25854,G__25855,G__25856,G__25857) : target_fn.call(null,G__25853,G__25854,G__25855,G__25856,G__25857));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25858 = a;
var G__25859 = b;
var G__25860 = c;
var G__25861 = d;
var G__25862 = e;
var G__25863 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__25858,G__25859,G__25860,G__25861,G__25862,G__25863) : self__.dispatch_fn.call(null,G__25858,G__25859,G__25860,G__25861,G__25862,G__25863));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25864 = a;
var G__25865 = b;
var G__25866 = c;
var G__25867 = d;
var G__25868 = e;
var G__25869 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__25864,G__25865,G__25866,G__25867,G__25868,G__25869) : target_fn.call(null,G__25864,G__25865,G__25866,G__25867,G__25868,G__25869));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25870 = a;
var G__25871 = b;
var G__25872 = c;
var G__25873 = d;
var G__25874 = e;
var G__25875 = f;
var G__25876 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__25870,G__25871,G__25872,G__25873,G__25874,G__25875,G__25876) : self__.dispatch_fn.call(null,G__25870,G__25871,G__25872,G__25873,G__25874,G__25875,G__25876));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25877 = a;
var G__25878 = b;
var G__25879 = c;
var G__25880 = d;
var G__25881 = e;
var G__25882 = f;
var G__25883 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883) : target_fn.call(null,G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25884 = a;
var G__25885 = b;
var G__25886 = c;
var G__25887 = d;
var G__25888 = e;
var G__25889 = f;
var G__25890 = g;
var G__25891 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__25884,G__25885,G__25886,G__25887,G__25888,G__25889,G__25890,G__25891) : self__.dispatch_fn.call(null,G__25884,G__25885,G__25886,G__25887,G__25888,G__25889,G__25890,G__25891));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25892 = a;
var G__25893 = b;
var G__25894 = c;
var G__25895 = d;
var G__25896 = e;
var G__25897 = f;
var G__25898 = g;
var G__25899 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899) : target_fn.call(null,G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25900 = a;
var G__25901 = b;
var G__25902 = c;
var G__25903 = d;
var G__25904 = e;
var G__25905 = f;
var G__25906 = g;
var G__25907 = h;
var G__25908 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__25900,G__25901,G__25902,G__25903,G__25904,G__25905,G__25906,G__25907,G__25908) : self__.dispatch_fn.call(null,G__25900,G__25901,G__25902,G__25903,G__25904,G__25905,G__25906,G__25907,G__25908));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25909 = a;
var G__25910 = b;
var G__25911 = c;
var G__25912 = d;
var G__25913 = e;
var G__25914 = f;
var G__25915 = g;
var G__25916 = h;
var G__25917 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__25909,G__25910,G__25911,G__25912,G__25913,G__25914,G__25915,G__25916,G__25917) : target_fn.call(null,G__25909,G__25910,G__25911,G__25912,G__25913,G__25914,G__25915,G__25916,G__25917));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25918 = a;
var G__25919 = b;
var G__25920 = c;
var G__25921 = d;
var G__25922 = e;
var G__25923 = f;
var G__25924 = g;
var G__25925 = h;
var G__25926 = i;
var G__25927 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__25918,G__25919,G__25920,G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927) : self__.dispatch_fn.call(null,G__25918,G__25919,G__25920,G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25928 = a;
var G__25929 = b;
var G__25930 = c;
var G__25931 = d;
var G__25932 = e;
var G__25933 = f;
var G__25934 = g;
var G__25935 = h;
var G__25936 = i;
var G__25937 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__25928,G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937) : target_fn.call(null,G__25928,G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25938 = a;
var G__25939 = b;
var G__25940 = c;
var G__25941 = d;
var G__25942 = e;
var G__25943 = f;
var G__25944 = g;
var G__25945 = h;
var G__25946 = i;
var G__25947 = j;
var G__25948 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__25938,G__25939,G__25940,G__25941,G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948) : self__.dispatch_fn.call(null,G__25938,G__25939,G__25940,G__25941,G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25949 = a;
var G__25950 = b;
var G__25951 = c;
var G__25952 = d;
var G__25953 = e;
var G__25954 = f;
var G__25955 = g;
var G__25956 = h;
var G__25957 = i;
var G__25958 = j;
var G__25959 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956,G__25957,G__25958,G__25959) : target_fn.call(null,G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956,G__25957,G__25958,G__25959));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25960 = a;
var G__25961 = b;
var G__25962 = c;
var G__25963 = d;
var G__25964 = e;
var G__25965 = f;
var G__25966 = g;
var G__25967 = h;
var G__25968 = i;
var G__25969 = j;
var G__25970 = k;
var G__25971 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__25960,G__25961,G__25962,G__25963,G__25964,G__25965,G__25966,G__25967,G__25968,G__25969,G__25970,G__25971) : self__.dispatch_fn.call(null,G__25960,G__25961,G__25962,G__25963,G__25964,G__25965,G__25966,G__25967,G__25968,G__25969,G__25970,G__25971));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25972 = a;
var G__25973 = b;
var G__25974 = c;
var G__25975 = d;
var G__25976 = e;
var G__25977 = f;
var G__25978 = g;
var G__25979 = h;
var G__25980 = i;
var G__25981 = j;
var G__25982 = k;
var G__25983 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__25972,G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,G__25979,G__25980,G__25981,G__25982,G__25983) : target_fn.call(null,G__25972,G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,G__25979,G__25980,G__25981,G__25982,G__25983));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__25984 = a;
var G__25985 = b;
var G__25986 = c;
var G__25987 = d;
var G__25988 = e;
var G__25989 = f;
var G__25990 = g;
var G__25991 = h;
var G__25992 = i;
var G__25993 = j;
var G__25994 = k;
var G__25995 = l;
var G__25996 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995,G__25996) : self__.dispatch_fn.call(null,G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995,G__25996));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__25997 = a;
var G__25998 = b;
var G__25999 = c;
var G__26000 = d;
var G__26001 = e;
var G__26002 = f;
var G__26003 = g;
var G__26004 = h;
var G__26005 = i;
var G__26006 = j;
var G__26007 = k;
var G__26008 = l;
var G__26009 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__25997,G__25998,G__25999,G__26000,G__26001,G__26002,G__26003,G__26004,G__26005,G__26006,G__26007,G__26008,G__26009) : target_fn.call(null,G__25997,G__25998,G__25999,G__26000,G__26001,G__26002,G__26003,G__26004,G__26005,G__26006,G__26007,G__26008,G__26009));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__26010 = a;
var G__26011 = b;
var G__26012 = c;
var G__26013 = d;
var G__26014 = e;
var G__26015 = f;
var G__26016 = g;
var G__26017 = h;
var G__26018 = i;
var G__26019 = j;
var G__26020 = k;
var G__26021 = l;
var G__26022 = m;
var G__26023 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__26010,G__26011,G__26012,G__26013,G__26014,G__26015,G__26016,G__26017,G__26018,G__26019,G__26020,G__26021,G__26022,G__26023) : self__.dispatch_fn.call(null,G__26010,G__26011,G__26012,G__26013,G__26014,G__26015,G__26016,G__26017,G__26018,G__26019,G__26020,G__26021,G__26022,G__26023));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__26024 = a;
var G__26025 = b;
var G__26026 = c;
var G__26027 = d;
var G__26028 = e;
var G__26029 = f;
var G__26030 = g;
var G__26031 = h;
var G__26032 = i;
var G__26033 = j;
var G__26034 = k;
var G__26035 = l;
var G__26036 = m;
var G__26037 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__26024,G__26025,G__26026,G__26027,G__26028,G__26029,G__26030,G__26031,G__26032,G__26033,G__26034,G__26035,G__26036,G__26037) : target_fn.call(null,G__26024,G__26025,G__26026,G__26027,G__26028,G__26029,G__26030,G__26031,G__26032,G__26033,G__26034,G__26035,G__26036,G__26037));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__26038 = a;
var G__26039 = b;
var G__26040 = c;
var G__26041 = d;
var G__26042 = e;
var G__26043 = f;
var G__26044 = g;
var G__26045 = h;
var G__26046 = i;
var G__26047 = j;
var G__26048 = k;
var G__26049 = l;
var G__26050 = m;
var G__26051 = n;
var G__26052 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__26038,G__26039,G__26040,G__26041,G__26042,G__26043,G__26044,G__26045,G__26046,G__26047,G__26048,G__26049,G__26050,G__26051,G__26052) : self__.dispatch_fn.call(null,G__26038,G__26039,G__26040,G__26041,G__26042,G__26043,G__26044,G__26045,G__26046,G__26047,G__26048,G__26049,G__26050,G__26051,G__26052));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__26053 = a;
var G__26054 = b;
var G__26055 = c;
var G__26056 = d;
var G__26057 = e;
var G__26058 = f;
var G__26059 = g;
var G__26060 = h;
var G__26061 = i;
var G__26062 = j;
var G__26063 = k;
var G__26064 = l;
var G__26065 = m;
var G__26066 = n;
var G__26067 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__26053,G__26054,G__26055,G__26056,G__26057,G__26058,G__26059,G__26060,G__26061,G__26062,G__26063,G__26064,G__26065,G__26066,G__26067) : target_fn.call(null,G__26053,G__26054,G__26055,G__26056,G__26057,G__26058,G__26059,G__26060,G__26061,G__26062,G__26063,G__26064,G__26065,G__26066,G__26067));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__26068 = a;
var G__26069 = b;
var G__26070 = c;
var G__26071 = d;
var G__26072 = e;
var G__26073 = f;
var G__26074 = g;
var G__26075 = h;
var G__26076 = i;
var G__26077 = j;
var G__26078 = k;
var G__26079 = l;
var G__26080 = m;
var G__26081 = n;
var G__26082 = o;
var G__26083 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__26068,G__26069,G__26070,G__26071,G__26072,G__26073,G__26074,G__26075,G__26076,G__26077,G__26078,G__26079,G__26080,G__26081,G__26082,G__26083) : self__.dispatch_fn.call(null,G__26068,G__26069,G__26070,G__26071,G__26072,G__26073,G__26074,G__26075,G__26076,G__26077,G__26078,G__26079,G__26080,G__26081,G__26082,G__26083));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__26084 = a;
var G__26085 = b;
var G__26086 = c;
var G__26087 = d;
var G__26088 = e;
var G__26089 = f;
var G__26090 = g;
var G__26091 = h;
var G__26092 = i;
var G__26093 = j;
var G__26094 = k;
var G__26095 = l;
var G__26096 = m;
var G__26097 = n;
var G__26098 = o;
var G__26099 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__26084,G__26085,G__26086,G__26087,G__26088,G__26089,G__26090,G__26091,G__26092,G__26093,G__26094,G__26095,G__26096,G__26097,G__26098,G__26099) : target_fn.call(null,G__26084,G__26085,G__26086,G__26087,G__26088,G__26089,G__26090,G__26091,G__26092,G__26093,G__26094,G__26095,G__26096,G__26097,G__26098,G__26099));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__26100 = a;
var G__26101 = b;
var G__26102 = c;
var G__26103 = d;
var G__26104 = e;
var G__26105 = f;
var G__26106 = g;
var G__26107 = h;
var G__26108 = i;
var G__26109 = j;
var G__26110 = k;
var G__26111 = l;
var G__26112 = m;
var G__26113 = n;
var G__26114 = o;
var G__26115 = p;
var G__26116 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__26100,G__26101,G__26102,G__26103,G__26104,G__26105,G__26106,G__26107,G__26108,G__26109,G__26110,G__26111,G__26112,G__26113,G__26114,G__26115,G__26116) : self__.dispatch_fn.call(null,G__26100,G__26101,G__26102,G__26103,G__26104,G__26105,G__26106,G__26107,G__26108,G__26109,G__26110,G__26111,G__26112,G__26113,G__26114,G__26115,G__26116));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__26117 = a;
var G__26118 = b;
var G__26119 = c;
var G__26120 = d;
var G__26121 = e;
var G__26122 = f;
var G__26123 = g;
var G__26124 = h;
var G__26125 = i;
var G__26126 = j;
var G__26127 = k;
var G__26128 = l;
var G__26129 = m;
var G__26130 = n;
var G__26131 = o;
var G__26132 = p;
var G__26133 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__26117,G__26118,G__26119,G__26120,G__26121,G__26122,G__26123,G__26124,G__26125,G__26126,G__26127,G__26128,G__26129,G__26130,G__26131,G__26132,G__26133) : target_fn.call(null,G__26117,G__26118,G__26119,G__26120,G__26121,G__26122,G__26123,G__26124,G__26125,G__26126,G__26127,G__26128,G__26129,G__26130,G__26131,G__26132,G__26133));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__26134 = a;
var G__26135 = b;
var G__26136 = c;
var G__26137 = d;
var G__26138 = e;
var G__26139 = f;
var G__26140 = g;
var G__26141 = h;
var G__26142 = i;
var G__26143 = j;
var G__26144 = k;
var G__26145 = l;
var G__26146 = m;
var G__26147 = n;
var G__26148 = o;
var G__26149 = p;
var G__26150 = q;
var G__26151 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__26134,G__26135,G__26136,G__26137,G__26138,G__26139,G__26140,G__26141,G__26142,G__26143,G__26144,G__26145,G__26146,G__26147,G__26148,G__26149,G__26150,G__26151) : self__.dispatch_fn.call(null,G__26134,G__26135,G__26136,G__26137,G__26138,G__26139,G__26140,G__26141,G__26142,G__26143,G__26144,G__26145,G__26146,G__26147,G__26148,G__26149,G__26150,G__26151));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__26152 = a;
var G__26153 = b;
var G__26154 = c;
var G__26155 = d;
var G__26156 = e;
var G__26157 = f;
var G__26158 = g;
var G__26159 = h;
var G__26160 = i;
var G__26161 = j;
var G__26162 = k;
var G__26163 = l;
var G__26164 = m;
var G__26165 = n;
var G__26166 = o;
var G__26167 = p;
var G__26168 = q;
var G__26169 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__26152,G__26153,G__26154,G__26155,G__26156,G__26157,G__26158,G__26159,G__26160,G__26161,G__26162,G__26163,G__26164,G__26165,G__26166,G__26167,G__26168,G__26169) : target_fn.call(null,G__26152,G__26153,G__26154,G__26155,G__26156,G__26157,G__26158,G__26159,G__26160,G__26161,G__26162,G__26163,G__26164,G__26165,G__26166,G__26167,G__26168,G__26169));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__26170 = a;
var G__26171 = b;
var G__26172 = c;
var G__26173 = d;
var G__26174 = e;
var G__26175 = f;
var G__26176 = g;
var G__26177 = h;
var G__26178 = i;
var G__26179 = j;
var G__26180 = k;
var G__26181 = l;
var G__26182 = m;
var G__26183 = n;
var G__26184 = o;
var G__26185 = p;
var G__26186 = q;
var G__26187 = r;
var G__26188 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__26170,G__26171,G__26172,G__26173,G__26174,G__26175,G__26176,G__26177,G__26178,G__26179,G__26180,G__26181,G__26182,G__26183,G__26184,G__26185,G__26186,G__26187,G__26188) : self__.dispatch_fn.call(null,G__26170,G__26171,G__26172,G__26173,G__26174,G__26175,G__26176,G__26177,G__26178,G__26179,G__26180,G__26181,G__26182,G__26183,G__26184,G__26185,G__26186,G__26187,G__26188));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__26189 = a;
var G__26190 = b;
var G__26191 = c;
var G__26192 = d;
var G__26193 = e;
var G__26194 = f;
var G__26195 = g;
var G__26196 = h;
var G__26197 = i;
var G__26198 = j;
var G__26199 = k;
var G__26200 = l;
var G__26201 = m;
var G__26202 = n;
var G__26203 = o;
var G__26204 = p;
var G__26205 = q;
var G__26206 = r;
var G__26207 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__26189,G__26190,G__26191,G__26192,G__26193,G__26194,G__26195,G__26196,G__26197,G__26198,G__26199,G__26200,G__26201,G__26202,G__26203,G__26204,G__26205,G__26206,G__26207) : target_fn.call(null,G__26189,G__26190,G__26191,G__26192,G__26193,G__26194,G__26195,G__26196,G__26197,G__26198,G__26199,G__26200,G__26201,G__26202,G__26203,G__26204,G__26205,G__26206,G__26207));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__26208 = a;
var G__26209 = b;
var G__26210 = c;
var G__26211 = d;
var G__26212 = e;
var G__26213 = f;
var G__26214 = g;
var G__26215 = h;
var G__26216 = i;
var G__26217 = j;
var G__26218 = k;
var G__26219 = l;
var G__26220 = m;
var G__26221 = n;
var G__26222 = o;
var G__26223 = p;
var G__26224 = q;
var G__26225 = r;
var G__26226 = s;
var G__26227 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__26208,G__26209,G__26210,G__26211,G__26212,G__26213,G__26214,G__26215,G__26216,G__26217,G__26218,G__26219,G__26220,G__26221,G__26222,G__26223,G__26224,G__26225,G__26226,G__26227) : self__.dispatch_fn.call(null,G__26208,G__26209,G__26210,G__26211,G__26212,G__26213,G__26214,G__26215,G__26216,G__26217,G__26218,G__26219,G__26220,G__26221,G__26222,G__26223,G__26224,G__26225,G__26226,G__26227));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__26228 = a;
var G__26229 = b;
var G__26230 = c;
var G__26231 = d;
var G__26232 = e;
var G__26233 = f;
var G__26234 = g;
var G__26235 = h;
var G__26236 = i;
var G__26237 = j;
var G__26238 = k;
var G__26239 = l;
var G__26240 = m;
var G__26241 = n;
var G__26242 = o;
var G__26243 = p;
var G__26244 = q;
var G__26245 = r;
var G__26246 = s;
var G__26247 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__26228,G__26229,G__26230,G__26231,G__26232,G__26233,G__26234,G__26235,G__26236,G__26237,G__26238,G__26239,G__26240,G__26241,G__26242,G__26243,G__26244,G__26245,G__26246,G__26247) : target_fn.call(null,G__26228,G__26229,G__26230,G__26231,G__26232,G__26233,G__26234,G__26235,G__26236,G__26237,G__26238,G__26239,G__26240,G__26241,G__26242,G__26243,G__26244,G__26245,G__26246,G__26247));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__26249 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__26249);
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function __GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_((function (){var G__26254 = x;
var G__26255 = y;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__26254,G__26255) : pred.call(null,G__26254,G__26255));
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__26256 = y;
var G__26257 = x;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__26256,G__26257) : pred.call(null,G__26256,G__26257));
})())){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
/**
* test [v] finds fn at key :test in var metadata and calls it,
* presuming failure will throw exception
*/
cljs.core.test = (function test(v){
var f = v.cljs$lang$test;
if(cljs.core.truth_(f)){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.core.constant$keyword$20;
} else {
return cljs.core.constant$keyword$21;
}
});
