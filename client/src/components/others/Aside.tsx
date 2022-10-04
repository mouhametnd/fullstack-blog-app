import  { useState } from 'react';
import Hamburger from '../hamburger/Hamburger';
import NavBar from '../navBar/NavBar';
import LogOutButton from './LogOutButton';
import PerPage from '../selects/PerPage';
import SortBy from '../selects/SortBy';

const Aside = () => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const toggleIsAsideOpen = () => setIsAsideOpen(prev => !prev);


  return (
    <section>
      <Hamburger isActive={isAsideOpen} handleClick={toggleIsAsideOpen} />

      <aside
        className={`fixed w-screen h-screen  top-0 left-0 z-10 pt-[92px]  transition-transform translate-x-full   ${
          isAsideOpen && 'translate-x-0'
        }`}
      >
        <div className="bg-white h-screen flex flex-col items-center pr-7  gap-5 max-w-xs ml-auto shadow pt-10   justify-evenly pb-52 ">
          <div>
            <h4 className="font-semibold text-gray-200 border-b-2  ml-auto rounded-br-[4px] text-center mb-3 text-lg  p-0">Navegation</h4>
            <NavBar handleLinkClick={() => setIsAsideOpen(false)} />
          </div>
          

          <div className='flex flex-col gap-2'>
            <h4 className="font-semibold text-gray-200 border-b-2  ml-auto rounded-br-[4px] text-center mb-3 text-lg  p-0">Search Params</h4>
            <SortBy />
            <PerPage/>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-200 border-b-2  ml-auto rounded-br-[4px] text-center mb-3 text-lg  p-0">Log out</h4>
            <LogOutButton />
          </div>
          
        </div>
      </aside>
    </section>
  );
};

export default Aside;
