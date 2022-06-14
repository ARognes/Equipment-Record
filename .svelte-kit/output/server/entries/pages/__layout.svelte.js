import { c as create_ssr_component, a as subscribe, b as set_store_value } from "../../chunks/index-1e667dfc.js";
import { n as navigating } from "../../chunks/stores-ed515c98.js";
/* empty css                                                           */import { w as writable } from "../../chunks/index-bb50f2da.js";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{font-family:"Poppins", sans-serif}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  const loading = writable(false);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$result.css.add(css);
  set_store_value(loading, $loading = !!$navigating, $loading);
  $$unsubscribe_navigating();
  $$unsubscribe_loading();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" crossorigin data-svelte="svelte-1bc5t2t"><link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-1bc5t2t"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-1bc5t2t">`, ""}



${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
