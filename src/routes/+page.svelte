<script lang="ts">
  import Hero from './Hero.svelte'

  import HeroBg from '$lib/images/hero-bg.jpg'
  import Partners from './Partners.svelte'
  import WhatWeDo from './WhatWeDo.svelte'
  import Process from './Process.svelte'
  import FeaturedWork from './FeaturedWork.svelte'
  import Testimonials from './Testimonials.svelte'
  import CallToAction from './CallToAction.svelte'
</script>

<svelte:head>
  <title>Home</title>
  <meta name="Buftype" content="" />
</svelte:head>

<section class="w-full mx-auto">
  <main class="w-full mx-auto">
    <Hero />

    <!--<div class="my-96" /> -->

    <!--<Partners /> -->

    <div class="my-96" />

    <WhatWeDo />

    <div class="my-96" />

    <Process />

    <div class="my-96" />

    <FeaturedWork />

    <!--<div class="my-96" />-->

    <!--<Testimonials />-->

    <div class="my-96" />

    <CallToAction />
  </main>
</section>
