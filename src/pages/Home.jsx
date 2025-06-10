import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <div className="flex h-screen">
                <aside className="w-64 bg-[#AD856F]">
                    <Sidebar />
                </aside>
                <div className="flex flex-col flex-1">
                    <Navbar />
                    <main className="p-6 bg-white flex-1 overflow-auto">
                        <div className="grid grid-cols-4 gap-5">
                            <div className="border font-sans p-4  border-grey rounded shadow text-black">
                                <h1 className="text-sm font-bold">Total Books</h1>
                                <p className="text-2xl font-bold">6</p>
                                <h5 className="text-xs">Total collection</h5>
                            </div>
                            <div className="border font-sans p-4 border-grey rounded shadow text-black">
                                <h1 className="text-sm font-bold ">Available</h1>
                                <p className="text-2xl text-emerald-800 font-bold">24</p>
                            </div>
                            <div className="border font-sans p-4 rounded shadow text-black">
                                <h1 className="text-sm font-bold">Checked out</h1>
                                <p className="text-2xl">10</p>
                            </div>
                            <div className="border font-sans p-4 rounded shadow text-black">
                                <h1 className="text-lg font-bold">Available</h1>
                                <p className="text-2xl">14</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>


        </>
    );
}
export default Home