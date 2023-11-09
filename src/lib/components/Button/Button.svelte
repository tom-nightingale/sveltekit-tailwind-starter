<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let href = "";
  export let newTab = false;
  export let label = "";
  export let theme = "primary";
  export let variant = "button1";
  export let disabled = false;

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
    class:disabled
    {href}
    target={newTab ? "_blank" : null}
    rel="noopener noreferrer"
  >
    <Typography component="span" {variant}>
      {label}
    </Typography>
  </a>
{:else}
  <button
    class={`button ${theme}`}
    class:disabled
    on:click={onClick}
    {disabled}
  >
    <Typography component="span" {variant}>
      {label}
    </Typography>
  </button>
{/if}

<style>
  .button {
    @apply uppercase text-[13px] tracking-[1.56px] inline-block py-2 px-6 border transition duration-200 rounded-[20px];

    &.disabled {
      @apply pointer-events-none;
    }
  }

  .primary {
    @apply bg-inverse-surface text-surface border-inverse-surface hover:bg-transparent hover:text-inverse-surface;

    &.disabled {
      @apply bg-on-surface/30 border-transparent;
    }
  }

  .secondary {
    @apply bg-transparent border-inverse-surface hover:bg-inverse-surface hover:text-white;

    &.disabled {
      @apply border-on-surface/30 text-on-surface/30;
    }
  }
</style>
