<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let href = "";
  export let newTab = false;
  export let label = "";
  export let theme = "primary";

  /**
   * Optional click handler
   */
  function onClick(event: Event) {
    dispatch("click", event);
  }
</script>

{#if href}
  <a
    class={`button ${theme}`}
    {href}
    target={newTab ? "_blank" : null}
    rel="noopener noreferrer"
  >
    <Typography component="span" uppercase variant="button1">
      {label}
    </Typography>
  </a>
{:else}
  <button class={`button ${theme}`} on:click={onClick}>
    <Typography component="span" uppercase variant="button1">
      {label}
    </Typography>
  </button>
{/if}

<style>
  .button {
    @apply inline-block py-[15px] px-[30px] transition duration-200 rounded-full;
  }

  .primary {
    @apply bg-white text-black border border-on-surface;
    @apply hover:bg-on-surface hover:text-black;
  }
</style>
