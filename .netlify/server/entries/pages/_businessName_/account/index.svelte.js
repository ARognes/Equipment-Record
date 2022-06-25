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
  default: () => Account
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../../chunks/index-1e667dfc.js");
var import_auth_0ef6715f = require("../../../../chunks/auth-0ef6715f.js");
var import_index_bb50f2da = require("../../../../chunks/index-bb50f2da.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-yin00w.svelte-yin00w{background-color:#bbb;margin:0;height:60px}header.svelte-yin00w h1.svelte-yin00w{margin:0;position:absolute;left:25%;top:5px;width:50%;text-align:center}header.svelte-yin00w button.svelte-yin00w{position:absolute;left:5px;top:5px;width:50px;height:50px}#settings.svelte-yin00w.svelte-yin00w{left:calc(100% - 55px)}#menu.svelte-yin00w.svelte-yin00w{position:relative;top:0;left:5%;width:90%}#menu.svelte-yin00w button.svelte-yin00w{display:block;margin:10px 0 0 0;width:100%;height:40px;border:0;background-color:#ddd}#menu.svelte-yin00w button.svelte-yin00w:active{background-color:#bbb}#menu.svelte-yin00w #sign-out.svelte-yin00w{background-color:red}#menu.svelte-yin00w #sign-out.svelte-yin00w:active{background-color:#c00}",
  map: null
};
const Account = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-yin00w"}"><h1 class="${"svelte-yin00w"}">Account</h1>
	<a sveltekit:prefetch href="${"/on/settings"}"><button id="${"settings"}" class="${"svelte-yin00w"}">Settings</button></a></header>

<div id="${"menu"}" class="${"svelte-yin00w"}"><button class="${"svelte-yin00w"}">Nothing</button>
	<button class="${"svelte-yin00w"}">Nothing</button>
	<button class="${"svelte-yin00w"}">Nothing</button>
	<button class="${"svelte-yin00w"}">Nothing</button>

	<button id="${"sign-out"}" class="${"svelte-yin00w"}">Sign out</button>
</div>`;
});
