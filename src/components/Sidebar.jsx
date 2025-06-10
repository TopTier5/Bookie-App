import AppLogo from "../assets/images/pic2.png"
import { Link } from "react-router";

function Sidebar() {
    return (
        <nav className="bg-white w-64 h-screen border-r-1 border-gray-400">
            {/* <div className="flex items-center gap-3 px-4 py-4 border-b-1 border-gray-400">
                <div className="bg-[#1D4ED8] ml-10">
                    <Link to="/">
                        <img src={AppLogo} alt="Logo" className="h-18 w-18 object-contain" />
                    </Link>
                </div>
            </div> */}
            <div className="flex items-center gap-3 px-4 py-5 border-b-1 border-gray-400">
                <div className="bg-[#1D4ED8] w-8 h-8">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-icon lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                </div>

                <h1>TopTierLMS <br />v1.0 </h1>

            </div>

            <ul className="mt-3 space-y-3 px-7">
                <li className="flex items-center gap-3 mb-5">
                    <Link to="/" className="flex items-center gap-3 py-2 px-6 text-gray-700 rounded-lg hover:border-2 hover:border-blue-200 hover:text-bue-700 transition-all duration-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plus-icon lucide-house-plus"><path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" /><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M15 6h6" /><path d="M18 3v6" /></svg>
                        <span>Dashboard</span></Link>

                </li>

                <li className="flex items-center gap-3 mb-5">
                    <Link to="/addbook" className="flex items-center gap-3 py-2 px-6 text-gray-700 rounded-lg hover:border-2 hover:border-blue-200 hover:text-bue-700 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        <span>Add Book</span></Link></li>

                <li className="flex items-center gap-3 mb-5">
                    <Link to="/displaypages" className="flex items-center gap-3 py-2 px-6 text-gray-700 rounded-lg hover:border-2 hover:border-blue-200 hover:text-bue-700 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chart-gantt-icon lucide-square-chart-gantt"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 8h7" /><path d="M8 12h6" /><path d="M11 16h5" /></svg>
                        <span>View Books</span>
                    </Link>
                </li>
            </ul>

            <div>
            </div>

        </nav>


    );
}
export default Sidebar



