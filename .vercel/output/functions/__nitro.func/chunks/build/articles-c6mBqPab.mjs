import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { N as NavBar } from './NavBar-DIu9-un-.mjs';
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
  __name: "articles",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative" }, _attrs))} data-v-373e54c6><div class="absolute inset-0 opacity-5" data-v-373e54c6><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)", "background-size": "40px 40px" })}" data-v-373e54c6></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-373e54c6><!--[-->`);
      ssrRenderList(10, (i) => {
        _push(`<div class="absolute text-green-400/20 text-xs animate-pulse font-mono" style="${ssrRenderStyle({
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animationDelay: Math.random() * 5 + "s",
          animationDuration: Math.random() * 3 + 2 + "s"
        })}" data-v-373e54c6>${ssrInterpolate(["console.log()", "function()", "const blog =", "return ideas", "async/await"][Math.floor(Math.random() * 5)])}</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<div class="container mx-auto px-6 py-16 relative z-10" data-v-373e54c6><div class="max-w-4xl mx-auto" data-v-373e54c6><div class="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden" data-v-373e54c6><div class="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-green-400/20" data-v-373e54c6><div class="flex items-center space-x-4" data-v-373e54c6><div class="flex space-x-2" data-v-373e54c6><div class="w-3 h-3 bg-red-500 rounded-full" data-v-373e54c6></div><div class="w-3 h-3 bg-yellow-500 rounded-full" data-v-373e54c6></div><div class="w-3 h-3 bg-green-500 rounded-full" data-v-373e54c6></div></div><div class="text-gray-400 text-sm" data-v-373e54c6>articles.js</div></div><div class="text-gray-500 text-xs" data-v-373e54c6>UTF-8 \u2022 JavaScript</div></div><div class="flex" data-v-373e54c6><div class="bg-gray-900/30 px-4 py-6 text-gray-600 text-sm select-none" data-v-373e54c6><div data-v-373e54c6>1</div><div data-v-373e54c6>2</div><div data-v-373e54c6>3</div><div data-v-373e54c6>4</div><div data-v-373e54c6>5</div><div data-v-373e54c6>6</div><div data-v-373e54c6>7</div><div data-v-373e54c6>8</div><div data-v-373e54c6>9</div><div data-v-373e54c6>10</div><div data-v-373e54c6>11</div><div data-v-373e54c6>12</div><div data-v-373e54c6>13</div><div data-v-373e54c6>14</div><div data-v-373e54c6>15</div></div><div class="flex-1 p-6 space-y-1 text-sm" data-v-373e54c6><div data-v-373e54c6><span class="text-purple-400" data-v-373e54c6>const</span> <span class="text-blue-400" data-v-373e54c6>articles</span> <span class="text-white" data-v-373e54c6>=</span> <span class="text-yellow-400" data-v-373e54c6>{</span></div><div class="ml-4" data-v-373e54c6><span class="text-green-300" data-v-373e54c6>status</span><span class="text-white" data-v-373e54c6>:</span> <span class="text-red-400" data-v-373e54c6>&quot;coming_soon&quot;</span><span class="text-white" data-v-373e54c6>,</span></div><div class="ml-4" data-v-373e54c6><span class="text-green-300" data-v-373e54c6>author</span><span class="text-white" data-v-373e54c6>:</span> <span class="text-red-400" data-v-373e54c6>&quot;G&#39;olib Abdullayev&quot;</span><span class="text-white" data-v-373e54c6>,</span></div><div class="ml-4" data-v-373e54c6><span class="text-green-300" data-v-373e54c6>topics</span><span class="text-white" data-v-373e54c6>:</span> <span class="text-yellow-400" data-v-373e54c6>[</span></div><div class="ml-8" data-v-373e54c6><span class="text-red-400" data-v-373e54c6>&quot;Web Development&quot;</span><span class="text-white" data-v-373e54c6>,</span></div><div class="ml-8" data-v-373e54c6><span class="text-red-400" data-v-373e54c6>&quot;JavaScript Magic&quot;</span><span class="text-white" data-v-373e54c6>,</span></div><div class="ml-8" data-v-373e54c6><span class="text-red-400" data-v-373e54c6>&quot;Life as a Developer&quot;</span><span class="text-white" data-v-373e54c6>,</span></div><div class="ml-8" data-v-373e54c6><span class="text-red-400" data-v-373e54c6>&quot;Tech Philosophy&quot;</span></div><div class="ml-4" data-v-373e54c6><span class="text-yellow-400" data-v-373e54c6>]</span><span class="text-white" data-v-373e54c6>,</span></div><div class="ml-4" data-v-373e54c6><span class="text-green-300" data-v-373e54c6>message</span><span class="text-white" data-v-373e54c6>:</span> <span class="text-red-400" data-v-373e54c6>&quot;Currently brewing some amazing content...&quot;</span><span class="text-white" data-v-373e54c6>,</span></div><div class="ml-4" data-v-373e54c6><span class="text-green-300" data-v-373e54c6>eta</span><span class="text-white" data-v-373e54c6>:</span> <span class="text-red-400" data-v-373e54c6>&quot;Soon\u2122&quot;</span></div><div data-v-373e54c6><span class="text-yellow-400" data-v-373e54c6>}</span></div><div data-v-373e54c6></div><div data-v-373e54c6><span class="text-gray-500" data-v-373e54c6>// TODO: Write mind-blowing articles</span></div><div data-v-373e54c6><span class="text-purple-400" data-v-373e54c6>console</span><span class="text-white" data-v-373e54c6>.</span><span class="text-blue-400" data-v-373e54c6>log</span><span class="text-white" data-v-373e54c6>(</span><span class="text-red-400" data-v-373e54c6>&quot;Stay tuned! \u{1F680}&quot;</span><span class="text-white" data-v-373e54c6>)</span></div></div></div><div class="bg-gray-900/50 px-4 py-2 border-t border-green-400/20 flex justify-between text-xs text-gray-400" data-v-373e54c6><div data-v-373e54c6>\u{1F4DD} Writing mode: ON</div><div data-v-373e54c6>Ideas: \u221E | Words: Loading...</div></div></div><div class="mt-8 text-center" data-v-373e54c6><div class="text-6xl mb-4" data-v-373e54c6>\u{1F4DA}</div><div class="text-2xl text-green-400 mb-2" data-v-373e54c6>Articles &amp; Insights</div><div class="text-gray-400" data-v-373e54c6>Where code meets creativity</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const articles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-373e54c6"]]);

export { articles as default };
//# sourceMappingURL=articles-c6mBqPab.mjs.map
