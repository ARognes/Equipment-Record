function Se(){}function fl(n,e){for(const t in e)n[t]=e[t];return n}function Lo(n){return n()}function fs(){return Object.create(null)}function Oe(n){n.forEach(Lo)}function bt(n){return typeof n=="function"}function vr(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Wn;function Jg(n,e){return Wn||(Wn=document.createElement("a")),Wn.href=e,n===Wn.href}function pl(n){return Object.keys(n).length===0}function Mo(n,...e){if(n==null)return Se;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Xg(n,e,t){n.$$.on_destroy.push(Mo(e,t))}function Qg(n,e,t,i){if(n){const r=Uo(n,e,t,i);return n[0](r)}}function Uo(n,e,t,i){return n[1]&&i?fl(t.ctx.slice(),n[1](i(e))):t.ctx}function Zg(n,e,t,i){if(n[2]&&i){const r=n[2](i(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function $g(n,e,t,i,r,s){if(r){const o=Uo(e,t,i,s);n.p(o,r)}}function e_(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function t_(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function n_(n){return n==null?"":n}function i_(n,e,t){return n.set(t),e}const Fo=typeof window!="undefined";let ps=Fo?()=>window.performance.now():()=>Date.now(),Vo=Fo?n=>requestAnimationFrame(n):Se;const qt=new Set;function Bo(n){qt.forEach(e=>{e.c(n)||(qt.delete(e),e.f())}),qt.size!==0&&Vo(Bo)}function ml(n){let e;return qt.size===0&&Vo(Bo),{promise:new Promise(t=>{qt.add(e={c:n,f:t})}),abort(){qt.delete(e)}}}let bi=!1;function gl(){bi=!0}function _l(){bi=!1}function yl(n,e,t,i){for(;n<e;){const r=n+(e-n>>1);t(r)<=i?n=r+1:e=r}return n}function vl(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&c.push(d)}e=c}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,d=(r>0&&e[t[r]].claim_order<=l?r+1:yl(1,r,f=>e[t[f]].claim_order,l))-1;i[c]=t[d]+1;const u=d+1;t[u]=c,r=Math.max(u,r)}const s=[],o=[];let a=e.length-1;for(let c=t[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const d=l<s.length?s[l]:null;n.insertBefore(o[c],d)}}function x(n,e){if(bi){for(vl(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function W(n,e,t){bi&&!t?x(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function R(n){n.parentNode.removeChild(n)}function qo(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function j(n){return document.createElement(n)}function wl(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function se(n){return document.createTextNode(n)}function Gt(){return se(" ")}function ti(){return se("")}function z(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function En(n){return function(e){return e.preventDefault(),n.call(this,e)}}function T(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function r_(n,e){for(const t in e)T(n,t,e[t])}function H(n){return Array.from(n.childNodes)}function bl(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function jo(n,e,t,i,r=!1){bl(n);const s=(()=>{for(let o=n.claim_info.last_index;o<n.length;o++){const a=n[o];if(e(a)){const c=t(a);return c===void 0?n.splice(o,1):n[o]=c,r||(n.claim_info.last_index=o),a}}for(let o=n.claim_info.last_index-1;o>=0;o--){const a=n[o];if(e(a)){const c=t(a);return c===void 0?n.splice(o,1):n[o]=c,r?c===void 0&&n.claim_info.last_index--:n.claim_info.last_index=o,a}}return i()})();return s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,s}function Ho(n,e,t,i){return jo(n,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];t[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function K(n,e,t){return Ho(n,e,t,j)}function s_(n,e,t){return Ho(n,e,t,wl)}function pe(n,e){return jo(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>se(e),!0)}function xt(n){return pe(n," ")}function ve(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function o_(n,e){n.value=e==null?"":e}function a_(n,e,t,i){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function c_(n,e){for(let t=0;t<n.options.length;t+=1){const i=n.options[t];if(i.__value===e){i.selected=!0;return}}n.selectedIndex=-1}function l_(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function S(n,e,t){n.classList[t?"add":"remove"](e)}function Il(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}function u_(n,e=document.body){return Array.from(e.querySelectorAll(n))}let Tn;function _n(n){Tn=n}function Ln(){if(!Tn)throw new Error("Function called outside component initialization");return Tn}function d_(n){Ln().$$.on_mount.push(n)}function h_(n){Ln().$$.after_update.push(n)}function El(){const n=Ln();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const r=Il(e,t);i.slice().forEach(s=>{s.call(n,r)})}}}function f_(n,e){Ln().$$.context.set(n,e)}function p_(n){return Ln().$$.context.get(n)}const fn=[],nr=[],Jn=[],ir=[],Wo=Promise.resolve();let rr=!1;function zo(){rr||(rr=!0,Wo.then(Go))}function m_(){return zo(),Wo}function sr(n){Jn.push(n)}function g_(n){ir.push(n)}const zi=new Set;let zn=0;function Go(){const n=Tn;do{for(;zn<fn.length;){const e=fn[zn];zn++,_n(e),Tl(e.$$)}for(_n(null),fn.length=0,zn=0;nr.length;)nr.pop()();for(let e=0;e<Jn.length;e+=1){const t=Jn[e];zi.has(t)||(zi.add(t),t())}Jn.length=0}while(fn.length);for(;ir.length;)ir.pop()();rr=!1,zi.clear(),_n(n)}function Tl(n){if(n.fragment!==null){n.update(),Oe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(sr)}}const Xn=new Set;let mt;function kl(){mt={r:0,c:[],p:mt}}function Al(){mt.r||Oe(mt.c),mt=mt.p}function jt(n,e){n&&n.i&&(Xn.delete(n),n.i(e))}function ni(n,e,t,i){if(n&&n.o){if(Xn.has(n))return;Xn.add(n),mt.c.push(()=>{Xn.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function __(n,e){n.d(1),e.delete(n.key)}function y_(n,e){ni(n,1,1,()=>{e.delete(n.key)})}function v_(n,e,t,i,r,s,o,a,c,l,d,u){let f=n.length,g=s.length,p=f;const m={};for(;p--;)m[n[p].key]=p;const _=[],v=new Map,U=new Map;for(p=g;p--;){const A=u(r,s,p),M=t(A);let O=o.get(M);O?i&&O.p(A,e):(O=l(M,A),O.c()),v.set(M,_[p]=O),M in m&&U.set(M,Math.abs(p-m[M]))}const D=new Set,N=new Set;function V(A){jt(A,1),A.m(a,d),o.set(A.key,A),d=A.first,g--}for(;f&&g;){const A=_[g-1],M=n[f-1],O=A.key,C=M.key;A===M?(d=A.first,f--,g--):v.has(C)?!o.has(O)||D.has(O)?V(A):N.has(C)?f--:U.get(O)>U.get(C)?(N.add(O),V(A)):(D.add(C),f--):(c(M,o),f--)}for(;f--;){const A=n[f];v.has(A.key)||c(A,o)}for(;g;)V(_[g-1]);return _}function w_(n,e){const t={},i={},r={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const c in o)c in a||(i[c]=1);for(const c in a)r[c]||(t[c]=a[c],r[c]=1);n[s]=a}else for(const c in o)r[c]=1}for(const o in i)o in t||(t[o]=void 0);return t}function b_(n){return typeof n=="object"&&n!==null?n:{}}function I_(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function Sl(n){n&&n.c()}function Rl(n,e){n&&n.l(e)}function xo(n,e,t,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=n.$$;r&&r.m(e,t),i||sr(()=>{const c=s.map(Lo).filter(bt);o?o.push(...c):Oe(c),n.$$.on_mount=[]}),a.forEach(sr)}function Ko(n,e){const t=n.$$;t.fragment!==null&&(Oe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Nl(n,e){n.$$.dirty[0]===-1&&(fn.push(n),zo(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Yo(n,e,t,i,r,s,o,a=[-1]){const c=Tn;_n(n);const l=n.$$={fragment:null,ctx:null,props:s,update:Se,not_equal:r,bound:fs(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:fs(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let d=!1;if(l.ctx=t?t(n,e.props||{},(u,f,...g)=>{const p=g.length?g[0]:f;return l.ctx&&r(l.ctx[u],l.ctx[u]=p)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](p),d&&Nl(n,u)),f}):[],l.update(),d=!0,Oe(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){gl();const u=H(e.target);l.fragment&&l.fragment.l(u),u.forEach(R)}else l.fragment&&l.fragment.c();e.intro&&jt(n.$$.fragment),xo(n,e.target,e.anchor,e.customElement),_l(),Go()}_n(c)}class Jo{$destroy(){Ko(this,1),this.$destroy=Se}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!pl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ft=[];function E_(n,e){return{subscribe:Xo(n,e).subscribe}}function Xo(n,e=Se){let t;const i=new Set;function r(a){if(vr(n,a)&&(n=a,t)){const c=!Ft.length;for(const l of i)l[1](),Ft.push(l,n);if(c){for(let l=0;l<Ft.length;l+=2)Ft[l][0](Ft[l+1]);Ft.length=0}}}function s(a){r(a(n))}function o(a,c=Se){const l=[a,c];return i.add(l),i.size===1&&(t=e(r)||Se),a(n),()=>{i.delete(l),i.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}/**
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
 */const Qo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ol=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),i.push(t[d],t[u],t[f],t[g])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ol(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw Error();const f=s<<2|a>>4;if(i.push(f),l!==64){const g=a<<4&240|l>>2;if(i.push(g),u!==64){const p=l<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Pl=function(n){const e=Qo(n);return Zo.encodeByteArray(e,!0)},ii=function(n){return Pl(n).replace(/\./g,"")},Dl=function(n){try{return Zo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ll(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ii(JSON.stringify(t)),ii(JSON.stringify(o)),a].join(".")}/**
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
 */function ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ml(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Ul(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vl(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bl(){return typeof indexedDB=="object"}function ql(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const jl="FirebaseError";class at extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=jl,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Hl(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new at(r,a,i)}}function Hl(n,e){return n.replace(Wl,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Wl=/\{\$([^}]+)}/g;function zl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ri(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(ms(s)&&ms(o)){if(!ri(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function ms(n){return n!==null&&typeof n=="object"}/**
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
 */function Xt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function pn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function mn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gl(n,e){const t=new xl(n,e);return t.subscribe.bind(t)}class xl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Kl(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Gi),r.error===void 0&&(r.error=Gi),r.complete===void 0&&(r.complete=Gi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kl(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gi(){}/**
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
 */function gn(n,e){return new Promise((t,i)=>{n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;i(`${e}: ${(s=r.target.error)===null||s===void 0?void 0:s.message}`)}})}class gs{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new $o(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new ea(this._db.createObjectStore(e,t))}close(){this._db.close()}}class $o{constructor(e){this._transaction=e,this.complete=new Promise((t,i)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new ea(this._transaction.objectStore(e))}}class ea{constructor(e){this._store=e}index(e){return new _s(this._store.index(e))}createIndex(e,t,i){return new _s(this._store.createIndex(e,t,i))}get(e){const t=this._store.get(e);return gn(t,"Error reading from IndexedDB")}put(e,t){const i=this._store.put(e,t);return gn(i,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return gn(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return gn(e,"Error clearing IndexedDB object store")}}class _s{constructor(e){this._index=e}get(e){const t=this._index.get(e);return gn(t,"Error reading from IndexedDB")}}function Yl(n,e,t){return new Promise((i,r)=>{try{const s=indexedDB.open(n,e);s.onsuccess=o=>{i(new gs(o.target.result))},s.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{t(new gs(s.result),o.oldVersion,o.newVersion,new $o(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}})}class rt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pt="[DEFAULT]";/**
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
 */class Jl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Cl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ql(e))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pt){return this.instances.has(e)}getOptions(e=pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=pt){return this.component?this.component.multipleInstances?e:pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xl(n){return n===pt?void 0:n}function Ql(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const $l={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},eu=L.INFO,tu={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},nu=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=tu[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wr{constructor(e){this.name=e,this._logLevel=eu,this._logHandler=nu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$l[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}/**
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
 */class iu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ru(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ru(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const or="@firebase/app",ys="0.7.19";/**
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
 */const br=new wr("@firebase/app"),su="@firebase/app-compat",ou="@firebase/analytics-compat",au="@firebase/analytics",cu="@firebase/app-check-compat",lu="@firebase/app-check",uu="@firebase/auth",du="@firebase/auth-compat",hu="@firebase/database",fu="@firebase/database-compat",pu="@firebase/functions",mu="@firebase/functions-compat",gu="@firebase/installations",_u="@firebase/installations-compat",yu="@firebase/messaging",vu="@firebase/messaging-compat",wu="@firebase/performance",bu="@firebase/performance-compat",Iu="@firebase/remote-config",Eu="@firebase/remote-config-compat",Tu="@firebase/storage",ku="@firebase/storage-compat",Au="@firebase/firestore",Su="@firebase/firestore-compat",Ru="firebase",Nu="9.6.9";/**
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
 */const Ir="[DEFAULT]",Ou={[or]:"fire-core",[su]:"fire-core-compat",[au]:"fire-analytics",[ou]:"fire-analytics-compat",[lu]:"fire-app-check",[cu]:"fire-app-check-compat",[uu]:"fire-auth",[du]:"fire-auth-compat",[hu]:"fire-rtdb",[fu]:"fire-rtdb-compat",[pu]:"fire-fn",[mu]:"fire-fn-compat",[gu]:"fire-iid",[_u]:"fire-iid-compat",[yu]:"fire-fcm",[vu]:"fire-fcm-compat",[wu]:"fire-perf",[bu]:"fire-perf-compat",[Iu]:"fire-rc",[Eu]:"fire-rc-compat",[Tu]:"fire-gcs",[ku]:"fire-gcs-compat",[Au]:"fire-fst",[Su]:"fire-fst-compat","fire-js":"fire-js",[Ru]:"fire-js-all"};/**
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
 */const si=new Map,ar=new Map;function Pu(n,e){try{n.container.addComponent(e)}catch(t){br.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if(ar.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;ar.set(e,n);for(const t of si.values())Pu(t,n);return!0}function Qt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Du(n,e,t=Ir){Qt(n,e).clearInstance(t)}/**
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
 */const Cu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Et=new Mn("app","Firebase",Cu);/**
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
 */class Lu{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
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
 */const Zt=Nu;function T_(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Et.create("bad-app-name",{appName:String(i)});const r=si.get(i);if(r){if(ri(n,r.options)&&ri(t,r.config))return r;throw Et.create("duplicate-app",{appName:i})}const s=new Zl(i);for(const a of ar.values())s.addComponent(a);const o=new Lu(n,t,s);return si.set(i,o),o}function Er(n=Ir){const e=si.get(n);if(!e)throw Et.create("no-app",{appName:n});return e}function Re(n,e,t){var i;let r=(i=Ou[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}It(new rt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Mu="firebase-heartbeat-database",Uu=1,kn="firebase-heartbeat-store";let xi=null;function ta(){return xi||(xi=Yl(Mu,Uu,(n,e)=>{switch(e){case 0:n.createObjectStore(kn)}}).catch(n=>{throw Et.create("storage-open",{originalErrorMessage:n.message})})),xi}async function Fu(n){try{return(await ta()).transaction(kn).objectStore(kn).get(na(n))}catch(e){throw Et.create("storage-get",{originalErrorMessage:e.message})}}async function vs(n,e){try{const i=(await ta()).transaction(kn,"readwrite");return await i.objectStore(kn).put(e,na(n)),i.complete}catch(t){throw Et.create("storage-set",{originalErrorMessage:t.message})}}function na(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Vu=1024,Bu=30*24*60*60*1e3;class qu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hu(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ws();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Bu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ws(),{heartbeatsToSend:t,unsentEntries:i}=ju(this._heartbeatsCache.heartbeats),r=ii(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ws(){return new Date().toISOString().substring(0,10)}function ju(n,e=Vu){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),bs(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),bs(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Hu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bl()?ql().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return vs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return vs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bs(n){return ii(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Wu(n){It(new rt("platform-logger",e=>new iu(e),"PRIVATE")),It(new rt("heartbeat",e=>new qu(e),"PRIVATE")),Re(or,ys,n),Re(or,ys,"esm2017"),Re("fire-js","")}Wu("");/*! *****************************************************************************
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
***************************************************************************** */function Tr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}/**
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
 */const zu={PHONE:"phone"},Gu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},xu={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},Ku={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},Yu={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Ju(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function ia(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xu=Ju,ra=ia,sa=new Mn("auth","Firebase",ia()),Qu={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"};/**
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
 */const Is=new wr("@firebase/auth");function Qn(n,...e){Is.logLevel<=L.ERROR&&Is.error(`Auth (${Zt}): ${n}`,...e)}/**
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
 */function le(n,...e){throw kr(n,...e)}function de(n,...e){return kr(n,...e)}function oa(n,e,t){const i=Object.assign(Object.assign({},ra()),{[e]:t});return new Mn("auth","Firebase",i).create(e,{appName:n.name})}function $t(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&le(n,"argument-error"),oa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return sa.create(n,...e)}function y(n,e,...t){if(!n)throw kr(e,...t)}function Ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qn(e),new Error(e)}function Ge(n,e){n||Ae(e)}/**
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
 */const Es=new Map;function He(n){Ge(n instanceof Function,"Expected a class definition");let e=Es.get(n);return e?(Ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Es.set(n,e),e)}/**
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
 */function aa(n,e){const t=Qt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(ri(s,e!=null?e:{}))return r;le(r,"already-initialized")}return t.initialize({options:e})}function Zu(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(He);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function An(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ar(){return Ts()==="http:"||Ts()==="https:"}function Ts(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function $u(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ar()||Ul()||"connection"in navigator)?navigator.onLine:!0}function ed(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Un{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ge(t>e,"Short delay should be less than long delay!"),this.isMobile=Ml()||Fl()}get(){return $u()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sr(n,e){Ge(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ca{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const td={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const nd=new Un(3e4,6e4);function Z(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ee(n,e,t,i,r={}){return la(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Xt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),ca.fetch()(ua(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function la(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},td),e);try{const r=new id(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zn(n,"email-already-in-use",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw oa(n,d,l);le(n,d)}}catch(r){if(r instanceof at)throw r;le(n,"network-request-failed")}}async function Je(n,e,t,i,r={}){const s=await ee(n,e,t,i,r);return"mfaPendingCredential"in s&&le(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ua(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Sr(n.config,r):`${n.config.apiScheme}://${r}`}class id{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(de(this.auth,"network-request-failed")),nd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=de(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function rd(n,e){return ee(n,"POST","/v1/accounts:delete",e)}async function sd(n,e){return ee(n,"POST","/v1/accounts:update",e)}async function od(n,e){return ee(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function yn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function ad(n,e=!1){return b(n).getIdToken(e)}async function da(n,e=!1){const t=b(n),i=await t.getIdToken(e),r=Ii(i);y(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:yn(Ki(r.auth_time)),issuedAtTime:yn(Ki(r.iat)),expirationTime:yn(Ki(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ki(n){return Number(n)*1e3}function Ii(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const r=Dl(t);return r?JSON.parse(r):(Qn("Failed to decode base64 JWT payload"),null)}catch(r){return Qn("Caught error parsing JWT payload as JSON",r),null}}function cd(n){const e=Ii(n);return y(e,"internal-error"),y(typeof e.exp!="undefined","internal-error"),y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xe(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof at&&ld(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ld({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ud{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ha{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sn(n){var e;const t=n.auth,i=await n.getIdToken(),r=await xe(n,od(t,{idToken:i}));y(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hd(s.providerUserInfo):[],a=dd(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ha(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function fa(n){const e=b(n);await Sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dd(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function hd(n){return n.map(e=>{var{providerId:t}=e,i=Tr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function fd(n,e){const t=await la(n,{},async()=>{const i=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=ua(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ca.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken!="undefined","internal-error"),y(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):cd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await fd(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Rn;return i&&(y(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(y(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rn,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
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
 */function nt(n,e){y(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class yt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Tr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ud(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ha(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await xe(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return da(this,e)}reload(){return fa(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Sn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xe(this,rd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,l,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(r=t.email)!==null&&r!==void 0?r:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=t.createdAt)!==null&&l!==void 0?l:void 0,U=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:D,emailVerified:N,isAnonymous:V,providerData:A,stsTokenManager:M}=t;y(D&&M,e,"internal-error");const O=Rn.fromJSON(this.name,M);y(typeof D=="string",e,"internal-error"),nt(u,e.name),nt(f,e.name),y(typeof N=="boolean",e,"internal-error"),y(typeof V=="boolean",e,"internal-error"),nt(g,e.name),nt(p,e.name),nt(m,e.name),nt(_,e.name),nt(v,e.name),nt(U,e.name);const C=new yt({uid:D,auth:e,email:f,emailVerified:N,displayName:u,isAnonymous:V,photoURL:p,phoneNumber:g,tenantId:m,stsTokenManager:O,createdAt:v,lastLoginAt:U});return A&&Array.isArray(A)&&(C.providerData=A.map(Ee=>Object.assign({},Ee))),_&&(C._redirectEventId=_),C}static async _fromIdTokenResponse(e,t,i=!1){const r=new Rn;r.updateFromServerResponse(t);const s=new yt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Sn(s),s}}/**
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
 */class pa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pa.type="NONE";const cr=pa;/**
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
 */function $n(n,e,t){return`firebase:${n}:${e}:${t}`}class Ht{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=$n(this.userKey,r.apiKey,s),this.fullPersistenceKey=$n("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ht(He(cr),e,i);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||He(cr);const o=$n(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const u=yt._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ht(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ht(s,e,i))}}/**
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
 */function ks(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_a(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ma(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(va(e))return"Blackberry";if(wa(e))return"Webos";if(Rr(e))return"Safari";if((e.includes("chrome/")||ga(e))&&!e.includes("edge/"))return"Chrome";if(ya(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ma(n=ne()){return/firefox\//i.test(n)}function Rr(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ga(n=ne()){return/crios\//i.test(n)}function _a(n=ne()){return/iemobile/i.test(n)}function ya(n=ne()){return/android/i.test(n)}function va(n=ne()){return/blackberry/i.test(n)}function wa(n=ne()){return/webos/i.test(n)}function Ei(n=ne()){return/iphone|ipad|ipod/i.test(n)}function pd(n=ne()){var e;return Ei(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function md(){return Vl()&&document.documentMode===10}function ba(n=ne()){return Ei(n)||ya(n)||wa(n)||va(n)||/windows phone/i.test(n)||_a(n)}function gd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ia(n,e=[]){let t;switch(n){case"Browser":t=ks(ne());break;case"Worker":t=`${ks(ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${i}`}/**
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
 */class _d{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new As(this),this.idTokenSubscription=new As(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sn(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ed()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?b(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ia(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function oe(n){return b(n)}class As{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gl(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function yd(n,e,t){const i=oe(n);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Ea(e),{host:o,port:a}=vd(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||wd()}function Ea(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vd(n){const e=Ea(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ss(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ss(o)}}}function Ss(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class en{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}/**
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
 */async function Ta(n,e){return ee(n,"POST","/v1/accounts:resetPassword",Z(n,e))}async function ka(n,e){return ee(n,"POST","/v1/accounts:update",e)}async function bd(n,e){return ee(n,"POST","/v1/accounts:update",Z(n,e))}/**
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
 */async function Id(n,e){return Je(n,"POST","/v1/accounts:signInWithPassword",Z(n,e))}async function Ti(n,e){return ee(n,"POST","/v1/accounts:sendOobCode",Z(n,e))}async function Ed(n,e){return Ti(n,e)}async function Td(n,e){return Ti(n,e)}async function kd(n,e){return Ti(n,e)}async function Ad(n,e){return Ti(n,e)}/**
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
 */async function Sd(n,e){return Je(n,"POST","/v1/accounts:signInWithEmailLink",Z(n,e))}async function Rd(n,e){return Je(n,"POST","/v1/accounts:signInWithEmailLink",Z(n,e))}/**
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
 */class Kt extends en{constructor(e,t,i,r=null){super("password",i);this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Kt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Kt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Id(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sd(e,{email:this._email,oobCode:this._password});default:le(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ka(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rd(e,{idToken:t,email:this._email,oobCode:this._password});default:le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ze(n,e){return Je(n,"POST","/v1/accounts:signInWithIdp",Z(n,e))}/**
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
 */const Nd="http://localhost";class Ne extends en{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new Ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Tr(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ne(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ze(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ze(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ze(e,t)}buildRequest(){const e={requestUri:Nd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xt(t)}return e}}/**
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
 */async function Od(n,e){return ee(n,"POST","/v1/accounts:sendVerificationCode",Z(n,e))}async function Pd(n,e){return Je(n,"POST","/v1/accounts:signInWithPhoneNumber",Z(n,e))}async function Dd(n,e){const t=await Je(n,"POST","/v1/accounts:signInWithPhoneNumber",Z(n,e));if(t.temporaryProof)throw Zn(n,"account-exists-with-different-credential",t);return t}const Cd={USER_NOT_FOUND:"user-not-found"};async function Ld(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Je(n,"POST","/v1/accounts:signInWithPhoneNumber",Z(n,t),Cd)}/**
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
 */class it extends en{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,t){return new it({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new it({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Pd(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Dd(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ld(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new it({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */function Md(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ud(n){const e=pn(mn(n)).link,t=e?pn(mn(e)).deep_link_id:null,i=pn(mn(n)).deep_link_id;return(i?pn(mn(i)).link:null)||i||t||e||n}class tn{constructor(e){var t,i,r,s,o,a;const c=pn(mn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,u=Md((r=c.mode)!==null&&r!==void 0?r:null);y(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Ud(e);try{return new tn(t)}catch{return null}}}function Fd(n){return tn.parseLink(n)}/**
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
 */class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return Kt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=tn.parseLink(t);return y(i,"argument-error"),Kt._fromEmailAndCode(e,i.code,i.tenantId)}}ct.PROVIDER_ID="password";ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nn extends Xe{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vn extends nn{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return y("providerId"in t&&"signInMethod"in t,"argument-error"),Ne._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return y(e.idToken||e.accessToken,"argument-error"),Ne._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!t&&!s||!a)return null;try{return new vn(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Ve extends nn{constructor(){super("facebook.com")}static credential(e){return Ne._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
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
 */class Be extends nn{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return Ne._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
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
 */class qe extends nn{constructor(){super("github.com")}static credential(e){return Ne._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.GITHUB_SIGN_IN_METHOD="github.com";qe.PROVIDER_ID="github.com";/**
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
 */const Vd="http://localhost";class Nn extends en{constructor(e,t){super(e,e);this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ze(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ze(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=t;return!i||!r||!s||i!==r?null:new Nn(i,s)}static _create(e,t){return new Nn(e,t)}buildRequest(){return{requestUri:Vd,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Bd="saml.";class oi extends Xe{constructor(e){y(e.startsWith(Bd),"argument-error");super(e)}static credentialFromResult(e){return oi.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return oi.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Nn.fromJSON(e);return y(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Nn._create(i,t)}catch{return null}}}/**
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
 */class je extends nn{constructor(){super("twitter.com")}static credential(e,t){return Ne._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return je.credential(t,i)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
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
 */async function Aa(n,e){return Je(n,"POST","/v1/accounts:signUp",Z(n,e))}/**
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
 */class ye{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await yt._fromIdTokenResponse(e,i,r),o=Rs(i);return new ye({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Rs(i);return new ye({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Rs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function qd(n){var e;const t=oe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ye({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Aa(t,{returnSecureToken:!0}),r=await ye._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}/**
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
 */class ai extends at{constructor(e,t,i,r){var s;super(t.code,t.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,ai.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new ai(e,t,i,r)}}function Sa(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ai._fromErrorAndOperation(n,s,e,i):s})}/**
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
 */function Ra(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function jd(n,e){const t=b(n);await ki(!0,t,e);const{providerUserInfo:i}=await sd(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=Ra(i||[]);return t.providerData=t.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Nr(n,e,t=!1){const i=await xe(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ye._forOperation(n,"link",i)}async function ki(n,e,t){await Sn(e);const i=Ra(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";y(i.has(t)===n,e.auth,r)}/**
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
 */async function Na(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await xe(n,Sa(i,r,e,n),t);y(s.idToken,i,"internal-error");const o=Ii(s.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(n.uid===a,i,"user-mismatch"),ye._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&le(i,"user-mismatch"),s}}/**
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
 */async function Oa(n,e,t=!1){const i="signIn",r=await Sa(n,i,e),s=await ye._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function Ai(n,e){return Oa(oe(n),e)}async function Pa(n,e){const t=b(n);return await ki(!1,t,e.providerId),Nr(t,e)}async function Da(n,e){return Na(b(n),e)}/**
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
 */async function Hd(n,e){return Je(n,"POST","/v1/accounts:signInWithCustomToken",Z(n,e))}/**
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
 */async function Wd(n,e){const t=oe(n),i=await Hd(t,{token:e,returnSecureToken:!0}),r=await ye._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(r.user),r}/**
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
 */class Si{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Or._fromServerResponse(e,t):le(e,"internal-error")}}class Or extends Si{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Or(t)}}/**
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
 */function Ri(n,e,t){var i;y(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function zd(n,e,t){const i=b(n),r={requestType:"PASSWORD_RESET",email:e};t&&Ri(i,r,t),await Td(i,r)}async function Gd(n,e,t){await Ta(b(n),{oobCode:e,newPassword:t})}async function xd(n,e){await bd(b(n),{oobCode:e})}async function Ca(n,e){const t=b(n),i=await Ta(t,{oobCode:e}),r=i.requestType;switch(y(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":y(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":y(i.mfaInfo,t,"internal-error");default:y(i.email,t,"internal-error")}let s=null;return i.mfaInfo&&(s=Si._fromServerResponse(oe(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function Kd(n,e){const{data:t}=await Ca(b(n),e);return t.email}async function Yd(n,e,t){const i=oe(n),r=await Aa(i,{returnSecureToken:!0,email:e,password:t}),s=await ye._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Jd(n,e,t){return Ai(b(n),ct.credential(e,t))}/**
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
 */async function Xd(n,e,t){const i=b(n),r={requestType:"EMAIL_SIGNIN",email:e};y(t.handleCodeInApp,i,"argument-error"),t&&Ri(i,r,t),await kd(i,r)}function Qd(n,e){const t=tn.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Zd(n,e,t){const i=b(n),r=ct.credentialWithLink(e,t||An());return y(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Ai(i,r)}/**
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
 */async function $d(n,e){return ee(n,"POST","/v1/accounts:createAuthUri",Z(n,e))}/**
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
 */async function eh(n,e){const t=Ar()?An():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:r}=await $d(b(n),i);return r||[]}async function th(n,e){const t=b(n),i=await n.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&Ri(t.auth,r,e);const{email:s}=await Ed(t.auth,r);s!==n.email&&await n.reload()}async function nh(n,e,t){const i=b(n),r=await n.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};t&&Ri(i.auth,s,t);const{email:o}=await Ad(i.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function ih(n,e){return ee(n,"POST","/v1/accounts:update",e)}/**
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
 */async function rh(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=b(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await xe(i,ih(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function sh(n,e){return La(b(n),e,null)}function oh(n,e){return La(b(n),null,e)}async function La(n,e,t){const{auth:i}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await xe(n,ka(i,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function ah(n){var e,t;if(!n)return null;const{providerId:i}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n==null?void 0:n.idToken)){const o=(t=(e=Ii(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Wt(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new ch(s,r);case"github.com":return new lh(s,r);case"google.com":return new uh(s,r);case"twitter.com":return new dh(s,r,n.screenName||null);case"custom":case"anonymous":return new Wt(s,null);default:return new Wt(s,i,r)}}class Wt{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Ma extends Wt{constructor(e,t,i,r){super(e,t,i);this.username=r}}class ch extends Wt{constructor(e,t){super(e,"facebook.com",t)}}class lh extends Ma{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class uh extends Wt{constructor(e,t){super(e,"google.com",t)}}class dh extends Ma{constructor(e,t,i){super(e,"twitter.com",t,i)}}function hh(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:ah(t)}/**
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
 */function fh(n,e){return b(n).setPersistence(e)}function ph(n,e,t,i){return b(n).onIdTokenChanged(e,t,i)}function mh(n,e,t,i){return b(n).onAuthStateChanged(e,t,i)}function gh(n){b(n).useDeviceLanguage()}function _h(n,e){return b(n).updateCurrentUser(e)}function yh(n){return b(n).signOut()}async function vh(n){return b(n).delete()}class gt{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new gt("enroll",e)}static _fromMfaPendingCredential(e){return new gt("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return gt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return gt._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Pr{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=oe(e),r=t.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>Si._fromServerResponse(i,a));y(r.mfaPendingCredential,i,"internal-error");const o=gt._fromMfaPendingCredential(r.mfaPendingCredential);return new Pr(o,s,async a=>{const c=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const l=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const d=await ye._fromIdTokenResponse(i,t.operationType,l);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return y(t.user,i,"internal-error"),ye._forOperation(t.user,t.operationType,l);default:le(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function wh(n,e){var t;const i=b(n),r=e;return y(e.customData.operationType,i,"argument-error"),y((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),Pr._fromError(i,r)}/**
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
 */function bh(n,e){return ee(n,"POST","/v2/accounts/mfaEnrollment:start",Z(n,e))}function Ih(n,e){return ee(n,"POST","/v2/accounts/mfaEnrollment:finalize",Z(n,e))}function Eh(n,e){return ee(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Z(n,e))}class Dr{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Si._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Dr(e)}async getSession(){return gt._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const i=e,r=await this.getSession(),s=await xe(this.user,i._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),r=await xe(this.user,Eh(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Yi=new WeakMap;function Th(n){const e=b(n);return Yi.has(e)||Yi.set(e,Dr._fromUser(e)),Yi.get(e)}const ci="__sak";/**
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
 */class Ua{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ci,"1"),this.storage.removeItem(ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function kh(){const n=ne();return Rr(n)||Ei(n)}const Ah=1e3,Sh=10;class Fa extends Ua{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kh()&&gd(),this.fallbackToPolling=ba(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);md()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Sh):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ah)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fa.type="LOCAL";const Va=Fa;/**
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
 */class Ba extends Ua{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ba.type="SESSION";const Cr=Ba;/**
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
 */function Rh(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ni(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Rh(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
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
 */function Oi(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Nh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Oi("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const f=u;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Y(){return window}function Oh(n){Y().location.href=n}/**
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
 */function Lr(){return typeof Y().WorkerGlobalScope!="undefined"&&typeof Y().importScripts=="function"}async function Ph(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ch(){return Lr()?self:null}/**
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
 */const qa="firebaseLocalStorageDb",Lh=1,li="firebaseLocalStorage",ja="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pi(n,e){return n.transaction([li],e?"readwrite":"readonly").objectStore(li)}function Mh(){const n=indexedDB.deleteDatabase(qa);return new Fn(n).toPromise()}function lr(){const n=indexedDB.open(qa,Lh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(li,{keyPath:ja})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(li)?e(i):(i.close(),await Mh(),e(await lr()))})})}async function Ns(n,e,t){const i=Pi(n,!0).put({[ja]:e,value:t});return new Fn(i).toPromise()}async function Uh(n,e){const t=Pi(n,!1).get(e),i=await new Fn(t).toPromise();return i===void 0?null:i.value}function Os(n,e){const t=Pi(n,!0).delete(e);return new Fn(t).toPromise()}const Fh=800,Vh=3;class Ha{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Vh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(Ch()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ph(),!this.activeServiceWorker)return;this.sender=new Nh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lr();return await Ns(e,ci,"1"),await Os(e,ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ns(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Uh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Os(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Pi(r,!1).getAll();return new Fn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ha.type="LOCAL";const Wa=Ha;/**
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
 */function Bh(n,e){return ee(n,"POST","/v2/accounts/mfaSignIn:start",Z(n,e))}function qh(n,e){return ee(n,"POST","/v2/accounts/mfaSignIn:finalize",Z(n,e))}/**
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
 */async function jh(n){return(await ee(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function Hh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function za(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=de("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",Hh().appendChild(i)})}function Ga(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Wh=500,zh=6e4,Gn=1e12;class Gh{constructor(e){this.auth=e,this.counter=Gn,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new xh(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Gn;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Gn;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Gn;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class xh{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;y(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Kh(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},zh)},Wh))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Kh(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Ji=Ga("rcb"),Yh=new Un(3e4,6e4),Jh="https://www.google.com/recaptcha/api.js?";class Xh{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Y().grecaptcha}load(e,t=""){return y(Qh(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Y().grecaptcha):new Promise((i,r)=>{const s=Y().setTimeout(()=>{r(de(e,"network-request-failed"))},Yh.get());Y()[Ji]=()=>{Y().clearTimeout(s),delete Y()[Ji];const a=Y().grecaptcha;if(!a){r(de(e,"internal-error"));return}const c=a.render;a.render=(l,d)=>{const u=c(l,d);return this.counter++,u},this.hostLanguage=t,i(a)};const o=`${Jh}?${Xt({onload:Ji,render:"explicit",hl:t})}`;za(o).catch(()=>{clearTimeout(s),r(de(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Y().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Qh(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Zh{async load(e){return new Gh(e)}clearedOneInstance(){}}/**
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
 */const xa="recaptcha",$h={theme:"light",type:"image"};class ef{constructor(e,t=Object.assign({},$h),i){this.parameters=t,this.type=xa,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=oe(i),this.isInvisible=this.parameters.size==="invisible",y(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;y(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Zh:new Xh,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Y()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(Ar()&&!Lr(),this.auth,"internal-error"),await tf(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await jh(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function tf(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Mr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=it._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function nf(n,e,t){const i=oe(n),r=await Di(i,e,b(t));return new Mr(r,s=>Ai(i,s))}async function rf(n,e,t){const i=b(n);await ki(!1,i,"phone");const r=await Di(i.auth,e,b(t));return new Mr(r,s=>Pa(i,s))}async function sf(n,e,t){const i=b(n),r=await Di(i.auth,e,b(t));return new Mr(r,s=>Da(i,s))}async function Di(n,e,t){var i;const r=await t.verify();try{y(typeof r=="string",n,"argument-error"),y(t.type===xa,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return y(o.type==="enroll",n,"internal-error"),(await bh(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{y(o.type==="signin",n,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return y(a,n,"missing-multi-factor-info"),(await Bh(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Od(n,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{t._reset()}}async function of(n,e){await Nr(b(n),e)}/**
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
 */class vt{constructor(e){this.providerId=vt.PROVIDER_ID,this.auth=oe(e)}verifyPhoneNumber(e,t){return Di(this.auth,e,b(t))}static credential(e,t){return it._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vt.credentialFromTaggedObject(t)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?it._fromTokenResponse(t,i):null}}vt.PROVIDER_ID="phone";vt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ot(n,e){return e?He(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ur extends en{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function af(n){return Oa(n.auth,new Ur(n),n.bypassAuthState)}function cf(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Na(t,new Ur(n),n.bypassAuthState)}async function lf(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Nr(t,new Ur(n),n.bypassAuthState)}/**
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
 */class Ka{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return af;case"linkViaPopup":case"linkViaRedirect":return lf;case"reauthViaPopup":case"reauthViaRedirect":return cf;default:le(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uf=new Un(2e3,1e4);async function df(n,e,t){const i=oe(n);$t(n,e,Xe);const r=Ot(i,t);return new We(i,"signInViaPopup",e,r).executeNotNull()}async function hf(n,e,t){const i=b(n);$t(i.auth,e,Xe);const r=Ot(i.auth,t);return new We(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function ff(n,e,t){const i=b(n);$t(i.auth,e,Xe);const r=Ot(i.auth,t);return new We(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class We extends Ka{constructor(e,t,i,r,s){super(e,t,r,s);this.provider=i,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Oi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uf.get())};e()}}We.currentPopupAction=null;/**
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
 */const pf="pendingRedirect",Xi=new Map;class mf extends Ka{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=Xi.get(this.auth._key());if(!e){try{const i=await gf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Xi.set(this.auth._key(),e)}return this.bypassAuthState||Xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gf(n,e){const t=Ja(e),i=Ya(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}async function Fr(n,e){return Ya(n)._set(Ja(e),"true")}function Ya(n){return He(n._redirectPersistence)}function Ja(n){return $n(pf,n.config.apiKey,n.name)}/**
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
 */function _f(n,e,t){return yf(n,e,t)}async function yf(n,e,t){const i=oe(n);$t(n,e,Xe);const r=Ot(i,t);return await Fr(r,i),r._openRedirect(i,e,"signInViaRedirect")}function vf(n,e,t){return wf(n,e,t)}async function wf(n,e,t){const i=b(n);$t(i.auth,e,Xe);const r=Ot(i.auth,t);await Fr(r,i.auth);const s=await Qa(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function bf(n,e,t){return If(n,e,t)}async function If(n,e,t){const i=b(n);$t(i.auth,e,Xe);const r=Ot(i.auth,t);await ki(!1,i,e.providerId),await Fr(r,i.auth);const s=await Qa(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function Ef(n,e){return await oe(n)._initializationPromise,Xa(n,e,!1)}async function Xa(n,e,t=!1){const i=oe(n),r=Ot(i,e),o=await new mf(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function Qa(n){const e=Oi(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const Tf=10*60*1e3;class kf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Af(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Za(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(de(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ps(e))}saveEventToCache(e){this.cachedEventUids.add(Ps(e)),this.lastProcessedEventTime=Date.now()}}function Ps(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Za({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Af(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Za(n);default:return!1}}/**
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
 */async function Sf(n,e={}){return ee(n,"GET","/v1/projects",e)}/**
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
 */const Rf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nf=/^https?/;async function Of(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Sf(n);for(const t of e)try{if(Pf(t))return}catch{}le(n,"unauthorized-domain")}function Pf(n){const e=An(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Nf.test(t))return!1;if(Rf.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Df=new Un(3e4,6e4);function Ds(){const n=Y().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Cf(n){return new Promise((e,t)=>{var i,r,s;function o(){Ds(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ds(),t(de(n,"network-request-failed"))},timeout:Df.get()})}if(!((r=(i=Y().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Y().gapi)===null||s===void 0)&&s.load)o();else{const a=Ga("iframefcb");return Y()[a]=()=>{gapi.load?o():t(de(n,"network-request-failed"))},za(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ei=null,e})}let ei=null;function Lf(n){return ei=ei||Cf(n),ei}/**
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
 */const Mf=new Un(5e3,15e3),Uf="__/auth/iframe",Ff="emulator/auth/iframe",Vf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qf(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sr(e,Ff):`https://${n.config.authDomain}/${Uf}`,i={apiKey:e.apiKey,appName:n.name,v:Zt},r=Bf.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Xt(i).slice(1)}`}async function jf(n){const e=await Lf(n),t=Y().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:qf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vf,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=de(n,"network-request-failed"),a=Y().setTimeout(()=>{s(o)},Mf.get());function c(){Y().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Hf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wf=500,zf=600,Gf="_blank",xf="http://localhost";class Cs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kf(n,e,t,i=Wf,r=zf){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hf),{width:i.toString(),height:r.toString(),top:s,left:o}),l=ne().toLowerCase();t&&(a=ga(l)?Gf:t),ma(l)&&(e=e||xf,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[g,p])=>`${f}${g}=${p},`,"");if(pd(l)&&a!=="_self")return Yf(e||"",a),new Cs(null);const u=window.open(e||"",a,d);y(u,n,"popup-blocked");try{u.focus()}catch{}return new Cs(u)}function Yf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Jf="__/auth/handler",Xf="emulator/auth/handler";function Ls(n,e,t,i,r,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Zt,eventId:r};if(e instanceof Xe){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof nn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Qf(n)}?${Xt(a).slice(1)}`}function Qf({config:n}){return n.emulator?Sr(n,Xf):`https://${n.authDomain}/${Jf}`}/**
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
 */const Qi="webStorageSupport";class Zf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cr,this._completeRedirectFn=Xa}async _openPopup(e,t,i,r){var s;Ge((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ls(e,t,i,An(),r);return Kf(e,o,Oi())}async _openRedirect(e,t,i,r){return await this._originValidation(e),Oh(Ls(e,t,i,An(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(Ge(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await jf(e),i=new kf(e);return t.register("authEvent",r=>(y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qi,{type:Qi},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Qi];o!==void 0&&t(!!o),le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Of(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ba()||Rr()||Ei()}}const $a=Zf;class $f{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ae("unexpected MultiFactorSessionType")}}}class Vr extends $f{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new Vr(e)}_finalizeEnroll(e,t,i){return Ih(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return qh(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ec{constructor(){}static assertion(e){return Vr._fromCredential(e)}}ec.FACTOR_ID="phone";var Ms="@firebase/auth",Us="0.19.10";/**
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
 */class ep{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function np(n){It(new rt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,c)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),y(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ia(n)},d=new _d(a,c,l);return Zu(d,t),d})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),It(new rt("auth-internal",e=>{const t=oe(e.getProvider("auth").getImmediate());return(i=>new ep(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Ms,Us,tp(n)),Re(Ms,Us,"esm2017")}/**
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
 */function ip(n=Er()){const e=Qt(n,"auth");return e.isInitialized()?e.getImmediate():aa(n,{popupRedirectResolver:$a,persistence:[Wa,Va,Cr]})}np("Browser");var k_=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:Yu,ActionCodeURL:tn,AuthCredential:en,AuthErrorCodes:Qu,EmailAuthCredential:Kt,EmailAuthProvider:ct,FacebookAuthProvider:Ve,FactorId:zu,GithubAuthProvider:qe,GoogleAuthProvider:Be,OAuthCredential:Ne,OAuthProvider:vn,OperationType:Ku,PhoneAuthCredential:it,PhoneAuthProvider:vt,PhoneMultiFactorGenerator:ec,ProviderId:Gu,RecaptchaVerifier:ef,SAMLAuthProvider:oi,SignInMethod:xu,TwitterAuthProvider:je,applyActionCode:xd,browserLocalPersistence:Va,browserPopupRedirectResolver:$a,browserSessionPersistence:Cr,checkActionCode:Ca,confirmPasswordReset:Gd,connectAuthEmulator:yd,createUserWithEmailAndPassword:Yd,debugErrorMap:Xu,deleteUser:vh,fetchSignInMethodsForEmail:eh,getAdditionalUserInfo:hh,getAuth:ip,getIdToken:ad,getIdTokenResult:da,getMultiFactorResolver:wh,getRedirectResult:Ef,inMemoryPersistence:cr,indexedDBLocalPersistence:Wa,initializeAuth:aa,isSignInWithEmailLink:Qd,linkWithCredential:Pa,linkWithPhoneNumber:rf,linkWithPopup:ff,linkWithRedirect:bf,multiFactor:Th,onAuthStateChanged:mh,onIdTokenChanged:ph,parseActionCodeURL:Fd,prodErrorMap:ra,reauthenticateWithCredential:Da,reauthenticateWithPhoneNumber:sf,reauthenticateWithPopup:hf,reauthenticateWithRedirect:vf,reload:fa,sendEmailVerification:th,sendPasswordResetEmail:zd,sendSignInLinkToEmail:Xd,setPersistence:fh,signInAnonymously:qd,signInWithCredential:Ai,signInWithCustomToken:Wd,signInWithEmailAndPassword:Jd,signInWithEmailLink:Zd,signInWithPhoneNumber:nf,signInWithPopup:df,signInWithRedirect:_f,signOut:yh,unlink:jd,updateCurrentUser:_h,updateEmail:sh,updatePassword:oh,updatePhoneNumber:of,updateProfile:rh,useDeviceLanguage:gh,verifyBeforeUpdateEmail:nh,verifyPasswordResetCode:Kd},Symbol.toStringTag,{value:"Module"})),rp="firebase",sp="9.6.9";/**
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
 */Re(rp,sp,"app");/**
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
 */const Tt=new wr("@firebase/firestore");function op(n){Tt.setLogLevel(n)}function kt(n,...e){if(Tt.logLevel<=L.DEBUG){const t=e.map(Br);Tt.debug(`Firestore (${rn}): ${n}`,...t)}}function Ci(n,...e){if(Tt.logLevel<=L.ERROR){const t=e.map(Br);Tt.error(`Firestore (${rn}): ${n}`,...t)}}function tc(n,...e){if(Tt.logLevel<=L.WARN){const t=e.map(Br);Tt.warn(`Firestore (${rn}): ${n}`,...t)}}function Br(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function X(n="Unexpected state"){const e=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: `+n;throw Ci(e),new Error(e)}function ce(n,e){n||X()}function Vn(n,e){return n}/**
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
 */const Fs="ok",qr="cancelled",zt="unknown",E="invalid-argument",nc="deadline-exceeded",jr="not-found",ap="already-exists",ic="permission-denied",ui="unauthenticated",rc="resource-exhausted",Ke="failed-precondition",Hr="aborted",sc="out-of-range",Wr="unimplemented",oc="internal",ac="unavailable",cp="data-loss";class w extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class cc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ae.UNAUTHENTICATED))}shutdown(){}}class up{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dp{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ce(typeof e.accessToken=="string"),new cc(e.accessToken,new ae(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class hp{constructor(e,t,i){this.type="FirstParty",this.user=ae.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class fp{constructor(e,t,i){this.t=e,this.i=t,this.o=i}getToken(){return Promise.resolve(new hp(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mp{constructor(e){this.u=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(ce(typeof e.token=="string"),new pp(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class gp{constructor(e,t,i,r,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class On{constructor(e,t,i){t===void 0?t=0:t>e.length&&X(),i===void 0?i=e.length-t:i>e.length-t&&X(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return On.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof On?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends On{construct(e,t,i){return new q(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new w(E,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new q(t)}static emptyPath(){return new q([])}}const _p=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends On{construct(e,t,i){return new me(e,t,i)}static isValidIdentifier(e){return _p.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new w(E,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new w(E,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(E,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new w(E,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(q.fromString(e))}static fromName(e){return new G(q.fromString(e).popFirst(5))}static empty(){return new G(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new q(e.slice()))}}/**
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
 */function Gr(n,e,t){if(!t)throw new w(E,`Function ${n}() cannot be called with an empty ${e}.`)}function Vs(n){if(!G.isDocumentKey(n))throw new w(E,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bs(n){if(G.isDocumentKey(n))throw new w(E,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Li(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X()}function Ie(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(E,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Li(n);throw new w(E,`Expected type '${e.name}', but it was: ${t}`)}}return n}function lc(n,e){if(e<=0)throw new w(E,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function xr(n){return n==null}function di(n){return n===0&&1/n==-1/0}/**
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
 */const yp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var qs,P;function js(n){if(n===void 0)return Ci("RPC_ERROR","HTTP error has no status"),zt;switch(n){case 200:return Fs;case 400:return Ke;case 401:return ui;case 403:return ic;case 404:return jr;case 409:return Hr;case 416:return sc;case 429:return rc;case 499:return qr;case 500:return zt;case 501:return Wr;case 503:return ac;case 504:return nc;default:return n>=200&&n<300?Fs:n>=400&&n<500?Ke:n>=500&&n<600?oc:zt}}/**
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
 */(P=qs||(qs={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";class vp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,i,r,s){const o=this.p(e,t);kt("RestConnection","Sending: ",o,i);const a={};return this.g(a,r,s),this.v(e,o,a,i).then(c=>(kt("RestConnection","Received: ",c),c),c=>{throw tc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",i),c})}T(e,t,i,r,s){return this.m(e,t,i,r,s)}g(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+rn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}p(e,t){const i=yp[e];return`${this.h}/v1/${t}:${i}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,i,r){const s=JSON.stringify(r);let o;try{o=await this.I(t,{method:"POST",headers:i,body:s})}catch(a){throw new w(js(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new w(js(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 */function wp(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class bp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=wp(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function $(n,e){return n<e?-1:n>e?1:0}function Kr(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */class be{constructor(e){this.timestamp=e}static fromTimestamp(e){return new be(e)}static min(){return new be(new he(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Hs(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class hi{constructor(e){this.fields=e,e.sort(me.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kr(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ye(t)}static fromUint8Array(e){const t=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const Ip=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(ce(!!n),typeof n=="string"){let e=0;const t=Ip.exec(n);if(ce(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pn(n){return typeof n=="string"?Ye.fromBase64String(n):Ye.fromUint8Array(n)}/**
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
 */function Yr(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function uc(n){const e=n.mapValue.fields.__previous_value__;return Yr(e)?uc(e):e}function Dn(n){const e=At(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */function St(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yr(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9:10:X()}function Jt(n,e){if(n===e)return!0;const t=St(n);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Dn(n).isEqual(Dn(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=At(i.timestampValue),o=At(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Pn(i.bytesValue).isEqual(Pn(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return J(i.geoPointValue.latitude)===J(r.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return J(i.integerValue)===J(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=J(i.doubleValue),o=J(r.doubleValue);return s===o?di(s)===di(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Kr(n.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Hs(s)!==Hs(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Jt(s[a],o[a])))return!1;return!0}(n,e);default:return X()}}function Cn(n,e){return(n.values||[]).find(t=>Jt(t,e))!==void 0}function fi(n,e){if(n===e)return 0;const t=St(n),i=St(e);if(t!==i)return $(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(r,s){const o=J(r.integerValue||r.doubleValue),a=J(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ws(n.timestampValue,e.timestampValue);case 4:return Ws(Dn(n),Dn(e));case 5:return $(n.stringValue,e.stringValue);case 6:return function(r,s){const o=Pn(r),a=Pn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=$(o[c],a[c]);if(l!==0)return l}return $(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,s){const o=$(J(r.latitude),J(s.latitude));return o!==0?o:$(J(r.longitude),J(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=fi(o[c],a[c]);if(l)return l}return $(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let d=0;d<a.length&&d<l.length;++d){const u=$(a[d],l[d]);if(u!==0)return u;const f=fi(o[a[d]],c[l[d]]);if(f!==0)return f}return $(a.length,l.length)}(n.mapValue,e.mapValue);default:throw X()}}function Ws(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=At(n),i=At(e),r=$(t.seconds,i.seconds);return r!==0?r:$(t.nanos,i.nanos)}function pi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function dc(n){return!!n&&"arrayValue"in n}function zs(n){return!!n&&"nullValue"in n}function Gs(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zi(n){return!!n&&"mapValue"in n}function wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=wn(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wn(n.arrayValue.values[t]);return e}return Object.assign({},n)}class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wn(t)}setAll(e){let t=me.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,r),i={},r=[],t=a.popLast()}o?i[a.lastSegment()]=wn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());Zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];Zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Bn(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new ue(wn(this.value))}}/**
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
 */class ke{constructor(e,t,i,r,s,o){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ke(e,0,be.min(),be.min(),ue.empty(),0)}static newFoundDocument(e,t,i){return new ke(e,1,t,be.min(),i,0)}static newNoDocument(e,t){return new ke(e,2,t,be.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,be.min(),ue.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ep{constructor(e,t=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function xs(n,e=null,t=[],i=[],r=null,s=null,o=null){return new Ep(n,e,t,i,r,s,o)}class Pe extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,i):new Tp(e,t,i):t==="array-contains"?new Sp(e,i):t==="in"?new Rp(e,i):t==="not-in"?new Np(e,i):t==="array-contains-any"?new Op(e,i):new Pe(e,t,i)}static V(e,t,i){return t==="in"?new kp(e,i):new Ap(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.D(fi(t,this.value)):t!==null&&St(this.value)===St(t)&&this.D(fi(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Tp extends Pe{constructor(e,t,i){super(e,t,i),this.key=G.fromName(i.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.D(t)}}class kp extends Pe{constructor(e,t){super(e,"in",t),this.keys=hc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ap extends Pe{constructor(e,t){super(e,"not-in",t),this.keys=hc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>G.fromName(i.referenceValue))}class Sp extends Pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dc(t)&&Cn(t.arrayValue,this.value)}}class Rp extends Pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cn(this.value.arrayValue,t)}}class Np extends Pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Cn(this.value.arrayValue,t)}}class Op extends Pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Cn(this.value.arrayValue,i))}}class mi{constructor(e,t){this.position=e,this.inclusive=t}}class bn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Ks(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Jt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pt{constructor(e,t=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.$=null,this.S=null,this.startAt,this.endAt}}function Ys(n){return!xr(n.limit)&&n.limitType==="L"}function Jr(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Xr(n){for(const e of n.filters)if(e.N())return e.field;return null}function fc(n){return n.collectionGroup!==null}function ur(n){const e=Vn(n);if(e.$===null){e.$=[];const t=Xr(e),i=Jr(e);if(t!==null&&i===null)t.isKeyField()||e.$.push(new bn(t)),e.$.push(new bn(me.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.$.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new bn(me.keyField(),s))}}}return e.$}function dr(n){const e=Vn(n);if(!e.S)if(e.limitType==="F")e.S=xs(e.path,e.collectionGroup,ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of ur(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new bn(s.field,o))}const i=e.endAt?new mi(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new mi(e.startAt.position,!e.startAt.inclusive):null;e.S=xs(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}return e.S}function Dp(n,e){return function(t,i){if(t.limit!==i.limit||t.orderBy.length!==i.orderBy.length)return!1;for(let o=0;o<t.orderBy.length;o++)if(!Pp(t.orderBy[o],i.orderBy[o]))return!1;if(t.filters.length!==i.filters.length)return!1;for(let o=0;o<t.filters.length;o++)if(r=t.filters[o],s=i.filters[o],r.op!==s.op||!r.field.isEqual(s.field)||!Jt(r.value,s.value))return!1;var r,s;return t.collectionGroup===i.collectionGroup&&!!t.path.isEqual(i.path)&&!!Ks(t.startAt,i.startAt)&&Ks(t.endAt,i.endAt)}(dr(n),dr(e))&&n.limitType===e.limitType}/**
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
 */function pc(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,i){if(t.F){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(i)?"-0":i}}(n,e)}/**
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
 */class Mi{constructor(){this._=void 0}}class mc extends Mi{}class gc extends Mi{constructor(e){super(),this.elements=e}}class _c extends Mi{constructor(e){super(),this.elements=e}}class yc extends Mi{constructor(e,t){super(),this.q=e,this.O=t}}/**
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
 */class Ui{constructor(e,t){this.field=e,this.transform=t}}class re{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new re}static exists(e){return new re(void 0,e)}static updateTime(e){return new re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Fi{}class vc extends Fi{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}}class Qr extends Fi{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}class Vi extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class wc extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
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
 */const Cp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Mp{constructor(e,t){this.databaseId=e,this.F=t}}function hr(n,e){return n.F?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Up(n,e){return n.F?e.toBase64():e.toUint8Array()}function Fp(n,e){return hr(n,e.toTimestamp())}function fr(n){return ce(!!n),be.fromTimestamp(function(e){const t=At(e);return new he(t.seconds,t.nanos)}(n))}function Zr(n,e){return function(t){return new q(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function gi(n,e){return Zr(n.databaseId,e.path)}function pr(n,e){const t=function(r){const s=q.fromString(r);return ce(Ic(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new w(E,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(E,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G((ce((i=t).length>4&&i.get(4)==="documents"),i.popFirst(5)));var i}function Js(n,e){return Zr(n.databaseId,e)}function bc(n){return new q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xs(n,e,t){return{name:gi(n,e),fields:t.value.mapValue.fields}}function Vp(n,e){return"found"in e?function(t,i){ce(!!i.found),i.found.name,i.found.updateTime;const r=pr(t,i.found.name),s=fr(i.found.updateTime),o=new ue({mapValue:{fields:i.found.fields}});return ke.newFoundDocument(r,s,o)}(n,e):"missing"in e?function(t,i){ce(!!i.missing),ce(!!i.readTime);const r=pr(t,i.missing),s=fr(i.readTime);return ke.newNoDocument(r,s)}(n,e):X()}function Bp(n,e){let t;if(e instanceof vc)t={update:Xs(n,e.key,e.value)};else if(e instanceof Vi)t={delete:gi(n,e.key)};else if(e instanceof Qr)t={update:Xs(n,e.key,e.data),updateMask:Wp(e.fieldMask)};else{if(!(e instanceof wc))return X();t={verify:gi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof mc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof gc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _c)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yc)return{fieldPath:s.field.canonicalString(),increment:o.O};throw X()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Fp(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(n,e.precondition)),t}function qp(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Js(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Js(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(d=>function(u){if(u.op==="=="){if(Gs(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NAN"}};if(zs(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Gs(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NOT_NAN"}};if(zs(u.value))return{unaryFilter:{field:Vt(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vt(u.field),op:Hp(u.op),value:u.value}}}(d));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(t.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(l=>function(d){return{field:Vt(d.field),direction:jp(d.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,l){return c.F||xr(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function jp(n){return Cp[n]}function Hp(n){return Lp[n]}function Vt(n){return{fieldPath:n.canonicalString()}}function Wp(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ic(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function $r(n){return new Mp(n,!0)}/**
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
 */class Ec{constructor(e,t,i=1e3,r=1.5,s=6e4){this.C=e,this.timerId=t,this.L=i,this.U=r,this.k=s,this.j=0,this.M=null,this.B=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.k}W(e){this.cancel();const t=Math.floor(this.j+this.Y()),i=Math.max(0,Date.now()-this.B),r=Math.max(0,t-i);r>0&&kt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.j} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.M=this.C.enqueueAfterDelay(this.timerId,r,()=>(this.B=Date.now(),e())),this.j*=this.U,this.j<this.L&&(this.j=this.L),this.j>this.k&&(this.j=this.k)}H(){this.M!==null&&(this.M.skipDelay(),this.M=null)}cancel(){this.M!==null&&(this.M.cancel(),this.M=null)}Y(){return(Math.random()-.5)*this.j}}/**
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
 */class zp extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=i,this.q=r,this.J=!1}X(){if(this.J)throw new w(Ke,"The client has already been terminated.")}m(e,t,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.K.m(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===ui&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(zt,r.toString())})}T(e,t,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.K.T(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===ui&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(zt,r.toString())})}terminate(){this.J=!0}}async function sn(n,e){const t=Vn(n),i=bc(t.q)+"/documents",r={writes:e.map(s=>Bp(t.q,s))};await t.m("Commit",i,r)}async function Tc(n,e){const t=Vn(n),i=bc(t.q)+"/documents",r={documents:e.map(c=>gi(t.q,c))},s=await t.T("BatchGetDocuments",i,r),o=new Map;s.forEach(c=>{const l=Vp(t.q,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());ce(!!l),a.push(l)}),a}async function Gp(n,e){const t=Vn(n),i=qp(t.q,dr(e));return(await t.T("RunQuery",i.parent,{structuredQuery:i.structuredQuery})).filter(r=>!!r.document).map(r=>function(s,o,a){const c=pr(s,o.name),l=fr(o.updateTime),d=new ue({mapValue:{fields:o.fields}}),u=ke.newFoundDocument(c,l,d);return a&&u.setHasCommittedMutations(),a?u.setHasCommittedMutations():u}(t.q,r.document,void 0))}/**
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
 */const In=new Map;function lt(n){if(n._terminated)throw new w(Ke,"The client has already been terminated.");if(!In.has(n)){kt("ComponentProvider","Initializing Datastore");const s=function(c){return new vp(c,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",i=n._persistenceKey,r=n._freezeSettings(),new gp(e,t,i,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams))),o=$r(n._databaseId),a=function(c,l,d,u){return new zp(c,l,d,u)}(n._authCredentials,n._appCheckCredentials,s,o);In.set(n,a)}var e,t,i,r;/**
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
*/return In.get(n)}class Qs{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new w(E,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(E,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(i,r,s,o){if(r===!0&&o===!0)throw new w(E,`${i} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Qe{constructor(e,t,i){this._authCredentials=t,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qs({}),this._settingsFrozen=!1,e instanceof Yt?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new w(E,'"projectId" not provided in firebase.initializeApp.');return new Yt(r.options.projectId)}(e))}get app(){if(!this._app)throw new w(Ke,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(Ke,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qs(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new lp;switch(t.type){case"gapi":const i=t.client;return ce(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new fp(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(E,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=In.get(e);t&&(kt("ComponentProvider","Removing Datastore"),In.delete(e),t.terminate())}(this),Promise.resolve()}}function xp(n,e){const t=Qt(n,"firestore/lite");if(t.isInitialized())throw new w(Ke,"Firestore can only be initialized once per app.");return t.initialize({options:e})}function Kp(n=Er()){return Qt(n,"firestore/lite").getImmediate()}function Yp(n,e,t,i={}){var r;const s=(n=Ie(n,Qe))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&tc("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=ae.MOCK_USER;else{o=Ll(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new w(E,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ae(c)}n._authCredentials=new up(new cc(o,a))}}function Jp(n){return n=Ie(n,Qe),Du(n.app,"firestore/lite"),n._delete()}/**
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
 */class Q{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Q(this.firestore,e,this._key)}}class fe{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new fe(this.firestore,e,this._query)}}class _e extends fe{constructor(e,t,i){super(e,t,new Pt(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Q(this.firestore,null,new G(e))}withConverter(e){return new _e(this.firestore,e,this._path)}}function Xp(n,e,...t){if(n=b(n),Gr("collection","path",e),n instanceof Qe){const i=q.fromString(e,...t);return Bs(i),new _e(n,null,i)}{if(!(n instanceof Q||n instanceof _e))throw new w(E,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(q.fromString(e,...t));return Bs(i),new _e(n.firestore,null,i)}}function Qp(n,e){if(n=Ie(n,Qe),Gr("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new w(E,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new fe(n,null,function(t){return new Pt(q.emptyPath(),t)}(e))}function kc(n,e,...t){if(n=b(n),arguments.length===1&&(e=bp.R()),Gr("doc","path",e),n instanceof Qe){const i=q.fromString(e,...t);return Vs(i),new Q(n,null,new G(i))}{if(!(n instanceof Q||n instanceof _e))throw new w(E,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(q.fromString(e,...t));return Vs(i),new Q(n.firestore,n instanceof _e?n.converter:null,new G(i))}}function Zp(n,e){return n=b(n),e=b(e),(n instanceof Q||n instanceof _e)&&(e instanceof Q||e instanceof _e)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Ac(n,e){return n=b(n),e=b(e),n instanceof fe&&e instanceof fe&&n.firestore===e.firestore&&Dp(n._query,e._query)&&n.converter===e.converter}/**
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
 */class ut{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(E,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function $p(){return new ut("__name__")}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ye.fromBase64String(e))}catch(t){throw new w(E,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class dt{constructor(e){this._methodName=e}}/**
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
 */class Bi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(E,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(E,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
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
 */const em=/^__.*__$/;class tm{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new vc(e,this.data,t,this.fieldTransforms)}}class Sc{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Rc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class qi{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.q=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Z(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new qi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.et({path:i,rt:!1});return r.st(e),r}it(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.et({path:i,rt:!1});return r.Z(),r}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return _i(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(Rc(this.tt)&&em.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class nm{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=i||$r(e)}ht(e,t,i,r=!1){return new qi({tt:e,methodName:t,at:i,path:me.emptyPath(),rt:!1,ct:r},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function Dt(n){const e=n._freezeSettings(),t=$r(n._databaseId);return new nm(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ji(n,e,t,i,r,s={}){const o=n.ht(s.merge||s.mergeFields?2:0,e,t,r);is("Data must be an object, but it was:",o,i);const a=Pc(i,o);let c,l;if(s.merge)c=new hi(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const u of s.mergeFields){const f=mr(e,u,t);if(!o.contains(f))throw new w(E,`Field '${f}' is specified in your field mask but missing from your input data.`);Cc(d,f)||d.push(f)}c=new hi(d),l=o.fieldTransforms.filter(u=>c.covers(u.field))}else c=null,l=o.fieldTransforms;return new tm(new ue(a),c,l)}class qn extends dt{_toFieldTransform(e){if(e.tt!==2)throw e.tt===1?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qn}}function Nc(n,e,t){return new qi({tt:3,at:e.settings.at,methodName:n._methodName,rt:t},e.databaseId,e.q,e.ignoreUndefinedProperties)}class es extends dt{_toFieldTransform(e){return new Ui(e.path,new mc)}isEqual(e){return e instanceof es}}class im extends dt{constructor(e,t){super(e),this.lt=t}_toFieldTransform(e){const t=Nc(this,e,!0),i=this.lt.map(s=>Ct(s,t)),r=new gc(i);return new Ui(e.path,r)}isEqual(e){return this===e}}class rm extends dt{constructor(e,t){super(e),this.lt=t}_toFieldTransform(e){const t=Nc(this,e,!0),i=this.lt.map(s=>Ct(s,t)),r=new _c(i);return new Ui(e.path,r)}isEqual(e){return this===e}}class sm extends dt{constructor(e,t){super(e),this.ft=t}_toFieldTransform(e){const t=new yc(e.q,pc(e.q,this.ft));return new Ui(e.path,t)}isEqual(e){return this===e}}function ts(n,e,t,i){const r=n.ht(1,e,t);is("Data must be an object, but it was:",r,i);const s=[],o=ue.empty();Bn(i,(c,l)=>{const d=rs(e,c,t);l=b(l);const u=r.it(d);if(l instanceof qn)s.push(d);else{const f=Ct(l,u);f!=null&&(s.push(d),o.set(d,f))}});const a=new hi(s);return new Sc(o,a,r.fieldTransforms)}function ns(n,e,t,i,r,s){const o=n.ht(1,e,t),a=[mr(e,i,t)],c=[r];if(s.length%2!=0)throw new w(E,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(mr(e,s[f])),c.push(s[f+1]);const l=[],d=ue.empty();for(let f=a.length-1;f>=0;--f)if(!Cc(l,a[f])){const g=a[f];let p=c[f];p=b(p);const m=o.it(g);if(p instanceof qn)l.push(g);else{const _=Ct(p,m);_!=null&&(l.push(g),d.set(g,_))}}const u=new hi(l);return new Sc(d,u,o.fieldTransforms)}function Oc(n,e,t,i=!1){return Ct(t,n.ht(i?4:3,e))}function Ct(n,e){if(Dc(n=b(n)))return is("Unsupported field value:",e,n),Pc(n,e);if(n instanceof dt)return function(t,i){if(!Rc(i.tt))throw i.ut(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ut(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(t,i){const r=[];let s=0;for(const o of t){let a=Ct(o,i.ot(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(n,e)}return function(t,i){if((t=b(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return pc(i.q,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=he.fromDate(t);return{timestampValue:hr(i.q,r)}}if(t instanceof he){const r=new he(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:hr(i.q,r)}}if(t instanceof Bi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Rt)return{bytesValue:Up(i.q,t._byteString)};if(t instanceof Q){const r=i.databaseId,s=t.firestore._databaseId;if(!s.isEqual(r))throw i.ut(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Zr(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.ut(`Unsupported field value: ${Li(t)}`)}(n,e)}function Pc(n,e){const t={};return function(i){for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,(i,r)=>{const s=Ct(r,e.nt(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function Dc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof Bi||n instanceof Rt||n instanceof Q||n instanceof dt)}function is(n,e,t){if(!Dc(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=Li(t);throw i==="an object"?e.ut(n+" a custom object"):e.ut(n+" "+i)}}function mr(n,e,t){if((e=b(e))instanceof ut)return e._internalPath;if(typeof e=="string")return rs(n,e);throw _i("Field path arguments must be of type string or ",n,!1,void 0,t)}const om=new RegExp("[~\\*/\\[\\]]");function rs(n,e,t){if(e.search(om)>=0)throw _i(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ut(...e.split("."))._internalPath}catch{throw _i(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _i(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new w(E,a+n+c)}function Cc(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class st{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ss(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(os("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ss extends st{data(){return super.data()}}class yi{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Lc(n,e){return n=b(n),e=b(e),n instanceof st&&e instanceof st?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof yi&&e instanceof yi&&Ac(n.query,e.query)&&Kr(n.docs,e.docs,Lc)}function os(n,e){return typeof e=="string"?rs(n,e):e instanceof ut?e._internalPath:e._delegate._internalPath}/**
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
 */class on{}function am(n,...e){for(const t of e)n=t._apply(n);return n}class cm extends on{constructor(e,t,i){super(),this.dt=e,this.wt=t,this.yt=i,this.type="where"}_apply(e){const t=Dt(e.firestore),i=function(r,s,o,a,c,l,d){let u;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(E,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){$s(d,l);const g=[];for(const p of d)g.push(Zs(a,r,p));u={arrayValue:{values:g}}}else u=Zs(a,r,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||$s(d,l),u=Oc(o,s,d,l==="in"||l==="not-in");const f=Pe.create(c,l,u);return function(g,p){if(p.N()){const _=Xr(g);if(_!==null&&!_.isEqual(p.field))throw new w(E,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${p.field.toString()}'`);const v=Jr(g);v!==null&&Bc(g,p.field,v)}const m=function(_,v){for(const U of _.filters)if(v.indexOf(U.op)>=0)return U.op;return null}(g,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(m!==null)throw m===p.op?new w(E,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new w(E,`Invalid query. You cannot use '${p.op.toString()}' filters with '${m.toString()}' filters.`)}(r,f),f}(e._query,"where",t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new fe(e.firestore,e.converter,function(r,s){const o=r.filters.concat([s]);return new Pt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,i))}}function lm(n,e,t){const i=e,r=os("where",n);return new cm(r,i,t)}class um extends on{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(i,r,s){if(i.startAt!==null)throw new w(E,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new w(E,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new bn(r,s);return function(a,c){if(Jr(a)===null){const l=Xr(a);l!==null&&Bc(a,l,c.field)}}(i,o),o}(e._query,this.dt,this._t);return new fe(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new Pt(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function dm(n,e="asc"){const t=e,i=os("orderBy",n);return new um(i,t)}class Mc extends on{constructor(e,t,i){super(),this.type=e,this.gt=t,this.vt=i}_apply(e){return new fe(e.firestore,e.converter,function(t,i,r){return new Pt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),i,r,t.startAt,t.endAt)}(e._query,this.gt,this.vt))}}function hm(n){return lc("limit",n),new Mc("limit",n,"F")}function fm(n){return lc("limitToLast",n),new Mc("limitToLast",n,"L")}class Uc extends on{constructor(e,t,i){super(),this.type=e,this.bt=t,this.Et=i}_apply(e){const t=Vc(e,this.type,this.bt,this.Et);return new fe(e.firestore,e.converter,function(i,r){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,r,i.endAt)}(e._query,t))}}function pm(...n){return new Uc("startAt",n,!0)}function mm(...n){return new Uc("startAfter",n,!1)}class Fc extends on{constructor(e,t,i){super(),this.type=e,this.bt=t,this.Et=i}_apply(e){const t=Vc(e,this.type,this.bt,this.Et);return new fe(e.firestore,e.converter,function(i,r){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,r)}(e._query,t))}}function gm(...n){return new Fc("endBefore",n,!1)}function _m(...n){return new Fc("endAt",n,!0)}function Vc(n,e,t,i){if(t[0]=b(t[0]),t[0]instanceof st)return function(r,s,o,a,c){if(!a)throw new w(jr,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const d of ur(r))if(d.field.isKeyField())l.push(pi(s,a.key));else{const u=a.data.field(d.field);if(Yr(u))throw new w(E,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(u===null){const f=d.field.canonicalString();throw new w(E,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(u)}return new mi(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const r=Dt(n.firestore);return function(s,o,a,c,l,d){const u=s.explicitOrderBy;if(l.length>u.length)throw new w(E,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<l.length;g++){const p=l[g];if(u[g].field.isKeyField()){if(typeof p!="string")throw new w(E,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!fc(s)&&p.indexOf("/")!==-1)throw new w(E,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const m=s.path.child(q.fromString(p));if(!G.isDocumentKey(m))throw new w(E,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const _=new G(m);f.push(pi(o,_))}else{const m=Oc(a,c,p);f.push(m)}}return new mi(f,d)}(n._query,n.firestore._databaseId,r,e,t,i)}}function Zs(n,e,t){if(typeof(t=b(t))=="string"){if(t==="")throw new w(E,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fc(e)&&t.indexOf("/")!==-1)throw new w(E,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(q.fromString(t));if(!G.isDocumentKey(i))throw new w(E,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return pi(n,new G(i))}if(t instanceof Q)return pi(n,t._key);throw new w(E,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Li(t)}.`)}function $s(n,e){if(!Array.isArray(n)||n.length===0)throw new w(E,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new w(E,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Bc(n,e,t){if(!t.isEqual(e))throw new w(E,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function Hi(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class as extends class{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return J(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw X()}}convertObject(e,t){const i={};return Bn(e.fields,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertGeoPoint(e){return new Bi(J(e.latitude),J(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=uc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Dn(e));default:return null}}convertTimestamp(e){const t=At(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=q.fromString(e);ce(Ic(i));const r=new Yt(i.get(1),i.get(3)),s=new G(i.popFirst(5));return r.isEqual(t)||Ci(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}function ym(n){const e=lt((n=Ie(n,Q)).firestore),t=new as(n.firestore);return Tc(e,[n._key]).then(i=>{ce(i.length===1);const r=i[0];return new st(n.firestore,t,n._key,r.isFoundDocument()?r:null,n.converter)})}function vm(n){(function(i){if(Ys(i)&&i.explicitOrderBy.length===0)throw new w(Wr,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Ie(n,fe))._query);const e=lt(n.firestore),t=new as(n.firestore);return Gp(e,n._query).then(i=>{const r=i.map(s=>new ss(n.firestore,t,s.key,s,n.converter));return Ys(n._query)&&r.reverse(),new yi(n,r)})}function wm(n,e,t){const i=Hi((n=Ie(n,Q)).converter,e,t),r=ji(Dt(n.firestore),"setDoc",n._key,i,n.converter!==null,t);return sn(lt(n.firestore),[r.toMutation(n._key,re.none())])}function bm(n,e,t,...i){const r=Dt((n=Ie(n,Q)).firestore);let s;return s=typeof(e=b(e))=="string"||e instanceof ut?ns(r,"updateDoc",n._key,e,t,i):ts(r,"updateDoc",n._key,e),sn(lt(n.firestore),[s.toMutation(n._key,re.exists(!0))])}function Im(n){return sn(lt((n=Ie(n,Q)).firestore),[new Vi(n._key,re.none())])}function Em(n,e){const t=kc(n=Ie(n,_e)),i=Hi(n.converter,e),r=ji(Dt(n.firestore),"addDoc",t._key,i,t.converter!==null,{});return sn(lt(n.firestore),[r.toMutation(t._key,re.exists(!1))]).then(()=>t)}/**
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
 */function Tm(){return new qn("deleteField")}function km(){return new es("serverTimestamp")}function Am(...n){return new im("arrayUnion",n)}function Sm(...n){return new rm("arrayRemove",n)}function Rm(n){return new sm("increment",n)}/**
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
 */class qc{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Dt(e)}set(e,t,i){this._verifyNotCommitted();const r=_t(e,this._firestore),s=Hi(r.converter,t,i),o=ji(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,re.none())),this}update(e,t,i,...r){this._verifyNotCommitted();const s=_t(e,this._firestore);let o;return o=typeof(t=b(t))=="string"||t instanceof ut?ns(this._dataReader,"WriteBatch.update",s._key,t,i,r):ts(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,re.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=_t(e,this._firestore);return this._mutations=this._mutations.concat(new Vi(t._key,re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new w(Ke,"A write batch can no longer be used after commit() has been called.")}}function _t(n,e){if((n=b(n)).firestore!==e)throw new w(E,"Provided document reference is from a different Firestore instance.");return n}function Nm(n){const e=lt(n=Ie(n,Qe));return new qc(n,t=>sn(e,t))}/**
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
 */class Om{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new w(E,"Firestore transactions require all reads to be executed before all writes.");const t=await Tc(this.datastore,e);return t.forEach(i=>this.recordVersion(i)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,i)=>{const r=G.fromPath(i);this.mutations.push(new wc(r,this.precondition(r)))}),await sn(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw X();t=be.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new w(Hr,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?re.updateTime(t):re.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(be.min()))throw new w(E,"Can't update a document that doesn't exist.");return re.updateTime(t)}return re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Pm{constructor(e,t,i,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=i,this.deferred=r,this.Tt=5,this.It=new Ec(this.asyncQueue,"transaction_retry")}run(){this.Tt-=1,this.At()}At(){this.It.W(async()=>{const e=new Om(this.datastore),t=this.Rt(e);t&&t.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.Pt(r)}))}).catch(i=>{this.Pt(i)})})}Rt(e){try{const t=this.updateFunction(e);return!xr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pt(e){this.Tt>0&&this.Vt(e)?(this.Tt-=1,this.asyncQueue.enqueueAndForget(()=>(this.At(),Promise.resolve()))):this.deferred.reject(e)}Vt(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!function(i){switch(i){default:return X();case qr:case zt:case nc:case rc:case oc:case ac:case ui:return!1;case E:case jr:case ap:case ic:case Ke:case Hr:case sc:case Wr:case cp:return!0}}(t)}return!1}}/**
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
 */function $i(){return typeof document!="undefined"?document:null}/**
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
 */class cs{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,a=new cs(e,t,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(qr,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class Dm{constructor(){this.Dt=Promise.resolve(),this.Nt=[],this.$t=!1,this.St=[],this.Ft=null,this.xt=!1,this.qt=!1,this.Ot=[],this.It=new Ec(this,"async_queue_retry"),this.Ct=()=>{const t=$i();t&&kt("AsyncQueue","Visibility state changed to "+t.visibilityState),this.It.H()};const e=$i();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ct)}get isShuttingDown(){return this.$t}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Lt(),this.Ut(e)}enterRestrictedMode(e){if(!this.$t){this.$t=!0,this.qt=e||!1;const t=$i();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ct)}}enqueue(e){if(this.Lt(),this.$t)return new Promise(()=>{});const t=new zr;return this.Ut(()=>this.$t&&this.qt?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Nt.push(e),this.kt()))}async kt(){if(this.Nt.length!==0){try{await this.Nt[0](),this.Nt.shift(),this.It.reset()}catch(e){if(!function(t){return t.name==="IndexedDbTransactionError"}(e))throw e;kt("AsyncQueue","Operation failed with retryable error: "+e)}this.Nt.length>0&&this.It.W(()=>this.kt())}}Ut(e){const t=this.Dt.then(()=>(this.xt=!0,e().catch(i=>{this.Ft=i,this.xt=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ci("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.xt=!1,i))));return this.Dt=t,t}enqueueAfterDelay(e,t,i){this.Lt(),this.Ot.indexOf(e)>-1&&(t=0);const r=cs.createAndSchedule(this,e,t,i,s=>this.jt(s));return this.St.push(r),r}Lt(){this.Ft&&X()}verifyOperationInProgress(){}async Mt(){let e;do e=this.Dt,await e;while(e!==this.Dt)}Bt(e){for(const t of this.St)if(t.timerId===e)return!0;return!1}zt(e){return this.Mt().then(()=>{this.St.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.St)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mt()})}Gt(e){this.Ot.push(e)}jt(e){const t=this.St.indexOf(e);this.St.splice(t,1)}}class jc{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Dt(e)}get(e){const t=_t(e,this._firestore),i=new as(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return X();const s=r[0];if(s.isFoundDocument())return new st(this._firestore,i,s.key,s,t.converter);if(s.isNoDocument())return new st(this._firestore,i,t._key,null,t.converter);throw X()})}set(e,t,i){const r=_t(e,this._firestore),s=Hi(r.converter,t,i),o=ji(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,t,i,...r){const s=_t(e,this._firestore);let o;return o=typeof(t=b(t))=="string"||t instanceof ut?ns(this._dataReader,"Transaction.update",s._key,t,i,r):ts(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=_t(e,this._firestore);return this._transaction.delete(t._key),this}}function Cm(n,e){const t=lt(n=Ie(n,Qe)),i=new zr;return new Pm(new Dm,t,r=>e(new jc(n,r)),i).run(),i.promise}(function(n){rn=n})(`${Zt}_lite`),It(new rt("firestore/lite",(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),i=new Qe(t,new dp(n.getProvider("auth-internal")),new mp(n.getProvider("app-check-internal")));return e&&i._setSettings(e),i},"PUBLIC")),Re("firestore-lite","3.4.6",""),Re("firestore-lite","3.4.6","esm2017");var A_=Object.freeze(Object.defineProperty({__proto__:null,Bytes:Rt,CollectionReference:_e,DocumentReference:Q,DocumentSnapshot:st,FieldPath:ut,FieldValue:dt,Firestore:Qe,FirestoreError:w,GeoPoint:Bi,Query:fe,QueryConstraint:on,QueryDocumentSnapshot:ss,QuerySnapshot:yi,Timestamp:he,Transaction:jc,WriteBatch:qc,addDoc:Em,arrayRemove:Sm,arrayUnion:Am,collection:Xp,collectionGroup:Qp,connectFirestoreEmulator:Yp,deleteDoc:Im,deleteField:Tm,doc:kc,documentId:$p,endAt:_m,endBefore:gm,getDoc:ym,getDocs:vm,getFirestore:Kp,increment:Rm,initializeFirestore:xp,limit:hm,limitToLast:fm,orderBy:dm,query:am,queryEqual:Ac,refEqual:Zp,runTransaction:Cm,serverTimestamp:km,setDoc:wm,setLogLevel:op,snapshotEqual:Lc,startAfter:mm,startAt:pm,terminate:Jp,updateDoc:bm,where:lm,writeBatch:Nm},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Hc="firebasestorage.googleapis.com",Wc="storageBucket",Lm=2*60*1e3,Mm=10*60*1e3;/**
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
 */class te extends at{constructor(e,t){super(er(e),`Firebase Storage: ${t} (${er(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,te.prototype)}_codeEquals(e){return er(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function er(n){return"storage/"+n}function Um(){const n="An unknown error occurred, please check the error payload for server response.";return new te("unknown",n)}function Fm(n){return new te("object-not-found","Object '"+n+"' does not exist.")}function Vm(n){return new te("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Bm(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new te("unauthenticated",n)}function qm(){return new te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function jm(n){return new te("unauthorized","User does not have permission to access '"+n+"'.")}function Hm(){return new te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Wm(){return new te("canceled","User canceled the upload/download.")}function zm(n){return new te("invalid-url","Invalid URL '"+n+"'.")}function Gm(n){return new te("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function xm(){return new te("no-default-bucket","No default bucket found. Did you set the '"+Wc+"' property when initializing the app?")}function gr(n){return new te("invalid-argument",n)}function zc(){return new te("app-deleted","The Firebase app was deleted.")}function Km(n){return new te("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dn(n){throw new te("internal-error","Internal error: "+n)}/**
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
 */class ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=ge.makeFromUrl(e,t)}catch{return new ge(e,"")}if(i.path==="")return i;throw Gm(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${d}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},m=t===Hc?"(?:storage.googleapis.com|storage.cloud.google.com)":t,_="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${_}`,"i"),D=[{regex:a,indices:c,postModify:s},{regex:g,indices:p,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let N=0;N<D.length;N++){const V=D[N],A=V.regex.exec(e);if(A){const M=A[V.indices.bucket];let O=A[V.indices.path];O||(O=""),i=new ge(M,O),V.postModify(i);break}}if(i==null)throw zm(e);return i}}class Ym{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Jm(n,e,t){let i=1,r=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(..._){l||(l=!0,e.apply(null,_))}function u(_){r=setTimeout(()=>{r=null,n(g,c())},_)}function f(){s&&clearTimeout(s)}function g(_,...v){if(l){f();return}if(_){f(),d.call(null,_,...v);return}if(c()||o){f(),d.call(null,_,...v);return}i<64&&(i*=2);let D;a===1?(a=2,D=0):D=(i+Math.random())*1e3,u(D)}let p=!1;function m(_){p||(p=!0,f(),!l&&(r!==null?(_||(a=2),clearTimeout(r),u(0)):_||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,m(!0)},t),m}function Xm(n){n(!1)}/**
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
 */function Qm(n){return n!==void 0}function eo(n,e,t,i){if(i<e)throw gr(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw gr(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Zm(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function $m(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
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
 */var wt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(wt||(wt={}));/**
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
 */class eg{constructor(e,t,i,r,s,o,a,c,l,d,u){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new xn(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===wt.NO_ERROR,c=s.getStatus();if(!a||this.isRetryStatusCode_(c)){const d=s.getErrorCode()===wt.ABORT;i(!1,new xn(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new xn(l,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Qm(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Um();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?zc():Wm();o(c)}else{const c=Hm();o(c)}};this.canceled_?t(!1,new xn(!1,null,!0)):this.backoffId_=Jm(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Xm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return t||r||s}}class xn{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function tg(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ng(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function ig(n,e){e&&(n["X-Firebase-GMPID"]=e)}function rg(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function sg(n,e,t,i,r,s){const o=$m(n.urlParams),a=n.url+o,c=Object.assign({},n.headers);return ig(c,e),tg(c,t),ng(c,s),rg(c,i),new eg(a,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r)}/**
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
 */function og(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ag(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function cg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}class lg{constructor(e,t,i,r){this.url=e,this.method=t,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function ug(n){function e(t,i){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=qm():r=Bm():t.getStatus()===402?r=Vm(n.bucket):t.getStatus()===403?r=jm(n.path):r=i,r.serverResponse=i.serverResponse,r}return e}function dg(n){const e=ug(n);function t(i,r){let s=e(i,r);return i.getStatus()===404&&(s=Fm(n.path)),s.serverResponse=r.serverResponse,s}return t}function hg(n,e,t){const i=e.fullServerUrl(),r=Zm(i,n.host,n._protocol)+"?alt=media",s="GET",o=n.maxOperationRetryTime,a=new lg(r,s,(c,l)=>l,o);return a.errorHandler=dg(e),t!==void 0&&(a.headers.Range=`bytes=0-${t}`,a.successCodes=[200,206]),a}class fg{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,r){if(this.sent_)throw dn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw dn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw dn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw dn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw dn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pg extends fg{initXhr(){this.xhr_.responseType="arraybuffer"}}function mg(){return new pg}/**
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
 */class Nt{constructor(e,t){this._service=e,t instanceof ge?this._location=t:this._location=ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Nt(e,t)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cg(this._location.path)}get storage(){return this._service}get parent(){const e=og(this._location.path);if(e===null)return null;const t=new ge(this._location.bucket,e);return new Nt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Km(e)}}function gg(n,e){n._throwIfRoot("getBytes");const t=hg(n.storage,n._location,e);return n.storage.makeRequestWithTokens(t,mg).then(i=>e!==void 0?i.slice(0,e):i)}function _g(n,e){const t=ag(n._location.path,e),i=new ge(n._location.bucket,t);return new Nt(n.storage,i)}/**
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
 */function yg(n){return/^[A-Za-z]+:\/\//.test(n)}function vg(n,e){return new Nt(n,e)}function Gc(n,e){if(n instanceof ls){const t=n;if(t._bucket==null)throw xm();const i=new Nt(t,t._bucket);return e!=null?Gc(i,e):i}else return e!==void 0?_g(n,e):n}function wg(n,e){if(e&&yg(e)){if(n instanceof ls)return vg(n,e);throw gr("To use ref(service, url), the first argument must be a Storage instance.")}else return Gc(n,e)}function to(n,e){const t=e==null?void 0:e[Wc];return t==null?null:ge.makeFromBucketSpec(t,n)}class ls{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Hc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Lm,this._maxUploadRetryTime=Mm,this._requests=new Set,r!=null?this._bucket=ge.makeFromBucketSpec(r,this._host):this._bucket=to(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=to(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){eo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){eo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nt(this,e)}_makeRequest(e,t,i,r){if(this._deleted)return new Ym(zc());{const s=sg(e,this._appId,i,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const no="@firebase/storage",io="0.9.3";/**
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
 */const xc="storage";/**
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
 */function S_(n,e){return n=b(n),gg(n,e)}function R_(n,e){return n=b(n),wg(n,e)}function N_(n=Er(),e){return n=b(n),Qt(n,xc).getImmediate({identifier:e})}function bg(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new ls(t,i,r,e,Zt)}function Ig(){It(new rt(xc,bg,"PUBLIC").setMultipleInstances(!0)),Re(no,io,""),Re(no,io,"esm2017")}Ig();var Bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Eg=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Kn=0;Kn<Bt.length;Kn++)Eg[Bt.charCodeAt(Kn)]=Kn;var O_=function(n){var e=new Uint8Array(n),t,i=e.length,r="";for(t=0;t<i;t+=3)r+=Bt[e[t]>>2],r+=Bt[(e[t]&3)<<4|e[t+1]>>4],r+=Bt[(e[t+1]&15)<<2|e[t+2]>>6],r+=Bt[e[t+2]&63];return i%3===2?r=r.substring(0,r.length-1)+"=":i%3===1&&(r=r.substring(0,r.length-2)+"=="),r};function ro(n){return Object.prototype.toString.call(n)==="[object Date]"}function _r(n,e,t,i){if(typeof t=="number"||ro(t)){const r=i-t,s=(t-e)/(n.dt||1/60),o=n.opts.stiffness*r,a=n.opts.damping*s,c=(o-a)*n.inv_mass,l=(s+c)*n.dt;return Math.abs(l)<n.opts.precision&&Math.abs(r)<n.opts.precision?i:(n.settled=!1,ro(t)?new Date(t.getTime()+l):t+l)}else{if(Array.isArray(t))return t.map((r,s)=>_r(n,e[s],t[s],i[s]));if(typeof t=="object"){const r={};for(const s in t)r[s]=_r(n,e[s],t[s],i[s]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function Tg(n,e={}){const t=Xo(n),{stiffness:i=.15,damping:r=.8,precision:s=.01}=e;let o,a,c,l=n,d=n,u=1,f=0,g=!1;function p(_,v={}){d=_;const U=c={};if(n==null||v.hard||m.stiffness>=1&&m.damping>=1)return g=!0,o=ps(),l=_,t.set(n=d),Promise.resolve();if(v.soft){const D=v.soft===!0?.5:+v.soft;f=1/(D*60),u=0}return a||(o=ps(),g=!1,a=ml(D=>{if(g)return g=!1,a=null,!1;u=Math.min(u+f,1);const N={inv_mass:u,opts:m,settled:!0,dt:(D-o)*60/1e3},V=_r(N,l,n,d);return o=D,l=n,t.set(n=V),N.settled&&(a=null),!N.settled})),new Promise(D=>{a.promise.then(()=>{U===c&&D()})})}const m={set:p,update:(_,v)=>p(_(d,n),v),subscribe:t.subscribe,stiffness:i,damping:r,precision:s};return m}function so(n,e,t){const i=n.slice();return i[28]=e[t],i[30]=t,i}function oo(n){let e,t,i,r,s=(n[6]==="label"||n[7]==="label")&&ao(n);return{c(){e=j("span"),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0,style:!0});var a=H(e);s&&s.l(a),a.forEach(R),this.h()},h(){T(e,"class","pip first"),T(e,"style",t=n[14]+": 0%;"),S(e,"selected",n[18](n[0])),S(e,"in-range",n[17](n[0]))},m(o,a){W(o,e,a),s&&s.m(e,null),i||(r=[z(e,"click",function(){bt(n[21](n[0]))&&n[21](n[0]).apply(this,arguments)}),z(e,"touchend",En(function(){bt(n[21](n[0]))&&n[21](n[0]).apply(this,arguments)}))],i=!0)},p(o,a){n=o,n[6]==="label"||n[7]==="label"?s?s.p(n,a):(s=ao(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&16384&&t!==(t=n[14]+": 0%;")&&T(e,"style",t),a&262145&&S(e,"selected",n[18](n[0])),a&131073&&S(e,"in-range",n[17](n[0]))},d(o){o&&R(e),s&&s.d(),i=!1,Oe(r)}}}function ao(n){let e,t=n[12](n[16](n[0]),0,0)+"",i,r=n[10]&&co(n),s=n[11]&&lo(n);return{c(){e=j("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(R),this.h()},h(){T(e,"class","pipVal")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[10]?r?r.p(o,a):(r=co(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&69633&&t!==(t=o[12](o[16](o[0]),0,0)+"")&&ve(i,t),o[11]?s?s.p(o,a):(s=lo(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&R(e),r&&r.d(),s&&s.d()}}}function co(n){let e,t;return{c(){e=j("span"),t=se(n[10]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[10]),r.forEach(R),this.h()},h(){T(e,"class","pipVal-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&1024&&ve(t,i[10])},d(i){i&&R(e)}}}function lo(n){let e,t;return{c(){e=j("span"),t=se(n[11]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[11]),r.forEach(R),this.h()},h(){T(e,"class","pipVal-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&2048&&ve(t,i[11])},d(i){i&&R(e)}}}function uo(n){let e,t=Array(n[20]+1),i=[];for(let r=0;r<t.length;r+=1)i[r]=go(so(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=ti()},l(r){for(let s=0;s<i.length;s+=1)i[s].l(r);e=ti()},m(r,s){for(let o=0;o<i.length;o+=1)i[o].m(r,s);W(r,e,s)},p(r,s){if(s&4120131){t=Array(r[20]+1);let o;for(o=0;o<t.length;o+=1){const a=so(r,t,o);i[o]?i[o].p(a,s):(i[o]=go(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){qo(i,r),r&&R(e)}}}function ho(n){let e,t,i,r,s,o=(n[6]==="label"||n[9]==="label")&&fo(n);return{c(){e=j("span"),o&&o.c(),t=Gt(),this.h()},l(a){e=K(a,"SPAN",{class:!0,style:!0});var c=H(e);o&&o.l(c),t=xt(c),c.forEach(R),this.h()},h(){T(e,"class","pip"),T(e,"style",i=n[14]+": "+n[15](n[19](n[30]))+"%;"),S(e,"selected",n[18](n[19](n[30]))),S(e,"in-range",n[17](n[19](n[30])))},m(a,c){W(a,e,c),o&&o.m(e,null),x(e,t),r||(s=[z(e,"click",function(){bt(n[21](n[19](n[30])))&&n[21](n[19](n[30])).apply(this,arguments)}),z(e,"touchend",En(function(){bt(n[21](n[19](n[30])))&&n[21](n[19](n[30])).apply(this,arguments)}))],r=!0)},p(a,c){n=a,n[6]==="label"||n[9]==="label"?o?o.p(n,c):(o=fo(n),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c&573440&&i!==(i=n[14]+": "+n[15](n[19](n[30]))+"%;")&&T(e,"style",i),c&786432&&S(e,"selected",n[18](n[19](n[30]))),c&655360&&S(e,"in-range",n[17](n[19](n[30])))},d(a){a&&R(e),o&&o.d(),r=!1,Oe(s)}}}function fo(n){let e,t=n[12](n[19](n[30]),n[30],n[15](n[19](n[30])))+"",i,r=n[10]&&po(n),s=n[11]&&mo(n);return{c(){e=j("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(R),this.h()},h(){T(e,"class","pipVal")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[10]?r?r.p(o,a):(r=po(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&561152&&t!==(t=o[12](o[19](o[30]),o[30],o[15](o[19](o[30])))+"")&&ve(i,t),o[11]?s?s.p(o,a):(s=mo(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&R(e),r&&r.d(),s&&s.d()}}}function po(n){let e,t;return{c(){e=j("span"),t=se(n[10]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[10]),r.forEach(R),this.h()},h(){T(e,"class","pipVal-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&1024&&ve(t,i[10])},d(i){i&&R(e)}}}function mo(n){let e,t;return{c(){e=j("span"),t=se(n[11]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[11]),r.forEach(R),this.h()},h(){T(e,"class","pipVal-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&2048&&ve(t,i[11])},d(i){i&&R(e)}}}function go(n){let e=n[19](n[30])!==n[0]&&n[19](n[30])!==n[1],t,i=e&&ho(n);return{c(){i&&i.c(),t=ti()},l(r){i&&i.l(r),t=ti()},m(r,s){i&&i.m(r,s),W(r,t,s)},p(r,s){s&524291&&(e=r[19](r[30])!==r[0]&&r[19](r[30])!==r[1]),e?i?i.p(r,s):(i=ho(r),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(r){i&&i.d(r),r&&R(t)}}}function _o(n){let e,t,i,r,s=(n[6]==="label"||n[8]==="label")&&yo(n);return{c(){e=j("span"),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0,style:!0});var a=H(e);s&&s.l(a),a.forEach(R),this.h()},h(){T(e,"class","pip last"),T(e,"style",t=n[14]+": 100%;"),S(e,"selected",n[18](n[1])),S(e,"in-range",n[17](n[1]))},m(o,a){W(o,e,a),s&&s.m(e,null),i||(r=[z(e,"click",function(){bt(n[21](n[1]))&&n[21](n[1]).apply(this,arguments)}),z(e,"touchend",En(function(){bt(n[21](n[1]))&&n[21](n[1]).apply(this,arguments)}))],i=!0)},p(o,a){n=o,n[6]==="label"||n[8]==="label"?s?s.p(n,a):(s=yo(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&16384&&t!==(t=n[14]+": 100%;")&&T(e,"style",t),a&262146&&S(e,"selected",n[18](n[1])),a&131074&&S(e,"in-range",n[17](n[1]))},d(o){o&&R(e),s&&s.d(),i=!1,Oe(r)}}}function yo(n){let e,t=n[12](n[16](n[1]),n[20],100)+"",i,r=n[10]&&vo(n),s=n[11]&&wo(n);return{c(){e=j("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(R),this.h()},h(){T(e,"class","pipVal")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[10]?r?r.p(o,a):(r=vo(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&1118210&&t!==(t=o[12](o[16](o[1]),o[20],100)+"")&&ve(i,t),o[11]?s?s.p(o,a):(s=wo(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&R(e),r&&r.d(),s&&s.d()}}}function vo(n){let e,t;return{c(){e=j("span"),t=se(n[10]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[10]),r.forEach(R),this.h()},h(){T(e,"class","pipVal-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&1024&&ve(t,i[10])},d(i){i&&R(e)}}}function wo(n){let e,t;return{c(){e=j("span"),t=se(n[11]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[11]),r.forEach(R),this.h()},h(){T(e,"class","pipVal-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r&2048&&ve(t,i[11])},d(i){i&&R(e)}}}function kg(n){let e,t,i,r=(n[6]&&n[7]!==!1||n[7])&&oo(n),s=(n[6]&&n[9]!==!1||n[9])&&uo(n),o=(n[6]&&n[8]!==!1||n[8])&&_o(n);return{c(){e=j("div"),r&&r.c(),t=Gt(),s&&s.c(),i=Gt(),o&&o.c(),this.h()},l(a){e=K(a,"DIV",{class:!0});var c=H(e);r&&r.l(c),t=xt(c),s&&s.l(c),i=xt(c),o&&o.l(c),c.forEach(R),this.h()},h(){T(e,"class","rangePips"),S(e,"disabled",n[5]),S(e,"hoverable",n[4]),S(e,"vertical",n[2]),S(e,"reversed",n[3]),S(e,"focus",n[13])},m(a,c){W(a,e,c),r&&r.m(e,null),x(e,t),s&&s.m(e,null),x(e,i),o&&o.m(e,null)},p(a,[c]){a[6]&&a[7]!==!1||a[7]?r?r.p(a,c):(r=oo(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),a[6]&&a[9]!==!1||a[9]?s?s.p(a,c):(s=uo(a),s.c(),s.m(e,i)):s&&(s.d(1),s=null),a[6]&&a[8]!==!1||a[8]?o?o.p(a,c):(o=_o(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null),c&32&&S(e,"disabled",a[5]),c&16&&S(e,"hoverable",a[4]),c&4&&S(e,"vertical",a[2]),c&8&&S(e,"reversed",a[3]),c&8192&&S(e,"focus",a[13])},i:Se,o:Se,d(a){a&&R(e),r&&r.d(),s&&s.d(),o&&o.d()}}}function Ag(n,e,t){let i,r,s,o,a,{range:c=!1}=e,{min:l=0}=e,{max:d=100}=e,{step:u=1}=e,{values:f=[(d+l)/2]}=e,{vertical:g=!1}=e,{reversed:p=!1}=e,{hoverable:m=!0}=e,{disabled:_=!1}=e,{pipstep:v=void 0}=e,{all:U=!0}=e,{first:D=void 0}=e,{last:N=void 0}=e,{rest:V=void 0}=e,{prefix:A=""}=e,{suffix:M=""}=e,{formatter:O=(I,Ce)=>I}=e,{focus:C=void 0}=e,{orientationStart:Ee=void 0}=e,{percentOf:Ze=void 0}=e,{moveHandle:De=void 0}=e,{fixFloat:we=void 0}=e;function ht(I){_||De(void 0,I)}return n.$$set=I=>{"range"in I&&t(22,c=I.range),"min"in I&&t(0,l=I.min),"max"in I&&t(1,d=I.max),"step"in I&&t(23,u=I.step),"values"in I&&t(24,f=I.values),"vertical"in I&&t(2,g=I.vertical),"reversed"in I&&t(3,p=I.reversed),"hoverable"in I&&t(4,m=I.hoverable),"disabled"in I&&t(5,_=I.disabled),"pipstep"in I&&t(25,v=I.pipstep),"all"in I&&t(6,U=I.all),"first"in I&&t(7,D=I.first),"last"in I&&t(8,N=I.last),"rest"in I&&t(9,V=I.rest),"prefix"in I&&t(10,A=I.prefix),"suffix"in I&&t(11,M=I.suffix),"formatter"in I&&t(12,O=I.formatter),"focus"in I&&t(13,C=I.focus),"orientationStart"in I&&t(14,Ee=I.orientationStart),"percentOf"in I&&t(15,Ze=I.percentOf),"moveHandle"in I&&t(26,De=I.moveHandle),"fixFloat"in I&&t(16,we=I.fixFloat)},n.$$.update=()=>{n.$$.dirty&41943047&&t(27,i=v||((d-l)/u>=(g?50:100)?(d-l)/(g?10:20):1)),n.$$.dirty&142606339&&t(20,r=parseInt((d-l)/(u*i),10)),n.$$.dirty&142671873&&t(19,s=function(I){return we(l+I*u*i)}),n.$$.dirty&16842752&&t(18,o=function(I){return f.some(Ce=>we(Ce)===we(I))}),n.$$.dirty&20971520&&t(17,a=function(I){if(c==="min")return f[0]>I;if(c==="max")return f[0]<I;if(c)return f[0]<I&&f[1]>I})},[l,d,g,p,m,_,U,D,N,V,A,M,O,C,Ee,Ze,we,a,o,s,r,ht,c,u,f,v,De,i]}class Sg extends Jo{constructor(e){super();Yo(this,e,Ag,kg,vr,{range:22,min:0,max:1,step:23,values:24,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:25,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:26,fixFloat:16})}}function bo(n,e,t){const i=n.slice();return i[64]=e[t],i[66]=t,i}function Io(n){let e,t=n[21](n[64],n[66],n[23](n[64]))+"",i,r=n[18]&&Eo(n),s=n[19]&&To(n);return{c(){e=j("span"),r&&r.c(),i=se(t),s&&s.c(),this.h()},l(o){e=K(o,"SPAN",{class:!0});var a=H(e);r&&r.l(a),i=pe(a,t),s&&s.l(a),a.forEach(R),this.h()},h(){T(e,"class","rangeFloat")},m(o,a){W(o,e,a),r&&r.m(e,null),x(e,i),s&&s.m(e,null)},p(o,a){o[18]?r?r.p(o,a):(r=Eo(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a[0]&10485761&&t!==(t=o[21](o[64],o[66],o[23](o[64]))+"")&&ve(i,t),o[19]?s?s.p(o,a):(s=To(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&R(e),r&&r.d(),s&&s.d()}}}function Eo(n){let e,t;return{c(){e=j("span"),t=se(n[18]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[18]),r.forEach(R),this.h()},h(){T(e,"class","rangeFloat-prefix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r[0]&262144&&ve(t,i[18])},d(i){i&&R(e)}}}function To(n){let e,t;return{c(){e=j("span"),t=se(n[19]),this.h()},l(i){e=K(i,"SPAN",{class:!0});var r=H(e);t=pe(r,n[19]),r.forEach(R),this.h()},h(){T(e,"class","rangeFloat-suffix")},m(i,r){W(i,e,r),x(e,t)},p(i,r){r[0]&524288&&ve(t,i[19])},d(i){i&&R(e)}}}function ko(n){let e,t,i,r,s,o,a,c,l,d,u,f,g,p=n[7]&&Io(n);return{c(){e=j("span"),t=j("span"),i=Gt(),p&&p.c(),this.h()},l(m){e=K(m,"SPAN",{role:!0,class:!0,"data-handle":!0,style:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-orientation":!0,"aria-disabled":!0,disabled:!0,tabindex:!0});var _=H(e);t=K(_,"SPAN",{class:!0}),H(t).forEach(R),i=xt(_),p&&p.l(_),_.forEach(R),this.h()},h(){T(t,"class","rangeNub"),T(e,"role","slider"),T(e,"class","rangeHandle"),T(e,"data-handle",r=n[66]),T(e,"style",s=n[28]+": "+n[29][n[66]]+"%; z-index: "+(n[26]===n[66]?3:2)+";"),T(e,"aria-valuemin",o=n[2]===!0&&n[66]===1?n[0][0]:n[3]),T(e,"aria-valuemax",a=n[2]===!0&&n[66]===0?n[0][1]:n[4]),T(e,"aria-valuenow",c=n[64]),T(e,"aria-valuetext",l=""+(n[18]+n[21](n[64],n[66],n[23](n[64]))+n[19])),T(e,"aria-orientation",d=n[6]?"vertical":"horizontal"),T(e,"aria-disabled",n[10]),T(e,"disabled",n[10]),T(e,"tabindex",u=n[10]?-1:0),S(e,"active",n[24]&&n[26]===n[66]),S(e,"press",n[25]&&n[26]===n[66])},m(m,_){W(m,e,_),x(e,t),x(e,i),p&&p.m(e,null),f||(g=[z(e,"blur",n[34]),z(e,"focus",n[35]),z(e,"keydown",n[36])],f=!0)},p(m,_){m[7]?p?p.p(m,_):(p=Io(m),p.c(),p.m(e,null)):p&&(p.d(1),p=null),_[0]&872415232&&s!==(s=m[28]+": "+m[29][m[66]]+"%; z-index: "+(m[26]===m[66]?3:2)+";")&&T(e,"style",s),_[0]&13&&o!==(o=m[2]===!0&&m[66]===1?m[0][0]:m[3])&&T(e,"aria-valuemin",o),_[0]&21&&a!==(a=m[2]===!0&&m[66]===0?m[0][1]:m[4])&&T(e,"aria-valuemax",a),_[0]&1&&c!==(c=m[64])&&T(e,"aria-valuenow",c),_[0]&11272193&&l!==(l=""+(m[18]+m[21](m[64],m[66],m[23](m[64]))+m[19]))&&T(e,"aria-valuetext",l),_[0]&64&&d!==(d=m[6]?"vertical":"horizontal")&&T(e,"aria-orientation",d),_[0]&1024&&T(e,"aria-disabled",m[10]),_[0]&1024&&T(e,"disabled",m[10]),_[0]&1024&&u!==(u=m[10]?-1:0)&&T(e,"tabindex",u),_[0]&83886080&&S(e,"active",m[24]&&m[26]===m[66]),_[0]&100663296&&S(e,"press",m[25]&&m[26]===m[66])},d(m){m&&R(e),p&&p.d(),f=!1,Oe(g)}}}function Ao(n){let e,t;return{c(){e=j("span"),this.h()},l(i){e=K(i,"SPAN",{class:!0,style:!0}),H(e).forEach(R),this.h()},h(){T(e,"class","rangeBar"),T(e,"style",t=n[28]+": "+n[32](n[29])+"%; "+n[27]+": "+n[33](n[29])+"%;")},m(i,r){W(i,e,r)},p(i,r){r[0]&939524096&&t!==(t=i[28]+": "+i[32](i[29])+"%; "+i[27]+": "+i[33](i[29])+"%;")&&T(e,"style",t)},d(i){i&&R(e)}}}function So(n){let e,t;return e=new Sg({props:{values:n[0],min:n[3],max:n[4],step:n[5],range:n[2],vertical:n[6],reversed:n[8],orientationStart:n[28],hoverable:n[9],disabled:n[10],all:n[13],first:n[14],last:n[15],rest:n[16],pipstep:n[12],prefix:n[18],suffix:n[19],formatter:n[20],focus:n[24],percentOf:n[23],moveHandle:n[31],fixFloat:n[30]}}),{c(){Sl(e.$$.fragment)},l(i){Rl(e.$$.fragment,i)},m(i,r){xo(e,i,r),t=!0},p(i,r){const s={};r[0]&1&&(s.values=i[0]),r[0]&8&&(s.min=i[3]),r[0]&16&&(s.max=i[4]),r[0]&32&&(s.step=i[5]),r[0]&4&&(s.range=i[2]),r[0]&64&&(s.vertical=i[6]),r[0]&256&&(s.reversed=i[8]),r[0]&268435456&&(s.orientationStart=i[28]),r[0]&512&&(s.hoverable=i[9]),r[0]&1024&&(s.disabled=i[10]),r[0]&8192&&(s.all=i[13]),r[0]&16384&&(s.first=i[14]),r[0]&32768&&(s.last=i[15]),r[0]&65536&&(s.rest=i[16]),r[0]&4096&&(s.pipstep=i[12]),r[0]&262144&&(s.prefix=i[18]),r[0]&524288&&(s.suffix=i[19]),r[0]&1048576&&(s.formatter=i[20]),r[0]&16777216&&(s.focus=i[24]),r[0]&8388608&&(s.percentOf=i[23]),e.$set(s)},i(i){t||(jt(e.$$.fragment,i),t=!0)},o(i){ni(e.$$.fragment,i),t=!1},d(i){Ko(e,i)}}}function Rg(n){let e,t,i,r,s,o,a=n[0],c=[];for(let u=0;u<a.length;u+=1)c[u]=ko(bo(n,a,u));let l=n[2]&&Ao(n),d=n[11]&&So(n);return{c(){e=j("div");for(let u=0;u<c.length;u+=1)c[u].c();t=Gt(),l&&l.c(),i=Gt(),d&&d.c(),this.h()},l(u){e=K(u,"DIV",{id:!0,class:!0});var f=H(e);for(let g=0;g<c.length;g+=1)c[g].l(f);t=xt(f),l&&l.l(f),i=xt(f),d&&d.l(f),f.forEach(R),this.h()},h(){T(e,"id",n[17]),T(e,"class","rangeSlider"),S(e,"range",n[2]),S(e,"disabled",n[10]),S(e,"hoverable",n[9]),S(e,"vertical",n[6]),S(e,"reversed",n[8]),S(e,"focus",n[24]),S(e,"min",n[2]==="min"),S(e,"max",n[2]==="max"),S(e,"pips",n[11]),S(e,"pip-labels",n[13]==="label"||n[14]==="label"||n[15]==="label"||n[16]==="label")},m(u,f){W(u,e,f);for(let g=0;g<c.length;g+=1)c[g].m(e,null);x(e,t),l&&l.m(e,null),x(e,i),d&&d.m(e,null),n[50](e),r=!0,s||(o=[z(window,"mousedown",n[39]),z(window,"touchstart",n[39]),z(window,"mousemove",n[40]),z(window,"touchmove",n[40]),z(window,"mouseup",n[41]),z(window,"touchend",n[42]),z(window,"keydown",n[43]),z(e,"mousedown",n[37]),z(e,"mouseup",n[38]),z(e,"touchstart",En(n[37])),z(e,"touchend",En(n[38]))],s=!0)},p(u,f){if(f[0]&934020317|f[1]&56){a=u[0];let g;for(g=0;g<a.length;g+=1){const p=bo(u,a,g);c[g]?c[g].p(p,f):(c[g]=ko(p),c[g].c(),c[g].m(e,t))}for(;g<c.length;g+=1)c[g].d(1);c.length=a.length}u[2]?l?l.p(u,f):(l=Ao(u),l.c(),l.m(e,i)):l&&(l.d(1),l=null),u[11]?d?(d.p(u,f),f[0]&2048&&jt(d,1)):(d=So(u),d.c(),jt(d,1),d.m(e,null)):d&&(kl(),ni(d,1,1,()=>{d=null}),Al()),(!r||f[0]&131072)&&T(e,"id",u[17]),f[0]&4&&S(e,"range",u[2]),f[0]&1024&&S(e,"disabled",u[10]),f[0]&512&&S(e,"hoverable",u[9]),f[0]&64&&S(e,"vertical",u[6]),f[0]&256&&S(e,"reversed",u[8]),f[0]&16777216&&S(e,"focus",u[24]),f[0]&4&&S(e,"min",u[2]==="min"),f[0]&4&&S(e,"max",u[2]==="max"),f[0]&2048&&S(e,"pips",u[11]),f[0]&122880&&S(e,"pip-labels",u[13]==="label"||u[14]==="label"||u[15]==="label"||u[16]==="label")},i(u){r||(jt(d),r=!0)},o(u){ni(d),r=!1},d(u){u&&R(e),qo(c,u),l&&l.d(),d&&d.d(),n[50](null),s=!1,Oe(o)}}}function Ro(n){if(!n)return-1;for(var e=0;n=n.previousElementSibling;)e++;return e}function tr(n){return n.type.includes("touch")?n.touches[0]:n}function Ng(n,e,t){let i,r,s,o,a,c,l=Se,d=()=>(l(),l=Mo(et,h=>t(29,c=h)),et);n.$$.on_destroy.push(()=>l());let{slider:u=void 0}=e,{range:f=!1}=e,{pushy:g=!1}=e,{min:p=0}=e,{max:m=100}=e,{step:_=1}=e,{values:v=[(m+p)/2]}=e,{vertical:U=!1}=e,{float:D=!1}=e,{reversed:N=!1}=e,{hoverable:V=!0}=e,{disabled:A=!1}=e,{pips:M=!1}=e,{pipstep:O=void 0}=e,{all:C=void 0}=e,{first:Ee=void 0}=e,{last:Ze=void 0}=e,{rest:De=void 0}=e,{id:we=void 0}=e,{prefix:ht=""}=e,{suffix:I=""}=e,{formatter:Ce=(h,k,B)=>h}=e,{handleFormatter:an=Ce}=e,{precision:Lt=2}=e,{springValues:cn={stiffness:.15,damping:.4}}=e;const ln=El();let un=0,Le=!1,Te=!1,Me=!1,Mt=!1,ie=v.length-1,Ue,$e,et;const tt=h=>parseFloat(h.toFixed(Lt));function jn(h){const k=u.querySelectorAll(".handle"),B=Array.prototype.includes.call(k,h),F=Array.prototype.some.call(k,Fe=>Fe.contains(h));return B||F}function us(h){return f==="min"||f==="max"?h.slice(0,1):f?h.slice(0,2):h}function Hn(){return u.getBoundingClientRect()}function Jc(h){const k=Hn();let B=0,F=0,Fe=0;U?(B=h.clientY-k.top,F=B/k.height*100,F=N?F:100-F):(B=h.clientX-k.left,F=B/k.width*100,F=N?100-F:F),Fe=(m-p)/100*F+p;let hs;return f===!0&&v[0]===v[1]?Fe>v[1]?1:0:(hs=v.indexOf([...v].sort((dl,hl)=>Math.abs(Fe-dl)-Math.abs(Fe-hl))[0]),hs)}function Wi(h){const k=Hn();let B=0,F=0,Fe=0;U?(B=h.clientY-k.top,F=B/k.height*100,F=N?F:100-F):(B=h.clientX-k.left,F=B/k.width*100,F=N?100-F:F),Fe=(m-p)/100*F+p,Ut(ie,Fe)}function Ut(h,k){return k=s(k),typeof h=="undefined"&&(h=ie),f&&(h===0&&k>v[1]?g?t(0,v[1]=k,v):k=v[1]:h===1&&k<v[0]&&(g?t(0,v[0]=k,v):k=v[0])),v[h]!==k&&t(0,v[h]=k,v),$e!==k&&(ll(),$e=k),k}function Xc(h){return f==="min"?0:h[0]}function Qc(h){return f==="max"?0:f==="min"?100-h[0]:100-h[1]}function Zc(h){Mt&&(t(24,Le=!1),Te=!1,t(25,Me=!1))}function $c(h){A||(t(26,ie=Ro(h.target)),t(24,Le=!0))}function el(h){if(!A){const k=Ro(h.target);let B=h.ctrlKey||h.metaKey||h.shiftKey?_*10:_,F=!1;switch(h.key){case"PageDown":B*=10;case"ArrowRight":case"ArrowUp":Ut(k,v[k]+B),F=!0;break;case"PageUp":B*=10;case"ArrowLeft":case"ArrowDown":Ut(k,v[k]-B),F=!0;break;case"Home":Ut(k,p),F=!0;break;case"End":Ut(k,m),F=!0;break}F&&(h.preventDefault(),h.stopPropagation())}}function tl(h){if(!A){const k=h.target,B=tr(h);t(24,Le=!0),Te=!0,t(25,Me=!0),t(26,ie=Jc(B)),Ue=$e=s(v[ie]),cl(),h.type==="touchstart"&&!k.matches(".pipVal")&&Wi(B)}}function nl(h){h.type==="touchend"&&ds(),t(25,Me=!1)}function il(h){Mt=!1,Le&&h.target!==u&&!u.contains(h.target)&&t(24,Le=!1)}function rl(h){A||Te&&Wi(tr(h))}function sl(h){if(!A){const k=h.target;Te&&((k===u||u.contains(k))&&(t(24,Le=!0),!jn(k)&&!k.matches(".pipVal")&&Wi(tr(h))),ds())}Te=!1,t(25,Me=!1)}function ol(h){Te=!1,t(25,Me=!1)}function al(h){A||(h.target===u||u.contains(h.target))&&(Mt=!0)}function cl(){!A&&ln("start",{activeHandle:ie,value:Ue,values:v.map(h=>s(h))})}function ds(){!A&&ln("stop",{activeHandle:ie,startValue:Ue,value:v[ie],values:v.map(h=>s(h))})}function ll(){!A&&ln("change",{activeHandle:ie,startValue:Ue,previousValue:typeof $e=="undefined"?Ue:$e,value:v[ie],values:v.map(h=>s(h))})}function ul(h){nr[h?"unshift":"push"](()=>{u=h,t(1,u)})}return n.$$set=h=>{"slider"in h&&t(1,u=h.slider),"range"in h&&t(2,f=h.range),"pushy"in h&&t(44,g=h.pushy),"min"in h&&t(3,p=h.min),"max"in h&&t(4,m=h.max),"step"in h&&t(5,_=h.step),"values"in h&&t(0,v=h.values),"vertical"in h&&t(6,U=h.vertical),"float"in h&&t(7,D=h.float),"reversed"in h&&t(8,N=h.reversed),"hoverable"in h&&t(9,V=h.hoverable),"disabled"in h&&t(10,A=h.disabled),"pips"in h&&t(11,M=h.pips),"pipstep"in h&&t(12,O=h.pipstep),"all"in h&&t(13,C=h.all),"first"in h&&t(14,Ee=h.first),"last"in h&&t(15,Ze=h.last),"rest"in h&&t(16,De=h.rest),"id"in h&&t(17,we=h.id),"prefix"in h&&t(18,ht=h.prefix),"suffix"in h&&t(19,I=h.suffix),"formatter"in h&&t(20,Ce=h.formatter),"handleFormatter"in h&&t(21,an=h.handleFormatter),"precision"in h&&t(45,Lt=h.precision),"springValues"in h&&t(46,cn=h.springValues)},n.$$.update=()=>{n.$$.dirty[0]&24&&t(49,r=function(h){return h<=p?p:h>=m?m:h}),n.$$.dirty[0]&56|n.$$.dirty[1]&262144&&t(48,s=function(h){if(h<=p)return tt(p);if(h>=m)return tt(m);let k=(h-p)%_,B=h-k;return Math.abs(k)*2>=_&&(B+=k>0?_:-_),B=r(B),tt(B)}),n.$$.dirty[0]&24&&t(23,i=function(h){let k=(h-p)/(m-p)*100;return isNaN(k)||k<=0?0:k>=100?100:tt(k)}),n.$$.dirty[0]&12582937|n.$$.dirty[1]&229376&&(Array.isArray(v)||(t(0,v=[(m+p)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")),t(0,v=us(v.map(h=>s(h)))),un!==v.length?d(t(22,et=Tg(v.map(h=>i(h)),cn))):et.set(v.map(h=>i(h))),t(47,un=v.length)),n.$$.dirty[0]&320&&t(28,o=U?N?"top":"bottom":N?"right":"left"),n.$$.dirty[0]&320&&t(27,a=U?N?"bottom":"top":N?"left":"right")},[v,u,f,p,m,_,U,D,N,V,A,M,O,C,Ee,Ze,De,we,ht,I,Ce,an,et,i,Le,Me,ie,a,o,c,tt,Ut,Xc,Qc,Zc,$c,el,tl,nl,il,rl,sl,ol,al,g,Lt,cn,un,s,r,ul]}class P_ extends Jo{constructor(e){super();Yo(this,e,Ng,Rg,vr,{slider:1,range:2,pushy:44,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,precision:45,springValues:46},null,[-1,-1,-1])}}/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */function No(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Yn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?No(Object(t),!0).forEach(function(i){Dg(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):No(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Og(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Oo(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Pg(n,e,t){return e&&Oo(n.prototype,e),t&&Oo(n,t),n}function Dg(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function vi(){return vi=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},vi.apply(this,arguments)}var Kc={exports:{}};(function(n){typeof window!="undefined"&&function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,i=e.Blob&&function(){try{return Boolean(new Blob)}catch{return!1}}(),r=i&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),s=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,o=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,a=(i||s)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(c){var l,d,u,f,g,p,m,_,v;if(l=c.match(o),!l)throw new Error("invalid data URI");for(d=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),u=!!l[4],f=c.slice(l[0].length),u?g=atob(f):g=decodeURIComponent(f),p=new ArrayBuffer(g.length),m=new Uint8Array(p),_=0;_<g.length;_+=1)m[_]=g.charCodeAt(_);return i?new Blob([r?m:p],{type:d}):(v=new s,v.append(p),v.getBlob(d))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(c,l,d){var u=this;setTimeout(function(){d&&t.toDataURL&&a?c(a(u.toDataURL(l,d))):c(u.mozGetAsFile("blob",l))})}:t.toDataURL&&a&&(t.msToBlob?t.toBlob=function(c,l,d){var u=this;setTimeout(function(){(l&&l!=="image/png"||d)&&t.toDataURL&&a?c(a(u.toDataURL(l,d))):c(u.msToBlob(l))})}:t.toBlob=function(c,l,d){var u=this;setTimeout(function(){c(a(u.toDataURL(l,d)))})})),n.exports?n.exports=a:e.dataURLtoBlob=a}(window)})(Kc);var Cg=Kc.exports,Lg=function(e){return typeof Blob=="undefined"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},Po={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},Mg=typeof window!="undefined"&&typeof window.document!="undefined",ot=Mg?window:{},wi=function(e){return e>0&&e<1/0},Ug=Array.prototype.slice;function Fg(n){return Array.from?Array.from(n):Ug.call(n)}var Vg=/^image\/.+$/;function yr(n){return Vg.test(n)}function Bg(n){var e=yr(n)?n.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var Yc=String.fromCharCode;function qg(n,e,t){var i="",r;for(t+=e,r=e;r<t;r+=1)i+=Yc(n.getUint8(r));return i}var jg=ot.btoa;function Hg(n,e){for(var t=[],i=8192,r=new Uint8Array(n);r.length>0;)t.push(Yc.apply(null,Fg(r.subarray(0,i)))),r=r.subarray(i);return"data:".concat(e,";base64,").concat(jg(t.join("")))}function Wg(n){var e=new DataView(n),t;try{var i,r,s;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var o=e.byteLength,a=2;a+1<o;){if(e.getUint8(a)===255&&e.getUint8(a+1)===225){r=a;break}a+=1}if(r){var c=r+4,l=r+10;if(qg(e,c,4)==="Exif"){var d=e.getUint16(l);if(i=d===18761,(i||d===19789)&&e.getUint16(l+2,i)===42){var u=e.getUint32(l+4,i);u>=8&&(s=l+u)}}}if(s){var f=e.getUint16(s,i),g,p;for(p=0;p<f;p+=1)if(g=s+p*12+2,e.getUint16(g,i)===274){g+=8,t=e.getUint16(g,i),e.setUint16(g,1,i);break}}}catch{t=1}return t}function zg(n){var e=0,t=1,i=1;switch(n){case 2:t=-1;break;case 3:e=-180;break;case 4:i=-1;break;case 5:e=90,i=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:i}}var Gg=/\.\d*(?:0|9){12}\d*$/;function Do(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Gg.test(n)?Math.round(n*e)/e:n}function hn(n){var e=n.aspectRatio,t=n.height,i=n.width,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",s=wi(i),o=wi(t);if(s&&o){var a=t*e;(r==="contain"||r==="none")&&a>i||r==="cover"&&a<i?t=i/e:i=t*e}else s?t=i/e:o&&(i=t*e);return{width:i,height:t}}var xg=ot.ArrayBuffer,Co=ot.FileReader,ft=ot.URL||ot.webkitURL,Kg=/\.\w+$/,Yg=ot.Compressor,D_=function(){function n(e,t){Og(this,n),this.file=e,this.image=new Image,this.options=Yn(Yn({},Po),t),this.aborted=!1,this.result=null,this.init()}return Pg(n,[{key:"init",value:function(){var t=this,i=this.file,r=this.options;if(!Lg(i)){this.fail(new Error("The first argument must be a File or Blob object."));return}var s=i.type;if(!yr(s)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!ft||!Co){this.fail(new Error("The current browser does not support image compression."));return}if(xg||(r.checkOrientation=!1),ft&&!r.checkOrientation)this.load({url:ft.createObjectURL(i)});else{var o=new Co,a=r.checkOrientation&&s==="image/jpeg";this.reader=o,o.onload=function(c){var l=c.target,d=l.result,u={};if(a){var f=Wg(d);f>1||!ft?(u.url=Hg(d,s),f>1&&vi(u,zg(f))):u.url=ft.createObjectURL(i)}else u.url=d;t.load(u)},o.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},o.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},o.onloadend=function(){t.reader=null},a?o.readAsArrayBuffer(i):o.readAsDataURL(i)}}},{key:"load",value:function(t){var i=this,r=this.file,s=this.image;s.onload=function(){i.draw(Yn(Yn({},t),{},{naturalWidth:s.naturalWidth,naturalHeight:s.naturalHeight}))},s.onabort=function(){i.fail(new Error("Aborted to load the image."))},s.onerror=function(){i.fail(new Error("Failed to load the image."))},ot.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(ot.navigator.userAgent)&&(s.crossOrigin="anonymous"),s.alt=r.name,s.src=t.url}},{key:"draw",value:function(t){var i=this,r=t.naturalWidth,s=t.naturalHeight,o=t.rotate,a=o===void 0?0:o,c=t.scaleX,l=c===void 0?1:c,d=t.scaleY,u=d===void 0?1:d,f=this.file,g=this.image,p=this.options,m=document.createElement("canvas"),_=m.getContext("2d"),v=Math.abs(a)%180===90,U=(p.resize==="contain"||p.resize==="cover")&&wi(p.width)&&wi(p.height),D=Math.max(p.maxWidth,0)||1/0,N=Math.max(p.maxHeight,0)||1/0,V=Math.max(p.minWidth,0)||0,A=Math.max(p.minHeight,0)||0,M=r/s,O=p.width,C=p.height;if(v){var Ee=[N,D];D=Ee[0],N=Ee[1];var Ze=[A,V];V=Ze[0],A=Ze[1];var De=[C,O];O=De[0],C=De[1]}U&&(M=O/C);var we=hn({aspectRatio:M,width:D,height:N},"contain");D=we.width,N=we.height;var ht=hn({aspectRatio:M,width:V,height:A},"cover");if(V=ht.width,A=ht.height,U){var I=hn({aspectRatio:M,width:O,height:C},p.resize);O=I.width,C=I.height}else{var Ce=hn({aspectRatio:M,width:O,height:C}),an=Ce.width;O=an===void 0?r:an;var Lt=Ce.height;C=Lt===void 0?s:Lt}O=Math.floor(Do(Math.min(Math.max(O,V),D))),C=Math.floor(Do(Math.min(Math.max(C,A),N)));var cn=-O/2,ln=-C/2,un=O,Le=C,Te=[];if(U){var Me=0,Mt=0,ie=r,Ue=s,$e=hn({aspectRatio:M,width:r,height:s},{contain:"cover",cover:"contain"}[p.resize]);ie=$e.width,Ue=$e.height,Me=(r-ie)/2,Mt=(s-Ue)/2,Te.push(Me,Mt,ie,Ue)}if(Te.push(cn,ln,un,Le),v){var et=[C,O];O=et[0],C=et[1]}m.width=O,m.height=C,yr(p.mimeType)||(p.mimeType=f.type);var tt="transparent";if(f.size>p.convertSize&&p.convertTypes.indexOf(p.mimeType)>=0&&(p.mimeType="image/jpeg"),p.mimeType==="image/jpeg"&&(tt="#fff"),_.fillStyle=tt,_.fillRect(0,0,O,C),p.beforeDraw&&p.beforeDraw.call(this,_,m),!this.aborted&&(_.save(),_.translate(O/2,C/2),_.rotate(a*Math.PI/180),_.scale(l,u),_.drawImage.apply(_,[g].concat(Te)),_.restore(),p.drew&&p.drew.call(this,_,m),!this.aborted)){var jn=function(Hn){i.aborted||i.done({naturalWidth:r,naturalHeight:s,result:Hn})};m.toBlob?m.toBlob(jn,p.mimeType,p.quality):jn(Cg(m.toDataURL(p.mimeType,p.quality)))}}},{key:"done",value:function(t){var i=t.naturalWidth,r=t.naturalHeight,s=t.result,o=this.file,a=this.image,c=this.options;if(ft&&!c.checkOrientation&&ft.revokeObjectURL(a.src),s)if(c.strict&&s.size>o.size&&c.mimeType===o.type&&!(c.width>i||c.height>r||c.minWidth>i||c.minHeight>r||c.maxWidth<i||c.maxHeight<r))s=o;else{var l=new Date;s.lastModified=l.getTime(),s.lastModifiedDate=l,s.name=o.name,s.name&&s.type!==o.type&&(s.name=s.name.replace(Kg,Bg(s.type)))}else s=o;this.result=s,c.success&&c.success.call(this,s)}},{key:"fail",value:function(t){var i=this.options;if(i.error)i.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=Yg,n}},{key:"setDefaults",value:function(t){vi(Po,t)}}]),n}();export{T_ as $,b_ as A,Ko as B,fl as C,Xo as D,m_ as E,Qg as F,u_ as G,x as H,$g as I,e_ as J,Zg as K,Xg as L,i_ as M,p_ as N,Se as O,wl as P,s_ as Q,r_ as R,Jo as S,t_ as T,da as U,z as V,Oe as W,E_ as X,Kp as Y,kc as Z,ym as _,H as a,S as a0,qo as a1,Jg as a2,v_ as a3,y_ as a4,o_ as a5,nr as a6,I_ as a7,g_ as a8,N_ as a9,S_ as aa,R_ as ab,O_ as ac,bm as ad,Em as ae,Xp as af,vm as ag,am as ah,lm as ai,sr as aj,c_ as ak,dm as al,l_ as am,km as an,n_ as ao,__ as ap,D_ as aq,P_ as ar,bt as as,k_ as at,A_ as au,T as b,K as c,R as d,j as e,a_ as f,W as g,pe as h,Yo as i,ve as j,Gt as k,ti as l,xt as m,kl as n,ni as o,Al as p,jt as q,f_ as r,vr as s,se as t,h_ as u,d_ as v,Sl as w,Rl as x,xo as y,w_ as z};
