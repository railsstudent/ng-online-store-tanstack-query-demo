import{a as n,b as l,c as X,f as x}from"./chunk-U3EYQZXJ.js";var F=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};var C=typeof window>"u"||"Deno"in window;function b(){}function tt(t,e){return typeof t=="function"?t(e):t}function T(t){return typeof t=="number"&&t>=0&&t!==1/0}function k(t,e){return Math.max(t+(e||0)-Date.now(),0)}function B(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:a,queryKey:h,stale:y}=t;if(h){if(i){if(e.queryHash!==I(h,e.options))return!1}else if(!A(e.queryKey,h))return!1}if(s!=="all"){let u=e.isActive();if(s==="active"&&!u||s==="inactive"&&u)return!1}return!(typeof y=="boolean"&&e.isStale()!==y||typeof r<"u"&&r!==e.state.fetchStatus||a&&!a(e))}function _(t,e){let{exact:s,status:i,predicate:r,mutationKey:a}=t;if(a){if(!e.options.mutationKey)return!1;if(s){if(E(e.options.mutationKey)!==E(a))return!1}else if(!A(e.options.mutationKey,a))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function I(t,e){return(e?.queryKeyHashFn||E)(t)}function E(t){return JSON.stringify(t,(e,s)=>H(s)?Object.keys(s).sort().reduce((i,r)=>(i[r]=s[r],i),{}):s)}function A(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(s=>!A(t[s],e[s])):!1}function et(t,e){if(t===e)return t;let s=Y(t)&&Y(e);if(s||H(t)&&H(e)){let i=s?t.length:Object.keys(t).length,r=s?e:Object.keys(e),a=r.length,h=s?[]:{},y=0;for(let u=0;u<a;u++){let o=s?u:r[u];h[o]=et(t[o],e[o]),h[o]===t[o]&&y++}return i===a&&y===i?t:h}return e}function U(t,e){if(t&&!e||e&&!t)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function Y(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function H(t){if(!Z(t))return!1;let e=t.constructor;if(typeof e>"u")return!0;let s=e.prototype;return!(!Z(s)||!s.hasOwnProperty("isPrototypeOf"))}function Z(t){return Object.prototype.toString.call(t)==="[object Object]"}function V(t){return new Promise(e=>{setTimeout(e,t)})}function z(t){V(0).then(t)}function K(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?et(t,e):e}function st(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function it(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var pt=class extends F{#t=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!C&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#t!==t&&(this.#t=t,this.listeners.forEach(s=>{s(t)}))}isOnline(){return this.#t}},R=new pt;var yt=class extends F{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!C&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(e=>{typeof e=="boolean"?this.setFocused(e):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},Q=new yt;function mt(t){return Math.min(1e3*2**t,3e4)}function D(t){return(t??"online")==="online"?R.isOnline():!0}var rt=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function L(t){return t instanceof rt}function j(t){let e=!1,s=0,i=!1,r,a,h,y=new Promise((c,m)=>{a=c,h=m}),u=c=>{i||(v(new rt(c)),t.abort?.())},o=()=>{e=!0},f=()=>{e=!1},O=()=>!Q.isFocused()||t.networkMode!=="always"&&!R.isOnline(),M=c=>{i||(i=!0,t.onSuccess?.(c),r?.(),a(c))},v=c=>{i||(i=!0,t.onError?.(c),r?.(),h(c))},g=()=>new Promise(c=>{r=m=>{let w=i||!O();return w&&c(m),w},t.onPause?.()}).then(()=>{r=void 0,i||t.onContinue?.()}),p=()=>{if(i)return;let c;try{c=t.fn()}catch(m){c=Promise.reject(m)}Promise.resolve(c).then(M).catch(m=>{if(i)return;let w=t.retry??(C?0:3),P=t.retryDelay??mt,q=typeof P=="function"?P(s,m):P,S=w===!0||typeof w=="number"&&s<w||typeof w=="function"&&w(s,m);if(e||!S){v(m);return}s++,t.onFail?.(s,m),V(q).then(()=>{if(O())return g()}).then(()=>{e?v(m):p()})})};return D(t.networkMode)?p():g().then(p),{promise:y,cancel:u,continue:()=>r?.()?y:Promise.resolve(),cancelRetry:o,continueRetry:f}}function vt(){let t=[],e=0,s=f=>{f()},i=f=>{f()},r=f=>{let O;e++;try{O=f()}finally{e--,e||y()}return O},a=f=>{e?t.push(f):z(()=>{s(f)})},h=f=>(...O)=>{a(()=>{f(...O)})},y=()=>{let f=t;t=[],f.length&&z(()=>{i(()=>{f.forEach(O=>{s(O)})})})};return{batch:r,batchCalls:h,schedule:a,setNotifyFunction:f=>{s=f},setBatchNotifyFunction:f=>{i=f}}}var d=vt();var N=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),T(this.gcTime)&&(this.#t=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(C?1/0:5*60*1e3))}clearGcTimeout(){this.#t&&(clearTimeout(this.#t),this.#t=void 0)}};var nt=class extends N{constructor(t){super(),this.#u=!1,this.#a=t.defaultOptions,this.#h(t.options),this.#n=[],this.#s=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#t=t.state||gt(this.options),this.state=this.#t,this.scheduleGc()}#t;#e;#s;#i;#r;#n;#a;#u;get meta(){return this.options.meta}#h(t){this.options=n(n({},this.#a),t),this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.#n.length&&this.state.fetchStatus==="idle"&&this.#s.remove(this)}setData(t,e){let s=K(this.state.data,t,this.options);return this.#o({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#o({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#i;return this.#r?.cancel(t),e?e.then(b).catch(b):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.#n.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#n.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!k(this.state.dataUpdatedAt,t)}onFocus(){this.#n.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.#n.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.#n.includes(t)||(this.#n.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#n.includes(t)&&(this.#n=this.#n.filter(e=>e!==t),this.#n.length||(this.#r&&(this.#u?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#n.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(t,e){if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#r?.continueRetry(),this.#i}if(t&&this.#h(t),!this.options.queryFn){let u=this.#n.find(o=>o.options.queryFn);u&&this.#h(u.options)}let s=new AbortController,i={queryKey:this.queryKey,meta:this.meta},r=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(this.#u=!0,s.signal)})};r(i);let a=()=>this.options.queryFn?(this.#u=!1,this.options.persister?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),h={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:a};r(h),this.options.behavior?.onFetch(h,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==h.fetchOptions?.meta)&&this.#o({type:"fetch",meta:h.fetchOptions?.meta});let y=u=>{L(u)&&u.silent||this.#o({type:"error",error:u}),L(u)||(this.#s.config.onError?.(u,this),this.#s.config.onSettled?.(this.state.data,u,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#r=j({fn:h.fetchFn,abort:s.abort.bind(s),onSuccess:u=>{if(typeof u>"u"){y(new Error(`${this.queryHash} data is undefined`));return}this.setData(u),this.#s.config.onSuccess?.(u,this),this.#s.config.onSettled?.(u,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:y,onFail:(u,o)=>{this.#o({type:"failed",failureCount:u,error:o})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode}),this.#i=this.#r.promise,this.#i}#o(t){let e=s=>{switch(t.type){case"failed":return l(n({},s),{fetchFailureCount:t.failureCount,fetchFailureReason:t.error});case"pause":return l(n({},s),{fetchStatus:"paused"});case"continue":return l(n({},s),{fetchStatus:"fetching"});case"fetch":return n(l(n({},s),{fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:D(this.options.networkMode)?"fetching":"paused"}),!s.dataUpdatedAt&&{error:null,status:"pending"});case"success":return n(l(n({},s),{data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success"}),!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null});case"error":let i=t.error;return L(i)&&i.revert&&this.#e?l(n({},this.#e),{fetchStatus:"idle"}):l(n({},s),{error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"});case"invalidate":return l(n({},s),{isInvalidated:!0});case"setState":return n(n({},s),t.state)}};this.state=e(this.state),d.batch(()=>{this.#n.forEach(s=>{s.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:t})})}};function gt(t){let e=typeof t.initialData=="function"?t.initialData():t.initialData,s=typeof e<"u",i=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var at=class extends F{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,r=e.queryHash??I(i,e),a=this.get(r);return a||(a=new nt({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){d.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e=n({exact:!0},t);return this.getAll().find(s=>B(e,s))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(s=>B(t,s)):e}notify(t){d.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){d.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){d.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}};var ot=class extends N{constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#s=t.mutationCache,this.#t=[],this.state=t.state||W(),this.setOptions(t.options),this.scheduleGc()}#t;#e;#s;#i;setOptions(t){this.options=n(n({},this.#e),t),this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}execute(t){return x(this,null,function*(){let e=()=>(this.#i=j({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(i,r)=>{this.#r({type:"failed",failureCount:i,error:r})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#i.promise),s=this.state.status==="pending";try{if(!s){this.#r({type:"pending",variables:t}),yield this.#s.config.onMutate?.(t,this);let r=yield this.options.onMutate?.(t);r!==this.state.context&&this.#r({type:"pending",context:r,variables:t})}let i=yield e();return yield this.#s.config.onSuccess?.(i,t,this.state.context,this),yield this.options.onSuccess?.(i,t,this.state.context),yield this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),yield this.options.onSettled?.(i,null,t,this.state.context),this.#r({type:"success",data:i}),i}catch(i){try{throw yield this.#s.config.onError?.(i,t,this.state.context,this),yield this.options.onError?.(i,t,this.state.context),yield this.#s.config.onSettled?.(void 0,i,this.state.variables,this.state.context,this),yield this.options.onSettled?.(void 0,i,t,this.state.context),i}finally{this.#r({type:"error",error:i})}}})}#r(t){let e=s=>{switch(t.type){case"failed":return l(n({},s),{failureCount:t.failureCount,failureReason:t.error});case"pause":return l(n({},s),{isPaused:!0});case"continue":return l(n({},s),{isPaused:!1});case"pending":return l(n({},s),{context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!D(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()});case"success":return l(n({},s),{data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1});case"error":return l(n({},s),{data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"})}};this.state=e(this.state),d.batch(()=>{this.#t.forEach(s=>{s.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function W(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ut=class extends F{constructor(t={}){super(),this.config=t,this.#t=[],this.#e=0}#t;#e;#s;build(t,e,s){let i=new ot({mutationCache:this,mutationId:++this.#e,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#t.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#t=this.#t.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){d.batch(()=>{this.#t.forEach(t=>{this.remove(t)})})}getAll(){return this.#t}find(t){let e=n({exact:!0},t);return this.#t.find(s=>_(e,s))}findAll(t={}){return this.#t.filter(e=>_(t,e))}notify(t){d.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#s=(this.#s??Promise.resolve()).then(()=>{let t=this.#t.filter(e=>e.state.isPaused);return d.batch(()=>t.reduce((e,s)=>e.then(()=>s.continue().catch(b)),Promise.resolve()))}).then(()=>{this.#s=void 0}),this.#s}};function ct(t){return{onFetch:(e,s)=>{let i=()=>x(this,null,function*(){let r=e.options,a=e.fetchOptions?.meta?.fetchMore?.direction,h=e.state.data?.pages||[],y=e.state.data?.pageParams||[],u={pages:[],pageParams:[]},o=!1,f=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(e.signal.aborted?o=!0:e.signal.addEventListener("abort",()=>{o=!0}),e.signal)})},O=e.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`))),M=(g,p,c)=>x(this,null,function*(){if(o)return Promise.reject();if(p==null&&g.pages.length)return Promise.resolve(g);let m={queryKey:e.queryKey,pageParam:p,direction:c?"backward":"forward",meta:e.options.meta};f(m);let w=yield O(m),{maxPages:P}=e.options,q=c?it:st;return{pages:q(g.pages,w,P),pageParams:q(g.pageParams,p,P)}}),v;if(a&&h.length){let g=a==="backward",p=g?bt:ht,c={pages:h,pageParams:y},m=p(r,c);v=yield M(c,m,g)}else{v=yield M(u,y[0]??r.initialPageParam);let g=t??h.length;for(let p=1;p<g;p++){let c=ht(r,v);v=yield M(v,c)}}return v});e.options.persister?e.fetchFn=()=>e.options.persister?.(i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=i}}}function ht(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}function bt(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}var Ot=class{#t;#e;#s;#i;#r;#n;#a;#u;constructor(t={}){this.#t=t.queryCache||new at,this.#e=t.mutationCache||new ut,this.#s=t.defaultOptions||{},this.#i=new Map,this.#r=new Map,this.#n=0}mount(){this.#n++,this.#n===1&&(this.#a=Q.subscribe(()=>{Q.isFocused()&&(this.resumePausedMutations(),this.#t.onFocus())}),this.#u=R.subscribe(()=>{R.isOnline()&&(this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#n--,this.#n===0&&(this.#a?.(),this.#a=void 0,this.#u?.(),this.#u=void 0)}isFetching(t){return this.#t.findAll(l(n({},t),{fetchStatus:"fetching"})).length}isMutating(t){return this.#e.findAll(l(n({},t),{status:"pending"})).length}getQueryData(t){return this.#t.find({queryKey:t})?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return e!==void 0?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:e,state:s})=>{let i=s.data;return[e,i]})}setQueryData(t,e,s){let r=this.#t.find({queryKey:t})?.state.data,a=tt(e,r);if(typeof a>"u")return;let h=this.defaultQueryOptions({queryKey:t});return this.#t.build(this,h).setData(a,l(n({},s),{manual:!0}))}setQueriesData(t,e,s){return d.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t){return this.#t.find({queryKey:t})?.state}removeQueries(t){let e=this.#t;d.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){let s=this.#t,i=n({type:"active"},t);return d.batch(()=>(s.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s=n({revert:!0},e),i=d.batch(()=>this.#t.findAll(t).map(r=>r.cancel(s)));return Promise.all(i).then(b).catch(b)}invalidateQueries(t={},e={}){return d.batch(()=>{if(this.#t.findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();let s=l(n({},t),{type:t.refetchType??t.type??"active"});return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s=l(n({},e),{cancelRefetch:e?.cancelRefetch??!0}),i=d.batch(()=>this.#t.findAll(t).filter(r=>!r.isDisabled()).map(r=>{let a=r.fetch(void 0,s);return s.throwOnError||(a=a.catch(b)),r.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(i).then(b)}fetchQuery(t){let e=this.defaultQueryOptions(t);typeof e.retry>"u"&&(e.retry=!1);let s=this.#t.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(b).catch(b)}fetchInfiniteQuery(t){return t.behavior=ct(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(b).catch(b)}resumePausedMutations(){return this.#e.resumePausedMutations()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#s}setDefaultOptions(t){this.#s=t}setQueryDefaults(t,e){this.#i.set(E(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#i.values()],s={};return e.forEach(i=>{A(t,i.queryKey)&&(s=n(n({},s),i.defaultOptions))}),s}setMutationDefaults(t,e){this.#r.set(E(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#r.values()],s={};return e.forEach(i=>{A(t,i.mutationKey)&&(s=n(n({},s),i.defaultOptions))}),s}defaultQueryOptions(t){if(t?._defaulted)return t;let e=l(n(n(n({},this.#s.queries),t?.queryKey&&this.getQueryDefaults(t.queryKey)),t),{_defaulted:!0});return e.queryHash||(e.queryHash=I(e.queryKey,e)),typeof e.refetchOnReconnect>"u"&&(e.refetchOnReconnect=e.networkMode!=="always"),typeof e.throwOnError>"u"&&(e.throwOnError=!!e.suspense),typeof e.networkMode>"u"&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t?._defaulted?t:l(n(n(n({},this.#s.mutations),t?.mutationKey&&this.getMutationDefaults(t.mutationKey)),t),{_defaulted:!0})}clear(){this.#t.clear(),this.#e.clear()}};var wt=class extends F{constructor(t,e){super(),this.#e=void 0,this.#s=void 0,this.#i=void 0,this.#d=new Set,this.#t=t,this.options=e,this.#a=null,this.bindMethods(),this.setOptions(e)}#t;#e;#s;#i;#r;#n;#a;#u;#h;#o;#l;#f;#c;#d;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),lt(this.#e,this.options)?this.#p():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return $(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return $(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#O(),this.#e.removeObserver(this)}setOptions(t,e){let s=this.options,i=this.#e;if(this.options=this.#t.defaultQueryOptions(t),U(s,this.options)||this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.#w();let r=this.hasListeners();r&&ft(this.#e,i,this.options,s)&&this.#p(),this.updateResult(e),r&&(this.#e!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.#y();let a=this.#m();r&&(this.#e!==i||this.options.enabled!==s.enabled||a!==this.#c)&&this.#v(a)}getOptimisticResult(t){let e=this.#t.getQueryCache().build(this.#t,t),s=this.createResult(e,t);return Ft(this,s)&&(this.#i=s,this.#n=this.options,this.#r=this.#e.state),s}getCurrentResult(){return this.#i}trackResult(t){let e={};return Object.keys(t).forEach(s=>{Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:()=>(this.#d.add(s),t[s])})}),e}getCurrentQuery(){return this.#e}refetch(e={}){var t=X(e,[]);return this.fetch(n({},t))}fetchOptimistic(t){let e=this.#t.defaultQueryOptions(t),s=this.#t.getQueryCache().build(this.#t,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#p(l(n({},t),{cancelRefetch:t.cancelRefetch??!0})).then(()=>(this.updateResult(),this.#i))}#p(t){this.#w();let e=this.#e.fetch(this.options,t);return t?.throwOnError||(e=e.catch(b)),e}#y(){if(this.#b(),C||this.#i.isStale||!T(this.options.staleTime))return;let e=k(this.#i.dataUpdatedAt,this.options.staleTime)+1;this.#l=setTimeout(()=>{this.#i.isStale||this.updateResult()},e)}#m(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(t){this.#O(),this.#c=t,!(C||this.options.enabled===!1||!T(this.#c)||this.#c===0)&&(this.#f=setInterval(()=>{(this.options.refetchIntervalInBackground||Q.isFocused())&&this.#p()},this.#c))}#g(){this.#y(),this.#v(this.#m())}#b(){this.#l&&(clearTimeout(this.#l),this.#l=void 0)}#O(){this.#f&&(clearInterval(this.#f),this.#f=void 0)}createResult(t,e){let s=this.#e,i=this.options,r=this.#i,a=this.#r,h=this.#n,u=t!==s?t.state:this.#s,{state:o}=t,{error:f,errorUpdatedAt:O,fetchStatus:M,status:v}=o,g=!1,p;if(e._optimisticResults){let S=this.hasListeners(),G=!S&&lt(t,e),dt=S&&ft(t,s,e,i);(G||dt)&&(M=D(t.options.networkMode)?"fetching":"paused",o.dataUpdatedAt||(v="pending")),e._optimisticResults==="isRestoring"&&(M="idle")}if(e.select&&typeof o.data<"u")if(r&&o.data===a?.data&&e.select===this.#u)p=this.#h;else try{this.#u=e.select,p=e.select(o.data),p=K(r?.data,p,e),this.#h=p,this.#a=null}catch(S){this.#a=S}else p=o.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&v==="pending"){let S;if(r?.isPlaceholderData&&e.placeholderData===h?.placeholderData)S=r.data;else if(S=typeof e.placeholderData=="function"?e.placeholderData(this.#o?.state.data,this.#o):e.placeholderData,e.select&&typeof S<"u")try{S=e.select(S),this.#a=null}catch(G){this.#a=G}typeof S<"u"&&(v="success",p=K(r?.data,S,e),g=!0)}this.#a&&(f=this.#a,p=this.#h,O=Date.now(),v="error");let c=M==="fetching",m=v==="pending",w=v==="error",P=m&&c;return{status:v,fetchStatus:M,isPending:m,isSuccess:v==="success",isError:w,isInitialLoading:P,isLoading:P,data:p,dataUpdatedAt:o.dataUpdatedAt,error:f,errorUpdatedAt:O,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>u.dataUpdateCount||o.errorUpdateCount>u.errorUpdateCount,isFetching:c,isRefetching:c&&!m,isLoadingError:w&&o.dataUpdatedAt===0,isPaused:M==="paused",isPlaceholderData:g,isRefetchError:w&&o.dataUpdatedAt!==0,isStale:J(t,e),refetch:this.refetch}}updateResult(t){let e=this.#i,s=this.createResult(this.#e,this.options);if(this.#r=this.#e.state,this.#n=this.options,this.#r.data!==void 0&&(this.#o=this.#e),U(s,e))return;this.#i=s;let i={},r=()=>{if(!e)return!0;let{notifyOnChangeProps:a}=this.options,h=typeof a=="function"?a():a;if(h==="all"||!h&&!this.#d.size)return!0;let y=new Set(h??this.#d);return this.options.throwOnError&&y.add("error"),Object.keys(this.#i).some(u=>{let o=u;return this.#i[o]!==e[o]&&y.has(o)})};t?.listeners!==!1&&r()&&(i.listeners=!0),this.#S(n(n({},i),t))}#w(){let t=this.#t.getQueryCache().build(this.#t,this.options);if(t===this.#e)return;let e=this.#e;this.#e=t,this.#s=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#S(t){d.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#i)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function St(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function lt(t,e){return St(t,e)||t.state.dataUpdatedAt>0&&$(t,e,e.refetchOnMount)}function $(t,e,s){if(e.enabled!==!1){let i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&J(t,e)}return!1}function ft(t,e,s,i){return s.enabled!==!1&&(t!==e||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&J(t,s)}function J(t,e){return t.isStaleByTime(e.staleTime)}function Ft(t,e){return!U(t.getCurrentResult(),e)}var Mt=class extends F{constructor(t,e){super(),this.#e=void 0,this.#t=t,this.setOptions(e),this.bindMethods(),this.#r()}#t;#e;#s;#i;bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),U(e,this.options)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),this.#s?.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#r(),this.#n(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#r(),this.#n()}mutate(t,e){return this.#i=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#r(){let t=this.#s?.state??W();this.#e=l(n({},t),{isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})}#n(t){d.batch(()=>{this.#i&&this.hasListeners()&&(t?.type==="success"?(this.#i.onSuccess?.(t.data,this.#e.variables,this.#e.context),this.#i.onSettled?.(t.data,null,this.#e.variables,this.#e.context)):t?.type==="error"&&(this.#i.onError?.(t.error,this.#e.variables,this.#e.context),this.#i.onSettled?.(void 0,t.error,this.#e.variables,this.#e.context))),this.listeners.forEach(e=>{e(this.#e)})})}};export{R as a,d as b,Ot as c,wt as d,Mt as e};