import { API_BASE_URL } from '../../constants/globalConstants';
import { IUseBlogsProps } from '../../hooks/useBlogs/useBlogsTypes';
import useBlogsReq from '../../hooks/useBlogs/userBlogsReq';
import useUser from '../../hooks/userUser';
import NormalBlog from '../normalButton/NormalBlog';
import LoadMoreButton from '../others/LoadMoreButton';

const useBlogProps: IUseBlogsProps = {
  blogsName: 'allBlogs',
  reqEndpoint: `${API_BASE_URL}/blogs`,
  headers: {},
};
const AllBlogs = () => {
  const { blogs, blogsErrorMsg, hasMoreBlogs, increasePage, voteBlogReq } = useBlogsReq(useBlogProps);
  const { user } = useUser();
  const userId = user._id;
  if (blogsErrorMsg || !blogs) return <p className="blogs-error-msg">{blogsErrorMsg}</p>;

  return (
    <>
      <section className="blogs-wrapper">
        {blogs.map(blog => (
          <NormalBlog blog={blog} userId={userId} key={blog._id} toggleBlogVote={voteBlogReq} />
        ))}
      </section>
      {hasMoreBlogs && <LoadMoreButton handleClick={increasePage} />}
    </>
  );
};

export default AllBlogs;