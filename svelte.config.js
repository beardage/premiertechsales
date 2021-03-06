import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
			crawl: true,
			enabled: true,
			onError: "fail",
			entries: ["*"],
		},
	},
};

export default config;
