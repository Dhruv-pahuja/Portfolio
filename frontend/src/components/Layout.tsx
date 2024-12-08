import React from 'react';
import Navbar from "./Navbar"
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header >
        <Navbar/>
      </header>

      {/* Main Content */}
      <main className="flex-grow  bg-gray-100 dark:bg-gray-900">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 p-4 fixed bottom-0 left-0 w-full">
        <p className="text-center text-sm dark:text-white">© 2025 Dhruv Pahuja</p>
      </footer>
    </div>
  );
};

export default Layout;
