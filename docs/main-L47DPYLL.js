import{a as G}from"./chunk-YKUCMRFC.js";import{a as Z,b as z}from"./chunk-A5WTIVW3.js";import"./chunk-GYW2RQPY.js";import{B as P,Ba as R,C as B,Ca as Q,D as E,Da as f,Ea as $,F as k,Fa as L,Ga as h,Ha as V,Ia as H,Ja as q,Ka as U,N as v,O as w,P as F,Q as M,W as N,Y as u,Z as y,aa as p,ba as r,ca as j,g as s,i as b,ia as m,ma as d,na as A,o as D,pa as T,qa as S,r as I,sa as _,u as a,v as l,wa as O}from"./chunk-UVVUGJ4E.js";import{a as x}from"./chunk-U3EYQZXJ.js";var C=(...t)=>{k(C);let e=a(V),g=a(F);return e.events.pipe(b(o=>o instanceof $),s(o=>o),s(({url:o,urlAfterRedirects:i})=>!t.includes(o)&&!t.includes(i)),D(()=>g.markForCheck()))};function ot(t,e){t&1&&(p(0,"a",0),m(1,"Home"),r())}function it(t,e){t&1&&(p(0,"span"),m(1,"\xA0"),r())}var rt=()=>["my-cart"];function nt(t,e){t&1&&(p(0,"a",1),m(1,"View Cart"),r()),t&2&&N("routerLink",A(1,rt))}function at(t,e){t&1&&(p(0,"span"),m(1,"\xA0"),r())}var K=(()=>{let e=class e{constructor(){this.isShowHomeButton$=C("/","/products"),this.isShowViewCartButton$=C("/my-cart")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-nav-bar"]],standalone:!0,features:[d],decls:7,vars:6,consts:[["routerLink","/"],[3,"routerLink"]],template:function(i,n){i&1&&(p(0,"div"),u(1,ot,2,0,"a",0),T(2,"async"),u(3,it,2,0)(4,nt,2,2,"a",1),T(5,"async"),u(6,at,2,0),r()),i&2&&(v(1),y(1,S(2,2,n.isShowHomeButton$)?1:3),v(3),y(4,S(5,4,n.isShowViewCartButton$)?4:6))},dependencies:[H,O],styles:["div[_ngcontent-%COMP%]{background:goldenrod;height:50px;padding:.25rem;margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center}"],changeDetection:0});let t=e;return t})();var W=(()=>{let e=class e{constructor(o){o.setTitle("Angular 16 + Tanstack/Query for Angular Demo")}};e.\u0275fac=function(i){return new(i||e)(w(f))},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:5,vars:0,template:function(i,n){i&1&&(p(0,"div")(1,"h2"),m(2,"Angular Tanstack/Query Demo"),r(),j(3,"app-nav-bar")(4,"router-outlet"),r())},dependencies:[L,K],styles:["div[_ngcontent-%COMP%]{padding:.75rem}h2[_ngcontent-%COMP%]{margin-bottom:.75rem}"],changeDetection:0});let t=e;return t})();function X(t={}){return E([{provide:B,multi:!0,useValue(){let e=z(),g=a(M);import("./chunk-SZ5Z4VWP.js").then(o=>{o.queryDevtools(x({queryClient:e,destroyRef:g},t))})}}])}var Y=[{path:"products",loadComponent:()=>import("./chunk-KFP74SNI.js").then(t=>t.ProductCatalogueComponent),title:"Product list"},{path:"products/:id",loadComponent:()=>import("./chunk-TCXZ3RMM.js").then(t=>t.ProductDetailsComponent),title:"Product"},{path:"my-cart",loadComponent:()=>import("./chunk-TN67WI3Z.js").then(t=>t.CartComponent),title:"My shopping cart"},{path:"categories/:category",loadComponent:()=>import("./chunk-KYDABIOE.js").then(t=>t.CategoryProductsComponent),title:"Category"},{path:"",pathMatch:"full",redirectTo:"products"},{path:"**",redirectTo:"products"}];var tt=(()=>{let e=class e extends h{constructor(){super(...arguments),this.title=a(f),this.productService=a(G),this.subscription=null}updateTitle(o){this.subscription?.unsubscribe();let i=this.buildTitle(o)||"",n=o.root.firstChild?.params.id||"";n?this.subscription=this.productService.getProduct(+n).result$.pipe(s(c=>c.data?.title||""),s(c=>`Product - ${c}`)).subscribe(c=>this.title.setTitle(c)):this.title.setTitle(i)}};e.\u0275fac=(()=>{let o;return function(n){return(o||(o=P(e)))(n||e)}})(),e.\u0275prov=I({token:e,factory:e.\u0275fac});let t=e;return t})();var et={providers:[R(),q(Y,U()),{provide:h,useClass:tt},_()?X({initialIsOpen:!0}):[],Z({defaultOptions:{queries:{staleTime:1/0}}})]};Q(W,et).catch(t=>console.error(t));