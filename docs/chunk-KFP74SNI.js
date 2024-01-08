import{a as h}from"./chunk-YKUCMRFC.js";import{a as x,b as L}from"./chunk-55LVP5BF.js";import{d as D}from"./chunk-A5WTIVW3.js";import"./chunk-GYW2RQPY.js";import{$ as g,N as p,W as P,Y as l,Z as m,_ as C,aa as i,ba as r,ca as s,ga as v,ia as d,ja as S,ma as f,pa as F,qa as T,u as _,v as u,xa as M}from"./chunk-UVVUGJ4E.js";import"./chunk-U3EYQZXJ.js";function k(t,e){t&1&&(i(0,"p"),d(1,"Loading featured products..."),r())}var j=(t,e)=>e.id;function B(t,e){if(t&1&&s(0,"app-product",2),t&2){let a=e.$implicit;P("product",a)}}function I(t,e){t&1&&(i(0,"div",1),C(1,B,1,1,"app-product",3,j),r()),t&2&&(p(1),g(e))}function R(t,e){if(t&1&&(i(0,"h2"),d(1,"Featured Products"),r(),l(2,I,3,0,"div",0),s(3,"hr")),t&2){let a=v(),n;p(2),m(2,(n=a.featuredProducts().data)?2:-1,n)}}var w=(()=>{let e=class e{constructor(){this.productService=_(h),this.featuredProducts=this.productService.getFeaturedProducts().result}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-feature-products"]],standalone:!0,features:[f],decls:2,vars:1,consts:[["class","featured"],[1,"featured"],[1,"item",3,"product"],["class","item",3,"product"]],template:function(o,c){o&1&&l(0,k,2,0,"p")(1,R,4,1),o&2&&m(0,c.featuredProducts().isLoading?0:c.featuredProducts().isSuccess?1:-1)},dependencies:[x],styles:["h2[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{margin-bottom:.5rem}div.featured[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:.75rem}div.featured[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{flex-basis:250px}"],changeDetection:0});let t=e;return t})();function q(t,e){t&1&&(i(0,"p"),d(1,"Loading..."),r())}function z(t,e){t&1&&(i(0,"p"),d(1,"Error"),r())}var A=(t,e)=>e.category,G=(t,e)=>e.id;function H(t,e){if(t&1&&s(0,"app-product",1),t&2){let a=e.$implicit;P("product",a)}}function J(t,e){if(t&1&&(i(0,"h3"),d(1),F(2,"titlecase"),r(),i(3,"div",0),C(4,H,1,1,"app-product",1,G),r()),t&2){let a=e.$implicit;p(1),S(T(2,1,a.category)),p(3),g(a.products)}}function K(t,e){t&1&&C(0,J,6,3,null,null,A),t&2&&g(e)}function N(t,e){if(t&1&&l(0,K,2,0),t&2){let a=v(),n;m(0,(n=a.categoryProducts().data)?0:-1,n)}}var O=(()=>{let e=class e{constructor(){this.productService=_(h),this.categoryService=_(L),this.categoryProducts=D({categories:this.categoryService.getCategories().result,products:this.productService.getProducts().result},({categories:n,products:o})=>n.reduce((c,y)=>{let $=o.filter(b=>b.category===y);return c.concat({category:y,products:$})},[]))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-product-list"]],standalone:!0,features:[f],decls:6,vars:1,consts:[[1,"products"],[3,"product"]],template:function(o,c){o&1&&(i(0,"h2"),d(1,"Catalogue"),r(),i(2,"div"),l(3,q,2,0,"p")(4,z,2,0)(5,N,1,1),r()),o&2&&(p(3),m(3,c.categoryProducts().isLoading?3:c.categoryProducts().isError?4:c.categoryProducts().isSuccess?5:-1))},dependencies:[x,M],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let t=e;return t})();var st=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-product-catalogue"]],standalone:!0,features:[f],decls:2,vars:0,template:function(o,c){o&1&&s(0,"app-feature-products")(1,"app-product-list")},dependencies:[w,O],encapsulation:2,changeDetection:0});let t=e;return t})();export{st as ProductCatalogueComponent};
