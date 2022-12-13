import{z as p,R as d,_ as h,K as c,G as I,T as _,b as W,j as M,E as w,h as N}from"./q-88bbb458.js";const B=`/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com
*/*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}[data-aw-toggle-menu] path{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.inline{display:inline}.dropdown:hover .dropdown-menu{display:block}
`,H=B,V='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',ct=w("qc-c"),lt=w("qc-ic"),Z=w("qc-h"),F=w("qc-l"),K=w("qc-n"),Y=p(d(()=>h(()=>import("./q-ef4ebabe.js"),["build/q-ef4ebabe.js","build/q-88bbb458.js"]),"s_AKetNByE5TM")),C=new WeakMap,Q=Symbol(),z=Symbol(),g=new Map,dt=async(t,e,o,n)=>{if(Array.isArray(t))for(const r of t){const i=r[0].exec(n);if(i){const a=r[1],s=X(r[2],i),b=r[4],v=new Array(a.length),u=[],q=G(e,n);let E;return a.forEach((f,O)=>{L(f,u,U=>v[O]=U,o)}),L(q,u,f=>E=f==null?void 0:f.default,o),u.length>0&&await Promise.all(u),[s,v,E,b]}}return null},L=(t,e,o,n)=>{if(typeof t=="function"){const r=C.get(t);if(r)o(r);else{const i=t();typeof i.then=="function"?e.push(i.then(a=>{n!==!1&&C.set(t,a),o(a)})):i&&o(i)}}},G=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const o=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(o)return o[1]}},X=(t,e)=>{const o={};if(t)for(let n=0;n<t.length;n++)o[t[n]]=e?e[n+1]:"";return o},ht=(t,e,o,n)=>{const r=J(),i={data:t?t.body:null,head:r,withLocale:a=>I(n,a),...e};for(let a=o.length-1;a>=0;a--){const s=o[a]&&o[a].head;s&&(typeof s=="function"?P(r,I(n,()=>s(i))):typeof s=="object"&&P(r,s))}return i.head},P=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),m(t.meta,e.meta),m(t.links,e.links),m(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},m=(t,e)=>{if(Array.isArray(e))for(const o of e){if(typeof o.key=="string"){const n=t.findIndex(r=>r.key===o.key);if(n>-1){t[n]=o;continue}}t.push(o)}},J=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ft=()=>_(Z),pt=()=>_(F),wt=()=>_(K),bt=()=>W(M("qwikcity")),x=t=>t.pathname+t.search+t.hash,l=(t,e)=>new URL(t,e.href),S=(t,e)=>t.origin===e.origin,j=(t,e)=>t.pathname+t.search===e.pathname+e.search,$=(t,e)=>t.pathname===e.pathname,T=(t,e)=>S(t,e)&&!j(t,e),tt=(t,e)=>t+(t.endsWith("/")?"":"/")+"q-data.json"+(e!=null?e:""),ut=(t,e)=>{const o=t.href;if(typeof o=="string"&&o.trim()!==""&&typeof t.target!="string")try{const n=l(o,e),r=l("",e);if(S(n,r))return x(n)}catch(n){console.error(n)}return null},gt=(t,e,o)=>{if(t.prefetch!==!1&&e){const n=l(e,o);if(!$(n,l("",o)))return""}return null},mt=(t,e)=>{const o=t.location,n=l(e.path,o);T(o,n)&&(A(t,o,n),t.history.pushState("","",x(n))),t[z]||(t[z]=1,t.addEventListener("popstate",()=>{const r=t.location,i=l(e.path,r);T(r,i)&&(A(t,i,r),e.path=x(r))}),t.removeEventListener("popstate",t[Q]))},A=async(t,e,o)=>{const n=t.document,r=o.hash;if(j(e,o))e.hash!==r&&(await y(),r?R(n,r):t.scrollTo(0,0));else if(r)for(let i=0;i<24&&(await y(),!R(n,r));i++);else await y(),t.scrollTo(0,0)},y=()=>new Promise(t=>setTimeout(t,12)),R=(t,e)=>{const o=e.slice(1),n=t.getElementById(o);return n&&n.scrollIntoView(),n},D=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},et=async(t,e)=>{const o=new URL(t),n=o.pathname,r=o.search,i=tt(n,r);let a=g.get(i);return D({links:[n]}),a||(a=fetch(i).then(s=>{if(s.ok&&(s.headers.get("content-type")||"").includes("json"))return s.json().then(b=>(D({bundles:b.prefetch}),e&&g.delete(i),b));g.delete(i)}),g.set(i,a)),a},ot=p(d(()=>h(()=>import("./q-0279ab56.js"),["build/q-0279ab56.js","build/q-88bbb458.js"]),"s_TxCFOy819ag"));d(()=>h(()=>import("./q-1f2e1906.js"),["build/q-1f2e1906.js","build/q-88bbb458.js"]),"s_WmYC5H00wtI");d(()=>h(()=>import("./q-3473f84a.js"),["build/q-3473f84a.js","build/q-88bbb458.js"]),"s_8gdLBszqbaM");const yt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(k||(k=innerWidth),(!e||e&&k<520)&&et(t.href))};let k=0;const nt=()=>c("script",{dangerouslySetInnerHTML:V}),rt=p(d(()=>h(()=>import("./q-1f029a79.js"),["build/q-1f029a79.js","build/q-88bbb458.js"]),"s_zrbrqoaqXSY")),it=()=>(N(d(()=>h(()=>Promise.resolve().then(()=>at),void 0),"s_hO3b5j0m2ZI")),c(ot,{children:[c("head",{children:[c("meta",{charSet:"utf-8"}),c("link",{rel:"manifest",href:"/manifest.json"}),c(rt,{},"35_0")]}),c("body",{lang:"en",children:[c(Y,{},"35_1"),c(nt,{},"35_2")]})]},"35_3")),at=Object.freeze(Object.defineProperty({__proto__:null,s_hO3b5j0m2ZI:H,s_3sccYCDd1Z0:it},Symbol.toStringTag,{value:"Module"}));export{lt as C,Z as D,Q as P,F as R,et as a,g as b,mt as c,J as d,ct as e,K as f,z as g,wt as h,pt as i,ut as j,gt as k,dt as l,ft as m,at as n,yt as p,ht as r,x as t,bt as u};
