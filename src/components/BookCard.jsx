import { Link } from "react-router";
import { apiClient } from "../api/client";

function BookCard({ book }) {
    const deleteBook = () => {
        apiClient.delete(`/books/${book.id}`)
            .then((response) => {
                console.log(response);
                location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (

        <div className=" relative rounded-lg overflow-hidden shadow-2xl bg-white text-gray-400 mt-5 ml-5">
            <div className="relative">

                <img src={book.image} className="h-50 w-70 object-cover flex justify-items-center" />

                <div className="absolute top-4 left-4 bg-white text-purple-500 text-xs font-semibold px-3 py-1 rounded-full">
                    Available
                </div>
            </div>



            <div className="p-4 items-center">
                <div className="font-bold text-xl capitalize mb-2">{book.title}</div>
                <p className="text-gray-400 text-base flex items-center mb-2 capitalize">
                    {/* User icon*/}
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                    {book.author}
                </p>

                <div className="flex justify-between items-center text-gray-400 text-sm mb-16 ">
                    <p className="flex items-center">
                        {/* calendar icon */}
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                        </svg>
                        {book.publicationYear}
                    </p>

                </div>

            </div>

            {/* View,edit, and delete button */}
            <div className="flex justify-center space-x-4 absolute bottom-3 border border-gray-100 py-3 rounded-lg bg-gray-100 shadow-2xl">

                
                <Link to={`/editform?id=${book.id}`} className="flex items-center px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-xs ml-4">
                    {/* Edit Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-7.793 7.793-2.828.707.707-2.828 7.793-7.793zM10.16 5.586L14.414 9.84 8.707 15.543l-4.257.652.652-4.257 5.707-5.707z" />
                    </svg>
                    Edit
                </Link>
                

                <Link to={`/singlepage?/id=${book.id}`} className="flex items-center px-2 py-1 bg-gray-200 border-gray-200 text-gray-700 rounded-md hover:bg-red-600 whitespace-nowrap text-xs">
                    {/* View Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View Book
                </Link>
                <Link onClick={deleteBook} className="flex items-center px-1.5 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs">
                    {/* Delete Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 112 0v1a1 1 0 11-2 0v-1z" clipRule="evenodd" />
                    </svg>
                    Delete
                </Link>
            </div>
        </div>
    );
};

export default BookCard;

