import {Navbar} from '~/design-system/components/Navbar';

import {Card} from '~/design-system/components/Card';
import {CreatureBlock} from '~/design-system/components/CreatureBlock';
import {ImageWithCaption} from '~/design-system/components/ImageWithCaption';
import {Page} from '~/design-system/components/Page';
import {Quote} from '~/design-system/components/Quote';

import ffxivCoverImage from '~/images/ffxiv-cover-image.png';
import ffxivMap from '~/images/ffxiv-map.png';
import ffxivTokenCarbuncle from '~/images/ffxiv-token-carbuncle.png';
import ffxivTokenCommandingSinEater from '~/images/ffxiv-token-commanding-sin-eater.png';
import ffxivTokenKhorichi from '~/images/ffxiv-token-khorichi.png';
import ffxivTokenSinEater from '~/images/ffxiv-token-sin-eater.png';
import ffxivTokenYshtola from '~/images/ffxiv-token-yshtola.png';

export const meta = {
  attributes: {
    meta: {
      path: 'homebrew/adventures/ffxiv-burning-of-the-greatwood',
      title: 'FFXIV - Burning of the Greatwood',
      description: 'This adventure takes place two years prior to the Warrior of Light traveling to the First. It explores the assault on the Night\'s Blessed and Y\'shtola\'s shepherding of them to safety within Slitherbough.'
    }
  }
};

