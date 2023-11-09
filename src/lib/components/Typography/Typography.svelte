<script lang="ts">
  export let variant = "body1";
  export let component = "p";
  export let theme = "";
  export let uppercase = false;
  export let underline = false;
  export let bold = false;
  export let italic = false;
</script>

{#if component === "h1"}
  <h1
    class={`${variant} ${uppercase && "uppercase"} ${
      underline && "underline"
    } ${bold && "font-bold"} ${italic && "italic"} ${theme}`}
    {...$$props}
  >
    <slot />
  </h1>
{:else if component === "h2"}
  <h2
    class={`${variant} ${uppercase && "uppercase"} ${
      underline && "underline"
    } ${bold && "font-bold"} ${italic && "italic"} ${theme}`}
    {...$$props}
  >
    <slot />
  </h2>
{:else if component === "h3"}
  <h3
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "font-bold"} ${
      italic && "italic"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h3>
{:else if component === "h4"}
  <h4
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "font-bold"} ${
      italic && "italic"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h4>
{:else if component === "h5"}
  <h5
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "font-bold"} ${
      italic && "italic"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h5>
{:else if component === "h6"}
  <h6
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "font-bold"} ${
      italic && "italic"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h6>
{:else if component === "p"}
  <p
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "font-bold"} ${
      italic && "italic"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </p>
{:else if component === "span"}
  <span
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "font-bold"} ${
      italic && "italic"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </span>
{/if}

<style>
  .title1 {
    @apply text-6xl;
  }

  .title2 {
    @apply text-5xl;
  }

  .headline1,
  .h1 {
    @apply text-4xl;
  }

  .headline2,
  .h2 {
    @apply text-3xl;
  }

  .headline3,
  .h3 {
    @apply text-2xl;
  }

  .headline4,
  .h4 {
    @apply text-xl;
  }

  .headline5,
  .h5 {
    @apply text-lg;
  }

  .body1 {
  }

  .button1 {
    @apply font-sans;
  }

  .bold {
    @apply font-bold;
  }
</style>
