import{_ as h}from"./arrow-ab9e3bcb.js";/* empty css                                                                   */import{_ as n,r as p,o as r,c as u,w as m,a as o,t as C,b as c,d as y,F as b,e as f,f as t,u as a,p as v,g as L}from"./index-e0734257.js";const k="/shelving-simulator/assets/hero-8ff2cd51.jpg";const S={class:"block"},x={class:"block__title"},B={class:"block__list"},I={class:"block__el"},$=["src"],H={__name:"UICategoryBlock",props:{category:String,title:String,logos:Array},setup(e){return(s,i)=>{const g=p("RouterLink");return r(),u(g,{to:`/${e.category}`},{default:m(()=>[o("div",S,[o("div",x,C(e.title),1),o("ul",B,[(r(!0),c(b,null,y(e.logos,d=>(r(),c("li",I,[o("img",{src:d,alt:"",class:"block__logo"},null,8,$)]))),256))])])]),_:1},8,["to"])}}},_=n(H,[["__scopeId","data-v-67bf00a5"]]),w=f("logosStore",{state:()=>({logos:{babyCareLogos:["./logos/babyCare_1.png"],dishCareLogos:["./logos/dishCare_1.png","./logos/dishCare_2.png","./logos/dishCare_3.png"],femCareLogos:["./logos/femCare_1.png","./logos/femCare_2.png","./logos/femCare_3.png"],hairCareLogos:["./logos/hairCare_1.png","./logos/hairCare_2.png","./logos/hairCare_3.png","./logos/hairCare_4.png"],laundryCareLogos:["./logos/laundryCare_1.png","./logos/laundryCare_2.png","./logos/laundryCare_3.png"]}})});const l=e=>(v("data-v-3999fbe3"),e=e(),L(),e),U={class:"home"},F={class:"home__container"},P=l(()=>o("div",{class:"home__hero"},[o("img",{src:k,alt:""})],-1)),D={class:"home__box"},N=l(()=>o("div",{class:"home__text"},"Здесь вы можете в онлайн режиме изучать и тренировать навыки правильной выкладки продукции на полках согласно SBD стандартам",-1)),R=l(()=>o("div",{class:"home__title"},"ВЫБЕРИ КАТЕГОРИЮ",-1)),V=l(()=>o("div",{class:"home__arrow"},[o("img",{src:h,alt:""})],-1)),j={class:"home__categories"},A={__name:"HomePage",setup(e){const s=w();return(i,g)=>(r(),c("div",U,[o("div",F,[P,o("div",D,[N,R,V,o("div",j,[t(_,{category:"babyCare",title:"Baby care. Детская гигиена",logos:a(s).logos.babyCareLogos},null,8,["logos"]),t(_,{category:"dishCare",title:"Home care. Средства для мытья посуды и по уходу за домом",logos:a(s).logos.dishCareLogos},null,8,["logos"]),t(_,{category:"femCare",title:"Feminine hygiene. Женская гигиена",logos:a(s).logos.femCareLogos},null,8,["logos"]),t(_,{category:"hairCare",title:"Hair care. Средства по уходу за волосами",logos:a(s).logos.hairCareLogos},null,8,["logos"]),t(_,{category:"laundryCare",title:"Laundry. Средства для стирки",logos:a(s).logos.laundryCareLogos},null,8,["logos"])])])])]))}},G=n(A,[["__scopeId","data-v-3999fbe3"]]);export{G as default};
