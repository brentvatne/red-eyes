// Compiled by ClojureScript 0.0-2511
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;

om.core.IDisplayName = (function (){var obj26637 = {};
return obj26637;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.display_name[(function (){var G__26641 = x__4280__auto__;
return goog.typeOf(G__26641);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.display_name["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj26643 = {};
return obj26643;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.init_state[(function (){var G__26647 = x__4280__auto__;
return goog.typeOf(G__26647);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.init_state["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj26649 = {};
return obj26649;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.should_update[(function (){var G__26653 = x__4280__auto__;
return goog.typeOf(G__26653);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.should_update["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj26655 = {};
return obj26655;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.will_mount[(function (){var G__26659 = x__4280__auto__;
return goog.typeOf(G__26659);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.will_mount["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj26661 = {};
return obj26661;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.did_mount[(function (){var G__26665 = x__4280__auto__;
return goog.typeOf(G__26665);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.did_mount["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj26667 = {};
return obj26667;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.will_unmount[(function (){var G__26671 = x__4280__auto__;
return goog.typeOf(G__26671);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.will_unmount["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj26673 = {};
return obj26673;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.will_update[(function (){var G__26677 = x__4280__auto__;
return goog.typeOf(G__26677);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.will_update["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj26679 = {};
return obj26679;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.did_update[(function (){var G__26683 = x__4280__auto__;
return goog.typeOf(G__26683);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.did_update["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj26685 = {};
return obj26685;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.will_receive_props[(function (){var G__26689 = x__4280__auto__;
return goog.typeOf(G__26689);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj26691 = {};
return obj26691;
})();

om.core.render = (function render(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.render[(function (){var G__26695 = x__4280__auto__;
return goog.typeOf(G__26695);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.render["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderState = (function (){var obj26697 = {};
return obj26697;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core.render_state[(function (){var G__26701 = x__4280__auto__;
return goog.typeOf(G__26701);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core.render_state["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.IOmSwap = (function (){var obj26703 = {};
return obj26703;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._om_swap_BANG_[(function (){var G__26707 = x__4280__auto__;
return goog.typeOf(G__26707);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj26709 = {};
return obj26709;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._get_state[(function (){var G__26715 = x__4280__auto__;
return goog.typeOf(G__26715);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._get_state["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._get_state[(function (){var G__26717 = x__4280__auto__;
return goog.typeOf(G__26717);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._get_state["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj26719 = {};
return obj26719;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._get_render_state[(function (){var G__26725 = x__4280__auto__;
return goog.typeOf(G__26725);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._get_render_state["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._get_render_state[(function (){var G__26727 = x__4280__auto__;
return goog.typeOf(G__26727);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._get_render_state["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj26729 = {};
return obj26729;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._set_state_BANG_[(function (){var G__26735 = x__4280__auto__;
return goog.typeOf(G__26735);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._set_state_BANG_[(function (){var G__26737 = x__4280__auto__;
return goog.typeOf(G__26737);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj26739 = {};
return obj26739;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._get_queue[(function (){var G__26743 = x__4280__auto__;
return goog.typeOf(G__26743);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._get_queue["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._queue_render_BANG_[(function (){var G__26747 = x__4280__auto__;
return goog.typeOf(G__26747);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (om.core._empty_queue_BANG_[(function (){var G__26751 = x__4280__auto__;
return goog.typeOf(G__26751);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj26753 = {};
return obj26753;
})();

om.core._value = (function _value(x){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3624__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (om.core._value[(function (){var G__26757 = x__4280__auto__;
return goog.typeOf(G__26757);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._value["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj26759 = {};
return obj26759;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3624__auto__ = cursor;
if(and__3624__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3624__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4280__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3636__auto__ = (om.core._path[(function (){var G__26763 = x__4280__auto__;
return goog.typeOf(G__26763);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._path["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3624__auto__ = cursor;
if(and__3624__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3624__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4280__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3636__auto__ = (om.core._state[(function (){var G__26767 = x__4280__auto__;
return goog.typeOf(G__26767);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._state["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj26769 = {};
return obj26769;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3624__auto__ = value;
if(and__3624__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3624__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4280__auto__ = (((value == null))?null:value);
return (function (){var or__3636__auto__ = (om.core._to_cursor[(function (){var G__26775 = x__4280__auto__;
return goog.typeOf(G__26775);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._to_cursor["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3624__auto__ = value;
if(and__3624__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3624__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4280__auto__ = (((value == null))?null:value);
return (function (){var or__3636__auto__ = (om.core._to_cursor[(function (){var G__26777 = x__4280__auto__;
return goog.typeOf(G__26777);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._to_cursor["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj26779 = {};
return obj26779;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3624__auto__ = cursor;
if(and__3624__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3624__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4280__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3636__auto__ = (om.core._derive[(function (){var G__26783 = x__4280__auto__;
return goog.typeOf(G__26783);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._derive["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__26784 = derived;
var G__26785 = state;
var G__26786 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__26784,G__26785,G__26786) : om.core.to_cursor.call(null,G__26784,G__26785,G__26786));
}));
om.core.path = (function path(cursor){
return om.core._path(cursor);
});
om.core.value = (function value(cursor){
return om.core._value(cursor);
});
om.core.state = (function state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj26788 = {};
return obj26788;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3624__auto__ = cursor;
if(and__3624__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3624__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4280__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3636__auto__ = (om.core._transact_BANG_[(function (){var G__26792 = x__4280__auto__;
return goog.typeOf(G__26792);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj26794 = {};
return obj26794;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (om.core._listen_BANG_[(function (){var G__26798 = x__4280__auto__;
return goog.typeOf(G__26798);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (om.core._unlisten_BANG_[(function (){var G__26802 = x__4280__auto__;
return goog.typeOf(G__26802);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3624__auto__ = x;
if(and__3624__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3624__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4280__auto__ = (((x == null))?null:x);
return (function (){var or__3636__auto__ = (om.core._notify_BANG_[(function (){var G__26806 = x__4280__auto__;
return goog.typeOf(G__26806);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__26816 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26816) : cljs.core.deref.call(null,G__26816));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__26817 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__26817) : om.core.path.call(null,G__26817));
})(),korks);
var ret = (((function (){var G__26818 = state;
if(G__26818){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26818.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__26818.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__26818);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__26818);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$35)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$36,path,cljs.core.constant$keyword$37,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$38,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26819 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26819) : cljs.core.deref.call(null,G__26819));
})(),path),cljs.core.constant$keyword$39,old_state,cljs.core.constant$keyword$40,(function (){var G__26820 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26820) : cljs.core.deref.call(null,G__26820));
})()], null);
if(!((tag == null))){
var G__26821 = cursor;
var G__26822 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$22,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__26821,G__26822) : om.core.notify_STAR_.call(null,G__26821,G__26822));
} else {
var G__26823 = cursor;
var G__26824 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__26823,G__26824) : om.core.notify_STAR_.call(null,G__26823,G__26824));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__26826 = x;
if(G__26826){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26826.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__26826.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__26826);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__26826);
}
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.fn_QMARK_(c)){
return node.props.children = (function (){var _STAR_read_enabled_STAR_26829 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var G__26830 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__26830) : c.call(null,G__26830));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26829;
}})();
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){
return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){
var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__26835 = state;
(G__26835["__om_prev_state"] = (state["__om_state"]));

(G__26835["__om_state"] = pending_state);

(G__26835["__om_pending_state"] = null);

return G__26835;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3636__auto__ = props;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3636__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$41,cljs.core.constant$keyword$42,cljs.core.constant$keyword$43,cljs.core.constant$keyword$44,cljs.core.constant$keyword$45,cljs.core.constant$keyword$46,cljs.core.constant$keyword$47,cljs.core.constant$keyword$48,cljs.core.constant$keyword$49,cljs.core.constant$keyword$50],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__26838 = c;
if(G__26838){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26838.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__26838.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__26838);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__26838);
}
})()){
var state_26865 = this$.state;
var _STAR_read_enabled_STAR_26839_26866 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3636__auto__ = (state_26865["__om_prev_state"]);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return (state_26865["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26839_26866;
}} else {
}

return (this$.state["__om_prev_state"] = null);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__26840 = c;
if(G__26840){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26840.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__26840.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__26840);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__26840);
}
})()){
var _STAR_read_enabled_STAR_26841 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

return om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26841;
}} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__26842 = c;
if(G__26842){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26842.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__26842.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__26842);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__26842);
}
})()){
var _STAR_read_enabled_STAR_26843 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26843;
}} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var _STAR_read_enabled_STAR_26844 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__26845 = c;
if(G__26845){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26845.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__26845.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__26845);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__26845);
}
})()){
return om.core.should_update(c,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(!(((state["__om_pending_state"]) == null))){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26844;
}}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_read_enabled_STAR_26846 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

if((function (){var G__26847 = c;
if(G__26847){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26847.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__26847.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26847);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26847);
}
})()){
var _STAR_parent_STAR_26848 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_26849 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_26850 = om.core._STAR_instrument_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

return om.core.render(c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_26850;

om.core._STAR_state_STAR_ = _STAR_state_STAR_26849;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_26848;
}} else {
if((function (){var G__26851 = c;
if(G__26851){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26851.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__26851.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26851);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26851);
}
})()){
var _STAR_parent_STAR_26852 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_26853 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_26854 = om.core._STAR_instrument_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_26854;

om.core._STAR_state_STAR_ = _STAR_state_STAR_26853;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_26852;
}} else {
return c;

}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26846;
}}),(function (next_props,next_state){
var this$ = this;
var c_26867 = om.core.children(this$);
if((function (){var G__26855 = c_26867;
if(G__26855){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26855.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__26855.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__26855);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__26855);
}
})()){
var state_26868 = this$.state;
var _STAR_read_enabled_STAR_26856_26869 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

om.core.will_update(c_26867,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26856_26869;
}} else {
}

return om.core.merge_pending_state(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3636__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__26857 = c;
if(G__26857){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26857.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__26857.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__26857);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__26857);
}
})())?(function (){var _STAR_read_enabled_STAR_26858 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26858;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$51)], 0)), "__om_id": (function (){var or__3636__auto__ = id;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__26859 = c;
if(G__26859){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26859.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__26859.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__26859);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__26859);
}
})()){
var _STAR_read_enabled_STAR_26860 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26860;
}} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__26861 = c;
if(G__26861){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26861.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__26861.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__26861);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__26861);
}
})()){
var _STAR_read_enabled_STAR_26862 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26862;
}} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_26870 = om.core.children(this$);
if((function (){var G__26863 = c_26870;
if(G__26863){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26863.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__26863.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__26863);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__26863);
}
})()){
var _STAR_read_enabled_STAR_26864_26871 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

om.core.will_mount(c_26870);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26864_26871;
}} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x26875 = obj;
x26875.om$core$IGetState$ = true;

x26875.om$core$IGetState$_get_state$arity$1 = ((function (x26875){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3636__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return (state["__om_state"]);
}
});})(x26875))
;

x26875.om$core$IGetState$_get_state$arity$2 = ((function (x26875){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x26875))
;

x26875.om$core$IGetRenderState$ = true;

x26875.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x26875){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x26875))
;

x26875.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x26875){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x26875))
;

x26875.om$core$ISetState$ = true;

x26875.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x26875){
return (function (this$,val,render){
var this$__$1 = this;
var _STAR_read_enabled_STAR_26876 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3624__auto__ = !((app_state == null));
if(and__3624__auto__){
return render;
} else {
return and__3624__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26876;
}});})(x26875))
;

x26875.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x26875){
return (function (this$,ks,val,render){
var this$__$1 = this;
var _STAR_read_enabled_STAR_26877 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__3624__auto__ = !((app_state == null));
if(and__3624__auto__){
return render;
} else {
return and__3624__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26877;
}});})(x26875))
;

return x26875;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer(self__.value,writer,opts);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta(self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count(self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.hash(self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_(self__.value,k);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__26879){
var vec__26880 = p__26879;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26880,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.call = (function() {
var G__26882 = null;
var G__26882__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__26882__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__26882 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26882__2.call(this,self__,k);
case 3:
return G__26882__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26882.cljs$core$IFn$_invoke$arity$2 = G__26882__2;
G__26882.cljs$core$IFn$_invoke$arity$3 = G__26882__3;
return G__26882;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args26878){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26878)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26881 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26881) : cljs.core.deref.call(null,G__26881));
})(),self__.path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer(self__.value,writer,opts);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta(self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count(self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.hash(self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_(self__.value,k);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.call = (function() {
var G__26885 = null;
var G__26885__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__26885__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__26885 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26885__2.call(this,self__,k);
case 3:
return G__26885__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26885.cljs$core$IFn$_invoke$arity$2 = G__26885__2;
G__26885.cljs$core$IFn$_invoke$arity$3 = G__26885__3;
return G__26885;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args26883){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26883)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26884 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26884) : cljs.core.deref.call(null,G__26884));
})(),self__.path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write(writer__4224__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x26888 = cljs.core.clone(val);
x26888.cljs$core$IEquiv$ = true;

x26888.cljs$core$IEquiv$_equiv$arity$2 = ((function (x26888){
return (function (_,other){
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});})(x26888))
;

x26888.om$core$ITransact$ = true;

x26888.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x26888){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x26888))
;

x26888.om$core$ICursor$ = true;

x26888.om$core$ICursor$_path$arity$1 = ((function (x26888){
return (function (_){
var ___$1 = this;
return path;
});})(x26888))
;

x26888.om$core$ICursor$_state$arity$1 = ((function (x26888){
return (function (_){
var ___$1 = this;
return state;
});})(x26888))
;

x26888.cljs$core$IDeref$ = true;

x26888.cljs$core$IDeref$_deref$arity$1 = ((function (x26888){
return (function (this$){
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26889 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26889) : cljs.core.deref.call(null,G__26889));
})(),path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});})(x26888))
;

return x26888;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__26898 = val;
if(G__26898){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26898.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__26898.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__26898);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__26898);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__26899 = val;
if(G__26899){
var bit__4317__auto__ = (G__26899.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4317__auto__) || (G__26899.cljs$core$ICloneable$)){
return true;
} else {
if((!G__26899.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__26899);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__26899);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__26901 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26901) : cljs.core.deref.call(null,G__26901));
})(),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__26902 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26902) : cljs.core.atom.call(null,G__26902));
})();
om.core.render_all = (function render_all(){
om.core.refresh_queued = false;

var seq__26908 = cljs.core.seq((function (){var G__26912 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26912) : cljs.core.deref.call(null,G__26912));
})());
var chunk__26909 = null;
var count__26910 = (0);
var i__26911 = (0);
while(true){
if((i__26911 < count__26910)){
var f = chunk__26909.cljs$core$IIndexed$_nth$arity$2(null,i__26911);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var G__26913 = seq__26908;
var G__26914 = chunk__26909;
var G__26915 = count__26910;
var G__26916 = (i__26911 + (1));
seq__26908 = G__26913;
chunk__26909 = G__26914;
count__26910 = G__26915;
i__26911 = G__26916;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26908);
if(temp__4126__auto__){
var seq__26908__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26908__$1)){
var c__4423__auto__ = cljs.core.chunk_first(seq__26908__$1);
var G__26917 = cljs.core.chunk_rest(seq__26908__$1);
var G__26918 = c__4423__auto__;
var G__26919 = cljs.core.count(c__4423__auto__);
var G__26920 = (0);
seq__26908 = G__26917;
chunk__26909 = G__26918;
count__26910 = G__26919;
i__26911 = G__26920;
continue;
} else {
var f = cljs.core.first(seq__26908__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var G__26921 = cljs.core.next(seq__26908__$1);
var G__26922 = null;
var G__26923 = (0);
var G__26924 = (0);
seq__26908 = G__26921;
chunk__26909 = G__26922;
count__26910 = G__26923;
i__26911 = G__26924;
continue;
}
} else {
return null;
}
}
break;
}
});
om.core.roots = (function (){var G__26925 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26925) : cljs.core.atom.call(null,G__26925));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3636__auto__ = (function (){var G__26930 = x;
if(G__26930){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__26930.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__26930.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26930);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26930);
}
})();
if(or__3636__auto__){
return or__3636__auto__;
} else {
var G__26931 = x;
if(G__26931){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto____$1 = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto____$1)){
return or__3636__auto____$1;
} else {
return G__26931.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__26931.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26931);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26931);
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}
});
om.core.valid_QMARK_ = (function valid_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$52,null,cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$54,null,cljs.core.constant$keyword$55,null,cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$60,null,cljs.core.constant$keyword$61,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__26935 = (function (){var or__3636__auto__ = descriptor;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return om.core.pure_descriptor;
}
})();
return React.createClass(G__26935);
})());
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(om.core.valid_QMARK_(m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1428119148,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);
var G__26955 = {"children": ((function (shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_26956 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var ret = (function (){var G__26957 = cursor;
var G__26958 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26957,G__26958) : f.call(null,G__26957,G__26958));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26956;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__26955) : ctor.call(null,G__26955));
} else {
var map__26959 = m;
var map__26959__$1 = ((cljs.core.seq_QMARK_(map__26959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26959):map__26959);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26959__$1,cljs.core.constant$keyword$59);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26959__$1,cljs.core.constant$keyword$57);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26959__$1,cljs.core.constant$keyword$58);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26959__$1,cljs.core.constant$keyword$56);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$53);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__26960 = cursor;
var G__26961 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__26960,G__26961) : dataf.call(null,G__26960,G__26961));
} else {
var G__26962 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__26962) : dataf.call(null,G__26962));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$55));
var shared = (function (){var or__3636__auto__ = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(m));
var G__26963 = {"__om_shared": shared, "__om_index": cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__26959,map__26959__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_26964 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var ret = (function (){var G__26965 = cursor_SINGLEQUOTE_;
var G__26966 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26965,G__26966) : f.call(null,G__26965,G__26966));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26964;
}});})(map__26959,map__26959__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__26959,map__26959__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_26967 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var ret = (function (){var G__26968 = cursor_SINGLEQUOTE_;
var G__26969 = this$;
var G__26970 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26968,G__26969,G__26970) : f.call(null,G__26968,G__26969,G__26970));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26967;
}});})(map__26959,map__26959__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__26963) : ctor.call(null,G__26963));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){
return build.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build__3 = (function (f,cursor,m){
if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var _STAR_read_enabled_STAR_26978 = om.core._STAR_read_enabled_STAR_;
try{om.core._STAR_read_enabled_STAR_ = true;

var G__26979 = f;
var G__26980 = cursor;
var G__26981 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__26979,G__26980,G__26981) : om.core._STAR_instrument_STAR_.call(null,G__26979,G__26980,G__26981));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26978;
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$62)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$60,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__27002 = state;
if(G__27002){
var bit__4317__auto__ = null;
if(cljs.core.truth_((function (){var or__3636__auto__ = bit__4317__auto__;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return G__27002.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__27002.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__27002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__27002);
}
})()){
} else {
var listeners_27019 = (function (){var G__27003 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27003) : cljs.core.atom.call(null,G__27003));
})();
var render_queue_27020 = (function (){var G__27004 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27004) : cljs.core.atom.call(null,G__27004));
})();
var x27005_27021 = state;
x27005_27021.om$core$IRenderQueue$ = true;

x27005_27021.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x27005_27021,listeners_27019,render_queue_27020){
return (function (this$){
var this$__$1 = this;
var G__27006 = render_queue_27020;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27006) : cljs.core.deref.call(null,G__27006));
});})(x27005_27021,listeners_27019,render_queue_27020))
;

