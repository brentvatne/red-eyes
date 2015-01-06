// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t28789 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28789 = (function (f,fn_handler,meta28790){
this.f = f;
this.fn_handler = fn_handler;
this.meta28790 = meta28790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28789.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28791){
var self__ = this;
var _28791__$1 = this;
return self__.meta28790;
});

cljs.core.async.t28789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28791,meta28790__$1){
var self__ = this;
var _28791__$1 = this;
return (new cljs.core.async.t28789(self__.f,self__.fn_handler,meta28790__$1));
});

cljs.core.async.t28789.cljs$lang$type = true;

cljs.core.async.t28789.cljs$lang$ctorStr = "cljs.core.async/t28789";

cljs.core.async.t28789.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t28789");
});

cljs.core.async.__GT_t28789 = (function __GT_t28789(f__$1,fn_handler__$1,meta28790){
return (new cljs.core.async.t28789(f__$1,fn_handler__$1,meta28790));
});

}

return (new cljs.core.async.t28789(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__28793 = buff;
if(G__28793){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__28793.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28793.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28793);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28793);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_28810 = (function (){var G__28807 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28807) : cljs.core.deref.call(null,G__28807));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28808_28811 = val_28810;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28808_28811) : fn1.call(null,G__28808_28811));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28810,ret){
return (function (){
var G__28809 = val_28810;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28809) : fn1.call(null,G__28809));
});})(val_28810,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__28820 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28820) : cljs.core.deref.call(null,G__28820));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__28821 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28821) : cljs.core.deref.call(null,G__28821));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28822_28824 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28822_28824) : fn1.call(null,G__28822_28824));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__28823 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28823) : fn1.call(null,G__28823));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4523__auto___28825 = n;
var x_28826 = (0);
while(true){
if((x_28826 < n__4523__auto___28825)){
(a[x_28826] = (0));

var G__28827 = (x_28826 + (1));
x_28826 = G__28827;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__28828 = (i + (1));
i = G__28828;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__28836 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28836) : cljs.core.atom.call(null,G__28836));
})();
if(typeof cljs.core.async.t28837 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28837 = (function (flag,alt_flag,meta28838){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28838 = meta28838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28837.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28840 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28840) : cljs.core.deref.call(null,G__28840));
});})(flag))
;

cljs.core.async.t28837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28841_28843 = self__.flag;
var G__28842_28844 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28841_28843,G__28842_28844) : cljs.core.reset_BANG_.call(null,G__28841_28843,G__28842_28844));

return true;
});})(flag))
;

cljs.core.async.t28837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28839){
var self__ = this;
var _28839__$1 = this;
return self__.meta28838;
});})(flag))
;

cljs.core.async.t28837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28839,meta28838__$1){
var self__ = this;
var _28839__$1 = this;
return (new cljs.core.async.t28837(self__.flag,self__.alt_flag,meta28838__$1));
});})(flag))
;

cljs.core.async.t28837.cljs$lang$type = true;

cljs.core.async.t28837.cljs$lang$ctorStr = "cljs.core.async/t28837";

cljs.core.async.t28837.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t28837");
});})(flag))
;

cljs.core.async.__GT_t28837 = ((function (flag){
return (function __GT_t28837(flag__$1,alt_flag__$1,meta28838){
return (new cljs.core.async.t28837(flag__$1,alt_flag__$1,meta28838));
});})(flag))
;

}

return (new cljs.core.async.t28837(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28848 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28848 = (function (cb,flag,alt_handler,meta28849){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28849 = meta28849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28848.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t28848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t28848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28850){
var self__ = this;
var _28850__$1 = this;
return self__.meta28849;
});

cljs.core.async.t28848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28850,meta28849__$1){
var self__ = this;
var _28850__$1 = this;
return (new cljs.core.async.t28848(self__.cb,self__.flag,self__.alt_handler,meta28849__$1));
});

cljs.core.async.t28848.cljs$lang$type = true;

cljs.core.async.t28848.cljs$lang$ctorStr = "cljs.core.async/t28848";

cljs.core.async.t28848.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t28848");
});

cljs.core.async.__GT_t28848 = (function __GT_t28848(cb__$1,flag__$1,alt_handler__$1,meta28849){
return (new cljs.core.async.t28848(cb__$1,flag__$1,alt_handler__$1,meta28849));
});

}

