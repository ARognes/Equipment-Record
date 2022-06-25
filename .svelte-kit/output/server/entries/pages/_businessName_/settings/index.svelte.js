import { c as create_ssr_component } from "../../../../chunks/index-3832a3ee.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1d0nqyy{color:#ff3e00;text-transform:uppercase;font-size:4rem;font-weight:100;line-height:1.1;margin:4rem auto;max-width:14rem}@media(min-width: 480px){h1.svelte-1d0nqyy{max-width:none}}",
  map: null
};
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-1d0nqyy"}">Hello world!</h1>

<a sveltekit:prefetch href="${"/on/account"}"><button>Back</button></a>`;
});
export { Settings as default };
