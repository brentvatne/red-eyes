// Compiled by ClojureScript 0.0-2511
goog.provide('redeyes.undo');
goog.require('cljs.core');
redeyes.undo.add_undo = (function add_undo(app_state){
redeyes.undo.app_history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,app_state)], null));

cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"history","history",-247395220),(function (_,___$1,___$2,n){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,redeyes.undo.app_history)),n)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,redeyes.undo.app_history,cljs.core.conj,n);
}
}));

return (window["undo"] = (function (e){
if((cljs.core.count.call(null,cljs.core.deref.call(null,redeyes.undo.app_history)) > (1))){
cljs.core.swap_BANG_.call(null,redeyes.undo.app_history,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,app_state,cljs.core.last.call(null,cljs.core.deref.call(null,redeyes.undo.app_history)));
} else {
return null;
}
}));
});
