import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleTheme } from '../store/themeSlice';
import { Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <nav className="py-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center px-4">
      <h1 className="text-xl dark:text-white">Dhruv</h1>
      <button
        className={`p-2 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
          theme === 'light'
            ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-400'
            : 'bg-slate-800 text-yellow-400 border-yellow-400 hover:bg-slate-700'
        }`}
        onClick={() => dispatch(toggleTheme())}
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" /> // Moon icon for dark mode
        ) : (
          <Sun className="w-5 h-5" /> // Sun icon for light mode
        )}
      </button>
    </nav>
  );
};

export default Navbar;
