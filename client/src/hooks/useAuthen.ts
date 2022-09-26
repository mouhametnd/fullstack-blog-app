import { isAutheSliceActions } from '../store/slices/isAuthe/isAutheSlice';
import { userSliceActions } from '../store/slices/user/userSlice';
import { TUserSlice } from '../store/slices/user/userSliceTypes';
import {  useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';

const { setUser } = userSliceActions;
const { setIsAuthe } = isAutheSliceActions;
export const useAuthen = () => {
  const { dispatch } = useStore();
  const navigator = useNavigate();
  const authenticate = (user: TUserSlice) => {
    dispatch(setUser(user));
    dispatch(setIsAuthe(true));
    navigator('/all-blogs');
  };
  return { authenticate };
};
