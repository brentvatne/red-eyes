// Compiled by ClojureScript 0.0-2511
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('clojure.string');

schema.core.Schema = (function (){var obj27989 = {};
return obj27989;
})();

schema.core.walker = (function walker(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (schema.core.walker[(function (){var G__27993 = x__4280__auto__;
return goog.typeOf(G__27993);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (schema.core.walker["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});

schema.core.explain = (function explain(this$){
if((function (){var and__3624__auto__ = this$;
if(and__3624__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__3624__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__4280__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3636__auto__ = (schema.core.explain[(function (){var G__27997 = x__4280__auto__;
return goog.typeOf(G__27997);
})()]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (schema.core.explain["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});

/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){
var subschema_walker27999 = schema.core.subschema_walker;
try{schema.core.subschema_walker = sub_walker;

return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker27999;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.utils.memoize_id(schema.core.walker),schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){
var temp__4126__auto___28000 = schema.core.check(schema__$1,value);
if(cljs.core.truth_(temp__4126__auto___28000)){
var error_28001 = temp__4126__auto___28000;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_28001], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,error_28001,cljs.core.constant$keyword$72,value,cljs.core.constant$keyword$73,schema__$1,cljs.core.constant$keyword$30,cljs.core.constant$keyword$74], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__3636__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__3636__auto__ = (this$ === x.constructor);
if(or__3636__auto__){
return or__3636__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var G__28002 = x;
return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__28002) : class_walker.call(null,G__28002));
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return schema.core.explain(more_schema);
} else {
return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28004,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28006 = (((k28004 instanceof cljs.core.Keyword))?k28004.fqn:null);
switch (G__28006) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28004,else__4242__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$75,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28003){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28007 = cljs.core.keyword_identical_QMARK_;
var expr__28008 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28010 = cljs.core.constant$keyword$75;
var G__28011 = expr__28008;
return (pred__28007.cljs$core$IFn$_invoke$arity$2 ? pred__28007.cljs$core$IFn$_invoke$arity$2(G__28010,G__28011) : pred__28007.call(null,G__28010,G__28011));
})())){
return (new schema.core.AnythingSchema(G__28003,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28003),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28003){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__28003,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.identity;
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__28005){
return (new schema.core.AnythingSchema(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(G__28005),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28005,cljs.core.constant$keyword$75),null));
});

/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28014,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28016 = (((k28014 instanceof cljs.core.Keyword))?k28014.fqn:null);
switch (G__28016) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28014,else__4242__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.EqSchema{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28013){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28017 = cljs.core.keyword_identical_QMARK_;
var expr__28018 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28020 = cljs.core.constant$keyword$76;
var G__28021 = expr__28018;
return (pred__28017.cljs$core$IFn$_invoke$arity$2 ? pred__28017.cljs$core$IFn$_invoke$arity$2(G__28020,G__28021) : pred__28017.call(null,G__28020,G__28021));
})())){
return (new schema.core.EqSchema(G__28013,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28013),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28013){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__28013,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function __GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__28015){
return (new schema.core.EqSchema(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(G__28015),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28015,cljs.core.constant$keyword$76),null));
});

/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
* @param {*} h
* @param {*} parent
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28024,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28026 = (((k28024 instanceof cljs.core.Keyword))?k28024.fqn:null);
switch (G__28026) {
case "parent":
return self__.parent;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28024,else__4242__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.Isa{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$77,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$77,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28023){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28027 = cljs.core.keyword_identical_QMARK_;
var expr__28028 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28030 = cljs.core.constant$keyword$77;
var G__28031 = expr__28028;
return (pred__28027.cljs$core$IFn$_invoke$arity$2 ? pred__28027.cljs$core$IFn$_invoke$arity$2(G__28030,G__28031) : pred__28027.call(null,G__28030,G__28031));
})())){
return (new schema.core.Isa(G__28023,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28032 = cljs.core.constant$keyword$78;
var G__28033 = expr__28028;
return (pred__28027.cljs$core$IFn$_invoke$arity$2 ? pred__28027.cljs$core$IFn$_invoke$arity$2(G__28032,G__28033) : pred__28027.call(null,G__28032,G__28033));
})())){
return (new schema.core.Isa(self__.h,G__28023,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28023),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$77,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28023){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__28023,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__3636__auto__ = (function (){var and__3624__auto__ = self__.h;
if(cljs.core.truth_(and__3624__auto__)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,child,self__.parent);
} else {
return and__3624__auto__;
}
})();
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),child),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function __GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function map__GT_Isa(G__28025){
return (new schema.core.Isa(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(G__28025),cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(G__28025),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28025,cljs.core.constant$keyword$77,cljs.core.array_seq([cljs.core.constant$keyword$78], 0)),null));
});

/**
* A value that must be a child of parent.
*/
schema.core.isa = (function() {
var isa = null;
var isa__1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});
var isa__2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});
isa = function(h,parent){
switch(arguments.length){
case 1:
return isa__1.call(this,h);
case 2:
return isa__2.call(this,h,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa.cljs$core$IFn$_invoke$arity$1 = isa__1;
isa.cljs$core$IFn$_invoke$arity$2 = isa__2;
return isa;
})()
;

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28036,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28038 = (((k28036 instanceof cljs.core.Keyword))?k28036.fqn:null);
switch (G__28038) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28036,else__4242__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.EnumSchema{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$79,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28035){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28039 = cljs.core.keyword_identical_QMARK_;
var expr__28040 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28042 = cljs.core.constant$keyword$79;
var G__28043 = expr__28040;
return (pred__28039.cljs$core$IFn$_invoke$arity$2 ? pred__28039.cljs$core$IFn$_invoke$arity$2(G__28042,G__28043) : pred__28039.call(null,G__28042,G__28043));
})())){
return (new schema.core.EnumSchema(G__28035,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28035),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$79,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28035){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__28035,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_(self__.vs,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__28037){
return (new schema.core.EnumSchema(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(G__28037),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28037,cljs.core.constant$keyword$79),null));
});

