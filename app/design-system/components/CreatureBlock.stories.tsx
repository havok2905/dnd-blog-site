import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import {CreatureBlock} from './CreatureBlock';

import seerToken from '~/images/seers-seer-token.png';

export default {
  component: CreatureBlock,
  title: 'CreatureBlock'
} as ComponentMeta<typeof CreatureBlock>;

const Template: ComponentStory<typeof CreatureBlock> = (args) => (
  <CreatureBlock {...args}/>
);

export const Default = Template.bind({});

Default.args = {
  name: 'Seer',
  tokenAlt: 'Seer Token',
  tokenSrc: seerToken,
  cr: '20',
  ac: 20,
  hp: 370,
  proficiencyBonus: 6,
  speed: [
    {
      feet: 30,
      name: ''
    }
  ],
  size: 'Gargantuan',
  type: 'Celestial',
  alignment: 'Chaotic Neutral',

  str: 10,
  dex: 16,
  con: 14,
  int: 22,
  cha: 20,
  wis: 14,

  saves: [
    'Intelligence',
    'Charisma'
  ],

  skills: [
    {
      bonus: 18,
      name: 'History'
    },
    {
      bonus: 18,
      name: 'Nature'
    },
    {
      bonus: 14,
      name: 'Perception'
    },
    {
      bonus: 17,
      name: 'Performance'
    }
  ],

  languages: [
    'Celestial',
    'telepathy 120ft.'
  ],
  senses: [
    'darkvision 120ft.',
    'passive Perception 22'
  ],
  
  actions: [
    {
      name: 'Transmuting Touch',
      text: [
        'Melee Spell Attack, +12 to hit, range 5t, 3d6 psychic damage.',
        'The target must succeed on a DC 20 Constitution saving throw or be Poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success.'
      ]
    },
    {
      name: 'Mind Blast (Recharge 5-6)',
      text: [
        'The Seer magically emits creates blasts of energy in space. Creatures of the elder Seer\'s choice within 60 feet of it must succeed on a DC 20 Strength saving throw or take 7d10+5 force damage, half as much on a success, and be knocked prone.'
      ]
    }
  ],

  features: [
    {
      name: 'Legendary Resistance (3/Day)',
      text: [
        'If the Seer fails a saving throw, it can choose to succeed instead.'
      ]
    },
    {
      name: 'Magic Resistance',
      text: [
        'The Seer has advantage on saving throws against spells and other magical effects.'
      ]
    }
  ],

  lairActionsText: 'The Seers reside on the little known Plane of Observation, a plane that acts as a nexus between the other planes of existence. It is a cold, barren, and alien place, largely devoid of life. The Seers reside in metal underground bunkers, where they tend to their larvae and observe the other planes from afar. On initiative 20, the Seer takes a lair action to cause one of the following effects; the Seer can\'t use the same effect two rounds in a row.',
  lairActions: [
    'A strong force of gravity manifests at a single point, causing the spell Magnify Gravity to fire at 4th level.',
    'Four five foot wide patches of the ground begin to melt and act as quick sand. Each player on a patch must succeed a DC 15 DEX saving throw or be restrained. This can be contested at the end of each player\'s turn.',
    'Four players instantly swap positions with each other. If a play that has no fly speed and cannot hover is swapped with a player that is currently in the air, the new player will fall and take the resulting fall damage.'
  ],

  legendaryActionsText: 'This creature can take 3 Legendary Actions, choosing from the options below. Only one legendary action can be used at a time, and only at the end of another creature\'s turn. Spent legendary Actions are regained at the start of each turn.',
  legendaryActions: [
    {
      name: 'Cantrip',
      text: [
        'The Seer uses a cantrip.'
      ]
    },
    {
      name: 'Polymorph (Costs 3 Actions)',
      text: [
        'The Seer uses the Polymorph spell without the use of a spell slot.'
      ]
    },
    {
      name: 'Transmuting Touch (Costs 2 Actions)',
      text: [
        'The Seer uses its Transmuting Touch.'
      ]
    }
  ],

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
};
