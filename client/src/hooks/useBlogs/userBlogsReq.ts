import axios from 'axios';
import { useEffect, useState } from 'react';
import useSearchParams from '../useSearchParams';
import useBlogsStore from '../useBlogsStore';
import { IUseBlogsProps } from './useBlogsTypes';

const useBlogsReq = ({ blogsName, reqEndpoint, headers }: IUseBlogsProps) => {
  const { searchParams } = useSearchParams();
  const [blogsErrorMsg, setBlogsErrorMsg] = useState<string | false>();
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  const blogStore = useBlogsStore(blogsName);
  const { blogs, currentPage, increasePage } = blogStore;

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

  useEffect(() => {
    if (!blogs) {
      doBlogsReq('setBlogs');
      setHasMoreBlogs(true);
    }
  }, [blogs]);

  useEffect(() => {
    if (blogs) doBlogsReq('appendBlogs');
  }, [currentPage]);

  return { blogsErrorMsg, hasMoreBlogs, blogs, increasePage };
};

export default useBlogsReq;
