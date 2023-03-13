import {CharacterBlock} from '~/design-system/components/CharacterBlock';
import {CreatureBlock} from '~/design-system/components/CreatureBlock';

import {Layout} from '~/components/Layout';

import ravenToken from '~/images/token-raven.png';
import victoriaFaerithToken from '~/images/token-victoria-faerith.png';

export const meta = {
  attributes: {
    meta: {
      path: 'victoria-faerith',
      title: "Victoria Faerith",
      description: 'Tiefling - Wizard, Bladesinger (5)'
    }
  }
};

export default () => {
  return (
    <Layout>
      <h2>Victoria Faerith</h2>
      <CharacterBlock
        ac={14}
        actions={[
          {
            name: 'Rapier',
            text: [
              'Melee Weapon Attack: +6 to hit, reach 5ft., one target. Hit: (1d8+3) piercing damage.'
            ]
          },
          {
            name: 'Dagger +1',
            text: [
              'Melee or Ranged Weapon Attack: +7 to hit, reach 5ft., one target. Hit: (1d4+4) piercing damage.'
            ]
          }
        ]}
        age={26}
        alignment="Neutral Good"
        armorProficiencies={[
          'Light Armor'
        ]}
        background="Custom (OneD&D UA)"
        backstory={[
          'Victoria got her start on the city streets of Sharn, spending her teen years selling papers and acting as a courier for spare coin. Through this line of work, she developed a close relationship with a local detective by the name of Ken, who took the young woman under his wing. In exchange for information on her various odd jobs, Ken would teach her the harmonica, swordsmanship, and mentor her in the ways of detective work. She would later join onto his practice as his investigative partner.',
          'Victoria and Ken worked many jobs together as partners, at the disapproval of her parents, who regarded all forms of law enforcement with contempt. Victoria excelled at investigation however, wanting to push her limits beyond a meager existence on the streets and excel on her own merit.',
          'Despite working closely for years, there was one job Ken refused to let Victoria work on. In a rare move, he instead opted to take on the case alone. Victoria\'s patience would run out over the following weeks, though by the time she had decided to follow after her mentor, he was already dead. She would discover his burned, decimated, corpse discarded in a back alley, while an unknown party burned the their practice to the ground in her absence.',
          'Victoria would come to blame herself, taking up her mentor\'s sword to seek vengeance on those who slew him. She would go years with no leads, stewing in despair and venting through the only way she could allow herself to; through somber blues licks on her harmonica. She still keeps an eye out for information on Ken\'s murder, but has almost entirely lost hope.',
          'Victoria\'s bladesong manifests as a magical aura that envelops her body as she fights. Unlike her mentor, her aura is erratic, infernal, difficult to control, and leaves her exhausted after use. She attempts daily to bring it under control, like her mentor could, but is unable to do so. She has yet to realize that she cannot mimic the serene nature of her mentor\'s aura without first letting him go and developing her own path.'
        ]}
        bonds={[
          'Ken was my partner and the man who should have been my father. He is now dead and I feel lost without him.',
          'Someone killed my mentor. I will kill them in return and restore honor Ken\'s name.',
          'My parents never believed in me. I will prove them wrong and be better than them.',
        ]}
        cha={14}
        classes={[
          {
            level: 5,
            name: 'Wizard',
            subclass: 'Bladesinger'
          }
        ]}
        con={11}
        damageResistances={[
          'Fire'
        ]}
        dex={16}
        equipment={[
          'Leather armor',
          'Dagger +1',
          'Ken\'s rapier (Arcane Focus)',
          'Spellbook',
          'Harmonica',
          'Backpack',
          'Case file',
          'Bottle of ink',
          'Ink pen',
          '10 Pages of parchment',
          'Little bag of sand',
          'Small knife'
        ]}
        eyes="Purple"
        features={[
          {
            name: 'Darkvision',
            sourceName: 'Tiefling',
            sourceType: 'Race',
            text: [
              'You have Darkvision with a range of 60 feet.'
            ]
          },
          {
            name: 'Fiendish Legacy',
            sourceName: 'Tiefling',
            sourceType: 'Race',
            text: [
              'You are the recipient of a fiendish legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table:',
              'Abyssal, associated with Chaotic Evil planes; Chthonic, associated with Neutral Evil planes; Infernal, associated with Lawful Evil planes.',
              'You gain the 1st-level benefit of the chosen legacy.',
              'Starting at 3rd level and again at 5th level, you gain the ability to cast a higher-level Spell with this trait, as shown on the table. Once you cast the Spell with this trait, you can’t cast that Spell with it again until you finish a Long Rest*; however, you can cast the Spell using any Spell Slots you have of the appropriate level.',
              'Intelligence, Wisdom, or Charisma is your spellcasting ability for the Spells you cast with this trait (choose the ability when you select the lineage).',
              'Infernal. 1st Level: You have Resistance to Fire Damage. You also know the Fire Bolt cantrip. 3rd level: Hellish Rebuke. 5th level: Darkness.'
            ]
          },
          {
            name: 'Otherworldly Presence',
            sourceName: 'Tiefling',
            sourceType: 'Race',
            text: [
              'You know the Thaumaturgy cantrip. When you cast it with this trait, the Spell uses the same spellcasting ability you use for your Fiendish Legacy trait.'
            ]
          },
          {
            name: 'Instrumental Training',
            sourceName: 'Background',
            sourceType: 'Background',
            text: [
              'You gain Tool Proficiency* with three Musical Instruments* of your choice.'
            ]
          },
          {
            name: 'Inspiring Song',
            sourceName: 'Background',
            sourceType: 'Background',
            text: [
              'As you finish a Long Rest, you can play a song on a Musical Instrument with which you have Tool Proficiency and give Inspiration* to a single ally who hear the song.'
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
              'You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.',
              'For example, if you\'re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.'
            ]
          },
          {
            name: 'Arcane Tradition',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation. The School of Evocation is detailed at the end of the class description, and more choices are available in other sources.',
              'Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.'
            ]
          },
          {
            name: 'Training in War and Song',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'When you adopt this tradition at 2nd level, you gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice.',
              'You also gain proficiency in the Performance skill if you don\'t already have it.'
            ]
          },
          {
            name: 'Bladesong',
            sourceName: 'Wizard',
            sourceType: 'Class',
            text: [
              'Starting at 2nd level, you can invoke an elven magic called the Bladesong, provided that you aren\'t wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus.',
              'You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss the Bladesong at any time (no action required).',
              'While your Bladesong is active, you gain the following benefits:',
              '- You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1)',
              '- Your walking speed increases by 10 feet.',
              '- You have advantage on Dexterity (Acrobatics) checks.',
              'You gain a bonus to any Constitution saving throw you make to maintain your concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).',
              'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.'
            ]
          }
        ]}
        flaws={[
          'My hatred of my enemies is blind and unreasoning.',
          'I am completely incapable of understanding flirting.',
          'I am suspicious of strangers and suspect the worst of them. Most people are good, but it takes one bad person to fuck you.'
        ]}
        hair="White"
        height="5'2"
        hp={22}
        ideals={[
          'Greater Good. Our lot is to lay down our lives in defense of others.'
        ]}
        int={18}
        languages={[
          'Common',
          'Infernal'
        ]}
        name="Victoria Faerith"
        personalityTraits={[
          'I refuse to go by the name V. This is what my partner called me. I lash out at any and all that use that name.',
          'I always travel light. I carry only what I can fit in my coat.',
          'Years on investigations and on the streets left me with a habit of shielding my emotions at face value. I still express myself with music and the occasional slip.'
        ]}
        proficiencyBonus={3}
        race="Tiefling"
        saves={[
          'Constitution',
          'Intelligence'
        ]}
        senses={[
          'passive Perception: 11',
          'darkvision 60ft.'
        ]}
        size="Medium"
        skills={[
          {
            name: 'Acrobatics',
            proficiencyType: 'Proficient'
          },
          {
            name: 'Arcana',
            proficiencyType: 'Proficient'
          },
          {
            name: 'Insight',
            proficiencyType: 'Proficient'
          },
          {
            name: 'Investigation',
            proficiencyType: 'Proficient'
          },
          {
            name: 'Performance',
            proficiencyType: 'Proficient'
          }
        ]}
        skin="Pale"
        speed={[
          {
            feet: 30,
            name: ''
          },
          {
            feet: 40,
            name: 'Bladesong'
          },
          {
            feet: 60,
            name: 'Haste'
          },
          {
            feet: 80,
            name: 'Bladesong & Haste'
          }
        ]}
        spellbook={{
          spellcastingAbility: 'Intelligence',
          spellcastingLevel: 5,
          spellcastingBonus: 7,
          spellcastingSaveDc: 15,
          cantrips: [
            'Create Bonfire',
            'Green Flame Blade',
            'Firebolt',
            'Light',
            'Message',
            'Thaumaturgy'
          ],
          firstLevel: [
            'Absorb Elements',
            'Burning Hands',
            'Comprehend Languages',
            'Find Familiar',
            'Hellish Rebuke',
            'Identify',
            'Shield',
            'Sleep',
            'Thunderwave'
          ],
          secondLevel: [
            'Darkness',
            'Invisibility',
            'Locate Object',
            'Misty Step',
            'Shadow Blade'
          ],
          thirdLevel: [
            'Haste',
            'Lightning Bolt'
          ]
        }}
        str={7}
        subrace="Infernal Legacy (OneD&D UA)"
        tokenAlt='Victoria Faerith token'
        tokenSrc={victoriaFaerithToken}
        toolProficiencies={[
          'Drums',
          'Harmonica',
          'Flute',
          'Lute'
        ]}
        weaponProficiencies={[
          'Daggers',
          'Darts',
          'Slings',
          'Quarterstaffs',
          'Light Crossbows',
          'Rapiers'
        ]}
        wis={12}
      />
      <CreatureBlock
        ac={12}
        actions={[
          {
            name: 'Beak',
            text: [
              'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d1) piercing damage.'
            ]
          }
        ]}
        alignment="Unaligned"
        cha={6}
        con={8}
        cr="0"
        dex={14}
        features={[
          {
            name: 'Mimicry',
            text: [
              'The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.'
            ]
          }
        ]}
        hp={1}
        int={2}
        name="Raven"
        proficiencyBonus={2}
        senses={[
          'passive Perception 13'
        ]}
        size="Tiny"
        skills={[
          {
            bonus: 3,
            name: 'Perception'
          }
        ]}
        speed={[
          {
            feet: 10,
            name: ''
          },
          {
            feet: 50,
            name: 'Fly'
          },
        ]}
        str={2}
        tokenAlt="Raven Token"
        tokenSrc={ravenToken}
        type="Beast"
        wis={12}
      />
    </Layout>
  );
};
