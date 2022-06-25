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
  a: () => allDocs,
  g: () => getSRC,
  q: () => queryDocs
});
module.exports = __toCommonJS(stdin_exports);
var import_lite = require("firebase/firestore/lite");
var import_storage = require("firebase/storage");
var import_storage_7a99a8c4 = require("./storage-7a99a8c4.js");
var import_app_5af87a2a = require("./app-5af87a2a.js");
var import_base64_arraybuffer = require("base64-arraybuffer");
async function allDocs(businessID, col) {
  return null;
}
async function queryDocs(businessID, col, wheres) {
  return null;
}
async function getSRC(equipment, tiny, i) {
  return null;
}
