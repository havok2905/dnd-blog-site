import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Button} from './Button';

export default {
  component: Button,
  title: 'Button'
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    isAnchor={args.isAnchor}
    path="#"
    text="Lorem Ipsum"/>
);

export const Default = Template.bind({});

Default.argTypes = {
  isAnchor: {
    type: 'boolean'
  }
};
