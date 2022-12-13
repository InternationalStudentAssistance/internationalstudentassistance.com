/* Qwik Service Worker */
const appBundles=[["q-14e40945.js",[18]],["q-160a055f.js",[18],["ZWF9iD5WeLg"]],["q-175a5870.js",[18,27,28,31],["7yLj4bxdI6c","s7JLZz7MCCQ"]],["q-1787e74c.js",[18,27,28,31],["a1JZ0Q0Q2Oc","gJoMUICXoUQ"]],["q-1813bcc1.js",[18,27,28,31],["nRyVBtbGKc8"]],["q-1d4e3858.js",[]],["q-2a8ad6e5.js",[18,27],["WmYC5H00wtI"]],["q-2ccb6f69.js",[18],["T0AypnadAK0"]],["q-306b00dc.js",[18,27,28,31],["7wCAiJVliNE"]],["q-4b50e856.js",[18,27],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-51e8d326.js",[18,27,28,31],["qdcTZflYyoQ"]],["q-5a75bc22.js",[18,27,28,31],["Og0xL34Zbvc"]],["q-5aabc21d.js",[18,27],["AKetNByE5TM"]],["q-62ce55bf.js",[18,27,28,31],["fBMYiVf9fuU","LRxDkFa1EfU"]],["q-6cd2aa41.js",[18,27,28,31],["9HNT04zd0Dk","WVvggdkUPdk"]],["q-7341991e.js",[18,27,28,31],["aGi0RpYNBO0","cA0sVHIkr5g","FwcO310HVAI","hEAI0ahViXM","LQM67VNl14k","OIBatobA0hE","wLg5o3ZkpC0"]],["q-735f4839.js",[18],["15p0cKUxgIE"]],["q-75dbb513.js",[18,27,28,31],["4w4c951ufB4","uYOSy7w7Zqw"]],["q-7f8da6dc.js",[]],["q-89674ede.js",[18,27,28,31],["0XKYzaR059E","MYUZ0j1uLsw","nG7I7RYG3JQ","RzhhZa265Yg"]],["q-9cc3fd52.js",[18,27,28,31],["nXOUbUnjTAo"]],["q-a83c2b49.js",[18]],["q-ab9b7b66.js",[18,27,28,31],["FXvIDBSffO8"]],["q-b711674c.js",[18],["VkLNXphUh5s"]],["q-c4f0b32b.js",[18,27,28,31],["AxgWjrHdlAI","Uji08ORjXbE"]],["q-d467a00f.js",[18]],["q-d5ae27e3.js",[18,27],["zrbrqoaqXSY"]],["q-e0c40928.js",[18],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-e460b72d.js",[18,27,31],["DVD34gdl1HI","xYL1qOwPyDI"]],["q-e991361b.js",[18,27],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-f6bf5b19.js",[18]],["q-fea0e81d.js",[18]]];
const libraryBundleIds=[30];
const linkBundles=[[/^\/$/,[25,23,31,28]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
