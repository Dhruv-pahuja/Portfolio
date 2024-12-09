import React from 'react';
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center">
        <Navbar />
      </header>
      <main className="flex-grow bg-gray-100 dark:bg-black overflow-y-auto">
        {children}
      </main>
      <footer className="bg-gray-200 dark:bg-black border-t border-gray-400 rounded-lg p-4 fixed bottom-0 left-0 w-full">
        <p className="text-center text-sm dark:text-white font-bold">
          Copyright © Dhruv Pahuja - 2024 | All Rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Layout;