return (new cljs.core.async.t28848(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__28858 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28858) : port.call(null,G__28858));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__28859 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28859) : port.call(null,G__28859));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28851_SHARP_){
var G__28860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28851_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28860) : fret.call(null,G__28860));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28852_SHARP_){
var G__28861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28852_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28861) : fret.call(null,G__28861));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28862 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28862) : cljs.core.deref.call(null,G__28862));
})(),(function (){var or__3636__auto__ = wport;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28863 = (i + (1));
i = G__28863;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3636__auto__ = ret;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3624__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3624__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3624__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__28864){
var map__28866 = p__28864;
var map__28866__$1 = ((cljs.core.seq_QMARK_(map__28866))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28866):map__28866);
var opts = map__28866__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28864 = null;
if (arguments.length > 1) {
  p__28864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__28864);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28867){
var ports = cljs.core.first(arglist__28867);
var p__28864 = cljs.core.rest(arglist__28867);
return alts_BANG___delegate(ports,p__28864);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__17262__auto___28965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___28965){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___28965){
return (function (state_28941){
var state_val_28942 = (state_28941[(1)]);
if((state_val_28942 === (7))){
var inst_28937 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28943_28966 = state_28941__$1;
(statearr_28943_28966[(2)] = inst_28937);

(statearr_28943_28966[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (1))){
var state_28941__$1 = state_28941;
var statearr_28944_28967 = state_28941__$1;
(statearr_28944_28967[(2)] = null);

(statearr_28944_28967[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (4))){
var inst_28920 = (state_28941[(7)]);
var inst_28920__$1 = (state_28941[(2)]);
var inst_28921 = (inst_28920__$1 == null);
var state_28941__$1 = (function (){var statearr_28945 = state_28941;
(statearr_28945[(7)] = inst_28920__$1);

return statearr_28945;
})();
if(cljs.core.truth_(inst_28921)){
var statearr_28946_28968 = state_28941__$1;
(statearr_28946_28968[(1)] = (5));

} else {
var statearr_28947_28969 = state_28941__$1;
(statearr_28947_28969[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (13))){
var state_28941__$1 = state_28941;
var statearr_28948_28970 = state_28941__$1;
(statearr_28948_28970[(2)] = null);

(statearr_28948_28970[(1)] = (14));


return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (6))){
var inst_28920 = (state_28941[(7)]);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28941__$1,(11),to,inst_28920);
} else {
if((state_val_28942 === (3))){
var inst_28939 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28941__$1,inst_28939);
} else {
if((state_val_28942 === (12))){
var state_28941__$1 = state_28941;
var statearr_28949_28971 = state_28941__$1;
(statearr_28949_28971[(2)] = null);

(statearr_28949_28971[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (2))){
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28941__$1,(4),from);
} else {
if((state_val_28942 === (11))){
var inst_28930 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28930)){
var statearr_28950_28972 = state_28941__$1;
(statearr_28950_28972[(1)] = (12));

} else {
var statearr_28951_28973 = state_28941__$1;
(statearr_28951_28973[(1)] = (13));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (9))){
var state_28941__$1 = state_28941;
var statearr_28952_28974 = state_28941__$1;
(statearr_28952_28974[(2)] = null);

(statearr_28952_28974[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (5))){
var state_28941__$1 = state_28941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28953_28975 = state_28941__$1;
(statearr_28953_28975[(1)] = (8));

} else {
var statearr_28954_28976 = state_28941__$1;
(statearr_28954_28976[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (14))){
var inst_28935 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28955_28977 = state_28941__$1;
(statearr_28955_28977[(2)] = inst_28935);

(statearr_28955_28977[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (10))){
var inst_28927 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28956_28978 = state_28941__$1;
(statearr_28956_28978[(2)] = inst_28927);

(statearr_28956_28978[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_28942 === (8))){
var inst_28924 = cljs.core.async.close_BANG_(to);
var state_28941__$1 = state_28941;
var statearr_28957_28979 = state_28941__$1;
(statearr_28957_28979[(2)] = inst_28924);

(statearr_28957_28979[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto___28965))
;
return ((function (switch__17247__auto__,c__17262__auto___28965){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_28961 = [null,null,null,null,null,null,null,null];
(statearr_28961[(0)] = state_machine__17248__auto__);

(statearr_28961[(1)] = (1));

return statearr_28961;
});
var state_machine__17248__auto____1 = (function (state_28941){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_28941);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e28962){if((e28962 instanceof Object)){
var ex__17251__auto__ = e28962;
var statearr_28963_28980 = state_28941;
(statearr_28963_28980[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28941);

return cljs.core.constant$keyword$114;
} else {
throw e28962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__28981 = state_28941;
state_28941 = G__28981;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_28941){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_28941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___28965))
})();
var state__17264__auto__ = (function (){var statearr_28964 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_28964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___28965);

return statearr_28964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___28965))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__29167){
var vec__29168 = p__29167;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29168,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29168,(1),null);
var job = vec__29168;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17262__auto___29352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___29352,res,vec__29168,v,p,job,jobs,results){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___29352,res,vec__29168,v,p,job,jobs,results){
return (function (state_29173){
var state_val_29174 = (state_29173[(1)]);
if((state_val_29174 === (2))){
var inst_29170 = (state_29173[(2)]);
var inst_29171 = cljs.core.async.close_BANG_(res);
var state_29173__$1 = (function (){var statearr_29175 = state_29173;
(statearr_29175[(7)] = inst_29170);

return statearr_29175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29173__$1,inst_29171);
} else {
if((state_val_29174 === (1))){
var state_29173__$1 = state_29173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29173__$1,(2),res,v);
} else {
return null;
}
}
});})(c__17262__auto___29352,res,vec__29168,v,p,job,jobs,results))
;
return ((function (switch__17247__auto__,c__17262__auto___29352,res,vec__29168,v,p,job,jobs,results){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29179 = [null,null,null,null,null,null,null,null];
(statearr_29179[(0)] = state_machine__17248__auto__);

(statearr_29179[(1)] = (1));

return statearr_29179;
});
var state_machine__17248__auto____1 = (function (state_29173){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29173);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29180){if((e29180 instanceof Object)){
var ex__17251__auto__ = e29180;
var statearr_29181_29353 = state_29173;
(statearr_29181_29353[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29173);

return cljs.core.constant$keyword$114;
} else {
throw e29180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29354 = state_29173;
state_29173 = G__29354;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29173){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___29352,res,vec__29168,v,p,job,jobs,results))
})();
var state__17264__auto__ = (function (){var statearr_29182 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___29352);

return statearr_29182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___29352,res,vec__29168,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29183){
var vec__29184 = p__29183;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(1),null);
var job = vec__29184;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__29185_29355 = v;
var G__29186_29356 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__29185_29355,G__29186_29356) : xf.call(null,G__29185_29355,G__29186_29356));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4523__auto___29357 = n;
var __29358 = (0);
while(true){
if((__29358 < n__4523__auto___29357)){
var G__29187_29359 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29187_29359) {
case "async":
var c__17262__auto___29361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29358,c__17262__auto___29361,G__29187_29359,n__4523__auto___29357,jobs,results,process,async){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (__29358,c__17262__auto___29361,G__29187_29359,n__4523__auto___29357,jobs,results,process,async){
return (function (state_29200){
var state_val_29201 = (state_29200[(1)]);
if((state_val_29201 === (7))){
var inst_29196 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
var statearr_29202_29362 = state_29200__$1;
(statearr_29202_29362[(2)] = inst_29196);

(statearr_29202_29362[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29201 === (6))){
var state_29200__$1 = state_29200;
var statearr_29203_29363 = state_29200__$1;
(statearr_29203_29363[(2)] = null);

(statearr_29203_29363[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29201 === (5))){
var state_29200__$1 = state_29200;
var statearr_29204_29364 = state_29200__$1;
(statearr_29204_29364[(2)] = null);

(statearr_29204_29364[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29201 === (4))){
var inst_29190 = (state_29200[(2)]);
var inst_29191 = async(inst_29190);
var state_29200__$1 = state_29200;
if(cljs.core.truth_(inst_29191)){
var statearr_29205_29365 = state_29200__$1;
(statearr_29205_29365[(1)] = (5));

} else {
var statearr_29206_29366 = state_29200__$1;
(statearr_29206_29366[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29201 === (3))){
var inst_29198 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29200__$1,inst_29198);
} else {
if((state_val_29201 === (2))){
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29200__$1,(4),jobs);
} else {
if((state_val_29201 === (1))){
var state_29200__$1 = state_29200;
var statearr_29207_29367 = state_29200__$1;
(statearr_29207_29367[(2)] = null);

(statearr_29207_29367[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
}
}
}
}
}
}
}
});})(__29358,c__17262__auto___29361,G__29187_29359,n__4523__auto___29357,jobs,results,process,async))
;
return ((function (__29358,switch__17247__auto__,c__17262__auto___29361,G__29187_29359,n__4523__auto___29357,jobs,results,process,async){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29211 = [null,null,null,null,null,null,null];
(statearr_29211[(0)] = state_machine__17248__auto__);

(statearr_29211[(1)] = (1));

return statearr_29211;
});
var state_machine__17248__auto____1 = (function (state_29200){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29200);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29212){if((e29212 instanceof Object)){
var ex__17251__auto__ = e29212;
var statearr_29213_29368 = state_29200;
(statearr_29213_29368[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29200);

return cljs.core.constant$keyword$114;
} else {
throw e29212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29369 = state_29200;
state_29200 = G__29369;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29200){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(__29358,switch__17247__auto__,c__17262__auto___29361,G__29187_29359,n__4523__auto___29357,jobs,results,process,async))
})();
var state__17264__auto__ = (function (){var statearr_29214 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___29361);

return statearr_29214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(__29358,c__17262__auto___29361,G__29187_29359,n__4523__auto___29357,jobs,results,process,async))
);


break;
case "compute":
var c__17262__auto___29370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29358,c__17262__auto___29370,G__29187_29359,n__4523__auto___29357,jobs,results,process,async){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (__29358,c__17262__auto___29370,G__29187_29359,n__4523__auto___29357,jobs,results,process,async){
return (function (state_29227){
var state_val_29228 = (state_29227[(1)]);
if((state_val_29228 === (7))){
var inst_29223 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
var statearr_29229_29371 = state_29227__$1;
(statearr_29229_29371[(2)] = inst_29223);

(statearr_29229_29371[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29228 === (6))){
var state_29227__$1 = state_29227;
var statearr_29230_29372 = state_29227__$1;
(statearr_29230_29372[(2)] = null);

(statearr_29230_29372[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29228 === (5))){
var state_29227__$1 = state_29227;
var statearr_29231_29373 = state_29227__$1;
(statearr_29231_29373[(2)] = null);

(statearr_29231_29373[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29228 === (4))){
var inst_29217 = (state_29227[(2)]);
var inst_29218 = process(inst_29217);
var state_29227__$1 = state_29227;
if(cljs.core.truth_(inst_29218)){
var statearr_29232_29374 = state_29227__$1;
(statearr_29232_29374[(1)] = (5));

} else {
var statearr_29233_29375 = state_29227__$1;
(statearr_29233_29375[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29228 === (3))){
var inst_29225 = (state_29227[(2)]);
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29227__$1,inst_29225);
} else {
if((state_val_29228 === (2))){
var state_29227__$1 = state_29227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29227__$1,(4),jobs);
} else {
if((state_val_29228 === (1))){
var state_29227__$1 = state_29227;
var statearr_29234_29376 = state_29227__$1;
(statearr_29234_29376[(2)] = null);

(statearr_29234_29376[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
}
}
}
}
}
}
}
});})(__29358,c__17262__auto___29370,G__29187_29359,n__4523__auto___29357,jobs,results,process,async))
;
return ((function (__29358,switch__17247__auto__,c__17262__auto___29370,G__29187_29359,n__4523__auto___29357,jobs,results,process,async){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29238 = [null,null,null,null,null,null,null];
(statearr_29238[(0)] = state_machine__17248__auto__);

(statearr_29238[(1)] = (1));

return statearr_29238;
});
var state_machine__17248__auto____1 = (function (state_29227){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29227);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29239){if((e29239 instanceof Object)){
var ex__17251__auto__ = e29239;
var statearr_29240_29377 = state_29227;
(statearr_29240_29377[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29227);

return cljs.core.constant$keyword$114;
} else {
throw e29239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29378 = state_29227;
state_29227 = G__29378;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29227){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(__29358,switch__17247__auto__,c__17262__auto___29370,G__29187_29359,n__4523__auto___29357,jobs,results,process,async))
})();
var state__17264__auto__ = (function (){var statearr_29241 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___29370);

return statearr_29241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(__29358,c__17262__auto___29370,G__29187_29359,n__4523__auto___29357,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29379 = (__29358 + (1));
__29358 = G__29379;
continue;
} else {
}
break;
}

var c__17262__auto___29380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___29380,jobs,results,process,async){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___29380,jobs,results,process,async){
return (function (state_29263){
var state_val_29264 = (state_29263[(1)]);
if((state_val_29264 === (9))){
var inst_29256 = (state_29263[(2)]);
var state_29263__$1 = (function (){var statearr_29265 = state_29263;
(statearr_29265[(7)] = inst_29256);

return statearr_29265;
})();
var statearr_29266_29381 = state_29263__$1;
(statearr_29266_29381[(2)] = null);

(statearr_29266_29381[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29264 === (8))){
var inst_29249 = (state_29263[(8)]);
var inst_29254 = (state_29263[(2)]);
var state_29263__$1 = (function (){var statearr_29267 = state_29263;
(statearr_29267[(9)] = inst_29254);

return statearr_29267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29263__$1,(9),results,inst_29249);
} else {
if((state_val_29264 === (7))){
var inst_29259 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
var statearr_29268_29382 = state_29263__$1;
(statearr_29268_29382[(2)] = inst_29259);

(statearr_29268_29382[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29264 === (6))){
var inst_29244 = (state_29263[(10)]);
var inst_29249 = (state_29263[(8)]);
var inst_29249__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29251 = [inst_29244,inst_29249__$1];
var inst_29252 = (new cljs.core.PersistentVector(null,2,(5),inst_29250,inst_29251,null));
var state_29263__$1 = (function (){var statearr_29269 = state_29263;
(statearr_29269[(8)] = inst_29249__$1);

return statearr_29269;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29263__$1,(8),jobs,inst_29252);
} else {
if((state_val_29264 === (5))){
var inst_29247 = cljs.core.async.close_BANG_(jobs);
var state_29263__$1 = state_29263;
var statearr_29270_29383 = state_29263__$1;
(statearr_29270_29383[(2)] = inst_29247);

(statearr_29270_29383[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29264 === (4))){
var inst_29244 = (state_29263[(10)]);
var inst_29244__$1 = (state_29263[(2)]);
var inst_29245 = (inst_29244__$1 == null);
var state_29263__$1 = (function (){var statearr_29271 = state_29263;
(statearr_29271[(10)] = inst_29244__$1);

return statearr_29271;
})();
if(cljs.core.truth_(inst_29245)){
var statearr_29272_29384 = state_29263__$1;
(statearr_29272_29384[(1)] = (5));

} else {
var statearr_29273_29385 = state_29263__$1;
(statearr_29273_29385[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29264 === (3))){
var inst_29261 = (state_29263[(2)]);
var state_29263__$1 = state_29263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29263__$1,inst_29261);
} else {
if((state_val_29264 === (2))){
var state_29263__$1 = state_29263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29263__$1,(4),from);
} else {
if((state_val_29264 === (1))){
var state_29263__$1 = state_29263;
var statearr_29274_29386 = state_29263__$1;
(statearr_29274_29386[(2)] = null);

(statearr_29274_29386[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__17262__auto___29380,jobs,results,process,async))
;
return ((function (switch__17247__auto__,c__17262__auto___29380,jobs,results,process,async){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29278[(0)] = state_machine__17248__auto__);

(statearr_29278[(1)] = (1));

return statearr_29278;
});
var state_machine__17248__auto____1 = (function (state_29263){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29263);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29279){if((e29279 instanceof Object)){
var ex__17251__auto__ = e29279;
var statearr_29280_29387 = state_29263;
(statearr_29280_29387[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29263);

return cljs.core.constant$keyword$114;
} else {
throw e29279;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29388 = state_29263;
state_29263 = G__29388;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29263){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___29380,jobs,results,process,async))
})();
var state__17264__auto__ = (function (){var statearr_29281 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___29380);

return statearr_29281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___29380,jobs,results,process,async))
);


var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto__,jobs,results,process,async){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto__,jobs,results,process,async){
return (function (state_29319){
var state_val_29320 = (state_29319[(1)]);
if((state_val_29320 === (7))){
var inst_29315 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29321_29389 = state_29319__$1;
(statearr_29321_29389[(2)] = inst_29315);

(statearr_29321_29389[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (20))){
var state_29319__$1 = state_29319;
var statearr_29322_29390 = state_29319__$1;
(statearr_29322_29390[(2)] = null);

(statearr_29322_29390[(1)] = (21));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (1))){
var state_29319__$1 = state_29319;
var statearr_29323_29391 = state_29319__$1;
(statearr_29323_29391[(2)] = null);

(statearr_29323_29391[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (4))){
var inst_29284 = (state_29319[(7)]);
var inst_29284__$1 = (state_29319[(2)]);
var inst_29285 = (inst_29284__$1 == null);
var state_29319__$1 = (function (){var statearr_29324 = state_29319;
(statearr_29324[(7)] = inst_29284__$1);

return statearr_29324;
})();
if(cljs.core.truth_(inst_29285)){
var statearr_29325_29392 = state_29319__$1;
(statearr_29325_29392[(1)] = (5));

} else {
var statearr_29326_29393 = state_29319__$1;
(statearr_29326_29393[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (15))){
var inst_29297 = (state_29319[(8)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29319__$1,(18),to,inst_29297);
} else {
if((state_val_29320 === (21))){
var inst_29310 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29327_29394 = state_29319__$1;
(statearr_29327_29394[(2)] = inst_29310);

(statearr_29327_29394[(1)] = (13));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (13))){
var inst_29312 = (state_29319[(2)]);
var state_29319__$1 = (function (){var statearr_29328 = state_29319;
(statearr_29328[(9)] = inst_29312);

return statearr_29328;
})();
var statearr_29329_29395 = state_29319__$1;
(statearr_29329_29395[(2)] = null);

(statearr_29329_29395[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (6))){
var inst_29284 = (state_29319[(7)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29319__$1,(11),inst_29284);
} else {
if((state_val_29320 === (17))){
var inst_29305 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29305)){
var statearr_29330_29396 = state_29319__$1;
(statearr_29330_29396[(1)] = (19));

} else {
var statearr_29331_29397 = state_29319__$1;
(statearr_29331_29397[(1)] = (20));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (3))){
var inst_29317 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29319__$1,inst_29317);
} else {
if((state_val_29320 === (12))){
var inst_29294 = (state_29319[(10)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29319__$1,(14),inst_29294);
} else {
if((state_val_29320 === (2))){
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29319__$1,(4),results);
} else {
if((state_val_29320 === (19))){
var state_29319__$1 = state_29319;
var statearr_29332_29398 = state_29319__$1;
(statearr_29332_29398[(2)] = null);

(statearr_29332_29398[(1)] = (12));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (11))){
var inst_29294 = (state_29319[(2)]);
var state_29319__$1 = (function (){var statearr_29333 = state_29319;
(statearr_29333[(10)] = inst_29294);

return statearr_29333;
})();
var statearr_29334_29399 = state_29319__$1;
(statearr_29334_29399[(2)] = null);

(statearr_29334_29399[(1)] = (12));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (9))){
var state_29319__$1 = state_29319;
var statearr_29335_29400 = state_29319__$1;
(statearr_29335_29400[(2)] = null);

(statearr_29335_29400[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (5))){
var state_29319__$1 = state_29319;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29336_29401 = state_29319__$1;
(statearr_29336_29401[(1)] = (8));

} else {
var statearr_29337_29402 = state_29319__$1;
(statearr_29337_29402[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (14))){
var inst_29299 = (state_29319[(11)]);
var inst_29297 = (state_29319[(8)]);
var inst_29297__$1 = (state_29319[(2)]);
var inst_29298 = (inst_29297__$1 == null);
var inst_29299__$1 = cljs.core.not(inst_29298);
var state_29319__$1 = (function (){var statearr_29338 = state_29319;
(statearr_29338[(11)] = inst_29299__$1);

(statearr_29338[(8)] = inst_29297__$1);

return statearr_29338;
})();
if(inst_29299__$1){
var statearr_29339_29403 = state_29319__$1;
(statearr_29339_29403[(1)] = (15));

} else {
var statearr_29340_29404 = state_29319__$1;
(statearr_29340_29404[(1)] = (16));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (16))){
var inst_29299 = (state_29319[(11)]);
var state_29319__$1 = state_29319;
var statearr_29341_29405 = state_29319__$1;
(statearr_29341_29405[(2)] = inst_29299);

(statearr_29341_29405[(1)] = (17));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (10))){
var inst_29291 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29342_29406 = state_29319__$1;
(statearr_29342_29406[(2)] = inst_29291);

(statearr_29342_29406[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (18))){
var inst_29302 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29343_29407 = state_29319__$1;
(statearr_29343_29407[(2)] = inst_29302);

(statearr_29343_29407[(1)] = (17));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29320 === (8))){
var inst_29288 = cljs.core.async.close_BANG_(to);
var state_29319__$1 = state_29319;
var statearr_29344_29408 = state_29319__$1;
(statearr_29344_29408[(2)] = inst_29288);

(statearr_29344_29408[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto__,jobs,results,process,async))
;
return ((function (switch__17247__auto__,c__17262__auto__,jobs,results,process,async){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29348 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29348[(0)] = state_machine__17248__auto__);

(statearr_29348[(1)] = (1));

return statearr_29348;
});
var state_machine__17248__auto____1 = (function (state_29319){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29319);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29349){if((e29349 instanceof Object)){
var ex__17251__auto__ = e29349;
var statearr_29350_29409 = state_29319;
(statearr_29350_29409[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29319);

return cljs.core.constant$keyword$114;
} else {
throw e29349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29410 = state_29319;
state_29319 = G__29410;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29319){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto__,jobs,results,process,async))
})();
var state__17264__auto__ = (function (){var statearr_29351 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto__);

return statearr_29351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto__,jobs,results,process,async))
);

return c__17262__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$121);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$122);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17262__auto___29533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___29533,tc,fc){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___29533,tc,fc){
return (function (state_29507){
var state_val_29508 = (state_29507[(1)]);
if((state_val_29508 === (7))){
var inst_29503 = (state_29507[(2)]);
var state_29507__$1 = state_29507;
var statearr_29509_29534 = state_29507__$1;
(statearr_29509_29534[(2)] = inst_29503);

(statearr_29509_29534[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (1))){
var state_29507__$1 = state_29507;
var statearr_29510_29535 = state_29507__$1;
(statearr_29510_29535[(2)] = null);

(statearr_29510_29535[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (4))){
var inst_29484 = (state_29507[(7)]);
var inst_29484__$1 = (state_29507[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var state_29507__$1 = (function (){var statearr_29511 = state_29507;
(statearr_29511[(7)] = inst_29484__$1);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29512_29536 = state_29507__$1;
(statearr_29512_29536[(1)] = (5));

} else {
var statearr_29513_29537 = state_29507__$1;
(statearr_29513_29537[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (13))){
var state_29507__$1 = state_29507;
var statearr_29514_29538 = state_29507__$1;
(statearr_29514_29538[(2)] = null);

(statearr_29514_29538[(1)] = (14));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (6))){
var inst_29484 = (state_29507[(7)]);
var inst_29490 = (function (){var G__29515 = inst_29484;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__29515) : p.call(null,G__29515));
})();
var state_29507__$1 = state_29507;
if(cljs.core.truth_(inst_29490)){
var statearr_29516_29539 = state_29507__$1;
(statearr_29516_29539[(1)] = (9));

} else {
var statearr_29517_29540 = state_29507__$1;
(statearr_29517_29540[(1)] = (10));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (3))){
var inst_29505 = (state_29507[(2)]);
var state_29507__$1 = state_29507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29507__$1,inst_29505);
} else {
if((state_val_29508 === (12))){
var state_29507__$1 = state_29507;
var statearr_29518_29541 = state_29507__$1;
(statearr_29518_29541[(2)] = null);

(statearr_29518_29541[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (2))){
var state_29507__$1 = state_29507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29507__$1,(4),ch);
} else {
if((state_val_29508 === (11))){
var inst_29484 = (state_29507[(7)]);
var inst_29494 = (state_29507[(2)]);
var state_29507__$1 = state_29507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29507__$1,(8),inst_29494,inst_29484);
} else {
if((state_val_29508 === (9))){
var state_29507__$1 = state_29507;
var statearr_29519_29542 = state_29507__$1;
(statearr_29519_29542[(2)] = tc);

(statearr_29519_29542[(1)] = (11));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (5))){
var inst_29487 = cljs.core.async.close_BANG_(tc);
var inst_29488 = cljs.core.async.close_BANG_(fc);
var state_29507__$1 = (function (){var statearr_29520 = state_29507;
(statearr_29520[(8)] = inst_29487);

return statearr_29520;
})();
var statearr_29521_29543 = state_29507__$1;
(statearr_29521_29543[(2)] = inst_29488);

(statearr_29521_29543[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (14))){
var inst_29501 = (state_29507[(2)]);
var state_29507__$1 = state_29507;
var statearr_29522_29544 = state_29507__$1;
(statearr_29522_29544[(2)] = inst_29501);

(statearr_29522_29544[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (10))){
var state_29507__$1 = state_29507;
var statearr_29523_29545 = state_29507__$1;
(statearr_29523_29545[(2)] = fc);

(statearr_29523_29545[(1)] = (11));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29508 === (8))){
var inst_29496 = (state_29507[(2)]);
var state_29507__$1 = state_29507;
if(cljs.core.truth_(inst_29496)){
var statearr_29524_29546 = state_29507__$1;
(statearr_29524_29546[(1)] = (12));

} else {
var statearr_29525_29547 = state_29507__$1;
(statearr_29525_29547[(1)] = (13));

}

return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto___29533,tc,fc))
;
return ((function (switch__17247__auto__,c__17262__auto___29533,tc,fc){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29529 = [null,null,null,null,null,null,null,null,null];
(statearr_29529[(0)] = state_machine__17248__auto__);

(statearr_29529[(1)] = (1));

return statearr_29529;
});
var state_machine__17248__auto____1 = (function (state_29507){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29507);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29530){if((e29530 instanceof Object)){
var ex__17251__auto__ = e29530;
var statearr_29531_29548 = state_29507;
(statearr_29531_29548[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29507);

return cljs.core.constant$keyword$114;
} else {
throw e29530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29549 = state_29507;
state_29507 = G__29549;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29507){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___29533,tc,fc))
})();
var state__17264__auto__ = (function (){var statearr_29532 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___29533);

return statearr_29532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___29533,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto__){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto__){
return (function (state_29598){
var state_val_29599 = (state_29598[(1)]);
if((state_val_29599 === (7))){
var inst_29594 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29600_29618 = state_29598__$1;
(statearr_29600_29618[(2)] = inst_29594);

(statearr_29600_29618[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29599 === (6))){
var inst_29587 = (state_29598[(7)]);
var inst_29584 = (state_29598[(8)]);
var inst_29591 = (function (){var G__29601 = inst_29584;
var G__29602 = inst_29587;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29601,G__29602) : f.call(null,G__29601,G__29602));
})();
var inst_29584__$1 = inst_29591;
var state_29598__$1 = (function (){var statearr_29603 = state_29598;
(statearr_29603[(8)] = inst_29584__$1);

return statearr_29603;
})();
var statearr_29604_29619 = state_29598__$1;
(statearr_29604_29619[(2)] = null);

(statearr_29604_29619[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29599 === (5))){
var inst_29584 = (state_29598[(8)]);
var state_29598__$1 = state_29598;
var statearr_29605_29620 = state_29598__$1;
(statearr_29605_29620[(2)] = inst_29584);

(statearr_29605_29620[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29599 === (4))){
var inst_29587 = (state_29598[(7)]);
var inst_29587__$1 = (state_29598[(2)]);
var inst_29588 = (inst_29587__$1 == null);
var state_29598__$1 = (function (){var statearr_29606 = state_29598;
(statearr_29606[(7)] = inst_29587__$1);

return statearr_29606;
})();
if(cljs.core.truth_(inst_29588)){
var statearr_29607_29621 = state_29598__$1;
(statearr_29607_29621[(1)] = (5));

} else {
var statearr_29608_29622 = state_29598__$1;
(statearr_29608_29622[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29599 === (3))){
var inst_29596 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29598__$1,inst_29596);
} else {
if((state_val_29599 === (2))){
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29598__$1,(4),ch);
} else {
if((state_val_29599 === (1))){
var inst_29584 = init;
var state_29598__$1 = (function (){var statearr_29609 = state_29598;
(statearr_29609[(8)] = inst_29584);

return statearr_29609;
})();
var statearr_29610_29623 = state_29598__$1;
(statearr_29610_29623[(2)] = null);

(statearr_29610_29623[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
}
}
}
}
}
}
}
});})(c__17262__auto__))
;
return ((function (switch__17247__auto__,c__17262__auto__){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29614 = [null,null,null,null,null,null,null,null,null];
(statearr_29614[(0)] = state_machine__17248__auto__);

(statearr_29614[(1)] = (1));

return statearr_29614;
});
var state_machine__17248__auto____1 = (function (state_29598){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29598);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29615){if((e29615 instanceof Object)){
var ex__17251__auto__ = e29615;
var statearr_29616_29624 = state_29598;
(statearr_29616_29624[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29598);

return cljs.core.constant$keyword$114;
} else {
throw e29615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29625 = state_29598;
state_29598 = G__29625;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29598){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto__))
})();
var state__17264__auto__ = (function (){var statearr_29617 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto__);

return statearr_29617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto__))
);

return c__17262__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto__){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto__){
return (function (state_29702){
var state_val_29703 = (state_29702[(1)]);
if((state_val_29703 === (7))){
var inst_29684 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29704_29727 = state_29702__$1;
(statearr_29704_29727[(2)] = inst_29684);

(statearr_29704_29727[(1)] = (6));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (1))){
var inst_29678 = cljs.core.seq(coll);
var inst_29679 = inst_29678;
var state_29702__$1 = (function (){var statearr_29705 = state_29702;
(statearr_29705[(7)] = inst_29679);

return statearr_29705;
})();
var statearr_29706_29728 = state_29702__$1;
(statearr_29706_29728[(2)] = null);

(statearr_29706_29728[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (4))){
var inst_29679 = (state_29702[(7)]);
var inst_29682 = cljs.core.first(inst_29679);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29702__$1,(7),ch,inst_29682);
} else {
if((state_val_29703 === (13))){
var inst_29696 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29707_29729 = state_29702__$1;
(statearr_29707_29729[(2)] = inst_29696);

(statearr_29707_29729[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (6))){
var inst_29687 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
if(cljs.core.truth_(inst_29687)){
var statearr_29708_29730 = state_29702__$1;
(statearr_29708_29730[(1)] = (8));

} else {
var statearr_29709_29731 = state_29702__$1;
(statearr_29709_29731[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (3))){
var inst_29700 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29702__$1,inst_29700);
} else {
if((state_val_29703 === (12))){
var state_29702__$1 = state_29702;
var statearr_29710_29732 = state_29702__$1;
(statearr_29710_29732[(2)] = null);

(statearr_29710_29732[(1)] = (13));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (2))){
var inst_29679 = (state_29702[(7)]);
var state_29702__$1 = state_29702;
if(cljs.core.truth_(inst_29679)){
var statearr_29711_29733 = state_29702__$1;
(statearr_29711_29733[(1)] = (4));

} else {
var statearr_29712_29734 = state_29702__$1;
(statearr_29712_29734[(1)] = (5));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (11))){
var inst_29693 = cljs.core.async.close_BANG_(ch);
var state_29702__$1 = state_29702;
var statearr_29713_29735 = state_29702__$1;
(statearr_29713_29735[(2)] = inst_29693);

(statearr_29713_29735[(1)] = (13));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (9))){
var state_29702__$1 = state_29702;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29714_29736 = state_29702__$1;
(statearr_29714_29736[(1)] = (11));

} else {
var statearr_29715_29737 = state_29702__$1;
(statearr_29715_29737[(1)] = (12));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (5))){
var inst_29679 = (state_29702[(7)]);
var state_29702__$1 = state_29702;
var statearr_29716_29738 = state_29702__$1;
(statearr_29716_29738[(2)] = inst_29679);

(statearr_29716_29738[(1)] = (6));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (10))){
var inst_29698 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29717_29739 = state_29702__$1;
(statearr_29717_29739[(2)] = inst_29698);

(statearr_29717_29739[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_29703 === (8))){
var inst_29679 = (state_29702[(7)]);
var inst_29689 = cljs.core.next(inst_29679);
var inst_29679__$1 = inst_29689;
var state_29702__$1 = (function (){var statearr_29718 = state_29702;
(statearr_29718[(7)] = inst_29679__$1);

return statearr_29718;
})();
var statearr_29719_29740 = state_29702__$1;
(statearr_29719_29740[(2)] = null);

(statearr_29719_29740[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto__))
;
return ((function (switch__17247__auto__,c__17262__auto__){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_29723 = [null,null,null,null,null,null,null,null];
(statearr_29723[(0)] = state_machine__17248__auto__);

(statearr_29723[(1)] = (1));

return statearr_29723;
});
var state_machine__17248__auto____1 = (function (state_29702){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_29702);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e29724){if((e29724 instanceof Object)){
var ex__17251__auto__ = e29724;
var statearr_29725_29741 = state_29702;
(statearr_29725_29741[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29702);

return cljs.core.constant$keyword$114;
} else {
throw e29724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__29742 = state_29702;
state_29702 = G__29742;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_29702){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_29702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto__))
})();
var state__17264__auto__ = (function (){var statearr_29726 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_29726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto__);

return statearr_29726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto__))
);

return c__17262__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29744 = {};
return obj29744;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3624__auto__ = _;
if(and__3624__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4280__auto__ = (((_ == null))?null:_);
return (function (){var or__3636__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__29748 = x__4280__auto__;
return goog.typeOf(G__29748);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29750 = {};
return obj29750;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__29754 = x__4280__auto__;
return goog.typeOf(G__29754);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__29758 = x__4280__auto__;
return goog.typeOf(G__29758);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__29762 = x__4280__auto__;
return goog.typeOf(G__29762);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__29992 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29992) : cljs.core.atom.call(null,G__29992));
})();
var m = (function (){
if(typeof cljs.core.async.t29993 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29993 = (function (cs,ch,mult,meta29994){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29994 = meta29994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29993.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29993.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29993.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29993.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29996_30221 = self__.cs;
var G__29997_30222 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29996_30221,G__29997_30222) : cljs.core.reset_BANG_.call(null,G__29996_30221,G__29997_30222));

return null;
});})(cs))
;

cljs.core.async.t29993.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29995){
var self__ = this;
var _29995__$1 = this;
return self__.meta29994;
});})(cs))
;

cljs.core.async.t29993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29995,meta29994__$1){
var self__ = this;
var _29995__$1 = this;
return (new cljs.core.async.t29993(self__.cs,self__.ch,self__.mult,meta29994__$1));
});})(cs))
;

cljs.core.async.t29993.cljs$lang$type = true;

cljs.core.async.t29993.cljs$lang$ctorStr = "cljs.core.async/t29993";

cljs.core.async.t29993.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t29993");
});})(cs))
;

cljs.core.async.__GT_t29993 = ((function (cs){
return (function __GT_t29993(cs__$1,ch__$1,mult__$1,meta29994){
return (new cljs.core.async.t29993(cs__$1,ch__$1,mult__$1,meta29994));
});})(cs))
;

}

