import React from 'react'

function Search() {
  return (
    <div>
     {/* <label htmlFor="Search">
  <span className="text-sm font-medium text-white-700"> Search </span>

  <div className="relative">
    <input
      type="text"
      id="Search"
      className="mt-0.5 w-full rounded border-white-300 pe-10 shadow-sm sm:text-sm"
    />

    <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
      <button
        type="button"
        aria-label="Submit"
        className="rounded-full p-1.5 text-white-700 transition-colors hover:bg-white-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </span>
  </div>
</label> */}


<label htmlFor="Search">
  <span className="text-sm font-medium text-white"> Search </span>

  <div className="relative">
    <input
      type="text"
      id="Search"
      placeholder="Search..."
      className="mt-0.5 w-1/3 m-6 rounded bg-gray-800 border border-gray-600 text-white pe-10 shadow-sm focus:ring-1 focus:ring-blue-500 sm:text-sm"
    />
 
    <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
      <button
        type="button"
        aria-label="Submit"
        className="rounded-full p-1.5 text-gray-300 hover:bg-gray-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </span>
  </div>
</label>


    </div>
  )
}

export default Search
