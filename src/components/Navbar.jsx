import { Link } from "react-router";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <>
      <nav className="bg-white px-6 py-4 shadow-sm w-full border-b border-gray-300">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h2 className="text-lg font-light text-black">
                Library Dashboard
                <p className="text-sm text-gray-400">Manage your book collection</p>
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-6">
            <Link to="/addbook">
              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer w-full md:w-auto">
                + Add Book
              </button>
            </Link>

            <Link to="/displaypages">
              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer w-full md:w-auto">
                View Books
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

