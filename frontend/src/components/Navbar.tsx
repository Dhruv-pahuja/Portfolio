import React from 'react';
import { ToggleThemeBtn } from "../components/index";

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="py-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center px-4">
      <h1 className="text-3xl dark:text-white">Dhruv.</h1>
      <div className="flex px-3 mx-2">
        <ul className="flex dark:text-white px-2 mx-2">
          {["home", "about", "services", "portfolio", "contact"].map((item) => (
            <li
              key={item}
              className="mx-2 pt-2 cursor-pointer relative group"
              onClick={() => handleScroll(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff2655] transition-all duration-700 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <ToggleThemeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
