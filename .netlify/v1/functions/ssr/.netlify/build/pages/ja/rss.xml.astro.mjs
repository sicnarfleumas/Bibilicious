import rss from '@astrojs/rss';
import { g as getCollection } from '../../chunks/_astro_content_DbGO9th7.mjs';
export { renderers } from '../../renderers.mjs';

async function GET(context) {
	// Get all blog posts
	const allPosts = await getCollection('blog');
	
	// Filter posts by language
	const posts = allPosts.filter(post => post.data.language === 'ja');
	
	// Japanese title and description
	const title = 'ビビリシャス | 英語 ⇄ 日本語翻訳';
	const description = 'ビビリシャスへようこそ。英語、日本語、タミル語の言語の架け橋です。';
	
	return rss({
		title,
		description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/ja/blog/${post.slug}/`,
			language: 'ja',
		})),
		xmlns: {
			xml: "http://www.w3.org/XML/1998/namespace",
		},
		customData: `<language>ja-jp</language>`,
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