/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
};
var enum$ = function (var_args){
var vs = null;
if (arguments.length > 0) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__28045){
var vs = cljs.core.seq(arglist__28045);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28047,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28049 = (((k28047 instanceof cljs.core.Keyword))?k28047.fqn:null);
switch (G__28049) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28047,else__4242__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.Predicate{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,null,cljs.core.constant$keyword$80,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28046){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28050 = cljs.core.keyword_identical_QMARK_;
var expr__28051 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28053 = cljs.core.constant$keyword$80;
var G__28054 = expr__28051;
return (pred__28050.cljs$core$IFn$_invoke$arity$2 ? pred__28050.cljs$core$IFn$_invoke$arity$2(G__28053,G__28054) : pred__28050.call(null,G__28053,G__28054));
})())){
return (new schema.core.Predicate(G__28046,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28055 = cljs.core.constant$keyword$81;
var G__28056 = expr__28051;
return (pred__28050.cljs$core$IFn$_invoke$arity$2 ? pred__28050.cljs$core$IFn$_invoke$arity$2(G__28055,G__28056) : pred__28050.call(null,G__28055,G__28056));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__28046,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28046),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28046){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__28046,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__28058 = x;
return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__28058) : self__.p_QMARK_.call(null,G__28058));
})())){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e28057){if((e28057 instanceof Object)){
var e = e28057;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e28057;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var reason = temp__4124__auto__;
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4124__auto__,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4124__auto__,this$__$1))
,null)),reason));
} else {
return x;
}
});
;})(this$__$1))
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function map__GT_Predicate(G__28048){
return (new schema.core.Predicate(cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(G__28048),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(G__28048),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28048,cljs.core.constant$keyword$80,cljs.core.array_seq([cljs.core.constant$keyword$81], 0)),null));
});

