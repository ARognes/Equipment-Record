import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import svg from "@poppanator/sveltekit-svg";

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
