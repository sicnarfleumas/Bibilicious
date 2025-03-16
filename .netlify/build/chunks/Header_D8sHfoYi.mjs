import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, h as renderScript, r as renderTemplate } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://bibilicious.blog");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentLanguage = "en" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const pathWithoutLang = currentPath.replace(/^\/(en|ja|ta)\//, "/");
  const isBlogPostPage = pathWithoutLang.match(/^\/blog\/[^/]+\/?$/);
  const languageUrls = {
    en: isBlogPostPage ? "/blog" : pathWithoutLang,
    ja: isBlogPostPage ? "/ja/blog" : `/ja${pathWithoutLang}`,
    ta: isBlogPostPage ? "/ta/blog" : `/ta${pathWithoutLang}`
  };
  const languageNames = {
    en: "English",
    ja: "\u65E5\u672C\u8A9E",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
  };
  const donateText = {
    en: "Donate",
    ja: "\u5BC4\u4ED8\u3059\u308B",
    ta: "\u0BA8\u0BA9\u0BCD\u0B95\u0BCA\u0B9F\u0BC8"
  };
  const isBlogPage = pathWithoutLang.startsWith("/blog");
  const isContactPage = pathWithoutLang.startsWith("/contact");
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-qlfjksao> <div class="header-container" data-astro-cid-qlfjksao> <a${addAttribute(currentLanguage === "en" ? "/" : `/${currentLanguage}/`, "href")} class="logo" data-astro-cid-qlfjksao>
Bibilicious
</a> <nav data-astro-cid-qlfjksao> <div class="nav-links" data-astro-cid-qlfjksao> <a${addAttribute(currentLanguage === "en" ? "/blog" : `/${currentLanguage}/blog`, "href")}${addAttribute(isBlogPage ? "active" : "", "class")} data-astro-cid-qlfjksao>
Blog
</a> <a${addAttribute(currentLanguage === "en" ? "/contact" : `/${currentLanguage}/contact`, "href")}${addAttribute(isContactPage ? "active" : "", "class")} data-astro-cid-qlfjksao>
Contact
</a> </div> <div class="header-right" data-astro-cid-qlfjksao> <div class="language-dropdown" data-astro-cid-qlfjksao> <button class="language-current" data-astro-cid-qlfjksao> <span data-astro-cid-qlfjksao>${languageNames[currentLanguage]}</span> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qlfjksao> <polyline points="6 9 12 15 18 9" data-astro-cid-qlfjksao></polyline> </svg> </button> <div class="language-options" data-astro-cid-qlfjksao> ${Object.entries(languageNames).map(([code, name]) => renderTemplate`<a${addAttribute(languageUrls[code], "href")}${addAttribute(`lang-option ${currentLanguage === code ? "active" : ""}`, "class")}${addAttribute(code, "hreflang")}${addAttribute(code, "lang")} data-astro-cid-qlfjksao> ${name} </a>`)} </div> </div> <div class="donate-button" data-astro-cid-qlfjksao> <a href="https://www.buymeacoffee.com/bibilicious" target="_blank" rel="noopener" data-astro-cid-qlfjksao> ${donateText[currentLanguage]} </a> </div> </div> </nav> <button class="mobile-menu-toggle" aria-label="Toggle menu" data-astro-cid-qlfjksao> <span class="bar" data-astro-cid-qlfjksao></span> <span class="bar" data-astro-cid-qlfjksao></span> <span class="bar" data-astro-cid-qlfjksao></span> </button> </div> </header> ${renderScript($$result, "/home/francis/work/Bibilicious/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/francis/work/Bibilicious/src/components/layout/Header.astro", void 0);

export { $$Header as $ };
