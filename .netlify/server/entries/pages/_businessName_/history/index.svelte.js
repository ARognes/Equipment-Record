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
  default: () => History
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../../chunks/index-1e667dfc.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1sy7de2.svelte-1sy7de2{background-color:#bbb;margin:0;height:40px}header.svelte-1sy7de2 h1.svelte-1sy7de2{position:absolute;margin:0;top:5px;left:0;width:100%;height:30px;line-height:30px;text-size:30px;text-align:center}#menu.svelte-1sy7de2.svelte-1sy7de2{position:relative;top:0;left:5%;width:100vw;height:calc(100vh - 100px);overflow-y:auto}#menu.svelte-1sy7de2 .old.svelte-1sy7de2{font-size:10px;background-color:#fff}#menu.svelte-1sy7de2 .current.svelte-1sy7de2{font-size:10px;background-color:#afa}",
  map: null
};
const History = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let assignmentData = [];
  $$result.css.add(css);
  return `<header class="${"svelte-1sy7de2"}"><h1 class="${"svelte-1sy7de2"}">History</h1></header>

<div id="${"menu"}" class="${"svelte-1sy7de2"}">${assignmentData ? `${(0, import_index_1e667dfc.j)(assignmentData, (assignment) => {
    return `<div class="${(0, import_index_1e667dfc.e)((0, import_index_1e667dfc.k)(assignment.nextAssignment ? "old" : "current")) + " svelte-1sy7de2"}"><p>${(0, import_index_1e667dfc.e)(assignment.equipmentName)}</p>
				<p>${(0, import_index_1e667dfc.e)(assignment.username)}</p>
				<p>${(0, import_index_1e667dfc.e)(assignment.projectName)}</p>
				<p>${(0, import_index_1e667dfc.e)(assignment.createdAt)}</p>
				${assignment.lastProjectID ? `<p>${(0, import_index_1e667dfc.e)(assignment.lastProjectName)}</p>
					<p>${(0, import_index_1e667dfc.e)(assignment.lastUsername)}</p>` : ``}
			</div>`;
  })}` : ``}
</div>`;
});
