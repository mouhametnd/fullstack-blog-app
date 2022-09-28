import React from 'react';
import { IBlog } from '../types/types';
import UpvoteButton from './upvoteButton/UpvoteButton';

// todo continue with blogs
const NormalBlog = ({ blog }: { blog: IBlog }) => {
  console.log(blog)
  const { description, lastUpdate, title, userCreator, votes } = blog;
  return (
    <article>
      <UpvoteButton total={votes.total} handleClick={() => 's'} />

      {/* 
upvoteButton [others]


container title will have column on mobile
 */}
    </article>
  );
};

export default NormalBlog;
