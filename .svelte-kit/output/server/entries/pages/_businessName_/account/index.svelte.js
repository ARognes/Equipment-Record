import { c as create_ssr_component } from "../../../../chunks/index-1e667dfc.js";
import "../../../../chunks/auth-0ef6715f.js";
import "../../../../chunks/index-bb50f2da.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-yin00w.svelte-yin00w{background-color:#bbb;margin:0;height:60px}header.svelte-yin00w h1.svelte-yin00w{margin:0;position:absolute;left:25%;top:5px;width:50%;text-align:center}header.svelte-yin00w button.svelte-yin00w{position:absolute;left:5px;top:5px;width:50px;height:50px}#settings.svelte-yin00w.svelte-yin00w{left:calc(100% - 55px)}#menu.svelte-yin00w.svelte-yin00w{position:relative;top:0;left:5%;width:90%}#menu.svelte-yin00w button.svelte-yin00w{display:block;margin:10px 0 0 0;width:100%;height:40px;border:0;background-color:#ddd}#menu.svelte-yin00w button.svelte-yin00w:active{background-color:#bbb}#menu.svelte-yin00w #sign-out.svelte-yin00w{background-color:red}#menu.svelte-yin00w #sign-out.svelte-yin00w:active{background-color:#c00}",
  map: null
};
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
export { Account as default };
