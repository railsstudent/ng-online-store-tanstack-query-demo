import{a as C,i as b,m as v}from"./chunk-TF4US4FU.js";import{$a as h,Ga as s,N as d,Na as n,Oa as i,Pa as g,T as m,V as u,Va as r,Wa as l,bb as y,oa as f,wa as a}from"./chunk-HSUJI75I.js";var M=e=>["/products",e],I=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-product"]],inputs:{product:"product"},standalone:!0,features:[h],decls:19,vars:7,consts:[[1,"container"],[1,"image-container"],["alt","image","width","100","height","100",3,"src"],["for","id"],["id","id","name","id"],["for","name"],["id","name","name","name"],[3,"routerLink"],["for","price"],["id","price","name","price"]],template:function(o,p){o&1&&(n(0,"div",0)(1,"div",1),g(2,"img",2),i(),n(3,"label",3)(4,"span",4),r(5,"Id: "),i(),n(6,"span"),r(7),i()(),n(8,"label",5)(9,"span",6),r(10,"Title: "),i(),n(11,"span")(12,"a",7),r(13),i()()(),n(14,"label",8)(15,"span",9),r(16,"Price: "),i(),n(17,"span"),r(18),i()()()),o&2&&(a(2),s("src",p.product.image,f),a(5),l(p.product.id),a(5),s("routerLink",y(5,M,p.product.id)),a(1),l(p.product.title),a(5),l(p.product.price))},dependencies:[b],styles:["div.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid black;padding:.5rem;height:calc(100% - 1rem)}div.image-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:.5rem}label[_ngcontent-%COMP%]:first-of-type{margin-bottom:10px}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{color:#aaa;width:20%}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-of-type(2){width:80%}"],changeDetection:0});let e=t;return e})();var O="https://fakestoreapi.com/products/categories",E="https://fakestoreapi.com/products/category",_=(()=>{let t=class t{constructor(){this.httpClient=m(C),this.query=v()}getCategories(){return this.query({queryKey:["categories"],queryFn:()=>this.httpClient.get(O)})}getCategory(c){return this.query({queryKey:["categories",c],queryFn:()=>this.httpClient.get(`${E}/${c}`)})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{I as a,_ as b};
