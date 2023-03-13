import {Card} from '~/design-system/components/Card';
import {ImageWithCaption} from '~/design-system/components/ImageWithCaption';

import {Layout} from '~/components/Layout';

import theVidiExample from '~/images/the-vidi-example.png';

export const meta = {
  attributes: {
    meta: {
      path: 'races/the-vidi',
      title: "The Vidi",
      description: 'The Vidi are a short, dextrous, sea-faring people whose souls have been bound to the various planes of existence. They were the original residents of eastern Runoa, living in relative isolation from the rest of the continent for the majority of their existence, where they spread their influence across the archipelagos and coastal regions of what is now Celu and Dragon’s Spine.'
    }
  }
};

export default () => {
  return (
    <Layout>
      <h2>The Vidi</h2>
      <ImageWithCaption
        imageAlt="Vidi"
        imageCaption="Vidi"
        imageSrc={theVidiExample}/>
      <Card>
        <p>
          The Vidi are a short, dextrous, sea-faring people whose souls have been bound to the various planes of existence. They were the original residents of eastern Runoa, living in relative isolation from the rest of the continent for the majority of their existence, where they spread their influence across the archipelagos and coastal regions of what is now Celu and Dragon’s Spine.
        </p>
        <p>
          A millennia of living by the sea led them to develop vast lung capacities, with the average Vidi able to hold their breath for up to an hour and the most skilled for up to a full day. Vidi are also often mistaken for tall halflings. Though one can easily tell them apart by spotting the short pointed horns that sprout from a Vidi’s head. 
        </p>
        <p>
          The home of the original Vidi spanned a region where the fabric between the planes was exceptionally weak. Vidi born here have an affinity for magic that mirrors the plane closest to the material plane at the time of their birth. Vidi can pass on these gifts to their children, though the magic weakens with each passing generation.
        </p>
        <p>
          Vidi culture is diverse, thought to be near untraceable to any specific origin. Very recent studies, however, point to a possible origin in an ancient and highly advanced civilization of Vidi who worshiped demonic antlered beings. The Vidi people were hit particularly hard by long cycles of societal destruction and rebirth that plagued the continent. As such, they know little of tradition, constantly reinventing their cultures and merging them with new influence.
        </p>
      </Card>
      <p>
        <strong>Ability Score Increase:</strong> Your Dexterity score increases by 2 and your Wisdom increases by 1.
      </p>
      <p>
        <strong>Age:</strong> Vidi reach maturity around age 18 and can live up to 120 years.
      </p>
      <p>
        <strong>Size:</strong> Small
      </p>
      <p>
        <strong>Speed:</strong> 25ft.
      </p>
      <p>
        <strong>Darkvision:</strong> You can see in dim light within 30 feet of you as if it were bright light and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
      </p>
      <p>
        <strong>Languages:</strong> You can speak, read, and write Common and Aquan.
      </p>
      <p>
        <strong>Sea Faring:</strong> You can hold your breath for up to 1 hour.
      </p>
      <p>
        <strong>Planar Affinity:</strong> From the time of their birth, the weakness between the planes have granted the Vidi a special connection with the planes. Choose one plane from the table below. You learn those spells and acquire those resistances at the associated level. The spells acquired at 3rd and 5th level each have a single charge that replenishes after completing a long rest. When creating your character, choose Intelligence, Wisdom, or Charisma as the spellcasting ability for these spells.
      </p>
      <p>
        Alternatively, to accommodate an unlisted plane, choose a cantrip and damage resistance to acquire at first level. Then learn one 1st level spell to learn at 3rd level. Lastly learn one 2nd level spell to learn at 5th level. These spells should best represent the plane associated with your character. Preferably, only one of the chosen spells/cantrips should be damage dealing.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">1st Level</th>
            <th scope="col">3rd Level</th>
            <th scope="col">5th Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plane of Air</td>
            <td>Gust, Resistance to thunder damage</td>
            <td>Feather Fall</td>
            <td>Shatter</td>
          </tr>
          <tr>
            <td>Plane of Earth</td>
            <td>Mold Earth, Resistance to force damage</td>
            <td>Entangle</td>
            <td>Spike Growth</td>
          </tr>
          <tr>
            <td>Plane of Fire</td>
            <td>Control Flames, Resistance to fire damage</td>
            <td>Faerie Fire</td>
            <td>Flaming Sphere</td>
          </tr>
          <tr>
            <td>Plane of Water</td>
            <td>Shape Water, Resistance to cold damage </td>
            <td>Ice Knife</td>
            <td>Misty Step </td>
          </tr>
          <tr>
            <td>The Shadowfell</td>
            <td>Spare the Dying, Resistance to necrotic damage</td>
            <td>Cause Fear</td>
            <td>Wither and Bloom</td>
          </tr>
          <tr>
            <td>The Feywild</td>
            <td>Minor Illusion, Resistance to radiant damage</td>
            <td>Charm Person</td>
            <td>Moonbeam</td>
          </tr>
          <tr>
            <td>The Material</td>
            <td>Druidcraft, Resistance to poison damage</td>
            <td>Absorb Elements</td>
            <td>Flock of Familiars</td>
          </tr>
          <tr>
            <td>The Nexus</td>
            <td>Dancing Lights, Resistance to psychic damage</td>
            <td>Command</td>
            <td>Phantasmal Force</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};
