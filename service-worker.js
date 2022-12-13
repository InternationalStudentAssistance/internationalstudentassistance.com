/* Qwik Service Worker */
const appBundles=[["q-0118dd64.js",[29]],["q-0334ddc2.js",[8,22,29,32],["nRyVBtbGKc8"]],["q-10fad389.js",[29],["ceU05TscGYE","N39ca0w8E8Y"]],["q-17d872be.js",[8,22,29,32],["a1JZ0Q0Q2Oc","gJoMUICXoUQ"]],["q-1890b2ff.js",[22,29],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-1be423b0.js",[29],["VkLNXphUh5s"]],["q-1d4e3858.js",[]],["q-365bf42d.js",[8,22,29,32],["0XKYzaR059E","MYUZ0j1uLsw","nG7I7RYG3JQ","RzhhZa265Yg"]],["q-3be348ee.js",[22,29,32],["DVD34gdl1HI","xYL1qOwPyDI"]],["q-454e3ee5.js",[29],["15p0cKUxgIE"]],["q-48093d07.js",[29],["ZWF9iD5WeLg"]],["q-4b82a6bf.js",[22,29],["dznIGAlrcag","OW4nu0I1yZ8","p4UiTwsJc7c","V0Y6u0VD1eY"]],["q-4eeb06c8.js",[8,22,29,32],["AxgWjrHdlAI","Uji08ORjXbE"]],["q-50741216.js",[8,22,29,32],["aGi0RpYNBO0","cA0sVHIkr5g","FwcO310HVAI","hEAI0ahViXM","LQM67VNl14k","OIBatobA0hE","wLg5o3ZkpC0"]],["q-5299dc7a.js",[8,22,29,32],["qdcTZflYyoQ"]],["q-5914ecfa.js",[8,22,29,32],["4w4c951ufB4","uYOSy7w7Zqw"]],["q-662cc26c.js",[29]],["q-6d9c99d1.js",[29],["T0AypnadAK0"]],["q-7631d660.js",[8,22,29,32],["FXvIDBSffO8"]],["q-78f57df2.js",[8,22,29,32],["fBMYiVf9fuU","LRxDkFa1EfU"]],["q-854d8550.js",[29]],["q-8dd95d8c.js",[8,22,29,32],["Og0xL34Zbvc"]],["q-a723aab3.js",[29],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-ae059814.js",[22,29],["zrbrqoaqXSY"]],["q-b8309744.js",[8,22,29,32],["9HNT04zd0Dk","WVvggdkUPdk"]],["q-b8476cf9.js",[22,29],["WmYC5H00wtI"]],["q-b87f625c.js",[22,29],["AKetNByE5TM"]],["q-d02e072d.js",[22,29],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-d18b09c2.js",[8,22,29,32],["7yLj4bxdI6c","s7JLZz7MCCQ"]],["q-d697c447.js",[]],["q-db73a5b9.js",[8,22,29,32],["7wCAiJVliNE"]],["q-e0b9ecaa.js",[29]],["q-e63898b8.js",[29]],["q-e6f30e74.js",[8,22,29,32],["nXOUbUnjTAo"]],["q-f09accc7.js",[29]]];
const libraryBundleIds=[34];
const linkBundles=[[/^\/$/,[20,5,32,8]],[/^\/flower\/?$/,[20,5,0,11]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
