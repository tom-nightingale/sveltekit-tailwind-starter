<script lang="ts">
  export let component: string = "h1";
  export let modifiers: string = "";
</script>

{#if component === "h1"}
  <h1 class="font-bold text-5xl {modifiers}">
    <slot />
  </h1>
{:else if component === "h2"}
  <h2 class="font-bold text-4xl {modifiers}" {...$$props}>
    <slot />
  </h2>
{:else if component === "h3"}
  <h3 class="font-bold text-3xl {modifiers}" {...$$props}>
    <slot />
  </h3>
{:else if component === "h4"}
  <h4 class="font-bold text-2xl {modifiers}" {...$$props}>
    <slot />
  </h4>
{:else if component === "h5"}
  <h5 class="font-bold text-xl {modifiers}" {...$$props}>
    <slot />
  </h5>
{:else if component === "h6"}
  <h6 class="text-lg font-bold  {modifiers}" {...$$props}>
    <slot />
  </h6>
{/if}
