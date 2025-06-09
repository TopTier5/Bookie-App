import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Home (){
    return(
        <>
        <div className="flex h-screen">
            {/* Sidebar on the left */}
            <aside className="w-64 bg-[#AD856F]">
              <Sidebar />
            </aside>

            {/* Main component on the right */}
            <div className="flex flex-col flex-1">
            {/* Navbar at the top */}
            <Navbar />

            {/* Page content */}
            <main className="p-6 bg-white flex-1 overflow-auto">
            </main>
            </div>
            </div>


         </>
    );
}
export default Home