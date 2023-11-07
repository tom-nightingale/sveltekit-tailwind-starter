<script lang="ts">
  import { onMount } from "svelte";
  import type { MetaModel } from "./Meta.models";

  export let seo: MetaModel;

  $: ({ title, description, keywords, shareGraphic, ogType } = seo);

  onMount(() => {
    document.head
      .querySelectorAll("meta[data-svelte]")
      .forEach((f) => f.remove());
    document.head
      .querySelectorAll("link[data-svelte]")
      .forEach((f) => f.remove());
  });
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta name="twitter:title" content={title} />
    <meta property="og:title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}

  {#if shareGraphic && shareGraphic.url}
    <meta
      property="og:image"
      content={shareGraphic.url
        ? shareGraphic.url
        : "https://res.cloudinary.com/thisissoon/default-meta"}
    />
    <meta property="og:image:alt" content={shareGraphic?.alt} />
    <meta
      name="twitter:image"
      content={shareGraphic.url
        ? shareGraphic.url
        : "https://res.cloudinary.com/thisissoon/default-meta"}
    />
    <meta name="twitter:image:alt" content={shareGraphic.alt} />
  {/if}

  {#if keywords}
    <meta name="keywords" content={keywords.join(",")} />
  {/if}

  <meta name="author" content="Tom Nightingale" />
  <meta name="twitter:creator" content="@tom_nightingale" />
  <meta property="og:type" content={ogType || "website"} />
  <meta
    property="og:site_name"
    content="Kelly & Tom | Wedding | 20th April 2024"
  />
</svelte:head>
