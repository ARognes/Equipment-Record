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
  default: () => Home
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../../chunks/index-1e667dfc.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-dooov2.svelte-dooov2{background-color:#bbb;margin:0;height:40px}header.svelte-dooov2 h1.svelte-dooov2{position:absolute;margin:0;top:5px;left:0;width:100%;height:30px;line-height:30px;text-size:30px;text-align:center}#menu.svelte-dooov2.svelte-dooov2{position:relative;top:0;left:5%;width:90%}#menu.svelte-dooov2 button.svelte-dooov2{display:block;margin:10px 0 0 0;width:100%;height:40px;border:0;background-color:#ddd}#menu.svelte-dooov2 button.svelte-dooov2:active{background-color:#bbb}",
  map: null
};
const Home = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-dooov2"}"><h1 class="${"svelte-dooov2"}">Home</h1></header>


<div id="${"menu"}" class="${"svelte-dooov2"}"><button class="${"svelte-dooov2"}">Scan</button>
	<button class="${"svelte-dooov2"}">Download codes</button>
</div>`;
});
