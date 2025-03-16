import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
/* empty css                          */

function Coffee({ language = "en" }) {
  const sakuraRef = useRef(null);
  const translations = {
    en: {
      title: "Support The Blog!!",
      description: "Love what you're reading on my blog? You can be a part of the fun by buying me a coffee! Your support keeps the good vibes flowing and the content coming. Whether it's a one-time caffeine boost or a recurring sip, every drop counts – thanks a latte for being awesome!"
    },
    ja: {
      title: "ブログをサポートする",
      description: "私のブログの内容を気に入っていただけましたか？コーヒーを買って、この楽しさの一部になりませんか！あなたのサポートが良い雰囲気を保ち、コンテンツを続けるための力になります。一度きりのカフェイン補給でも、定期的な一口でも、すべてが大切です - 素晴らしいサポートに感謝します！"
    },
    ta: {
      title: "வலைப்பதிவை ஆதரிக்கவும்!!",
      description: "என் வலைப்பதிவில் நீங்கள் படிப்பதை விரும்புகிறீர்களா? எனக்கு ஒரு காபி வாங்குவதன் மூலம் நீங்கள் இந்த மகிழ்ச்சியின் ஒரு பகுதியாக இருக்கலாம்! உங்கள் ஆதரவு நல்ல அதிர்வலைகளை பாய்ச்சி, உள்ளடக்கத்தை தொடர்ந்து வழங்க உதவுகிறது. ஒரு முறை காபி அல்லது தொடர்ந்து ஆதரவு, ஒவ்வொரு துளியும் முக்கியம் - அற்புதமாக இருப்பதற்கு மிக்க நன்றி!"
    }
  };
  const t = translations[language] || translations.en;
  const coffeeLink = "https://www.buymeacoffee.com/bibilicious";
  useEffect(() => {
    if (!sakuraRef.current) return;
    const createSakuraPetal = () => {
      if (!sakuraRef.current) return;
      const petal = document.createElement("div");
      petal.classList.add("sakura-petal");
      const size = Math.random() * 10 + 10;
      const left = Math.random() * 100;
      const animDuration = Math.random() * 6 + 8;
      const delay = Math.random() * 5;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = `${left}%`;
      petal.style.animationDuration = `${animDuration}s`;
      petal.style.animationDelay = `${delay}s`;
      sakuraRef.current.appendChild(petal);
      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, (animDuration + delay) * 1e3);
    };
    for (let i = 0; i < 15; i++) {
      createSakuraPetal();
    }
    const interval = setInterval(createSakuraPetal, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: `coffee ${language === "ja" ? "japanese-theme" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "sakura-container", ref: sakuraRef }),
    /* @__PURE__ */ jsxs("div", { className: "wrapper", children: [
      /* @__PURE__ */ jsx("div", { className: "left", children: /* @__PURE__ */ jsx("div", { className: "image-container" }) }),
      /* @__PURE__ */ jsxs("div", { className: "right", children: [
        /* @__PURE__ */ jsx("h2", { className: "title", children: t.title }),
        /* @__PURE__ */ jsx("p", { children: t.description }),
        /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx("a", { href: coffeeLink, target: "_blank", className: "coffee-button", children: /* @__PURE__ */ jsx("img", { src: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png", alt: "Buy Me A Coffee" }) }) })
      ] })
    ] })
  ] });
}

export { Coffee as C };
