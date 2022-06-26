import { c as create_ssr_component } from "../../../../chunks/index-6e4040da.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-dooov2.svelte-dooov2{background-color:#bbb;margin:0;height:40px}header.svelte-dooov2 h1.svelte-dooov2{position:absolute;margin:0;top:5px;left:0;width:100%;height:30px;line-height:30px;text-size:30px;text-align:center}#menu.svelte-dooov2.svelte-dooov2{position:relative;top:0;left:5%;width:90%}#menu.svelte-dooov2 button.svelte-dooov2{display:block;margin:10px 0 0 0;width:100%;height:40px;border:0;background-color:#ddd}#menu.svelte-dooov2 button.svelte-dooov2:active{background-color:#bbb}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-dooov2"}"><h1 class="${"svelte-dooov2"}">Home</h1></header>


<div id="${"menu"}" class="${"svelte-dooov2"}"><button class="${"svelte-dooov2"}">Scan</button>
	<button class="${"svelte-dooov2"}">Download codes</button>
</div>`;
});
export { Home as default };
