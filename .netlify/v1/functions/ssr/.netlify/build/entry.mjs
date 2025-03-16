import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CFdOAKI_.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/ja/blog.astro.mjs');
const _page5 = () => import('./pages/ja/contact.astro.mjs');
const _page6 = () => import('./pages/ja/rss.xml.astro.mjs');
const _page7 = () => import('./pages/ja.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/ta/blog.astro.mjs');
const _page11 = () => import('./pages/ta/contact.astro.mjs');
const _page12 = () => import('./pages/ta/rss.xml.astro.mjs');
const _page13 = () => import('./pages/ta.astro.mjs');
const _page14 = () => import('./pages/_lang_/blog/_---slug_.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/ja/blog/index.astro", _page4],
    ["src/pages/ja/contact.astro", _page5],
    ["src/pages/ja/rss.xml.js", _page6],
    ["src/pages/ja/index.astro", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/ta/blog/index.astro", _page10],
    ["src/pages/ta/contact.astro", _page11],
    ["src/pages/ta/rss.xml.js", _page12],
    ["src/pages/ta/index.astro", _page13],
    ["src/pages/[lang]/blog/[...slug].astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1ae7640c-fc12-4ae1-ae1c-a9db08334067"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
