import {Link} from '@remix-run/react';

import {Card} from '~/design-system/components/Card';
import {Quote} from '~/design-system/components/Quote';

import {meta as seers} from "./creatures/seers";

import {meta as duineSpirits} from "./races/duine-spirits";
import {meta as dwarves} from "./races/dwarves";
import {meta as halflings} from "./races/halflings";
import {meta as serpentes} from "./races/serpentes";
import {meta as theVidi} from "./races/the-vidi";

import {meta as theWorldOfRunoa} from './world/the-world-of-runoa';

import {meta as sessionZeroLongForm} from './resources/session-zero-long-form';
import {meta as sessionZeroShortForm} from './resources/session-zero-short-form';

import {Layout} from '~/components/Layout';

interface IPost {
  attributes: {
    meta: {
      description: string;
      path: string;
      title: string;
    }
  }
}

const charactersRoute = () => {
  const getPost = (post: IPost) => {
    const {
      description = '',
      path = '',
      title = ''
    } = post?.attributes?.meta;

    return (
      <Card
        footer={(
          <Link to={path}>
            View
          </Link>
        )}
        title={title}>
        <p>
          {description}
        </p>
      </Card>
    );
  };

  return (
    <Layout>
      <h2>D&D Homebrew</h2>
      <h3>Resources</h3>
      {getPost(sessionZeroLongForm)}
      {getPost(sessionZeroShortForm)}
      <h3>World</h3>
      {getPost(theWorldOfRunoa)}
      <h3>Races</h3>
      {getPost(duineSpirits)}
      {getPost(dwarves)}
      {getPost(halflings)}
      {getPost(theVidi)}
      {getPost(serpentes)}
      <h3>Creatures</h3>
      <Quote>
        <p>
          !!!SPOILER TERRITORY AHEAD!!!
        </p>
      </Quote>
      {getPost(seers)}
    </Layout>
  );
};

export default charactersRoute;