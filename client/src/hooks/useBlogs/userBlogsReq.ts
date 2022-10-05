import axios from 'axios';
import { useEffect, useState } from 'react';
import useSearchParams from '../useSearchParams';
import useBlogsStore from '../useBlogsStore';
import useUser from '../userUser';
import { API_BASE_URL } from '../../constants';
import { IBlog, IUseBlogsProps } from '../../types';

const useBlogsReq = ({ blogsName, reqEndpoint, headers }: IUseBlogsProps) => {
  let isMounted = false;
  const { searchParams } = useSearchParams();
  const [blogsErrorMsg, setBlogsErrorMsg] = useState<string | false>();
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  const blogStore = useBlogsStore(blogsName);
  const { userToken, _id } = useUser();
  const { blogs, currentPage, increasePage, toggleBlogVote } = blogStore;

  const fetchBlogs = async (methodName: 'setBlogs' | 'appendBlogs') => {
    try {
      const regConfig = {
        headers,
        params: { ...searchParams, page: currentPage },
      };
      const { data } = await axios.get(reqEndpoint, regConfig);
      if (!data.result.length) setHasMoreBlogs(false);
      setBlogsErrorMsg(false);
      blogStore[methodName](data.result);
    } catch (err) {
      setBlogsErrorMsg('error fetching blogs');
    }
  };

  const voteBlogReq = ({ blogId }: { blogId: IBlog['_id'] }) => {
    try {
      toggleBlogVote({ blogId, userId: _id });
      const urlEndp = `${API_BASE_URL}/blogs/vote/${blogId}`;
      const headers = { Authorization: userToken };
      axios.patch(urlEndp, undefined, { headers });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!blogs) {
      fetchBlogs('setBlogs');
      setHasMoreBlogs(true);
    }
  }, [blogs]);

  useEffect(() => {
    if (!isMounted && blogs) {
      isMounted = true;
      return;
    }
    if (blogs) fetchBlogs('appendBlogs');
  }, [currentPage]);

  return { blogsErrorMsg, hasMoreBlogs, blogs, increasePage, voteBlogReq };
};

export default useBlogsReq;