export default () => {
  return (
    <>
      <Navbar/>
      <Page>
        <img alt="cover image" src={ffxivCoverImage}/>
        <h2>FFXIV - Burning of the Greatwood</h2>
        <Card title="Context">
          <p>
            This adventure takes place two years prior to the Warrior of Light traveling to the First. It explores the assault on the Night's Blessed and Y'shtola's shepherding of them to safety within Slitherbough.
          </p>
          <p>
            <strong>Expected Level:</strong> 5
          </p>
          <p>
            <strong>Expected Length:</strong> 2-3 hour session
          </p>
          <p>
            <strong>System:</strong> D&D 5e
          </p>
          <p>
            <strong>Source Material:</strong>
            {' '}
            <a href="https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv">https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv</a>
          </p>
          <p>
            <strong>FFXIV Content:</strong> Shadowbringers
          </p>
          <p>
            Characters may also start with one uncommon item each and 10,000 gil.
          </p>
        </Card>
        <h3>Introduction</h3>
        <Quote citation="Ardbert">
          <p>
            "No matter how far he goes, man cannot resist looking back on the path he has walked. The untold stories and secrets of the past can be more alluring than the promise of tomorrow. And so he braves the forests of Rak'tika in search of mystery and wonder... Of Ronka, to which all seekers of hidden truths are inevitably drawn."
          </p>
        </Quote>
        <h4>The First</h4>
        <p>
          The worlds of FFXIV are split into reflections of a central world. This adventure takes place in a reflection known as the First. This world has suffered greatly at the hands of a cataclysmic event known as The Flood of Light. This had a number of effects on the First; an everlasting day of blinding light, residents transforming into monstrous creatures, as well as mass death and destruction of 90% of the planet's land. This adventure takes place in that remaining 10%.
        </p>
        <h4>The Night's Blessed</h4>
        <p>
          The Night's Blessed are a religious organization that worship the darkness, in a world that has been flooded by light. Each member carries with them a stone, referred to as a heartstone. This stone will syphon aether from the carrier until the time of their death, upon which it is cast among more heartstones of the deceased in a dark pool. The glow from the stones in the dark water mirrors the night sky, a sight that has long been forgotten from living memory. Members of the Night's Blessed will also ot use their true names, all deferring to aliases as a metaphorical way of sheltering one's identity from the light.
        </p>
        <h4>Y'shtola Rhul</h4>
        <p>
          Y'shtola Rhul is a core member of an organization known as The Scions of the Seventh Dawn, as well as a former scholar of Sharlayan, establishing herself as a near unrivaled authority on the arcane. Her organization's sole duty is the preservation of their continent, regardless of political borders. Now located in the First, instead of her own world, she is leveraging her time to learn as much as she can about the division between reflections and this reflection's history.
        </p>
        <p>
          Y'shtola is composed and the voice of reason, often referred to by others as a "Cultured Conjurer". She is sharp witted, to the point, and cynical of those with a penchant for secrecy. Her alias, "Master Matoya", is a reference to her old mentor, with whom she regards with a deep respect and annoyance. An accident in her past has rendered her blind, though she has learned to see through the sense of the aether around her.
        </p>
        <h3>Meeting "Master Matoya"</h3>
        <Quote>
          <p>
            Beams of light slice through the dense foliage overhead, the everlasting flood of light providing just a dim glow for the forest floors of the Rak'tika Greatwood. Nestled deep within, a wooden fortress flanked by watchtowers at every corner, stands tall. Behind its walls, a bustling crowd of dark cloaked figures go about their daily business. You, however, seek a woman by the name of "Master Matoya". It is her that summoned you here and holds the details of your mission. 
          </p>
        </Quote>
        <p>
          The party finds themselves in the bustling headquarters of the Night's Blessed, a group that worships the darkness in a world flooded with light. They make their home in the shadows of the The Rak'tika Greatwood.
        </p>
        <p>
          It is under these lush canopies that the party is summoned by a miqo'te going by the alias “Master Matoya”, though her actual name is Y'shtola Rhul. She has commissioned the party for assistance in excavating ruins deep in the dense forests.
        </p>
        <Quote>
          <p>
            A white haired miqo'te woman sits alone at a table, a book in one hand and a cup of tea in the other. She appears to be reading, though the light in her eyes has long since faded to a milky white, appearing to be blind. Nonetheless, she closes her book to look up at you and smiles. With an air of professionalism, she greets you. "Well, this is a pleasant surprise. You're early. I am Master Matoya."
          </p>
        </Quote>
        <p>
          Y'shtola will mention the following upfront:
        </p>
        <ul>
          <li>
            She is a student of the arcane, looking to uncover the empire of Ronka's lost secrets.
          </li>
          <li>
            There is a network of ruins not far from here she would like to explore, but it is teeming with sin eaters. The she is capable, she would rather not go alone or risk members of the Night's Blessed.
          </li>
        </ul>
        <p>
          Y'shtola will mention the following if pressed:
        </p>
        <ul>
          <li>
            She is interested in studying a number of subjects; The Flood of Light, Ronka's ancient history and mythology, and teleportation magic.
          </li>
          <li>
            She is in fact not from these woods, but she will not say where she is from.
          </li>
          <li>
            She is here waiting for a long-lost friend to arrive.
          </li>
        </ul>
        <p>
          An insight check of at least 15 will reveal that Y'shtola is likely not from here. Her mannerisms are strange and unlike anything you've seen on the First.
        </p>
        <p>
          An insight check of at least 18 will reveal that she is absolutely hiding something from the group ( Her being from the Source and intent to leave the First ), but she does not seem to harbor any ill intent with her motives.
        </p>
        <p>
          It is not long after introductions that an explosion is heard and smoke is seen on the horizon. Heat begins to creep ever closer to your group.
        </p>
        <Quote>
          <p>
            Conversation is cut short by the sound of screams and billowing heat creeping its way ever closer in your direction. Smoke rises to the treetops and the beams of light that would typically penetrate the canopy is replaces by the warm glow of flames. Night's Blessed sprint away from the gates, chased by a wave of white skinned demonic creatures of every shape and size. Y'shtola rises from her chair, staff in hand, and unleashes a powerful jet of flame towards the invaders. "Change of plans!", she exclaims.
          </p>
        </Quote>
        <p>
          The camp is currently being invaded by a hoard of creatures called sin eaters. These creatures are those have have been consumed by the Flood of Light and transformed into ravenously hungry monsters. They also can infect others and transform them into beings like themselves.
        </p>
        <p>
          Y'shtola will explain to the group that this attack is far from random and is too coordinated for such mindless creatures. She suspects something is coordinating them. Y'shtola will suggest that she lead the Night's Blessed to safety, while the party finds the mastermind of the assault and slays them.

        </p>
        <p>
          A persuasion check of 18 can persuade Y'shtola to join the party instead.
        </p>
        <h3>Exploring the Forest</h3>
        <p>
          Time is of the essence. The party's ability to quickly navigate the forests and end the threat will have direct consequences on the safety of the Night's Blessed people.
        </p>
        <p>
          It takes a minimum of two hours to reach the location of the commanding sin eater. Keep track of how many hours it takes to reach this location and reference this number at the end of this adventure.
        </p>
        <p>
          Base: 2 hours
        </p>
        <p>
          Survival check to track down the path of the sin eaters:
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">Roll</th>
              <th scope="col">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-5</td>
              <td>+3 hours</td>
            </tr>
            <tr>
              <td>6-9</td>
              <td>+2 Hours</td>
            </tr>
            <tr>
              <td>10-14</td>
              <td>+1 Hour</td>
            </tr>
            <tr>
              <td>15-17</td>
              <td>No change</td>
            </tr>
            <tr>
              <td>18+</td>
              <td>-1 Hour</td>
            </tr>
          </tbody>
        </table>
        <p>
          Check to move through the rough terrain: Group acrobatics, survival, etc.
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">Roll</th>
              <th scope="col">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-5</td>
              <td>+2 hours</td>
            </tr>
            <tr>
              <td>6-11</td>
              <td>+1 Hours</td>
            </tr>
            <tr>
              <td>12-14</td>
              <td>No change</td>
            </tr>
            <tr>
              <td>15-17</td>
              <td>-1 Hour</td>
            </tr>
            <tr>
              <td>18+</td>
              <td>-2 Hours</td>
            </tr>
          </tbody>
        </table>
        <p>
          A passive perception of 13 spots a sin eater before they spot you. The players can opt to wait one hour for it to pass or fight it in combat.
        </p>
        <p>
          Add any time spent resting to this total.
        </p>
        <h3>Exploring the Ruins</h3>
        <ImageWithCaption
          imageAlt="map"
          imageSrc={ffxivMap}
        />
        <p>
          This temple is one in remembrance and denouncement of a people known as the Ascians. They provided much of the power and knowledge that forged Ronka into the thriving powerhouse it was, but also were found to be those that would indirectly cause the Flood of Light.
        </p>
        <h4>Room A: The Lobby</h4>
        <Quote>
          <p>
            You enter a vast hall, vaulted ceilings looming several stories overhead. Mist hugs the floor, weaving between the thick stone columns that divide the room into a grid. The walls are marked with intricate unintelligible script. Colorful paintings of a thriving stonework city coat the walls.
          </p>
        </Quote>
        <p>
          4 <strong>Sin Eaters</strong> patrol the room. They are openly hostile and will attack the party on sight.
        </p>
        <p>
          Closer inspection of the columns reveals that they are carved in the likeness of cloaked, masked, figures. Their masks have been scratched into and defaced to hide any identifying features.
        </p>
        <p>
          A casting of Comprehend Languages, will reveal the room to be a monument to the "Masked Angels", who came down to teach the Ronkans in the ways of the arcane.
        </p>
        <h4>Room B: The Crossroads</h4>
        <Quote>
          <p>
            Two doors flank the east and west corridors of this room. To the west, the door hangs open a sliver and you can hear a low groan of pain from within.
          </p>
        </Quote>
        <p>
          The door to the left is open and the door to the right is unlocked.
        </p>
        <h4>Room C: The Fallen Adventurer</h4>
        <Quote>
          <p>
            A young au-ra woman lays curled on the floor, the contents of her bag spilled open in front of her. Her hair is black and her eyes gold. A leather tome is at her side. A glowing blue, rodent-like, creature licks at her face.
          </p>
        </Quote>
        <p>
          This young adventurer's name is Khorichi. She attempted to brave exploring the ruins and was infected by the sin eaters in the previous room. She is currently at one hit point and has six days remaining before she fully transforms.
        </p>
        <p>
          Khorichi came here looking for treasure, but did not anticipate the dangers within. She knows her time is limited and would like to do some good before she fully transforms and loses herself. She is not certain of how much time she has remaining though.
        </p>
        <h4>Room D: The Way is Blocked</h4>
        <Quote>
          <p>
            Rubble blocks a long winding corridor ahead, the ceiling having caved in. Space between the boulders seem large enough for small creatures to fit through.
          </p>
        </Quote>
        <p>
          The rubble has an AC of 10 and 20 hit points. Attacking the rubble alerts creatures further ahead in the dungeon to the party's presence. Alternatively, an hour can be spent manually clearing the rubble by hand.
        </p>
        <p>
          An investigation or perception check of 13 reveals an <strong>Amulet of Health</strong>
        </p>
        <p>
          <strong>Amulet of Health:</strong> Wondrous item, rare (requires attunement) Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.
        </p>
        <h4>Room E: The Commander</h4>
        <Quote>
          <p>
            An angelic woman with pale cracked skin observes you as you enter the hall. Her abnormally long arms and tipped with long talons. She hovers just a few inches off the ground, supported by a pair of effervescent wings. Her wings refract a dim glow emanating from her body, casting prismatic rays of color across the stone tile floor.
          </p>
        </Quote>
        <p>
          1 <strong>Commanding Sin Eater</strong> and 2 <strong>Sin Eaters</strong> are in this room. If the players announced their presence, when clearing the rubble, the 2 <strong>Sin Eaters</strong> are flanking the entrance of this room and gain a surprise round on the party. These creatures are hostile on sight and will fight to the death.
        </p>
        <h4>Room F: The Mural</h4>
        <Quote>
          <p>
            A mosaic art piece of what appear to be spirits of light and dark, once proudly displayed at the far end of this champer, has been defaced by a crudely painted scene. A red masked figure in black robes looms over a stonework city, its buildings in flame and people running from invading armies.
          </p>
        </Quote>
        <p>
          There are two chests in this room that are locked. They can be unlocked with a DC 12 check with thieves' tools. The north chest contains 100,000 gil worth of jewels and old coins. The southern chest contains an Ioun Stone of Greater Absorption. It has the added effect of absorbing light and staving off transformation into a sin-eater, as long as it is worn.
        </p>
        <p>
          <strong>Ioun Stone:</strong> Requires Attunement. When you use an Action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an Action to grasp or net the stone to separate it from you, either by making a successful Attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an Action to seize and stow the stone, Ending its Effect. A stone has AC 24, 10 Hit Points, and Resistance to all damage. It is considered to be an object that is being worn while it orbits your head.
        </p>
        <p>
          <strong>Greater Absorption (Legendary).:</strong> While this marbled lavender and green ellipsoid orbits your head, you can use your Reaction to cancel a spell of 8th Level or lower cast by a creature you can see and targeting only you.
        </p>
        <h3>To Slitherbough</h3>
        <p>
          <strong>Survivors:</strong> Not all will make it to Slitherbough. If the party acts swiftly, only a handful will be lost. If the party perishes and fails to slay the commanding sin eater, the following attacks on Slitherbough will slay all but a few.
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Survivors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 Hours</td>
              <td>500 Survivors</td>
            </tr>
            <tr>
              <td>3 Hours</td>
              <td>400 Survivors</td>
            </tr>
            <tr>
              <td>4 Hours</td>
              <td>300 Survivors</td>
            </tr>
            <tr>
              <td>5 Hours</td>
              <td>200 Survivors</td>
            </tr>
            <tr>
              <td>6 Hours</td>
              <td>150 Survivors</td>
            </tr>
            <tr>
              <td>7+ Hours</td>
              <td>100 Survivors</td>
            </tr>
          </tbody>
        </table>
        <p>
          If Y'shtola joined the party, cut the number of survivors in half.
        </p>
        <p>
          <strong>Reward:</strong> Y'shtola will reward the group 50,000 gil for the slaying of the commanding sin eater. If Y'shtola did not join the party, she will award an additional 20,000 gil for any information pertaining to her research.
        </p>
        <CreatureBlock
          name="Commanding Sin Eater"
          tokenAlt="Commanding Sin Eater Token"
          tokenSrc={ffxivTokenCommandingSinEater}
          cr={'5'}
          ac={15}
          hp={140}
          proficiencyBonus={3}
          speed={[
            {
              feet: 30,
              name: ''
            },
            {
              feet: 30,
              name: 'fly'
            }
          ]}
          size="Large"
          type="Monstrosity"
          alignment="Chaotic Evil"

          str={18}
          dex={16}
          con={16}
          int={11}
          cha={10}
          wis={14}

          saves={[
            'Constitution',
            'Charisma'
          ]}

          senses={[
            'darkvision 60ft.'
          ]}

          damageImmunities={[
            'Radiant'
          ]}

          damageResistances={[
            'Bludgeoning; Piercing, and Slashing from Nonmagical Attacks'
          ]}

          actions={[
            {
              name: 'Multiattack',
              text: [
                'The Commanding Sin Eater makes two attacks, only one of which can be a Radiant Impale.'
              ]
            },
            {
              name: 'Long Sword',
              text: [
                ' Melee Weapon Attack: +7 to hit, reach 5ft., one creature. Hit: 1d8+4 slashing damage and 2d6 radiant damage.'
              ]
            },
            {
              name: 'Radiant Impale (Recharge 5-6)',
              text: [
                'Melee Weapon Attack: +7 to hit, reach 5 ft., Hit: 2d8+4 piercing damage plus 2d6 radiant damage. The target\'s hit point maximum is reduced by an amount equal to the radiant damage taken, and the sin eater regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target must succeed a DC 15 CHA saving throw. On a failure, the target will transform, slowly, into a sin eater over the course of seven days. If a target would reduce to zero hit points from this attack, they reduce to one hit point instead.'
              ]
            }
          ]}

          features={[
            {
              name: 'Absorb Light',
              text: [
                'When this creature is successfully hit with an attack that deals radiant damage, it may choose to heal for that many hit points or deal an extra 1d6 of radiant damage on their next successful attack.'
              ]
            }
          ]}
        />

        <CreatureBlock
          name="Khorichi"
          tokenAlt="Token Khroichi"
          tokenSrc={ffxivTokenKhorichi}
          cr={'2'}
          ac={13}
          hp={50}
          proficiencyBonus={2}
          speed={[
            {
              feet: 30,
              name: ''
            }
          ]}
          size="Medium"
          type="Humanoid (Au-ra, xaela)"
          alignment="Chaotic Good"

          str={10}
          dex={14}
          con={10}
          int={16}
          cha={14}
          wis={12}

          saves={[
            'Intelligence',
            'Wisdom'
          ]}

          skills={[
            {
              bonus: 5,
              name: 'Arcana'
            },
            {
              bonus: 5,
              name: 'History'
            },
            {
              bonus: 3,
              name: 'Survival'
            }
          ]}

          languages={[
            'Common',
            'Elezen'
          ]}

          actions={[
            {
              name: 'Short Sword',
              text: [
                'Melee Weapon Attack: +4 to hit, range 5ft., one creature. Hit: 1d6+2 piercing damage.'
              ]
            }
          ]}

          features={[
            {
              name: 'Savage Attacks',
              text: [
                'When you score a critical hit with a melee weapon attack, you can roll one of the weapon\'s damage dice one additional time and add it to the extra damage of the critical hit.'
              ]
            },
            {
              name: 'Tactics',
              text: [
                'She has developed a head for tactics during battle. You can use this feature three times. She regains any expended uses when she finishes a long rest.'
              ]
            },
            {
              name: 'Aetherial Ally',
              text: [
                'You learn to summon an aetherial creature to assist you in battle. The creature is friendly to you and your companions and obeys your commands. You are able to summon carbuncles.'
              ]
            },
            {
              name: 'Aetherial Barrier (Tactic)',
              text: [
                'When a creature you can see attacks a target other than you that is within 15ft. of you or your aetherial ally, you can use your reaction to impose disadvantage on the attack roll.'
              ]
            },
            {
              name: 'Tactical Eye',
              text: [
                'When you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30ft. of you, if the target can see or hear you.'
              ]
            }
          ]}

          spellbook={{
            spellcastingAbility: 'Intelligence',
            spellcastingBonus: 5,
            spellcastingLevel: 3,
            spellcastingSaveDc: 13,
            cantrips: [
              'Create Bonfire',
              'Light',
              'Spare the Dying'
            ],
            firstLevel: [
              'Chromatic Orb',
              'Comprehend Language',
              'Detect Magic',
              'Faerie Fire',
              'Hex',
              'Identify',
              'Magic Missile'
            ],
            secondLevel: [
              'Detect Thoughts',
              'Hold Person'
            ]
          }}
        />
        <CreatureBlock
          name="Emerald Carbuncle"
          tokenAlt="Emerald Carbuncle Token"
          tokenSrc={ffxivTokenCarbuncle}
          cr={'-'}
          ac={14}
          hp={16}
          proficiencyBonus={2}
          speed={[
            {
              feet: 30,
              name: ''
            }
          ]}
          size="Tiny"
          type="Beast"
          alignment="Unaligned"

          str={6}
          dex={14}
          con={13}
          int={8}
          cha={14}
          wis={11}

          actions={[
            {
              name: 'Downburst',
              text: [
                'Melee Magical Attack: +5 to hit, Reach 5ft., one target. 1d8+4 thunder damage'
              ]
            },
            {
              name: 'Gust',
              text: [
                'Ranged Magical Attack: +5 to hit, Reach 30ft., one target. Hit: 1d6+4 thunder damage'
              ]
            },
            {
              name: 'Back Draft (Recharge 6)',
              text: [
                'Melee Magical Attack: +5 to hit, reach 5ft., one target. Hit: 1d6+4 thunder damage. When a creature is hit by Back Draft, that creature must make a DC 13 Strength saving throw. On a failed save, they are knocked back 10ft., and are not knocked back on a success.'
              ]
            }
          ]}
        />
        <CreatureBlock
          name="Sin Eater"
          tokenAlt="Sin Eater Token"
          tokenSrc={ffxivTokenSinEater}
          cr={'1/2'}
          ac={13}
          hp={50}
          proficiencyBonus={2}
          speed={[
            {
              feet: 30,
              name: ''
            }
          ]}
          size="Tiny"
          type="Beast"
          alignment="Unaligned"

          str={14}
          dex={14}
          con={14}
          int={10}
          cha={10}
          wis={12}

          actions={[
            {
              name: 'Claw',
              text: [
                'Melee Weapon Attack: +4 to hit, reach 5ft., one creature. Hit: 1d6+2 slashing damage and 1d4 radiant damage.'
              ]
            },
            {
              name: 'Radiant Impale (Recharge 6)',
              text: [
                'Melee Weapon Attack: +4 to hit, reach 5ft., Hit: 1d6+2 piercing damage plus 3d4 radiant damage. The target\'s hit point maximum is reduced by an amount equal to the radiant damage taken, and the sin eater regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target must succeed a DC 12 CHA saving throw. On a failure, the target will transform, slowly, into a sin eater over the course of seven days. If a target would reduce to zero hit points from this attack, they reduce to one hit point instead.'
              ]
            }
          ]}

          damageResistances={[
            'Radiant'
          ]}

          senses={[
            'darkvision 60ft.'
          ]}
        />
        <CreatureBlock
          name="Y'shtola Rhul (Master Matoya)"
          tokenAlt="Y'shtola Rhul"
          tokenSrc={ffxivTokenYshtola}
          cr={'8'}
          ac={13}
          hp={75}
          proficiencyBonus={2}
          speed={[
            {
              feet: 35,
              name: ''
            }
          ]}
          size="Medium"
          type="Humanoid (Miqo'te Seekers of the Sun)"
          alignment="Neutral Good"

          str={8}
          dex={16}
          con={12}
          int={18}
          cha={16}
          wis={11}

          saves={[
            'Intelligence',
            'Wisdom'
          ]}

          skills={[
            {
              bonus: 7,
              name: 'Arcana'
            },
            {
              bonus: 2,
              name: 'Athletics'
            },
            {
              bonus: 7,
              name: 'History'
            },
            {
              bonus: 6,
              name: 'Perception'
            }
          ]}

          senses={[
            'truesight 60ft.'
          ]}

          languages={[
            'Common',
            'Elezen',
            'Miqo\'te'
          ]}

          actions={[
            {
              name: 'Quarterstaff',
              text: [
                'Melee Weapon Attack, +2 to hit, range 5t, 1d6-1 bludgeoning damage.'
              ]
            },
            {
              name: 'Quarterstaff (Two Handed)',
              text: [
                'Melee Weapon Attack, +2 to hit, range 5t, 1d8-1 bludgeoning damage.'
              ]
            }
          ]}

          features={[
            {
              name: 'Manafont',
              text: [
                'Y\'shtola has unlocked the secrets of storing magical energy in her body and utilizing it to assist in spell casting.'
              ]
            },
            {
              name: 'Mana points',
              text: [
                'Y\'shtola has a maximum of nine Mana points. She regains all spent mana points when she finishes a long rest.'
              ]
            },
            {
              name: 'Leylines',
              text: [
                'When you cast a spell, the residual mana from your spell temporarily creates a leyline, which can be manipulated with your manafont. If you cast a spell last turn and have not moved or taken any other actions during your turn, you may spend a number of mana points equal to that spell\'s level to cast an evocation spell equal to or lower than that level without expending a spell slot. Your turn immediately ends after casting the spell. You can cast spells in this way no higher in level than 5th.'
              ]
            },
            {
              name: 'Unstable Aether',
              text: [
                'When Y\'shtola casts a spell, she may spend one mana point to reroll any damage die which resulted in a 1 or 2. She must use the resulting rolls.'
              ]
            },
            {
              name: 'Polygot',
              text: [
                'Y\'shtola\'s magical studies have warped her mind and understanding of the world. She can read all writing.'
              ]
            }
          ]}

          spellbook={{
            spellcastingAbility: 'Intelligence',
            spellcastingBonus: 7,
            spellcastingLevel: 11,
            spellcastingSaveDc: 15,
            cantrips: [
              'Blade Ward',
              'Firebolt',
              'Mage Hand',
              'Produce Flame',
              'Thaumaturgy'
            ],
            firstLevel: [
              'Chromatic Orb',
              'Find Familiar',
              'Detect Magic',
              'Shield'
            ],
            secondLevel: [
              'Hold Person',
              'Misty Step',
              'Aganazzar\'s Scorcher'
            ],
            thirdLevel: [
              'Call Lightning',
              'Dispel Magic',
              'Fireball'
            ],
            fourthLevel: [
              'Polymorph',
              'Wall of Fire'
            ],
            fifthLevel: [
              'Flame Strike',
              'Wall of Force'
            ],
            sixthLevel: [
              'Investiture of Flame '
            ]
          }}
        />
      </Page>
    </>
  );
};
