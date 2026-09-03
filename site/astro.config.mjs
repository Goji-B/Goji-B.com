// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const cfWebAnalyticsToken = process.env.PUBLIC_CF_WEB_ANALYTICS_TOKEN?.trim() ?? '';

/** @returns {import('@astrojs/starlight').StarlightUserConfig['head']} */
function cloudflareBeaconHead() {
	if (!cfWebAnalyticsToken) return [];
	return [
		{
			tag: 'script',
			attrs: {
				defer: true,
				src: 'https://static.cloudflareinsights.com/beacon.min.js',
				'data-cf-beacon': JSON.stringify({ token: cfWebAnalyticsToken }),
			},
		},
	];
}

// https://astro.build/config
export default defineConfig({
	site: 'https://goji-b.com',
	integrations: [
		starlight({
			title: 'Goji-B',
			head: cloudflareBeaconHead(),
			customCss: ['./src/styles/site-theme.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Goji-B/Goji-B.com' }],
			sidebar: [
				{
					label: 'Activities',
					items: [
						{ label: 'Activities Home', link: '/activities/' },
						{ label: 'Activities — Getting Ready', link: '/activities/getting-ready/' },
						{ label: 'Tic-Tac-Toe Activity', link: '/activities/tic-tac-toe/' },
						{ label: 'Colour the Picture Activity', link: '/activities/colour-the-picture/' },
						{ label: 'Color Match Tap Activity', link: '/activities/color-match-tap/' },
						{ label: 'Animal Memory Cards Activity', link: '/activities/animal-memory-cards/' },
						{ label: 'Bubble Pop ABC Activity', link: '/activities/bubble-pop-abc/' },
						{ label: 'Shape Sorter Activity', link: '/activities/shape-sorter/' },
						{ label: 'Count the Fruits Activity', link: '/activities/count-the-fruits/' },
						{ label: 'Simon Lights Mini Activity', link: '/activities/simon-lights-mini/' },
						{ label: 'Find the Odd One Activity', link: '/activities/find-the-odd-one/' },
						{ label: 'Trace the Path Activity', link: '/activities/trace-the-path/' },
						{ label: 'Chess for Kids Activity', link: '/activities/chess-kids/' },
					],
				},
			],
		}),
	],
});
