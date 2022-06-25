export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/business.svelte"),
	() => import("../../src/routes/register.svelte"),
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
	() => import("../../src/routes/[businessName]/home/index.svelte"),
	() => import("../../src/routes/[businessName]/add/equipment.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"business": [[0, 3], [1]],
	"register": [[0, 4], [1]],
	"forgot": [[0, 5], [1]],
	"[businessName]/equipment": [[7, 8], []],
	"[businessName]/equipment/[equipmentName]": [[7, 9], []],
	"[businessName]/projects": [[0, 6, 10], [1]],
	"[businessName]/settings": [[11, 12], []],
	"[businessName]/account": [[0, 6, 13], [1]],
	"[businessName]/history": [[0, 6, 14], [1]],
	"[businessName]/home": [[0, 6, 15], [1]],
	"[businessName]/add/equipment": [[0, 6, 16], [1]]
};