/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){
return pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){
return cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28063,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28065 = (((k28063 instanceof cljs.core.Keyword))?k28063.fqn:null);
switch (G__28065) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28063,else__4242__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.Protocol{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$83,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$83,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28062){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28066 = cljs.core.keyword_identical_QMARK_;
var expr__28067 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28069 = cljs.core.constant$keyword$83;
var G__28070 = expr__28067;
return (pred__28066.cljs$core$IFn$_invoke$arity$2 ? pred__28066.cljs$core$IFn$_invoke$arity$2(G__28069,G__28070) : pred__28066.call(null,G__28069,G__28070));
})())){
return (new schema.core.Protocol(G__28062,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28062),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$83,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28062){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__28062,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function __GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function map__GT_Protocol(G__28064){
return (new schema.core.Protocol(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(G__28064),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28064,cljs.core.constant$keyword$83),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not(cljs.core.re_find(this$__$1,x))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else {
return x;

}
}
});
;})(this$__$1))
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = RegExp;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28073,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28075 = (((k28073 instanceof cljs.core.Keyword))?k28073.fqn:null);
switch (G__28075) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28073,else__4242__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.Maybe{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28072){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28076 = cljs.core.keyword_identical_QMARK_;
var expr__28077 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28079 = cljs.core.constant$keyword$73;
var G__28080 = expr__28077;
return (pred__28076.cljs$core$IFn$_invoke$arity$2 ? pred__28076.cljs$core$IFn$_invoke$arity$2(G__28079,G__28080) : pred__28076.call(null,G__28079,G__28080));
})())){
return (new schema.core.Maybe(G__28072,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28072),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28072){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__28072,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
var G__28081 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__28081) : sub_walker.call(null,G__28081));
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function map__GT_Maybe(G__28074){
return (new schema.core.Maybe(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__28074),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28074,cljs.core.constant$keyword$73),null));
});

/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28084,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28086 = (((k28084 instanceof cljs.core.Keyword))?k28084.fqn:null);
switch (G__28086) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28084,else__4242__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.NamedSchema{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$85,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28083){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28087 = cljs.core.keyword_identical_QMARK_;
var expr__28088 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28090 = cljs.core.constant$keyword$73;
var G__28091 = expr__28088;
return (pred__28087.cljs$core$IFn$_invoke$arity$2 ? pred__28087.cljs$core$IFn$_invoke$arity$2(G__28090,G__28091) : pred__28087.call(null,G__28090,G__28091));
})())){
return (new schema.core.NamedSchema(G__28083,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28092 = cljs.core.constant$keyword$85;
var G__28093 = expr__28088;
return (pred__28087.cljs$core$IFn$_invoke$arity$2 ? pred__28087.cljs$core$IFn$_invoke$arity$2(G__28092,G__28093) : pred__28087.call(null,G__28092,G__28093));
})())){
return (new schema.core.NamedSchema(self__.schema,G__28083,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28083),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28083){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__28083,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name(self__.name,(function (){var G__28094 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__28094) : sub_walker.call(null,G__28094));
})());
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__28085){
return (new schema.core.NamedSchema(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__28085),cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(G__28085),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28085,cljs.core.constant$keyword$73,cljs.core.array_seq([cljs.core.constant$keyword$85], 0)),null));
});

/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28097,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28099 = (((k28097 instanceof cljs.core.Keyword))?k28097.fqn:null);
switch (G__28099) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28097,else__4242__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.Either{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$86,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28096){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28100 = cljs.core.keyword_identical_QMARK_;
var expr__28101 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28103 = cljs.core.constant$keyword$86;
var G__28104 = expr__28101;
return (pred__28100.cljs$core$IFn$_invoke$arity$2 ? pred__28100.cljs$core$IFn$_invoke$arity$2(G__28103,G__28104) : pred__28100.call(null,G__28103,G__28104));
})())){
return (new schema.core.Either(G__28096,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28096),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28096){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__28096,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq(sub_walkers);
while(true){
if(cljs.core.not(sub_walkers__$1)){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first(sub_walkers__$1).call(null,x);
if(!(schema.utils.error_QMARK_(res))){
return res;
} else {
var G__28106 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__28106;
continue;
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function __GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function map__GT_Either(G__28098){
return (new schema.core.Either(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(G__28098),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28098,cljs.core.constant$keyword$86),null));
});

/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){
return (new schema.core.Either(schemas,null,null,null));
};
var either = function (var_args){
var schemas = null;
if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__28107){
var schemas = cljs.core.seq(arglist__28107);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28109,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28111 = (((k28109 instanceof cljs.core.Keyword))?k28109.fqn:null);
switch (G__28111) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28109,else__4242__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.Both{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$86,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28108){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28112 = cljs.core.keyword_identical_QMARK_;
var expr__28113 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28115 = cljs.core.constant$keyword$86;
var G__28116 = expr__28113;
return (pred__28112.cljs$core$IFn$_invoke$arity$2 ? pred__28112.cljs$core$IFn$_invoke$arity$2(G__28115,G__28116) : pred__28112.call(null,G__28115,G__28116));
})())){
return (new schema.core.Both(G__28108,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28108),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28108){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__28108,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(schema.utils.error_QMARK_(x__$1)){
return x__$1;
} else {
var G__28117 = x__$1;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__28117) : sub_walker.call(null,G__28117));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function __GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function map__GT_Both(G__28110){
return (new schema.core.Both(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(G__28110),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28110,cljs.core.constant$keyword$86),null));
});

