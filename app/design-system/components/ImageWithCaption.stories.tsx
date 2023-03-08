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

const Template: ComponentStory<typeof ImageWithCaption> = () => (
  <ImageWithCaption
    imageAlt="Lorem ipsum"
    imageCaption="Lorem ipsum"
    imageSrc={imageSrc}/>
);

export const Default = Template.bind({});
