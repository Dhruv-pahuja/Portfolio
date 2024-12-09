import React from 'react';
import { RootState } from '../store/store';
import { toggleTheme } from '../store/themeSlice';
import { Sun, Moon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';


const ToggleThemeBtn:React.FC = () => {

    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch();
    return (
        <div>
            <button
        className={`p-2 mx-2 rounded-full border-2  flex items-center justify-center transition-colors duration-300 ${
          theme === 'light'
            ? 'bg-[#ff2655] text-white border-2 border-black hover:bg-[#cd0f38]'
            : 'bg-inherit text-white hover:bg-slate-800'
        }`}
        onClick={() => dispatch(toggleTheme())}
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" /> 
        ) : (
          <Sun className="w-5 h-5" /> 
        )}
      </button>
        </div>
    );
}

export default ToggleThemeBtn;
