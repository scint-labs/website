import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full my-12"><div class="flex flex-col text-center max-w-4xl pt-[55vh] mx-auto"><h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-stone-800 to-rose-800 via-amber-900 dark:from-white dark:to-rose-100 p-5 drop-shadow-xl mb-0 pb-2">The future of computing is
    </h1>
    <div class="relative max-w-xl flex mx-auto gap-6 py-8" style="filter: saturate(1.75);"><input id="input" type="text" placeholder="" autocomplete="off" value="Conversational." class="h-14 w-full pl-5 text-2xl font-medium focus:outline-none text-stone-100 placeholder-white/50 bg-gradient-to-b from-fuchsia-600/5 to-rose-500/5 border border-1 border-white/20 rounded-full">
      <div class="absolute bottom-11 right-3 flex max-w-10"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31.875" height="31.8906"><g><rect height="31.8906" opacity="0" width="31.875" x="0" y="0"></rect><path d="M15.9375 31.875C24.6562 31.875 31.875 24.6406 31.875 15.9375C31.875 7.21875 24.6406 0 15.9219 0C7.21875 0 0 7.21875 0 15.9375C0 24.6406 7.23438 31.875 15.9375 31.875ZM15.9531 24C15.25 24 14.7344 23.5 14.7344 22.7812L14.7344 14.7656L14.875 11.3438L13.2656 13.2812L11.3594 15.2031C11.1406 15.4219 10.8281 15.5625 10.5 15.5625C9.82812 15.5625 9.32812 15.0469 9.32812 14.3906C9.32812 14.0469 9.42188 13.7656 9.64062 13.5469L15.0156 8.1875C15.3438 7.85938 15.6094 7.73438 15.9531 7.73438C16.3125 7.73438 16.5938 7.875 16.9062 8.1875L22.2656 13.5469C22.4844 13.7656 22.6094 14.0469 22.6094 14.3906C22.6094 15.0469 22.0938 15.5625 21.4219 15.5625C21.0781 15.5625 20.7812 15.4375 20.5625 15.2031L18.6719 13.2812L17.0312 11.3281L17.1719 14.7656L17.1719 22.7812C17.1719 23.5 16.6719 24 15.9531 24Z" fill="#ffffff" fill-opacity="0.35"></path></g></svg></div></div>
    </div></section>`;
});
const WhatWeDoImg01 = "/_app/immutable/assets/what-we-do-image-01.ddb4f0e4.jpg";
const WhatWeDoImg02 = "/_app/immutable/assets/what-we-do-image-02.776cfe0f.jpg";
const WhatWeDoImg03 = "/_app/immutable/assets/what-we-do-image-03.ca50ec4a.jpg";
const BgImage = "/_app/immutable/assets/bg.c88a443c.png";
const WhatWeDo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section style="${"background: url(" + escape(BgImage, true) + "); background-size: 60%; background-repeat: no-repeat; background-position: bottom left;"}"><div class="mx-auto max-w-xl text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl"><div class="grid gap-6 mt-6 w-full lg:grid-cols-5"><div class="lg:col-span-3"><h2 class="text-5xl font-semibold text-transparent bg-clip-text font-me ium bg-gradient-to-br from-white to-rose-100 p-5 drop-shadow-xl">Aliquipet cupidatat non elit ea vexcepteur anim ut esse oluptate.
        </h2></div>

      <div class="lg:col-span-2"><p class="text-2xl font-light text-transparent bg-clip-text font-me ium bg-gradient-to-br from-white/90 to-stone-300/90 p-5 drop-shadow-xl">Incididunt cupidatat qui excepteur anim ut esse cupidatat non elit ea
          vexcepteur adipisicing eu veniam ad esse. You&#39;re welcome, devs.
        </p></div></div></div>

  <div class="grid gap-12 justify-center mx-auto mt-12 w-full lg:grid-cols-2 lg:gap-8 lg:mt-16 lg:max-w-screen-xl xl:max-w-screen-xl lg:justify-start"><div><div class="w-full"><div class="mx-auto max-w-lg lg:mr-auto xl:mx-auto"><div class="flex relative py-6 px-8 w-full rounded-3xl shadow-xl bg-zinc-700 sm:px-10"><div class="text-center sm:flex sm:text-left"><div class="w-full sm:w-1/5"><div class="flex justify-center items-center mx-auto w-12 h-12 bg-gradient-to-r rounded-2xl text-zinc-300 sm:mx-0 from-zinc-800 to-zinc-900"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="8" height="8" rx="1"></rect><line x1="3" y1="8" x2="4" y2="8"></line><line x1="3" y1="16" x2="4" y2="16"></line><line x1="8" y1="3" x2="8" y2="4"></line><line x1="16" y1="3" x2="16" y2="4"></line><line x1="20" y1="8" x2="21" y2="8"></line><line x1="20" y1="16" x2="21" y2="16"></line><line x1="8" y1="20" x2="8" y2="21"></line><line x1="16" y1="20" x2="16" y2="21"></line></svg></div></div>
              <div class="mt-3 w-full sm:mt-0"><h5 class="text-lg font-semibold text-white">Fugiat ad dolore proident excepteur
                </h5>
                <p class="mt-1 text-base text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                  eius mod tempor incididunt ut labore et
                </p></div></div></div></div></div>

      
      <div class="mt-8 w-full lg:mt-5 xl:mt-8 2xl:mt-10 xl:pr-18 2xl:pr-28"><div class="mx-auto max-w-lg lg:mr-auto xl:mx-auto"><div class="flex py-6 px-8 w-full rounded-3xl shadow-xl bg-zinc-700 sm:px-10"><div class="text-center sm:flex sm:text-left"><div class="w-full sm:w-1/5"><div class="flex justify-center items-center mx-auto w-12 h-12 bg-gradient-to-r rounded-2xl text-zinc-300 sm:mx-0 from-zinc-800 to-zinc-900"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="7 8 3 12 7 16"></polyline><polyline points="17 8 21 12 17 16"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg></div></div>
              <div class="mt-3 w-full sm:mt-0"><h5 class="text-lg font-semibold text-white">Tempor incididunt
                </h5>
                <p class="mt-1 text-base text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                  eius mod tempor incididunt ut labore et
                </p></div></div></div></div></div>

      
      <div class="mt-8 w-full lg:mt-5 xl:mt-8 2xl:mt-10"><div class="mx-auto max-w-lg lg:mr-auto xl:mx-auto"><div class="flex py-6 px-8 w-full rounded-3xl shadow-xl bg-zinc-700 sm:px-10"><div class="text-center sm:flex sm:text-left"><div class="w-full sm:w-1/5"><div class="flex justify-center items-center mx-auto w-12 h-12 bg-gradient-to-r rounded-2xl text-zinc-300 sm:mx-0 from-zinc-800 to-zinc-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"></path></svg></div></div>
              <div class="mt-3 w-full sm:mt-0"><h5 class="text-lg font-semibold text-white">Id laboris exercitation in
                </h5>
                <p class="mt-1 text-base text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                  eius mod tempor incididunt ut labore et
                </p></div></div></div></div></div></div>

    <div class="flex justify-center items-center max-w-screen-md lg:max-w-full"><div class="grid grid-rows-2 grid-flow-col gap-4 h-full"><div class="row-span-2 rounded-3xl shadow-xl"><img${add_attribute("src", WhatWeDoImg01, 0)} alt="What we do part 1" class="object-cover w-full h-full rounded-3xl position-right"></div>
        <div class="rounded-3xl shadow-xl"><img${add_attribute("src", WhatWeDoImg02, 0)} alt="What we do part 2" class="object-cover w-full h-full rounded-3xl position-center"></div>
        <div class="rounded-3xl shadow-xl"><img${add_attribute("src", WhatWeDoImg03, 0)} alt="What we do part 3" class="object-cover w-full h-full rounded-3xl position-center"></div></div></div></div></section>`;
});
const Process = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="px-4 mx-auto w-full max-w-screen-xl sm:px-6 lg:px-8"><div class="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl"><h2 class="text-5xl font-semibold text-transparent bg-clip-text font-me ium bg-gradient-to-br from-white to-rose-100 p-5 drop-shadow-xl">Your journey to to AI transformation.
    </h2>
    <p class="text-2xl light text-transparent bg-clip-text font-me ium bg-gradient-to-br from-black/90 to-stone-800/90 dark:from-white/90 dark:to-stone-300/90 p-5 drop-shadow-xl">Personalized, engineered, enabled.
    </p></div>

  <div class="grid gap-10 mx-auto mt-12 max-w-xl lg:mt-16 lg:grid-cols-3 lg:grid-x-16 lg:max-w-none"><div class="w-full"><span class="flex justify-center items-center mx-auto bg-gradient-to-r rounded-3xl shadow-xl w-18 h-18 from-zinc-600 to-zinc-700"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-zinc-300" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><rect x="9" y="3" width="6" height="4" rx="2"></rect><line x1="9" y1="12" x2="9.01" y2="12"></line><line x1="13" y1="12" x2="15" y2="12"></line><line x1="9" y1="16" x2="9.01" y2="16"></line><line x1="13" y1="16" x2="15" y2="16"></line></svg></span>
      <h3 class="mt-5 text-2xl font-semibold text-center text-white">1. We collaborate to craft your personalized solution.
      </h3>
      <p class="mt-2 text-lg leading-relaxed text-center text-zinc-300">Our journey begins with you. We take the time to understand your needs,
        goals, and the unique challenges your business faces so we can carefully
        tailor an assistant to help you unlock your potential.
      </p></div>

    <div class="w-full"><span class="flex justify-center items-center mx-auto bg-gradient-to-r rounded-3xl shadow-xl w-18 h-18 from-zinc-600 to-zinc-700"><svg class="w-10 h-10 text-zinc-300" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="8" height="8" rx="1"></rect><line x1="3" y1="8" x2="4" y2="8"></line><line x1="3" y1="16" x2="4" y2="16"></line><line x1="8" y1="3" x2="8" y2="4"></line><line x1="16" y1="3" x2="16" y2="4"></line><line x1="20" y1="8" x2="21" y2="8"></line><line x1="20" y1="16" x2="21" y2="16"></line><line x1="8" y1="20" x2="8" y2="21"></line><line x1="16" y1="20" x2="16" y2="21"></line></svg></span>

      <h3 class="mt-5 text-2xl font-semibold text-center text-white">2. We engineer an assistant suited to your needs.
      </h3>
      <p class="mt-2 text-lg leading-relaxed text-center text-zinc-300">Once we&#39;ve defined your personalized solution, we build and integrate
        your custom assistant, connecting it to your existing data, ensuring it
        understands your business as well as you do.
      </p></div>

    <div class="w-full"><span class="flex justify-center items-center mx-auto bg-gradient-to-r rounded-3xl shadow-xl w-18 h-18 from-zinc-600 to-zinc-700"><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-zinc-300" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><circle cx="15" cy="9" r="1"></circle></svg></span>
      <h3 class="mt-5 text-2xl font-semibold text-center text-white">3. We help you maximize your new assistant&#39;s potential.
      </h3>
      <p class="mt-2 text-lg leading-relaxed text-center text-zinc-300">We give you ongoing support, helping you integrate your new assistant
        into your workflows, training you on how to use it effectively, and
        ensuring it continuously evolves with your business.
      </p></div></div></section>`;
});
const FeaturedWorkImg01 = "/_app/immutable/assets/featured-work-image-01.19a0c950.jpg";
const FeaturedWorkImg02 = "/_app/immutable/assets/featured-work-image-02.0a83b752.jpg";
const FeaturedWorkImg03 = "/_app/immutable/assets/featured-work-image-03.9c90d5d0.jpg";
const FeaturedWorkImg04 = "/_app/immutable/assets/featured-work-image-04.80f6a995.jpg";
const FeaturedWork = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-10/12 mx-auto"><div class="pb-24 text-center"><h2 class="text-5xl font-semibold text-transparent bg-clip-text font-me ium bg-gradient-to-br from-white to-rose-100 p-5 drop-shadow-xl">The impact of an AI assistant tailored to your needs.
    </h2></div>
  <div class="mt-24 lg:mt-16"><div class="relative mx-auto max-w-lg lg:max-w-none lg:mx-none"><div class="${"lg:rounded-3xl rounded-t-3xl shadow-xl relative w-full lg:pt-23/50 lg:w-9/10 bg-cover bg-center h-64 lg:h-full bg-[url(" + escape(FeaturedWorkImg01, true) + ")]"}"></div>
      <div class="lg:rounded-3xl rounded-b-3xl shadow-xl h-auto relative w-full bottom-0 right-0 z-20 block p-6 sm:p-8 lg:p-12 bg-zinc-700 lg:absolute lg:-bottom-25 lg:w-1/3 lg:h-full"><div class="h-full lg:flex lg:flex-col lg:justify-between"><div class="hidden lg:block"><p class="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-zinc-800 to-zinc-900">Entrepreneur
            </p></div>
          <div class="flex flex-wrap w-full"><h3 class="text-3xl font-bold text-white lg:text-4xl">Mei</h3>
            <p class="mt-2 text-base lg:mt-4 text-neutral-300 md:text-lg">Scint transforms Mei&#39;s online store by providing real-time sales
              tracking and customer feedback analysis. It not only helps her
              understand her sales trends but also offers actionable insights to
              improve her products based on customer reviews.
            </p></div>
          <div class="mt-8 xl:mt-4"><a class="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group" href="#"><span class="block absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r rounded-full transition-all ease-in-out duration-250 from-zinc-800 to-zinc-900 md:w-14 md:group-hover:w-full"></span>
              <span class="relative z-20">Read more</span></a></div></div></div></div>

    <div class="py-6 lg:py-28"></div>

    
    <div class="relative mx-auto max-w-lg lg:max-w-none lg:mx-none"><div class="lg:rounded-3xl rounded-t-3xl shadow-xl relative w-full lg:pt-23/50 lg:w-9/10 lg:ml-auto bg-cover bg-center h-64 lg:h-full"${add_attribute("data-background-image", FeaturedWorkImg02, 0)} style="${"background-image: url(" + escape(FeaturedWorkImg02, true) + ");"}"></div>
      <div class="lg:rounded-3xl rounded-b-3xl shadow-xl h-auto relative w-full bottom-0 left-0 z-20 block p-6 sm:p-8 lg:p-12 bg-zinc-700 lg:h-full lg:absolute lg:-bottom-25 lg:w-1/3"><div class="h-full lg:flex lg:flex-col lg:justify-between"><div class="hidden lg:block"><p class="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-zinc-800 to-zinc-900">Academic
            </p></div>
          <div class="flex flex-wrap w-full"><h3 class="text-3xl font-bold text-white lg:text-4xl">Priya</h3>
            <p class="mt-2 text-base lg:mt-4 text-neutral-300 lg:text-lg">For Priya, Scint is like a personalized academic assistant. It
              manages her study schedule, suggests ideal timelines for
              assignments, and even finds useful resources for her papers.
            </p></div>
          <div class="mt-8 xl:mt-4"><a class="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group" href="#"><span class="block absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r rounded-full transition-all ease-in-out duration-250 from-zinc-800 to-zinc-900 md:w-14 md:group-hover:w-full"></span>
              <span class="relative z-20">Read more</span></a></div></div></div></div>

    <div class="py-6 lg:py-28"></div>

    <div class="relative mx-auto max-w-lg lg:max-w-none lg:mx-none"><div class="lg:rounded-3xl rounded-t-3xl shadow-xl relative w-full lg:pt-23/50 lg:w-9/10 bg-cover bg-center h-64 lg:h-full"${add_attribute("data-background-image", FeaturedWorkImg03, 0)} style="${"background-image: url(" + escape(FeaturedWorkImg03, true) + ");"}"></div>
      <div class="lg:rounded-3xl rounded-b-3xl shadow-xl h-auto relative w-full bottom-0 right-0 z-20 block p-6 sm:p-8 lg:p-12 bg-zinc-700 lg:absolute lg:-bottom-25 lg:w-1/3 lg:h-full"><div class="h-full lg:flex lg:flex-col lg:justify-between"><div class="hidden lg:block"><p class="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-zinc-800 to-zinc-900">Real-estate Agent
            </p></div>
          <div class="flex flex-wrap w-full"><h3 class="text-3xl font-bold text-white lg:text-4xl">Jake</h3>
            <p class="mt-2 text-base lg:mt-4 text-neutral-300 md:text-lg">Scint empowers Jake by keeping him updated about market trends and
              his client portfolio. It not only spots potential opportunities
              but also suggests proactive actions to make the most of them.
            </p></div>
          <div class="mt-8 xl:mt-4"><a class="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group" href="#"><span class="block absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r rounded-full transition-all ease-in-out duration-250 from-zinc-800 to-zinc-900 md:w-14 md:group-hover:w-full"></span>
              <span class="relative z-20">Read more</span></a></div></div></div></div>

    <div class="py-6 lg:py-28"></div>

    
    <div class="relative mx-auto max-w-lg lg:max-w-none lg:mx-none"><div class="lg:rounded-3xl rounded-t-3xl shadow-xl relative w-full lg:pt-23/50 lg:w-9/10 lg:ml-auto bg-cover bg-center h-64 lg:h-full"${add_attribute("data-background-image", FeaturedWorkImg04, 0)} style="${"background-image: url(" + escape(FeaturedWorkImg04, true) + ");"}"></div>
      <div class="lg:rounded-3xl rounded-b-3xl shadow-xl h-auto relative w-full bottom-0 left-0 z-20 block p-6 sm:p-8 lg:p-12 bg-zinc-700 lg:h-full lg:absolute lg:-bottom-25 lg:w-1/3"><div class="h-full lg:flex lg:flex-col lg:justify-between"><div class="hidden lg:block"><p class="inline-flex justify-center items-center py-2 px-6 text-xs font-medium tracking-wide text-white bg-gradient-to-r rounded-r-full rounded-tl-full from-zinc-800 to-zinc-900">Freelance Designer
            </p></div>
          <div class="flex flex-wrap w-full"><h3 class="text-3xl font-bold text-white lg:text-4xl">Kim</h3>
            <p class="mt-2 text-base lg:mt-4 text-neutral-300 lg:text-lg">Scint helps Kim stay on top of her project deadlines and keeps her
              creativity flowing by suggesting trending design styles. It helps
              her plan her work efficiently and stay updated with the design
              world.
            </p></div>
          <div class="mt-8 xl:mt-4"><a class="inline-flex relative justify-center items-center px-8 w-auto h-12 text-base font-medium leading-snug text-white md:h-14 group" href="#"><span class="block absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r rounded-full transition-all ease-in-out duration-250 from-zinc-800 to-zinc-900 md:w-14 md:group-hover:w-full"></span>
              <span class="relative z-20">Read more</span></a></div></div></div></div></div></section>`;
});
const CallToAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full my-12"><div class="flex flex-col text-center max-w-4xl mx-auto"><h1 class="text-5xl font-semibold text-transparent bg-clip-text font-me ium bg-gradient-to-br from-white to-rose-100 p-5 drop-shadow-xl">Embrace the AI Revolution
    </h1>

    <p class="text-2xl font-light text-transparent bg-clip-text font-me ium bg-gradient-to-br from-white/90 to-stone-300/90 p-5 drop-shadow-xl">The AI revolution isn&#39;t coming; it&#39;s here. And with us, you won&#39;t just be
      part of it—you&#39;ll be leading it. Let us help you integrate cutting-edge,
      personalized chat assistants into your business. Because the future is
      conversational, and the conversation starts with you.
    </p></div>
  <div class="flex w-fit mx-auto gap-6 py-8">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Sign up`;
    }
  })}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1o59smj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="Buftype" content=""><!-- HEAD_svelte-1o59smj_END -->`, ""}

<section class="w-full mx-auto"><main class="w-full mx-auto">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

    

    

    <div class="my-96"></div>

    ${validate_component(WhatWeDo, "WhatWeDo").$$render($$result, {}, {}, {})}

    <div class="my-96"></div>

    ${validate_component(Process, "Process").$$render($$result, {}, {}, {})}

    <div class="my-96"></div>

    ${validate_component(FeaturedWork, "FeaturedWork").$$render($$result, {}, {}, {})}

    

    

    <div class="my-96"></div>

    ${validate_component(CallToAction, "CallToAction").$$render($$result, {}, {}, {})}</main></section>`;
});
export {
  Page as default
};
