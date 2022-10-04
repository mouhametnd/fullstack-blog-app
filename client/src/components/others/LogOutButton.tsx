import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { userSliceActions } from '../../store/slices/user/userSlice';

const { resetBlogsState } = blogsSliceActions;
const { resetUserState } = userSliceActions;
const LogOutButton = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const logout = () => {
    dispatch(resetBlogsState);
    dispatch(resetUserState);
    localStorage.clear();
    navigator('/log-in');
  };

  return <button onClick={logout} className="btn btn-submit hover text-white  mx-auto h-11  max-w-[120px]">Log out</button>;
};

export default LogOutButton;
