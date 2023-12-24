import{g as O}from"./chunk-LLEP3BBA.js";import{b as L,c as x}from"./chunk-6HAOEE3I.js";import{$ as s,$a as g,Ba as d,Bb as D,La as u,Oa as f,Pa as _,Qa as C,Ra as P,Sa as i,Ta as o,Ua as l,Ya as h,Z as v,_a as c,eb as m,gb as T,hb as E,ib as b,ta as F}from"./chunk-JJZI2TCJ.js";var j=e=>[e],y=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-product"]],inputs:{product:"product"},standalone:!0,features:[m],decls:19,vars:7,consts:[[1,"container"],[1,"image-container"],["alt","image","width","100","height","100",3,"src"],["for","id"],["id","id","name","id"],["for","name"],["id","name","name","name"],[3,"routerLink"],["for","price"],["id","price","name","price"]],template:function(n,a){n&1&&(i(0,"div",0)(1,"div",1),l(2,"img",2),o(),i(3,"label",3)(4,"span",4),c(5,"Id: "),o(),i(6,"span"),c(7),o()(),i(8,"label",5)(9,"span",6),c(10,"Title: "),o(),i(11,"span")(12,"a",7),c(13),o()()(),i(14,"label",8)(15,"span",9),c(16,"Price: "),o(),i(17,"span"),c(18),o()()()),n&2&&(d(2),u("src",a.product.image,F),d(5),g(a.product.id),d(5),u("routerLink",T(5,j,a.product.id)),d(1),g(a.product.title),d(5),g(a.product.price))},dependencies:[O],styles:["div.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid black;padding:.5rem;height:calc(100% - 1rem)}div.image-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:.5rem}label[_ngcontent-%COMP%]:first-of-type{margin-bottom:10px}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{color:#aaa;width:20%}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-of-type(2){width:80%}"],changeDetection:0});let e=t;return e})();function R(e,t){e&1&&(i(0,"p"),c(1,"Loading featured products..."),o())}var z=(e,t)=>t.id;function B(e,t){if(e&1&&l(0,"app-product",2),e&2){let p=t.$implicit;u("product",p)}}function U(e,t){e&1&&(i(0,"div",1),C(1,B,1,1,"app-product",3,z),o()),e&2&&(d(1),P(t))}function q(e,t){if(e&1&&(i(0,"h2"),c(1,"Featured Products"),o(),f(2,U,3,0,"div",0),l(3,"hr")),e&2){let p=h(),r;d(2),_(2,(r=p.featuredProducts().data)?2:-1,r)}}var w=(()=>{let t=class t{constructor(){this.productService=v(x),this.featuredProducts=this.productService.getFeaturedProducts().result}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-feature-products"]],standalone:!0,features:[m],decls:2,vars:1,consts:[["class","featured"],[1,"featured"],[1,"item",3,"product"],["class","item",3,"product"]],template:function(n,a){n&1&&f(0,R,2,0,"p")(1,q,4,1),n&2&&_(0,a.featuredProducts().isLoading?0:a.featuredProducts().isSuccess?1:-1)},dependencies:[y],styles:["h2[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{margin-bottom:.5rem}div.featured[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:.75rem}div.featured[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{flex-basis:250px}"],changeDetection:0});let e=t;return e})();function A(e,t){e&1&&(i(0,"p"),c(1,"Loading..."),o())}function G(e,t){e&1&&(i(0,"p"),c(1,"Error"),o())}var H=(e,t)=>t.category,J=(e,t)=>t.id;function K(e,t){if(e&1&&l(0,"app-product",1),e&2){let p=t.$implicit;u("product",p)}}function N(e,t){if(e&1&&(i(0,"h3"),c(1),E(2,"titlecase"),o(),i(3,"div",0),C(4,K,1,1,"app-product",1,J),o()),e&2){let p=t.$implicit;d(1),g(b(2,1,p.category)),d(3),P(p.products)}}function Q(e,t){e&1&&C(0,N,6,3,null,null,H),e&2&&P(t)}function V(e,t){if(e&1&&f(0,Q,2,0),e&2){let p=h(),r;_(0,(r=p.categoryProducts().data)?0:-1,r)}}var k=(()=>{let t=class t{constructor(){this.productService=v(x),this.categoryProducts=L({categories:this.productService.getCategories().result,products:this.productService.getProducts().result},({categories:r,products:n})=>r.reduce((a,M)=>{let I=n.filter($=>$.category===M);return a.concat({category:M,products:I})},[]))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-product-list"]],standalone:!0,features:[m],decls:6,vars:1,consts:[[1,"products"],[3,"product"]],template:function(n,a){n&1&&(i(0,"h2"),c(1,"Catalogue"),o(),i(2,"div"),f(3,A,2,0,"p")(4,G,2,0)(5,V,1,1),o()),n&2&&(d(3),_(3,a.categoryProducts().isLoading?3:a.categoryProducts().isError?4:a.categoryProducts().isSuccess?5:-1))},dependencies:[y,D],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let e=t;return e})();var ft=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-product-catalogue"]],standalone:!0,features:[m],decls:2,vars:0,template:function(n,a){n&1&&l(0,"app-feature-products")(1,"app-product-list")},dependencies:[w,k],encapsulation:2,changeDetection:0});let e=t;return e})();export{ft as ProductCatalogueComponent};
