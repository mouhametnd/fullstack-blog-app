import Aside from './Aside';
import BasicUserCredit from './BasicUserCredit';

const Header = () => (
  <header className="py-4 px-4 z-20 flex justify-between custom-shadow bg-white fixed w-full top-0">
    <BasicUserCredit />
    <Aside />
  </header>
);

export default Header;
