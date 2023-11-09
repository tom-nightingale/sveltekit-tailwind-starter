<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
  <Button {...args} />
</Template>

<Story
  name="Primary"
  args={{
    label: "Primary button",
    theme: "primary",
  }}
/>

<Story
  name="Primary Link"
  args={{
    label: "Primary link button",
    theme: "primary",
    href: "https://www.google.com",
  }}
/>

<Story
  name="Secondary"
  args={{
    label: "Secondary button",
    theme: "secondary",
  }}
/>

<Story
  name="Secondary Link"
  args={{
    label: "Secondary link button",
    theme: "secondary",
    href: "https://www.google.com",
  }}
/>
