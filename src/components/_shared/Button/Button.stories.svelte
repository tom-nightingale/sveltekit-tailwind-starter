<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta
  title="Components/Button"
  component={Button}
  argTypes={{
    label: { control: "text" },
    disabled: { control: "boolean" },
    theme: {control: "text"},
  }}
/>

<Template let:args>
  <Button {...args} />
</Template>

<Story name="Primary" args={{ label: "Primary", disabled: false, theme: "primary" }} />

<Story name="Secondary" args={{ label: "Secondary", disabled: false, theme: "secondary" }} />

<Story name="Tertiary" args={{ label: "Tertiary", disabled: false, theme: "tertiary" }} />
