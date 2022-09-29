import { IBlog, IUser } from '../../types/types';
import dateFormater from '../../utils/dateParser';
import UpvoteButton from '../upvoteButton/UpvoteButton';
import './normalButton.scss';

// todo continue with blogs
// todo call date Converter fun
interface IProps {
  blog: IBlog;
  userId: IUser['_id'];
  toggleBlogVote: (...a: any) => unknown;
}

const NormalBlog = ({ blog, userId, toggleBlogVote }: IProps) => {
  const { description, lastUpdate, title, userCreator, votes } = blog;
  const isBlogVoted = votes.likedUsers.includes(userId);

  return (
    <article className="blog custom-shadow ">
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

        <UpvoteButton total={votes.total} isVoted={isBlogVoted} handleClick={() => toggleBlogVote({ userId, blogId: blog._id })} />
      </div>

    </article>
  );
};

export default NormalBlog;
