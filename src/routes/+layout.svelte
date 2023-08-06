<script>
  import '../app.css'
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import HeroBg from '$lib/images/hero-bg.jpg'
</script>

<div
  class="app w-full mx-auto"
  style="background: url({HeroBg}); background-size: contain; background-repeat: no-repeat; background-position: top;"
>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
