export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-21a8343a.js","js":["start-21a8343a.js","chunks/vendor-ec885462.js","chunks/preload-helper-e4860ae8.js","chunks/singletons-d1fb5791.js"],"css":["assets/vendor-dc74a490.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "endpoints/auth",
				pattern: /^\/endpoints\/auth\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/endpoints/auth.ts.js')
			},
			{
				type: 'page',
				id: "business",
				pattern: /^\/business\/?$/,
				names: [],
				types: [],
				path: "/business",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "forgot",
				pattern: /^\/forgot\/?$/,
				names: [],
				types: [],
				path: "/forgot",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "[businessName]/equipment",
				pattern: /^\/([^/]+?)\/equipment\/?$/,
				names: ["businessName"],
				types: [null],
				path: null,
				shadow: null,
				a: [5,6],
				b: []
			},
			{
				type: 'page',
				id: "[businessName]/equipment/[equipmentName]",
				pattern: /^\/([^/]+?)\/equipment\/([^/]+?)\/?$/,
				names: ["businessName","equipmentName"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [5,7],
				b: []
			},
			{
				type: 'page',
				id: "[businessName]/projects",
				pattern: /^\/([^/]+?)\/projects\/?$/,
				names: ["businessName"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8,9],
				b: [1]
			},
			{
				type: 'page',
				id: "[businessName]/settings",
				pattern: /^\/([^/]+?)\/settings\/?$/,
				names: ["businessName"],
				types: [null],
				path: null,
				shadow: null,
				a: [10,11],
				b: []
			},
			{
				type: 'page',
				id: "[businessName]/account",
				pattern: /^\/([^/]+?)\/account\/?$/,
				names: ["businessName"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8,12],
				b: [1]
			},
			{
				type: 'page',
				id: "[businessName]/history",
				pattern: /^\/([^/]+?)\/history\/?$/,
				names: ["businessName"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8,13],
				b: [1]
			},
			{
				type: 'page',
				id: "[businessName]/home",
				pattern: /^\/([^/]+?)\/home\/?$/,
				names: ["businessName"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8,14],
				b: [1]
			},
			{
				type: 'page',
				id: "[businessName]/add/equipment",
				pattern: /^\/([^/]+?)\/add\/equipment\/?$/,
				names: ["businessName"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8,15],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
