<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import MobileMenu from "./MobileMenu.svelte";
</script>

<Meta title="Components/MobileMenu" component={MobileMenu} />

<Template let:args>
  <MobileMenu {...args} />
</Template>

<Story name="Default" />