return (new cljs.core.async.t29993(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__29998 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29998) : cljs.core.atom.call(null,G__29998));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17262__auto___30223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___30223,cs,m,dchan,dctr,done){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___30223,cs,m,dchan,dctr,done){
return (function (state_30129){
var state_val_30130 = (state_30129[(1)]);
if((state_val_30130 === (7))){
var inst_30125 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30131_30224 = state_30129__$1;
(statearr_30131_30224[(2)] = inst_30125);

(statearr_30131_30224[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (20))){
var inst_30030 = (state_30129[(7)]);
var inst_30040 = cljs.core.first(inst_30030);
var inst_30041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30040,(0),null);
var inst_30042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30040,(1),null);
var state_30129__$1 = (function (){var statearr_30132 = state_30129;
(statearr_30132[(8)] = inst_30041);

return statearr_30132;
})();
if(cljs.core.truth_(inst_30042)){
var statearr_30133_30225 = state_30129__$1;
(statearr_30133_30225[(1)] = (22));

} else {
var statearr_30134_30226 = state_30129__$1;
(statearr_30134_30226[(1)] = (23));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (27))){
var inst_30001 = (state_30129[(9)]);
var inst_30072 = (state_30129[(10)]);
var inst_30077 = (state_30129[(11)]);
var inst_30070 = (state_30129[(12)]);
var inst_30077__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30070,inst_30072);
var inst_30078 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30077__$1,inst_30001,done);
var state_30129__$1 = (function (){var statearr_30135 = state_30129;
(statearr_30135[(11)] = inst_30077__$1);

return statearr_30135;
})();
if(cljs.core.truth_(inst_30078)){
var statearr_30136_30227 = state_30129__$1;
(statearr_30136_30227[(1)] = (30));

} else {
var statearr_30137_30228 = state_30129__$1;
(statearr_30137_30228[(1)] = (31));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (1))){
var state_30129__$1 = state_30129;
var statearr_30138_30229 = state_30129__$1;
(statearr_30138_30229[(2)] = null);

(statearr_30138_30229[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (24))){
var inst_30030 = (state_30129[(7)]);
var inst_30047 = (state_30129[(2)]);
var inst_30048 = cljs.core.next(inst_30030);
var inst_30010 = inst_30048;
var inst_30011 = null;
var inst_30012 = (0);
var inst_30013 = (0);
var state_30129__$1 = (function (){var statearr_30139 = state_30129;
(statearr_30139[(13)] = inst_30011);

(statearr_30139[(14)] = inst_30010);

(statearr_30139[(15)] = inst_30047);

(statearr_30139[(16)] = inst_30012);

(statearr_30139[(17)] = inst_30013);

return statearr_30139;
})();
var statearr_30140_30230 = state_30129__$1;
(statearr_30140_30230[(2)] = null);

(statearr_30140_30230[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (39))){
var state_30129__$1 = state_30129;
var statearr_30144_30231 = state_30129__$1;
(statearr_30144_30231[(2)] = null);

(statearr_30144_30231[(1)] = (41));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (4))){
var inst_30001 = (state_30129[(9)]);
var inst_30001__$1 = (state_30129[(2)]);
var inst_30002 = (inst_30001__$1 == null);
var state_30129__$1 = (function (){var statearr_30145 = state_30129;
(statearr_30145[(9)] = inst_30001__$1);

return statearr_30145;
})();
if(cljs.core.truth_(inst_30002)){
var statearr_30146_30232 = state_30129__$1;
(statearr_30146_30232[(1)] = (5));

} else {
var statearr_30147_30233 = state_30129__$1;
(statearr_30147_30233[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (15))){
var inst_30011 = (state_30129[(13)]);
var inst_30010 = (state_30129[(14)]);
var inst_30012 = (state_30129[(16)]);
var inst_30013 = (state_30129[(17)]);
var inst_30026 = (state_30129[(2)]);
var inst_30027 = (inst_30013 + (1));
var tmp30141 = inst_30011;
var tmp30142 = inst_30010;
var tmp30143 = inst_30012;
var inst_30010__$1 = tmp30142;
var inst_30011__$1 = tmp30141;
var inst_30012__$1 = tmp30143;
var inst_30013__$1 = inst_30027;
var state_30129__$1 = (function (){var statearr_30148 = state_30129;
(statearr_30148[(13)] = inst_30011__$1);

(statearr_30148[(14)] = inst_30010__$1);

(statearr_30148[(18)] = inst_30026);

(statearr_30148[(16)] = inst_30012__$1);

(statearr_30148[(17)] = inst_30013__$1);

return statearr_30148;
})();
var statearr_30149_30234 = state_30129__$1;
(statearr_30149_30234[(2)] = null);

(statearr_30149_30234[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (21))){
var inst_30051 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30153_30235 = state_30129__$1;
(statearr_30153_30235[(2)] = inst_30051);

(statearr_30153_30235[(1)] = (18));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (31))){
var inst_30077 = (state_30129[(11)]);
var inst_30081 = done(null);
var inst_30082 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30077);
var state_30129__$1 = (function (){var statearr_30154 = state_30129;
(statearr_30154[(19)] = inst_30081);

return statearr_30154;
})();
var statearr_30155_30236 = state_30129__$1;
(statearr_30155_30236[(2)] = inst_30082);

(statearr_30155_30236[(1)] = (32));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (32))){
var inst_30071 = (state_30129[(20)]);
var inst_30072 = (state_30129[(10)]);
var inst_30070 = (state_30129[(12)]);
var inst_30069 = (state_30129[(21)]);
var inst_30084 = (state_30129[(2)]);
var inst_30085 = (inst_30072 + (1));
var tmp30150 = inst_30071;
var tmp30151 = inst_30070;
var tmp30152 = inst_30069;
var inst_30069__$1 = tmp30152;
var inst_30070__$1 = tmp30151;
var inst_30071__$1 = tmp30150;
var inst_30072__$1 = inst_30085;
var state_30129__$1 = (function (){var statearr_30156 = state_30129;
(statearr_30156[(20)] = inst_30071__$1);

(statearr_30156[(10)] = inst_30072__$1);

(statearr_30156[(22)] = inst_30084);

(statearr_30156[(12)] = inst_30070__$1);

(statearr_30156[(21)] = inst_30069__$1);

return statearr_30156;
})();
var statearr_30157_30237 = state_30129__$1;
(statearr_30157_30237[(2)] = null);

(statearr_30157_30237[(1)] = (25));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (40))){
var inst_30097 = (state_30129[(23)]);
var inst_30101 = done(null);
var inst_30102 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30097);
var state_30129__$1 = (function (){var statearr_30158 = state_30129;
(statearr_30158[(24)] = inst_30101);

return statearr_30158;
})();
var statearr_30159_30238 = state_30129__$1;
(statearr_30159_30238[(2)] = inst_30102);

(statearr_30159_30238[(1)] = (41));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (33))){
var inst_30088 = (state_30129[(25)]);
var inst_30090 = cljs.core.chunked_seq_QMARK_(inst_30088);
var state_30129__$1 = state_30129;
if(inst_30090){
var statearr_30160_30239 = state_30129__$1;
(statearr_30160_30239[(1)] = (36));

} else {
var statearr_30161_30240 = state_30129__$1;
(statearr_30161_30240[(1)] = (37));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (13))){
var inst_30020 = (state_30129[(26)]);
var inst_30023 = cljs.core.async.close_BANG_(inst_30020);
var state_30129__$1 = state_30129;
var statearr_30162_30241 = state_30129__$1;
(statearr_30162_30241[(2)] = inst_30023);

(statearr_30162_30241[(1)] = (15));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (22))){
var inst_30041 = (state_30129[(8)]);
var inst_30044 = cljs.core.async.close_BANG_(inst_30041);
var state_30129__$1 = state_30129;
var statearr_30163_30242 = state_30129__$1;
(statearr_30163_30242[(2)] = inst_30044);

(statearr_30163_30242[(1)] = (24));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (36))){
var inst_30088 = (state_30129[(25)]);
var inst_30092 = cljs.core.chunk_first(inst_30088);
var inst_30093 = cljs.core.chunk_rest(inst_30088);
var inst_30094 = cljs.core.count(inst_30092);
var inst_30069 = inst_30093;
var inst_30070 = inst_30092;
var inst_30071 = inst_30094;
var inst_30072 = (0);
var state_30129__$1 = (function (){var statearr_30164 = state_30129;
(statearr_30164[(20)] = inst_30071);

(statearr_30164[(10)] = inst_30072);

(statearr_30164[(12)] = inst_30070);

(statearr_30164[(21)] = inst_30069);

return statearr_30164;
})();
var statearr_30165_30243 = state_30129__$1;
(statearr_30165_30243[(2)] = null);

(statearr_30165_30243[(1)] = (25));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (41))){
var inst_30088 = (state_30129[(25)]);
var inst_30104 = (state_30129[(2)]);
var inst_30105 = cljs.core.next(inst_30088);
var inst_30069 = inst_30105;
var inst_30070 = null;
var inst_30071 = (0);
var inst_30072 = (0);
var state_30129__$1 = (function (){var statearr_30166 = state_30129;
(statearr_30166[(20)] = inst_30071);

(statearr_30166[(10)] = inst_30072);

(statearr_30166[(27)] = inst_30104);

(statearr_30166[(12)] = inst_30070);

(statearr_30166[(21)] = inst_30069);

return statearr_30166;
})();
var statearr_30167_30244 = state_30129__$1;
(statearr_30167_30244[(2)] = null);

(statearr_30167_30244[(1)] = (25));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (43))){
var state_30129__$1 = state_30129;
var statearr_30168_30245 = state_30129__$1;
(statearr_30168_30245[(2)] = null);

(statearr_30168_30245[(1)] = (44));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (29))){
var inst_30113 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30169_30246 = state_30129__$1;
(statearr_30169_30246[(2)] = inst_30113);

(statearr_30169_30246[(1)] = (26));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (44))){
var inst_30122 = (state_30129[(2)]);
var state_30129__$1 = (function (){var statearr_30170 = state_30129;
(statearr_30170[(28)] = inst_30122);

return statearr_30170;
})();
var statearr_30171_30247 = state_30129__$1;
(statearr_30171_30247[(2)] = null);

(statearr_30171_30247[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (6))){
var inst_30061 = (state_30129[(29)]);
var inst_30060 = (function (){var G__30172 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30172) : cljs.core.deref.call(null,G__30172));
})();
var inst_30061__$1 = cljs.core.keys(inst_30060);
var inst_30062 = cljs.core.count(inst_30061__$1);
var inst_30063 = (function (){var G__30173 = dctr;
var G__30174 = inst_30062;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30173,G__30174) : cljs.core.reset_BANG_.call(null,G__30173,G__30174));
})();
var inst_30068 = cljs.core.seq(inst_30061__$1);
var inst_30069 = inst_30068;
var inst_30070 = null;
var inst_30071 = (0);
var inst_30072 = (0);
var state_30129__$1 = (function (){var statearr_30175 = state_30129;
(statearr_30175[(30)] = inst_30063);

(statearr_30175[(20)] = inst_30071);

(statearr_30175[(10)] = inst_30072);

(statearr_30175[(29)] = inst_30061__$1);

(statearr_30175[(12)] = inst_30070);

(statearr_30175[(21)] = inst_30069);

return statearr_30175;
})();
var statearr_30176_30248 = state_30129__$1;
(statearr_30176_30248[(2)] = null);