/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){
return (new schema.core.Both(schemas,null,null,null));
};
var both = function (var_args){
var schemas = null;
if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__28119){
var schemas = cljs.core.seq(arglist__28119);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28121,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28123 = (((k28121 instanceof cljs.core.Keyword))?k28121.fqn:null);
switch (G__28123) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28121,else__4242__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$87,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28120){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28124 = cljs.core.keyword_identical_QMARK_;
var expr__28125 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28127 = cljs.core.constant$keyword$87;
var G__28128 = expr__28125;
return (pred__28124.cljs$core$IFn$_invoke$arity$2 ? pred__28124.cljs$core$IFn$_invoke$arity$2(G__28127,G__28128) : pred__28124.call(null,G__28127,G__28128));
})())){
return (new schema.core.ConditionalSchema(G__28120,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28120),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$87,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28120){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__28120,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__28129){
var vec__28130 = p__28129;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__28131){
var vec__28132 = p__28131;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(0),null);
var G__28133 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28133) : pred.call(null,G__28133));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28134 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(1),null);
var G__28135 = x;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__28135) : match.call(null,G__28135));
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4124__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4124__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__28136){
var vec__28137 = p__28136;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28137,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28137,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__28122){
return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(G__28122),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28122,cljs.core.constant$keyword$87),null));
});

/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__4392__auto__ = (function iter__28149(s__28150){
return (new cljs.core.LazySeq(null,(function (){
var s__28150__$1 = s__28150;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28150__$1);
if(temp__4126__auto__){
var s__28150__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28150__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28150__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28152 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28151 = (0);
while(true){
if((i__28151 < size__4391__auto__)){
var vec__28157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28151);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(1),null);
cljs.core.chunk_append(b__28152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null));

var G__28159 = (i__28151 + (1));
i__28151 = G__28159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28152),iter__28149(cljs.core.chunk_rest(s__28150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28152),null);
}
} else {
var vec__28158 = cljs.core.first(s__28150__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28158,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28158,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null),iter__28149(cljs.core.rest(s__28150__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4392__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),null,null,null));
};
var conditional = function (var_args){
var preds_and_schemas = null;
if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__28160){
var preds_and_schemas = cljs.core.seq(arglist__28160);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$88;

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28162,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28164 = (((k28162 instanceof cljs.core.Keyword))?k28162.fqn:null);
switch (G__28164) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28162,else__4242__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.RequiredKey{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$89,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28161){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28165 = cljs.core.keyword_identical_QMARK_;
var expr__28166 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28168 = cljs.core.constant$keyword$89;
var G__28169 = expr__28166;
return (pred__28165.cljs$core$IFn$_invoke$arity$2 ? pred__28165.cljs$core$IFn$_invoke$arity$2(G__28168,G__28169) : pred__28165.call(null,G__28168,G__28169));
})())){
return (new schema.core.RequiredKey(G__28161,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28161),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28161){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__28161,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__28163){
return (new schema.core.RequiredKey(cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(G__28163),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28163,cljs.core.constant$keyword$89),null));
});

/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28172,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28174 = (((k28172 instanceof cljs.core.Keyword))?k28172.fqn:null);
switch (G__28174) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28172,else__4242__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.OptionalKey{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$89,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28171){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28175 = cljs.core.keyword_identical_QMARK_;
var expr__28176 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28178 = cljs.core.constant$keyword$89;
var G__28179 = expr__28176;
return (pred__28175.cljs$core$IFn$_invoke$arity$2 ? pred__28175.cljs$core$IFn$_invoke$arity$2(G__28178,G__28179) : pred__28175.call(null,G__28178,G__28179));
})())){
return (new schema.core.OptionalKey(G__28171,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28171),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28171){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__28171,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__28173){
return (new schema.core.OptionalKey(cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(G__28173),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28173,cljs.core.constant$keyword$89),null));
});

