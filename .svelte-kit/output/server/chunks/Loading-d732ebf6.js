import { c as create_ssr_component } from "./index-1e667dfc.js";
/* empty css                                                */const css = {
  code: ".lds-ring.svelte-gjrzd3.svelte-gjrzd3{display:block;position:relative;left:calc(50% - 30px);top:calc(50% - 30px);width:60px;height:60px;margin:0}.lds-ring.svelte-gjrzd3 div.svelte-gjrzd3{box-sizing:border-box;display:block;position:absolute;width:60px;height:60px;margin:0;border:6px solid #fff;border-radius:50%;animation:svelte-gjrzd3-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#44f transparent transparent transparent}.lds-ring.svelte-gjrzd3 div.svelte-gjrzd3:nth-child(1){animation-delay:-0.45s}.lds-ring.svelte-gjrzd3 div.svelte-gjrzd3:nth-child(2){animation-delay:-0.3s}.lds-ring.svelte-gjrzd3 div.svelte-gjrzd3:nth-child(3){animation-delay:-0.15s}@keyframes svelte-gjrzd3-lds-ring{100%{transform:rotate(360deg)}}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"lds-ring svelte-gjrzd3"}"><div class="${"svelte-gjrzd3"}"></div><div class="${"svelte-gjrzd3"}"></div><div class="${"svelte-gjrzd3"}"></div><div class="${"svelte-gjrzd3"}"></div></div>`;
});
export { Loading as L };
