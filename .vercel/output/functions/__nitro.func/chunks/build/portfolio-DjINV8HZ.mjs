import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { N as NavBar } from './NavBar-CDQFSusC.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-DQehLb4B.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative" }, _attrs))} data-v-e70d30d5><div class="absolute inset-0 opacity-5" data-v-e70d30d5><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)", "background-size": "40px 40px" })}" data-v-e70d30d5></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-e70d30d5><!--[-->`);
      ssrRenderList(15, (i) => {
        _push(`<div class="absolute w-0.5 h-0.5 bg-green-400/20 rounded-full animate-pulse" style="${ssrRenderStyle({
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animationDelay: Math.random() * 3 + "s",
          animationDuration: Math.random() * 2 + 1 + "s"
        })}" data-v-e70d30d5></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<div class="container mx-auto px-6 py-16 relative z-10" data-v-e70d30d5><div class="max-w-4xl mx-auto" data-v-e70d30d5><div class="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden" data-v-e70d30d5><div class="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-green-400/20" data-v-e70d30d5><div class="flex items-center space-x-2" data-v-e70d30d5><div class="w-3 h-3 bg-red-500 rounded-full" data-v-e70d30d5></div><div class="w-3 h-3 bg-yellow-500 rounded-full" data-v-e70d30d5></div><div class="w-3 h-3 bg-green-500 rounded-full" data-v-e70d30d5></div></div><div class="text-gray-400 text-sm" data-v-e70d30d5>portfolio.exe</div></div><div class="p-8 space-y-6" data-v-e70d30d5><div class="text-green-400" data-v-e70d30d5><span class="text-gray-500" data-v-e70d30d5>golib@portfolio:~$</span> ls -la projects/ </div><div class="text-gray-300 space-y-2" data-v-e70d30d5><div data-v-e70d30d5>drwxr-xr-x 2 golib golib 4096 Dec 2024 .</div><div data-v-e70d30d5>drwxr-xr-x 3 golib golib 4096 Dec 2024 ..</div><div class="text-green-400" data-v-e70d30d5>-rw-r--r-- 1 golib golib 0 Dec 2024 amazing_project_1.md</div><div class="text-green-400" data-v-e70d30d5>-rw-r--r-- 1 golib golib 0 Dec 2024 revolutionary_app.md</div><div class="text-green-400" data-v-e70d30d5>-rw-r--r-- 1 golib golib 0 Dec 2024 secret_sauce.md</div></div><div class="text-green-400" data-v-e70d30d5><span class="text-gray-500" data-v-e70d30d5>golib@portfolio:~$</span> cat coming_soon.txt </div><div class="bg-gray-900/50 p-6 rounded border border-green-400/20" data-v-e70d30d5><div class="text-center space-y-4" data-v-e70d30d5><div class="text-4xl lg:text-6xl font-bold text-green-400 mb-4" data-v-e70d30d5> PORTFOLIO </div><div class="text-2xl text-blue-400 mb-6" data-v-e70d30d5> [UNDER CONSTRUCTION] </div><div class="text-gray-300 space-y-2" data-v-e70d30d5><p data-v-e70d30d5>\u{1F680} Building something extraordinary...</p><p data-v-e70d30d5>\u26A1 Compiling dreams into reality</p><p data-v-e70d30d5>\u{1F52E} ETA: Soon\u2122</p></div><div class="mt-8" data-v-e70d30d5><div class="inline-block px-4 py-2 border border-green-400/50 rounded text-green-400 text-sm" data-v-e70d30d5> Status: In Development </div></div></div></div><div class="text-green-400" data-v-e70d30d5><span class="text-gray-500" data-v-e70d30d5>golib@portfolio:~$</span><span class="animate-pulse" data-v-e70d30d5>|</span></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e70d30d5"]]);

export { portfolio as default };
//# sourceMappingURL=portfolio-DjINV8HZ.mjs.map
