import{l as Q,j as F,k as at,r as it,m as G,n as W,o as K,p as st,q as Z,s as I,t as w,v as lt,w as ct,x as ut,y as dt,c as _t,C as mt,d as pt,D as vt,R as yt,e as ft,f as ht,h as St,i as Et}from"./q-aa474eec.js";import{_ as S,l as tt,Q as Ct,s as et,a as gt,u as bt,E as wt,U as qt,N as T,b as Rt,I as V,Y as v,C as Lt,h as It,c as j,j as Pt,p as Dt}from"./q-dc00917f.js";const M=()=>S(()=>import("./q-09c0da91.js"),["build/q-09c0da91.js","build/q-dc00917f.js"]),z=[[/^\/Skylight_Engineering\/$/,[M,()=>S(()=>import("./q-adb37e9c.js"),["build/q-adb37e9c.js","build/q-dc00917f.js"])]],[/^\/Skylight_Engineering\/contact\/?$/,[M,()=>S(()=>import("./q-81367d9f.js"),["build/q-81367d9f.js","build/q-dc00917f.js"])]],[/^\/Skylight_Engineering\/example\/?$/,[M,()=>S(()=>import("./q-09f89a59.js"),["build/q-09f89a59.js","build/q-dc00917f.js"])]]],J=[];const Y=!0;const At=({track:y})=>{const[n,f,E,i,C,s,_,m,g,l,o]=tt();async function b(){var $;const[u,q]=y(()=>[l.value,n.value]),ot=Ct(""),P=o.url,p=q?"form":u.type,nt=u.replaceState;let r,R,U=null,O;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let D=Q(z,J,Y,r.pathname);O=et();const A=R=await F(r,O,!0,q);if(!A){l.untrackedValue={type:p,dest:r};return}const x=A.href,h=new URL(x,r);at(h,r)||(r=h,D=Q(z,J,Y,r.pathname)),U=await D}if(U){const[D,A,x]=U,h=A,rt=h[h.length-1];o.prevUrl=P,o.url=r,o.params={...D},l.untrackedValue={type:p,dest:r};const L=it(R,o,h,ot);f.headings=rt.headings,f.menu=x,E.value=gt(h),i.links=L.links,i.meta=L.meta,i.styles=L.styles,i.title=L.title,i.frontmatter=L.frontmatter;{g.viewTransition!==!1&&(document.__q_view_transition__=!0);let B;p==="popstate"&&(B=G()),u.scroll&&(!u.forceReload||!W(r,P))&&(p==="link"||p==="popstate")&&(document.__q_scroll_restore__=()=>K(p,r,P,B));const X=R==null?void 0:R.loaders,t=window;if(X&&Object.assign(_,X),st.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),s(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const a=history.pushState,d=history.replaceState,k=e=>(e===null?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||w(document.documentElement),e);history.pushState=(e,c,H)=>(e=k(e),a.call(history,e,c,H)),history.replaceState=(e,c,H)=>(e=k(e),d.call(history,e,c,H))}document.body.addEventListener("click",a=>{if(a.defaultPrevented)return;const d=a.target.closest("a[href]");if(d&&!d.hasAttribute("preventdefault:click")){const k=d.getAttribute("href"),e=new URL(location.href),c=new URL(k,e);if(Z(c,e)&&W(c,e)){if(a.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),I({...w(document.documentElement),x:0,y:0}),location.reload();return}s(d.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const a=w(document.documentElement);I(a)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const a=w(document.documentElement);I(a),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,($=t._qCityBootstrap)==null||$.remove(),t._qCityBootstrap=void 0,lt.resolve()}if(p!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const a=w(document.documentElement);I(a)}ct(window,p,P,r,nt),bt(O).then(()=>{var d;const a=w(document.documentElement);I(a),t._qCityScrollEnabled=!0,o.isNavigating=!1,(d=m.r)==null||d.call(m)})}}}b()},kt=":root{view-transition-name:none}",Tt=async(y,n)=>{const[f,E,i,C]=tt(),{type:s="link",forceReload:_=y===void 0,replaceState:m=!1,scroll:g=!0}=typeof n=="object"?n:{forceReload:n},l=i.value.dest,o=y===void 0?l:ut(y,C.url);if(!Z(o,l)){location.href=o.href;return}if(!_&&W(o,l)){s==="link"&&o.href!==location.href&&history.pushState(null,"",o),K(s,o,new URL(location.href),G()),s==="popstate"&&(window._qCityScrollEnabled=!0);return}return i.value={type:s,dest:o,forceReload:_,replaceState:m,scroll:g},F(o,et()),Q(z,J,Y,o.pathname),f.value=void 0,C.isNavigating=!0,new Promise(b=>{E.r=b})},Ut=y=>{wt(j(()=>S(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=dt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const f=qt("url");if(!f)throw new Error("Missing Qwik URL Env Data");const E=new URL(f),i=T({url:E,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},s=Rt(T(n.response.loaders,{deep:!1})),_=V({type:"initial",dest:E,forceReload:!1,replaceState:!1,scroll:!0}),m=T(_t),g=T({headings:void 0,menu:void 0}),l=V(),o=n.response.action,b=o?n.response.loaders[o]:void 0,u=V(b?{id:o,data:n.response.formData,output:{result:b,status:n.response.status}}:void 0),q=j(()=>S(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[u,C,_,i]);return v(mt,g),v(pt,l),v(vt,m),v(yt,i),v(ft,q),v(ht,s),v(St,u),v(Et,_),Lt(j(()=>S(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[u,g,l,m,n,q,s,C,y,_,i])),It(Pt,null,3,"qY_0")},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:Dt,s_02wMImzEAbk:At,s_RPDJAz33WLA:kt,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:Tt},Symbol.toStringTag,{value:"Module"}));export{Dt as _hW,At as s_02wMImzEAbk,kt as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,Tt as s_fX0bDjeJa0E};