(statearr_30176_30248[(1)] = (25));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (28))){
var inst_30088 = (state_30129[(25)]);
var inst_30069 = (state_30129[(21)]);
var inst_30088__$1 = cljs.core.seq(inst_30069);
var state_30129__$1 = (function (){var statearr_30177 = state_30129;
(statearr_30177[(25)] = inst_30088__$1);

return statearr_30177;
})();
if(inst_30088__$1){
var statearr_30178_30249 = state_30129__$1;
(statearr_30178_30249[(1)] = (33));

} else {
var statearr_30179_30250 = state_30129__$1;
(statearr_30179_30250[(1)] = (34));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (25))){
var inst_30071 = (state_30129[(20)]);
var inst_30072 = (state_30129[(10)]);
var inst_30074 = (inst_30072 < inst_30071);
var inst_30075 = inst_30074;
var state_30129__$1 = state_30129;
if(cljs.core.truth_(inst_30075)){
var statearr_30180_30251 = state_30129__$1;
(statearr_30180_30251[(1)] = (27));

} else {
var statearr_30181_30252 = state_30129__$1;
(statearr_30181_30252[(1)] = (28));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (34))){
var state_30129__$1 = state_30129;
var statearr_30182_30253 = state_30129__$1;
(statearr_30182_30253[(2)] = null);

(statearr_30182_30253[(1)] = (35));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (17))){
var state_30129__$1 = state_30129;
var statearr_30183_30254 = state_30129__$1;
(statearr_30183_30254[(2)] = null);

(statearr_30183_30254[(1)] = (18));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (3))){
var inst_30127 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30129__$1,inst_30127);
} else {
if((state_val_30130 === (12))){
var inst_30056 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30184_30255 = state_30129__$1;
(statearr_30184_30255[(2)] = inst_30056);

(statearr_30184_30255[(1)] = (9));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (2))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30129__$1,(4),ch);
} else {
if((state_val_30130 === (23))){
var state_30129__$1 = state_30129;
var statearr_30185_30256 = state_30129__$1;
(statearr_30185_30256[(2)] = null);

(statearr_30185_30256[(1)] = (24));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (35))){
var inst_30111 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30186_30257 = state_30129__$1;
(statearr_30186_30257[(2)] = inst_30111);

(statearr_30186_30257[(1)] = (29));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (19))){
var inst_30030 = (state_30129[(7)]);
var inst_30034 = cljs.core.chunk_first(inst_30030);
var inst_30035 = cljs.core.chunk_rest(inst_30030);
var inst_30036 = cljs.core.count(inst_30034);
var inst_30010 = inst_30035;
var inst_30011 = inst_30034;
var inst_30012 = inst_30036;
var inst_30013 = (0);
var state_30129__$1 = (function (){var statearr_30187 = state_30129;
(statearr_30187[(13)] = inst_30011);

(statearr_30187[(14)] = inst_30010);

(statearr_30187[(16)] = inst_30012);

(statearr_30187[(17)] = inst_30013);

return statearr_30187;
})();
var statearr_30188_30258 = state_30129__$1;
(statearr_30188_30258[(2)] = null);

(statearr_30188_30258[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (11))){
var inst_30010 = (state_30129[(14)]);
var inst_30030 = (state_30129[(7)]);
var inst_30030__$1 = cljs.core.seq(inst_30010);
var state_30129__$1 = (function (){var statearr_30189 = state_30129;
(statearr_30189[(7)] = inst_30030__$1);

return statearr_30189;
})();
if(inst_30030__$1){
var statearr_30190_30259 = state_30129__$1;
(statearr_30190_30259[(1)] = (16));

} else {
var statearr_30191_30260 = state_30129__$1;
(statearr_30191_30260[(1)] = (17));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (9))){
var inst_30058 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30192_30261 = state_30129__$1;
(statearr_30192_30261[(2)] = inst_30058);

(statearr_30192_30261[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (5))){
var inst_30008 = (function (){var G__30193 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30193) : cljs.core.deref.call(null,G__30193));
})();
var inst_30009 = cljs.core.seq(inst_30008);
var inst_30010 = inst_30009;
var inst_30011 = null;
var inst_30012 = (0);
var inst_30013 = (0);
var state_30129__$1 = (function (){var statearr_30194 = state_30129;
(statearr_30194[(13)] = inst_30011);

(statearr_30194[(14)] = inst_30010);

(statearr_30194[(16)] = inst_30012);

(statearr_30194[(17)] = inst_30013);

return statearr_30194;
})();
var statearr_30195_30262 = state_30129__$1;
(statearr_30195_30262[(2)] = null);

(statearr_30195_30262[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (14))){
var state_30129__$1 = state_30129;
var statearr_30196_30263 = state_30129__$1;
(statearr_30196_30263[(2)] = null);

(statearr_30196_30263[(1)] = (15));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (45))){
var inst_30119 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30197_30264 = state_30129__$1;
(statearr_30197_30264[(2)] = inst_30119);

(statearr_30197_30264[(1)] = (44));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (26))){
var inst_30061 = (state_30129[(29)]);
var inst_30115 = (state_30129[(2)]);
var inst_30116 = cljs.core.seq(inst_30061);
var state_30129__$1 = (function (){var statearr_30198 = state_30129;
(statearr_30198[(31)] = inst_30115);

return statearr_30198;
})();
if(inst_30116){
var statearr_30199_30265 = state_30129__$1;
(statearr_30199_30265[(1)] = (42));

} else {
var statearr_30200_30266 = state_30129__$1;
(statearr_30200_30266[(1)] = (43));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (16))){
var inst_30030 = (state_30129[(7)]);
var inst_30032 = cljs.core.chunked_seq_QMARK_(inst_30030);
var state_30129__$1 = state_30129;
if(inst_30032){
var statearr_30201_30267 = state_30129__$1;
(statearr_30201_30267[(1)] = (19));

} else {
var statearr_30202_30268 = state_30129__$1;
(statearr_30202_30268[(1)] = (20));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (38))){
var inst_30108 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30203_30269 = state_30129__$1;
(statearr_30203_30269[(2)] = inst_30108);

(statearr_30203_30269[(1)] = (35));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (30))){
var state_30129__$1 = state_30129;
var statearr_30204_30270 = state_30129__$1;
(statearr_30204_30270[(2)] = null);

(statearr_30204_30270[(1)] = (32));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (10))){
var inst_30011 = (state_30129[(13)]);
var inst_30013 = (state_30129[(17)]);
var inst_30019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30011,inst_30013);
var inst_30020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30019,(0),null);
var inst_30021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30019,(1),null);
var state_30129__$1 = (function (){var statearr_30205 = state_30129;
(statearr_30205[(26)] = inst_30020);

return statearr_30205;
})();
if(cljs.core.truth_(inst_30021)){
var statearr_30206_30271 = state_30129__$1;
(statearr_30206_30271[(1)] = (13));

} else {
var statearr_30207_30272 = state_30129__$1;
(statearr_30207_30272[(1)] = (14));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (18))){
var inst_30054 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30208_30273 = state_30129__$1;
(statearr_30208_30273[(2)] = inst_30054);

(statearr_30208_30273[(1)] = (12));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (42))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30129__$1,(45),dchan);
} else {
if((state_val_30130 === (37))){
var inst_30001 = (state_30129[(9)]);
var inst_30097 = (state_30129[(23)]);
var inst_30088 = (state_30129[(25)]);
var inst_30097__$1 = cljs.core.first(inst_30088);
var inst_30098 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30097__$1,inst_30001,done);
var state_30129__$1 = (function (){var statearr_30209 = state_30129;
(statearr_30209[(23)] = inst_30097__$1);

return statearr_30209;
})();
if(cljs.core.truth_(inst_30098)){
var statearr_30210_30274 = state_30129__$1;
(statearr_30210_30274[(1)] = (39));

} else {
var statearr_30211_30275 = state_30129__$1;
(statearr_30211_30275[(1)] = (40));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30130 === (8))){
var inst_30012 = (state_30129[(16)]);
var inst_30013 = (state_30129[(17)]);
var inst_30015 = (inst_30013 < inst_30012);
var inst_30016 = inst_30015;
var state_30129__$1 = state_30129;
if(cljs.core.truth_(inst_30016)){
var statearr_30212_30276 = state_30129__$1;
(statearr_30212_30276[(1)] = (10));

} else {
var statearr_30213_30277 = state_30129__$1;
(statearr_30213_30277[(1)] = (11));

}

return cljs.core.constant$keyword$114;
} else {
return null;
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
}
}
}
});})(c__17262__auto___30223,cs,m,dchan,dctr,done))
;
return ((function (switch__17247__auto__,c__17262__auto___30223,cs,m,dchan,dctr,done){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_30217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30217[(0)] = state_machine__17248__auto__);

(statearr_30217[(1)] = (1));

return statearr_30217;
});
var state_machine__17248__auto____1 = (function (state_30129){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_30129);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e30218){if((e30218 instanceof Object)){
var ex__17251__auto__ = e30218;
var statearr_30219_30278 = state_30129;
(statearr_30219_30278[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30129);

return cljs.core.constant$keyword$114;
} else {
throw e30218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__30279 = state_30129;
state_30129 = G__30279;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___30223,cs,m,dchan,dctr,done))
})();
var state__17264__auto__ = (function (){var statearr_30220 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_30220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___30223);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___30223,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj30284 = {};
return obj30284;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__30288 = x__4280__auto__;
return goog.typeOf(G__30288);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__30292 = x__4280__auto__;
return goog.typeOf(G__30292);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__30296 = x__4280__auto__;
return goog.typeOf(G__30296);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__30300 = x__4280__auto__;
return goog.typeOf(G__30300);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3624__auto__ = m;
if(and__3624__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4280__auto__ = (((m == null))?null:m);
return (function (){var or__3636__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__30304 = x__4280__auto__;
return goog.typeOf(G__30304);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30305){
var map__30311 = p__30305;
var map__30311__$1 = ((cljs.core.seq_QMARK_(map__30311))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30311):map__30311);
var opts = map__30311__$1;
var statearr_30312_30316 = state;
(statearr_30312_30316[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__30311,map__30311__$1,opts){
return (function (val){
var statearr_30313_30317 = state;
(statearr_30313_30317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__30311,map__30311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30314_30318 = state;
(statearr_30314_30318[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__30315 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30315) : cljs.core.deref.call(null,G__30315));
})());


return cljs.core.constant$keyword$114;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30305 = null;
if (arguments.length > 3) {
  p__30305 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30305);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30319){
var state = cljs.core.first(arglist__30319);
arglist__30319 = cljs.core.next(arglist__30319);
var cont_block = cljs.core.first(arglist__30319);
arglist__30319 = cljs.core.next(arglist__30319);
var ports = cljs.core.first(arglist__30319);
var p__30305 = cljs.core.rest(arglist__30319);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30305);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__30453 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30453) : cljs.core.atom.call(null,G__30453));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$123,null,cljs.core.constant$keyword$124,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$125);
var solo_mode = (function (){var G__30454 = cljs.core.constant$keyword$124;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30454) : cljs.core.atom.call(null,G__30454));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__30455 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__30455) : attr.call(null,G__30455));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__30456 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30456) : cljs.core.deref.call(null,G__30456));
})();
var mode = (function (){var G__30457 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30457) : cljs.core.deref.call(null,G__30457));
})();
var solos = pick(cljs.core.constant$keyword$125,chs);
var pauses = pick(cljs.core.constant$keyword$123,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$126,solos,cljs.core.constant$keyword$127,pick(cljs.core.constant$keyword$124,chs),cljs.core.constant$keyword$128,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$123)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30458 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30458 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30459){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30459 = meta30459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30458.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30458.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30461_30586 = self__.cs;
var G__30462_30587 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30461_30586,G__30462_30587) : cljs.core.reset_BANG_.call(null,G__30461_30586,G__30462_30587));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__30463 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__30463) : self__.solo_modes.call(null,G__30463));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__30464_30588 = self__.solo_mode;
var G__30465_30589 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30464_30588,G__30465_30589) : cljs.core.reset_BANG_.call(null,G__30464_30588,G__30465_30589));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30460){
var self__ = this;
var _30460__$1 = this;
return self__.meta30459;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30460,meta30459__$1){
var self__ = this;
var _30460__$1 = this;
return (new cljs.core.async.t30458(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30459__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30458.cljs$lang$type = true;

cljs.core.async.t30458.cljs$lang$ctorStr = "cljs.core.async/t30458";

cljs.core.async.t30458.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t30458");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30458 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30458(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30459){
return (new cljs.core.async.t30458(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30459));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30458(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
})()
;
var c__17262__auto___30590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___30590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___30590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30537){
var state_val_30538 = (state_30537[(1)]);
if((state_val_30538 === (7))){
var inst_30479 = (state_30537[(7)]);
var inst_30484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30479);
var state_30537__$1 = state_30537;
var statearr_30539_30591 = state_30537__$1;
(statearr_30539_30591[(2)] = inst_30484);

(statearr_30539_30591[(1)] = (9));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (20))){
var inst_30494 = (state_30537[(8)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30537__$1,(23),out,inst_30494);
} else {
if((state_val_30538 === (1))){
var inst_30469 = (state_30537[(9)]);
var inst_30469__$1 = calc_state();
var inst_30470 = cljs.core.seq_QMARK_(inst_30469__$1);
var state_30537__$1 = (function (){var statearr_30540 = state_30537;
(statearr_30540[(9)] = inst_30469__$1);

return statearr_30540;
})();
if(inst_30470){
var statearr_30541_30592 = state_30537__$1;
(statearr_30541_30592[(1)] = (2));

} else {
var statearr_30542_30593 = state_30537__$1;
(statearr_30542_30593[(1)] = (3));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (24))){
var inst_30487 = (state_30537[(10)]);
var inst_30479 = inst_30487;
var state_30537__$1 = (function (){var statearr_30543 = state_30537;
(statearr_30543[(7)] = inst_30479);

return statearr_30543;
})();
var statearr_30544_30594 = state_30537__$1;
(statearr_30544_30594[(2)] = null);

(statearr_30544_30594[(1)] = (5));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (4))){
var inst_30469 = (state_30537[(9)]);
var inst_30475 = (state_30537[(2)]);
var inst_30476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30475,cljs.core.constant$keyword$128);
var inst_30477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30475,cljs.core.constant$keyword$127);
var inst_30478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30475,cljs.core.constant$keyword$126);
var inst_30479 = inst_30469;
var state_30537__$1 = (function (){var statearr_30545 = state_30537;
(statearr_30545[(7)] = inst_30479);

(statearr_30545[(11)] = inst_30478);

(statearr_30545[(12)] = inst_30476);

(statearr_30545[(13)] = inst_30477);

return statearr_30545;
})();
var statearr_30546_30595 = state_30537__$1;
(statearr_30546_30595[(2)] = null);

