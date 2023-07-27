<script lang="ts">
  import LogoMark from '$lib/images/logomark.svg'
  import LogoText from '$lib/images/logo-text.svg'
</script>

<footer
  class="w-full mt-32 py-16 flex justify-between border-t border-zinc-600/20 bg-zinc-900/20 font-extralight"
>
  <div class="flex justify-between w-full max-w-screen-lg mx-auto">
    <div class="flex flex-col justify-between">
      <div class="flex">
        <a
          href="index.html"
          class="block text-2xl font-black md:hidden lg:block group"
        >
          <img
            src={LogoMark}
            alt="buftype logo icon"
            class="h-5 inline-block pr-2"
          />
          <img
            src={LogoText}
            alt="buftype logo text"
            class="h-4 inline-block"
          />
        </a>
      </div>

      <div class="flex flex-row gap-2">
        <a
          class="flex justify-center items-center w-5 h-5 rounded-full transition duration-300 ease-in-out hover:text-dark-300 text-zinc-400/80"
          href="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <a
          class="flex justify-center items-center w-5 h-5 rounded-full transition duration-300 ease-in-out hover:text-dark-300 text-zinc-400/80"
          href="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            />
          </svg>
        </a>
        <a
          class="flex justify-center items-center w-5 h-5 rounded-full transition duration-300 ease-in-out hover:text-dark-300 text-zinc-400/80"
          href="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="flex gap-20">
      <div class="w-32">
        <h6 class="text-neutral-400 font-sm font-medium">Product</h6>
        <ul class="mt-3 space-y-1 text-zinc-400/80 text-sm">
          <li class="py-1">
            <a href="index.html">Features</a>
          </li>

          <li class="py-1">
            <a href="services.html">Pricing</a>
          </li>

          <li class="py-1">
            <a href="services.html">Changelog</a>
          </li>

          <li class="py-1">
            <a href="services.html">Roadmap</a>
          </li>
        </ul>
      </div>

      <div class="w-32">
        <h6 class="text-neutral-400 font-sm font-medium">Company</h6>
        <ul class="mt-3 space-y-1 text-zinc-400/80 text-sm">
          <li class="py-1">
            <a href="index.html">About</a>
          </li>

          <li class="py-1">
            <a href="index.html">Blog</a>
          </li>

          <li class="py-1">
            <a href="services.html">Customers</a>
          </li>
        </ul>
      </div>

      <div class="w-32">
        <h6 class="text-neutral-400 font-sm font-medium">Resources</h6>
        <ul class="mt-3 space-y-1 text-zinc-400/80 text-sm">
          <li class="py-1">
            <a href="index.html">Contact</a>
          </li>

          <li class="py-1">
            <a href="services.html">Feedback</a>
          </li>

          <li class="py-1">
            <a href="services.html">Terms of Service</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
