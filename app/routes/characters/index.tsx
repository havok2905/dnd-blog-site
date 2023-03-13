import {Link} from '@remix-run/react';

import {Card} from '~/design-system/components/Card';

import {meta as simonEvans} from './simon-evans';

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
      <h2>Characters</h2>
      {getPost(simonEvans)}
    </Layout>
  );
};

export default charactersRoute;