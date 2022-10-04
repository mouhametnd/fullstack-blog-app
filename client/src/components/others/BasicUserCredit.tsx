import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../../types';

const BasicUserCredit = () => {
  const { name, username } = useSelector<IStore, IStore['user']>(state => state.user)!;

  return (
    <Link to="/dashboard" className="flex flex-col gap-0.5 ">
      <span className="text-cyanGreen-100 font-bold">{name}</span>
      <span className="font-medium text-cyanGreen-100"> {username}</span>
    </Link>
  );
};

export default BasicUserCredit;
