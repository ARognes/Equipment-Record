import{S as d,i as b,s as g,F as w,I as y,J as D,K as S,q as h,o as q,L as m,r as C,a3 as F,a4 as I,a5 as J,D as K}from"../../../chunks/vendor-7483cdb5.js";import{a as L}from"../../../chunks/auth-887b2c39.js";import{g as _}from"../../../chunks/navigation-0e6511d1.js";import{b as N}from"../../../chunks/env-6d58f0dd.js";import{app as P}from"../../../chunks/app-b317696e.js";import"../../../chunks/preload-helper-e4860ae8.js";import"../../../chunks/singletons-d1fb5791.js";function R(e){let a;const o=e[5].default,s=w(o,e,e[4],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),a=!0},p(t,[n]){s&&s.p&&(!a||n&16)&&y(s,o,t,t[4],a?S(o,t[4],n,null):D(t[4]),null)},i(t){a||(h(s,t),a=!0)},o(t){q(s,t),a=!1},d(t){s&&s.d(t)}}}function j(e,a,o){let s,t;m(e,L,r=>o(3,t=r));let{$$slots:n={},$$scope:f}=a;const i=K(null);m(e,i,r=>o(2,s=r)),C("userData",i);let u=!0;return e.$$set=r=>{"$$scope"in r&&o(4,f=r.$$scope)},e.$$.update=()=>{e.$$.dirty&14&&(async()=>{try{if(!t){u||await _("/"),o(1,u=!1);return}if(s)return;const r=F(P),c=I(r,"users",t==null?void 0:t.displayName),l=await J(c),p=l==null?void 0:l.data();p.uid=c.id,i.set(p),s||await _("/business")}catch(r){console.error(r)}})()},[i,u,s,t,f,n]}class M extends d{constructor(a){super();b(this,a,j,R,g,{})}}export{M as default};