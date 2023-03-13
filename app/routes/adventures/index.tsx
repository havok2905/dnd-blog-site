import {Link} from '@remix-run/react';

import {Card} from '~/design-system/components/Card';

import {meta as ffxivBurningOfTheGreatwood} from "./ffxiv-burning-of-the-greatwood";

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

const adventuresRoute = () => {
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
      <h2>Adventures</h2>
      {getPost(ffxivBurningOfTheGreatwood)}
    </Layout>
  );
};

export default adventuresRoute;