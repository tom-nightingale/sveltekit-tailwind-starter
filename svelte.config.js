import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			aliases: [["ts", "typescript"]],
		}),
	],
	kit: {
		inlineStyleThreshold: 1024, // used to inline styles in the <head> for anything less than 1MB.
		adapter: adapter(),
		alias: {
			"@/components/*": "src/components/*",
			"@/utils/*": "src/utils/*",
			"@/gql/*": "src/gql/*",
			"@/stores/*": "src/stores/*",
		},
		trailingSlash: "always",
		prerender: {
			enabled: true,
			entries: ["*"],
		},
	}
};

export default config;
