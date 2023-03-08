import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {RemixStub} from '../../.storybook/RemixStub';

import {Navbar} from './Navbar';

export default {
  component: Navbar,
  title: 'Navbar'
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <RemixStub>
    <Navbar/>
  </RemixStub>
);

export const Default = Template.bind({});
