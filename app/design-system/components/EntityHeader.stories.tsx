import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {EntityHeader} from './EntityHeader';

import seerToken from '~/images/seers-seer-token.png';

export default {
  component: EntityHeader,
  title: 'EntityHeader'
} as ComponentMeta<typeof EntityHeader>;

const Template: ComponentStory<typeof EntityHeader> = (args) => {
  const {
    name,
    subtitle,
    tokenAlt,
    tokenSrc
  } = args;

  return (
    <EntityHeader
      name={name}
      subtitle={subtitle}
      tokenAlt={tokenAlt}
      tokenSrc={tokenSrc}/>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'Lorem ipsum dolor',
  subtitle: 'Lorem ipsum dolor',
  tokenAlt: 'token',
  tokenSrc: seerToken
};
