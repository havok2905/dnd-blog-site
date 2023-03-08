import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Page} from './Page';

export default {
  component: Page,
  title: 'Page'
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => (
  <Page>
    <h1>
      Lorem ipsum dolor.
    </h1>
    <h2>
      Lorem ipsum dolor.
    </h2>
    <p>
      Lorem ipsum dolor.
    </p>
  </Page>
);

export const Default = Template.bind({});
