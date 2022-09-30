<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Heading from "./Heading.svelte";
</script>

<Meta
  title="Components/Heading"
  component={Heading}
  argTypes={{
    component: { control: "text" },
    classes: {control: "text"},
  }}
/>

<Template let:args>
  <Heading {...args} />
</Template>

<Story name="h1">
  <Heading component="h1">Heading one.</Heading>
</Story>

<Story name="h2">
  <Heading component="h2">Heading two.</Heading>
</Story>

<Story name="h3">
  <Heading component="h3">Heading three.</Heading>
</Story>

<Story name="h4">
  <Heading component="h4">Heading four.</Heading>
</Story>

<Story name="h5">
  <Heading component="h5">Heading five.</Heading>
</Story>

<Story name="h6">
  <Heading component="h6">Heading six.</Heading>
</Story>


