import {Quote} from '~/design-system/components/Quote';

import {Layout} from '~/components/Layout';
import {PostCard} from '~/components/PostCard';

import {meta as seers} from "./creatures/seers";

import {meta as duineSpirits} from "./races/duine-spirits";
import {meta as dwarves} from "./races/dwarves";
import {meta as halflings} from "./races/halflings";
import {meta as serpentes} from "./races/serpentes";
import {meta as theVidi} from "./races/the-vidi";

import {meta as theWorldOfRunoa} from './world/the-world-of-runoa';

import {meta as sessionZeroLongForm} from './resources/session-zero-long-form';
import {meta as sessionZeroShortForm} from './resources/session-zero-short-form';

const charactersRoute = () => {
  return (
    <Layout>
      <h2>D&D Homebrew</h2>
      <h3>Resources</h3>
      <PostCard post={sessionZeroLongForm}/>
      <PostCard post={sessionZeroShortForm}/>
      <h3>World</h3>
      <PostCard post={theWorldOfRunoa}/>
      <h3>Races</h3>
      <PostCard post={duineSpirits}/>
      <PostCard post={dwarves}/>
      <PostCard post={halflings}/>
      <PostCard post={theVidi}/>
      <PostCard post={serpentes}/>
      <h3>Creatures</h3>
      <Quote>
        <p>
          !!!SPOILER TERRITORY AHEAD!!!
        </p>
      </Quote>
      <PostCard post={seers}/>
    </Layout>
  );
};

export default charactersRoute;