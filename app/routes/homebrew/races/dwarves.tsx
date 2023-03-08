import {Navbar} from '~/design-system/components/Navbar';

import sandDwarf from '~/images/dwarves-sand-dwarf.png';
import valleyDwarf from '~/images/dwarves-valley-dwarf.png';

import {Card} from '~/design-system/components/Card';
import {ImageWithCaption} from '~/design-system/components/ImageWithCaption';
import {Page} from '~/design-system/components/Page';

export const meta = {
  attributes: {
    meta: {
      path: 'homebrew/races/dwarves',
      title: "Dwarves",
      description: 'The dwarves of Runoa were the ancestral people of the underground, carving out long lived empires under the sands or within the inner walls of hollowed out mountains. Though originally one people, their cultures predominance towards isolationism caused vast schisms to form between the dwarvish people.'
    }
  }
};

export default () => {
  return (
    <>
      <Navbar/>
      <Page>
        <h2>Dwarves</h2>
        <Card>
          <p>
            The dwarves of Runoa were the ancestral people of the underground, carving out long lived empires under the sands or within the inner walls of hollowed out mountains. Though originally one people, their cultures predominance towards isolationism caused vast schisms to form between the dwarvish people. The migration from the Habash sands to the western mountains split the dwarves forever in two, each faction adjusting to their new environments.
          </p>
        </Card>
        <h3>Sand Dwarves</h3>
        <ImageWithCaption
          imageAlt="Sand Dwarf"
          imageCaption="Sand Dwarf"
          imageSrc={sandDwarf}
        />
        <Card>
          <p>
            The Sand Dwarves can draw their lineage to the original dwarvish people that carved cities miles beneath the vast Habash Desert. With scarce resources under the sands, the sand dwarves' primary focus was on competition with rival clans for dominance. They hunted the scorpions that roamed the tunnels for food, crafting their exoskeleton into intricate weapons and structural material for their homes.
          </p>
          <p>
            Having spent so much time underground, the sand dwarves have lost much of their eyesight, depending on their superb sense of touch and hearing to get by. Though Sand Dwarves today fashion their homes above ground, their sight remains darkened.
          </p>
        </Card>
        <p>
          <strong>Ability Score Increase:</strong> Sand dwarves gain +1 to their Wisdom score.
        </p>
        <p>
          <strong>Dampened Sight:</strong> Sand dwarves have lost their sense of Darkvision, but instead have advantage on perception checks that leverage their sense of touch or hearing.
        </p>
        <p>
          <strong>Lasting Endurance:</strong> Years of living on scarce food and water have given you protection from exhaustion. You may ignore the first point of exhaustion imposed on this dwarf in exchange for dropping your maximum hit points by half until you complete a long rest. You must complete a long resy before using this ability again.
        </p>
        <p>
          <strong>Innate Magic:</strong> Years of living under the sands have awarded several innate spells. The sand dwarf learns the following spells. They are always prepared. Each spell may be used once, without the use of spell slot. These charges replenish after a long rest. Wisdom is the ability used for these spells.
        </p>
        <ul>
          <li>
            <strong>At 1st Level:</strong> Magic Stone, Earth Tremor
          </li>
          <li>
            <strong>At 3rd Level:</strong> Barkskin
          </li>
        </ul>
        <h3>Valley Dwarves</h3>
        <ImageWithCaption
          imageAlt="Valley Dwarf"
          imageCaption="Valley Dwarf"
          imageSrc={valleyDwarf}
        />
        <Card>
          <p>
            The Valley Dwarves were the first to leave the tunnels under the sands of Habash, venturing west towards the Scarlet Range mountains. They established tribes along the rivers that sliced between the rock, mining the mountains for material for their new cities. With an abundance of materials to work with, these dwarves began to excel at invention and engineering. They eventually abandoned the rivers and moved into their vast network of mines, returning again to the darkness that their ancestors once thrived in.
          </p>
          <p>
            <strong>Ability Score Increase:</strong> Sand dwarves gain +1 to their Intelligence score.
          </p>
        </Card>
        <p>
          <strong>Artisan's Expertise:</strong> You gain proficiency with two kinds of artisan's tools of your choice. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.
        </p>
        <p>
          <strong>Innate Magic:</strong> Years of thriving innovation have changed dwarvish culture towards a culture of engineers. The valley dwarf learns the following spells. They are always prepared. Each spell may be used once, without the use of spell slot. These charges replenish after a long rest. Intelligence is the ability used for these spells.
        </p>
        <ul>
          <li>
            <strong>At 1st Level:</strong> Mage Hand, Identify
          </li>
          <li>
            <strong>At 3rd Level:</strong> Pyrotechnics
          </li>
        </ul>
      </Page>
    </>
  );
};
