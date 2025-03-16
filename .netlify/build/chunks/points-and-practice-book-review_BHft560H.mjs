import { a as createComponent, c as createAstro, m as maybeRenderHead, d as addAttribute, b as renderComponent, r as renderTemplate, p as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_BRdpPqYy.mjs';
/* empty css                                                                 */
import 'clsx';

const $$Astro = createAstro("https://bibilicious.blog");
const $$Affiliate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Affiliate;
  const { AffiliateImg } = Astro2.props;
  const { AffiliateLink = "https://www.buymeacoffee.com/bibilicious" } = Astro2.props;
  const { AffiliateName = "VIEW ON AMAZON" } = Astro2.props;
  const { AffiliateAlt = "Book Recommendation" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="affiliate" data-astro-cid-z7vjw6xl> <div class="left" data-astro-cid-z7vjw6xl> <h2 data-astro-cid-z7vjw6xl>CHECK IT OUT HERE!</h2> <p data-astro-cid-z7vjw6xl>The following are affiliate links and I would appreciate it if you guys use them as it helps me run this website without having to rely on ads 🙂</p> <a${addAttribute(AffiliateLink, "href")} data-astro-cid-z7vjw6xl>${AffiliateName}</a> </div> ${renderComponent($$result, "Image", $$Image, { "src": AffiliateImg, "alt": AffiliateAlt, "class": "Image", "data-astro-cid-z7vjw6xl": true })} </section> `;
}, "/home/francis/work/Bibilicious/src/components/common/Affiliate.astro", void 0);

const book = new Proxy({"src":"/_astro/Points_Pactise.Br5oBz6T.jpg","width":708,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/francis/work/Bibilicious/src/assets/images/blog-1/Points&Pactise.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Points and Practice (Book Review)",
  "description": "Struggling to keep up with the reading section? Don't throw in the towel just yet! Check out this review before you make a decision.",
  "pubDate": "Jan 22 2024",
  "category": "Coming Soon",
  "heroImage": "/blog-placeholder-1.jpg",
  "language": "en"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "points-and-practice",
    "text": "”Points and Practice”"
  }, {
    "depth": 2,
    "slug": "pros-and-cons",
    "text": "Pros and Cons"
  }, {
    "depth": 3,
    "slug": "pros",
    "text": "Pros:"
  }, {
    "depth": 3,
    "slug": "cons",
    "text": "Cons:"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I had exactly two and a half months before my N3 exam, and at that point, I was pretty much panicking because my reading skills were below average. I was all over the internet trying to find the “perfect book” to help me tackle this section. Although I had gathered a couple of resources for each section, it was nearly impossible to find one for reading. Now, I know I could have used the Shin Kanzen or Sou Matome series, but I did not have the time or patience to get through them. Besides, I live in India where Japanese resources are minimal and cripplingly overpriced. Considering this, I was fortunate enough to stumble across a book that seemed ideal for the last two months of cramming. While I consider myself to be a fairly consistent reader, there’s no denying that reading for an exam is very different from reading your favorite manga or novel. While it can be helpful, I believe that exams are about finding the right strategy and managing your time wisely than anything else, especially for something as intense as the JLPT."
    }), "\n", createVNode(_components.p, {
      children: "I decided to write this review for two major reasons: First, I could not find many reviews of this book online, which made me think twice before buying it. So, I thought writing one might be helpful for someone facing a similar dilemma. Second, I believe this book is worthy of a review because it not only helped me pass the reading section but also almost ace it. Of course, everyone has different study methods, but I’m here to share the approach that worked best for me!"
    }), "\n", createVNode(_components.h2, {
      id: "points-and-practice",
      children: "”Points and Practice”"
    }), "\n", createVNode(_components.p, {
      children: "I will provide a few snippets of information to give you a sense of the book before blindly purchasing it, as I did.\nThere are about 12 lessons covering a variety of themes, such as “written opinions,” “emails,” and “information retrieval.” The passages range from short to mid-sized to long. The objective is to help you gain the minimum necessary skills to understand the points and tackle the section with ease. The ‘points’ break down the sentences and provide a “shortcut” to make it easier and faster to locate the answer, even if you do not fully comprehend the passage. The Annex at the back includes the answers and the points listed in the same order as the lessons."
    }), "\n", createVNode(_components.p, {
      children: "Lessons one through five contain compilations of points that are fundamentally divided into “Connecting Phrases and Demonstratives, Omitting Subjects and Reasons”, whereas lessons six through twelve focus on discerning and applying those points. For example, the first two lessons are on “Connecting Phrases”, whose purpose is to make the flow of sentences easier and to help distinguish which part of the sentence requires more attention. For instance, “ところが、つまり、それで” and so on are said to be connecting phrases. When any of them appear in a sentence, it indicates that the sentences that come before or after them are more likely to be relevant. In the case of ところが, “後ろの方が大切。予想と違って驚いた、という気持ちを表すことが多い” (The section after “ところが” is more important—it often indicates feelings of surprise at the difference from expectations). Similarly, in the case of それで, “それでの前に『理由』が、後に『結果』が書かれている” (The reason is written before “それで” and the result is written after). In this manner, these points explain which part of the sentence needs more attention and which part does not."
    }), "\n", createVNode(_components.p, {
      children: "Another bonus I liked was that the grammar was much aligned with the explanations, and I felt like I understood certain grammar or vocabulary better when reading in that specific context. For example, “A。一方B” and “A。それに対し(て)B” both indicate a comparison between two contrasting things. When found in a passage, you immediately pay attention to the conflict in the sentence rather than lose track of what you need to look for. As you progress through each lesson, the themes and passages become a little more complex than the previous one, but more importantly, you are given the time to apply what you have learned in different contexts, similar to how they appear in the exam. It also includes a mock test at the end so you can time yourself and put your skills and knowledge to the test."
    }), "\n", createVNode(_components.p, {
      children: ["I think ", createVNode(_components.em, {
        children: "Points and Practice"
      }), " is perfect for those who are short on time or for people who just want to get used to Japanese sentence patterns designed specifically for the JLPT. I enjoyed this book, although I found the long passages hard to understand and difficult to tackle since there were very few of them compared to the short and mid-sized passages. That is a drawback for me in terms of its structure. In the end, I scored 54/60 on the exam, which I think is fairly high given the time constraints and my lack of reading skills. I may have gotten lucky, but this book helped me more than any other reading or mock test, so I will give it a solid 4.5 out of 5."]
    }), "\n", createVNode(_components.h2, {
      id: "pros-and-cons",
      children: "Pros and Cons"
    }), "\n", createVNode(_components.h3, {
      id: "pros",
      children: "Pros:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Concise"
      }), "\n", createVNode(_components.li, {
        children: "Easy-to-follow explanations"
      }), "\n", createVNode(_components.li, {
        children: "Perfect for Self-study"
      }), "\n", createVNode(_components.li, {
        children: "Includes a mock test"
      }), "\n", createVNode(_components.li, {
        children: "Designed for the JLPT"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "cons",
      children: "Cons:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Explanations could have been longer in some areas."
      }), "\n", createVNode(_components.li, {
        children: "There are not enough long passages; the focus is more on shorter passages."
      }), "\n", createVNode(_components.li, {
        children: "It is expensive, but not as much compared to other resources available in India."
      }), "\n"]
    }), "\n", createVNode($$Affiliate, {
      AffiliateImg: book,
      AffiliateAlt: "Points and Practice Book",
      AffiliateLink: "https://www.3anet.co.jp/np/en/books/3864/",
      AffiliateName: "Click Here"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/points-and-practice-book-review.mdx";
const file = "/home/francis/work/Bibilicious/src/content/blog/points-and-practice-book-review.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/francis/work/Bibilicious/src/content/blog/points-and-practice-book-review.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
