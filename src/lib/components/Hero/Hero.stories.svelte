<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Hero from "./Hero.svelte";
</script>

<Meta title="Components/Hero" component={Hero} />

<Template let:args>
  <Hero {...args} />
</Template>

<Story name="Primary" />
