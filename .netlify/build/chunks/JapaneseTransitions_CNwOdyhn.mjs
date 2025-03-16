import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
/* empty css                          */
import { a as createComponent, r as renderTemplate } from './astro/server_BMjflfJL.mjs';
import 'kleur/colors';
import 'clsx';

function Header({ currentLanguage = "en" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [pathWithoutLang, setPathWithoutLang] = useState("");
  const [languageUrls, setLanguageUrls] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const languageNames = {
    en: "English",
    ja: "日本語",
    ta: "தமிழ்"
  };
  const donateText = {
    en: "Donate",
    ja: "寄付する",
    ta: "நன்கொடை"
  };
  useEffect(() => {
    setIsClient(true);
    const path = window.location.pathname;
    setCurrentPath(path);
    const pathNoLang = path.replace(/^\/(en|ja|ta)\//, "/");
    setPathWithoutLang(pathNoLang);
    const isBlogPostPage = pathNoLang.match(/^\/blog\/[^/]+\/?$/);
    setLanguageUrls({
      en: isBlogPostPage ? "/blog" : pathNoLang,
      ja: isBlogPostPage ? "/ja/blog" : `/ja${pathNoLang}`,
      ta: isBlogPostPage ? "/ta/blog" : `/ta${pathNoLang}`
    });
  }, []);
  const isBlogPage = isClient ? pathWithoutLang.startsWith("/blog") : false;
  const isContactPage = isClient ? pathWithoutLang.startsWith("/contact") : false;
  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);
  useEffect(() => {
    if (!isClient) return;
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest("nav") && !e.target.closest(".mobile-menu-toggle")) {
        setIsMenuOpen(false);
      }
      if (isLangDropdownOpen && langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isLangDropdownOpen, isClient]);
  useEffect(() => {
    if (!isClient) return;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isClient]);
  const toggleLangDropdown = (e) => {
    e.stopPropagation();
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };
  if (!isClient) {
    return /* @__PURE__ */ jsx("header", { className: `${currentLanguage === "ja" ? "japanese-theme" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "header-container", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: currentLanguage === "en" ? "/" : `/${currentLanguage}/`,
          className: "logo",
          style: { color: "#000", textDecoration: "none" },
          children: currentLanguage === "ja" ? "ビビリシャス" : "Bibilicious"
        }
      ),
      /* @__PURE__ */ jsxs("nav", { children: [
        /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: currentLanguage === "en" ? "/blog" : `/${currentLanguage}/blog`,
              children: currentLanguage === "ja" ? "ブログ" : "Blog"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: currentLanguage === "en" ? "/contact" : `/${currentLanguage}/contact`,
              children: currentLanguage === "ja" ? "お問い合わせ" : "Contact"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "header-right", children: [
          /* @__PURE__ */ jsx("div", { className: "language-dropdown", ref: langDropdownRef, children: /* @__PURE__ */ jsx("button", { className: "language-current", children: /* @__PURE__ */ jsx("span", { children: languageNames[currentLanguage] }) }) }),
          /* @__PURE__ */ jsx("div", { className: "donate-button", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.buymeacoffee.com/bibilicious",
              target: "_blank",
              className: "bmac-button",
              children: /* @__PURE__ */ jsx("div", { className: "bmac-inner", children: /* @__PURE__ */ jsx("span", { className: "text", children: donateText[currentLanguage] }) })
            }
          ) })
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx("header", { className: `${scrolled ? "scrolled" : ""} ${currentLanguage === "ja" ? "japanese-theme" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "header-container", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: currentLanguage === "en" ? "/" : `/${currentLanguage}/`,
        className: "logo",
        style: { color: "#000", textDecoration: "none" },
        children: currentLanguage === "ja" ? "ビビリシャス" : "Bibilicious"
      }
    ),
    /* @__PURE__ */ jsxs("nav", { className: isMenuOpen ? "open" : "", children: [
      /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: currentLanguage === "en" ? "/blog" : `/${currentLanguage}/blog`,
            className: isBlogPage ? "active" : "",
            onClick: () => setIsMenuOpen(false),
            children: currentLanguage === "ja" ? "ブログ" : "Blog"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: currentLanguage === "en" ? "/contact" : `/${currentLanguage}/contact`,
            className: isContactPage ? "active" : "",
            onClick: () => setIsMenuOpen(false),
            children: currentLanguage === "ja" ? "お問い合わせ" : "Contact"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "header-right", children: [
        /* @__PURE__ */ jsxs("div", { className: "language-dropdown", ref: langDropdownRef, children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "language-current",
              onClick: toggleLangDropdown,
              children: [
                /* @__PURE__ */ jsx("span", { children: languageNames[currentLanguage] }),
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: `language-options ${isLangDropdownOpen ? "show" : ""}`, children: Object.entries(languageNames).map(([code, name]) => /* @__PURE__ */ jsx(
            "a",
            {
              href: languageUrls[code],
              className: `lang-option ${currentLanguage === code ? "active" : ""}`,
              hrefLang: code,
              lang: code,
              onClick: () => {
                setIsLangDropdownOpen(false);
                setIsMenuOpen(false);
              },
              children: name
            },
            code
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "donate-button", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.buymeacoffee.com/bibilicious",
            target: "_blank",
            className: "bmac-button",
            onClick: () => setIsMenuOpen(false),
            children: /* @__PURE__ */ jsx("div", { className: "bmac-inner", children: /* @__PURE__ */ jsx("span", { className: "text", children: donateText[currentLanguage] }) })
          }
        ) })
      ] }),
      isMenuOpen && /* @__PURE__ */ jsx("div", { className: "mobile-menu-background", children: /* @__PURE__ */ jsx("div", { className: "sakura-container", children: [...Array(10)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "sakura-petal", style: {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 5 + 10}s`
      } }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: `mobile-menu-toggle ${isMenuOpen ? "open" : ""}`,
        "aria-label": "Toggle menu",
        onClick: () => setIsMenuOpen(!isMenuOpen),
        children: [
          /* @__PURE__ */ jsx("span", { className: "bar" }),
          /* @__PURE__ */ jsx("span", { className: "bar" }),
          /* @__PURE__ */ jsx("span", { className: "bar" })
        ]
      }
    )
  ] }) });
}

const $$JapaneseTheme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- This component doesn't render anything visible, it just imports the CSS --><!-- It can be included in the main layout to apply the Japanese theme site-wide -->`;
}, "/home/francis/work/Bibilicious/src/components/theme/JapaneseTheme.astro", void 0);

const wipeRight = (options = {}) => ({
  forwards: {
    old: { name: "jp-wipe-out-right", ...options },
    new: { name: "jp-wipe-in-right", ...options }
  },
  backwards: {
    old: { name: "jp-wipe-out-left", ...options },
    new: { name: "jp-wipe-in-left", ...options }
  }
});
const dissolve = (options = {}) => ({
  forwards: {
    old: { name: "jp-dissolve-out", ...options },
    new: { name: "jp-dissolve-in", ...options }
  },
  backwards: {
    old: { name: "jp-dissolve-out", ...options },
    new: { name: "jp-dissolve-in", ...options }
  }
});
const sakuraFade = (options = {}) => ({
  forwards: {
    old: { name: "jp-sakura-out", ...options },
    new: { name: "jp-sakura-in", ...options }
  },
  backwards: {
    old: { name: "jp-sakura-out", ...options },
    new: { name: "jp-sakura-in", ...options }
  }
});
const inkDrop = (options = {}) => ({
  forwards: {
    old: { name: "jp-ink-out", ...options },
    new: { name: "jp-ink-in", ...options }
  },
  backwards: {
    old: { name: "jp-ink-out", ...options },
    new: { name: "jp-ink-in", ...options }
  }
});
const paperSlide = (options = {}) => ({
  forwards: {
    old: { name: "jp-paper-slide-out", ...options },
    new: { name: "jp-paper-slide-in", ...options }
  },
  backwards: {
    old: { name: "jp-paper-slide-out-reverse", ...options },
    new: { name: "jp-paper-slide-in-reverse", ...options }
  }
});

export { $$JapaneseTheme as $, Header as H, dissolve as d, inkDrop as i, paperSlide as p, sakuraFade as s, wipeRight as w };
