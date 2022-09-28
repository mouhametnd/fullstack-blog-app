import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { blogsSliceActions } from '../store/slices/blogs/blogsSlice';
import { IBlogsSlice, TBlogsNames } from '../store/slices/blogs/blogsSliceTypes';
import { IBlog, IStore } from '../types/types';

const useBlogsStore = (blogsName: TBlogsNames) => {
  const dispatch = useDispatch();
  const {blogs, currentPage} = useSelector<IStore, IBlogsSlice['allBlogs']>(state => state.blogs[blogsName]);

  const setBlogs = (blogs: IBlog[]) => dispatch(blogsSliceActions.setBlogs({ blogsName, blogs }));

  const appendBlogs = (blogs: IBlog[]) => dispatch(blogsSliceActions.appendBlogs({ blogsName, blogs }));

  const increasePage = () => dispatch(blogsSliceActions.increasePage(blogsName));


  return { setBlogs, appendBlogs, increasePage, blogs, currentPage };
};

export default useBlogsStore;
