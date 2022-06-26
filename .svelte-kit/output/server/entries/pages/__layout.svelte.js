import { c as create_ssr_component } from "../../chunks/index-6e4040da.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{font-family:"Poppins", sans-serif}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" crossorigin data-svelte="svelte-1bc5t2t"><link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-1bc5t2t"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-1bc5t2t">`, ""}




${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
