import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';
import { API_BASE_URL } from '../../constants/globalConstants';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { IBlogsSlice, TBlogsNames } from '../../store/slices/blogs/blogsSliceTypes';
import { IBlog, IStore } from '../../types/types';
import useSearchParams from '../useSearchParams';
import { IUseBlogsProps } from './useBlogsTypes';

const useBlogs = ({ blogsName, reqEndpoint, headers }: IUseBlogsProps) => {
  const [error, setError] = useState<string | false>();
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  const dispatch = useDispatch();
  const { searchParams } = useSearchParams();
  const { blogs, currentPage } = useSelector<IStore, IBlogsSlice['allBlogs']>(state => state.blogs[blogsName]);

  // todo change funcs names
  // todo pass seBlogs & appendBlogs things into a function
  const setBlogs = async () => {
    try {
      const regConfig = {
        headers,
        params: { ...searchParams, page: currentPage, perPage: '2' },
      };
      const { data } = await axios.get(reqEndpoint, regConfig);
      if (!data.result.length) setHasMoreBlogs(false);

      dispatch(blogsSliceActions.setBlogs({ blogsName, blogs: data.result }));
      setError(false);
    } catch (error) {
      setError('error fetching blogs');
    }
  };

  const appendBlogs = async () => {
    try {
      const regConfig = {
        headers,
        params: { ...searchParams, page: currentPage, perPage: '2' },
      };
      const { data } = await axios.get(reqEndpoint, regConfig);

      dispatch(blogsSliceActions.appendBlogs({ blogsName, blogs: data.result }));
      setError(false);
    } catch (error) {
      setError('error fetching blogs');
    }
  };

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
