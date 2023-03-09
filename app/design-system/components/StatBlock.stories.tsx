import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {StatBlock} from './StatBlock';

export default {
  component: StatBlock,
  title: 'StatBlock'
} as ComponentMeta<typeof StatBlock>;

const Template: ComponentStory<typeof StatBlock> = (args) => {
  const {
    cha,
    con,
    dex,
    int,
    proficiencyBonus,
    saves,
    str,
    wis
  } = args;

  return (
    <StatBlock
      cha={cha}
      con={con}
      dex={dex}
      int={int}
      proficiencyBonus={proficiencyBonus}
      saves={saves}
      str={str}
      wis={wis}/>
  );
};

export const Default = Template.bind({});

Default.args = {
  cha: 10,
  con: 10,
  dex: 10,
  int: 10,
  proficiencyBonus: 2,
  saves: [
    'Intelligence',
    'Strength'
  ],
  str: 10,
  wis: 10
};
