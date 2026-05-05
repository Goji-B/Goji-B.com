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
					items: [
						{ label: 'Games Home', slug: 'games' },
						{ label: 'Tic-Tac-Toe', slug: 'games/tic-tac-toe' },
						{ label: 'Color Match Tap', slug: 'games/color-match-tap' },
						{ label: 'Animal Memory Cards', slug: 'games/animal-memory-cards' },
						{ label: 'Bubble Pop ABC', slug: 'games/bubble-pop-abc' },
						{ label: 'Shape Sorter', slug: 'games/shape-sorter' },
						{ label: 'Count the Fruits', slug: 'games/count-the-fruits' },
						{ label: 'Simon Lights Mini', slug: 'games/simon-lights-mini' },
						{ label: 'Find the Odd One', slug: 'games/find-the-odd-one' },
						{ label: 'Trace the Path', slug: 'games/trace-the-path' },
					],
				},
			],
		}),
	],
});
