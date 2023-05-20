"use client";

import React, { ReactNode, useState } from "react";
interface SearchbarProps {
  children: ReactNode | String;
  onClick: (city: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ children, onClick }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex mt-2 justify-center flex-col items-center sm:flex-row    ">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="search"
        type="search"
        id="search-id"
        placeholder="Your city or zip code"
        className="  w-3/4 sm:w-1/2 md:w-1/4 lg:w-72 
              rounded-md 
              border-0       
                    p-1.5
              text-gray-900 
          first-letter: capitalize  
              shadow-lg
              ring-1 
              ring-inset 
              ring-gray-300 
              placeholder:text-gray-400 
              placeholder:px-2
placeholder:text-xs
sm:placeholder:text-sm

              
             focus:ring-2 
             focus:ring-inset 
              focus:ring-sky-600 
              focus:outline-none
          focus:shadow-gray-400 
              sm:text-sm 
              sm:leading-6 "
      />
      <button
        onClick={() => onClick(value)}
        className="block rounded-md bg-cyan-600  p-1.5 mx-2 text-white text-sm sm:text-base         
        
        
              shadow-lg shadow-gray-400 hover:bg-cyan-800
mt-1 md:mt-0 transition duration-300 ease-in-out

                "
      >
        {children}
      </button>
    </div>
  );
};

export default Searchbar;
