import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Map} from './Map';

import worldMap from '~/images/world-map.png';

export default {
  component: Map,
  title: 'Map'
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => {
  const {
    imageAlt,
    imageSrc,
    zoomIncrement,
    zoomInitial,
    zoomMaxThreshold,
    zoomMinThreshold
  } = args;

  return (
    <Map
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      zoomInitial={zoomInitial}
      zoomIncrement={zoomIncrement}
      zoomMaxThreshold={zoomMaxThreshold}
      zoomMinThreshold={zoomMinThreshold}
    />
  );
};

const baseArgs = {
  imageAlt: 'world map',
  imageSrc: worldMap,
  zoomIncrement: 20,
  zoomInitial: 100,
  zoomMaxThreshold: 200,
  zoomMinThreshold: 100
}

export const Default = Template.bind({});
Default.args = {
  ...baseArgs
};
