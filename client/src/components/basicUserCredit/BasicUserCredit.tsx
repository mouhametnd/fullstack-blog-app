import React from 'react';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../../types/types';

const BasicUserCredit = () => {
  const { name, username } = useSelector<IStore, IStore['user']>(state => state.user)!;

  return (
      <Link to="/dashboard" className='flex flex-col gap-0.5 '>
        <span className='font-medium text-cyanGreen-100'> {username}</span>
        <span className='font-medium text-cyanGreen-100'>{name}</span>
      </Link>
  );
};

export default BasicUserCredit;
