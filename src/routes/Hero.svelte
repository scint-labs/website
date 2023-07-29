<script lang="ts">
  import Button from '$lib/components/Button.svelte'
</script>

<section class="w-full my-12">
  <div class="flex flex-col text-center max-w-4xl mx-auto">
    <h1
      class="text-6xl font-bold
      text-transparent bg-clip-text bg-gradient-to-br
      from-stone-800 to-rose-800 via-amber-900 dark:from-white dark:to-rose-100 p-5 drop-shadow-xl mb-0 pb-2"
    >
      The future of computing is conversational
    </h1>

    <p
      class="text-2xl font-light
      text-transparent bg-clip-text font-me ium bg-gradient-to-br
      from-black/90 to-stone-800/90
      dark:from-white/90 dark:to-stone-300/90 p-5 drop-shadow-xl"
    >
      We believe in the power of language, dialogue, and AI—not just for your
      customers, but for everyone.
    </p>
  </div>
  <div class="flex w-fit mx-auto gap-6 py-8">
    <Button>Get started</Button>
  </div>
</section>
