import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/button/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  buttonText: "Click me"
};

export const Disabled = Template.bind({});

Disabled.args = {
  buttonText: "Disabled",
  disabled: true
};

export const WithId = Template.bind({});

WithId.args = {
  buttonText: "Hello",
  id: "btn"
};