<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let label = "";
    export let disabled: boolean = false;
    export let theme = "secondary";

    const dispatch = createEventDispatcher();
    const onClick = (event: Event) => {
        dispatch("click", event);
    }
</script>

<style>
    .button {
        @apply inline-block px-6 py-2 no-underline rounded-full transition-all;

        &:disabled {
            @apply pointer-events-none opacity-50;
        }
    }

    .primary {
        @apply bg-primary;

        &:not(:disabled):hover {
            @apply hover:bg-primary-dark text-white;
        }
    }

    .secondary {
        @apply bg-secondary text-white;

        &:not(:disabled):hover {
            @apply hover:bg-secondary-dark;
        }
    }

    .tertiary {
        @apply bg-white border-2 border-primary;

        &:not(:disabled):hover {
            @apply bg-primary
        }
    }
</style>

<button {disabled} type="button" class="button {theme}" on:click={onClick}>
    {label}
</button>