"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(C,p,r)=>{r.d(p,{c:()=>i});var c=r(4261),a=r(1086),l=r(8607);const i=(o,e)=>{let t,n;const f=(d,w,E)=>{if(typeof document>"u")return;const M=document.elementFromPoint(d,w);M&&e(M)&&!M.disabled?M!==t&&(s(),u(M,E)):s()},u=(d,w)=>{t=d,n||(n=t);const E=t;(0,c.w)(()=>E.classList.add("ion-activated")),w()},s=(d=!1)=>{if(!t)return;const w=t;(0,c.w)(()=>w.classList.remove("ion-activated")),d&&n!==t&&t.click(),t=void 0};return(0,l.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>f(d.currentX,d.currentY,a.a),onMove:d=>f(d.currentX,d.currentY,a.b),onEnd:()=>{s(!0),(0,a.h)(),n=void 0}})}},8438:(C,p,r)=>{r.d(p,{g:()=>a});var c=r(8476);const a=()=>{if(void 0!==c.w)return c.w.Capacitor}},5572:(C,p,r)=>{r.d(p,{c:()=>c,i:()=>a});const c=(l,i,o)=>"function"==typeof o?o(l,i):"string"==typeof o?l[o]===i[o]:Array.isArray(i)?i.includes(l):l===i,a=(l,i,o)=>void 0!==l&&(Array.isArray(l)?l.some(e=>c(e,i,o)):c(l,i,o))},3351:(C,p,r)=>{r.d(p,{g:()=>c});const c=(e,t,n,f,u)=>l(e[1],t[1],n[1],f[1],u).map(s=>a(e[0],t[0],n[0],f[0],s)),a=(e,t,n,f,u)=>u*(3*t*Math.pow(u-1,2)+u*(-3*n*u+3*n+f*u))-e*Math.pow(u-1,3),l=(e,t,n,f,u)=>o((f-=u)-3*(n-=u)+3*(t-=u)-(e-=u),3*n-6*t+3*e,3*t-3*e,e).filter(d=>d>=0&&d<=1),o=(e,t,n,f)=>{if(0===e)return((e,t,n)=>{const f=t*t-4*e*n;return f<0?[]:[(-t+Math.sqrt(f))/(2*e),(-t-Math.sqrt(f))/(2*e)]})(t,n,f);const u=(3*(n/=e)-(t/=e)*t)/3,s=(2*t*t*t-9*t*n+27*(f/=e))/27;if(0===u)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-u),-Math.sqrt(-u)];const d=Math.pow(s/2,2)+Math.pow(u/3,3);if(0===d)return[Math.pow(s/2,.5)-t/3];if(d>0)return[Math.pow(-s/2+Math.sqrt(d),1/3)-Math.pow(s/2+Math.sqrt(d),1/3)-t/3];const w=Math.sqrt(Math.pow(-u/3,3)),E=Math.acos(-s/(2*Math.sqrt(Math.pow(-u/3,3)))),M=2*Math.pow(w,1/3);return[M*Math.cos(E/3)-t/3,M*Math.cos((E+2*Math.PI)/3)-t/3,M*Math.cos((E+4*Math.PI)/3)-t/3]}},5083:(C,p,r)=>{r.d(p,{i:()=>c});const c=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(C,p,r)=>{r.r(p),r.d(p,{startFocusVisible:()=>i});const c="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=o=>{let e=[],t=!0;const n=o?o.shadowRoot:document,f=o||document.body,u=O=>{e.forEach(m=>m.classList.remove(c)),O.forEach(m=>m.classList.add(c)),e=O},s=()=>{t=!1,u([])},d=O=>{t=l.includes(O.key),t||u([])},w=O=>{if(t&&void 0!==O.composedPath){const m=O.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));u(m)}},E=()=>{n.activeElement===f&&u([])};return n.addEventListener("keydown",d),n.addEventListener("focusin",w),n.addEventListener("focusout",E),n.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("mousedown",s),{destroy:()=>{n.removeEventListener("keydown",d),n.removeEventListener("focusin",w),n.removeEventListener("focusout",E),n.removeEventListener("touchstart",s),n.removeEventListener("mousedown",s)},setFocus:u}}},1086:(C,p,r)=>{r.d(p,{I:()=>a,a:()=>t,b:()=>n,c:()=>e,d:()=>u,h:()=>f});var c=r(8438),a=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(a||{});const i={getEngine(){const s=(0,c.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const d=(0,c.g)();return"web"!==(null==d?void 0:d.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const d=this.getEngine();d&&d.impact({style:s.style})},notification(s){const d=this.getEngine();d&&d.notification({type:s.type})},selection(){this.impact({style:a.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},o=()=>i.available(),e=()=>{o()&&i.selection()},t=()=>{o()&&i.selectionStart()},n=()=>{o()&&i.selectionChanged()},f=()=>{o()&&i.selectionEnd()},u=s=>{o()&&i.impact(s)}},909:(C,p,r)=>{r.d(p,{I:()=>e,a:()=>u,b:()=>o,c:()=>w,d:()=>M,f:()=>s,g:()=>f,i:()=>n,p:()=>E,r:()=>O,s:()=>d});var c=r(467),a=r(4920),l=r(4929);const o="ion-content",e=".ion-content-scroll-host",t=`${o}, ${e}`,n=m=>"ION-CONTENT"===m.tagName,f=function(){var m=(0,c.A)(function*(h){return n(h)?(yield new Promise(_=>(0,a.c)(h,_)),h.getScrollElement()):h});return function(_){return m.apply(this,arguments)}}(),u=m=>m.querySelector(e)||m.querySelector(t),s=m=>m.closest(t),d=(m,h)=>n(m)?m.scrollToTop(h):Promise.resolve(m.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),w=(m,h,_,b)=>n(m)?m.scrollByPoint(h,_,b):Promise.resolve(m.scrollBy({top:_,left:h,behavior:b>0?"smooth":"auto"})),E=m=>(0,l.b)(m,o),M=m=>{if(n(m)){const _=m.scrollY;return m.scrollY=!1,_}return m.style.setProperty("overflow","hidden"),!0},O=(m,h)=>{n(m)?m.scrollY=h:m.style.removeProperty("overflow")}},3992:(C,p,r)=>{r.d(p,{a:()=>c,b:()=>w,c:()=>t,d:()=>E,e:()=>v,f:()=>e,g:()=>M,h:()=>l,i:()=>a,j:()=>g,k:()=>L,l:()=>n,m:()=>s,n:()=>O,o:()=>u,p:()=>o,q:()=>i,r:()=>S,s:()=>x,t:()=>d,u:()=>_,v:()=>b,w:()=>f,x:()=>m,y:()=>h});const c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",S="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(C,p,r)=>{r.d(p,{c:()=>i,g:()=>o});var c=r(8476),a=r(4920),l=r(4929);const i=(t,n,f)=>{let u,s;if(void 0!==c.w&&"MutationObserver"in c.w){const M=Array.isArray(n)?n:[n];u=new MutationObserver(O=>{for(const m of O)for(const h of m.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&M.includes(h.slot))return f(),void(0,a.r)(()=>d(h))}),u.observe(t,{childList:!0,subtree:!0})}const d=M=>{var O;s&&(s.disconnect(),s=void 0),s=new MutationObserver(m=>{f();for(const h of m)for(const _ of h.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===n&&E()}),s.observe(null!==(O=M.parentElement)&&void 0!==O?O:M,{subtree:!0,childList:!0})},E=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),E()}}},o=(t,n,f)=>{const u=null==t?0:t.toString().length,s=e(u,n);if(void 0===f)return s;try{return f(u,n)}catch(d){return(0,l.a)("Exception in provided `counterFormatter`.",d),s}},e=(t,n)=>`${t} / ${n}`},1622:(C,p,r)=>{r.r(p),r.d(p,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>S,keyboardDidClose:()=>m,keyboardDidOpen:()=>M,keyboardDidResize:()=>O,resetKeyboardAssist:()=>u,setKeyboardClose:()=>E,setKeyboardOpen:()=>w,startKeyboardAssist:()=>s,trackViewportChanges:()=>b});var c=r(4379);r(8438),r(8476);const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},n={},f=!1;const u=()=>{t={},n={},f=!1},s=g=>{if(c.K.getEngine())d(g);else{if(!g.visualViewport)return;n=S(g.visualViewport),g.visualViewport.onresize=()=>{b(g),M()||O(g)?w(g):m(g)&&E(g)}}},d=g=>{g.addEventListener("keyboardDidShow",L=>w(g,L)),g.addEventListener("keyboardDidHide",()=>E(g))},w=(g,L)=>{h(g,L),f=!0},E=g=>{_(g),f=!1},M=()=>!f&&t.width===n.width&&(t.height-n.height)*n.scale>150,O=g=>f&&!m(g),m=g=>f&&n.height===g.innerHeight,h=(g,L)=>{const v=new CustomEvent(i,{detail:{keyboardHeight:L?L.keyboardHeight:g.innerHeight-n.height}});g.dispatchEvent(v)},_=g=>{const L=new CustomEvent(o);g.dispatchEvent(L)},b=g=>{t=Object.assign({},n),n=S(g.visualViewport)},S=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(C,p,r)=>{r.d(p,{K:()=>i,a:()=>l});var c=r(8438),a=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(a||{}),l=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(l||{});const i={getEngine(){const o=(0,c.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(e=>{if(e.code!==a.Unimplemented)throw e}):Promise.resolve(void 0)}}},4731:(C,p,r)=>{r.d(p,{c:()=>e});var c=r(467),a=r(8476),l=r(4379);const i=t=>{if(void 0===a.d||t===l.a.None||void 0===t)return null;const n=a.d.querySelector("ion-app");return null!=n?n:a.d.body},o=t=>{const n=i(t);return null===n?0:n.clientHeight},e=function(){var t=(0,c.A)(function*(n){let f,u,s,d;const w=function(){var h=(0,c.A)(function*(){const _=yield l.K.getResizeMode(),b=void 0===_?void 0:_.mode;f=()=>{void 0===d&&(d=o(b)),s=!0,E(s,b)},u=()=>{s=!1,E(s,b)},null==a.w||a.w.addEventListener("keyboardWillShow",f),null==a.w||a.w.addEventListener("keyboardWillHide",u)});return function(){return h.apply(this,arguments)}}(),E=(h,_)=>{n&&n(h,M(_))},M=h=>{if(0===d||d===o(h))return;const _=i(h);return null!==_?new Promise(b=>{const g=new ResizeObserver(()=>{_.clientHeight===d&&(g.disconnect(),b())});g.observe(_)}):void 0};return yield w(),{init:w,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",f),null==a.w||a.w.removeEventListener("keyboardWillHide",u),f=u=void 0},isKeyboardVisible:()=>s}});return function(f){return t.apply(this,arguments)}}()},7838:(C,p,r)=>{r.d(p,{c:()=>a});var c=r(467);const a=()=>{let l;return{lock:function(){var o=(0,c.A)(function*(){const e=l;let t;return l=new Promise(n=>t=n),void 0!==e&&(yield e),t});return function(){return o.apply(this,arguments)}}()}}},9001:(C,p,r)=>{r.d(p,{c:()=>l});var c=r(8476),a=r(4920);const l=(i,o,e)=>{let t;const n=()=>!(void 0===o()||void 0!==i.label||null===e()),u=()=>{const d=o();if(void 0===d)return;if(!n())return void d.style.removeProperty("width");const w=e().scrollWidth;if(0===w&&null===d.offsetParent&&void 0!==c.w&&"IntersectionObserver"in c.w){if(void 0!==t)return;const E=t=new IntersectionObserver(M=>{1===M[0].intersectionRatio&&(u(),E.disconnect(),t=void 0)},{threshold:.01,root:i});E.observe(d)}else d.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{n()&&(0,a.r)(()=>{u()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(C,p,r)=>{r.d(p,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(l,i,o)=>{const e=l*i/o-l+"ms",t=2*Math.PI*i/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(l,i,o)=>{const e=i/o,t=l*e-l+"ms",n=2*Math.PI*e;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,i,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,i,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})}}},7166:(C,p,r)=>{r.r(p),r.d(p,{createSwipeBackGesture:()=>o});var c=r(4920),a=r(5083),l=r(8607);r(1970);const o=(e,t,n,f,u)=>{const s=e.ownerDocument.defaultView;let d=(0,a.i)(e);const E=_=>d?-_.deltaX:_.deltaX;return(0,l.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:_=>(d=(0,a.i)(e),(_=>{const{startX:S}=_;return d?S>=s.innerWidth-50:S<=50})(_)&&t()),onStart:n,onMove:_=>{const S=E(_)/s.innerWidth;f(S)},onEnd:_=>{const b=E(_),S=s.innerWidth,g=b/S,L=(_=>d?-_.velocityX:_.velocityX)(_),v=L>=0&&(L>.2||b>S/2),P=(v?1-g:g)*S;let D=0;if(P>5){const y=P/Math.abs(L);D=Math.min(y,540)}u(v,g<=0?.01:(0,c.j)(0,g,.9999),D)}})}},2935:(C,p,r)=>{r.d(p,{w:()=>c});const c=(i,o,e)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{e(a(n,o))});return t.observe(i,{childList:!0,subtree:!0}),t},a=(i,o)=>{let e;return i.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)e=l(t.addedNodes[n],o)||e}),e},l=(i,o)=>{if(1!==i.nodeType)return;const e=i;return(e.tagName===o.toUpperCase()?[e]:Array.from(e.querySelectorAll(o))).find(n=>n.value===e.value)}},920:(C,p,r)=>{r.r(p),r.d(p,{SignUpPageModule:()=>x});var c=r(177),a=r(4341),l=r(4742),i=r(4964),o=r(467),e=r(3953),t=r(7133),n=r(6552),f=r(9381),u=r(3683),s=r(9981);function d(v,T){1&v&&(e.j41(0,"div"),e.EFF(1,"El nombre es requerido"),e.k0s())}function w(v,T){1&v&&(e.j41(0,"div"),e.EFF(1,"El nombre debe tener almenos 4 caracteres"),e.k0s())}function E(v,T){if(1&v&&(e.j41(0,"div",11),e.DNE(1,d,2,0,"div",12)(2,w,2,0,"div",12),e.k0s()),2&v){const P=e.XpG();e.R7$(),e.Y8G("ngIf",null==P.form.controls.name.errors?null:P.form.controls.name.errors.required),e.R7$(),e.Y8G("ngIf",null==P.form.controls.name.errors?null:P.form.controls.name.errors.minlenght)}}function M(v,T){1&v&&(e.j41(0,"div"),e.EFF(1,"El email es requerido"),e.k0s())}function O(v,T){1&v&&(e.j41(0,"div"),e.EFF(1,"Ingrese un email valido"),e.k0s())}function m(v,T){if(1&v&&(e.j41(0,"div",11),e.DNE(1,M,2,0,"div",12)(2,O,2,0,"div",12),e.k0s()),2&v){const P=e.XpG();e.R7$(),e.Y8G("ngIf",null==P.form.controls.email.errors?null:P.form.controls.email.errors.required),e.R7$(),e.Y8G("ngIf",null==P.form.controls.email.errors?null:P.form.controls.email.errors.email)}}function h(v,T){1&v&&(e.j41(0,"div"),e.EFF(1,"El constrase\xf1a es requerido"),e.k0s())}function _(v,T){if(1&v&&(e.j41(0,"div",11),e.DNE(1,h,2,0,"div",12),e.k0s()),2&v){const P=e.XpG();e.R7$(),e.Y8G("ngIf",null==P.form.controls.password.errors?null:P.form.controls.password.errors.required)}}const S=[{path:"",component:(()=>{var v;class T{constructor(){this.form=new a.gE({uid:new a.MJ(""),email:new a.MJ("",[a.k0.required,a.k0.email]),password:new a.MJ("",[a.k0.required]),name:new a.MJ("",[a.k0.required,a.k0.minLength(4)])}),this.firebaseService=(0,e.WQX)(t.f),this.utilsService=(0,e.WQX)(n.T)}ngOnInit(){}submit(){var D=this;return(0,o.A)(function*(){if(D.form.valid){const y=yield D.utilsService.loading();yield y.present(),D.firebaseService.signUp(D.form.value).then(function(){var k=(0,o.A)(function*(B){yield D.firebaseService.updateUser(D.form.value.name);let A=B.user.uid;D.form.controls.uid.setValue(A),D.setUserInfo(A)});return function(B){return k.apply(this,arguments)}}()).catch(k=>{console.log(k),D.utilsService.presentToast({message:k.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{y.dismiss()})}})()}setUserInfo(D){var y=this;return(0,o.A)(function*(){if(y.form.valid){const k=yield y.utilsService.loading();yield k.present();let B=`users/${D}`;delete y.form.value.password,y.firebaseService.setDocument(B,y.form.value).then(function(){var A=(0,o.A)(function*(R){y.utilsService.saveInLocalStorage("user",y.form.value),y.utilsService.routerLink("/main/home"),y.form.reset()});return function(R){return A.apply(this,arguments)}}()).catch(A=>{console.log(A),y.utilsService.presentToast({message:A.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{k.dismiss()})}})()}}return(v=T).\u0275fac=function(D){return new(D||v)},v.\u0275cmp=e.VBU({type:v,selectors:[["app-sign-up"]],decls:19,vars:8,consts:[["backButton","/auth","title","Registro"],[1,"ion-padding"],[1,""],[1,"auth-form",3,"ngSubmit","keypress.enter","formGroup"],[1,"ion-text-center"],["autocomplete","name","icon","person-outline","type","text","label","Nombre",3,"control"],["class","validators",4,"ngIf"],["autocomplete","email","icon","mail-outline","type","email","label","Email",3,"control"],["icon","lock-closed-outline","type","password","label","Contrase\xf1a",3,"control"],["expand","block","mode","md","type","submit",1,"auth-submit","ion-margin",3,"disabled"],["slot","end","name","person-add-outline"],[1,"validators"],[4,"ngIf"]],template:function(D,y){1&D&&(e.nrm(0,"app-header",0)(1,"br")(2,"br"),e.j41(3,"ion-content",1)(4,"div",2)(5,"form",3),e.bIt("ngSubmit",function(){return y.submit()})("keypress.enter",function(){return y.submit()}),e.j41(6,"div",4),e.nrm(7,"app-logo"),e.k0s(),e.nrm(8,"app-custom-input",5),e.DNE(9,E,3,2,"div",6),e.nrm(10,"app-custom-input",7),e.DNE(11,m,3,2,"div",6),e.nrm(12,"app-custom-input",8),e.DNE(13,_,2,1,"div",6),e.nrm(14,"br")(15,"br"),e.j41(16,"ion-button",9),e.EFF(17," Registrate "),e.nrm(18,"ion-icon",10),e.k0s()()()()),2&D&&(e.R7$(5),e.Y8G("formGroup",y.form),e.R7$(3),e.Y8G("control",y.form.controls.name),e.R7$(),e.Y8G("ngIf",y.form.controls.name.errors&&y.form.controls.name.touched),e.R7$(),e.Y8G("control",y.form.controls.email),e.R7$(),e.Y8G("ngIf",y.form.controls.email.errors&&y.form.controls.email.touched),e.R7$(),e.Y8G("control",y.form.controls.password),e.R7$(),e.Y8G("ngIf",y.form.controls.password.errors&&y.form.controls.password.touched),e.R7$(3),e.Y8G("disabled",y.form.invalid))},dependencies:[c.bT,a.qT,a.cb,l.Jm,l.W9,l.iq,f.l,u.H,s.Z,a.j4]}),T})()}];let g=(()=>{var v;class T{}return(v=T).\u0275fac=function(D){return new(D||v)},v.\u0275mod=e.$C({type:v}),v.\u0275inj=e.G2t({imports:[i.iI.forChild(S),i.iI]}),T})();var L=r(3887);let x=(()=>{var v;class T{}return(v=T).\u0275fac=function(D){return new(D||v)},v.\u0275mod=e.$C({type:v}),v.\u0275inj=e.G2t({imports:[c.MD,a.YN,l.bv,g,L.G]}),T})()},8397:(C,p,r)=>{r.d(p,{Z:()=>e});var c=r(3953),a=r(177),l=r(4742),i=r(4964);function o(t,n){if(1&t&&(c.j41(0,"ion-tab-button",2),c.nrm(1,"ion-icon",3),c.j41(2,"ion-label"),c.EFF(3),c.k0s()()),2&t){const f=n.$implicit;c.Y8G("routerLink",f.url),c.R7$(),c.Y8G("name",f.icon),c.R7$(2),c.JRh(f.title)}}let e=(()=>{var t;class n{constructor(){this.pages=[{title:"Scan",url:"/scan",icon:"scan-outline"},{title:"Historial",url:"/historial",icon:"time-outline"}]}ngOnInit(){}}return(t=n).\u0275fac=function(u){return new(u||t)},t.\u0275cmp=c.VBU({type:t,selectors:[["app-menu"]],decls:6,vars:1,consts:[["slot","bottom"],["routerDirection","root",3,"routerLink",4,"ngFor","ngForOf"],["routerDirection","root",3,"routerLink"],[3,"name"]],template:function(u,s){1&u&&(c.j41(0,"ion-footer")(1,"ion-toolbar")(2,"ion-tabs")(3,"ion-tab-bar",0),c.DNE(4,o,4,3,"ion-tab-button",1),c.k0s(),c.nrm(5,"ion-router-outlet"),c.k0s()()()),2&u&&(c.R7$(4),c.Y8G("ngForOf",s.pages))},dependencies:[a.Sq,l.M0,l.iq,l.he,l.Jq,l.qW,l.ai,l.p4,l.Rg,l.N7,i.Wk]}),n})()}}]);