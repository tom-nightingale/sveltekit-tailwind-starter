<script lang="ts">
    import type { PageData } from "./$types";
    import Button from '../components/_shared/Button/Button.svelte'

    export let data: PageData;
    let launches = data.result.data.launchesPast;
</script>

<h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button theme="tertiary" label="hello world" />

{#if data}
    <ul class="mt-10">
    {#each launches as mission }
        <li class="mb-4">
            <strong class="block">{mission.mission_name}</strong>
            {mission.launch_site.site_name_long}
        </li>
    {/each}
    </ul>
{/if}

