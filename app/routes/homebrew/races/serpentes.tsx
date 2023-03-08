import {Navbar} from '~/design-system/components/Navbar';

import {Card} from '~/design-system/components/Card';
import {ImageWithCaption} from '~/design-system/components/ImageWithCaption';
import {Page} from '~/design-system/components/Page';

import serpentesExample from '~/images/serpentes-example.png';

export const meta = {
  attributes: {
    meta: {
      path: 'homebrew/races/serpentes',
      title: "Serpentes",
      description: 'These are the Serpentes, a reptilian people with snake-like lower halves and humanoid upper torsos. They are the original inhabitants of the Emerald Sea and the region of Inis, crafting their underground homes under the cover of the tall grasslands that span the region.'
    }
  }
};

export default () => {
  return (
    <>
      <Navbar/>
      <Page>
        <h2>Serpentes</h2>
        <ImageWithCaption
          imageAlt="Serpentes"
          imageCaption="Serpentes"
          imageSrc={serpentesExample}/>
        <Card>
          <p>
            The sun rises over the vast expanse of the Emerald Sea and the grasslands begin to rustle on a breezeless morning. Hands rise from the green canopy, to the sky, in worship of a new dawn and the warmth to melt their frost laden homes.
          </p>
          <p>
            Rattles and percussive music flood a labyrinth of tunnels that wind and twist under the soil. Great halls are alive with dance and merriment.
          </p>
          <p>
            A halfling skiff rides the wind, scouting the horizon for threats. They are pulled down into a burrow and slain without even a chance to scream.
          </p>
        </Card>
        <Card>
          <p>
            These are the Serpentes, a reptilian people with snake-like lower halves and humanoid upper torsos. They are the original inhabitants of the Emerald Sea and the region of Inis, crafting their underground homes under the cover of the tall grasslands that span the region. 
          </p>
          <p>
            Long separated from the celestial cycles of destruction and rebirth that plagued the west of Runoa, Serpentes culture has been allowed to flourish uninterrupted. Their skill in architecture, agriculture, and healing magic remain unrivaled to this day; Inis being one of the few regions that still officially permit the practice of healing magic. Worship among the Serpentes is diverse, but with a common trend towards favoring the divine associated with heat, warmth, light, and the sun.
          </p>
          <p>
            Most Serpentes call The Emerald Sea and Inis their home. Since the very recent first contact with the west, however, many have migrated to the Krossan and Habarashi empires to make new lives from their unique talents.
          </p>
          <p>
            Serpentes culture is one of independence, with each Serpentes expected to craft their own home and extension of their community's tunnel network. This is a task pursued over the entire lifetime of a Serpentes.
          </p>
        </Card>
        <p>
          <strong>Ability Score Increase:</strong> Your Wisdom score increases by 1, and your Constitution score increases by 2.
        </p>
        <p>
          <strong>Age:</strong> Serpentes mature at the same rate as humans and have lifespans similar in length to theirs.
        </p>
        <p>
          <strong>Size:</strong> Serpentes match humans in average size and weight. Your size is Medium.
        </p>
        <p>
          <strong>Speed:</strong> Your base walking speed is 30 feet.
        </p>
        <p>
          <strong>Languages:</strong> You can speak, read, and write Common.
        </p>
        <p>
          <strong>Slow Metabolism:</strong> You elect to go one full week without requiring food. After the full week has passed, you take 2 points of exhaustion per day until 10% of your body weight is consumed in food.
        </p>
        <p>
          <strong>Thermosense:</strong> Your ability to sense heat grants you advantage on ability checks to see through illusions, invisibility, stealth, and all forms of darkness. If the target masks their heat, these checks are performed at disadvantage instead.
        </p>
        <p>
          <strong>Brumation:</strong> Your movement is reduced to zero for the next hour. You regain lost hit points equal to your proficiency bonus upon successful completion of a short rest. The extra hit points increase when you reach certain levels; to double your proficiency bonus at 9th level, and to triple your proficiency bonus at 13th level.
        </p>
        <h3>Python</h3>
        <p>
          <strong>Magic Resistance:</strong> You have advantage on saving throws against spells and other magical effects.
        </p>
        <p>
          <strong>Grappler:</strong> You have advantage on attack rolls against a creature you are grappling. You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.
        </p>
        <h3>Cobra</h3>
        <p>
          <strong>Poison Immunity:</strong> You are immune to poison damage and the poisoned condition.
        </p>
        <p>
          <strong>Targeted Strike:</strong> You may use a bonus action to detect a target using your Thermosense ability. You have advantage on melee weapon attacks made against this target until the start of your next turn. You deal an extra 1d6 + PB poison damage whenever a detected target is hit by your melee weapon attack. You may use this ability a number of times equal to your proficiency bonus before the completion of a long rest.
        </p>
        <h3>Hognose</h3>
        <p>
          <strong>Burrow:</strong> You have a burrowing speed of 10ft.
        </p>
        <p>
          <strong>Play Dead:</strong> As a bonus action you may become prone and make a choice to appear dead or unconscious. Make a Performance check. Creatures that can see you must succeed a Wisdom against the result of that Performance check. From the prone position, you now have advantage, instead of disadvantage, on all attacks against creatures who fail that saving throw until the start of your next turn. Creatures that succeed their saving throws are immune to this effect for the next 24 hours.
        </p>
      </Page>
    </>
  );
};
