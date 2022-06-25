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
  default: () => Equipment
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../../chunks/index-1e667dfc.js");
var import_Navbar_c4579b37 = require("../../../../chunks/Navbar-c4579b37.js");
var import_Loading_d732ebf6 = require("../../../../chunks/Loading-d732ebf6.js");
var import_firebase_01a4cca1 = require("../../../../chunks/firebase-01a4cca1.js");
var import_storage_7a99a8c4 = require("../../../../chunks/storage-7a99a8c4.js");
var import_account_5b395066 = require("../../../../chunks/account-5b395066.js");
var import_stores_ed515c98 = require("../../../../chunks/stores-ed515c98.js");
var import_lite = require("firebase/firestore/lite");
var import_storage = require("firebase/storage");
var import_app_5af87a2a = require("../../../../chunks/app-5af87a2a.js");
var import_app = require("firebase/app");
var import_base64_arraybuffer = require("base64-arraybuffer");
const Add = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1e667dfc.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    (0, import_index_1e667dfc.h)($$props)
  ], {})}><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}"></path></svg>`;
});
var ItemList_svelte_svelte_type_style_lang = "";
const Error2 = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1e667dfc.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "24" },
    { viewBox: "0 0 24 24" },
    { width: "24" },
    (0, import_index_1e667dfc.h)($$props)
  ], {})}><path d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}"></path></svg>`;
});
var ItemCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".highlight.svelte-10ul3u8.svelte-10ul3u8{color:white;background-color:#888;border-width:20px;padding:1px}.item.svelte-10ul3u8.svelte-10ul3u8{position:relative;display:flex;margin:0 0 2px 0;left:0;width:100%;height:80px;background-color:#eee}.left.svelte-10ul3u8.svelte-10ul3u8{height:80px;width:80px;margin:0;display:grid;place-items:center}.left.svelte-10ul3u8 img.svelte-10ul3u8{height:80px}.middle.svelte-10ul3u8.svelte-10ul3u8{height:80px;margin:0 auto 0 10px}.middle.svelte-10ul3u8 .attr.svelte-10ul3u8{font-size:12px}.right.svelte-10ul3u8.svelte-10ul3u8{height:80px;margin:0 10px 0 auto;color:blue;font-weight:bold;font-size:12px}",
  map: null
};
const ItemCard = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { info } = $$props;
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  $$result.css.add(css$2);
  return `<div class="${"item svelte-10ul3u8"}"><div class="${"left svelte-10ul3u8"}">${((_a = info == null ? void 0 : info.tinySRC) == null ? void 0 : _a.length) ? `${(info == null ? void 0 : info.tinySRC[0]) ? `<img loading="${"lazy"}"${(0, import_index_1e667dfc.i)("src", info == null ? void 0 : info.tinySRC[0], 0)} alt="${""}" class="${"svelte-10ul3u8"}">` : `${(0, import_index_1e667dfc.v)(Error2, "ErrorSVG").$$render($$result, { width: "40", height: "40" }, {}, {})}`}` : `${(0, import_index_1e667dfc.v)(import_Loading_d732ebf6.L, "Loading").$$render($$result, {}, {}, {})}`}</div>
  <div class="${"middle svelte-10ul3u8"}"><div class="${"name"}">${(0, import_index_1e667dfc.j)(info == null ? void 0 : info.nameHighlight, (matches) => {
    return `<span class="${["svelte-10ul3u8", matches.highlight ? "highlight" : ""].join(" ").trim()}">${(0, import_index_1e667dfc.e)(matches.text)}</span>`;
  })}</div>

    <div class="${"attr svelte-10ul3u8"}">${(0, import_index_1e667dfc.j)(info == null ? void 0 : info.attrHighlight, (attr) => {
    return `<div>${(0, import_index_1e667dfc.j)(attr, (matches) => {
      return `<span class="${["svelte-10ul3u8", matches.highlight ? "highlight" : ""].join(" ").trim()}">${(0, import_index_1e667dfc.e)(matches.text)}</span>`;
    })}
        </div>`;
  })}</div>

    </div>
  <div class="${"right svelte-10ul3u8"}"><p>${(0, import_index_1e667dfc.e)((info == null ? void 0 : info.userAssigned) || "")}<br>${(0, import_index_1e667dfc.e)((info == null ? void 0 : info.projectAssigned) || "")}</p></div>
</div>`;
});
var ItemContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#searchItems.svelte-1gon0eq.svelte-1gon0eq{position:relative;display:block;height:calc(100% - 100px);top:0;overflow-y:auto;overflow-x:hidden}#searchItems-grid.svelte-1gon0eq.svelte-1gon0eq{position:relative;display:grid;grid-template-columns:calc(50vw - 4px) calc(50vw - 4px);grid-auto-rows:calc(50vw - 12px);gap:4px 4px;padding:4px;width:calc(100vw - 12px);height:calc(100% - 100px);top:0;overflow-y:auto;overflow-x:hidden}header.svelte-1gon0eq.svelte-1gon0eq{position:relative;background-color:#bbb;margin:0;height:40px}header.svelte-1gon0eq input.svelte-1gon0eq{position:absolute;left:5px;top:5px;bottom:5px;right:40px;margin:0;border:0;font-size:20px}header.svelte-1gon0eq input.svelte-1gon0eq:focus{outline:0}header.svelte-1gon0eq #view.svelte-1gon0eq{position:absolute;right:5px;top:5px;width:30px;height:30px}",
  map: null
};
function testSearch(search, text, caseSens) {
  return new RegExp(search, caseSens == 1 ? "g" : "gi").test(text);
}
function matchSearch(search, text, caseSens) {
  if (search == null || search.length == 0)
    return [{ highlight: false, text }];
  const pattern = new RegExp(search, caseSens == 1 ? "g" : "gi");
  const matches = [];
  let match;
  while (match = pattern.exec(text)) {
    const i = match.index, j = i + match[0].length;
    if (i)
      matches.push({
        highlight: false,
        text: text.substring(0, i)
      });
    matches.push({
      highlight: true,
      text: text.substring(i, j)
    });
    text = text.substring(j);
  }
  if (text)
    matches.push({ highlight: false, text });
  return matches;
}
const ItemContainer = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userDataStore;
  let { items } = $$props;
  let view = 1;
  let search;
  let searchItems;
  const userDataStore = (0, import_index_1e667dfc.g)("userData");
  $$unsubscribe_userDataStore = (0, import_index_1e667dfc.a)(userDataStore, (value) => value);
  function searchbar(search2) {
    if (items == null)
      return;
    resetSearchItems();
    search2 = search2 == null ? void 0 : search2.trim();
    if (search2 == null || search2.length == 0)
      return;
    const settings1 = search2 == null ? void 0 : search2.charAt(0);
    const settings2 = search2 == null ? void 0 : search2.charAt(1);
    let attrSearch = 0, caseSens = 0;
    if (settings1 == ":" || settings2 == ":")
      attrSearch = 1;
    if (settings1 == "_" || settings2 == "_")
      caseSens = 1;
    const value = search2 == null ? void 0 : search2.substring(0 + attrSearch + caseSens).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (value == null || value.length == 0)
      return;
    if (!attrSearch) {
      for (let i = 0; i < searchItems.length; i++) {
        const text = searchItems[i].name;
        if (text == null || text.length == 0 || !testSearch(value, text, caseSens))
          searchItems.splice(i--, 1);
        else
          searchItems[i].nameHighlight = matchSearch(value, text, caseSens);
      }
    } else {
      for (let i = 0; i < searchItems.length; i++) {
        console.log(searchItems[i]);
        searchItems[i].attrHighlight = [];
        for (let j in searchItems[i].attributes) {
          const text = searchItems[i].attributes[j].key;
          if (text == null || text.length == 0 || !testSearch(value, text, caseSens))
            continue;
          searchItems[i].attrHighlight = [...searchItems[i].attrHighlight, matchSearch(value, text, caseSens)];
        }
        if (searchItems[i].attrHighlight.length == 0)
          searchItems.splice(i--, 1);
      }
    }
  }
  function resetSearchItems() {
    var _a;
    searchItems = JSON.parse(JSON.stringify(items));
    for (let i = 0; i < searchItems.length; i++) {
      searchItems[i].nameHighlight = [
        {
          highlight: false,
          text: searchItems[i].name
        }
      ];
      searchItems[i].attrHighlight = ((_a = searchItems[i].attributes) == null ? void 0 : _a.length) ? [
        [
          {
            highlight: false,
            text: searchItems[i].attributes[0].key
          }
        ]
      ] : [[]];
    }
    searchItems = searchItems.sort((a, b) => a.name.localeCompare(b.name));
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    items && resetSearchItems();
    {
      searchbar(search);
    }
    $$rendered = `<header class="${"svelte-1gon0eq"}"><input type="${"text"}" placeholder="${"Search"}" class="${"svelte-1gon0eq"}"${(0, import_index_1e667dfc.i)("value", search, 0)}>
	<button id="${"view"}" class="${"svelte-1gon0eq"}">${(0, import_index_1e667dfc.e)(view)}</button></header>

${searchItems ? `<div${(0, import_index_1e667dfc.i)("id", "searchItems", 0)} class="${"svelte-1gon0eq"}">${(0, import_index_1e667dfc.j)(searchItems, (item) => {
      return `<div>${`${(0, import_index_1e667dfc.v)(ItemCard, "ItemCard").$$render($$result, { info: item }, {
        info: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      }, {})}`}
			</div>`;
    })}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_userDataStore();
  return $$rendered;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#add-equipment.svelte-1ys8glc{position:fixed;right:10px;bottom:70px;width:60px;height:60px;padding:0;border-radius:50%;border:0;background-color:#ccc}",
  map: null
};
const Equipment = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let $userDataStore, $$unsubscribe_userDataStore;
  let equipmentData = [];
  const userDataStore = (0, import_index_1e667dfc.g)("userData");
  $$unsubscribe_userDataStore = (0, import_index_1e667dfc.a)(userDataStore, (value) => $userDataStore = value);
  let done = false;
  async function getEquipmentData() {
    equipmentData = await (0, import_firebase_01a4cca1.a)($userDataStore.businessID);
    console.log(equipmentData);
    for (let i in equipmentData) {
      equipmentData[i].tinySRC = [];
      (0, import_firebase_01a4cca1.g)(equipmentData[i]).then((src) => {
        equipmentData[i].tinySRC[0] = src;
        if (+i === equipmentData.length - 1)
          import_storage_7a99a8c4.s.setItem("equipment", equipmentData);
      });
    }
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if ($userDataStore && !done) {
        done = true;
        getEquipmentData();
      }
    }
    $$rendered = `${(0, import_index_1e667dfc.v)(ItemContainer, "ItemContainer").$$render($$result, { items: equipmentData }, {
      items: ($$value) => {
        equipmentData = $$value;
        $$settled = false;
      }
    }, {})}

${($userDataStore == null ? void 0 : $userDataStore.accessLevel) && ($userDataStore == null ? void 0 : $userDataStore.accessLevel) >= 2 ? `<a sveltekit:prefetch href="${"add/equipment"}" id="${"add-equipment"}" class="${"svelte-1ys8glc"}">${(0, import_index_1e667dfc.v)(Add, "AddSVG").$$render($$result, {}, {}, {})}</a>` : ``}

${(0, import_index_1e667dfc.v)(import_Navbar_c4579b37.N, "Navbar").$$render($$result, { path: $userDataStore == null ? void 0 : $userDataStore.businessName }, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_userDataStore();
  return $$rendered;
});
