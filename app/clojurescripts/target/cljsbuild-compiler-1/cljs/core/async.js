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
if(typeof cljs.core.async.t22321 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22321 = (function (f,fn_handler,meta22322){
this.f = f;
this.fn_handler = fn_handler;
this.meta22322 = meta22322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22323){
var self__ = this;
var _22323__$1 = this;
return self__.meta22322;
});

cljs.core.async.t22321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22323,meta22322__$1){
var self__ = this;
var _22323__$1 = this;
return (new cljs.core.async.t22321(self__.f,self__.fn_handler,meta22322__$1));
});

cljs.core.async.t22321.cljs$lang$type = true;

cljs.core.async.t22321.cljs$lang$ctorStr = "cljs.core.async/t22321";

cljs.core.async.t22321.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t22321");
});

cljs.core.async.__GT_t22321 = (function __GT_t22321(f__$1,fn_handler__$1,meta22322){
return (new cljs.core.async.t22321(f__$1,fn_handler__$1,meta22322));
});

}

return (new cljs.core.async.t22321(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__22325 = buff;
if(G__22325){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__22325.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22325.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22325);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22325);
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
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22326 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22326);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22326,ret){
return (function (){
return fn1.call(null,val_22326);
});})(val_22326,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4525__auto___22327 = n;
var x_22328 = (0);
while(true){
if((x_22328 < n__4525__auto___22327)){
(a[x_22328] = (0));

var G__22329 = (x_22328 + (1));
x_22328 = G__22329;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22330 = (i + (1));
i = G__22330;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t22334 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22334 = (function (flag,alt_flag,meta22335){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22335 = meta22335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22334.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t22334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t22334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22336){
var self__ = this;
var _22336__$1 = this;
return self__.meta22335;
});})(flag))
;

cljs.core.async.t22334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22336,meta22335__$1){
var self__ = this;
var _22336__$1 = this;
return (new cljs.core.async.t22334(self__.flag,self__.alt_flag,meta22335__$1));
});})(flag))
;

cljs.core.async.t22334.cljs$lang$type = true;

cljs.core.async.t22334.cljs$lang$ctorStr = "cljs.core.async/t22334";

cljs.core.async.t22334.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t22334");
});})(flag))
;

cljs.core.async.__GT_t22334 = ((function (flag){
return (function __GT_t22334(flag__$1,alt_flag__$1,meta22335){
return (new cljs.core.async.t22334(flag__$1,alt_flag__$1,meta22335));
});})(flag))
;

}

return (new cljs.core.async.t22334(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22340 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22340 = (function (cb,flag,alt_handler,meta22341){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22341 = meta22341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t22340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t22340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22342){
var self__ = this;
var _22342__$1 = this;
return self__.meta22341;
});

cljs.core.async.t22340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22342,meta22341__$1){
var self__ = this;
var _22342__$1 = this;
return (new cljs.core.async.t22340(self__.cb,self__.flag,self__.alt_handler,meta22341__$1));
});

cljs.core.async.t22340.cljs$lang$type = true;

cljs.core.async.t22340.cljs$lang$ctorStr = "cljs.core.async/t22340";

cljs.core.async.t22340.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t22340");
});

cljs.core.async.__GT_t22340 = (function __GT_t22340(cb__$1,flag__$1,alt_handler__$1,meta22341){
return (new cljs.core.async.t22340(cb__$1,flag__$1,alt_handler__$1,meta22341));
});

}

