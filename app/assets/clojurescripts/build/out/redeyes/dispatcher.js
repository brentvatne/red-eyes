// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
var dispatch_chan_20487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var dispatch_pub_20488 = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(dispatch_chan_20487,((function (dispatch_chan_20487){
return (function (data){
return cljs.core.first(data);
});})(dispatch_chan_20487))
);
redeyes.dispatcher.register = ((function (dispatch_chan_20487,dispatch_pub_20488){
return (function register(tag){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(dispatch_pub_20488,tag,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});})(dispatch_chan_20487,dispatch_pub_20488))
;

redeyes.dispatcher.unregister = ((function (dispatch_chan_20487,dispatch_pub_20488){
return (function unregister(tag,chan){
return cljs.core.async.unsub(dispatch_pub_20488,tag,chan);
});})(dispatch_chan_20487,dispatch_pub_20488))
;

redeyes.dispatcher.dispatch_BANG_ = ((function (dispatch_chan_20487,dispatch_pub_20488){
return (function dispatch_BANG_(tag,options){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dispatch_chan_20487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,options], null));
});})(dispatch_chan_20487,dispatch_pub_20488))
;

redeyes.dispatcher.stream = ((function (dispatch_chan_20487,dispatch_pub_20488){
return (function stream(tag,handler){
var this_chan = redeyes.dispatcher.register(tag);
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17262__auto__,this_chan,dispatch_chan_20487,dispatch_pub_20488){
return (function (){
var f__17263__auto__ = (function (){var switch__17247__auto__ = ((function (c__17262__auto__,this_chan,dispatch_chan_20487,dispatch_pub_20488){
return (function (state_20474){
var state_val_20475 = (state_20474[(1)]);
if((state_val_20475 === (4))){
var inst_20467 = (state_20474[(2)]);
var inst_20468 = cljs.core.last(inst_20467);
var inst_20469 = (function (){var G__20476 = inst_20468;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__20476) : handler.call(null,G__20476));
})();
var state_20474__$1 = (function (){var statearr_20477 = state_20474;
(statearr_20477[(7)] = inst_20469);

return statearr_20477;
})();
var statearr_20478_20489 = state_20474__$1;
(statearr_20478_20489[(2)] = null);

(statearr_20478_20489[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
if((state_val_20475 === (3))){
var inst_20472 = (state_20474[(2)]);
var state_20474__$1 = state_20474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20474__$1,inst_20472);
} else {
if((state_val_20475 === (2))){
var state_20474__$1 = state_20474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20474__$1,(4),this_chan);
} else {
if((state_val_20475 === (1))){
var state_20474__$1 = state_20474;
var statearr_20479_20490 = state_20474__$1;
(statearr_20479_20490[(2)] = null);

(statearr_20479_20490[(1)] = (2));


return cljs.core.constant$keyword$114;
} else {
return null;
}
}
}
}
});})(c__17262__auto__,this_chan,dispatch_chan_20487,dispatch_pub_20488))
;
return ((function (switch__17247__auto__,c__17262__auto__,this_chan,dispatch_chan_20487,dispatch_pub_20488){
return (function() {
var state_machine__17248__auto__ = null;
var state_machine__17248__auto____0 = (function (){
var statearr_20483 = [null,null,null,null,null,null,null,null];
(statearr_20483[(0)] = state_machine__17248__auto__);

(statearr_20483[(1)] = (1));

return statearr_20483;
});
var state_machine__17248__auto____1 = (function (state_20474){
while(true){
var ret_value__17249__auto__ = (function (){try{while(true){
var result__17250__auto__ = switch__17247__auto__(state_20474);
if(cljs.core.keyword_identical_QMARK_(result__17250__auto__,cljs.core.constant$keyword$114)){
continue;
} else {
return result__17250__auto__;
}
break;
}
}catch (e20484){if((e20484 instanceof Object)){
var ex__17251__auto__ = e20484;
var statearr_20485_20491 = state_20474;
(statearr_20485_20491[(5)] = ex__17251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20474);

return cljs.core.constant$keyword$114;
} else {
throw e20484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17249__auto__,cljs.core.constant$keyword$114)){
var G__20492 = state_20474;
state_20474 = G__20492;
continue;
} else {
return ret_value__17249__auto__;
}
break;
}
});
state_machine__17248__auto__ = function(state_20474){
switch(arguments.length){
case 0:
return state_machine__17248__auto____0.call(this);
case 1:
return state_machine__17248__auto____1.call(this,state_20474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17248__auto____0;
state_machine__17248__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17248__auto____1;
return state_machine__17248__auto__;
})()
;})(switch__17247__auto__,c__17262__auto__,this_chan,dispatch_chan_20487,dispatch_pub_20488))
})();
var state__17264__auto__ = (function (){var statearr_20486 = (function (){return (f__17263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17263__auto__.cljs$core$IFn$_invoke$arity$0() : f__17263__auto__.call(null));
})();
(statearr_20486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17262__auto__);

return statearr_20486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(c__17262__auto__,this_chan,dispatch_chan_20487,dispatch_pub_20488))
);

return c__17262__auto__;
});})(dispatch_chan_20487,dispatch_pub_20488))
;
