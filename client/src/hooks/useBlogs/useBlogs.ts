import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { IBlogsSlice } from '../../store/slices/blogs/blogsSliceTypes';
import { IStore, IUseBlogsProps } from '../../types';
import useSearchParams from '../useSearchParams';

const useBlogs = ({ blogsName, reqEndpoint, headers }: IUseBlogsProps) => {
  const [error, setError] = useState<string | false>();
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  const dispatch = useDispatch();
  const { searchParams } = useSearchParams();
  const { blogs, currentPage } = useSelector<IStore, IBlogsSlice['allBlogs']>(state => state.blogs[blogsName]);

  const fetchBlogs = async (actionName: 'setBlogs' | 'appendBlogs') => {
    try {
      const regConfig = {
        headers,
        params: { ...searchParams, page: currentPage },
      };
      const { data } = await axios.get(reqEndpoint, regConfig);

      dispatch(blogsSliceActions[actionName]({ blogsName, blogs: data.result }));
      setError(false);
      if (actionName === 'setBlogs' && !data.result.length) setHasMoreBlogs(false);
    } catch (error) {
      setError('error fetching blogs');
    }
  };

  const setBlogs = () => fetchBlogs('setBlogs');
  const appendBlogs = () => fetchBlogs('appendBlogs');
  const increasePage = () => dispatch(blogsSliceActions.increasePage(blogsName));

  useEffect(() => {
    if (!blogs) setBlogs();
  }, [blogs]);

  useEffect(() => {
    if (blogs) appendBlogs();
  }, [currentPage]);

  return { error, hasMoreBlogs, blogs, increasePage };
};

export default useBlogs;
