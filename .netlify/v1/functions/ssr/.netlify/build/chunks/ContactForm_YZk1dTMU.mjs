import { c as createAstro, a as createComponent, b as renderComponent, d as addAttribute, r as renderTemplate, m as maybeRenderHead } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import { b as $$ClientRouter } from './SchemaOrg_CCClHFcA.mjs';
/* empty css                           */
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { s as styles } from './index.b37c41cc_OcpvNyUD.mjs';

const GoogleForm = ({
  formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSePtz0d1F_47cCuYk_R1EedkHT9SLTn-0ZOKONPwSTFLKPTuA/formResponse",
  formFields = {
    name: "entry.1192705275",
    email: "entry.844919657",
    language: "entry.514319054",
    docType: "entry.940004422",
    projectDetails: "entry.1337969826"
  }
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      form.reset();
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
      id: "google-form",
      className: styles.form,
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: formFields.name,
            placeholder: "Enter your full name",
            className: styles.input,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: formFields.email,
            placeholder: "Enter your email address",
            className: styles.input,
            required: true
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "languages",
            name: formFields.language,
            className: styles.select,
            required: true,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Select a language" }),
              /* @__PURE__ */ jsx("option", { value: "english", children: "English" }),
              /* @__PURE__ */ jsx("option", { value: "japanese", children: "Japanese" }),
              /* @__PURE__ */ jsx("option", { value: "tamil", children: "Tamil" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "docType",
            name: formFields.docType,
            className: styles.select,
            required: true,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Select document type" }),
              /* @__PURE__ */ jsx("option", { value: "article", children: "Article" }),
              /* @__PURE__ */ jsx("option", { value: "blog", children: "Blog" }),
              /* @__PURE__ */ jsx("option", { value: "email", children: "Email" }),
              /* @__PURE__ */ jsx("option", { value: "socialMedia", children: "Social Media Post" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "projectDetails",
            name: formFields.projectDetails,
            rows: 4,
            cols: 50,
            placeholder: "Provide details about your project (max 200 words)",
            className: styles.textarea,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: styles.button,
            disabled: isSubmitting,
            children: isSubmitting ? "Submitting..." : "Submit"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ jsxs("div", { className: styles.successMessage, children: [
    /* @__PURE__ */ jsx("p", { children: "Thank you for your submission! I'll get back to you soon." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsSubmitted(false),
        className: styles.resetButton,
        children: "Submit Another Request"
      }
    )
  ] }) });
};

const $$Astro = createAstro("https://bibilicious.blog");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg", language = "en" } = Astro2.props;
  const alternateUrls = {
    en: new URL(Astro2.url.pathname.replace(/^\/(ja|ta)\//, "/"), Astro2.site),
    ja: new URL(Astro2.url.pathname.replace(/^\/(en|ta)\//, "/ja/"), Astro2.site),
    ta: new URL(Astro2.url.pathname.replace(/^\/(en|ja)\//, "/ta/"), Astro2.site)
  };
  const alternates = Object.entries(alternateUrls).filter(([lang]) => lang !== language).map(([lang, url]) => ({ lang, url }));
  return renderTemplate`${renderComponent($$result, "ClientRouter", $$ClientRouter, {})} <link rel="sitemap" href="/sitemap-index.xml"> <!-- Global Metadata --> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="icon" type="image/svg+xml" href="/favicon.svg"> <meta name="generator"${addAttribute(Astro2.generator, "content")}> <!-- Font preloads --> <!-- Preconnect to fonts.gstatic.com for faster font loading --> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <!-- Preload the Berkshire Swash font to ensure faster font loading --> <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"> <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter&display=swap"> <!-- Stylesheet link for the Berkshire Swash font --> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap"> <!-- Canonical URL --> <link rel="canonical"${addAttribute(canonicalURL, "href")}> <!-- Alternate language URLs --> ${alternates.map(({ lang, url }) => renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(url, "href")}>`)} <link rel="alternate" hreflang="x-default"${addAttribute(alternateUrls.en, "href")}> <!-- Primary Meta Tags --> <title>${title}
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
}, "/home/francis/work/Bibilicious/src/components/common/BaseHead.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contact-section" data-astro-cid-piibirj5> <div class="contact-container" data-astro-cid-piibirj5> <div class="contact-text" data-astro-cid-piibirj5> <h1 data-astro-cid-piibirj5>Get in Touch</h1> <p data-astro-cid-piibirj5>
I'm pumped that you're thinking about diving into the awesome world of translations! 
        Whether you've got a quirky document, a cool article, or just something super random 
        that needs translating between Japanese, Tamil, and English, I'm here to make it happen.
</p> </div> <div class="contact-form" data-astro-cid-piibirj5> ${renderComponent($$result, "GoogleForm", GoogleForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/francis/work/Bibilicious/src/components/GoogleForm/GoogleForm", "client:component-export": "default", "data-astro-cid-piibirj5": true })} </div> </div> </section> `;
}, "/home/francis/work/Bibilicious/src/components/form/ContactForm.astro", void 0);

export { $$ContactForm as $, $$BaseHead as a };
