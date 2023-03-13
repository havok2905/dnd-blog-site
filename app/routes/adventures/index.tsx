import {meta as ffxivBurningOfTheGreatwood} from "./ffxiv-burning-of-the-greatwood";

import {Layout} from '~/components/Layout';
import {PostCard} from '~/components/PostCard';

const adventuresRoute = () => {
  return (
    <Layout>
      <h2>Adventures</h2>
      <PostCard post={ffxivBurningOfTheGreatwood}/>
    </Layout>
  );
};

export default adventuresRoute;