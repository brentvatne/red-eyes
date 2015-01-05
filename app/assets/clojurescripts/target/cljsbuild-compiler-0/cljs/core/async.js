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
if(typeof cljs.core.async.t14640 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14640 = (function (f,fn_handler,meta14641){
this.f = f;
this.fn_handler = fn_handler;
this.meta14641 = meta14641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14640.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14642){
var self__ = this;
var _14642__$1 = this;
return self__.meta14641;
});

cljs.core.async.t14640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14642,meta14641__$1){
var self__ = this;
var _14642__$1 = this;
return (new cljs.core.async.t14640(self__.f,self__.fn_handler,meta14641__$1));
});

cljs.core.async.t14640.cljs$lang$type = true;

cljs.core.async.t14640.cljs$lang$ctorStr = "cljs.core.async/t14640";

cljs.core.async.t14640.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t14640");
});

cljs.core.async.__GT_t14640 = (function __GT_t14640(f__$1,fn_handler__$1,meta14641){
return (new cljs.core.async.t14640(f__$1,fn_handler__$1,meta14641));
});

}

return (new cljs.core.async.t14640(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
var G__14644 = buff;
if(G__14644){
var bit__4319__auto__ = null;
if(cljs.core.truth_((function (){var or__3638__auto__ = bit__4319__auto__;
if(cljs.core.truth_(or__3638__auto__)){
return or__3638__auto__;
} else {
return G__14644.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14644.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14644);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14644);
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
var val_14645 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14645);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14645,ret){
return (function (){
return fn1.call(null,val_14645);
});})(val_14645,ret))
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
var n__4525__auto___14646 = n;
var x_14647 = (0);
while(true){
if((x_14647 < n__4525__auto___14646)){
(a[x_14647] = (0));

var G__14648 = (x_14647 + (1));
x_14647 = G__14648;
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

var G__14649 = (i + (1));
i = G__14649;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14653 = (function (flag,alt_flag,meta14654){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14654 = meta14654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14653.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14655){
var self__ = this;
var _14655__$1 = this;
return self__.meta14654;
});})(flag))
;

cljs.core.async.t14653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14655,meta14654__$1){
var self__ = this;
var _14655__$1 = this;
return (new cljs.core.async.t14653(self__.flag,self__.alt_flag,meta14654__$1));
});})(flag))
;

cljs.core.async.t14653.cljs$lang$type = true;

cljs.core.async.t14653.cljs$lang$ctorStr = "cljs.core.async/t14653";

cljs.core.async.t14653.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t14653");
});})(flag))
;

cljs.core.async.__GT_t14653 = ((function (flag){
return (function __GT_t14653(flag__$1,alt_flag__$1,meta14654){
return (new cljs.core.async.t14653(flag__$1,alt_flag__$1,meta14654));
});})(flag))
;

}

return (new cljs.core.async.t14653(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t14659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14659 = (function (cb,flag,alt_handler,meta14660){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14660 = meta14660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14661){
var self__ = this;
var _14661__$1 = this;
return self__.meta14660;
});

cljs.core.async.t14659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14661,meta14660__$1){
var self__ = this;
var _14661__$1 = this;
return (new cljs.core.async.t14659(self__.cb,self__.flag,self__.alt_handler,meta14660__$1));
});

cljs.core.async.t14659.cljs$lang$type = true;

cljs.core.async.t14659.cljs$lang$ctorStr = "cljs.core.async/t14659";

cljs.core.async.t14659.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t14659");
});

cljs.core.async.__GT_t14659 = (function __GT_t14659(cb__$1,flag__$1,alt_handler__$1,meta14660){
return (new cljs.core.async.t14659(cb__$1,flag__$1,alt_handler__$1,meta14660));
});

}

