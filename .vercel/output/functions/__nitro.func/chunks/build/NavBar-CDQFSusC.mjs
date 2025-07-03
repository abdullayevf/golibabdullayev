import { _ as __nuxt_component_0 } from './nuxt-link-DQehLb4B.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center justify-center py-6 mb-8" }, _attrs))} data-v-16c155e6><div class="flex space-x-8 bg-black/60 px-8 py-3 rounded-full border border-green-400/20 shadow-lg" data-v-16c155e6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-green-400 hover:text-green-300 font-mono text-lg transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/portfolio",
    class: "text-green-400 hover:text-green-300 font-mono text-lg transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Portfolio`);
      } else {
        return [
          createTextVNode("Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/articles",
    class: "text-green-400 hover:text-green-300 font-mono text-lg transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Articles`);
      } else {
        return [
          createTextVNode("Articles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resume",
    class: "text-green-400 hover:text-green-300 font-mono text-lg transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resume`);
      } else {
        return [
          createTextVNode("Resume")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-16c155e6"]]);

export { NavBar as N };
//# sourceMappingURL=NavBar-CDQFSusC.mjs.map
