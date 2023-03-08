import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Navbar} from './Navbar';

export default {
  component: Navbar,
  title: 'Navbar'
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <Navbar/>
);

export const Default = Template.bind({});
