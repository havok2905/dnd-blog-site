import {CreatureBlock} from '~/design-system/components/CreatureBlock';
import {Quote} from '~/design-system/components/Quote';

import {Layout} from '~/components/Layout';

import coverImage from '~/images/seers-cover-image.png';
import seerToken from '~/images/seers-seer-token.png';
import seerLarvaToken from '~/images/seers-seer-larva-token.png';

export const meta = {
  attributes: {
    meta: {
      path: 'creatures/seers',
      title: "Seers",
      description: 'The Seers are a celestial race of beings that were created as the original children of the old gods. They inherited their creator\'s ability to tap into and bend the fabric of reality, but little of old gods\' will to use their powers for others.'
    }
  }
};

export default () => {
  return (
    <Layout>
      <img alt="seers cover image" src={coverImage}/>
      <Quote>
        <>
          <h3>The Arctic Anomaly at Celeste</h3>
          <h4>Transcript, Montague Mining Company Case 598KC</h4>
          <ul>
            <li><strong>Subject ID:</strong> 598KC-01</li>
            <li><strong>Interviewer ID:</strong> MMPE-20304</li>
          </ul>
          <p>
            <strong>Subject:</strong> "Towering antlered demons waded through the bay towards the docks. They were faceless, but I could feel a cold, unforgiving, malice in their gaze."
          </p>
          <p>
          <strong>Interviewer:</strong> "I see... Is this where you lost sight of REDACTED?"
          </p>
          <p>
            <strong>Subject:</strong> "...I'd prefer to leave my daughter out of this."
          </p>
          <p>
            <strong>Interviewer:</strong> "Sir, with respect... You know that's not possible. Would you prefer I refer to her by her celestial name?"
          </p>
          <p>
            <strong>Subject:</strong> "Go to hell."
          </p>
        </>
      </Quote>
      <h2>Seers</h2>
      <p>
        The Seers are a celestial race of beings that were created as the original children of the old gods. They inherited their creator's ability to tap into and bend the fabric of reality, but little of old gods' will to use their powers for others.
      </p>
      <p>
        These beings work only through small changes, invoking effects on the planes that ripple through years or even decades. For Seers, these changes are primarily entertainment, looked upon as a sophisticated form of dance and song. Most Seers are standoffish, wanting to use others to solve their problems for them.
      </p>
      <p>
        Above all though, Seers fear the mortal beings of the planes. They view mortal beings as a direct threat to their way of life, with their ability to naturally ascend to lower godhood and attain power that can nullify a Seer's influence. A Seer will stop at nothing to slay any mortal that has been marked for ascension to godhood.
      </p>
      <p>
        Seers do not naturally reproduce. Instead, after a millennia of studying their own creation, Seers use their power to craft new Seers through magic. These larva are crafted in vast birthing vats what span the underground. They require immense attention and centuries of growth to transform into a fully realized Seer. They complete this process by slowly siphining the lifeforce of mortal beings on the Material plane from afar, often acting as celestial patrons. Until this moment though, a larva will spend the majority of their time feeding from the safety of their subterranean homes.
      </p>
      <h2>The Nexus ( Plane of Observation )</h2>
      <Quote>
        <p>
          Swirling, lightning blue, streams of light converge into miniature suns, bobbing in place against a gradient skyline of deep purples of navy. The ground is smooth, flat, and just slightly reflective, There is no breeze, the air dry and cold, each breath visible in front of ones face. Scattered across the horizon are hundreds of identical steel huts, each granting entryway to a maze of undergound metal tunnels.
        </p>
      </Quote>
      <p>
        The Plane of Observation, also referred to as "The Nexus" is the domain of the old gods, the center of the planar system, and where they first crafted the Seers. It was here where the Seers were first created and where they would return after their banishment from the Material Plane.
      </p>
      <p>
        This plane is a cold, dry, unforgiving place. It is flat, rocky, ad seemingly lifeless. Vast metal tunnels snake through the underground, giving homes to the Seers, where they artificially craft new Seer Larva in vast chambers.
      </p>
      <p>
        It is possible to find yourself transported to the Nexus by traveling though a damaged planar gate, traversing through an area with strong weakness between the fabric of the planes, or through direct intervention by the Seers ( who travel between the planes freely ). There is one manufactured gate to the Nexus, crafted by Henrick Montague himself. Though this gate is held as a deeply guarded secret and known only to himself and a few trusted confidantes.
      </p>
      <p>
        <strong>Planar Domains:</strong> The Plane of Observation represents each of the domains of the six old gods; Force, Light, Movement, Presence, Void, Will
      </p>
      <p>
        <strong>Suns of Observation:</strong> The blue sun-like orbs that dot the plane may grant an observer abstract visions into any plane, time period, and location. Without having innate celestial abilities, the visions granted from these orbs would break an observers minds, potentially for good. The Seers harness these suns for themselves, using them to direct their own transmutative powers.
      </p>
      <h3>Gods of the Nexus - The Six</h3>
      <p>
        The Six are a faction of divine being that have existed since the dawn of time. They are, unbeknownst to most of Runoa, the true old golds. Each member of The Six represents a core aspect of reality that allows the planar system and physics to function.
      </p>
      <ul>
        <li><strong>Ceanna:</strong> Presence</li>
        <li><strong>Guasad:</strong> Movement</li>
        <li><strong>Bruth:</strong> Force</li>
        <li><strong>Antoil:</strong> Will</li>
        <li><strong>Solas:</strong> Light</li>
        <li><strong>Dorhas:</strong> Void</li>
      </ul>
      <p>
        The Six are standoffish beings, trusting deeply in their own creations as extensions of themselves. They are not worshiped directly by mortal beings of modern day, yet long gone civilizations worshiped The Six exclusively and crafted artifacts to help channel the immense, unrivaled, power.
      </p>
      <p>
        Forging an extraordinary connection with The Six has the potential to grant a mage access to powers beyond 9th level spells. Though using these abilities come at a great personal cost and even death.
      </p>
      <h2>Stat Blocks</h2>
      <CreatureBlock
        name="Seer"
        tokenAlt="Seer Token"
        tokenSrc={seerToken}
        cr={'20'}
        ac={20}
        hp={370}
        proficiencyBonus={6}
        speed={[
          {
            feet: 30,
            name: ''
          }
        ]}
        size="Gargantuan"
        type="Celestial"
        alignment="Chaotic Neutral"

        str={10}
        dex={16}
        con={14}
        int={22}
        cha={20}
        wis={14}

        saves={[
          'Intelligence',
          'Charisma'
        ]}

        skills={[
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
        ]}

        languages={[
          'Celestial',
          'telepathy 120ft.'
        ]}
        senses={[
          'darkvision 120ft.',
          'passive Perception 22'
        ]}
        
        actions={[
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
        ]}

        features={[
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
        ]}

        lairActionsText="The Seers reside on the little known Plane of Observation, a plane that acts as a nexus between the other planes of existence. It is a cold, barren, and alien place, largely devoid of life. The Seers reside in metal underground bunkers, where they tend to their larvae and observe the other planes from afar. On initiative 20, the Seer takes a lair action to cause one of the following effects; the Seer can't use the same effect two rounds in a row."
        lairActions={[
          'A strong force of gravity manifests at a single point, causing the spell Magnify Gravity to fire at 4th level.',
          'Four five foot wide patches of the ground begin to melt and act as quick sand. Each player on a patch must succeed a DC 15 DEX saving throw or be restrained. This can be contested at the end of each player\'s turn.',
          'Four players instantly swap positions with each other. If a play that has no fly speed and cannot hover is swapped with a player that is currently in the air, the new player will fall and take the resulting fall damage.'
        ]}

        legendaryActionsText="This creature can take 3 Legendary Actions, choosing from the options below. Only one legendary action can be used at a time, and only at the end of another creature's turn. Spent legendary Actions are regained at the start of each turn."
        legendaryActions={[
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
        ]}

        spellbook={{
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
        }}
      />
      <CreatureBlock
        name="Seer Larva"
        tokenAlt="Seer Larva Token"
        tokenSrc={seerLarvaToken}
        cr={'8'}
        ac={18}
        hp={110}
        proficiencyBonus={6}
        speed={[
          {
            feet: 10,
            name: 'Hover'
          }
        ]}
        size="Medium"
        type="Celestial"
        alignment="Chaotic Neutral"

        str={10}
        dex={14}
        con={12}
        int={18}
        cha={12}
        wis={18}

        saves={[
          'Intelligence',
          'Charisma'
        ]}

        skills={[
          {
            bonus: 12,
            name: 'History'
          },
          {
            bonus: 12,
            name: 'Nature'
          },
          {
            bonus: 12,
            name: 'Perception'
          },
          {
            bonus: 12,
            name: 'Performance'
          }
        ]}

        languages={[
          'Celestial',
          'telepathy 120ft.'
        ]}
        senses={[
          'darkvision 120ft.',
          'passive Perception 22'
        ]}
        
        actions={[
          {
            name: 'Tentacles',
            text: [
              'Melee Weapon Attack, +7 to hit, range 5t, 2d10+4 force damage.',
              'If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends.'
            ]
          },
          {
            name: 'Mind Blast (Recharge 5-6)',
            text: [
              'The Seer magically emits creates blasts of energy in space. Creatures of the elder Seer\'s choice within 60 feet of it must succeed on a DC 20 Strength saving throw or take 7d10+5 force damage, half as much on a success, and be knocked prone.'
            ]
          }
        ]}

        features={[
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
        ]}

        lairActionsText=""
        lairActions={[]}

        legendaryActionsText=""
        legendaryActions={[]}

        spellbook={{
          spellcastingAbility: 'Intelligence',
          spellcastingBonus: 8,
          spellcastingLevel: 9,
          spellcastingSaveDc: 16,
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
          ]
        }}
      />
    </Layout>
  );
};
