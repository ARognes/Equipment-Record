import{a5 as D,ae as b,af as h,ag as p,ah as w,a3 as i,ai as m,a4 as $,aj as I,ak as d,al as u,am as y,an as f}from"./vendor-7483cdb5.js";import{s as l}from"./storage-c0d15549.js";import{app as c}from"./app-b317696e.js";async function A(s){if(!s)return null;let e=null;try{e=await D(s),e=a=>{const t=a.data();return t.id=a.id,t}}catch{}finally{return e}}async function N(s,e){let a=l.getItem(e);if(a)return a;try{const t=i(c);a=(await u(y(d(t,e),f("businessID","==",s)))).docs.map(r=>{const o=r.data();return o.id=r.id,o}),l.setItem(e,a),`${a==null?void 0:a.length}`}catch{}finally{return a}}async function R(s,e,a){let t=null;try{const n=i(c);t=(await u(y(d(n,e),f("businessID","==",s),...a))).docs.map(o=>{const g=o.data();return g.id=o.id,g}),`${t==null?void 0:t.length}`}catch{}finally{return t}}async function S(s,e,a){let t=null;try{const n=b(c);const r=await h(p(n,`${s.businessID}/equipment/${s.id}${e?"/tiny_img_":"/img_"}${s.imageOrder[a]}`));t=`data:image/png;base64,${w(r)}`}catch{}finally{return t}}async function j(s,e,a){try{const t=i(c),n=await m($(t,s,e),a);return n}catch{}}async function k(s,e){try{const a=i(c),t=await I(d(a,s),e);return t}catch{}}async function v(s,e){var a;try{const t=i(c),n=await u(y(d(t,"assignments"),f("equipmentID","==",s)));for(let r of n.docs)m(r.ref,{equipmentName:e});`${(a=n==null?void 0:n.docs)==null?void 0:a.length}`}catch{}}export{N as a,A as b,v as c,k as d,S as g,R as q,j as u};
