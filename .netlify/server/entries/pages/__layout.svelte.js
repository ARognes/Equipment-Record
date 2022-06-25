var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../chunks/index-1e667dfc.js");
var import_stores_ed515c98 = require("../../chunks/stores-ed515c98.js");
var import_index_bb50f2da = require("../../chunks/index-bb50f2da.js");
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{font-family:"Poppins", sans-serif}',
  map: null
};
const _layout = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_navigating = (0, import_index_1e667dfc.a)(import_stores_ed515c98.n, (value) => $navigating = value);
  const loading = (0, import_index_bb50f2da.w)(false);
  $$unsubscribe_loading = (0, import_index_1e667dfc.a)(loading, (value) => $loading = value);
  $$result.css.add(css);
  (0, import_index_1e667dfc.b)(loading, $loading = !!$navigating, $loading);
  $$unsubscribe_navigating();
  $$unsubscribe_loading();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" crossorigin data-svelte="svelte-1bc5t2t"><link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-1bc5t2t"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Poppins"}" data-svelte="svelte-1bc5t2t">`, ""}



${slots.default ? slots.default({}) : ``}`;
});
