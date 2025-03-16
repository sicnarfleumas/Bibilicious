import { c as createAstro, a as createComponent, d as addAttribute, b as renderComponent, f as renderHead, e as renderTransition, g as createTransitionScope, r as renderTemplate } from '../chunks/astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { $ as $$BlogHead } from '../chunks/BlogHead_DlaJLTY8.mjs';
import { d as dissolve, $ as $$JapaneseTheme, H as Header, s as sakuraFade } from '../chunks/JapaneseTransitions_CNwOdyhn.mjs';
import { $ as $$Hero } from '../chunks/Hero_B_pVQt6U.mjs';
import { b as $$ClientRouter, a as $$SchemaOrg, $ as $$Footer } from '../chunks/SchemaOrg_CCClHFcA.mjs';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bibilicious.blog");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLanguage = "en";
  const translations = {
    title: "Bibilicious | English \u21C4 Japanese Translation",
    description: "Welcome to Bibilicious. A bridge between English, Japanese, and Tamil languages."
  };
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bibilicious.com"
    }
  ];
  return renderTemplate`<html lang="en" class="jp-theme jp-texture" data-astro-cid-j7pv25f6${addAttribute(renderTransition($$result, "rpl33o7b", dissolve({ duration: "0.7s" }), ""), "data-astro-transition-scope")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${translations.title}</title><meta name="description"${addAttribute(translations.description, "content")}>${renderComponent($$result, "BlogHead", $$BlogHead, { "title": translations.title, "description": translations.description, "language": currentLanguage, "data-astro-cid-j7pv25f6": true })}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result, "JapaneseTheme", $$JapaneseTheme, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "website", "title": translations.title, "description": translations.description, "language": currentLanguage, "breadcrumbs": breadcrumbs, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", Header, { "currentLanguage": currentLanguage, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/layout/Header.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true, "data-astro-transition-persist": createTransitionScope($$result, "4xrw4k47") })} <main data-astro-cid-j7pv25f6> ${renderComponent($$result, "Hero", $$Hero, { "language": currentLanguage, "data-astro-cid-j7pv25f6": true, "data-astro-transition-scope": renderTransition($$result, "2t6smker", sakuraFade({ duration: "0.6s" }), "") })} </main> ${renderComponent($$result, "Footer", $$Footer, { "language": currentLanguage, "data-astro-cid-j7pv25f6": true, "data-astro-transition-scope": renderTransition($$result, "iiwdael6", dissolve({ duration: "0.4s" }), "") })} </body></html>`;
}, "/home/francis/work/Bibilicious/src/pages/index.astro", "self");

const $$file = "/home/francis/work/Bibilicious/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
