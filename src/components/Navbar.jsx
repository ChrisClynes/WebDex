import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/search">
                    <p className="text-3xl bg-red-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
                        WebDex
                    </p>
                </Link>
                <div className="inline-block flex justify-center flex-shrink-0">
                    <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-m bg-gray-300 dark:bg-gray-100 dark:text-gray-900 rounded-full px-2 py-1 relative w-14 min-w-14 h-8 " >
                        <div className="w-6 h-6 left-1 dark:left-7 top-1 absolute bg-white dark:bg-gray-400 rounded-full hover:bg-gray-100 transition-all duration-500"></div>
                    </button>
                    <label className="form-check-label inline-block text-gray-800 dark:text-gray-200 ml-3">dark mode</label>
                </div>
            </div>
            <Search />
        </div>
    );
} 