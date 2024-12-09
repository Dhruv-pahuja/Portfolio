import React from 'react';
import Navbar from "./Navbar"
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header >
        <Navbar/>
      </header>
      <main className="flex-grow  bg-gray-100 dark:bg-gray-900">
        {children}
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 p-4 fixed bottom-0 left-0 w-full">
        <p className="text-center text-sm dark:text-white  text-[#e71a47]">Copyright © Dhruv Pahuja | 2025</p>
      </footer>
    </div>
  );
};

export default Layout;
