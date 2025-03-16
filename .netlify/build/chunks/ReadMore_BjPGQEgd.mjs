import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as renderComponent } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DbGO9th7.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://bibilicious.blog");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, language = "en" } = Astro2.props;
  const localeMap = {
    "en": "en-US",
    "ja": "ja-JP",
    "ta": "ta-IN"
  };
  const locale = localeMap[language] || "en-US";
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`;
}, "/home/francis/work/Bibilicious/src/components/blog/FormattedDate.astro", void 0);

const $$Astro = createAstro("https://bibilicious.blog");
const $$ReadMore = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReadMore;
  const { language = "en" } = Astro2.props;
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((post) => post.data.language === language).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const translations = {
    en: {
      recentPosts: "RECENT POSTS"
    },
    ja: {
      recentPosts: "\u6700\u65B0\u306E\u8A18\u4E8B"
    },
    ta: {
      recentPosts: "\u0B9A\u0BAE\u0BC0\u0BAA\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD"
    }
  };
  const t = translations[language];
  function getBlogUrl(post) {
    const slug = post.slug;
    return language === "en" ? `/blog/${slug}/` : `/${language}/blog/${slug}/`;
  }
  return renderTemplate`${maybeRenderHead()}<section class="ReadMore" data-astro-cid-cvbj4vqe> <h2 data-astro-cid-cvbj4vqe>${t.recentPosts}</h2> <!-- Return the 4 most recent posts from the Astro Collection blog --> <div class="wrapper" data-astro-cid-cvbj4vqe> ${posts.slice(0, 4).map((post) => renderTemplate`<a${addAttribute(getBlogUrl(post), "href")} data-astro-cid-cvbj4vqe> <h4 data-astro-cid-cvbj4vqe>${post.data.title}</h4> <p data-astro-cid-cvbj4vqe>${post.data.description}</p> <div class="bottom" data-astro-cid-cvbj4vqe> <span class="date" data-astro-cid-cvbj4vqe>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-cvbj4vqe": true })}</span> <span class="category" data-astro-cid-cvbj4vqe>${post.data.category}</span> </div> </a>`)} </div> </section> `;
}, "/home/francis/work/Bibilicious/src/components/blog/ReadMore.astro", void 0);

export { $$ReadMore as $, $$FormattedDate as a };
