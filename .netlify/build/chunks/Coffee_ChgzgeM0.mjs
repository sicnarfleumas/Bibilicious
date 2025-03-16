import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://bibilicious.blog");
const $$Coffee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Coffee;
  const { language = "en" } = Astro2.props;
  const translations = {
    en: {
      title: "Support The Blog!!",
      description: "Love what you're reading on my blog? You can be a part of the fun by buying me a coffee! Your support keeps the good vibes flowing and the content coming. Whether it's a one-time caffeine boost or a recurring sip, every drop counts \u2013 thanks a latte for being awesome!"
    },
    ja: {
      title: "\u30D6\u30ED\u30B0\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B!!",
      description: "\u79C1\u306E\u30D6\u30ED\u30B0\u306E\u5185\u5BB9\u3092\u6C17\u306B\u5165\u3063\u3066\u3044\u305F\u3060\u3051\u307E\u3057\u305F\u304B\uFF1F\u30B3\u30FC\u30D2\u30FC\u3092\u8CB7\u3063\u3066\u3001\u3053\u306E\u697D\u3057\u3055\u306E\u4E00\u90E8\u306B\u306A\u308A\u307E\u305B\u3093\u304B\uFF01\u3042\u306A\u305F\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u826F\u3044\u96F0\u56F2\u6C17\u3092\u4FDD\u3061\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u7D9A\u3051\u308B\u305F\u3081\u306E\u529B\u306B\u306A\u308A\u307E\u3059\u3002\u4E00\u5EA6\u304D\u308A\u306E\u30AB\u30D5\u30A7\u30A4\u30F3\u88DC\u7D66\u3067\u3082\u3001\u5B9A\u671F\u7684\u306A\u4E00\u53E3\u3067\u3082\u3001\u3059\u3079\u3066\u304C\u5927\u5207\u3067\u3059 - \u7D20\u6674\u3089\u3057\u3044\u30B5\u30DD\u30FC\u30C8\u306B\u611F\u8B1D\u3057\u307E\u3059\uFF01"
    },
    ta: {
      title: "\u0BB5\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC8 \u0B86\u0BA4\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD!!",
      description: "\u0B8E\u0BA9\u0BCD \u0BB5\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BBF\u0BB2\u0BCD \u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0BA4\u0BC8 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BBE? \u0B8E\u0BA9\u0B95\u0BCD\u0B95\u0BC1 \u0B92\u0BB0\u0BC1 \u0B95\u0BBE\u0BAA\u0BBF \u0BB5\u0BBE\u0B99\u0BCD\u0B95\u0BC1\u0BB5\u0BA4\u0BA9\u0BCD \u0BAE\u0BC2\u0BB2\u0BAE\u0BCD \u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B87\u0BA8\u0BCD\u0BA4 \u0BAE\u0B95\u0BBF\u0BB4\u0BCD\u0B9A\u0BCD\u0B9A\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0B92\u0BB0\u0BC1 \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BB2\u0BBE\u0BAE\u0BCD! \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B86\u0BA4\u0BB0\u0BB5\u0BC1 \u0BA8\u0BB2\u0BCD\u0BB2 \u0B85\u0BA4\u0BBF\u0BB0\u0BCD\u0BB5\u0BB2\u0BC8\u0B95\u0BB3\u0BC8 \u0BAA\u0BBE\u0BAF\u0BCD\u0B9A\u0BCD\u0B9A\u0BBF, \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BC8 \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC1 \u0BB5\u0BB4\u0B99\u0BCD\u0B95 \u0B89\u0BA4\u0BB5\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. \u0B92\u0BB0\u0BC1 \u0BAE\u0BC1\u0BB1\u0BC8 \u0B95\u0BBE\u0BAA\u0BBF \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC1 \u0B86\u0BA4\u0BB0\u0BB5\u0BC1, \u0B92\u0BB5\u0BCD\u0BB5\u0BCA\u0BB0\u0BC1 \u0BA4\u0BC1\u0BB3\u0BBF\u0BAF\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BAF\u0BAE\u0BCD - \u0B85\u0BB1\u0BCD\u0BAA\u0BC1\u0BA4\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BBF\u0B95\u0BCD\u0B95 \u0BA8\u0BA9\u0BCD\u0BB1\u0BBF!"
    }
  };
  const t = translations[language];
  const coffeeLink = "https://www.buymeacoffee.com/bibilicious";
  return renderTemplate`${maybeRenderHead()}<section class="coffee" data-astro-cid-eovphvpi> <div class="sakura-container" data-astro-cid-eovphvpi> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> <div class="sakura-petal" data-astro-cid-eovphvpi></div> </div> <div class="wrapper" data-astro-cid-eovphvpi> <div class="left" data-astro-cid-eovphvpi> <div class="image-container" data-astro-cid-eovphvpi></div> </div> <div class="right" data-astro-cid-eovphvpi> <h2 class="title" data-astro-cid-eovphvpi> ${t.title} </h2> <p data-astro-cid-eovphvpi> ${t.description} </p> <div class="button-container" data-astro-cid-eovphvpi> <a${addAttribute(coffeeLink, "href")} target="_blank" class="coffee-button" data-astro-cid-eovphvpi> <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" data-astro-cid-eovphvpi> </a> </div> </div> </div> </section> `;
}, "/home/francis/work/Bibilicious/src/components/ui/Coffee.astro", void 0);

export { $$Coffee as $ };
