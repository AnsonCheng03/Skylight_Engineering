import{f as s,s as _,M as r,_ as d,i}from"./q-055d7d9f.js";import{a as u,u as m}from"./q-fa93ef6c.js";const p="_examples_17ods_1",y="_cards_17ods_5",h="_cardsContainer_17ods_16",v="_card_17ods_5",C="_cardContent_17ods_64",e={examples:p,cards:y,cardsContainer:h,card:v,cardContent:C,"photo-type":"_photo-type_17ods_87","photo-name":"_photo-name_17ods_94"},f=l=>{const t=u(),n=m();return s("section",null,{class:e.examples},[s("h2",null,null,"案例分享",3,null),s("div",null,{class:e.cards},s("div",null,{class:e.cardsContainer},l.photos.map(a=>{var o;return(o=a.Highlight)==null?void 0:o.map(c=>s("div",{onClick$:_(()=>d(()=>Promise.resolve().then(()=>g),void 0),"s_ayOAyFQWvdU",[t,n,a])},{class:e.card},[s("img",{src:a.path+"/"+c},null,null,3,null),s("div",null,{class:e.cardContent},[a.type&&s("h3",null,{class:e.photoType},r(a,"type"),1,"ir_0"),a.data&&s("h3",null,{class:e.photoData},r(a,"data"),1,"ir_1"),a.name&&s("h3",null,{class:e.photoName},r(a,"name"),1,"ir_2")],1,null)],0,a.id))}),1,null),1,null)],1,"ir_3")},x=()=>{const[l,t,n]=i(),a=new URL(l.url.href);a.pathname="/example",a.searchParams.set("type",n.type),a.searchParams.set("name",n.name),t(a.href)},g=Object.freeze(Object.defineProperty({__proto__:null,s_ayOAyFQWvdU:x,s_jYyS9IWa9Yk:f},Symbol.toStringTag,{value:"Module"}));export{x as s_ayOAyFQWvdU,f as s_jYyS9IWa9Yk};
