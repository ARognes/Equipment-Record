export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/business.svelte"),
	() => import("../../src/routes/forgot.svelte"),
	() => import("../../src/routes/[businessName]/__layout.svelte"),
	() => import("../../src/routes/[businessName]/equipment/__layout.reset.svelte"),
	() => import("../../src/routes/[businessName]/equipment/index.svelte"),
	() => import("../../src/routes/[businessName]/equipment/[equipmentName].svelte"),
	() => import("../../src/routes/[businessName]/projects/index.svelte"),
	() => import("../../src/routes/[businessName]/settings/__layout.reset.svelte"),
	() => import("../../src/routes/[businessName]/settings/index.svelte"),
	() => import("../../src/routes/[businessName]/account/index.svelte"),
	() => import("../../src/routes/[businessName]/history/index.svelte"),
	() => import("../../src/routes/[businessName]/home/index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"business": [[0, 3], [1]],
	"forgot": [[0, 4], [1]],
	"[businessName]/equipment": [[6, 7], []],
	"[businessName]/equipment/[equipmentName]": [[6, 8], []],
	"[businessName]/projects": [[0, 5, 9], [1]],
	"[businessName]/settings": [[10, 11], []],
	"[businessName]/account": [[0, 5, 12], [1]],
	"[businessName]/history": [[0, 5, 13], [1]],
	"[businessName]/home": [[0, 5, 14], [1]]
};