import { c as createAstro, a as createComponent, d as addAttribute, h as renderScript, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { g as getCollection } from './_astro_content_DbGO9th7.mjs';
/* empty css                          */

const $$Astro$2 = createAstro("https://bibilicious.blog");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/francis/work/Bibilicious/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/francis/work/Bibilicious/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro("https://bibilicious.blog");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const { language = "en" } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const translations = {
    en: {
      contact: "Contact",
      links: "Links",
      socials: "Socials",
      recentPosts: "Recent Posts",
      home: "Home",
      blog: "Blog",
      donate: "Donate",
      copyright: `\xA9 ${currentYear} Bibilicious. All rights reserved.`,
      designedBy: "Designed and developed by"
    },
    ja: {
      contact: "\u304A\u554F\u3044\u5408\u308F\u305B",
      links: "\u30EA\u30F3\u30AF",
      socials: "\u30BD\u30FC\u30B7\u30E3\u30EB",
      recentPosts: "\u6700\u65B0\u306E\u8A18\u4E8B",
      home: "\u30DB\u30FC\u30E0",
      blog: "\u30D6\u30ED\u30B0",
      donate: "\u5BC4\u4ED8\u3059\u308B",
      copyright: `\xA9 ${currentYear} \u30D3\u30D3\u30EA\u30B7\u30E3\u30B9. \u5168\u8457\u4F5C\u6A29\u6240\u6709.`,
      designedBy: "\u30C7\u30B6\u30A4\u30F3\u30FB\u958B\u767A\uFF1A"
    },
    ta: {
      contact: "\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1",
      links: "\u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      socials: "\u0B9A\u0BAE\u0BC2\u0B95 \u0B8A\u0B9F\u0B95\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      recentPosts: "\u0B9A\u0BAE\u0BC0\u0BAA\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD",
      home: "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1",
      blog: "\u0BB5\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1",
      donate: "\u0BA8\u0BA9\u0BCD\u0B95\u0BCA\u0B9F\u0BC8",
      copyright: `\xA9 ${currentYear} \u0BAA\u0BBF\u0BAA\u0BBF\u0BB2\u0BBF\u0B9A\u0BBF\u0BAF\u0BB8\u0BCD. \u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0B89\u0BB0\u0BBF\u0BAE\u0BC8\u0B95\u0BB3\u0BC1\u0BAE\u0BCD \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BB5\u0BC8.`,
      designedBy: "\u0BB5\u0B9F\u0BBF\u0BB5\u0BAE\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BBF\u0BAF\u0BA4\u0BC1"
    }
  };
  const t = translations[language];
  const homeUrl = language === "en" ? "/" : `/${language}`;
  const blogUrl = language === "en" ? "/blog" : `/${language}/blog`;
  const contactUrl = language === "en" ? "/contact" : `/${language}/contact`;
  function getBlogUrl(slug) {
    return language === "en" ? `/blog/${slug}/` : `/${language}/blog/${slug}/`;
  }
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`footer ${language === "ja" ? "japanese-theme" : ""}`, "class")} data-astro-cid-35ed7um5> <div class="container" data-astro-cid-35ed7um5> <div class="top" data-astro-cid-35ed7um5> <a${addAttribute(homeUrl, "href")} class="logo" data-astro-cid-35ed7um5> ${language === "ja" ? "\u30D3\u30D3\u30EA\u30B7\u30E3\u30B9" : language === "ta" ? "\u0BAA\u0BBF\u0BAA\u0BBF\u0BB2\u0BBF\u0B9A\u0BBF\u0BAF\u0BB8\u0BCD" : "Bibilicious"} </a> </div> <div class="wrapper" data-astro-cid-35ed7um5> <div class="info" data-astro-cid-35ed7um5> <h2 data-astro-cid-35ed7um5> ${t.contact} </h2> <a href="mailto:bibilicious@gmail.com" type="email" data-astro-cid-35ed7um5>
bibilicious@gmail.com
</a> <p data-astro-cid-35ed7um5>India</p> </div> <div class="info" data-astro-cid-35ed7um5> <h2 data-astro-cid-35ed7um5>${t.links}</h2> <a${addAttribute(homeUrl, "href")} data-astro-cid-35ed7um5>${t.home}</a> <a${addAttribute(blogUrl, "href")} data-astro-cid-35ed7um5>${t.blog}</a> <a${addAttribute(contactUrl, "href")} data-astro-cid-35ed7um5>${t.contact}</a> <a href="https://www.buymeacoffee.com/bibilicious" data-astro-cid-35ed7um5>${t.donate}</a> </div> <div class="info" data-astro-cid-35ed7um5> <h2 data-astro-cid-35ed7um5>${t.socials}</h2> <a href="" data-astro-cid-35ed7um5>Langmate</a> <a href="" data-astro-cid-35ed7um5>Hello Talk</a> <a href="" data-astro-cid-35ed7um5>Instagram</a> </div> <div class="info" data-astro-cid-35ed7um5> <h2 data-astro-cid-35ed7um5>${t.recentPosts}</h2> ${posts.filter((post) => post.data.language === language).slice(0, 2).map((post) => renderTemplate`<a${addAttribute(getBlogUrl(post.slug), "href")} data-astro-cid-35ed7um5> ${post.data.title} </a>`)} </div> </div> <div class="footer-copyright" data-astro-cid-35ed7um5> <p data-astro-cid-35ed7um5>${t.copyright}</p> <p data-astro-cid-35ed7um5> ${t.designedBy} <a href="https://craftingclicks.com" target="_blank" rel="noopener" data-astro-cid-35ed7um5>Crafting Clicks</a> </p> </div> </div> </footer> `;
}, "/home/francis/work/Bibilicious/src/components/layout/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bibilicious.blog");
const $$SchemaOrg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SchemaOrg;
  const {
    type,
    title,
    description,
    image = "/blog-placeholder-1.jpg",
    datePublished,
    dateModified,
    author = "Shruthi Lakshmi",
    language = "en",
    url = Astro2.url,
    breadcrumbs = []
  } = Astro2.props;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bibilicious",
    "url": "https://bibilicious.blog",
    "logo": new URL("/favicon.svg", Astro2.site).toString(),
    "sameAs": [
      "https://twitter.com/bibilicious",
      "https://instagram.com/bibilicious"
    ]
  };
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author,
    "url": "https://bibilicious.blog/about"
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "description": description,
    "url": url.toString(),
    "inLanguage": language === "en" ? "en-US" : language === "ja" ? "ja-JP" : "ta-IN",
    "publisher": organizationSchema
  };
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": title,
    "description": description,
    "url": url.toString(),
    "inLanguage": language === "en" ? "en-US" : language === "ja" ? "ja-JP" : "ta-IN",
    "publisher": organizationSchema,
    "author": personSchema
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": new URL(image, Astro2.site).toString(),
    "datePublished": datePublished?.toISOString(),
    "dateModified": dateModified?.toISOString() || datePublished?.toISOString(),
    "author": personSchema,
    "publisher": organizationSchema,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url.toString()
    },
    "inLanguage": language === "en" ? "en-US" : language === "ja" ? "ja-JP" : "ta-IN"
  };
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": new URL(item.item, Astro2.site).toString()
    }))
  } : null;
  let schema;
  switch (type) {
    case "website":
      schema = websiteSchema;
      break;
    case "blog":
      schema = blogSchema;
      break;
    case "blogPosting":
      schema = blogPostingSchema;
      break;
    case "person":
      schema = personSchema;
      break;
    case "organization":
      schema = organizationSchema;
      break;
    default:
      schema = websiteSchema;
  }
  const schemas = [schema];
  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }
  return renderTemplate`${schemas.map((schema2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema2))))}`;
}, "/home/francis/work/Bibilicious/src/components/common/SchemaOrg.astro", void 0);

export { $$Footer as $, $$SchemaOrg as a, $$ClientRouter as b };
