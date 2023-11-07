<script>
  import "$lib/styles/app.css";
  import PageTransition from "$lib/components/PageTransition/PageTransition.svelte";
  export let data;
</script>

<PageTransition pathname={data.url}>
  <slot />
</PageTransition>
