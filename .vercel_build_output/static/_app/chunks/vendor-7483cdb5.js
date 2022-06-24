function _e(){}const Ar=n=>n;function kl(n,e){for(const t in e)n[t]=e[t];return n}function Wo(n){return n()}function Es(){return Object.create(null)}function Ee(n){n.forEach(Wo)}function xe(n){return typeof n=="function"}function Sr(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let xn;function d_(n,e){return xn||(xn=document.createElement("a")),xn.href=e,n===xn.href}function Al(n){return Object.keys(n).length===0}function zo(n,...e){if(n==null)return _e;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function h_(n,e,t){n.$$.on_destroy.push(zo(e,t))}function f_(n,e,t,i){if(n){const r=Go(n,e,t,i);return n[0](r)}}function Go(n,e,t,i){return n[1]&&i?kl(t.ctx.slice(),n[1](i(e))):t.ctx}function p_(n,e,t,i){if(n[2]&&i){const r=n[2](i(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function m_(n,e,t,i,r,s){if(r){const o=Go(e,t,i,s);n.p(o,r)}}function g_(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function __(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function y_(n){return n==null?"":n}function v_(n,e,t){return n.set(t),e}const xo=typeof window!="undefined";let ri=xo?()=>window.performance.now():()=>Date.now(),Rr=xo?n=>requestAnimationFrame(n):_e;const qt=new Set;function Ko(n){qt.forEach(e=>{e.c(n)||(qt.delete(e),e.f())}),qt.size!==0&&Rr(Ko)}function Nr(n){let e;return qt.size===0&&Rr(Ko),{promise:new Promise(t=>{qt.add(e={c:n,f:t})}),abort(){qt.delete(e)}}}let Si=!1;function Sl(){Si=!0}function Rl(){Si=!1}function Nl(n,e,t,i){for(;n<e;){const r=n+(e-n>>1);t(r)<=i?n=r+1:e=r}return n}function Ol(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&c.push(d)}e=c}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,d=(r>0&&e[t[r]].claim_order<=l?r+1:Nl(1,r,h=>e[t[h]].claim_order,l))-1;i[c]=t[d]+1;const u=d+1;t[u]=c,r=Math.max(u,r)}const s=[],o=[];let a=e.length-1;for(let c=t[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const d=l<s.length?s[l]:null;n.insertBefore(o[c],d)}}function Pl(n,e){n.appendChild(e)}function Yo(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Dl(n){const e=q("style");return Cl(Yo(n),e),e.sheet}function Cl(n,e){Pl(n.head||n,e)}function x(n,e){if(Si){for(Ol(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function W(n,e,t){Si&&!t?x(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function N(n){n.parentNode.removeChild(n)}function Jo(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function q(n){return document.createElement(n)}function Ll(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function se(n){return document.createTextNode(n)}function Gt(){return se(" ")}function si(){return se("")}function z(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function kn(n){return function(e){return e.preventDefault(),n.call(this,e)}}function T(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function w_(n,e){for(const t in e)T(n,t,e[t])}function H(n){return Array.from(n.childNodes)}function Ml(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function Xo(n,e,t,i,r=!1){Ml(n);const s=(()=>{for(let o=n.claim_info.last_index;o<n.length;o++){const a=n[o];if(e(a)){const c=t(a);return c===void 0?n.splice(o,1):n[o]=c,r||(n.claim_info.last_index=o),a}}for(let o=n.claim_info.last_index-1;o>=0;o--){const a=n[o];if(e(a)){const c=t(a);return c===void 0?n.splice(o,1):n[o]=c,r?c===void 0&&n.claim_info.last_index--:n.claim_info.last_index=o,a}}return i()})();return s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,s}function Qo(n,e,t,i){return Xo(n,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];t[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function K(n,e,t){return Qo(n,e,t,q)}function b_(n,e,t){return Qo(n,e,t,Ll)}function pe(n,e){return Xo(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>se(e),!0)}function xt(n){return pe(n," ")}function we(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function I_(n,e){n.value=e==null?"":e}function E_(n,e,t,i){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function T_(n,e){for(let t=0;t<n.options.length;t+=1){const i=n.options[t];if(i.__value===e){i.selected=!0;return}}n.selectedIndex=-1}function k_(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function S(n,e,t){n.classList[t?"add":"remove"](e)}function Zo(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}function A_(n,e=document.body){return Array.from(e.querySelectorAll(n))}const oi=new Map;let ai=0;function Ul(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Fl(n,e){const t={stylesheet:Dl(e),rules:{}};return oi.set(n,t),t}function cr(n,e,t,i,r,s,o,a=0){const c=16.666/i;let l=`{
`;for(let _=0;_<=1;_+=c){const v=e+(t-e)*s(_);l+=_*100+`%{${o(v,1-v)}}
`}const d=l+`100% {${o(t,1-t)}}
}`,u=`__svelte_${Ul(d)}_${a}`,h=Yo(n),{stylesheet:m,rules:f}=oi.get(h)||Fl(h,n);f[u]||(f[u]=!0,m.insertRule(`@keyframes ${u} ${d}`,m.cssRules.length));const g=n.style.animation||"";return n.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${r}ms 1 both`,ai+=1,u}function lr(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=t.length-i.length;r&&(n.style.animation=i.join(", "),ai-=r,ai||Vl())}function Vl(){Rr(()=>{ai||(oi.forEach(n=>{const{stylesheet:e}=n;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);n.rules={}}),oi.clear())})}let An;function yn(n){An=n}function Fn(){if(!An)throw new Error("Function called outside component initialization");return An}function S_(n){Fn().$$.on_mount.push(n)}function R_(n){Fn().$$.after_update.push(n)}function Bl(){const n=Fn();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const r=Zo(e,t);i.slice().forEach(s=>{s.call(n,r)})}}}function N_(n,e){Fn().$$.context.set(n,e)}function O_(n){return Fn().$$.context.get(n)}const pn=[],ur=[],Zn=[],dr=[],$o=Promise.resolve();let hr=!1;function ea(){hr||(hr=!0,$o.then(ta))}function P_(){return ea(),$o}function Sn(n){Zn.push(n)}function D_(n){dr.push(n)}const Xi=new Set;let Kn=0;function ta(){const n=An;do{for(;Kn<pn.length;){const e=pn[Kn];Kn++,yn(e),ql(e.$$)}for(yn(null),pn.length=0,Kn=0;ur.length;)ur.pop()();for(let e=0;e<Zn.length;e+=1){const t=Zn[e];Xi.has(t)||(Xi.add(t),t())}Zn.length=0}while(pn.length);for(;dr.length;)dr.pop()();hr=!1,Xi.clear(),yn(n)}function ql(n){if(n.fragment!==null){n.update(),Ee(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Sn)}}let dn;function na(){return dn||(dn=Promise.resolve(),dn.then(()=>{dn=null})),dn}function vn(n,e,t){n.dispatchEvent(Zo(`${e?"intro":"outro"}${t}`))}const $n=new Set;let He;function jl(){He={r:0,c:[],p:He}}function Hl(){He.r||Ee(He.c),He=He.p}function jt(n,e){n&&n.i&&($n.delete(n),n.i(e))}function ci(n,e,t,i){if(n&&n.o){if($n.has(n))return;$n.add(n),He.c.push(()=>{$n.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}const ia={duration:0};function C_(n,e,t){let i=e(n,t),r=!1,s,o,a=0;function c(){s&&lr(n,s)}function l(){const{delay:u=0,duration:h=300,easing:m=Ar,tick:f=_e,css:g}=i||ia;g&&(s=cr(n,0,1,h,u,m,g,a++)),f(0,1);const _=ri()+u,v=_+h;o&&o.abort(),r=!0,Sn(()=>vn(n,!0,"start")),o=Nr(D=>{if(r){if(D>=v)return f(1,0),vn(n,!0,"end"),c(),r=!1;if(D>=_){const O=m((D-_)/h);f(O,1-O)}}return r})}let d=!1;return{start(){d||(d=!0,lr(n),xe(i)?(i=i(),na().then(l)):l())},invalidate(){d=!1},end(){r&&(c(),r=!1)}}}function L_(n,e,t,i){let r=e(n,t),s=i?0:1,o=null,a=null,c=null;function l(){c&&lr(n,c)}function d(h,m){const f=h.b-s;return m*=Math.abs(f),{a:s,b:h.b,d:f,duration:m,start:h.start,end:h.start+m,group:h.group}}function u(h){const{delay:m=0,duration:f=300,easing:g=Ar,tick:_=_e,css:v}=r||ia,D={start:ri()+m,b:h};h||(D.group=He,He.r+=1),o||a?a=D:(v&&(l(),c=cr(n,s,h,f,m,g,v)),h&&_(0,1),o=d(D,f),Sn(()=>vn(n,h,"start")),Nr(O=>{if(a&&O>a.start&&(o=d(a,f),a=null,vn(n,o.b,"start"),v&&(l(),c=cr(n,s,o.b,o.duration,0,g,r.css))),o){if(O>=o.end)_(s=o.b,1-s),vn(n,o.b,"end"),a||(o.b?l():--o.group.r||Ee(o.group.c)),o=null;else if(O>=o.start){const R=O-o.start;s=o.a+o.d*g(R/o.duration),_(s,1-s)}}return!!(o||a)}))}return{run(h){xe(r)?na().then(()=>{r=r(),u(h)}):u(h)},end(){l(),o=a=null}}}function M_(n,e){n.d(1),e.delete(n.key)}function U_(n,e){ci(n,1,1,()=>{e.delete(n.key)})}function F_(n,e,t,i,r,s,o,a,c,l,d,u){let h=n.length,m=s.length,f=h;const g={};for(;f--;)g[n[f].key]=f;const _=[],v=new Map,D=new Map;for(f=m;f--;){const A=u(r,s,f),U=t(A);let P=o.get(U);P?i&&P.p(A,e):(P=l(U,A),P.c()),v.set(U,_[f]=P),U in g&&D.set(U,Math.abs(f-g[U]))}const O=new Set,R=new Set;function V(A){jt(A,1),A.m(a,d),o.set(A.key,A),d=A.first,m--}for(;h&&m;){const A=_[m-1],U=n[h-1],P=A.key,L=U.key;A===U?(d=A.first,h--,m--):v.has(L)?!o.has(P)||O.has(P)?V(A):R.has(L)?h--:D.get(P)>D.get(L)?(R.add(P),V(A)):(O.add(L),h--):(c(U,o),h--)}for(;h--;){const A=n[h];v.has(A.key)||c(A,o)}for(;m;)V(_[m-1]);return _}function V_(n,e){const t={},i={},r={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const c in o)c in a||(i[c]=1);for(const c in a)r[c]||(t[c]=a[c],r[c]=1);n[s]=a}else for(const c in o)r[c]=1}for(const o in i)o in t||(t[o]=void 0);return t}function B_(n){return typeof n=="object"&&n!==null?n:{}}function q_(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function Wl(n){n&&n.c()}function zl(n,e){n&&n.l(e)}function ra(n,e,t,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=n.$$;r&&r.m(e,t),i||Sn(()=>{const c=s.map(Wo).filter(xe);o?o.push(...c):Ee(c),n.$$.on_mount=[]}),a.forEach(Sn)}function sa(n,e){const t=n.$$;t.fragment!==null&&(Ee(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Gl(n,e){n.$$.dirty[0]===-1&&(pn.push(n),ea(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function oa(n,e,t,i,r,s,o,a=[-1]){const c=An;yn(n);const l=n.$$={fragment:null,ctx:null,props:s,update:_e,not_equal:r,bound:Es(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Es(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let d=!1;if(l.ctx=t?t(n,e.props||{},(u,h,...m)=>{const f=m.length?m[0]:h;return l.ctx&&r(l.ctx[u],l.ctx[u]=f)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](f),d&&Gl(n,u)),h}):[],l.update(),d=!0,Ee(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){Sl();const u=H(e.target);l.fragment&&l.fragment.l(u),u.forEach(N)}else l.fragment&&l.fragment.c();e.intro&&jt(n.$$.fragment),ra(n,e.target,e.anchor,e.customElement),Rl(),ta()}yn(c)}class aa{$destroy(){sa(this,1),this.$destroy=_e}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Al(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ft=[];function j_(n,e){return{subscribe:ca(n,e).subscribe}}function ca(n,e=_e){let t;const i=new Set;function r(a){if(Sr(n,a)&&(n=a,t)){const c=!Ft.length;for(const l of i)l[1](),Ft.push(l,n);if(c){for(let l=0;l<Ft.length;l+=2)Ft[l][0](Ft[l+1]);Ft.length=0}}}function s(a){r(a(n))}function o(a,c=_e){const l=[a,c];return i.add(l),i.size===1&&(t=e(r)||_e),a(n),()=>{i.delete(l),i.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function H_(n,{delay:e=0,duration:t=400,easing:i=Ar}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*r}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},xl=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),i.push(t[d],t[u],t[h],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(la(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw Error();const h=s<<2|a>>4;if(i.push(h),l!==64){const m=a<<4&240|l>>2;if(i.push(m),u!==64){const f=l<<6&192|u;i.push(f)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Kl=function(n){const e=la(n);return ua.encodeByteArray(e,!0)},li=function(n){return Kl(n).replace(/\./g,"")},Yl=function(n){try{return ua.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[li(JSON.stringify(t)),li(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ql(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Zl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $l(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eu(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tu(){return typeof indexedDB=="object"}function nu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="FirebaseError";class lt extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=iu,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?ru(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new lt(r,a,i)}}function ru(n,e){return n.replace(su,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const su=/\{\$([^}]+)}/g;function ou(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ui(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Ts(s)&&Ts(o)){if(!ui(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Ts(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function mn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function gn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function au(n,e){const t=new cu(n,e);return t.subscribe.bind(t)}class cu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");lu(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Qi),r.error===void 0&&(r.error=Qi),r.complete===void 0&&(r.complete=Qi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,e){return new Promise((t,i)=>{n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;i(`${e}: ${(s=r.target.error)===null||s===void 0?void 0:s.message}`)}})}class ks{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new da(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new ha(this._db.createObjectStore(e,t))}close(){this._db.close()}}class da{constructor(e){this._transaction=e,this.complete=new Promise((t,i)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new ha(this._transaction.objectStore(e))}}class ha{constructor(e){this._store=e}index(e){return new As(this._store.index(e))}createIndex(e,t,i){return new As(this._store.createIndex(e,t,i))}get(e){const t=this._store.get(e);return _n(t,"Error reading from IndexedDB")}put(e,t){const i=this._store.put(e,t);return _n(i,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return _n(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return _n(e,"Error clearing IndexedDB object store")}}class As{constructor(e){this._index=e}get(e){const t=this._index.get(e);return _n(t,"Error reading from IndexedDB")}}function uu(n,e,t){return new Promise((i,r)=>{try{const s=indexedDB.open(n,e);s.onsuccess=o=>{i(new ks(o.target.result))},s.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{t(new ks(s.result),o.oldVersion,o.newVersion,new da(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}})}class ot{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Jl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fu(e))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gt){return this.instances.has(e)}getOptions(e=gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:hu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=gt){return this.component?this.component.multipleInstances?e:gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hu(n){return n===gt?void 0:n}function fu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new du(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const mu={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},gu=M.INFO,_u={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},yu=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=_u[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Or{constructor(e){this.name=e,this._logLevel=gu,this._logHandler=yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wu(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function wu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fr="@firebase/app",Ss="0.7.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Or("@firebase/app"),bu="@firebase/app-compat",Iu="@firebase/analytics-compat",Eu="@firebase/analytics",Tu="@firebase/app-check-compat",ku="@firebase/app-check",Au="@firebase/auth",Su="@firebase/auth-compat",Ru="@firebase/database",Nu="@firebase/database-compat",Ou="@firebase/functions",Pu="@firebase/functions-compat",Du="@firebase/installations",Cu="@firebase/installations-compat",Lu="@firebase/messaging",Mu="@firebase/messaging-compat",Uu="@firebase/performance",Fu="@firebase/performance-compat",Vu="@firebase/remote-config",Bu="@firebase/remote-config-compat",qu="@firebase/storage",ju="@firebase/storage-compat",Hu="@firebase/firestore",Wu="@firebase/firestore-compat",zu="firebase",Gu="9.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]",xu={[fr]:"fire-core",[bu]:"fire-core-compat",[Eu]:"fire-analytics",[Iu]:"fire-analytics-compat",[ku]:"fire-app-check",[Tu]:"fire-app-check-compat",[Au]:"fire-auth",[Su]:"fire-auth-compat",[Ru]:"fire-rtdb",[Nu]:"fire-rtdb-compat",[Ou]:"fire-fn",[Pu]:"fire-fn-compat",[Du]:"fire-iid",[Cu]:"fire-iid-compat",[Lu]:"fire-fcm",[Mu]:"fire-fcm-compat",[Uu]:"fire-perf",[Fu]:"fire-perf-compat",[Vu]:"fire-rc",[Bu]:"fire-rc-compat",[qu]:"fire-gcs",[ju]:"fire-gcs-compat",[Hu]:"fire-fst",[Wu]:"fire-fst-compat","fire-js":"fire-js",[zu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Map,pr=new Map;function Ku(n,e){try{n.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if(pr.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;pr.set(e,n);for(const t of di.values())Ku(t,n);return!0}function Qt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Yu(n,e,t=Dr){Qt(n,e).clearInstance(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Et=new Vn("app","Firebase",Ju);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=Gu;function W_(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Et.create("bad-app-name",{appName:String(i)});const r=di.get(i);if(r){if(ui(n,r.options)&&ui(t,r.config))return r;throw Et.create("duplicate-app",{appName:i})}const s=new pu(i);for(const a of pr.values())s.addComponent(a);const o=new Xu(n,t,s);return di.set(i,o),o}function Cr(n=Dr){const e=di.get(n);if(!e)throw Et.create("no-app",{appName:n});return e}function Ne(n,e,t){var i;let r=(i=xu[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}It(new ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="firebase-heartbeat-database",Zu=1,Rn="firebase-heartbeat-store";let Zi=null;function fa(){return Zi||(Zi=uu(Qu,Zu,(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}).catch(n=>{throw Et.create("storage-open",{originalErrorMessage:n.message})})),Zi}async function $u(n){try{return(await fa()).transaction(Rn).objectStore(Rn).get(pa(n))}catch(e){throw Et.create("storage-get",{originalErrorMessage:e.message})}}async function Rs(n,e){try{const i=(await fa()).transaction(Rn,"readwrite");return await i.objectStore(Rn).put(e,pa(n)),i.complete}catch(t){throw Et.create("storage-set",{originalErrorMessage:t.message})}}function pa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=1024,td=30*24*60*60*1e3;class nd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ns();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=td}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ns(),{heartbeatsToSend:t,unsentEntries:i}=id(this._heartbeatsCache.heartbeats),r=li(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ns(){return new Date().toISOString().substring(0,10)}function id(n,e=ed){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Os(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Os(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class rd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tu()?nu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $u(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Os(n){return li(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n){It(new ot("platform-logger",e=>new vu(e),"PRIVATE")),It(new ot("heartbeat",e=>new nd(e),"PRIVATE")),Ne(fr,Ss,n),Ne(fr,Ss,"esm2017"),Ne("fire-js","")}sd("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Lr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od={PHONE:"phone"},ad={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},cd={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},ld={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},ud={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function ma(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hd=dd,ga=ma,_a=new Vn("auth","Firebase",ma()),fd={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Or("@firebase/auth");function ei(n,...e){Ps.logLevel<=M.ERROR&&Ps.error(`Auth (${Zt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,...e){throw Mr(n,...e)}function de(n,...e){return Mr(n,...e)}function ya(n,e,t){const i=Object.assign(Object.assign({},ga()),{[e]:t});return new Vn("auth","Firebase",i).create(e,{appName:n.name})}function $t(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&le(n,"argument-error"),ya(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return _a.create(n,...e)}function y(n,e,...t){if(!n)throw Mr(e,...t)}function Re(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ei(e),new Error(e)}function Ke(n,e){n||Re(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map;function We(n){Ke(n instanceof Function,"Expected a class definition");let e=Ds.get(n);return e?(Ke(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ds.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n,e){const t=Qt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(ui(s,e!=null?e:{}))return r;le(r,"already-initialized")}return t.initialize({options:e})}function pd(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ur(){return Cs()==="http:"||Cs()==="https:"}function Cs(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ur()||Zl()||"connection"in navigator)?navigator.onLine:!0}function gd(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ke(t>e,"Short delay should be less than long delay!"),this.isMobile=Ql()||$l()}get(){return md()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e){Ke(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new Bn(3e4,6e4);function Z(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ee(n,e,t,i,r={}){return ba(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Xt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),wa.fetch()(Ia(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ba(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},_d),e);try{const r=new vd(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ti(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ti(n,"email-already-in-use",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ya(n,d,l);le(n,d)}}catch(r){if(r instanceof lt)throw r;le(n,"network-request-failed")}}async function Qe(n,e,t,i,r={}){const s=await ee(n,e,t,i,r);return"mfaPendingCredential"in s&&le(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ia(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Fr(n.config,r):`${n.config.apiScheme}://${r}`}class vd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(de(this.auth,"network-request-failed")),yd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=de(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(n,e){return ee(n,"POST","/v1/accounts:delete",e)}async function bd(n,e){return ee(n,"POST","/v1/accounts:update",e)}async function Id(n,e){return ee(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,e=!1){return b(n).getIdToken(e)}async function Ea(n,e=!1){const t=b(n),i=await t.getIdToken(e),r=Ri(i);y(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:wn($i(r.auth_time)),issuedAtTime:wn($i(r.iat)),expirationTime:wn($i(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $i(n){return Number(n)*1e3}function Ri(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ei("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yl(t);return r?JSON.parse(r):(ei("Failed to decode base64 JWT payload"),null)}catch(r){return ei("Caught error parsing JWT payload as JSON",r),null}}function Td(n){const e=Ri(n);return y(e,"internal-error"),y(typeof e.exp!="undefined","internal-error"),y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof lt&&kd(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function kd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wn(this.lastLoginAt),this.creationTime=wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Ye(n,Id(t,{idToken:i}));y(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Rd(s.providerUserInfo):[],a=Sd(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ta(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function ka(n){const e=b(n);await On(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sd(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Rd(n){return n.map(e=>{var{providerId:t}=e,i=Lr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(n,e){const t=await ba(n,{},async()=>{const i=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Ia(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wa.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken!="undefined","internal-error"),y(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Td(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Nd(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Pn;return i&&(y(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(y(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return Re("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,e){y(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class vt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Lr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ad(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ta(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ye(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ea(this,e)}reload(){return ka(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await On(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ye(this,wd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,l,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(r=t.email)!==null&&r!==void 0?r:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,f=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=t.createdAt)!==null&&l!==void 0?l:void 0,D=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:R,isAnonymous:V,providerData:A,stsTokenManager:U}=t;y(O&&U,e,"internal-error");const P=Pn.fromJSON(this.name,U);y(typeof O=="string",e,"internal-error"),rt(u,e.name),rt(h,e.name),y(typeof R=="boolean",e,"internal-error"),y(typeof V=="boolean",e,"internal-error"),rt(m,e.name),rt(f,e.name),rt(g,e.name),rt(_,e.name),rt(v,e.name),rt(D,e.name);const L=new vt({uid:O,auth:e,email:h,emailVerified:R,displayName:u,isAnonymous:V,photoURL:f,phoneNumber:m,tenantId:g,stsTokenManager:P,createdAt:v,lastLoginAt:D});return A&&Array.isArray(A)&&(L.providerData=A.map(ke=>Object.assign({},ke))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(e,t,i=!1){const r=new Pn;r.updateFromServerResponse(t);const s=new vt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await On(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Aa.type="NONE";const mr=Aa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n,e,t){return`firebase:${n}:${e}:${t}`}class Ht{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ni(this.userKey,r.apiKey,s),this.fullPersistenceKey=ni("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ht(We(mr),e,i);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||We(mr);const o=ni(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=vt._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ht(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ht(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Na(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pa(e))return"Blackberry";if(Da(e))return"Webos";if(Vr(e))return"Safari";if((e.includes("chrome/")||Ra(e))&&!e.includes("edge/"))return"Chrome";if(Oa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Sa(n=ne()){return/firefox\//i.test(n)}function Vr(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ra(n=ne()){return/crios\//i.test(n)}function Na(n=ne()){return/iemobile/i.test(n)}function Oa(n=ne()){return/android/i.test(n)}function Pa(n=ne()){return/blackberry/i.test(n)}function Da(n=ne()){return/webos/i.test(n)}function Ni(n=ne()){return/iphone|ipad|ipod/i.test(n)}function Od(n=ne()){var e;return Ni(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pd(){return eu()&&document.documentMode===10}function Ca(n=ne()){return Ni(n)||Oa(n)||Da(n)||Pa(n)||/windows phone/i.test(n)||Na(n)}function Dd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n,e=[]){let t;switch(n){case"Browser":t=Ls(ne());break;case"Worker":t=`${Ls(ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ms(this),this.idTokenSubscription=new Ms(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_a,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await On(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?b(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=La(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function oe(n){return b(n)}class Ms{constructor(e){this.auth=e,this.observer=null,this.addObserver=au(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ld(n,e,t){const i=oe(n);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Ma(e),{host:o,port:a}=Md(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ud()}function Ma(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Md(n){const e=Ma(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Us(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Us(o)}}}function Us(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ud(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Re("not implemented")}_getIdTokenResponse(e){return Re("not implemented")}_linkToIdToken(e,t){return Re("not implemented")}_getReauthenticationResolver(e){return Re("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(n,e){return ee(n,"POST","/v1/accounts:resetPassword",Z(n,e))}async function Fa(n,e){return ee(n,"POST","/v1/accounts:update",e)}async function Fd(n,e){return ee(n,"POST","/v1/accounts:update",Z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(n,e){return Qe(n,"POST","/v1/accounts:signInWithPassword",Z(n,e))}async function Oi(n,e){return ee(n,"POST","/v1/accounts:sendOobCode",Z(n,e))}async function Bd(n,e){return Oi(n,e)}async function qd(n,e){return Oi(n,e)}async function jd(n,e){return Oi(n,e)}async function Hd(n,e){return Oi(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(n,e){return Qe(n,"POST","/v1/accounts:signInWithEmailLink",Z(n,e))}async function zd(n,e){return Qe(n,"POST","/v1/accounts:signInWithEmailLink",Z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends en{constructor(e,t,i,r=null){super("password",i);this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Kt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Kt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Vd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wd(e,{email:this._email,oobCode:this._password});default:le(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Fa(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zd(e,{idToken:t,email:this._email,oobCode:this._password});default:le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(n,e){return Qe(n,"POST","/v1/accounts:signInWithIdp",Z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="http://localhost";class Oe extends en{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Lr(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Oe(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ge(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ge(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ge(e,t)}buildRequest(){const e={requestUri:Gd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(n,e){return ee(n,"POST","/v1/accounts:sendVerificationCode",Z(n,e))}async function Kd(n,e){return Qe(n,"POST","/v1/accounts:signInWithPhoneNumber",Z(n,e))}async function Yd(n,e){const t=await Qe(n,"POST","/v1/accounts:signInWithPhoneNumber",Z(n,e));if(t.temporaryProof)throw ti(n,"account-exists-with-different-credential",t);return t}const Jd={USER_NOT_FOUND:"user-not-found"};async function Xd(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Qe(n,"POST","/v1/accounts:signInWithPhoneNumber",Z(n,t),Jd)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends en{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Kd(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Yd(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Xd(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new st({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zd(n){const e=mn(gn(n)).link,t=e?mn(gn(e)).deep_link_id:null,i=mn(gn(n)).deep_link_id;return(i?mn(gn(i)).link:null)||i||t||e||n}class tn{constructor(e){var t,i,r,s,o,a;const c=mn(gn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,u=Qd((r=c.mode)!==null&&r!==void 0?r:null);y(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Zd(e);try{return new tn(t)}catch{return null}}}function $d(n){return tn.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Kt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=tn.parseLink(t);return y(i,"argument-error"),Kt._fromEmailAndCode(e,i.code,i.tenantId)}}ut.PROVIDER_ID="password";ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ze{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class bn extends nn{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return y("providerId"in t&&"signInMethod"in t,"argument-error"),Oe._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return y(e.idToken||e.accessToken,"argument-error"),Oe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return bn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return bn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!t&&!s||!a)return null;try{return new bn(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends nn{constructor(){super("facebook.com")}static credential(e){return Oe._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends nn{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return Oe._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends nn{constructor(){super("github.com")}static credential(e){return Oe._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.GITHUB_SIGN_IN_METHOD="github.com";qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="http://localhost";class Dn extends en{constructor(e,t){super(e,e);this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ge(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ge(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ge(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=t;return!i||!r||!s||i!==r?null:new Dn(i,s)}static _create(e,t){return new Dn(e,t)}buildRequest(){return{requestUri:eh,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="saml.";class hi extends Ze{constructor(e){y(e.startsWith(th),"argument-error");super(e)}static credentialFromResult(e){return hi.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return hi.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Dn.fromJSON(e);return y(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Dn._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends nn{constructor(){super("twitter.com")}static credential(e,t){return Oe._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return je.credential(t,i)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(n,e){return Qe(n,"POST","/v1/accounts:signUp",Z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await vt._fromIdTokenResponse(e,i,r),o=Fs(i);return new ve({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Fs(i);return new ve({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Fs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(n){var e;const t=oe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ve({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Va(t,{returnSecureToken:!0}),r=await ve._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends lt{constructor(e,t,i,r){var s;super(t.code,t.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,fi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new fi(e,t,i,r)}}function Ba(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fi._fromErrorAndOperation(n,s,e,i):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(n,e){const t=b(n);await Pi(!0,t,e);const{providerUserInfo:i}=await bd(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=qa(i||[]);return t.providerData=t.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Br(n,e,t=!1){const i=await Ye(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ve._forOperation(n,"link",i)}async function Pi(n,e,t){await On(e);const i=qa(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";y(i.has(t)===n,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await Ye(n,Ba(i,r,e,n),t);y(s.idToken,i,"internal-error");const o=Ri(s.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(n.uid===a,i,"user-mismatch"),ve._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&le(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(n,e,t=!1){const i="signIn",r=await Ba(n,i,e),s=await ve._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function Di(n,e){return Ha(oe(n),e)}async function Wa(n,e){const t=b(n);return await Pi(!1,t,e.providerId),Br(t,e)}async function za(n,e){return ja(b(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(n,e){return Qe(n,"POST","/v1/accounts:signInWithCustomToken",Z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(n,e){const t=oe(n),i=await rh(t,{token:e,returnSecureToken:!0}),r=await ve._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?qr._fromServerResponse(e,t):le(e,"internal-error")}}class qr extends Ci{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new qr(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n,e,t){var i;y(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(n,e,t){const i=b(n),r={requestType:"PASSWORD_RESET",email:e};t&&Li(i,r,t),await qd(i,r)}async function ah(n,e,t){await Ua(b(n),{oobCode:e,newPassword:t})}async function ch(n,e){await Fd(b(n),{oobCode:e})}async function Ga(n,e){const t=b(n),i=await Ua(t,{oobCode:e}),r=i.requestType;switch(y(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":y(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":y(i.mfaInfo,t,"internal-error");default:y(i.email,t,"internal-error")}let s=null;return i.mfaInfo&&(s=Ci._fromServerResponse(oe(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function lh(n,e){const{data:t}=await Ga(b(n),e);return t.email}async function uh(n,e,t){const i=oe(n),r=await Va(i,{returnSecureToken:!0,email:e,password:t}),s=await ve._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function dh(n,e,t){return Di(b(n),ut.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(n,e,t){const i=b(n),r={requestType:"EMAIL_SIGNIN",email:e};y(t.handleCodeInApp,i,"argument-error"),t&&Li(i,r,t),await jd(i,r)}function fh(n,e){const t=tn.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function ph(n,e,t){const i=b(n),r=ut.credentialWithLink(e,t||Nn());return y(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Di(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(n,e){return ee(n,"POST","/v1/accounts:createAuthUri",Z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(n,e){const t=Ur()?Nn():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:r}=await mh(b(n),i);return r||[]}async function _h(n,e){const t=b(n),i=await n.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&Li(t.auth,r,e);const{email:s}=await Bd(t.auth,r);s!==n.email&&await n.reload()}async function yh(n,e,t){const i=b(n),r=await n.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};t&&Li(i.auth,s,t);const{email:o}=await Hd(i.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(n,e){return ee(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=b(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ye(i,vh(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function bh(n,e){return xa(b(n),e,null)}function Ih(n,e){return xa(b(n),null,e)}async function xa(n,e,t){const{auth:i}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Ye(n,Fa(i,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){var e,t;if(!n)return null;const{providerId:i}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n==null?void 0:n.idToken)){const o=(t=(e=Ri(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Wt(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new Th(s,r);case"github.com":return new kh(s,r);case"google.com":return new Ah(s,r);case"twitter.com":return new Sh(s,r,n.screenName||null);case"custom":case"anonymous":return new Wt(s,null);default:return new Wt(s,i,r)}}class Wt{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Ka extends Wt{constructor(e,t,i,r){super(e,t,i);this.username=r}}class Th extends Wt{constructor(e,t){super(e,"facebook.com",t)}}class kh extends Ka{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Ah extends Wt{constructor(e,t){super(e,"google.com",t)}}class Sh extends Ka{constructor(e,t,i){super(e,"twitter.com",t,i)}}function Rh(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Eh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n,e){return b(n).setPersistence(e)}function Oh(n,e,t,i){return b(n).onIdTokenChanged(e,t,i)}function Ph(n,e,t,i){return b(n).onAuthStateChanged(e,t,i)}function Dh(n){b(n).useDeviceLanguage()}function Ch(n,e){return b(n).updateCurrentUser(e)}function Lh(n){return b(n).signOut()}async function Mh(n){return b(n).delete()}class _t{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new _t("enroll",e)}static _fromMfaPendingCredential(e){return new _t("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return _t._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return _t._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=oe(e),r=t.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>Ci._fromServerResponse(i,a));y(r.mfaPendingCredential,i,"internal-error");const o=_t._fromMfaPendingCredential(r.mfaPendingCredential);return new jr(o,s,async a=>{const c=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const l=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const d=await ve._fromIdTokenResponse(i,t.operationType,l);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return y(t.user,i,"internal-error"),ve._forOperation(t.user,t.operationType,l);default:le(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Uh(n,e){var t;const i=b(n),r=e;return y(e.customData.operationType,i,"argument-error"),y((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),jr._fromError(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n,e){return ee(n,"POST","/v2/accounts/mfaEnrollment:start",Z(n,e))}function Vh(n,e){return ee(n,"POST","/v2/accounts/mfaEnrollment:finalize",Z(n,e))}function Bh(n,e){return ee(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Z(n,e))}class Hr{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Ci._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Hr(e)}async getSession(){return _t._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const i=e,r=await this.getSession(),s=await Ye(this.user,i._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),r=await Ye(this.user,Bh(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const er=new WeakMap;function qh(n){const e=b(n);return er.has(e)||er.set(e,Hr._fromUser(e)),er.get(e)}const pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){const n=ne();return Vr(n)||Ni(n)}const Hh=1e3,Wh=10;class Ja extends Ya{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jh()&&Dd(),this.fallbackToPolling=Ca(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Pd()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Wh):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Hh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ja.type="LOCAL";const Xa=Ja;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Ya{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qa.type="SESSION";const Wr=Qa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Mi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await zh(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Ui("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return window}function xh(n){Y().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return typeof Y().WorkerGlobalScope!="undefined"&&typeof Y().importScripts=="function"}async function Kh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Jh(){return zr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="firebaseLocalStorageDb",Xh=1,mi="firebaseLocalStorage",$a="fbase_key";class qn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fi(n,e){return n.transaction([mi],e?"readwrite":"readonly").objectStore(mi)}function Qh(){const n=indexedDB.deleteDatabase(Za);return new qn(n).toPromise()}function gr(){const n=indexedDB.open(Za,Xh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(mi,{keyPath:$a})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(mi)?e(i):(i.close(),await Qh(),e(await gr()))})})}async function Vs(n,e,t){const i=Fi(n,!0).put({[$a]:e,value:t});return new qn(i).toPromise()}async function Zh(n,e){const t=Fi(n,!1).get(e),i=await new qn(t).toPromise();return i===void 0?null:i.value}function Bs(n,e){const t=Fi(n,!0).delete(e);return new qn(t).toPromise()}const $h=800,ef=3;class ec{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>ef)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mi._getInstance(Jh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Kh(),!this.activeServiceWorker)return;this.sender=new Gh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gr();return await Vs(e,pi,"1"),await Bs(e,pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vs(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Zh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Fi(r,!1).getAll();return new qn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$h)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ec.type="LOCAL";const tc=ec;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n,e){return ee(n,"POST","/v2/accounts/mfaSignIn:start",Z(n,e))}function nf(n,e){return ee(n,"POST","/v2/accounts/mfaSignIn:finalize",Z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(n){return(await ee(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function nc(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=de("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",sf().appendChild(i)})}function ic(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=500,af=6e4,Yn=1e12;class cf{constructor(e){this.auth=e,this.counter=Yn,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new lf(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Yn;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Yn;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Yn;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class lf{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;y(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=uf(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},af)},of))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function uf(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=ic("rcb"),df=new Bn(3e4,6e4),hf="https://www.google.com/recaptcha/api.js?";class ff{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Y().grecaptcha}load(e,t=""){return y(pf(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Y().grecaptcha):new Promise((i,r)=>{const s=Y().setTimeout(()=>{r(de(e,"network-request-failed"))},df.get());Y()[tr]=()=>{Y().clearTimeout(s),delete Y()[tr];const a=Y().grecaptcha;if(!a){r(de(e,"internal-error"));return}const c=a.render;a.render=(l,d)=>{const u=c(l,d);return this.counter++,u},this.hostLanguage=t,i(a)};const o=`${hf}?${Xt({onload:tr,render:"explicit",hl:t})}`;nc(o).catch(()=>{clearTimeout(s),r(de(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Y().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function pf(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class mf{async load(e){return new cf(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="recaptcha",gf={theme:"light",type:"image"};class _f{constructor(e,t=Object.assign({},gf),i){this.parameters=t,this.type=rc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=oe(i),this.isInvisible=this.parameters.size==="invisible",y(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;y(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mf:new ff,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Y()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(Ur()&&!zr(),this.auth,"internal-error"),await yf(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await rf(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function yf(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function vf(n,e,t){const i=oe(n),r=await Vi(i,e,b(t));return new Gr(r,s=>Di(i,s))}async function wf(n,e,t){const i=b(n);await Pi(!1,i,"phone");const r=await Vi(i.auth,e,b(t));return new Gr(r,s=>Wa(i,s))}async function bf(n,e,t){const i=b(n),r=await Vi(i.auth,e,b(t));return new Gr(r,s=>za(i,s))}async function Vi(n,e,t){var i;const r=await t.verify();try{y(typeof r=="string",n,"argument-error"),y(t.type===rc,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return y(o.type==="enroll",n,"internal-error"),(await Fh(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{y(o.type==="signin",n,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return y(a,n,"missing-multi-factor-info"),(await tf(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await xd(n,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{t._reset()}}async function If(n,e){await Br(b(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.providerId=wt.PROVIDER_ID,this.auth=oe(e)}verifyPhoneNumber(e,t){return Vi(this.auth,e,b(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wt.credentialFromTaggedObject(t)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?st._fromTokenResponse(t,i):null}}wt.PROVIDER_ID="phone";wt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n,e){return e?We(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends en{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ge(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ge(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ef(n){return Ha(n.auth,new xr(n),n.bypassAuthState)}function Tf(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),ja(t,new xr(n),n.bypassAuthState)}async function kf(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Br(t,new xr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ef;case"linkViaPopup":case"linkViaRedirect":return kf;case"reauthViaPopup":case"reauthViaRedirect":return Tf;default:le(this.auth,"internal-error")}}resolve(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Bn(2e3,1e4);async function Sf(n,e,t){const i=oe(n);$t(n,e,Ze);const r=Ot(i,t);return new ze(i,"signInViaPopup",e,r).executeNotNull()}async function Rf(n,e,t){const i=b(n);$t(i.auth,e,Ze);const r=Ot(i.auth,t);return new ze(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function Nf(n,e,t){const i=b(n);$t(i.auth,e,Ze);const r=Ot(i.auth,t);return new ze(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class ze extends sc{constructor(e,t,i,r,s){super(e,t,r,s);this.provider=i,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Ke(this.filter.length===1,"Popup operations only handle one event");const e=Ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Af.get())};e()}}ze.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="pendingRedirect",nr=new Map;class Pf extends sc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const i=await Df(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Df(n,e){const t=ac(e),i=oc(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}async function Kr(n,e){return oc(n)._set(ac(e),"true")}function oc(n){return We(n._redirectPersistence)}function ac(n){return ni(Of,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n,e,t){return Lf(n,e,t)}async function Lf(n,e,t){const i=oe(n);$t(n,e,Ze);const r=Ot(i,t);return await Kr(r,i),r._openRedirect(i,e,"signInViaRedirect")}function Mf(n,e,t){return Uf(n,e,t)}async function Uf(n,e,t){const i=b(n);$t(i.auth,e,Ze);const r=Ot(i.auth,t);await Kr(r,i.auth);const s=await lc(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function Ff(n,e,t){return Vf(n,e,t)}async function Vf(n,e,t){const i=b(n);$t(i.auth,e,Ze);const r=Ot(i.auth,t);await Pi(!1,i,e.providerId),await Kr(r,i.auth);const s=await lc(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function Bf(n,e){return await oe(n)._initializationPromise,cc(n,e,!1)}async function cc(n,e,t=!1){const i=oe(n),r=Ot(i,e),o=await new Pf(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function lc(n){const e=Ui(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=10*60*1e3;class jf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!uc(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(de(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qf&&this.cachedEventUids.clear(),this.cachedEventUids.has(qs(e))}saveEventToCache(e){this.cachedEventUids.add(qs(e)),this.lastProcessedEventTime=Date.now()}}function qs(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(n,e={}){return ee(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gf=/^https?/;async function xf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Wf(n);for(const t of e)try{if(Kf(t))return}catch{}le(n,"unauthorized-domain")}function Kf(n){const e=Nn(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Gf.test(t))return!1;if(zf.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new Bn(3e4,6e4);function js(){const n=Y().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jf(n){return new Promise((e,t)=>{var i,r,s;function o(){js(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{js(),t(de(n,"network-request-failed"))},timeout:Yf.get()})}if(!((r=(i=Y().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Y().gapi)===null||s===void 0)&&s.load)o();else{const a=ic("iframefcb");return Y()[a]=()=>{gapi.load?o():t(de(n,"network-request-failed"))},nc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ii=null,e})}let ii=null;function Xf(n){return ii=ii||Jf(n),ii}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Bn(5e3,15e3),Zf="__/auth/iframe",$f="emulator/auth/iframe",ep={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function np(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fr(e,$f):`https://${n.config.authDomain}/${Zf}`,i={apiKey:e.apiKey,appName:n.name,v:Zt},r=tp.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Xt(i).slice(1)}`}async function ip(n){const e=await Xf(n),t=Y().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:np(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ep,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=de(n,"network-request-failed"),a=Y().setTimeout(()=>{s(o)},Qf.get());function c(){Y().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sp=500,op=600,ap="_blank",cp="http://localhost";class Hs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lp(n,e,t,i=sp,r=op){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rp),{width:i.toString(),height:r.toString(),top:s,left:o}),l=ne().toLowerCase();t&&(a=Ra(l)?ap:t),Sa(l)&&(e=e||cp,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[m,f])=>`${h}${m}=${f},`,"");if(Od(l)&&a!=="_self")return up(e||"",a),new Hs(null);const u=window.open(e||"",a,d);y(u,n,"popup-blocked");try{u.focus()}catch{}return new Hs(u)}function up(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="__/auth/handler",hp="emulator/auth/handler";function Ws(n,e,t,i,r,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Zt,eventId:r};if(e instanceof Ze){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ou(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof nn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${fp(n)}?${Xt(a).slice(1)}`}function fp({config:n}){return n.emulator?Fr(n,hp):`https://${n.authDomain}/${dp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="webStorageSupport";class pp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wr,this._completeRedirectFn=cc}async _openPopup(e,t,i,r){var s;Ke((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ws(e,t,i,Nn(),r);return lp(e,o,Ui())}async _openRedirect(e,t,i,r){return await this._originValidation(e),xh(Ws(e,t,i,Nn(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(Ke(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ip(e),i=new jf(e);return t.register("authEvent",r=>(y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ir,{type:ir},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[ir];o!==void 0&&t(!!o),le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ca()||Vr()||Ni()}}const dc=pp;class mp{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Re("unexpected MultiFactorSessionType")}}}class Yr extends mp{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new Yr(e)}_finalizeEnroll(e,t,i){return Vh(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return nf(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hc{constructor(){}static assertion(e){return Yr._fromCredential(e)}}hc.FACTOR_ID="phone";var zs="@firebase/auth",Gs="0.19.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yp(n){It(new ot("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,c)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),y(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:La(n)},d=new Cd(a,c,l);return pd(d,t),d})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),It(new ot("auth-internal",e=>{const t=oe(e.getProvider("auth").getImmediate());return(i=>new gp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(zs,Gs,_p(n)),Ne(zs,Gs,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n=Cr()){const e=Qt(n,"auth");return e.isInitialized()?e.getImmediate():va(n,{popupRedirectResolver:dc,persistence:[tc,Xa,Wr]})}yp("Browser");var z_=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:ud,ActionCodeURL:tn,AuthCredential:en,AuthErrorCodes:fd,EmailAuthCredential:Kt,EmailAuthProvider:ut,FacebookAuthProvider:Ve,FactorId:od,GithubAuthProvider:qe,GoogleAuthProvider:Be,OAuthCredential:Oe,OAuthProvider:bn,OperationType:ld,PhoneAuthCredential:st,PhoneAuthProvider:wt,PhoneMultiFactorGenerator:hc,ProviderId:ad,RecaptchaVerifier:_f,SAMLAuthProvider:hi,SignInMethod:cd,TwitterAuthProvider:je,applyActionCode:ch,browserLocalPersistence:Xa,browserPopupRedirectResolver:dc,browserSessionPersistence:Wr,checkActionCode:Ga,confirmPasswordReset:ah,connectAuthEmulator:Ld,createUserWithEmailAndPassword:uh,debugErrorMap:hd,deleteUser:Mh,fetchSignInMethodsForEmail:gh,getAdditionalUserInfo:Rh,getAuth:vp,getIdToken:Ed,getIdTokenResult:Ea,getMultiFactorResolver:Uh,getRedirectResult:Bf,inMemoryPersistence:mr,indexedDBLocalPersistence:tc,initializeAuth:va,isSignInWithEmailLink:fh,linkWithCredential:Wa,linkWithPhoneNumber:wf,linkWithPopup:Nf,linkWithRedirect:Ff,multiFactor:qh,onAuthStateChanged:Ph,onIdTokenChanged:Oh,parseActionCodeURL:$d,prodErrorMap:ga,reauthenticateWithCredential:za,reauthenticateWithPhoneNumber:bf,reauthenticateWithPopup:Rf,reauthenticateWithRedirect:Mf,reload:ka,sendEmailVerification:_h,sendPasswordResetEmail:oh,sendSignInLinkToEmail:hh,setPersistence:Nh,signInAnonymously:nh,signInWithCredential:Di,signInWithCustomToken:sh,signInWithEmailAndPassword:dh,signInWithEmailLink:ph,signInWithPhoneNumber:vf,signInWithPopup:Sf,signInWithRedirect:Cf,signOut:Lh,unlink:ih,updateCurrentUser:Ch,updateEmail:bh,updatePassword:Ih,updatePhoneNumber:If,updateProfile:wh,useDeviceLanguage:Dh,verifyBeforeUpdateEmail:yh,verifyPasswordResetCode:lh},Symbol.toStringTag,{value:"Module"})),wp="firebase",bp="9.6.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne(wp,bp,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn="9.6.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Or("@firebase/firestore");function Ip(n){Tt.setLogLevel(n)}function kt(n,...e){if(Tt.logLevel<=M.DEBUG){const t=e.map(Jr);Tt.debug(`Firestore (${rn}): ${n}`,...t)}}function Bi(n,...e){if(Tt.logLevel<=M.ERROR){const t=e.map(Jr);Tt.error(`Firestore (${rn}): ${n}`,...t)}}function fc(n,...e){if(Tt.logLevel<=M.WARN){const t=e.map(Jr);Tt.warn(`Firestore (${rn}): ${n}`,...t)}}function Jr(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n="Unexpected state"){const e=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: `+n;throw Bi(e),new Error(e)}function ce(n,e){n||X()}function jn(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="ok",Xr="cancelled",zt="unknown",E="invalid-argument",pc="deadline-exceeded",Qr="not-found",Ep="already-exists",mc="permission-denied",gi="unauthenticated",gc="resource-exhausted",Je="failed-precondition",Zr="aborted",_c="out-of-range",$r="unimplemented",yc="internal",vc="unavailable",Tp="data-loss";class w extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ae.UNAUTHENTICATED))}shutdown(){}}class Ap{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sp{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ce(typeof e.accessToken=="string"),new wc(e.accessToken,new ae(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Rp{constructor(e,t,i){this.type="FirstParty",this.user=ae.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Np{constructor(e,t,i){this.t=e,this.i=t,this.o=i}getToken(){return Promise.resolve(new Rp(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Op{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pp{constructor(e){this.u=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(ce(typeof e.token=="string"),new Op(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t,i,r,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,i){t===void 0?t=0:t>e.length&&X(),i===void 0?i=e.length-t:i>e.length-t&&X(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class j extends Cn{construct(e,t,i){return new j(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new w(E,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new j(t)}static emptyPath(){return new j([])}}const Cp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Cn{construct(e,t,i){return new me(e,t,i)}static isValidIdentifier(e){return Cp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new w(E,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new w(E,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(E,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new w(E,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(j.fromString(e))}static fromName(e){return new G(j.fromString(e).popFirst(5))}static empty(){return new G(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&j.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return j.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new j(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e,t){if(!t)throw new w(E,`Function ${n}() cannot be called with an empty ${e}.`)}function Ks(n){if(!G.isDocumentKey(n))throw new w(E,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ys(n){if(G.isDocumentKey(n))throw new w(E,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X()}function Te(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(E,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qi(n);throw new w(E,`Expected type '${e.name}', but it was: ${t}`)}}return n}function bc(n,e){if(e<=0)throw new w(E,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n){return n==null}function _i(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Js,C;function Xs(n){if(n===void 0)return Bi("RPC_ERROR","HTTP error has no status"),zt;switch(n){case 200:return xs;case 400:return Je;case 401:return gi;case 403:return mc;case 404:return Qr;case 409:return Zr;case 416:return _c;case 429:return gc;case 499:return Xr;case 500:return zt;case 501:return $r;case 503:return vc;case 504:return pc;default:return n>=200&&n<300?xs:n>=400&&n<500?Je:n>=500&&n<600?yc:zt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(C=Js||(Js={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";class Mp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,i,r,s){const o=this.p(e,t);kt("RestConnection","Sending: ",o,i);const a={};return this.g(a,r,s),this.v(e,o,a,i).then(c=>(kt("RestConnection","Received: ",c),c),c=>{throw fc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",i),c})}T(e,t,i,r,s){return this.m(e,t,i,r,s)}g(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+rn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}p(e,t){const i=Lp[e];return`${this.h}/v1/${t}:${i}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,i,r){const s=JSON.stringify(r);let o;try{o=await this.I(t,{method:"POST",headers:i,body:s})}catch(a){throw new w(Xs(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new w(Xs(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Up(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function $(n,e){return n<e?-1:n>e?1:0}function is(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new w(E,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new w(E,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new w(E,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(E,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new he(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new he(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.fields=e,e.sort(me.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Xe(t)}static fromUint8Array(e){const t=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Vp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(ce(!!n),typeof n=="string"){let e=0;const t=Vp.exec(n);if(ce(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ln(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ic(n){const e=n.mapValue.fields.__previous_value__;return rs(e)?Ic(e):e}function Mn(n){const e=At(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rs(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9:10:X()}function Jt(n,e){if(n===e)return!0;const t=St(n);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Mn(n).isEqual(Mn(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=At(i.timestampValue),o=At(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Ln(i.bytesValue).isEqual(Ln(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return J(i.geoPointValue.latitude)===J(r.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return J(i.integerValue)===J(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=J(i.doubleValue),o=J(r.doubleValue);return s===o?_i(s)===_i(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return is(n.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Qs(s)!==Qs(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Jt(s[a],o[a])))return!1;return!0}(n,e);default:return X()}}function Un(n,e){return(n.values||[]).find(t=>Jt(t,e))!==void 0}function vi(n,e){if(n===e)return 0;const t=St(n),i=St(e);if(t!==i)return $(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(r,s){const o=J(r.integerValue||r.doubleValue),a=J(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Zs(n.timestampValue,e.timestampValue);case 4:return Zs(Mn(n),Mn(e));case 5:return $(n.stringValue,e.stringValue);case 6:return function(r,s){const o=Ln(r),a=Ln(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=$(o[c],a[c]);if(l!==0)return l}return $(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,s){const o=$(J(r.latitude),J(s.latitude));return o!==0?o:$(J(r.longitude),J(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=vi(o[c],a[c]);if(l)return l}return $(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let d=0;d<a.length&&d<l.length;++d){const u=$(a[d],l[d]);if(u!==0)return u;const h=vi(o[a[d]],c[l[d]]);if(h!==0)return h}return $(a.length,l.length)}(n.mapValue,e.mapValue);default:throw X()}}function Zs(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=At(n),i=At(e),r=$(t.seconds,i.seconds);return r!==0?r:$(t.nanos,i.nanos)}function wi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ec(n){return!!n&&"arrayValue"in n}function $s(n){return!!n&&"nullValue"in n}function eo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rr(n){return!!n&&"mapValue"in n}function In(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hn(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=In(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=In(n.arrayValue.values[t]);return e}return Object.assign({},n)}class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!rr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=In(t)}setAll(e){let t=me.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,r),i={},r=[],t=a.popLast()}o?i[a.lastSegment()]=In(o):r.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());rr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];rr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Hn(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new ue(In(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,i,r,s,o){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Se(e,0,Ie.min(),Ie.min(),ue.empty(),0)}static newFoundDocument(e,t,i){return new Se(e,1,t,Ie.min(),i,0)}static newNoDocument(e,t){return new Se(e,2,t,Ie.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,Ie.min(),ue.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function to(n,e=null,t=[],i=[],r=null,s=null,o=null){return new Bp(n,e,t,i,r,s,o)}class Pe extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,i):new qp(e,t,i):t==="array-contains"?new Wp(e,i):t==="in"?new zp(e,i):t==="not-in"?new Gp(e,i):t==="array-contains-any"?new xp(e,i):new Pe(e,t,i)}static V(e,t,i){return t==="in"?new jp(e,i):new Hp(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.D(vi(t,this.value)):t!==null&&St(this.value)===St(t)&&this.D(vi(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qp extends Pe{constructor(e,t,i){super(e,t,i),this.key=G.fromName(i.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.D(t)}}class jp extends Pe{constructor(e,t){super(e,"in",t),this.keys=Tc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hp extends Pe{constructor(e,t){super(e,"not-in",t),this.keys=Tc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>G.fromName(i.referenceValue))}class Wp extends Pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ec(t)&&Un(t.arrayValue,this.value)}}class zp extends Pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Un(this.value.arrayValue,t)}}class Gp extends Pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Un(this.value.arrayValue,t)}}class xp extends Pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ec(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Un(this.value.arrayValue,i))}}class bi{constructor(e,t){this.position=e,this.inclusive=t}}class En{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function no(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Jt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.$=null,this.S=null,this.startAt,this.endAt}}function io(n){return!ns(n.limit)&&n.limitType==="L"}function ss(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function os(n){for(const e of n.filters)if(e.N())return e.field;return null}function kc(n){return n.collectionGroup!==null}function _r(n){const e=jn(n);if(e.$===null){e.$=[];const t=os(e),i=ss(e);if(t!==null&&i===null)t.isKeyField()||e.$.push(new En(t)),e.$.push(new En(me.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.$.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new En(me.keyField(),s))}}}return e.$}function yr(n){const e=jn(n);if(!e.S)if(e.limitType==="F")e.S=to(e.path,e.collectionGroup,_r(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of _r(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new En(s.field,o))}const i=e.endAt?new bi(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new bi(e.startAt.position,!e.startAt.inclusive):null;e.S=to(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}return e.S}function Yp(n,e){return function(t,i){if(t.limit!==i.limit||t.orderBy.length!==i.orderBy.length)return!1;for(let o=0;o<t.orderBy.length;o++)if(!Kp(t.orderBy[o],i.orderBy[o]))return!1;if(t.filters.length!==i.filters.length)return!1;for(let o=0;o<t.filters.length;o++)if(r=t.filters[o],s=i.filters[o],r.op!==s.op||!r.field.isEqual(s.field)||!Jt(r.value,s.value))return!1;var r,s;return t.collectionGroup===i.collectionGroup&&!!t.path.isEqual(i.path)&&!!no(t.startAt,i.startAt)&&no(t.endAt,i.endAt)}(yr(n),yr(e))&&n.limitType===e.limitType}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!_i(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,i){if(t.F){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(i)?"-0":i}}(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this._=void 0}}class Sc extends ji{}class Rc extends ji{constructor(e){super(),this.elements=e}}class Nc extends ji{constructor(e){super(),this.elements=e}}class Oc extends ji{constructor(e,t){super(),this.q=e,this.O=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.field=e,this.transform=t}}class re{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new re}static exists(e){return new re(void 0,e)}static updateTime(e){return new re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Wi{}class Pc extends Wi{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}}class as extends Wi{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}class zi extends Wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Dc extends Wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Qp{constructor(e,t){this.databaseId=e,this.F=t}}function vr(n,e){return n.F?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zp(n,e){return n.F?e.toBase64():e.toUint8Array()}function $p(n,e){return vr(n,e.toTimestamp())}function wr(n){return ce(!!n),Ie.fromTimestamp(function(e){const t=At(e);return new he(t.seconds,t.nanos)}(n))}function cs(n,e){return function(t){return new j(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Ii(n,e){return cs(n.databaseId,e.path)}function br(n,e){const t=function(r){const s=j.fromString(r);return ce(Lc(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new w(E,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(E,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G((ce((i=t).length>4&&i.get(4)==="documents"),i.popFirst(5)));var i}function ro(n,e){return cs(n.databaseId,e)}function Cc(n){return new j(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function so(n,e,t){return{name:Ii(n,e),fields:t.value.mapValue.fields}}function em(n,e){return"found"in e?function(t,i){ce(!!i.found),i.found.name,i.found.updateTime;const r=br(t,i.found.name),s=wr(i.found.updateTime),o=new ue({mapValue:{fields:i.found.fields}});return Se.newFoundDocument(r,s,o)}(n,e):"missing"in e?function(t,i){ce(!!i.missing),ce(!!i.readTime);const r=br(t,i.missing),s=wr(i.readTime);return Se.newNoDocument(r,s)}(n,e):X()}function tm(n,e){let t;if(e instanceof Pc)t={update:so(n,e.key,e.value)};else if(e instanceof zi)t={delete:Ii(n,e.key)};else if(e instanceof as)t={update:so(n,e.key,e.data),updateMask:sm(e.fieldMask)};else{if(!(e instanceof Dc))return X();t={verify:Ii(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Sc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Nc)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Oc)return{fieldPath:s.field.canonicalString(),increment:o.O};throw X()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:$p(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(n,e.precondition)),t}function nm(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=ro(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ro(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(d=>function(u){if(u.op==="=="){if(eo(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NAN"}};if($s(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(eo(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NOT_NAN"}};if($s(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vt(u.field),op:rm(u.op),value:u.value}}}(d));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(t.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(l=>function(d){return{field:Vt(d.field),direction:im(d.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,l){return c.F||ns(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function im(n){return Jp[n]}function rm(n){return Xp[n]}function Vt(n){return{fieldPath:n.canonicalString()}}function sm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){return new Qp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,i=1e3,r=1.5,s=6e4){this.C=e,this.timerId=t,this.L=i,this.U=r,this.k=s,this.j=0,this.M=null,this.B=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.k}W(e){this.cancel();const t=Math.floor(this.j+this.Y()),i=Math.max(0,Date.now()-this.B),r=Math.max(0,t-i);r>0&&kt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.j} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.M=this.C.enqueueAfterDelay(this.timerId,r,()=>(this.B=Date.now(),e())),this.j*=this.U,this.j<this.L&&(this.j=this.L),this.j>this.k&&(this.j=this.k)}H(){this.M!==null&&(this.M.skipDelay(),this.M=null)}cancel(){this.M!==null&&(this.M.cancel(),this.M=null)}Y(){return(Math.random()-.5)*this.j}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=i,this.q=r,this.J=!1}X(){if(this.J)throw new w(Je,"The client has already been terminated.")}m(e,t,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.K.m(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===gi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(zt,r.toString())})}T(e,t,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.K.T(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===gi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(zt,r.toString())})}terminate(){this.J=!0}}async function sn(n,e){const t=jn(n),i=Cc(t.q)+"/documents",r={writes:e.map(s=>tm(t.q,s))};await t.m("Commit",i,r)}async function Uc(n,e){const t=jn(n),i=Cc(t.q)+"/documents",r={documents:e.map(c=>Ii(t.q,c))},s=await t.T("BatchGetDocuments",i,r),o=new Map;s.forEach(c=>{const l=em(t.q,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());ce(!!l),a.push(l)}),a}async function am(n,e){const t=jn(n),i=nm(t.q,yr(e));return(await t.T("RunQuery",i.parent,{structuredQuery:i.structuredQuery})).filter(r=>!!r.document).map(r=>function(s,o,a){const c=br(s,o.name),l=wr(o.updateTime),d=new ue({mapValue:{fields:o.fields}}),u=Se.newFoundDocument(c,l,d);return a&&u.setHasCommittedMutations(),a?u.setHasCommittedMutations():u}(t.q,r.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Map;function dt(n){if(n._terminated)throw new w(Je,"The client has already been terminated.");if(!Tn.has(n)){kt("ComponentProvider","Initializing Datastore");const s=function(c){return new Mp(c,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",i=n._persistenceKey,r=n._freezeSettings(),new Dp(e,t,i,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams))),o=ls(n._databaseId),a=function(c,l,d,u){return new om(c,l,d,u)}(n._authCredentials,n._appCheckCredentials,s,o);Tn.set(n,a)}var e,t,i,r;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Tn.get(n)}class oo{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new w(E,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(E,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(i,r,s,o){if(r===!0&&o===!0)throw new w(E,`${i} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,i){this._authCredentials=t,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oo({}),this._settingsFrozen=!1,e instanceof Yt?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new w(E,'"projectId" not provided in firebase.initializeApp.');return new Yt(r.options.projectId)}(e))}get app(){if(!this._app)throw new w(Je,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(Je,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oo(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new kp;switch(t.type){case"gapi":const i=t.client;return ce(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Np(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(E,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Tn.get(e);t&&(kt("ComponentProvider","Removing Datastore"),Tn.delete(e),t.terminate())}(this),Promise.resolve()}}function cm(n,e){const t=Qt(n,"firestore/lite");if(t.isInitialized())throw new w(Je,"Firestore can only be initialized once per app.");return t.initialize({options:e})}function lm(n=Cr()){return Qt(n,"firestore/lite").getImmediate()}function um(n,e,t,i={}){var r;const s=(n=Te(n,$e))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&fc("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=ae.MOCK_USER;else{o=Xl(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new w(E,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ae(c)}n._authCredentials=new Ap(new wc(o,a))}}function dm(n){return n=Te(n,$e),Yu(n.app,"firestore/lite"),n._delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Q(this.firestore,e,this._key)}}class fe{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new fe(this.firestore,e,this._query)}}class ye extends fe{constructor(e,t,i){super(e,t,new Pt(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Q(this.firestore,null,new G(e))}withConverter(e){return new ye(this.firestore,e,this._path)}}function hm(n,e,...t){if(n=b(n),ts("collection","path",e),n instanceof $e){const i=j.fromString(e,...t);return Ys(i),new ye(n,null,i)}{if(!(n instanceof Q||n instanceof ye))throw new w(E,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(j.fromString(e,...t));return Ys(i),new ye(n.firestore,null,i)}}function fm(n,e){if(n=Te(n,$e),ts("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new w(E,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new fe(n,null,function(t){return new Pt(j.emptyPath(),t)}(e))}function Fc(n,e,...t){if(n=b(n),arguments.length===1&&(e=Fp.R()),ts("doc","path",e),n instanceof $e){const i=j.fromString(e,...t);return Ks(i),new Q(n,null,new G(i))}{if(!(n instanceof Q||n instanceof ye))throw new w(E,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(j.fromString(e,...t));return Ks(i),new Q(n.firestore,n instanceof ye?n.converter:null,new G(i))}}function pm(n,e){return n=b(n),e=b(e),(n instanceof Q||n instanceof ye)&&(e instanceof Q||e instanceof ye)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Vc(n,e){return n=b(n),e=b(e),n instanceof fe&&e instanceof fe&&n.firestore===e.firestore&&Yp(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(E,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function mm(){return new ht("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Xe.fromBase64String(e))}catch(t){throw new w(E,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(E,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(E,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=/^__.*__$/;class _m{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pc(e,this.data,t,this.fieldTransforms)}}class Bc{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new as(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class xi{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.q=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Z(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new xi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.et({path:i,rt:!1});return r.st(e),r}it(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.et({path:i,rt:!1});return r.Z(),r}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return Ei(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(qc(this.tt)&&gm.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class ym{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=i||ls(e)}ht(e,t,i,r=!1){return new xi({tt:e,methodName:t,at:i,path:me.emptyPath(),rt:!1,ct:r},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function Dt(n){const e=n._freezeSettings(),t=ls(n._databaseId);return new ym(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ki(n,e,t,i,r,s={}){const o=n.ht(s.merge||s.mergeFields?2:0,e,t,r);fs("Data must be an object, but it was:",o,i);const a=Wc(i,o);let c,l;if(s.merge)c=new yi(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const u of s.mergeFields){const h=Ir(e,u,t);if(!o.contains(h))throw new w(E,`Field '${h}' is specified in your field mask but missing from your input data.`);Gc(d,h)||d.push(h)}c=new yi(d),l=o.fieldTransforms.filter(u=>c.covers(u.field))}else c=null,l=o.fieldTransforms;return new _m(new ue(a),c,l)}class Wn extends ft{_toFieldTransform(e){if(e.tt!==2)throw e.tt===1?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wn}}function jc(n,e,t){return new xi({tt:3,at:e.settings.at,methodName:n._methodName,rt:t},e.databaseId,e.q,e.ignoreUndefinedProperties)}class us extends ft{_toFieldTransform(e){return new Hi(e.path,new Sc)}isEqual(e){return e instanceof us}}class vm extends ft{constructor(e,t){super(e),this.lt=t}_toFieldTransform(e){const t=jc(this,e,!0),i=this.lt.map(s=>Ct(s,t)),r=new Rc(i);return new Hi(e.path,r)}isEqual(e){return this===e}}class wm extends ft{constructor(e,t){super(e),this.lt=t}_toFieldTransform(e){const t=jc(this,e,!0),i=this.lt.map(s=>Ct(s,t)),r=new Nc(i);return new Hi(e.path,r)}isEqual(e){return this===e}}class bm extends ft{constructor(e,t){super(e),this.ft=t}_toFieldTransform(e){const t=new Oc(e.q,Ac(e.q,this.ft));return new Hi(e.path,t)}isEqual(e){return this===e}}function ds(n,e,t,i){const r=n.ht(1,e,t);fs("Data must be an object, but it was:",r,i);const s=[],o=ue.empty();Hn(i,(c,l)=>{const d=ps(e,c,t);l=b(l);const u=r.it(d);if(l instanceof Wn)s.push(d);else{const h=Ct(l,u);h!=null&&(s.push(d),o.set(d,h))}});const a=new yi(s);return new Bc(o,a,r.fieldTransforms)}function hs(n,e,t,i,r,s){const o=n.ht(1,e,t),a=[Ir(e,i,t)],c=[r];if(s.length%2!=0)throw new w(E,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Ir(e,s[h])),c.push(s[h+1]);const l=[],d=ue.empty();for(let h=a.length-1;h>=0;--h)if(!Gc(l,a[h])){const m=a[h];let f=c[h];f=b(f);const g=o.it(m);if(f instanceof Wn)l.push(m);else{const _=Ct(f,g);_!=null&&(l.push(m),d.set(m,_))}}const u=new yi(l);return new Bc(d,u,o.fieldTransforms)}function Hc(n,e,t,i=!1){return Ct(t,n.ht(i?4:3,e))}function Ct(n,e){if(zc(n=b(n)))return fs("Unsupported field value:",e,n),Wc(n,e);if(n instanceof ft)return function(t,i){if(!qc(i.tt))throw i.ut(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ut(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(t,i){const r=[];let s=0;for(const o of t){let a=Ct(o,i.ot(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(n,e)}return function(t,i){if((t=b(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Ac(i.q,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=he.fromDate(t);return{timestampValue:vr(i.q,r)}}if(t instanceof he){const r=new he(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vr(i.q,r)}}if(t instanceof Gi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Rt)return{bytesValue:Zp(i.q,t._byteString)};if(t instanceof Q){const r=i.databaseId,s=t.firestore._databaseId;if(!s.isEqual(r))throw i.ut(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:cs(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.ut(`Unsupported field value: ${qi(t)}`)}(n,e)}function Wc(n,e){const t={};return function(i){for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(n,(i,r)=>{const s=Ct(r,e.nt(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function zc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof Gi||n instanceof Rt||n instanceof Q||n instanceof ft)}function fs(n,e,t){if(!zc(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=qi(t);throw i==="an object"?e.ut(n+" a custom object"):e.ut(n+" "+i)}}function Ir(n,e,t){if((e=b(e))instanceof ht)return e._internalPath;if(typeof e=="string")return ps(n,e);throw Ei("Field path arguments must be of type string or ",n,!1,void 0,t)}const Im=new RegExp("[~\\*/\\[\\]]");function ps(n,e,t){if(e.search(Im)>=0)throw Ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ht(...e.split("."))._internalPath}catch{throw Ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ei(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new w(E,a+n+c)}function Gc(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ms(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ms extends at{data(){return super.data()}}class Ti{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function xc(n,e){return n=b(n),e=b(e),n instanceof at&&e instanceof at?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ti&&e instanceof Ti&&Vc(n.query,e.query)&&is(n.docs,e.docs,xc)}function gs(n,e){return typeof e=="string"?ps(n,e):e instanceof ht?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{}function Em(n,...e){for(const t of e)n=t._apply(n);return n}class Tm extends on{constructor(e,t,i){super(),this.dt=e,this.wt=t,this.yt=i,this.type="where"}_apply(e){const t=Dt(e.firestore),i=function(r,s,o,a,c,l,d){let u;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(E,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){co(d,l);const m=[];for(const f of d)m.push(ao(a,r,f));u={arrayValue:{values:m}}}else u=ao(a,r,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||co(d,l),u=Hc(o,s,d,l==="in"||l==="not-in");const h=Pe.create(c,l,u);return function(m,f){if(f.N()){const _=os(m);if(_!==null&&!_.isEqual(f.field))throw new w(E,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${f.field.toString()}'`);const v=ss(m);v!==null&&Qc(m,f.field,v)}const g=function(_,v){for(const D of _.filters)if(v.indexOf(D.op)>=0)return D.op;return null}(m,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(f.op));if(g!==null)throw g===f.op?new w(E,`Invalid query. You cannot use more than one '${f.op.toString()}' filter.`):new w(E,`Invalid query. You cannot use '${f.op.toString()}' filters with '${g.toString()}' filters.`)}(r,h),h}(e._query,"where",t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new fe(e.firestore,e.converter,function(r,s){const o=r.filters.concat([s]);return new Pt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,i))}}function km(n,e,t){const i=e,r=gs("where",n);return new Tm(r,i,t)}class Am extends on{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(i,r,s){if(i.startAt!==null)throw new w(E,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new w(E,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new En(r,s);return function(a,c){if(ss(a)===null){const l=os(a);l!==null&&Qc(a,l,c.field)}}(i,o),o}(e._query,this.dt,this._t);return new fe(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new Pt(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Sm(n,e="asc"){const t=e,i=gs("orderBy",n);return new Am(i,t)}class Kc extends on{constructor(e,t,i){super(),this.type=e,this.gt=t,this.vt=i}_apply(e){return new fe(e.firestore,e.converter,function(t,i,r){return new Pt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),i,r,t.startAt,t.endAt)}(e._query,this.gt,this.vt))}}function Rm(n){return bc("limit",n),new Kc("limit",n,"F")}function Nm(n){return bc("limitToLast",n),new Kc("limitToLast",n,"L")}class Yc extends on{constructor(e,t,i){super(),this.type=e,this.bt=t,this.Et=i}_apply(e){const t=Xc(e,this.type,this.bt,this.Et);return new fe(e.firestore,e.converter,function(i,r){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,r,i.endAt)}(e._query,t))}}function Om(...n){return new Yc("startAt",n,!0)}function Pm(...n){return new Yc("startAfter",n,!1)}class Jc extends on{constructor(e,t,i){super(),this.type=e,this.bt=t,this.Et=i}_apply(e){const t=Xc(e,this.type,this.bt,this.Et);return new fe(e.firestore,e.converter,function(i,r){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,r)}(e._query,t))}}function Dm(...n){return new Jc("endBefore",n,!1)}function Cm(...n){return new Jc("endAt",n,!0)}function Xc(n,e,t,i){if(t[0]=b(t[0]),t[0]instanceof at)return function(r,s,o,a,c){if(!a)throw new w(Qr,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const d of _r(r))if(d.field.isKeyField())l.push(wi(s,a.key));else{const u=a.data.field(d.field);if(rs(u))throw new w(E,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(u===null){const h=d.field.canonicalString();throw new w(E,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}l.push(u)}return new bi(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const r=Dt(n.firestore);return function(s,o,a,c,l,d){const u=s.explicitOrderBy;if(l.length>u.length)throw new w(E,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let m=0;m<l.length;m++){const f=l[m];if(u[m].field.isKeyField()){if(typeof f!="string")throw new w(E,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof f}`);if(!kc(s)&&f.indexOf("/")!==-1)throw new w(E,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${f}' contains a slash.`);const g=s.path.child(j.fromString(f));if(!G.isDocumentKey(g))throw new w(E,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const _=new G(g);h.push(wi(o,_))}else{const g=Hc(a,c,f);h.push(g)}}return new bi(h,d)}(n._query,n.firestore._databaseId,r,e,t,i)}}function ao(n,e,t){if(typeof(t=b(t))=="string"){if(t==="")throw new w(E,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kc(e)&&t.indexOf("/")!==-1)throw new w(E,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(j.fromString(t));if(!G.isDocumentKey(i))throw new w(E,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return wi(n,new G(i))}if(t instanceof Q)return wi(n,t._key);throw new w(E,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qi(t)}.`)}function co(n,e){if(!Array.isArray(n)||n.length===0)throw new w(E,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new w(E,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Qc(n,e,t){if(!t.isEqual(e))throw new w(E,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class _s extends class{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return J(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw X()}}convertObject(e,t){const i={};return Hn(e.fields,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertGeoPoint(e){return new Gi(J(e.latitude),J(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ic(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Mn(e));default:return null}}convertTimestamp(e){const t=At(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=j.fromString(e);ce(Lc(i));const r=new Yt(i.get(1),i.get(3)),s=new G(i.popFirst(5));return r.isEqual(t)||Bi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}function Lm(n){const e=dt((n=Te(n,Q)).firestore),t=new _s(n.firestore);return Uc(e,[n._key]).then(i=>{ce(i.length===1);const r=i[0];return new at(n.firestore,t,n._key,r.isFoundDocument()?r:null,n.converter)})}function Mm(n){(function(i){if(io(i)&&i.explicitOrderBy.length===0)throw new w($r,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Te(n,fe))._query);const e=dt(n.firestore),t=new _s(n.firestore);return am(e,n._query).then(i=>{const r=i.map(s=>new ms(n.firestore,t,s.key,s,n.converter));return io(n._query)&&r.reverse(),new Ti(n,r)})}function Um(n,e,t){const i=Yi((n=Te(n,Q)).converter,e,t),r=Ki(Dt(n.firestore),"setDoc",n._key,i,n.converter!==null,t);return sn(dt(n.firestore),[r.toMutation(n._key,re.none())])}function Fm(n,e,t,...i){const r=Dt((n=Te(n,Q)).firestore);let s;return s=typeof(e=b(e))=="string"||e instanceof ht?hs(r,"updateDoc",n._key,e,t,i):ds(r,"updateDoc",n._key,e),sn(dt(n.firestore),[s.toMutation(n._key,re.exists(!0))])}function Vm(n){return sn(dt((n=Te(n,Q)).firestore),[new zi(n._key,re.none())])}function Bm(n,e){const t=Fc(n=Te(n,ye)),i=Yi(n.converter,e),r=Ki(Dt(n.firestore),"addDoc",t._key,i,t.converter!==null,{});return sn(dt(n.firestore),[r.toMutation(t._key,re.exists(!1))]).then(()=>t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){return new Wn("deleteField")}function jm(){return new us("serverTimestamp")}function Hm(...n){return new vm("arrayUnion",n)}function Wm(...n){return new wm("arrayRemove",n)}function zm(n){return new bm("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Dt(e)}set(e,t,i){this._verifyNotCommitted();const r=yt(e,this._firestore),s=Yi(r.converter,t,i),o=Ki(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,re.none())),this}update(e,t,i,...r){this._verifyNotCommitted();const s=yt(e,this._firestore);let o;return o=typeof(t=b(t))=="string"||t instanceof ht?hs(this._dataReader,"WriteBatch.update",s._key,t,i,r):ds(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,re.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=yt(e,this._firestore);return this._mutations=this._mutations.concat(new zi(t._key,re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new w(Je,"A write batch can no longer be used after commit() has been called.")}}function yt(n,e){if((n=b(n)).firestore!==e)throw new w(E,"Provided document reference is from a different Firestore instance.");return n}function Gm(n){const e=dt(n=Te(n,$e));return new Zc(n,t=>sn(e,t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new w(E,"Firestore transactions require all reads to be executed before all writes.");const t=await Uc(this.datastore,e);return t.forEach(i=>this.recordVersion(i)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new zi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,i)=>{const r=G.fromPath(i);this.mutations.push(new Dc(r,this.precondition(r)))}),await sn(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw X();t=Ie.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new w(Zr,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?re.updateTime(t):re.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ie.min()))throw new w(E,"Can't update a document that doesn't exist.");return re.updateTime(t)}return re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t,i,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=i,this.deferred=r,this.Tt=5,this.It=new Mc(this.asyncQueue,"transaction_retry")}run(){this.Tt-=1,this.At()}At(){this.It.W(async()=>{const e=new xm(this.datastore),t=this.Rt(e);t&&t.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.Pt(r)}))}).catch(i=>{this.Pt(i)})})}Rt(e){try{const t=this.updateFunction(e);return!ns(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pt(e){this.Tt>0&&this.Vt(e)?(this.Tt-=1,this.asyncQueue.enqueueAndForget(()=>(this.At(),Promise.resolve()))):this.deferred.reject(e)}Vt(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!function(i){switch(i){default:return X();case Xr:case zt:case pc:case gc:case yc:case vc:case gi:return!1;case E:case Qr:case Ep:case mc:case Je:case Zr:case _c:case $r:case Tp:return!0}}(t)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,a=new ys(e,t,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(Xr,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.Dt=Promise.resolve(),this.Nt=[],this.$t=!1,this.St=[],this.Ft=null,this.xt=!1,this.qt=!1,this.Ot=[],this.It=new Mc(this,"async_queue_retry"),this.Ct=()=>{const t=sr();t&&kt("AsyncQueue","Visibility state changed to "+t.visibilityState),this.It.H()};const e=sr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ct)}get isShuttingDown(){return this.$t}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Lt(),this.Ut(e)}enterRestrictedMode(e){if(!this.$t){this.$t=!0,this.qt=e||!1;const t=sr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ct)}}enqueue(e){if(this.Lt(),this.$t)return new Promise(()=>{});const t=new es;return this.Ut(()=>this.$t&&this.qt?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Nt.push(e),this.kt()))}async kt(){if(this.Nt.length!==0){try{await this.Nt[0](),this.Nt.shift(),this.It.reset()}catch(e){if(!function(t){return t.name==="IndexedDbTransactionError"}(e))throw e;kt("AsyncQueue","Operation failed with retryable error: "+e)}this.Nt.length>0&&this.It.W(()=>this.kt())}}Ut(e){const t=this.Dt.then(()=>(this.xt=!0,e().catch(i=>{this.Ft=i,this.xt=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Bi("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.xt=!1,i))));return this.Dt=t,t}enqueueAfterDelay(e,t,i){this.Lt(),this.Ot.indexOf(e)>-1&&(t=0);const r=ys.createAndSchedule(this,e,t,i,s=>this.jt(s));return this.St.push(r),r}Lt(){this.Ft&&X()}verifyOperationInProgress(){}async Mt(){let e;do e=this.Dt,await e;while(e!==this.Dt)}Bt(e){for(const t of this.St)if(t.timerId===e)return!0;return!1}zt(e){return this.Mt().then(()=>{this.St.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.St)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mt()})}Gt(e){this.Ot.push(e)}jt(e){const t=this.St.indexOf(e);this.St.splice(t,1)}}class $c{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Dt(e)}get(e){const t=yt(e,this._firestore),i=new _s(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return X();const s=r[0];if(s.isFoundDocument())return new at(this._firestore,i,s.key,s,t.converter);if(s.isNoDocument())return new at(this._firestore,i,t._key,null,t.converter);throw X()})}set(e,t,i){const r=yt(e,this._firestore),s=Yi(r.converter,t,i),o=Ki(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,t,i,...r){const s=yt(e,this._firestore);let o;return o=typeof(t=b(t))=="string"||t instanceof ht?hs(this._dataReader,"Transaction.update",s._key,t,i,r):ds(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=yt(e,this._firestore);return this._transaction.delete(t._key),this}}function Jm(n,e){const t=dt(n=Te(n,$e)),i=new es;return new Km(new Ym,t,r=>e(new $c(n,r)),i).run(),i.promise}(function(n){rn=n})(`${Zt}_lite`),It(new ot("firestore/lite",(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),i=new $e(t,new Sp(n.getProvider("auth-internal")),new Pp(n.getProvider("app-check-internal")));return e&&i._setSettings(e),i},"PUBLIC")),Ne("firestore-lite","3.4.6",""),Ne("firestore-lite","3.4.6","esm2017");var G_=Object.freeze(Object.defineProperty({__proto__:null,Bytes:Rt,CollectionReference:ye,DocumentReference:Q,DocumentSnapshot:at,FieldPath:ht,FieldValue:ft,Firestore:$e,FirestoreError:w,GeoPoint:Gi,Query:fe,QueryConstraint:on,QueryDocumentSnapshot:ms,QuerySnapshot:Ti,Timestamp:he,Transaction:$c,WriteBatch:Zc,addDoc:Bm,arrayRemove:Wm,arrayUnion:Hm,collection:hm,collectionGroup:fm,connectFirestoreEmulator:um,deleteDoc:Vm,deleteField:qm,doc:Fc,documentId:mm,endAt:Cm,endBefore:Dm,getDoc:Lm,getDocs:Mm,getFirestore:lm,increment:zm,initializeFirestore:cm,limit:Rm,limitToLast:Nm,orderBy:Sm,query:Em,queryEqual:Vc,refEqual:pm,runTransaction:Jm,serverTimestamp:jm,setDoc:Um,setLogLevel:Ip,snapshotEqual:xc,startAfter:Pm,startAt:Om,terminate:dm,updateDoc:Fm,where:km,writeBatch:Gm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="firebasestorage.googleapis.com",tl="storageBucket",Xm=2*60*1e3,Qm=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends lt{constructor(e,t){super(or(e),`Firebase Storage: ${t} (${or(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,te.prototype)}_codeEquals(e){return or(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function or(n){return"storage/"+n}function Zm(){const n="An unknown error occurred, please check the error payload for server response.";return new te("unknown",n)}function $m(n){return new te("object-not-found","Object '"+n+"' does not exist.")}function eg(n){return new te("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new te("unauthenticated",n)}function ng(){return new te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ig(n){return new te("unauthorized","User does not have permission to access '"+n+"'.")}function rg(){return new te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function sg(){return new te("canceled","User canceled the upload/download.")}function og(n){return new te("invalid-url","Invalid URL '"+n+"'.")}function ag(n){return new te("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function cg(){return new te("no-default-bucket","No default bucket found. Did you set the '"+tl+"' property when initializing the app?")}function Er(n){return new te("invalid-argument",n)}function nl(){return new te("app-deleted","The Firebase app was deleted.")}function lg(n){return new te("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hn(n){throw new te("internal-error","Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=ge.makeFromUrl(e,t)}catch{return new ge(e,"")}if(i.path==="")return i;throw ag(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const d="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",m=new RegExp(`^https?://${u}/${d}/b/${r}/o${h}`,"i"),f={bucket:1,path:3},g=t===el?"(?:storage.googleapis.com|storage.cloud.google.com)":t,_="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${_}`,"i"),O=[{regex:a,indices:c,postModify:s},{regex:m,indices:f,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<O.length;R++){const V=O[R],A=V.regex.exec(e);if(A){const U=A[V.indices.bucket];let P=A[V.indices.path];P||(P=""),i=new ge(U,P),V.postModify(i);break}}if(i==null)throw og(e);return i}}class ug{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n,e,t){let i=1,r=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(..._){l||(l=!0,e.apply(null,_))}function u(_){r=setTimeout(()=>{r=null,n(m,c())},_)}function h(){s&&clearTimeout(s)}function m(_,...v){if(l){h();return}if(_){h(),d.call(null,_,...v);return}if(c()||o){h(),d.call(null,_,...v);return}i<64&&(i*=2);let O;a===1?(a=2,O=0):O=(i+Math.random())*1e3,u(O)}let f=!1;function g(_){f||(f=!0,h(),!l&&(r!==null?(_||(a=2),clearTimeout(r),u(0)):_||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,g(!0)},t),g}function hg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){return n!==void 0}function lo(n,e,t,i){if(i<e)throw Er(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Er(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function mg(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(bt||(bt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t,i,r,s,o,a,c,l,d,u){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,m)=>{this.resolve_=h,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Jn(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===bt.NO_ERROR,c=s.getStatus();if(!a||this.isRetryStatusCode_(c)){const d=s.getErrorCode()===bt.ABORT;i(!1,new Jn(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Jn(l,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());fg(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Zm();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?nl():sg();o(c)}else{const c=rg();o(c)}};this.canceled_?t(!1,new Jn(!1,null,!0)):this.backoffId_=dg(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return t||r||s}}class Jn{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function _g(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function yg(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function vg(n,e){e&&(n["X-Firebase-GMPID"]=e)}function wg(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function bg(n,e,t,i,r,s){const o=mg(n.urlParams),a=n.url+o,c=Object.assign({},n.headers);return vg(c,e),_g(c,t),yg(c,s),wg(c,i),new gg(a,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Eg(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Tg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}class kg{constructor(e,t,i,r){this.url=e,this.method=t,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function Ag(n){function e(t,i){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=ng():r=tg():t.getStatus()===402?r=eg(n.bucket):t.getStatus()===403?r=ig(n.path):r=i,r.serverResponse=i.serverResponse,r}return e}function Sg(n){const e=Ag(n);function t(i,r){let s=e(i,r);return i.getStatus()===404&&(s=$m(n.path)),s.serverResponse=r.serverResponse,s}return t}function Rg(n,e,t){const i=e.fullServerUrl(),r=pg(i,n.host,n._protocol)+"?alt=media",s="GET",o=n.maxOperationRetryTime,a=new kg(r,s,(c,l)=>l,o);return a.errorHandler=Sg(e),t!==void 0&&(a.headers.Range=`bytes=0-${t}`,a.successCodes=[200,206]),a}class Ng{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,r){if(this.sent_)throw hn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Og extends Ng{initXhr(){this.xhr_.responseType="arraybuffer"}}function Pg(){return new Og}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this._service=e,t instanceof ge?this._location=t:this._location=ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Nt(e,t)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tg(this._location.path)}get storage(){return this._service}get parent(){const e=Ig(this._location.path);if(e===null)return null;const t=new ge(this._location.bucket,e);return new Nt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw lg(e)}}function Dg(n,e){n._throwIfRoot("getBytes");const t=Rg(n.storage,n._location,e);return n.storage.makeRequestWithTokens(t,Pg).then(i=>e!==void 0?i.slice(0,e):i)}function Cg(n,e){const t=Eg(n._location.path,e),i=new ge(n._location.bucket,t);return new Nt(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n){return/^[A-Za-z]+:\/\//.test(n)}function Mg(n,e){return new Nt(n,e)}function il(n,e){if(n instanceof vs){const t=n;if(t._bucket==null)throw cg();const i=new Nt(t,t._bucket);return e!=null?il(i,e):i}else return e!==void 0?Cg(n,e):n}function Ug(n,e){if(e&&Lg(e)){if(n instanceof vs)return Mg(n,e);throw Er("To use ref(service, url), the first argument must be a Storage instance.")}else return il(n,e)}function uo(n,e){const t=e==null?void 0:e[tl];return t==null?null:ge.makeFromBucketSpec(t,n)}class vs{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=el,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xm,this._maxUploadRetryTime=Qm,this._requests=new Set,r!=null?this._bucket=ge.makeFromBucketSpec(r,this._host):this._bucket=uo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=uo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nt(this,e)}_makeRequest(e,t,i,r){if(this._deleted)return new ug(nl());{const s=bg(e,this._appId,i,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const ho="@firebase/storage",fo="0.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n,e){return n=b(n),Dg(n,e)}function K_(n,e){return n=b(n),Ug(n,e)}function Y_(n=Cr(),e){return n=b(n),Qt(n,rl).getImmediate({identifier:e})}function Fg(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new vs(t,i,r,e,Zt)}function Vg(){It(new ot(rl,Fg,"PUBLIC").setMultipleInstances(!0)),Ne(ho,fo,""),Ne(ho,fo,"esm2017")}Vg();var Bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Bg=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Xn=0;Xn<Bt.length;Xn++)Bg[Bt.charCodeAt(Xn)]=Xn;var J_=function(n){var e=new Uint8Array(n),t,i=e.length,r="";for(t=0;t<i;t+=3)r+=Bt[e[t]>>2],r+=Bt[(e[t]&3)<<4|e[t+1]>>4],r+=Bt[(e[t+1]&15)<<2|e[t+2]>>6],r+=Bt[e[t+2]&63];return i%3===2?r=r.substring(0,r.length-1)+"=":i%3===1&&(r=r.substring(0,r.length-2)+"=="),r};function po(n){return Object.prototype.toString.call(n)==="[object Date]"}function Tr(n,e,t,i){if(typeof t=="number"||po(t)){const r=i-t,s=(t-e)/(n.dt||1/60),o=n.opts.stiffness*r,a=n.opts.damping*s,c=(o-a)*n.inv_mass,l=(s+c)*n.dt;return Math.abs(l)<n.opts.precision&&Math.abs(r)<n.opts.precision?i:(n.settled=!1,po(t)?new Date(t.getTime()+l):t+l)}else{if(Array.isArray(t))return t.map((r,s)=>Tr(n,e[s],t[s],i[s]));if(typeof t=="object"){const r={};for(const s in t)r[s]=Tr(n,e[s],t[s],i[s]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function qg(n,e={}){const t=ca(n),{stiffness:i=.15,damping:r=.8,precision:s=.01}=e;let o,a,c,l=n,d=n,u=1,h=0,m=!1;function f(_,v={}){d=_;const D=c={};if(n==null||v.hard||g.stiffness>=1&&g.damping>=1)return m=!0,o=ri(),l=_,t.set(n=d),Promise.resolve();if(v.soft){const O=v.soft===!0?.5:+v.soft;h=1/(O*60),u=0}return a||(o=ri(),m=!1,a=Nr(O=>{if(m)return m=!1,a=null,!1;u=Math.min(u+h,1);const R={inv_mass:u,opts:g,settled:!0,dt:(O-o)*60/1e3},V=Tr(R,l,n,d);return o=O,l=n,t.set(n=V),R.settled&&(a=null),!R.settled})),new Promise(O=>{a.promise.then(()=>{D===c&&O()})})}const g={set:f,update:(_,v)=>f(_(d,n),v),subscribe:t.subscribe,stiffness:i,damping:r,precision:s};return g}function mo(n,e,t){const i=n.slice();return i[28]=e[t],i[30]=t,i}function go(n){let e,t,i,r,s=(n[6]==="label"||n[7]==="label")&&_o(n);return{c(){e=q("span"),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0,style:!0});var a=H(e);s&&s.l(a),a.forEach(N),this.h()},h(){T(e,"class","pip first"),T(e,"style",t=n[14]+": 0%;"),S(e,"selected",n[18](n[0])),S(e,"in-range",n[17](n[0]))},m(o,a){W(o,e,a),s&&s.m(e,null),i||(r=[z(e,"click",function(){xe(n[21](n[0]))&&n[21](n[0]).apply(this,arguments)}),z(e,"touchend",kn(function(){xe(n[21](n[0]))&&n[21](n[0]).apply(this,arguments)}))],i=!0)},p(o,a){n=o,n[6]==="label"||n[7]==="label"?s?s.p(n,a):(s=_o(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&16384&&t!==(t=n[14]+": 0%;")&&T(e,"style",t),a&262145&&S(e,"selected",n[18](n[0])),a&131073&&S(e,"in-range",n[17](n[0]))},d(o){o&&N(e),s&&s.d(),i=!1,Ee(r)}}}function _o(n){let e,t=n[12](n[16](n[0]),0,0)+"",i,r=n[10]&&yo(n),s=n[11]&&vo(n);return{c(){e=q("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(N),this.h()},h(){T(e,"class","pipVal")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[10]?r?r.p(o,a):(r=yo(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&69633&&t!==(t=o[12](o[16](o[0]),0,0)+"")&&we(i,t),o[11]?s?s.p(o,a):(s=vo(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&N(e),r&&r.d(),s&&s.d()}}}function yo(n){let e,t;return{c(){e=q("span"),t=se(n[10]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[10]),r.forEach(N),this.h()},h(){T(e,"class","pipVal-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&1024&&we(t,i[10])},d(i){i&&N(e)}}}function vo(n){let e,t;return{c(){e=q("span"),t=se(n[11]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[11]),r.forEach(N),this.h()},h(){T(e,"class","pipVal-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&2048&&we(t,i[11])},d(i){i&&N(e)}}}function wo(n){let e,t=Array(n[20]+1),i=[];for(let r=0;r<t.length;r+=1)i[r]=ko(mo(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=si()},l(r){for(let s=0;s<i.length;s+=1)i[s].l(r);e=si()},m(r,s){for(let o=0;o<i.length;o+=1)i[o].m(r,s);W(r,e,s)},p(r,s){if(s&4120131){t=Array(r[20]+1);let o;for(o=0;o<t.length;o+=1){const a=mo(r,t,o);i[o]?i[o].p(a,s):(i[o]=ko(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){Jo(i,r),r&&N(e)}}}function bo(n){let e,t,i,r,s,o=(n[6]==="label"||n[9]==="label")&&Io(n);return{c(){e=q("span"),o&&o.c(),t=Gt(),this.h()},l(a){e=K(a,"SPAN",{class:!0,style:!0});var c=H(e);o&&o.l(c),t=xt(c),c.forEach(N),this.h()},h(){T(e,"class","pip"),T(e,"style",i=n[14]+": "+n[15](n[19](n[30]))+"%;"),S(e,"selected",n[18](n[19](n[30]))),S(e,"in-range",n[17](n[19](n[30])))},m(a,c){W(a,e,c),o&&o.m(e,null),x(e,t),r||(s=[z(e,"click",function(){xe(n[21](n[19](n[30])))&&n[21](n[19](n[30])).apply(this,arguments)}),z(e,"touchend",kn(function(){xe(n[21](n[19](n[30])))&&n[21](n[19](n[30])).apply(this,arguments)}))],r=!0)},p(a,c){n=a,n[6]==="label"||n[9]==="label"?o?o.p(n,c):(o=Io(n),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c&573440&&i!==(i=n[14]+": "+n[15](n[19](n[30]))+"%;")&&T(e,"style",i),c&786432&&S(e,"selected",n[18](n[19](n[30]))),c&655360&&S(e,"in-range",n[17](n[19](n[30])))},d(a){a&&N(e),o&&o.d(),r=!1,Ee(s)}}}function Io(n){let e,t=n[12](n[19](n[30]),n[30],n[15](n[19](n[30])))+"",i,r=n[10]&&Eo(n),s=n[11]&&To(n);return{c(){e=q("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(N),this.h()},h(){T(e,"class","pipVal")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[10]?r?r.p(o,a):(r=Eo(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&561152&&t!==(t=o[12](o[19](o[30]),o[30],o[15](o[19](o[30])))+"")&&we(i,t),o[11]?s?s.p(o,a):(s=To(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&N(e),r&&r.d(),s&&s.d()}}}function Eo(n){let e,t;return{c(){e=q("span"),t=se(n[10]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[10]),r.forEach(N),this.h()},h(){T(e,"class","pipVal-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&1024&&we(t,i[10])},d(i){i&&N(e)}}}function To(n){let e,t;return{c(){e=q("span"),t=se(n[11]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[11]),r.forEach(N),this.h()},h(){T(e,"class","pipVal-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&2048&&we(t,i[11])},d(i){i&&N(e)}}}function ko(n){let e=n[19](n[30])!==n[0]&&n[19](n[30])!==n[1],t,i=e&&bo(n);return{c(){i&&i.c(),t=si()},l(r){i&&i.l(r),t=si()},m(r,s){i&&i.m(r,s),W(r,t,s)},p(r,s){s&524291&&(e=r[19](r[30])!==r[0]&&r[19](r[30])!==r[1]),e?i?i.p(r,s):(i=bo(r),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(r){i&&i.d(r),r&&N(t)}}}function Ao(n){let e,t,i,r,s=(n[6]==="label"||n[8]==="label")&&So(n);return{c(){e=q("span"),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0,style:!0});var a=H(e);s&&s.l(a),a.forEach(N),this.h()},h(){T(e,"class","pip last"),T(e,"style",t=n[14]+": 100%;"),S(e,"selected",n[18](n[1])),S(e,"in-range",n[17](n[1]))},m(o,a){W(o,e,a),s&&s.m(e,null),i||(r=[z(e,"click",function(){xe(n[21](n[1]))&&n[21](n[1]).apply(this,arguments)}),z(e,"touchend",kn(function(){xe(n[21](n[1]))&&n[21](n[1]).apply(this,arguments)}))],i=!0)},p(o,a){n=o,n[6]==="label"||n[8]==="label"?s?s.p(n,a):(s=So(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&16384&&t!==(t=n[14]+": 100%;")&&T(e,"style",t),a&262146&&S(e,"selected",n[18](n[1])),a&131074&&S(e,"in-range",n[17](n[1]))},d(o){o&&N(e),s&&s.d(),i=!1,Ee(r)}}}function So(n){let e,t=n[12](n[16](n[1]),n[20],100)+"",i,r=n[10]&&Ro(n),s=n[11]&&No(n);return{c(){e=q("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(N),this.h()},h(){T(e,"class","pipVal")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[10]?r?r.p(o,a):(r=Ro(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&1118210&&t!==(t=o[12](o[16](o[1]),o[20],100)+"")&&we(i,t),o[11]?s?s.p(o,a):(s=No(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&N(e),r&&r.d(),s&&s.d()}}}function Ro(n){let e,t;return{c(){e=q("span"),t=se(n[10]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[10]),r.forEach(N),this.h()},h(){T(e,"class","pipVal-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&1024&&we(t,i[10])},d(i){i&&N(e)}}}function No(n){let e,t;return{c(){e=q("span"),t=se(n[11]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[11]),r.forEach(N),this.h()},h(){T(e,"class","pipVal-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&2048&&we(t,i[11])},d(i){i&&N(e)}}}function jg(n){let e,t,i,r=(n[6]&&n[7]!==!1||n[7])&&go(n),s=(n[6]&&n[9]!==!1||n[9])&&wo(n),o=(n[6]&&n[8]!==!1||n[8])&&Ao(n);return{c(){e=q("div"),r&&r.c(),t=Gt(),s&&s.c(),i=Gt(),o&&o.c(),this.h()},l(a){e=K(a,"DIV",{class:!0});var c=H(e);r&&r.l(c),t=xt(c),s&&s.l(c),i=xt(c),o&&o.l(c),c.forEach(N),this.h()},h(){T(e,"class","rangePips"),S(e,"disabled",n[5]),S(e,"hoverable",n[4]),S(e,"vertical",n[2]),S(e,"reversed",n[3]),S(e,"focus",n[13])},m(a,c){W(a,e,c),r&&r.m(e,null),x(e,t),s&&s.m(e,null),x(e,i),o&&o.m(e,null)},p(a,[c]){a[6]&&a[7]!==!1||a[7]?r?r.p(a,c):(r=go(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),a[6]&&a[9]!==!1||a[9]?s?s.p(a,c):(s=wo(a),s.c(),s.m(e,i)):s&&(s.d(1),s=null),a[6]&&a[8]!==!1||a[8]?o?o.p(a,c):(o=Ao(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null),c&32&&S(e,"disabled",a[5]),c&16&&S(e,"hoverable",a[4]),c&4&&S(e,"vertical",a[2]),c&8&&S(e,"reversed",a[3]),c&8192&&S(e,"focus",a[13])},i:_e,o:_e,d(a){a&&N(e),r&&r.d(),s&&s.d(),o&&o.d()}}}function Hg(n,e,t){let i,r,s,o,a,{range:c=!1}=e,{min:l=0}=e,{max:d=100}=e,{step:u=1}=e,{values:h=[(d+l)/2]}=e,{vertical:m=!1}=e,{reversed:f=!1}=e,{hoverable:g=!0}=e,{disabled:_=!1}=e,{pipstep:v=void 0}=e,{all:D=!0}=e,{first:O=void 0}=e,{last:R=void 0}=e,{rest:V=void 0}=e,{prefix:A=""}=e,{suffix:U=""}=e,{formatter:P=(I,Ce)=>I}=e,{focus:L=void 0}=e,{orientationStart:ke=void 0}=e,{percentOf:et=void 0}=e,{moveHandle:De=void 0}=e,{fixFloat:be=void 0}=e;function pt(I){_||De(void 0,I)}return n.$$set=I=>{"range"in I&&t(22,c=I.range),"min"in I&&t(0,l=I.min),"max"in I&&t(1,d=I.max),"step"in I&&t(23,u=I.step),"values"in I&&t(24,h=I.values),"vertical"in I&&t(2,m=I.vertical),"reversed"in I&&t(3,f=I.reversed),"hoverable"in I&&t(4,g=I.hoverable),"disabled"in I&&t(5,_=I.disabled),"pipstep"in I&&t(25,v=I.pipstep),"all"in I&&t(6,D=I.all),"first"in I&&t(7,O=I.first),"last"in I&&t(8,R=I.last),"rest"in I&&t(9,V=I.rest),"prefix"in I&&t(10,A=I.prefix),"suffix"in I&&t(11,U=I.suffix),"formatter"in I&&t(12,P=I.formatter),"focus"in I&&t(13,L=I.focus),"orientationStart"in I&&t(14,ke=I.orientationStart),"percentOf"in I&&t(15,et=I.percentOf),"moveHandle"in I&&t(26,De=I.moveHandle),"fixFloat"in I&&t(16,be=I.fixFloat)},n.$$.update=()=>{n.$$.dirty&41943047&&t(27,i=v||((d-l)/u>=(m?50:100)?(d-l)/(m?10:20):1)),n.$$.dirty&142606339&&t(20,r=parseInt((d-l)/(u*i),10)),n.$$.dirty&142671873&&t(19,s=function(I){return be(l+I*u*i)}),n.$$.dirty&16842752&&t(18,o=function(I){return h.some(Ce=>be(Ce)===be(I))}),n.$$.dirty&20971520&&t(17,a=function(I){if(c==="min")return h[0]>I;if(c==="max")return h[0]<I;if(c)return h[0]<I&&h[1]>I})},[l,d,m,f,g,_,D,O,R,V,A,U,P,L,ke,et,be,a,o,s,r,pt,c,u,h,v,De,i]}class Wg extends aa{constructor(e){super();oa(this,e,Hg,jg,Sr,{range:22,min:0,max:1,step:23,values:24,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:25,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:26,fixFloat:16})}}function Oo(n,e,t){const i=n.slice();return i[64]=e[t],i[66]=t,i}function Po(n){let e,t=n[21](n[64],n[66],n[23](n[64]))+"",i,r=n[18]&&Do(n),s=n[19]&&Co(n);return{c(){e=q("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(N),this.h()},h(){T(e,"class","rangeFloat")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[18]?r?r.p(o,a):(r=Do(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a[0]&10485761&&t!==(t=o[21](o[64],o[66],o[23](o[64]))+"")&&we(i,t),o[19]?s?s.p(o,a):(s=Co(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&N(e),r&&r.d(),s&&s.d()}}}function Do(n){let e,t;return{c(){e=q("span"),t=se(n[18]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[18]),r.forEach(N),this.h()},h(){T(e,"class","rangeFloat-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r[0]&262144&&we(t,i[18])},d(i){i&&N(e)}}}function Co(n){let e,t;return{c(){e=q("span"),t=se(n[19]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[19]),r.forEach(N),this.h()},h(){T(e,"class","rangeFloat-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r[0]&524288&&we(t,i[19])},d(i){i&&N(e)}}}function Lo(n){let e,t,i,r,s,o,a,c,l,d,u,h,m,f=n[7]&&Po(n);return{c(){e=q("span"),t=q("span"),i=Gt(),f&&f.c(),this.h()},l(g){e=K(g,"SPAN",{role:!0,class:!0,"data-handle":!0,style:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-orientation":!0,"aria-disabled":!0,disabled:!0,tabindex:!0});var _=H(e);t=K(_,"SPAN",{class:!0}),H(t).forEach(N),i=xt(_),f&&f.l(_),_.forEach(N),this.h()},h(){T(t,"class","rangeNub"),T(e,"role","slider"),T(e,"class","rangeHandle"),T(e,"data-handle",r=n[66]),T(e,"style",s=n[28]+": "+n[29][n[66]]+"%; z-index: "+(n[26]===n[66]?3:2)+";"),T(e,"aria-valuemin",o=n[2]===!0&&n[66]===1?n[0][0]:n[3]),T(e,"aria-valuemax",a=n[2]===!0&&n[66]===0?n[0][1]:n[4]),T(e,"aria-valuenow",c=n[64]),T(e,"aria-valuetext",l=""+(n[18]+n[21](n[64],n[66],n[23](n[64]))+n[19])),T(e,"aria-orientation",d=n[6]?"vertical":"horizontal"),T(e,"aria-disabled",n[10]),T(e,"disabled",n[10]),T(e,"tabindex",u=n[10]?-1:0),S(e,"active",n[24]&&n[26]===n[66]),S(e,"press",n[25]&&n[26]===n[66])},m(g,_){W(g,e,_),x(e,t),x(e,i),f&&f.m(e,null),h||(m=[z(e,"blur",n[34]),z(e,"focus",n[35]),z(e,"keydown",n[36])],h=!0)},p(g,_){g[7]?f?f.p(g,_):(f=Po(g),f.c(),f.m(e,null)):f&&(f.d(1),f=null),_[0]&872415232&&s!==(s=g[28]+": "+g[29][g[66]]+"%; z-index: "+(g[26]===g[66]?3:2)+";")&&T(e,"style",s),_[0]&13&&o!==(o=g[2]===!0&&g[66]===1?g[0][0]:g[3])&&T(e,"aria-valuemin",o),_[0]&21&&a!==(a=g[2]===!0&&g[66]===0?g[0][1]:g[4])&&T(e,"aria-valuemax",a),_[0]&1&&c!==(c=g[64])&&T(e,"aria-valuenow",c),_[0]&11272193&&l!==(l=""+(g[18]+g[21](g[64],g[66],g[23](g[64]))+g[19]))&&T(e,"aria-valuetext",l),_[0]&64&&d!==(d=g[6]?"vertical":"horizontal")&&T(e,"aria-orientation",d),_[0]&1024&&T(e,"aria-disabled",g[10]),_[0]&1024&&T(e,"disabled",g[10]),_[0]&1024&&u!==(u=g[10]?-1:0)&&T(e,"tabindex",u),_[0]&83886080&&S(e,"active",g[24]&&g[26]===g[66]),_[0]&100663296&&S(e,"press",g[25]&&g[26]===g[66])},d(g){g&&N(e),f&&f.d(),h=!1,Ee(m)}}}function Mo(n){let e,t;return{c(){e=q("span"),this.h()},l(i){e=K(i,"SPAN",{class:!0,style:!0}),H(e).forEach(N),this.h()},h(){T(e,"class","rangeBar"),T(e,"style",t=n[28]+": "+n[32](n[29])+"%; "+n[27]+": "+n[33](n[29])+"%;")},m(i,r){W(i,e,r)},p(i,r){r[0]&939524096&&t!==(t=i[28]+": "+i[32](i[29])+"%; "+i[27]+": "+i[33](i[29])+"%;")&&T(e,"style",t)},d(i){i&&N(e)}}}function Uo(n){let e,t;return e=new Wg({props:{values:n[0],min:n[3],max:n[4],step:n[5],range:n[2],vertical:n[6],reversed:n[8],orientationStart:n[28],hoverable:n[9],disabled:n[10],all:n[13],first:n[14],last:n[15],rest:n[16],pipstep:n[12],prefix:n[18],suffix:n[19],formatter:n[20],focus:n[24],percentOf:n[23],moveHandle:n[31],fixFloat:n[30]}}),{c(){Wl(e.$$.fragment)},l(i){zl(e.$$.fragment,i)},m(i,r){ra(e,i,r),t=!0},p(i,r){const s={};r[0]&1&&(s.values=i[0]),r[0]&8&&(s.min=i[3]),r[0]&16&&(s.max=i[4]),r[0]&32&&(s.step=i[5]),r[0]&4&&(s.range=i[2]),r[0]&64&&(s.vertical=i[6]),r[0]&256&&(s.reversed=i[8]),r[0]&268435456&&(s.orientationStart=i[28]),r[0]&512&&(s.hoverable=i[9]),r[0]&1024&&(s.disabled=i[10]),r[0]&8192&&(s.all=i[13]),r[0]&16384&&(s.first=i[14]),r[0]&32768&&(s.last=i[15]),r[0]&65536&&(s.rest=i[16]),r[0]&4096&&(s.pipstep=i[12]),r[0]&262144&&(s.prefix=i[18]),r[0]&524288&&(s.suffix=i[19]),r[0]&1048576&&(s.formatter=i[20]),r[0]&16777216&&(s.focus=i[24]),r[0]&8388608&&(s.percentOf=i[23]),e.$set(s)},i(i){t||(jt(e.$$.fragment,i),t=!0)},o(i){ci(e.$$.fragment,i),t=!1},d(i){sa(e,i)}}}function zg(n){let e,t,i,r,s,o,a=n[0],c=[];for(let u=0;u<a.length;u+=1)c[u]=Lo(Oo(n,a,u));let l=n[2]&&Mo(n),d=n[11]&&Uo(n);return{c(){e=q("div");for(let u=0;u<c.length;u+=1)c[u].c();t=Gt(),l&&l.c(),i=Gt(),d&&d.c(),this.h()},l(u){e=K(u,"DIV",{id:!0,class:!0});var h=H(e);for(let m=0;m<c.length;m+=1)c[m].l(h);t=xt(h),l&&l.l(h),i=xt(h),d&&d.l(h),h.forEach(N),this.h()},h(){T(e,"id",n[17]),T(e,"class","rangeSlider"),S(e,"range",n[2]),S(e,"disabled",n[10]),S(e,"hoverable",n[9]),S(e,"vertical",n[6]),S(e,"reversed",n[8]),S(e,"focus",n[24]),S(e,"min",n[2]==="min"),S(e,"max",n[2]==="max"),S(e,"pips",n[11]),S(e,"pip-labels",n[13]==="label"||n[14]==="label"||n[15]==="label"||n[16]==="label")},m(u,h){W(u,e,h);for(let m=0;m<c.length;m+=1)c[m].m(e,null);x(e,t),l&&l.m(e,null),x(e,i),d&&d.m(e,null),n[50](e),r=!0,s||(o=[z(window,"mousedown",n[39]),z(window,"touchstart",n[39]),z(window,"mousemove",n[40]),z(window,"touchmove",n[40]),z(window,"mouseup",n[41]),z(window,"touchend",n[42]),z(window,"keydown",n[43]),z(e,"mousedown",n[37]),z(e,"mouseup",n[38]),z(e,"touchstart",kn(n[37])),z(e,"touchend",kn(n[38]))],s=!0)},p(u,h){if(h[0]&934020317|h[1]&56){a=u[0];let m;for(m=0;m<a.length;m+=1){const f=Oo(u,a,m);c[m]?c[m].p(f,h):(c[m]=Lo(f),c[m].c(),c[m].m(e,t))}for(;m<c.length;m+=1)c[m].d(1);c.length=a.length}u[2]?l?l.p(u,h):(l=Mo(u),l.c(),l.m(e,i)):l&&(l.d(1),l=null),u[11]?d?(d.p(u,h),h[0]&2048&&jt(d,1)):(d=Uo(u),d.c(),jt(d,1),d.m(e,null)):d&&(jl(),ci(d,1,1,()=>{d=null}),Hl()),(!r||h[0]&131072)&&T(e,"id",u[17]),h[0]&4&&S(e,"range",u[2]),h[0]&1024&&S(e,"disabled",u[10]),h[0]&512&&S(e,"hoverable",u[9]),h[0]&64&&S(e,"vertical",u[6]),h[0]&256&&S(e,"reversed",u[8]),h[0]&16777216&&S(e,"focus",u[24]),h[0]&4&&S(e,"min",u[2]==="min"),h[0]&4&&S(e,"max",u[2]==="max"),h[0]&2048&&S(e,"pips",u[11]),h[0]&122880&&S(e,"pip-labels",u[13]==="label"||u[14]==="label"||u[15]==="label"||u[16]==="label")},i(u){r||(jt(d),r=!0)},o(u){ci(d),r=!1},d(u){u&&N(e),Jo(c,u),l&&l.d(),d&&d.d(),n[50](null),s=!1,Ee(o)}}}function Fo(n){if(!n)return-1;for(var e=0;n=n.previousElementSibling;)e++;return e}function ar(n){return n.type.includes("touch")?n.touches[0]:n}function Gg(n,e,t){let i,r,s,o,a,c,l=_e,d=()=>(l(),l=zo(nt,p=>t(29,c=p)),nt);n.$$.on_destroy.push(()=>l());let{slider:u=void 0}=e,{range:h=!1}=e,{pushy:m=!1}=e,{min:f=0}=e,{max:g=100}=e,{step:_=1}=e,{values:v=[(g+f)/2]}=e,{vertical:D=!1}=e,{float:O=!1}=e,{reversed:R=!1}=e,{hoverable:V=!0}=e,{disabled:A=!1}=e,{pips:U=!1}=e,{pipstep:P=void 0}=e,{all:L=void 0}=e,{first:ke=void 0}=e,{last:et=void 0}=e,{rest:De=void 0}=e,{id:be=void 0}=e,{prefix:pt=""}=e,{suffix:I=""}=e,{formatter:Ce=(p,k,B)=>p}=e,{handleFormatter:an=Ce}=e,{precision:Lt=2}=e,{springValues:cn={stiffness:.15,damping:.4}}=e;const ln=Bl();let un=0,Le=!1,Ae=!1,Me=!1,Mt=!1,ie=v.length-1,Ue,tt,nt;const it=p=>parseFloat(p.toFixed(Lt));function zn(p){const k=u.querySelectorAll(".handle"),B=Array.prototype.includes.call(k,p),F=Array.prototype.some.call(k,Fe=>Fe.contains(p));return B||F}function ws(p){return h==="min"||h==="max"?p.slice(0,1):h?p.slice(0,2):p}function Gn(){return u.getBoundingClientRect()}function al(p){const k=Gn();let B=0,F=0,Fe=0;D?(B=p.clientY-k.top,F=B/k.height*100,F=R?F:100-F):(B=p.clientX-k.left,F=B/k.width*100,F=R?100-F:F),Fe=(g-f)/100*F+f;let Is;return h===!0&&v[0]===v[1]?Fe>v[1]?1:0:(Is=v.indexOf([...v].sort((El,Tl)=>Math.abs(Fe-El)-Math.abs(Fe-Tl))[0]),Is)}function Ji(p){const k=Gn();let B=0,F=0,Fe=0;D?(B=p.clientY-k.top,F=B/k.height*100,F=R?F:100-F):(B=p.clientX-k.left,F=B/k.width*100,F=R?100-F:F),Fe=(g-f)/100*F+f,Ut(ie,Fe)}function Ut(p,k){return k=s(k),typeof p=="undefined"&&(p=ie),h&&(p===0&&k>v[1]?m?t(0,v[1]=k,v):k=v[1]:p===1&&k<v[0]&&(m?t(0,v[0]=k,v):k=v[0])),v[p]!==k&&t(0,v[p]=k,v),tt!==k&&(bl(),tt=k),k}function cl(p){return h==="min"?0:p[0]}function ll(p){return h==="max"?0:h==="min"?100-p[0]:100-p[1]}function ul(p){Mt&&(t(24,Le=!1),Ae=!1,t(25,Me=!1))}function dl(p){A||(t(26,ie=Fo(p.target)),t(24,Le=!0))}function hl(p){if(!A){const k=Fo(p.target);let B=p.ctrlKey||p.metaKey||p.shiftKey?_*10:_,F=!1;switch(p.key){case"PageDown":B*=10;case"ArrowRight":case"ArrowUp":Ut(k,v[k]+B),F=!0;break;case"PageUp":B*=10;case"ArrowLeft":case"ArrowDown":Ut(k,v[k]-B),F=!0;break;case"Home":Ut(k,f),F=!0;break;case"End":Ut(k,g),F=!0;break}F&&(p.preventDefault(),p.stopPropagation())}}function fl(p){if(!A){const k=p.target,B=ar(p);t(24,Le=!0),Ae=!0,t(25,Me=!0),t(26,ie=al(B)),Ue=tt=s(v[ie]),wl(),p.type==="touchstart"&&!k.matches(".pipVal")&&Ji(B)}}function pl(p){p.type==="touchend"&&bs(),t(25,Me=!1)}function ml(p){Mt=!1,Le&&p.target!==u&&!u.contains(p.target)&&t(24,Le=!1)}function gl(p){A||Ae&&Ji(ar(p))}function _l(p){if(!A){const k=p.target;Ae&&((k===u||u.contains(k))&&(t(24,Le=!0),!zn(k)&&!k.matches(".pipVal")&&Ji(ar(p))),bs())}Ae=!1,t(25,Me=!1)}function yl(p){Ae=!1,t(25,Me=!1)}function vl(p){A||(p.target===u||u.contains(p.target))&&(Mt=!0)}function wl(){!A&&ln("start",{activeHandle:ie,value:Ue,values:v.map(p=>s(p))})}function bs(){!A&&ln("stop",{activeHandle:ie,startValue:Ue,value:v[ie],values:v.map(p=>s(p))})}function bl(){!A&&ln("change",{activeHandle:ie,startValue:Ue,previousValue:typeof tt=="undefined"?Ue:tt,value:v[ie],values:v.map(p=>s(p))})}function Il(p){ur[p?"unshift":"push"](()=>{u=p,t(1,u)})}return n.$$set=p=>{"slider"in p&&t(1,u=p.slider),"range"in p&&t(2,h=p.range),"pushy"in p&&t(44,m=p.pushy),"min"in p&&t(3,f=p.min),"max"in p&&t(4,g=p.max),"step"in p&&t(5,_=p.step),"values"in p&&t(0,v=p.values),"vertical"in p&&t(6,D=p.vertical),"float"in p&&t(7,O=p.float),"reversed"in p&&t(8,R=p.reversed),"hoverable"in p&&t(9,V=p.hoverable),"disabled"in p&&t(10,A=p.disabled),"pips"in p&&t(11,U=p.pips),"pipstep"in p&&t(12,P=p.pipstep),"all"in p&&t(13,L=p.all),"first"in p&&t(14,ke=p.first),"last"in p&&t(15,et=p.last),"rest"in p&&t(16,De=p.rest),"id"in p&&t(17,be=p.id),"prefix"in p&&t(18,pt=p.prefix),"suffix"in p&&t(19,I=p.suffix),"formatter"in p&&t(20,Ce=p.formatter),"handleFormatter"in p&&t(21,an=p.handleFormatter),"precision"in p&&t(45,Lt=p.precision),"springValues"in p&&t(46,cn=p.springValues)},n.$$.update=()=>{n.$$.dirty[0]&24&&t(49,r=function(p){return p<=f?f:p>=g?g:p}),n.$$.dirty[0]&56|n.$$.dirty[1]&262144&&t(48,s=function(p){if(p<=f)return it(f);if(p>=g)return it(g);let k=(p-f)%_,B=p-k;return Math.abs(k)*2>=_&&(B+=k>0?_:-_),B=r(B),it(B)}),n.$$.dirty[0]&24&&t(23,i=function(p){let k=(p-f)/(g-f)*100;return isNaN(k)||k<=0?0:k>=100?100:it(k)}),n.$$.dirty[0]&12582937|n.$$.dirty[1]&229376&&(Array.isArray(v)||(t(0,v=[(g+f)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")),t(0,v=ws(v.map(p=>s(p)))),un!==v.length?d(t(22,nt=qg(v.map(p=>i(p)),cn))):nt.set(v.map(p=>i(p))),t(47,un=v.length)),n.$$.dirty[0]&320&&t(28,o=D?R?"top":"bottom":R?"right":"left"),n.$$.dirty[0]&320&&t(27,a=D?R?"bottom":"top":R?"left":"right")},[v,u,h,f,g,_,D,O,R,V,A,U,P,L,ke,et,De,be,pt,I,Ce,an,nt,i,Le,Me,ie,a,o,c,it,Ut,cl,ll,ul,dl,hl,fl,pl,ml,gl,_l,yl,vl,m,Lt,cn,un,s,r,Il]}class X_ extends aa{constructor(e){super();oa(this,e,Gg,zg,Sr,{slider:1,range:2,pushy:44,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,precision:45,springValues:46},null,[-1,-1,-1])}}/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */function Vo(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Qn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Vo(Object(t),!0).forEach(function(i){Yg(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Vo(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function xg(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Bo(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Kg(n,e,t){return e&&Bo(n.prototype,e),t&&Bo(n,t),n}function Yg(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ki(){return ki=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ki.apply(this,arguments)}var sl={exports:{}};(function(n){typeof window!="undefined"&&function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,i=e.Blob&&function(){try{return Boolean(new Blob)}catch{return!1}}(),r=i&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),s=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,o=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,a=(i||s)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(c){var l,d,u,h,m,f,g,_,v;if(l=c.match(o),!l)throw new Error("invalid data URI");for(d=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),u=!!l[4],h=c.slice(l[0].length),u?m=atob(h):m=decodeURIComponent(h),f=new ArrayBuffer(m.length),g=new Uint8Array(f),_=0;_<m.length;_+=1)g[_]=m.charCodeAt(_);return i?new Blob([r?g:f],{type:d}):(v=new s,v.append(f),v.getBlob(d))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(c,l,d){var u=this;setTimeout(function(){d&&t.toDataURL&&a?c(a(u.toDataURL(l,d))):c(u.mozGetAsFile("blob",l))})}:t.toDataURL&&a&&(t.msToBlob?t.toBlob=function(c,l,d){var u=this;setTimeout(function(){(l&&l!=="image/png"||d)&&t.toDataURL&&a?c(a(u.toDataURL(l,d))):c(u.msToBlob(l))})}:t.toBlob=function(c,l,d){var u=this;setTimeout(function(){c(a(u.toDataURL(l,d)))})})),n.exports?n.exports=a:e.dataURLtoBlob=a}(window)})(sl);var Jg=sl.exports,Xg=function(e){return typeof Blob=="undefined"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},qo={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},Qg=typeof window!="undefined"&&typeof window.document!="undefined",ct=Qg?window:{},Ai=function(e){return e>0&&e<1/0},Zg=Array.prototype.slice;function $g(n){return Array.from?Array.from(n):Zg.call(n)}var e_=/^image\/.+$/;function kr(n){return e_.test(n)}function t_(n){var e=kr(n)?n.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var ol=String.fromCharCode;function n_(n,e,t){var i="",r;for(t+=e,r=e;r<t;r+=1)i+=ol(n.getUint8(r));return i}var i_=ct.btoa;function r_(n,e){for(var t=[],i=8192,r=new Uint8Array(n);r.length>0;)t.push(ol.apply(null,$g(r.subarray(0,i)))),r=r.subarray(i);return"data:".concat(e,";base64,").concat(i_(t.join("")))}function s_(n){var e=new DataView(n),t;try{var i,r,s;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var o=e.byteLength,a=2;a+1<o;){if(e.getUint8(a)===255&&e.getUint8(a+1)===225){r=a;break}a+=1}if(r){var c=r+4,l=r+10;if(n_(e,c,4)==="Exif"){var d=e.getUint16(l);if(i=d===18761,(i||d===19789)&&e.getUint16(l+2,i)===42){var u=e.getUint32(l+4,i);u>=8&&(s=l+u)}}}if(s){var h=e.getUint16(s,i),m,f;for(f=0;f<h;f+=1)if(m=s+f*12+2,e.getUint16(m,i)===274){m+=8,t=e.getUint16(m,i),e.setUint16(m,1,i);break}}}catch{t=1}return t}function o_(n){var e=0,t=1,i=1;switch(n){case 2:t=-1;break;case 3:e=-180;break;case 4:i=-1;break;case 5:e=90,i=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:i}}var a_=/\.\d*(?:0|9){12}\d*$/;function jo(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return a_.test(n)?Math.round(n*e)/e:n}function fn(n){var e=n.aspectRatio,t=n.height,i=n.width,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",s=Ai(i),o=Ai(t);if(s&&o){var a=t*e;(r==="contain"||r==="none")&&a>i||r==="cover"&&a<i?t=i/e:i=t*e}else s?t=i/e:o&&(i=t*e);return{width:i,height:t}}var c_=ct.ArrayBuffer,Ho=ct.FileReader,mt=ct.URL||ct.webkitURL,l_=/\.\w+$/,u_=ct.Compressor,Q_=function(){function n(e,t){xg(this,n),this.file=e,this.image=new Image,this.options=Qn(Qn({},qo),t),this.aborted=!1,this.result=null,this.init()}return Kg(n,[{key:"init",value:function(){var t=this,i=this.file,r=this.options;if(!Xg(i)){this.fail(new Error("The first argument must be a File or Blob object."));return}var s=i.type;if(!kr(s)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!mt||!Ho){this.fail(new Error("The current browser does not support image compression."));return}if(c_||(r.checkOrientation=!1),mt&&!r.checkOrientation)this.load({url:mt.createObjectURL(i)});else{var o=new Ho,a=r.checkOrientation&&s==="image/jpeg";this.reader=o,o.onload=function(c){var l=c.target,d=l.result,u={};if(a){var h=s_(d);h>1||!mt?(u.url=r_(d,s),h>1&&ki(u,o_(h))):u.url=mt.createObjectURL(i)}else u.url=d;t.load(u)},o.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},o.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},o.onloadend=function(){t.reader=null},a?o.readAsArrayBuffer(i):o.readAsDataURL(i)}}},{key:"load",value:function(t){var i=this,r=this.file,s=this.image;s.onload=function(){i.draw(Qn(Qn({},t),{},{naturalWidth:s.naturalWidth,naturalHeight:s.naturalHeight}))},s.onabort=function(){i.fail(new Error("Aborted to load the image."))},s.onerror=function(){i.fail(new Error("Failed to load the image."))},ct.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(ct.navigator.userAgent)&&(s.crossOrigin="anonymous"),s.alt=r.name,s.src=t.url}},{key:"draw",value:function(t){var i=this,r=t.naturalWidth,s=t.naturalHeight,o=t.rotate,a=o===void 0?0:o,c=t.scaleX,l=c===void 0?1:c,d=t.scaleY,u=d===void 0?1:d,h=this.file,m=this.image,f=this.options,g=document.createElement("canvas"),_=g.getContext("2d"),v=Math.abs(a)%180===90,D=(f.resize==="contain"||f.resize==="cover")&&Ai(f.width)&&Ai(f.height),O=Math.max(f.maxWidth,0)||1/0,R=Math.max(f.maxHeight,0)||1/0,V=Math.max(f.minWidth,0)||0,A=Math.max(f.minHeight,0)||0,U=r/s,P=f.width,L=f.height;if(v){var ke=[R,O];O=ke[0],R=ke[1];var et=[A,V];V=et[0],A=et[1];var De=[L,P];P=De[0],L=De[1]}D&&(U=P/L);var be=fn({aspectRatio:U,width:O,height:R},"contain");O=be.width,R=be.height;var pt=fn({aspectRatio:U,width:V,height:A},"cover");if(V=pt.width,A=pt.height,D){var I=fn({aspectRatio:U,width:P,height:L},f.resize);P=I.width,L=I.height}else{var Ce=fn({aspectRatio:U,width:P,height:L}),an=Ce.width;P=an===void 0?r:an;var Lt=Ce.height;L=Lt===void 0?s:Lt}P=Math.floor(jo(Math.min(Math.max(P,V),O))),L=Math.floor(jo(Math.min(Math.max(L,A),R)));var cn=-P/2,ln=-L/2,un=P,Le=L,Ae=[];if(D){var Me=0,Mt=0,ie=r,Ue=s,tt=fn({aspectRatio:U,width:r,height:s},{contain:"cover",cover:"contain"}[f.resize]);ie=tt.width,Ue=tt.height,Me=(r-ie)/2,Mt=(s-Ue)/2,Ae.push(Me,Mt,ie,Ue)}if(Ae.push(cn,ln,un,Le),v){var nt=[L,P];P=nt[0],L=nt[1]}g.width=P,g.height=L,kr(f.mimeType)||(f.mimeType=h.type);var it="transparent";if(h.size>f.convertSize&&f.convertTypes.indexOf(f.mimeType)>=0&&(f.mimeType="image/jpeg"),f.mimeType==="image/jpeg"&&(it="#fff"),_.fillStyle=it,_.fillRect(0,0,P,L),f.beforeDraw&&f.beforeDraw.call(this,_,g),!this.aborted&&(_.save(),_.translate(P/2,L/2),_.rotate(a*Math.PI/180),_.scale(l,u),_.drawImage.apply(_,[m].concat(Ae)),_.restore(),f.drew&&f.drew.call(this,_,g),!this.aborted)){var zn=function(Gn){i.aborted||i.done({naturalWidth:r,naturalHeight:s,result:Gn})};g.toBlob?g.toBlob(zn,f.mimeType,f.quality):zn(Jg(g.toDataURL(f.mimeType,f.quality)))}}},{key:"done",value:function(t){var i=t.naturalWidth,r=t.naturalHeight,s=t.result,o=this.file,a=this.image,c=this.options;if(mt&&!c.checkOrientation&&mt.revokeObjectURL(a.src),s)if(c.strict&&s.size>o.size&&c.mimeType===o.type&&!(c.width>i||c.height>r||c.minWidth>i||c.minHeight>r||c.maxWidth<i||c.maxHeight<r))s=o;else{var l=new Date;s.lastModified=l.getTime(),s.lastModifiedDate=l,s.name=o.name,s.name&&s.type!==o.type&&(s.name=s.name.replace(l_,t_(s.type)))}else s=o;this.result=s,c.success&&c.success.call(this,s)}},{key:"fail",value:function(t){var i=this.options;if(i.error)i.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=u_,n}},{key:"setDefaults",value:function(t){ki(qo,t)}}]),n}();export{Ee as $,B_ as A,sa as B,kl as C,ca as D,P_ as E,f_ as F,A_ as G,x as H,m_ as I,g_ as J,p_ as K,h_ as L,v_ as M,O_ as N,_e as O,zo as P,Sn as Q,C_ as R,aa as S,L_ as T,H_ as U,Ll as V,b_ as W,w_ as X,__ as Y,d_ as Z,z as _,H as a,Ea as a0,I_ as a1,j_ as a2,lm as a3,Fc as a4,Lm as a5,W_ as a6,S as a7,Jo as a8,F_ as a9,U_ as aa,ur as ab,q_ as ac,D_ as ad,Y_ as ae,x_ as af,K_ as ag,J_ as ah,Fm as ai,Bm as aj,hm as ak,Mm as al,Em as am,km as an,T_ as ao,Sm as ap,k_ as aq,jm as ar,y_ as as,M_ as at,Q_ as au,X_ as av,xe as aw,z_ as ax,G_ as ay,T as b,K as c,N as d,q as e,E_ as f,W as g,pe as h,oa as i,we as j,Gt as k,si as l,xt as m,jl as n,ci as o,Hl as p,jt as q,N_ as r,Sr as s,se as t,R_ as u,S_ as v,Wl as w,zl as x,ra as y,V_ as z};
