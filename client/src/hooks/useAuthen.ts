import { isAutheSliceActions } from '../store/slices/isAuthen/isAuthenSlice';
import { userSliceActions } from '../store/slices/user/userSlice';
import { TUserSlice } from '../store/slices/user/userSliceTypes';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { useEffect } from 'react';

const { setUser } = userSliceActions;
const { setIsAuthen } = isAutheSliceActions;

const useAuthen = () => {
  const { dispatch } = useStore();
  const navigator = useNavigate();

  const authenticator = (user: TUserSlice) => {
    dispatch(setUser(user));
    dispatch(setIsAuthen(true));
    localStorage.setItem('token', user?.userToken!);
    navigator('/');
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const { data } = await axios.get(`${API_BASE_URL}/user`, { headers: { Authorization: token } });
        authenticator({ ...data.result, userToken: token });
      } catch (error) {
        localStorage.removeItem('token');
      }
    })();
  });

  return { authenticator };
};

export default useAuthen;
