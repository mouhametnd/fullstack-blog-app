import React, { useState } from 'react';
import Hamburger from '../hamburger/Hamburger';
import NavBar from '../navBar/NavBar';
import LogOutButton from '../others/LogOutButton';
import SortBy from '../sortby/SortBy';

const Aside = () => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);

  const handleClick = () => setIsAsideOpen(prev => !prev);

  return (
    <section className="">
      <Hamburger isActive={isAsideOpen} handleClick={handleClick} />

      <aside
        className={`fixed w-screen h-screen  top-0 left-0 z-10 pt-[92px] transition-transform translate-x-full ${
          isAsideOpen && 'translate-x-0'
        }`}
      >
        <div className="bg-white h-screen flex flex-col  gap-5">
          <NavBar handleLinkClick={() => setIsAsideOpen(false)} />

          <SortBy/>
          <LogOutButton />
        </div>
      </aside>
    </section>
  );
};

export default Aside;
