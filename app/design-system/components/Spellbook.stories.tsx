import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {Spellbook} from './Spellbook';

export default {
  component: Spellbook,
  title: 'Spellbook'
} as ComponentMeta<typeof Spellbook>;

const Template: ComponentStory<typeof Spellbook> = (args) => (
  <Spellbook spellbook={args.spellbook} />
);

export const Default = Template.bind({});

Default.args = {
  spellbook: {
    spellcastingAbility: 'Intelligence',
    spellcastingBonus: 12,
    spellcastingLevel: 18,
    spellcastingSaveDc: 20,
    cantrips: [
      'Mage Hand',
      'Mending',
      'Mind Sliver'
    ],
    firstLevel: [
      'Charm Person',
      'Magic Missile',
      'Shield',
      'Thunderwave'
    ],
    secondLevel: [
      'Crown of Madness',
      'Detect Thoughts',
      'Hold Person',
      'Invisibility',
      'Mirror Image'
    ],
    thirdLevel: [
      'Blink',
      'Counterspell',
      'Dispel Magic',
      'Fireball'
    ],
    fourthLevel: [
      'Blight',
      'Hallucinatory Terrain',
      'Polymorph'
    ],
    fifthLevel: [
      'Conjure Elemental',
      'Scrying'
    ],
    sixthLevel: [
      'Disintegrate',
      'Globe of Invulnerability'
    ],
    seventhLevel: [
      'Finger of Death',
      'Reverse Gravity'
    ],
    eighthLevel: [
      'Maze'
    ],
    ninthLevel: [
      'Time Stop'
    ]
  }
};
