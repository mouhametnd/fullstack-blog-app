import { useBlogProps } from '../../constants/globalConstants';
import useBlogsReq from '../../hooks/useBlogs/userBlogsReq';

import b from '../../blogs';
import NormalBlog from '../NormalBlog';
import { IBlog } from '../../types/types';

const AllBlogs = () => {
  // const { blogs, blogsErrorMsg, hasMoreBlogs, increasePage } = useBlogsReq(useBlogProps);
  const bl = b as any as IBlog[];

  // if (blogsErrorMsg || !blogs) return <p className="blogs-error-msg">{blogsErrorMsg}</p>;

  return (
    <section className="blogs-wrapper">
      {bl.map(blog => (
        <NormalBlog blog={blog} key={blog._id}/>
      ))}
    </section>
    // <>
    //   {hasMoreBlogs && <button onClick={increasePage}>Load More</button>}
    //   {blogs.map(({ title }, i) => (
    //     <p key={i}> {title}</p>
    //   ))}
    // </>
  );
};

export default AllBlogs;
