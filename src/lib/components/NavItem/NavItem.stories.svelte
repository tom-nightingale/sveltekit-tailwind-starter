<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import NavItem from "./NavItem.svelte";
</script>

<Meta title="Components/NavItem" component={NavItem} />

<Template let:args>
  <NavItem {...args} />
</Template>

<Story name="Default" />
