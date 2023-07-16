import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import '$lib/scss/colors.scss';
					@import '$lib/scss/sizes.scss';
				`
			}
		}
	}
});
