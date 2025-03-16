import rss from '@astrojs/rss';
import { g as getCollection } from '../../chunks/_astro_content_DbGO9th7.mjs';
export { renderers } from '../../renderers.mjs';

async function GET(context) {
	// Get all blog posts
	const allPosts = await getCollection('blog');
	
	// Filter posts by language
	const posts = allPosts.filter(post => post.data.language === 'ta');
	
	// Tamil title and description
	const title = 'பிபிலிசியஸ் | ஆங்கிலம் ⇄ ஜப்பானிய மொழிபெயர்ப்பு';
	const description = 'பிபிலிசியஸுக்கு வரவேற்கிறோம். ஆங்கிலம், ஜப்பானிய மற்றும் தமிழ் மொழிகளின் பாலம்.';
	
	return rss({
		title,
		description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/ta/blog/${post.slug}/`,
			language: 'ta',
		})),
		xmlns: {
			xml: "http://www.w3.org/XML/1998/namespace",
		},
		customData: `<language>ta-in</language>`,
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
