<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Typography from "./Typography.view.svelte";
</script>

<Meta title="Components/Typography" component={Typography} />

<Template let:args>
  <Typography {...args} />
</Template>

<Story name="Default" />
