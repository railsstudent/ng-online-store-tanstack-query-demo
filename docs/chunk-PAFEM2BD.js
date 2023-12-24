import{a as b,b as P,c as D,d as N,e as j,f as I,g as C}from"./chunk-F2KU6INQ.js";import{$ as p,$a as S,Ba as c,Cb as A,Fa as T,La as v,Oa as y,Pa as M,Qa as k,Ra as O,Sa as t,Ta as i,Ua as s,Va as w,Xa as g,Ya as _,Z as d,Za as E,_a as n,ab as u,da as h,ea as x,eb as f,hb as V,jb as F}from"./chunk-JJZI2TCJ.js";var q=(()=>{let e=class e{constructor(){this.cartService=d(C),this.cart=this.cartService.cart}delete(l){this.cartService.deleteItem(l)}update(l,r){this.cartService.updateItem(l,r)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-cart-item"]],inputs:{item:"item"},standalone:!0,features:[f],decls:17,vars:5,consts:[[1,"row"],[2,"width","10%"],[2,"width","20%"],[2,"width","40%"],["type","number","min","1",2,"width","50px",3,"ngModel"],["ctrl","ngModel"],[1,"btnUpdate",3,"click"],[3,"click"]],template:function(r,a){if(r&1){let $=w();t(0,"div",0)(1,"p",1),n(2),i(),t(3,"p",2),n(4),i(),t(5,"p",3),n(6),i(),t(7,"p",1),n(8),i(),t(9,"p",1),s(10,"input",4,5),i(),t(12,"p",1)(13,"button",6),g("click",function(){h($);let X=E(11);return x(a.update(a.item.id,X.value))}),n(14,"Update"),i(),t(15,"button",7),g("click",function(){return a.delete(a.item.id)}),n(16,"X"),i()()()}r&2&&(c(2),S(a.item.id),c(2),S(a.item.title),c(2),S(a.item.description),c(2),S(a.item.price),c(2),v("ngModel",a.item.quantity))},dependencies:[I,b,N,P,j,D],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}.btnUpdate[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let o=e;return o})();function z(o,e){if(o&1&&(t(0,"div",1)(1,"div",2),n(2),V(3,"percent"),i(),t(4,"div",2),n(5),i()()),o&2){let m=_();c(2),u("Minus ",F(3,2,m.discountPercent(),"2.2-2"),""),c(3),u("Discount: ",m.summary().discount,"")}}var Q=(()=>{let e=class e{constructor(){this.cartService=d(C),this.summary=this.cartService.summary,this.discountPercent=this.cartService.discountPercent}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-cart-total"]],standalone:!0,features:[f],decls:12,vars:4,consts:[[1,"summary"],[1,"row"],[1,"col"],["class","row"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),n(3),i(),t(4,"div",2),n(5),i()(),y(6,z,6,5,"div",3),t(7,"div",1)(8,"div",2),n(9,"\xA0"),i(),t(10,"div",2),n(11),i()()()),r&2&&(c(3),u("Qty: ",a.summary().quantity,""),c(2),u("Subtotal: ",a.summary().subtotal,""),c(1),M(6,a.discountPercent()>0?6:-1),c(5),u("Total: ",a.summary().total,""))},dependencies:[A],styles:[".summary[_ngcontent-%COMP%]{border:1px solid black;margin-bottom:1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.col[_ngcontent-%COMP%]{width:20%}"],changeDetection:0});let o=e;return o})();var G=(o,e)=>e.id;function H(o,e){if(o&1&&s(0,"app-cart-item",9),o&2){let m=e.$implicit;v("item",m)}}function J(o,e){if(o&1){let m=w();t(0,"div",1)(1,"div",2)(2,"p",3),n(3,"Id"),i(),t(4,"p",4),n(5,"Title"),i(),t(6,"p",5),n(7,"Description"),i(),t(8,"p",3),n(9,"Price"),i(),t(10,"p",3),n(11,"Qty"),i(),t(12,"p",3),n(13,"\xA0"),i()(),k(14,H,1,1,"app-cart-item",9,G),s(16,"app-cart-total"),t(17,"span"),n(18,"Promotion code: "),i(),s(19,"input",6,7),t(21,"button",8),g("click",function(){h(m);let r=E(20),a=_();return x(a.promoCode.set(r.value))}),n(22,"Apply"),i()()}if(o&2){let m=_();c(14),O(m.cart()),c(5),v("ngModel",m.promoCode())}}function K(o,e){o&1&&(t(0,"p"),n(1,"Your cart is empty, please buy something."),i())}var ve=(()=>{let e=class e{constructor(){this.cartService=d(C),this.cart=this.cartService.cart,this.promoCode=this.cartService.promoCode,T(()=>{console.log("Promo code changes to ",this.promoCode()),console.log("Cart changes to ",this.cart())})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-cart"]],standalone:!0,features:[f],decls:2,vars:1,consts:[["class","cart"],[1,"cart"],[1,"row"],[2,"width","10%"],[2,"width","20%"],[2,"width","40%"],[3,"ngModel"],["promotionCode","ngModel"],[3,"click"],[3,"item"]],template:function(r,a){r&1&&y(0,J,23,1,"div",0)(1,K,2,0),r&2&&M(0,a.cart().length>0?0:1)},dependencies:[q,Q,I,b,P,D],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}input[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let o=e;return o})();export{ve as CartComponent};