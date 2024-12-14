import React, { useState } from "react";
import { ToggleThemeBtn } from "../components/index";
import { Menu, X } from "lucide-react";
import "./Navbar.css"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add("pop-effect");
  
      section.scrollIntoView({ behavior: "smooth" });
  
      setTimeout(() => {
        section.classList.remove("pop-effect");
      }, 500); 
  
      setIsMenuOpen(false); 
    }
  };
  

  return (
    <nav className="py-4 bg-gray-200 dark:bg-black border-y border-gray-500 flex justify-between items-center px-4 rounded-3xl m-3 fixed md:w-[70vw] w-[80vw] place-content-center z-30">
      {/* Logo */}
      <h1 className="text-xl md:text-3xl dark:text-white font-bold"><span className="text-[#ff2655]">D</span>hruv.<span className="text-[#ff2655]">P</span>ahuja</h1>
      <button
        className="md:hidden text-gray-800 dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 md:relative md:top-0 md:left-0  md:w-auto border-b border-x md:border-none md:p-0 p-4 w-full rounded-xl border-gray-500 bg-gray-200 dark:bg-inherit font-semibold md:flex items-center px-4 md:px-0`}
      >
        <ul className="flex flex-col md:flex-row dark:text-white w-full md:w-auto">
          {["home", "about", "services", "portfolio", "contact"].map((item) => (
            <li
              key={item}
              className="mx-2 py-2 md:py-0 cursor-pointer relative group text-center md:text-lg md:text-left"
              onClick={() => handleScroll(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] md:bg-[#ff2655] transition-all duration-700 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 md:mt-0">
          <ToggleThemeBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
