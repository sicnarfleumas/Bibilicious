import { a as createComponent, r as renderTemplate, b as renderComponent, e as renderTransition, g as createTransitionScope, f as renderHead, d as addAttribute } from '../../chunks/astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { $ as $$ContactForm, a as $$BaseHead } from '../../chunks/ContactForm_YZk1dTMU.mjs';
import { d as dissolve, s as sakuraFade, p as paperSlide, H as Header, $ as $$JapaneseTheme } from '../../chunks/JapaneseTransitions_CNwOdyhn.mjs';
import { C as Coffee } from '../../chunks/Coffee_CK6nOMCD.mjs';
import { $ as $$Footer, a as $$SchemaOrg, b as $$ClientRouter } from '../../chunks/SchemaOrg_CCClHFcA.mjs';
import { S as SITE_TITLE } from '../../chunks/consts_DqtLbRrN.mjs';
/* empty css                                      */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const currentLanguage = "ja";
  const translations = {
    title: "\u304A\u554F\u3044\u5408\u308F\u305B",
    description: "\u65E5\u672C\u8A9E\u3001\u30BF\u30DF\u30EB\u8A9E\u3001\u82F1\u8A9E\u9593\u306E\u7FFB\u8A33\u30B5\u30FC\u30D3\u30B9\u306B\u3064\u3044\u3066\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044"
  };
  const breadcrumbs = [
    {
      name: "\u30DB\u30FC\u30E0",
      item: "/ja/"
    },
    {
      name: "\u304A\u554F\u3044\u5408\u308F\u305B",
      item: "/ja/contact"
    }
  ];
  return renderTemplate(_a || (_a = __template(["<html", ' class="jp-theme jp-texture" data-astro-cid-7ofr5yip', `> <head><!-- Google Tag Manager --><script type="text/partytown">
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-MMXWL72L');
		<\/script><!-- End Google Tag Manager -->`, "", "", "<!-- Schema.org structured data -->", "", '</head> <body data-astro-cid-7ofr5yip> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMXWL72L" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-7ofr5yip></iframe> </noscript> <!-- End Google Tag Manager (noscript) --> <main data-astro-cid-7ofr5yip> ', " ", " ", " ", " </main> </body></html>"])), addAttribute(currentLanguage, "lang"), addAttribute(renderTransition($$result, "i3nypmpf", dissolve({ duration: "0.7s" }), ""), "data-astro-transition-scope"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${translations.title} | ${SITE_TITLE}`, "description": translations.description, "language": currentLanguage, "data-astro-cid-7ofr5yip": true }), renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-7ofr5yip": true }), renderComponent($$result, "JapaneseTheme", $$JapaneseTheme, { "data-astro-cid-7ofr5yip": true }), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "website", "title": `${translations.title} | ${SITE_TITLE}`, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs, "data-astro-cid-7ofr5yip": true }), renderHead(), renderComponent($$result, "Header", Header, { "currentLanguage": currentLanguage, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/layout/Header.jsx", "client:component-export": "default", "data-astro-cid-7ofr5yip": true, "data-astro-transition-persist": createTransitionScope($$result, "2kkblvlb") }), renderComponent($$result, "Form", $$ContactForm, { "language": currentLanguage, "data-astro-cid-7ofr5yip": true, "data-astro-transition-scope": renderTransition($$result, "7qd3peis", paperSlide({ duration: "0.6s" }), "") }), renderComponent($$result, "Coffee", Coffee, { "language": currentLanguage, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/francis/work/Bibilicious/src/components/ui/Coffee.jsx", "client:component-export": "default", "data-astro-cid-7ofr5yip": true, "data-astro-transition-scope": renderTransition($$result, "66ueph5c", sakuraFade({ duration: "0.5s" }), "") }), renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-cid-7ofr5yip": true, "data-astro-transition-scope": renderTransition($$result, "s7piqr4u", dissolve({ duration: "0.4s" }), "") }));
}, "/home/francis/work/Bibilicious/src/pages/ja/contact.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/ja/contact.astro";
const $$url = "/ja/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
