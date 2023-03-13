import {CharacterBlock} from '~/design-system/components/CharacterBlock';
import {CreatureBlock} from '~/design-system/components/CreatureBlock';

import {Layout} from '~/components/Layout';

import buttonsToken from '~/images/token-buttons.png';
import pieToken from '~/images/token-pie.png';
import simonEvansToken from '~/images/token-simon-evans.png';
import snowballToken from '~/images/token-snowball.png';

export const meta = {
  attributes: {
    meta: {
      path: 'simon-evans',
      title: "Simon Evans",
      description: 'Lorem ipsum'
    }
  }
};

export default () => {
  return (
    <Layout>
      <h2>Simon Evans</h2>
      <CharacterBlock
        ac={15}
        actions={[
          {
            name: 'Arcane Wrench',
            text: [
              'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: (2d6 + 5) magical bludgeoning damage.'
            ]
          },
          {
            name: 'Repeating Musket',
            text: [
              'Ranged Weapon Attack: +10 to hit, range 40/120 ft., one target. Hit: (1d12 + 6) magical piercing damage.'
            ]
          }
        ]}
        age={16}
        alignment="Neutral Good"
        armorProficiencies={[
          'Light Armor',
          'Medium Armor',
          'Shields'
        ]}
        background="Vault Dweller"
        backstory={[
          'Simon grew up never knowing his parents, Mirabella and Rory Evans. They perished in an accident just after his birth, experimenting with new arcane methods to power various parts of the archive. Since then, his Uncle had been raising him and acting as his mentor at their family repair shop.',
          'Simon worked with his Uncle as an apprentice, running odd jobs for the town. In secret, he poured over books about history, the arcane, and the outside world. He also secretly worked on small gadgets and constructs to keep him company in his workshop. All of this he did against the wishes of his Uncle, who only wished for Simon to live a normal and accident free life.',
          'Simon attended high school at the archive, where he got his first taste of magic, taking Cantrips 101 with his friend Willow.',
          'Since leaving the archive, Simon expanded on his knowledge of the arcane, weaving it with his aptitude for engineering, invention, and tactics.'
        ]}
        bonds={[
          'My Uncle wants me to be something I\'m not, wishing that I would avoid the study of magic in favor of working in his repair shop. He fears I will blow myself up, like my parents did.',
          'Pie was was first familiar, a mechanical bull. He is my most loyal and silent companion',
          'Buttons was my second familiar, a spectral dragon. He brings joy to all around him.',
          'Snowball was my last familiar, a white stoat. She is a proud and royal fey spirit that is my mentor in tactics and warfare.',
          'My familiars are my closest partners. As my creations, they are my responsibility to keep safe.',
          'Willow is the only friend I have that is my age. She drives me up a wall, but I would die for her.',
          'Tselana was a big sister to me. When I was struggling to figure myself out, she encouraged me to follow my own path and not chase after others. I begrudgingly accept the existence of her undead servants.'
        ]}
        cha={12}
        classes={[
          {
            level: 5,
            name: 'Artificer',
            subclass: 'Battle Smith'
          },
          {
            level: 6,
            name: 'Wizard',
            subclass: 'War Magic'
          }
        ]}
        con={13}
        dex={16}
        equipment={[
          'Bolt Gun',
          'Bone Pipe: 2',
          'Carpenter\'s Tools',
          'Cooks Utensils',
          'Glassblowers Tools',
          'Raptor Claw Dagger',
          'Repeating +1 Musket',
          'Smith\'s Tools',
          'Studded Leather Armor',
          'Thieves\' Tools',
          'Tinkerer\'s Tools'
        ]}
        eyes="Blue"
        features={[
          {
            name: 'Rustic Hospitality',
            sourceName: 'Vault Dweller',
            sourceType: 'Background',
            text: [
              'Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.'
            ]
          },
          {
            name: 'Lucky',
            sourceName: 'Halfling',
            sourceType: 'Race',
            text: [
              'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.'
            ]
          },
          {
            name: 'Halfling Nimbleness',
            sourceName: 'Halfling',
            sourceType: 'Race',
            text: [
              'You can move through the space of any creature that is of a size larger than yours.'
            ]
          },
          {
            name: 'Brave',
            sourceName: 'Halfling',
            sourceType: 'Race',
            text: [
              'You have advantage on saving throws against being frightened.'
            ]
          },
          {
            name: 'Naturally Stealthy',
            sourceName: 'Halfling',
            sourceType: 'Race',
            text: [
              'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
            ]
          },
          {
            name: 'Magical Tinkering',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'At 1st level, you\'ve learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves\' tools or artisan\'s tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice',
              '- The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.',
              '- Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.',
              '- The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.',
              '- A static visual effect appears on one of the object\'s surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like. The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.',
              'You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.'
            ]
          },
          {
            name: 'Spellcasting',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'You\'ve studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don\'t appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.'
            ]
          },
          {
            name: 'Infuse Item',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'At 2nd level, you\'ve gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.',
              'When you gain this feature, pick four artificer infusions to learn. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.',
              'Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.',
              'Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion\'s description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see the attunement rules in the Dungeon Master\'s Guide).',
              'Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you replace your knowledge of the infusion.',
              'You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion ends, and then the new infusion applies.',
              'If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.'
            ]
          },
          {
            name: 'Enhanced Defense Infusion',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'Item: A suit of armor or a shield',
              'A creature gains a +1 bonus to Armor Class while wearing (armor) or wielding (shield) the infused item.',
              'The bonus increases to +2 when you reach 10th level in this class.'
            ]
          },
          {
            name: 'Enhanced Weapon Infusion',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'Item: A simple or martial weapon',
              'This magic weapon grants a +1 bonus to attack and damage rolls made with it.',
              'The bonus increases to +2 when you reach 10th level in this class.'
            ]
          },
          {
            name: 'Repeating Shot Infusion',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'Item: A simple or martial weapon with the ammunition property (requires attunement)',
              'This magic weapon grants a + 1 bonus to attack and damage rolls made with it when it\'s used to make a ranged attack, and it ignores the loading property if it has it.',
              'If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target.'
            ]
          },
          {
            name: 'Homunculus Servant Infusion',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'Item: A gem or crystal worth at least 100 gp',
              'You learn intricate methods for magically creating a special homunculus that serves you. The item you infuse serves as the creature\'s heart, around which the creature\'s body instantly forms.',
              'You determine the homunculus\'s appearance. Some artificers prefer mechanical-looking birds, whereas some like winged vials or miniature, animate cauldrons.',
              'The homunculus is friendly to you and your companions, and it obeys your commands. See this creature\'s game statistics in the Homunculus Servant stat block, which uses your proficiency bonus (PB) in several places.',
              'In combat, the homunculus shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the homunculus can take any action of its choice, not just Dodge.',
              'The homunculus regains 2d6 hit points if the mending spell is cast on it. If you or the homunculus dies, it vanishes, leaving its heart in its space.'
            ]
          },
          {
            name: 'Artificer Specialist',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.'
            ]
          },
          {
            name: 'The Right Tool for the Job',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'At 3rd level, you\'ve learned how to produce exactly the tool you need: with thieves\' tools or artisan\'s tools in hand, you can magically create one set of artisan\'s tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.'
            ]
          },
          {
            name: 'Battle Smith Spells',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Battle Smith Spells table. These spells count as artificer spells for you, but they don’t count against the number of artificer spells you prepare.',
              '3rd: Heroism, Shield',
              '5th: Branding Smite, Warding Bond',
              '9th: Aura of Vitality, Conjure Barrage',
              '13th: Aura of Purity, Fire Shield',
              '17th: Banishing Smite, Mass Cure Wounds'
            ]
          },
          {
            name: 'Battle Ready',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'When you reach 3rd level, your combat training and your experiments with magic have paid off in two ways:',
              'You gain proficiency with martial weapons. When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.'
            ]
          },
          {
            name: 'Steel Defender',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'By 3rd level, your tinkering has borne you a faithful companion, a steel defender. It\'s friendly to you and your companions, and it obeys your commands. See its game statistics in the Steel Defender stat block, which uses your proficiency bonus (PB) in several places. You determine the creature\'s appearance and whether it has two legs or four; your choice has no effect on its game statistics.',
              'In combat, the defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the defender can take any action of its choice, not just Dodge.',
              'If the Mending spell is cast on it, it regains 2d6 hit points. If it has died within the last hour, you can use your smith\'s tools as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The steel defender returns to life after 1 minute with all its hit points restored.',
              'At the end of a long rest, you can create a new steel defender if you have smith\'s tools with you. If you already have a defender from this feature, the first one immediately perishes. The defender also perishes if you die.'
            ]
          },
          {
            name: 'Extra Attack',
            sourceName: 'Artificer',
            sourceType: 'Class',
            text: [
              'Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.'
            ]
          },
          {
            name: 'Spellcasting',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'Each time you gain a Wizard level, you can add two Wizard Spells of your choice to your Spellbook for free. Each of these Spells must be of a level for which you have Spell Slots, as shown on the Wizard table. On your Adventures, you might find other Spells that you can add to your Spellbook (see “Your Spellbook”).',
              'You can cast a Wizard spell as a ritual if that spell has the ritual tag and you have the spell in your Spellbook. You don\'t need to have the spell prepared.'
            ]
          },
          {
            name: 'Arcane Recovery',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'You have learned to regain some of your magical energy by studying your Spellbook. Once per day when you finish a Short Rest, you can choose expended Spell Slots to recover. The Spell Slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be 6th level or higher.',
              'For example, if you’re a 4th-level Wizard, you can recover up to two levels worth of Spell Slots. You can recover either a 2nd-level spell slot or two 1st-level Spell Slots.'
            ]
          },
          {
            name: 'Arcane Tradition ',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'When you reach 2nd Level, you choose an Arcane Tradition, shaping your practice of magic through one of eight schools, such as Evocation. Your choice grants you features at 2nd Level and again at 6th, 10th, and 14th level.'
            ]
          },
          {
            name: 'Arcane Deflection',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw.',
              'When you use this feature, you can\'t cast spells other than cantrips until the end of your next turn.'
            ]
          },
          {
            name: 'Tactical Wit',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'Starting at 2nd level, your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Intelligence modifier.'
            ]
          },
          {
            name: 'Power Surge',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'Starting at 6th level, you can store magical energy within yourself to later empower your damaging spells.',
              'You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with Dispel Magic or Counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge.',
              'Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level.'
            ]
          }
        ]}
        flaws={[
          'I tend to put the world\'s problems on my shoulders, often worsening the situation at hand.',
          'I have a near crippling fear of the undead.'
        ]}
        hair="Brown"
        height="4'0"
        hp={63}
        ideals={[
          'Knowledge. There is nothing more important than the spread of truth and honest information.',
          'Curiosity. The Universe is full of fascinating things ready to be learned and understood.'
        ]}
        int={20}
        languages={[
          'Common',
          'Halfling'
        ]}
        name="Simon Evans"
        personalityTraits={[
          'I am always chasing the next biggest problem to solve.',
          'I will go to almost any lengths to keep my friends from getting hurt.'
        ]}
        proficiencyBonus={4}
        race="Halfling"
        saves={[
          'Constitution',
          'Intelligence'
        ]}
        senses={[
          'passive Perception: 12'
        ]}
        size="Small"
        skills={[
          {
            name: 'Arcana',
            proficiencyType: 'Proficient'
          },
          {
            name: 'History',
            proficiencyType: 'Proficient'
          },
          {
            name: 'Sleight of Hand',
            proficiencyType: 'Proficient'
          },
          {
            name: 'Survival',
            proficiencyType: 'Proficient'
          }
        ]}
        skin="Pale"
        speed={[
          {
            feet: 25,
            name: ''
          }
        ]}
        spellbook={{
          spellcastingAbility: 'Intelligence',
          spellcastingLevel: 9,
          spellcastingBonus: 9,
          spellcastingSaveDc: 17,
          cantrips: [
            'Dancing Lights',
            'Frostbite',
            'Lightning Lure',
            'Mage Hand',
            'Mending',
            'Toll the Dead'
          ],
          firstLevel: [
            'Absorb Elements',
            'Alarm',
            'Cure Wounds',
            'Detect Magic',
            'Find Familiar',
            'Floating Disk',
            'Heroism',
            'Identify',
            'Magic Missile',
            'Protection from Evil and Good',
            'Shield',
            'Sleep'
          ],
          secondLevel: [
            'Branding Smite',
            'Dragon\'s Breath',
            'Heat Metal',
            'Hold Person',
            'Invisibility',
            'Misty Step',
            'Vortex Warp',
            'Warding Bond',
          ],
          thirdLevel: [
            'Counterspell',
            'Dispel Magic',
            'Haste',
            'Fly',
            'Sending',
          ],
          fourthLevel: [
            'Fabricate'
          ]
        }}
        str={10}
        subrace="Lightfoot"
        tokenAlt='Simon Evans token'
        tokenSrc={simonEvansToken}
        toolProficiencies={[
          'Cook\'s Utensils',
          'Glassblower\'s Tools',
          'Land Vehicles',
          'Thieves\' Tools',
          'Tinker\'s Tools',
        ]}
        weaponProficiencies={[
          'Firearms',
          'Martial Weapons',
          'Simple Weapons'
        ]}
        wis={14}
      />
      <CreatureBlock
        ac={13}
        actions={[
          {
            name: 'Force Strike',
            text: [
              'Ranged Weapon Attack: +9 to hit, range 30 ft., one target you can see. Hit: 1d4+4 force damage.'
            ]
          }
        ]}
        alignment="Chaotic Good"
        cha={7}
        con={12}
        conditionImmunities={[
          'Exhaustion',
          'Poisoned'
        ]}
        cr="-"
        damageImmunities={[
          'Poison'
        ]}
        dex={15}
        features={[
          {
            name: 'Evasion',
            text: [
              'If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can\'t use this trait if it\'s incapacitated.'
            ]
          },
          {
            name: 'Channel Magic. ( Reaction )',
            text: [
              'The homunculus delivers a spell you cast that has a range of touch. The homunculus must be within 120 feet of you.'
            ]
          }
        ]}
        hp={11}
        int={10}
        languages={[
          'understands the languages you speak'
        ]}
        name="Homunculus Servant - Buttons"
        proficiencyBonus={4}
        saves={[
          'Dexterity'
        ]}
        senses={[
          'darkvision 60ft',
          'passive Perception 18'
        ]}
        size="Tiny"
        skills={[
          {
            bonus: 8,
            name: 'Perception'
          },
          {
            bonus: 6,
            name: 'Stealth'
          }
        ]}
        speed={[
          {
            feet: 20,
            name: ''
          },
          {
            feet: 30,
            name: 'fly'
          }
        ]}
        str={4}
        tokenAlt="Token Homunculus Servant - Buttons"
        tokenSrc={buttonsToken}
        type="Construct"
        wis={10}
      />
      <CreatureBlock
        ac={15}
        actions={[
          {
            name: 'Force-Empowered Rend',
            text: [
              'Melee Weapon Attack: your spell attack modifier to hit, reach 5ft., one target you can see. Hit: 1d8+4 force damage.'
            ]
          },
          {
            name: 'Repair (3/Day)',
            text: [
              'The magical mechanisms inside the defender restore 2d8+4 hit points to itself or to one construct or object within 5 feet of it.'
            ]
          }
        ]}
        alignment="Lawful Good"
        cha={6}
        con={14}
        conditionImmunities={[
          'Charmed',
          'Exhaustion',
          'Poisoned'
        ]}
        cr="-"
        damageImmunities={[
          'Poison'
        ]}
        dex={12}
        features={[
          {
            name: 'Vigilant',
            text: [
              'The defender can\'t be surprised.'
            ]
          },
          {
            name: 'Deflect Attack (Reaction)',
            text: [
              'The defender imposes disadvantage on the attack roll of one creature it can see that is within 5 feet of it, provided the attack roll is against a creature other than the defender.'
            ]
          }
        ]}
        hp={32}
        int={4}
        languages={[
          'understands the languages you speak'
        ]}
        name="Steel Defender - Pie"
        proficiencyBonus={4}
        saves={[
          'Constitution',
          'Dexterity'
        ]}
        senses={[
          'darkvision 60ft',
          'passive Perception 18'
        ]}
        size="Medium"
        skills={[
          {
            bonus: 6,
            name: 'Athletics'
          },
          {
            bonus: 8,
            name: 'Perception'
          }            
        ]}
        speed={[
          {
            feet: 40,
            name: ''
          }
        ]}
        str={14}
        tokenAlt="Token Steel Defender - Pie"
        tokenSrc={pieToken}
        type="Construct"
        wis={10}
      />
      <CreatureBlock
        ac={13}
        actions={[
          {
            name: 'Bite',
            text: [
              'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: (1d1) piercing damage.'
            ]
          }
        ]}
        alignment="Neutral Good"
        cha={3}
        con={8}
        cr="0"
        dex={16}
        features={[
          {
            name: 'Keen Hearing and Smell',
            text: [
              'The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.'
            ]
          }
        ]}
        hp={1}
        int={2}
        languages={[
          'understands the languages you speak'
        ]}
        name="Familiar - Snowball"
        proficiencyBonus={2}
        senses={[
          'passive Perception 13'
        ]}
        size="Tiny"
        skills={[
          {
            bonus: 3,
            name: 'Perception'
          },
          {
            bonus: 5,
            name: 'Stealth'
          }            
        ]}
        speed={[
          {
            feet: 30,
            name: ''
          }
        ]}
        str={3}
        tokenAlt="Token Familiar - Snowball"
        tokenSrc={snowballToken}
        type="Beast"
        wis={12}
      />
    </Layout>
  );
};