(statearr_30546_30595[(1)] = (5));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (15))){
var state_30537__$1 = state_30537;
var statearr_30547_30596 = state_30537__$1;
(statearr_30547_30596[(2)] = null);

(statearr_30547_30596[(1)] = (16));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (21))){
var inst_30487 = (state_30537[(10)]);
var inst_30479 = inst_30487;
var state_30537__$1 = (function (){var statearr_30548 = state_30537;
(statearr_30548[(7)] = inst_30479);

return statearr_30548;
})();
var statearr_30549_30597 = state_30537__$1;
(statearr_30549_30597[(2)] = null);

(statearr_30549_30597[(1)] = (5));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (13))){
var inst_30533 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30550_30598 = state_30537__$1;
(statearr_30550_30598[(2)] = inst_30533);

(statearr_30550_30598[(1)] = (6));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (22))){
var inst_30531 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30551_30599 = state_30537__$1;
(statearr_30551_30599[(2)] = inst_30531);

(statearr_30551_30599[(1)] = (13));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (6))){
var inst_30535 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30537__$1,inst_30535);
} else {
if((state_val_30538 === (25))){
var state_30537__$1 = state_30537;
var statearr_30552_30600 = state_30537__$1;
(statearr_30552_30600[(2)] = null);

(statearr_30552_30600[(1)] = (26));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (17))){
var inst_30510 = (state_30537[(14)]);
var state_30537__$1 = state_30537;
var statearr_30553_30601 = state_30537__$1;
(statearr_30553_30601[(2)] = inst_30510);

(statearr_30553_30601[(1)] = (19));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (3))){
var inst_30469 = (state_30537[(9)]);
var state_30537__$1 = state_30537;
var statearr_30554_30602 = state_30537__$1;
(statearr_30554_30602[(2)] = inst_30469);

(statearr_30554_30602[(1)] = (4));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (12))){
var inst_30495 = (state_30537[(15)]);
var inst_30490 = (state_30537[(16)]);
var inst_30510 = (state_30537[(14)]);
var inst_30510__$1 = (function (){var G__30555 = inst_30495;
return (inst_30490.cljs$core$IFn$_invoke$arity$1 ? inst_30490.cljs$core$IFn$_invoke$arity$1(G__30555) : inst_30490.call(null,G__30555));
})();
var state_30537__$1 = (function (){var statearr_30556 = state_30537;
(statearr_30556[(14)] = inst_30510__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30510__$1)){
var statearr_30557_30603 = state_30537__$1;
(statearr_30557_30603[(1)] = (17));

} else {
var statearr_30558_30604 = state_30537__$1;
(statearr_30558_30604[(1)] = (18));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (2))){
var inst_30469 = (state_30537[(9)]);
var inst_30472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30469);
var state_30537__$1 = state_30537;
var statearr_30559_30605 = state_30537__$1;
(statearr_30559_30605[(2)] = inst_30472);

(statearr_30559_30605[(1)] = (4));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (23))){
var inst_30522 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30522)){
var statearr_30560_30606 = state_30537__$1;
(statearr_30560_30606[(1)] = (24));

} else {
var statearr_30561_30607 = state_30537__$1;
(statearr_30561_30607[(1)] = (25));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (19))){
var inst_30519 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30519)){
var statearr_30562_30608 = state_30537__$1;
(statearr_30562_30608[(1)] = (20));

} else {
var statearr_30563_30609 = state_30537__$1;
(statearr_30563_30609[(1)] = (21));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (11))){
var inst_30494 = (state_30537[(8)]);
var inst_30500 = (inst_30494 == null);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30500)){
var statearr_30564_30610 = state_30537__$1;
(statearr_30564_30610[(1)] = (14));

} else {
var statearr_30565_30611 = state_30537__$1;
(statearr_30565_30611[(1)] = (15));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (9))){
var inst_30487 = (state_30537[(10)]);
var inst_30487__$1 = (state_30537[(2)]);
var inst_30488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30487__$1,cljs.core.constant$keyword$128);
var inst_30489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30487__$1,cljs.core.constant$keyword$127);
var inst_30490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30487__$1,cljs.core.constant$keyword$126);
var state_30537__$1 = (function (){var statearr_30566 = state_30537;
(statearr_30566[(17)] = inst_30489);

(statearr_30566[(16)] = inst_30490);

(statearr_30566[(10)] = inst_30487__$1);

return statearr_30566;
})();
return cljs.core.async.ioc_alts_BANG_(state_30537__$1,(10),inst_30488);
} else {
if((state_val_30538 === (5))){
var inst_30479 = (state_30537[(7)]);
var inst_30482 = cljs.core.seq_QMARK_(inst_30479);
var state_30537__$1 = state_30537;
if(inst_30482){
var statearr_30567_30612 = state_30537__$1;
(statearr_30567_30612[(1)] = (7));

} else {
var statearr_30568_30613 = state_30537__$1;
(statearr_30568_30613[(1)] = (8));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (14))){
var inst_30495 = (state_30537[(15)]);
var inst_30502 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30495);
var state_30537__$1 = state_30537;
var statearr_30569_30614 = state_30537__$1;
(statearr_30569_30614[(2)] = inst_30502);

(statearr_30569_30614[(1)] = (16));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (26))){
var inst_30527 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30570_30615 = state_30537__$1;
(statearr_30570_30615[(2)] = inst_30527);

(statearr_30570_30615[(1)] = (22));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (16))){
var inst_30505 = (state_30537[(2)]);
var inst_30506 = calc_state();
var inst_30479 = inst_30506;
var state_30537__$1 = (function (){var statearr_30571 = state_30537;
(statearr_30571[(7)] = inst_30479);

(statearr_30571[(18)] = inst_30505);

return statearr_30571;
})();
var statearr_30572_30616 = state_30537__$1;
(statearr_30572_30616[(2)] = null);

(statearr_30572_30616[(1)] = (5));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (10))){
var inst_30494 = (state_30537[(8)]);
var inst_30495 = (state_30537[(15)]);
var inst_30493 = (state_30537[(2)]);
var inst_30494__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30493,(0),null);
var inst_30495__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30493,(1),null);
var inst_30496 = (inst_30494__$1 == null);
var inst_30497 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30495__$1,change);
var inst_30498 = (inst_30496) || (inst_30497);
var state_30537__$1 = (function (){var statearr_30573 = state_30537;
(statearr_30573[(8)] = inst_30494__$1);

(statearr_30573[(15)] = inst_30495__$1);

return statearr_30573;
})();
if(cljs.core.truth_(inst_30498)){
var statearr_30574_30617 = state_30537__$1;
(statearr_30574_30617[(1)] = (11));

} else {
var statearr_30575_30618 = state_30537__$1;
(statearr_30575_30618[(1)] = (12));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (18))){
var inst_30489 = (state_30537[(17)]);
var inst_30495 = (state_30537[(15)]);
var inst_30490 = (state_30537[(16)]);
var inst_30514 = cljs.core.empty_QMARK_(inst_30490);
var inst_30515 = (function (){var G__30576 = inst_30495;
return (inst_30489.cljs$core$IFn$_invoke$arity$1 ? inst_30489.cljs$core$IFn$_invoke$arity$1(G__30576) : inst_30489.call(null,G__30576));
})();
var inst_30516 = cljs.core.not(inst_30515);
var inst_30517 = (inst_30514) && (inst_30516);
var state_30537__$1 = state_30537;
var statearr_30577_30619 = state_30537__$1;
(statearr_30577_30619[(2)] = inst_30517);

(statearr_30577_30619[(1)] = (19));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30538 === (8))){
var inst_30479 = (state_30537[(7)]);
var state_30537__$1 = state_30537;
var statearr_30578_30620 = state_30537__$1;
(statearr_30578_30620[(2)] = inst_30479);

(statearr_30578_30620[(1)] = (9));


return cljs.core.constant$keyword$114;
} else {
return null;
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
}
}
}
}
}
});})(c__17262__auto___30590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17247__auto__,c__17262__auto___30590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_30582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30582[(0)] = state_machine__17248__auto__);

(statearr_30582[(1)] = (1));

return statearr_30582;
});
var state_machine__17248__auto____1 = (function (state_30537){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_30537);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e30583){if((e30583 instanceof Object)){
var ex__17251__auto__ = e30583;
var statearr_30584_30621 = state_30537;
(statearr_30584_30621[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30537);

return cljs.core.constant$keyword$114;
} else {
throw e30583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__30622 = state_30537;
state_30537 = G__30622;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_30537){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_30537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___30590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17264__auto__ = (function (){var statearr_30585 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_30585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___30590);

return statearr_30585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___30590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj30624 = {};
return obj30624;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3624__auto__ = p;
if(and__3624__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3624__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4280__auto__ = (((p == null))?null:p);
return (function (){var or__3636__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__30628 = x__4280__auto__;
return goog.typeOf(G__30628);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3624__auto__ = p;
if(and__3624__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4280__auto__ = (((p == null))?null:p);
return (function (){var or__3636__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__30632 = x__4280__auto__;
return goog.typeOf(G__30632);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3624__auto__ = p;
if(and__3624__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4280__auto__ = (((p == null))?null:p);
return (function (){var or__3636__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30638 = x__4280__auto__;
return goog.typeOf(G__30638);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3624__auto__ = p;
if(and__3624__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4280__auto__ = (((p == null))?null:p);
return (function (){var or__3636__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30640 = x__4280__auto__;
return goog.typeOf(G__30640);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__30779 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30779) : cljs.core.atom.call(null,G__30779));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3636__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30781 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30781) : cljs.core.deref.call(null,G__30781));
})(),topic);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3636__auto__,mults){
return (function (p1__30641_SHARP_){
if(cljs.core.truth_((function (){var G__30782 = topic;
return (p1__30641_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30641_SHARP_.cljs$core$IFn$_invoke$arity$1(G__30782) : p1__30641_SHARP_.call(null,G__30782));
})())){
return p1__30641_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30641_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__30783 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__30783) : buf_fn.call(null,G__30783));
})())));
}
});})(or__3636__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30784 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30784 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30785){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30785 = meta30785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30784.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30784.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__30787 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__30787) : self__.ensure_mult.call(null,G__30787));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30784.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30788 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30788) : cljs.core.deref.call(null,G__30788));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30789 = self__.mults;
var G__30790 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30789,G__30790) : cljs.core.reset_BANG_.call(null,G__30789,G__30790));
});})(mults,ensure_mult))
;

cljs.core.async.t30784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30784.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30786){
var self__ = this;
var _30786__$1 = this;
return self__.meta30785;
});})(mults,ensure_mult))
;

cljs.core.async.t30784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30786,meta30785__$1){
var self__ = this;
var _30786__$1 = this;
return (new cljs.core.async.t30784(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30785__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30784.cljs$lang$type = true;

cljs.core.async.t30784.cljs$lang$ctorStr = "cljs.core.async/t30784";

cljs.core.async.t30784.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t30784");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30784 = ((function (mults,ensure_mult){
return (function __GT_t30784(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30785){
return (new cljs.core.async.t30784(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30785));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30784(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
})()
;
var c__17262__auto___30913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___30913,mults,ensure_mult,p){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___30913,mults,ensure_mult,p){
return (function (state_30862){
var state_val_30863 = (state_30862[(1)]);
if((state_val_30863 === (7))){
var inst_30858 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30864_30914 = state_30862__$1;
(statearr_30864_30914[(2)] = inst_30858);

(statearr_30864_30914[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (20))){
var state_30862__$1 = state_30862;
var statearr_30865_30915 = state_30862__$1;
(statearr_30865_30915[(2)] = null);

(statearr_30865_30915[(1)] = (21));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (1))){
var state_30862__$1 = state_30862;
var statearr_30866_30916 = state_30862__$1;
(statearr_30866_30916[(2)] = null);

(statearr_30866_30916[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (24))){
var inst_30841 = (state_30862[(7)]);
var inst_30850 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30841);
var state_30862__$1 = state_30862;
var statearr_30867_30917 = state_30862__$1;
(statearr_30867_30917[(2)] = inst_30850);

(statearr_30867_30917[(1)] = (25));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (4))){
var inst_30793 = (state_30862[(8)]);
var inst_30793__$1 = (state_30862[(2)]);
var inst_30794 = (inst_30793__$1 == null);
var state_30862__$1 = (function (){var statearr_30868 = state_30862;
(statearr_30868[(8)] = inst_30793__$1);

return statearr_30868;
})();
if(cljs.core.truth_(inst_30794)){
var statearr_30869_30918 = state_30862__$1;
(statearr_30869_30918[(1)] = (5));

} else {
var statearr_30870_30919 = state_30862__$1;
(statearr_30870_30919[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (15))){
var inst_30835 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30871_30920 = state_30862__$1;
(statearr_30871_30920[(2)] = inst_30835);

(statearr_30871_30920[(1)] = (12));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (21))){
var inst_30855 = (state_30862[(2)]);
var state_30862__$1 = (function (){var statearr_30872 = state_30862;
(statearr_30872[(9)] = inst_30855);

return statearr_30872;
})();
var statearr_30873_30921 = state_30862__$1;
(statearr_30873_30921[(2)] = null);

(statearr_30873_30921[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (13))){
var inst_30817 = (state_30862[(10)]);
var inst_30819 = cljs.core.chunked_seq_QMARK_(inst_30817);
var state_30862__$1 = state_30862;
if(inst_30819){
var statearr_30874_30922 = state_30862__$1;
(statearr_30874_30922[(1)] = (16));

} else {
var statearr_30875_30923 = state_30862__$1;
(statearr_30875_30923[(1)] = (17));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (22))){
var inst_30847 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
if(cljs.core.truth_(inst_30847)){
var statearr_30876_30924 = state_30862__$1;
(statearr_30876_30924[(1)] = (23));

} else {
var statearr_30877_30925 = state_30862__$1;
(statearr_30877_30925[(1)] = (24));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (6))){
var inst_30841 = (state_30862[(7)]);
var inst_30843 = (state_30862[(11)]);
var inst_30793 = (state_30862[(8)]);
var inst_30841__$1 = (function (){var G__30878 = inst_30793;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__30878) : topic_fn.call(null,G__30878));
})();
var inst_30842 = (function (){var G__30879 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30879) : cljs.core.deref.call(null,G__30879));
})();
var inst_30843__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30842,inst_30841__$1);
var state_30862__$1 = (function (){var statearr_30880 = state_30862;
(statearr_30880[(7)] = inst_30841__$1);

(statearr_30880[(11)] = inst_30843__$1);

return statearr_30880;
})();
if(cljs.core.truth_(inst_30843__$1)){
var statearr_30881_30926 = state_30862__$1;
(statearr_30881_30926[(1)] = (19));

} else {
var statearr_30882_30927 = state_30862__$1;
(statearr_30882_30927[(1)] = (20));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (25))){
var inst_30852 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30883_30928 = state_30862__$1;
(statearr_30883_30928[(2)] = inst_30852);

(statearr_30883_30928[(1)] = (21));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (17))){
var inst_30817 = (state_30862[(10)]);
var inst_30826 = cljs.core.first(inst_30817);
var inst_30827 = cljs.core.async.muxch_STAR_(inst_30826);
var inst_30828 = cljs.core.async.close_BANG_(inst_30827);
var inst_30829 = cljs.core.next(inst_30817);
var inst_30803 = inst_30829;
var inst_30804 = null;
var inst_30805 = (0);
var inst_30806 = (0);
var state_30862__$1 = (function (){var statearr_30884 = state_30862;
(statearr_30884[(12)] = inst_30803);

(statearr_30884[(13)] = inst_30806);

(statearr_30884[(14)] = inst_30828);

(statearr_30884[(15)] = inst_30804);

(statearr_30884[(16)] = inst_30805);

return statearr_30884;
})();
var statearr_30885_30929 = state_30862__$1;
(statearr_30885_30929[(2)] = null);

(statearr_30885_30929[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (3))){
var inst_30860 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30862__$1,inst_30860);
} else {
if((state_val_30863 === (12))){
var inst_30837 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30886_30930 = state_30862__$1;
(statearr_30886_30930[(2)] = inst_30837);

(statearr_30886_30930[(1)] = (9));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (2))){
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30862__$1,(4),ch);
} else {
if((state_val_30863 === (23))){
var state_30862__$1 = state_30862;
var statearr_30887_30931 = state_30862__$1;
(statearr_30887_30931[(2)] = null);

(statearr_30887_30931[(1)] = (25));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (19))){
var inst_30843 = (state_30862[(11)]);
var inst_30793 = (state_30862[(8)]);
var inst_30845 = cljs.core.async.muxch_STAR_(inst_30843);
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30862__$1,(22),inst_30845,inst_30793);
} else {
if((state_val_30863 === (11))){
var inst_30803 = (state_30862[(12)]);
var inst_30817 = (state_30862[(10)]);
var inst_30817__$1 = cljs.core.seq(inst_30803);
var state_30862__$1 = (function (){var statearr_30888 = state_30862;
(statearr_30888[(10)] = inst_30817__$1);

return statearr_30888;
})();
if(inst_30817__$1){
var statearr_30889_30932 = state_30862__$1;
(statearr_30889_30932[(1)] = (13));

} else {
var statearr_30890_30933 = state_30862__$1;
(statearr_30890_30933[(1)] = (14));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (9))){
var inst_30839 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30891_30934 = state_30862__$1;
(statearr_30891_30934[(2)] = inst_30839);

(statearr_30891_30934[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (5))){
var inst_30800 = (function (){var G__30892 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30892) : cljs.core.deref.call(null,G__30892));
})();
var inst_30801 = cljs.core.vals(inst_30800);
var inst_30802 = cljs.core.seq(inst_30801);
var inst_30803 = inst_30802;
var inst_30804 = null;
var inst_30805 = (0);
var inst_30806 = (0);
var state_30862__$1 = (function (){var statearr_30893 = state_30862;
(statearr_30893[(12)] = inst_30803);

(statearr_30893[(13)] = inst_30806);

(statearr_30893[(15)] = inst_30804);

(statearr_30893[(16)] = inst_30805);

return statearr_30893;
})();
var statearr_30894_30935 = state_30862__$1;
(statearr_30894_30935[(2)] = null);

(statearr_30894_30935[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (14))){
var state_30862__$1 = state_30862;
var statearr_30898_30936 = state_30862__$1;
(statearr_30898_30936[(2)] = null);

(statearr_30898_30936[(1)] = (15));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (16))){
var inst_30817 = (state_30862[(10)]);
var inst_30821 = cljs.core.chunk_first(inst_30817);
var inst_30822 = cljs.core.chunk_rest(inst_30817);
var inst_30823 = cljs.core.count(inst_30821);
var inst_30803 = inst_30822;
var inst_30804 = inst_30821;
var inst_30805 = inst_30823;
var inst_30806 = (0);
var state_30862__$1 = (function (){var statearr_30899 = state_30862;
(statearr_30899[(12)] = inst_30803);

(statearr_30899[(13)] = inst_30806);

(statearr_30899[(15)] = inst_30804);

(statearr_30899[(16)] = inst_30805);

return statearr_30899;
})();
var statearr_30900_30937 = state_30862__$1;
(statearr_30900_30937[(2)] = null);

(statearr_30900_30937[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (10))){
var inst_30803 = (state_30862[(12)]);
var inst_30806 = (state_30862[(13)]);
var inst_30804 = (state_30862[(15)]);
var inst_30805 = (state_30862[(16)]);
var inst_30811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30804,inst_30806);
var inst_30812 = cljs.core.async.muxch_STAR_(inst_30811);
var inst_30813 = cljs.core.async.close_BANG_(inst_30812);
var inst_30814 = (inst_30806 + (1));
var tmp30895 = inst_30803;
var tmp30896 = inst_30804;
var tmp30897 = inst_30805;
var inst_30803__$1 = tmp30895;
var inst_30804__$1 = tmp30896;
var inst_30805__$1 = tmp30897;
var inst_30806__$1 = inst_30814;
var state_30862__$1 = (function (){var statearr_30901 = state_30862;
(statearr_30901[(12)] = inst_30803__$1);

(statearr_30901[(13)] = inst_30806__$1);

(statearr_30901[(17)] = inst_30813);

(statearr_30901[(15)] = inst_30804__$1);

(statearr_30901[(16)] = inst_30805__$1);

return statearr_30901;
})();
var statearr_30902_30938 = state_30862__$1;
(statearr_30902_30938[(2)] = null);

(statearr_30902_30938[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (18))){
var inst_30832 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30903_30939 = state_30862__$1;
(statearr_30903_30939[(2)] = inst_30832);

(statearr_30903_30939[(1)] = (15));


return cljs.core.constant$keyword$114;
} else {
if((state_val_30863 === (8))){
var inst_30806 = (state_30862[(13)]);
var inst_30805 = (state_30862[(16)]);
var inst_30808 = (inst_30806 < inst_30805);
var inst_30809 = inst_30808;
var state_30862__$1 = state_30862;
if(cljs.core.truth_(inst_30809)){
var statearr_30904_30940 = state_30862__$1;
(statearr_30904_30940[(1)] = (10));

} else {
var statearr_30905_30941 = state_30862__$1;
(statearr_30905_30941[(1)] = (11));

}

return cljs.core.constant$keyword$114;
} else {
return null;
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
}
}
}
}
});})(c__17262__auto___30913,mults,ensure_mult,p))
;
return ((function (switch__17247__auto__,c__17262__auto___30913,mults,ensure_mult,p){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_30909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30909[(0)] = state_machine__17248__auto__);

(statearr_30909[(1)] = (1));

return statearr_30909;
});
var state_machine__17248__auto____1 = (function (state_30862){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_30862);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e30910){if((e30910 instanceof Object)){
var ex__17251__auto__ = e30910;
var statearr_30911_30942 = state_30862;
(statearr_30911_30942[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30862);

return cljs.core.constant$keyword$114;
} else {
throw e30910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__30943 = state_30862;
state_30862 = G__30943;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_30862){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_30862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___30913,mults,ensure_mult,p))
})();
var state__17264__auto__ = (function (){var statearr_30912 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_30912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___30913);

return statearr_30912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___30913,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__31024 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31024) : cljs.core.atom.call(null,G__31024));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__17262__auto___31097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___31097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___31097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31063){
var state_val_31064 = (state_31063[(1)]);
if((state_val_31064 === (7))){
var state_31063__$1 = state_31063;
var statearr_31065_31098 = state_31063__$1;
(statearr_31065_31098[(2)] = null);

(statearr_31065_31098[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (1))){
var state_31063__$1 = state_31063;
var statearr_31066_31099 = state_31063__$1;
(statearr_31066_31099[(2)] = null);

(statearr_31066_31099[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (4))){
var inst_31027 = (state_31063[(7)]);
var inst_31029 = (inst_31027 < cnt);
var state_31063__$1 = state_31063;
if(cljs.core.truth_(inst_31029)){
var statearr_31067_31100 = state_31063__$1;
(statearr_31067_31100[(1)] = (6));

} else {
var statearr_31068_31101 = state_31063__$1;
(statearr_31068_31101[(1)] = (7));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (15))){
var inst_31059 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31069_31102 = state_31063__$1;
(statearr_31069_31102[(2)] = inst_31059);

(statearr_31069_31102[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (13))){
var inst_31052 = cljs.core.async.close_BANG_(out);
var state_31063__$1 = state_31063;
var statearr_31070_31103 = state_31063__$1;
(statearr_31070_31103[(2)] = inst_31052);

(statearr_31070_31103[(1)] = (15));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (6))){
var state_31063__$1 = state_31063;
var statearr_31071_31104 = state_31063__$1;
(statearr_31071_31104[(2)] = null);

(statearr_31071_31104[(1)] = (11));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (3))){
var inst_31061 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31063__$1,inst_31061);
} else {
if((state_val_31064 === (12))){
var inst_31049 = (state_31063[(8)]);
var inst_31049__$1 = (state_31063[(2)]);
var inst_31050 = cljs.core.some(cljs.core.nil_QMARK_,inst_31049__$1);
var state_31063__$1 = (function (){var statearr_31072 = state_31063;
(statearr_31072[(8)] = inst_31049__$1);

return statearr_31072;
})();
if(cljs.core.truth_(inst_31050)){
var statearr_31073_31105 = state_31063__$1;
(statearr_31073_31105[(1)] = (13));

} else {
var statearr_31074_31106 = state_31063__$1;
(statearr_31074_31106[(1)] = (14));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (2))){
var inst_31026 = (function (){var G__31075 = dctr;
var G__31076 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31075,G__31076) : cljs.core.reset_BANG_.call(null,G__31075,G__31076));
})();
var inst_31027 = (0);
var state_31063__$1 = (function (){var statearr_31077 = state_31063;
(statearr_31077[(9)] = inst_31026);

(statearr_31077[(7)] = inst_31027);

return statearr_31077;
})();
var statearr_31078_31107 = state_31063__$1;
(statearr_31078_31107[(2)] = null);

(statearr_31078_31107[(1)] = (4));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (11))){
var inst_31027 = (state_31063[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31063,(10),Object,null,(9));
var inst_31036 = (function (){var G__31079 = inst_31027;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__31079) : chs__$1.call(null,G__31079));
})();
var inst_31037 = (function (){var G__31080 = inst_31027;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__31080) : done.call(null,G__31080));
})();
var inst_31038 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31036,inst_31037);
var state_31063__$1 = state_31063;
var statearr_31081_31108 = state_31063__$1;
(statearr_31081_31108[(2)] = inst_31038);


