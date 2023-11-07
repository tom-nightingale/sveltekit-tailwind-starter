<script lang="ts">
  import Typography from "./Typography.svelte";
  export let underline = false;
  export let bold = false;
  export let italic = false;
  export let spaced = false;
</script>

<div class="flex flex-col gap-8 p-12">
  <Typography
    variant="title1"
    component="h1"
    {underline}
    {bold}
    {italic}
    {spaced}>Title 1</Typography
  >

  <Typography
    variant="headline1"
    component="h1"
    {underline}
    {bold}
    {italic}
    {spaced}>Headline1</Typography
  >

  <Typography
    variant="headline2"
    component="h2"
    {underline}
    {bold}
    {italic}
    {spaced}>Headline2</Typography
  >

  <Typography variant="body1" component="p" {underline} {bold} {italic} {spaced}
    >Body1</Typography
  >
</div>
