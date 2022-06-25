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
  default: () => U5BequipmentNameu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../../chunks/index-1e667dfc.js");
var import_Gallery_72c88b6a = require("../../../../chunks/Gallery-72c88b6a.js");
var import_stores_ed515c98 = require("../../../../chunks/stores-ed515c98.js");
var import_firebase_01a4cca1 = require("../../../../chunks/firebase-01a4cca1.js");
var import_lite = require("firebase/firestore/lite");
var import_storage_7a99a8c4 = require("../../../../chunks/storage-7a99a8c4.js");
var import_Loading_d732ebf6 = require("../../../../chunks/Loading-d732ebf6.js");
var import_storage = require("firebase/storage");
var import_app_5af87a2a = require("../../../../chunks/app-5af87a2a.js");
var import_app = require("firebase/app");
var import_base64_arraybuffer = require("base64-arraybuffer");
var Assignments_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#assignments.svelte-dce25p.svelte-dce25p{position:relative;left:0;top:-12px;height:auto;margin:0}#assignments.svelte-dce25p #title.svelte-dce25p{width:calc(100vw - 8px);height:30px;background-color:#ddd;margin:0;padding:0 4px 0 4px;font-size:20px;text-overflow:clip;white-space:nowrap;overflow:hidden}#assignments.svelte-dce25p .scrollable.svelte-dce25p{width:100%;max-height:20px;overflow-y:hidden;overflow-x:hidden;transition:max-height 500ms cubic-bezier(0, 1, 0, 1)}#assignments.svelte-dce25p .scrollable-more.svelte-dce25p{max-height:200px;overflow-y:auto;transition:max-height 500ms ease-in-out}#assignments.svelte-dce25p .assignment.svelte-dce25p{width:calc(100vw - 8px);height:20px;margin:0;padding:0 4px;font-size:14px;text-overflow:clip;white-space:nowrap;overflow:hidden;display:flex;flex-wrap:nowrap;column-gap:10px;justify-content:space-between}#assignments.svelte-dce25p .assignment a.svelte-dce25p{text-decoration:none;overflow:hidden;flex:1 1 0}#assignments.svelte-dce25p .assignment p.svelte-dce25p{flex:1 1 0;margin:0}#assignments.svelte-dce25p .assignment.svelte-dce25p:nth-child(even){background-color:#eee}#showMoreAssignments.svelte-dce25p.svelte-dce25p{position:relative;float:right;margin:0;padding:0;width:30px;height:30px}#reassign.svelte-dce25p.svelte-dce25p{position:relative;float:right;margin:0 4px 0 0;padding:0;width:80px;height:30px}",
  map: null
};
const Assignments = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let $userDataStore, $$unsubscribe_userDataStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_1e667dfc.a)(import_stores_ed515c98.p, (value) => $page = value);
  const userDataStore = (0, import_index_1e667dfc.g)("userData");
  $$unsubscribe_userDataStore = (0, import_index_1e667dfc.a)(userDataStore, (value) => $userDataStore = value);
  let { item, editing } = $$props;
  let assignments = [];
  let selectedProject;
  let done2 = false;
  async function init() {
    done2 = true;
    assignments = await (0, import_firebase_01a4cca1.q)($userDataStore.businessID, "assignments", [(0, import_lite.where)("equipmentID", "==", item.id), (0, import_lite.orderBy)("createdAt", "desc")]);
    resetSelection();
  }
  function resetSelection() {
    if (assignments == null ? void 0 : assignments.length)
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
      (0, import_firebase_01a4cca1.a)($userDataStore.businessID).then((data) => {
        projects = data;
        resetSelection();
      });
    }
  }
  $$unsubscribe_userDataStore();
  $$unsubscribe_page();
  return `<div id="${"assignments"}" class="${"svelte-dce25p"}"><div id="${"title"}" class="${"svelte-dce25p"}">Assigned
		${assignments.length ? `<button id="${"showMoreAssignments"}" class="${"svelte-dce25p"}">${(0, import_index_1e667dfc.e)("+")}</button>` : ``}

		${editing && projects.length && assignments.length ? `<select id="${"reassign"}" class="${"svelte-dce25p"}">${(0, import_index_1e667dfc.j)(projects, (proj, i) => {
    return `<option${(0, import_index_1e667dfc.i)("value", proj, 0)}>${(0, import_index_1e667dfc.e)(proj.name)}</option>`;
  })}</select>` : ``}</div>
	<div class="${["scrollable svelte-dce25p", ""].join(" ").trim()}">${(0, import_index_1e667dfc.j)(assignments, (assn, i) => {
    return `<div class="${"assignment svelte-dce25p"}"><a sveltekit:prefetch${(0, import_index_1e667dfc.i)("href", `/${$page.params.businessName}/projects/${assn.projectName}`, 0)} class="${"svelte-dce25p"}">${(0, import_index_1e667dfc.e)(assn.projectName || "")}</a>
				<a sveltekit:prefetch${(0, import_index_1e667dfc.i)("href", `/${$page.params.businessName}/users/${assn.username}`, 0)} class="${"svelte-dce25p"}">${(0, import_index_1e667dfc.e)(assn.username || "")}</a>
				<p class="${"svelte-dce25p"}">${(0, import_index_1e667dfc.e)(assn.createdAt ? new Date(assn.createdAt.seconds * 1e3).toLocaleString() : "")}</p>
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
const Attributes = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
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
    if (editing && attributes.length < MAX_ATTRIBUTES && (attributes[attributes.length - 1].key.length || attributes[attributes.length - 1].val.length || ((_a = attributes[attributes.length - 1].editKey) == null ? void 0 : _a.length) || ((_b = attributes[attributes.length - 1].editVal) == null ? void 0 : _b.length)))
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
  return `<div id="${"attributes"}" class="${"svelte-1svt6o0"}">${(0, import_index_1e667dfc.j)(attributes || [], (attr, i) => {
    return `<div class="${"attribute"}">${!editing ? `<p class="${"key svelte-1svt6o0"}">${(0, import_index_1e667dfc.e)(attr.key)}</p>` : `<div class="${"div-key svelte-1svt6o0"}"><input type="${"text"}" placeholder="${"Attribute"}"${(0, import_index_1e667dfc.i)("value", attr.key || attr.editKey || "", 0)} class="${"svelte-1svt6o0"}">
					${i + 1 < attributes.length ? `<div class="${"attribute-actions svelte-1svt6o0"}">${i > 0 ? `<button class="${"svelte-1svt6o0"}">^</button>` : ``}
							${i < attributes.length - 2 ? `<button class="${"svelte-1svt6o0"}">v</button>` : ``}
							<button class="${"svelte-1svt6o0"}">-</button>
						</div>` : ``}
				</div>`}
			<textarea ${!editing ? "readonly" : ""} placeholder="${"Empty"}" rows="${"1"}" class="${"svelte-1svt6o0"}"${(0, import_index_1e667dfc.i)("this", textAreas[i], 0)}>${attr.editVal || ""}</textarea>
		</div>`;
  })}
</div>`;
});
const Back = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1e667dfc.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    (0, import_index_1e667dfc.h)($$props)
  ], {})}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}"></path></svg>`;
});
const Edit = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1e667dfc.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    (0, import_index_1e667dfc.h)($$props)
  ], {})}><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}"></path></svg>`;
});
const Done = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1e667dfc.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    (0, import_index_1e667dfc.h)($$props)
  ], {})}><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}"></path></svg>`;
});
const Close = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1e667dfc.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    (0, import_index_1e667dfc.h)($$props)
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
const U5BequipmentNameu5D = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $userDataStore, $$unsubscribe_userDataStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_1e667dfc.a)(import_stores_ed515c98.p, (value) => $page = value);
  const userDataStore = (0, import_index_1e667dfc.g)("userData");
  $$unsubscribe_userDataStore = (0, import_index_1e667dfc.a)(userDataStore, (value) => $userDataStore = value);
  let equipment = import_storage_7a99a8c4.s.getItem("equipment");
  let itemPointer = equipment == null ? void 0 : equipment.find((e) => e.name == $page.params.equipmentName);
  let item = deepcopy(itemPointer);
  deepcopy(item);
  let attributes = (item == null ? void 0 : item.attributes) || [];
  let images = [];
  let editing = false;
  async function init() {
    var _a2, _b, _c;
    images = Array(((_a2 = item == null ? void 0 : item.imageOrder) == null ? void 0 : _a2.length) || 0).fill({ src: "", done: false });
    for (let i = 0; i < ((_b = item.tinySRC) == null ? void 0 : _b.length) || 0; i++)
      images[i].src = item.tinySRC[i];
    item.imgSRC = [];
    for (let i = 0; i < ((_c = item == null ? void 0 : item.imageOrder) == null ? void 0 : _c.length); i++) {
      item.imgSRC[i] = await (0, import_firebase_01a4cca1.g)();
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
          equipment = await (0, import_firebase_01a4cca1.a)($userDataStore.businessID);
          item = equipment == null ? void 0 : equipment.find((e) => e.name == $page.params.equipmentName);
          attributes = (item == null ? void 0 : item.attributes) || [];
          deepcopy(item) || {};
          console.log($userDataStore);
        })();
      }
    }
    {
      if (((_a = item == null ? void 0 : item.imageOrder) == null ? void 0 : _a.length) && !done) {
        done = true;
        init();
      }
    }
    $$rendered = `<div id="${"space-top"}" class="${"svelte-hv9as5"}"></div>

<div id="${"body"}" class="${"svelte-hv9as5"}"><div style="${"overflow: hidden"}"><div${(0, import_index_1e667dfc.i)("style", `position: relative; top: ${scrollTop / 2}px`, 0)}>${(0, import_index_1e667dfc.v)(import_Gallery_72c88b6a.G, "Gallery").$$render($$result, { images }, {
      images: ($$value) => {
        images = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
	${(0, import_index_1e667dfc.v)(Assignments, "Assignments").$$render($$result, { item, editing }, {
      item: ($$value) => {
        item = $$value;
        $$settled = false;
      },
      editing: ($$value) => {
        editing = $$value;
        $$settled = false;
      }
    }, {})}

	${(0, import_index_1e667dfc.v)(Attributes, "Attributes").$$render($$result, { attributes, editing }, {
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
    <div id="${"controls"}" class="${"svelte-hv9as5"}"><button id="${"done"}" class="${"svelte-hv9as5"}">${(0, import_index_1e667dfc.v)(Done, "DoneSVG").$$render($$result, {}, {}, {})}</button>
      <button id="${"cancel"}" class="${"svelte-hv9as5"}">${(0, import_index_1e667dfc.v)(Close, "CloseSVG").$$render($$result, {}, {}, {})}</button></div>` : ``}</div>

<div id="${"header"}" class="${"svelte-hv9as5"}"><button class="${"svelte-hv9as5"}">${(0, import_index_1e667dfc.v)(Back, "BackSVG").$$render($$result, {}, {}, {})}</button>
  
  ${!editing ? `<p class="${"svelte-hv9as5"}">${(0, import_index_1e667dfc.e)((item == null ? void 0 : item.name) || "")}</p>` : `<input type="${"text"}" id="${"name"}"${(0, import_index_1e667dfc.i)("value", item == null ? void 0 : item.name, 0)} placeholder="${"Name"}" class="${"svelte-hv9as5"}">`}
  ${($userDataStore == null ? void 0 : $userDataStore.accessLevel) && ($userDataStore == null ? void 0 : $userDataStore.accessLevel) >= 2 ? `<button class="${"svelte-hv9as5"}">${editing ? `${(0, import_index_1e667dfc.v)(Close, "CloseSVG").$$render($$result, {}, {}, {})}` : `${(0, import_index_1e667dfc.v)(Edit, "EditSVG").$$render($$result, {}, {}, {})}`}</button>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_userDataStore();
  $$unsubscribe_page();
  return $$rendered;
});