cljs.core.async.impl.ioc_helpers.process_exception(state_31063__$1);

return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (9))){
var inst_31027 = (state_31063[(7)]);
var inst_31040 = (state_31063[(2)]);
var inst_31041 = (inst_31027 + (1));
var inst_31027__$1 = inst_31041;
var state_31063__$1 = (function (){var statearr_31082 = state_31063;
(statearr_31082[(10)] = inst_31040);

(statearr_31082[(7)] = inst_31027__$1);

return statearr_31082;
})();
var statearr_31083_31109 = state_31063__$1;
(statearr_31083_31109[(2)] = null);

(statearr_31083_31109[(1)] = (4));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (5))){
var inst_31047 = (state_31063[(2)]);
var state_31063__$1 = (function (){var statearr_31084 = state_31063;
(statearr_31084[(11)] = inst_31047);

return statearr_31084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31063__$1,(12),dchan);
} else {
if((state_val_31064 === (14))){
var inst_31049 = (state_31063[(8)]);
var inst_31054 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31049);
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31063__$1,(16),out,inst_31054);
} else {
if((state_val_31064 === (16))){
var inst_31056 = (state_31063[(2)]);
var state_31063__$1 = (function (){var statearr_31085 = state_31063;
(statearr_31085[(12)] = inst_31056);

return statearr_31085;
})();
var statearr_31086_31110 = state_31063__$1;
(statearr_31086_31110[(2)] = null);

(statearr_31086_31110[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (10))){
var inst_31031 = (state_31063[(2)]);
var inst_31032 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31063__$1 = (function (){var statearr_31087 = state_31063;
(statearr_31087[(13)] = inst_31031);

return statearr_31087;
})();
var statearr_31088_31111 = state_31063__$1;
(statearr_31088_31111[(2)] = inst_31032);


cljs.core.async.impl.ioc_helpers.process_exception(state_31063__$1);

return cljs.core.constant$keyword$114;
} else {
if((state_val_31064 === (8))){
var inst_31045 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31089_31112 = state_31063__$1;
(statearr_31089_31112[(2)] = inst_31045);

(statearr_31089_31112[(1)] = (5));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto___31097,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17247__auto__,c__17262__auto___31097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_31093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31093[(0)] = state_machine__17248__auto__);

(statearr_31093[(1)] = (1));

return statearr_31093;
});
var state_machine__17248__auto____1 = (function (state_31063){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_31063);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e31094){if((e31094 instanceof Object)){
var ex__17251__auto__ = e31094;
var statearr_31095_31113 = state_31063;
(statearr_31095_31113[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31063);

return cljs.core.constant$keyword$114;
} else {
throw e31094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__31114 = state_31063;
state_31063 = G__31114;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_31063){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_31063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___31097,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17264__auto__ = (function (){var statearr_31096 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_31096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___31097);

return statearr_31096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___31097,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___31224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___31224,out){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___31224,out){
return (function (state_31200){
var state_val_31201 = (state_31200[(1)]);
if((state_val_31201 === (7))){
var inst_31179 = (state_31200[(7)]);
var inst_31180 = (state_31200[(8)]);
var inst_31179__$1 = (state_31200[(2)]);
var inst_31180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31179__$1,(0),null);
var inst_31181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31179__$1,(1),null);
var inst_31182 = (inst_31180__$1 == null);
var state_31200__$1 = (function (){var statearr_31202 = state_31200;
(statearr_31202[(9)] = inst_31181);

(statearr_31202[(7)] = inst_31179__$1);

(statearr_31202[(8)] = inst_31180__$1);

return statearr_31202;
})();
if(cljs.core.truth_(inst_31182)){
var statearr_31203_31225 = state_31200__$1;
(statearr_31203_31225[(1)] = (8));

} else {
var statearr_31204_31226 = state_31200__$1;
(statearr_31204_31226[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31201 === (1))){
var inst_31171 = cljs.core.vec(chs);
var inst_31172 = inst_31171;
var state_31200__$1 = (function (){var statearr_31205 = state_31200;
(statearr_31205[(10)] = inst_31172);

return statearr_31205;
})();
var statearr_31206_31227 = state_31200__$1;
(statearr_31206_31227[(2)] = null);

(statearr_31206_31227[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31201 === (4))){
var inst_31172 = (state_31200[(10)]);
var state_31200__$1 = state_31200;
return cljs.core.async.ioc_alts_BANG_(state_31200__$1,(7),inst_31172);
} else {
if((state_val_31201 === (6))){
var inst_31196 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
var statearr_31207_31228 = state_31200__$1;
(statearr_31207_31228[(2)] = inst_31196);

(statearr_31207_31228[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31201 === (3))){
var inst_31198 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31200__$1,inst_31198);
} else {
if((state_val_31201 === (2))){
var inst_31172 = (state_31200[(10)]);
var inst_31174 = cljs.core.count(inst_31172);
var inst_31175 = (inst_31174 > (0));
var state_31200__$1 = state_31200;
if(cljs.core.truth_(inst_31175)){
var statearr_31209_31229 = state_31200__$1;
(statearr_31209_31229[(1)] = (4));

} else {
var statearr_31210_31230 = state_31200__$1;
(statearr_31210_31230[(1)] = (5));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31201 === (11))){
var inst_31172 = (state_31200[(10)]);
var inst_31189 = (state_31200[(2)]);
var tmp31208 = inst_31172;
var inst_31172__$1 = tmp31208;
var state_31200__$1 = (function (){var statearr_31211 = state_31200;
(statearr_31211[(10)] = inst_31172__$1);

(statearr_31211[(11)] = inst_31189);

return statearr_31211;
})();
var statearr_31212_31231 = state_31200__$1;
(statearr_31212_31231[(2)] = null);

(statearr_31212_31231[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31201 === (9))){
var inst_31180 = (state_31200[(8)]);
var state_31200__$1 = state_31200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31200__$1,(11),out,inst_31180);
} else {
if((state_val_31201 === (5))){
var inst_31194 = cljs.core.async.close_BANG_(out);
var state_31200__$1 = state_31200;
var statearr_31213_31232 = state_31200__$1;
(statearr_31213_31232[(2)] = inst_31194);

(statearr_31213_31232[(1)] = (6));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31201 === (10))){
var inst_31192 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
var statearr_31214_31233 = state_31200__$1;
(statearr_31214_31233[(2)] = inst_31192);

(statearr_31214_31233[(1)] = (6));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31201 === (8))){
var inst_31181 = (state_31200[(9)]);
var inst_31172 = (state_31200[(10)]);
var inst_31179 = (state_31200[(7)]);
var inst_31180 = (state_31200[(8)]);
var inst_31184 = (function (){var c = inst_31181;
var v = inst_31180;
var vec__31177 = inst_31179;
var cs = inst_31172;
return ((function (c,v,vec__31177,cs,inst_31181,inst_31172,inst_31179,inst_31180,state_val_31201,c__17262__auto___31224,out){
return (function (p1__31115_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31115_SHARP_);
});
;})(c,v,vec__31177,cs,inst_31181,inst_31172,inst_31179,inst_31180,state_val_31201,c__17262__auto___31224,out))
})();
var inst_31185 = cljs.core.filterv(inst_31184,inst_31172);
var inst_31172__$1 = inst_31185;
var state_31200__$1 = (function (){var statearr_31215 = state_31200;
(statearr_31215[(10)] = inst_31172__$1);

return statearr_31215;
})();
var statearr_31216_31234 = state_31200__$1;
(statearr_31216_31234[(2)] = null);

(statearr_31216_31234[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto___31224,out))
;
return ((function (switch__17247__auto__,c__17262__auto___31224,out){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_31220 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31220[(0)] = state_machine__17248__auto__);

(statearr_31220[(1)] = (1));

return statearr_31220;
});
var state_machine__17248__auto____1 = (function (state_31200){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_31200);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e31221){if((e31221 instanceof Object)){
var ex__17251__auto__ = e31221;
var statearr_31222_31235 = state_31200;
(statearr_31222_31235[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31200);

return cljs.core.constant$keyword$114;
} else {
throw e31221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__31236 = state_31200;
state_31200 = G__31236;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_31200){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_31200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___31224,out))
})();
var state__17264__auto__ = (function (){var statearr_31223 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_31223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___31224);

return statearr_31223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___31224,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___31332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___31332,out){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___31332,out){
return (function (state_31309){
var state_val_31310 = (state_31309[(1)]);
if((state_val_31310 === (7))){
var inst_31291 = (state_31309[(7)]);
var inst_31291__$1 = (state_31309[(2)]);
var inst_31292 = (inst_31291__$1 == null);
var inst_31293 = cljs.core.not(inst_31292);
var state_31309__$1 = (function (){var statearr_31311 = state_31309;
(statearr_31311[(7)] = inst_31291__$1);

return statearr_31311;
})();
if(inst_31293){
var statearr_31312_31333 = state_31309__$1;
(statearr_31312_31333[(1)] = (8));

} else {
var statearr_31313_31334 = state_31309__$1;
(statearr_31313_31334[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (1))){
var inst_31286 = (0);
var state_31309__$1 = (function (){var statearr_31314 = state_31309;
(statearr_31314[(8)] = inst_31286);

return statearr_31314;
})();
var statearr_31315_31335 = state_31309__$1;
(statearr_31315_31335[(2)] = null);

(statearr_31315_31335[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (4))){
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31309__$1,(7),ch);
} else {
if((state_val_31310 === (6))){
var inst_31304 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31316_31336 = state_31309__$1;
(statearr_31316_31336[(2)] = inst_31304);

(statearr_31316_31336[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (3))){
var inst_31306 = (state_31309[(2)]);
var inst_31307 = cljs.core.async.close_BANG_(out);
var state_31309__$1 = (function (){var statearr_31317 = state_31309;
(statearr_31317[(9)] = inst_31306);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31309__$1,inst_31307);
} else {
if((state_val_31310 === (2))){
var inst_31286 = (state_31309[(8)]);
var inst_31288 = (inst_31286 < n);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31288)){
var statearr_31318_31337 = state_31309__$1;
(statearr_31318_31337[(1)] = (4));

} else {
var statearr_31319_31338 = state_31309__$1;
(statearr_31319_31338[(1)] = (5));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (11))){
var inst_31286 = (state_31309[(8)]);
var inst_31296 = (state_31309[(2)]);
var inst_31297 = (inst_31286 + (1));
var inst_31286__$1 = inst_31297;
var state_31309__$1 = (function (){var statearr_31320 = state_31309;
(statearr_31320[(10)] = inst_31296);

(statearr_31320[(8)] = inst_31286__$1);

return statearr_31320;
})();
var statearr_31321_31339 = state_31309__$1;
(statearr_31321_31339[(2)] = null);

(statearr_31321_31339[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (9))){
var state_31309__$1 = state_31309;
var statearr_31322_31340 = state_31309__$1;
(statearr_31322_31340[(2)] = null);

(statearr_31322_31340[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (5))){
var state_31309__$1 = state_31309;
var statearr_31323_31341 = state_31309__$1;
(statearr_31323_31341[(2)] = null);

(statearr_31323_31341[(1)] = (6));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (10))){
var inst_31301 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31324_31342 = state_31309__$1;
(statearr_31324_31342[(2)] = inst_31301);

(statearr_31324_31342[(1)] = (6));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31310 === (8))){
var inst_31291 = (state_31309[(7)]);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31309__$1,(11),out,inst_31291);
} else {
return null;
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
});})(c__17262__auto___31332,out))
;
return ((function (switch__17247__auto__,c__17262__auto___31332,out){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_31328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31328[(0)] = state_machine__17248__auto__);

(statearr_31328[(1)] = (1));

return statearr_31328;
});
var state_machine__17248__auto____1 = (function (state_31309){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_31309);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e31329){if((e31329 instanceof Object)){
var ex__17251__auto__ = e31329;
var statearr_31330_31343 = state_31309;
(statearr_31330_31343[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31309);

return cljs.core.constant$keyword$114;
} else {
throw e31329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__31344 = state_31309;
state_31309 = G__31344;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_31309){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_31309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___31332,out))
})();
var state__17264__auto__ = (function (){var statearr_31331 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_31331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___31332);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___31332,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t31357 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31357 = (function (ch,f,map_LT_,meta31358){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31358 = meta31358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31357.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t31357.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t31360 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31360 = (function (fn1,_,meta31358,map_LT_,f,ch,meta31361){
this.fn1 = fn1;
this._ = _;
this.meta31358 = meta31358;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31361 = meta31361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31360.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t31360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31345_SHARP_){
var G__31363 = (((p1__31345_SHARP_ == null))?null:(function (){var G__31364 = p1__31345_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31364) : self__.f.call(null,G__31364));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31363) : f1.call(null,G__31363));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31362){
var self__ = this;
var _31362__$1 = this;
return self__.meta31361;
});})(___$1))
;

cljs.core.async.t31360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31362,meta31361__$1){
var self__ = this;
var _31362__$1 = this;
return (new cljs.core.async.t31360(self__.fn1,self__._,self__.meta31358,self__.map_LT_,self__.f,self__.ch,meta31361__$1));
});})(___$1))
;

cljs.core.async.t31360.cljs$lang$type = true;

cljs.core.async.t31360.cljs$lang$ctorStr = "cljs.core.async/t31360";

cljs.core.async.t31360.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t31360");
});})(___$1))
;