/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){
return (schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap,__hash){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28182,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28184 = (((k28182 instanceof cljs.core.Keyword))?k28182.fqn:null);
switch (G__28184) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28182,else__4242__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.MapEntry{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$90,null,cljs.core.constant$keyword$91,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28181){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28185 = cljs.core.keyword_identical_QMARK_;
var expr__28186 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28188 = cljs.core.constant$keyword$90;
var G__28189 = expr__28186;
return (pred__28185.cljs$core$IFn$_invoke$arity$2 ? pred__28185.cljs$core$IFn$_invoke$arity$2(G__28188,G__28189) : pred__28185.call(null,G__28188,G__28189));
})())){
return (new schema.core.MapEntry(G__28181,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28190 = cljs.core.constant$keyword$91;
var G__28191 = expr__28186;
return (pred__28185.cljs$core$IFn$_invoke$arity$2 ? pred__28185.cljs$core$IFn$_invoke$arity$2(G__28190,G__28191) : pred__28185.call(null,G__28190,G__28191));
})())){
return (new schema.core.MapEntry(self__.kspec,G__28181,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28181),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28181){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__28181,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));
if(schema.core.specific_key_QMARK_(self__.kspec)){
var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);
var k = schema.core.explicit_schema_key(self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(optional_QMARK_){
return null;
} else {
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__28192 = x;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28192,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28192,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0)))].join('')));
}

var vres = (function (){var G__28193 = xv;
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__28193) : val_walker.call(null,G__28193));
})();
var temp__4124__auto__ = schema.utils.error_val(vres);
if(cljs.core.truth_(temp__4124__auto__)){
var ve = temp__4124__auto__;
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = (function (){var G__28194 = cljs.core.key(x);
return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__28194) : key_walker.call(null,G__28194));
})();
var out_ke = schema.utils.error_val(out_k);
var out_v = (function (){var G__28195 = cljs.core.val(x);
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__28195) : val_walker.call(null,G__28195));
})();
var out_ve = schema.utils.error_val(out_v);
if(cljs.core.truth_((function (){var or__3636__auto__ = out_ke;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3636__auto__ = out_ke;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.key(x);
}
})(),(function (){var or__3636__auto__ = out_ve;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__28183){
return (new schema.core.MapEntry(cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__28183),cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(G__28183),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28183,cljs.core.constant$keyword$90,cljs.core.array_seq([cljs.core.constant$keyword$91], 0)),null));
});

