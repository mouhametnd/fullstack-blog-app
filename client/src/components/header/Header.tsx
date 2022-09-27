import React from 'react';
import Aside from '../aside/Aside';
import BasicUserCredit from '../basicUserCredit/BasicUserCredit';
import LogOutButton from '../others/LogOutButton';

const Header = () => {
  return (

    <header className="py-4 px-4 flex justify-between shadow ">
      <BasicUserCredit />
      <Aside/>
      {/* <LogOutButton /> */}
    </header>
  );
};

export default Header;
