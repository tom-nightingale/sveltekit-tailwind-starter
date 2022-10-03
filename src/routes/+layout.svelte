<script>
  import "../styles/app.css";
  import Container from "../components/_shared/Container/Container.svelte";
  import PageTransition from "../components/_shared/PageTransition/PageTransition.svelte";

  export let data;
  console.log(data);
</script>

<Container>
  <a data-sveltekit-prefetch href="/">Home</a>
  <a data-sveltekit-prefetch href="/about">About</a>
</Container>

<PageTransition pathname={data.url}>
  <main>
    <slot />
  </main>
</PageTransition>
