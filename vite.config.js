import { sveltekit } from '@sveltejs/kit/vite';
import { ViteRsw } from 'vite-plugin-rsw';

const config = {
	plugins: [sveltekit(), ViteRsw()]
};

export default config;
