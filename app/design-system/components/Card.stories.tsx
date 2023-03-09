import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Card} from './Card';

export default {
  component: Card,
  title: 'Card'
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  const {
    footer,
    subtitle,
    title
  } = args;

  return (
    <Card
      footer={footer}
      subtitle={subtitle}
      title={title}>
      <p>
        Lorem ipsum dolor.
      </p>
    </Card>
  );
};

const baseArgs = {
  subtitle: 'Sub Title',
  title: 'Title'
}

export const Default = Template.bind({});
Default.args = {
  ...baseArgs
};

export const Footer = Template.bind({});
Footer.args = {
  ...baseArgs,
  footer: <span>Hello, world!</span>
}
