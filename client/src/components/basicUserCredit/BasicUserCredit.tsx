import React from 'react';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../../types/types';

const BasicUserCredit = () => {
  const { name, username } = useSelector<IStore, IStore['user']>(state => state.user)!;

  return (
    <div>
      <Link to="/dashboard">
        <span> {username}</span>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default BasicUserCredit;
