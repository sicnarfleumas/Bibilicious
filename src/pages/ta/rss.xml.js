import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';

export async function GET(context) {
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