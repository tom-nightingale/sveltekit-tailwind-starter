<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
  import { Button as MoxButton } from "@thisissoon/mox";

  const handleClick = (e) => {
    console.log("handling click from mox", e.detail);
  };
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
  name="Secondary"
  args={{
    label: "Secondary button",
    theme: "secondary",
  }}
/>

<Story
  name="From Mox"
  args={{
    label: "Secondary button",
    theme: "secondary",
  }}
>
  <MoxButton
    label="hello world"
    styles="bg-orange-500 rounded-sm"
    on:click={(e) => {
      handleClick(e);
    }}
  />
</Story>
