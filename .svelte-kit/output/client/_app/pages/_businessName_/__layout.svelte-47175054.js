import{S as w,i as y,s as D,F as I,k as $,w as N,m as h,x as v,g as S,y as L,I as q,J as C,K as k,q as _,o as b,d as B,B as F,L as d,r as J,Y as K,Z as P,_ as R,D as Y}from"../../chunks/vendor-5a111b6e.js";import{N as Z}from"../../chunks/Navbar-2c97f9f6.js";import{a as j}from"../../chunks/auth-d14f3a0c.js";import{g}from"../../chunks/navigation-0e6511d1.js";import{b as z}from"../../chunks/env-6d58f0dd.js";import{app as A}from"../../chunks/app-db9d6f6f.js";import{s as c}from"../../chunks/storage-c0d15549.js";import"../../chunks/account-9d8bb990.js";/* empty css                                                        */import"../../chunks/preload-helper-e4860ae8.js";import"../../chunks/singletons-d1fb5791.js";function E(o){var u;let m,e,r;const i=o[5].default,t=I(i,o,o[4],null);return e=new Z({props:{path:(u=o[0])==null?void 0:u.businessName}}),{c(){t&&t.c(),m=$(),N(e.$$.fragment)},l(s){t&&t.l(s),m=h(s),v(e.$$.fragment,s)},m(s,n){t&&t.m(s,n),S(s,m,n),L(e,s,n),r=!0},p(s,[n]){var f;t&&t.p&&(!r||n&16)&&q(t,i,s,s[4],r?k(i,s[4],n,null):C(s[4]),null);const a={};n&1&&(a.path=(f=s[0])==null?void 0:f.businessName),e.$set(a)},i(s){r||(_(t,s),_(e.$$.fragment,s),r=!0)},o(s){b(t,s),b(e.$$.fragment,s),r=!1},d(s){t&&t.d(s),s&&B(m),F(e,s)}}}function G(o,m,e){let r,i;d(o,j,a=>e(3,i=a));let{$$slots:t={},$$scope:u}=m;const s=Y(null);d(o,s,a=>e(0,r=a)),J("userData",s);let n=!0;return o.$$set=a=>{"$$scope"in a&&e(4,u=a.$$scope)},o.$$.update=()=>{o.$$.dirty&13&&(async()=>{try{if(!i){n||await g("/");return}if(e(2,n=!1),r)return;const a=K(A),f=P(a,"users",i==null?void 0:i.displayName),l=await R(f),p=l==null?void 0:l.data();if(p.displayName=f.id,p.accessLevel=c.getItem("accessLevel")||0,p||await g("/business"),s.set(p),c.getItem("businessID")===r.businessID)return;c.setItem("businessID",r.businessID)}catch(a){console.error(a)}})()},[r,s,n,i,u,t]}class ts extends w{constructor(m){super();y(this,m,G,E,D,{})}}export{ts as default};
