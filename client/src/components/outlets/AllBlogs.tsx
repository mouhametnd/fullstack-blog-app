import { API_BASE_URL } from '../../constants';
import useBlogsReq from '../../hooks/useBlogs/userBlogsReq';
import useUser from '../../hooks/userUser';
import { IUseBlogsProps } from '../../types';
import NormalBlog from '../normalBLog/NormalBlog';
import LoadMoreButton from '../others/LoadMoreButton';

const useBlogProps: IUseBlogsProps = {
  blogsName: 'allBlogs',
  reqEndpoint: `${API_BASE_URL}/blogs`,
  headers: {},
};
const AllBlogs = () => {
  const { blogs, blogsErrorMsg, hasMoreBlogs, increasePage, voteBlogReq } = useBlogsReq(useBlogProps);
  const user  = useUser();
  const userId = user._id;
  
  if (blogsErrorMsg || !blogs) return <p className="blogs-error-msg">{blogsErrorMsg}</p>;

  const shouldDisplayButton = hasMoreBlogs && blogs.length !== 0;
  return (
    <>
      <section className="blogs-wrapper">
        {blogs.map(blog => (
          <NormalBlog blog={blog} userId={userId} key={blog._id} toggleBlogVote={voteBlogReq} />
        ))}
      </section>
      {blogs.length !== 0 || <p className="blogs-error-msg"> No blogs found</p>}
      {shouldDisplayButton && <LoadMoreButton handleClick={increasePage} />}
    </>
  );
};

export default AllBlogs;
