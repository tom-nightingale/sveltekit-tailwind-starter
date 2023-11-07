<script lang="ts">
  export let variant = "body1";
  export let component = "p";
  export let theme = "";
  export let uppercase = false;
  export let underline = false;
  export let bold = false;
  export let italic = false;
  export let spaced = false;
</script>

{#if component === "h1"}
  <h1
    class={`${variant} ${uppercase && "uppercase"} ${
      underline && "underline"
    } ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h1>
{:else if component === "h2"}
  <h2
    class={`${variant} ${uppercase && "uppercase"} ${
      underline && "underline"
    } ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h2>
{:else if component === "h3"}
  <h3
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h3>
{:else if component === "h4"}
  <h4
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h4>
{:else if component === "h5"}
  <h5
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h5>
{:else if component === "h6"}
  <h6
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h6>
{:else if component === "p"}
  <p
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </p>
{:else if component === "span"}
  <span
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </span>
{/if}

<style>
  .title1 {
    @apply font-sans;
    text-shadow: 0px 4px 14px #673d22;
    font-size: clamp(4.688rem, 5.721vw + 3.347rem, 12.5rem);
    line-height: clamp(7.031rem, 6.751vw + 5.449rem, 16.25rem);
  }

  .title2 {
    @apply font-serif tracking-[2px];
    font-size: clamp(1rem, 0.641vw + 0.85rem, 1.875rem);
    text-shadow: 0 0 8px #673d22;
  }

  .headline1,
  .h1 {
    @apply font-sans;
    font-size: clamp(3.75rem, 2.746vw + 3.106rem, 7.5rem);
  }

  .headline2,
  .h2 {
    @apply tracking-[1.6px];
    font-size: clamp(1rem, 0.641vw + 0.85rem, 1.875rem);
    line-height: clamp(1.5rem, 0.686vw + 1.339rem, 2.438rem);
  }

  .body1 {
    @apply tracking-[.75px];
    font-size: clamp(0.938rem, 0.137vw + 0.905rem, 1.125rem);
    line-height: clamp(1.406rem, 0.453vw + 1.3rem, 2.025rem);
  }

  .button1 {
    @apply font-sans text-[14px] tracking-[2.8px];
  }

  .bold {
    @apply font-bold;
  }
</style>
