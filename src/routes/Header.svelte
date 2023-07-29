<script lang="ts">
  import Button from '$lib/components/Button.svelte'
</script>

<header class="bg-dark-900 pb-20">
  <nav class="flex items-center px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="flex justify-between items-center w-full">
      <div class="flex items-start w-auto">
        <a href="./"><p class="text-3xl font-bold">scint</p></a>
      </div>

      <div class="hidden md:flex justify-between items-center w-1/2">
        <a
          href="./product"
          class="text-sm w-auto block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200"
        >
          Product
        </a>
        <a
          href="./features"
          class="text-sm w-auto block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200"
        >
          Features
        </a>
        <a
          href="./pricing"
          class="text-sm w-auto block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200"
        >
          Pricing
        </a>

        <a
          href="./clients"
          class="text-sm w-auto text-dark-300 block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200"
        >
          Customers
        </a>
        <a
          href="./company"
          class="text-sm w-auto text-dark-300 block py-2 px-5 rounded-full transition duration-200 ease-in-out sm:inline-block hover:text-cyan-200"
        >
          Company
        </a>
      </div>

      <ul class="flex flex-row items-end w-auto">
        <li>
          <Button>Sign up</Button>
        </li>
      </ul>
    </div>
  </nav>
</header>
