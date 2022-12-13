/* Qwik Service Worker */
const appBundles=[["q-022f1930.js",[19,21,26,28],["a1JZ0Q0Q2Oc","gJoMUICXoUQ"]],["q-089ece45.js",[21,28],["AKetNByE5TM"]],["q-105610a0.js",[28],["ZWF9iD5WeLg"]],["q-109a6290.js",[21,28],["WmYC5H00wtI"]],["q-17ff307f.js",[21,28],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-1d4e3858.js",[]],["q-28fcd680.js",[19,21,26,28],["4w4c951ufB4","uYOSy7w7Zqw"]],["q-2af8e8c7.js",[28],["15p0cKUxgIE"]],["q-4a9da67b.js",[19,21,26,28],["0XKYzaR059E","MYUZ0j1uLsw","nG7I7RYG3JQ","RzhhZa265Yg"]],["q-5d68c913.js",[28]],["q-5f392e0a.js",[28],["T0AypnadAK0"]],["q-699f0068.js",[28],["VkLNXphUh5s"]],["q-6ef50bf8.js",[19,21,26,28],["7yLj4bxdI6c","s7JLZz7MCCQ"]],["q-6fd90165.js",[19,21,26,28],["7wCAiJVliNE"]],["q-7d8ce574.js",[28]],["q-8d43d187.js",[19,21,26,28],["FXvIDBSffO8"]],["q-9d3d0735.js",[21,28],["zrbrqoaqXSY"]],["q-a3a81f5b.js",[19,21,26,28],["qdcTZflYyoQ"]],["q-bbb0017d.js",[19,21,26,28],["9HNT04zd0Dk","WVvggdkUPdk"]],["q-c19d6d03.js",[21,26,28],["DVD34gdl1HI","xYL1qOwPyDI"]],["q-cac91253.js",[19,21,26,28],["nXOUbUnjTAo"]],["q-cbdd3977.js",[28],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-d3dcb465.js",[21,28],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-d5cd0b5e.js",[19,21,26,28],["nRyVBtbGKc8"]],["q-d5e47961.js",[19,21,26,28],["aGi0RpYNBO0","cA0sVHIkr5g","FwcO310HVAI","hEAI0ahViXM","LQM67VNl14k","OIBatobA0hE","wLg5o3ZkpC0"]],["q-d648bd76.js",[28]],["q-d9019f57.js",[28]],["q-dc622a32.js",[19,21,26,28],["Og0xL34Zbvc"]],["q-e2c98e28.js",[]],["q-e51714ea.js",[28]],["q-ef92d232.js",[19,21,26,28],["AxgWjrHdlAI","Uji08ORjXbE"]],["q-f3788cf7.js",[19,21,26,28],["fBMYiVf9fuU","LRxDkFa1EfU"]]];
const libraryBundleIds=[29];
const linkBundles=[[/^\/$/,[9,11,26,19]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
