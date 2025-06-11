import { useState } from "react";
import { Link } from "react-router";


function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-white px-6 py-4 shadow-sm w-full border-b border-gray-300">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >

            <svg className="w-6 h-6"fill="none"stroke="currentColor"strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex flex-col">
            <h2 className="text-lg font-light text-black">
              Library Dashboard
              <p className="text-sm text-gray-400">
                Manage your book collection
              </p>
            </h2>
          </div>
        </div>

        {/* MIDDLE: Search */}
        <div className="flex-grow md:flex-grow-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="🔍 Search books..."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full md:w-80"
          />
        </div>

        {/* RIGHT: Bell + Button */}
        <div className="flex items-center justify-end gap-6">
          <div className="text-gray-700">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          </div>
          <Link to="/addbook">
            <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
              + Add Book
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;