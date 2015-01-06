// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
var dispatch_chan_49874 = cljs.core.async.chan.call(null);
var dispatch_pub_49875 = cljs.core.async.pub.call(null,dispatch_chan_49874,((function (dispatch_chan_49874){
return (function (data){
return cljs.core.first.call(null,data);
});})(dispatch_chan_49874))
);
redeyes.dispatcher.register = ((function (dispatch_chan_49874,dispatch_pub_49875){
return (function register(tag){
return cljs.core.async.sub.call(null,dispatch_pub_49875,tag,cljs.core.async.chan.call(null));
});})(dispatch_chan_49874,dispatch_pub_49875))
;

redeyes.dispatcher.unregister = ((function (dispatch_chan_49874,dispatch_pub_49875){
return (function unregister(tag,chan){
return cljs.core.async.unsub.call(null,dispatch_pub_49875,tag,chan);
});})(dispatch_chan_49874,dispatch_pub_49875))
;

redeyes.dispatcher.dispatch_BANG_ = ((function (dispatch_chan_49874,dispatch_pub_49875){
return (function dispatch_BANG_(tag,options){
return cljs.core.async.put_BANG_.call(null,dispatch_chan_49874,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,options], null));
});})(dispatch_chan_49874,dispatch_pub_49875))
;

redeyes.dispatcher.stream = ((function (dispatch_chan_49874,dispatch_pub_49875){
return (function stream(tag,handler){
var this_chan = redeyes.dispatcher.register.call(null,tag);
var c__11111__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11111__auto__,this_chan,dispatch_chan_49874,dispatch_pub_49875){
return (function (){
var f__11112__auto__ = (function (){var switch__11096__auto__ = ((function (c__11111__auto__,this_chan,dispatch_chan_49874,dispatch_pub_49875){
return (function (state_49862){
var state_val_49863 = (state_49862[(1)]);
if((state_val_49863 === (4))){
var inst_49855 = (state_49862[(2)]);
var inst_49856 = cljs.core.last.call(null,inst_49855);
var inst_49857 = handler.call(null,inst_49856);
var state_49862__$1 = (function (){var statearr_49864 = state_49862;
(statearr_49864[(7)] = inst_49857);

return statearr_49864;
})();
var statearr_49865_49876 = state_49862__$1;
(statearr_49865_49876[(2)] = null);

(statearr_49865_49876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49863 === (3))){
var inst_49860 = (state_49862[(2)]);
var state_49862__$1 = state_49862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49862__$1,inst_49860);
} else {
if((state_val_49863 === (2))){
var state_49862__$1 = state_49862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49862__$1,(4),this_chan);
} else {
if((state_val_49863 === (1))){
var state_49862__$1 = state_49862;
var statearr_49866_49877 = state_49862__$1;
(statearr_49866_49877[(2)] = null);

(statearr_49866_49877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11111__auto__,this_chan,dispatch_chan_49874,dispatch_pub_49875))
;
return ((function (switch__11096__auto__,c__11111__auto__,this_chan,dispatch_chan_49874,dispatch_pub_49875){
return (function() {
var state_machine__11097__auto__ = null;
var state_machine__11097__auto____0 = (function (){
var statearr_49870 = [null,null,null,null,null,null,null,null];
(statearr_49870[(0)] = state_machine__11097__auto__);

(statearr_49870[(1)] = (1));

return statearr_49870;
});
var state_machine__11097__auto____1 = (function (state_49862){
while(true){
var ret_value__11098__auto__ = (function (){try{while(true){
var result__11099__auto__ = switch__11096__auto__.call(null,state_49862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11099__auto__;
}
break;
}
}catch (e49871){if((e49871 instanceof Object)){
var ex__11100__auto__ = e49871;
var statearr_49872_49878 = state_49862;
(statearr_49872_49878[(5)] = ex__11100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49879 = state_49862;
state_49862 = G__49879;
continue;
} else {
return ret_value__11098__auto__;
}
break;
}
});
state_machine__11097__auto__ = function(state_49862){
switch(arguments.length){
case 0:
return state_machine__11097__auto____0.call(this);
case 1:
return state_machine__11097__auto____1.call(this,state_49862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11097__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11097__auto____0;
state_machine__11097__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11097__auto____1;
return state_machine__11097__auto__;
})()
;})(switch__11096__auto__,c__11111__auto__,this_chan,dispatch_chan_49874,dispatch_pub_49875))
})();
var state__11113__auto__ = (function (){var statearr_49873 = f__11112__auto__.call(null);
(statearr_49873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11111__auto__);

return statearr_49873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11113__auto__);
});})(c__11111__auto__,this_chan,dispatch_chan_49874,dispatch_pub_49875))
);

return c__11111__auto__;
});})(dispatch_chan_49874,dispatch_pub_49875))
;
