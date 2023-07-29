<script lang="ts">
  let buttonProps = {
    class: [$$restProps.class],
    // href: [$$restProps.href],
  }
</script>

<a href="./signup"><slot /></a>

<style lang="postcss">
  a {
    @apply text-sm text-stone-100 font-semibold w-auto py-3 px-5 rounded-xl bg-gradient-to-b from-indigo-500/70 via-violet-700/80 to-rose-800/50 transition-all ease-in-out duration-500;
  }
  a:hover {
    @apply bg-gradient-to-b from-indigo-500/80 to-rose-800 transition-all ease-in-out duration-500;
  }
</style>
