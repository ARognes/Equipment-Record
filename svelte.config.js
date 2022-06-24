// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import svg from "@poppanator/sveltekit-svg";

import vercel from '@sveltejs/adapter-vercel';
 

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: vercel({
      // if true, will deploy the app using edge functions
      // (https://vercel.com/docs/concepts/functions/edge-functions)
      // rather than serverless functions
      edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false
    }),
    // This fixes a bug: https://github.com/sveltejs/kit/issues/2418
    vite: {
      ssr: {
        external: ["@xstate/svelte"],
      },
      plugins: [
        svg({
          includePaths: ["./src/lib/assets/"],
          svgoOptions: {
            multipass: true,
            plugins: [
              {
                name: "preset-default",
                params: { overrides: { removeViewBox: false } },
              },
            ],
          },
        }),
      ],
    },
  },
};

export default config;
