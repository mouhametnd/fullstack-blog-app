import { API_BASE_URL } from '../../constants';
import useBlogsReq from '../../hooks/useBlogs/userBlogsReq';
import useUser from '../../hooks/userUser';
import { IUseBlogsProps } from '../../types';
import LoadMoreButton from '../others/LoadMoreButton';
import UserBlog from '../others/UserBlog';

const UserBlogs = () => {
  const user = useUser();
  const userId = user._id;
  const useBlogProps: IUseBlogsProps = {
    blogsName: 'userBlogs',
    reqEndpoint: `${API_BASE_URL}/user/blogs`,
    headers: { Authorization: user.userToken },
  };
  const { blogs, blogsErrorMsg, hasMoreBlogs, increasePage, voteBlogReq } = useBlogsReq(useBlogProps);

  if (blogsErrorMsg || !blogs) return <p className="blogs-error-msg">{blogsErrorMsg}</p>;

  const shouldDisplayButton = hasMoreBlogs && blogs.length !== 0;
  return (
    <>
      <section className="blogs-wrapper">
        {blogs.map(blog => (
          <UserBlog blog={blog} userId={userId} key={blog._id} toggleBlogVote={voteBlogReq} />
        ))}
      </section>
      {blogs.length || <p className="blogs-error-msg"> No blogs found</p>}
      {shouldDisplayButton && <LoadMoreButton handleClick={increasePage} />}
    </>
  );
};

export default UserBlogs;
