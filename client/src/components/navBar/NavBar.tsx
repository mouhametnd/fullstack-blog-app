import { NavLink } from 'react-router-dom';
import { pageLinks } from '../../constants';
import highlightActiveLink from '../../utils/highlightActiveLink,';
import './navBar.scss';

interface Iprops {
  handleLinkClick: () => unknown;
}

const NavBar = ({ handleLinkClick }: Iprops) => {
  const highlither = highlightActiveLink('navbar__a', 'navbar__a navbar__a--active');

  return (
    <nav className="navbar">
      {pageLinks.map(({ title, link }) => (
        <NavLink onClick={handleLinkClick} className={highlither} children={title} to={`/${link}`} />
      ))}
    </nav>
  );
};

export default NavBar;
