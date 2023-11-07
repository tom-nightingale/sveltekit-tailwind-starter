<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  export let label = "Home";
  export let href = "/";
  export let classes = "";
</script>

<Typography component="p" variant="nav1" uppercase>
  <a {href} class={`text-blue ${classes}`}>
    {label}
  </a>
</Typography>
