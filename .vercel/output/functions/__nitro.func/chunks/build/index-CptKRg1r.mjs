import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("001.DksmGqj2.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isTyping = ref(false);
    const currentText = ref("");
    const cursorVisible = ref(true);
    const socialLinks = [
      { name: "github", url: "https://github.com/abdullayevf", icon: "\u{1F419}" },
      { name: "linkedin", url: "https://www.linkedin.com/in/abdulllayevv/", icon: "\u{1F4BC}" },
      { name: "telegram", url: "https://t.me/golibabdullayev", icon: "\u{1F4F1}" },
      { name: "instagram", url: "https://www.instagram.com/abdullayevf_golib/", icon: "\u{1F4F8}" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative" }, _attrs))} data-v-a7bdf868><div class="absolute inset-0 opacity-5" data-v-a7bdf868><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)", "background-size": "40px 40px" })}" data-v-a7bdf868></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-a7bdf868><!--[-->`);
      ssrRenderList(20, (i) => {
        _push(`<div class="absolute w-0.5 h-0.5 bg-green-400/20 rounded-full" style="${ssrRenderStyle({
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animationDelay: Math.random() * 4 + "s",
          animationDuration: Math.random() * 3 + 2 + "s"
        })}" data-v-a7bdf868></div>`);
      });
      _push(`<!--]--></div><div class="relative z-10 container mx-auto px-6 py-12" data-v-a7bdf868><div class="flex items-center space-x-2 mb-12 opacity-60" data-v-a7bdf868><div class="w-2 h-2 bg-red-500 rounded-full" data-v-a7bdf868></div><div class="w-2 h-2 bg-yellow-500 rounded-full" data-v-a7bdf868></div><div class="w-2 h-2 bg-green-500 rounded-full" data-v-a7bdf868></div><span class="ml-3 text-xs text-gray-500" data-v-a7bdf868>golib@terminal:~$</span></div><div class="grid lg:grid-cols-2 gap-16 items-center min-h-[75vh]" data-v-a7bdf868><div class="space-y-10" data-v-a7bdf868><div class="text-5xl lg:text-7xl font-bold leading-tight" data-v-a7bdf868><span class="text-green-400" data-v-a7bdf868>${ssrInterpolate(currentText.value)}</span>`);
      if (isTyping.value || cursorVisible.value) {
        _push(`<span class="text-green-400 animate-pulse" data-v-a7bdf868>|</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-2" data-v-a7bdf868><p class="text-xl lg:text-2xl text-gray-300 font-light" data-v-a7bdf868><span class="text-green-400" data-v-a7bdf868>Software Engineer</span><span class="text-gray-500 mx-3" data-v-a7bdf868>/</span><span class="text-blue-400" data-v-a7bdf868>Survivor</span><span class="text-gray-500 mx-3" data-v-a7bdf868>/</span><span class="text-purple-400" data-v-a7bdf868>Nice guy?</span></p></div><div class="space-y-4 text-gray-400 leading-relaxed max-w-lg" data-v-a7bdf868><p class="text-lg" data-v-a7bdf868> Building digital experiences that matter. <span class="text-green-400 font-medium" data-v-a7bdf868>Code</span> by day, <span class="text-blue-400 font-medium" data-v-a7bdf868>dream</span> by night. </p><p class="text-base" data-v-a7bdf868> Currently crafting solutions that bridge the gap between <span class="text-purple-400 font-medium" data-v-a7bdf868>imagination</span> and <span class="text-green-400 font-medium" data-v-a7bdf868>reality</span>. </p></div><div class="pt-6" data-v-a7bdf868><button class="group relative px-8 py-4 border border-green-400/50 text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 overflow-hidden rounded-sm" data-v-a7bdf868><span class="relative z-10 font-medium" data-v-a7bdf868>Explore My Work</span><div class="absolute inset-0 bg-green-400/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" data-v-a7bdf868></div></button></div></div><div class="relative flex justify-center lg:justify-end" data-v-a7bdf868><div class="relative group max-w-sm" data-v-a7bdf868><div class="absolute inset-0 bg-green-400/10 rounded-lg blur-xl group-hover:bg-green-400/20 transition-all duration-500" data-v-a7bdf868></div><div class="relative bg-black border border-green-400/30 p-3 rounded-lg group-hover:border-green-400/50 transition-all duration-300" data-v-a7bdf868><img${ssrRenderAttr("src", _imports_0)} class="w-full h-auto object-cover rounded grayscale group-hover:grayscale-0 transition-all duration-700" alt="G&#39;olib Abdullayev" data-v-a7bdf868><div class="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-a7bdf868></div></div></div></div></div><div class="mt-20 border-t border-green-400/20 pt-12" data-v-a7bdf868><div class="flex items-center space-x-2 mb-8" data-v-a7bdf868><span class="text-green-400 text-sm" data-v-a7bdf868>$</span><span class="text-gray-500 text-sm" data-v-a7bdf868>connect --social-links</span></div><div class="grid grid-cols-2 md:grid-cols-4 gap-6" data-v-a7bdf868><!--[-->`);
      ssrRenderList(socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="group relative p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 overflow-hidden rounded-lg bg-black/20 hover:bg-black/40" data-v-a7bdf868><div class="absolute inset-0 bg-green-400/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" data-v-a7bdf868></div><div class="relative z-10 text-center space-y-2" data-v-a7bdf868><div class="text-2xl" data-v-a7bdf868>${ssrInterpolate(link.icon)}</div><span class="text-sm uppercase tracking-wider text-gray-400 group-hover:text-green-400 transition-colors duration-300" data-v-a7bdf868>${ssrInterpolate(link.name)}</span></div><div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" data-v-a7bdf868></div></a>`);
      });
      _push(`<!--]--></div></div><div class="mt-20 text-center text-xs text-gray-600 border-t border-green-400/10 pt-8" data-v-a7bdf868><div class="flex items-center justify-center space-x-2 mb-2" data-v-a7bdf868><span class="text-green-400" data-v-a7bdf868>[</span><span data-v-a7bdf868>Built with Vue.js &amp; Tailwind CSS</span><span class="text-green-400" data-v-a7bdf868>]</span></div><div data-v-a7bdf868><span class="text-green-400" data-v-a7bdf868>\xA9</span> 2024 G&#39;olib Abdullayev. All rights reserved. </div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7bdf868"]]);

export { index as default };
//# sourceMappingURL=index-CptKRg1r.mjs.map
