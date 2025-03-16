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
  const currentLanguage = "ja";
  const translations = {
    title: "\u30D3\u30D3\u30EA\u30B7\u30E3\u30B9 | \u82F1\u8A9E \u21C4 \u65E5\u672C\u8A9E\u7FFB\u8A33",
    description: "\u30D3\u30D3\u30EA\u30B7\u30E3\u30B9\u3078\u3088\u3046\u3053\u305D\u3002\u82F1\u8A9E\u3001\u65E5\u672C\u8A9E\u3001\u30BF\u30DF\u30EB\u8A9E\u306E\u67B6\u3051\u6A4B\u3002"
  };
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "\u30DB\u30FC\u30E0",
      "item": "https://bibilicious.com/ja"
    }
  ];
  return renderTemplate`<html lang="ja" class="jp-theme jp-texture"${addAttribute(renderTransition($$result, "rhcjcec6", dissolve({ duration: "0.7s" }), ""), "data-astro-transition-scope")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${translations.title}</title><meta name="description"${addAttribute(translations.description, "content")}>${renderComponent($$result, "BlogHead", $$BlogHead, { "title": translations.title, "description": translations.description, "language": currentLanguage })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "JapaneseTheme", $$JapaneseTheme, {})}${renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "website", "title": translations.title, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "currentLanguage": currentLanguage, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/layout/Header.jsx", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "g3hk2s3k") })} <main> ${renderComponent($$result, "Hero", $$Hero, { "language": currentLanguage, "data-astro-transition-scope": renderTransition($$result, "slie5skd", sakuraFade({ duration: "0.6s" }), "") })} ${renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-transition-scope": renderTransition($$result, "3euohzug", dissolve({ duration: "0.4s" }), "") })} </main> </body></html>`;
}, "/home/francis/work/Bibilicious/src/pages/ja/index.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/ja/index.astro";
const $$url = "/ja";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
