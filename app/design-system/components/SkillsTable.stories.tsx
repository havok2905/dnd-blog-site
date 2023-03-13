import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {SkillsTable} from './SkillsTable';

export default {
  component: SkillsTable,
  title: 'SkillsTable'
} as ComponentMeta<typeof SkillsTable>;

const Template: ComponentStory<typeof SkillsTable> = (args) => {
  const {
    cha,
    con,
    dex,
    int,
    proficiencyBonus,
    skills,
    str,
    wis
  } = args;

  return (
    <SkillsTable
      cha={cha}
      con={con}
      dex={dex}
      int={int}
      proficiencyBonus={proficiencyBonus}
      skills={skills}
      str={str}
      wis={wis}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  cha: 10,
  con: 10,
  dex: 10,
  int: 10,
  proficiencyBonus: 2,
  skills: [
    {
      name: 'Arcana',
      proficiencyType: 'Proficient'
    },
    {
      name: 'Intimidation',
      proficiencyType: 'Expertise'
    }
  ],
  str: 10,
  wis: 10,
};
