// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://goji-b.com',
	integrations: [
		starlight({
			title: 'Goji-B',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Goji-B/Goji-B.com' }],
			sidebar: [
				{
					label: 'Company',
					items: [
						{ label: 'Overview', slug: 'company' },
					],
				},
				{
					label: 'Modules',
					items: [
						{ label: 'Module Catalog', slug: 'modules' },
						{ label: 'Module Template', slug: 'modules/module-template' },
					],
				},
				{
					label: 'Games',
					items: [{ label: 'Tic-Tac-Toe', slug: 'games/tic-tac-toe' }],
				},
			],
		}),
	],
});
