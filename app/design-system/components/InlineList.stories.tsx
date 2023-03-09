import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {InlineList} from './InlineList';

export default {
  component: InlineList,
  title: 'InlineList'
} as ComponentMeta<typeof InlineList>;

const Template: ComponentStory<typeof InlineList> = (args) => {
  const {
    collection,
    name
  } = args;

  return (
    <InlineList collection={collection} name={name}/>
  );
};

export const Default = Template.bind({});
Default.args = {
  collection: [
    'Foo',
    'Bar',
    'Baz'
  ],
  name: 'Lorem Ipsum'
};
