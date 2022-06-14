import { c as create_ssr_component, a as subscribe, g as getContext, e as escape, j as each, i as add_attribute, f as spread, h as escape_object, v as validate_component } from "../../../../chunks/index-1e667dfc.js";
import { G as Gallery } from "../../../../chunks/Gallery-72c88b6a.js";
import { p as page } from "../../../../chunks/stores-ed515c98.js";
import { a as allDocs, q as queryDocs, g as getSRC } from "../../../../chunks/firebase-01a4cca1.js";
import { where, orderBy } from "firebase/firestore/lite";
import { s as session } from "../../../../chunks/storage-7a99a8c4.js";
import "../../../../chunks/Loading-d732ebf6.js";
/* empty css                                                                 */import "firebase/storage";
import "../../../../chunks/app-5af87a2a.js";
import "firebase/app";
import "base64-arraybuffer";
var Assignments_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#assignments.svelte-dce25p.svelte-dce25p{position:relative;left:0;top:-12px;height:auto;margin:0}#assignments.svelte-dce25p #title.svelte-dce25p{width:calc(100vw - 8px);height:30px;background-color:#ddd;margin:0;padding:0 4px 0 4px;font-size:20px;text-overflow:clip;white-space:nowrap;overflow:hidden}#assignments.svelte-dce25p .scrollable.svelte-dce25p{width:100%;max-height:20px;overflow-y:hidden;overflow-x:hidden;transition:max-height 500ms cubic-bezier(0, 1, 0, 1)}#assignments.svelte-dce25p .scrollable-more.svelte-dce25p{max-height:200px;overflow-y:auto;transition:max-height 500ms ease-in-out}#assignments.svelte-dce25p .assignment.svelte-dce25p{width:calc(100vw - 8px);height:20px;margin:0;padding:0 4px;font-size:14px;text-overflow:clip;white-space:nowrap;overflow:hidden;display:flex;flex-wrap:nowrap;column-gap:10px;justify-content:space-between}#assignments.svelte-dce25p .assignment a.svelte-dce25p{text-decoration:none;overflow:hidden;flex:1 1 0}#assignments.svelte-dce25p .assignment p.svelte-dce25p{flex:1 1 0;margin:0}#assignments.svelte-dce25p .assignment.svelte-dce25p:nth-child(even){background-color:#eee}#showMoreAssignments.svelte-dce25p.svelte-dce25p{position:relative;float:right;margin:0;padding:0;width:30px;height:30px}#reassign.svelte-dce25p.svelte-dce25p{position:relative;float:right;margin:0 4px 0 0;padding:0;width:80px;height:30px}",
  map: null
};
const Assignments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userDataStore, $$unsubscribe_userDataStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const userDataStore = getContext("userData");
  $$unsubscribe_userDataStore = subscribe(userDataStore, (value) => $userDataStore = value);
  let { item, editing } = $$props;
  let assignments = [];
  let selectedProject;
  let done2 = false;
  async function init() {
    done2 = true;
    assignments = await queryDocs($userDataStore.businessID, "assignments", [where("equipmentID", "==", item.id), orderBy("createdAt", "desc")]);
    resetSelection();
  }
  function resetSelection() {
    if (assignments?.length)
      selectedProject = projects.find((a) => a.id == assignments[0].projectID);
  }
  let projects = [];
  let done = false;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.editing === void 0 && $$bindings.editing && editing !== void 0)
    $$bindings.editing(editing);
  $$result.css.add(css$2);
  {
    if (selectedProject) {
      item.projectAssigned = selectedProject.name;
      item.projectID = selectedProject.id;
    }
  }
  {
    if ($userDataStore && item && !done2)
      init();
  }
  editing && resetSelection();
  {
    if (editing && !done) {
      done = true;
      allDocs($userDataStore.businessID).then((data) => {
        projects = data;
        resetSelection();
      });
    }
  }
  $$unsubscribe_userDataStore();
  $$unsubscribe_page();
  return `<div id="${"assignments"}" class="${"svelte-dce25p"}"><div id="${"title"}" class="${"svelte-dce25p"}">Assigned
		${assignments.length ? `<button id="${"showMoreAssignments"}" class="${"svelte-dce25p"}">${escape("+")}</button>` : ``}

		${editing && projects.length && assignments.length ? `<select id="${"reassign"}" class="${"svelte-dce25p"}">${each(projects, (proj, i) => {
    return `<option${add_attribute("value", proj, 0)}>${escape(proj.name)}</option>`;
  })}</select>` : ``}</div>
	<div class="${["scrollable svelte-dce25p", ""].join(" ").trim()}">${each(assignments, (assn, i) => {
    return `<div class="${"assignment svelte-dce25p"}"><a sveltekit:prefetch${add_attribute("href", `/${$page.params.businessName}/projects/${assn.projectName}`, 0)} class="${"svelte-dce25p"}">${escape(assn.projectName || "")}</a>
				<a sveltekit:prefetch${add_attribute("href", `/${$page.params.businessName}/users/${assn.username}`, 0)} class="${"svelte-dce25p"}">${escape(assn.username || "")}</a>
				<p class="${"svelte-dce25p"}">${escape(assn.createdAt ? new Date(assn.createdAt.seconds * 1e3).toLocaleString() : "")}</p>
			</div>`;
  })}</div>
</div>`;
});
var Attributes_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '#attributes.svelte-1svt6o0.svelte-1svt6o0{position:relative;left:0;top:-12px;height:auto;margin:0 0 20px 0}#attributes.svelte-1svt6o0 .attribute .key.svelte-1svt6o0{width:calc(100vw - 8px);height:30px;background-color:#ddd;margin:0;padding:0 4px 0 4px;font-size:20px;text-overflow:clip;white-space:nowrap;overflow:hidden}#attributes.svelte-1svt6o0 .attribute .div-key.svelte-1svt6o0{display:flex;flex-wrap:nowrap;justify-content:space-between;background-color:#ddd;margin:0;padding:0 4px;width:calc(100vw - 8px);height:30px}#attributes.svelte-1svt6o0 .attribute .div-key input.svelte-1svt6o0{margin:0;padding:0;width:calc(100vw - 108px);height:30px;background-color:#ddd}#attributes.svelte-1svt6o0 .attribute .div-key .attribute-actions.svelte-1svt6o0{margin:0}#attributes.svelte-1svt6o0 .attribute .div-key .attribute-actions button.svelte-1svt6o0{margin:0;padding:0;width:30px;height:30px}#attributes.svelte-1svt6o0 .attribute input.svelte-1svt6o0,#attributes.svelte-1svt6o0 .attribute textarea.svelte-1svt6o0{border:0;margin:0;font-family:"Poppins", sans-serif;font-size:20px}#attributes.svelte-1svt6o0 .attribute input.svelte-1svt6o0:focus,#attributes.svelte-1svt6o0 .attribute textarea.svelte-1svt6o0:focus{outline:none}#attributes.svelte-1svt6o0 .attribute textarea.svelte-1svt6o0{resize:none;font-size:14px;width:calc(100vw - 8px);margin:0}',
  map: null
};
const MAX_ATTRIBUTES = 10;
const Attributes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { attributes, editing } = $$props;
  let textAreas = [];
  if ($$props.attributes === void 0 && $$bindings.attributes && attributes !== void 0)
    $$bindings.attributes(attributes);
  if ($$props.editing === void 0 && $$bindings.editing && editing !== void 0)
    $$bindings.editing(editing);
  $$result.css.add(css$1);
  {
    {
      for (let i = 0; i < textAreas.length; i++) {
        const ta = textAreas[i];
        if (ta == null)
          continue;
        ta.style.height = "auto";
        let offset = ta.offsetHeight - ta.clientHeight;
        ta.style.height = ta.scrollHeight + offset + "px";
      }
    }
  }
  {
    if (editing && attributes.length < MAX_ATTRIBUTES && (attributes[attributes.length - 1].key.length || attributes[attributes.length - 1].val.length || attributes[attributes.length - 1].editKey?.length || attributes[attributes.length - 1].editVal?.length))
      attributes[attributes.length] = { key: "", val: "" };
  }
  {
    if (attributes.length && attributes[0].editVal === void 0)
      for (let i in attributes)
        attributes[+i] = {
          ...attributes[+i],
          editKey: attributes[+i].key,
          editVal: attributes[+i].val
        };
  }
  return `<div id="${"attributes"}" class="${"svelte-1svt6o0"}">${each(attributes || [], (attr, i) => {
    return `<div class="${"attribute"}">${!editing ? `<p class="${"key svelte-1svt6o0"}">${escape(attr.key)}</p>` : `<div class="${"div-key svelte-1svt6o0"}"><input type="${"text"}" placeholder="${"Attribute"}"${add_attribute("value", attr.key || attr.editKey || "", 0)} class="${"svelte-1svt6o0"}">
					${i + 1 < attributes.length ? `<div class="${"attribute-actions svelte-1svt6o0"}">${i > 0 ? `<button class="${"svelte-1svt6o0"}">^</button>` : ``}
							${i < attributes.length - 2 ? `<button class="${"svelte-1svt6o0"}">v</button>` : ``}
							<button class="${"svelte-1svt6o0"}">-</button>
						</div>` : ``}
				</div>`}
			<textarea ${!editing ? "readonly" : ""} placeholder="${"Empty"}" rows="${"1"}" class="${"svelte-1svt6o0"}"${add_attribute("this", textAreas[i], 0)}>${attr.editVal || ""}</textarea>
		</div>`;
  })}
</div>`;
});
const Back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    escape_object($$props)
  ], {})}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}"></path></svg>`;
});
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    escape_object($$props)
  ], {})}><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}"></path></svg>`;
});
const Done = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    escape_object($$props)
  ], {})}><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}"></path></svg>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    escape_object($$props)
  ], {})}><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}"></path></svg>`;
});
function deepcopy(obj) {
  return obj ? JSON.parse(JSON.stringify(obj)) : null;
}
var _equipmentName__svelte_svelte_type_style_lang = "";
const css = {
  code: '#header.svelte-hv9as5.svelte-hv9as5{position:fixed;top:0;left:0;width:100vw;background-color:#bbb;margin:0;height:40px;display:flex}#header.svelte-hv9as5 p.svelte-hv9as5{margin:0;flex:auto;width:calc(100vw - 40px);height:40px;font-size:30px;line-height:40px;text-align:center;overflow:hidden}#header.svelte-hv9as5 button.svelte-hv9as5{flex:1 30px;width:30px;height:30px;margin:5px}#body.svelte-hv9as5.svelte-hv9as5{position:relative;left:0;top:0;width:100vw;height:calc(100vh - 40px);margin:0;overflow-y:auto;overflow-x:hidden}#name.svelte-hv9as5.svelte-hv9as5{margin:0;padding:0;border:0;outline:none;flex:auto;width:calc(100vw - 40px);height:40px;overflow:hidden;font-size:30px;line-height:40px;text-align:center;background-color:#bbb;font-family:"Poppins", sans-serif}#name.svelte-hv9as5.svelte-hv9as5:focus{outline:none;color:blue}#controls.svelte-hv9as5.svelte-hv9as5{position:fixed;margin:10px;left:0;bottom:0;width:calc(100vw - 20px);height:40px;display:flex;column-gap:10px}#controls.svelte-hv9as5 button.svelte-hv9as5{flex:1;position:relative;width:80px;height:40px}#space-bottom.svelte-hv9as5.svelte-hv9as5{width:100vw;height:30vh}#space-top.svelte-hv9as5.svelte-hv9as5{width:100vw;height:40px}',
  map: null
};
const U5BequipmentNameu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userDataStore, $$unsubscribe_userDataStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const userDataStore = getContext("userData");
  $$unsubscribe_userDataStore = subscribe(userDataStore, (value) => $userDataStore = value);
  let equipment = session.getItem("equipment");
  let itemPointer = equipment?.find((e) => e.name == $page.params.equipmentName);
  let item = deepcopy(itemPointer);
  deepcopy(item);
  let attributes = item?.attributes || [];
  let images = [];
  let editing = false;
  async function init() {
    images = Array(item?.imageOrder?.length || 0).fill({ src: "", done: false });
    for (let i = 0; i < item.tinySRC?.length || 0; i++)
      images[i].src = item.tinySRC[i];
    item.imgSRC = [];
    for (let i = 0; i < item?.imageOrder?.length; i++) {
      item.imgSRC[i] = await getSRC();
      images[i] = { src: item.imgSRC[i], done: true };
    }
  }
  let done = false;
  let scrollTop = 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        $userDataStore && !equipment && (async () => {
          equipment = await allDocs($userDataStore.businessID);
          item = equipment?.find((e) => e.name == $page.params.equipmentName);
          attributes = item?.attributes || [];
          deepcopy(item) || {};
          console.log($userDataStore);
        })();
      }
    }
    {
      if (item?.imageOrder?.length && !done) {
        done = true;
        init();
      }
    }
    $$rendered = `<div id="${"space-top"}" class="${"svelte-hv9as5"}"></div>

<div id="${"body"}" class="${"svelte-hv9as5"}"><div style="${"overflow: hidden"}"><div${add_attribute("style", `position: relative; top: ${scrollTop / 2}px`, 0)}>${validate_component(Gallery, "Gallery").$$render($$result, { images }, {
      images: ($$value) => {
        images = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
	${validate_component(Assignments, "Assignments").$$render($$result, { item, editing }, {
      item: ($$value) => {
        item = $$value;
        $$settled = false;
      },
      editing: ($$value) => {
        editing = $$value;
        $$settled = false;
      }
    }, {})}

	${validate_component(Attributes, "Attributes").$$render($$result, { attributes, editing }, {
      attributes: ($$value) => {
        attributes = $$value;
        $$settled = false;
      },
      editing: ($$value) => {
        editing = $$value;
        $$settled = false;
      }
    }, {})}
	


	<div id="${"space-bottom"}" class="${"svelte-hv9as5"}"></div>

  ${editing ? `
    <div id="${"controls"}" class="${"svelte-hv9as5"}"><button id="${"done"}" class="${"svelte-hv9as5"}">${validate_component(Done, "DoneSVG").$$render($$result, {}, {}, {})}</button>
      <button id="${"cancel"}" class="${"svelte-hv9as5"}">${validate_component(Close, "CloseSVG").$$render($$result, {}, {}, {})}</button></div>` : ``}</div>

<div id="${"header"}" class="${"svelte-hv9as5"}"><button class="${"svelte-hv9as5"}">${validate_component(Back, "BackSVG").$$render($$result, {}, {}, {})}</button>
  
  ${!editing ? `<p class="${"svelte-hv9as5"}">${escape(item?.name || "")}</p>` : `<input type="${"text"}" id="${"name"}"${add_attribute("value", item?.name, 0)} placeholder="${"Name"}" class="${"svelte-hv9as5"}">`}
  ${$userDataStore?.accessLevel && $userDataStore?.accessLevel >= 2 ? `<button class="${"svelte-hv9as5"}">${editing ? `${validate_component(Close, "CloseSVG").$$render($$result, {}, {}, {})}` : `${validate_component(Edit, "EditSVG").$$render($$result, {}, {}, {})}`}</button>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_userDataStore();
  $$unsubscribe_page();
  return $$rendered;
});
export { U5BequipmentNameu5D as default };
