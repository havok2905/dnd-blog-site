import {Navbar} from '~/design-system/components/Navbar';

import {Card} from '~/design-system/components/Card';
import {ImageWithCaption} from '~/design-system/components/ImageWithCaption';
import {Page} from '~/design-system/components/Page';

import duineSpiritsExample from '~/images/duine-spirits-example.png'

export const meta = {
  attributes: {
    meta: {
      path: 'homebrew/races/duine-spirits',
      title: "Duine Spirits",
      description: 'Once servant constructs of the divine, these immortal spirits now roam the continent of Runoa freely. Since the fall of the gods, many attempted to blend in with every day society. Many continue on alone, taking up the mantle of their former masters.'
    }
  }
};

export default () => {
  return (
    <>
      <Navbar/>
      <Page>
        <h2>Duine Spirits</h2>
        <ImageWithCaption
          imageAlt="Duine Spirit"
          imageCaption="Duine Spirit"
          imageSrc={duineSpiritsExample}/>
        <Card>
          <p>
            Once servant constructs of the divine, these immortal spirits now roam the continent of Runoa freely. Since the fall of the gods, many have attempted to blend in with every day society. Many continue on alone, taking up the mantle of their former masters. Others leverage their celestial gifts for their own gain, establishing powerful enterprises within the empires or lending their gifts to powerful leaders.
          </p>
          <p>
            Duine spirits are driven by a call similar to those of their former divine master. They are drawn to those who share those similar values and causes that their god would have aligned with. A sense of mortality is particularly strong within the Duine spirits. Although they are naturally immortal, they can still die. It is often difficult for Duine Spirits to relate with others, save for the most elderly of elves, due to their unnaturally long lifespans.
          </p>
        </Card>
        <p>
          <strong>Ability Score Increase:</strong> Your Constitution score increases by 1 and your Charisma increases by 2.
        </p>
        <p>
          <strong>Age:</strong> Duine spirits are naturally immortal, but can die from unnatural causes.
        </p>
        <p>
          <strong>Size:</strong> Medium
        </p>
        <p>
          <strong>Type:</strong> Celestial 
        </p>
        <p>
          <strong>Speed:</strong> 30ft.
        </p>
        <p>
          <strong>Messengers of the Gods:</strong> You know the message cantrip. You learn Comprehend Languages at third level and Sending at fifth level. Each spell may be used once before a long rest without expending a spell slot.
        </p>
        <p>
          <strong>Planar Shift:</strong> Once per long rest, you may use an action to transport your character to a plane of existence of your choice for up to one hour. At the end of one hour, you transport back to your plane of origin. This effect can be dismissed at any time with a bonus action.
        </p>
      </Page>
    </>
  );
};
