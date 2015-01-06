// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$113);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t32195 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t32195 = (function (f,fn_handler,meta32196){
this.f = f;
this.fn_handler = fn_handler;
this.meta32196 = meta32196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t32195.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t32195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t32195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t32195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32197){
var self__ = this;
var _32197__$1 = this;
return self__.meta32196;
});

cljs.core.async.impl.ioc_helpers.t32195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32197,meta32196__$1){
var self__ = this;
var _32197__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t32195(self__.f,self__.fn_handler,meta32196__$1));
});

cljs.core.async.impl.ioc_helpers.t32195.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t32195.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t32195";

cljs.core.async.impl.ioc_helpers.t32195.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"cljs.core.async.impl.ioc-helpers/t32195");
});

cljs.core.async.impl.ioc_helpers.__GT_t32195 = (function __GT_t32195(f__$1,fn_handler__$1,meta32196){
return (new cljs.core.async.impl.ioc_helpers.t32195(f__$1,fn_handler__$1,meta32196));
});

}

return (new cljs.core.async.impl.ioc_helpers.t32195(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/Users/brentvatne/coding/*live apps/red-eyes/app/assets/clojurescripts/build/out/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e32199){if((e32199 instanceof Object)){
var ex = e32199;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e32199;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_32203_32206 = state;
(statearr_32203_32206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_32203_32206[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_32204_32207 = state;
(statearr_32204_32207[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32205 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32205) : cljs.core.deref.call(null,G__32205));
})());

(statearr_32204_32207[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$114;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_32211_32214 = state;
(statearr_32211_32214[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_32211_32214[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_32212_32215 = state;
(statearr_32212_32215[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32213 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32213) : cljs.core.deref.call(null,G__32213));
})());

(statearr_32212_32215[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$114;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k32217,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__32219 = (((k32217 instanceof cljs.core.Keyword))?k32217.fqn:null);
switch (G__32219) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32217,else__4242__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$115,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$116,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$117,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$118,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$119,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
var self__ = this;
var this__4234__auto____$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_imap(this__4234__auto____$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3624__auto__ = other__4236__auto__;
if(cljs.core.truth_(and__3624__auto__)){
return ((this__4235__auto____$1.constructor === other__4236__auto__.constructor)) && (cljs.core.equiv_map(this__4235__auto____$1,other__4236__auto__));
} else {
return and__3624__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$117,null,cljs.core.constant$keyword$115,null,cljs.core.constant$keyword$116,null,cljs.core.constant$keyword$119,null,cljs.core.constant$keyword$118,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__32216){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__32220 = cljs.core.keyword_identical_QMARK_;
var expr__32221 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__32223 = cljs.core.constant$keyword$115;
var G__32224 = expr__32221;
return (pred__32220.cljs$core$IFn$_invoke$arity$2 ? pred__32220.cljs$core$IFn$_invoke$arity$2(G__32223,G__32224) : pred__32220.call(null,G__32223,G__32224));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__32216,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32225 = cljs.core.constant$keyword$116;
var G__32226 = expr__32221;
return (pred__32220.cljs$core$IFn$_invoke$arity$2 ? pred__32220.cljs$core$IFn$_invoke$arity$2(G__32225,G__32226) : pred__32220.call(null,G__32225,G__32226));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__32216,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32227 = cljs.core.constant$keyword$117;
var G__32228 = expr__32221;
return (pred__32220.cljs$core$IFn$_invoke$arity$2 ? pred__32220.cljs$core$IFn$_invoke$arity$2(G__32227,G__32228) : pred__32220.call(null,G__32227,G__32228));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__32216,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32229 = cljs.core.constant$keyword$118;
var G__32230 = expr__32221;
return (pred__32220.cljs$core$IFn$_invoke$arity$2 ? pred__32220.cljs$core$IFn$_invoke$arity$2(G__32229,G__32230) : pred__32220.call(null,G__32229,G__32230));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__32216,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32231 = cljs.core.constant$keyword$119;
var G__32232 = expr__32221;
return (pred__32220.cljs$core$IFn$_invoke$arity$2 ? pred__32220.cljs$core$IFn$_invoke$arity$2(G__32231,G__32232) : pred__32220.call(null,G__32231,G__32232));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__32216,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__32216),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$115,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$116,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$117,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$118,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$119,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__32216){
var self__ = this;
var this__4238__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__32216,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__32218){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(G__32218),cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(G__32218),cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(G__32218),cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(G__32218),cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1(G__32218),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32218,cljs.core.constant$keyword$115,cljs.core.array_seq([cljs.core.constant$keyword$116,cljs.core.constant$keyword$117,cljs.core.constant$keyword$118,cljs.core.constant$keyword$119], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_32235 = state;
(statearr_32235[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_32235;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3624__auto__ = exception;
if(cljs.core.truth_(and__3624__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3624__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3624__auto__ = exception;
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = catch_block;
if(cljs.core.truth_(and__3624__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})())){
var statearr_32241 = state;
(statearr_32241[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_32241[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_32241[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_32241[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$115,null,cljs.core.array_seq([cljs.core.constant$keyword$116,null], 0)));

return statearr_32241;
} else {
if(cljs.core.truth_((function (){var and__3624__auto__ = exception;
if(cljs.core.truth_(and__3624__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3624__auto__;
}
})())){
var statearr_32242_32246 = state;
(statearr_32242_32246[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__32247 = state;
state = G__32247;
continue;
} else {
if(cljs.core.truth_((function (){var and__3624__auto__ = exception;
if(cljs.core.truth_(and__3624__auto__)){
var and__3624__auto____$1 = cljs.core.not(catch_block);
if(and__3624__auto____$1){
return cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
})())){
var statearr_32243 = state;
(statearr_32243[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32243[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$117,null));

return statearr_32243;
} else {
if(cljs.core.truth_((function (){var and__3624__auto__ = cljs.core.not(exception);
if(and__3624__auto__){
return cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3624__auto__;
}
})())){
var statearr_32244 = state;
(statearr_32244[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32244[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$117,null));

return statearr_32244;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_32245 = state;
(statearr_32245[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32245[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_32245;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
