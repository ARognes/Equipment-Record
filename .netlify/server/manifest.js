var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "start-b19ee27a.js", "js": ["start-b19ee27a.js", "chunks/vendor-7483cdb5.js", "chunks/preload-helper-e4860ae8.js", "chunks/singletons-d1fb5791.js"], "css": ["assets/vendor-dc74a490.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "endpoints/auth",
        pattern: /^\/endpoints\/auth\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/endpoints/auth.ts.js")))
      },
      {
        type: "page",
        id: "business",
        pattern: /^\/business\/?$/,
        names: [],
        types: [],
        path: "/business",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "forgot",
        pattern: /^\/forgot\/?$/,
        names: [],
        types: [],
        path: "/forgot",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "[businessName]/equipment",
        pattern: /^\/([^/]+?)\/equipment\/?$/,
        names: ["businessName"],
        types: [null],
        path: null,
        shadow: null,
        a: [5, 6],
        b: []
      },
      {
        type: "page",
        id: "[businessName]/equipment/[equipmentName]",
        pattern: /^\/([^/]+?)\/equipment\/([^/]+?)\/?$/,
        names: ["businessName", "equipmentName"],
        types: [null, null],
        path: null,
        shadow: null,
        a: [5, 7],
        b: []
      },
      {
        type: "page",
        id: "[businessName]/projects",
        pattern: /^\/([^/]+?)\/projects\/?$/,
        names: ["businessName"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8, 9],
        b: [1]
      },
      {
        type: "page",
        id: "[businessName]/settings",
        pattern: /^\/([^/]+?)\/settings\/?$/,
        names: ["businessName"],
        types: [null],
        path: null,
        shadow: null,
        a: [10, 11],
        b: []
      },
      {
        type: "page",
        id: "[businessName]/account",
        pattern: /^\/([^/]+?)\/account\/?$/,
        names: ["businessName"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8, 12],
        b: [1]
      },
      {
        type: "page",
        id: "[businessName]/history",
        pattern: /^\/([^/]+?)\/history\/?$/,
        names: ["businessName"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8, 13],
        b: [1]
      },
      {
        type: "page",
        id: "[businessName]/home",
        pattern: /^\/([^/]+?)\/home\/?$/,
        names: ["businessName"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8, 14],
        b: [1]
      },
      {
        type: "page",
        id: "[businessName]/add/equipment",
        pattern: /^\/([^/]+?)\/add\/equipment\/?$/,
        names: ["businessName"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8, 15],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
