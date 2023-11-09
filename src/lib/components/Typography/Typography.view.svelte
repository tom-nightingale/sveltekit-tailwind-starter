<script lang="ts">
  import Typography from "./Typography.svelte";
  export let underline = false;
  export let bold = false;
  export let italic = false;
</script>

<div class="flex flex-col gap-8 p-12">
  <Typography variant="title1" component="h1" {underline} {bold} {italic}
    >Title 1</Typography
  >

  <Typography variant="title2" component="h1" {underline} {bold} {italic}
    >Title 2</Typography
  >

  <Typography variant="headline1" component="h1" {underline} {bold} {italic}
    >Headline1</Typography
  >

  <Typography variant="headline2" component="h2" {underline} {bold} {italic}
    >Headline2</Typography
  >

  <Typography variant="headline3" component="h3" {underline} {bold} {italic}
    >Headline3</Typography
  >

  <Typography variant="headline4" component="h4" {underline} {bold} {italic}
    >Headline4</Typography
  >

  <Typography variant="headline5" component="h5" {underline} {bold} {italic}
    >Headline5</Typography
  >

  <Typography variant="body1" component="p" {underline} {bold} {italic}
    >Body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat
    metus, efficitur et turpis a, molestie feugiat ex.
  </Typography>
</div>