x27005_27021.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x27005_27021,listeners_27019,render_queue_27020){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__27007 = render_queue_27020;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27007) : cljs.core.deref.call(null,G__27007));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_27020,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x27005_27021,listeners_27019,render_queue_27020))
;

x27005_27021.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x27005_27021,listeners_27019,render_queue_27020){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_27020,cljs.core.empty);
});})(x27005_27021,listeners_27019,render_queue_27020))
;

x27005_27021.om$core$INotify$ = true;

x27005_27021.om$core$INotify$_listen_BANG_$arity$3 = ((function (x27005_27021,listeners_27019,render_queue_27020){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_27019,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x27005_27021,listeners_27019,render_queue_27020))
;

x27005_27021.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x27005_27021,listeners_27019,render_queue_27020){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_27019,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x27005_27021,listeners_27019,render_queue_27020))
;

x27005_27021.om$core$INotify$_notify_BANG_$arity$3 = ((function (x27005_27021,listeners_27019,render_queue_27020){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__27008_27022 = cljs.core.seq((function (){var G__27012 = listeners_27019;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27012) : cljs.core.deref.call(null,G__27012));
})());
var chunk__27009_27023 = null;
var count__27010_27024 = (0);
var i__27011_27025 = (0);
while(true){
if((i__27011_27025 < count__27010_27024)){
var vec__27013_27026 = chunk__27009_27023.cljs$core$IIndexed$_nth$arity$2(null,i__27011_27025);
var __27027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27013_27026,(0),null);
var f_27028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27013_27026,(1),null);
var G__27014_27029 = tx_data;
var G__27015_27030 = root_cursor;
(f_27028.cljs$core$IFn$_invoke$arity$2 ? f_27028.cljs$core$IFn$_invoke$arity$2(G__27014_27029,G__27015_27030) : f_27028.call(null,G__27014_27029,G__27015_27030));

var G__27031 = seq__27008_27022;
var G__27032 = chunk__27009_27023;
var G__27033 = count__27010_27024;
var G__27034 = (i__27011_27025 + (1));
seq__27008_27022 = G__27031;
chunk__27009_27023 = G__27032;
count__27010_27024 = G__27033;
i__27011_27025 = G__27034;
continue;
} else {
var temp__4126__auto___27035 = cljs.core.seq(seq__27008_27022);
if(temp__4126__auto___27035){
var seq__27008_27036__$1 = temp__4126__auto___27035;
if(cljs.core.chunked_seq_QMARK_(seq__27008_27036__$1)){
var c__4423__auto___27037 = cljs.core.chunk_first(seq__27008_27036__$1);
var G__27038 = cljs.core.chunk_rest(seq__27008_27036__$1);
var G__27039 = c__4423__auto___27037;
var G__27040 = cljs.core.count(c__4423__auto___27037);
var G__27041 = (0);
seq__27008_27022 = G__27038;
chunk__27009_27023 = G__27039;
count__27010_27024 = G__27040;
i__27011_27025 = G__27041;
continue;
} else {
var vec__27016_27042 = cljs.core.first(seq__27008_27036__$1);
var __27043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27016_27042,(0),null);
var f_27044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27016_27042,(1),null);
var G__27017_27045 = tx_data;
var G__27018_27046 = root_cursor;
(f_27044.cljs$core$IFn$_invoke$arity$2 ? f_27044.cljs$core$IFn$_invoke$arity$2(G__27017_27045,G__27018_27046) : f_27044.call(null,G__27017_27045,G__27018_27046));

var G__27047 = cljs.core.next(seq__27008_27036__$1);
var G__27048 = null;
var G__27049 = (0);
var G__27050 = (0);
seq__27008_27022 = G__27047;
chunk__27009_27023 = G__27048;
count__27010_27024 = G__27049;
i__27011_27025 = G__27050;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x27005_27021,listeners_27019,render_queue_27020))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__27051){
var map__27075 = p__27051;
var map__27075__$1 = ((cljs.core.seq_QMARK_(map__27075))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27075):map__27075);
var options = map__27075__$1;
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.constant$keyword$54);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.constant$keyword$36);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.constant$keyword$63);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27075__$1,cljs.core.constant$keyword$64);
if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__27098 = (function (){var G__27076 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27076) : cljs.core.deref.call(null,G__27076));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__27098,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__27098,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__27077 = value;
if(G__27077){
var bit__4317__auto__ = (G__27077.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4317__auto__) || (G__27077.cljs$core$IAtom$)){
return true;
} else {
if((!G__27077.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__27077);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__27077);
}
})())?value:(function (){var G__27078 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27078) : cljs.core.atom.call(null,G__27078));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$64,cljs.core.array_seq([cljs.core.constant$keyword$63,cljs.core.constant$keyword$36], 0));
var rootf = ((function (watch_key,state,state__$1,m,map__27075,map__27075__$1,options,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__27086 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27086) : cljs.core.deref.call(null,G__27086));
})();
var cursor = (((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path));
om.dom.render((function (){var _STAR_instrument_STAR_27087 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_27088 = om.core._STAR_state_STAR_;
try{om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_27088;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27087;
}})(),target);

var queue = om.core._get_queue(state__$1);
if(cljs.core.empty_QMARK_(queue)){
return null;
} else {
var seq__27089_27099 = cljs.core.seq(queue);
var chunk__27090_27100 = null;
var count__27091_27101 = (0);
var i__27092_27102 = (0);
while(true){
if((i__27092_27102 < count__27091_27101)){
var c_27103 = chunk__27090_27100.cljs$core$IIndexed$_nth$arity$2(null,i__27092_27102);
if(cljs.core.truth_(c_27103.isMounted())){
c_27103.forceUpdate();
} else {
}

var G__27104 = seq__27089_27099;
var G__27105 = chunk__27090_27100;
var G__27106 = count__27091_27101;
var G__27107 = (i__27092_27102 + (1));
seq__27089_27099 = G__27104;
chunk__27090_27100 = G__27105;
count__27091_27101 = G__27106;
i__27092_27102 = G__27107;
continue;
} else {
var temp__4126__auto___27108 = cljs.core.seq(seq__27089_27099);
if(temp__4126__auto___27108){
var seq__27089_27109__$1 = temp__4126__auto___27108;
if(cljs.core.chunked_seq_QMARK_(seq__27089_27109__$1)){
var c__4423__auto___27110 = cljs.core.chunk_first(seq__27089_27109__$1);
var G__27111 = cljs.core.chunk_rest(seq__27089_27109__$1);
var G__27112 = c__4423__auto___27110;
var G__27113 = cljs.core.count(c__4423__auto___27110);
var G__27114 = (0);
seq__27089_27099 = G__27111;
chunk__27090_27100 = G__27112;
count__27091_27101 = G__27113;
i__27092_27102 = G__27114;
continue;
} else {
var c_27115 = cljs.core.first(seq__27089_27109__$1);
if(cljs.core.truth_(c_27115.isMounted())){
c_27115.forceUpdate();
} else {
}

var G__27116 = cljs.core.next(seq__27089_27109__$1);
var G__27117 = null;
var G__27118 = (0);
var G__27119 = (0);
seq__27089_27099 = G__27116;
chunk__27090_27100 = G__27117;
count__27091_27101 = G__27118;
i__27092_27102 = G__27119;
continue;
}
} else {
}
}
break;
}

return om.core._empty_queue_BANG_(state__$1);
}
});})(watch_key,state,state__$1,m,map__27075,map__27075__$1,options,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__27075,map__27075__$1,options,instrument,path,tx_listen,target){
return (function (_,___$1,___$2,___$3){
if(cljs.core.contains_QMARK_((function (){var G__27093 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27093) : cljs.core.deref.call(null,G__27093));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(typeof requestAnimationFrame !== 'undefined'){
var G__27094 = om.core.render_all;
return requestAnimationFrame(G__27094);
} else {
var G__27095 = om.core.render_all;
var G__27096 = (16);
return setTimeout(G__27095,G__27096);
}
}
});})(watch_key,state,state__$1,m,rootf,map__27075,map__27075__$1,options,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__27075,map__27075__$1,options,instrument,path,tx_listen,target){
return (function (){
cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__27097 = target;
return React.unmountComponentAtNode(G__27097);
});})(watch_key,state,state__$1,m,rootf,map__27075,map__27075__$1,options,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27121 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27121) : cljs.core.deref.call(null,G__27121));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__27132 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27132) : f.call(null,G__27132));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__27133 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27133) : f.call(null,G__27133));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__27136 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27136) : f.call(null,G__27136));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__27137 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27137) : f.call(null,G__27137));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){
var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){
return om.core._STAR_read_enabled_STAR_ === true;
});
