import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

//const config: UserConfig = {
//	plugins: [sveltekit()]
//};

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				// search up for workspace root
				searchForWorkspaceRoot(process.cwd()),
				// your custom rules
				'./src/lib/',
				'./src/routes/',
				'./.svelte-kit/',
				'./src/',
				'./node_modules/',
				'./assets/'
			]
		}
	}
});

//export default config;
