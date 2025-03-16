import { a as createComponent, r as renderTemplate, b as renderComponent, e as renderTransition, g as createTransitionScope, f as renderHead, d as addAttribute } from '../chunks/astro/server_BzOCFd5f.mjs';
import 'kleur/colors';
import { $ as $$ContactForm, a as $$BaseHead } from '../chunks/ContactForm_CioNFyQI.mjs';
import { d as dissolve, s as sakuraFade, p as paperSlide, H as Header, $ as $$JapaneseTheme } from '../chunks/JapaneseTransitions_Ch4LKKIF.mjs';
import { C as Coffee } from '../chunks/Coffee_CHdHyxOm.mjs';
import { $ as $$Footer, a as $$SchemaOrg, b as $$ClientRouter } from '../chunks/SchemaOrg_U0qbgqWj.mjs';
import { S as SITE_TITLE } from '../chunks/consts_DqtLbRrN.mjs';
/* empty css                                   */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const currentLanguage = "en";
  const translations = {
    title: "Contact",
    description: "Get in touch for translation services between Japanese, Tamil, and English"
  };
  const breadcrumbs = [
    {
      name: "Home",
      item: "/"
    },
    {
      name: "Contact",
      item: "/contact"
    }
  ];
  return renderTemplate(_a || (_a = __template(["<html", ' class="jp-theme jp-texture" data-astro-cid-uw5kdbxl', `> <head><!-- Google Tag Manager --><script type="text/partytown">
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-MMXWL72L');
		<\/script><!-- End Google Tag Manager -->`, "", "", "<!-- Schema.org structured data -->", "", '</head> <body data-astro-cid-uw5kdbxl> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMXWL72L" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-uw5kdbxl></iframe> </noscript> <!-- End Google Tag Manager (noscript) --> <main data-astro-cid-uw5kdbxl> ', " ", " ", " ", " </main> </body></html>"])), addAttribute(currentLanguage, "lang"), addAttribute(renderTransition($$result, "senippdl", dissolve({ duration: "0.7s" }), ""), "data-astro-transition-scope"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${translations.title} | ${SITE_TITLE}`, "description": translations.description, "language": currentLanguage, "data-astro-cid-uw5kdbxl": true }), renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-uw5kdbxl": true }), renderComponent($$result, "JapaneseTheme", $$JapaneseTheme, { "data-astro-cid-uw5kdbxl": true }), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "website", "title": `${translations.title} | ${SITE_TITLE}`, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs, "data-astro-cid-uw5kdbxl": true }), renderHead(), renderComponent($$result, "Header", Header, { "currentLanguage": currentLanguage, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/layout/Header.jsx", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true, "data-astro-transition-persist": createTransitionScope($$result, "7ywz2byc") }), renderComponent($$result, "Form", $$ContactForm, { "language": currentLanguage, "data-astro-cid-uw5kdbxl": true, "data-astro-transition-scope": renderTransition($$result, "nb6fcrbt", paperSlide({ duration: "0.6s" }), "") }), renderComponent($$result, "Coffee", Coffee, { "language": currentLanguage, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/francis/work/Bibilicious/src/components/ui/Coffee.jsx", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true, "data-astro-transition-scope": renderTransition($$result, "mb5ygiy7", sakuraFade({ duration: "0.5s" }), "") }), renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-cid-uw5kdbxl": true, "data-astro-transition-scope": renderTransition($$result, "lemydfpj", dissolve({ duration: "0.4s" }), "") }));
}, "/home/francis/work/Bibilicious/src/pages/contact.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
