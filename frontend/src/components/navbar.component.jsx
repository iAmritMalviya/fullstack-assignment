import React from "react";
import icon from "../assets/icon.png";

function Navbar() {
  return (
    <div>
      <nav
        class="bg-white dark:bg-black
      fixed w-full z-20 top-0 start-0 border-b
       border-gray-200 dark:border-gray-600 m-1 rounded-t-3xl"
      >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href=" " class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={icon} className="h-8" alt="Logo" />
            <span
              class="self-center text-2xl 
             whitespace-nowrap dark:text-white"
            >
              Abstract | Help Center
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white bg-gray-900
                hover:bg-gray-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium
                  rounded-lg text-sm px-4 
                  py-2 text-center
                   transition-colors duration-300
                   border border-white-800"
            >
              Submit a Request
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
