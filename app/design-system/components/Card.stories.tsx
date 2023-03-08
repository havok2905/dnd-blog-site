import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Card} from './Card';

export default {
  component: Card,
  title: 'Card'
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card
    title="Lorem Ipsum"
    subtitle="Lorem Ipsum Dolor">
    <p>
      Lorem ipsum dolor.
    </p>
  </Card>
);

export const Default = Template.bind({});
