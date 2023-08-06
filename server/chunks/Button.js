import { c as create_ssr_component, f as compute_rest_props } from "./index.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-135ku36{width:auto;border-radius:0.75rem;background-image:linear-gradient(to bottom, var(--tw-gradient-stops));--tw-gradient-from:rgb(139 92 246 / 0.6) var(--tw-gradient-from-position);--tw-gradient-from-position:  ;--tw-gradient-to:rgb(139 92 246 / 0)  var(--tw-gradient-from-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(244 63 94 / 0.6) var(--tw-gradient-to-position);--tw-gradient-to-position:  ;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;font-size:0.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity:1;color:rgb(245 245 244 / var(--tw-text-opacity));--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(76 5 25 / 0.4);--tw-shadow:var(--tw-shadow-colored);transition-property:all;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}a.svelte-135ku36:hover{background-image:linear-gradient(to bottom, var(--tw-gradient-stops));--tw-gradient-from:rgb(14 165 233 / 0.5) var(--tw-gradient-from-position);--tw-gradient-from-position:  ;--tw-gradient-to:rgb(14 165 233 / 0)  var(--tw-gradient-from-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-via-position:  ;--tw-gradient-to:rgb(192 38 211 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), rgb(192 38 211 / 0.8) var(--tw-gradient-via-position), var(--tw-gradient-to);--tw-gradient-to:#f43f5e var(--tw-gradient-to-position);--tw-gradient-to-position:  ;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(190 18 60 / 0.3);--tw-shadow:var(--tw-shadow-colored);transition-property:all;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  ({ class: [$$restProps.class] });
  $$result.css.add(css);
  return `<a href="#" class="svelte-135ku36"><span>${slots.default ? slots.default({}) : ``}</span></a>`;
});
export {
  Button as B
};
