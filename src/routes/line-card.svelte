<svelte:head>
  <title>Premier Technical Sales - Line Card</title>
  <meta
    name="description"
    content="Premier Technical Sales Line Card, a list of companies we represent"
  />
</svelte:head>

<script>
  // Partner list is being refreshed; flip to true to show it again.
  const showLineCard = false;
</script>

<h1
  class="text-secondary-800 text-center text-2xl font-headline uppercase font-semibold tracking-[.2em] my-16"
>
  Line Card
</h1>
{#if showLineCard}
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
  <figure class=" bg-light transition-shadow shadow hover:shadow-lg p-4">
    <a
      class="inline-block text-center"
      href="https://www.craneae.com/"
      target="_blank"
    >
      <picture>
        <img src="/line-card/crane.png" alt="crane logo" />
      </picture>
    </a>
    <figcaption>Crane Aerospace & Electronics</figcaption>
  </figure>
  <figure
    class="flex flex-col bg-light transition-shadow shadow hover:shadow-lg p-4"
  >
    <a
      class="text-center flex-grow flex items-center"
      href="https://www.markimicrowave.com/"
      target="_blank"
    >
      <picture>
        <img src="/line-card/marki-microwave.jpg" alt="Marki Microwave logo" />
      </picture>
    </a>
    <figcaption>Marki Microwave</figcaption>
  </figure>
  <figure class=" bg-light transition-shadow shadow hover:shadow-lg p-4">
    <a
      class="inline-block text-center"
      href="https://www.mini-systemsinc.com/"
      target="_blank"
    >
      <picture>
        <img src="/line-card/msi.png" alt="msi logo" />
      </picture>
    </a>
    <figcaption>Mini-Systems Inc.</figcaption>
  </figure>
  <figure class=" bg-light transition-shadow shadow hover:shadow-lg p-4">
    <a
      class="inline-block text-center"
      href="https://www.mtron.com/"
      target="_blank"
    >
      <picture>
        <img src="/line-card/mtron.png" alt="mtron logo" />
      </picture>
    </a>
    <figcaption>Mtron</figcaption>
  </figure>
</div>
{:else}
<div class="max-w-xl mx-auto text-center mb-16">
  <p class="text-lg">
    We're updating our line card to reflect our current manufacturer
    partners. Check back soon, or
    <a class="underline" href="/contact">get in touch</a> and we'll help you
    find the right solution.
  </p>
</div>
{/if}
