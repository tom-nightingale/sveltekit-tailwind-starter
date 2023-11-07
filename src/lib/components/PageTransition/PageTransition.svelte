<script lang="ts">
  import { fly } from "svelte/transition";
  export let pathname = "";
</script>

{#key pathname}
  <div
    in:fly={{ y: 10, duration: 500, delay: 1000 }}
    out:fly={{ y: -10, duration: 500 }}
  >
    <slot />
  </div>
{/key}
