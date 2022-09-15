<script lang="ts">
    export let label = "";
    export let href = "";
</script>

<style>
    .button {
        @apply inline-block px-4 py-2 no-underline rounded-full bg-primary transition-all;
        @apply hover:bg-black text-white;
    }
</style>

<a href={href} class="button">
    {label}
</a>