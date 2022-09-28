import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Header from '../header/Header';
import AllBlogs from '../allBlogs/AllBlogs';

const Home = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Home;
