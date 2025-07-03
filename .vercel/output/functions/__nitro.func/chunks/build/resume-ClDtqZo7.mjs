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
  __name: "resume",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      "Vue.js",
      "Nuxt.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "CSS",
      "Tailwind",
      "Git",
      "Docker",
      "MongoDB",
      "PostgreSQL"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative" }, _attrs))} data-v-98481bbd><div class="absolute inset-0 opacity-5" data-v-98481bbd><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)", "background-size": "40px 40px" })}" data-v-98481bbd></div></div><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-98481bbd><!--[-->`);
      ssrRenderList(skills, (skill, i) => {
        _push(`<div class="absolute text-green-400/20 text-xs px-2 py-1 border border-green-400/20 rounded animate-pulse" style="${ssrRenderStyle({
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animationDelay: Math.random() * 4 + "s",
          animationDuration: Math.random() * 3 + 2 + "s"
        })}" data-v-98481bbd>${ssrInterpolate(skill)}</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<div class="container mx-auto px-6 py-16 relative z-10" data-v-98481bbd><div class="max-w-4xl mx-auto" data-v-98481bbd><div class="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden" data-v-98481bbd><div class="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-green-400/20" data-v-98481bbd><div class="flex items-center space-x-2" data-v-98481bbd><div class="w-3 h-3 bg-red-500 rounded-full" data-v-98481bbd></div><div class="w-3 h-3 bg-yellow-500 rounded-full" data-v-98481bbd></div><div class="w-3 h-3 bg-green-500 rounded-full" data-v-98481bbd></div></div><div class="text-gray-400 text-sm" data-v-98481bbd>system-info.sh</div></div><div class="p-8 space-y-4" data-v-98481bbd><div class="text-green-400" data-v-98481bbd><span class="text-gray-500" data-v-98481bbd>root@golib:~#</span> whoami </div><div class="text-white ml-4" data-v-98481bbd>G&#39;olib Abdullayev - Software Engineer</div><div class="text-green-400" data-v-98481bbd><span class="text-gray-500" data-v-98481bbd>root@golib:~#</span> cat /proc/skills </div><div class="ml-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm" data-v-98481bbd><div class="text-blue-400" data-v-98481bbd>Vue.js \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 80%</div><div class="text-purple-400" data-v-98481bbd>Nuxt.js \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591 70%</div><div class="text-yellow-400" data-v-98481bbd>JavaScript \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 85%</div><div class="text-red-400" data-v-98481bbd>Node.js \u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591 60%</div><div class="text-green-400" data-v-98481bbd>CSS/Tailwind \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 80%</div><div class="text-cyan-400" data-v-98481bbd>Git \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591 75%</div></div><div class="text-green-400" data-v-98481bbd><span class="text-gray-500" data-v-98481bbd>root@golib:~#</span> systemctl status resume.service </div><div class="ml-4 bg-gray-900/50 p-4 rounded border border-green-400/20" data-v-98481bbd><div class="text-center space-y-4" data-v-98481bbd><div class="text-3xl" data-v-98481bbd>\u{1F4C4}</div><div class="text-yellow-400 text-xl" data-v-98481bbd>resume.service</div><div class="text-red-400" data-v-98481bbd>\u25CF Status: Under Development</div><div class="text-gray-300 space-y-2 text-sm" data-v-98481bbd><div data-v-98481bbd>\u{1F504} Active: preparing (start-pending)</div><div data-v-98481bbd>\u{1F4C5} Since: December 2024</div><div data-v-98481bbd>\u{1F3AF} Process: Crafting the perfect CV</div><div data-v-98481bbd>\u26A1 Memory: Loading career highlights...</div></div><div class="pt-4" data-v-98481bbd><div class="inline-block px-4 py-2 border border-yellow-400/50 rounded text-yellow-400 text-sm" data-v-98481bbd> Service will be available soon </div></div></div></div><div class="text-green-400" data-v-98481bbd><span class="text-gray-500" data-v-98481bbd>root@golib:~#</span> echo &quot;Coming soon with style!&quot; </div><div class="text-white ml-4" data-v-98481bbd>Coming soon with style!</div><div class="text-green-400" data-v-98481bbd><span class="text-gray-500" data-v-98481bbd>root@golib:~#</span><span class="animate-pulse" data-v-98481bbd>\u2588</span></div></div></div><div class="mt-8 text-center text-gray-400" data-v-98481bbd><div class="text-lg mb-2" data-v-98481bbd>Meanwhile, feel free to connect!</div><div class="text-sm" data-v-98481bbd> Professional inquiries: <span class="text-green-400" data-v-98481bbd>contact@golib.dev</span></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resume = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-98481bbd"]]);

export { resume as default };
//# sourceMappingURL=resume-ClDtqZo7.mjs.map
