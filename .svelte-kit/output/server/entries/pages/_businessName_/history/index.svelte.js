import { c as create_ssr_component, j as each, e as escape, k as null_to_empty } from "../../../../chunks/index-3832a3ee.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1sy7de2.svelte-1sy7de2{background-color:#bbb;margin:0;height:40px}header.svelte-1sy7de2 h1.svelte-1sy7de2{position:absolute;margin:0;top:5px;left:0;width:100%;height:30px;line-height:30px;text-size:30px;text-align:center}#menu.svelte-1sy7de2.svelte-1sy7de2{position:relative;top:0;left:5%;width:100vw;height:calc(100vh - 100px);overflow-y:auto}#menu.svelte-1sy7de2 .old.svelte-1sy7de2{font-size:10px;background-color:#fff}#menu.svelte-1sy7de2 .current.svelte-1sy7de2{font-size:10px;background-color:#afa}",
  map: null
};
const History = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let assignmentData = [];
  $$result.css.add(css);
  return `<header class="${"svelte-1sy7de2"}"><h1 class="${"svelte-1sy7de2"}">History</h1></header>

<div id="${"menu"}" class="${"svelte-1sy7de2"}">${assignmentData ? `${each(assignmentData, (assignment) => {
    return `<div class="${escape(null_to_empty(assignment.nextAssignment ? "old" : "current")) + " svelte-1sy7de2"}"><p>${escape(assignment.equipmentName)}</p>
				<p>${escape(assignment.username)}</p>
				<p>${escape(assignment.projectName)}</p>
				<p>${escape(assignment.createdAt)}</p>
				${assignment.lastProjectID ? `<p>${escape(assignment.lastProjectName)}</p>
					<p>${escape(assignment.lastUsername)}</p>` : ``}
			</div>`;
  })}` : ``}
</div>`;
});
export { History as default };
