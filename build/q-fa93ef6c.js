import{n as R,Y as b,K as U,O as Q,Q as u,o as q,k as T,s as S,_ as I,f as j,M as F}from"./q-055d7d9f.js";const N='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',nt=u("qc-s"),st=u("qc-c"),ot=u("qc-ic"),rt=u("qc-h"),H=u("qc-l"),M=u("qc-n"),at=u("qc-a"),it=`(function(){
  const l=location,c=l.pathname+l.search,t="_qCityPopstateFallback",o="_qCityHistory";window[t]||(window[t]=()=>{window[o]||c===(l.pathname+l.search)||l.reload()},setTimeout(()=>{addEventListener("popstate",window[t])},0))
})();
`,ct=T(S(()=>I(()=>import("./q-519387a5.js"),["build/q-519387a5.js","build/q-055d7d9f.js"]),"s_e0ssiDXoeAM")),w=new WeakMap,p=new Map,Y="qaction",g=t=>t.pathname+t.search+t.hash,y=(t,e)=>new URL(t,e.href),A=(t,e)=>t.origin===e.origin,x=(t,e)=>t.pathname+t.search===e.pathname+e.search,J=(t,e)=>t.pathname===e.pathname,D=(t,e)=>A(t,e)&&!x(t,e),K=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+Y+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},ft=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=y(s,e.url),o=y("",e.url);if(A(n,o))return g(n)}catch(n){console.error(n)}else if(t.reload)return g(y("",e.url));return null},lt=(t,e,s)=>{if(t.prefetch===!0&&e){const n=y(e,s.url);if(!J(n,y("",s.url)))return""}return null},ht=(t,e,s)=>{const n=t.location;D(n,e)&&(k(t,n,e),t.history.pushState("","",g(e))),t._qCityHistory||(t._qCityHistory=1,t.addEventListener("popstate",()=>{const o=t.location,r=y(s.value,o);D(o,r)&&(k(t,r,o),s.value=g(new URL(o.href)))}),t.removeEventListener("popstate",t._qCityPopstateFallback))},k=async(t,e,s)=>{const n=t.document,o=s.hash;if(x(e,s))e.hash!==o&&(await v(),o?P(n,o):t.scrollTo(0,0));else if(o)for(let r=0;r<24&&(await v(),!P(n,o));r++);else await v(),t.scrollTo(0,0)},v=()=>new Promise(t=>setTimeout(t,12)),P=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},V=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},dt=(t,e,s,n)=>{const o=B(),i={head:o,withLocale:a=>q(n,a),resolveValue:a=>{const c=a.__id;if(a.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const f=t.loaders[c];if(f instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return f},...e};for(let a=s.length-1;a>=0;a--){const c=s[a]&&s[a].head;c&&(typeof c=="function"?E(o,q(n,()=>c(i))):typeof c=="object"&&E(o,c))}return i.head},E=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),C(t.meta,e.meta),C(t.links,e.links),C(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},C=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},B=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ut=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const r=o[0].exec(n);if(r){const i=o[1],a=X(o[2],r),c=o[4],f=new Array(i.length),l=[],m=z(e,n);let h;return i.forEach((d,O)=>{L(d,l,W=>f[O]=W,s)}),L(m,l,d=>h=d==null?void 0:d.default,s),l.length>0&&await Promise.all(l),[a,f,h,c]}}return null},L=(t,e,s,n)=>{if(typeof t=="function"){const o=w.get(t);if(o)s(o);else{const r=t();typeof r.then=="function"?e.push(r.then(i=>{n!==!1&&w.set(t,i),s(i)})):r&&s(r)}}},z=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},X=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++){const o=(e==null?void 0:e[n+1])??"",r=o.endsWith("/")?o.slice(0,-1):o;s[t[n]]=decodeURIComponent(r)}return s},Z=async(t,e,s,n)=>{const o=t.pathname,r=t.search,i=K(o,r,n);let a;if(n||(a=p.get(i)),V({links:[o]}),!a){const c=G(n);n&&(n.data=void 0),a=fetch(i,c).then(f=>{const l=new URL(f.url);if(l.origin!==location.origin||!$(l.pathname)){location.href=l.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(m=>{const h=R(m,e);if(!h){location.href=t.href;return}if(s&&p.delete(i),h.redirect)location.href=h.redirect;else if(n){const d=h.loaders[n.id];n.resolve({status:f.status,result:d})}return h});location.href=t.href}),n||p.set(i,a)}return a.then(c=>(c||p.delete(i),c))},G=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},$=t=>t.endsWith(tt),tt="/q-data.json",yt=()=>b(H),pt=()=>b(M),gt=()=>U(Q("qwikcity")),mt=T(S(()=>I(()=>import("./q-b1557526.js"),["build/q-b1557526.js","build/q-055d7d9f.js"]),"s_TxCFOy819ag")),vt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(_||(_=innerWidth),(!e||e&&_<520)&&Z(new URL(t.href),t))};let _=0;const Ct=t=>j("script",{nonce:F(t,"nonce")},{dangerouslySetInnerHTML:N},null,3,"1Z_0"),_t=async function*(t,e,s){const n=t.getReader();try{let o="";const r=new TextDecoder;for(;!(s!=null&&s.aborted);){const i=await n.read();if(i.done)break;o+=r.decode(i.value,{stream:!0});const a=o.split(/\n/);o=a.pop();for(const c of a)yield await R(c,e)}}finally{n.releaseLock()}};export{st as C,rt as D,mt as Q,H as R,Ct as S,yt as a,lt as b,B as c,ot as d,M as e,nt as f,ft as g,gt as h,at as i,Z as j,p as k,ut as l,ht as m,it as n,ct as o,vt as p,_t as q,dt as r,g as t,pt as u};
