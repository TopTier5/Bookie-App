import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";

function Home() {
    const [books, setBooks] = useState([]);

    const getBooks = () => {

        apiClient.get("/api/v1/books")
            .then((response) => {
                console.log(response.data);
                setBooks(response.data.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(getBooks, []);

    return (
        <>
            <div className="flex h-screen">
                <aside className="w-64 bg-[#AD856F] hidden md:block">
                    <Sidebar />
                </aside>
                <div className="flex flex-col flex-1">
                    <Navbar />
                    <main className="p-6 bg-[#F9FAFB] flex-1 overflow-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="border bg-white font-sans p-4  border-grey rounded shadow text-black">
                                <h1 className="text-sm font-bold">Total Books <span className="text-2xl">📘</span></h1>
                                <p className="text-2xl font-bold">30</p>
                                <h5 className="text-xs">Total collection</h5>
                            </div>
                            <div className="border bg-white font-sans p-4 border-grey rounded shadow text-black">
                                <h1 className="text-sm font-bold">Available <span className="text-2xl">✅</span></h1>
                                <p className="text-2xl text-emerald-800 font-bold">14</p>
                                <h5 className="text-xs">Books available</h5>
                            </div>
                            <div className="border bg-white font-sans p-4 rounded shadow text-black">
                                <h1 className="text-sm font-bold">Checked out<span className="text-2xl" >📊</span></h1>
                                <p className="text-2xl  text-orange-600 font-bold">10</p>
                                <h5 className="text-xs">Books checked out</h5>
                            </div>
                            <div className="border bg-white font-sans p-4 rounded shadow text-black">
                                <h1 className="text-lg font-bold">Reserved <span className="text-2xl" >🪪</span></h1>
                                <p className="text-2xl text-violet-900 font-bold">6</p>
                                <h5 className="text-xs">Books reserved</h5>
                            </div>
                        </div>
                        <div className=" mt-7 bg-blue-200 p-4 rounded shadow-md mb-6"><h2 className="text-xl font-semibold text-blue-900">🔥 Trending Reads</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                            {books.map(book => <BookCard key={book.id} book={book} />)}
                        </div>

                    </main>
                </div>
            </div>


        </>
    );
}
export default Home