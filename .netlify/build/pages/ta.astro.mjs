import { c as createAstro, a as createComponent, d as addAttribute, b as renderComponent, f as renderHead, e as renderTransition, g as createTransitionScope, r as renderTemplate } from '../chunks/astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { $ as $$BlogHead } from '../chunks/BlogHead_DlaJLTY8.mjs';
import { d as dissolve, $ as $$JapaneseTheme, H as Header, s as sakuraFade } from '../chunks/JapaneseTransitions_CNwOdyhn.mjs';
import { $ as $$Hero } from '../chunks/Hero_B_pVQt6U.mjs';
import { b as $$ClientRouter, a as $$SchemaOrg, $ as $$Footer } from '../chunks/SchemaOrg_CCClHFcA.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bibilicious.blog");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLanguage = "ta";
  const translations = {
    title: "\u0BAA\u0BBF\u0BAA\u0BBF\u0BB2\u0BBF\u0B9A\u0BBF\u0BAF\u0BB8\u0BCD | \u0B86\u0B99\u0BCD\u0B95\u0BBF\u0BB2\u0BAE\u0BCD \u21C4 \u0B9C\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF \u0BAE\u0BCA\u0BB4\u0BBF\u0BAA\u0BC6\u0BAF\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1",
    description: "\u0BAA\u0BBF\u0BAA\u0BBF\u0BB2\u0BBF\u0B9A\u0BBF\u0BAF\u0BB8\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD. \u0B86\u0B99\u0BCD\u0B95\u0BBF\u0BB2\u0BAE\u0BCD, \u0B9C\u0BAA\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0BAE\u0BCA\u0BB4\u0BBF\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0BAA\u0BBE\u0BB2\u0BAE\u0BCD."
  };
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1",
      "item": "https://bibilicious.com/ta"
    }
  ];
  return renderTemplate`<html lang="ta" class="jp-theme jp-texture"${addAttribute(renderTransition($$result, "dbn5ppmc", dissolve({ duration: "0.7s" }), ""), "data-astro-transition-scope")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${translations.title}</title><meta name="description"${addAttribute(translations.description, "content")}>${renderComponent($$result, "BlogHead", $$BlogHead, { "title": translations.title, "description": translations.description, "language": currentLanguage })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "JapaneseTheme", $$JapaneseTheme, {})}${renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "website", "title": translations.title, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "currentLanguage": currentLanguage, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/layout/Header.jsx", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "w355sacp") })} <main> ${renderComponent($$result, "Hero", $$Hero, { "language": currentLanguage, "data-astro-transition-scope": renderTransition($$result, "wvnsl6ry", sakuraFade({ duration: "0.6s" }), "") })} ${renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-transition-scope": renderTransition($$result, "3teo5sel", dissolve({ duration: "0.4s" }), "") })} </main> </body></html>`;
}, "/home/francis/work/Bibilicious/src/pages/ta/index.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/ta/index.astro";
const $$url = "/ta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
