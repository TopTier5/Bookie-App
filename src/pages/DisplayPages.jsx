// import Navbar from "../components/Navbar";
// import BookCard from "../components/BookCard";
// import { useState, useEffect } from "react";
// import { apiClient } from "../api/client";
// import { Link } from "react-router";


// function DisplayPages() {
//     const [books, setBooks] = useState([]);

//     const getBooks = () => {

//         apiClient.get("/api/v1/books")
//             .then((response) => {
//                 console.log(response.data);
//                 setBooks(response.data.data);
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     useEffect(getBooks, []);

//     return (

//         <>
//         <div className="bg-[#404c6d]">
//             <Link to='/' className=" md:hidden">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
//                     strokeWidth={2} className="w-6 h-6 text-blue-600 ml-4 mt-4"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4H9v4a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"
//                     />
//                 </svg>

//             </Link>


//             <div className="hidden md:flex border rounded-lg border-gray-50 bg-gray-50 w-[50%] h-10 mt-5 justify-around items-center ml-5">
//                 <Link to='/' className="hover:bg-white px-2 py-2 rounded text-sm font-medium bg-white cursor-pointer ml-0">Home</Link>
//                 {/* <span className="hover:bg-white px-2 py-2 rounded text-sm font-medium cursor-pointer ml-0">All Pages</span>
//                 <span className="hover:bg-white px-2 py-2 rounded text-sm font-medium cursor-pointer">Available</span>
//                 <span className="hover:bg-white px-2 py-2 rounded text-sm font-medium cursor-pointer">Checked Out</span>
//                 <span className="hover:bg-white px-2 py-2 rounded text-sm font-medium cursor-pointer">Reserved</span> */}
//                  <div className="flex-grow md:flex-grow-0 w-full md:w-auto">
//           <input
//             type="text"
//             placeholder="🔍 Search books..."
//             className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full md:w-80"
//           />
//         </div>
//             </div>

//             <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 sm:grid-cols-2">
//                 {books.map(book => <BookCard key={book.id} book={book} />)}
//             </div>
//             </div>
//         </>

//     );
// }
// export default DisplayPages 

import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";
import { Link } from "react-router";

function DisplayPages() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getBooks = () => {
        apiClient.get("/api/v1/books")
            .then((response) => {
                setBooks(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(getBooks, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="bg-[#404c6d]">
                <Link to='/' className=" md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth={2} className="w-6 h-6 text-blue-600 ml-4 mt-4">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4H9v4a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"
                        />
                    </svg>
                </Link>

                <div className="hidden md:flex border rounded-lg border-gray-50 bg-gray-50 w-[50%] h-10 mt-5 justify-around items-center ml-5">
                    <Link to='/' className="hover:bg-white px-2 py-2 rounded text-sm font-medium bg-white cursor-pointer ml-0">Home</Link>
                    
                    <div className="flex-grow md:flex-grow-0 w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="🔍 Search books..."
                            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full md:w-80"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 sm:grid-cols-2 p-5">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map(book => <BookCard key={book.id} book={book} />)
                    ) : (
                        <p className="text-white col-span-full text-center">No books found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default DisplayPages;