schema.core.map_entry = (function map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.preserve_map_type = (function preserve_map_type(original,walker_result){
if((schema.utils.record_QMARK_(original)) && (!(schema.utils.error_QMARK_(walker_result)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);
var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__28222(s__28223){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__28223__$1 = s__28223;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28223__$1);
if(temp__4126__auto__){
var s__28223__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28223__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28223__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28225 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28224 = (0);
while(true){
if((i__28224 < size__4391__auto__)){
var vec__28230 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28224);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(1),null);
cljs.core.chunk_append(b__28225,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));

var G__28246 = (i__28224 + (1));
i__28224 = G__28246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28225),iter__28222(cljs.core.chunk_rest(s__28223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28225),null);
}
} else {
var vec__28231 = cljs.core.first(s__28223__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28231,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__28222(cljs.core.rest(s__28223__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;
return iter__4392__auto__(explicit_schema);
})());
var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__28197_SHARP_){
return (cljs.core.count(p1__28197_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_(x))){
return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type(x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(explicit_walkers__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
var G__28232 = out__$1;
var G__28233 = (function (){var G__28234 = e;
return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__28234) : extra_walker.call(null,G__28234));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__28232,G__28233) : err_conj.call(null,G__28232,G__28233));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__28235){
var vec__28236 = p__28235;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28236,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28236,(1),null);
var G__28237 = out__$1;
var G__28238 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__28237,G__28238) : err_conj.call(null,G__28237,G__28238));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__28239){
var vec__28240 = p__28239;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28240,(1),null);
var G__28241 = k;
return (ok_key.cljs$core$IFn$_invoke$arity$1 ? ok_key.cljs$core$IFn$_invoke$arity$1(G__28241) : ok_key.call(null,G__28241));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__28242 = cljs.core.first(explicit_walkers__$1);
var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(0),null);
var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(1),null);
var G__28247 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ok_key,wk);
var G__28248 = cljs.core.next(explicit_walkers__$1);
var G__28249 = (function (){var G__28243 = out;
var G__28244 = (function (){var G__28245 = (function (){var or__3636__auto__ = cljs.core.find(x,wk);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})();
return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__28245) : wv.call(null,G__28245));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__28243,G__28244) : err_conj.call(null,G__28243,G__28244));
})();
ok_key = G__28247;
explicit_walkers__$1 = G__28248;
out = G__28249;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4392__auto__ = (function iter__28260(s__28261){
return (new cljs.core.LazySeq(null,(function (){
var s__28261__$1 = s__28261;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28261__$1);
if(temp__4126__auto__){
var s__28261__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28261__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28261__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28263 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28262 = (0);
while(true){
if((i__28262 < size__4391__auto__)){
var vec__28268 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28262);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268,(1),null);
cljs.core.chunk_append(b__28263,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));

var G__28270 = (i__28262 + (1));
i__28262 = G__28270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28263),iter__28260(cljs.core.chunk_rest(s__28261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28263),null);
}
} else {
var vec__28269 = cljs.core.first(s__28261__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28269,(1),null);
return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__28260(cljs.core.rest(s__28261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4392__auto__(this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__3636__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var vec__28271 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,(1),null);
if(cljs.core.seq(bad)){
return schema.utils.error(cljs.core.set(bad));
} else {
return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28273,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28275 = (((k28273 instanceof cljs.core.Keyword))?k28273.fqn:null);
switch (G__28275) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28273,else__4242__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.One{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$92,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$92,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28272){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28276 = cljs.core.keyword_identical_QMARK_;
var expr__28277 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28279 = cljs.core.constant$keyword$73;
var G__28280 = expr__28277;
return (pred__28276.cljs$core$IFn$_invoke$arity$2 ? pred__28276.cljs$core$IFn$_invoke$arity$2(G__28279,G__28280) : pred__28276.call(null,G__28279,G__28280));
})())){
return (new schema.core.One(G__28272,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28281 = cljs.core.constant$keyword$92;
var G__28282 = expr__28277;
return (pred__28276.cljs$core$IFn$_invoke$arity$2 ? pred__28276.cljs$core$IFn$_invoke$arity$2(G__28281,G__28282) : pred__28276.call(null,G__28281,G__28282));
})())){
return (new schema.core.One(self__.schema,G__28272,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28283 = cljs.core.constant$keyword$85;
var G__28284 = expr__28277;
return (pred__28276.cljs$core$IFn$_invoke$arity$2 ? pred__28276.cljs$core$IFn$_invoke$arity$2(G__28283,G__28284) : pred__28276.call(null,G__28283,G__28284));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__28272,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28272),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$92,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28272){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__28272,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/One");
});

schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function map__GT_One(G__28274){
return (new schema.core.One(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__28274),cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(G__28274),cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(G__28274),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28274,cljs.core.constant$keyword$73,cljs.core.array_seq([cljs.core.constant$keyword$92,cljs.core.constant$keyword$85], 0)),null));
});

