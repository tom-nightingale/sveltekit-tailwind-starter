<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Hr from "./Hr.view.svelte";
</script>

<Meta
  title="Components/Hr"
  component={Hr}
  argTypes={{
    icon: { control: "text" },
    classNames: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
    theme: { control: "text" },
  }}
/>

<Template let:args>
  <Hr {...args} />
</Template>

<Story name="Default" />
