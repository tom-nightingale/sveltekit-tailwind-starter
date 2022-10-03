<script lang="ts">
  import type { PageData } from "./$types";
  import Container from "../components/_shared/Container/Container.svelte";

  /** @type {import('./$types').PageData} */
  export let data: PageData;
  let launches = data.result.data.launchesPast;
</script>

<div>
  <Container>
    <h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>

    {#if data}
      <ul class="mt-10">
        {#each launches as mission}
          <li class="mb-4">
            <strong class="block">{mission.mission_name}</strong>
            {mission.launch_site.site_name_long}
          </li>
        {/each}
      </ul>
    {/if}
  </Container>
</div>
