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
  const currentLanguage = "ja";
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((post) => post.data.language === currentLanguage).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const translations = {
    title: "\u30D3\u30D3\u30EA\u30B7\u30E3\u30B9\u30D6\u30ED\u30B0 | \u82F1\u8A9E \u21C4 \u65E5\u672C\u8A9E\u7FFB\u8A33",
    description: "\u65E5\u672C\u8A9E\u5B66\u7FD2\u3001\u7FFB\u8A33\u306E\u30D2\u30F3\u30C8\u3001\u500B\u4EBA\u7684\u306A\u7D4C\u9A13\u306B\u3064\u3044\u3066\u306E\u8A18\u4E8B\u3092\u304A\u8AAD\u307F\u304F\u3060\u3055\u3044\u3002",
    latestPosts: "\u{1F338} \u6700\u65B0\u306E\u8A18\u4E8B:",
    readMore: "\u7D9A\u304D\u3092\u8AAD\u3080"
  };
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "\u30DB\u30FC\u30E0",
      "item": "https://bibilicious.com/ja"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "\u30D6\u30ED\u30B0",
      "item": "https://bibilicious.com/ja/blog"
    }
  ];
  return renderTemplate(_a || (_a = __template(["<html", ` data-astro-cid-qvrtif4e> <head><!-- Google Tag Manager --><script type="text/partytown">
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-MMXWL72L');
		<\/script><!-- End Google Tag Manager -->`, "", "<!-- Schema.org structured data -->", "", '</head> <body data-astro-cid-qvrtif4e> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMXWL72L" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-qvrtif4e></iframe> </noscript> <!-- End Google Tag Manager (noscript) --> <main data-astro-cid-qvrtif4e> ', " <section data-astro-cid-qvrtif4e> <h1 data-astro-cid-qvrtif4e>", "</h1> <ul data-astro-cid-qvrtif4e> ", " </ul> </section> ", " ", " ", " </main> </body></html>"])), addAttribute(currentLanguage, "lang"), renderComponent($$result, "BlogHead", $$BlogHead, { "title": translations.title, "description": translations.description, "language": currentLanguage, "data-astro-cid-qvrtif4e": true }), renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-qvrtif4e": true }), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "blog", "title": translations.title, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs, "data-astro-cid-qvrtif4e": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "currentLanguage": currentLanguage, "data-astro-cid-qvrtif4e": true }), translations.latestPosts, posts.map((post) => renderTemplate`<li data-astro-cid-qvrtif4e> <a${addAttribute(`/ja/blog/${post.slug}/`, "href")} data-astro-cid-qvrtif4e> <div class="title" data-astro-cid-qvrtif4e${addAttribute(renderTransition($$result, "b5za426e", "", `blog_title_${post.slug}`), "data-astro-transition-scope")}> <h2 data-astro-cid-qvrtif4e>${post.data.title}</h2> </div> <div class="date" data-astro-cid-qvrtif4e${addAttribute(renderTransition($$result, "pyzepwok", "", `blog_date_${post.slug}`), "data-astro-transition-scope")}> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "language": currentLanguage, "data-astro-cid-qvrtif4e": true })} </div> <div class="description" data-astro-cid-qvrtif4e> <p data-astro-cid-qvrtif4e>${post.data.description}</p> </div> <div class="read-more" data-astro-cid-qvrtif4e> ${translations.readMore} →
</div> </a> </li>`), renderComponent($$result, "Coffee", $$Coffee, { "language": currentLanguage, "data-astro-cid-qvrtif4e": true }), renderComponent($$result, "ReadMore", $$ReadMore, { "language": currentLanguage, "data-astro-cid-qvrtif4e": true }), renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-cid-qvrtif4e": true }));
}, "/home/francis/work/Bibilicious/src/pages/ja/blog/index.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/ja/blog/index.astro";
const $$url = "/ja/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
