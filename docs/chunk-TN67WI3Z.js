import{a as b,b as P,c as k,d as L,e as U,f as D,g as v}from"./chunk-AYUEKAFC.js";import{$ as O,A as h,Ia as j,N as c,R as I,W as s,Y as y,Z as M,_ as T,aa as i,ba as n,ca as u,da as w,fa as g,ga as _,ha as E,ia as o,ja as S,ka as f,ma as C,oa as F,pa as V,ra as A,u as d,v as p,ya as N,z as x}from"./chunk-UVVUGJ4E.js";import"./chunk-U3EYQZXJ.js";var z=t=>["/products",t],Q=(()=>{let e=class e{constructor(){this.cartService=d(v)}delete(m){this.cartService.deleteItem(m)}update(m,a){this.cartService.updateItem(m,a)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["app-cart-item"]],inputs:{item:"item"},standalone:!0,features:[C],decls:18,vars:8,consts:[[1,"row"],[2,"width","10%"],[3,"routerLink"],[2,"width","20%"],[2,"width","40%"],["type","number","min","1",2,"width","50px",3,"ngModel"],["ctrl","ngModel"],[1,"btnUpdate",3,"click"],[3,"click"]],template:function(a,r){if(a&1){let B=w();i(0,"div",0)(1,"p",1)(2,"a",2),o(3),n()(),i(4,"p",3),o(5),n(),i(6,"p",4),o(7),n(),i(8,"p",1),o(9),n(),i(10,"p",1),u(11,"input",5,6),n(),i(13,"p",1)(14,"button",7),g("click",function(){x(B);let X=E(12);return h(r.update(r.item.id,X.value))}),o(15,"Update"),n(),i(16,"button",8),g("click",function(){return r.delete(r.item.id)}),o(17,"X"),n()()()}a&2&&(c(2),s("routerLink",F(6,z,r.item.id)),c(1),S(r.item.id),c(2),S(r.item.title),c(2),S(r.item.description),c(2),S(r.item.price),c(2),s("ngModel",r.item.quantity))},dependencies:[D,b,L,P,U,k,j],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}.btnUpdate[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let t=e;return t})();function G(t,e){if(t&1&&(i(0,"div",1)(1,"div",2),o(2),V(3,"percent"),n(),i(4,"div",2),o(5),n()()),t&2){let l=_();c(2),f("Minus ",A(3,2,l.discountPercent(),"2.2-2"),""),c(3),f("Discount: ",l.summary().discount,"")}}var $=(()=>{let e=class e{constructor(){this.cartService=d(v),this.summary=this.cartService.summary,this.discountPercent=this.cartService.discountPercent}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["app-cart-total"]],standalone:!0,features:[C],decls:12,vars:4,consts:[[1,"summary"],[1,"row"],[1,"col"],["class","row"]],template:function(a,r){a&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),o(3),n(),i(4,"div",2),o(5),n()(),y(6,G,6,5,"div",3),i(7,"div",1)(8,"div",2),o(9,"\xA0"),n(),i(10,"div",2),o(11),n()()()),a&2&&(c(3),f("Qty: ",r.summary().quantity,""),c(2),f("Subtotal: ",r.summary().subtotal,""),c(1),M(6,r.discountPercent()>0?6:-1),c(5),f("Total: ",r.summary().total,""))},dependencies:[N],styles:[".summary[_ngcontent-%COMP%]{border:1px solid black;margin-bottom:1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.col[_ngcontent-%COMP%]{width:20%}"],changeDetection:0});let t=e;return t})();var H=(t,e)=>e.id;function J(t,e){if(t&1&&u(0,"app-cart-item",9),t&2){let l=e.$implicit;s("item",l)}}function K(t,e){if(t&1){let l=w();i(0,"div",1)(1,"div",2)(2,"p",3),o(3,"Id"),n(),i(4,"p",4),o(5,"Title"),n(),i(6,"p",5),o(7,"Description"),n(),i(8,"p",3),o(9,"Price"),n(),i(10,"p",3),o(11,"Qty"),n(),i(12,"p",3),o(13,"\xA0"),n()(),T(14,J,1,1,"app-cart-item",9,H),u(16,"app-cart-total"),i(17,"span"),o(18,"Promotion code: "),n(),u(19,"input",6,7),i(21,"button",8),g("click",function(){x(l);let a=E(20),r=_();return h(r.promoCode.set(a.value))}),o(22,"Apply"),n()()}if(t&2){let l=_();c(14),O(l.cart()),c(5),s("ngModel",l.promoCode())}}function W(t,e){t&1&&(i(0,"p"),o(1,"Your cart is empty, please buy something."),n())}var xe=(()=>{let e=class e{constructor(){this.cartService=d(v),this.cart=this.cartService.cart,this.promoCode=this.cartService.promoCode,I(()=>{console.log("Promo code changes to ",this.promoCode()),console.log("Cart changes to ",this.cart())})}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["app-cart"]],standalone:!0,features:[C],decls:2,vars:1,consts:[["class","cart"],[1,"cart"],[1,"row"],[2,"width","10%"],[2,"width","20%"],[2,"width","40%"],[3,"ngModel"],["promotionCode","ngModel"],[3,"click"],[3,"item"]],template:function(a,r){a&1&&y(0,K,23,1,"div",0)(1,W,2,0),a&2&&M(0,r.cart().length>0?0:1)},dependencies:[Q,$,D,b,P,k],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}input[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let t=e;return t})();export{xe as CartComponent};
