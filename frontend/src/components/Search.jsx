import React from "react";

function Search() {
  return (
    <div className="flex items-center justify-center w-full">
      <label className="input input-bordered flex items-center gap-2 w-full max-w-2xl h-10 px-4">
        <svg
          className="h-5 w-5 opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input 
          type="search" 
          className="grow text-lg" 
          placeholder="Search..." 
        />
        <div className="flex gap-1">
          <kbd className="kbd kbd-md">⌘</kbd>
          <kbd className="kbd kbd-md">K</kbd>
        </div>
      </label>
    </div>
  );
}

export default Search;