cljs.core.async.__GT_t31360 = ((function (___$1){
return (function __GT_t31360(fn1__$1,___$2,meta31358__$1,map_LT___$1,f__$1,ch__$1,meta31361){
return (new cljs.core.async.t31360(fn1__$1,___$2,meta31358__$1,map_LT___$1,f__$1,ch__$1,meta31361));
});})(___$1))
;

}

return (new cljs.core.async.t31360(fn1,___$1,self__.meta31358,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3624__auto__ = ret;
if(cljs.core.truth_(and__3624__auto__)){
return !(((function (){var G__31365 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31365) : cljs.core.deref.call(null,G__31365));
})() == null));
} else {
return and__3624__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31366 = (function (){var G__31367 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31367) : cljs.core.deref.call(null,G__31367));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31366) : self__.f.call(null,G__31366));
})());
} else {
return ret;
}
});

cljs.core.async.t31357.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31359){
var self__ = this;
var _31359__$1 = this;
return self__.meta31358;
});

cljs.core.async.t31357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31359,meta31358__$1){
var self__ = this;
var _31359__$1 = this;
return (new cljs.core.async.t31357(self__.ch,self__.f,self__.map_LT_,meta31358__$1));
});

cljs.core.async.t31357.cljs$lang$type = true;

cljs.core.async.t31357.cljs$lang$ctorStr = "cljs.core.async/t31357";

cljs.core.async.t31357.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t31357");
});

cljs.core.async.__GT_t31357 = (function __GT_t31357(ch__$1,f__$1,map_LT___$1,meta31358){
return (new cljs.core.async.t31357(ch__$1,f__$1,map_LT___$1,meta31358));
});

}

return (new cljs.core.async.t31357(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31372 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31372 = (function (ch,f,map_GT_,meta31373){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31373 = meta31373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31372.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__31375 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31375) : self__.f.call(null,G__31375));
})(),fn1);
});

cljs.core.async.t31372.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t31372.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31374){
var self__ = this;
var _31374__$1 = this;
return self__.meta31373;
});

cljs.core.async.t31372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31374,meta31373__$1){
var self__ = this;
var _31374__$1 = this;
return (new cljs.core.async.t31372(self__.ch,self__.f,self__.map_GT_,meta31373__$1));
});

cljs.core.async.t31372.cljs$lang$type = true;

cljs.core.async.t31372.cljs$lang$ctorStr = "cljs.core.async/t31372";

cljs.core.async.t31372.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t31372");
});

cljs.core.async.__GT_t31372 = (function __GT_t31372(ch__$1,f__$1,map_GT___$1,meta31373){
return (new cljs.core.async.t31372(ch__$1,f__$1,map_GT___$1,meta31373));
});

}

return (new cljs.core.async.t31372(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31380 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31380 = (function (ch,p,filter_GT_,meta31381){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31381 = meta31381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__31383 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__31383) : self__.p.call(null,G__31383));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t31380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t31380.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31382){
var self__ = this;
var _31382__$1 = this;
return self__.meta31381;
});

cljs.core.async.t31380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31382,meta31381__$1){
var self__ = this;
var _31382__$1 = this;
return (new cljs.core.async.t31380(self__.ch,self__.p,self__.filter_GT_,meta31381__$1));
});

cljs.core.async.t31380.cljs$lang$type = true;

cljs.core.async.t31380.cljs$lang$ctorStr = "cljs.core.async/t31380";

cljs.core.async.t31380.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async/t31380");
});

cljs.core.async.__GT_t31380 = (function __GT_t31380(ch__$1,p__$1,filter_GT___$1,meta31381){
return (new cljs.core.async.t31380(ch__$1,p__$1,filter_GT___$1,meta31381));
});

}

return (new cljs.core.async.t31380(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___31471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___31471,out){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___31471,out){
return (function (state_31449){
var state_val_31450 = (state_31449[(1)]);
if((state_val_31450 === (7))){
var inst_31445 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31451_31472 = state_31449__$1;
(statearr_31451_31472[(2)] = inst_31445);

(statearr_31451_31472[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (1))){
var state_31449__$1 = state_31449;
var statearr_31452_31473 = state_31449__$1;
(statearr_31452_31473[(2)] = null);

(statearr_31452_31473[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (4))){
var inst_31431 = (state_31449[(7)]);
var inst_31431__$1 = (state_31449[(2)]);
var inst_31432 = (inst_31431__$1 == null);
var state_31449__$1 = (function (){var statearr_31453 = state_31449;
(statearr_31453[(7)] = inst_31431__$1);

return statearr_31453;
})();
if(cljs.core.truth_(inst_31432)){
var statearr_31454_31474 = state_31449__$1;
(statearr_31454_31474[(1)] = (5));

} else {
var statearr_31455_31475 = state_31449__$1;
(statearr_31455_31475[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (6))){
var inst_31431 = (state_31449[(7)]);
var inst_31436 = (function (){var G__31456 = inst_31431;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31456) : p.call(null,G__31456));
})();
var state_31449__$1 = state_31449;
if(cljs.core.truth_(inst_31436)){
var statearr_31457_31476 = state_31449__$1;
(statearr_31457_31476[(1)] = (8));

} else {
var statearr_31458_31477 = state_31449__$1;
(statearr_31458_31477[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (3))){
var inst_31447 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31449__$1,inst_31447);
} else {
if((state_val_31450 === (2))){
var state_31449__$1 = state_31449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31449__$1,(4),ch);
} else {
if((state_val_31450 === (11))){
var inst_31439 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31459_31478 = state_31449__$1;
(statearr_31459_31478[(2)] = inst_31439);

(statearr_31459_31478[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (9))){
var state_31449__$1 = state_31449;
var statearr_31460_31479 = state_31449__$1;
(statearr_31460_31479[(2)] = null);

(statearr_31460_31479[(1)] = (10));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (5))){
var inst_31434 = cljs.core.async.close_BANG_(out);
var state_31449__$1 = state_31449;
var statearr_31461_31480 = state_31449__$1;
(statearr_31461_31480[(2)] = inst_31434);

(statearr_31461_31480[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (10))){
var inst_31442 = (state_31449[(2)]);
var state_31449__$1 = (function (){var statearr_31462 = state_31449;
(statearr_31462[(8)] = inst_31442);

return statearr_31462;
})();
var statearr_31463_31481 = state_31449__$1;
(statearr_31463_31481[(2)] = null);

(statearr_31463_31481[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31450 === (8))){
var inst_31431 = (state_31449[(7)]);
var state_31449__$1 = state_31449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31449__$1,(11),out,inst_31431);
} else {
return null;
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
});})(c__17262__auto___31471,out))
;
return ((function (switch__17247__auto__,c__17262__auto___31471,out){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_31467 = [null,null,null,null,null,null,null,null,null];
(statearr_31467[(0)] = state_machine__17248__auto__);

(statearr_31467[(1)] = (1));

return statearr_31467;
});
var state_machine__17248__auto____1 = (function (state_31449){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_31449);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e31468){if((e31468 instanceof Object)){
var ex__17251__auto__ = e31468;
var statearr_31469_31482 = state_31449;
(statearr_31469_31482[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31449);

return cljs.core.constant$keyword$114;
} else {
throw e31468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__31483 = state_31449;
state_31449 = G__31483;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_31449){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_31449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___31471,out))
})();
var state__17264__auto__ = (function (){var statearr_31470 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_31470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___31471);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___31471,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto__){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto__){
return (function (state_31653){
var state_val_31654 = (state_31653[(1)]);
if((state_val_31654 === (7))){
var inst_31649 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31655_31697 = state_31653__$1;
(statearr_31655_31697[(2)] = inst_31649);

(statearr_31655_31697[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (20))){
var inst_31619 = (state_31653[(7)]);
var inst_31630 = (state_31653[(2)]);
var inst_31631 = cljs.core.next(inst_31619);
var inst_31605 = inst_31631;
var inst_31606 = null;
var inst_31607 = (0);
var inst_31608 = (0);
var state_31653__$1 = (function (){var statearr_31656 = state_31653;
(statearr_31656[(8)] = inst_31606);

(statearr_31656[(9)] = inst_31605);

(statearr_31656[(10)] = inst_31607);

(statearr_31656[(11)] = inst_31630);

(statearr_31656[(12)] = inst_31608);

return statearr_31656;
})();
var statearr_31657_31698 = state_31653__$1;
(statearr_31657_31698[(2)] = null);

(statearr_31657_31698[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (1))){
var state_31653__$1 = state_31653;
var statearr_31658_31699 = state_31653__$1;
(statearr_31658_31699[(2)] = null);

(statearr_31658_31699[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (4))){
var inst_31594 = (state_31653[(13)]);
var inst_31594__$1 = (state_31653[(2)]);
var inst_31595 = (inst_31594__$1 == null);
var state_31653__$1 = (function (){var statearr_31659 = state_31653;
(statearr_31659[(13)] = inst_31594__$1);

return statearr_31659;
})();
if(cljs.core.truth_(inst_31595)){
var statearr_31660_31700 = state_31653__$1;
(statearr_31660_31700[(1)] = (5));

} else {
var statearr_31661_31701 = state_31653__$1;
(statearr_31661_31701[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (15))){
var state_31653__$1 = state_31653;
var statearr_31665_31702 = state_31653__$1;
(statearr_31665_31702[(2)] = null);

(statearr_31665_31702[(1)] = (16));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (21))){
var state_31653__$1 = state_31653;
var statearr_31666_31703 = state_31653__$1;
(statearr_31666_31703[(2)] = null);

(statearr_31666_31703[(1)] = (23));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (13))){
var inst_31606 = (state_31653[(8)]);
var inst_31605 = (state_31653[(9)]);
var inst_31607 = (state_31653[(10)]);
var inst_31608 = (state_31653[(12)]);
var inst_31615 = (state_31653[(2)]);
var inst_31616 = (inst_31608 + (1));
var tmp31662 = inst_31606;
var tmp31663 = inst_31605;
var tmp31664 = inst_31607;
var inst_31605__$1 = tmp31663;
var inst_31606__$1 = tmp31662;
var inst_31607__$1 = tmp31664;
var inst_31608__$1 = inst_31616;
var state_31653__$1 = (function (){var statearr_31667 = state_31653;
(statearr_31667[(8)] = inst_31606__$1);

(statearr_31667[(9)] = inst_31605__$1);

(statearr_31667[(10)] = inst_31607__$1);

(statearr_31667[(14)] = inst_31615);

(statearr_31667[(12)] = inst_31608__$1);

return statearr_31667;
})();
var statearr_31668_31704 = state_31653__$1;
(statearr_31668_31704[(2)] = null);

(statearr_31668_31704[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (22))){
var state_31653__$1 = state_31653;
var statearr_31669_31705 = state_31653__$1;
(statearr_31669_31705[(2)] = null);

(statearr_31669_31705[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (6))){
var inst_31594 = (state_31653[(13)]);
var inst_31603 = (function (){var G__31670 = inst_31594;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31670) : f.call(null,G__31670));
})();
var inst_31604 = cljs.core.seq(inst_31603);
var inst_31605 = inst_31604;
var inst_31606 = null;
var inst_31607 = (0);
var inst_31608 = (0);
var state_31653__$1 = (function (){var statearr_31671 = state_31653;
(statearr_31671[(8)] = inst_31606);

(statearr_31671[(9)] = inst_31605);

(statearr_31671[(10)] = inst_31607);

(statearr_31671[(12)] = inst_31608);

return statearr_31671;
})();
var statearr_31672_31706 = state_31653__$1;
(statearr_31672_31706[(2)] = null);

(statearr_31672_31706[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (17))){
var inst_31619 = (state_31653[(7)]);
var inst_31623 = cljs.core.chunk_first(inst_31619);
var inst_31624 = cljs.core.chunk_rest(inst_31619);
var inst_31625 = cljs.core.count(inst_31623);
var inst_31605 = inst_31624;
var inst_31606 = inst_31623;
var inst_31607 = inst_31625;
var inst_31608 = (0);
var state_31653__$1 = (function (){var statearr_31673 = state_31653;
(statearr_31673[(8)] = inst_31606);

(statearr_31673[(9)] = inst_31605);

(statearr_31673[(10)] = inst_31607);

(statearr_31673[(12)] = inst_31608);

return statearr_31673;
})();
var statearr_31674_31707 = state_31653__$1;
(statearr_31674_31707[(2)] = null);

(statearr_31674_31707[(1)] = (8));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (3))){
var inst_31651 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31653__$1,inst_31651);
} else {
if((state_val_31654 === (12))){
var inst_31639 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31675_31708 = state_31653__$1;
(statearr_31675_31708[(2)] = inst_31639);

(statearr_31675_31708[(1)] = (9));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (2))){
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31653__$1,(4),in$);
} else {
if((state_val_31654 === (23))){
var inst_31647 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31676_31709 = state_31653__$1;
(statearr_31676_31709[(2)] = inst_31647);

(statearr_31676_31709[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (19))){
var inst_31634 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31677_31710 = state_31653__$1;
(statearr_31677_31710[(2)] = inst_31634);

(statearr_31677_31710[(1)] = (16));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (11))){
var inst_31619 = (state_31653[(7)]);
var inst_31605 = (state_31653[(9)]);
var inst_31619__$1 = cljs.core.seq(inst_31605);
var state_31653__$1 = (function (){var statearr_31678 = state_31653;
(statearr_31678[(7)] = inst_31619__$1);

return statearr_31678;
})();
if(inst_31619__$1){
var statearr_31679_31711 = state_31653__$1;
(statearr_31679_31711[(1)] = (14));

} else {
var statearr_31680_31712 = state_31653__$1;
(statearr_31680_31712[(1)] = (15));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (9))){
var inst_31641 = (state_31653[(2)]);
var inst_31642 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31653__$1 = (function (){var statearr_31681 = state_31653;
(statearr_31681[(15)] = inst_31641);

return statearr_31681;
})();
if(cljs.core.truth_(inst_31642)){
var statearr_31682_31713 = state_31653__$1;
(statearr_31682_31713[(1)] = (21));

} else {
var statearr_31683_31714 = state_31653__$1;
(statearr_31683_31714[(1)] = (22));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (5))){
var inst_31597 = cljs.core.async.close_BANG_(out);
var state_31653__$1 = state_31653;
var statearr_31684_31715 = state_31653__$1;
(statearr_31684_31715[(2)] = inst_31597);

(statearr_31684_31715[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (14))){
var inst_31619 = (state_31653[(7)]);
var inst_31621 = cljs.core.chunked_seq_QMARK_(inst_31619);
var state_31653__$1 = state_31653;
if(inst_31621){
var statearr_31685_31716 = state_31653__$1;
(statearr_31685_31716[(1)] = (17));

} else {
var statearr_31686_31717 = state_31653__$1;
(statearr_31686_31717[(1)] = (18));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (16))){
var inst_31637 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31687_31718 = state_31653__$1;
(statearr_31687_31718[(2)] = inst_31637);

(statearr_31687_31718[(1)] = (12));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31654 === (10))){
var inst_31606 = (state_31653[(8)]);
var inst_31608 = (state_31653[(12)]);
var inst_31613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31606,inst_31608);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31653__$1,(13),out,inst_31613);
} else {
if((state_val_31654 === (18))){
var inst_31619 = (state_31653[(7)]);
var inst_31628 = cljs.core.first(inst_31619);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31653__$1,(20),out,inst_31628);
} else {
if((state_val_31654 === (8))){
var inst_31607 = (state_31653[(10)]);
var inst_31608 = (state_31653[(12)]);
var inst_31610 = (inst_31608 < inst_31607);
var inst_31611 = inst_31610;
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31611)){
var statearr_31688_31719 = state_31653__$1;
(statearr_31688_31719[(1)] = (10));

} else {
var statearr_31689_31720 = state_31653__$1;
(statearr_31689_31720[(1)] = (11));

}

return cljs.core.constant$keyword$114;
} else {
return null;
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
}
}
});})(c__17262__auto__))
;
return ((function (switch__17247__auto__,c__17262__auto__){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_31693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31693[(0)] = state_machine__17248__auto__);

(statearr_31693[(1)] = (1));

return statearr_31693;
});
var state_machine__17248__auto____1 = (function (state_31653){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_31653);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e31694){if((e31694 instanceof Object)){
var ex__17251__auto__ = e31694;
var statearr_31695_31721 = state_31653;
(statearr_31695_31721[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31653);

return cljs.core.constant$keyword$114;
} else {
throw e31694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__31722 = state_31653;
state_31653 = G__31722;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_31653){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_31653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto__))
})();
var state__17264__auto__ = (function (){var statearr_31696 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_31696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto__);

return statearr_31696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto__))
);

