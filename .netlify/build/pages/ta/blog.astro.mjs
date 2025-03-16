import { a as createComponent, r as renderTemplate, b as renderComponent, d as addAttribute, e as renderTransition, f as renderHead } from '../../chunks/astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { $ as $$BlogHead } from '../../chunks/BlogHead_DlaJLTY8.mjs';
import { $ as $$Header } from '../../chunks/Header_D8sHfoYi.mjs';
import { $ as $$Footer, a as $$SchemaOrg, b as $$ClientRouter } from '../../chunks/SchemaOrg_CCClHFcA.mjs';
import { $ as $$Coffee } from '../../chunks/Coffee_ChgzgeM0.mjs';
import { $ as $$ReadMore, a as $$FormattedDate } from '../../chunks/ReadMore_BjPGQEgd.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DbGO9th7.mjs';
/* empty css                                    */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const currentLanguage = "ta";
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((post) => post.data.language === currentLanguage).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const translations = {
    title: "\u0BAA\u0BBF\u0BAA\u0BBF\u0BB2\u0BBF\u0B9A\u0BBF\u0BAF\u0BB8\u0BCD \u0BB5\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 | \u0B86\u0B99\u0BCD\u0B95\u0BBF\u0BB2\u0BAE\u0BCD \u21C4 \u0B9C\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF \u0BAE\u0BCA\u0BB4\u0BBF\u0BAA\u0BC6\u0BAF\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1",
    description: "\u0B9C\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF \u0BAE\u0BCA\u0BB4\u0BBF \u0B95\u0BB1\u0BCD\u0BB1\u0BB2\u0BCD, \u0BAE\u0BCA\u0BB4\u0BBF\u0BAA\u0BC6\u0BAF\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1 \u0B95\u0BC1\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BA9\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0B85\u0BA9\u0BC1\u0BAA\u0BB5\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BB1\u0BCD\u0BB1\u0BBF\u0BAF \u0B95\u0B9F\u0BCD\u0B9F\u0BC1\u0BB0\u0BC8\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
    latestPosts: "\u{1F338} \u0B9A\u0BAE\u0BC0\u0BAA\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD:",
    readMore: "\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95"
  };
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1",
      "item": "https://bibilicious.com/ta"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "\u0BB5\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1",
      "item": "https://bibilicious.com/ta/blog"
    }
  ];
  return renderTemplate(_a || (_a = __template(["<html", ` data-astro-cid-xyclzhtz> <head><!-- Google Tag Manager --><script type="text/partytown">
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-MMXWL72L');
		<\/script><!-- End Google Tag Manager -->`, "", "<!-- Schema.org structured data -->", "", '</head> <body data-astro-cid-xyclzhtz> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMXWL72L" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-xyclzhtz></iframe> </noscript> <!-- End Google Tag Manager (noscript) --> <main data-astro-cid-xyclzhtz> ', " <section data-astro-cid-xyclzhtz> <h1 data-astro-cid-xyclzhtz>", "</h1> <ul data-astro-cid-xyclzhtz> ", " </ul> </section> ", " ", " ", " </main> </body></html>"])), addAttribute(currentLanguage, "lang"), renderComponent($$result, "BlogHead", $$BlogHead, { "title": translations.title, "description": translations.description, "language": currentLanguage, "data-astro-cid-xyclzhtz": true }), renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-xyclzhtz": true }), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "blog", "title": translations.title, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs, "data-astro-cid-xyclzhtz": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "currentLanguage": currentLanguage, "data-astro-cid-xyclzhtz": true }), translations.latestPosts, posts.map((post) => renderTemplate`<li data-astro-cid-xyclzhtz> <a${addAttribute(`/ta/blog/${post.slug}/`, "href")} data-astro-cid-xyclzhtz> <div class="title" data-astro-cid-xyclzhtz${addAttribute(renderTransition($$result, "f7yphdft", "", `blog_title_${post.slug}`), "data-astro-transition-scope")}> <h2 data-astro-cid-xyclzhtz>${post.data.title}</h2> </div> <div class="date" data-astro-cid-xyclzhtz${addAttribute(renderTransition($$result, "dom325zg", "", `blog_date_${post.slug}`), "data-astro-transition-scope")}> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "language": currentLanguage, "data-astro-cid-xyclzhtz": true })} </div> <div class="description" data-astro-cid-xyclzhtz> <p data-astro-cid-xyclzhtz>${post.data.description}</p> </div> <div class="read-more" data-astro-cid-xyclzhtz> ${translations.readMore} →
</div> </a> </li>`), renderComponent($$result, "Coffee", $$Coffee, { "language": currentLanguage, "data-astro-cid-xyclzhtz": true }), renderComponent($$result, "ReadMore", $$ReadMore, { "language": currentLanguage, "data-astro-cid-xyclzhtz": true }), renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-cid-xyclzhtz": true }));
}, "/home/francis/work/Bibilicious/src/pages/ta/blog/index.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/ta/blog/index.astro";
const $$url = "/ta/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
