import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '/test-app';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		}
  },
  preprocess: vitePreprocess(),
  vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
};
export default config;