<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Icon from "./Icon.svelte";
</script>

<Meta
  title="Components/Icon"
  component={Icon}
  argTypes={{
    icon: { control: "text" },
    classNames: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
    theme: { control: "text" },
  }}
/>

<Template let:args>
  <Icon {...args} />
</Template>

<Story name="Default" args={{ icon: "search", width: 24, height: 24 }} />
