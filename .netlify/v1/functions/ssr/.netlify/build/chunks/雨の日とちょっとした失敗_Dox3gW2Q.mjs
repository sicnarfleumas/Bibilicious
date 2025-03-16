import { p as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BMjflfJL.mjs';
import 'clsx';

const frontmatter = {
  "title": "雨の日とちょっとした失敗",
  "description": "雨の日、風邪を引いてしまったという作者。喉の痛み、咳、熱はないものの、頭が重く、体調は優れません。しかし、そんな中でも「ちびまる子ちゃん」を見たり、Siriとしりとりをしたりして、楽しい時間を過ごします。そんな中、ホットチョコレートを作ろうとしたのですが、うっかり火にかけたまま忘れてしまい、焦がしてしまうというちょっとした失敗談も。風邪を引いている時は、体調管理に気をつけましょう！",
  "pubDate": "May 5 2024",
  "category": "Coming Soon",
  "heroImage": "/blog-placeholder-1.jpg",
  "language": "ja"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode("div", {
    class: "jp",
    lang: "jp",
    children: [createVNode(_components.p, {
      children: "今日は突然雨が降り始めて、気温が下がりました。この時期が来るのは待ち遠しいですが、風邪をひきやすいのが困ります。一昨日から風邪をひいてしまい、体調がすごく悪くなりました。熱はないけれど、頭が重くて、喉も痛いです。でも、少し気分が良くなったので、ブログを書いてみることにしました。今日は、私がうっかりやってしまったことについて話しますね。"
    }), createVNode(_components.p, {
      children: "昨日までずっと喉が痛かったですが、咳がひどくなって、昨夜は母に病院に連れて行ってもらいました。お母さんが薬を買ってきてくれたおかげで、少し楽になりました。でも、薬のせいかずっと眠くて、水分を取る以外はほとんど何もしていません。風邪をひくといつもこんな感じです。寝ていない時は、「ちびまる子ちゃん」を見たり、暖かいお茶を飲んだりしています。「ちびまる子ちゃん」はとても面白くて、風邪の辛さを忘れさせてくれます。また、iPhoneでSiriとしりとりをすることも発見しました。暇な時に「ヘイSiri、今何してるの？」と話しかけると、しりとりを始めてくれます。これがすごく楽しいです。"
    }), createVNode(_components.p, {
      children: "しかし、今日はちょっとした失敗をしてしまいました。風邪で気分が悪かったので、ホットチョコレートを作ろうとしました。オンラインで注文したホットチョコレートとブラウニーが届いたのですが、雨で冷めてしまっていたので、ストーブで温め直しました。でも、写真を撮ろうとしている間にホットチョコレートを火にかけたまま忘れてしまい、焦げてしまいました。結局、その焦げた匂いが強くて、飲むことができませんでした。自分のうっかりさに笑ってしまいました。その後、悲しそうにご飯を食べて、早く寝ました。"
    }), createVNode(_components.p, {
      children: "この経験から学んだことは、ホットチョコレートを温める時は気をつけないといけないということ、そして、風邪を引くのは本当に大変だということです。皆さんも、体調を崩さないように、暖かくして過ごしてくださいね。"
    }), createVNode(_components.p, {
      children: "みなさんは私の悲し話から何か習うといいです。風邪をひかないように暖かいものを飲んで体をお大事にしてくださいね。"
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
const url = "src/content/blog/%E9%9B%A8%E3%81%AE%E6%97%A5%E3%81%A8%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E3%81%97%E3%81%9F%E5%A4%B1%E6%95%97.mdx";
const file = "/home/francis/work/Bibilicious/src/content/blog/雨の日とちょっとした失敗.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/francis/work/Bibilicious/src/content/blog/雨の日とちょっとした失敗.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
