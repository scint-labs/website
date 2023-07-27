<script lang="ts">
  import Testimonial01 from '$lib/images/testimonial-01.jpg'
  import Testimonial02 from '$lib/images/testimonial-02.jpg'
  import Testimonial03 from '$lib/images/testimonial-03.jpg'
  import Testimonial04 from '$lib/images/testimonial-04.jpg'
</script>

<section
  class="px-4 pt-10 pb-12 mx-auto max-w-screen-xl md:pb-16 md:pt-12 sm:px-6 lg:px-8"
>
  <div class="mx-auto w-full max-w-xl text-center lg:max-w-3xl md:max-w-2xl">
    <h2
      class="text-5xl font-semibold
      text-transparent bg-clip-text font-me ium bg-gradient-to-br
      from-white to-rose-100 p-5 drop-shadow-xl"
    >
      Aliquipet cupidatat non elit ea vexcepteur anim ut esse oluptate.
    </h2>
    <p
      class="text-2xl font-light
      text-transparent bg-clip-text font-me ium bg-gradient-to-br
      from-white/90 to-stone-300/90 p-5 drop-shadow-xl"
    >
      Incididunt cupidatat qui excepteur anim ut esse cupidatat non elit ea
      vexcepteur adipisicing eu veniam ad esse. You're welcome, devs.
    </p>
  </div>

  <div
    class="grid gap-4 mt-12 lg:mt-14 xl:grid-cols-3 xl:grid-rows-2 sm:gap-6 lg:gap-8 md:grid-cols-2 md:grid-rows-3"
  >
    <div class="md:row-span-2">
      <div
        class="py-12 px-4 w-full h-full rounded-3xl shadow-xl bg-zinc-700 lg:py-16 lg:px-6"
      >
        <div class="mx-auto max-w-md text-center lg:max-w-full">
          <h2
            class="text-4xl font-semibold
      text-transparent bg-clip-text bg-gradient-to-b
      from-indigo-100 to-rose-100 p-5 drop-shadow-xl"
          >
            Aliquipet cupidatat non elit ea vexcepteur anim ut esse oluptate.
          </h2>
          <p class="mt-3 text-lg text-stone-300/90 lg:mt-4">
            Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor
            labore sit amet.
          </p>
        </div>
        <div
          class="text-transparent mt-8 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 md:block bg-clip-text bg-gradient-to-br from-cyan-200 to-rose-500 hover:from-amber-200 hover:to-rose-500"
        >
          <div class="flex flex-col">
            <p class="order-2 mt-2 text-lg font-medium leading-6">
              Happy clients
            </p>
            <p class=" order-1 text-5xl font-bold leading-none">69</p>
          </div>
          <div class="flex flex-col mt-10 sm:mt-0 md:mt-10">
            <p class="order-2 mt-2 text-lg font-medium leading-6">
              Projects completed
            </p>
            <p class="order-1 text-5xl font-bold leading-none">420</p>
          </div>
          <div class="flex flex-col mt-10 sm:mt-0 md:mt-10">
            <p class="order-2 mt-2 text-lg font-medium leading-6">
              Years in business
            </p>
            <p class="order-1 text-5xl font-bold leading-none">20</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex overflow-hidden relative py-12 px-4 w-full rounded-3xl shadow-xl bg-zinc-700 sm:px-6 lg:px-8"
    >
      <svg
        viewBox="0 0 24 24"
        class="absolute inset-0 w-32 h-32 text-zinc-800 lg:w-40 lg:h-40"
        ><path
          fill="currentColor"
          d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
        /></svg
      >
      <blockquote class="z-10 mx-auto">
        <p
          class="mx-auto max-w-md text-lg font-medium leading-9 text-center text-zinc-300"
        >
          Nemo expedita voluptas culpa sapiente alias molestiae corrupti in
          laborum sed rerum et corporis.
        </p>
        <footer class="mt-8">
          <img
            class="object-cover object-center mx-auto w-12 h-12 rounded-full border-2 border-opacity-75 border-solid border-zinc-800"
            src={Testimonial01}
            alt=""
          />
          <div class="mt-3 text-center">
            <div class="text-base font-medium leading-6 text-white">
              Katy Perry
            </div>
            <div class="text-base font-medium leading-6 text-zinc-400">
              CEO, Spotify
            </div>
          </div>
        </footer>
      </blockquote>
    </div>

    <div
      class="flex overflow-hidden relative py-12 px-4 w-full rounded-3xl shadow-xl bg-zinc-700 sm:px-6 lg:px-8"
    >
      <svg
        viewBox="0 0 24 24"
        class="absolute inset-0 w-32 h-32 text-zinc-800 lg:w-40 lg:h-40"
        ><path
          fill="currentColor"
          d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
        /></svg
      >
      <blockquote class="z-10 mx-auto">
        <p
          class="mx-auto max-w-md text-lg font-medium leading-9 text-center text-zinc-300"
        >
          Nemo expedita voluptas culpa sapiente alias molestiae corrupti in
          laborum sed rerum et corporis.
        </p>
        <footer class="mt-8">
          <img
            class="object-cover object-center mx-auto w-12 h-12 rounded-full border-2 border-opacity-75 border-solid border-zinc-800"
            src={Testimonial02}
            alt=""
          />
          <div class="mt-3 text-center">
            <div class="text-base font-medium leading-6 text-white">
              Henry Krasner
            </div>
            <div class="text-base font-medium leading-6 text-zinc-400">
              CTO, Twitter
            </div>
          </div>
        </footer>
      </blockquote>
    </div>

    <div
      class="flex overflow-hidden relative py-12 px-4 w-full rounded-3xl shadow-xl bg-zinc-700 sm:px-6 lg:px-8"
    >
      <svg
        viewBox="0 0 24 24"
        class="absolute inset-0 w-32 h-32 text-zinc-800 lg:w-40 lg:h-40"
        ><path
          fill="currentColor"
          d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
        /></svg
      >
      <blockquote class="z-10 mx-auto">
        <p
          class="mx-auto max-w-md text-lg font-medium leading-9 text-center text-zinc-300"
        >
          Nemo expedita voluptas culpa sapiente alias molestiae corrupti in
          laborum sed rerum et corporis.
        </p>
        <footer class="mt-8">
          <img
            class="object-cover object-center mx-auto w-12 h-12 rounded-full border-2 border-opacity-75 border-solid border-zinc-800"
            src={Testimonial03}
            alt=""
          />
          <div class="mt-3 text-center">
            <div class="text-base font-medium leading-6 text-white">
              Bob Foster
            </div>
            <div class="text-base font-medium leading-6 text-zinc-400">
              CEO, Amazon
            </div>
          </div>
        </footer>
      </blockquote>
    </div>

    <!-- Testimonial -->
    <div
      class="flex overflow-hidden relative py-12 px-4 w-full rounded-3xl shadow-xl bg-zinc-700 sm:px-6 lg:px-8"
    >
      <!-- Quotation mark -->
      <svg
        viewBox="0 0 24 24"
        class="absolute inset-0 w-32 h-32 text-zinc-800 lg:w-40 lg:h-40"
        ><path
          fill="currentColor"
          d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
        /></svg
      >
      <blockquote class="z-10 mx-auto">
        <p
          class="mx-auto max-w-md text-lg font-medium leading-9 text-center text-zinc-300"
        >
          Nemo expedita voluptas culpa sapiente alias molestiae corrupti in
          laborum sed rerum et corporis.
        </p>
        <footer class="mt-8">
          <img
            class="object-cover object-center mx-auto w-12 h-12 rounded-full border-2 border-opacity-75 border-solid border-zinc-800"
            src={Testimonial04}
            alt=""
          />
          <div class="mt-3 text-center">
            <div class="text-base font-medium leading-6 text-white">
              Ema Roberts
            </div>
            <div class="text-base font-medium leading-6 text-zinc-400">
              Owner, Dropbox
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
</section>
