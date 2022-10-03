import { API_BASE_URL } from '../../constants/globalConstants';
import { IBlog, IUser } from '../../types/types';
import dateFormater from '../../utils/dateParser';
import DeleteUserBlog from '../others/DeleteUserBlog';
import UpvoteButton from '../upvoteButton/UpvoteButton';
import UpdateBlogForm from '../others/UpdateBlogForm';

interface IProps {
  blog: IBlog;
  userId: IUser['_id'];
  toggleBlogVote: (...a: any) => unknown;
}

const UserBlog = ({ blog, toggleBlogVote, userId }: IProps) => {
  const { _id, description, lastUpdate, title, userCreator, votes } = blog;
  const hasUserVoted = votes.likedUsers.includes(userId);

  return (
    <article className="blog custom-shadow relative">
      <UpdateBlogForm blog={blog} reqEndpoint={`${API_BASE_URL}/blogs/update/${_id}`} />

      <DeleteUserBlog blog={blog} />
      <div className="blog__cont-title md:flex-col md:items-start ">
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
          hasUserVoted={hasUserVoted}
          handleClick={() => toggleBlogVote({ userId, blogId: _id })}
        />
      </div>
    </article>
  );
};

export default UserBlog;
