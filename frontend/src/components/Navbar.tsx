import React from 'react';
import {ToggleThemeBtn} from "../components/index"

const Navbar: React.FC = () => {
 

  return (
    <nav className="py-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center px-4">
      <h1 className="text-3xl dark:text-white">Dhruv.</h1>
      <div className='flex px-3 mx-2'>
        <ul className='flex dark:text-white px-2 mx-2'>
          <li className='mx-2 pt-2'>Home</li>
          <li className='mx-2 pt-2'>About</li>
          <li className='mx-2 pt-2'>Services</li>
          <li className='mx-2 pt-2'>Portfolio</li>
          <li className='mx-2 pt-2'>Contact</li>
        </ul>
      <ToggleThemeBtn/>
      </div>
    </nav>
  );
};

export default Navbar;
