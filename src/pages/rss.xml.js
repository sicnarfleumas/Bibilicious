import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	// Get all blog posts
	const allPosts = await getCollection('blog');
	
	// Get the language from the URL or default to English
	const url = context.url.pathname;
	const language = url.startsWith('/ja/') ? 'ja' : 
	                url.startsWith('/ta/') ? 'ta' : 'en';
	
	// Filter posts by language
	const posts = allPosts.filter(post => post.data.language === language);
	
	// Set the appropriate title and description based on language
	const title = language === 'en' ? SITE_TITLE : 
	             language === 'ja' ? 'ビビリシャス | 英語 ⇄ 日本語翻訳' : 
	             'பிபிலிசியஸ் | ஆங்கிலம் ⇄ ஜப்பானிய மொழிபெயர்ப்பு';
	
	const description = language === 'en' ? SITE_DESCRIPTION :
	                   language === 'ja' ? 'ビビリシャスへようこそ。英語、日本語、タミル語の言語の架け橋です。' :
	                   'பிபிலிசியஸுக்கு வரவேற்கிறோம். ஆங்கிலம், ஜப்பானிய மற்றும் தமிழ் மொழிகளின் பாலம்.';
	
	// Create the appropriate link prefix based on language
	const linkPrefix = language === 'en' ? '/blog/' : `/${language}/blog/`;
	
	return rss({
		title,
		description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `${linkPrefix}${post.slug}/`,
			language: post.data.language,
		})),
		xmlns: {
			xml: "http://www.w3.org/XML/1998/namespace",
		},
		customData: `<language>${language === 'en' ? 'en-us' : language === 'ja' ? 'ja-jp' : 'ta-in'}</language>`,
	});
}
