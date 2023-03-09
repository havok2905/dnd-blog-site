import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Button} from './Button';

export default {
  component: Button,
  title: 'Button'
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const {
    isAnchor,
    path,
    text
  } = args;
  
  return (
    <Button
      isAnchor={isAnchor}
      path={path}
      text={text}/>
  );
};

export const Default = Template.bind({});

Default.args = {
  isAnchor: false,
  path: '#',
  text: 'Lorem Ipsum'
};
