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
if(typeof cljs.core.async.t17574 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17574 = (function (f,fn_handler,meta17575){
this.f = f;
this.fn_handler = fn_handler;
this.meta17575 = meta17575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17574.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17576){
var self__ = this;
var _17576__$1 = this;
return self__.meta17575;
});

cljs.core.async.t17574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17576,meta17575__$1){
var self__ = this;
var _17576__$1 = this;
return (new cljs.core.async.t17574(self__.f,self__.fn_handler,meta17575__$1));
});

cljs.core.async.t17574.cljs$lang$type = true;

cljs.core.async.t17574.cljs$lang$ctorStr = "cljs.core.async/t17574";

cljs.core.async.t17574.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t17574");
});

cljs.core.async.__GT_t17574 = (function __GT_t17574(f__$1,fn_handler__$1,meta17575){
return (new cljs.core.async.t17574(f__$1,fn_handler__$1,meta17575));
});

}

return (new cljs.core.async.t17574(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
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
var G__17578 = buff;
if(G__17578){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__17578.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17578.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17578);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17578);
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
var val_17579 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17579);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17579,ret){
return (function (){
return fn1.call(null,val_17579);
});})(val_17579,ret))
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
var n__4523__auto___17580 = n;
var x_17581 = (0);
while(true){
if((x_17581 < n__4523__auto___17580)){
(a[x_17581] = (0));

var G__17582 = (x_17581 + (1));
x_17581 = G__17582;
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

var G__17583 = (i + (1));
i = G__17583;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17587 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17587 = (function (flag,alt_flag,meta17588){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17588 = meta17588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17587.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17589){
var self__ = this;
var _17589__$1 = this;
return self__.meta17588;
});})(flag))
;

cljs.core.async.t17587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17589,meta17588__$1){
var self__ = this;
var _17589__$1 = this;
return (new cljs.core.async.t17587(self__.flag,self__.alt_flag,meta17588__$1));
});})(flag))
;

cljs.core.async.t17587.cljs$lang$type = true;

cljs.core.async.t17587.cljs$lang$ctorStr = "cljs.core.async/t17587";

cljs.core.async.t17587.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t17587");
});})(flag))
;

cljs.core.async.__GT_t17587 = ((function (flag){
return (function __GT_t17587(flag__$1,alt_flag__$1,meta17588){
return (new cljs.core.async.t17587(flag__$1,alt_flag__$1,meta17588));
});})(flag))
;

}

return (new cljs.core.async.t17587(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17593 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17593 = (function (cb,flag,alt_handler,meta17594){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17594 = meta17594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17593.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17595){
var self__ = this;
var _17595__$1 = this;
return self__.meta17594;
});

cljs.core.async.t17593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17595,meta17594__$1){
var self__ = this;
var _17595__$1 = this;
return (new cljs.core.async.t17593(self__.cb,self__.flag,self__.alt_handler,meta17594__$1));
});

cljs.core.async.t17593.cljs$lang$type = true;

cljs.core.async.t17593.cljs$lang$ctorStr = "cljs.core.async/t17593";

cljs.core.async.t17593.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t17593");
});

cljs.core.async.__GT_t17593 = (function __GT_t17593(cb__$1,flag__$1,alt_handler__$1,meta17594){
return (new cljs.core.async.t17593(cb__$1,flag__$1,alt_handler__$1,meta17594));
});

}

