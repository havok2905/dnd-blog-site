import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Quote} from './Quote';

export default {
  component: Quote,
  title: 'Quote'
} as ComponentMeta<typeof Quote>;

const Template: ComponentStory<typeof Quote> = (args) => {
  const {
    citation
  } = args;

  return (
    <Quote citation={citation}>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”
      </p>
    </Quote>
  );
};

export const Default = Template.bind({});
Default.args = {
  citation: undefined
};

export const Citation = Template.bind({});
Citation.args = {
  citation: "Foo"
};