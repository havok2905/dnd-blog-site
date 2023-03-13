import halflingsWinddrift from '~/images/halflings-winddrift.png';

import {Card} from '~/design-system/components/Card';
import {ImageWithCaption} from '~/design-system/components/ImageWithCaption';

import {Layout} from '~/components/Layout';

export const meta = {
  attributes: {
    meta: {
      path: 'races/halflings',
      title: "Halflings",
      description: 'The wind drift halflings migrated to the eastern planes of Runoa thousands of years before recorded history, separating off from halfling cultures fairly early. These people traditionally inhabit the central planes of Inis, where nomadic tribes ride strong wind currents, skating atop the tall grass of the Emerald Sea. These people have been long adept at reading the stars, both for navigation and divination.'
    }
  }
};

export default () => {
  return (
    <Layout>
      <h2>Halflings</h2>
      <h3>Wind Drift Halfling</h3>
      <ImageWithCaption
        imageAlt="Winddrift Halfling"
        imageCaption="Winddrift Halflings"
        imageSrc={halflingsWinddrift}/>
      <Card>
        <p>
          The wind drift halflings migrated to the eastern planes of Runoa thousands of years before recorded history, separating off from halfling cultures fairly early. These people traditionally inhabit the central planes of Inis, where nomadic tribes ride strong wind currents, skating atop the tall grass of the Emerald Sea. These people have been long adept at reading the stars, both for navigation and divination.
        </p>
      </Card>
      <p>
        <strong>Ability Score Increase:</strong> Your Wisdom score increases by 1.
      </p>
      <p>
        <strong>Honed Reflexes:</strong> You have proficiency in the Acrobatics skill.
      </p>
      <p>
        <strong>Linguistic Astrologer:</strong> You know astrologer's short hand, allowing you to make survival checks with advantage when the stars are visible. You also learn the guidance cantrip.
      </p>
    </Layout>
  );
};