return (new cljs.core.async.t14659(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
return (function (p1__14662_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14662_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14663_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14663_SHARP_,port], null));
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
var G__14664 = (i + (1));
i = G__14664;
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
var alts_BANG___delegate = function (ports,p__14665){
var map__14667 = p__14665;
var map__14667__$1 = ((cljs.core.seq_QMARK_.call(null,map__14667))?cljs.core.apply.call(null,cljs.core.hash_map,map__14667):map__14667);
var opts = map__14667__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__14665 = null;
if (arguments.length > 1) {
  p__14665 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__14665);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14668){
var ports = cljs.core.first(arglist__14668);
var p__14665 = cljs.core.rest(arglist__14668);
return alts_BANG___delegate(ports,p__14665);
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
var c__11113__auto___14763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___14763){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___14763){
return (function (state_14739){
var state_val_14740 = (state_14739[(1)]);
if((state_val_14740 === (7))){
var inst_14735 = (state_14739[(2)]);
var state_14739__$1 = state_14739;
var statearr_14741_14764 = state_14739__$1;
(statearr_14741_14764[(2)] = inst_14735);

(statearr_14741_14764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (1))){
var state_14739__$1 = state_14739;
var statearr_14742_14765 = state_14739__$1;
(statearr_14742_14765[(2)] = null);

(statearr_14742_14765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (4))){
var inst_14718 = (state_14739[(7)]);
var inst_14718__$1 = (state_14739[(2)]);
var inst_14719 = (inst_14718__$1 == null);
var state_14739__$1 = (function (){var statearr_14743 = state_14739;
(statearr_14743[(7)] = inst_14718__$1);

return statearr_14743;
})();
if(cljs.core.truth_(inst_14719)){
var statearr_14744_14766 = state_14739__$1;
(statearr_14744_14766[(1)] = (5));

} else {
var statearr_14745_14767 = state_14739__$1;
(statearr_14745_14767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (13))){
var state_14739__$1 = state_14739;
var statearr_14746_14768 = state_14739__$1;
(statearr_14746_14768[(2)] = null);

(statearr_14746_14768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (6))){
var inst_14718 = (state_14739[(7)]);
var state_14739__$1 = state_14739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14739__$1,(11),to,inst_14718);
} else {
if((state_val_14740 === (3))){
var inst_14737 = (state_14739[(2)]);
var state_14739__$1 = state_14739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14739__$1,inst_14737);
} else {
if((state_val_14740 === (12))){
var state_14739__$1 = state_14739;
var statearr_14747_14769 = state_14739__$1;
(statearr_14747_14769[(2)] = null);

(statearr_14747_14769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (2))){
var state_14739__$1 = state_14739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14739__$1,(4),from);
} else {
if((state_val_14740 === (11))){
var inst_14728 = (state_14739[(2)]);
var state_14739__$1 = state_14739;
if(cljs.core.truth_(inst_14728)){
var statearr_14748_14770 = state_14739__$1;
(statearr_14748_14770[(1)] = (12));

} else {
var statearr_14749_14771 = state_14739__$1;
(statearr_14749_14771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (9))){
var state_14739__$1 = state_14739;
var statearr_14750_14772 = state_14739__$1;
(statearr_14750_14772[(2)] = null);

(statearr_14750_14772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (5))){
var state_14739__$1 = state_14739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14751_14773 = state_14739__$1;
(statearr_14751_14773[(1)] = (8));

} else {
var statearr_14752_14774 = state_14739__$1;
(statearr_14752_14774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (14))){
var inst_14733 = (state_14739[(2)]);
var state_14739__$1 = state_14739;
var statearr_14753_14775 = state_14739__$1;
(statearr_14753_14775[(2)] = inst_14733);

(statearr_14753_14775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (10))){
var inst_14725 = (state_14739[(2)]);
var state_14739__$1 = state_14739;
var statearr_14754_14776 = state_14739__$1;
(statearr_14754_14776[(2)] = inst_14725);

(statearr_14754_14776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14740 === (8))){
var inst_14722 = cljs.core.async.close_BANG_.call(null,to);
var state_14739__$1 = state_14739;
var statearr_14755_14777 = state_14739__$1;
(statearr_14755_14777[(2)] = inst_14722);

(statearr_14755_14777[(1)] = (10));


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
});})(c__11113__auto___14763))
;
return ((function (switch__11098__auto__,c__11113__auto___14763){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_14759 = [null,null,null,null,null,null,null,null];
(statearr_14759[(0)] = state_machine__11099__auto__);

(statearr_14759[(1)] = (1));

return statearr_14759;
});
var state_machine__11099__auto____1 = (function (state_14739){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_14739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e14760){if((e14760 instanceof Object)){
var ex__11102__auto__ = e14760;
var statearr_14761_14778 = state_14739;
(statearr_14761_14778[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14779 = state_14739;
state_14739 = G__14779;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_14739){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_14739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___14763))
})();
var state__11115__auto__ = (function (){var statearr_14762 = f__11114__auto__.call(null);
(statearr_14762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___14763);

return statearr_14762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___14763))
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
return (function (p__14963){
var vec__14964 = p__14963;
var v = cljs.core.nth.call(null,vec__14964,(0),null);
var p = cljs.core.nth.call(null,vec__14964,(1),null);
var job = vec__14964;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11113__auto___15146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___15146,res,vec__14964,v,p,job,jobs,results){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___15146,res,vec__14964,v,p,job,jobs,results){
return (function (state_14969){
var state_val_14970 = (state_14969[(1)]);
if((state_val_14970 === (2))){
var inst_14966 = (state_14969[(2)]);
var inst_14967 = cljs.core.async.close_BANG_.call(null,res);
var state_14969__$1 = (function (){var statearr_14971 = state_14969;
(statearr_14971[(7)] = inst_14966);

return statearr_14971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14969__$1,inst_14967);
} else {
if((state_val_14970 === (1))){
var state_14969__$1 = state_14969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14969__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11113__auto___15146,res,vec__14964,v,p,job,jobs,results))
;
return ((function (switch__11098__auto__,c__11113__auto___15146,res,vec__14964,v,p,job,jobs,results){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_14975 = [null,null,null,null,null,null,null,null];
(statearr_14975[(0)] = state_machine__11099__auto__);

(statearr_14975[(1)] = (1));

return statearr_14975;
});
var state_machine__11099__auto____1 = (function (state_14969){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_14969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e14976){if((e14976 instanceof Object)){
var ex__11102__auto__ = e14976;
var statearr_14977_15147 = state_14969;
(statearr_14977_15147[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15148 = state_14969;
state_14969 = G__15148;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_14969){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_14969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___15146,res,vec__14964,v,p,job,jobs,results))
})();
var state__11115__auto__ = (function (){var statearr_14978 = f__11114__auto__.call(null);
(statearr_14978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___15146);

return statearr_14978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___15146,res,vec__14964,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14979){
var vec__14980 = p__14979;
var v = cljs.core.nth.call(null,vec__14980,(0),null);
var p = cljs.core.nth.call(null,vec__14980,(1),null);
var job = vec__14980;
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
var n__4525__auto___15149 = n;
var __15150 = (0);
while(true){
if((__15150 < n__4525__auto___15149)){
var G__14981_15151 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14981_15151) {
case "async":
var c__11113__auto___15153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15150,c__11113__auto___15153,G__14981_15151,n__4525__auto___15149,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (__15150,c__11113__auto___15153,G__14981_15151,n__4525__auto___15149,jobs,results,process,async){
return (function (state_14994){
var state_val_14995 = (state_14994[(1)]);
if((state_val_14995 === (7))){
var inst_14990 = (state_14994[(2)]);
var state_14994__$1 = state_14994;
var statearr_14996_15154 = state_14994__$1;
(statearr_14996_15154[(2)] = inst_14990);

(statearr_14996_15154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14995 === (6))){
var state_14994__$1 = state_14994;
var statearr_14997_15155 = state_14994__$1;
(statearr_14997_15155[(2)] = null);

(statearr_14997_15155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14995 === (5))){
var state_14994__$1 = state_14994;
var statearr_14998_15156 = state_14994__$1;
(statearr_14998_15156[(2)] = null);

(statearr_14998_15156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14995 === (4))){
var inst_14984 = (state_14994[(2)]);
var inst_14985 = async.call(null,inst_14984);
var state_14994__$1 = state_14994;
if(cljs.core.truth_(inst_14985)){
var statearr_14999_15157 = state_14994__$1;
(statearr_14999_15157[(1)] = (5));

} else {
var statearr_15000_15158 = state_14994__$1;
(statearr_15000_15158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14995 === (3))){
var inst_14992 = (state_14994[(2)]);
var state_14994__$1 = state_14994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14994__$1,inst_14992);
} else {
if((state_val_14995 === (2))){
var state_14994__$1 = state_14994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14994__$1,(4),jobs);
} else {
if((state_val_14995 === (1))){
var state_14994__$1 = state_14994;
var statearr_15001_15159 = state_14994__$1;
(statearr_15001_15159[(2)] = null);

(statearr_15001_15159[(1)] = (2));


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
});})(__15150,c__11113__auto___15153,G__14981_15151,n__4525__auto___15149,jobs,results,process,async))
;
return ((function (__15150,switch__11098__auto__,c__11113__auto___15153,G__14981_15151,n__4525__auto___15149,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_15005 = [null,null,null,null,null,null,null];
(statearr_15005[(0)] = state_machine__11099__auto__);

(statearr_15005[(1)] = (1));

return statearr_15005;
});
var state_machine__11099__auto____1 = (function (state_14994){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_14994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15006){if((e15006 instanceof Object)){
var ex__11102__auto__ = e15006;
var statearr_15007_15160 = state_14994;
(statearr_15007_15160[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15161 = state_14994;
state_14994 = G__15161;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_14994){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_14994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__15150,switch__11098__auto__,c__11113__auto___15153,G__14981_15151,n__4525__auto___15149,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_15008 = f__11114__auto__.call(null);
(statearr_15008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___15153);

return statearr_15008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(__15150,c__11113__auto___15153,G__14981_15151,n__4525__auto___15149,jobs,results,process,async))
);


break;
case "compute":
var c__11113__auto___15162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15150,c__11113__auto___15162,G__14981_15151,n__4525__auto___15149,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (__15150,c__11113__auto___15162,G__14981_15151,n__4525__auto___15149,jobs,results,process,async){
return (function (state_15021){
var state_val_15022 = (state_15021[(1)]);
if((state_val_15022 === (7))){
var inst_15017 = (state_15021[(2)]);
var state_15021__$1 = state_15021;
var statearr_15023_15163 = state_15021__$1;
(statearr_15023_15163[(2)] = inst_15017);

(statearr_15023_15163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15022 === (6))){
var state_15021__$1 = state_15021;
var statearr_15024_15164 = state_15021__$1;
(statearr_15024_15164[(2)] = null);

(statearr_15024_15164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15022 === (5))){
var state_15021__$1 = state_15021;
var statearr_15025_15165 = state_15021__$1;
(statearr_15025_15165[(2)] = null);

(statearr_15025_15165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15022 === (4))){
var inst_15011 = (state_15021[(2)]);
var inst_15012 = process.call(null,inst_15011);
var state_15021__$1 = state_15021;
if(cljs.core.truth_(inst_15012)){
var statearr_15026_15166 = state_15021__$1;
(statearr_15026_15166[(1)] = (5));

} else {
var statearr_15027_15167 = state_15021__$1;
(statearr_15027_15167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15022 === (3))){
var inst_15019 = (state_15021[(2)]);
var state_15021__$1 = state_15021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15021__$1,inst_15019);
} else {
if((state_val_15022 === (2))){
var state_15021__$1 = state_15021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15021__$1,(4),jobs);
} else {
if((state_val_15022 === (1))){
var state_15021__$1 = state_15021;
var statearr_15028_15168 = state_15021__$1;
(statearr_15028_15168[(2)] = null);

(statearr_15028_15168[(1)] = (2));


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
});})(__15150,c__11113__auto___15162,G__14981_15151,n__4525__auto___15149,jobs,results,process,async))
;
return ((function (__15150,switch__11098__auto__,c__11113__auto___15162,G__14981_15151,n__4525__auto___15149,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_15032 = [null,null,null,null,null,null,null];
(statearr_15032[(0)] = state_machine__11099__auto__);

(statearr_15032[(1)] = (1));

return statearr_15032;
});
var state_machine__11099__auto____1 = (function (state_15021){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_15021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15033){if((e15033 instanceof Object)){
var ex__11102__auto__ = e15033;
var statearr_15034_15169 = state_15021;
(statearr_15034_15169[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15170 = state_15021;
state_15021 = G__15170;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_15021){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_15021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(__15150,switch__11098__auto__,c__11113__auto___15162,G__14981_15151,n__4525__auto___15149,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_15035 = f__11114__auto__.call(null);
(statearr_15035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___15162);

return statearr_15035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(__15150,c__11113__auto___15162,G__14981_15151,n__4525__auto___15149,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15171 = (__15150 + (1));
__15150 = G__15171;
continue;
} else {
}
break;
}

var c__11113__auto___15172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___15172,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___15172,jobs,results,process,async){
return (function (state_15057){
var state_val_15058 = (state_15057[(1)]);
if((state_val_15058 === (9))){
var inst_15050 = (state_15057[(2)]);
var state_15057__$1 = (function (){var statearr_15059 = state_15057;
(statearr_15059[(7)] = inst_15050);

return statearr_15059;
})();
var statearr_15060_15173 = state_15057__$1;
(statearr_15060_15173[(2)] = null);

(statearr_15060_15173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (8))){
var inst_15043 = (state_15057[(8)]);
var inst_15048 = (state_15057[(2)]);
var state_15057__$1 = (function (){var statearr_15061 = state_15057;
(statearr_15061[(9)] = inst_15048);

return statearr_15061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15057__$1,(9),results,inst_15043);
} else {
if((state_val_15058 === (7))){
var inst_15053 = (state_15057[(2)]);
var state_15057__$1 = state_15057;
var statearr_15062_15174 = state_15057__$1;
(statearr_15062_15174[(2)] = inst_15053);

(statearr_15062_15174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (6))){
var inst_15038 = (state_15057[(10)]);
var inst_15043 = (state_15057[(8)]);
var inst_15043__$1 = cljs.core.async.chan.call(null,(1));
var inst_15044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15045 = [inst_15038,inst_15043__$1];
var inst_15046 = (new cljs.core.PersistentVector(null,2,(5),inst_15044,inst_15045,null));
var state_15057__$1 = (function (){var statearr_15063 = state_15057;
(statearr_15063[(8)] = inst_15043__$1);

return statearr_15063;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15057__$1,(8),jobs,inst_15046);
} else {
if((state_val_15058 === (5))){
var inst_15041 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15057__$1 = state_15057;
var statearr_15064_15175 = state_15057__$1;
(statearr_15064_15175[(2)] = inst_15041);

(statearr_15064_15175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (4))){
var inst_15038 = (state_15057[(10)]);
var inst_15038__$1 = (state_15057[(2)]);
var inst_15039 = (inst_15038__$1 == null);
var state_15057__$1 = (function (){var statearr_15065 = state_15057;
(statearr_15065[(10)] = inst_15038__$1);

return statearr_15065;
})();
if(cljs.core.truth_(inst_15039)){
var statearr_15066_15176 = state_15057__$1;
(statearr_15066_15176[(1)] = (5));

} else {
var statearr_15067_15177 = state_15057__$1;
(statearr_15067_15177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15058 === (3))){
var inst_15055 = (state_15057[(2)]);
var state_15057__$1 = state_15057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15057__$1,inst_15055);
} else {
if((state_val_15058 === (2))){
var state_15057__$1 = state_15057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15057__$1,(4),from);
} else {
if((state_val_15058 === (1))){
var state_15057__$1 = state_15057;
var statearr_15068_15178 = state_15057__$1;
(statearr_15068_15178[(2)] = null);

(statearr_15068_15178[(1)] = (2));


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
});})(c__11113__auto___15172,jobs,results,process,async))
;
return ((function (switch__11098__auto__,c__11113__auto___15172,jobs,results,process,async){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_15072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15072[(0)] = state_machine__11099__auto__);

(statearr_15072[(1)] = (1));

return statearr_15072;
});
var state_machine__11099__auto____1 = (function (state_15057){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_15057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15073){if((e15073 instanceof Object)){
var ex__11102__auto__ = e15073;
var statearr_15074_15179 = state_15057;
(statearr_15074_15179[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15180 = state_15057;
state_15057 = G__15180;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_15057){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_15057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___15172,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_15075 = f__11114__auto__.call(null);
(statearr_15075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___15172);

return statearr_15075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___15172,jobs,results,process,async))
);


var c__11113__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto__,jobs,results,process,async){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto__,jobs,results,process,async){
return (function (state_15113){
var state_val_15114 = (state_15113[(1)]);
if((state_val_15114 === (7))){
var inst_15109 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
var statearr_15115_15181 = state_15113__$1;
(statearr_15115_15181[(2)] = inst_15109);

(statearr_15115_15181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (20))){
var state_15113__$1 = state_15113;
var statearr_15116_15182 = state_15113__$1;
(statearr_15116_15182[(2)] = null);

(statearr_15116_15182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (1))){
var state_15113__$1 = state_15113;
var statearr_15117_15183 = state_15113__$1;
(statearr_15117_15183[(2)] = null);

(statearr_15117_15183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (4))){
var inst_15078 = (state_15113[(7)]);
var inst_15078__$1 = (state_15113[(2)]);
var inst_15079 = (inst_15078__$1 == null);
var state_15113__$1 = (function (){var statearr_15118 = state_15113;
(statearr_15118[(7)] = inst_15078__$1);

return statearr_15118;
})();
if(cljs.core.truth_(inst_15079)){
var statearr_15119_15184 = state_15113__$1;
(statearr_15119_15184[(1)] = (5));

} else {
var statearr_15120_15185 = state_15113__$1;
(statearr_15120_15185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (15))){
var inst_15091 = (state_15113[(8)]);
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15113__$1,(18),to,inst_15091);
} else {
if((state_val_15114 === (21))){
var inst_15104 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
var statearr_15121_15186 = state_15113__$1;
(statearr_15121_15186[(2)] = inst_15104);

(statearr_15121_15186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (13))){
var inst_15106 = (state_15113[(2)]);
var state_15113__$1 = (function (){var statearr_15122 = state_15113;
(statearr_15122[(9)] = inst_15106);

return statearr_15122;
})();
var statearr_15123_15187 = state_15113__$1;
(statearr_15123_15187[(2)] = null);

(statearr_15123_15187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (6))){
var inst_15078 = (state_15113[(7)]);
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15113__$1,(11),inst_15078);
} else {
if((state_val_15114 === (17))){
var inst_15099 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
if(cljs.core.truth_(inst_15099)){
var statearr_15124_15188 = state_15113__$1;
(statearr_15124_15188[(1)] = (19));

} else {
var statearr_15125_15189 = state_15113__$1;
(statearr_15125_15189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (3))){
var inst_15111 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15113__$1,inst_15111);
} else {
if((state_val_15114 === (12))){
var inst_15088 = (state_15113[(10)]);
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15113__$1,(14),inst_15088);
} else {
if((state_val_15114 === (2))){
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15113__$1,(4),results);
} else {
if((state_val_15114 === (19))){
var state_15113__$1 = state_15113;
var statearr_15126_15190 = state_15113__$1;
(statearr_15126_15190[(2)] = null);

(statearr_15126_15190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (11))){
var inst_15088 = (state_15113[(2)]);
var state_15113__$1 = (function (){var statearr_15127 = state_15113;
(statearr_15127[(10)] = inst_15088);

return statearr_15127;
})();
var statearr_15128_15191 = state_15113__$1;
(statearr_15128_15191[(2)] = null);

(statearr_15128_15191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (9))){
var state_15113__$1 = state_15113;
var statearr_15129_15192 = state_15113__$1;
(statearr_15129_15192[(2)] = null);

(statearr_15129_15192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (5))){
var state_15113__$1 = state_15113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15130_15193 = state_15113__$1;
(statearr_15130_15193[(1)] = (8));

} else {
var statearr_15131_15194 = state_15113__$1;
(statearr_15131_15194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (14))){
var inst_15093 = (state_15113[(11)]);
var inst_15091 = (state_15113[(8)]);
var inst_15091__$1 = (state_15113[(2)]);
var inst_15092 = (inst_15091__$1 == null);
var inst_15093__$1 = cljs.core.not.call(null,inst_15092);
var state_15113__$1 = (function (){var statearr_15132 = state_15113;
(statearr_15132[(11)] = inst_15093__$1);

(statearr_15132[(8)] = inst_15091__$1);

return statearr_15132;
})();
if(inst_15093__$1){
var statearr_15133_15195 = state_15113__$1;
(statearr_15133_15195[(1)] = (15));

} else {
var statearr_15134_15196 = state_15113__$1;
(statearr_15134_15196[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (16))){
var inst_15093 = (state_15113[(11)]);
var state_15113__$1 = state_15113;
var statearr_15135_15197 = state_15113__$1;
(statearr_15135_15197[(2)] = inst_15093);

(statearr_15135_15197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (10))){
var inst_15085 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
var statearr_15136_15198 = state_15113__$1;
(statearr_15136_15198[(2)] = inst_15085);

(statearr_15136_15198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (18))){
var inst_15096 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
var statearr_15137_15199 = state_15113__$1;
(statearr_15137_15199[(2)] = inst_15096);

(statearr_15137_15199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (8))){
var inst_15082 = cljs.core.async.close_BANG_.call(null,to);
var state_15113__$1 = state_15113;
var statearr_15138_15200 = state_15113__$1;
(statearr_15138_15200[(2)] = inst_15082);

(statearr_15138_15200[(1)] = (10));


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
var statearr_15142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15142[(0)] = state_machine__11099__auto__);

(statearr_15142[(1)] = (1));

return statearr_15142;
});
var state_machine__11099__auto____1 = (function (state_15113){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_15113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15143){if((e15143 instanceof Object)){
var ex__11102__auto__ = e15143;
var statearr_15144_15201 = state_15113;
(statearr_15144_15201[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15202 = state_15113;
state_15113 = G__15202;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_15113){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_15113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__,jobs,results,process,async))
})();
var state__11115__auto__ = (function (){var statearr_15145 = f__11114__auto__.call(null);
(statearr_15145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_15145;
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
var c__11113__auto___15303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___15303,tc,fc){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___15303,tc,fc){
return (function (state_15278){
var state_val_15279 = (state_15278[(1)]);
if((state_val_15279 === (7))){
var inst_15274 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15280_15304 = state_15278__$1;
(statearr_15280_15304[(2)] = inst_15274);

(statearr_15280_15304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (1))){
var state_15278__$1 = state_15278;
var statearr_15281_15305 = state_15278__$1;
(statearr_15281_15305[(2)] = null);

(statearr_15281_15305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (4))){
var inst_15255 = (state_15278[(7)]);
var inst_15255__$1 = (state_15278[(2)]);
var inst_15256 = (inst_15255__$1 == null);
var state_15278__$1 = (function (){var statearr_15282 = state_15278;
(statearr_15282[(7)] = inst_15255__$1);

return statearr_15282;
})();
if(cljs.core.truth_(inst_15256)){
var statearr_15283_15306 = state_15278__$1;
(statearr_15283_15306[(1)] = (5));

} else {
var statearr_15284_15307 = state_15278__$1;
(statearr_15284_15307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (13))){
var state_15278__$1 = state_15278;
var statearr_15285_15308 = state_15278__$1;
(statearr_15285_15308[(2)] = null);

(statearr_15285_15308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (6))){
var inst_15255 = (state_15278[(7)]);
var inst_15261 = p.call(null,inst_15255);
var state_15278__$1 = state_15278;
if(cljs.core.truth_(inst_15261)){
var statearr_15286_15309 = state_15278__$1;
(statearr_15286_15309[(1)] = (9));

} else {
var statearr_15287_15310 = state_15278__$1;
(statearr_15287_15310[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (3))){
var inst_15276 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15278__$1,inst_15276);
} else {
if((state_val_15279 === (12))){
var state_15278__$1 = state_15278;
var statearr_15288_15311 = state_15278__$1;
(statearr_15288_15311[(2)] = null);

(statearr_15288_15311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (2))){
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15278__$1,(4),ch);
} else {
if((state_val_15279 === (11))){
var inst_15255 = (state_15278[(7)]);
var inst_15265 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15278__$1,(8),inst_15265,inst_15255);
} else {
if((state_val_15279 === (9))){
var state_15278__$1 = state_15278;
var statearr_15289_15312 = state_15278__$1;
(statearr_15289_15312[(2)] = tc);

(statearr_15289_15312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (5))){
var inst_15258 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15259 = cljs.core.async.close_BANG_.call(null,fc);
var state_15278__$1 = (function (){var statearr_15290 = state_15278;
(statearr_15290[(8)] = inst_15258);

return statearr_15290;
})();
var statearr_15291_15313 = state_15278__$1;
(statearr_15291_15313[(2)] = inst_15259);

(statearr_15291_15313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (14))){
var inst_15272 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15292_15314 = state_15278__$1;
(statearr_15292_15314[(2)] = inst_15272);

(statearr_15292_15314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (10))){
var state_15278__$1 = state_15278;
var statearr_15293_15315 = state_15278__$1;
(statearr_15293_15315[(2)] = fc);

(statearr_15293_15315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (8))){
var inst_15267 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
if(cljs.core.truth_(inst_15267)){
var statearr_15294_15316 = state_15278__$1;
(statearr_15294_15316[(1)] = (12));

} else {
var statearr_15295_15317 = state_15278__$1;
(statearr_15295_15317[(1)] = (13));

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
});})(c__11113__auto___15303,tc,fc))
;
return ((function (switch__11098__auto__,c__11113__auto___15303,tc,fc){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_15299 = [null,null,null,null,null,null,null,null,null];
(statearr_15299[(0)] = state_machine__11099__auto__);

(statearr_15299[(1)] = (1));

return statearr_15299;
});
var state_machine__11099__auto____1 = (function (state_15278){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_15278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15300){if((e15300 instanceof Object)){
var ex__11102__auto__ = e15300;
var statearr_15301_15318 = state_15278;
(statearr_15301_15318[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15319 = state_15278;
state_15278 = G__15319;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_15278){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_15278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___15303,tc,fc))
})();
var state__11115__auto__ = (function (){var statearr_15302 = f__11114__auto__.call(null);
(statearr_15302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___15303);

return statearr_15302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___15303,tc,fc))
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
return (function (state_15366){
var state_val_15367 = (state_15366[(1)]);
if((state_val_15367 === (7))){
var inst_15362 = (state_15366[(2)]);
var state_15366__$1 = state_15366;
var statearr_15368_15384 = state_15366__$1;
(statearr_15368_15384[(2)] = inst_15362);

(statearr_15368_15384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15367 === (6))){
var inst_15355 = (state_15366[(7)]);
var inst_15352 = (state_15366[(8)]);
var inst_15359 = f.call(null,inst_15352,inst_15355);
var inst_15352__$1 = inst_15359;
var state_15366__$1 = (function (){var statearr_15369 = state_15366;
(statearr_15369[(8)] = inst_15352__$1);

return statearr_15369;
})();
var statearr_15370_15385 = state_15366__$1;
(statearr_15370_15385[(2)] = null);

(statearr_15370_15385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15367 === (5))){
var inst_15352 = (state_15366[(8)]);
var state_15366__$1 = state_15366;
var statearr_15371_15386 = state_15366__$1;
(statearr_15371_15386[(2)] = inst_15352);

(statearr_15371_15386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15367 === (4))){
var inst_15355 = (state_15366[(7)]);
var inst_15355__$1 = (state_15366[(2)]);
var inst_15356 = (inst_15355__$1 == null);
var state_15366__$1 = (function (){var statearr_15372 = state_15366;
(statearr_15372[(7)] = inst_15355__$1);

return statearr_15372;
})();
if(cljs.core.truth_(inst_15356)){
var statearr_15373_15387 = state_15366__$1;
(statearr_15373_15387[(1)] = (5));

} else {
var statearr_15374_15388 = state_15366__$1;
(statearr_15374_15388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15367 === (3))){
var inst_15364 = (state_15366[(2)]);
var state_15366__$1 = state_15366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15366__$1,inst_15364);
} else {
if((state_val_15367 === (2))){
var state_15366__$1 = state_15366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15366__$1,(4),ch);
} else {
if((state_val_15367 === (1))){
var inst_15352 = init;
var state_15366__$1 = (function (){var statearr_15375 = state_15366;
(statearr_15375[(8)] = inst_15352);

return statearr_15375;
})();
var statearr_15376_15389 = state_15366__$1;
(statearr_15376_15389[(2)] = null);

(statearr_15376_15389[(1)] = (2));


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
var statearr_15380 = [null,null,null,null,null,null,null,null,null];
(statearr_15380[(0)] = state_machine__11099__auto__);

(statearr_15380[(1)] = (1));

return statearr_15380;
});
var state_machine__11099__auto____1 = (function (state_15366){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_15366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15381){if((e15381 instanceof Object)){
var ex__11102__auto__ = e15381;
var statearr_15382_15390 = state_15366;
(statearr_15382_15390[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15391 = state_15366;
state_15366 = G__15391;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_15366){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_15366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__))
})();
var state__11115__auto__ = (function (){var statearr_15383 = f__11114__auto__.call(null);
(statearr_15383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_15383;
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
return (function (state_15465){
var state_val_15466 = (state_15465[(1)]);
if((state_val_15466 === (7))){
var inst_15447 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
var statearr_15467_15490 = state_15465__$1;
(statearr_15467_15490[(2)] = inst_15447);

(statearr_15467_15490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (1))){
var inst_15441 = cljs.core.seq.call(null,coll);
var inst_15442 = inst_15441;
var state_15465__$1 = (function (){var statearr_15468 = state_15465;
(statearr_15468[(7)] = inst_15442);

return statearr_15468;
})();
var statearr_15469_15491 = state_15465__$1;
(statearr_15469_15491[(2)] = null);

(statearr_15469_15491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (4))){
var inst_15442 = (state_15465[(7)]);
var inst_15445 = cljs.core.first.call(null,inst_15442);
var state_15465__$1 = state_15465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15465__$1,(7),ch,inst_15445);
} else {
if((state_val_15466 === (13))){
var inst_15459 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
var statearr_15470_15492 = state_15465__$1;
(statearr_15470_15492[(2)] = inst_15459);

(statearr_15470_15492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (6))){
var inst_15450 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
if(cljs.core.truth_(inst_15450)){
var statearr_15471_15493 = state_15465__$1;
(statearr_15471_15493[(1)] = (8));

} else {
var statearr_15472_15494 = state_15465__$1;
(statearr_15472_15494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (3))){
var inst_15463 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15465__$1,inst_15463);
} else {
if((state_val_15466 === (12))){
var state_15465__$1 = state_15465;
var statearr_15473_15495 = state_15465__$1;
(statearr_15473_15495[(2)] = null);

(statearr_15473_15495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (2))){
var inst_15442 = (state_15465[(7)]);
var state_15465__$1 = state_15465;
if(cljs.core.truth_(inst_15442)){
var statearr_15474_15496 = state_15465__$1;
(statearr_15474_15496[(1)] = (4));

} else {
var statearr_15475_15497 = state_15465__$1;
(statearr_15475_15497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (11))){
var inst_15456 = cljs.core.async.close_BANG_.call(null,ch);
var state_15465__$1 = state_15465;
var statearr_15476_15498 = state_15465__$1;
(statearr_15476_15498[(2)] = inst_15456);

(statearr_15476_15498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (9))){
var state_15465__$1 = state_15465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15477_15499 = state_15465__$1;
(statearr_15477_15499[(1)] = (11));

} else {
var statearr_15478_15500 = state_15465__$1;
(statearr_15478_15500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (5))){
var inst_15442 = (state_15465[(7)]);
var state_15465__$1 = state_15465;
var statearr_15479_15501 = state_15465__$1;
(statearr_15479_15501[(2)] = inst_15442);

(statearr_15479_15501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (10))){
var inst_15461 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
var statearr_15480_15502 = state_15465__$1;
(statearr_15480_15502[(2)] = inst_15461);

(statearr_15480_15502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (8))){
var inst_15442 = (state_15465[(7)]);
var inst_15452 = cljs.core.next.call(null,inst_15442);
var inst_15442__$1 = inst_15452;
var state_15465__$1 = (function (){var statearr_15481 = state_15465;
(statearr_15481[(7)] = inst_15442__$1);

return statearr_15481;
})();
var statearr_15482_15503 = state_15465__$1;
(statearr_15482_15503[(2)] = null);

(statearr_15482_15503[(1)] = (2));


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
var statearr_15486 = [null,null,null,null,null,null,null,null];
(statearr_15486[(0)] = state_machine__11099__auto__);

(statearr_15486[(1)] = (1));

return statearr_15486;
});
var state_machine__11099__auto____1 = (function (state_15465){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_15465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15487){if((e15487 instanceof Object)){
var ex__11102__auto__ = e15487;
var statearr_15488_15504 = state_15465;
(statearr_15488_15504[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15505 = state_15465;
state_15465 = G__15505;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_15465){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_15465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__))
})();
var state__11115__auto__ = (function (){var statearr_15489 = f__11114__auto__.call(null);
(statearr_15489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_15489;
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

cljs.core.async.Mux = (function (){var obj15507 = {};
return obj15507;
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


cljs.core.async.Mult = (function (){var obj15509 = {};
return obj15509;
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
if(typeof cljs.core.async.t15731 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15731 = (function (cs,ch,mult,meta15732){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15732 = meta15732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15731.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t15731.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t15731.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t15731.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t15731.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15731.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t15731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15733){
var self__ = this;
var _15733__$1 = this;
return self__.meta15732;
});})(cs))
;

cljs.core.async.t15731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15733,meta15732__$1){
var self__ = this;
var _15733__$1 = this;
return (new cljs.core.async.t15731(self__.cs,self__.ch,self__.mult,meta15732__$1));
});})(cs))
;

cljs.core.async.t15731.cljs$lang$type = true;

cljs.core.async.t15731.cljs$lang$ctorStr = "cljs.core.async/t15731";

cljs.core.async.t15731.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t15731");
});})(cs))
;

cljs.core.async.__GT_t15731 = ((function (cs){
return (function __GT_t15731(cs__$1,ch__$1,mult__$1,meta15732){
return (new cljs.core.async.t15731(cs__$1,ch__$1,mult__$1,meta15732));
});})(cs))
;

}

return (new cljs.core.async.t15731(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
var c__11113__auto___15952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___15952,cs,m,dchan,dctr,done){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___15952,cs,m,dchan,dctr,done){
return (function (state_15864){
var state_val_15865 = (state_15864[(1)]);
if((state_val_15865 === (7))){
var inst_15860 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15866_15953 = state_15864__$1;
(statearr_15866_15953[(2)] = inst_15860);

(statearr_15866_15953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (20))){
var inst_15765 = (state_15864[(7)]);
var inst_15775 = cljs.core.first.call(null,inst_15765);
var inst_15776 = cljs.core.nth.call(null,inst_15775,(0),null);
var inst_15777 = cljs.core.nth.call(null,inst_15775,(1),null);
var state_15864__$1 = (function (){var statearr_15867 = state_15864;
(statearr_15867[(8)] = inst_15776);

return statearr_15867;
})();
if(cljs.core.truth_(inst_15777)){
var statearr_15868_15954 = state_15864__$1;
(statearr_15868_15954[(1)] = (22));

} else {
var statearr_15869_15955 = state_15864__$1;
(statearr_15869_15955[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (27))){
var inst_15736 = (state_15864[(9)]);
var inst_15807 = (state_15864[(10)]);
var inst_15812 = (state_15864[(11)]);
var inst_15805 = (state_15864[(12)]);
var inst_15812__$1 = cljs.core._nth.call(null,inst_15805,inst_15807);
var inst_15813 = cljs.core.async.put_BANG_.call(null,inst_15812__$1,inst_15736,done);
var state_15864__$1 = (function (){var statearr_15870 = state_15864;
(statearr_15870[(11)] = inst_15812__$1);

return statearr_15870;
})();
if(cljs.core.truth_(inst_15813)){
var statearr_15871_15956 = state_15864__$1;
(statearr_15871_15956[(1)] = (30));

} else {
var statearr_15872_15957 = state_15864__$1;
(statearr_15872_15957[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (1))){
var state_15864__$1 = state_15864;
var statearr_15873_15958 = state_15864__$1;
(statearr_15873_15958[(2)] = null);

(statearr_15873_15958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (24))){
var inst_15765 = (state_15864[(7)]);
var inst_15782 = (state_15864[(2)]);
var inst_15783 = cljs.core.next.call(null,inst_15765);
var inst_15745 = inst_15783;
var inst_15746 = null;
var inst_15747 = (0);
var inst_15748 = (0);
var state_15864__$1 = (function (){var statearr_15874 = state_15864;
(statearr_15874[(13)] = inst_15782);

(statearr_15874[(14)] = inst_15748);

(statearr_15874[(15)] = inst_15747);

(statearr_15874[(16)] = inst_15746);

(statearr_15874[(17)] = inst_15745);

return statearr_15874;
})();
var statearr_15875_15959 = state_15864__$1;
(statearr_15875_15959[(2)] = null);

(statearr_15875_15959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (39))){
var state_15864__$1 = state_15864;
var statearr_15879_15960 = state_15864__$1;
(statearr_15879_15960[(2)] = null);

(statearr_15879_15960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (4))){
var inst_15736 = (state_15864[(9)]);
var inst_15736__$1 = (state_15864[(2)]);
var inst_15737 = (inst_15736__$1 == null);
var state_15864__$1 = (function (){var statearr_15880 = state_15864;
(statearr_15880[(9)] = inst_15736__$1);

return statearr_15880;
})();
if(cljs.core.truth_(inst_15737)){
var statearr_15881_15961 = state_15864__$1;
(statearr_15881_15961[(1)] = (5));

} else {
var statearr_15882_15962 = state_15864__$1;
(statearr_15882_15962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (15))){
var inst_15748 = (state_15864[(14)]);
var inst_15747 = (state_15864[(15)]);
var inst_15746 = (state_15864[(16)]);
var inst_15745 = (state_15864[(17)]);
var inst_15761 = (state_15864[(2)]);
var inst_15762 = (inst_15748 + (1));
var tmp15876 = inst_15747;
var tmp15877 = inst_15746;
var tmp15878 = inst_15745;
var inst_15745__$1 = tmp15878;
var inst_15746__$1 = tmp15877;
var inst_15747__$1 = tmp15876;
var inst_15748__$1 = inst_15762;
var state_15864__$1 = (function (){var statearr_15883 = state_15864;
(statearr_15883[(14)] = inst_15748__$1);

(statearr_15883[(18)] = inst_15761);

(statearr_15883[(15)] = inst_15747__$1);

(statearr_15883[(16)] = inst_15746__$1);

(statearr_15883[(17)] = inst_15745__$1);

return statearr_15883;
})();
var statearr_15884_15963 = state_15864__$1;
(statearr_15884_15963[(2)] = null);

(statearr_15884_15963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (21))){
var inst_15786 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15888_15964 = state_15864__$1;
(statearr_15888_15964[(2)] = inst_15786);

(statearr_15888_15964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (31))){
var inst_15812 = (state_15864[(11)]);
var inst_15816 = done.call(null,null);
var inst_15817 = cljs.core.async.untap_STAR_.call(null,m,inst_15812);
var state_15864__$1 = (function (){var statearr_15889 = state_15864;
(statearr_15889[(19)] = inst_15816);

return statearr_15889;
})();
var statearr_15890_15965 = state_15864__$1;
(statearr_15890_15965[(2)] = inst_15817);

(statearr_15890_15965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (32))){
var inst_15806 = (state_15864[(20)]);
var inst_15804 = (state_15864[(21)]);
var inst_15807 = (state_15864[(10)]);
var inst_15805 = (state_15864[(12)]);
var inst_15819 = (state_15864[(2)]);
var inst_15820 = (inst_15807 + (1));
var tmp15885 = inst_15806;
var tmp15886 = inst_15804;
var tmp15887 = inst_15805;
var inst_15804__$1 = tmp15886;
var inst_15805__$1 = tmp15887;
var inst_15806__$1 = tmp15885;
var inst_15807__$1 = inst_15820;
var state_15864__$1 = (function (){var statearr_15891 = state_15864;
(statearr_15891[(20)] = inst_15806__$1);

(statearr_15891[(21)] = inst_15804__$1);

(statearr_15891[(22)] = inst_15819);

(statearr_15891[(10)] = inst_15807__$1);

(statearr_15891[(12)] = inst_15805__$1);

return statearr_15891;
})();
var statearr_15892_15966 = state_15864__$1;
(statearr_15892_15966[(2)] = null);

(statearr_15892_15966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (40))){
var inst_15832 = (state_15864[(23)]);
var inst_15836 = done.call(null,null);
var inst_15837 = cljs.core.async.untap_STAR_.call(null,m,inst_15832);
var state_15864__$1 = (function (){var statearr_15893 = state_15864;
(statearr_15893[(24)] = inst_15836);

return statearr_15893;
})();
var statearr_15894_15967 = state_15864__$1;
(statearr_15894_15967[(2)] = inst_15837);

(statearr_15894_15967[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (33))){
var inst_15823 = (state_15864[(25)]);
var inst_15825 = cljs.core.chunked_seq_QMARK_.call(null,inst_15823);
var state_15864__$1 = state_15864;
if(inst_15825){
var statearr_15895_15968 = state_15864__$1;
(statearr_15895_15968[(1)] = (36));

} else {
var statearr_15896_15969 = state_15864__$1;
(statearr_15896_15969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (13))){
var inst_15755 = (state_15864[(26)]);
var inst_15758 = cljs.core.async.close_BANG_.call(null,inst_15755);
var state_15864__$1 = state_15864;
var statearr_15897_15970 = state_15864__$1;
(statearr_15897_15970[(2)] = inst_15758);

(statearr_15897_15970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (22))){
var inst_15776 = (state_15864[(8)]);
var inst_15779 = cljs.core.async.close_BANG_.call(null,inst_15776);
var state_15864__$1 = state_15864;
var statearr_15898_15971 = state_15864__$1;
(statearr_15898_15971[(2)] = inst_15779);

(statearr_15898_15971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (36))){
var inst_15823 = (state_15864[(25)]);
var inst_15827 = cljs.core.chunk_first.call(null,inst_15823);
var inst_15828 = cljs.core.chunk_rest.call(null,inst_15823);
var inst_15829 = cljs.core.count.call(null,inst_15827);
var inst_15804 = inst_15828;
var inst_15805 = inst_15827;
var inst_15806 = inst_15829;
var inst_15807 = (0);
var state_15864__$1 = (function (){var statearr_15899 = state_15864;
(statearr_15899[(20)] = inst_15806);

(statearr_15899[(21)] = inst_15804);

(statearr_15899[(10)] = inst_15807);

(statearr_15899[(12)] = inst_15805);

return statearr_15899;
})();
var statearr_15900_15972 = state_15864__$1;
(statearr_15900_15972[(2)] = null);

(statearr_15900_15972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (41))){
var inst_15823 = (state_15864[(25)]);
var inst_15839 = (state_15864[(2)]);
var inst_15840 = cljs.core.next.call(null,inst_15823);
var inst_15804 = inst_15840;
var inst_15805 = null;
var inst_15806 = (0);
var inst_15807 = (0);
var state_15864__$1 = (function (){var statearr_15901 = state_15864;
(statearr_15901[(20)] = inst_15806);

(statearr_15901[(21)] = inst_15804);

(statearr_15901[(27)] = inst_15839);

(statearr_15901[(10)] = inst_15807);

(statearr_15901[(12)] = inst_15805);

return statearr_15901;
})();
var statearr_15902_15973 = state_15864__$1;
(statearr_15902_15973[(2)] = null);

(statearr_15902_15973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (43))){
var state_15864__$1 = state_15864;
var statearr_15903_15974 = state_15864__$1;
(statearr_15903_15974[(2)] = null);

(statearr_15903_15974[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (29))){
var inst_15848 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15904_15975 = state_15864__$1;
(statearr_15904_15975[(2)] = inst_15848);

(statearr_15904_15975[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (44))){
var inst_15857 = (state_15864[(2)]);
var state_15864__$1 = (function (){var statearr_15905 = state_15864;
(statearr_15905[(28)] = inst_15857);

return statearr_15905;
})();
var statearr_15906_15976 = state_15864__$1;
(statearr_15906_15976[(2)] = null);

(statearr_15906_15976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (6))){
var inst_15796 = (state_15864[(29)]);
var inst_15795 = cljs.core.deref.call(null,cs);
var inst_15796__$1 = cljs.core.keys.call(null,inst_15795);
var inst_15797 = cljs.core.count.call(null,inst_15796__$1);
var inst_15798 = cljs.core.reset_BANG_.call(null,dctr,inst_15797);
var inst_15803 = cljs.core.seq.call(null,inst_15796__$1);
var inst_15804 = inst_15803;
var inst_15805 = null;
var inst_15806 = (0);
var inst_15807 = (0);
var state_15864__$1 = (function (){var statearr_15907 = state_15864;
(statearr_15907[(20)] = inst_15806);

(statearr_15907[(21)] = inst_15804);

(statearr_15907[(29)] = inst_15796__$1);

(statearr_15907[(10)] = inst_15807);

(statearr_15907[(30)] = inst_15798);

(statearr_15907[(12)] = inst_15805);

return statearr_15907;
})();
var statearr_15908_15977 = state_15864__$1;
(statearr_15908_15977[(2)] = null);

(statearr_15908_15977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (28))){
var inst_15804 = (state_15864[(21)]);
var inst_15823 = (state_15864[(25)]);
var inst_15823__$1 = cljs.core.seq.call(null,inst_15804);
var state_15864__$1 = (function (){var statearr_15909 = state_15864;
(statearr_15909[(25)] = inst_15823__$1);

return statearr_15909;
})();
if(inst_15823__$1){
var statearr_15910_15978 = state_15864__$1;
(statearr_15910_15978[(1)] = (33));

} else {
var statearr_15911_15979 = state_15864__$1;
(statearr_15911_15979[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (25))){
var inst_15806 = (state_15864[(20)]);
var inst_15807 = (state_15864[(10)]);
var inst_15809 = (inst_15807 < inst_15806);
var inst_15810 = inst_15809;
var state_15864__$1 = state_15864;
if(cljs.core.truth_(inst_15810)){
var statearr_15912_15980 = state_15864__$1;
(statearr_15912_15980[(1)] = (27));

} else {
var statearr_15913_15981 = state_15864__$1;
(statearr_15913_15981[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (34))){
var state_15864__$1 = state_15864;
var statearr_15914_15982 = state_15864__$1;
(statearr_15914_15982[(2)] = null);

(statearr_15914_15982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (17))){
var state_15864__$1 = state_15864;
var statearr_15915_15983 = state_15864__$1;
(statearr_15915_15983[(2)] = null);

(statearr_15915_15983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (3))){
var inst_15862 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15864__$1,inst_15862);
} else {
if((state_val_15865 === (12))){
var inst_15791 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15916_15984 = state_15864__$1;
(statearr_15916_15984[(2)] = inst_15791);

(statearr_15916_15984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (2))){
var state_15864__$1 = state_15864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15864__$1,(4),ch);
} else {
if((state_val_15865 === (23))){
var state_15864__$1 = state_15864;
var statearr_15917_15985 = state_15864__$1;
(statearr_15917_15985[(2)] = null);

(statearr_15917_15985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (35))){
var inst_15846 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15918_15986 = state_15864__$1;
(statearr_15918_15986[(2)] = inst_15846);

(statearr_15918_15986[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (19))){
var inst_15765 = (state_15864[(7)]);
var inst_15769 = cljs.core.chunk_first.call(null,inst_15765);
var inst_15770 = cljs.core.chunk_rest.call(null,inst_15765);
var inst_15771 = cljs.core.count.call(null,inst_15769);
var inst_15745 = inst_15770;
var inst_15746 = inst_15769;
var inst_15747 = inst_15771;
var inst_15748 = (0);
var state_15864__$1 = (function (){var statearr_15919 = state_15864;
(statearr_15919[(14)] = inst_15748);

(statearr_15919[(15)] = inst_15747);

(statearr_15919[(16)] = inst_15746);

(statearr_15919[(17)] = inst_15745);

return statearr_15919;
})();
var statearr_15920_15987 = state_15864__$1;
(statearr_15920_15987[(2)] = null);

(statearr_15920_15987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (11))){
var inst_15765 = (state_15864[(7)]);
var inst_15745 = (state_15864[(17)]);
var inst_15765__$1 = cljs.core.seq.call(null,inst_15745);
var state_15864__$1 = (function (){var statearr_15921 = state_15864;
(statearr_15921[(7)] = inst_15765__$1);

return statearr_15921;
})();
if(inst_15765__$1){
var statearr_15922_15988 = state_15864__$1;
(statearr_15922_15988[(1)] = (16));

} else {
var statearr_15923_15989 = state_15864__$1;
(statearr_15923_15989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (9))){
var inst_15793 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15924_15990 = state_15864__$1;
(statearr_15924_15990[(2)] = inst_15793);

(statearr_15924_15990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (5))){
var inst_15743 = cljs.core.deref.call(null,cs);
var inst_15744 = cljs.core.seq.call(null,inst_15743);
var inst_15745 = inst_15744;
var inst_15746 = null;
var inst_15747 = (0);
var inst_15748 = (0);
var state_15864__$1 = (function (){var statearr_15925 = state_15864;
(statearr_15925[(14)] = inst_15748);

(statearr_15925[(15)] = inst_15747);

(statearr_15925[(16)] = inst_15746);

(statearr_15925[(17)] = inst_15745);

return statearr_15925;
})();
var statearr_15926_15991 = state_15864__$1;
(statearr_15926_15991[(2)] = null);

(statearr_15926_15991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (14))){
var state_15864__$1 = state_15864;
var statearr_15927_15992 = state_15864__$1;
(statearr_15927_15992[(2)] = null);

(statearr_15927_15992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (45))){
var inst_15854 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15928_15993 = state_15864__$1;
(statearr_15928_15993[(2)] = inst_15854);

(statearr_15928_15993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (26))){
var inst_15796 = (state_15864[(29)]);
var inst_15850 = (state_15864[(2)]);
var inst_15851 = cljs.core.seq.call(null,inst_15796);
var state_15864__$1 = (function (){var statearr_15929 = state_15864;
(statearr_15929[(31)] = inst_15850);

return statearr_15929;
})();
if(inst_15851){
var statearr_15930_15994 = state_15864__$1;
(statearr_15930_15994[(1)] = (42));

} else {
var statearr_15931_15995 = state_15864__$1;
(statearr_15931_15995[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (16))){
var inst_15765 = (state_15864[(7)]);
var inst_15767 = cljs.core.chunked_seq_QMARK_.call(null,inst_15765);
var state_15864__$1 = state_15864;
if(inst_15767){
var statearr_15932_15996 = state_15864__$1;
(statearr_15932_15996[(1)] = (19));

} else {
var statearr_15933_15997 = state_15864__$1;
(statearr_15933_15997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (38))){
var inst_15843 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15934_15998 = state_15864__$1;
(statearr_15934_15998[(2)] = inst_15843);

(statearr_15934_15998[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (30))){
var state_15864__$1 = state_15864;
var statearr_15935_15999 = state_15864__$1;
(statearr_15935_15999[(2)] = null);

(statearr_15935_15999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (10))){
var inst_15748 = (state_15864[(14)]);
var inst_15746 = (state_15864[(16)]);
var inst_15754 = cljs.core._nth.call(null,inst_15746,inst_15748);
var inst_15755 = cljs.core.nth.call(null,inst_15754,(0),null);
var inst_15756 = cljs.core.nth.call(null,inst_15754,(1),null);
var state_15864__$1 = (function (){var statearr_15936 = state_15864;
(statearr_15936[(26)] = inst_15755);

return statearr_15936;
})();
if(cljs.core.truth_(inst_15756)){
var statearr_15937_16000 = state_15864__$1;
(statearr_15937_16000[(1)] = (13));

} else {
var statearr_15938_16001 = state_15864__$1;
(statearr_15938_16001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (18))){
var inst_15789 = (state_15864[(2)]);
var state_15864__$1 = state_15864;
var statearr_15939_16002 = state_15864__$1;
(statearr_15939_16002[(2)] = inst_15789);

(statearr_15939_16002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (42))){
var state_15864__$1 = state_15864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15864__$1,(45),dchan);
} else {
if((state_val_15865 === (37))){
var inst_15736 = (state_15864[(9)]);
var inst_15823 = (state_15864[(25)]);
var inst_15832 = (state_15864[(23)]);
var inst_15832__$1 = cljs.core.first.call(null,inst_15823);
var inst_15833 = cljs.core.async.put_BANG_.call(null,inst_15832__$1,inst_15736,done);
var state_15864__$1 = (function (){var statearr_15940 = state_15864;
(statearr_15940[(23)] = inst_15832__$1);

return statearr_15940;
})();
if(cljs.core.truth_(inst_15833)){
var statearr_15941_16003 = state_15864__$1;
(statearr_15941_16003[(1)] = (39));

} else {
var statearr_15942_16004 = state_15864__$1;
(statearr_15942_16004[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15865 === (8))){
var inst_15748 = (state_15864[(14)]);
var inst_15747 = (state_15864[(15)]);
var inst_15750 = (inst_15748 < inst_15747);
var inst_15751 = inst_15750;
var state_15864__$1 = state_15864;
if(cljs.core.truth_(inst_15751)){
var statearr_15943_16005 = state_15864__$1;
(statearr_15943_16005[(1)] = (10));

} else {
var statearr_15944_16006 = state_15864__$1;
(statearr_15944_16006[(1)] = (11));

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
});})(c__11113__auto___15952,cs,m,dchan,dctr,done))
;
return ((function (switch__11098__auto__,c__11113__auto___15952,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_15948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15948[(0)] = state_machine__11099__auto__);

(statearr_15948[(1)] = (1));

return statearr_15948;
});
var state_machine__11099__auto____1 = (function (state_15864){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_15864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e15949){if((e15949 instanceof Object)){
var ex__11102__auto__ = e15949;
var statearr_15950_16007 = state_15864;
(statearr_15950_16007[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16008 = state_15864;
state_15864 = G__16008;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_15864){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_15864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___15952,cs,m,dchan,dctr,done))
})();
var state__11115__auto__ = (function (){var statearr_15951 = f__11114__auto__.call(null);
(statearr_15951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___15952);

return statearr_15951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___15952,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj16010 = {};
return obj16010;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16011){
var map__16016 = p__16011;
var map__16016__$1 = ((cljs.core.seq_QMARK_.call(null,map__16016))?cljs.core.apply.call(null,cljs.core.hash_map,map__16016):map__16016);
var opts = map__16016__$1;
var statearr_16017_16020 = state;
(statearr_16017_16020[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16016,map__16016__$1,opts){
return (function (val){
var statearr_16018_16021 = state;
(statearr_16018_16021[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16016,map__16016__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_16019_16022 = state;
(statearr_16019_16022[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16011 = null;
if (arguments.length > 3) {
  p__16011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16011);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16023){
var state = cljs.core.first(arglist__16023);
arglist__16023 = cljs.core.next(arglist__16023);
var cont_block = cljs.core.first(arglist__16023);
arglist__16023 = cljs.core.next(arglist__16023);
var ports = cljs.core.first(arglist__16023);
var p__16011 = cljs.core.rest(arglist__16023);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16011);
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
if(typeof cljs.core.async.t16143 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16143 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16144){
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
this.meta16144 = meta16144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16143.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16143.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16145){
var self__ = this;
var _16145__$1 = this;
return self__.meta16144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16145,meta16144__$1){
var self__ = this;
var _16145__$1 = this;
return (new cljs.core.async.t16143(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16143.cljs$lang$type = true;

cljs.core.async.t16143.cljs$lang$ctorStr = "cljs.core.async/t16143";

cljs.core.async.t16143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t16143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16144){
return (new cljs.core.async.t16143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16143(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
;
var c__11113__auto___16262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___16262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___16262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16215){
var state_val_16216 = (state_16215[(1)]);
if((state_val_16216 === (7))){
var inst_16159 = (state_16215[(7)]);
var inst_16164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16159);
var state_16215__$1 = state_16215;
var statearr_16217_16263 = state_16215__$1;
(statearr_16217_16263[(2)] = inst_16164);

(statearr_16217_16263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (20))){
var inst_16174 = (state_16215[(8)]);
var state_16215__$1 = state_16215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16215__$1,(23),out,inst_16174);
} else {
if((state_val_16216 === (1))){
var inst_16149 = (state_16215[(9)]);
var inst_16149__$1 = calc_state.call(null);
var inst_16150 = cljs.core.seq_QMARK_.call(null,inst_16149__$1);
var state_16215__$1 = (function (){var statearr_16218 = state_16215;
(statearr_16218[(9)] = inst_16149__$1);

return statearr_16218;
})();
if(inst_16150){
var statearr_16219_16264 = state_16215__$1;
(statearr_16219_16264[(1)] = (2));

} else {
var statearr_16220_16265 = state_16215__$1;
(statearr_16220_16265[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (24))){
var inst_16167 = (state_16215[(10)]);
var inst_16159 = inst_16167;
var state_16215__$1 = (function (){var statearr_16221 = state_16215;
(statearr_16221[(7)] = inst_16159);

return statearr_16221;
})();
var statearr_16222_16266 = state_16215__$1;
(statearr_16222_16266[(2)] = null);

(statearr_16222_16266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (4))){
var inst_16149 = (state_16215[(9)]);
var inst_16155 = (state_16215[(2)]);
var inst_16156 = cljs.core.get.call(null,inst_16155,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16157 = cljs.core.get.call(null,inst_16155,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16158 = cljs.core.get.call(null,inst_16155,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16159 = inst_16149;
var state_16215__$1 = (function (){var statearr_16223 = state_16215;
(statearr_16223[(11)] = inst_16156);

(statearr_16223[(12)] = inst_16158);

(statearr_16223[(13)] = inst_16157);

(statearr_16223[(7)] = inst_16159);

return statearr_16223;
})();
var statearr_16224_16267 = state_16215__$1;
(statearr_16224_16267[(2)] = null);

(statearr_16224_16267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (15))){
var state_16215__$1 = state_16215;
var statearr_16225_16268 = state_16215__$1;
(statearr_16225_16268[(2)] = null);

(statearr_16225_16268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (21))){
var inst_16167 = (state_16215[(10)]);
var inst_16159 = inst_16167;
var state_16215__$1 = (function (){var statearr_16226 = state_16215;
(statearr_16226[(7)] = inst_16159);

return statearr_16226;
})();
var statearr_16227_16269 = state_16215__$1;
(statearr_16227_16269[(2)] = null);

(statearr_16227_16269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (13))){
var inst_16211 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16228_16270 = state_16215__$1;
(statearr_16228_16270[(2)] = inst_16211);

(statearr_16228_16270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (22))){
var inst_16209 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16229_16271 = state_16215__$1;
(statearr_16229_16271[(2)] = inst_16209);

(statearr_16229_16271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (6))){
var inst_16213 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16215__$1,inst_16213);
} else {
if((state_val_16216 === (25))){
var state_16215__$1 = state_16215;
var statearr_16230_16272 = state_16215__$1;
(statearr_16230_16272[(2)] = null);

(statearr_16230_16272[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (17))){
var inst_16189 = (state_16215[(14)]);
var state_16215__$1 = state_16215;
var statearr_16231_16273 = state_16215__$1;
(statearr_16231_16273[(2)] = inst_16189);

(statearr_16231_16273[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (3))){
var inst_16149 = (state_16215[(9)]);
var state_16215__$1 = state_16215;
var statearr_16232_16274 = state_16215__$1;
(statearr_16232_16274[(2)] = inst_16149);

(statearr_16232_16274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (12))){
var inst_16170 = (state_16215[(15)]);
var inst_16175 = (state_16215[(16)]);
var inst_16189 = (state_16215[(14)]);
var inst_16189__$1 = inst_16170.call(null,inst_16175);
var state_16215__$1 = (function (){var statearr_16233 = state_16215;
(statearr_16233[(14)] = inst_16189__$1);

return statearr_16233;
})();
if(cljs.core.truth_(inst_16189__$1)){
var statearr_16234_16275 = state_16215__$1;
(statearr_16234_16275[(1)] = (17));

} else {
var statearr_16235_16276 = state_16215__$1;
(statearr_16235_16276[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (2))){
var inst_16149 = (state_16215[(9)]);
var inst_16152 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16149);
var state_16215__$1 = state_16215;
var statearr_16236_16277 = state_16215__$1;
(statearr_16236_16277[(2)] = inst_16152);

(statearr_16236_16277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (23))){
var inst_16200 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16200)){
var statearr_16237_16278 = state_16215__$1;
(statearr_16237_16278[(1)] = (24));

} else {
var statearr_16238_16279 = state_16215__$1;
(statearr_16238_16279[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (19))){
var inst_16197 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16197)){
var statearr_16239_16280 = state_16215__$1;
(statearr_16239_16280[(1)] = (20));

} else {
var statearr_16240_16281 = state_16215__$1;
(statearr_16240_16281[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (11))){
var inst_16174 = (state_16215[(8)]);
var inst_16180 = (inst_16174 == null);
var state_16215__$1 = state_16215;
if(cljs.core.truth_(inst_16180)){
var statearr_16241_16282 = state_16215__$1;
(statearr_16241_16282[(1)] = (14));

} else {
var statearr_16242_16283 = state_16215__$1;
(statearr_16242_16283[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (9))){
var inst_16167 = (state_16215[(10)]);
var inst_16167__$1 = (state_16215[(2)]);
var inst_16168 = cljs.core.get.call(null,inst_16167__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16169 = cljs.core.get.call(null,inst_16167__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16170 = cljs.core.get.call(null,inst_16167__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16215__$1 = (function (){var statearr_16243 = state_16215;
(statearr_16243[(15)] = inst_16170);

(statearr_16243[(17)] = inst_16169);

(statearr_16243[(10)] = inst_16167__$1);

return statearr_16243;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16215__$1,(10),inst_16168);
} else {
if((state_val_16216 === (5))){
var inst_16159 = (state_16215[(7)]);
var inst_16162 = cljs.core.seq_QMARK_.call(null,inst_16159);
var state_16215__$1 = state_16215;
if(inst_16162){
var statearr_16244_16284 = state_16215__$1;
(statearr_16244_16284[(1)] = (7));

} else {
var statearr_16245_16285 = state_16215__$1;
(statearr_16245_16285[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (14))){
var inst_16175 = (state_16215[(16)]);
var inst_16182 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16175);
var state_16215__$1 = state_16215;
var statearr_16246_16286 = state_16215__$1;
(statearr_16246_16286[(2)] = inst_16182);

(statearr_16246_16286[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (26))){
var inst_16205 = (state_16215[(2)]);
var state_16215__$1 = state_16215;
var statearr_16247_16287 = state_16215__$1;
(statearr_16247_16287[(2)] = inst_16205);

(statearr_16247_16287[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (16))){
var inst_16185 = (state_16215[(2)]);
var inst_16186 = calc_state.call(null);
var inst_16159 = inst_16186;
var state_16215__$1 = (function (){var statearr_16248 = state_16215;
(statearr_16248[(7)] = inst_16159);

(statearr_16248[(18)] = inst_16185);

return statearr_16248;
})();
var statearr_16249_16288 = state_16215__$1;
(statearr_16249_16288[(2)] = null);

(statearr_16249_16288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (10))){
var inst_16175 = (state_16215[(16)]);
var inst_16174 = (state_16215[(8)]);
var inst_16173 = (state_16215[(2)]);
var inst_16174__$1 = cljs.core.nth.call(null,inst_16173,(0),null);
var inst_16175__$1 = cljs.core.nth.call(null,inst_16173,(1),null);
var inst_16176 = (inst_16174__$1 == null);
var inst_16177 = cljs.core._EQ_.call(null,inst_16175__$1,change);
var inst_16178 = (inst_16176) || (inst_16177);
var state_16215__$1 = (function (){var statearr_16250 = state_16215;
(statearr_16250[(16)] = inst_16175__$1);

(statearr_16250[(8)] = inst_16174__$1);

return statearr_16250;
})();
if(cljs.core.truth_(inst_16178)){
var statearr_16251_16289 = state_16215__$1;
(statearr_16251_16289[(1)] = (11));

} else {
var statearr_16252_16290 = state_16215__$1;
(statearr_16252_16290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (18))){
var inst_16170 = (state_16215[(15)]);
var inst_16169 = (state_16215[(17)]);
var inst_16175 = (state_16215[(16)]);
var inst_16192 = cljs.core.empty_QMARK_.call(null,inst_16170);
var inst_16193 = inst_16169.call(null,inst_16175);
var inst_16194 = cljs.core.not.call(null,inst_16193);
var inst_16195 = (inst_16192) && (inst_16194);
var state_16215__$1 = state_16215;
var statearr_16253_16291 = state_16215__$1;
(statearr_16253_16291[(2)] = inst_16195);

(statearr_16253_16291[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16216 === (8))){
var inst_16159 = (state_16215[(7)]);
var state_16215__$1 = state_16215;
var statearr_16254_16292 = state_16215__$1;
(statearr_16254_16292[(2)] = inst_16159);

(statearr_16254_16292[(1)] = (9));


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
});})(c__11113__auto___16262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11098__auto__,c__11113__auto___16262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_16258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16258[(0)] = state_machine__11099__auto__);

(statearr_16258[(1)] = (1));

return statearr_16258;
});
var state_machine__11099__auto____1 = (function (state_16215){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_16215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e16259){if((e16259 instanceof Object)){
var ex__11102__auto__ = e16259;
var statearr_16260_16293 = state_16215;
(statearr_16260_16293[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16294 = state_16215;
state_16215 = G__16294;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_16215){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_16215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___16262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11115__auto__ = (function (){var statearr_16261 = f__11114__auto__.call(null);
(statearr_16261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___16262);

return statearr_16261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___16262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16296 = {};
return obj16296;
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
return (function (p1__16297_SHARP_){
if(cljs.core.truth_(p1__16297_SHARP_.call(null,topic))){
return p1__16297_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16297_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3638__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16420 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16420 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16421){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16421 = meta16421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16420.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16420.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16420.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16420.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16420.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16420.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16422){
var self__ = this;
var _16422__$1 = this;
return self__.meta16421;
});})(mults,ensure_mult))
;

cljs.core.async.t16420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16422,meta16421__$1){
var self__ = this;
var _16422__$1 = this;
return (new cljs.core.async.t16420(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16421__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16420.cljs$lang$type = true;

cljs.core.async.t16420.cljs$lang$ctorStr = "cljs.core.async/t16420";

cljs.core.async.t16420.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t16420");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16420 = ((function (mults,ensure_mult){
return (function __GT_t16420(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16421){
return (new cljs.core.async.t16420(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16421));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16420(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
;
var c__11113__auto___16542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___16542,mults,ensure_mult,p){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___16542,mults,ensure_mult,p){
return (function (state_16494){
var state_val_16495 = (state_16494[(1)]);
if((state_val_16495 === (7))){
var inst_16490 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16496_16543 = state_16494__$1;
(statearr_16496_16543[(2)] = inst_16490);

(statearr_16496_16543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (20))){
var state_16494__$1 = state_16494;
var statearr_16497_16544 = state_16494__$1;
(statearr_16497_16544[(2)] = null);

(statearr_16497_16544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (1))){
var state_16494__$1 = state_16494;
var statearr_16498_16545 = state_16494__$1;
(statearr_16498_16545[(2)] = null);

(statearr_16498_16545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (24))){
var inst_16473 = (state_16494[(7)]);
var inst_16482 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16473);
var state_16494__$1 = state_16494;
var statearr_16499_16546 = state_16494__$1;
(statearr_16499_16546[(2)] = inst_16482);

(statearr_16499_16546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (4))){
var inst_16425 = (state_16494[(8)]);
var inst_16425__$1 = (state_16494[(2)]);
var inst_16426 = (inst_16425__$1 == null);
var state_16494__$1 = (function (){var statearr_16500 = state_16494;
(statearr_16500[(8)] = inst_16425__$1);

return statearr_16500;
})();
if(cljs.core.truth_(inst_16426)){
var statearr_16501_16547 = state_16494__$1;
(statearr_16501_16547[(1)] = (5));

} else {
var statearr_16502_16548 = state_16494__$1;
(statearr_16502_16548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (15))){
var inst_16467 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16503_16549 = state_16494__$1;
(statearr_16503_16549[(2)] = inst_16467);

(statearr_16503_16549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (21))){
var inst_16487 = (state_16494[(2)]);
var state_16494__$1 = (function (){var statearr_16504 = state_16494;
(statearr_16504[(9)] = inst_16487);

return statearr_16504;
})();
var statearr_16505_16550 = state_16494__$1;
(statearr_16505_16550[(2)] = null);

(statearr_16505_16550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (13))){
var inst_16449 = (state_16494[(10)]);
var inst_16451 = cljs.core.chunked_seq_QMARK_.call(null,inst_16449);
var state_16494__$1 = state_16494;
if(inst_16451){
var statearr_16506_16551 = state_16494__$1;
(statearr_16506_16551[(1)] = (16));

} else {
var statearr_16507_16552 = state_16494__$1;
(statearr_16507_16552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (22))){
var inst_16479 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16479)){
var statearr_16508_16553 = state_16494__$1;
(statearr_16508_16553[(1)] = (23));

} else {
var statearr_16509_16554 = state_16494__$1;
(statearr_16509_16554[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (6))){
var inst_16475 = (state_16494[(11)]);
var inst_16473 = (state_16494[(7)]);
var inst_16425 = (state_16494[(8)]);
var inst_16473__$1 = topic_fn.call(null,inst_16425);
var inst_16474 = cljs.core.deref.call(null,mults);
var inst_16475__$1 = cljs.core.get.call(null,inst_16474,inst_16473__$1);
var state_16494__$1 = (function (){var statearr_16510 = state_16494;
(statearr_16510[(11)] = inst_16475__$1);

(statearr_16510[(7)] = inst_16473__$1);

return statearr_16510;
})();
if(cljs.core.truth_(inst_16475__$1)){
var statearr_16511_16555 = state_16494__$1;
(statearr_16511_16555[(1)] = (19));

} else {
var statearr_16512_16556 = state_16494__$1;
(statearr_16512_16556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (25))){
var inst_16484 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16513_16557 = state_16494__$1;
(statearr_16513_16557[(2)] = inst_16484);

(statearr_16513_16557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (17))){
var inst_16449 = (state_16494[(10)]);
var inst_16458 = cljs.core.first.call(null,inst_16449);
var inst_16459 = cljs.core.async.muxch_STAR_.call(null,inst_16458);
var inst_16460 = cljs.core.async.close_BANG_.call(null,inst_16459);
var inst_16461 = cljs.core.next.call(null,inst_16449);
var inst_16435 = inst_16461;
var inst_16436 = null;
var inst_16437 = (0);
var inst_16438 = (0);
var state_16494__$1 = (function (){var statearr_16514 = state_16494;
(statearr_16514[(12)] = inst_16435);

(statearr_16514[(13)] = inst_16437);

(statearr_16514[(14)] = inst_16460);

(statearr_16514[(15)] = inst_16436);

(statearr_16514[(16)] = inst_16438);

return statearr_16514;
})();
var statearr_16515_16558 = state_16494__$1;
(statearr_16515_16558[(2)] = null);

(statearr_16515_16558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (3))){
var inst_16492 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16494__$1,inst_16492);
} else {
if((state_val_16495 === (12))){
var inst_16469 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16516_16559 = state_16494__$1;
(statearr_16516_16559[(2)] = inst_16469);

(statearr_16516_16559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (2))){
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(4),ch);
} else {
if((state_val_16495 === (23))){
var state_16494__$1 = state_16494;
var statearr_16517_16560 = state_16494__$1;
(statearr_16517_16560[(2)] = null);

(statearr_16517_16560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (19))){
var inst_16475 = (state_16494[(11)]);
var inst_16425 = (state_16494[(8)]);
var inst_16477 = cljs.core.async.muxch_STAR_.call(null,inst_16475);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16494__$1,(22),inst_16477,inst_16425);
} else {
if((state_val_16495 === (11))){
var inst_16435 = (state_16494[(12)]);
var inst_16449 = (state_16494[(10)]);
var inst_16449__$1 = cljs.core.seq.call(null,inst_16435);
var state_16494__$1 = (function (){var statearr_16518 = state_16494;
(statearr_16518[(10)] = inst_16449__$1);

return statearr_16518;
})();
if(inst_16449__$1){
var statearr_16519_16561 = state_16494__$1;
(statearr_16519_16561[(1)] = (13));

} else {
var statearr_16520_16562 = state_16494__$1;
(statearr_16520_16562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (9))){
var inst_16471 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16521_16563 = state_16494__$1;
(statearr_16521_16563[(2)] = inst_16471);

(statearr_16521_16563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (5))){
var inst_16432 = cljs.core.deref.call(null,mults);
var inst_16433 = cljs.core.vals.call(null,inst_16432);
var inst_16434 = cljs.core.seq.call(null,inst_16433);
var inst_16435 = inst_16434;
var inst_16436 = null;
var inst_16437 = (0);
var inst_16438 = (0);
var state_16494__$1 = (function (){var statearr_16522 = state_16494;
(statearr_16522[(12)] = inst_16435);

(statearr_16522[(13)] = inst_16437);

(statearr_16522[(15)] = inst_16436);

(statearr_16522[(16)] = inst_16438);

return statearr_16522;
})();
var statearr_16523_16564 = state_16494__$1;
(statearr_16523_16564[(2)] = null);

(statearr_16523_16564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (14))){
var state_16494__$1 = state_16494;
var statearr_16527_16565 = state_16494__$1;
(statearr_16527_16565[(2)] = null);

(statearr_16527_16565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (16))){
var inst_16449 = (state_16494[(10)]);
var inst_16453 = cljs.core.chunk_first.call(null,inst_16449);
var inst_16454 = cljs.core.chunk_rest.call(null,inst_16449);
var inst_16455 = cljs.core.count.call(null,inst_16453);
var inst_16435 = inst_16454;
var inst_16436 = inst_16453;
var inst_16437 = inst_16455;
var inst_16438 = (0);
var state_16494__$1 = (function (){var statearr_16528 = state_16494;
(statearr_16528[(12)] = inst_16435);

(statearr_16528[(13)] = inst_16437);

(statearr_16528[(15)] = inst_16436);

(statearr_16528[(16)] = inst_16438);

return statearr_16528;
})();
var statearr_16529_16566 = state_16494__$1;
(statearr_16529_16566[(2)] = null);

(statearr_16529_16566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (10))){
var inst_16435 = (state_16494[(12)]);
var inst_16437 = (state_16494[(13)]);
var inst_16436 = (state_16494[(15)]);
var inst_16438 = (state_16494[(16)]);
var inst_16443 = cljs.core._nth.call(null,inst_16436,inst_16438);
var inst_16444 = cljs.core.async.muxch_STAR_.call(null,inst_16443);
var inst_16445 = cljs.core.async.close_BANG_.call(null,inst_16444);
var inst_16446 = (inst_16438 + (1));
var tmp16524 = inst_16435;
var tmp16525 = inst_16437;
var tmp16526 = inst_16436;
var inst_16435__$1 = tmp16524;
var inst_16436__$1 = tmp16526;
var inst_16437__$1 = tmp16525;
var inst_16438__$1 = inst_16446;
var state_16494__$1 = (function (){var statearr_16530 = state_16494;
(statearr_16530[(12)] = inst_16435__$1);

(statearr_16530[(13)] = inst_16437__$1);

(statearr_16530[(17)] = inst_16445);

(statearr_16530[(15)] = inst_16436__$1);

(statearr_16530[(16)] = inst_16438__$1);

return statearr_16530;
})();
var statearr_16531_16567 = state_16494__$1;
(statearr_16531_16567[(2)] = null);

(statearr_16531_16567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (18))){
var inst_16464 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16532_16568 = state_16494__$1;
(statearr_16532_16568[(2)] = inst_16464);

(statearr_16532_16568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (8))){
var inst_16437 = (state_16494[(13)]);
var inst_16438 = (state_16494[(16)]);
var inst_16440 = (inst_16438 < inst_16437);
var inst_16441 = inst_16440;
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16441)){
var statearr_16533_16569 = state_16494__$1;
(statearr_16533_16569[(1)] = (10));

} else {
var statearr_16534_16570 = state_16494__$1;
(statearr_16534_16570[(1)] = (11));

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
});})(c__11113__auto___16542,mults,ensure_mult,p))
;
return ((function (switch__11098__auto__,c__11113__auto___16542,mults,ensure_mult,p){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_16538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16538[(0)] = state_machine__11099__auto__);

(statearr_16538[(1)] = (1));

return statearr_16538;
});
var state_machine__11099__auto____1 = (function (state_16494){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_16494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e16539){if((e16539 instanceof Object)){
var ex__11102__auto__ = e16539;
var statearr_16540_16571 = state_16494;
(statearr_16540_16571[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16572 = state_16494;
state_16494 = G__16572;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_16494){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_16494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___16542,mults,ensure_mult,p))
})();
var state__11115__auto__ = (function (){var statearr_16541 = f__11114__auto__.call(null);
(statearr_16541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___16542);

return statearr_16541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___16542,mults,ensure_mult,p))
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
var c__11113__auto___16709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___16709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___16709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16679){
var state_val_16680 = (state_16679[(1)]);
if((state_val_16680 === (7))){
var state_16679__$1 = state_16679;
var statearr_16681_16710 = state_16679__$1;
(statearr_16681_16710[(2)] = null);

(statearr_16681_16710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (1))){
var state_16679__$1 = state_16679;
var statearr_16682_16711 = state_16679__$1;
(statearr_16682_16711[(2)] = null);

(statearr_16682_16711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (4))){
var inst_16643 = (state_16679[(7)]);
var inst_16645 = (inst_16643 < cnt);
var state_16679__$1 = state_16679;
if(cljs.core.truth_(inst_16645)){
var statearr_16683_16712 = state_16679__$1;
(statearr_16683_16712[(1)] = (6));

} else {
var statearr_16684_16713 = state_16679__$1;
(statearr_16684_16713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (15))){
var inst_16675 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16685_16714 = state_16679__$1;
(statearr_16685_16714[(2)] = inst_16675);

(statearr_16685_16714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (13))){
var inst_16668 = cljs.core.async.close_BANG_.call(null,out);
var state_16679__$1 = state_16679;
var statearr_16686_16715 = state_16679__$1;
(statearr_16686_16715[(2)] = inst_16668);

(statearr_16686_16715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (6))){
var state_16679__$1 = state_16679;
var statearr_16687_16716 = state_16679__$1;
(statearr_16687_16716[(2)] = null);

(statearr_16687_16716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (3))){
var inst_16677 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16679__$1,inst_16677);
} else {
if((state_val_16680 === (12))){
var inst_16665 = (state_16679[(8)]);
var inst_16665__$1 = (state_16679[(2)]);
var inst_16666 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16665__$1);
var state_16679__$1 = (function (){var statearr_16688 = state_16679;
(statearr_16688[(8)] = inst_16665__$1);

return statearr_16688;
})();
if(cljs.core.truth_(inst_16666)){
var statearr_16689_16717 = state_16679__$1;
(statearr_16689_16717[(1)] = (13));

} else {
var statearr_16690_16718 = state_16679__$1;
(statearr_16690_16718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (2))){
var inst_16642 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16643 = (0);
var state_16679__$1 = (function (){var statearr_16691 = state_16679;
(statearr_16691[(7)] = inst_16643);

(statearr_16691[(9)] = inst_16642);

return statearr_16691;
})();
var statearr_16692_16719 = state_16679__$1;
(statearr_16692_16719[(2)] = null);

(statearr_16692_16719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (11))){
var inst_16643 = (state_16679[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16679,(10),Object,null,(9));
var inst_16652 = chs__$1.call(null,inst_16643);
var inst_16653 = done.call(null,inst_16643);
var inst_16654 = cljs.core.async.take_BANG_.call(null,inst_16652,inst_16653);
var state_16679__$1 = state_16679;
var statearr_16693_16720 = state_16679__$1;
(statearr_16693_16720[(2)] = inst_16654);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (9))){
var inst_16643 = (state_16679[(7)]);
var inst_16656 = (state_16679[(2)]);
var inst_16657 = (inst_16643 + (1));
var inst_16643__$1 = inst_16657;
var state_16679__$1 = (function (){var statearr_16694 = state_16679;
(statearr_16694[(7)] = inst_16643__$1);

(statearr_16694[(10)] = inst_16656);

return statearr_16694;
})();
var statearr_16695_16721 = state_16679__$1;
(statearr_16695_16721[(2)] = null);

(statearr_16695_16721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (5))){
var inst_16663 = (state_16679[(2)]);
var state_16679__$1 = (function (){var statearr_16696 = state_16679;
(statearr_16696[(11)] = inst_16663);

return statearr_16696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16679__$1,(12),dchan);
} else {
if((state_val_16680 === (14))){
var inst_16665 = (state_16679[(8)]);
var inst_16670 = cljs.core.apply.call(null,f,inst_16665);
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16679__$1,(16),out,inst_16670);
} else {
if((state_val_16680 === (16))){
var inst_16672 = (state_16679[(2)]);
var state_16679__$1 = (function (){var statearr_16697 = state_16679;
(statearr_16697[(12)] = inst_16672);

return statearr_16697;
})();
var statearr_16698_16722 = state_16679__$1;
(statearr_16698_16722[(2)] = null);

(statearr_16698_16722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (10))){
var inst_16647 = (state_16679[(2)]);
var inst_16648 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16679__$1 = (function (){var statearr_16699 = state_16679;
(statearr_16699[(13)] = inst_16647);

return statearr_16699;
})();
var statearr_16700_16723 = state_16679__$1;
(statearr_16700_16723[(2)] = inst_16648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (8))){
var inst_16661 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16701_16724 = state_16679__$1;
(statearr_16701_16724[(2)] = inst_16661);

(statearr_16701_16724[(1)] = (5));


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
});})(c__11113__auto___16709,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11098__auto__,c__11113__auto___16709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_16705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16705[(0)] = state_machine__11099__auto__);

(statearr_16705[(1)] = (1));

return statearr_16705;
});
var state_machine__11099__auto____1 = (function (state_16679){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_16679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e16706){if((e16706 instanceof Object)){
var ex__11102__auto__ = e16706;
var statearr_16707_16725 = state_16679;
(statearr_16707_16725[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16726 = state_16679;
state_16679 = G__16726;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_16679){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_16679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___16709,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11115__auto__ = (function (){var statearr_16708 = f__11114__auto__.call(null);
(statearr_16708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___16709);

return statearr_16708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___16709,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11113__auto___16834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___16834,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___16834,out){
return (function (state_16810){
var state_val_16811 = (state_16810[(1)]);
if((state_val_16811 === (7))){
var inst_16789 = (state_16810[(7)]);
var inst_16790 = (state_16810[(8)]);
var inst_16789__$1 = (state_16810[(2)]);
var inst_16790__$1 = cljs.core.nth.call(null,inst_16789__$1,(0),null);
var inst_16791 = cljs.core.nth.call(null,inst_16789__$1,(1),null);
var inst_16792 = (inst_16790__$1 == null);
var state_16810__$1 = (function (){var statearr_16812 = state_16810;
(statearr_16812[(7)] = inst_16789__$1);

(statearr_16812[(8)] = inst_16790__$1);

(statearr_16812[(9)] = inst_16791);

return statearr_16812;
})();
if(cljs.core.truth_(inst_16792)){
var statearr_16813_16835 = state_16810__$1;
(statearr_16813_16835[(1)] = (8));

} else {
var statearr_16814_16836 = state_16810__$1;
(statearr_16814_16836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (1))){
var inst_16781 = cljs.core.vec.call(null,chs);
var inst_16782 = inst_16781;
var state_16810__$1 = (function (){var statearr_16815 = state_16810;
(statearr_16815[(10)] = inst_16782);

return statearr_16815;
})();
var statearr_16816_16837 = state_16810__$1;
(statearr_16816_16837[(2)] = null);

(statearr_16816_16837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (4))){
var inst_16782 = (state_16810[(10)]);
var state_16810__$1 = state_16810;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16810__$1,(7),inst_16782);
} else {
if((state_val_16811 === (6))){
var inst_16806 = (state_16810[(2)]);
var state_16810__$1 = state_16810;
var statearr_16817_16838 = state_16810__$1;
(statearr_16817_16838[(2)] = inst_16806);

(statearr_16817_16838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (3))){
var inst_16808 = (state_16810[(2)]);
var state_16810__$1 = state_16810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16810__$1,inst_16808);
} else {
if((state_val_16811 === (2))){
var inst_16782 = (state_16810[(10)]);
var inst_16784 = cljs.core.count.call(null,inst_16782);
var inst_16785 = (inst_16784 > (0));
var state_16810__$1 = state_16810;
if(cljs.core.truth_(inst_16785)){
var statearr_16819_16839 = state_16810__$1;
(statearr_16819_16839[(1)] = (4));

} else {
var statearr_16820_16840 = state_16810__$1;
(statearr_16820_16840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (11))){
var inst_16782 = (state_16810[(10)]);
var inst_16799 = (state_16810[(2)]);
var tmp16818 = inst_16782;
var inst_16782__$1 = tmp16818;
var state_16810__$1 = (function (){var statearr_16821 = state_16810;
(statearr_16821[(11)] = inst_16799);

(statearr_16821[(10)] = inst_16782__$1);

return statearr_16821;
})();
var statearr_16822_16841 = state_16810__$1;
(statearr_16822_16841[(2)] = null);

(statearr_16822_16841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (9))){
var inst_16790 = (state_16810[(8)]);
var state_16810__$1 = state_16810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16810__$1,(11),out,inst_16790);
} else {
if((state_val_16811 === (5))){
var inst_16804 = cljs.core.async.close_BANG_.call(null,out);
var state_16810__$1 = state_16810;
var statearr_16823_16842 = state_16810__$1;
(statearr_16823_16842[(2)] = inst_16804);

(statearr_16823_16842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (10))){
var inst_16802 = (state_16810[(2)]);
var state_16810__$1 = state_16810;
var statearr_16824_16843 = state_16810__$1;
(statearr_16824_16843[(2)] = inst_16802);

(statearr_16824_16843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (8))){
var inst_16789 = (state_16810[(7)]);
var inst_16790 = (state_16810[(8)]);
var inst_16782 = (state_16810[(10)]);
var inst_16791 = (state_16810[(9)]);
var inst_16794 = (function (){var c = inst_16791;
var v = inst_16790;
var vec__16787 = inst_16789;
var cs = inst_16782;
return ((function (c,v,vec__16787,cs,inst_16789,inst_16790,inst_16782,inst_16791,state_val_16811,c__11113__auto___16834,out){
return (function (p1__16727_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16727_SHARP_);
});
;})(c,v,vec__16787,cs,inst_16789,inst_16790,inst_16782,inst_16791,state_val_16811,c__11113__auto___16834,out))
})();
var inst_16795 = cljs.core.filterv.call(null,inst_16794,inst_16782);
var inst_16782__$1 = inst_16795;
var state_16810__$1 = (function (){var statearr_16825 = state_16810;
(statearr_16825[(10)] = inst_16782__$1);

return statearr_16825;
})();
var statearr_16826_16844 = state_16810__$1;
(statearr_16826_16844[(2)] = null);

(statearr_16826_16844[(1)] = (2));


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
});})(c__11113__auto___16834,out))
;
return ((function (switch__11098__auto__,c__11113__auto___16834,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_16830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16830[(0)] = state_machine__11099__auto__);

(statearr_16830[(1)] = (1));

return statearr_16830;
});
var state_machine__11099__auto____1 = (function (state_16810){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_16810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e16831){if((e16831 instanceof Object)){
var ex__11102__auto__ = e16831;
var statearr_16832_16845 = state_16810;
(statearr_16832_16845[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16846 = state_16810;
state_16810 = G__16846;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_16810){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_16810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___16834,out))
})();
var state__11115__auto__ = (function (){var statearr_16833 = f__11114__auto__.call(null);
(statearr_16833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___16834);

return statearr_16833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___16834,out))
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
var c__11113__auto___16939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___16939,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___16939,out){
return (function (state_16916){
var state_val_16917 = (state_16916[(1)]);
if((state_val_16917 === (7))){
var inst_16898 = (state_16916[(7)]);
var inst_16898__$1 = (state_16916[(2)]);
var inst_16899 = (inst_16898__$1 == null);
var inst_16900 = cljs.core.not.call(null,inst_16899);
var state_16916__$1 = (function (){var statearr_16918 = state_16916;
(statearr_16918[(7)] = inst_16898__$1);

return statearr_16918;
})();
if(inst_16900){
var statearr_16919_16940 = state_16916__$1;
(statearr_16919_16940[(1)] = (8));

} else {
var statearr_16920_16941 = state_16916__$1;
(statearr_16920_16941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (1))){
var inst_16893 = (0);
var state_16916__$1 = (function (){var statearr_16921 = state_16916;
(statearr_16921[(8)] = inst_16893);

return statearr_16921;
})();
var statearr_16922_16942 = state_16916__$1;
(statearr_16922_16942[(2)] = null);

(statearr_16922_16942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (4))){
var state_16916__$1 = state_16916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16916__$1,(7),ch);
} else {
if((state_val_16917 === (6))){
var inst_16911 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
var statearr_16923_16943 = state_16916__$1;
(statearr_16923_16943[(2)] = inst_16911);

(statearr_16923_16943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (3))){
var inst_16913 = (state_16916[(2)]);
var inst_16914 = cljs.core.async.close_BANG_.call(null,out);
var state_16916__$1 = (function (){var statearr_16924 = state_16916;
(statearr_16924[(9)] = inst_16913);

return statearr_16924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16916__$1,inst_16914);
} else {
if((state_val_16917 === (2))){
var inst_16893 = (state_16916[(8)]);
var inst_16895 = (inst_16893 < n);
var state_16916__$1 = state_16916;
if(cljs.core.truth_(inst_16895)){
var statearr_16925_16944 = state_16916__$1;
(statearr_16925_16944[(1)] = (4));

} else {
var statearr_16926_16945 = state_16916__$1;
(statearr_16926_16945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (11))){
var inst_16893 = (state_16916[(8)]);
var inst_16903 = (state_16916[(2)]);
var inst_16904 = (inst_16893 + (1));
var inst_16893__$1 = inst_16904;
var state_16916__$1 = (function (){var statearr_16927 = state_16916;
(statearr_16927[(8)] = inst_16893__$1);

(statearr_16927[(10)] = inst_16903);

return statearr_16927;
})();
var statearr_16928_16946 = state_16916__$1;
(statearr_16928_16946[(2)] = null);

(statearr_16928_16946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (9))){
var state_16916__$1 = state_16916;
var statearr_16929_16947 = state_16916__$1;
(statearr_16929_16947[(2)] = null);

(statearr_16929_16947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (5))){
var state_16916__$1 = state_16916;
var statearr_16930_16948 = state_16916__$1;
(statearr_16930_16948[(2)] = null);

(statearr_16930_16948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (10))){
var inst_16908 = (state_16916[(2)]);
var state_16916__$1 = state_16916;
var statearr_16931_16949 = state_16916__$1;
(statearr_16931_16949[(2)] = inst_16908);

(statearr_16931_16949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16917 === (8))){
var inst_16898 = (state_16916[(7)]);
var state_16916__$1 = state_16916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16916__$1,(11),out,inst_16898);
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
});})(c__11113__auto___16939,out))
;
return ((function (switch__11098__auto__,c__11113__auto___16939,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_16935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16935[(0)] = state_machine__11099__auto__);

(statearr_16935[(1)] = (1));

return statearr_16935;
});
var state_machine__11099__auto____1 = (function (state_16916){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_16916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e16936){if((e16936 instanceof Object)){
var ex__11102__auto__ = e16936;
var statearr_16937_16950 = state_16916;
(statearr_16937_16950[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16951 = state_16916;
state_16916 = G__16951;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_16916){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_16916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___16939,out))
})();
var state__11115__auto__ = (function (){var statearr_16938 = f__11114__auto__.call(null);
(statearr_16938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___16939);

return statearr_16938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___16939,out))
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
if(typeof cljs.core.async.t16959 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16959 = (function (ch,f,map_LT_,meta16960){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16960 = meta16960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16962 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16962 = (function (fn1,_,meta16960,map_LT_,f,ch,meta16963){
this.fn1 = fn1;
this._ = _;
this.meta16960 = meta16960;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16963 = meta16963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16952_SHARP_){
return f1.call(null,(((p1__16952_SHARP_ == null))?null:self__.f.call(null,p1__16952_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16964){
var self__ = this;
var _16964__$1 = this;
return self__.meta16963;
});})(___$1))
;

cljs.core.async.t16962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16964,meta16963__$1){
var self__ = this;
var _16964__$1 = this;
return (new cljs.core.async.t16962(self__.fn1,self__._,self__.meta16960,self__.map_LT_,self__.f,self__.ch,meta16963__$1));
});})(___$1))
;

cljs.core.async.t16962.cljs$lang$type = true;

cljs.core.async.t16962.cljs$lang$ctorStr = "cljs.core.async/t16962";

cljs.core.async.t16962.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t16962");
});})(___$1))
;

cljs.core.async.__GT_t16962 = ((function (___$1){
return (function __GT_t16962(fn1__$1,___$2,meta16960__$1,map_LT___$1,f__$1,ch__$1,meta16963){
return (new cljs.core.async.t16962(fn1__$1,___$2,meta16960__$1,map_LT___$1,f__$1,ch__$1,meta16963));
});})(___$1))
;

}

return (new cljs.core.async.t16962(fn1,___$1,self__.meta16960,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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

cljs.core.async.t16959.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16959.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16961){
var self__ = this;
var _16961__$1 = this;
return self__.meta16960;
});

cljs.core.async.t16959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16961,meta16960__$1){
var self__ = this;
var _16961__$1 = this;
return (new cljs.core.async.t16959(self__.ch,self__.f,self__.map_LT_,meta16960__$1));
});

cljs.core.async.t16959.cljs$lang$type = true;

cljs.core.async.t16959.cljs$lang$ctorStr = "cljs.core.async/t16959";

cljs.core.async.t16959.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t16959");
});

cljs.core.async.__GT_t16959 = (function __GT_t16959(ch__$1,f__$1,map_LT___$1,meta16960){
return (new cljs.core.async.t16959(ch__$1,f__$1,map_LT___$1,meta16960));
});

}

return (new cljs.core.async.t16959(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t16968 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16968 = (function (ch,f,map_GT_,meta16969){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16969 = meta16969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16968.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16970){
var self__ = this;
var _16970__$1 = this;
return self__.meta16969;
});

cljs.core.async.t16968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16970,meta16969__$1){
var self__ = this;
var _16970__$1 = this;
return (new cljs.core.async.t16968(self__.ch,self__.f,self__.map_GT_,meta16969__$1));
});

cljs.core.async.t16968.cljs$lang$type = true;

cljs.core.async.t16968.cljs$lang$ctorStr = "cljs.core.async/t16968";

cljs.core.async.t16968.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t16968");
});

cljs.core.async.__GT_t16968 = (function __GT_t16968(ch__$1,f__$1,map_GT___$1,meta16969){
return (new cljs.core.async.t16968(ch__$1,f__$1,map_GT___$1,meta16969));
});

}

return (new cljs.core.async.t16968(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t16974 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16974 = (function (ch,p,filter_GT_,meta16975){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16975 = meta16975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16974.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16974.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16974.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16976){
var self__ = this;
var _16976__$1 = this;
return self__.meta16975;
});

cljs.core.async.t16974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16976,meta16975__$1){
var self__ = this;
var _16976__$1 = this;
return (new cljs.core.async.t16974(self__.ch,self__.p,self__.filter_GT_,meta16975__$1));
});

cljs.core.async.t16974.cljs$lang$type = true;

cljs.core.async.t16974.cljs$lang$ctorStr = "cljs.core.async/t16974";

cljs.core.async.t16974.cljs$lang$ctorPrWriter = (function (this__4225__auto__,writer__4226__auto__,opt__4227__auto__){
return cljs.core._write.call(null,writer__4226__auto__,"cljs.core.async/t16974");
});

cljs.core.async.__GT_t16974 = (function __GT_t16974(ch__$1,p__$1,filter_GT___$1,meta16975){
return (new cljs.core.async.t16974(ch__$1,p__$1,filter_GT___$1,meta16975));
});

}

return (new cljs.core.async.t16974(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/target/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
var c__11113__auto___17059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___17059,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___17059,out){
return (function (state_17038){
var state_val_17039 = (state_17038[(1)]);
if((state_val_17039 === (7))){
var inst_17034 = (state_17038[(2)]);
var state_17038__$1 = state_17038;
var statearr_17040_17060 = state_17038__$1;
(statearr_17040_17060[(2)] = inst_17034);

(statearr_17040_17060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (1))){
var state_17038__$1 = state_17038;
var statearr_17041_17061 = state_17038__$1;
(statearr_17041_17061[(2)] = null);

(statearr_17041_17061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (4))){
var inst_17020 = (state_17038[(7)]);
var inst_17020__$1 = (state_17038[(2)]);
var inst_17021 = (inst_17020__$1 == null);
var state_17038__$1 = (function (){var statearr_17042 = state_17038;
(statearr_17042[(7)] = inst_17020__$1);

return statearr_17042;
})();
if(cljs.core.truth_(inst_17021)){
var statearr_17043_17062 = state_17038__$1;
(statearr_17043_17062[(1)] = (5));

} else {
var statearr_17044_17063 = state_17038__$1;
(statearr_17044_17063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (6))){
var inst_17020 = (state_17038[(7)]);
var inst_17025 = p.call(null,inst_17020);
var state_17038__$1 = state_17038;
if(cljs.core.truth_(inst_17025)){
var statearr_17045_17064 = state_17038__$1;
(statearr_17045_17064[(1)] = (8));

} else {
var statearr_17046_17065 = state_17038__$1;
(statearr_17046_17065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (3))){
var inst_17036 = (state_17038[(2)]);
var state_17038__$1 = state_17038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17038__$1,inst_17036);
} else {
if((state_val_17039 === (2))){
var state_17038__$1 = state_17038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17038__$1,(4),ch);
} else {
if((state_val_17039 === (11))){
var inst_17028 = (state_17038[(2)]);
var state_17038__$1 = state_17038;
var statearr_17047_17066 = state_17038__$1;
(statearr_17047_17066[(2)] = inst_17028);

(statearr_17047_17066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (9))){
var state_17038__$1 = state_17038;
var statearr_17048_17067 = state_17038__$1;
(statearr_17048_17067[(2)] = null);

(statearr_17048_17067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (5))){
var inst_17023 = cljs.core.async.close_BANG_.call(null,out);
var state_17038__$1 = state_17038;
var statearr_17049_17068 = state_17038__$1;
(statearr_17049_17068[(2)] = inst_17023);

(statearr_17049_17068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (10))){
var inst_17031 = (state_17038[(2)]);
var state_17038__$1 = (function (){var statearr_17050 = state_17038;
(statearr_17050[(8)] = inst_17031);

return statearr_17050;
})();
var statearr_17051_17069 = state_17038__$1;
(statearr_17051_17069[(2)] = null);

(statearr_17051_17069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (8))){
var inst_17020 = (state_17038[(7)]);
var state_17038__$1 = state_17038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17038__$1,(11),out,inst_17020);
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
});})(c__11113__auto___17059,out))
;
return ((function (switch__11098__auto__,c__11113__auto___17059,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_17055 = [null,null,null,null,null,null,null,null,null];
(statearr_17055[(0)] = state_machine__11099__auto__);

(statearr_17055[(1)] = (1));

return statearr_17055;
});
var state_machine__11099__auto____1 = (function (state_17038){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_17038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e17056){if((e17056 instanceof Object)){
var ex__11102__auto__ = e17056;
var statearr_17057_17070 = state_17038;
(statearr_17057_17070[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17071 = state_17038;
state_17038 = G__17071;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_17038){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_17038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___17059,out))
})();
var state__11115__auto__ = (function (){var statearr_17058 = f__11114__auto__.call(null);
(statearr_17058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___17059);

return statearr_17058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___17059,out))
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
return (function (state_17237){
var state_val_17238 = (state_17237[(1)]);
if((state_val_17238 === (7))){
var inst_17233 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17239_17280 = state_17237__$1;
(statearr_17239_17280[(2)] = inst_17233);

(statearr_17239_17280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (20))){
var inst_17203 = (state_17237[(7)]);
var inst_17214 = (state_17237[(2)]);
var inst_17215 = cljs.core.next.call(null,inst_17203);
var inst_17189 = inst_17215;
var inst_17190 = null;
var inst_17191 = (0);
var inst_17192 = (0);
var state_17237__$1 = (function (){var statearr_17240 = state_17237;
(statearr_17240[(8)] = inst_17214);

(statearr_17240[(9)] = inst_17191);

(statearr_17240[(10)] = inst_17192);

(statearr_17240[(11)] = inst_17190);

(statearr_17240[(12)] = inst_17189);

return statearr_17240;
})();
var statearr_17241_17281 = state_17237__$1;
(statearr_17241_17281[(2)] = null);

(statearr_17241_17281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (1))){
var state_17237__$1 = state_17237;
var statearr_17242_17282 = state_17237__$1;
(statearr_17242_17282[(2)] = null);

(statearr_17242_17282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (4))){
var inst_17178 = (state_17237[(13)]);
var inst_17178__$1 = (state_17237[(2)]);
var inst_17179 = (inst_17178__$1 == null);
var state_17237__$1 = (function (){var statearr_17243 = state_17237;
(statearr_17243[(13)] = inst_17178__$1);

return statearr_17243;
})();
if(cljs.core.truth_(inst_17179)){
var statearr_17244_17283 = state_17237__$1;
(statearr_17244_17283[(1)] = (5));

} else {
var statearr_17245_17284 = state_17237__$1;
(statearr_17245_17284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (15))){
var state_17237__$1 = state_17237;
var statearr_17249_17285 = state_17237__$1;
(statearr_17249_17285[(2)] = null);

(statearr_17249_17285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (21))){
var state_17237__$1 = state_17237;
var statearr_17250_17286 = state_17237__$1;
(statearr_17250_17286[(2)] = null);

(statearr_17250_17286[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (13))){
var inst_17191 = (state_17237[(9)]);
var inst_17192 = (state_17237[(10)]);
var inst_17190 = (state_17237[(11)]);
var inst_17189 = (state_17237[(12)]);
var inst_17199 = (state_17237[(2)]);
var inst_17200 = (inst_17192 + (1));
var tmp17246 = inst_17191;
var tmp17247 = inst_17190;
var tmp17248 = inst_17189;
var inst_17189__$1 = tmp17248;
var inst_17190__$1 = tmp17247;
var inst_17191__$1 = tmp17246;
var inst_17192__$1 = inst_17200;
var state_17237__$1 = (function (){var statearr_17251 = state_17237;
(statearr_17251[(14)] = inst_17199);

(statearr_17251[(9)] = inst_17191__$1);

(statearr_17251[(10)] = inst_17192__$1);

(statearr_17251[(11)] = inst_17190__$1);

(statearr_17251[(12)] = inst_17189__$1);

return statearr_17251;
})();
var statearr_17252_17287 = state_17237__$1;
(statearr_17252_17287[(2)] = null);

(statearr_17252_17287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (22))){
var state_17237__$1 = state_17237;
var statearr_17253_17288 = state_17237__$1;
(statearr_17253_17288[(2)] = null);

(statearr_17253_17288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (6))){
var inst_17178 = (state_17237[(13)]);
var inst_17187 = f.call(null,inst_17178);
var inst_17188 = cljs.core.seq.call(null,inst_17187);
var inst_17189 = inst_17188;
var inst_17190 = null;
var inst_17191 = (0);
var inst_17192 = (0);
var state_17237__$1 = (function (){var statearr_17254 = state_17237;
(statearr_17254[(9)] = inst_17191);

(statearr_17254[(10)] = inst_17192);

(statearr_17254[(11)] = inst_17190);

(statearr_17254[(12)] = inst_17189);

return statearr_17254;
})();
var statearr_17255_17289 = state_17237__$1;
(statearr_17255_17289[(2)] = null);

(statearr_17255_17289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (17))){
var inst_17203 = (state_17237[(7)]);
var inst_17207 = cljs.core.chunk_first.call(null,inst_17203);
var inst_17208 = cljs.core.chunk_rest.call(null,inst_17203);
var inst_17209 = cljs.core.count.call(null,inst_17207);
var inst_17189 = inst_17208;
var inst_17190 = inst_17207;
var inst_17191 = inst_17209;
var inst_17192 = (0);
var state_17237__$1 = (function (){var statearr_17256 = state_17237;
(statearr_17256[(9)] = inst_17191);

(statearr_17256[(10)] = inst_17192);

(statearr_17256[(11)] = inst_17190);

(statearr_17256[(12)] = inst_17189);

return statearr_17256;
})();
var statearr_17257_17290 = state_17237__$1;
(statearr_17257_17290[(2)] = null);

(statearr_17257_17290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (3))){
var inst_17235 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17237__$1,inst_17235);
} else {
if((state_val_17238 === (12))){
var inst_17223 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17258_17291 = state_17237__$1;
(statearr_17258_17291[(2)] = inst_17223);

(statearr_17258_17291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (2))){
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17237__$1,(4),in$);
} else {
if((state_val_17238 === (23))){
var inst_17231 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17259_17292 = state_17237__$1;
(statearr_17259_17292[(2)] = inst_17231);

(statearr_17259_17292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (19))){
var inst_17218 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17260_17293 = state_17237__$1;
(statearr_17260_17293[(2)] = inst_17218);

(statearr_17260_17293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (11))){
var inst_17203 = (state_17237[(7)]);
var inst_17189 = (state_17237[(12)]);
var inst_17203__$1 = cljs.core.seq.call(null,inst_17189);
var state_17237__$1 = (function (){var statearr_17261 = state_17237;
(statearr_17261[(7)] = inst_17203__$1);

return statearr_17261;
})();
if(inst_17203__$1){
var statearr_17262_17294 = state_17237__$1;
(statearr_17262_17294[(1)] = (14));

} else {
var statearr_17263_17295 = state_17237__$1;
(statearr_17263_17295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (9))){
var inst_17225 = (state_17237[(2)]);
var inst_17226 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17237__$1 = (function (){var statearr_17264 = state_17237;
(statearr_17264[(15)] = inst_17225);

return statearr_17264;
})();
if(cljs.core.truth_(inst_17226)){
var statearr_17265_17296 = state_17237__$1;
(statearr_17265_17296[(1)] = (21));

} else {
var statearr_17266_17297 = state_17237__$1;
(statearr_17266_17297[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (5))){
var inst_17181 = cljs.core.async.close_BANG_.call(null,out);
var state_17237__$1 = state_17237;
var statearr_17267_17298 = state_17237__$1;
(statearr_17267_17298[(2)] = inst_17181);

(statearr_17267_17298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (14))){
var inst_17203 = (state_17237[(7)]);
var inst_17205 = cljs.core.chunked_seq_QMARK_.call(null,inst_17203);
var state_17237__$1 = state_17237;
if(inst_17205){
var statearr_17268_17299 = state_17237__$1;
(statearr_17268_17299[(1)] = (17));

} else {
var statearr_17269_17300 = state_17237__$1;
(statearr_17269_17300[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (16))){
var inst_17221 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17270_17301 = state_17237__$1;
(statearr_17270_17301[(2)] = inst_17221);

(statearr_17270_17301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (10))){
var inst_17192 = (state_17237[(10)]);
var inst_17190 = (state_17237[(11)]);
var inst_17197 = cljs.core._nth.call(null,inst_17190,inst_17192);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17237__$1,(13),out,inst_17197);
} else {
if((state_val_17238 === (18))){
var inst_17203 = (state_17237[(7)]);
var inst_17212 = cljs.core.first.call(null,inst_17203);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17237__$1,(20),out,inst_17212);
} else {
if((state_val_17238 === (8))){
var inst_17191 = (state_17237[(9)]);
var inst_17192 = (state_17237[(10)]);
var inst_17194 = (inst_17192 < inst_17191);
var inst_17195 = inst_17194;
var state_17237__$1 = state_17237;
if(cljs.core.truth_(inst_17195)){
var statearr_17271_17302 = state_17237__$1;
(statearr_17271_17302[(1)] = (10));

} else {
var statearr_17272_17303 = state_17237__$1;
(statearr_17272_17303[(1)] = (11));

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
var statearr_17276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17276[(0)] = state_machine__11099__auto__);

(statearr_17276[(1)] = (1));

return statearr_17276;
});
var state_machine__11099__auto____1 = (function (state_17237){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_17237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e17277){if((e17277 instanceof Object)){
var ex__11102__auto__ = e17277;
var statearr_17278_17304 = state_17237;
(statearr_17278_17304[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17305 = state_17237;
state_17237 = G__17305;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_17237){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_17237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto__))
})();
var state__11115__auto__ = (function (){var statearr_17279 = f__11114__auto__.call(null);
(statearr_17279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto__);

return statearr_17279;
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
var c__11113__auto___17402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___17402,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___17402,out){
return (function (state_17377){
var state_val_17378 = (state_17377[(1)]);
if((state_val_17378 === (7))){
var inst_17372 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17379_17403 = state_17377__$1;
(statearr_17379_17403[(2)] = inst_17372);

(statearr_17379_17403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (1))){
var inst_17354 = null;
var state_17377__$1 = (function (){var statearr_17380 = state_17377;
(statearr_17380[(7)] = inst_17354);

return statearr_17380;
})();
var statearr_17381_17404 = state_17377__$1;
(statearr_17381_17404[(2)] = null);

(statearr_17381_17404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (4))){
var inst_17357 = (state_17377[(8)]);
var inst_17357__$1 = (state_17377[(2)]);
var inst_17358 = (inst_17357__$1 == null);
var inst_17359 = cljs.core.not.call(null,inst_17358);
var state_17377__$1 = (function (){var statearr_17382 = state_17377;
(statearr_17382[(8)] = inst_17357__$1);

return statearr_17382;
})();
if(inst_17359){
var statearr_17383_17405 = state_17377__$1;
(statearr_17383_17405[(1)] = (5));

} else {
var statearr_17384_17406 = state_17377__$1;
(statearr_17384_17406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (6))){
var state_17377__$1 = state_17377;
var statearr_17385_17407 = state_17377__$1;
(statearr_17385_17407[(2)] = null);

(statearr_17385_17407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (3))){
var inst_17374 = (state_17377[(2)]);
var inst_17375 = cljs.core.async.close_BANG_.call(null,out);
var state_17377__$1 = (function (){var statearr_17386 = state_17377;
(statearr_17386[(9)] = inst_17374);

return statearr_17386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17377__$1,inst_17375);
} else {
if((state_val_17378 === (2))){
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17377__$1,(4),ch);
} else {
if((state_val_17378 === (11))){
var inst_17357 = (state_17377[(8)]);
var inst_17366 = (state_17377[(2)]);
var inst_17354 = inst_17357;
var state_17377__$1 = (function (){var statearr_17387 = state_17377;
(statearr_17387[(10)] = inst_17366);

(statearr_17387[(7)] = inst_17354);

return statearr_17387;
})();
var statearr_17388_17408 = state_17377__$1;
(statearr_17388_17408[(2)] = null);

(statearr_17388_17408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (9))){
var inst_17357 = (state_17377[(8)]);
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17377__$1,(11),out,inst_17357);
} else {
if((state_val_17378 === (5))){
var inst_17357 = (state_17377[(8)]);
var inst_17354 = (state_17377[(7)]);
var inst_17361 = cljs.core._EQ_.call(null,inst_17357,inst_17354);
var state_17377__$1 = state_17377;
if(inst_17361){
var statearr_17390_17409 = state_17377__$1;
(statearr_17390_17409[(1)] = (8));

} else {
var statearr_17391_17410 = state_17377__$1;
(statearr_17391_17410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (10))){
var inst_17369 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17392_17411 = state_17377__$1;
(statearr_17392_17411[(2)] = inst_17369);

(statearr_17392_17411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (8))){
var inst_17354 = (state_17377[(7)]);
var tmp17389 = inst_17354;
var inst_17354__$1 = tmp17389;
var state_17377__$1 = (function (){var statearr_17393 = state_17377;
(statearr_17393[(7)] = inst_17354__$1);

return statearr_17393;
})();
var statearr_17394_17412 = state_17377__$1;
(statearr_17394_17412[(2)] = null);

(statearr_17394_17412[(1)] = (2));


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
});})(c__11113__auto___17402,out))
;
return ((function (switch__11098__auto__,c__11113__auto___17402,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_17398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17398[(0)] = state_machine__11099__auto__);

(statearr_17398[(1)] = (1));

return statearr_17398;
});
var state_machine__11099__auto____1 = (function (state_17377){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_17377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e17399){if((e17399 instanceof Object)){
var ex__11102__auto__ = e17399;
var statearr_17400_17413 = state_17377;
(statearr_17400_17413[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17414 = state_17377;
state_17377 = G__17414;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_17377){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_17377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___17402,out))
})();
var state__11115__auto__ = (function (){var statearr_17401 = f__11114__auto__.call(null);
(statearr_17401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___17402);

return statearr_17401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___17402,out))
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
var c__11113__auto___17549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___17549,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___17549,out){
return (function (state_17519){
var state_val_17520 = (state_17519[(1)]);
if((state_val_17520 === (7))){
var inst_17515 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17521_17550 = state_17519__$1;
(statearr_17521_17550[(2)] = inst_17515);

(statearr_17521_17550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (1))){
var inst_17482 = (new Array(n));
var inst_17483 = inst_17482;
var inst_17484 = (0);
var state_17519__$1 = (function (){var statearr_17522 = state_17519;
(statearr_17522[(7)] = inst_17484);

(statearr_17522[(8)] = inst_17483);

return statearr_17522;
})();
var statearr_17523_17551 = state_17519__$1;
(statearr_17523_17551[(2)] = null);

(statearr_17523_17551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (4))){
var inst_17487 = (state_17519[(9)]);
var inst_17487__$1 = (state_17519[(2)]);
var inst_17488 = (inst_17487__$1 == null);
var inst_17489 = cljs.core.not.call(null,inst_17488);
var state_17519__$1 = (function (){var statearr_17524 = state_17519;
(statearr_17524[(9)] = inst_17487__$1);

return statearr_17524;
})();
if(inst_17489){
var statearr_17525_17552 = state_17519__$1;
(statearr_17525_17552[(1)] = (5));

} else {
var statearr_17526_17553 = state_17519__$1;
(statearr_17526_17553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (15))){
var inst_17509 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17527_17554 = state_17519__$1;
(statearr_17527_17554[(2)] = inst_17509);

(statearr_17527_17554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (13))){
var state_17519__$1 = state_17519;
var statearr_17528_17555 = state_17519__$1;
(statearr_17528_17555[(2)] = null);

(statearr_17528_17555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (6))){
var inst_17484 = (state_17519[(7)]);
var inst_17505 = (inst_17484 > (0));
var state_17519__$1 = state_17519;
if(cljs.core.truth_(inst_17505)){
var statearr_17529_17556 = state_17519__$1;
(statearr_17529_17556[(1)] = (12));

} else {
var statearr_17530_17557 = state_17519__$1;
(statearr_17530_17557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (3))){
var inst_17517 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17519__$1,inst_17517);
} else {
if((state_val_17520 === (12))){
var inst_17483 = (state_17519[(8)]);
var inst_17507 = cljs.core.vec.call(null,inst_17483);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17519__$1,(15),out,inst_17507);
} else {
if((state_val_17520 === (2))){
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17519__$1,(4),ch);
} else {
if((state_val_17520 === (11))){
var inst_17499 = (state_17519[(2)]);
var inst_17500 = (new Array(n));
var inst_17483 = inst_17500;
var inst_17484 = (0);
var state_17519__$1 = (function (){var statearr_17531 = state_17519;
(statearr_17531[(10)] = inst_17499);

(statearr_17531[(7)] = inst_17484);

(statearr_17531[(8)] = inst_17483);

return statearr_17531;
})();
var statearr_17532_17558 = state_17519__$1;
(statearr_17532_17558[(2)] = null);

(statearr_17532_17558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (9))){
var inst_17483 = (state_17519[(8)]);
var inst_17497 = cljs.core.vec.call(null,inst_17483);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17519__$1,(11),out,inst_17497);
} else {
if((state_val_17520 === (5))){
var inst_17487 = (state_17519[(9)]);
var inst_17484 = (state_17519[(7)]);
var inst_17492 = (state_17519[(11)]);
var inst_17483 = (state_17519[(8)]);
var inst_17491 = (inst_17483[inst_17484] = inst_17487);
var inst_17492__$1 = (inst_17484 + (1));
var inst_17493 = (inst_17492__$1 < n);
var state_17519__$1 = (function (){var statearr_17533 = state_17519;
(statearr_17533[(11)] = inst_17492__$1);

(statearr_17533[(12)] = inst_17491);

return statearr_17533;
})();
if(cljs.core.truth_(inst_17493)){
var statearr_17534_17559 = state_17519__$1;
(statearr_17534_17559[(1)] = (8));

} else {
var statearr_17535_17560 = state_17519__$1;
(statearr_17535_17560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (14))){
var inst_17512 = (state_17519[(2)]);
var inst_17513 = cljs.core.async.close_BANG_.call(null,out);
var state_17519__$1 = (function (){var statearr_17537 = state_17519;
(statearr_17537[(13)] = inst_17512);

return statearr_17537;
})();
var statearr_17538_17561 = state_17519__$1;
(statearr_17538_17561[(2)] = inst_17513);

(statearr_17538_17561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (10))){
var inst_17503 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17539_17562 = state_17519__$1;
(statearr_17539_17562[(2)] = inst_17503);

(statearr_17539_17562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (8))){
var inst_17492 = (state_17519[(11)]);
var inst_17483 = (state_17519[(8)]);
var tmp17536 = inst_17483;
var inst_17483__$1 = tmp17536;
var inst_17484 = inst_17492;
var state_17519__$1 = (function (){var statearr_17540 = state_17519;
(statearr_17540[(7)] = inst_17484);

(statearr_17540[(8)] = inst_17483__$1);

return statearr_17540;
})();
var statearr_17541_17563 = state_17519__$1;
(statearr_17541_17563[(2)] = null);

(statearr_17541_17563[(1)] = (2));


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
});})(c__11113__auto___17549,out))
;
return ((function (switch__11098__auto__,c__11113__auto___17549,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_17545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17545[(0)] = state_machine__11099__auto__);

(statearr_17545[(1)] = (1));

return statearr_17545;
});
var state_machine__11099__auto____1 = (function (state_17519){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_17519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e17546){if((e17546 instanceof Object)){
var ex__11102__auto__ = e17546;
var statearr_17547_17564 = state_17519;
(statearr_17547_17564[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17565 = state_17519;
state_17519 = G__17565;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_17519){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_17519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___17549,out))
})();
var state__11115__auto__ = (function (){var statearr_17548 = f__11114__auto__.call(null);
(statearr_17548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___17549);

return statearr_17548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___17549,out))
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
var c__11113__auto___17708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11113__auto___17708,out){
return (function (){
var f__11114__auto__ = (function (){var switch__11098__auto__ = ((function (c__11113__auto___17708,out){
return (function (state_17678){
var state_val_17679 = (state_17678[(1)]);
if((state_val_17679 === (7))){
var inst_17674 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17680_17709 = state_17678__$1;
(statearr_17680_17709[(2)] = inst_17674);

(statearr_17680_17709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (1))){
var inst_17637 = [];
var inst_17638 = inst_17637;
var inst_17639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17678__$1 = (function (){var statearr_17681 = state_17678;
(statearr_17681[(7)] = inst_17639);

(statearr_17681[(8)] = inst_17638);

return statearr_17681;
})();
var statearr_17682_17710 = state_17678__$1;
(statearr_17682_17710[(2)] = null);

(statearr_17682_17710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (4))){
var inst_17642 = (state_17678[(9)]);
var inst_17642__$1 = (state_17678[(2)]);
var inst_17643 = (inst_17642__$1 == null);
var inst_17644 = cljs.core.not.call(null,inst_17643);
var state_17678__$1 = (function (){var statearr_17683 = state_17678;
(statearr_17683[(9)] = inst_17642__$1);

return statearr_17683;
})();
if(inst_17644){
var statearr_17684_17711 = state_17678__$1;
(statearr_17684_17711[(1)] = (5));

} else {
var statearr_17685_17712 = state_17678__$1;
(statearr_17685_17712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (15))){
var inst_17668 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17686_17713 = state_17678__$1;
(statearr_17686_17713[(2)] = inst_17668);

(statearr_17686_17713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (13))){
var state_17678__$1 = state_17678;
var statearr_17687_17714 = state_17678__$1;
(statearr_17687_17714[(2)] = null);

(statearr_17687_17714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (6))){
var inst_17638 = (state_17678[(8)]);
var inst_17663 = inst_17638.length;
var inst_17664 = (inst_17663 > (0));
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17664)){
var statearr_17688_17715 = state_17678__$1;
(statearr_17688_17715[(1)] = (12));

} else {
var statearr_17689_17716 = state_17678__$1;
(statearr_17689_17716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (3))){
var inst_17676 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17678__$1,inst_17676);
} else {
if((state_val_17679 === (12))){
var inst_17638 = (state_17678[(8)]);
var inst_17666 = cljs.core.vec.call(null,inst_17638);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17678__$1,(15),out,inst_17666);
} else {
if((state_val_17679 === (2))){
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17678__$1,(4),ch);
} else {
if((state_val_17679 === (11))){
var inst_17642 = (state_17678[(9)]);
var inst_17646 = (state_17678[(10)]);
var inst_17656 = (state_17678[(2)]);
var inst_17657 = [];
var inst_17658 = inst_17657.push(inst_17642);
var inst_17638 = inst_17657;
var inst_17639 = inst_17646;
var state_17678__$1 = (function (){var statearr_17690 = state_17678;
(statearr_17690[(11)] = inst_17658);

(statearr_17690[(12)] = inst_17656);

(statearr_17690[(7)] = inst_17639);

(statearr_17690[(8)] = inst_17638);

return statearr_17690;
})();
var statearr_17691_17717 = state_17678__$1;
(statearr_17691_17717[(2)] = null);

(statearr_17691_17717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (9))){
var inst_17638 = (state_17678[(8)]);
var inst_17654 = cljs.core.vec.call(null,inst_17638);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17678__$1,(11),out,inst_17654);
} else {
if((state_val_17679 === (5))){
var inst_17642 = (state_17678[(9)]);
var inst_17646 = (state_17678[(10)]);
var inst_17639 = (state_17678[(7)]);
var inst_17646__$1 = f.call(null,inst_17642);
var inst_17647 = cljs.core._EQ_.call(null,inst_17646__$1,inst_17639);
var inst_17648 = cljs.core.keyword_identical_QMARK_.call(null,inst_17639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17649 = (inst_17647) || (inst_17648);
var state_17678__$1 = (function (){var statearr_17692 = state_17678;
(statearr_17692[(10)] = inst_17646__$1);

return statearr_17692;
})();
if(cljs.core.truth_(inst_17649)){
var statearr_17693_17718 = state_17678__$1;
(statearr_17693_17718[(1)] = (8));

} else {
var statearr_17694_17719 = state_17678__$1;
(statearr_17694_17719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (14))){
var inst_17671 = (state_17678[(2)]);
var inst_17672 = cljs.core.async.close_BANG_.call(null,out);
var state_17678__$1 = (function (){var statearr_17696 = state_17678;
(statearr_17696[(13)] = inst_17671);

return statearr_17696;
})();
var statearr_17697_17720 = state_17678__$1;
(statearr_17697_17720[(2)] = inst_17672);

(statearr_17697_17720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (10))){
var inst_17661 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17698_17721 = state_17678__$1;
(statearr_17698_17721[(2)] = inst_17661);

(statearr_17698_17721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (8))){
var inst_17642 = (state_17678[(9)]);
var inst_17646 = (state_17678[(10)]);
var inst_17638 = (state_17678[(8)]);
var inst_17651 = inst_17638.push(inst_17642);
var tmp17695 = inst_17638;
var inst_17638__$1 = tmp17695;
var inst_17639 = inst_17646;
var state_17678__$1 = (function (){var statearr_17699 = state_17678;
(statearr_17699[(14)] = inst_17651);

(statearr_17699[(7)] = inst_17639);

(statearr_17699[(8)] = inst_17638__$1);

return statearr_17699;
})();
var statearr_17700_17722 = state_17678__$1;
(statearr_17700_17722[(2)] = null);

(statearr_17700_17722[(1)] = (2));


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
});})(c__11113__auto___17708,out))
;
return ((function (switch__11098__auto__,c__11113__auto___17708,out){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){
var statearr_17704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17704[(0)] = state_machine__11099__auto__);

(statearr_17704[(1)] = (1));

return statearr_17704;
});
var state_machine__11099__auto____1 = (function (state_17678){
while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_17678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11101__auto__;
}
break;
}
}catch (e17705){if((e17705 instanceof Object)){
var ex__11102__auto__ = e17705;
var statearr_17706_17723 = state_17678;
(statearr_17706_17723[(5)] = ex__11102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17724 = state_17678;
state_17678 = G__17724;
continue;
} else {
return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_17678){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_17678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11113__auto___17708,out))
})();
var state__11115__auto__ = (function (){var statearr_17707 = f__11114__auto__.call(null);
(statearr_17707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11113__auto___17708);

return statearr_17707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11115__auto__);
});})(c__11113__auto___17708,out))
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
