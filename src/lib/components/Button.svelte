<script lang="ts">
  let buttonProps = {
    class: [$$restProps.class],
  }
</script>

<a href="./signup"><slot /></a>

<style lang="postcss">
  a {
    @apply text-sm w-auto py-3 px-5 rounded-2xl shadow-xl shadow-emerald-200/10 transition duration-300 ease-in-out bg-gradient-to-br from-sky-400 to-emerald-500 font-semibold text-black;
  }
  a:hover {
    @apply shadow-red-300/20 shadow-2xl from-rose-300 to-emerald-500 font-semibold;
  }
</style>
