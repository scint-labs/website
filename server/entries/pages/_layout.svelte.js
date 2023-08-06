import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../chunks/index.js";
/* empty css                */import { B as Button } from "../../chunks/Button.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-dark-900 pb-20"><nav class="flex items-center px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="flex justify-between items-center w-full"><div class="flex items-start w-auto"><a href="./"><p class="text-3xl font-bold">scint</p></a></div>

      <div class="hidden md:flex justify-between items-center w-1/2"><a href="#" class="text-sm w-auto block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200">Product
        </a>
        <a href="#" class="text-sm w-auto block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200">Features
        </a>
        <a href="#" class="text-sm w-auto block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200">Pricing
        </a>

        <a href="#" class="text-sm w-auto text-dark-300 block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200">Customers
        </a>
        <a href="#" class="text-sm w-auto text-dark-300 block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200">Company
        </a></div>

      <ul class="flex flex-row items-end w-auto"><li>${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Sign up`;
    }
  })}</li></ul></div></nav></header>`;
});
const LogoMark = "/_app/immutable/assets/logomark.1a919236.svg";
const LogoText = "/_app/immutable/assets/logo-text.88a7e598.svg";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="w-full mt-32 py-16 flex justify-between border-t border-zinc-600/20 bg-zinc-900/20 font-extralight"><div class="flex justify-between w-full max-w-screen-lg mx-auto"><div class="flex flex-col justify-between"><div class="flex"><a href="#" class="block text-2xl font-black md:hidden lg:block group"><img${add_attribute("src", LogoMark, 0)} alt="buftype logo icon" class="h-5 inline-block pr-2">
          <img${add_attribute("src", LogoText, 0)} alt="buftype logo text" class="h-4 inline-block"></a></div>

      <div class="flex flex-row gap-2"><a class="flex justify-center items-center w-5 h-5 rounded-full transition duration-300 ease-in-out hover:text-dark-300 text-zinc-400/80" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="4"></rect><circle cx="12" cy="12" r="3"></circle><line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line></svg></a>
        <a class="flex justify-center items-center w-5 h-5 rounded-full transition duration-300 ease-in-out hover:text-dark-300 text-zinc-400/80" href=""><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg></a>
        <a class="flex justify-center items-center w-5 h-5 rounded-full transition duration-300 ease-in-out hover:text-dark-300 text-zinc-400/80" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg></a></div></div>

    <div class="flex gap-20"><div class="w-32"><h6 class="text-neutral-400 font-sm font-medium">Product</h6>
        <ul class="mt-3 space-y-1 text-zinc-400/80 text-sm"><li class="py-1"><a href="#">Features</a></li>

          <li class="py-1"><a href="#">Pricing</a></li>

          <li class="py-1"><a href="#">Changelog</a></li>

          <li class="py-1"><a href="#">Roadmap</a></li></ul></div>

      <div class="w-32"><h6 class="text-neutral-400 font-sm font-medium">Company</h6>
        <ul class="mt-3 space-y-1 text-zinc-400/80 text-sm"><li class="py-1"><a href="#">About</a></li>

          <li class="py-1"><a href="#">Blog</a></li>

          <li class="py-1"><a href="#">Customers</a></li></ul></div>

      <div class="w-32"><h6 class="text-neutral-400 font-sm font-medium">Resources</h6>
        <ul class="mt-3 space-y-1 text-zinc-400/80 text-sm"><li class="py-1"><a href="#">Contact</a></li>

          <li class="py-1"><a href="#">Feedback</a></li>

          <li class="py-1"><a href="#">Terms of Service</a></li></ul></div></div></div></footer>`;
});
const HeroBg = "/_app/immutable/assets/hero-bg.42204d5a.jpg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app w-full mx-auto" style="${"background: url(" + escape(HeroBg, true) + "); background-size: contain; background-repeat: no-repeat; background-position: top;"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <main>${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
