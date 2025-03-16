import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, r as renderTemplate } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { s as styles } from './index.508e1ffa_DdfKMPXF.mjs';

const defaultTranslations = {
  en: {
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    submitButton: "Subscribe",
    submittingButton: "Subscribing...",
    addNameButton: "Add your name",
    hideNameButton: "Hide name field",
    thankYouMessage: "Thank you for subscribing to the newsletter!",
    subscribeAnother: "Subscribe Another Email"
  },
  ja: {
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    submitButton: "登録する",
    submittingButton: "登録中...",
    addNameButton: "名前を追加",
    hideNameButton: "名前フィールドを隠す",
    thankYouMessage: "ニュースレターにご登録いただきありがとうございます！",
    subscribeAnother: "別のメールを登録"
  },
  ta: {
    nameLabel: "உங்கள் பெயர்",
    emailLabel: "உங்கள் மின்னஞ்சல்",
    submitButton: "பதிவு செய்க",
    submittingButton: "பதிவு செய்கிறது...",
    addNameButton: "உங்கள் பெயரைச் சேர்க்கவும்",
    hideNameButton: "பெயர் புலத்தை மறைக்கவும்",
    thankYouMessage: "செய்திமடலுக்கு பதிவு செய்தமைக்கு நன்றி!",
    subscribeAnother: "மற்றொரு மின்னஞ்சலைப் பதிவு செய்யவும்"
  }
};
const GoogleNewsletterForm = ({
  formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScBHZ1AM9zGWiHoTuzhyf5cr9TdvG1LcAGRuDrDTewg6Z7U9A/formResponse",
  formFields = {
    name: "entry.1513054681",
    email: "entry.1086419376"
  },
  language = "en",
  translations
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const t = translations || defaultTranslations[language];
  const defaultT = defaultTranslations[language];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      setIsSubmitted(true);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: styles.formContainer, children: !isSubmitted ? /* @__PURE__ */ jsxs(
    "form",
    {
      action: formUrl,
      method: "post",
      target: "_blank",
      id: "google-newsletter-form",
      className: styles.form,
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles.inputGroup, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: styles.label, children: t.nameLabel || defaultT.nameLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "name",
              name: formFields.name,
              placeholder: t.nameLabel || defaultT.nameLabel,
              value: name,
              onChange: (e) => setName(e.target.value),
              className: styles.input,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.inputGroup, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: styles.label, children: t.emailLabel || defaultT.emailLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: formFields.email,
              placeholder: t.emailLabel || defaultT.emailLabel,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: styles.input,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: styles.button,
            disabled: isSubmitting,
            children: isSubmitting ? defaultT.submittingButton : t.submitButton || defaultT.submitButton
          }
        )
      ]
    }
  ) : /* @__PURE__ */ jsxs("div", { className: styles.successMessage, children: [
    /* @__PURE__ */ jsx("p", { children: defaultT.thankYouMessage }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsSubmitted(false),
        className: styles.resetButton,
        children: defaultT.subscribeAnother
      }
    )
  ] }) });
};

const $$Astro = createAstro("https://bibilicious.blog");
const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const { language = "en" } = Astro2.props;
  const translations = {
    en: {
      title: "STAY IN THE LOOP",
      description: "Enjoy reading my blogs? Leave your email behind and I will ping you every time I post some new content.",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      submitButton: "Subscribe"
    },
    ja: {
      title: "\u6700\u65B0\u60C5\u5831\u3092\u304A\u5C4A\u3051",
      description: "\u30D6\u30ED\u30B0\u3092\u697D\u3057\u3093\u3067\u3044\u307E\u3059\u304B\uFF1F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u6B8B\u3057\u3066\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u65B0\u3057\u3044\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u6295\u7A3F\u3059\u308B\u305F\u3073\u306B\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002",
      nameLabel: "\u304A\u540D\u524D",
      emailLabel: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      submitButton: "\u767B\u9332\u3059\u308B"
    },
    ta: {
      title: "\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B87\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      description: "\u0B8E\u0BA9\u0BA4\u0BC1 \u0BB5\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0BA4\u0BC8 \u0BB0\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BBE? \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BC8 \u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC1\u0B9A\u0BCD \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD, \u0BA8\u0BBE\u0BA9\u0BCD \u0BAA\u0BC1\u0BA4\u0BBF\u0BAF \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BC8 \u0B87\u0B9F\u0BC1\u0B95\u0BC8\u0BAF\u0BBF\u0B9F\u0BC1\u0BAE\u0BCD \u0B92\u0BB5\u0BCD\u0BB5\u0BCA\u0BB0\u0BC1 \u0BAE\u0BC1\u0BB1\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BA4\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC7\u0BA9\u0BCD.",
      nameLabel: "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BCD",
      emailLabel: "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD",
      submitButton: "\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0B95"
    }
  };
  const t = translations[language];
  return renderTemplate`${maybeRenderHead()}<section class="newsletter box" data-astro-cid-x26uyuqm> <h2 data-astro-cid-x26uyuqm>${t.title}</h2> <p data-astro-cid-x26uyuqm>${t.description}</p> <div class="newsletter-form" data-astro-cid-x26uyuqm> ${renderComponent($$result, "GoogleNewsletterForm", GoogleNewsletterForm, { "client:load": true, "language": language, "translations": {
    nameLabel: t.nameLabel,
    emailLabel: t.emailLabel,
    submitButton: t.submitButton
  }, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/GoogleForm", "client:component-export": "GoogleNewsletterForm", "data-astro-cid-x26uyuqm": true })} </div> </section> `;
}, "/home/francis/work/Bibilicious/src/components/blog/Newsletter.astro", void 0);

export { $$Newsletter as $ };
