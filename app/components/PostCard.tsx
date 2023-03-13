import {Link} from '@remix-run/react';

import {Card} from '~/design-system/components/Card';

interface IPost {
  attributes: {
    meta: {
      description: string;
      path: string;
      title: string;
    }
  }
}

interface PostCardProps {
  post: IPost
}

export const PostCard = ({
  post
}: PostCardProps) => {
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
}
