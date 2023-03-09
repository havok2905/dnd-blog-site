import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {ImageWithCaption} from './ImageWithCaption';
import imageSrc from '../../images/duine-spirits-example.png';

export default {
  component: ImageWithCaption,
  title: 'ImageWithCaption'
} as ComponentMeta<typeof ImageWithCaption>;

const Template: ComponentStory<typeof ImageWithCaption> = (args) => {
  const {
    imageAlt,
    imageCaption,
    imageSrc
  } = args;
  
  return (
    <ImageWithCaption
      imageAlt={imageAlt}
      imageCaption={imageCaption}
      imageSrc={imageSrc}/>
  );
};

export const Default = Template.bind({});

Default.args = {
  imageAlt: 'Lorem ipsum',
  imageCaption: 'Lorem ipsum',
  imageSrc
};