<script lang="ts">
  let buttonProps = {
    class: [$$restProps.class],
    // href: [$$restProps.href],
  }
</script>

<a href="#"><span><slot /></span></a>

<style lang="postcss">
  a {
    @apply shadow-sm shadow-rose-950/40 text-sm text-stone-100 font-semibold w-auto bg-gradient-to-b from-violet-500/60 to-rose-500/60 py-3 px-5 rounded-xl transition-all ease-in-out duration-500;
  }
  a:hover {
    @apply shadow-lg shadow-rose-700/30 bg-gradient-to-b from-sky-500/50 via-fuchsia-600/80 to-rose-500 transition-all ease-in-out duration-500;
  }
</style>
