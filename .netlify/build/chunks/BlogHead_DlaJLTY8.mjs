import { c as createAstro, a as createComponent, b as renderComponent, d as addAttribute, r as renderTemplate } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { b as $$ClientRouter } from './SchemaOrg_CCClHFcA.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro = createAstro("https://bibilicious.blog");
const $$BlogHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg", language = "en" } = Astro2.props;
  const alternateUrls = {
    en: new URL(Astro2.url.pathname.replace(/^\/(ja|ta)\//, "/"), Astro2.site),
    ja: new URL(Astro2.url.pathname.replace(/^\/(en|ta)\//, "/ja/"), Astro2.site),
    ta: new URL(Astro2.url.pathname.replace(/^\/(en|ja)\//, "/ta/"), Astro2.site)
  };
  const alternates = Object.entries(alternateUrls).filter(([lang]) => lang !== language).map(([lang, url]) => ({ lang, url }));
  return renderTemplate`${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})} <link rel="sitemap" href="/sitemap-index.xml"> <meta name="keywords" content="Japanese Books, JLPT Preparation, Japan"> <meta name="author" content="Shruthi Lakshmi"> <!-- Global Metadata --> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="icon" type="image/svg+xml" href="/favicon.svg"> <meta name="generator"${addAttribute(Astro2.generator, "content")}> <!-- Font preloads --> <!-- Preconnect to fonts.gstatic.com for faster font loading --> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <!-- Preload the Berkshire Swash font to ensure faster font loading --> <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"> <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter&display=swap"> <!-- Stylesheet link for the Berkshire Swash font --> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap"> <!-- Canonical URL --> <link rel="canonical"${addAttribute(canonicalURL, "href")}> <!-- Alternate language URLs --> ${alternates.map(({ lang, url }) => renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(url, "href")}>`)} <link rel="alternate" hreflang="x-default"${addAttribute(alternateUrls.en, "href")}> <!-- Primary Meta Tags --> <title>${title}
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>
<meta property="og:locale"${addAttribute(language === "en" ? "en_US" : language === "ja" ? "ja_JP" : "ta_IN", "content")}>
${alternates.map(({ lang }) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(lang === "en" ? "en_US" : lang === "ja" ? "ja_JP" : "ta_IN", "content")}>`)}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}></title>`;
}, "/home/francis/work/Bibilicious/src/components/blog/BlogHead.astro", void 0);

export { $$BlogHead as $ };