/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){

var vec__28291 = cljs.core.split_with((function (p1__28286_SHARP_){
return ((p1__28286_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(p1__28286_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28291,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28291,(1),null);
var vec__28292 = cljs.core.split_with(((function (vec__28291,required,more){
return (function (p1__28287_SHARP_){
var and__3624__auto__ = (p1__28287_SHARP_ instanceof schema.core.One);
if(and__3624__auto__){
return cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(p1__28287_SHARP_);
} else {
return and__3624__auto__;
}
});})(vec__28291,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28292,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28292,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__28291,required,more,vec__28292,optional,more__$1){
return (function (p1__28288_SHARP_){
return !((p1__28288_SHARP_ instanceof schema.core.One));
});})(vec__28291,required,more,vec__28292,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__28293 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28293,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28293,(1),null);
var single_walkers = cljs.core.vec((function (){var iter__4392__auto__ = ((function (vec__28293,singles,multi,this$__$1){
return (function iter__28294(s__28295){
return (new cljs.core.LazySeq(null,((function (vec__28293,singles,multi,this$__$1){
return (function (){
var s__28295__$1 = s__28295;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28295__$1);
if(temp__4126__auto__){
var s__28295__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28295__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28295__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28297 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28296 = (0);
while(true){
if((i__28296 < size__4391__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28296);
cljs.core.chunk_append(b__28297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));

var G__28325 = (i__28296 + (1));
i__28296 = G__28325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28297),iter__28294(cljs.core.chunk_rest(s__28295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28297),null);
}
} else {
var s = cljs.core.first(s__28295__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__28294(cljs.core.rest(s__28295__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28293,singles,multi,this$__$1))
,null,null));
});})(vec__28293,singles,multi,this$__$1))
;
return iter__4392__auto__(singles);
})());
var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);
var err_conj = schema.utils.result_builder(((function (vec__28293,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__28293,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__3636__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28300 = temp__4124__auto__;
var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28300,(0),null);
var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28300,(1),null);
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
var G__28301 = out;
var G__28302 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__28301,vec__28300,first_single,single_walker,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__4392__auto__ = ((function (single_walkers__$1,x__$1,out,G__28301,vec__28300,first_single,single_walker,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__28303(s__28304){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__28301,vec__28300,first_single,single_walker,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__28304__$1 = s__28304;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28304__$1);
if(temp__4126__auto__){
var s__28304__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28304__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28304__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28306 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28305 = (0);
while(true){
if((i__28305 < size__4391__auto__)){
var vec__28311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28305);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
cljs.core.chunk_append(b__28306,single.name);

var G__28326 = (i__28305 + (1));
i__28305 = G__28326;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28306),iter__28303(cljs.core.chunk_rest(s__28304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28306),null);
}
} else {
var vec__28312 = cljs.core.first(s__28304__$2);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28312,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
return cljs.core.cons(single.name,iter__28303(cljs.core.rest(s__28304__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__28301,vec__28300,first_single,single_walker,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__28301,vec__28300,first_single,single_walker,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__4392__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__28301,vec__28300,first_single,single_walker,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__28301,G__28302) : err_conj.call(null,G__28301,G__28302));
}
} else {
var G__28327 = cljs.core.next(single_walkers__$1);
var G__28328 = cljs.core.rest(x__$1);
var G__28329 = (function (){var G__28313 = out;
var G__28314 = schema.utils.wrap_error_name(first_single.name,(function (){var G__28315 = cljs.core.first(x__$1);
return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__28315) : single_walker.call(null,G__28315));
})());
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__28313,G__28314) : err_conj.call(null,G__28313,G__28314));
})();
single_walkers__$1 = G__28327;
x__$1 = G__28328;
out = G__28329;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else {
if(cljs.core.seq(x__$1)){
var G__28316 = out;
var G__28317 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__28316,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__28316,temp__4124__auto__,or__3636__auto__,vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__28316,G__28317) : err_conj.call(null,G__28316,G__28317));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__28293,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__28318 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4392__auto__ = ((function (vec__28318,singles,multi,this$__$1){
return (function iter__28319(s__28320){
return (new cljs.core.LazySeq(null,((function (vec__28318,singles,multi,this$__$1){
return (function (){
var s__28320__$1 = s__28320;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__28320__$1);
if(temp__4126__auto__){
var s__28320__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28320__$2)){
var c__4390__auto__ = cljs.core.chunk_first(s__28320__$2);
var size__4391__auto__ = cljs.core.count(c__4390__auto__);
var b__28322 = cljs.core.chunk_buffer(size__4391__auto__);
if((function (){var i__28321 = (0);
while(true){
if((i__28321 < size__4391__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4390__auto__,i__28321);
cljs.core.chunk_append(b__28322,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__28330 = (i__28321 + (1));
i__28321 = G__28330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28322),iter__28319(cljs.core.chunk_rest(s__28320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28322),null);
}
} else {
var s = cljs.core.first(s__28320__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__28319(cljs.core.rest(s__28320__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28318,singles,multi,this$__$1))
,null,null));
});})(vec__28318,singles,multi,this$__$1))
;
return iter__4392__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28332,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28334 = (((k28332 instanceof cljs.core.Keyword))?k28332.fqn:null);
switch (G__28334) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28332,else__4242__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.Record{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$93,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$93,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28331){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28335 = cljs.core.keyword_identical_QMARK_;
var expr__28336 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28338 = cljs.core.constant$keyword$93;
var G__28339 = expr__28336;
return (pred__28335.cljs$core$IFn$_invoke$arity$2 ? pred__28335.cljs$core$IFn$_invoke$arity$2(G__28338,G__28339) : pred__28335.call(null,G__28338,G__28339));
})())){
return (new schema.core.Record(G__28331,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28340 = cljs.core.constant$keyword$73;
var G__28341 = expr__28336;
return (pred__28335.cljs$core$IFn$_invoke$arity$2 ? pred__28335.cljs$core$IFn$_invoke$arity$2(G__28340,G__28341) : pred__28335.call(null,G__28340,G__28341));
})())){
return (new schema.core.Record(self__.klass,G__28331,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28331),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$93,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28331){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__28331,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
var pred_checker = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var evf = temp__4126__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__3636__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var res = (function (){var G__28342 = r;
return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__28342) : map_checker.call(null,G__28342));
})();
if(schema.utils.error_QMARK_(res)){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__28343 = r;
return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__28343) : pred_checker.call(null,G__28343));
})():null);
if(schema.utils.error_QMARK_(pred_res)){
return pred_res;
} else {
return res;
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function map__GT_Record(G__28333){
return (new schema.core.Record(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(G__28333),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__28333),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28333,cljs.core.constant$keyword$93,cljs.core.array_seq([cljs.core.constant$keyword$73], 0)),null));
});

/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){
var vec__28348 = cljs.core.split_with((function (p1__28345_SHARP_){
return (p1__28345_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28348,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28348,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__28348,required,more){
return (function (p1__28346_SHARP_){
return schema.core.explain(p1__28346_SHARP_.schema);
});})(vec__28348,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4239__auto____$1,k__4240__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k28350,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__28352 = (((k28350 instanceof cljs.core.Keyword))?k28350.fqn:null);
switch (G__28352) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28350,else__4242__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer(writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4254__auto__,pr_pair__4256__auto__,"#schema.core.FnSchema{",", ","}",opts__4255__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$95,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$96,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$95,null,cljs.core.constant$keyword$96,null], null), null),k__4249__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4249__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__28349){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__28353 = cljs.core.keyword_identical_QMARK_;
var expr__28354 = k__4247__auto__;
if(cljs.core.truth_((function (){var G__28356 = cljs.core.constant$keyword$95;
var G__28357 = expr__28354;
return (pred__28353.cljs$core$IFn$_invoke$arity$2 ? pred__28353.cljs$core$IFn$_invoke$arity$2(G__28356,G__28357) : pred__28353.call(null,G__28356,G__28357));
})())){
return (new schema.core.FnSchema(G__28349,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28358 = cljs.core.constant$keyword$96;
var G__28359 = expr__28354;
return (pred__28353.cljs$core$IFn$_invoke$arity$2 ? pred__28353.cljs$core$IFn$_invoke$arity$2(G__28358,G__28359) : pred__28353.call(null,G__28358,G__28359));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__28349,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4247__auto__,G__28349),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$95,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$96,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__28349){
var self__ = this;
var this__4238__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__28349,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4245__auto__)){
return cljs.core._assoc(this__4244__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_(x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write(writer__4274__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__28351){
return (new schema.core.FnSchema(cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__28351),cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__28351),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28351,cljs.core.constant$keyword$95,cljs.core.array_seq([cljs.core.constant$keyword$96], 0)),null));
});

schema.core.arity = (function arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regardless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){

return cljs.core.with_meta(schema__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$85,name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){

return cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$73,schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__3636__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
var m__12906__auto__ = cljs.core.meta(f);
var k__12907__auto__ = cljs.core.constant$keyword$73;
var temp__4124__auto__ = cljs.core.find(m__12906__auto__,k__12907__auto__);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__12908__auto__ = temp__4124__auto__;
return cljs.core.val(pair__12908__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__12907__auto__,m__12906__auto__], 0))));
}
}
});
