// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://goji-b.com',
	integrations: [
		starlight({
			title: 'Goji-B',
			customCss: ['./src/styles/site-theme.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Goji-B/Goji-B.com' }],
			sidebar: [
				{
					label: 'Activities',
					items: [
						{ label: 'Activities Home', link: '/activities/' },
						{ label: 'Activities — Getting Ready', link: '/activities/getting-ready/' },
						{ label: 'Tic-Tac-Toe Activity', link: '/activities/tic-tac-toe/' },
						{ label: 'Color Match Tap Activity', link: '/activities/color-match-tap/' },
						{ label: 'Animal Memory Cards Activity', link: '/activities/animal-memory-cards/' },
						{ label: 'Bubble Pop ABC Activity', link: '/activities/bubble-pop-abc/' },
						{ label: 'Shape Sorter Activity', link: '/activities/shape-sorter/' },
						{ label: 'Count the Fruits Activity', link: '/activities/count-the-fruits/' },
						{ label: 'Simon Lights Mini Activity', link: '/activities/simon-lights-mini/' },
						{ label: 'Find the Odd One Activity', link: '/activities/find-the-odd-one/' },
						{ label: 'Trace the Path Activity', link: '/activities/trace-the-path/' },
					],
				},
			],
		}),
	],
});
