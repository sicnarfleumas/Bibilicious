import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as addAttribute, e as renderTransition, f as renderHead } from '../chunks/astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { $ as $$BlogHead } from '../chunks/BlogHead_DlaJLTY8.mjs';
import { $ as $$Header } from '../chunks/Header_D8sHfoYi.mjs';
import { $ as $$Footer, a as $$SchemaOrg, b as $$ClientRouter } from '../chunks/SchemaOrg_CCClHFcA.mjs';
import { $ as $$Coffee } from '../chunks/Coffee_ChgzgeM0.mjs';
import { $ as $$ReadMore, a as $$FormattedDate } from '../chunks/ReadMore_BjPGQEgd.mjs';
import { g as getCollection } from '../chunks/_astro_content_DbGO9th7.mjs';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bibilicious.blog");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPath = Astro2.url.pathname;
  const currentLanguage = currentPath.startsWith("/ja/") ? "ja" : currentPath.startsWith("/ta/") ? "ta" : "en";
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((post) => post.data.language === currentLanguage).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const translations = {
    title: "Bibilicious Blog | English \u21C4 Japanese Translation",
    description: "Read articles about Japanese language learning, translation tips, and personal experiences.",
    latestPosts: "\u{1F338} Read the Latest:",
    readMore: "Read more"
  };
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bibilicious.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://bibilicious.com/blog"
    }
  ];
  return renderTemplate(_a || (_a = __template(["<html", ` data-astro-cid-5tznm7mj> <head><!-- Google Tag Manager --><script type="text/partytown">
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-MMXWL72L');
		<\/script><!-- End Google Tag Manager -->`, "", "<!-- Schema.org structured data -->", "", '</head> <body data-astro-cid-5tznm7mj> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMXWL72L" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-5tznm7mj></iframe> </noscript> <!-- End Google Tag Manager (noscript) --> <main data-astro-cid-5tznm7mj> ', " <section data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>", "</h1> <ul data-astro-cid-5tznm7mj> ", " </ul> </section> ", " ", " ", " </main> </body></html>"])), addAttribute(currentLanguage, "lang"), renderComponent($$result, "BlogHead", $$BlogHead, { "title": translations.title, "description": translations.description, "language": currentLanguage, "data-astro-cid-5tznm7mj": true }), renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-5tznm7mj": true }), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "blog", "title": translations.title, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs, "data-astro-cid-5tznm7mj": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "currentLanguage": currentLanguage, "data-astro-cid-5tznm7mj": true }), translations.latestPosts, posts.map((post) => {
    const href = currentLanguage === "en" ? `/blog/${post.slug}/` : `/${currentLanguage}/blog/${post.slug}/`;
    return renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(href, "href")} data-astro-cid-5tznm7mj> <div class="title" data-astro-cid-5tznm7mj${addAttribute(renderTransition($$result, "7hfb46hi", "", `blog_title_${post.slug}`), "data-astro-transition-scope")}> <h2 data-astro-cid-5tznm7mj>${post.data.title}</h2> </div> <div class="date" data-astro-cid-5tznm7mj${addAttribute(renderTransition($$result, "dmpi6wtj", "", `blog_date_${post.slug}`), "data-astro-transition-scope")}> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "language": currentLanguage, "data-astro-cid-5tznm7mj": true })} </div> <div class="description" data-astro-cid-5tznm7mj> <p data-astro-cid-5tznm7mj>${post.data.description}</p> </div> <div class="read-more" data-astro-cid-5tznm7mj> ${translations.readMore} →
</div> </a> </li>`;
  }), renderComponent($$result, "Coffee", $$Coffee, { "language": currentLanguage, "data-astro-cid-5tznm7mj": true }), renderComponent($$result, "ReadMore", $$ReadMore, { "language": currentLanguage, "data-astro-cid-5tznm7mj": true }), renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-cid-5tznm7mj": true }));
}, "/home/francis/work/Bibilicious/src/pages/blog/index.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
