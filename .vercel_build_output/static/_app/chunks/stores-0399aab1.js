import{N as r}from"./vendor-7483cdb5.js";const e=()=>{const s=r("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},i={subscribe(s){return e().page.subscribe(s)}},a={subscribe(s){return e().navigating.subscribe(s)}};export{a as n,i as p};