return c__17262__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___31827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___31827,out){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___31827,out){
return (function (state_31802){
var state_val_31803 = (state_31802[(1)]);
if((state_val_31803 === (7))){
var inst_31797 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31804_31828 = state_31802__$1;
(statearr_31804_31828[(2)] = inst_31797);

(statearr_31804_31828[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31803 === (1))){
var inst_31779 = null;
var state_31802__$1 = (function (){var statearr_31805 = state_31802;
(statearr_31805[(7)] = inst_31779);

return statearr_31805;
})();
var statearr_31806_31829 = state_31802__$1;
(statearr_31806_31829[(2)] = null);

(statearr_31806_31829[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31803 === (4))){
var inst_31782 = (state_31802[(8)]);
var inst_31782__$1 = (state_31802[(2)]);
var inst_31783 = (inst_31782__$1 == null);
var inst_31784 = cljs.core.not(inst_31783);
var state_31802__$1 = (function (){var statearr_31807 = state_31802;
(statearr_31807[(8)] = inst_31782__$1);

return statearr_31807;
})();
if(inst_31784){
var statearr_31808_31830 = state_31802__$1;
(statearr_31808_31830[(1)] = (5));

} else {
var statearr_31809_31831 = state_31802__$1;
(statearr_31809_31831[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31803 === (6))){
var state_31802__$1 = state_31802;
var statearr_31810_31832 = state_31802__$1;
(statearr_31810_31832[(2)] = null);

(statearr_31810_31832[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31803 === (3))){
var inst_31799 = (state_31802[(2)]);
var inst_31800 = cljs.core.async.close_BANG_(out);
var state_31802__$1 = (function (){var statearr_31811 = state_31802;
(statearr_31811[(9)] = inst_31799);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31802__$1,inst_31800);
} else {
if((state_val_31803 === (2))){
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31802__$1,(4),ch);
} else {
if((state_val_31803 === (11))){
var inst_31782 = (state_31802[(8)]);
var inst_31791 = (state_31802[(2)]);
var inst_31779 = inst_31782;
var state_31802__$1 = (function (){var statearr_31812 = state_31802;
(statearr_31812[(7)] = inst_31779);

(statearr_31812[(10)] = inst_31791);

return statearr_31812;
})();
var statearr_31813_31833 = state_31802__$1;
(statearr_31813_31833[(2)] = null);

(statearr_31813_31833[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31803 === (9))){
var inst_31782 = (state_31802[(8)]);
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31802__$1,(11),out,inst_31782);
} else {
if((state_val_31803 === (5))){
var inst_31779 = (state_31802[(7)]);
var inst_31782 = (state_31802[(8)]);
var inst_31786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31782,inst_31779);
var state_31802__$1 = state_31802;
if(inst_31786){
var statearr_31815_31834 = state_31802__$1;
(statearr_31815_31834[(1)] = (8));

} else {
var statearr_31816_31835 = state_31802__$1;
(statearr_31816_31835[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31803 === (10))){
var inst_31794 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31817_31836 = state_31802__$1;
(statearr_31817_31836[(2)] = inst_31794);

(statearr_31817_31836[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31803 === (8))){
var inst_31779 = (state_31802[(7)]);
var tmp31814 = inst_31779;
var inst_31779__$1 = tmp31814;
var state_31802__$1 = (function (){var statearr_31818 = state_31802;
(statearr_31818[(7)] = inst_31779__$1);

return statearr_31818;
})();
var statearr_31819_31837 = state_31802__$1;
(statearr_31819_31837[(2)] = null);

(statearr_31819_31837[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto___31827,out))
;
return ((function (switch__17247__auto__,c__17262__auto___31827,out){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_31823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31823[(0)] = state_machine__17248__auto__);

(statearr_31823[(1)] = (1));

return statearr_31823;
});
var state_machine__17248__auto____1 = (function (state_31802){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_31802);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e31824){if((e31824 instanceof Object)){
var ex__17251__auto__ = e31824;
var statearr_31825_31838 = state_31802;
(statearr_31825_31838[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31802);

return cljs.core.constant$keyword$114;
} else {
throw e31824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__31839 = state_31802;
state_31802 = G__31839;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_31802){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_31802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___31827,out))
})();
var state__17264__auto__ = (function (){var statearr_31826 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_31826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___31827);

return statearr_31826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___31827,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___31977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___31977,out){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___31977,out){
return (function (state_31947){
var state_val_31948 = (state_31947[(1)]);
if((state_val_31948 === (7))){
var inst_31943 = (state_31947[(2)]);
var state_31947__$1 = state_31947;
var statearr_31949_31978 = state_31947__$1;
(statearr_31949_31978[(2)] = inst_31943);

(statearr_31949_31978[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (1))){
var inst_31910 = (new Array(n));
var inst_31911 = inst_31910;
var inst_31912 = (0);
var state_31947__$1 = (function (){var statearr_31950 = state_31947;
(statearr_31950[(7)] = inst_31912);

(statearr_31950[(8)] = inst_31911);

return statearr_31950;
})();
var statearr_31951_31979 = state_31947__$1;
(statearr_31951_31979[(2)] = null);

(statearr_31951_31979[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (4))){
var inst_31915 = (state_31947[(9)]);
var inst_31915__$1 = (state_31947[(2)]);
var inst_31916 = (inst_31915__$1 == null);
var inst_31917 = cljs.core.not(inst_31916);
var state_31947__$1 = (function (){var statearr_31952 = state_31947;
(statearr_31952[(9)] = inst_31915__$1);

return statearr_31952;
})();
if(inst_31917){
var statearr_31953_31980 = state_31947__$1;
(statearr_31953_31980[(1)] = (5));

} else {
var statearr_31954_31981 = state_31947__$1;
(statearr_31954_31981[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (15))){
var inst_31937 = (state_31947[(2)]);
var state_31947__$1 = state_31947;
var statearr_31955_31982 = state_31947__$1;
(statearr_31955_31982[(2)] = inst_31937);

(statearr_31955_31982[(1)] = (14));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (13))){
var state_31947__$1 = state_31947;
var statearr_31956_31983 = state_31947__$1;
(statearr_31956_31983[(2)] = null);

(statearr_31956_31983[(1)] = (14));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (6))){
var inst_31912 = (state_31947[(7)]);
var inst_31933 = (inst_31912 > (0));
var state_31947__$1 = state_31947;
if(cljs.core.truth_(inst_31933)){
var statearr_31957_31984 = state_31947__$1;
(statearr_31957_31984[(1)] = (12));

} else {
var statearr_31958_31985 = state_31947__$1;
(statearr_31958_31985[(1)] = (13));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (3))){
var inst_31945 = (state_31947[(2)]);
var state_31947__$1 = state_31947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31947__$1,inst_31945);
} else {
if((state_val_31948 === (12))){
var inst_31911 = (state_31947[(8)]);
var inst_31935 = cljs.core.vec(inst_31911);
var state_31947__$1 = state_31947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31947__$1,(15),out,inst_31935);
} else {
if((state_val_31948 === (2))){
var state_31947__$1 = state_31947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31947__$1,(4),ch);
} else {
if((state_val_31948 === (11))){
var inst_31927 = (state_31947[(2)]);
var inst_31928 = (new Array(n));
var inst_31911 = inst_31928;
var inst_31912 = (0);
var state_31947__$1 = (function (){var statearr_31959 = state_31947;
(statearr_31959[(10)] = inst_31927);

(statearr_31959[(7)] = inst_31912);

(statearr_31959[(8)] = inst_31911);

return statearr_31959;
})();
var statearr_31960_31986 = state_31947__$1;
(statearr_31960_31986[(2)] = null);

(statearr_31960_31986[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (9))){
var inst_31911 = (state_31947[(8)]);
var inst_31925 = cljs.core.vec(inst_31911);
var state_31947__$1 = state_31947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31947__$1,(11),out,inst_31925);
} else {
if((state_val_31948 === (5))){
var inst_31912 = (state_31947[(7)]);
var inst_31920 = (state_31947[(11)]);
var inst_31911 = (state_31947[(8)]);
var inst_31915 = (state_31947[(9)]);
var inst_31919 = (inst_31911[inst_31912] = inst_31915);
var inst_31920__$1 = (inst_31912 + (1));
var inst_31921 = (inst_31920__$1 < n);
var state_31947__$1 = (function (){var statearr_31961 = state_31947;
(statearr_31961[(11)] = inst_31920__$1);

(statearr_31961[(12)] = inst_31919);

return statearr_31961;
})();
if(cljs.core.truth_(inst_31921)){
var statearr_31962_31987 = state_31947__$1;
(statearr_31962_31987[(1)] = (8));

} else {
var statearr_31963_31988 = state_31947__$1;
(statearr_31963_31988[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (14))){
var inst_31940 = (state_31947[(2)]);
var inst_31941 = cljs.core.async.close_BANG_(out);
var state_31947__$1 = (function (){var statearr_31965 = state_31947;
(statearr_31965[(13)] = inst_31940);

return statearr_31965;
})();
var statearr_31966_31989 = state_31947__$1;
(statearr_31966_31989[(2)] = inst_31941);

(statearr_31966_31989[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (10))){
var inst_31931 = (state_31947[(2)]);
var state_31947__$1 = state_31947;
var statearr_31967_31990 = state_31947__$1;
(statearr_31967_31990[(2)] = inst_31931);

(statearr_31967_31990[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_31948 === (8))){
var inst_31920 = (state_31947[(11)]);
var inst_31911 = (state_31947[(8)]);
var tmp31964 = inst_31911;
var inst_31911__$1 = tmp31964;
var inst_31912 = inst_31920;
var state_31947__$1 = (function (){var statearr_31968 = state_31947;
(statearr_31968[(7)] = inst_31912);

(statearr_31968[(8)] = inst_31911__$1);

return statearr_31968;
})();
var statearr_31969_31991 = state_31947__$1;
(statearr_31969_31991[(2)] = null);

(statearr_31969_31991[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto___31977,out))
;
return ((function (switch__17247__auto__,c__17262__auto___31977,out){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_31973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31973[(0)] = state_machine__17248__auto__);

(statearr_31973[(1)] = (1));

return statearr_31973;
});
var state_machine__17248__auto____1 = (function (state_31947){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_31947);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e31974){if((e31974 instanceof Object)){
var ex__17251__auto__ = e31974;
var statearr_31975_31992 = state_31947;
(statearr_31975_31992[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31947);

return cljs.core.constant$keyword$114;
} else {
throw e31974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__31993 = state_31947;
state_31947 = G__31993;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_31947){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_31947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___31977,out))
})();
var state__17264__auto__ = (function (){var statearr_31976 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_31976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___31977);

return statearr_31976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___31977,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___32141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto___32141,out){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto___32141,out){
return (function (state_32110){
var state_val_32111 = (state_32110[(1)]);
if((state_val_32111 === (7))){
var inst_32106 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32112_32142 = state_32110__$1;
(statearr_32112_32142[(2)] = inst_32106);

(statearr_32112_32142[(1)] = (3));


return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (1))){
var inst_32069 = [];
var inst_32070 = inst_32069;
var inst_32071 = cljs.core.constant$keyword$129;
var state_32110__$1 = (function (){var statearr_32113 = state_32110;
(statearr_32113[(7)] = inst_32070);

(statearr_32113[(8)] = inst_32071);

return statearr_32113;
})();
var statearr_32114_32143 = state_32110__$1;
(statearr_32114_32143[(2)] = null);

(statearr_32114_32143[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (4))){
var inst_32074 = (state_32110[(9)]);
var inst_32074__$1 = (state_32110[(2)]);
var inst_32075 = (inst_32074__$1 == null);
var inst_32076 = cljs.core.not(inst_32075);
var state_32110__$1 = (function (){var statearr_32115 = state_32110;
(statearr_32115[(9)] = inst_32074__$1);

return statearr_32115;
})();
if(inst_32076){
var statearr_32116_32144 = state_32110__$1;
(statearr_32116_32144[(1)] = (5));

} else {
var statearr_32117_32145 = state_32110__$1;
(statearr_32117_32145[(1)] = (6));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (15))){
var inst_32100 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32118_32146 = state_32110__$1;
(statearr_32118_32146[(2)] = inst_32100);

(statearr_32118_32146[(1)] = (14));


return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (13))){
var state_32110__$1 = state_32110;
var statearr_32119_32147 = state_32110__$1;
(statearr_32119_32147[(2)] = null);

(statearr_32119_32147[(1)] = (14));


return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (6))){
var inst_32070 = (state_32110[(7)]);
var inst_32095 = inst_32070.length;
var inst_32096 = (inst_32095 > (0));
var state_32110__$1 = state_32110;
if(cljs.core.truth_(inst_32096)){
var statearr_32120_32148 = state_32110__$1;
(statearr_32120_32148[(1)] = (12));

} else {
var statearr_32121_32149 = state_32110__$1;
(statearr_32121_32149[(1)] = (13));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (3))){
var inst_32108 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32110__$1,inst_32108);
} else {
if((state_val_32111 === (12))){
var inst_32070 = (state_32110[(7)]);
var inst_32098 = cljs.core.vec(inst_32070);
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32110__$1,(15),out,inst_32098);
} else {
if((state_val_32111 === (2))){
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32110__$1,(4),ch);
} else {
if((state_val_32111 === (11))){
var inst_32074 = (state_32110[(9)]);
var inst_32078 = (state_32110[(10)]);
var inst_32088 = (state_32110[(2)]);
var inst_32089 = [];
var inst_32090 = inst_32089.push(inst_32074);
var inst_32070 = inst_32089;
var inst_32071 = inst_32078;
var state_32110__$1 = (function (){var statearr_32122 = state_32110;
(statearr_32122[(7)] = inst_32070);

(statearr_32122[(8)] = inst_32071);

(statearr_32122[(11)] = inst_32088);

(statearr_32122[(12)] = inst_32090);

return statearr_32122;
})();
var statearr_32123_32150 = state_32110__$1;
(statearr_32123_32150[(2)] = null);

(statearr_32123_32150[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (9))){
var inst_32070 = (state_32110[(7)]);
var inst_32086 = cljs.core.vec(inst_32070);
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32110__$1,(11),out,inst_32086);
} else {
if((state_val_32111 === (5))){
var inst_32074 = (state_32110[(9)]);
var inst_32078 = (state_32110[(10)]);
var inst_32071 = (state_32110[(8)]);
var inst_32078__$1 = (function (){var G__32124 = inst_32074;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32124) : f.call(null,G__32124));
})();
var inst_32079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32078__$1,inst_32071);
var inst_32080 = cljs.core.keyword_identical_QMARK_(inst_32071,cljs.core.constant$keyword$129);
var inst_32081 = (inst_32079) || (inst_32080);
var state_32110__$1 = (function (){var statearr_32125 = state_32110;
(statearr_32125[(10)] = inst_32078__$1);

return statearr_32125;
})();
if(cljs.core.truth_(inst_32081)){
var statearr_32126_32151 = state_32110__$1;
(statearr_32126_32151[(1)] = (8));

} else {
var statearr_32127_32152 = state_32110__$1;
(statearr_32127_32152[(1)] = (9));

}

return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (14))){
var inst_32103 = (state_32110[(2)]);
var inst_32104 = cljs.core.async.close_BANG_(out);
var state_32110__$1 = (function (){var statearr_32129 = state_32110;
(statearr_32129[(13)] = inst_32103);

return statearr_32129;
})();
var statearr_32130_32153 = state_32110__$1;
(statearr_32130_32153[(2)] = inst_32104);

(statearr_32130_32153[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (10))){
var inst_32093 = (state_32110[(2)]);
var state_32110__$1 = state_32110;
var statearr_32131_32154 = state_32110__$1;
(statearr_32131_32154[(2)] = inst_32093);

(statearr_32131_32154[(1)] = (7));


return cljs.core.constant$keyword$114;
} else {
if((state_val_32111 === (8))){
var inst_32070 = (state_32110[(7)]);
var inst_32074 = (state_32110[(9)]);
var inst_32078 = (state_32110[(10)]);
var inst_32083 = inst_32070.push(inst_32074);
var tmp32128 = inst_32070;
var inst_32070__$1 = tmp32128;
var inst_32071 = inst_32078;
var state_32110__$1 = (function (){var statearr_32132 = state_32110;
(statearr_32132[(7)] = inst_32070__$1);

(statearr_32132[(8)] = inst_32071);

(statearr_32132[(14)] = inst_32083);

return statearr_32132;
})();
var statearr_32133_32155 = state_32110__$1;
(statearr_32133_32155[(2)] = null);

(statearr_32133_32155[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
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
});})(c__17262__auto___32141,out))
;
return ((function (switch__17247__auto__,c__17262__auto___32141,out){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_32137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32137[(0)] = state_machine__17248__auto__);

(statearr_32137[(1)] = (1));

return statearr_32137;
});
var state_machine__17248__auto____1 = (function (state_32110){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_32110);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e32138){if((e32138 instanceof Object)){
var ex__17251__auto__ = e32138;
var statearr_32139_32156 = state_32110;
(statearr_32139_32156[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32110);

return cljs.core.constant$keyword$114;
} else {
throw e32138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__32157 = state_32110;
state_32110 = G__32157;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_32110){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_32110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto___32141,out))
})();
var state__17264__auto__ = (function (){var statearr_32140 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_32140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto___32141);

return statearr_32140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto___32141,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
