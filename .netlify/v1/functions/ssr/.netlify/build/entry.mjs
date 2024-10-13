import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_lkG1735G.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/appreciate-ya.astro.mjs');
const _page2 = () => import('./pages/cti.astro.mjs');
const _page3 = () => import('./pages/dpm.astro.mjs');
const _page4 = () => import('./pages/hikitia.astro.mjs');
const _page5 = () => import('./pages/mixtape-me.astro.mjs');
const _page6 = () => import('./pages/nz-locum.astro.mjs');
const _page7 = () => import('./pages/what-to-eat.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/appreciate-ya.astro", _page1],
    ["src/pages/cti.astro", _page2],
    ["src/pages/dpm.astro", _page3],
    ["src/pages/hikitia.astro", _page4],
    ["src/pages/mixtape-me.astro", _page5],
    ["src/pages/nz-locum.astro", _page6],
    ["src/pages/what-to-eat.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "ceabc7dc-4e57-48bb-b98b-78d60fd68fef"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
