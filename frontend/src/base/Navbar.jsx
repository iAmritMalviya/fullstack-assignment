import React from 'react';
import { icons } from '../constants';

const Navbar = () => {
    return (
        <div className="bg-black rounded-t-lg w-full">
            <div className="flex flex-col md:flex-row justify-around p-4 items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                        <img src={icons.abstract} alt="abstract logo" className="h-8 w-8" />
                        <h1 className="font-bold text-lg md:text-xl text-white">Abstract</h1>
                    </div>
                    <div className="hidden md:flex items-center space-x-2 border-l-2 border-gray-600 pl-4">
                        <p className="text-white text-lg md:text-xl">Help Center</p>
                    </div>
                </div>
                <div className="flex md:hidden mb-4">
                    <p className="text-white text-lg">Help Center</p>
                </div>
                <div>
                    <button className="border border-white border-opacity-70 hover:scale-105 transition-transform duration-150 rounded-md p-2 text-gray-200 text-lg md:text-xl px-5">
                        Submit a request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
