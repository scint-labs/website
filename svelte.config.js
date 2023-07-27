import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true,
    }),
  },

  preprocess: vitePreprocess(),
  // see https://kit.svelte.dev/docs/adapter-auto for a list of adapters
  // See https://kit.svelte.dev/docs/adapters for more information about adapters.
}

export default config
