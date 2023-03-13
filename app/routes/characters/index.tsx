import {meta as simonEvans} from './simon-evans';

import {Layout} from '~/components/Layout';
import {PostCard} from '~/components/PostCard';

const charactersRoute = () => {
  return (
    <Layout>
      <h2>Characters</h2>
      <PostCard post={simonEvans}/>
    </Layout>
  );
};

export default charactersRoute;