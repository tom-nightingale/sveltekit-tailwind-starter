<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Page from "./page.svelte";
</script>

<Meta title="Pages/Example" component={Page} />

<Template let:args>
  <Page {...args} />
</Template>

<Story name="Default">
  <Page />
</Story>
