import { useSelector } from 'react-redux';
import { IStore } from '../types';

const useUser = () => useSelector<IStore, IStore['user']>(state => state.user)!;

export default useUser;
