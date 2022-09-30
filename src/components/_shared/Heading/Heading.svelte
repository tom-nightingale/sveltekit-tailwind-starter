<script lang="ts">
  export let component: string = "h1";
  export let classes: string = "";
</script>

{#if component === "h1"}
  <h1 class="h1">
    <slot />
  </h1>
{:else if component === "h2"}
  <h2 class={classes} {...$$props}>
    <slot />
  </h2>
{:else if component === "h3"}
  <h3 class={classes} {...$$props}>
    <slot />
  </h3>
{:else if component === "h4"}
  <h4 class={classes} {...$$props}>
    <slot />
  </h4>
{:else if component === "h5"}
  <h5 class={classes} {...$$props}>
    <slot />
  </h5>
{:else if component === "h6"}
  <h6 class={classes} {...$$props}>
    <slot />
  </h6>
{/if}

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold;
  }

  h1,
  .h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  h5 {
    @apply text-xl;
  }
  h6 {
    @apply text-lg;
  }
</style>
