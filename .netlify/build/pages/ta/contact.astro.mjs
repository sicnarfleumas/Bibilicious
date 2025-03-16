import { a as createComponent, r as renderTemplate, b as renderComponent, e as renderTransition, g as createTransitionScope, f as renderHead, d as addAttribute } from '../../chunks/astro/server_BzOCFd5f.mjs';
import 'kleur/colors';
import { $ as $$ContactForm, a as $$BaseHead } from '../../chunks/ContactForm_CioNFyQI.mjs';
import { d as dissolve, s as sakuraFade, p as paperSlide, H as Header, $ as $$JapaneseTheme } from '../../chunks/JapaneseTransitions_Ch4LKKIF.mjs';
import { C as Coffee } from '../../chunks/Coffee_CHdHyxOm.mjs';
import { $ as $$Footer, a as $$SchemaOrg, b as $$ClientRouter } from '../../chunks/SchemaOrg_U0qbgqWj.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_DqtLbRrN.mjs';
/* empty css                                      */
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const currentLanguage = "ta";
  const translations = {
    title: "\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1",
    description: "\u0B9C\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF, \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B86\u0B99\u0BCD\u0B95\u0BBF\u0BB2 \u0BAE\u0BCA\u0BB4\u0BBF\u0BAA\u0BC6\u0BAF\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1 \u0B9A\u0BC7\u0BB5\u0BC8\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BB5\u0BC1\u0BAE\u0BCD"
  };
  const breadcrumbs = [
    {
      name: "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1",
      item: "/ta/"
    },
    {
      name: "\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1",
      item: "/ta/contact"
    }
  ];
  return renderTemplate(_a || (_a = __template(["<html", ' class="jp-theme jp-texture" data-astro-cid-jm3pz6wl', `> <head><!-- Google Tag Manager --><script type="text/partytown">
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-MMXWL72L');
		<\/script><!-- End Google Tag Manager -->`, "", "", "<!-- Schema.org structured data -->", "", '</head> <body data-astro-cid-jm3pz6wl> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMXWL72L" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-jm3pz6wl></iframe> </noscript> <!-- End Google Tag Manager (noscript) --> <main data-astro-cid-jm3pz6wl> ', " ", " ", " ", " </main> </body></html>"])), addAttribute(currentLanguage, "lang"), addAttribute(renderTransition($$result, "hfkdbzlx", dissolve({ duration: "0.7s" }), ""), "data-astro-transition-scope"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${translations.title} | ${SITE_TITLE}`, "description": translations.description, "language": currentLanguage, "data-astro-cid-jm3pz6wl": true }), renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-jm3pz6wl": true }), renderComponent($$result, "JapaneseTheme", $$JapaneseTheme, { "data-astro-cid-jm3pz6wl": true }), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "website", "title": `${translations.title} | ${SITE_TITLE}`, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs, "data-astro-cid-jm3pz6wl": true }), renderHead(), renderComponent($$result, "Header", Header, { "currentLanguage": currentLanguage, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/layout/Header.jsx", "client:component-export": "default", "data-astro-cid-jm3pz6wl": true, "data-astro-transition-persist": createTransitionScope($$result, "rmyoyuap") }), renderComponent($$result, "Form", $$ContactForm, { "language": currentLanguage, "data-astro-cid-jm3pz6wl": true, "data-astro-transition-scope": renderTransition($$result, "ip24niq7", paperSlide({ duration: "0.6s" }), "") }), renderComponent($$result, "Coffee", Coffee, { "language": currentLanguage, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/francis/work/Bibilicious/src/components/ui/Coffee.jsx", "client:component-export": "default", "data-astro-cid-jm3pz6wl": true, "data-astro-transition-scope": renderTransition($$result, "cfwjpoy7", sakuraFade({ duration: "0.5s" }), "") }), renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-cid-jm3pz6wl": true, "data-astro-transition-scope": renderTransition($$result, "mz4vglci", dissolve({ duration: "0.4s" }), "") }));
}, "/home/francis/work/Bibilicious/src/pages/ta/contact.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/ta/contact.astro";
const $$url = "/ta/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
