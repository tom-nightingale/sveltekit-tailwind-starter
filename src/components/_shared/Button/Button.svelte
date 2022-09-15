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
        @apply inline-block px-6 py-2 no-underline rounded-full bg-primary transition-all;

        &:disabled {
            @apply pointer-events-none opacity-50;
        }

        &:not(:disabled) {
            @apply hover:bg-primary-dark text-white;
        }
    }

    .secondary {
        @apply bg-secondary text-white;

        &:not(:disabled) {
            @apply hover:bg-secondary-dark;
        }
        
    }

    .disabled {
        @apply opacity-80 pointer-events-none;
        pointer-events: none;
        opacity: 0.8;
    }
</style>

<button {disabled} type="button" class="button {theme}" on:click={onClick}>
    {label}
</button>