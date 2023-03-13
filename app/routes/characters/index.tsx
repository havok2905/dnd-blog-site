import {Layout} from '~/components/Layout';
import {PostCard} from '~/components/PostCard';

import {meta as simonEvans} from './simon-evans';
import {meta as victoriaFaerith} from './victoria-faerith';

const charactersRoute = () => {
  return (
    <Layout>
      <h2>Characters</h2>
      <PostCard post={simonEvans}/>
      <PostCard post={victoriaFaerith}/>
    </Layout>
  );
};

export default charactersRoute;