return (new cljs.core.async.t17593(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
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
return (function (p1__17596_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17596_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17597_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17597_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3636__auto__ = wport;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17598 = (i + (1));
i = G__17598;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3624__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3624__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3624__auto__;
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
var alts_BANG___delegate = function (ports,p__17599){
var map__17601 = p__17599;
var map__17601__$1 = ((cljs.core.seq_QMARK_.call(null,map__17601))?cljs.core.apply.call(null,cljs.core.hash_map,map__17601):map__17601);
var opts = map__17601__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17599 = null;
if (arguments.length > 1) {
  p__17599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__17599);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17602){
var ports = cljs.core.first(arglist__17602);
var p__17599 = cljs.core.rest(arglist__17602);
return alts_BANG___delegate(ports,p__17599);
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
var c__11828__auto___17697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___17697){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___17697){
return (function (state_17673){
var state_val_17674 = (state_17673[(1)]);
if((state_val_17674 === (7))){
var inst_17669 = (state_17673[(2)]);
var state_17673__$1 = state_17673;
var statearr_17675_17698 = state_17673__$1;
(statearr_17675_17698[(2)] = inst_17669);

(statearr_17675_17698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (1))){
var state_17673__$1 = state_17673;
var statearr_17676_17699 = state_17673__$1;
(statearr_17676_17699[(2)] = null);

(statearr_17676_17699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (4))){
var inst_17652 = (state_17673[(7)]);
var inst_17652__$1 = (state_17673[(2)]);
var inst_17653 = (inst_17652__$1 == null);
var state_17673__$1 = (function (){var statearr_17677 = state_17673;
(statearr_17677[(7)] = inst_17652__$1);

return statearr_17677;
})();
if(cljs.core.truth_(inst_17653)){
var statearr_17678_17700 = state_17673__$1;
(statearr_17678_17700[(1)] = (5));

} else {
var statearr_17679_17701 = state_17673__$1;
(statearr_17679_17701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (13))){
var state_17673__$1 = state_17673;
var statearr_17680_17702 = state_17673__$1;
(statearr_17680_17702[(2)] = null);

(statearr_17680_17702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (6))){
var inst_17652 = (state_17673[(7)]);
var state_17673__$1 = state_17673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17673__$1,(11),to,inst_17652);
} else {
if((state_val_17674 === (3))){
var inst_17671 = (state_17673[(2)]);
var state_17673__$1 = state_17673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17673__$1,inst_17671);
} else {
if((state_val_17674 === (12))){
var state_17673__$1 = state_17673;
var statearr_17681_17703 = state_17673__$1;
(statearr_17681_17703[(2)] = null);

(statearr_17681_17703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (2))){
var state_17673__$1 = state_17673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17673__$1,(4),from);
} else {
if((state_val_17674 === (11))){
var inst_17662 = (state_17673[(2)]);
var state_17673__$1 = state_17673;
if(cljs.core.truth_(inst_17662)){
var statearr_17682_17704 = state_17673__$1;
(statearr_17682_17704[(1)] = (12));

} else {
var statearr_17683_17705 = state_17673__$1;
(statearr_17683_17705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (9))){
var state_17673__$1 = state_17673;
var statearr_17684_17706 = state_17673__$1;
(statearr_17684_17706[(2)] = null);

(statearr_17684_17706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (5))){
var state_17673__$1 = state_17673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17685_17707 = state_17673__$1;
(statearr_17685_17707[(1)] = (8));

} else {
var statearr_17686_17708 = state_17673__$1;
(statearr_17686_17708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (14))){
var inst_17667 = (state_17673[(2)]);
var state_17673__$1 = state_17673;
var statearr_17687_17709 = state_17673__$1;
(statearr_17687_17709[(2)] = inst_17667);

(statearr_17687_17709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (10))){
var inst_17659 = (state_17673[(2)]);
var state_17673__$1 = state_17673;
var statearr_17688_17710 = state_17673__$1;
(statearr_17688_17710[(2)] = inst_17659);

(statearr_17688_17710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17674 === (8))){
var inst_17656 = cljs.core.async.close_BANG_.call(null,to);
var state_17673__$1 = state_17673;
var statearr_17689_17711 = state_17673__$1;
(statearr_17689_17711[(2)] = inst_17656);

(statearr_17689_17711[(1)] = (10));


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
});})(c__11828__auto___17697))
;
return ((function (switch__11813__auto__,c__11828__auto___17697){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_17693 = [null,null,null,null,null,null,null,null];
(statearr_17693[(0)] = state_machine__11814__auto__);

(statearr_17693[(1)] = (1));

return statearr_17693;
});
var state_machine__11814__auto____1 = (function (state_17673){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_17673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e17694){if((e17694 instanceof Object)){
var ex__11817__auto__ = e17694;
var statearr_17695_17712 = state_17673;
(statearr_17695_17712[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17713 = state_17673;
state_17673 = G__17713;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_17673){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_17673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___17697))
})();
var state__11830__auto__ = (function (){var statearr_17696 = f__11829__auto__.call(null);
(statearr_17696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___17697);

return statearr_17696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___17697))
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
return (function (p__17897){
var vec__17898 = p__17897;
var v = cljs.core.nth.call(null,vec__17898,(0),null);
var p = cljs.core.nth.call(null,vec__17898,(1),null);
var job = vec__17898;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11828__auto___18080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___18080,res,vec__17898,v,p,job,jobs,results){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___18080,res,vec__17898,v,p,job,jobs,results){
return (function (state_17903){
var state_val_17904 = (state_17903[(1)]);
if((state_val_17904 === (2))){
var inst_17900 = (state_17903[(2)]);
var inst_17901 = cljs.core.async.close_BANG_.call(null,res);
var state_17903__$1 = (function (){var statearr_17905 = state_17903;
(statearr_17905[(7)] = inst_17900);

return statearr_17905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17903__$1,inst_17901);
} else {
if((state_val_17904 === (1))){
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17903__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11828__auto___18080,res,vec__17898,v,p,job,jobs,results))
;
return ((function (switch__11813__auto__,c__11828__auto___18080,res,vec__17898,v,p,job,jobs,results){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_17909 = [null,null,null,null,null,null,null,null];
(statearr_17909[(0)] = state_machine__11814__auto__);

(statearr_17909[(1)] = (1));

return statearr_17909;
});
var state_machine__11814__auto____1 = (function (state_17903){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_17903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e17910){if((e17910 instanceof Object)){
var ex__11817__auto__ = e17910;
var statearr_17911_18081 = state_17903;
(statearr_17911_18081[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18082 = state_17903;
state_17903 = G__18082;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_17903){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_17903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___18080,res,vec__17898,v,p,job,jobs,results))
})();
var state__11830__auto__ = (function (){var statearr_17912 = f__11829__auto__.call(null);
(statearr_17912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___18080);

return statearr_17912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___18080,res,vec__17898,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17913){
var vec__17914 = p__17913;
var v = cljs.core.nth.call(null,vec__17914,(0),null);
var p = cljs.core.nth.call(null,vec__17914,(1),null);
var job = vec__17914;
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
var n__4523__auto___18083 = n;
var __18084 = (0);
while(true){
if((__18084 < n__4523__auto___18083)){
var G__17915_18085 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17915_18085) {
case "async":
var c__11828__auto___18087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18084,c__11828__auto___18087,G__17915_18085,n__4523__auto___18083,jobs,results,process,async){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (__18084,c__11828__auto___18087,G__17915_18085,n__4523__auto___18083,jobs,results,process,async){
return (function (state_17928){
var state_val_17929 = (state_17928[(1)]);
if((state_val_17929 === (7))){
var inst_17924 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
var statearr_17930_18088 = state_17928__$1;
(statearr_17930_18088[(2)] = inst_17924);

(statearr_17930_18088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (6))){
var state_17928__$1 = state_17928;
var statearr_17931_18089 = state_17928__$1;
(statearr_17931_18089[(2)] = null);

(statearr_17931_18089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (5))){
var state_17928__$1 = state_17928;
var statearr_17932_18090 = state_17928__$1;
(statearr_17932_18090[(2)] = null);

(statearr_17932_18090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (4))){
var inst_17918 = (state_17928[(2)]);
var inst_17919 = async.call(null,inst_17918);
var state_17928__$1 = state_17928;
if(cljs.core.truth_(inst_17919)){
var statearr_17933_18091 = state_17928__$1;
(statearr_17933_18091[(1)] = (5));

} else {
var statearr_17934_18092 = state_17928__$1;
(statearr_17934_18092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (3))){
var inst_17926 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17928__$1,inst_17926);
} else {
if((state_val_17929 === (2))){
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17928__$1,(4),jobs);
} else {
if((state_val_17929 === (1))){
var state_17928__$1 = state_17928;
var statearr_17935_18093 = state_17928__$1;
(statearr_17935_18093[(2)] = null);

(statearr_17935_18093[(1)] = (2));


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
});})(__18084,c__11828__auto___18087,G__17915_18085,n__4523__auto___18083,jobs,results,process,async))
;
return ((function (__18084,switch__11813__auto__,c__11828__auto___18087,G__17915_18085,n__4523__auto___18083,jobs,results,process,async){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_17939 = [null,null,null,null,null,null,null];
(statearr_17939[(0)] = state_machine__11814__auto__);

(statearr_17939[(1)] = (1));

return statearr_17939;
});
var state_machine__11814__auto____1 = (function (state_17928){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_17928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e17940){if((e17940 instanceof Object)){
var ex__11817__auto__ = e17940;
var statearr_17941_18094 = state_17928;
(statearr_17941_18094[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18095 = state_17928;
state_17928 = G__18095;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_17928){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_17928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(__18084,switch__11813__auto__,c__11828__auto___18087,G__17915_18085,n__4523__auto___18083,jobs,results,process,async))
})();
var state__11830__auto__ = (function (){var statearr_17942 = f__11829__auto__.call(null);
(statearr_17942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___18087);

return statearr_17942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(__18084,c__11828__auto___18087,G__17915_18085,n__4523__auto___18083,jobs,results,process,async))
);


break;
case "compute":
var c__11828__auto___18096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18084,c__11828__auto___18096,G__17915_18085,n__4523__auto___18083,jobs,results,process,async){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (__18084,c__11828__auto___18096,G__17915_18085,n__4523__auto___18083,jobs,results,process,async){
return (function (state_17955){
var state_val_17956 = (state_17955[(1)]);
if((state_val_17956 === (7))){
var inst_17951 = (state_17955[(2)]);
var state_17955__$1 = state_17955;
var statearr_17957_18097 = state_17955__$1;
(statearr_17957_18097[(2)] = inst_17951);

(statearr_17957_18097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (6))){
var state_17955__$1 = state_17955;
var statearr_17958_18098 = state_17955__$1;
(statearr_17958_18098[(2)] = null);

(statearr_17958_18098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (5))){
var state_17955__$1 = state_17955;
var statearr_17959_18099 = state_17955__$1;
(statearr_17959_18099[(2)] = null);

(statearr_17959_18099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (4))){
var inst_17945 = (state_17955[(2)]);
var inst_17946 = process.call(null,inst_17945);
var state_17955__$1 = state_17955;
if(cljs.core.truth_(inst_17946)){
var statearr_17960_18100 = state_17955__$1;
(statearr_17960_18100[(1)] = (5));

} else {
var statearr_17961_18101 = state_17955__$1;
(statearr_17961_18101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17956 === (3))){
var inst_17953 = (state_17955[(2)]);
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17955__$1,inst_17953);
} else {
if((state_val_17956 === (2))){
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17955__$1,(4),jobs);
} else {
if((state_val_17956 === (1))){
var state_17955__$1 = state_17955;
var statearr_17962_18102 = state_17955__$1;
(statearr_17962_18102[(2)] = null);

(statearr_17962_18102[(1)] = (2));


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
});})(__18084,c__11828__auto___18096,G__17915_18085,n__4523__auto___18083,jobs,results,process,async))
;
return ((function (__18084,switch__11813__auto__,c__11828__auto___18096,G__17915_18085,n__4523__auto___18083,jobs,results,process,async){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_17966 = [null,null,null,null,null,null,null];
(statearr_17966[(0)] = state_machine__11814__auto__);

(statearr_17966[(1)] = (1));

return statearr_17966;
});
var state_machine__11814__auto____1 = (function (state_17955){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_17955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e17967){if((e17967 instanceof Object)){
var ex__11817__auto__ = e17967;
var statearr_17968_18103 = state_17955;
(statearr_17968_18103[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18104 = state_17955;
state_17955 = G__18104;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_17955){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_17955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(__18084,switch__11813__auto__,c__11828__auto___18096,G__17915_18085,n__4523__auto___18083,jobs,results,process,async))
})();
var state__11830__auto__ = (function (){var statearr_17969 = f__11829__auto__.call(null);
(statearr_17969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___18096);

return statearr_17969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(__18084,c__11828__auto___18096,G__17915_18085,n__4523__auto___18083,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18105 = (__18084 + (1));
__18084 = G__18105;
continue;
} else {
}
break;
}

var c__11828__auto___18106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___18106,jobs,results,process,async){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___18106,jobs,results,process,async){
return (function (state_17991){
var state_val_17992 = (state_17991[(1)]);
if((state_val_17992 === (9))){
var inst_17984 = (state_17991[(2)]);
var state_17991__$1 = (function (){var statearr_17993 = state_17991;
(statearr_17993[(7)] = inst_17984);

return statearr_17993;
})();
var statearr_17994_18107 = state_17991__$1;
(statearr_17994_18107[(2)] = null);

(statearr_17994_18107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (8))){
var inst_17977 = (state_17991[(8)]);
var inst_17982 = (state_17991[(2)]);
var state_17991__$1 = (function (){var statearr_17995 = state_17991;
(statearr_17995[(9)] = inst_17982);

return statearr_17995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17991__$1,(9),results,inst_17977);
} else {
if((state_val_17992 === (7))){
var inst_17987 = (state_17991[(2)]);
var state_17991__$1 = state_17991;
var statearr_17996_18108 = state_17991__$1;
(statearr_17996_18108[(2)] = inst_17987);

(statearr_17996_18108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (6))){
var inst_17977 = (state_17991[(8)]);
var inst_17972 = (state_17991[(10)]);
var inst_17977__$1 = cljs.core.async.chan.call(null,(1));
var inst_17978 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17979 = [inst_17972,inst_17977__$1];
var inst_17980 = (new cljs.core.PersistentVector(null,2,(5),inst_17978,inst_17979,null));
var state_17991__$1 = (function (){var statearr_17997 = state_17991;
(statearr_17997[(8)] = inst_17977__$1);

return statearr_17997;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17991__$1,(8),jobs,inst_17980);
} else {
if((state_val_17992 === (5))){
var inst_17975 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17991__$1 = state_17991;
var statearr_17998_18109 = state_17991__$1;
(statearr_17998_18109[(2)] = inst_17975);

(statearr_17998_18109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (4))){
var inst_17972 = (state_17991[(10)]);
var inst_17972__$1 = (state_17991[(2)]);
var inst_17973 = (inst_17972__$1 == null);
var state_17991__$1 = (function (){var statearr_17999 = state_17991;
(statearr_17999[(10)] = inst_17972__$1);

return statearr_17999;
})();
if(cljs.core.truth_(inst_17973)){
var statearr_18000_18110 = state_17991__$1;
(statearr_18000_18110[(1)] = (5));

} else {
var statearr_18001_18111 = state_17991__$1;
(statearr_18001_18111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17992 === (3))){
var inst_17989 = (state_17991[(2)]);
var state_17991__$1 = state_17991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17991__$1,inst_17989);
} else {
if((state_val_17992 === (2))){
var state_17991__$1 = state_17991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17991__$1,(4),from);
} else {
if((state_val_17992 === (1))){
var state_17991__$1 = state_17991;
var statearr_18002_18112 = state_17991__$1;
(statearr_18002_18112[(2)] = null);

(statearr_18002_18112[(1)] = (2));


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
});})(c__11828__auto___18106,jobs,results,process,async))
;
return ((function (switch__11813__auto__,c__11828__auto___18106,jobs,results,process,async){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_18006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18006[(0)] = state_machine__11814__auto__);

(statearr_18006[(1)] = (1));

return statearr_18006;
});
var state_machine__11814__auto____1 = (function (state_17991){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_17991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e18007){if((e18007 instanceof Object)){
var ex__11817__auto__ = e18007;
var statearr_18008_18113 = state_17991;
(statearr_18008_18113[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18114 = state_17991;
state_17991 = G__18114;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_17991){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_17991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___18106,jobs,results,process,async))
})();
var state__11830__auto__ = (function (){var statearr_18009 = f__11829__auto__.call(null);
(statearr_18009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___18106);

return statearr_18009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___18106,jobs,results,process,async))
);


var c__11828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto__,jobs,results,process,async){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto__,jobs,results,process,async){
return (function (state_18047){
var state_val_18048 = (state_18047[(1)]);
if((state_val_18048 === (7))){
var inst_18043 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18049_18115 = state_18047__$1;
(statearr_18049_18115[(2)] = inst_18043);

(statearr_18049_18115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (20))){
var state_18047__$1 = state_18047;
var statearr_18050_18116 = state_18047__$1;
(statearr_18050_18116[(2)] = null);

(statearr_18050_18116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (1))){
var state_18047__$1 = state_18047;
var statearr_18051_18117 = state_18047__$1;
(statearr_18051_18117[(2)] = null);

(statearr_18051_18117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (4))){
var inst_18012 = (state_18047[(7)]);
var inst_18012__$1 = (state_18047[(2)]);
var inst_18013 = (inst_18012__$1 == null);
var state_18047__$1 = (function (){var statearr_18052 = state_18047;
(statearr_18052[(7)] = inst_18012__$1);

return statearr_18052;
})();
if(cljs.core.truth_(inst_18013)){
var statearr_18053_18118 = state_18047__$1;
(statearr_18053_18118[(1)] = (5));

} else {
var statearr_18054_18119 = state_18047__$1;
(statearr_18054_18119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (15))){
var inst_18025 = (state_18047[(8)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18047__$1,(18),to,inst_18025);
} else {
if((state_val_18048 === (21))){
var inst_18038 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18055_18120 = state_18047__$1;
(statearr_18055_18120[(2)] = inst_18038);

(statearr_18055_18120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (13))){
var inst_18040 = (state_18047[(2)]);
var state_18047__$1 = (function (){var statearr_18056 = state_18047;
(statearr_18056[(9)] = inst_18040);

return statearr_18056;
})();
var statearr_18057_18121 = state_18047__$1;
(statearr_18057_18121[(2)] = null);

(statearr_18057_18121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (6))){
var inst_18012 = (state_18047[(7)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18047__$1,(11),inst_18012);
} else {
if((state_val_18048 === (17))){
var inst_18033 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18033)){
var statearr_18058_18122 = state_18047__$1;
(statearr_18058_18122[(1)] = (19));

} else {
var statearr_18059_18123 = state_18047__$1;
(statearr_18059_18123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (3))){
var inst_18045 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18047__$1,inst_18045);
} else {
if((state_val_18048 === (12))){
var inst_18022 = (state_18047[(10)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18047__$1,(14),inst_18022);
} else {
if((state_val_18048 === (2))){
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18047__$1,(4),results);
} else {
if((state_val_18048 === (19))){
var state_18047__$1 = state_18047;
var statearr_18060_18124 = state_18047__$1;
(statearr_18060_18124[(2)] = null);

(statearr_18060_18124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (11))){
var inst_18022 = (state_18047[(2)]);
var state_18047__$1 = (function (){var statearr_18061 = state_18047;
(statearr_18061[(10)] = inst_18022);

return statearr_18061;
})();
var statearr_18062_18125 = state_18047__$1;
(statearr_18062_18125[(2)] = null);

(statearr_18062_18125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (9))){
var state_18047__$1 = state_18047;
var statearr_18063_18126 = state_18047__$1;
(statearr_18063_18126[(2)] = null);

(statearr_18063_18126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (5))){
var state_18047__$1 = state_18047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18064_18127 = state_18047__$1;
(statearr_18064_18127[(1)] = (8));

} else {
var statearr_18065_18128 = state_18047__$1;
(statearr_18065_18128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (14))){
var inst_18027 = (state_18047[(11)]);
var inst_18025 = (state_18047[(8)]);
var inst_18025__$1 = (state_18047[(2)]);
var inst_18026 = (inst_18025__$1 == null);
var inst_18027__$1 = cljs.core.not.call(null,inst_18026);
var state_18047__$1 = (function (){var statearr_18066 = state_18047;
(statearr_18066[(11)] = inst_18027__$1);

(statearr_18066[(8)] = inst_18025__$1);

return statearr_18066;
})();
if(inst_18027__$1){
var statearr_18067_18129 = state_18047__$1;
(statearr_18067_18129[(1)] = (15));

} else {
var statearr_18068_18130 = state_18047__$1;
(statearr_18068_18130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (16))){
var inst_18027 = (state_18047[(11)]);
var state_18047__$1 = state_18047;
var statearr_18069_18131 = state_18047__$1;
(statearr_18069_18131[(2)] = inst_18027);

(statearr_18069_18131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (10))){
var inst_18019 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18070_18132 = state_18047__$1;
(statearr_18070_18132[(2)] = inst_18019);

(statearr_18070_18132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (18))){
var inst_18030 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18071_18133 = state_18047__$1;
(statearr_18071_18133[(2)] = inst_18030);

(statearr_18071_18133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (8))){
var inst_18016 = cljs.core.async.close_BANG_.call(null,to);
var state_18047__$1 = state_18047;
var statearr_18072_18134 = state_18047__$1;
(statearr_18072_18134[(2)] = inst_18016);

(statearr_18072_18134[(1)] = (10));


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
});})(c__11828__auto__,jobs,results,process,async))
;
return ((function (switch__11813__auto__,c__11828__auto__,jobs,results,process,async){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_18076 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18076[(0)] = state_machine__11814__auto__);

(statearr_18076[(1)] = (1));

return statearr_18076;
});
var state_machine__11814__auto____1 = (function (state_18047){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_18047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e18077){if((e18077 instanceof Object)){
var ex__11817__auto__ = e18077;
var statearr_18078_18135 = state_18047;
(statearr_18078_18135[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18136 = state_18047;
state_18047 = G__18136;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_18047){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_18047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto__,jobs,results,process,async))
})();
var state__11830__auto__ = (function (){var statearr_18079 = f__11829__auto__.call(null);
(statearr_18079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto__);

return statearr_18079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto__,jobs,results,process,async))
);

return c__11828__auto__;
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
var c__11828__auto___18237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___18237,tc,fc){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___18237,tc,fc){
return (function (state_18212){
var state_val_18213 = (state_18212[(1)]);
if((state_val_18213 === (7))){
var inst_18208 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18214_18238 = state_18212__$1;
(statearr_18214_18238[(2)] = inst_18208);

(statearr_18214_18238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (1))){
var state_18212__$1 = state_18212;
var statearr_18215_18239 = state_18212__$1;
(statearr_18215_18239[(2)] = null);

(statearr_18215_18239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (4))){
var inst_18189 = (state_18212[(7)]);
var inst_18189__$1 = (state_18212[(2)]);
var inst_18190 = (inst_18189__$1 == null);
var state_18212__$1 = (function (){var statearr_18216 = state_18212;
(statearr_18216[(7)] = inst_18189__$1);

return statearr_18216;
})();
if(cljs.core.truth_(inst_18190)){
var statearr_18217_18240 = state_18212__$1;
(statearr_18217_18240[(1)] = (5));

} else {
var statearr_18218_18241 = state_18212__$1;
(statearr_18218_18241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (13))){
var state_18212__$1 = state_18212;
var statearr_18219_18242 = state_18212__$1;
(statearr_18219_18242[(2)] = null);

(statearr_18219_18242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (6))){
var inst_18189 = (state_18212[(7)]);
var inst_18195 = p.call(null,inst_18189);
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18195)){
var statearr_18220_18243 = state_18212__$1;
(statearr_18220_18243[(1)] = (9));

} else {
var statearr_18221_18244 = state_18212__$1;
(statearr_18221_18244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (3))){
var inst_18210 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18212__$1,inst_18210);
} else {
if((state_val_18213 === (12))){
var state_18212__$1 = state_18212;
var statearr_18222_18245 = state_18212__$1;
(statearr_18222_18245[(2)] = null);

(statearr_18222_18245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (2))){
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18212__$1,(4),ch);
} else {
if((state_val_18213 === (11))){
var inst_18189 = (state_18212[(7)]);
var inst_18199 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18212__$1,(8),inst_18199,inst_18189);
} else {
if((state_val_18213 === (9))){
var state_18212__$1 = state_18212;
var statearr_18223_18246 = state_18212__$1;
(statearr_18223_18246[(2)] = tc);

(statearr_18223_18246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (5))){
var inst_18192 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18193 = cljs.core.async.close_BANG_.call(null,fc);
var state_18212__$1 = (function (){var statearr_18224 = state_18212;
(statearr_18224[(8)] = inst_18192);

return statearr_18224;
})();
var statearr_18225_18247 = state_18212__$1;
(statearr_18225_18247[(2)] = inst_18193);

(statearr_18225_18247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (14))){
var inst_18206 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18226_18248 = state_18212__$1;
(statearr_18226_18248[(2)] = inst_18206);

(statearr_18226_18248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (10))){
var state_18212__$1 = state_18212;
var statearr_18227_18249 = state_18212__$1;
(statearr_18227_18249[(2)] = fc);

(statearr_18227_18249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (8))){
var inst_18201 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18201)){
var statearr_18228_18250 = state_18212__$1;
(statearr_18228_18250[(1)] = (12));

} else {
var statearr_18229_18251 = state_18212__$1;
(statearr_18229_18251[(1)] = (13));

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
});})(c__11828__auto___18237,tc,fc))
;
return ((function (switch__11813__auto__,c__11828__auto___18237,tc,fc){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = state_machine__11814__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var state_machine__11814__auto____1 = (function (state_18212){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_18212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e18234){if((e18234 instanceof Object)){
var ex__11817__auto__ = e18234;
var statearr_18235_18252 = state_18212;
(statearr_18235_18252[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18253 = state_18212;
state_18212 = G__18253;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_18212){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_18212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___18237,tc,fc))
})();
var state__11830__auto__ = (function (){var statearr_18236 = f__11829__auto__.call(null);
(statearr_18236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___18237);

return statearr_18236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___18237,tc,fc))
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
var c__11828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto__){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto__){
return (function (state_18300){
var state_val_18301 = (state_18300[(1)]);
if((state_val_18301 === (7))){
var inst_18296 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18302_18318 = state_18300__$1;
(statearr_18302_18318[(2)] = inst_18296);

(statearr_18302_18318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (6))){
var inst_18286 = (state_18300[(7)]);
var inst_18289 = (state_18300[(8)]);
var inst_18293 = f.call(null,inst_18286,inst_18289);
var inst_18286__$1 = inst_18293;
var state_18300__$1 = (function (){var statearr_18303 = state_18300;
(statearr_18303[(7)] = inst_18286__$1);

return statearr_18303;
})();
var statearr_18304_18319 = state_18300__$1;
(statearr_18304_18319[(2)] = null);

(statearr_18304_18319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (5))){
var inst_18286 = (state_18300[(7)]);
var state_18300__$1 = state_18300;
var statearr_18305_18320 = state_18300__$1;
(statearr_18305_18320[(2)] = inst_18286);

(statearr_18305_18320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (4))){
var inst_18289 = (state_18300[(8)]);
var inst_18289__$1 = (state_18300[(2)]);
var inst_18290 = (inst_18289__$1 == null);
var state_18300__$1 = (function (){var statearr_18306 = state_18300;
(statearr_18306[(8)] = inst_18289__$1);

return statearr_18306;
})();
if(cljs.core.truth_(inst_18290)){
var statearr_18307_18321 = state_18300__$1;
(statearr_18307_18321[(1)] = (5));

} else {
var statearr_18308_18322 = state_18300__$1;
(statearr_18308_18322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (3))){
var inst_18298 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18300__$1,inst_18298);
} else {
if((state_val_18301 === (2))){
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18300__$1,(4),ch);
} else {
if((state_val_18301 === (1))){
var inst_18286 = init;
var state_18300__$1 = (function (){var statearr_18309 = state_18300;
(statearr_18309[(7)] = inst_18286);

return statearr_18309;
})();
var statearr_18310_18323 = state_18300__$1;
(statearr_18310_18323[(2)] = null);

(statearr_18310_18323[(1)] = (2));


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
});})(c__11828__auto__))
;
return ((function (switch__11813__auto__,c__11828__auto__){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = state_machine__11814__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var state_machine__11814__auto____1 = (function (state_18300){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_18300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e18315){if((e18315 instanceof Object)){
var ex__11817__auto__ = e18315;
var statearr_18316_18324 = state_18300;
(statearr_18316_18324[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18325 = state_18300;
state_18300 = G__18325;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_18300){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_18300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto__))
})();
var state__11830__auto__ = (function (){var statearr_18317 = f__11829__auto__.call(null);
(statearr_18317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto__);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto__))
);

return c__11828__auto__;
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
var c__11828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto__){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto__){
return (function (state_18399){
var state_val_18400 = (state_18399[(1)]);
if((state_val_18400 === (7))){
var inst_18381 = (state_18399[(2)]);
var state_18399__$1 = state_18399;
var statearr_18401_18424 = state_18399__$1;
(statearr_18401_18424[(2)] = inst_18381);

(statearr_18401_18424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (1))){
var inst_18375 = cljs.core.seq.call(null,coll);
var inst_18376 = inst_18375;
var state_18399__$1 = (function (){var statearr_18402 = state_18399;
(statearr_18402[(7)] = inst_18376);

return statearr_18402;
})();
var statearr_18403_18425 = state_18399__$1;
(statearr_18403_18425[(2)] = null);

(statearr_18403_18425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (4))){
var inst_18376 = (state_18399[(7)]);
var inst_18379 = cljs.core.first.call(null,inst_18376);
var state_18399__$1 = state_18399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18399__$1,(7),ch,inst_18379);
} else {
if((state_val_18400 === (13))){
var inst_18393 = (state_18399[(2)]);
var state_18399__$1 = state_18399;
var statearr_18404_18426 = state_18399__$1;
(statearr_18404_18426[(2)] = inst_18393);

(statearr_18404_18426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (6))){
var inst_18384 = (state_18399[(2)]);
var state_18399__$1 = state_18399;
if(cljs.core.truth_(inst_18384)){
var statearr_18405_18427 = state_18399__$1;
(statearr_18405_18427[(1)] = (8));

} else {
var statearr_18406_18428 = state_18399__$1;
(statearr_18406_18428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (3))){
var inst_18397 = (state_18399[(2)]);
var state_18399__$1 = state_18399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18399__$1,inst_18397);
} else {
if((state_val_18400 === (12))){
var state_18399__$1 = state_18399;
var statearr_18407_18429 = state_18399__$1;
(statearr_18407_18429[(2)] = null);

(statearr_18407_18429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (2))){
var inst_18376 = (state_18399[(7)]);
var state_18399__$1 = state_18399;
if(cljs.core.truth_(inst_18376)){
var statearr_18408_18430 = state_18399__$1;
(statearr_18408_18430[(1)] = (4));

} else {
var statearr_18409_18431 = state_18399__$1;
(statearr_18409_18431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (11))){
var inst_18390 = cljs.core.async.close_BANG_.call(null,ch);
var state_18399__$1 = state_18399;
var statearr_18410_18432 = state_18399__$1;
(statearr_18410_18432[(2)] = inst_18390);

(statearr_18410_18432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (9))){
var state_18399__$1 = state_18399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18411_18433 = state_18399__$1;
(statearr_18411_18433[(1)] = (11));

} else {
var statearr_18412_18434 = state_18399__$1;
(statearr_18412_18434[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (5))){
var inst_18376 = (state_18399[(7)]);
var state_18399__$1 = state_18399;
var statearr_18413_18435 = state_18399__$1;
(statearr_18413_18435[(2)] = inst_18376);

(statearr_18413_18435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (10))){
var inst_18395 = (state_18399[(2)]);
var state_18399__$1 = state_18399;
var statearr_18414_18436 = state_18399__$1;
(statearr_18414_18436[(2)] = inst_18395);

(statearr_18414_18436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18400 === (8))){
var inst_18376 = (state_18399[(7)]);
var inst_18386 = cljs.core.next.call(null,inst_18376);
var inst_18376__$1 = inst_18386;
var state_18399__$1 = (function (){var statearr_18415 = state_18399;
(statearr_18415[(7)] = inst_18376__$1);

return statearr_18415;
})();
var statearr_18416_18437 = state_18399__$1;
(statearr_18416_18437[(2)] = null);

(statearr_18416_18437[(1)] = (2));


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
});})(c__11828__auto__))
;
return ((function (switch__11813__auto__,c__11828__auto__){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_18420 = [null,null,null,null,null,null,null,null];
(statearr_18420[(0)] = state_machine__11814__auto__);

(statearr_18420[(1)] = (1));

return statearr_18420;
});
var state_machine__11814__auto____1 = (function (state_18399){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_18399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e18421){if((e18421 instanceof Object)){
var ex__11817__auto__ = e18421;
var statearr_18422_18438 = state_18399;
(statearr_18422_18438[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18439 = state_18399;
state_18399 = G__18439;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_18399){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_18399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto__))
})();
var state__11830__auto__ = (function (){var statearr_18423 = f__11829__auto__.call(null);
(statearr_18423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto__);

return statearr_18423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto__))
);

return c__11828__auto__;
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

cljs.core.async.Mux = (function (){var obj18441 = {};
return obj18441;
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
return (function (){var or__3636__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18443 = {};
return obj18443;
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
return (function (){var or__3636__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return (function (){var or__3636__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return (function (){var or__3636__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
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
if(typeof cljs.core.async.t18665 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18665 = (function (cs,ch,mult,meta18666){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18666 = meta18666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18665.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18665.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18665.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18665.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18665.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18667){
var self__ = this;
var _18667__$1 = this;
return self__.meta18666;
});})(cs))
;

cljs.core.async.t18665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18667,meta18666__$1){
var self__ = this;
var _18667__$1 = this;
return (new cljs.core.async.t18665(self__.cs,self__.ch,self__.mult,meta18666__$1));
});})(cs))
;

cljs.core.async.t18665.cljs$lang$type = true;

cljs.core.async.t18665.cljs$lang$ctorStr = "cljs.core.async/t18665";

cljs.core.async.t18665.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t18665");
});})(cs))
;

cljs.core.async.__GT_t18665 = ((function (cs){
return (function __GT_t18665(cs__$1,ch__$1,mult__$1,meta18666){
return (new cljs.core.async.t18665(cs__$1,ch__$1,mult__$1,meta18666));
});})(cs))
;

}

return (new cljs.core.async.t18665(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
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
var c__11828__auto___18886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___18886,cs,m,dchan,dctr,done){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___18886,cs,m,dchan,dctr,done){
return (function (state_18798){
var state_val_18799 = (state_18798[(1)]);
if((state_val_18799 === (7))){
var inst_18794 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18800_18887 = state_18798__$1;
(statearr_18800_18887[(2)] = inst_18794);

(statearr_18800_18887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (20))){
var inst_18699 = (state_18798[(7)]);
var inst_18709 = cljs.core.first.call(null,inst_18699);
var inst_18710 = cljs.core.nth.call(null,inst_18709,(0),null);
var inst_18711 = cljs.core.nth.call(null,inst_18709,(1),null);
var state_18798__$1 = (function (){var statearr_18801 = state_18798;
(statearr_18801[(8)] = inst_18710);

return statearr_18801;
})();
if(cljs.core.truth_(inst_18711)){
var statearr_18802_18888 = state_18798__$1;
(statearr_18802_18888[(1)] = (22));

} else {
var statearr_18803_18889 = state_18798__$1;
(statearr_18803_18889[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (27))){
var inst_18739 = (state_18798[(9)]);
var inst_18746 = (state_18798[(10)]);
var inst_18670 = (state_18798[(11)]);
var inst_18741 = (state_18798[(12)]);
var inst_18746__$1 = cljs.core._nth.call(null,inst_18739,inst_18741);
var inst_18747 = cljs.core.async.put_BANG_.call(null,inst_18746__$1,inst_18670,done);
var state_18798__$1 = (function (){var statearr_18804 = state_18798;
(statearr_18804[(10)] = inst_18746__$1);

return statearr_18804;
})();
if(cljs.core.truth_(inst_18747)){
var statearr_18805_18890 = state_18798__$1;
(statearr_18805_18890[(1)] = (30));

} else {
var statearr_18806_18891 = state_18798__$1;
(statearr_18806_18891[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (1))){
var state_18798__$1 = state_18798;
var statearr_18807_18892 = state_18798__$1;
(statearr_18807_18892[(2)] = null);

(statearr_18807_18892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (24))){
var inst_18699 = (state_18798[(7)]);
var inst_18716 = (state_18798[(2)]);
var inst_18717 = cljs.core.next.call(null,inst_18699);
var inst_18679 = inst_18717;
var inst_18680 = null;
var inst_18681 = (0);
var inst_18682 = (0);
var state_18798__$1 = (function (){var statearr_18808 = state_18798;
(statearr_18808[(13)] = inst_18716);

(statearr_18808[(14)] = inst_18681);

(statearr_18808[(15)] = inst_18682);

(statearr_18808[(16)] = inst_18680);

(statearr_18808[(17)] = inst_18679);

return statearr_18808;
})();
var statearr_18809_18893 = state_18798__$1;
(statearr_18809_18893[(2)] = null);

(statearr_18809_18893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (39))){
var state_18798__$1 = state_18798;
var statearr_18813_18894 = state_18798__$1;
(statearr_18813_18894[(2)] = null);

(statearr_18813_18894[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (4))){
var inst_18670 = (state_18798[(11)]);
var inst_18670__$1 = (state_18798[(2)]);
var inst_18671 = (inst_18670__$1 == null);
var state_18798__$1 = (function (){var statearr_18814 = state_18798;
(statearr_18814[(11)] = inst_18670__$1);

return statearr_18814;
})();
if(cljs.core.truth_(inst_18671)){
var statearr_18815_18895 = state_18798__$1;
(statearr_18815_18895[(1)] = (5));

} else {
var statearr_18816_18896 = state_18798__$1;
(statearr_18816_18896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (15))){
var inst_18681 = (state_18798[(14)]);
var inst_18682 = (state_18798[(15)]);
var inst_18680 = (state_18798[(16)]);
var inst_18679 = (state_18798[(17)]);
var inst_18695 = (state_18798[(2)]);
var inst_18696 = (inst_18682 + (1));
var tmp18810 = inst_18681;
var tmp18811 = inst_18680;
var tmp18812 = inst_18679;
var inst_18679__$1 = tmp18812;
var inst_18680__$1 = tmp18811;
var inst_18681__$1 = tmp18810;
var inst_18682__$1 = inst_18696;
var state_18798__$1 = (function (){var statearr_18817 = state_18798;
(statearr_18817[(18)] = inst_18695);

(statearr_18817[(14)] = inst_18681__$1);

(statearr_18817[(15)] = inst_18682__$1);

(statearr_18817[(16)] = inst_18680__$1);

(statearr_18817[(17)] = inst_18679__$1);

return statearr_18817;
})();
var statearr_18818_18897 = state_18798__$1;
(statearr_18818_18897[(2)] = null);

(statearr_18818_18897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (21))){
var inst_18720 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18822_18898 = state_18798__$1;
(statearr_18822_18898[(2)] = inst_18720);

(statearr_18822_18898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (31))){
var inst_18746 = (state_18798[(10)]);
var inst_18750 = done.call(null,null);
var inst_18751 = cljs.core.async.untap_STAR_.call(null,m,inst_18746);
var state_18798__$1 = (function (){var statearr_18823 = state_18798;
(statearr_18823[(19)] = inst_18750);

return statearr_18823;
})();
var statearr_18824_18899 = state_18798__$1;
(statearr_18824_18899[(2)] = inst_18751);

(statearr_18824_18899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (32))){
var inst_18739 = (state_18798[(9)]);
var inst_18738 = (state_18798[(20)]);
var inst_18741 = (state_18798[(12)]);
var inst_18740 = (state_18798[(21)]);
var inst_18753 = (state_18798[(2)]);
var inst_18754 = (inst_18741 + (1));
var tmp18819 = inst_18739;
var tmp18820 = inst_18738;
var tmp18821 = inst_18740;
var inst_18738__$1 = tmp18820;
var inst_18739__$1 = tmp18819;
var inst_18740__$1 = tmp18821;
var inst_18741__$1 = inst_18754;
var state_18798__$1 = (function (){var statearr_18825 = state_18798;
(statearr_18825[(9)] = inst_18739__$1);

(statearr_18825[(20)] = inst_18738__$1);

(statearr_18825[(12)] = inst_18741__$1);

(statearr_18825[(21)] = inst_18740__$1);

(statearr_18825[(22)] = inst_18753);

return statearr_18825;
})();
var statearr_18826_18900 = state_18798__$1;
(statearr_18826_18900[(2)] = null);

(statearr_18826_18900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (40))){
var inst_18766 = (state_18798[(23)]);
var inst_18770 = done.call(null,null);
var inst_18771 = cljs.core.async.untap_STAR_.call(null,m,inst_18766);
var state_18798__$1 = (function (){var statearr_18827 = state_18798;
(statearr_18827[(24)] = inst_18770);

return statearr_18827;
})();
var statearr_18828_18901 = state_18798__$1;
(statearr_18828_18901[(2)] = inst_18771);

(statearr_18828_18901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (33))){
var inst_18757 = (state_18798[(25)]);
var inst_18759 = cljs.core.chunked_seq_QMARK_.call(null,inst_18757);
var state_18798__$1 = state_18798;
if(inst_18759){
var statearr_18829_18902 = state_18798__$1;
(statearr_18829_18902[(1)] = (36));

} else {
var statearr_18830_18903 = state_18798__$1;
(statearr_18830_18903[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (13))){
var inst_18689 = (state_18798[(26)]);
var inst_18692 = cljs.core.async.close_BANG_.call(null,inst_18689);
var state_18798__$1 = state_18798;
var statearr_18831_18904 = state_18798__$1;
(statearr_18831_18904[(2)] = inst_18692);

(statearr_18831_18904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (22))){
var inst_18710 = (state_18798[(8)]);
var inst_18713 = cljs.core.async.close_BANG_.call(null,inst_18710);
var state_18798__$1 = state_18798;
var statearr_18832_18905 = state_18798__$1;
(statearr_18832_18905[(2)] = inst_18713);

(statearr_18832_18905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (36))){
var inst_18757 = (state_18798[(25)]);
var inst_18761 = cljs.core.chunk_first.call(null,inst_18757);
var inst_18762 = cljs.core.chunk_rest.call(null,inst_18757);
var inst_18763 = cljs.core.count.call(null,inst_18761);
var inst_18738 = inst_18762;
var inst_18739 = inst_18761;
var inst_18740 = inst_18763;
var inst_18741 = (0);
var state_18798__$1 = (function (){var statearr_18833 = state_18798;
(statearr_18833[(9)] = inst_18739);

(statearr_18833[(20)] = inst_18738);

(statearr_18833[(12)] = inst_18741);

(statearr_18833[(21)] = inst_18740);

return statearr_18833;
})();
var statearr_18834_18906 = state_18798__$1;
(statearr_18834_18906[(2)] = null);

(statearr_18834_18906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (41))){
var inst_18757 = (state_18798[(25)]);
var inst_18773 = (state_18798[(2)]);
var inst_18774 = cljs.core.next.call(null,inst_18757);
var inst_18738 = inst_18774;
var inst_18739 = null;
var inst_18740 = (0);
var inst_18741 = (0);
var state_18798__$1 = (function (){var statearr_18835 = state_18798;
(statearr_18835[(27)] = inst_18773);

(statearr_18835[(9)] = inst_18739);

(statearr_18835[(20)] = inst_18738);

(statearr_18835[(12)] = inst_18741);

(statearr_18835[(21)] = inst_18740);

return statearr_18835;
})();
var statearr_18836_18907 = state_18798__$1;
(statearr_18836_18907[(2)] = null);

(statearr_18836_18907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (43))){
var state_18798__$1 = state_18798;
var statearr_18837_18908 = state_18798__$1;
(statearr_18837_18908[(2)] = null);

(statearr_18837_18908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (29))){
var inst_18782 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18838_18909 = state_18798__$1;
(statearr_18838_18909[(2)] = inst_18782);

(statearr_18838_18909[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (44))){
var inst_18791 = (state_18798[(2)]);
var state_18798__$1 = (function (){var statearr_18839 = state_18798;
(statearr_18839[(28)] = inst_18791);

return statearr_18839;
})();
var statearr_18840_18910 = state_18798__$1;
(statearr_18840_18910[(2)] = null);

(statearr_18840_18910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (6))){
var inst_18730 = (state_18798[(29)]);
var inst_18729 = cljs.core.deref.call(null,cs);
var inst_18730__$1 = cljs.core.keys.call(null,inst_18729);
var inst_18731 = cljs.core.count.call(null,inst_18730__$1);
var inst_18732 = cljs.core.reset_BANG_.call(null,dctr,inst_18731);
var inst_18737 = cljs.core.seq.call(null,inst_18730__$1);
var inst_18738 = inst_18737;
var inst_18739 = null;
var inst_18740 = (0);
var inst_18741 = (0);
var state_18798__$1 = (function (){var statearr_18841 = state_18798;
(statearr_18841[(9)] = inst_18739);

(statearr_18841[(20)] = inst_18738);

(statearr_18841[(12)] = inst_18741);

(statearr_18841[(30)] = inst_18732);

(statearr_18841[(29)] = inst_18730__$1);

(statearr_18841[(21)] = inst_18740);

return statearr_18841;
})();
var statearr_18842_18911 = state_18798__$1;
(statearr_18842_18911[(2)] = null);

(statearr_18842_18911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (28))){
var inst_18738 = (state_18798[(20)]);
var inst_18757 = (state_18798[(25)]);
var inst_18757__$1 = cljs.core.seq.call(null,inst_18738);
var state_18798__$1 = (function (){var statearr_18843 = state_18798;
(statearr_18843[(25)] = inst_18757__$1);

return statearr_18843;
})();
if(inst_18757__$1){
var statearr_18844_18912 = state_18798__$1;
(statearr_18844_18912[(1)] = (33));

} else {
var statearr_18845_18913 = state_18798__$1;
(statearr_18845_18913[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (25))){
var inst_18741 = (state_18798[(12)]);
var inst_18740 = (state_18798[(21)]);
var inst_18743 = (inst_18741 < inst_18740);
var inst_18744 = inst_18743;
var state_18798__$1 = state_18798;
if(cljs.core.truth_(inst_18744)){
var statearr_18846_18914 = state_18798__$1;
(statearr_18846_18914[(1)] = (27));

} else {
var statearr_18847_18915 = state_18798__$1;
(statearr_18847_18915[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (34))){
var state_18798__$1 = state_18798;
var statearr_18848_18916 = state_18798__$1;
(statearr_18848_18916[(2)] = null);

(statearr_18848_18916[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (17))){
var state_18798__$1 = state_18798;
var statearr_18849_18917 = state_18798__$1;
(statearr_18849_18917[(2)] = null);

(statearr_18849_18917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (3))){
var inst_18796 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18798__$1,inst_18796);
} else {
if((state_val_18799 === (12))){
var inst_18725 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18850_18918 = state_18798__$1;
(statearr_18850_18918[(2)] = inst_18725);

(statearr_18850_18918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (2))){
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18798__$1,(4),ch);
} else {
if((state_val_18799 === (23))){
var state_18798__$1 = state_18798;
var statearr_18851_18919 = state_18798__$1;
(statearr_18851_18919[(2)] = null);

(statearr_18851_18919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (35))){
var inst_18780 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18852_18920 = state_18798__$1;
(statearr_18852_18920[(2)] = inst_18780);

(statearr_18852_18920[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (19))){
var inst_18699 = (state_18798[(7)]);
var inst_18703 = cljs.core.chunk_first.call(null,inst_18699);
var inst_18704 = cljs.core.chunk_rest.call(null,inst_18699);
var inst_18705 = cljs.core.count.call(null,inst_18703);
var inst_18679 = inst_18704;
var inst_18680 = inst_18703;
var inst_18681 = inst_18705;
var inst_18682 = (0);
var state_18798__$1 = (function (){var statearr_18853 = state_18798;
(statearr_18853[(14)] = inst_18681);

(statearr_18853[(15)] = inst_18682);

(statearr_18853[(16)] = inst_18680);

(statearr_18853[(17)] = inst_18679);

return statearr_18853;
})();
var statearr_18854_18921 = state_18798__$1;
(statearr_18854_18921[(2)] = null);

(statearr_18854_18921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (11))){
var inst_18699 = (state_18798[(7)]);
var inst_18679 = (state_18798[(17)]);
var inst_18699__$1 = cljs.core.seq.call(null,inst_18679);
var state_18798__$1 = (function (){var statearr_18855 = state_18798;
(statearr_18855[(7)] = inst_18699__$1);

return statearr_18855;
})();
if(inst_18699__$1){
var statearr_18856_18922 = state_18798__$1;
(statearr_18856_18922[(1)] = (16));

} else {
var statearr_18857_18923 = state_18798__$1;
(statearr_18857_18923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (9))){
var inst_18727 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18858_18924 = state_18798__$1;
(statearr_18858_18924[(2)] = inst_18727);

(statearr_18858_18924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (5))){
var inst_18677 = cljs.core.deref.call(null,cs);
var inst_18678 = cljs.core.seq.call(null,inst_18677);
var inst_18679 = inst_18678;
var inst_18680 = null;
var inst_18681 = (0);
var inst_18682 = (0);
var state_18798__$1 = (function (){var statearr_18859 = state_18798;
(statearr_18859[(14)] = inst_18681);

(statearr_18859[(15)] = inst_18682);

(statearr_18859[(16)] = inst_18680);

(statearr_18859[(17)] = inst_18679);

return statearr_18859;
})();
var statearr_18860_18925 = state_18798__$1;
(statearr_18860_18925[(2)] = null);

(statearr_18860_18925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (14))){
var state_18798__$1 = state_18798;
var statearr_18861_18926 = state_18798__$1;
(statearr_18861_18926[(2)] = null);

(statearr_18861_18926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (45))){
var inst_18788 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18862_18927 = state_18798__$1;
(statearr_18862_18927[(2)] = inst_18788);

(statearr_18862_18927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (26))){
var inst_18730 = (state_18798[(29)]);
var inst_18784 = (state_18798[(2)]);
var inst_18785 = cljs.core.seq.call(null,inst_18730);
var state_18798__$1 = (function (){var statearr_18863 = state_18798;
(statearr_18863[(31)] = inst_18784);

return statearr_18863;
})();
if(inst_18785){
var statearr_18864_18928 = state_18798__$1;
(statearr_18864_18928[(1)] = (42));

} else {
var statearr_18865_18929 = state_18798__$1;
(statearr_18865_18929[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (16))){
var inst_18699 = (state_18798[(7)]);
var inst_18701 = cljs.core.chunked_seq_QMARK_.call(null,inst_18699);
var state_18798__$1 = state_18798;
if(inst_18701){
var statearr_18866_18930 = state_18798__$1;
(statearr_18866_18930[(1)] = (19));

} else {
var statearr_18867_18931 = state_18798__$1;
(statearr_18867_18931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (38))){
var inst_18777 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18868_18932 = state_18798__$1;
(statearr_18868_18932[(2)] = inst_18777);

(statearr_18868_18932[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (30))){
var state_18798__$1 = state_18798;
var statearr_18869_18933 = state_18798__$1;
(statearr_18869_18933[(2)] = null);

(statearr_18869_18933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (10))){
var inst_18682 = (state_18798[(15)]);
var inst_18680 = (state_18798[(16)]);
var inst_18688 = cljs.core._nth.call(null,inst_18680,inst_18682);
var inst_18689 = cljs.core.nth.call(null,inst_18688,(0),null);
var inst_18690 = cljs.core.nth.call(null,inst_18688,(1),null);
var state_18798__$1 = (function (){var statearr_18870 = state_18798;
(statearr_18870[(26)] = inst_18689);

return statearr_18870;
})();
if(cljs.core.truth_(inst_18690)){
var statearr_18871_18934 = state_18798__$1;
(statearr_18871_18934[(1)] = (13));

} else {
var statearr_18872_18935 = state_18798__$1;
(statearr_18872_18935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (18))){
var inst_18723 = (state_18798[(2)]);
var state_18798__$1 = state_18798;
var statearr_18873_18936 = state_18798__$1;
(statearr_18873_18936[(2)] = inst_18723);

(statearr_18873_18936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (42))){
var state_18798__$1 = state_18798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18798__$1,(45),dchan);
} else {
if((state_val_18799 === (37))){
var inst_18670 = (state_18798[(11)]);
var inst_18766 = (state_18798[(23)]);
var inst_18757 = (state_18798[(25)]);
var inst_18766__$1 = cljs.core.first.call(null,inst_18757);
var inst_18767 = cljs.core.async.put_BANG_.call(null,inst_18766__$1,inst_18670,done);
var state_18798__$1 = (function (){var statearr_18874 = state_18798;
(statearr_18874[(23)] = inst_18766__$1);

return statearr_18874;
})();
if(cljs.core.truth_(inst_18767)){
var statearr_18875_18937 = state_18798__$1;
(statearr_18875_18937[(1)] = (39));

} else {
var statearr_18876_18938 = state_18798__$1;
(statearr_18876_18938[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18799 === (8))){
var inst_18681 = (state_18798[(14)]);
var inst_18682 = (state_18798[(15)]);
var inst_18684 = (inst_18682 < inst_18681);
var inst_18685 = inst_18684;
var state_18798__$1 = state_18798;
if(cljs.core.truth_(inst_18685)){
var statearr_18877_18939 = state_18798__$1;
(statearr_18877_18939[(1)] = (10));

} else {
var statearr_18878_18940 = state_18798__$1;
(statearr_18878_18940[(1)] = (11));

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
});})(c__11828__auto___18886,cs,m,dchan,dctr,done))
;
return ((function (switch__11813__auto__,c__11828__auto___18886,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_18882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18882[(0)] = state_machine__11814__auto__);

(statearr_18882[(1)] = (1));

return statearr_18882;
});
var state_machine__11814__auto____1 = (function (state_18798){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_18798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e18883){if((e18883 instanceof Object)){
var ex__11817__auto__ = e18883;
var statearr_18884_18941 = state_18798;
(statearr_18884_18941[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18942 = state_18798;
state_18798 = G__18942;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_18798){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_18798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___18886,cs,m,dchan,dctr,done))
})();
var state__11830__auto__ = (function (){var statearr_18885 = f__11829__auto__.call(null);
(statearr_18885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___18886);

return statearr_18885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___18886,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18944 = {};
return obj18944;
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
return (function (){var or__3636__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return (function (){var or__3636__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return (function (){var or__3636__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return (function (){var or__3636__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return (function (){var or__3636__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18945){
var map__18950 = p__18945;
var map__18950__$1 = ((cljs.core.seq_QMARK_.call(null,map__18950))?cljs.core.apply.call(null,cljs.core.hash_map,map__18950):map__18950);
var opts = map__18950__$1;
var statearr_18951_18954 = state;
(statearr_18951_18954[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18950,map__18950__$1,opts){
return (function (val){
var statearr_18952_18955 = state;
(statearr_18952_18955[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18950,map__18950__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18953_18956 = state;
(statearr_18953_18956[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18945 = null;
if (arguments.length > 3) {
  p__18945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18945);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18957){
var state = cljs.core.first(arglist__18957);
arglist__18957 = cljs.core.next(arglist__18957);
var cont_block = cljs.core.first(arglist__18957);
arglist__18957 = cljs.core.next(arglist__18957);
var ports = cljs.core.first(arglist__18957);
var p__18945 = cljs.core.rest(arglist__18957);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18945);
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
if(typeof cljs.core.async.t19077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19077 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19078){
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
this.meta19078 = meta19078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19077.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19077.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19077.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19077.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19077.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19077.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t19077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19079){
var self__ = this;
var _19079__$1 = this;
return self__.meta19078;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19079,meta19078__$1){
var self__ = this;
var _19079__$1 = this;
return (new cljs.core.async.t19077(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19078__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19077.cljs$lang$type = true;

cljs.core.async.t19077.cljs$lang$ctorStr = "cljs.core.async/t19077";

cljs.core.async.t19077.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t19077");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19077 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19078){
return (new cljs.core.async.t19077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19078));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19077(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
})()
;
var c__11828__auto___19196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___19196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___19196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19149){
var state_val_19150 = (state_19149[(1)]);
if((state_val_19150 === (7))){
var inst_19093 = (state_19149[(7)]);
var inst_19098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19093);
var state_19149__$1 = state_19149;
var statearr_19151_19197 = state_19149__$1;
(statearr_19151_19197[(2)] = inst_19098);

(statearr_19151_19197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (20))){
var inst_19108 = (state_19149[(8)]);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19149__$1,(23),out,inst_19108);
} else {
if((state_val_19150 === (1))){
var inst_19083 = (state_19149[(9)]);
var inst_19083__$1 = calc_state.call(null);
var inst_19084 = cljs.core.seq_QMARK_.call(null,inst_19083__$1);
var state_19149__$1 = (function (){var statearr_19152 = state_19149;
(statearr_19152[(9)] = inst_19083__$1);

return statearr_19152;
})();
if(inst_19084){
var statearr_19153_19198 = state_19149__$1;
(statearr_19153_19198[(1)] = (2));

} else {
var statearr_19154_19199 = state_19149__$1;
(statearr_19154_19199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (24))){
var inst_19101 = (state_19149[(10)]);
var inst_19093 = inst_19101;
var state_19149__$1 = (function (){var statearr_19155 = state_19149;
(statearr_19155[(7)] = inst_19093);

return statearr_19155;
})();
var statearr_19156_19200 = state_19149__$1;
(statearr_19156_19200[(2)] = null);

(statearr_19156_19200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (4))){
var inst_19083 = (state_19149[(9)]);
var inst_19089 = (state_19149[(2)]);
var inst_19090 = cljs.core.get.call(null,inst_19089,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19091 = cljs.core.get.call(null,inst_19089,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19092 = cljs.core.get.call(null,inst_19089,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19093 = inst_19083;
var state_19149__$1 = (function (){var statearr_19157 = state_19149;
(statearr_19157[(11)] = inst_19091);

(statearr_19157[(12)] = inst_19092);

(statearr_19157[(7)] = inst_19093);

(statearr_19157[(13)] = inst_19090);

return statearr_19157;
})();
var statearr_19158_19201 = state_19149__$1;
(statearr_19158_19201[(2)] = null);

(statearr_19158_19201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (15))){
var state_19149__$1 = state_19149;
var statearr_19159_19202 = state_19149__$1;
(statearr_19159_19202[(2)] = null);

(statearr_19159_19202[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (21))){
var inst_19101 = (state_19149[(10)]);
var inst_19093 = inst_19101;
var state_19149__$1 = (function (){var statearr_19160 = state_19149;
(statearr_19160[(7)] = inst_19093);

return statearr_19160;
})();
var statearr_19161_19203 = state_19149__$1;
(statearr_19161_19203[(2)] = null);

(statearr_19161_19203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (13))){
var inst_19145 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19162_19204 = state_19149__$1;
(statearr_19162_19204[(2)] = inst_19145);

(statearr_19162_19204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (22))){
var inst_19143 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19163_19205 = state_19149__$1;
(statearr_19163_19205[(2)] = inst_19143);

(statearr_19163_19205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (6))){
var inst_19147 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19149__$1,inst_19147);
} else {
if((state_val_19150 === (25))){
var state_19149__$1 = state_19149;
var statearr_19164_19206 = state_19149__$1;
(statearr_19164_19206[(2)] = null);

(statearr_19164_19206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (17))){
var inst_19123 = (state_19149[(14)]);
var state_19149__$1 = state_19149;
var statearr_19165_19207 = state_19149__$1;
(statearr_19165_19207[(2)] = inst_19123);

(statearr_19165_19207[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (3))){
var inst_19083 = (state_19149[(9)]);
var state_19149__$1 = state_19149;
var statearr_19166_19208 = state_19149__$1;
(statearr_19166_19208[(2)] = inst_19083);

(statearr_19166_19208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (12))){
var inst_19109 = (state_19149[(15)]);
var inst_19104 = (state_19149[(16)]);
var inst_19123 = (state_19149[(14)]);
var inst_19123__$1 = inst_19104.call(null,inst_19109);
var state_19149__$1 = (function (){var statearr_19167 = state_19149;
(statearr_19167[(14)] = inst_19123__$1);

return statearr_19167;
})();
if(cljs.core.truth_(inst_19123__$1)){
var statearr_19168_19209 = state_19149__$1;
(statearr_19168_19209[(1)] = (17));

} else {
var statearr_19169_19210 = state_19149__$1;
(statearr_19169_19210[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (2))){
var inst_19083 = (state_19149[(9)]);
var inst_19086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19083);
var state_19149__$1 = state_19149;
var statearr_19170_19211 = state_19149__$1;
(statearr_19170_19211[(2)] = inst_19086);

(statearr_19170_19211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (23))){
var inst_19134 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
if(cljs.core.truth_(inst_19134)){
var statearr_19171_19212 = state_19149__$1;
(statearr_19171_19212[(1)] = (24));

} else {
var statearr_19172_19213 = state_19149__$1;
(statearr_19172_19213[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (19))){
var inst_19131 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
if(cljs.core.truth_(inst_19131)){
var statearr_19173_19214 = state_19149__$1;
(statearr_19173_19214[(1)] = (20));

} else {
var statearr_19174_19215 = state_19149__$1;
(statearr_19174_19215[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (11))){
var inst_19108 = (state_19149[(8)]);
var inst_19114 = (inst_19108 == null);
var state_19149__$1 = state_19149;
if(cljs.core.truth_(inst_19114)){
var statearr_19175_19216 = state_19149__$1;
(statearr_19175_19216[(1)] = (14));

} else {
var statearr_19176_19217 = state_19149__$1;
(statearr_19176_19217[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (9))){
var inst_19101 = (state_19149[(10)]);
var inst_19101__$1 = (state_19149[(2)]);
var inst_19102 = cljs.core.get.call(null,inst_19101__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19103 = cljs.core.get.call(null,inst_19101__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19104 = cljs.core.get.call(null,inst_19101__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19149__$1 = (function (){var statearr_19177 = state_19149;
(statearr_19177[(17)] = inst_19103);

(statearr_19177[(16)] = inst_19104);

(statearr_19177[(10)] = inst_19101__$1);

return statearr_19177;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19149__$1,(10),inst_19102);
} else {
if((state_val_19150 === (5))){
var inst_19093 = (state_19149[(7)]);
var inst_19096 = cljs.core.seq_QMARK_.call(null,inst_19093);
var state_19149__$1 = state_19149;
if(inst_19096){
var statearr_19178_19218 = state_19149__$1;
(statearr_19178_19218[(1)] = (7));

} else {
var statearr_19179_19219 = state_19149__$1;
(statearr_19179_19219[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (14))){
var inst_19109 = (state_19149[(15)]);
var inst_19116 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19109);
var state_19149__$1 = state_19149;
var statearr_19180_19220 = state_19149__$1;
(statearr_19180_19220[(2)] = inst_19116);

(statearr_19180_19220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (26))){
var inst_19139 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19181_19221 = state_19149__$1;
(statearr_19181_19221[(2)] = inst_19139);

(statearr_19181_19221[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (16))){
var inst_19119 = (state_19149[(2)]);
var inst_19120 = calc_state.call(null);
var inst_19093 = inst_19120;
var state_19149__$1 = (function (){var statearr_19182 = state_19149;
(statearr_19182[(7)] = inst_19093);

(statearr_19182[(18)] = inst_19119);

return statearr_19182;
})();
var statearr_19183_19222 = state_19149__$1;
(statearr_19183_19222[(2)] = null);

(statearr_19183_19222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (10))){
var inst_19109 = (state_19149[(15)]);
var inst_19108 = (state_19149[(8)]);
var inst_19107 = (state_19149[(2)]);
var inst_19108__$1 = cljs.core.nth.call(null,inst_19107,(0),null);
var inst_19109__$1 = cljs.core.nth.call(null,inst_19107,(1),null);
var inst_19110 = (inst_19108__$1 == null);
var inst_19111 = cljs.core._EQ_.call(null,inst_19109__$1,change);
var inst_19112 = (inst_19110) || (inst_19111);
var state_19149__$1 = (function (){var statearr_19184 = state_19149;
(statearr_19184[(15)] = inst_19109__$1);

(statearr_19184[(8)] = inst_19108__$1);

return statearr_19184;
})();
if(cljs.core.truth_(inst_19112)){
var statearr_19185_19223 = state_19149__$1;
(statearr_19185_19223[(1)] = (11));

} else {
var statearr_19186_19224 = state_19149__$1;
(statearr_19186_19224[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (18))){
var inst_19103 = (state_19149[(17)]);
var inst_19109 = (state_19149[(15)]);
var inst_19104 = (state_19149[(16)]);
var inst_19126 = cljs.core.empty_QMARK_.call(null,inst_19104);
var inst_19127 = inst_19103.call(null,inst_19109);
var inst_19128 = cljs.core.not.call(null,inst_19127);
var inst_19129 = (inst_19126) && (inst_19128);
var state_19149__$1 = state_19149;
var statearr_19187_19225 = state_19149__$1;
(statearr_19187_19225[(2)] = inst_19129);

(statearr_19187_19225[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (8))){
var inst_19093 = (state_19149[(7)]);
var state_19149__$1 = state_19149;
var statearr_19188_19226 = state_19149__$1;
(statearr_19188_19226[(2)] = inst_19093);

(statearr_19188_19226[(1)] = (9));


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
});})(c__11828__auto___19196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11813__auto__,c__11828__auto___19196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_19192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19192[(0)] = state_machine__11814__auto__);

(statearr_19192[(1)] = (1));

return statearr_19192;
});
var state_machine__11814__auto____1 = (function (state_19149){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_19149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e19193){if((e19193 instanceof Object)){
var ex__11817__auto__ = e19193;
var statearr_19194_19227 = state_19149;
(statearr_19194_19227[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19228 = state_19149;
state_19149 = G__19228;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_19149){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_19149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___19196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11830__auto__ = (function (){var statearr_19195 = f__11829__auto__.call(null);
(statearr_19195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___19196);

return statearr_19195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___19196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj19230 = {};
return obj19230;
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
return (function (){var or__3636__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return (function (){var or__3636__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
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
return (function (){var or__3636__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return (function (){var or__3636__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
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
var or__3636__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3636__auto__,mults){
return (function (p1__19231_SHARP_){
if(cljs.core.truth_(p1__19231_SHARP_.call(null,topic))){
return p1__19231_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19231_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3636__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19354 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19354 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19355){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19355 = meta19355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19354.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19354.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19354.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t19354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19356){
var self__ = this;
var _19356__$1 = this;
return self__.meta19355;
});})(mults,ensure_mult))
;

cljs.core.async.t19354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19356,meta19355__$1){
var self__ = this;
var _19356__$1 = this;
return (new cljs.core.async.t19354(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19355__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19354.cljs$lang$type = true;

cljs.core.async.t19354.cljs$lang$ctorStr = "cljs.core.async/t19354";

cljs.core.async.t19354.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t19354");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19354 = ((function (mults,ensure_mult){
return (function __GT_t19354(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19355){
return (new cljs.core.async.t19354(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19355));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19354(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
})()
;
var c__11828__auto___19476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___19476,mults,ensure_mult,p){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___19476,mults,ensure_mult,p){
return (function (state_19428){
var state_val_19429 = (state_19428[(1)]);
if((state_val_19429 === (7))){
var inst_19424 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19430_19477 = state_19428__$1;
(statearr_19430_19477[(2)] = inst_19424);

(statearr_19430_19477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (20))){
var state_19428__$1 = state_19428;
var statearr_19431_19478 = state_19428__$1;
(statearr_19431_19478[(2)] = null);

(statearr_19431_19478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (1))){
var state_19428__$1 = state_19428;
var statearr_19432_19479 = state_19428__$1;
(statearr_19432_19479[(2)] = null);

(statearr_19432_19479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (24))){
var inst_19407 = (state_19428[(7)]);
var inst_19416 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19407);
var state_19428__$1 = state_19428;
var statearr_19433_19480 = state_19428__$1;
(statearr_19433_19480[(2)] = inst_19416);

(statearr_19433_19480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (4))){
var inst_19359 = (state_19428[(8)]);
var inst_19359__$1 = (state_19428[(2)]);
var inst_19360 = (inst_19359__$1 == null);
var state_19428__$1 = (function (){var statearr_19434 = state_19428;
(statearr_19434[(8)] = inst_19359__$1);

return statearr_19434;
})();
if(cljs.core.truth_(inst_19360)){
var statearr_19435_19481 = state_19428__$1;
(statearr_19435_19481[(1)] = (5));

} else {
var statearr_19436_19482 = state_19428__$1;
(statearr_19436_19482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (15))){
var inst_19401 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19437_19483 = state_19428__$1;
(statearr_19437_19483[(2)] = inst_19401);

(statearr_19437_19483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (21))){
var inst_19421 = (state_19428[(2)]);
var state_19428__$1 = (function (){var statearr_19438 = state_19428;
(statearr_19438[(9)] = inst_19421);

return statearr_19438;
})();
var statearr_19439_19484 = state_19428__$1;
(statearr_19439_19484[(2)] = null);

(statearr_19439_19484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (13))){
var inst_19383 = (state_19428[(10)]);
var inst_19385 = cljs.core.chunked_seq_QMARK_.call(null,inst_19383);
var state_19428__$1 = state_19428;
if(inst_19385){
var statearr_19440_19485 = state_19428__$1;
(statearr_19440_19485[(1)] = (16));

} else {
var statearr_19441_19486 = state_19428__$1;
(statearr_19441_19486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (22))){
var inst_19413 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
if(cljs.core.truth_(inst_19413)){
var statearr_19442_19487 = state_19428__$1;
(statearr_19442_19487[(1)] = (23));

} else {
var statearr_19443_19488 = state_19428__$1;
(statearr_19443_19488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (6))){
var inst_19409 = (state_19428[(11)]);
var inst_19359 = (state_19428[(8)]);
var inst_19407 = (state_19428[(7)]);
var inst_19407__$1 = topic_fn.call(null,inst_19359);
var inst_19408 = cljs.core.deref.call(null,mults);
var inst_19409__$1 = cljs.core.get.call(null,inst_19408,inst_19407__$1);
var state_19428__$1 = (function (){var statearr_19444 = state_19428;
(statearr_19444[(11)] = inst_19409__$1);

(statearr_19444[(7)] = inst_19407__$1);

return statearr_19444;
})();
if(cljs.core.truth_(inst_19409__$1)){
var statearr_19445_19489 = state_19428__$1;
(statearr_19445_19489[(1)] = (19));

} else {
var statearr_19446_19490 = state_19428__$1;
(statearr_19446_19490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (25))){
var inst_19418 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19447_19491 = state_19428__$1;
(statearr_19447_19491[(2)] = inst_19418);

(statearr_19447_19491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (17))){
var inst_19383 = (state_19428[(10)]);
var inst_19392 = cljs.core.first.call(null,inst_19383);
var inst_19393 = cljs.core.async.muxch_STAR_.call(null,inst_19392);
var inst_19394 = cljs.core.async.close_BANG_.call(null,inst_19393);
var inst_19395 = cljs.core.next.call(null,inst_19383);
var inst_19369 = inst_19395;
var inst_19370 = null;
var inst_19371 = (0);
var inst_19372 = (0);
var state_19428__$1 = (function (){var statearr_19448 = state_19428;
(statearr_19448[(12)] = inst_19372);

(statearr_19448[(13)] = inst_19371);

(statearr_19448[(14)] = inst_19370);

(statearr_19448[(15)] = inst_19394);

(statearr_19448[(16)] = inst_19369);

return statearr_19448;
})();
var statearr_19449_19492 = state_19428__$1;
(statearr_19449_19492[(2)] = null);

(statearr_19449_19492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (3))){
var inst_19426 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19428__$1,inst_19426);
} else {
if((state_val_19429 === (12))){
var inst_19403 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19450_19493 = state_19428__$1;
(statearr_19450_19493[(2)] = inst_19403);

(statearr_19450_19493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (2))){
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19428__$1,(4),ch);
} else {
if((state_val_19429 === (23))){
var state_19428__$1 = state_19428;
var statearr_19451_19494 = state_19428__$1;
(statearr_19451_19494[(2)] = null);

(statearr_19451_19494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (19))){
var inst_19409 = (state_19428[(11)]);
var inst_19359 = (state_19428[(8)]);
var inst_19411 = cljs.core.async.muxch_STAR_.call(null,inst_19409);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19428__$1,(22),inst_19411,inst_19359);
} else {
if((state_val_19429 === (11))){
var inst_19383 = (state_19428[(10)]);
var inst_19369 = (state_19428[(16)]);
var inst_19383__$1 = cljs.core.seq.call(null,inst_19369);
var state_19428__$1 = (function (){var statearr_19452 = state_19428;
(statearr_19452[(10)] = inst_19383__$1);

return statearr_19452;
})();
if(inst_19383__$1){
var statearr_19453_19495 = state_19428__$1;
(statearr_19453_19495[(1)] = (13));

} else {
var statearr_19454_19496 = state_19428__$1;
(statearr_19454_19496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (9))){
var inst_19405 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19455_19497 = state_19428__$1;
(statearr_19455_19497[(2)] = inst_19405);

(statearr_19455_19497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (5))){
var inst_19366 = cljs.core.deref.call(null,mults);
var inst_19367 = cljs.core.vals.call(null,inst_19366);
var inst_19368 = cljs.core.seq.call(null,inst_19367);
var inst_19369 = inst_19368;
var inst_19370 = null;
var inst_19371 = (0);
var inst_19372 = (0);
var state_19428__$1 = (function (){var statearr_19456 = state_19428;
(statearr_19456[(12)] = inst_19372);

(statearr_19456[(13)] = inst_19371);

(statearr_19456[(14)] = inst_19370);

(statearr_19456[(16)] = inst_19369);

return statearr_19456;
})();
var statearr_19457_19498 = state_19428__$1;
(statearr_19457_19498[(2)] = null);

(statearr_19457_19498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (14))){
var state_19428__$1 = state_19428;
var statearr_19461_19499 = state_19428__$1;
(statearr_19461_19499[(2)] = null);

(statearr_19461_19499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (16))){
var inst_19383 = (state_19428[(10)]);
var inst_19387 = cljs.core.chunk_first.call(null,inst_19383);
var inst_19388 = cljs.core.chunk_rest.call(null,inst_19383);
var inst_19389 = cljs.core.count.call(null,inst_19387);
var inst_19369 = inst_19388;
var inst_19370 = inst_19387;
var inst_19371 = inst_19389;
var inst_19372 = (0);
var state_19428__$1 = (function (){var statearr_19462 = state_19428;
(statearr_19462[(12)] = inst_19372);

(statearr_19462[(13)] = inst_19371);

(statearr_19462[(14)] = inst_19370);

(statearr_19462[(16)] = inst_19369);

return statearr_19462;
})();
var statearr_19463_19500 = state_19428__$1;
(statearr_19463_19500[(2)] = null);

(statearr_19463_19500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (10))){
var inst_19372 = (state_19428[(12)]);
var inst_19371 = (state_19428[(13)]);
var inst_19370 = (state_19428[(14)]);
var inst_19369 = (state_19428[(16)]);
var inst_19377 = cljs.core._nth.call(null,inst_19370,inst_19372);
var inst_19378 = cljs.core.async.muxch_STAR_.call(null,inst_19377);
var inst_19379 = cljs.core.async.close_BANG_.call(null,inst_19378);
var inst_19380 = (inst_19372 + (1));
var tmp19458 = inst_19371;
var tmp19459 = inst_19370;
var tmp19460 = inst_19369;
var inst_19369__$1 = tmp19460;
var inst_19370__$1 = tmp19459;
var inst_19371__$1 = tmp19458;
var inst_19372__$1 = inst_19380;
var state_19428__$1 = (function (){var statearr_19464 = state_19428;
(statearr_19464[(12)] = inst_19372__$1);

(statearr_19464[(13)] = inst_19371__$1);

(statearr_19464[(14)] = inst_19370__$1);

(statearr_19464[(17)] = inst_19379);

(statearr_19464[(16)] = inst_19369__$1);

return statearr_19464;
})();
var statearr_19465_19501 = state_19428__$1;
(statearr_19465_19501[(2)] = null);

(statearr_19465_19501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (18))){
var inst_19398 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19466_19502 = state_19428__$1;
(statearr_19466_19502[(2)] = inst_19398);

(statearr_19466_19502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (8))){
var inst_19372 = (state_19428[(12)]);
var inst_19371 = (state_19428[(13)]);
var inst_19374 = (inst_19372 < inst_19371);
var inst_19375 = inst_19374;
var state_19428__$1 = state_19428;
if(cljs.core.truth_(inst_19375)){
var statearr_19467_19503 = state_19428__$1;
(statearr_19467_19503[(1)] = (10));

} else {
var statearr_19468_19504 = state_19428__$1;
(statearr_19468_19504[(1)] = (11));

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
});})(c__11828__auto___19476,mults,ensure_mult,p))
;
return ((function (switch__11813__auto__,c__11828__auto___19476,mults,ensure_mult,p){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_19472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19472[(0)] = state_machine__11814__auto__);

(statearr_19472[(1)] = (1));

return statearr_19472;
});
var state_machine__11814__auto____1 = (function (state_19428){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_19428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e19473){if((e19473 instanceof Object)){
var ex__11817__auto__ = e19473;
var statearr_19474_19505 = state_19428;
(statearr_19474_19505[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19506 = state_19428;
state_19428 = G__19506;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_19428){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_19428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___19476,mults,ensure_mult,p))
})();
var state__11830__auto__ = (function (){var statearr_19475 = f__11829__auto__.call(null);
(statearr_19475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___19476);

return statearr_19475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___19476,mults,ensure_mult,p))
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
var c__11828__auto___19643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___19643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___19643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (7))){
var state_19613__$1 = state_19613;
var statearr_19615_19644 = state_19613__$1;
(statearr_19615_19644[(2)] = null);

(statearr_19615_19644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (1))){
var state_19613__$1 = state_19613;
var statearr_19616_19645 = state_19613__$1;
(statearr_19616_19645[(2)] = null);

(statearr_19616_19645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (4))){
var inst_19577 = (state_19613[(7)]);
var inst_19579 = (inst_19577 < cnt);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19579)){
var statearr_19617_19646 = state_19613__$1;
(statearr_19617_19646[(1)] = (6));

} else {
var statearr_19618_19647 = state_19613__$1;
(statearr_19618_19647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (15))){
var inst_19609 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19619_19648 = state_19613__$1;
(statearr_19619_19648[(2)] = inst_19609);

(statearr_19619_19648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (13))){
var inst_19602 = cljs.core.async.close_BANG_.call(null,out);
var state_19613__$1 = state_19613;
var statearr_19620_19649 = state_19613__$1;
(statearr_19620_19649[(2)] = inst_19602);

(statearr_19620_19649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (6))){
var state_19613__$1 = state_19613;
var statearr_19621_19650 = state_19613__$1;
(statearr_19621_19650[(2)] = null);

(statearr_19621_19650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (3))){
var inst_19611 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19613__$1,inst_19611);
} else {
if((state_val_19614 === (12))){
var inst_19599 = (state_19613[(8)]);
var inst_19599__$1 = (state_19613[(2)]);
var inst_19600 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19599__$1);
var state_19613__$1 = (function (){var statearr_19622 = state_19613;
(statearr_19622[(8)] = inst_19599__$1);

return statearr_19622;
})();
if(cljs.core.truth_(inst_19600)){
var statearr_19623_19651 = state_19613__$1;
(statearr_19623_19651[(1)] = (13));

} else {
var statearr_19624_19652 = state_19613__$1;
(statearr_19624_19652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (2))){
var inst_19576 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19577 = (0);
var state_19613__$1 = (function (){var statearr_19625 = state_19613;
(statearr_19625[(7)] = inst_19577);

(statearr_19625[(9)] = inst_19576);

return statearr_19625;
})();
var statearr_19626_19653 = state_19613__$1;
(statearr_19626_19653[(2)] = null);

(statearr_19626_19653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (11))){
var inst_19577 = (state_19613[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19613,(10),Object,null,(9));
var inst_19586 = chs__$1.call(null,inst_19577);
var inst_19587 = done.call(null,inst_19577);
var inst_19588 = cljs.core.async.take_BANG_.call(null,inst_19586,inst_19587);
var state_19613__$1 = state_19613;
var statearr_19627_19654 = state_19613__$1;
(statearr_19627_19654[(2)] = inst_19588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (9))){
var inst_19577 = (state_19613[(7)]);
var inst_19590 = (state_19613[(2)]);
var inst_19591 = (inst_19577 + (1));
var inst_19577__$1 = inst_19591;
var state_19613__$1 = (function (){var statearr_19628 = state_19613;
(statearr_19628[(10)] = inst_19590);

(statearr_19628[(7)] = inst_19577__$1);

return statearr_19628;
})();
var statearr_19629_19655 = state_19613__$1;
(statearr_19629_19655[(2)] = null);

(statearr_19629_19655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (5))){
var inst_19597 = (state_19613[(2)]);
var state_19613__$1 = (function (){var statearr_19630 = state_19613;
(statearr_19630[(11)] = inst_19597);

return statearr_19630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19613__$1,(12),dchan);
} else {
if((state_val_19614 === (14))){
var inst_19599 = (state_19613[(8)]);
var inst_19604 = cljs.core.apply.call(null,f,inst_19599);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19613__$1,(16),out,inst_19604);
} else {
if((state_val_19614 === (16))){
var inst_19606 = (state_19613[(2)]);
var state_19613__$1 = (function (){var statearr_19631 = state_19613;
(statearr_19631[(12)] = inst_19606);

return statearr_19631;
})();
var statearr_19632_19656 = state_19613__$1;
(statearr_19632_19656[(2)] = null);

(statearr_19632_19656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (10))){
var inst_19581 = (state_19613[(2)]);
var inst_19582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19613__$1 = (function (){var statearr_19633 = state_19613;
(statearr_19633[(13)] = inst_19581);

return statearr_19633;
})();
var statearr_19634_19657 = state_19613__$1;
(statearr_19634_19657[(2)] = inst_19582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (8))){
var inst_19595 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19635_19658 = state_19613__$1;
(statearr_19635_19658[(2)] = inst_19595);

(statearr_19635_19658[(1)] = (5));


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
});})(c__11828__auto___19643,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11813__auto__,c__11828__auto___19643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_19639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19639[(0)] = state_machine__11814__auto__);

(statearr_19639[(1)] = (1));

return statearr_19639;
});
var state_machine__11814__auto____1 = (function (state_19613){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_19613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e19640){if((e19640 instanceof Object)){
var ex__11817__auto__ = e19640;
var statearr_19641_19659 = state_19613;
(statearr_19641_19659[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19660 = state_19613;
state_19613 = G__19660;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___19643,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11830__auto__ = (function (){var statearr_19642 = f__11829__auto__.call(null);
(statearr_19642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___19643);

return statearr_19642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___19643,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11828__auto___19768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___19768,out){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___19768,out){
return (function (state_19744){
var state_val_19745 = (state_19744[(1)]);
if((state_val_19745 === (7))){
var inst_19723 = (state_19744[(7)]);
var inst_19724 = (state_19744[(8)]);
var inst_19723__$1 = (state_19744[(2)]);
var inst_19724__$1 = cljs.core.nth.call(null,inst_19723__$1,(0),null);
var inst_19725 = cljs.core.nth.call(null,inst_19723__$1,(1),null);
var inst_19726 = (inst_19724__$1 == null);
var state_19744__$1 = (function (){var statearr_19746 = state_19744;
(statearr_19746[(9)] = inst_19725);

(statearr_19746[(7)] = inst_19723__$1);

(statearr_19746[(8)] = inst_19724__$1);

return statearr_19746;
})();
if(cljs.core.truth_(inst_19726)){
var statearr_19747_19769 = state_19744__$1;
(statearr_19747_19769[(1)] = (8));

} else {
var statearr_19748_19770 = state_19744__$1;
(statearr_19748_19770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (1))){
var inst_19715 = cljs.core.vec.call(null,chs);
var inst_19716 = inst_19715;
var state_19744__$1 = (function (){var statearr_19749 = state_19744;
(statearr_19749[(10)] = inst_19716);

return statearr_19749;
})();
var statearr_19750_19771 = state_19744__$1;
(statearr_19750_19771[(2)] = null);

(statearr_19750_19771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (4))){
var inst_19716 = (state_19744[(10)]);
var state_19744__$1 = state_19744;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19744__$1,(7),inst_19716);
} else {
if((state_val_19745 === (6))){
var inst_19740 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19751_19772 = state_19744__$1;
(statearr_19751_19772[(2)] = inst_19740);

(statearr_19751_19772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (3))){
var inst_19742 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19744__$1,inst_19742);
} else {
if((state_val_19745 === (2))){
var inst_19716 = (state_19744[(10)]);
var inst_19718 = cljs.core.count.call(null,inst_19716);
var inst_19719 = (inst_19718 > (0));
var state_19744__$1 = state_19744;
if(cljs.core.truth_(inst_19719)){
var statearr_19753_19773 = state_19744__$1;
(statearr_19753_19773[(1)] = (4));

} else {
var statearr_19754_19774 = state_19744__$1;
(statearr_19754_19774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (11))){
var inst_19716 = (state_19744[(10)]);
var inst_19733 = (state_19744[(2)]);
var tmp19752 = inst_19716;
var inst_19716__$1 = tmp19752;
var state_19744__$1 = (function (){var statearr_19755 = state_19744;
(statearr_19755[(11)] = inst_19733);

(statearr_19755[(10)] = inst_19716__$1);

return statearr_19755;
})();
var statearr_19756_19775 = state_19744__$1;
(statearr_19756_19775[(2)] = null);

(statearr_19756_19775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (9))){
var inst_19724 = (state_19744[(8)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19744__$1,(11),out,inst_19724);
} else {
if((state_val_19745 === (5))){
var inst_19738 = cljs.core.async.close_BANG_.call(null,out);
var state_19744__$1 = state_19744;
var statearr_19757_19776 = state_19744__$1;
(statearr_19757_19776[(2)] = inst_19738);

(statearr_19757_19776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (10))){
var inst_19736 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19758_19777 = state_19744__$1;
(statearr_19758_19777[(2)] = inst_19736);

(statearr_19758_19777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (8))){
var inst_19716 = (state_19744[(10)]);
var inst_19725 = (state_19744[(9)]);
var inst_19723 = (state_19744[(7)]);
var inst_19724 = (state_19744[(8)]);
var inst_19728 = (function (){var c = inst_19725;
var v = inst_19724;
var vec__19721 = inst_19723;
var cs = inst_19716;
return ((function (c,v,vec__19721,cs,inst_19716,inst_19725,inst_19723,inst_19724,state_val_19745,c__11828__auto___19768,out){
return (function (p1__19661_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19661_SHARP_);
});
;})(c,v,vec__19721,cs,inst_19716,inst_19725,inst_19723,inst_19724,state_val_19745,c__11828__auto___19768,out))
})();
var inst_19729 = cljs.core.filterv.call(null,inst_19728,inst_19716);
var inst_19716__$1 = inst_19729;
var state_19744__$1 = (function (){var statearr_19759 = state_19744;
(statearr_19759[(10)] = inst_19716__$1);

return statearr_19759;
})();
var statearr_19760_19778 = state_19744__$1;
(statearr_19760_19778[(2)] = null);

(statearr_19760_19778[(1)] = (2));


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
});})(c__11828__auto___19768,out))
;
return ((function (switch__11813__auto__,c__11828__auto___19768,out){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_19764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19764[(0)] = state_machine__11814__auto__);

(statearr_19764[(1)] = (1));

return statearr_19764;
});
var state_machine__11814__auto____1 = (function (state_19744){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_19744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e19765){if((e19765 instanceof Object)){
var ex__11817__auto__ = e19765;
var statearr_19766_19779 = state_19744;
(statearr_19766_19779[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19780 = state_19744;
state_19744 = G__19780;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_19744){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_19744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___19768,out))
})();
var state__11830__auto__ = (function (){var statearr_19767 = f__11829__auto__.call(null);
(statearr_19767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___19768);

return statearr_19767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___19768,out))
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
var c__11828__auto___19873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___19873,out){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___19873,out){
return (function (state_19850){
var state_val_19851 = (state_19850[(1)]);
if((state_val_19851 === (7))){
var inst_19832 = (state_19850[(7)]);
var inst_19832__$1 = (state_19850[(2)]);
var inst_19833 = (inst_19832__$1 == null);
var inst_19834 = cljs.core.not.call(null,inst_19833);
var state_19850__$1 = (function (){var statearr_19852 = state_19850;
(statearr_19852[(7)] = inst_19832__$1);

return statearr_19852;
})();
if(inst_19834){
var statearr_19853_19874 = state_19850__$1;
(statearr_19853_19874[(1)] = (8));

} else {
var statearr_19854_19875 = state_19850__$1;
(statearr_19854_19875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (1))){
var inst_19827 = (0);
var state_19850__$1 = (function (){var statearr_19855 = state_19850;
(statearr_19855[(8)] = inst_19827);

return statearr_19855;
})();
var statearr_19856_19876 = state_19850__$1;
(statearr_19856_19876[(2)] = null);

(statearr_19856_19876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (4))){
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19850__$1,(7),ch);
} else {
if((state_val_19851 === (6))){
var inst_19845 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
var statearr_19857_19877 = state_19850__$1;
(statearr_19857_19877[(2)] = inst_19845);

(statearr_19857_19877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (3))){
var inst_19847 = (state_19850[(2)]);
var inst_19848 = cljs.core.async.close_BANG_.call(null,out);
var state_19850__$1 = (function (){var statearr_19858 = state_19850;
(statearr_19858[(9)] = inst_19847);

return statearr_19858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19850__$1,inst_19848);
} else {
if((state_val_19851 === (2))){
var inst_19827 = (state_19850[(8)]);
var inst_19829 = (inst_19827 < n);
var state_19850__$1 = state_19850;
if(cljs.core.truth_(inst_19829)){
var statearr_19859_19878 = state_19850__$1;
(statearr_19859_19878[(1)] = (4));

} else {
var statearr_19860_19879 = state_19850__$1;
(statearr_19860_19879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (11))){
var inst_19827 = (state_19850[(8)]);
var inst_19837 = (state_19850[(2)]);
var inst_19838 = (inst_19827 + (1));
var inst_19827__$1 = inst_19838;
var state_19850__$1 = (function (){var statearr_19861 = state_19850;
(statearr_19861[(10)] = inst_19837);

(statearr_19861[(8)] = inst_19827__$1);

return statearr_19861;
})();
var statearr_19862_19880 = state_19850__$1;
(statearr_19862_19880[(2)] = null);

(statearr_19862_19880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (9))){
var state_19850__$1 = state_19850;
var statearr_19863_19881 = state_19850__$1;
(statearr_19863_19881[(2)] = null);

(statearr_19863_19881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (5))){
var state_19850__$1 = state_19850;
var statearr_19864_19882 = state_19850__$1;
(statearr_19864_19882[(2)] = null);

(statearr_19864_19882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (10))){
var inst_19842 = (state_19850[(2)]);
var state_19850__$1 = state_19850;
var statearr_19865_19883 = state_19850__$1;
(statearr_19865_19883[(2)] = inst_19842);

(statearr_19865_19883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19851 === (8))){
var inst_19832 = (state_19850[(7)]);
var state_19850__$1 = state_19850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19850__$1,(11),out,inst_19832);
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
});})(c__11828__auto___19873,out))
;
return ((function (switch__11813__auto__,c__11828__auto___19873,out){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_19869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19869[(0)] = state_machine__11814__auto__);

(statearr_19869[(1)] = (1));

return statearr_19869;
});
var state_machine__11814__auto____1 = (function (state_19850){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_19850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e19870){if((e19870 instanceof Object)){
var ex__11817__auto__ = e19870;
var statearr_19871_19884 = state_19850;
(statearr_19871_19884[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19885 = state_19850;
state_19850 = G__19885;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_19850){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_19850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___19873,out))
})();
var state__11830__auto__ = (function (){var statearr_19872 = f__11829__auto__.call(null);
(statearr_19872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___19873);

return statearr_19872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___19873,out))
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
if(typeof cljs.core.async.t19893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19893 = (function (ch,f,map_LT_,meta19894){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19894 = meta19894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19896 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19896 = (function (fn1,_,meta19894,map_LT_,f,ch,meta19897){
this.fn1 = fn1;
this._ = _;
this.meta19894 = meta19894;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19897 = meta19897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19896.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19886_SHARP_){
return f1.call(null,(((p1__19886_SHARP_ == null))?null:self__.f.call(null,p1__19886_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19898){
var self__ = this;
var _19898__$1 = this;
return self__.meta19897;
});})(___$1))
;

cljs.core.async.t19896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19898,meta19897__$1){
var self__ = this;
var _19898__$1 = this;
return (new cljs.core.async.t19896(self__.fn1,self__._,self__.meta19894,self__.map_LT_,self__.f,self__.ch,meta19897__$1));
});})(___$1))
;

cljs.core.async.t19896.cljs$lang$type = true;

cljs.core.async.t19896.cljs$lang$ctorStr = "cljs.core.async/t19896";

cljs.core.async.t19896.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t19896");
});})(___$1))
;

cljs.core.async.__GT_t19896 = ((function (___$1){
return (function __GT_t19896(fn1__$1,___$2,meta19894__$1,map_LT___$1,f__$1,ch__$1,meta19897){
return (new cljs.core.async.t19896(fn1__$1,___$2,meta19894__$1,map_LT___$1,f__$1,ch__$1,meta19897));
});})(___$1))
;

}

return (new cljs.core.async.t19896(fn1,___$1,self__.meta19894,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3624__auto__ = ret;
if(cljs.core.truth_(and__3624__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3624__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19895){
var self__ = this;
var _19895__$1 = this;
return self__.meta19894;
});

cljs.core.async.t19893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19895,meta19894__$1){
var self__ = this;
var _19895__$1 = this;
return (new cljs.core.async.t19893(self__.ch,self__.f,self__.map_LT_,meta19894__$1));
});

cljs.core.async.t19893.cljs$lang$type = true;

cljs.core.async.t19893.cljs$lang$ctorStr = "cljs.core.async/t19893";

cljs.core.async.t19893.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t19893");
});

cljs.core.async.__GT_t19893 = (function __GT_t19893(ch__$1,f__$1,map_LT___$1,meta19894){
return (new cljs.core.async.t19893(ch__$1,f__$1,map_LT___$1,meta19894));
});

}

return (new cljs.core.async.t19893(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19902 = (function (ch,f,map_GT_,meta19903){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19903 = meta19903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19902.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19904){
var self__ = this;
var _19904__$1 = this;
return self__.meta19903;
});

cljs.core.async.t19902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19904,meta19903__$1){
var self__ = this;
var _19904__$1 = this;
return (new cljs.core.async.t19902(self__.ch,self__.f,self__.map_GT_,meta19903__$1));
});

cljs.core.async.t19902.cljs$lang$type = true;

cljs.core.async.t19902.cljs$lang$ctorStr = "cljs.core.async/t19902";

cljs.core.async.t19902.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t19902");
});

cljs.core.async.__GT_t19902 = (function __GT_t19902(ch__$1,f__$1,map_GT___$1,meta19903){
return (new cljs.core.async.t19902(ch__$1,f__$1,map_GT___$1,meta19903));
});

}

return (new cljs.core.async.t19902(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19908 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19908 = (function (ch,p,filter_GT_,meta19909){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19909 = meta19909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19908.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19908.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19910){
var self__ = this;
var _19910__$1 = this;
return self__.meta19909;
});

cljs.core.async.t19908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19910,meta19909__$1){
var self__ = this;
var _19910__$1 = this;
return (new cljs.core.async.t19908(self__.ch,self__.p,self__.filter_GT_,meta19909__$1));
});

cljs.core.async.t19908.cljs$lang$type = true;

cljs.core.async.t19908.cljs$lang$ctorStr = "cljs.core.async/t19908";

cljs.core.async.t19908.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"cljs.core.async/t19908");
});

cljs.core.async.__GT_t19908 = (function __GT_t19908(ch__$1,p__$1,filter_GT___$1,meta19909){
return (new cljs.core.async.t19908(ch__$1,p__$1,filter_GT___$1,meta19909));
});

}

return (new cljs.core.async.t19908(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async.cljs"], null)));
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
var c__11828__auto___19993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___19993,out){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___19993,out){
return (function (state_19972){
var state_val_19973 = (state_19972[(1)]);
if((state_val_19973 === (7))){
var inst_19968 = (state_19972[(2)]);
var state_19972__$1 = state_19972;
var statearr_19974_19994 = state_19972__$1;
(statearr_19974_19994[(2)] = inst_19968);

(statearr_19974_19994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (1))){
var state_19972__$1 = state_19972;
var statearr_19975_19995 = state_19972__$1;
(statearr_19975_19995[(2)] = null);

(statearr_19975_19995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (4))){
var inst_19954 = (state_19972[(7)]);
var inst_19954__$1 = (state_19972[(2)]);
var inst_19955 = (inst_19954__$1 == null);
var state_19972__$1 = (function (){var statearr_19976 = state_19972;
(statearr_19976[(7)] = inst_19954__$1);

return statearr_19976;
})();
if(cljs.core.truth_(inst_19955)){
var statearr_19977_19996 = state_19972__$1;
(statearr_19977_19996[(1)] = (5));

} else {
var statearr_19978_19997 = state_19972__$1;
(statearr_19978_19997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (6))){
var inst_19954 = (state_19972[(7)]);
var inst_19959 = p.call(null,inst_19954);
var state_19972__$1 = state_19972;
if(cljs.core.truth_(inst_19959)){
var statearr_19979_19998 = state_19972__$1;
(statearr_19979_19998[(1)] = (8));

} else {
var statearr_19980_19999 = state_19972__$1;
(statearr_19980_19999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (3))){
var inst_19970 = (state_19972[(2)]);
var state_19972__$1 = state_19972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19972__$1,inst_19970);
} else {
if((state_val_19973 === (2))){
var state_19972__$1 = state_19972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19972__$1,(4),ch);
} else {
if((state_val_19973 === (11))){
var inst_19962 = (state_19972[(2)]);
var state_19972__$1 = state_19972;
var statearr_19981_20000 = state_19972__$1;
(statearr_19981_20000[(2)] = inst_19962);

(statearr_19981_20000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (9))){
var state_19972__$1 = state_19972;
var statearr_19982_20001 = state_19972__$1;
(statearr_19982_20001[(2)] = null);

(statearr_19982_20001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (5))){
var inst_19957 = cljs.core.async.close_BANG_.call(null,out);
var state_19972__$1 = state_19972;
var statearr_19983_20002 = state_19972__$1;
(statearr_19983_20002[(2)] = inst_19957);

(statearr_19983_20002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (10))){
var inst_19965 = (state_19972[(2)]);
var state_19972__$1 = (function (){var statearr_19984 = state_19972;
(statearr_19984[(8)] = inst_19965);

return statearr_19984;
})();
var statearr_19985_20003 = state_19972__$1;
(statearr_19985_20003[(2)] = null);

(statearr_19985_20003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19973 === (8))){
var inst_19954 = (state_19972[(7)]);
var state_19972__$1 = state_19972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19972__$1,(11),out,inst_19954);
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
});})(c__11828__auto___19993,out))
;
return ((function (switch__11813__auto__,c__11828__auto___19993,out){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_19989 = [null,null,null,null,null,null,null,null,null];
(statearr_19989[(0)] = state_machine__11814__auto__);

(statearr_19989[(1)] = (1));

return statearr_19989;
});
var state_machine__11814__auto____1 = (function (state_19972){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_19972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e19990){if((e19990 instanceof Object)){
var ex__11817__auto__ = e19990;
var statearr_19991_20004 = state_19972;
(statearr_19991_20004[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20005 = state_19972;
state_19972 = G__20005;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_19972){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_19972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___19993,out))
})();
var state__11830__auto__ = (function (){var statearr_19992 = f__11829__auto__.call(null);
(statearr_19992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___19993);

return statearr_19992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___19993,out))
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
var c__11828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto__){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto__){
return (function (state_20171){
var state_val_20172 = (state_20171[(1)]);
if((state_val_20172 === (7))){
var inst_20167 = (state_20171[(2)]);
var state_20171__$1 = state_20171;
var statearr_20173_20214 = state_20171__$1;
(statearr_20173_20214[(2)] = inst_20167);

(statearr_20173_20214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (20))){
var inst_20137 = (state_20171[(7)]);
var inst_20148 = (state_20171[(2)]);
var inst_20149 = cljs.core.next.call(null,inst_20137);
var inst_20123 = inst_20149;
var inst_20124 = null;
var inst_20125 = (0);
var inst_20126 = (0);
var state_20171__$1 = (function (){var statearr_20174 = state_20171;
(statearr_20174[(8)] = inst_20148);

(statearr_20174[(9)] = inst_20126);

(statearr_20174[(10)] = inst_20125);

(statearr_20174[(11)] = inst_20123);

(statearr_20174[(12)] = inst_20124);

return statearr_20174;
})();
var statearr_20175_20215 = state_20171__$1;
(statearr_20175_20215[(2)] = null);

(statearr_20175_20215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (1))){
var state_20171__$1 = state_20171;
var statearr_20176_20216 = state_20171__$1;
(statearr_20176_20216[(2)] = null);

(statearr_20176_20216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (4))){
var inst_20112 = (state_20171[(13)]);
var inst_20112__$1 = (state_20171[(2)]);
var inst_20113 = (inst_20112__$1 == null);
var state_20171__$1 = (function (){var statearr_20177 = state_20171;
(statearr_20177[(13)] = inst_20112__$1);

return statearr_20177;
})();
if(cljs.core.truth_(inst_20113)){
var statearr_20178_20217 = state_20171__$1;
(statearr_20178_20217[(1)] = (5));

} else {
var statearr_20179_20218 = state_20171__$1;
(statearr_20179_20218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (15))){
var state_20171__$1 = state_20171;
var statearr_20183_20219 = state_20171__$1;
(statearr_20183_20219[(2)] = null);

(statearr_20183_20219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (21))){
var state_20171__$1 = state_20171;
var statearr_20184_20220 = state_20171__$1;
(statearr_20184_20220[(2)] = null);

(statearr_20184_20220[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (13))){
var inst_20126 = (state_20171[(9)]);
var inst_20125 = (state_20171[(10)]);
var inst_20123 = (state_20171[(11)]);
var inst_20124 = (state_20171[(12)]);
var inst_20133 = (state_20171[(2)]);
var inst_20134 = (inst_20126 + (1));
var tmp20180 = inst_20125;
var tmp20181 = inst_20123;
var tmp20182 = inst_20124;
var inst_20123__$1 = tmp20181;
var inst_20124__$1 = tmp20182;
var inst_20125__$1 = tmp20180;
var inst_20126__$1 = inst_20134;
var state_20171__$1 = (function (){var statearr_20185 = state_20171;
(statearr_20185[(14)] = inst_20133);

(statearr_20185[(9)] = inst_20126__$1);

(statearr_20185[(10)] = inst_20125__$1);

(statearr_20185[(11)] = inst_20123__$1);

(statearr_20185[(12)] = inst_20124__$1);

return statearr_20185;
})();
var statearr_20186_20221 = state_20171__$1;
(statearr_20186_20221[(2)] = null);

(statearr_20186_20221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (22))){
var state_20171__$1 = state_20171;
var statearr_20187_20222 = state_20171__$1;
(statearr_20187_20222[(2)] = null);

(statearr_20187_20222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (6))){
var inst_20112 = (state_20171[(13)]);
var inst_20121 = f.call(null,inst_20112);
var inst_20122 = cljs.core.seq.call(null,inst_20121);
var inst_20123 = inst_20122;
var inst_20124 = null;
var inst_20125 = (0);
var inst_20126 = (0);
var state_20171__$1 = (function (){var statearr_20188 = state_20171;
(statearr_20188[(9)] = inst_20126);

(statearr_20188[(10)] = inst_20125);

(statearr_20188[(11)] = inst_20123);

(statearr_20188[(12)] = inst_20124);

return statearr_20188;
})();
var statearr_20189_20223 = state_20171__$1;
(statearr_20189_20223[(2)] = null);

(statearr_20189_20223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (17))){
var inst_20137 = (state_20171[(7)]);
var inst_20141 = cljs.core.chunk_first.call(null,inst_20137);
var inst_20142 = cljs.core.chunk_rest.call(null,inst_20137);
var inst_20143 = cljs.core.count.call(null,inst_20141);
var inst_20123 = inst_20142;
var inst_20124 = inst_20141;
var inst_20125 = inst_20143;
var inst_20126 = (0);
var state_20171__$1 = (function (){var statearr_20190 = state_20171;
(statearr_20190[(9)] = inst_20126);

(statearr_20190[(10)] = inst_20125);

(statearr_20190[(11)] = inst_20123);

(statearr_20190[(12)] = inst_20124);

return statearr_20190;
})();
var statearr_20191_20224 = state_20171__$1;
(statearr_20191_20224[(2)] = null);

(statearr_20191_20224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (3))){
var inst_20169 = (state_20171[(2)]);
var state_20171__$1 = state_20171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20171__$1,inst_20169);
} else {
if((state_val_20172 === (12))){
var inst_20157 = (state_20171[(2)]);
var state_20171__$1 = state_20171;
var statearr_20192_20225 = state_20171__$1;
(statearr_20192_20225[(2)] = inst_20157);

(statearr_20192_20225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (2))){
var state_20171__$1 = state_20171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20171__$1,(4),in$);
} else {
if((state_val_20172 === (23))){
var inst_20165 = (state_20171[(2)]);
var state_20171__$1 = state_20171;
var statearr_20193_20226 = state_20171__$1;
(statearr_20193_20226[(2)] = inst_20165);

(statearr_20193_20226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (19))){
var inst_20152 = (state_20171[(2)]);
var state_20171__$1 = state_20171;
var statearr_20194_20227 = state_20171__$1;
(statearr_20194_20227[(2)] = inst_20152);

(statearr_20194_20227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (11))){
var inst_20137 = (state_20171[(7)]);
var inst_20123 = (state_20171[(11)]);
var inst_20137__$1 = cljs.core.seq.call(null,inst_20123);
var state_20171__$1 = (function (){var statearr_20195 = state_20171;
(statearr_20195[(7)] = inst_20137__$1);

return statearr_20195;
})();
if(inst_20137__$1){
var statearr_20196_20228 = state_20171__$1;
(statearr_20196_20228[(1)] = (14));

} else {
var statearr_20197_20229 = state_20171__$1;
(statearr_20197_20229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (9))){
var inst_20159 = (state_20171[(2)]);
var inst_20160 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20171__$1 = (function (){var statearr_20198 = state_20171;
(statearr_20198[(15)] = inst_20159);

return statearr_20198;
})();
if(cljs.core.truth_(inst_20160)){
var statearr_20199_20230 = state_20171__$1;
(statearr_20199_20230[(1)] = (21));

} else {
var statearr_20200_20231 = state_20171__$1;
(statearr_20200_20231[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (5))){
var inst_20115 = cljs.core.async.close_BANG_.call(null,out);
var state_20171__$1 = state_20171;
var statearr_20201_20232 = state_20171__$1;
(statearr_20201_20232[(2)] = inst_20115);

(statearr_20201_20232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (14))){
var inst_20137 = (state_20171[(7)]);
var inst_20139 = cljs.core.chunked_seq_QMARK_.call(null,inst_20137);
var state_20171__$1 = state_20171;
if(inst_20139){
var statearr_20202_20233 = state_20171__$1;
(statearr_20202_20233[(1)] = (17));

} else {
var statearr_20203_20234 = state_20171__$1;
(statearr_20203_20234[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (16))){
var inst_20155 = (state_20171[(2)]);
var state_20171__$1 = state_20171;
var statearr_20204_20235 = state_20171__$1;
(statearr_20204_20235[(2)] = inst_20155);

(statearr_20204_20235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20172 === (10))){
var inst_20126 = (state_20171[(9)]);
var inst_20124 = (state_20171[(12)]);
var inst_20131 = cljs.core._nth.call(null,inst_20124,inst_20126);
var state_20171__$1 = state_20171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20171__$1,(13),out,inst_20131);
} else {
if((state_val_20172 === (18))){
var inst_20137 = (state_20171[(7)]);
var inst_20146 = cljs.core.first.call(null,inst_20137);
var state_20171__$1 = state_20171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20171__$1,(20),out,inst_20146);
} else {
if((state_val_20172 === (8))){
var inst_20126 = (state_20171[(9)]);
var inst_20125 = (state_20171[(10)]);
var inst_20128 = (inst_20126 < inst_20125);
var inst_20129 = inst_20128;
var state_20171__$1 = state_20171;
if(cljs.core.truth_(inst_20129)){
var statearr_20205_20236 = state_20171__$1;
(statearr_20205_20236[(1)] = (10));

} else {
var statearr_20206_20237 = state_20171__$1;
(statearr_20206_20237[(1)] = (11));

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
});})(c__11828__auto__))
;
return ((function (switch__11813__auto__,c__11828__auto__){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_20210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20210[(0)] = state_machine__11814__auto__);

(statearr_20210[(1)] = (1));

return statearr_20210;
});
var state_machine__11814__auto____1 = (function (state_20171){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_20171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e20211){if((e20211 instanceof Object)){
var ex__11817__auto__ = e20211;
var statearr_20212_20238 = state_20171;
(statearr_20212_20238[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20239 = state_20171;
state_20171 = G__20239;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_20171){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_20171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto__))
})();
var state__11830__auto__ = (function (){var statearr_20213 = f__11829__auto__.call(null);
(statearr_20213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto__);

return statearr_20213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto__))
);

return c__11828__auto__;
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
var c__11828__auto___20336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___20336,out){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___20336,out){
return (function (state_20311){
var state_val_20312 = (state_20311[(1)]);
if((state_val_20312 === (7))){
var inst_20306 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20313_20337 = state_20311__$1;
(statearr_20313_20337[(2)] = inst_20306);

(statearr_20313_20337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (1))){
var inst_20288 = null;
var state_20311__$1 = (function (){var statearr_20314 = state_20311;
(statearr_20314[(7)] = inst_20288);

return statearr_20314;
})();
var statearr_20315_20338 = state_20311__$1;
(statearr_20315_20338[(2)] = null);

(statearr_20315_20338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (4))){
var inst_20291 = (state_20311[(8)]);
var inst_20291__$1 = (state_20311[(2)]);
var inst_20292 = (inst_20291__$1 == null);
var inst_20293 = cljs.core.not.call(null,inst_20292);
var state_20311__$1 = (function (){var statearr_20316 = state_20311;
(statearr_20316[(8)] = inst_20291__$1);

return statearr_20316;
})();
if(inst_20293){
var statearr_20317_20339 = state_20311__$1;
(statearr_20317_20339[(1)] = (5));

} else {
var statearr_20318_20340 = state_20311__$1;
(statearr_20318_20340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (6))){
var state_20311__$1 = state_20311;
var statearr_20319_20341 = state_20311__$1;
(statearr_20319_20341[(2)] = null);

(statearr_20319_20341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (3))){
var inst_20308 = (state_20311[(2)]);
var inst_20309 = cljs.core.async.close_BANG_.call(null,out);
var state_20311__$1 = (function (){var statearr_20320 = state_20311;
(statearr_20320[(9)] = inst_20308);

return statearr_20320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20311__$1,inst_20309);
} else {
if((state_val_20312 === (2))){
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20311__$1,(4),ch);
} else {
if((state_val_20312 === (11))){
var inst_20291 = (state_20311[(8)]);
var inst_20300 = (state_20311[(2)]);
var inst_20288 = inst_20291;
var state_20311__$1 = (function (){var statearr_20321 = state_20311;
(statearr_20321[(7)] = inst_20288);

(statearr_20321[(10)] = inst_20300);

return statearr_20321;
})();
var statearr_20322_20342 = state_20311__$1;
(statearr_20322_20342[(2)] = null);

(statearr_20322_20342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (9))){
var inst_20291 = (state_20311[(8)]);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20311__$1,(11),out,inst_20291);
} else {
if((state_val_20312 === (5))){
var inst_20291 = (state_20311[(8)]);
var inst_20288 = (state_20311[(7)]);
var inst_20295 = cljs.core._EQ_.call(null,inst_20291,inst_20288);
var state_20311__$1 = state_20311;
if(inst_20295){
var statearr_20324_20343 = state_20311__$1;
(statearr_20324_20343[(1)] = (8));

} else {
var statearr_20325_20344 = state_20311__$1;
(statearr_20325_20344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (10))){
var inst_20303 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20326_20345 = state_20311__$1;
(statearr_20326_20345[(2)] = inst_20303);

(statearr_20326_20345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (8))){
var inst_20288 = (state_20311[(7)]);
var tmp20323 = inst_20288;
var inst_20288__$1 = tmp20323;
var state_20311__$1 = (function (){var statearr_20327 = state_20311;
(statearr_20327[(7)] = inst_20288__$1);

return statearr_20327;
})();
var statearr_20328_20346 = state_20311__$1;
(statearr_20328_20346[(2)] = null);

(statearr_20328_20346[(1)] = (2));


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
});})(c__11828__auto___20336,out))
;
return ((function (switch__11813__auto__,c__11828__auto___20336,out){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_20332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20332[(0)] = state_machine__11814__auto__);

(statearr_20332[(1)] = (1));

return statearr_20332;
});
var state_machine__11814__auto____1 = (function (state_20311){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_20311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e20333){if((e20333 instanceof Object)){
var ex__11817__auto__ = e20333;
var statearr_20334_20347 = state_20311;
(statearr_20334_20347[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20348 = state_20311;
state_20311 = G__20348;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_20311){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_20311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___20336,out))
})();
var state__11830__auto__ = (function (){var statearr_20335 = f__11829__auto__.call(null);
(statearr_20335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___20336);

return statearr_20335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___20336,out))
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
var c__11828__auto___20483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___20483,out){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___20483,out){
return (function (state_20453){
var state_val_20454 = (state_20453[(1)]);
if((state_val_20454 === (7))){
var inst_20449 = (state_20453[(2)]);
var state_20453__$1 = state_20453;
var statearr_20455_20484 = state_20453__$1;
(statearr_20455_20484[(2)] = inst_20449);

(statearr_20455_20484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (1))){
var inst_20416 = (new Array(n));
var inst_20417 = inst_20416;
var inst_20418 = (0);
var state_20453__$1 = (function (){var statearr_20456 = state_20453;
(statearr_20456[(7)] = inst_20417);

(statearr_20456[(8)] = inst_20418);

return statearr_20456;
})();
var statearr_20457_20485 = state_20453__$1;
(statearr_20457_20485[(2)] = null);

(statearr_20457_20485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (4))){
var inst_20421 = (state_20453[(9)]);
var inst_20421__$1 = (state_20453[(2)]);
var inst_20422 = (inst_20421__$1 == null);
var inst_20423 = cljs.core.not.call(null,inst_20422);
var state_20453__$1 = (function (){var statearr_20458 = state_20453;
(statearr_20458[(9)] = inst_20421__$1);

return statearr_20458;
})();
if(inst_20423){
var statearr_20459_20486 = state_20453__$1;
(statearr_20459_20486[(1)] = (5));

} else {
var statearr_20460_20487 = state_20453__$1;
(statearr_20460_20487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (15))){
var inst_20443 = (state_20453[(2)]);
var state_20453__$1 = state_20453;
var statearr_20461_20488 = state_20453__$1;
(statearr_20461_20488[(2)] = inst_20443);

(statearr_20461_20488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (13))){
var state_20453__$1 = state_20453;
var statearr_20462_20489 = state_20453__$1;
(statearr_20462_20489[(2)] = null);

(statearr_20462_20489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (6))){
var inst_20418 = (state_20453[(8)]);
var inst_20439 = (inst_20418 > (0));
var state_20453__$1 = state_20453;
if(cljs.core.truth_(inst_20439)){
var statearr_20463_20490 = state_20453__$1;
(statearr_20463_20490[(1)] = (12));

} else {
var statearr_20464_20491 = state_20453__$1;
(statearr_20464_20491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (3))){
var inst_20451 = (state_20453[(2)]);
var state_20453__$1 = state_20453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20453__$1,inst_20451);
} else {
if((state_val_20454 === (12))){
var inst_20417 = (state_20453[(7)]);
var inst_20441 = cljs.core.vec.call(null,inst_20417);
var state_20453__$1 = state_20453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20453__$1,(15),out,inst_20441);
} else {
if((state_val_20454 === (2))){
var state_20453__$1 = state_20453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20453__$1,(4),ch);
} else {
if((state_val_20454 === (11))){
var inst_20433 = (state_20453[(2)]);
var inst_20434 = (new Array(n));
var inst_20417 = inst_20434;
var inst_20418 = (0);
var state_20453__$1 = (function (){var statearr_20465 = state_20453;
(statearr_20465[(10)] = inst_20433);

(statearr_20465[(7)] = inst_20417);

(statearr_20465[(8)] = inst_20418);

return statearr_20465;
})();
var statearr_20466_20492 = state_20453__$1;
(statearr_20466_20492[(2)] = null);

(statearr_20466_20492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (9))){
var inst_20417 = (state_20453[(7)]);
var inst_20431 = cljs.core.vec.call(null,inst_20417);
var state_20453__$1 = state_20453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20453__$1,(11),out,inst_20431);
} else {
if((state_val_20454 === (5))){
var inst_20417 = (state_20453[(7)]);
var inst_20426 = (state_20453[(11)]);
var inst_20418 = (state_20453[(8)]);
var inst_20421 = (state_20453[(9)]);
var inst_20425 = (inst_20417[inst_20418] = inst_20421);
var inst_20426__$1 = (inst_20418 + (1));
var inst_20427 = (inst_20426__$1 < n);
var state_20453__$1 = (function (){var statearr_20467 = state_20453;
(statearr_20467[(11)] = inst_20426__$1);

(statearr_20467[(12)] = inst_20425);

return statearr_20467;
})();
if(cljs.core.truth_(inst_20427)){
var statearr_20468_20493 = state_20453__$1;
(statearr_20468_20493[(1)] = (8));

} else {
var statearr_20469_20494 = state_20453__$1;
(statearr_20469_20494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (14))){
var inst_20446 = (state_20453[(2)]);
var inst_20447 = cljs.core.async.close_BANG_.call(null,out);
var state_20453__$1 = (function (){var statearr_20471 = state_20453;
(statearr_20471[(13)] = inst_20446);

return statearr_20471;
})();
var statearr_20472_20495 = state_20453__$1;
(statearr_20472_20495[(2)] = inst_20447);

(statearr_20472_20495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (10))){
var inst_20437 = (state_20453[(2)]);
var state_20453__$1 = state_20453;
var statearr_20473_20496 = state_20453__$1;
(statearr_20473_20496[(2)] = inst_20437);

(statearr_20473_20496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20454 === (8))){
var inst_20417 = (state_20453[(7)]);
var inst_20426 = (state_20453[(11)]);
var tmp20470 = inst_20417;
var inst_20417__$1 = tmp20470;
var inst_20418 = inst_20426;
var state_20453__$1 = (function (){var statearr_20474 = state_20453;
(statearr_20474[(7)] = inst_20417__$1);

(statearr_20474[(8)] = inst_20418);

return statearr_20474;
})();
var statearr_20475_20497 = state_20453__$1;
(statearr_20475_20497[(2)] = null);

(statearr_20475_20497[(1)] = (2));


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
});})(c__11828__auto___20483,out))
;
return ((function (switch__11813__auto__,c__11828__auto___20483,out){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_20479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20479[(0)] = state_machine__11814__auto__);

(statearr_20479[(1)] = (1));

return statearr_20479;
});
var state_machine__11814__auto____1 = (function (state_20453){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_20453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e20480){if((e20480 instanceof Object)){
var ex__11817__auto__ = e20480;
var statearr_20481_20498 = state_20453;
(statearr_20481_20498[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20499 = state_20453;
state_20453 = G__20499;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_20453){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_20453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___20483,out))
})();
var state__11830__auto__ = (function (){var statearr_20482 = f__11829__auto__.call(null);
(statearr_20482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___20483);

return statearr_20482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___20483,out))
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
var c__11828__auto___20642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto___20642,out){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto___20642,out){
return (function (state_20612){
var state_val_20613 = (state_20612[(1)]);
if((state_val_20613 === (7))){
var inst_20608 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20614_20643 = state_20612__$1;
(statearr_20614_20643[(2)] = inst_20608);

(statearr_20614_20643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (1))){
var inst_20571 = [];
var inst_20572 = inst_20571;
var inst_20573 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20612__$1 = (function (){var statearr_20615 = state_20612;
(statearr_20615[(7)] = inst_20573);

(statearr_20615[(8)] = inst_20572);

return statearr_20615;
})();
var statearr_20616_20644 = state_20612__$1;
(statearr_20616_20644[(2)] = null);

(statearr_20616_20644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (4))){
var inst_20576 = (state_20612[(9)]);
var inst_20576__$1 = (state_20612[(2)]);
var inst_20577 = (inst_20576__$1 == null);
var inst_20578 = cljs.core.not.call(null,inst_20577);
var state_20612__$1 = (function (){var statearr_20617 = state_20612;
(statearr_20617[(9)] = inst_20576__$1);

return statearr_20617;
})();
if(inst_20578){
var statearr_20618_20645 = state_20612__$1;
(statearr_20618_20645[(1)] = (5));

} else {
var statearr_20619_20646 = state_20612__$1;
(statearr_20619_20646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (15))){
var inst_20602 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20620_20647 = state_20612__$1;
(statearr_20620_20647[(2)] = inst_20602);

(statearr_20620_20647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (13))){
var state_20612__$1 = state_20612;
var statearr_20621_20648 = state_20612__$1;
(statearr_20621_20648[(2)] = null);

(statearr_20621_20648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (6))){
var inst_20572 = (state_20612[(8)]);
var inst_20597 = inst_20572.length;
var inst_20598 = (inst_20597 > (0));
var state_20612__$1 = state_20612;
if(cljs.core.truth_(inst_20598)){
var statearr_20622_20649 = state_20612__$1;
(statearr_20622_20649[(1)] = (12));

} else {
var statearr_20623_20650 = state_20612__$1;
(statearr_20623_20650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (3))){
var inst_20610 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20612__$1,inst_20610);
} else {
if((state_val_20613 === (12))){
var inst_20572 = (state_20612[(8)]);
var inst_20600 = cljs.core.vec.call(null,inst_20572);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20612__$1,(15),out,inst_20600);
} else {
if((state_val_20613 === (2))){
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20612__$1,(4),ch);
} else {
if((state_val_20613 === (11))){
var inst_20580 = (state_20612[(10)]);
var inst_20576 = (state_20612[(9)]);
var inst_20590 = (state_20612[(2)]);
var inst_20591 = [];
var inst_20592 = inst_20591.push(inst_20576);
var inst_20572 = inst_20591;
var inst_20573 = inst_20580;
var state_20612__$1 = (function (){var statearr_20624 = state_20612;
(statearr_20624[(11)] = inst_20592);

(statearr_20624[(7)] = inst_20573);

(statearr_20624[(8)] = inst_20572);

(statearr_20624[(12)] = inst_20590);

return statearr_20624;
})();
var statearr_20625_20651 = state_20612__$1;
(statearr_20625_20651[(2)] = null);

(statearr_20625_20651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (9))){
var inst_20572 = (state_20612[(8)]);
var inst_20588 = cljs.core.vec.call(null,inst_20572);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20612__$1,(11),out,inst_20588);
} else {
if((state_val_20613 === (5))){
var inst_20573 = (state_20612[(7)]);
var inst_20580 = (state_20612[(10)]);
var inst_20576 = (state_20612[(9)]);
var inst_20580__$1 = f.call(null,inst_20576);
var inst_20581 = cljs.core._EQ_.call(null,inst_20580__$1,inst_20573);
var inst_20582 = cljs.core.keyword_identical_QMARK_.call(null,inst_20573,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20583 = (inst_20581) || (inst_20582);
var state_20612__$1 = (function (){var statearr_20626 = state_20612;
(statearr_20626[(10)] = inst_20580__$1);

return statearr_20626;
})();
if(cljs.core.truth_(inst_20583)){
var statearr_20627_20652 = state_20612__$1;
(statearr_20627_20652[(1)] = (8));

} else {
var statearr_20628_20653 = state_20612__$1;
(statearr_20628_20653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (14))){
var inst_20605 = (state_20612[(2)]);
var inst_20606 = cljs.core.async.close_BANG_.call(null,out);
var state_20612__$1 = (function (){var statearr_20630 = state_20612;
(statearr_20630[(13)] = inst_20605);

return statearr_20630;
})();
var statearr_20631_20654 = state_20612__$1;
(statearr_20631_20654[(2)] = inst_20606);

(statearr_20631_20654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (10))){
var inst_20595 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20632_20655 = state_20612__$1;
(statearr_20632_20655[(2)] = inst_20595);

(statearr_20632_20655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (8))){
var inst_20580 = (state_20612[(10)]);
var inst_20572 = (state_20612[(8)]);
var inst_20576 = (state_20612[(9)]);
var inst_20585 = inst_20572.push(inst_20576);
var tmp20629 = inst_20572;
var inst_20572__$1 = tmp20629;
var inst_20573 = inst_20580;
var state_20612__$1 = (function (){var statearr_20633 = state_20612;
(statearr_20633[(7)] = inst_20573);

(statearr_20633[(8)] = inst_20572__$1);

(statearr_20633[(14)] = inst_20585);

return statearr_20633;
})();
var statearr_20634_20656 = state_20612__$1;
(statearr_20634_20656[(2)] = null);

(statearr_20634_20656[(1)] = (2));


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
});})(c__11828__auto___20642,out))
;
return ((function (switch__11813__auto__,c__11828__auto___20642,out){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_20638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20638[(0)] = state_machine__11814__auto__);

(statearr_20638[(1)] = (1));

return statearr_20638;
});
var state_machine__11814__auto____1 = (function (state_20612){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_20612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e20639){if((e20639 instanceof Object)){
var ex__11817__auto__ = e20639;
var statearr_20640_20657 = state_20612;
(statearr_20640_20657[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20658 = state_20612;
state_20612 = G__20658;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_20612){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_20612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto___20642,out))
})();
var state__11830__auto__ = (function (){var statearr_20641 = f__11829__auto__.call(null);
(statearr_20641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto___20642);

return statearr_20641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto___20642,out))
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
