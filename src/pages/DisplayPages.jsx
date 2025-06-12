import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";


function DisplayPages() {
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
            <div className="border rounded-lg border-gray-50 bg-gray-50 w-[35%] h-10 mt-5 flex justify-around items-center ml-5">
                <span className="hover:bg-white px-2 py-2 rounded text-sm font-medium bg-white cursor-pointer ml-0">All Pages</span>
                <span className="hover:bg-white px-2 py-2 rounded  text-sm font-medium cursor-pointer">Available</span>
                <span className="hover:bg-white px-2 py-2 rounded  text-sm font-medium cursor-pointer">Checked Out</span>
                <span className="hover:bg-white px-2 py-2 rounded  text-sm font-medium cursor-pointer">Reserved</span>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </>

    );
}
export default DisplayPages 