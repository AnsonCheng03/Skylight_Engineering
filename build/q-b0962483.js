import{i as u,$ as D,f as a,l as k,j as m,b as A,k as B,w as y,d as g,g as P,s as i,_,c as V}from"./q-ccebfced.js";const L=()=>{const[o,e]=u();e.photos.forEach(t=>{t.Slideshow.forEach(s=>{o.value.push(t.path+"/"+s)})})},q=()=>{var t,s;const[o]=u(),e=(t=document.querySelector(".hero-slideshow"))==null?void 0:t.firstElementChild;e&&((s=document.querySelector(".hero-slideshow"))==null||s.appendChild(e)),o()},O=o=>D("svg",{...o,children:a("path",null,{d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"},null,3,null)},{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-pause",viewBox:"0 0 16 16",width:"1em",height:"1em","data-qwikest-icon":!0},0,"L8_0"),T=o=>D("svg",{...o,children:a("path",null,{d:"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"},null,3,null)},{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-play",viewBox:"0 0 16 16",width:"1em",height:"1em","data-qwikest-icon":!0},0,"2h_0"),M="_hero_19kt4_1",R="_heroSlideshow_19kt4_19",b="_heroSlideshowControls_19kt4_64",K="_heroSlideshowControlsDotsContainer_19kt4_76",x="_heroSlideshowControlsDots_19kt4_76",Q="_dot_19kt4_89",W="_active_19kt4_97",Y="_heroSlideshowControlsPlayButton_19kt4_101",j="_single_19kt4_111",z="_heroSlideshow_controls_19kt4_132",r={hero:M,heroSlideshow:R,heroSlideshowControls:b,heroSlideshowControlsDotsContainer:K,heroSlideshowControlsDots:x,dot:Q,active:W,heroSlideshowControlsPlayButton:Y,single:j,heroSlideshow_controls:z},G=o=>{k();const e=m(!1),t=m(!1),s=m(void 0),n=m(1),l=m([]);A(i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_upBA61BFpgM",[l,o]));const v=i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_EVasqvu2VkQ"),S=i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_YlKKYEfWog0",[v]),f=i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_WvVnaluU6nc",[v]),h=i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_nSS7s47PUtk",[t,s,S]),w=i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_fBNGZ46JMLQ",[t,s]),I=i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_KB6BiqC2icE",[e,S,f,h,w]);return B(i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_l6wsIrhHw4Q",[n,l,h,v])),l.value.length>0?a("section",{class:l.value.length===1?[r.hero,r.single]:r.hero},null,[a("div",null,{class:[r.heroSlideshow,"hero-slideshow"],style:y(d=>({aspectRatio:d.value}),[n])},l.value.length===1?a("img",null,{src:y(d=>d.value[0],[l]),alt:y(d=>d.value[0],[l])},null,3,"K7_0"):g(P,{children:[...Array(l.value.length<=4?Math.ceil(6/l.value.length):1)].map((d,p)=>l.value.map((E,C)=>a("img",{src:E,alt:E,id:C.toString()},{class:r.heroSlideshowSlide},null,3,p+C)))},1,"K7_1"),1,null),a("div",null,{class:r.heroSlideshowControls},[a("div",null,{class:r.heroSlideshowControlsDotsContainer},a("div",null,{class:r.heroSlideshowControlsDots},l.value.map((d,p)=>a("div",{class:p===2?[r.dot,r.active,"dot"]:[r.dot,"dot"],id:p.toString()},{onClick$:i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_YqTL6DElQ1I",[I])},null,3,p)),1,null),1,null),a("div",null,{class:r.heroSlideshowControlsPlayButton,onClick$:i(()=>_(()=>Promise.resolve().then(()=>c),void 0),"s_GFuo1Mik8bA",[t,h,w])},t.value===!0?g(O,null,3,"K7_2"):g(T,null,3,"K7_3"),1,null)],1,null)],1,"K7_4"):g(P,null,3,"K7_5")},$=()=>{var s;const o=document.querySelectorAll(".dot"),e=(s=document.querySelector(".hero-slideshow"))==null?void 0:s.children[2],t=e==null?void 0:e.id;o.forEach(n=>{n.classList.remove(r.active)}),t&&o[parseInt(t)].classList.add(r.active)},F=o=>{const[e]=u();e(o.target)},U=()=>{var s,n,l;const[o]=u(),e=(s=document.querySelector(".hero-slideshow"))==null?void 0:s.firstElementChild,t=(n=document.querySelector(".hero-slideshow"))==null?void 0:n.lastElementChild;e&&t&&((l=document.querySelector(".hero-slideshow"))==null||l.insertBefore(t,e)),o()},H=()=>{const[o,e,t,s]=u();if(e.value[0]===void 0)return;const n=new Image;n.src=e.value[0],n.onload=()=>{o.value=n.width/n.height},e.value.length>1&&(s(),t())},J=()=>{const[o,e,t]=u();o.value===!1?e():t()},N=()=>{const[o,e]=u();o.value=!1,clearInterval(e.value)},Z=o=>{const[e,t,s,n,l]=u();if(e.value===!0)return;e.value=!0,l();const v=Array.from(o.parentElement.children).indexOf(o),S=document.querySelector(".dot.active"),f=Array.from(o.parentElement.children).indexOf(S);if(v===f)return;const h=v-f;for(let w=0;w<Math.abs(h);w++)setTimeout(h>0?t:s,300*w);setTimeout(()=>{n(),e.value=!1},300*Math.abs(h))},X=()=>{const[o,e,t]=u();o.value=!0,typeof e.value<"u"&&clearInterval(e.value),e.value=setInterval(t,3e3)},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:V,s_EVasqvu2VkQ:$,s_GFuo1Mik8bA:J,s_KB6BiqC2icE:Z,s_WvVnaluU6nc:U,s_YlKKYEfWog0:q,s_YqTL6DElQ1I:F,s_c4GS49xCdTA:G,s_fBNGZ46JMLQ:N,s_l6wsIrhHw4Q:H,s_nSS7s47PUtk:X,s_upBA61BFpgM:L},Symbol.toStringTag,{value:"Module"}));export{V as _hW,$ as s_EVasqvu2VkQ,J as s_GFuo1Mik8bA,Z as s_KB6BiqC2icE,U as s_WvVnaluU6nc,q as s_YlKKYEfWog0,F as s_YqTL6DElQ1I,G as s_c4GS49xCdTA,N as s_fBNGZ46JMLQ,H as s_l6wsIrhHw4Q,X as s_nSS7s47PUtk,L as s_upBA61BFpgM};
