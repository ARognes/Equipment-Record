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
  s: () => session
});
module.exports = __toCommonJS(stdin_exports);
let session;
session = {
  getItem(a) {
  },
  setItem(a, b) {
  },
  removeItem(a) {
  },
  getItemFromPattern(a) {
  },
  removeItemFromPattern(a) {
  },
  key(a) {
  },
  clear() {
  },
  encryptString(a) {
  },
  decryptString(a) {
  },
  length: 0
};
init();
async function init() {
  return;
}
