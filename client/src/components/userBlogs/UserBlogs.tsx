import React, { useState } from 'react';
import { API_BASE_URL, baseInputProps } from '../../constants/globalConstants';
import { IUseBlogsProps } from '../../hooks/useBlogs/useBlogsTypes';
import useBlogsReq from '../../hooks/useBlogs/userBlogsReq';
import useUser from '../../hooks/userUser';
import { IBlog, IForm, IUser } from '../../types/types';
import dateFormater from '../../utils/dateParser';
import UpvoteButton from '../upvoteButton/UpvoteButton';
import UserBlogForm from '../userBlogForm/UserBlogForm';

const useBlogProps: IUseBlogsProps = {
  blogsName: 'allBlogs',
  reqEndpoint: `${API_BASE_URL}/blogs`,
  headers: {},
};

interface IProps {
  blog: IBlog;
  userId: IUser['_id'];
  toggleBlogVote: (...a: any) => unknown;
}

const formProps = {
  inputs: [baseInputProps.title, baseInputProps.description],
  error: false,
};

/*
 - send request if title or descr is different
 - update the blog with a reducer
*/

// we send re to change details if the title or desrc is diff

const UserBlogs = ({ blog, toggleBlogVote, userId }: IProps) => {
  const [shouldDisplayForm, setShouldDisplayForm] = useState(true);
  const { blogs, blogsErrorMsg, hasMoreBlogs, increasePage, voteBlogReq } = useBlogsReq(useBlogProps);

  const succesCb = () => {
    // disptch action
    setShouldDisplayForm(false);
  };

  const { _id, description, lastUpdate, title, userCreator, votes } = blog;
  const isBlogVoted = votes.likedUsers.includes(userId);

  if (blogsErrorMsg || !blogs) return <p className="blogs-error-msg">{blogsErrorMsg}</p>;
  // custom hook called useUserBlogsRrq that aswell use the useBlogsReq hooks
  return (
    <article className="blog custom-shadow relative">
      <UserBlogForm blog={blog} reqEndpoint={`${API_BASE_URL}/blogs/update/${blog._id}`} />

      <div className="blog__cont-title">
        <h3 className="blog__title">{title}</h3>
        <span className="blog__date">
          Last Update
          <time className="blog__time">{dateFormater(lastUpdate)}</time>
        </span>
      </div>

      <p className="blog__description">{description}</p>

      <div className="blog__cont-bottom">
        <span className="blog__creator-name">{userCreator.name}</span>

        <UpvoteButton
          total={votes.total}
          isVoted={isBlogVoted}
          handleClick={() => toggleBlogVote({ userId, blogId: blog._id })}
        />
      </div>
    </article>
  );
};

export default UserBlogs;
