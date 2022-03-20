export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/business.svelte"),
	() => import("../../src/routes/forgot.svelte"),
	() => import("../../src/routes/on/__layout.svelte"),
	() => import("../../src/routes/on/equipment/index.svelte"),
	() => import("../../src/routes/on/projects/index.svelte"),
	() => import("../../src/routes/on/settings/__layout.reset.svelte"),
	() => import("../../src/routes/on/settings/index.svelte"),
	() => import("../../src/routes/on/account/index.svelte"),
	() => import("../../src/routes/on/history/index.svelte"),
	() => import("../../src/routes/on/home/index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"business": [[0, 3], [1]],
	"forgot": [[0, 4], [1]],
	"on/equipment": [[0, 5, 6], [1]],
	"on/projects": [[0, 5, 7], [1]],
	"on/settings": [[8, 9], []],
	"on/account": [[0, 5, 10], [1]],
	"on/history": [[0, 5, 11], [1]],
	"on/home": [[0, 5, 12], [1]]
};