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
  default: () => Business
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../chunks/index-1e667dfc.js");
var business_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1d0nqyy{color:#ff3e00;text-transform:uppercase;font-size:4rem;font-weight:100;line-height:1.1;margin:4rem auto;max-width:14rem}@media(min-width: 480px){h1.svelte-1d0nqyy{max-width:none}}",
  map: null
};
const Business = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-1d0nqyy"}">Enter business number</h1>


<a sveltekit:prefetch href="${"/"}">Login</a>`;
});
