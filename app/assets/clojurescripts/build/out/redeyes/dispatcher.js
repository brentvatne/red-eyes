// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
var dispatch_chan_14683 = cljs.core.async.chan.call(null);
var dispatch_pub_14684 = cljs.core.async.pub.call(null,dispatch_chan_14683,((function (dispatch_chan_14683){
return (function (data){
return cljs.core.first.call(null,data);
});})(dispatch_chan_14683))
);
redeyes.dispatcher.register = ((function (dispatch_chan_14683,dispatch_pub_14684){
return (function register(tag){
return cljs.core.async.sub.call(null,dispatch_pub_14684,tag,cljs.core.async.chan.call(null));
});})(dispatch_chan_14683,dispatch_pub_14684))
;

redeyes.dispatcher.unregister = ((function (dispatch_chan_14683,dispatch_pub_14684){
return (function unregister(tag,chan){
return cljs.core.async.unsub.call(null,dispatch_pub_14684,tag,chan);
});})(dispatch_chan_14683,dispatch_pub_14684))
;

redeyes.dispatcher.dispatch_BANG_ = ((function (dispatch_chan_14683,dispatch_pub_14684){
return (function dispatch_BANG_(tag,options){
return cljs.core.async.put_BANG_.call(null,dispatch_chan_14683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,options], null));
});})(dispatch_chan_14683,dispatch_pub_14684))
;

redeyes.dispatcher.stream = ((function (dispatch_chan_14683,dispatch_pub_14684){
return (function stream(tag,handler){
var this_chan = redeyes.dispatcher.register.call(null,tag);
var c__11828__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11828__auto__,this_chan,dispatch_chan_14683,dispatch_pub_14684){
return (function (){
var f__11829__auto__ = (function (){var switch__11813__auto__ = ((function (c__11828__auto__,this_chan,dispatch_chan_14683,dispatch_pub_14684){
return (function (state_14671){
var state_val_14672 = (state_14671[(1)]);
if((state_val_14672 === (4))){
var inst_14664 = (state_14671[(2)]);
var inst_14665 = cljs.core.last.call(null,inst_14664);
var inst_14666 = handler.call(null,inst_14665);
var state_14671__$1 = (function (){var statearr_14673 = state_14671;
(statearr_14673[(7)] = inst_14666);

return statearr_14673;
})();
var statearr_14674_14685 = state_14671__$1;
(statearr_14674_14685[(2)] = null);

(statearr_14674_14685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (3))){
var inst_14669 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14671__$1,inst_14669);
} else {
if((state_val_14672 === (2))){
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14671__$1,(4),this_chan);
} else {
if((state_val_14672 === (1))){
var state_14671__$1 = state_14671;
var statearr_14675_14686 = state_14671__$1;
(statearr_14675_14686[(2)] = null);

(statearr_14675_14686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__11828__auto__,this_chan,dispatch_chan_14683,dispatch_pub_14684))
;
return ((function (switch__11813__auto__,c__11828__auto__,this_chan,dispatch_chan_14683,dispatch_pub_14684){
return (function() {
var state_machine__11814__auto__ = null;
var state_machine__11814__auto____0 = (function (){
var statearr_14679 = [null,null,null,null,null,null,null,null];
(statearr_14679[(0)] = state_machine__11814__auto__);

(statearr_14679[(1)] = (1));

return statearr_14679;
});
var state_machine__11814__auto____1 = (function (state_14671){
while(true){
var ret_value__11815__auto__ = (function (){try{while(true){
var result__11816__auto__ = switch__11813__auto__.call(null,state_14671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11816__auto__;
}
break;
}
}catch (e14680){if((e14680 instanceof Object)){
var ex__11817__auto__ = e14680;
var statearr_14681_14687 = state_14671;
(statearr_14681_14687[(5)] = ex__11817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14688 = state_14671;
state_14671 = G__14688;
continue;
} else {
return ret_value__11815__auto__;
}
break;
}
});
state_machine__11814__auto__ = function(state_14671){
switch(arguments.length){
case 0:
return state_machine__11814__auto____0.call(this);
case 1:
return state_machine__11814__auto____1.call(this,state_14671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11814__auto____0;
state_machine__11814__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11814__auto____1;
return state_machine__11814__auto__;
})()
;})(switch__11813__auto__,c__11828__auto__,this_chan,dispatch_chan_14683,dispatch_pub_14684))
})();
var state__11830__auto__ = (function (){var statearr_14682 = f__11829__auto__.call(null);
(statearr_14682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11828__auto__);

return statearr_14682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11830__auto__);
});})(c__11828__auto__,this_chan,dispatch_chan_14683,dispatch_pub_14684))
);

return c__11828__auto__;
});})(dispatch_chan_14683,dispatch_pub_14684))
;
