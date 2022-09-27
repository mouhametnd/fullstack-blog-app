import React from 'react';
import { NavLink } from 'react-router-dom';
import highlightActiveLink from '../../utils/highlightActiveLink,';
import './navBar.scss';
import { INavBarTypes } from './navBarTypes';

const NavBar = ({handleLinkClick}:INavBarTypes) => {
  const highlither = highlightActiveLink('navbar__a', 'navbar__a navbar__a--active')

  return (
    <nav className="navbar">
      <NavLink onClick={handleLinkClick} className={highlither} to="/all-blogs">
        All Blogs
      </NavLink>
      <NavLink onClick={handleLinkClick} className={highlither} to="/my-blogs">
        My Blogs
      </NavLink>
      <NavLink onClick={handleLinkClick} className={highlither} to="/dashboad">
        Dashboard
      </NavLink>
    </nav>
  );
};

export default NavBar;
