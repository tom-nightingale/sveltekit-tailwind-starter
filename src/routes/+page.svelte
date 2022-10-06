<script lang="ts">
  import type { PageData } from "./$types";
  import Container from "../components/_shared/Container/Container.svelte";
  import Heading from "../components/_shared/Heading/Heading.svelte";

  /** @type {import('./$types').PageData} */
  export let data: PageData;
  let launches = data.result.data.launchesPast;
</script>

<Container>
  <Heading component="h1">Welcome to sveltekit</Heading>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
</Container>

<div class="bg-slate-900 pt-10 mt-10">
  <Container>
    <Heading component="h2" classes="text-white">SpaceX launches</Heading>
    {#if data}
      <ul class="grid grid-cols-4 gap-4 md:gap-12 py-8">
        {#each launches as mission}
          <li class="mb-4 bg-white rounded-md p-4">
            <strong class="block">{mission.mission_name}</strong>
            {mission.launch_site.site_name_long}
          </li>
        {/each}
      </ul>
    {/if}
  </Container>
</div>
