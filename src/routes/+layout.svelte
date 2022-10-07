<script>
  import "../styles/app.css";
  import Container from "@/components/_shared/Container/Container.svelte";
  import PageTransition from "@/components/_shared/PageTransition/PageTransition.svelte";

  export let data;
</script>

<nav class="bg-gray-100 mb-12">
  <Container>
    <a
      class="inline-block list-none border-r-2 border-white p-4 hover:bg-gray-200 transition"
      data-sveltekit-prefetch
      href="/">Home</a
    >
    <a
      class="inline-block list-none p-4 hover:bg-gray-200 transition"
      data-sveltekit-prefetch
      href="/about">About</a
    >
  </Container>
</nav>

<PageTransition pathname={data.url}>
  <main>
    <slot />
  </main>
</PageTransition>
