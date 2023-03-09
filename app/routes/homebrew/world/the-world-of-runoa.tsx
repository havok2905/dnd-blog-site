import {Navbar} from '~/design-system/components/Navbar';

import {Card} from '~/design-system/components/Card';
import {ImageWithCaption} from '~/design-system/components/ImageWithCaption';
import {Page} from '~/design-system/components/Page';
import {Quote} from '~/design-system/components/Quote';

import worldMap from '~/images/world-map.png';

export const meta = {
  attributes: {
    meta: {
      path: 'homebrew/world/the-world-of-runoa',
      title: "The World of Runoa",
      description: 'This is the world of Runoa, a continent dominated by vast empires, corporate control, and celestial secrets that lurk behind every shadow. This is a world of false profits, technological innovation, planar exploration, and where the scales balance delicately between tyranny and revolution.'
    }
  }
};

export default () => {
  return (
    <>
      <Navbar/>
      <Page>
        <h2>The World of Runoa</h2>
        <ImageWithCaption
          imageAlt="World Map"
          imageSrc={worldMap}/>
        <Quote>
          <p>
            Metal ships billow steam towards the clouds overhead, slicing though the icy waters just outside the stonework metropolis of Fey. A young scholar pours over a scroll by the light of the setting sun, just about to dip below the sprawling sand dunes of the Habash Desert. A group of teenage boys race between a labyrinth of neon lit steel pipes, pistols drawn and at the ready. A man in a tailored suit gazes out from his tower at the warm coastal waters of the Celu gulf and, somewhere in the darkness, a clawed hand reaches out towards a glimmering blue orb of light.
          </p>
          <p>
            This is the world of Runoa, a continent dominated by vast empires, corporate control, and celestial secrets that lurk behind every shadow. This is a world of false profits, technological innovation, planar exploration, and where the scales balance delicately between tyranny and revolution.
          </p>
        </Quote>
        <h3>Power is Everything</h3> 
        <p>
          The world of Runoa is first and foremost about control, influence, and warring between tyranical power structures. Whether it be the land grabs of authoritarian kingdoms or the subtle machinations of corporate dependency, power is everything in Runoa.
        </p>
        <p>
          There are those who try to escape its grasp, exemplified by the revolutionaries and pirates of the southern tropics. Yet, even the Free Sails exert their own power over the meek mercantile villages along the Dragon's Spine archipelago.
        </p>
        <p>
          The people of Runoa fear control, despite having lived little else. The continent's shift away from dependency on mages and clerics, in favor of artificers and machinery, developed in the wake of a catastrophic event led by a god of destruction that threatened to reduce Runoa to ashes. Raw power should not remain in the hands of a few priests and adventurers, so reasoned the common folk. Instead, they handed power off to political and corporate tyrants.
        </p>
        <Quote citation="Robin Gallowglass; Commander of Celu Revolutionaries">
          <p>
            “They shackle us with promises of peace and the barrels of their rifles! Shatter your shackles! Soak their decks with the blood of the fallen. Through our deaths, Celu may still yet live again.”
          </p>
        </Quote>
        <Quote citation="Journal of Henrick Montague; CEO and owner of the Montague Mining Company">
          <p>
            “The empires skirmish with guns and blades. They draw borders and guard them with vast armies. I carve out their empires out with something far more deadly - leverage.”
          </p>
        </Quote>
        <Card title="The Battle of Habarashi">
          <p>
            The world of Runoa cannot be discussed without first mentioning the cataclysmic event that ravaged the continent, known to all as “Enkiem's Destruction” leading to The Battle of Habarashi. This event was pivotal to the development of Runoa, leading to the conditions that plague the world some 500 years later. The fall of the divine, the domination of corporate power, international tension, and eastern expansion all branch out from this singular event.
          </p>
          <p>
            Among the divine, the goddess Enkiem was responsible for cyclical periods of societal destruction and rebirth - reducing society to ashes and allowing it to rise again as something unique. After several thousand years of imprisonment and unprecedented societal advancement, Enkiem was set free. The dark goddess proceeded to continue her work, making up for lost time, and slaughtering all in her wake. Her gargantuan titans of war and celestial servants tore cities asunder, reduced monuments to billowing flame, and flooded the countryside with the blood of the common folk.
          </p>
          <p>
            Among the survivors were the leaders of factions that would eventually merge into, what are now, the Krossan and Habarashi empires. These survivors banded together in a temporary alliance to make one final stand against Enkiem, who had laid siege to the desert city of Habarashi.
          </p>
          <p>
            The alliance cleared the way for an elite team to make their way to Enkiem's throne at Habarashi's center. These heroes slew the dark goddess, bringing peace back to the realm.
          </p>
          <p>
            Unbeknownst to the powers that be, this assault would lead to the eventual fall of the divine and death of the gods. Runoa would see divine influence and the power of priests rapidly decline. Religion would turn to practices of faith, rather than knowledge. Direct command over the arcane would come to be viewed as sinful, with most trusting in machines in the place of individual mages.
          </p>
          <p>
            “The Battle of Habarashi” has been enshrined in global mythology. Each city has their own take on the story, often carried out in song and theater.
          </p>
          <p>
            The events of this setting take place 500 years after the liberation of Habarashi City and Enkiem's death.
          </p>
        </Card>
        <Quote citation="Interview with Eddard Stonecutter, First and last president of the New Habarashi Republic">
          <p>
            “I did not fear for myself. I was, and still am, but a single man. Rather, I feared for my soldiers. Lay to bare before them was an ashen graveyard of flame, stone, flesh, and ruin. Most had lost families, children, wives, and husbands. We were but a small fleet of misfits, rushing ahead at full speed towards our deaths and toasting our glasses to the end of the world.”
          </p>
        </Quote>
        <Quote citation="Journal of Maximilian Blisterwind, Maximilian Blisterwind; Governor of East Fey">
          <p>
            “The city is within sight now. As if with one ghoulish bow, the last remainders of my youth have fled for the safety that we now abandon behind us. Ahead, flames pour smoke into ashen skies and cast silhouettes of gargantuan golems of war. These titans are dwarfed, though, by the solemn watch of fallen angels on the walls, wings blacker than the blackest void. I have not known fear before now. I know not if we will see the day through, but if we do, the gods will have done naught to save us. Why would they -- when we aim to slay one of their own?”
          </p>
        </Quote>
        <h3>Technology in Runoa</h3>
        <p>
          Runoa is a world of guns, ships, and new innovation. It is entrenched in the beginning of a new era. Many do still hold to the old traditions of sailing, swordsmanship, and the arcane. Yet, more shift their attentions to firearms, steam power, arcane powered appliances, and artifice.
        </p>
        <h4>Arcane Batteries</h4>
        <p>
          These small crystals are embedded with power generated from any one of the Montague planar colonies. These devices have placed the power of the arcane in the hands of the average person, powering small appliances, lighting, heat, and travel.
        </p>
        <h4>The Power Grid</h4>
        <p>
          The central power grid is made up of lanes of arcane power lines that stretch the continent. Arcane power generation primarily occurs within the plane of fire, by means of geothermal power generation. These power lines are heavily guarded and no attack has been successfully launched against them.
        </p>
        <h4>The Ring Gates</h4>
        <p>
          While portals to the planes of existence have existed for centuries, the ability to allow mass transit between them is relatively new. These gates are always open and owned by the Montague Mining Company.
        </p>
        <h3>The Central Powers of Runoa</h3>
        <h4>The Habarashi Empire</h4>
        <p>
          The Habarashi Empire spans the eastern half of Runoa, encompassing vast sand dunes, mediterranean coastal cities, haunted desolate wasteland, and vast western mountain ranges - all connected by the Habarashi Rail. Each region of the Habarashi Empire maintains its own culture, when allowed by the authoritarian military dictatorship.
        </p>
        <h4>The Krossan Empire</h4>
        <p>
          The Krossan Empire spans the western half of Runoa, acting as the last remnants of the ancient elvish monarchy. These days, the territory of the crown spans frozen tundra, dense forest lands, tropical islands, and bustling naval ports. Though the monarchy currently remains in power, talk of its demise is ever looming. The Krossan empire has long been, since its establishment, loosly held together. A new and inexperienced queen's anointment has only emboldened those who would see the empire break.
        </p>
        <h4>The Montague Mining Company</h4>
        <p>
          The Montague mining company began as a humble mining operation in the Scarlet Range mountains. However, with a shift in focus towards power generation, they would eventually force themselves into the foundation of every city on the map. The Montague mining company runs a number of extra-planar colonies across the planes of fire, earth, and ice. They also own and maintain portals into the planes, known as "Ring Gates".
        </p>
        <h4>The Free Sails</h4>
        <p>
          The Free Sails are those who rebelled openly against the expansion of the Habarashi Empire and fled to the east in exile. These people settled in the eastern islands that make up Dragon's Spine, setting up independent towns outside of the purview of the empires. They are a distributed network of independent ships that loosely follow a code of conduct for mutual survival.
        </p>
        <h4>Seinaru</h4>
        <p>
          Bustling ports, guildhalls, markets, and political debate flood the streets of Seinaru, also referred to as Sei to the local population. This island city state remains one of the lone neutral powers of the world, positioning itself between revolutionaries, empires, and pirates alike.
        </p>
        <h4>The Emerald Sea</h4>
        <p>
          Having escaped much of the destruction imposed by Enkiem, the people of the Emerald Sea have thrived with little interruption. The people here are primarily agrarian and rural, living amongst a several hundred mile stretch of open grassland. The people of the Emerald Sea are relative new-comers to the political games of the west, more interested in observing from afar and lending out their talents to the highest bidder.
        </p>
      </Page>
    </>
  );
};
