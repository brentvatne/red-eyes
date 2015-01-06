// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
var dispatch_chan_49826 = cljs.core.async.chan.call(null);
var dispatch_pub_49827 = cljs.core.async.pub.call(null,dispatch_chan_49826,((function (dispatch_chan_49826){
return (function (data){
return cljs.core.first.call(null,data);
});})(dispatch_chan_49826))
);
redeyes.dispatcher.register = ((function (dispatch_chan_49826,dispatch_pub_49827){
return (function register(tag){
return cljs.core.async.sub.call(null,dispatch_pub_49827,tag,cljs.core.async.chan.call(null));
});})(dispatch_chan_49826,dispatch_pub_49827))
;

redeyes.dispatcher.unregister = ((function (dispatch_chan_49826,dispatch_pub_49827){
return (function unregister(tag,chan){
return cljs.core.async.unsub.call(null,dispatch_pub_49827,tag,chan);
});})(dispatch_chan_49826,dispatch_pub_49827))
;

redeyes.dispatcher.dispatch_BANG_ = ((function (dispatch_chan_49826,dispatch_pub_49827){
return (function dispatch_BANG_(tag,options){
return cljs.core.async.put_BANG_.call(null,dispatch_chan_49826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,options], null));
});})(dispatch_chan_49826,dispatch_pub_49827))
;

redeyes.dispatcher.stream = ((function (dispatch_chan_49826,dispatch_pub_49827){
return (function stream(tag,handler){
var this_chan = redeyes.dispatcher.register.call(null,tag);
var c__11111__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11111__auto__,this_chan,dispatch_chan_49826,dispatch_pub_49827){
return (function (){
var f__11112__auto__ = (function (){var switch__11096__auto__ = ((function (c__11111__auto__,this_chan,dispatch_chan_49826,dispatch_pub_49827){
return (function (state_49814){
var state_val_49815 = (state_49814[(1)]);
if((state_val_49815 === (4))){
var inst_49807 = (state_49814[(2)]);
var inst_49808 = cljs.core.last.call(null,inst_49807);
var inst_49809 = handler.call(null,inst_49808);
var state_49814__$1 = (function (){var statearr_49816 = state_49814;
(statearr_49816[(7)] = inst_49809);

return statearr_49816;
})();
var statearr_49817_49828 = state_49814__$1;
(statearr_49817_49828[(2)] = null);

(statearr_49817_49828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49815 === (3))){
var inst_49812 = (state_49814[(2)]);
var state_49814__$1 = state_49814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49814__$1,inst_49812);
} else {
if((state_val_49815 === (2))){
var state_49814__$1 = state_49814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49814__$1,(4),this_chan);
} else {
if((state_val_49815 === (1))){
var state_49814__$1 = state_49814;
var statearr_49818_49829 = state_49814__$1;
(statearr_49818_49829[(2)] = null);

(statearr_49818_49829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11111__auto__,this_chan,dispatch_chan_49826,dispatch_pub_49827))
;
return ((function (switch__11096__auto__,c__11111__auto__,this_chan,dispatch_chan_49826,dispatch_pub_49827){
return (function() {
var state_machine__11097__auto__ = null;
var state_machine__11097__auto____0 = (function (){
var statearr_49822 = [null,null,null,null,null,null,null,null];
(statearr_49822[(0)] = state_machine__11097__auto__);

(statearr_49822[(1)] = (1));

return statearr_49822;
});
var state_machine__11097__auto____1 = (function (state_49814){
while(true){
var ret_value__11098__auto__ = (function (){try{while(true){
var result__11099__auto__ = switch__11096__auto__.call(null,state_49814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11099__auto__;
}
break;
}
}catch (e49823){if((e49823 instanceof Object)){
var ex__11100__auto__ = e49823;
var statearr_49824_49830 = state_49814;
(statearr_49824_49830[(5)] = ex__11100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49831 = state_49814;
state_49814 = G__49831;
continue;
} else {
return ret_value__11098__auto__;
}
break;
}
});
state_machine__11097__auto__ = function(state_49814){
switch(arguments.length){
case 0:
return state_machine__11097__auto____0.call(this);
case 1:
return state_machine__11097__auto____1.call(this,state_49814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11097__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11097__auto____0;
state_machine__11097__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11097__auto____1;
return state_machine__11097__auto__;
})()
;})(switch__11096__auto__,c__11111__auto__,this_chan,dispatch_chan_49826,dispatch_pub_49827))
})();
var state__11113__auto__ = (function (){var statearr_49825 = f__11112__auto__.call(null);
(statearr_49825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11111__auto__);

return statearr_49825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11113__auto__);
});})(c__11111__auto__,this_chan,dispatch_chan_49826,dispatch_pub_49827))
);

return c__11111__auto__;
});})(dispatch_chan_49826,dispatch_pub_49827))
;
