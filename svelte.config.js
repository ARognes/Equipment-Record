import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		// This fixes a bug: https://github.com/sveltejs/kit/issues/2418
		vite: {
			ssr: {
				external: ['@xstate/svelte']
			}
		}
	}
};

export default config;
