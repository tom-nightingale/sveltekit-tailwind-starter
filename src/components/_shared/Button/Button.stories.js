import Button from './Button.svelte';

export default {
  title: 'Components/_shared/Button',
  component: Button,
  argTypes: {
    label: {control: 'string'},
    href: {control: 'string'},
  },
};

const Template = args => ({
  Component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  href: '#',
};