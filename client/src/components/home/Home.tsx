import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/dashboard">To Dashboard</Link>
      <Link to="/all-blogs">To all-bllogs</Link>
      <Link to="/my-blogs">To my-home</Link>
      <Outlet />
    </>
  );
};

export default Home;
