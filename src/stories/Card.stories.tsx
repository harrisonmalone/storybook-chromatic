import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../components/card/Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  bodyText: 'My body text',
  headerText: "Header text"
};