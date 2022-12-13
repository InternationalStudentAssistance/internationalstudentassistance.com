/* Qwik Service Worker */
const appBundles=[["q-14f72a62.js",[12]],["q-1d4e3858.js",[]],["q-2357c6a0.js",[7,12,22,23],["7wCAiJVliNE"]],["q-24033524.js",[12,22],["WmYC5H00wtI"]],["q-25b2487b.js",[12],["ZWF9iD5WeLg"]],["q-36a97937.js",[7,12,22,23],["qdcTZflYyoQ"]],["q-3b5228bb.js",[12],["15p0cKUxgIE"]],["q-3d442165.js",[12,22,23],["DVD34gdl1HI","xYL1qOwPyDI"]],["q-3fa83f5a.js",[7,12,22,23],["aGi0RpYNBO0","cA0sVHIkr5g","FwcO310HVAI","hEAI0ahViXM","LQM67VNl14k","OIBatobA0hE","wLg5o3ZkpC0"]],["q-73b105a1.js",[12,22],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-8c8d8b6b.js",[7,12,22,23],["nXOUbUnjTAo"]],["q-8e39e0f6.js",[12]],["q-90fcfbe4.js",[]],["q-97dbb9de.js",[12,22],["zrbrqoaqXSY"]],["q-989f5d54.js",[12,22],["AKetNByE5TM"]],["q-9daaf1ff.js",[7,12,22,23],["0XKYzaR059E","MYUZ0j1uLsw","nG7I7RYG3JQ","RzhhZa265Yg"]],["q-9e1d2c98.js",[7,12,22,23],["FXvIDBSffO8"]],["q-a6bf26f2.js",[7,12,22,23],["AxgWjrHdlAI","Uji08ORjXbE"]],["q-ab01754a.js",[7,12,22,23],["4w4c951ufB4","uYOSy7w7Zqw"]],["q-b60f83de.js",[7,12,22,23],["fBMYiVf9fuU","LRxDkFa1EfU"]],["q-ba3c7c82.js",[12]],["q-bf873206.js",[7,12,22,23],["a1JZ0Q0Q2Oc","gJoMUICXoUQ"]],["q-cb8ca63b.js",[12],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-ccb0c186.js",[12]],["q-d6f73317.js",[12],["T0AypnadAK0"]],["q-e7bbbc10.js",[7,12,22,23],["9HNT04zd0Dk","WVvggdkUPdk"]],["q-ea630e08.js",[7,12,22,23],["7yLj4bxdI6c","s7JLZz7MCCQ"]],["q-f19cb2c4.js",[12],["VkLNXphUh5s"]],["q-f52f8aae.js",[7,12,22,23],["Og0xL34Zbvc"]],["q-f70b3e22.js",[7,12,22,23],["nRyVBtbGKc8"]],["q-f94c1f2f.js",[12]],["q-fc2c82ff.js",[12,22],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]]];
const libraryBundleIds=[20];
const linkBundles=[[/^\/$/,[0,27,23,7]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());