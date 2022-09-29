import axios from 'axios';
import { useEffect, useState } from 'react';
import useSearchParams from '../useSearchParams';
import useBlogsStore from '../useBlogsStore';
import { IUseBlogsProps } from './useBlogsTypes';
import useUser from '../userUser';
import { API_BASE_URL } from '../../constants/globalConstants';
import { IBlog, IUser } from '../../types/types';

const useBlogsReq = ({ blogsName, reqEndpoint, headers }: IUseBlogsProps) => {
  const { searchParams } = useSearchParams();
  const [blogsErrorMsg, setBlogsErrorMsg] = useState<string | false>();
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  const blogStore = useBlogsStore(blogsName);
  const { user } = useUser();
  const { blogs, currentPage, increasePage, toggleBlogVote } = blogStore;

  const doBlogsReq = async (methodName: 'setBlogs' | 'appendBlogs') => {
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

  const voteBlogReq = async ({ blogId, userId }: { blogId: IBlog['_id']; userId: IUser['_id'] }) => {
    try {
      toggleBlogVote({ blogId, userId });
      const { userToken } = user;
      const urlEndp = `${API_BASE_URL}/blogs/vote/${blogId}`;
      const headers = { Authorization: userToken };
      axios.patch(urlEndp, undefined, { headers });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!blogs) {
      doBlogsReq('setBlogs');
      setHasMoreBlogs(true);
    }
  }, [blogs]);

  useEffect(() => {
    if (blogs) doBlogsReq('appendBlogs');
  }, [currentPage]);

  return { blogsErrorMsg, hasMoreBlogs, blogs, increasePage, voteBlogReq };
};

export default useBlogsReq;
