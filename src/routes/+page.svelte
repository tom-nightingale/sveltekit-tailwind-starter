<script lang="ts">
  import type { PageData } from "./$types";
  import { SeoData } from "$lib/data/SeoData";
  import Seo from "$lib/components/Seo/Seo.svelte";

  export let data: PageData;
  console.log("data", { data });
</script>

<Seo seo={SeoData} />

Home page.
