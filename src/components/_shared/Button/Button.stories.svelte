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
    icon: { control: "text" },
    iconLeft: { control: "boolean" },
  }}
/>

<Template let:args>
  <Button {...args} />
</Template>

<Story name="Default" args={{ label: "Button" }} />
