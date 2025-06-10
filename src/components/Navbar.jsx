import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="bg-white px-6 py-4 shadow-sm w-full border-b-1 border-gray-400">
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-light text-black">Library Dashboard <p className="text-sm text-gray-400">Manage your book collection</p></h2>
                
                <div className="ml-[250px]">
                    <input type="text" placeholder="🔍Search books..." className="border border-gray-300 rounded-md px-10 py-2 text-sm" />
              </div>

              <div className="ml-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
              </div>

              <div className="ml-12">
                <Link to="/addbook">
                <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2 rounded-md text-sm font-medium cursor-pointer">+ Add Book</button>
                </Link>

                
              </div>

            </div>

              
              
        </nav>
    );
}
export default Navbar