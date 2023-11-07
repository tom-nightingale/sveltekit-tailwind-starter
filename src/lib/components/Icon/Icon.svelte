<script lang="ts">
  export let icon = "";
  export let classNames = "";
  export let width: number = 24;
  export let height: number = 24;
</script>

<svg
  class={`icon icon-${icon} ${classNames}`}
  style={`width: ${width}px; height: ${height}px;`}
>
  <use href={`/icons/icon-sprite.svg#icon-${icon}`} />
</svg>

<style>
  .icon {
    display: inline-block;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
</style>
