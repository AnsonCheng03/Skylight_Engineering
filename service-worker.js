/* Qwik Service Worker */
const appBundles=[["q-1164aac7.js",[10,11],["e0ssiDXoeAM"]],["q-182266b9.js",[4,10,11],["xYL1qOwPyDI"]],["q-18e87dbb.js",[10,11],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-1ca2ae63.js",[10,11],["eBQ0vFsFKsk"]],["q-201be289.js",[10,11]],["q-226c122f.js",[10,11],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-2bdb7896.js",[10,11],["ayOAyFQWvdU","jYyS9IWa9Yk"]],["q-2f5bac76.js",[11]],["q-3346878e.js",[10,11],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-398bbc3b.js",[11],["VkLNXphUh5s"]],["q-42ffb0ef.js",[11]],["q-448d71e3.js",[]],["q-45124364.js",[11],["A5bZC7WO00A"]],["q-50be7216.js",[11]],["q-60d2fa44.js",[11]],["q-61e731e2.js",[],["DyVc0YBIqQU"]],["q-6eee5ded.js",[10,11],["dle9cTZNTpw"]],["q-6fea9628.js",[11],["3lb9EjxI5sA"]],["q-7019d657.js",[10,11],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-7ae51a75.js",[11],["BPhRZzC0M9U","c4GS49xCdTA","EVasqvu2VkQ","fBNGZ46JMLQ","K4z8nDmX6Us","KB6BiqC2icE","l6wsIrhHw4Q","nSS7s47PUtk","Q6pH9Kv8TFg","qwiP7x4uvt0","w6kNbvlg4RM","WvVnaluU6nc","YlKKYEfWog0"]],["q-8ea06850.js",[]],["q-b0156406.js",[10,11],["ceU05TscGYE"]],["q-b7df2be9.js",[10,11],["3sccYCDd1Z0"]],["q-d43c5b0a.js",[11],["Oiogz3xVO64"]],["q-dd24c50f.js",[10,11],["wOIPfiQ04l4"]],["q-de2034c9.js",[10,11],["M0MhZOWBKK8"]],["q-e79b5f91.js",[11]],["q-f302d6ed.js",[11]],["q-fe94e50e.js",[11],["PZswLDq46H4"]]];
const libraryBundleIds=[2];
const linkBundles=[[/^\/Skylight_Engineering\/$/,[26,9,4,1]],[/^\/Skylight_Engineering\/contact\/?$/,[26,9,7,25]],[/^\/Skylight_Engineering\/example\/?$/,[26,9,27,28]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