return (new cljs.core.async.t22340(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22343_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22343_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22344_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22344_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3638__auto__ = wport;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22345 = (i + (1));
i = G__22345;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3638__auto__ = ret;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3626__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3626__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3626__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__22346){
var map__22348 = p__22346;
var map__22348__$1 = ((cljs.core.seq_QMARK_.call(null,map__22348))?cljs.core.apply.call(null,cljs.core.hash_map,map__22348):map__22348);
var opts = map__22348__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22346 = null;
if (arguments.length > 1) {
  p__22346 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22346);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22349){
var ports = cljs.core.first(arglist__22349);
var p__22346 = cljs.core.rest(arglist__22349);
return alts_BANG___delegate(ports,p__22346);
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
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__11113__auto___22444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___22444){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___22444){
return (function (state_22420){
var state_val_22421 = (state_22420[(1)]);
if((state_val_22421 === (7))){
var inst_22416 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
var statearr_22422_22445 = state_22420__$1;
(statearr_22422_22445[(2)] = inst_22416);

(statearr_22422_22445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (1))){
var state_22420__$1 = state_22420;
var statearr_22423_22446 = state_22420__$1;
(statearr_22423_22446[(2)] = null);

(statearr_22423_22446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (4))){
var inst_22399 = (state_22420[(7)]);
var inst_22399__$1 = (state_22420[(2)]);
var inst_22400 = (inst_22399__$1 == null);
var state_22420__$1 = (function (){var statearr_22424 = state_22420;
(statearr_22424[(7)] = inst_22399__$1);

return statearr_22424;
})();
if(cljs.core.truth_(inst_22400)){
var statearr_22425_22447 = state_22420__$1;
(statearr_22425_22447[(1)] = (5));

} else {
var statearr_22426_22448 = state_22420__$1;
(statearr_22426_22448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (13))){
var state_22420__$1 = state_22420;
var statearr_22427_22449 = state_22420__$1;
(statearr_22427_22449[(2)] = null);

(statearr_22427_22449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (6))){
var inst_22399 = (state_22420[(7)]);
var state_22420__$1 = state_22420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22420__$1,(11),to,inst_22399);
} else {
if((state_val_22421 === (3))){
var inst_22418 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22420__$1,inst_22418);
} else {
if((state_val_22421 === (12))){
var state_22420__$1 = state_22420;
var statearr_22428_22450 = state_22420__$1;
(statearr_22428_22450[(2)] = null);

(statearr_22428_22450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (2))){
var state_22420__$1 = state_22420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22420__$1,(4),from);
} else {
if((state_val_22421 === (11))){
var inst_22409 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
if(cljs.core.truth_(inst_22409)){
var statearr_22429_22451 = state_22420__$1;
(statearr_22429_22451[(1)] = (12));

} else {
var statearr_22430_22452 = state_22420__$1;
(statearr_22430_22452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (9))){
var state_22420__$1 = state_22420;
var statearr_22431_22453 = state_22420__$1;
(statearr_22431_22453[(2)] = null);

(statearr_22431_22453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (5))){
var state_22420__$1 = state_22420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22432_22454 = state_22420__$1;
(statearr_22432_22454[(1)] = (8));

} else {
var statearr_22433_22455 = state_22420__$1;
(statearr_22433_22455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (14))){
var inst_22414 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
var statearr_22434_22456 = state_22420__$1;
(statearr_22434_22456[(2)] = inst_22414);

(statearr_22434_22456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (10))){
var inst_22406 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
var statearr_22435_22457 = state_22420__$1;
(statearr_22435_22457[(2)] = inst_22406);

(statearr_22435_22457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (8))){
var inst_22403 = cljs.core.async.close_BANG_.call(null,to);
var state_22420__$1 = state_22420;
var statearr_22436_22458 = state_22420__$1;
(statearr_22436_22458[(2)] = inst_22403);

(statearr_22436_22458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___22444))
;
return ((function (switch__11098__auto__,c__11113__auto___22444){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_22440 = [null,null,null,null,null,null,null,null];
(statearr_22440[(0)] = state_machine__11099__auto__);

(statearr_22440[(1)] = (1));

return statearr_22440;
});
var state_machine__11099__auto____1 = (function (state_22420){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e22441){if((e22441 instanceof Object)){
var ex__11102__auto__ = e22441;
var statearr_22442_22459 = state_22420;
(statearr_22442_22459[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22460 = state_22420;
state_22420 = G__22460;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22420){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___22444))
})();
var state__11115__auto__ = (function (){var statearr_22443 = f__11114__auto__.call(null);
(statearr_22443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___22444);

return statearr_22443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___22444))
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22644){
var vec__22645 = p__22644;
var v = cljs.core.nth.call(null,vec__22645,(0),null);
var p = cljs.core.nth.call(null,vec__22645,(1),null);
var job = vec__22645;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11113__auto___22827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___22827,res,vec__22645,v,p,job,jobs,results){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___22827,res,vec__22645,v,p,job,jobs,results){
return (function (state_22650){
var state_val_22651 = (state_22650[(1)]);
if((state_val_22651 === (2))){
var inst_22647 = (state_22650[(2)]);
var inst_22648 = cljs.core.async.close_BANG_.call(null,res);
var state_22650__$1 = (function (){var statearr_22652 = state_22650;
(statearr_22652[(7)] = inst_22647);

return statearr_22652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22650__$1,inst_22648);
} else {
if((state_val_22651 === (1))){
var state_22650__$1 = state_22650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22650__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11113__auto___22827,res,vec__22645,v,p,job,jobs,results))
;
return ((function (switch__11098__auto__,c__11113__auto___22827,res,vec__22645,v,p,job,jobs,results){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_22656 = [null,null,null,null,null,null,null,null];
(statearr_22656[(0)] = state_machine__11099__auto__);

(statearr_22656[(1)] = (1));

return statearr_22656;
});
var state_machine__11099__auto____1 = (function (state_22650){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e22657){if((e22657 instanceof Object)){
var ex__11102__auto__ = e22657;
var statearr_22658_22828 = state_22650;
(statearr_22658_22828[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22829 = state_22650;
state_22650 = G__22829;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22650){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___22827,res,vec__22645,v,p,job,jobs,results))
})();
var state__11115__auto__ = (function (){var statearr_22659 = f__11114__auto__.call(null);
(statearr_22659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___22827);

return statearr_22659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___22827,res,vec__22645,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22660){
var vec__22661 = p__22660;
var v = cljs.core.nth.call(null,vec__22661,(0),null);
var p = cljs.core.nth.call(null,vec__22661,(1),null);
var job = vec__22661;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4525__auto___22830 = n;
var __22831 = (0);
while(true){
if((__22831 < n__4525__auto___22830)){
var G__22662_22832 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22662_22832) {
case "async":
var c__11113__auto___22834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22831,c__11113__auto___22834,G__22662_22832,n__4525__auto___22830,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (__22831,c__11113__auto___22834,G__22662_22832,n__4525__auto___22830,jobs,results,process,async){
return (function (state_22675){
var state_val_22676 = (state_22675[(1)]);
if((state_val_22676 === (7))){
var inst_22671 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
var statearr_22677_22835 = state_22675__$1;
(statearr_22677_22835[(2)] = inst_22671);

(statearr_22677_22835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (6))){
var state_22675__$1 = state_22675;
var statearr_22678_22836 = state_22675__$1;
(statearr_22678_22836[(2)] = null);

(statearr_22678_22836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (5))){
var state_22675__$1 = state_22675;
var statearr_22679_22837 = state_22675__$1;
(statearr_22679_22837[(2)] = null);

(statearr_22679_22837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (4))){
var inst_22665 = (state_22675[(2)]);
var inst_22666 = async.call(null,inst_22665);
var state_22675__$1 = state_22675;
if(cljs.core.truth_(inst_22666)){
var statearr_22680_22838 = state_22675__$1;
(statearr_22680_22838[(1)] = (5));

} else {
var statearr_22681_22839 = state_22675__$1;
(statearr_22681_22839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22676 === (3))){
var inst_22673 = (state_22675[(2)]);
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22675__$1,inst_22673);
} else {
if((state_val_22676 === (2))){
var state_22675__$1 = state_22675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22675__$1,(4),jobs);
} else {
if((state_val_22676 === (1))){
var state_22675__$1 = state_22675;
var statearr_22682_22840 = state_22675__$1;
(statearr_22682_22840[(2)] = null);

(statearr_22682_22840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22831,c__11113__auto___22834,G__22662_22832,n__4525__auto___22830,jobs,results,process,async))
;
return ((function (__22831,switch__11098__auto__,c__11113__auto___22834,G__22662_22832,n__4525__auto___22830,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_22686 = [null,null,null,null,null,null,null];
(statearr_22686[(0)] = state_machine__11099__auto__);

(statearr_22686[(1)] = (1));

return statearr_22686;
});
var state_machine__11099__auto____1 = (function (state_22675){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e22687){if((e22687 instanceof Object)){
var ex__11102__auto__ = e22687;
var statearr_22688_22841 = state_22675;
(statearr_22688_22841[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22842 = state_22675;
state_22675 = G__22842;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22675){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__22831,switch__11098__auto__,c__11113__auto___22834,G__22662_22832,n__4525__auto___22830,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_22689 = f__11114__auto__.call(null);
(statearr_22689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___22834);

return statearr_22689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(__22831,c__11113__auto___22834,G__22662_22832,n__4525__auto___22830,jobs,results,process,async))
);


break;
case "compute":
var c__11113__auto___22843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22831,c__11113__auto___22843,G__22662_22832,n__4525__auto___22830,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (__22831,c__11113__auto___22843,G__22662_22832,n__4525__auto___22830,jobs,results,process,async){
return (function (state_22702){
var state_val_22703 = (state_22702[(1)]);
if((state_val_22703 === (7))){
var inst_22698 = (state_22702[(2)]);
var state_22702__$1 = state_22702;
var statearr_22704_22844 = state_22702__$1;
(statearr_22704_22844[(2)] = inst_22698);

(statearr_22704_22844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (6))){
var state_22702__$1 = state_22702;
var statearr_22705_22845 = state_22702__$1;
(statearr_22705_22845[(2)] = null);

(statearr_22705_22845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (5))){
var state_22702__$1 = state_22702;
var statearr_22706_22846 = state_22702__$1;
(statearr_22706_22846[(2)] = null);

(statearr_22706_22846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (4))){
var inst_22692 = (state_22702[(2)]);
var inst_22693 = process.call(null,inst_22692);
var state_22702__$1 = state_22702;
if(cljs.core.truth_(inst_22693)){
var statearr_22707_22847 = state_22702__$1;
(statearr_22707_22847[(1)] = (5));

} else {
var statearr_22708_22848 = state_22702__$1;
(statearr_22708_22848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22703 === (3))){
var inst_22700 = (state_22702[(2)]);
var state_22702__$1 = state_22702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22702__$1,inst_22700);
} else {
if((state_val_22703 === (2))){
var state_22702__$1 = state_22702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22702__$1,(4),jobs);
} else {
if((state_val_22703 === (1))){
var state_22702__$1 = state_22702;
var statearr_22709_22849 = state_22702__$1;
(statearr_22709_22849[(2)] = null);

(statearr_22709_22849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22831,c__11113__auto___22843,G__22662_22832,n__4525__auto___22830,jobs,results,process,async))
;
return ((function (__22831,switch__11098__auto__,c__11113__auto___22843,G__22662_22832,n__4525__auto___22830,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_22713 = [null,null,null,null,null,null,null];
(statearr_22713[(0)] = state_machine__11099__auto__);

(statearr_22713[(1)] = (1));

return statearr_22713;
});
var state_machine__11099__auto____1 = (function (state_22702){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e22714){if((e22714 instanceof Object)){
var ex__11102__auto__ = e22714;
var statearr_22715_22850 = state_22702;
(statearr_22715_22850[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22851 = state_22702;
state_22702 = G__22851;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22702){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__22831,switch__11098__auto__,c__11113__auto___22843,G__22662_22832,n__4525__auto___22830,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_22716 = f__11114__auto__.call(null);
(statearr_22716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___22843);

return statearr_22716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(__22831,c__11113__auto___22843,G__22662_22832,n__4525__auto___22830,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22852 = (__22831 + (1));
__22831 = G__22852;
continue;
} else {
}
break;
}

var c__11113__auto___22853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___22853,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___22853,jobs,results,process,async){
return (function (state_22738){
var state_val_22739 = (state_22738[(1)]);
if((state_val_22739 === (9))){
var inst_22731 = (state_22738[(2)]);
var state_22738__$1 = (function (){var statearr_22740 = state_22738;
(statearr_22740[(7)] = inst_22731);

return statearr_22740;
})();
var statearr_22741_22854 = state_22738__$1;
(statearr_22741_22854[(2)] = null);

(statearr_22741_22854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22739 === (8))){
var inst_22724 = (state_22738[(8)]);
var inst_22729 = (state_22738[(2)]);
var state_22738__$1 = (function (){var statearr_22742 = state_22738;
(statearr_22742[(9)] = inst_22729);

return statearr_22742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22738__$1,(9),results,inst_22724);
} else {
if((state_val_22739 === (7))){
var inst_22734 = (state_22738[(2)]);
var state_22738__$1 = state_22738;
var statearr_22743_22855 = state_22738__$1;
(statearr_22743_22855[(2)] = inst_22734);

(statearr_22743_22855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22739 === (6))){
var inst_22724 = (state_22738[(8)]);
var inst_22719 = (state_22738[(10)]);
var inst_22724__$1 = cljs.core.async.chan.call(null,(1));
var inst_22725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22726 = [inst_22719,inst_22724__$1];
var inst_22727 = (new cljs.core.PersistentVector(null,2,(5),inst_22725,inst_22726,null));
var state_22738__$1 = (function (){var statearr_22744 = state_22738;
(statearr_22744[(8)] = inst_22724__$1);

return statearr_22744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22738__$1,(8),jobs,inst_22727);
} else {
if((state_val_22739 === (5))){
var inst_22722 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22738__$1 = state_22738;
var statearr_22745_22856 = state_22738__$1;
(statearr_22745_22856[(2)] = inst_22722);

(statearr_22745_22856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22739 === (4))){
var inst_22719 = (state_22738[(10)]);
var inst_22719__$1 = (state_22738[(2)]);
var inst_22720 = (inst_22719__$1 == null);
var state_22738__$1 = (function (){var statearr_22746 = state_22738;
(statearr_22746[(10)] = inst_22719__$1);

return statearr_22746;
})();
if(cljs.core.truth_(inst_22720)){
var statearr_22747_22857 = state_22738__$1;
(statearr_22747_22857[(1)] = (5));

} else {
var statearr_22748_22858 = state_22738__$1;
(statearr_22748_22858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22739 === (3))){
var inst_22736 = (state_22738[(2)]);
var state_22738__$1 = state_22738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22738__$1,inst_22736);
} else {
if((state_val_22739 === (2))){
var state_22738__$1 = state_22738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22738__$1,(4),from);
} else {
if((state_val_22739 === (1))){
var state_22738__$1 = state_22738;
var statearr_22749_22859 = state_22738__$1;
(statearr_22749_22859[(2)] = null);

(statearr_22749_22859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___22853,jobs,results,process,async))
;
return ((function (switch__11098__auto__,c__11113__auto___22853,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_22753 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22753[(0)] = state_machine__11099__auto__);

(statearr_22753[(1)] = (1));

return statearr_22753;
});
var state_machine__11099__auto____1 = (function (state_22738){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e22754){if((e22754 instanceof Object)){
var ex__11102__auto__ = e22754;
var statearr_22755_22860 = state_22738;
(statearr_22755_22860[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22861 = state_22738;
state_22738 = G__22861;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22738){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___22853,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_22756 = f__11114__auto__.call(null);
(statearr_22756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___22853);

return statearr_22756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___22853,jobs,results,process,async))
);


var c__11113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto__,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto__,jobs,results,process,async){
return (function (state_22794){
var state_val_22795 = (state_22794[(1)]);
if((state_val_22795 === (7))){
var inst_22790 = (state_22794[(2)]);
var state_22794__$1 = state_22794;
var statearr_22796_22862 = state_22794__$1;
(statearr_22796_22862[(2)] = inst_22790);

(statearr_22796_22862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (20))){
var state_22794__$1 = state_22794;
var statearr_22797_22863 = state_22794__$1;
(statearr_22797_22863[(2)] = null);

(statearr_22797_22863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (1))){
var state_22794__$1 = state_22794;
var statearr_22798_22864 = state_22794__$1;
(statearr_22798_22864[(2)] = null);

(statearr_22798_22864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (4))){
var inst_22759 = (state_22794[(7)]);
var inst_22759__$1 = (state_22794[(2)]);
var inst_22760 = (inst_22759__$1 == null);
var state_22794__$1 = (function (){var statearr_22799 = state_22794;
(statearr_22799[(7)] = inst_22759__$1);

return statearr_22799;
})();
if(cljs.core.truth_(inst_22760)){
var statearr_22800_22865 = state_22794__$1;
(statearr_22800_22865[(1)] = (5));

} else {
var statearr_22801_22866 = state_22794__$1;
(statearr_22801_22866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (15))){
var inst_22772 = (state_22794[(8)]);
var state_22794__$1 = state_22794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22794__$1,(18),to,inst_22772);
} else {
if((state_val_22795 === (21))){
var inst_22785 = (state_22794[(2)]);
var state_22794__$1 = state_22794;
var statearr_22802_22867 = state_22794__$1;
(statearr_22802_22867[(2)] = inst_22785);

(statearr_22802_22867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (13))){
var inst_22787 = (state_22794[(2)]);
var state_22794__$1 = (function (){var statearr_22803 = state_22794;
(statearr_22803[(9)] = inst_22787);

return statearr_22803;
})();
var statearr_22804_22868 = state_22794__$1;
(statearr_22804_22868[(2)] = null);

(statearr_22804_22868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (6))){
var inst_22759 = (state_22794[(7)]);
var state_22794__$1 = state_22794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22794__$1,(11),inst_22759);
} else {
if((state_val_22795 === (17))){
var inst_22780 = (state_22794[(2)]);
var state_22794__$1 = state_22794;
if(cljs.core.truth_(inst_22780)){
var statearr_22805_22869 = state_22794__$1;
(statearr_22805_22869[(1)] = (19));

} else {
var statearr_22806_22870 = state_22794__$1;
(statearr_22806_22870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (3))){
var inst_22792 = (state_22794[(2)]);
var state_22794__$1 = state_22794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22794__$1,inst_22792);
} else {
if((state_val_22795 === (12))){
var inst_22769 = (state_22794[(10)]);
var state_22794__$1 = state_22794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22794__$1,(14),inst_22769);
} else {
if((state_val_22795 === (2))){
var state_22794__$1 = state_22794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22794__$1,(4),results);
} else {
if((state_val_22795 === (19))){
var state_22794__$1 = state_22794;
var statearr_22807_22871 = state_22794__$1;
(statearr_22807_22871[(2)] = null);

(statearr_22807_22871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (11))){
var inst_22769 = (state_22794[(2)]);
var state_22794__$1 = (function (){var statearr_22808 = state_22794;
(statearr_22808[(10)] = inst_22769);

return statearr_22808;
})();
var statearr_22809_22872 = state_22794__$1;
(statearr_22809_22872[(2)] = null);

(statearr_22809_22872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (9))){
var state_22794__$1 = state_22794;
var statearr_22810_22873 = state_22794__$1;
(statearr_22810_22873[(2)] = null);

(statearr_22810_22873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (5))){
var state_22794__$1 = state_22794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22811_22874 = state_22794__$1;
(statearr_22811_22874[(1)] = (8));

} else {
var statearr_22812_22875 = state_22794__$1;
(statearr_22812_22875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (14))){
var inst_22774 = (state_22794[(11)]);
var inst_22772 = (state_22794[(8)]);
var inst_22772__$1 = (state_22794[(2)]);
var inst_22773 = (inst_22772__$1 == null);
var inst_22774__$1 = cljs.core.not.call(null,inst_22773);
var state_22794__$1 = (function (){var statearr_22813 = state_22794;
(statearr_22813[(11)] = inst_22774__$1);

(statearr_22813[(8)] = inst_22772__$1);

return statearr_22813;
})();
if(inst_22774__$1){
var statearr_22814_22876 = state_22794__$1;
(statearr_22814_22876[(1)] = (15));

} else {
var statearr_22815_22877 = state_22794__$1;
(statearr_22815_22877[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (16))){
var inst_22774 = (state_22794[(11)]);
var state_22794__$1 = state_22794;
var statearr_22816_22878 = state_22794__$1;
(statearr_22816_22878[(2)] = inst_22774);

(statearr_22816_22878[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (10))){
var inst_22766 = (state_22794[(2)]);
var state_22794__$1 = state_22794;
var statearr_22817_22879 = state_22794__$1;
(statearr_22817_22879[(2)] = inst_22766);

(statearr_22817_22879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (18))){
var inst_22777 = (state_22794[(2)]);
var state_22794__$1 = state_22794;
var statearr_22818_22880 = state_22794__$1;
(statearr_22818_22880[(2)] = inst_22777);

(statearr_22818_22880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22795 === (8))){
var inst_22763 = cljs.core.async.close_BANG_.call(null,to);
var state_22794__$1 = state_22794;
var statearr_22819_22881 = state_22794__$1;
(statearr_22819_22881[(2)] = inst_22763);

(statearr_22819_22881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto__,jobs,results,process,async))
;
return ((function (switch__11098__auto__,c__11113__auto__,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_22823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22823[(0)] = state_machine__11099__auto__);

(statearr_22823[(1)] = (1));

return statearr_22823;
});
var state_machine__11099__auto____1 = (function (state_22794){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e22824){if((e22824 instanceof Object)){
var ex__11102__auto__ = e22824;
var statearr_22825_22882 = state_22794;
(statearr_22825_22882[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22883 = state_22794;
state_22794 = G__22883;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22794){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_22826 = f__11114__auto__.call(null);
(statearr_22826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_22826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto__,jobs,results,process,async))
);

return c__11113__auto__;
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
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11113__auto___22984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___22984,tc,fc){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___22984,tc,fc){
return (function (state_22959){
var state_val_22960 = (state_22959[(1)]);
if((state_val_22960 === (7))){
var inst_22955 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_22961_22985 = state_22959__$1;
(statearr_22961_22985[(2)] = inst_22955);

(statearr_22961_22985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (1))){
var state_22959__$1 = state_22959;
var statearr_22962_22986 = state_22959__$1;
(statearr_22962_22986[(2)] = null);

(statearr_22962_22986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (4))){
var inst_22936 = (state_22959[(7)]);
var inst_22936__$1 = (state_22959[(2)]);
var inst_22937 = (inst_22936__$1 == null);
var state_22959__$1 = (function (){var statearr_22963 = state_22959;
(statearr_22963[(7)] = inst_22936__$1);

return statearr_22963;
})();
if(cljs.core.truth_(inst_22937)){
var statearr_22964_22987 = state_22959__$1;
(statearr_22964_22987[(1)] = (5));

} else {
var statearr_22965_22988 = state_22959__$1;
(statearr_22965_22988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (13))){
var state_22959__$1 = state_22959;
var statearr_22966_22989 = state_22959__$1;
(statearr_22966_22989[(2)] = null);

(statearr_22966_22989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (6))){
var inst_22936 = (state_22959[(7)]);
var inst_22942 = p.call(null,inst_22936);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22942)){
var statearr_22967_22990 = state_22959__$1;
(statearr_22967_22990[(1)] = (9));

} else {
var statearr_22968_22991 = state_22959__$1;
(statearr_22968_22991[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (3))){
var inst_22957 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22959__$1,inst_22957);
} else {
if((state_val_22960 === (12))){
var state_22959__$1 = state_22959;
var statearr_22969_22992 = state_22959__$1;
(statearr_22969_22992[(2)] = null);

(statearr_22969_22992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (2))){
var state_22959__$1 = state_22959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22959__$1,(4),ch);
} else {
if((state_val_22960 === (11))){
var inst_22936 = (state_22959[(7)]);
var inst_22946 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22959__$1,(8),inst_22946,inst_22936);
} else {
if((state_val_22960 === (9))){
var state_22959__$1 = state_22959;
var statearr_22970_22993 = state_22959__$1;
(statearr_22970_22993[(2)] = tc);

(statearr_22970_22993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (5))){
var inst_22939 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22940 = cljs.core.async.close_BANG_.call(null,fc);
var state_22959__$1 = (function (){var statearr_22971 = state_22959;
(statearr_22971[(8)] = inst_22939);

return statearr_22971;
})();
var statearr_22972_22994 = state_22959__$1;
(statearr_22972_22994[(2)] = inst_22940);

(statearr_22972_22994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (14))){
var inst_22953 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
var statearr_22973_22995 = state_22959__$1;
(statearr_22973_22995[(2)] = inst_22953);

(statearr_22973_22995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (10))){
var state_22959__$1 = state_22959;
var statearr_22974_22996 = state_22959__$1;
(statearr_22974_22996[(2)] = fc);

(statearr_22974_22996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22960 === (8))){
var inst_22948 = (state_22959[(2)]);
var state_22959__$1 = state_22959;
if(cljs.core.truth_(inst_22948)){
var statearr_22975_22997 = state_22959__$1;
(statearr_22975_22997[(1)] = (12));

} else {
var statearr_22976_22998 = state_22959__$1;
(statearr_22976_22998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___22984,tc,fc))
;
return ((function (switch__11098__auto__,c__11113__auto___22984,tc,fc){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_22980 = [null,null,null,null,null,null,null,null,null];
(statearr_22980[(0)] = state_machine__11099__auto__);

(statearr_22980[(1)] = (1));

return statearr_22980;
});
var state_machine__11099__auto____1 = (function (state_22959){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e22981){if((e22981 instanceof Object)){
var ex__11102__auto__ = e22981;
var statearr_22982_22999 = state_22959;
(statearr_22982_22999[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23000 = state_22959;
state_22959 = G__23000;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22959){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___22984,tc,fc))
})();
var state__11115__auto__ = (function (){var statearr_22983 = f__11114__auto__.call(null);
(statearr_22983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___22984);

return statearr_22983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___22984,tc,fc))
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
var c__11113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto__){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto__){
return (function (state_23047){
var state_val_23048 = (state_23047[(1)]);
if((state_val_23048 === (7))){
var inst_23043 = (state_23047[(2)]);
var state_23047__$1 = state_23047;
var statearr_23049_23065 = state_23047__$1;
(statearr_23049_23065[(2)] = inst_23043);

(statearr_23049_23065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (6))){
var inst_23033 = (state_23047[(7)]);
var inst_23036 = (state_23047[(8)]);
var inst_23040 = f.call(null,inst_23033,inst_23036);
var inst_23033__$1 = inst_23040;
var state_23047__$1 = (function (){var statearr_23050 = state_23047;
(statearr_23050[(7)] = inst_23033__$1);

return statearr_23050;
})();
var statearr_23051_23066 = state_23047__$1;
(statearr_23051_23066[(2)] = null);

(statearr_23051_23066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (5))){
var inst_23033 = (state_23047[(7)]);
var state_23047__$1 = state_23047;
var statearr_23052_23067 = state_23047__$1;
(statearr_23052_23067[(2)] = inst_23033);

(statearr_23052_23067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (4))){
var inst_23036 = (state_23047[(8)]);
var inst_23036__$1 = (state_23047[(2)]);
var inst_23037 = (inst_23036__$1 == null);
var state_23047__$1 = (function (){var statearr_23053 = state_23047;
(statearr_23053[(8)] = inst_23036__$1);

return statearr_23053;
})();
if(cljs.core.truth_(inst_23037)){
var statearr_23054_23068 = state_23047__$1;
(statearr_23054_23068[(1)] = (5));

} else {
var statearr_23055_23069 = state_23047__$1;
(statearr_23055_23069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (3))){
var inst_23045 = (state_23047[(2)]);
var state_23047__$1 = state_23047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23047__$1,inst_23045);
} else {
if((state_val_23048 === (2))){
var state_23047__$1 = state_23047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23047__$1,(4),ch);
} else {
if((state_val_23048 === (1))){
var inst_23033 = init;
var state_23047__$1 = (function (){var statearr_23056 = state_23047;
(statearr_23056[(7)] = inst_23033);

return statearr_23056;
})();
var statearr_23057_23070 = state_23047__$1;
(statearr_23057_23070[(2)] = null);

(statearr_23057_23070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__11113__auto__))
;
return ((function (switch__11098__auto__,c__11113__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_23061 = [null,null,null,null,null,null,null,null,null];
(statearr_23061[(0)] = state_machine__11099__auto__);

(statearr_23061[(1)] = (1));

return statearr_23061;
});
var state_machine__11099__auto____1 = (function (state_23047){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_23047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e23062){if((e23062 instanceof Object)){
var ex__11102__auto__ = e23062;
var statearr_23063_23071 = state_23047;
(statearr_23063_23071[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23072 = state_23047;
state_23047 = G__23072;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_23047){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_23047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__))
})();
var state__11115__auto__ = (function (){var statearr_23064 = f__11114__auto__.call(null);
(statearr_23064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_23064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto__))
);

return c__11113__auto__;
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
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__11113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto__){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto__){
return (function (state_23146){
var state_val_23147 = (state_23146[(1)]);
if((state_val_23147 === (7))){
var inst_23128 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
var statearr_23148_23171 = state_23146__$1;
(statearr_23148_23171[(2)] = inst_23128);

(statearr_23148_23171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (1))){
var inst_23122 = cljs.core.seq.call(null,coll);
var inst_23123 = inst_23122;
var state_23146__$1 = (function (){var statearr_23149 = state_23146;
(statearr_23149[(7)] = inst_23123);

return statearr_23149;
})();
var statearr_23150_23172 = state_23146__$1;
(statearr_23150_23172[(2)] = null);

(statearr_23150_23172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (4))){
var inst_23123 = (state_23146[(7)]);
var inst_23126 = cljs.core.first.call(null,inst_23123);
var state_23146__$1 = state_23146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23146__$1,(7),ch,inst_23126);
} else {
if((state_val_23147 === (13))){
var inst_23140 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
var statearr_23151_23173 = state_23146__$1;
(statearr_23151_23173[(2)] = inst_23140);

(statearr_23151_23173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (6))){
var inst_23131 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
if(cljs.core.truth_(inst_23131)){
var statearr_23152_23174 = state_23146__$1;
(statearr_23152_23174[(1)] = (8));

} else {
var statearr_23153_23175 = state_23146__$1;
(statearr_23153_23175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (3))){
var inst_23144 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23146__$1,inst_23144);
} else {
if((state_val_23147 === (12))){
var state_23146__$1 = state_23146;
var statearr_23154_23176 = state_23146__$1;
(statearr_23154_23176[(2)] = null);

(statearr_23154_23176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (2))){
var inst_23123 = (state_23146[(7)]);
var state_23146__$1 = state_23146;
if(cljs.core.truth_(inst_23123)){
var statearr_23155_23177 = state_23146__$1;
(statearr_23155_23177[(1)] = (4));

} else {
var statearr_23156_23178 = state_23146__$1;
(statearr_23156_23178[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (11))){
var inst_23137 = cljs.core.async.close_BANG_.call(null,ch);
var state_23146__$1 = state_23146;
var statearr_23157_23179 = state_23146__$1;
(statearr_23157_23179[(2)] = inst_23137);

(statearr_23157_23179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (9))){
var state_23146__$1 = state_23146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23158_23180 = state_23146__$1;
(statearr_23158_23180[(1)] = (11));

} else {
var statearr_23159_23181 = state_23146__$1;
(statearr_23159_23181[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (5))){
var inst_23123 = (state_23146[(7)]);
var state_23146__$1 = state_23146;
var statearr_23160_23182 = state_23146__$1;
(statearr_23160_23182[(2)] = inst_23123);

(statearr_23160_23182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (10))){
var inst_23142 = (state_23146[(2)]);
var state_23146__$1 = state_23146;
var statearr_23161_23183 = state_23146__$1;
(statearr_23161_23183[(2)] = inst_23142);

(statearr_23161_23183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23147 === (8))){
var inst_23123 = (state_23146[(7)]);
var inst_23133 = cljs.core.next.call(null,inst_23123);
var inst_23123__$1 = inst_23133;
var state_23146__$1 = (function (){var statearr_23162 = state_23146;
(statearr_23162[(7)] = inst_23123__$1);

return statearr_23162;
})();
var statearr_23163_23184 = state_23146__$1;
(statearr_23163_23184[(2)] = null);

(statearr_23163_23184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto__))
;
return ((function (switch__11098__auto__,c__11113__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_23167 = [null,null,null,null,null,null,null,null];
(statearr_23167[(0)] = state_machine__11099__auto__);

(statearr_23167[(1)] = (1));

return statearr_23167;
});
var state_machine__11099__auto____1 = (function (state_23146){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_23146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e23168){if((e23168 instanceof Object)){
var ex__11102__auto__ = e23168;
var statearr_23169_23185 = state_23146;
(statearr_23169_23185[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23186 = state_23146;
state_23146 = G__23186;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_23146){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_23146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__))
})();
var state__11115__auto__ = (function (){var statearr_23170 = f__11114__auto__.call(null);
(statearr_23170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_23170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto__))
);

return c__11113__auto__;
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
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj23188 = {};
return obj23188;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3626__auto__ = _;
if(and__3626__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4282__auto__ = (((_ == null))?null:_);
return (function (){var or__3638__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23190 = {};
return obj23190;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t23412 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23412 = (function (cs,ch,mult,meta23413){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23413 = meta23413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23412.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23412.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23412.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23412.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t23412.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23414){
var self__ = this;
var _23414__$1 = this;
return self__.meta23413;
});})(cs))
;

cljs.core.async.t23412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23414,meta23413__$1){
var self__ = this;
var _23414__$1 = this;
return (new cljs.core.async.t23412(self__.cs,self__.ch,self__.mult,meta23413__$1));
});})(cs))
;

cljs.core.async.t23412.cljs$lang$type = true;

cljs.core.async.t23412.cljs$lang$ctorStr = "cljs.core.async/t23412";

cljs.core.async.t23412.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t23412");
});})(cs))
;

cljs.core.async.__GT_t23412 = ((function (cs){
return (function __GT_t23412(cs__$1,ch__$1,mult__$1,meta23413){
return (new cljs.core.async.t23412(cs__$1,ch__$1,mult__$1,meta23413));
});})(cs))
;

}

return (new cljs.core.async.t23412(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11113__auto___23633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___23633,cs,m,dchan,dctr,done){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___23633,cs,m,dchan,dctr,done){
return (function (state_23545){
var state_val_23546 = (state_23545[(1)]);
if((state_val_23546 === (7))){
var inst_23541 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23547_23634 = state_23545__$1;
(statearr_23547_23634[(2)] = inst_23541);

(statearr_23547_23634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (20))){
var inst_23446 = (state_23545[(7)]);
var inst_23456 = cljs.core.first.call(null,inst_23446);
var inst_23457 = cljs.core.nth.call(null,inst_23456,(0),null);
var inst_23458 = cljs.core.nth.call(null,inst_23456,(1),null);
var state_23545__$1 = (function (){var statearr_23548 = state_23545;
(statearr_23548[(8)] = inst_23457);

return statearr_23548;
})();
if(cljs.core.truth_(inst_23458)){
var statearr_23549_23635 = state_23545__$1;
(statearr_23549_23635[(1)] = (22));

} else {
var statearr_23550_23636 = state_23545__$1;
(statearr_23550_23636[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (27))){
var inst_23488 = (state_23545[(9)]);
var inst_23493 = (state_23545[(10)]);
var inst_23486 = (state_23545[(11)]);
var inst_23417 = (state_23545[(12)]);
var inst_23493__$1 = cljs.core._nth.call(null,inst_23486,inst_23488);
var inst_23494 = cljs.core.async.put_BANG_.call(null,inst_23493__$1,inst_23417,done);
var state_23545__$1 = (function (){var statearr_23551 = state_23545;
(statearr_23551[(10)] = inst_23493__$1);

return statearr_23551;
})();
if(cljs.core.truth_(inst_23494)){
var statearr_23552_23637 = state_23545__$1;
(statearr_23552_23637[(1)] = (30));

} else {
var statearr_23553_23638 = state_23545__$1;
(statearr_23553_23638[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (1))){
var state_23545__$1 = state_23545;
var statearr_23554_23639 = state_23545__$1;
(statearr_23554_23639[(2)] = null);

(statearr_23554_23639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (24))){
var inst_23446 = (state_23545[(7)]);
var inst_23463 = (state_23545[(2)]);
var inst_23464 = cljs.core.next.call(null,inst_23446);
var inst_23426 = inst_23464;
var inst_23427 = null;
var inst_23428 = (0);
var inst_23429 = (0);
var state_23545__$1 = (function (){var statearr_23555 = state_23545;
(statearr_23555[(13)] = inst_23426);

(statearr_23555[(14)] = inst_23429);

(statearr_23555[(15)] = inst_23428);

(statearr_23555[(16)] = inst_23463);

(statearr_23555[(17)] = inst_23427);

return statearr_23555;
})();
var statearr_23556_23640 = state_23545__$1;
(statearr_23556_23640[(2)] = null);

(statearr_23556_23640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (39))){
var state_23545__$1 = state_23545;
var statearr_23560_23641 = state_23545__$1;
(statearr_23560_23641[(2)] = null);

(statearr_23560_23641[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (4))){
var inst_23417 = (state_23545[(12)]);
var inst_23417__$1 = (state_23545[(2)]);
var inst_23418 = (inst_23417__$1 == null);
var state_23545__$1 = (function (){var statearr_23561 = state_23545;
(statearr_23561[(12)] = inst_23417__$1);

return statearr_23561;
})();
if(cljs.core.truth_(inst_23418)){
var statearr_23562_23642 = state_23545__$1;
(statearr_23562_23642[(1)] = (5));

} else {
var statearr_23563_23643 = state_23545__$1;
(statearr_23563_23643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (15))){
var inst_23426 = (state_23545[(13)]);
var inst_23429 = (state_23545[(14)]);
var inst_23428 = (state_23545[(15)]);
var inst_23427 = (state_23545[(17)]);
var inst_23442 = (state_23545[(2)]);
var inst_23443 = (inst_23429 + (1));
var tmp23557 = inst_23426;
var tmp23558 = inst_23428;
var tmp23559 = inst_23427;
var inst_23426__$1 = tmp23557;
var inst_23427__$1 = tmp23559;
var inst_23428__$1 = tmp23558;
var inst_23429__$1 = inst_23443;
var state_23545__$1 = (function (){var statearr_23564 = state_23545;
(statearr_23564[(13)] = inst_23426__$1);

(statearr_23564[(18)] = inst_23442);

(statearr_23564[(14)] = inst_23429__$1);

(statearr_23564[(15)] = inst_23428__$1);

(statearr_23564[(17)] = inst_23427__$1);

return statearr_23564;
})();
var statearr_23565_23644 = state_23545__$1;
(statearr_23565_23644[(2)] = null);

(statearr_23565_23644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (21))){
var inst_23467 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23569_23645 = state_23545__$1;
(statearr_23569_23645[(2)] = inst_23467);

(statearr_23569_23645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (31))){
var inst_23493 = (state_23545[(10)]);
var inst_23497 = done.call(null,null);
var inst_23498 = cljs.core.async.untap_STAR_.call(null,m,inst_23493);
var state_23545__$1 = (function (){var statearr_23570 = state_23545;
(statearr_23570[(19)] = inst_23497);

return statearr_23570;
})();
var statearr_23571_23646 = state_23545__$1;
(statearr_23571_23646[(2)] = inst_23498);

(statearr_23571_23646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (32))){
var inst_23488 = (state_23545[(9)]);
var inst_23486 = (state_23545[(11)]);
var inst_23485 = (state_23545[(20)]);
var inst_23487 = (state_23545[(21)]);
var inst_23500 = (state_23545[(2)]);
var inst_23501 = (inst_23488 + (1));
var tmp23566 = inst_23486;
var tmp23567 = inst_23485;
var tmp23568 = inst_23487;
var inst_23485__$1 = tmp23567;
var inst_23486__$1 = tmp23566;
var inst_23487__$1 = tmp23568;
var inst_23488__$1 = inst_23501;
var state_23545__$1 = (function (){var statearr_23572 = state_23545;
(statearr_23572[(9)] = inst_23488__$1);

(statearr_23572[(11)] = inst_23486__$1);

(statearr_23572[(22)] = inst_23500);

(statearr_23572[(20)] = inst_23485__$1);

(statearr_23572[(21)] = inst_23487__$1);

return statearr_23572;
})();
var statearr_23573_23647 = state_23545__$1;
(statearr_23573_23647[(2)] = null);

(statearr_23573_23647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (40))){
var inst_23513 = (state_23545[(23)]);
var inst_23517 = done.call(null,null);
var inst_23518 = cljs.core.async.untap_STAR_.call(null,m,inst_23513);
var state_23545__$1 = (function (){var statearr_23574 = state_23545;
(statearr_23574[(24)] = inst_23517);

return statearr_23574;
})();
var statearr_23575_23648 = state_23545__$1;
(statearr_23575_23648[(2)] = inst_23518);

(statearr_23575_23648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (33))){
var inst_23504 = (state_23545[(25)]);
var inst_23506 = cljs.core.chunked_seq_QMARK_.call(null,inst_23504);
var state_23545__$1 = state_23545;
if(inst_23506){
var statearr_23576_23649 = state_23545__$1;
(statearr_23576_23649[(1)] = (36));

} else {
var statearr_23577_23650 = state_23545__$1;
(statearr_23577_23650[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (13))){
var inst_23436 = (state_23545[(26)]);
var inst_23439 = cljs.core.async.close_BANG_.call(null,inst_23436);
var state_23545__$1 = state_23545;
var statearr_23578_23651 = state_23545__$1;
(statearr_23578_23651[(2)] = inst_23439);

(statearr_23578_23651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (22))){
var inst_23457 = (state_23545[(8)]);
var inst_23460 = cljs.core.async.close_BANG_.call(null,inst_23457);
var state_23545__$1 = state_23545;
var statearr_23579_23652 = state_23545__$1;
(statearr_23579_23652[(2)] = inst_23460);

(statearr_23579_23652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (36))){
var inst_23504 = (state_23545[(25)]);
var inst_23508 = cljs.core.chunk_first.call(null,inst_23504);
var inst_23509 = cljs.core.chunk_rest.call(null,inst_23504);
var inst_23510 = cljs.core.count.call(null,inst_23508);
var inst_23485 = inst_23509;
var inst_23486 = inst_23508;
var inst_23487 = inst_23510;
var inst_23488 = (0);
var state_23545__$1 = (function (){var statearr_23580 = state_23545;
(statearr_23580[(9)] = inst_23488);

(statearr_23580[(11)] = inst_23486);

(statearr_23580[(20)] = inst_23485);

(statearr_23580[(21)] = inst_23487);

return statearr_23580;
})();
var statearr_23581_23653 = state_23545__$1;
(statearr_23581_23653[(2)] = null);

(statearr_23581_23653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (41))){
var inst_23504 = (state_23545[(25)]);
var inst_23520 = (state_23545[(2)]);
var inst_23521 = cljs.core.next.call(null,inst_23504);
var inst_23485 = inst_23521;
var inst_23486 = null;
var inst_23487 = (0);
var inst_23488 = (0);
var state_23545__$1 = (function (){var statearr_23582 = state_23545;
(statearr_23582[(27)] = inst_23520);

(statearr_23582[(9)] = inst_23488);

(statearr_23582[(11)] = inst_23486);

(statearr_23582[(20)] = inst_23485);

(statearr_23582[(21)] = inst_23487);

return statearr_23582;
})();
var statearr_23583_23654 = state_23545__$1;
(statearr_23583_23654[(2)] = null);

(statearr_23583_23654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (43))){
var state_23545__$1 = state_23545;
var statearr_23584_23655 = state_23545__$1;
(statearr_23584_23655[(2)] = null);

(statearr_23584_23655[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (29))){
var inst_23529 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23585_23656 = state_23545__$1;
(statearr_23585_23656[(2)] = inst_23529);

(statearr_23585_23656[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (44))){
var inst_23538 = (state_23545[(2)]);
var state_23545__$1 = (function (){var statearr_23586 = state_23545;
(statearr_23586[(28)] = inst_23538);

return statearr_23586;
})();
var statearr_23587_23657 = state_23545__$1;
(statearr_23587_23657[(2)] = null);

(statearr_23587_23657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (6))){
var inst_23477 = (state_23545[(29)]);
var inst_23476 = cljs.core.deref.call(null,cs);
var inst_23477__$1 = cljs.core.keys.call(null,inst_23476);
var inst_23478 = cljs.core.count.call(null,inst_23477__$1);
var inst_23479 = cljs.core.reset_BANG_.call(null,dctr,inst_23478);
var inst_23484 = cljs.core.seq.call(null,inst_23477__$1);
var inst_23485 = inst_23484;
var inst_23486 = null;
var inst_23487 = (0);
var inst_23488 = (0);
var state_23545__$1 = (function (){var statearr_23588 = state_23545;
(statearr_23588[(9)] = inst_23488);

(statearr_23588[(29)] = inst_23477__$1);

(statearr_23588[(11)] = inst_23486);

(statearr_23588[(30)] = inst_23479);

(statearr_23588[(20)] = inst_23485);

(statearr_23588[(21)] = inst_23487);

return statearr_23588;
})();
var statearr_23589_23658 = state_23545__$1;
(statearr_23589_23658[(2)] = null);

(statearr_23589_23658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (28))){
var inst_23485 = (state_23545[(20)]);
var inst_23504 = (state_23545[(25)]);
var inst_23504__$1 = cljs.core.seq.call(null,inst_23485);
var state_23545__$1 = (function (){var statearr_23590 = state_23545;
(statearr_23590[(25)] = inst_23504__$1);

return statearr_23590;
})();
if(inst_23504__$1){
var statearr_23591_23659 = state_23545__$1;
(statearr_23591_23659[(1)] = (33));

} else {
var statearr_23592_23660 = state_23545__$1;
(statearr_23592_23660[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (25))){
var inst_23488 = (state_23545[(9)]);
var inst_23487 = (state_23545[(21)]);
var inst_23490 = (inst_23488 < inst_23487);
var inst_23491 = inst_23490;
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23491)){
var statearr_23593_23661 = state_23545__$1;
(statearr_23593_23661[(1)] = (27));

} else {
var statearr_23594_23662 = state_23545__$1;
(statearr_23594_23662[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (34))){
var state_23545__$1 = state_23545;
var statearr_23595_23663 = state_23545__$1;
(statearr_23595_23663[(2)] = null);

(statearr_23595_23663[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (17))){
var state_23545__$1 = state_23545;
var statearr_23596_23664 = state_23545__$1;
(statearr_23596_23664[(2)] = null);

(statearr_23596_23664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (3))){
var inst_23543 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23545__$1,inst_23543);
} else {
if((state_val_23546 === (12))){
var inst_23472 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23597_23665 = state_23545__$1;
(statearr_23597_23665[(2)] = inst_23472);

(statearr_23597_23665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (2))){
var state_23545__$1 = state_23545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23545__$1,(4),ch);
} else {
if((state_val_23546 === (23))){
var state_23545__$1 = state_23545;
var statearr_23598_23666 = state_23545__$1;
(statearr_23598_23666[(2)] = null);

(statearr_23598_23666[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (35))){
var inst_23527 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23599_23667 = state_23545__$1;
(statearr_23599_23667[(2)] = inst_23527);

(statearr_23599_23667[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (19))){
var inst_23446 = (state_23545[(7)]);
var inst_23450 = cljs.core.chunk_first.call(null,inst_23446);
var inst_23451 = cljs.core.chunk_rest.call(null,inst_23446);
var inst_23452 = cljs.core.count.call(null,inst_23450);
var inst_23426 = inst_23451;
var inst_23427 = inst_23450;
var inst_23428 = inst_23452;
var inst_23429 = (0);
var state_23545__$1 = (function (){var statearr_23600 = state_23545;
(statearr_23600[(13)] = inst_23426);

(statearr_23600[(14)] = inst_23429);

(statearr_23600[(15)] = inst_23428);

(statearr_23600[(17)] = inst_23427);

return statearr_23600;
})();
var statearr_23601_23668 = state_23545__$1;
(statearr_23601_23668[(2)] = null);

(statearr_23601_23668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (11))){
var inst_23426 = (state_23545[(13)]);
var inst_23446 = (state_23545[(7)]);
var inst_23446__$1 = cljs.core.seq.call(null,inst_23426);
var state_23545__$1 = (function (){var statearr_23602 = state_23545;
(statearr_23602[(7)] = inst_23446__$1);

return statearr_23602;
})();
if(inst_23446__$1){
var statearr_23603_23669 = state_23545__$1;
(statearr_23603_23669[(1)] = (16));

} else {
var statearr_23604_23670 = state_23545__$1;
(statearr_23604_23670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (9))){
var inst_23474 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23605_23671 = state_23545__$1;
(statearr_23605_23671[(2)] = inst_23474);

(statearr_23605_23671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (5))){
var inst_23424 = cljs.core.deref.call(null,cs);
var inst_23425 = cljs.core.seq.call(null,inst_23424);
var inst_23426 = inst_23425;
var inst_23427 = null;
var inst_23428 = (0);
var inst_23429 = (0);
var state_23545__$1 = (function (){var statearr_23606 = state_23545;
(statearr_23606[(13)] = inst_23426);

(statearr_23606[(14)] = inst_23429);

(statearr_23606[(15)] = inst_23428);

(statearr_23606[(17)] = inst_23427);

return statearr_23606;
})();
var statearr_23607_23672 = state_23545__$1;
(statearr_23607_23672[(2)] = null);

(statearr_23607_23672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (14))){
var state_23545__$1 = state_23545;
var statearr_23608_23673 = state_23545__$1;
(statearr_23608_23673[(2)] = null);

(statearr_23608_23673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (45))){
var inst_23535 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23609_23674 = state_23545__$1;
(statearr_23609_23674[(2)] = inst_23535);

(statearr_23609_23674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (26))){
var inst_23477 = (state_23545[(29)]);
var inst_23531 = (state_23545[(2)]);
var inst_23532 = cljs.core.seq.call(null,inst_23477);
var state_23545__$1 = (function (){var statearr_23610 = state_23545;
(statearr_23610[(31)] = inst_23531);

return statearr_23610;
})();
if(inst_23532){
var statearr_23611_23675 = state_23545__$1;
(statearr_23611_23675[(1)] = (42));

} else {
var statearr_23612_23676 = state_23545__$1;
(statearr_23612_23676[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (16))){
var inst_23446 = (state_23545[(7)]);
var inst_23448 = cljs.core.chunked_seq_QMARK_.call(null,inst_23446);
var state_23545__$1 = state_23545;
if(inst_23448){
var statearr_23613_23677 = state_23545__$1;
(statearr_23613_23677[(1)] = (19));

} else {
var statearr_23614_23678 = state_23545__$1;
(statearr_23614_23678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (38))){
var inst_23524 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23615_23679 = state_23545__$1;
(statearr_23615_23679[(2)] = inst_23524);

(statearr_23615_23679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (30))){
var state_23545__$1 = state_23545;
var statearr_23616_23680 = state_23545__$1;
(statearr_23616_23680[(2)] = null);

(statearr_23616_23680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (10))){
var inst_23429 = (state_23545[(14)]);
var inst_23427 = (state_23545[(17)]);
var inst_23435 = cljs.core._nth.call(null,inst_23427,inst_23429);
var inst_23436 = cljs.core.nth.call(null,inst_23435,(0),null);
var inst_23437 = cljs.core.nth.call(null,inst_23435,(1),null);
var state_23545__$1 = (function (){var statearr_23617 = state_23545;
(statearr_23617[(26)] = inst_23436);

return statearr_23617;
})();
if(cljs.core.truth_(inst_23437)){
var statearr_23618_23681 = state_23545__$1;
(statearr_23618_23681[(1)] = (13));

} else {
var statearr_23619_23682 = state_23545__$1;
(statearr_23619_23682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (18))){
var inst_23470 = (state_23545[(2)]);
var state_23545__$1 = state_23545;
var statearr_23620_23683 = state_23545__$1;
(statearr_23620_23683[(2)] = inst_23470);

(statearr_23620_23683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (42))){
var state_23545__$1 = state_23545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23545__$1,(45),dchan);
} else {
if((state_val_23546 === (37))){
var inst_23417 = (state_23545[(12)]);
var inst_23504 = (state_23545[(25)]);
var inst_23513 = (state_23545[(23)]);
var inst_23513__$1 = cljs.core.first.call(null,inst_23504);
var inst_23514 = cljs.core.async.put_BANG_.call(null,inst_23513__$1,inst_23417,done);
var state_23545__$1 = (function (){var statearr_23621 = state_23545;
(statearr_23621[(23)] = inst_23513__$1);

return statearr_23621;
})();
if(cljs.core.truth_(inst_23514)){
var statearr_23622_23684 = state_23545__$1;
(statearr_23622_23684[(1)] = (39));

} else {
var statearr_23623_23685 = state_23545__$1;
(statearr_23623_23685[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23546 === (8))){
var inst_23429 = (state_23545[(14)]);
var inst_23428 = (state_23545[(15)]);
var inst_23431 = (inst_23429 < inst_23428);
var inst_23432 = inst_23431;
var state_23545__$1 = state_23545;
if(cljs.core.truth_(inst_23432)){
var statearr_23624_23686 = state_23545__$1;
(statearr_23624_23686[(1)] = (10));

} else {
var statearr_23625_23687 = state_23545__$1;
(statearr_23625_23687[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___23633,cs,m,dchan,dctr,done))
;
return ((function (switch__11098__auto__,c__11113__auto___23633,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_23629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23629[(0)] = state_machine__11099__auto__);

(statearr_23629[(1)] = (1));

return statearr_23629;
});
var state_machine__11099__auto____1 = (function (state_23545){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_23545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e23630){if((e23630 instanceof Object)){
var ex__11102__auto__ = e23630;
var statearr_23631_23688 = state_23545;
(statearr_23631_23688[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23689 = state_23545;
state_23545 = G__23689;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_23545){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_23545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___23633,cs,m,dchan,dctr,done))
})();
var state__11115__auto__ = (function (){var statearr_23632 = f__11114__auto__.call(null);
(statearr_23632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___23633);

return statearr_23632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___23633,cs,m,dchan,dctr,done))
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
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj23691 = {};
return obj23691;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3626__auto__ = m;
if(and__3626__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4282__auto__ = (((m == null))?null:m);
return (function (){var or__3638__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23692){
var map__23697 = p__23692;
var map__23697__$1 = ((cljs.core.seq_QMARK_.call(null,map__23697))?cljs.core.apply.call(null,cljs.core.hash_map,map__23697):map__23697);
var opts = map__23697__$1;
var statearr_23698_23701 = state;
(statearr_23698_23701[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__23697,map__23697__$1,opts){
return (function (val){
var statearr_23699_23702 = state;
(statearr_23699_23702[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23697,map__23697__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_23700_23703 = state;
(statearr_23700_23703[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23692 = null;
if (arguments.length > 3) {
  p__23692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23692);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23704){
var state = cljs.core.first(arglist__23704);
arglist__23704 = cljs.core.next(arglist__23704);
var cont_block = cljs.core.first(arglist__23704);
arglist__23704 = cljs.core.next(arglist__23704);
var ports = cljs.core.first(arglist__23704);
var p__23692 = cljs.core.rest(arglist__23704);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23692);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t23824 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23824 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23825){
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
this.meta23825 = meta23825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23824.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23824.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23826){
var self__ = this;
var _23826__$1 = this;
return self__.meta23825;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23826,meta23825__$1){
var self__ = this;
var _23826__$1 = this;
return (new cljs.core.async.t23824(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23825__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23824.cljs$lang$type = true;

cljs.core.async.t23824.cljs$lang$ctorStr = "cljs.core.async/t23824";

cljs.core.async.t23824.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t23824");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23824 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23825){
return (new cljs.core.async.t23824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23825));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23824(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
;
var c__11113__auto___23943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23896){
var state_val_23897 = (state_23896[(1)]);
if((state_val_23897 === (7))){
var inst_23840 = (state_23896[(7)]);
var inst_23845 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23840);
var state_23896__$1 = state_23896;
var statearr_23898_23944 = state_23896__$1;
(statearr_23898_23944[(2)] = inst_23845);

(statearr_23898_23944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (20))){
var inst_23855 = (state_23896[(8)]);
var state_23896__$1 = state_23896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23896__$1,(23),out,inst_23855);
} else {
if((state_val_23897 === (1))){
var inst_23830 = (state_23896[(9)]);
var inst_23830__$1 = calc_state.call(null);
var inst_23831 = cljs.core.seq_QMARK_.call(null,inst_23830__$1);
var state_23896__$1 = (function (){var statearr_23899 = state_23896;
(statearr_23899[(9)] = inst_23830__$1);

return statearr_23899;
})();
if(inst_23831){
var statearr_23900_23945 = state_23896__$1;
(statearr_23900_23945[(1)] = (2));

} else {
var statearr_23901_23946 = state_23896__$1;
(statearr_23901_23946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (24))){
var inst_23848 = (state_23896[(10)]);
var inst_23840 = inst_23848;
var state_23896__$1 = (function (){var statearr_23902 = state_23896;
(statearr_23902[(7)] = inst_23840);

return statearr_23902;
})();
var statearr_23903_23947 = state_23896__$1;
(statearr_23903_23947[(2)] = null);

(statearr_23903_23947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (4))){
var inst_23830 = (state_23896[(9)]);
var inst_23836 = (state_23896[(2)]);
var inst_23837 = cljs.core.get.call(null,inst_23836,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23838 = cljs.core.get.call(null,inst_23836,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23839 = cljs.core.get.call(null,inst_23836,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23840 = inst_23830;
var state_23896__$1 = (function (){var statearr_23904 = state_23896;
(statearr_23904[(11)] = inst_23839);

(statearr_23904[(7)] = inst_23840);

(statearr_23904[(12)] = inst_23838);

(statearr_23904[(13)] = inst_23837);

return statearr_23904;
})();
var statearr_23905_23948 = state_23896__$1;
(statearr_23905_23948[(2)] = null);

(statearr_23905_23948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (15))){
var state_23896__$1 = state_23896;
var statearr_23906_23949 = state_23896__$1;
(statearr_23906_23949[(2)] = null);

(statearr_23906_23949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (21))){
var inst_23848 = (state_23896[(10)]);
var inst_23840 = inst_23848;
var state_23896__$1 = (function (){var statearr_23907 = state_23896;
(statearr_23907[(7)] = inst_23840);

return statearr_23907;
})();
var statearr_23908_23950 = state_23896__$1;
(statearr_23908_23950[(2)] = null);

(statearr_23908_23950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (13))){
var inst_23892 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
var statearr_23909_23951 = state_23896__$1;
(statearr_23909_23951[(2)] = inst_23892);

(statearr_23909_23951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (22))){
var inst_23890 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
var statearr_23910_23952 = state_23896__$1;
(statearr_23910_23952[(2)] = inst_23890);

(statearr_23910_23952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (6))){
var inst_23894 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23896__$1,inst_23894);
} else {
if((state_val_23897 === (25))){
var state_23896__$1 = state_23896;
var statearr_23911_23953 = state_23896__$1;
(statearr_23911_23953[(2)] = null);

(statearr_23911_23953[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (17))){
var inst_23870 = (state_23896[(14)]);
var state_23896__$1 = state_23896;
var statearr_23912_23954 = state_23896__$1;
(statearr_23912_23954[(2)] = inst_23870);

(statearr_23912_23954[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (3))){
var inst_23830 = (state_23896[(9)]);
var state_23896__$1 = state_23896;
var statearr_23913_23955 = state_23896__$1;
(statearr_23913_23955[(2)] = inst_23830);

(statearr_23913_23955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (12))){
var inst_23851 = (state_23896[(15)]);
var inst_23856 = (state_23896[(16)]);
var inst_23870 = (state_23896[(14)]);
var inst_23870__$1 = inst_23851.call(null,inst_23856);
var state_23896__$1 = (function (){var statearr_23914 = state_23896;
(statearr_23914[(14)] = inst_23870__$1);

return statearr_23914;
})();
if(cljs.core.truth_(inst_23870__$1)){
var statearr_23915_23956 = state_23896__$1;
(statearr_23915_23956[(1)] = (17));

} else {
var statearr_23916_23957 = state_23896__$1;
(statearr_23916_23957[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (2))){
var inst_23830 = (state_23896[(9)]);
var inst_23833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23830);
var state_23896__$1 = state_23896;
var statearr_23917_23958 = state_23896__$1;
(statearr_23917_23958[(2)] = inst_23833);

(statearr_23917_23958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (23))){
var inst_23881 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
if(cljs.core.truth_(inst_23881)){
var statearr_23918_23959 = state_23896__$1;
(statearr_23918_23959[(1)] = (24));

} else {
var statearr_23919_23960 = state_23896__$1;
(statearr_23919_23960[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (19))){
var inst_23878 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
if(cljs.core.truth_(inst_23878)){
var statearr_23920_23961 = state_23896__$1;
(statearr_23920_23961[(1)] = (20));

} else {
var statearr_23921_23962 = state_23896__$1;
(statearr_23921_23962[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (11))){
var inst_23855 = (state_23896[(8)]);
var inst_23861 = (inst_23855 == null);
var state_23896__$1 = state_23896;
if(cljs.core.truth_(inst_23861)){
var statearr_23922_23963 = state_23896__$1;
(statearr_23922_23963[(1)] = (14));

} else {
var statearr_23923_23964 = state_23896__$1;
(statearr_23923_23964[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (9))){
var inst_23848 = (state_23896[(10)]);
var inst_23848__$1 = (state_23896[(2)]);
var inst_23849 = cljs.core.get.call(null,inst_23848__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23850 = cljs.core.get.call(null,inst_23848__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23851 = cljs.core.get.call(null,inst_23848__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_23896__$1 = (function (){var statearr_23924 = state_23896;
(statearr_23924[(15)] = inst_23851);

(statearr_23924[(10)] = inst_23848__$1);

(statearr_23924[(17)] = inst_23850);

return statearr_23924;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23896__$1,(10),inst_23849);
} else {
if((state_val_23897 === (5))){
var inst_23840 = (state_23896[(7)]);
var inst_23843 = cljs.core.seq_QMARK_.call(null,inst_23840);
var state_23896__$1 = state_23896;
if(inst_23843){
var statearr_23925_23965 = state_23896__$1;
(statearr_23925_23965[(1)] = (7));

} else {
var statearr_23926_23966 = state_23896__$1;
(statearr_23926_23966[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (14))){
var inst_23856 = (state_23896[(16)]);
var inst_23863 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23856);
var state_23896__$1 = state_23896;
var statearr_23927_23967 = state_23896__$1;
(statearr_23927_23967[(2)] = inst_23863);

(statearr_23927_23967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (26))){
var inst_23886 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
var statearr_23928_23968 = state_23896__$1;
(statearr_23928_23968[(2)] = inst_23886);

(statearr_23928_23968[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (16))){
var inst_23866 = (state_23896[(2)]);
var inst_23867 = calc_state.call(null);
var inst_23840 = inst_23867;
var state_23896__$1 = (function (){var statearr_23929 = state_23896;
(statearr_23929[(7)] = inst_23840);

(statearr_23929[(18)] = inst_23866);

return statearr_23929;
})();
var statearr_23930_23969 = state_23896__$1;
(statearr_23930_23969[(2)] = null);

(statearr_23930_23969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (10))){
var inst_23856 = (state_23896[(16)]);
var inst_23855 = (state_23896[(8)]);
var inst_23854 = (state_23896[(2)]);
var inst_23855__$1 = cljs.core.nth.call(null,inst_23854,(0),null);
var inst_23856__$1 = cljs.core.nth.call(null,inst_23854,(1),null);
var inst_23857 = (inst_23855__$1 == null);
var inst_23858 = cljs.core._EQ_.call(null,inst_23856__$1,change);
var inst_23859 = (inst_23857) || (inst_23858);
var state_23896__$1 = (function (){var statearr_23931 = state_23896;
(statearr_23931[(16)] = inst_23856__$1);

(statearr_23931[(8)] = inst_23855__$1);

return statearr_23931;
})();
if(cljs.core.truth_(inst_23859)){
var statearr_23932_23970 = state_23896__$1;
(statearr_23932_23970[(1)] = (11));

} else {
var statearr_23933_23971 = state_23896__$1;
(statearr_23933_23971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (18))){
var inst_23851 = (state_23896[(15)]);
var inst_23856 = (state_23896[(16)]);
var inst_23850 = (state_23896[(17)]);
var inst_23873 = cljs.core.empty_QMARK_.call(null,inst_23851);
var inst_23874 = inst_23850.call(null,inst_23856);
var inst_23875 = cljs.core.not.call(null,inst_23874);
var inst_23876 = (inst_23873) && (inst_23875);
var state_23896__$1 = state_23896;
var statearr_23934_23972 = state_23896__$1;
(statearr_23934_23972[(2)] = inst_23876);

(statearr_23934_23972[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (8))){
var inst_23840 = (state_23896[(7)]);
var state_23896__$1 = state_23896;
var statearr_23935_23973 = state_23896__$1;
(statearr_23935_23973[(2)] = inst_23840);

(statearr_23935_23973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11098__auto__,c__11113__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_23939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23939[(0)] = state_machine__11099__auto__);

(statearr_23939[(1)] = (1));

return statearr_23939;
});
var state_machine__11099__auto____1 = (function (state_23896){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_23896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e23940){if((e23940 instanceof Object)){
var ex__11102__auto__ = e23940;
var statearr_23941_23974 = state_23896;
(statearr_23941_23974[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23975 = state_23896;
state_23896 = G__23975;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_23896){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_23896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11115__auto__ = (function (){var statearr_23942 = f__11114__auto__.call(null);
(statearr_23942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___23943);

return statearr_23942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___23943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj23977 = {};
return obj23977;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3626__auto__ = p;
if(and__3626__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3626__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4282__auto__ = (((p == null))?null:p);
return (function (){var or__3638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4282__auto__)]);
if(or__3638__auto__){
return or__3638__auto__;
} else {
var or__3638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3638__auto____$1){
return or__3638__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3638__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3638__auto__,mults){
return (function (p1__23978_SHARP_){
if(cljs.core.truth_(p1__23978_SHARP_.call(null,topic))){
return p1__23978_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23978_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3638__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24101 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24101 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24102){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24102 = meta24102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24101.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24101.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24101.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24101.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24103){
var self__ = this;
var _24103__$1 = this;
return self__.meta24102;
});})(mults,ensure_mult))
;

cljs.core.async.t24101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24103,meta24102__$1){
var self__ = this;
var _24103__$1 = this;
return (new cljs.core.async.t24101(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24102__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24101.cljs$lang$type = true;

cljs.core.async.t24101.cljs$lang$ctorStr = "cljs.core.async/t24101";

cljs.core.async.t24101.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24101");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24101 = ((function (mults,ensure_mult){
return (function __GT_t24101(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24102){
return (new cljs.core.async.t24101(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24102));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24101(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
;
var c__11113__auto___24223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___24223,mults,ensure_mult,p){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___24223,mults,ensure_mult,p){
return (function (state_24175){
var state_val_24176 = (state_24175[(1)]);
if((state_val_24176 === (7))){
var inst_24171 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24177_24224 = state_24175__$1;
(statearr_24177_24224[(2)] = inst_24171);

(statearr_24177_24224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (20))){
var state_24175__$1 = state_24175;
var statearr_24178_24225 = state_24175__$1;
(statearr_24178_24225[(2)] = null);

(statearr_24178_24225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (1))){
var state_24175__$1 = state_24175;
var statearr_24179_24226 = state_24175__$1;
(statearr_24179_24226[(2)] = null);

(statearr_24179_24226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (24))){
var inst_24154 = (state_24175[(7)]);
var inst_24163 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24154);
var state_24175__$1 = state_24175;
var statearr_24180_24227 = state_24175__$1;
(statearr_24180_24227[(2)] = inst_24163);

(statearr_24180_24227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (4))){
var inst_24106 = (state_24175[(8)]);
var inst_24106__$1 = (state_24175[(2)]);
var inst_24107 = (inst_24106__$1 == null);
var state_24175__$1 = (function (){var statearr_24181 = state_24175;
(statearr_24181[(8)] = inst_24106__$1);

return statearr_24181;
})();
if(cljs.core.truth_(inst_24107)){
var statearr_24182_24228 = state_24175__$1;
(statearr_24182_24228[(1)] = (5));

} else {
var statearr_24183_24229 = state_24175__$1;
(statearr_24183_24229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (15))){
var inst_24148 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24184_24230 = state_24175__$1;
(statearr_24184_24230[(2)] = inst_24148);

(statearr_24184_24230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (21))){
var inst_24168 = (state_24175[(2)]);
var state_24175__$1 = (function (){var statearr_24185 = state_24175;
(statearr_24185[(9)] = inst_24168);

return statearr_24185;
})();
var statearr_24186_24231 = state_24175__$1;
(statearr_24186_24231[(2)] = null);

(statearr_24186_24231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (13))){
var inst_24130 = (state_24175[(10)]);
var inst_24132 = cljs.core.chunked_seq_QMARK_.call(null,inst_24130);
var state_24175__$1 = state_24175;
if(inst_24132){
var statearr_24187_24232 = state_24175__$1;
(statearr_24187_24232[(1)] = (16));

} else {
var statearr_24188_24233 = state_24175__$1;
(statearr_24188_24233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (22))){
var inst_24160 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24160)){
var statearr_24189_24234 = state_24175__$1;
(statearr_24189_24234[(1)] = (23));

} else {
var statearr_24190_24235 = state_24175__$1;
(statearr_24190_24235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (6))){
var inst_24156 = (state_24175[(11)]);
var inst_24154 = (state_24175[(7)]);
var inst_24106 = (state_24175[(8)]);
var inst_24154__$1 = topic_fn.call(null,inst_24106);
var inst_24155 = cljs.core.deref.call(null,mults);
var inst_24156__$1 = cljs.core.get.call(null,inst_24155,inst_24154__$1);
var state_24175__$1 = (function (){var statearr_24191 = state_24175;
(statearr_24191[(11)] = inst_24156__$1);

(statearr_24191[(7)] = inst_24154__$1);

return statearr_24191;
})();
if(cljs.core.truth_(inst_24156__$1)){
var statearr_24192_24236 = state_24175__$1;
(statearr_24192_24236[(1)] = (19));

} else {
var statearr_24193_24237 = state_24175__$1;
(statearr_24193_24237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (25))){
var inst_24165 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24194_24238 = state_24175__$1;
(statearr_24194_24238[(2)] = inst_24165);

(statearr_24194_24238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (17))){
var inst_24130 = (state_24175[(10)]);
var inst_24139 = cljs.core.first.call(null,inst_24130);
var inst_24140 = cljs.core.async.muxch_STAR_.call(null,inst_24139);
var inst_24141 = cljs.core.async.close_BANG_.call(null,inst_24140);
var inst_24142 = cljs.core.next.call(null,inst_24130);
var inst_24116 = inst_24142;
var inst_24117 = null;
var inst_24118 = (0);
var inst_24119 = (0);
var state_24175__$1 = (function (){var statearr_24195 = state_24175;
(statearr_24195[(12)] = inst_24117);

(statearr_24195[(13)] = inst_24141);

(statearr_24195[(14)] = inst_24116);

(statearr_24195[(15)] = inst_24119);

(statearr_24195[(16)] = inst_24118);

return statearr_24195;
})();
var statearr_24196_24239 = state_24175__$1;
(statearr_24196_24239[(2)] = null);

(statearr_24196_24239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (3))){
var inst_24173 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24175__$1,inst_24173);
} else {
if((state_val_24176 === (12))){
var inst_24150 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24197_24240 = state_24175__$1;
(statearr_24197_24240[(2)] = inst_24150);

(statearr_24197_24240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (2))){
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24175__$1,(4),ch);
} else {
if((state_val_24176 === (23))){
var state_24175__$1 = state_24175;
var statearr_24198_24241 = state_24175__$1;
(statearr_24198_24241[(2)] = null);

(statearr_24198_24241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (19))){
var inst_24156 = (state_24175[(11)]);
var inst_24106 = (state_24175[(8)]);
var inst_24158 = cljs.core.async.muxch_STAR_.call(null,inst_24156);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24175__$1,(22),inst_24158,inst_24106);
} else {
if((state_val_24176 === (11))){
var inst_24130 = (state_24175[(10)]);
var inst_24116 = (state_24175[(14)]);
var inst_24130__$1 = cljs.core.seq.call(null,inst_24116);
var state_24175__$1 = (function (){var statearr_24199 = state_24175;
(statearr_24199[(10)] = inst_24130__$1);

return statearr_24199;
})();
if(inst_24130__$1){
var statearr_24200_24242 = state_24175__$1;
(statearr_24200_24242[(1)] = (13));

} else {
var statearr_24201_24243 = state_24175__$1;
(statearr_24201_24243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (9))){
var inst_24152 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24202_24244 = state_24175__$1;
(statearr_24202_24244[(2)] = inst_24152);

(statearr_24202_24244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (5))){
var inst_24113 = cljs.core.deref.call(null,mults);
var inst_24114 = cljs.core.vals.call(null,inst_24113);
var inst_24115 = cljs.core.seq.call(null,inst_24114);
var inst_24116 = inst_24115;
var inst_24117 = null;
var inst_24118 = (0);
var inst_24119 = (0);
var state_24175__$1 = (function (){var statearr_24203 = state_24175;
(statearr_24203[(12)] = inst_24117);

(statearr_24203[(14)] = inst_24116);

(statearr_24203[(15)] = inst_24119);

(statearr_24203[(16)] = inst_24118);

return statearr_24203;
})();
var statearr_24204_24245 = state_24175__$1;
(statearr_24204_24245[(2)] = null);

(statearr_24204_24245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (14))){
var state_24175__$1 = state_24175;
var statearr_24208_24246 = state_24175__$1;
(statearr_24208_24246[(2)] = null);

(statearr_24208_24246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (16))){
var inst_24130 = (state_24175[(10)]);
var inst_24134 = cljs.core.chunk_first.call(null,inst_24130);
var inst_24135 = cljs.core.chunk_rest.call(null,inst_24130);
var inst_24136 = cljs.core.count.call(null,inst_24134);
var inst_24116 = inst_24135;
var inst_24117 = inst_24134;
var inst_24118 = inst_24136;
var inst_24119 = (0);
var state_24175__$1 = (function (){var statearr_24209 = state_24175;
(statearr_24209[(12)] = inst_24117);

(statearr_24209[(14)] = inst_24116);

(statearr_24209[(15)] = inst_24119);

(statearr_24209[(16)] = inst_24118);

return statearr_24209;
})();
var statearr_24210_24247 = state_24175__$1;
(statearr_24210_24247[(2)] = null);

(statearr_24210_24247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (10))){
var inst_24117 = (state_24175[(12)]);
var inst_24116 = (state_24175[(14)]);
var inst_24119 = (state_24175[(15)]);
var inst_24118 = (state_24175[(16)]);
var inst_24124 = cljs.core._nth.call(null,inst_24117,inst_24119);
var inst_24125 = cljs.core.async.muxch_STAR_.call(null,inst_24124);
var inst_24126 = cljs.core.async.close_BANG_.call(null,inst_24125);
var inst_24127 = (inst_24119 + (1));
var tmp24205 = inst_24117;
var tmp24206 = inst_24116;
var tmp24207 = inst_24118;
var inst_24116__$1 = tmp24206;
var inst_24117__$1 = tmp24205;
var inst_24118__$1 = tmp24207;
var inst_24119__$1 = inst_24127;
var state_24175__$1 = (function (){var statearr_24211 = state_24175;
(statearr_24211[(12)] = inst_24117__$1);

(statearr_24211[(17)] = inst_24126);

(statearr_24211[(14)] = inst_24116__$1);

(statearr_24211[(15)] = inst_24119__$1);

(statearr_24211[(16)] = inst_24118__$1);

return statearr_24211;
})();
var statearr_24212_24248 = state_24175__$1;
(statearr_24212_24248[(2)] = null);

(statearr_24212_24248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (18))){
var inst_24145 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24213_24249 = state_24175__$1;
(statearr_24213_24249[(2)] = inst_24145);

(statearr_24213_24249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (8))){
var inst_24119 = (state_24175[(15)]);
var inst_24118 = (state_24175[(16)]);
var inst_24121 = (inst_24119 < inst_24118);
var inst_24122 = inst_24121;
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24122)){
var statearr_24214_24250 = state_24175__$1;
(statearr_24214_24250[(1)] = (10));

} else {
var statearr_24215_24251 = state_24175__$1;
(statearr_24215_24251[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___24223,mults,ensure_mult,p))
;
return ((function (switch__11098__auto__,c__11113__auto___24223,mults,ensure_mult,p){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_24219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24219[(0)] = state_machine__11099__auto__);

(statearr_24219[(1)] = (1));

return statearr_24219;
});
var state_machine__11099__auto____1 = (function (state_24175){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e24220){if((e24220 instanceof Object)){
var ex__11102__auto__ = e24220;
var statearr_24221_24252 = state_24175;
(statearr_24221_24252[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24253 = state_24175;
state_24175 = G__24253;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___24223,mults,ensure_mult,p))
})();
var state__11115__auto__ = (function (){var statearr_24222 = f__11114__auto__.call(null);
(statearr_24222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___24223);

return statearr_24222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___24223,mults,ensure_mult,p))
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
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11113__auto___24390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___24390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___24390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24360){
var state_val_24361 = (state_24360[(1)]);
if((state_val_24361 === (7))){
var state_24360__$1 = state_24360;
var statearr_24362_24391 = state_24360__$1;
(statearr_24362_24391[(2)] = null);

(statearr_24362_24391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (1))){
var state_24360__$1 = state_24360;
var statearr_24363_24392 = state_24360__$1;
(statearr_24363_24392[(2)] = null);

(statearr_24363_24392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (4))){
var inst_24324 = (state_24360[(7)]);
var inst_24326 = (inst_24324 < cnt);
var state_24360__$1 = state_24360;
if(cljs.core.truth_(inst_24326)){
var statearr_24364_24393 = state_24360__$1;
(statearr_24364_24393[(1)] = (6));

} else {
var statearr_24365_24394 = state_24360__$1;
(statearr_24365_24394[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (15))){
var inst_24356 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24366_24395 = state_24360__$1;
(statearr_24366_24395[(2)] = inst_24356);

(statearr_24366_24395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (13))){
var inst_24349 = cljs.core.async.close_BANG_.call(null,out);
var state_24360__$1 = state_24360;
var statearr_24367_24396 = state_24360__$1;
(statearr_24367_24396[(2)] = inst_24349);

(statearr_24367_24396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (6))){
var state_24360__$1 = state_24360;
var statearr_24368_24397 = state_24360__$1;
(statearr_24368_24397[(2)] = null);

(statearr_24368_24397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (3))){
var inst_24358 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24360__$1,inst_24358);
} else {
if((state_val_24361 === (12))){
var inst_24346 = (state_24360[(8)]);
var inst_24346__$1 = (state_24360[(2)]);
var inst_24347 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24346__$1);
var state_24360__$1 = (function (){var statearr_24369 = state_24360;
(statearr_24369[(8)] = inst_24346__$1);

return statearr_24369;
})();
if(cljs.core.truth_(inst_24347)){
var statearr_24370_24398 = state_24360__$1;
(statearr_24370_24398[(1)] = (13));

} else {
var statearr_24371_24399 = state_24360__$1;
(statearr_24371_24399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (2))){
var inst_24323 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24324 = (0);
var state_24360__$1 = (function (){var statearr_24372 = state_24360;
(statearr_24372[(7)] = inst_24324);

(statearr_24372[(9)] = inst_24323);

return statearr_24372;
})();
var statearr_24373_24400 = state_24360__$1;
(statearr_24373_24400[(2)] = null);

(statearr_24373_24400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (11))){
var inst_24324 = (state_24360[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24360,(10),Object,null,(9));
var inst_24333 = chs__$1.call(null,inst_24324);
var inst_24334 = done.call(null,inst_24324);
var inst_24335 = cljs.core.async.take_BANG_.call(null,inst_24333,inst_24334);
var state_24360__$1 = state_24360;
var statearr_24374_24401 = state_24360__$1;
(statearr_24374_24401[(2)] = inst_24335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (9))){
var inst_24324 = (state_24360[(7)]);
var inst_24337 = (state_24360[(2)]);
var inst_24338 = (inst_24324 + (1));
var inst_24324__$1 = inst_24338;
var state_24360__$1 = (function (){var statearr_24375 = state_24360;
(statearr_24375[(7)] = inst_24324__$1);

(statearr_24375[(10)] = inst_24337);

return statearr_24375;
})();
var statearr_24376_24402 = state_24360__$1;
(statearr_24376_24402[(2)] = null);

(statearr_24376_24402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (5))){
var inst_24344 = (state_24360[(2)]);
var state_24360__$1 = (function (){var statearr_24377 = state_24360;
(statearr_24377[(11)] = inst_24344);

return statearr_24377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24360__$1,(12),dchan);
} else {
if((state_val_24361 === (14))){
var inst_24346 = (state_24360[(8)]);
var inst_24351 = cljs.core.apply.call(null,f,inst_24346);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24360__$1,(16),out,inst_24351);
} else {
if((state_val_24361 === (16))){
var inst_24353 = (state_24360[(2)]);
var state_24360__$1 = (function (){var statearr_24378 = state_24360;
(statearr_24378[(12)] = inst_24353);

return statearr_24378;
})();
var statearr_24379_24403 = state_24360__$1;
(statearr_24379_24403[(2)] = null);

(statearr_24379_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (10))){
var inst_24328 = (state_24360[(2)]);
var inst_24329 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24360__$1 = (function (){var statearr_24380 = state_24360;
(statearr_24380[(13)] = inst_24328);

return statearr_24380;
})();
var statearr_24381_24404 = state_24360__$1;
(statearr_24381_24404[(2)] = inst_24329);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (8))){
var inst_24342 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24382_24405 = state_24360__$1;
(statearr_24382_24405[(2)] = inst_24342);

(statearr_24382_24405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___24390,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11098__auto__,c__11113__auto___24390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_24386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24386[(0)] = state_machine__11099__auto__);

(statearr_24386[(1)] = (1));

return statearr_24386;
});
var state_machine__11099__auto____1 = (function (state_24360){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e24387){if((e24387 instanceof Object)){
var ex__11102__auto__ = e24387;
var statearr_24388_24406 = state_24360;
(statearr_24388_24406[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24407 = state_24360;
state_24360 = G__24407;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24360){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___24390,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11115__auto__ = (function (){var statearr_24389 = f__11114__auto__.call(null);
(statearr_24389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___24390);

return statearr_24389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___24390,chs__$1,out,cnt,rets,dchan,dctr,done))
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
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11113__auto___24515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___24515,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___24515,out){
return (function (state_24491){
var state_val_24492 = (state_24491[(1)]);
if((state_val_24492 === (7))){
var inst_24470 = (state_24491[(7)]);
var inst_24471 = (state_24491[(8)]);
var inst_24470__$1 = (state_24491[(2)]);
var inst_24471__$1 = cljs.core.nth.call(null,inst_24470__$1,(0),null);
var inst_24472 = cljs.core.nth.call(null,inst_24470__$1,(1),null);
var inst_24473 = (inst_24471__$1 == null);
var state_24491__$1 = (function (){var statearr_24493 = state_24491;
(statearr_24493[(7)] = inst_24470__$1);

(statearr_24493[(9)] = inst_24472);

(statearr_24493[(8)] = inst_24471__$1);

return statearr_24493;
})();
if(cljs.core.truth_(inst_24473)){
var statearr_24494_24516 = state_24491__$1;
(statearr_24494_24516[(1)] = (8));

} else {
var statearr_24495_24517 = state_24491__$1;
(statearr_24495_24517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (1))){
var inst_24462 = cljs.core.vec.call(null,chs);
var inst_24463 = inst_24462;
var state_24491__$1 = (function (){var statearr_24496 = state_24491;
(statearr_24496[(10)] = inst_24463);

return statearr_24496;
})();
var statearr_24497_24518 = state_24491__$1;
(statearr_24497_24518[(2)] = null);

(statearr_24497_24518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (4))){
var inst_24463 = (state_24491[(10)]);
var state_24491__$1 = state_24491;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24491__$1,(7),inst_24463);
} else {
if((state_val_24492 === (6))){
var inst_24487 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
var statearr_24498_24519 = state_24491__$1;
(statearr_24498_24519[(2)] = inst_24487);

(statearr_24498_24519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (3))){
var inst_24489 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24491__$1,inst_24489);
} else {
if((state_val_24492 === (2))){
var inst_24463 = (state_24491[(10)]);
var inst_24465 = cljs.core.count.call(null,inst_24463);
var inst_24466 = (inst_24465 > (0));
var state_24491__$1 = state_24491;
if(cljs.core.truth_(inst_24466)){
var statearr_24500_24520 = state_24491__$1;
(statearr_24500_24520[(1)] = (4));

} else {
var statearr_24501_24521 = state_24491__$1;
(statearr_24501_24521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (11))){
var inst_24463 = (state_24491[(10)]);
var inst_24480 = (state_24491[(2)]);
var tmp24499 = inst_24463;
var inst_24463__$1 = tmp24499;
var state_24491__$1 = (function (){var statearr_24502 = state_24491;
(statearr_24502[(11)] = inst_24480);

(statearr_24502[(10)] = inst_24463__$1);

return statearr_24502;
})();
var statearr_24503_24522 = state_24491__$1;
(statearr_24503_24522[(2)] = null);

(statearr_24503_24522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (9))){
var inst_24471 = (state_24491[(8)]);
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24491__$1,(11),out,inst_24471);
} else {
if((state_val_24492 === (5))){
var inst_24485 = cljs.core.async.close_BANG_.call(null,out);
var state_24491__$1 = state_24491;
var statearr_24504_24523 = state_24491__$1;
(statearr_24504_24523[(2)] = inst_24485);

(statearr_24504_24523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (10))){
var inst_24483 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
var statearr_24505_24524 = state_24491__$1;
(statearr_24505_24524[(2)] = inst_24483);

(statearr_24505_24524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (8))){
var inst_24470 = (state_24491[(7)]);
var inst_24472 = (state_24491[(9)]);
var inst_24463 = (state_24491[(10)]);
var inst_24471 = (state_24491[(8)]);
var inst_24475 = (function (){var c = inst_24472;
var v = inst_24471;
var vec__24468 = inst_24470;
var cs = inst_24463;
return ((function (c,v,vec__24468,cs,inst_24470,inst_24472,inst_24463,inst_24471,state_val_24492,c__11113__auto___24515,out){
return (function (p1__24408_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24408_SHARP_);
});
;})(c,v,vec__24468,cs,inst_24470,inst_24472,inst_24463,inst_24471,state_val_24492,c__11113__auto___24515,out))
})();
var inst_24476 = cljs.core.filterv.call(null,inst_24475,inst_24463);
var inst_24463__$1 = inst_24476;
var state_24491__$1 = (function (){var statearr_24506 = state_24491;
(statearr_24506[(10)] = inst_24463__$1);

return statearr_24506;
})();
var statearr_24507_24525 = state_24491__$1;
(statearr_24507_24525[(2)] = null);

(statearr_24507_24525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___24515,out))
;
return ((function (switch__11098__auto__,c__11113__auto___24515,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_24511 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24511[(0)] = state_machine__11099__auto__);

(statearr_24511[(1)] = (1));

return statearr_24511;
});
var state_machine__11099__auto____1 = (function (state_24491){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e24512){if((e24512 instanceof Object)){
var ex__11102__auto__ = e24512;
var statearr_24513_24526 = state_24491;
(statearr_24513_24526[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24527 = state_24491;
state_24491 = G__24527;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24491){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___24515,out))
})();
var state__11115__auto__ = (function (){var statearr_24514 = f__11114__auto__.call(null);
(statearr_24514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___24515);

return statearr_24514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___24515,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
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
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11113__auto___24620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___24620,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___24620,out){
return (function (state_24597){
var state_val_24598 = (state_24597[(1)]);
if((state_val_24598 === (7))){
var inst_24579 = (state_24597[(7)]);
var inst_24579__$1 = (state_24597[(2)]);
var inst_24580 = (inst_24579__$1 == null);
var inst_24581 = cljs.core.not.call(null,inst_24580);
var state_24597__$1 = (function (){var statearr_24599 = state_24597;
(statearr_24599[(7)] = inst_24579__$1);

return statearr_24599;
})();
if(inst_24581){
var statearr_24600_24621 = state_24597__$1;
(statearr_24600_24621[(1)] = (8));

} else {
var statearr_24601_24622 = state_24597__$1;
(statearr_24601_24622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (1))){
var inst_24574 = (0);
var state_24597__$1 = (function (){var statearr_24602 = state_24597;
(statearr_24602[(8)] = inst_24574);

return statearr_24602;
})();
var statearr_24603_24623 = state_24597__$1;
(statearr_24603_24623[(2)] = null);

(statearr_24603_24623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (4))){
var state_24597__$1 = state_24597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24597__$1,(7),ch);
} else {
if((state_val_24598 === (6))){
var inst_24592 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
var statearr_24604_24624 = state_24597__$1;
(statearr_24604_24624[(2)] = inst_24592);

(statearr_24604_24624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (3))){
var inst_24594 = (state_24597[(2)]);
var inst_24595 = cljs.core.async.close_BANG_.call(null,out);
var state_24597__$1 = (function (){var statearr_24605 = state_24597;
(statearr_24605[(9)] = inst_24594);

return statearr_24605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24597__$1,inst_24595);
} else {
if((state_val_24598 === (2))){
var inst_24574 = (state_24597[(8)]);
var inst_24576 = (inst_24574 < n);
var state_24597__$1 = state_24597;
if(cljs.core.truth_(inst_24576)){
var statearr_24606_24625 = state_24597__$1;
(statearr_24606_24625[(1)] = (4));

} else {
var statearr_24607_24626 = state_24597__$1;
(statearr_24607_24626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (11))){
var inst_24574 = (state_24597[(8)]);
var inst_24584 = (state_24597[(2)]);
var inst_24585 = (inst_24574 + (1));
var inst_24574__$1 = inst_24585;
var state_24597__$1 = (function (){var statearr_24608 = state_24597;
(statearr_24608[(8)] = inst_24574__$1);

(statearr_24608[(10)] = inst_24584);

return statearr_24608;
})();
var statearr_24609_24627 = state_24597__$1;
(statearr_24609_24627[(2)] = null);

(statearr_24609_24627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (9))){
var state_24597__$1 = state_24597;
var statearr_24610_24628 = state_24597__$1;
(statearr_24610_24628[(2)] = null);

(statearr_24610_24628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (5))){
var state_24597__$1 = state_24597;
var statearr_24611_24629 = state_24597__$1;
(statearr_24611_24629[(2)] = null);

(statearr_24611_24629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (10))){
var inst_24589 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
var statearr_24612_24630 = state_24597__$1;
(statearr_24612_24630[(2)] = inst_24589);

(statearr_24612_24630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (8))){
var inst_24579 = (state_24597[(7)]);
var state_24597__$1 = state_24597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24597__$1,(11),out,inst_24579);
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
});})(c__11113__auto___24620,out))
;
return ((function (switch__11098__auto__,c__11113__auto___24620,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_24616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24616[(0)] = state_machine__11099__auto__);

(statearr_24616[(1)] = (1));

return statearr_24616;
});
var state_machine__11099__auto____1 = (function (state_24597){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e24617){if((e24617 instanceof Object)){
var ex__11102__auto__ = e24617;
var statearr_24618_24631 = state_24597;
(statearr_24618_24631[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24632 = state_24597;
state_24597 = G__24632;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24597){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___24620,out))
})();
var state__11115__auto__ = (function (){var statearr_24619 = f__11114__auto__.call(null);
(statearr_24619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___24620);

return statearr_24619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___24620,out))
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
if(typeof cljs.core.async.t24640 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24640 = (function (ch,f,map_LT_,meta24641){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24641 = meta24641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t24643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24643 = (function (fn1,_,meta24641,map_LT_,f,ch,meta24644){
this.fn1 = fn1;
this._ = _;
this.meta24641 = meta24641;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24644 = meta24644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24643.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t24643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24633_SHARP_){
return f1.call(null,(((p1__24633_SHARP_ == null))?null:self__.f.call(null,p1__24633_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24645){
var self__ = this;
var _24645__$1 = this;
return self__.meta24644;
});})(___$1))
;

cljs.core.async.t24643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24645,meta24644__$1){
var self__ = this;
var _24645__$1 = this;
return (new cljs.core.async.t24643(self__.fn1,self__._,self__.meta24641,self__.map_LT_,self__.f,self__.ch,meta24644__$1));
});})(___$1))
;

cljs.core.async.t24643.cljs$lang$type = true;

cljs.core.async.t24643.cljs$lang$ctorStr = "cljs.core.async/t24643";

cljs.core.async.t24643.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24643");
});})(___$1))
;

cljs.core.async.__GT_t24643 = ((function (___$1){
return (function __GT_t24643(fn1__$1,___$2,meta24641__$1,map_LT___$1,f__$1,ch__$1,meta24644){
return (new cljs.core.async.t24643(fn1__$1,___$2,meta24641__$1,map_LT___$1,f__$1,ch__$1,meta24644));
});})(___$1))
;

}

return (new cljs.core.async.t24643(fn1,___$1,self__.meta24641,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3626__auto__ = ret;
if(cljs.core.truth_(and__3626__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3626__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24642){
var self__ = this;
var _24642__$1 = this;
return self__.meta24641;
});

cljs.core.async.t24640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24642,meta24641__$1){
var self__ = this;
var _24642__$1 = this;
return (new cljs.core.async.t24640(self__.ch,self__.f,self__.map_LT_,meta24641__$1));
});

cljs.core.async.t24640.cljs$lang$type = true;

cljs.core.async.t24640.cljs$lang$ctorStr = "cljs.core.async/t24640";

cljs.core.async.t24640.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24640");
});

cljs.core.async.__GT_t24640 = (function __GT_t24640(ch__$1,f__$1,map_LT___$1,meta24641){
return (new cljs.core.async.t24640(ch__$1,f__$1,map_LT___$1,meta24641));
});

}

return (new cljs.core.async.t24640(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t24649 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24649 = (function (ch,f,map_GT_,meta24650){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24650 = meta24650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24651){
var self__ = this;
var _24651__$1 = this;
return self__.meta24650;
});

cljs.core.async.t24649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24651,meta24650__$1){
var self__ = this;
var _24651__$1 = this;
return (new cljs.core.async.t24649(self__.ch,self__.f,self__.map_GT_,meta24650__$1));
});

cljs.core.async.t24649.cljs$lang$type = true;

cljs.core.async.t24649.cljs$lang$ctorStr = "cljs.core.async/t24649";

cljs.core.async.t24649.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24649");
});

cljs.core.async.__GT_t24649 = (function __GT_t24649(ch__$1,f__$1,map_GT___$1,meta24650){
return (new cljs.core.async.t24649(ch__$1,f__$1,map_GT___$1,meta24650));
});

}

return (new cljs.core.async.t24649(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t24655 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24655 = (function (ch,p,filter_GT_,meta24656){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24656 = meta24656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24655.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24657){
var self__ = this;
var _24657__$1 = this;
return self__.meta24656;
});

cljs.core.async.t24655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24657,meta24656__$1){
var self__ = this;
var _24657__$1 = this;
return (new cljs.core.async.t24655(self__.ch,self__.p,self__.filter_GT_,meta24656__$1));
});

cljs.core.async.t24655.cljs$lang$type = true;

cljs.core.async.t24655.cljs$lang$ctorStr = "cljs.core.async/t24655";

cljs.core.async.t24655.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t24655");
});

cljs.core.async.__GT_t24655 = (function __GT_t24655(ch__$1,p__$1,filter_GT___$1,meta24656){
return (new cljs.core.async.t24655(ch__$1,p__$1,filter_GT___$1,meta24656));
});

}

return (new cljs.core.async.t24655(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11113__auto___24740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___24740,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___24740,out){
return (function (state_24719){
var state_val_24720 = (state_24719[(1)]);
if((state_val_24720 === (7))){
var inst_24715 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24721_24741 = state_24719__$1;
(statearr_24721_24741[(2)] = inst_24715);

(statearr_24721_24741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (1))){
var state_24719__$1 = state_24719;
var statearr_24722_24742 = state_24719__$1;
(statearr_24722_24742[(2)] = null);

(statearr_24722_24742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (4))){
var inst_24701 = (state_24719[(7)]);
var inst_24701__$1 = (state_24719[(2)]);
var inst_24702 = (inst_24701__$1 == null);
var state_24719__$1 = (function (){var statearr_24723 = state_24719;
(statearr_24723[(7)] = inst_24701__$1);

return statearr_24723;
})();
if(cljs.core.truth_(inst_24702)){
var statearr_24724_24743 = state_24719__$1;
(statearr_24724_24743[(1)] = (5));

} else {
var statearr_24725_24744 = state_24719__$1;
(statearr_24725_24744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (6))){
var inst_24701 = (state_24719[(7)]);
var inst_24706 = p.call(null,inst_24701);
var state_24719__$1 = state_24719;
if(cljs.core.truth_(inst_24706)){
var statearr_24726_24745 = state_24719__$1;
(statearr_24726_24745[(1)] = (8));

} else {
var statearr_24727_24746 = state_24719__$1;
(statearr_24727_24746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (3))){
var inst_24717 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24719__$1,inst_24717);
} else {
if((state_val_24720 === (2))){
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24719__$1,(4),ch);
} else {
if((state_val_24720 === (11))){
var inst_24709 = (state_24719[(2)]);
var state_24719__$1 = state_24719;
var statearr_24728_24747 = state_24719__$1;
(statearr_24728_24747[(2)] = inst_24709);

(statearr_24728_24747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (9))){
var state_24719__$1 = state_24719;
var statearr_24729_24748 = state_24719__$1;
(statearr_24729_24748[(2)] = null);

(statearr_24729_24748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (5))){
var inst_24704 = cljs.core.async.close_BANG_.call(null,out);
var state_24719__$1 = state_24719;
var statearr_24730_24749 = state_24719__$1;
(statearr_24730_24749[(2)] = inst_24704);

(statearr_24730_24749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (10))){
var inst_24712 = (state_24719[(2)]);
var state_24719__$1 = (function (){var statearr_24731 = state_24719;
(statearr_24731[(8)] = inst_24712);

return statearr_24731;
})();
var statearr_24732_24750 = state_24719__$1;
(statearr_24732_24750[(2)] = null);

(statearr_24732_24750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24720 === (8))){
var inst_24701 = (state_24719[(7)]);
var state_24719__$1 = state_24719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24719__$1,(11),out,inst_24701);
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
});})(c__11113__auto___24740,out))
;
return ((function (switch__11098__auto__,c__11113__auto___24740,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_24736 = [null,null,null,null,null,null,null,null,null];
(statearr_24736[(0)] = state_machine__11099__auto__);

(statearr_24736[(1)] = (1));

return statearr_24736;
});
var state_machine__11099__auto____1 = (function (state_24719){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e24737){if((e24737 instanceof Object)){
var ex__11102__auto__ = e24737;
var statearr_24738_24751 = state_24719;
(statearr_24738_24751[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24752 = state_24719;
state_24719 = G__24752;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24719){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___24740,out))
})();
var state__11115__auto__ = (function (){var statearr_24739 = f__11114__auto__.call(null);
(statearr_24739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___24740);

return statearr_24739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___24740,out))
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
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
var c__11113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto__){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto__){
return (function (state_24918){
var state_val_24919 = (state_24918[(1)]);
if((state_val_24919 === (7))){
var inst_24914 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24920_24961 = state_24918__$1;
(statearr_24920_24961[(2)] = inst_24914);

(statearr_24920_24961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (20))){
var inst_24884 = (state_24918[(7)]);
var inst_24895 = (state_24918[(2)]);
var inst_24896 = cljs.core.next.call(null,inst_24884);
var inst_24870 = inst_24896;
var inst_24871 = null;
var inst_24872 = (0);
var inst_24873 = (0);
var state_24918__$1 = (function (){var statearr_24921 = state_24918;
(statearr_24921[(8)] = inst_24872);

(statearr_24921[(9)] = inst_24873);

(statearr_24921[(10)] = inst_24870);

(statearr_24921[(11)] = inst_24895);

(statearr_24921[(12)] = inst_24871);

return statearr_24921;
})();
var statearr_24922_24962 = state_24918__$1;
(statearr_24922_24962[(2)] = null);

(statearr_24922_24962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (1))){
var state_24918__$1 = state_24918;
var statearr_24923_24963 = state_24918__$1;
(statearr_24923_24963[(2)] = null);

(statearr_24923_24963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (4))){
var inst_24859 = (state_24918[(13)]);
var inst_24859__$1 = (state_24918[(2)]);
var inst_24860 = (inst_24859__$1 == null);
var state_24918__$1 = (function (){var statearr_24924 = state_24918;
(statearr_24924[(13)] = inst_24859__$1);

return statearr_24924;
})();
if(cljs.core.truth_(inst_24860)){
var statearr_24925_24964 = state_24918__$1;
(statearr_24925_24964[(1)] = (5));

} else {
var statearr_24926_24965 = state_24918__$1;
(statearr_24926_24965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (15))){
var state_24918__$1 = state_24918;
var statearr_24930_24966 = state_24918__$1;
(statearr_24930_24966[(2)] = null);

(statearr_24930_24966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (21))){
var state_24918__$1 = state_24918;
var statearr_24931_24967 = state_24918__$1;
(statearr_24931_24967[(2)] = null);

(statearr_24931_24967[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (13))){
var inst_24872 = (state_24918[(8)]);
var inst_24873 = (state_24918[(9)]);
var inst_24870 = (state_24918[(10)]);
var inst_24871 = (state_24918[(12)]);
var inst_24880 = (state_24918[(2)]);
var inst_24881 = (inst_24873 + (1));
var tmp24927 = inst_24872;
var tmp24928 = inst_24870;
var tmp24929 = inst_24871;
var inst_24870__$1 = tmp24928;
var inst_24871__$1 = tmp24929;
var inst_24872__$1 = tmp24927;
var inst_24873__$1 = inst_24881;
var state_24918__$1 = (function (){var statearr_24932 = state_24918;
(statearr_24932[(8)] = inst_24872__$1);

(statearr_24932[(9)] = inst_24873__$1);

(statearr_24932[(10)] = inst_24870__$1);

(statearr_24932[(14)] = inst_24880);

(statearr_24932[(12)] = inst_24871__$1);

return statearr_24932;
})();
var statearr_24933_24968 = state_24918__$1;
(statearr_24933_24968[(2)] = null);

(statearr_24933_24968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (22))){
var state_24918__$1 = state_24918;
var statearr_24934_24969 = state_24918__$1;
(statearr_24934_24969[(2)] = null);

(statearr_24934_24969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (6))){
var inst_24859 = (state_24918[(13)]);
var inst_24868 = f.call(null,inst_24859);
var inst_24869 = cljs.core.seq.call(null,inst_24868);
var inst_24870 = inst_24869;
var inst_24871 = null;
var inst_24872 = (0);
var inst_24873 = (0);
var state_24918__$1 = (function (){var statearr_24935 = state_24918;
(statearr_24935[(8)] = inst_24872);

(statearr_24935[(9)] = inst_24873);

(statearr_24935[(10)] = inst_24870);

(statearr_24935[(12)] = inst_24871);

return statearr_24935;
})();
var statearr_24936_24970 = state_24918__$1;
(statearr_24936_24970[(2)] = null);

(statearr_24936_24970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (17))){
var inst_24884 = (state_24918[(7)]);
var inst_24888 = cljs.core.chunk_first.call(null,inst_24884);
var inst_24889 = cljs.core.chunk_rest.call(null,inst_24884);
var inst_24890 = cljs.core.count.call(null,inst_24888);
var inst_24870 = inst_24889;
var inst_24871 = inst_24888;
var inst_24872 = inst_24890;
var inst_24873 = (0);
var state_24918__$1 = (function (){var statearr_24937 = state_24918;
(statearr_24937[(8)] = inst_24872);

(statearr_24937[(9)] = inst_24873);

(statearr_24937[(10)] = inst_24870);

(statearr_24937[(12)] = inst_24871);

return statearr_24937;
})();
var statearr_24938_24971 = state_24918__$1;
(statearr_24938_24971[(2)] = null);

(statearr_24938_24971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (3))){
var inst_24916 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24918__$1,inst_24916);
} else {
if((state_val_24919 === (12))){
var inst_24904 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24939_24972 = state_24918__$1;
(statearr_24939_24972[(2)] = inst_24904);

(statearr_24939_24972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (2))){
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24918__$1,(4),in$);
} else {
if((state_val_24919 === (23))){
var inst_24912 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24940_24973 = state_24918__$1;
(statearr_24940_24973[(2)] = inst_24912);

(statearr_24940_24973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (19))){
var inst_24899 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24941_24974 = state_24918__$1;
(statearr_24941_24974[(2)] = inst_24899);

(statearr_24941_24974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (11))){
var inst_24870 = (state_24918[(10)]);
var inst_24884 = (state_24918[(7)]);
var inst_24884__$1 = cljs.core.seq.call(null,inst_24870);
var state_24918__$1 = (function (){var statearr_24942 = state_24918;
(statearr_24942[(7)] = inst_24884__$1);

return statearr_24942;
})();
if(inst_24884__$1){
var statearr_24943_24975 = state_24918__$1;
(statearr_24943_24975[(1)] = (14));

} else {
var statearr_24944_24976 = state_24918__$1;
(statearr_24944_24976[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (9))){
var inst_24906 = (state_24918[(2)]);
var inst_24907 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24918__$1 = (function (){var statearr_24945 = state_24918;
(statearr_24945[(15)] = inst_24906);

return statearr_24945;
})();
if(cljs.core.truth_(inst_24907)){
var statearr_24946_24977 = state_24918__$1;
(statearr_24946_24977[(1)] = (21));

} else {
var statearr_24947_24978 = state_24918__$1;
(statearr_24947_24978[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (5))){
var inst_24862 = cljs.core.async.close_BANG_.call(null,out);
var state_24918__$1 = state_24918;
var statearr_24948_24979 = state_24918__$1;
(statearr_24948_24979[(2)] = inst_24862);

(statearr_24948_24979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (14))){
var inst_24884 = (state_24918[(7)]);
var inst_24886 = cljs.core.chunked_seq_QMARK_.call(null,inst_24884);
var state_24918__$1 = state_24918;
if(inst_24886){
var statearr_24949_24980 = state_24918__$1;
(statearr_24949_24980[(1)] = (17));

} else {
var statearr_24950_24981 = state_24918__$1;
(statearr_24950_24981[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (16))){
var inst_24902 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24951_24982 = state_24918__$1;
(statearr_24951_24982[(2)] = inst_24902);

(statearr_24951_24982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (10))){
var inst_24873 = (state_24918[(9)]);
var inst_24871 = (state_24918[(12)]);
var inst_24878 = cljs.core._nth.call(null,inst_24871,inst_24873);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24918__$1,(13),out,inst_24878);
} else {
if((state_val_24919 === (18))){
var inst_24884 = (state_24918[(7)]);
var inst_24893 = cljs.core.first.call(null,inst_24884);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24918__$1,(20),out,inst_24893);
} else {
if((state_val_24919 === (8))){
var inst_24872 = (state_24918[(8)]);
var inst_24873 = (state_24918[(9)]);
var inst_24875 = (inst_24873 < inst_24872);
var inst_24876 = inst_24875;
var state_24918__$1 = state_24918;
if(cljs.core.truth_(inst_24876)){
var statearr_24952_24983 = state_24918__$1;
(statearr_24952_24983[(1)] = (10));

} else {
var statearr_24953_24984 = state_24918__$1;
(statearr_24953_24984[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto__))
;
return ((function (switch__11098__auto__,c__11113__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_24957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24957[(0)] = state_machine__11099__auto__);

(statearr_24957[(1)] = (1));

return statearr_24957;
});
var state_machine__11099__auto____1 = (function (state_24918){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e24958){if((e24958 instanceof Object)){
var ex__11102__auto__ = e24958;
var statearr_24959_24985 = state_24918;
(statearr_24959_24985[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24986 = state_24918;
state_24918 = G__24986;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24918){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__))
})();
var state__11115__auto__ = (function (){var statearr_24960 = f__11114__auto__.call(null);
(statearr_24960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_24960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto__))
);

return c__11113__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11113__auto___25083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___25083,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___25083,out){
return (function (state_25058){
var state_val_25059 = (state_25058[(1)]);
if((state_val_25059 === (7))){
var inst_25053 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25060_25084 = state_25058__$1;
(statearr_25060_25084[(2)] = inst_25053);

(statearr_25060_25084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (1))){
var inst_25035 = null;
var state_25058__$1 = (function (){var statearr_25061 = state_25058;
(statearr_25061[(7)] = inst_25035);

return statearr_25061;
})();
var statearr_25062_25085 = state_25058__$1;
(statearr_25062_25085[(2)] = null);

(statearr_25062_25085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (4))){
var inst_25038 = (state_25058[(8)]);
var inst_25038__$1 = (state_25058[(2)]);
var inst_25039 = (inst_25038__$1 == null);
var inst_25040 = cljs.core.not.call(null,inst_25039);
var state_25058__$1 = (function (){var statearr_25063 = state_25058;
(statearr_25063[(8)] = inst_25038__$1);

return statearr_25063;
})();
if(inst_25040){
var statearr_25064_25086 = state_25058__$1;
(statearr_25064_25086[(1)] = (5));

} else {
var statearr_25065_25087 = state_25058__$1;
(statearr_25065_25087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (6))){
var state_25058__$1 = state_25058;
var statearr_25066_25088 = state_25058__$1;
(statearr_25066_25088[(2)] = null);

(statearr_25066_25088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (3))){
var inst_25055 = (state_25058[(2)]);
var inst_25056 = cljs.core.async.close_BANG_.call(null,out);
var state_25058__$1 = (function (){var statearr_25067 = state_25058;
(statearr_25067[(9)] = inst_25055);

return statearr_25067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25058__$1,inst_25056);
} else {
if((state_val_25059 === (2))){
var state_25058__$1 = state_25058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25058__$1,(4),ch);
} else {
if((state_val_25059 === (11))){
var inst_25038 = (state_25058[(8)]);
var inst_25047 = (state_25058[(2)]);
var inst_25035 = inst_25038;
var state_25058__$1 = (function (){var statearr_25068 = state_25058;
(statearr_25068[(10)] = inst_25047);

(statearr_25068[(7)] = inst_25035);

return statearr_25068;
})();
var statearr_25069_25089 = state_25058__$1;
(statearr_25069_25089[(2)] = null);

(statearr_25069_25089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (9))){
var inst_25038 = (state_25058[(8)]);
var state_25058__$1 = state_25058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25058__$1,(11),out,inst_25038);
} else {
if((state_val_25059 === (5))){
var inst_25035 = (state_25058[(7)]);
var inst_25038 = (state_25058[(8)]);
var inst_25042 = cljs.core._EQ_.call(null,inst_25038,inst_25035);
var state_25058__$1 = state_25058;
if(inst_25042){
var statearr_25071_25090 = state_25058__$1;
(statearr_25071_25090[(1)] = (8));

} else {
var statearr_25072_25091 = state_25058__$1;
(statearr_25072_25091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (10))){
var inst_25050 = (state_25058[(2)]);
var state_25058__$1 = state_25058;
var statearr_25073_25092 = state_25058__$1;
(statearr_25073_25092[(2)] = inst_25050);

(statearr_25073_25092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25059 === (8))){
var inst_25035 = (state_25058[(7)]);
var tmp25070 = inst_25035;
var inst_25035__$1 = tmp25070;
var state_25058__$1 = (function (){var statearr_25074 = state_25058;
(statearr_25074[(7)] = inst_25035__$1);

return statearr_25074;
})();
var statearr_25075_25093 = state_25058__$1;
(statearr_25075_25093[(2)] = null);

(statearr_25075_25093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___25083,out))
;
return ((function (switch__11098__auto__,c__11113__auto___25083,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_25079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25079[(0)] = state_machine__11099__auto__);

(statearr_25079[(1)] = (1));

return statearr_25079;
});
var state_machine__11099__auto____1 = (function (state_25058){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e25080){if((e25080 instanceof Object)){
var ex__11102__auto__ = e25080;
var statearr_25081_25094 = state_25058;
(statearr_25081_25094[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25095 = state_25058;
state_25058 = G__25095;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25058){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___25083,out))
})();
var state__11115__auto__ = (function (){var statearr_25082 = f__11114__auto__.call(null);
(statearr_25082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___25083);

return statearr_25082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___25083,out))
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
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11113__auto___25230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___25230,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___25230,out){
return (function (state_25200){
var state_val_25201 = (state_25200[(1)]);
if((state_val_25201 === (7))){
var inst_25196 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25202_25231 = state_25200__$1;
(statearr_25202_25231[(2)] = inst_25196);

(statearr_25202_25231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (1))){
var inst_25163 = (new Array(n));
var inst_25164 = inst_25163;
var inst_25165 = (0);
var state_25200__$1 = (function (){var statearr_25203 = state_25200;
(statearr_25203[(7)] = inst_25165);

(statearr_25203[(8)] = inst_25164);

return statearr_25203;
})();
var statearr_25204_25232 = state_25200__$1;
(statearr_25204_25232[(2)] = null);

(statearr_25204_25232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (4))){
var inst_25168 = (state_25200[(9)]);
var inst_25168__$1 = (state_25200[(2)]);
var inst_25169 = (inst_25168__$1 == null);
var inst_25170 = cljs.core.not.call(null,inst_25169);
var state_25200__$1 = (function (){var statearr_25205 = state_25200;
(statearr_25205[(9)] = inst_25168__$1);

return statearr_25205;
})();
if(inst_25170){
var statearr_25206_25233 = state_25200__$1;
(statearr_25206_25233[(1)] = (5));

} else {
var statearr_25207_25234 = state_25200__$1;
(statearr_25207_25234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (15))){
var inst_25190 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25208_25235 = state_25200__$1;
(statearr_25208_25235[(2)] = inst_25190);

(statearr_25208_25235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (13))){
var state_25200__$1 = state_25200;
var statearr_25209_25236 = state_25200__$1;
(statearr_25209_25236[(2)] = null);

(statearr_25209_25236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (6))){
var inst_25165 = (state_25200[(7)]);
var inst_25186 = (inst_25165 > (0));
var state_25200__$1 = state_25200;
if(cljs.core.truth_(inst_25186)){
var statearr_25210_25237 = state_25200__$1;
(statearr_25210_25237[(1)] = (12));

} else {
var statearr_25211_25238 = state_25200__$1;
(statearr_25211_25238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (3))){
var inst_25198 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25200__$1,inst_25198);
} else {
if((state_val_25201 === (12))){
var inst_25164 = (state_25200[(8)]);
var inst_25188 = cljs.core.vec.call(null,inst_25164);
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25200__$1,(15),out,inst_25188);
} else {
if((state_val_25201 === (2))){
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25200__$1,(4),ch);
} else {
if((state_val_25201 === (11))){
var inst_25180 = (state_25200[(2)]);
var inst_25181 = (new Array(n));
var inst_25164 = inst_25181;
var inst_25165 = (0);
var state_25200__$1 = (function (){var statearr_25212 = state_25200;
(statearr_25212[(7)] = inst_25165);

(statearr_25212[(8)] = inst_25164);

(statearr_25212[(10)] = inst_25180);

return statearr_25212;
})();
var statearr_25213_25239 = state_25200__$1;
(statearr_25213_25239[(2)] = null);

(statearr_25213_25239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (9))){
var inst_25164 = (state_25200[(8)]);
var inst_25178 = cljs.core.vec.call(null,inst_25164);
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25200__$1,(11),out,inst_25178);
} else {
if((state_val_25201 === (5))){
var inst_25165 = (state_25200[(7)]);
var inst_25173 = (state_25200[(11)]);
var inst_25168 = (state_25200[(9)]);
var inst_25164 = (state_25200[(8)]);
var inst_25172 = (inst_25164[inst_25165] = inst_25168);
var inst_25173__$1 = (inst_25165 + (1));
var inst_25174 = (inst_25173__$1 < n);
var state_25200__$1 = (function (){var statearr_25214 = state_25200;
(statearr_25214[(11)] = inst_25173__$1);

(statearr_25214[(12)] = inst_25172);

return statearr_25214;
})();
if(cljs.core.truth_(inst_25174)){
var statearr_25215_25240 = state_25200__$1;
(statearr_25215_25240[(1)] = (8));

} else {
var statearr_25216_25241 = state_25200__$1;
(statearr_25216_25241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (14))){
var inst_25193 = (state_25200[(2)]);
var inst_25194 = cljs.core.async.close_BANG_.call(null,out);
var state_25200__$1 = (function (){var statearr_25218 = state_25200;
(statearr_25218[(13)] = inst_25193);

return statearr_25218;
})();
var statearr_25219_25242 = state_25200__$1;
(statearr_25219_25242[(2)] = inst_25194);

(statearr_25219_25242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (10))){
var inst_25184 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25220_25243 = state_25200__$1;
(statearr_25220_25243[(2)] = inst_25184);

(statearr_25220_25243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (8))){
var inst_25173 = (state_25200[(11)]);
var inst_25164 = (state_25200[(8)]);
var tmp25217 = inst_25164;
var inst_25164__$1 = tmp25217;
var inst_25165 = inst_25173;
var state_25200__$1 = (function (){var statearr_25221 = state_25200;
(statearr_25221[(7)] = inst_25165);

(statearr_25221[(8)] = inst_25164__$1);

return statearr_25221;
})();
var statearr_25222_25244 = state_25200__$1;
(statearr_25222_25244[(2)] = null);

(statearr_25222_25244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___25230,out))
;
return ((function (switch__11098__auto__,c__11113__auto___25230,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25226[(0)] = state_machine__11099__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var state_machine__11099__auto____1 = (function (state_25200){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__11102__auto__ = e25227;
var statearr_25228_25245 = state_25200;
(statearr_25228_25245[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25246 = state_25200;
state_25200 = G__25246;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25200){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___25230,out))
})();
var state__11115__auto__ = (function (){var statearr_25229 = f__11114__auto__.call(null);
(statearr_25229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___25230);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___25230,out))
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
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11113__auto___25389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___25389,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___25389,out){
return (function (state_25359){
var state_val_25360 = (state_25359[(1)]);
if((state_val_25360 === (7))){
var inst_25355 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25361_25390 = state_25359__$1;
(statearr_25361_25390[(2)] = inst_25355);

(statearr_25361_25390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (1))){
var inst_25318 = [];
var inst_25319 = inst_25318;
var inst_25320 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25359__$1 = (function (){var statearr_25362 = state_25359;
(statearr_25362[(7)] = inst_25320);

(statearr_25362[(8)] = inst_25319);

return statearr_25362;
})();
var statearr_25363_25391 = state_25359__$1;
(statearr_25363_25391[(2)] = null);

(statearr_25363_25391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (4))){
var inst_25323 = (state_25359[(9)]);
var inst_25323__$1 = (state_25359[(2)]);
var inst_25324 = (inst_25323__$1 == null);
var inst_25325 = cljs.core.not.call(null,inst_25324);
var state_25359__$1 = (function (){var statearr_25364 = state_25359;
(statearr_25364[(9)] = inst_25323__$1);

return statearr_25364;
})();
if(inst_25325){
var statearr_25365_25392 = state_25359__$1;
(statearr_25365_25392[(1)] = (5));

} else {
var statearr_25366_25393 = state_25359__$1;
(statearr_25366_25393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (15))){
var inst_25349 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25367_25394 = state_25359__$1;
(statearr_25367_25394[(2)] = inst_25349);

(statearr_25367_25394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (13))){
var state_25359__$1 = state_25359;
var statearr_25368_25395 = state_25359__$1;
(statearr_25368_25395[(2)] = null);

(statearr_25368_25395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (6))){
var inst_25319 = (state_25359[(8)]);
var inst_25344 = inst_25319.length;
var inst_25345 = (inst_25344 > (0));
var state_25359__$1 = state_25359;
if(cljs.core.truth_(inst_25345)){
var statearr_25369_25396 = state_25359__$1;
(statearr_25369_25396[(1)] = (12));

} else {
var statearr_25370_25397 = state_25359__$1;
(statearr_25370_25397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (3))){
var inst_25357 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25359__$1,inst_25357);
} else {
if((state_val_25360 === (12))){
var inst_25319 = (state_25359[(8)]);
var inst_25347 = cljs.core.vec.call(null,inst_25319);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25359__$1,(15),out,inst_25347);
} else {
if((state_val_25360 === (2))){
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25359__$1,(4),ch);
} else {
if((state_val_25360 === (11))){
var inst_25327 = (state_25359[(10)]);
var inst_25323 = (state_25359[(9)]);
var inst_25337 = (state_25359[(2)]);
var inst_25338 = [];
var inst_25339 = inst_25338.push(inst_25323);
var inst_25319 = inst_25338;
var inst_25320 = inst_25327;
var state_25359__$1 = (function (){var statearr_25371 = state_25359;
(statearr_25371[(7)] = inst_25320);

(statearr_25371[(11)] = inst_25339);

(statearr_25371[(12)] = inst_25337);

(statearr_25371[(8)] = inst_25319);

return statearr_25371;
})();
var statearr_25372_25398 = state_25359__$1;
(statearr_25372_25398[(2)] = null);

(statearr_25372_25398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (9))){
var inst_25319 = (state_25359[(8)]);
var inst_25335 = cljs.core.vec.call(null,inst_25319);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25359__$1,(11),out,inst_25335);
} else {
if((state_val_25360 === (5))){
var inst_25320 = (state_25359[(7)]);
var inst_25327 = (state_25359[(10)]);
var inst_25323 = (state_25359[(9)]);
var inst_25327__$1 = f.call(null,inst_25323);
var inst_25328 = cljs.core._EQ_.call(null,inst_25327__$1,inst_25320);
var inst_25329 = cljs.core.keyword_identical_QMARK_.call(null,inst_25320,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25330 = (inst_25328) || (inst_25329);
var state_25359__$1 = (function (){var statearr_25373 = state_25359;
(statearr_25373[(10)] = inst_25327__$1);

return statearr_25373;
})();
if(cljs.core.truth_(inst_25330)){
var statearr_25374_25399 = state_25359__$1;
(statearr_25374_25399[(1)] = (8));

} else {
var statearr_25375_25400 = state_25359__$1;
(statearr_25375_25400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (14))){
var inst_25352 = (state_25359[(2)]);
var inst_25353 = cljs.core.async.close_BANG_.call(null,out);
var state_25359__$1 = (function (){var statearr_25377 = state_25359;
(statearr_25377[(13)] = inst_25352);

return statearr_25377;
})();
var statearr_25378_25401 = state_25359__$1;
(statearr_25378_25401[(2)] = inst_25353);

(statearr_25378_25401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (10))){
var inst_25342 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25379_25402 = state_25359__$1;
(statearr_25379_25402[(2)] = inst_25342);

(statearr_25379_25402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (8))){
var inst_25319 = (state_25359[(8)]);
var inst_25327 = (state_25359[(10)]);
var inst_25323 = (state_25359[(9)]);
var inst_25332 = inst_25319.push(inst_25323);
var tmp25376 = inst_25319;
var inst_25319__$1 = tmp25376;
var inst_25320 = inst_25327;
var state_25359__$1 = (function (){var statearr_25380 = state_25359;
(statearr_25380[(7)] = inst_25320);

(statearr_25380[(14)] = inst_25332);

(statearr_25380[(8)] = inst_25319__$1);

return statearr_25380;
})();
var statearr_25381_25403 = state_25359__$1;
(statearr_25381_25403[(2)] = null);

(statearr_25381_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__11113__auto___25389,out))
;
return ((function (switch__11098__auto__,c__11113__auto___25389,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_25385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25385[(0)] = state_machine__11099__auto__);

(statearr_25385[(1)] = (1));

return statearr_25385;
});
var state_machine__11099__auto____1 = (function (state_25359){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_25359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e25386){if((e25386 instanceof Object)){
var ex__11102__auto__ = e25386;
var statearr_25387_25404 = state_25359;
(statearr_25387_25404[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25405 = state_25359;
state_25359 = G__25405;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_25359){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_25359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___25389,out))
})();
var state__11115__auto__ = (function (){var statearr_25388 = f__11114__auto__.call(null);
(statearr_25388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___25389);

return statearr_25388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___25389,out))
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
