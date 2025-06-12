import React from "react";
import { apiClient } from "../api/client";



export default function AddBook() {
    const postBook = (event) => {
        event.preventDefault();

        // Collect form input
        const data = new FormData(event.target);

        // Post data to api
        apiClient
            .post("/api/v1/books", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>


            <div className="flex items-center justify-between mb-6 bg-white w-full ">
                <div className="flex flex-row">
                    <a href="/library" className="flex items-center text-gray-600 hover:text-blue-600 ml-20">
                        {/* Back Arrow Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Back to Library
                    </a>
                    {/* <h1 className="h-15">┃</h1> */}
                    <div className="ml-10">
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Book Details</h1>
                        <p>View and manage book information</p>
                    </div>
                </div>

                <div className="flex space-x-3 mr-10">
                    <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                        {/* Edit Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-7.793 7.793-2.828.707.707-2.828 7.793-7.793zM10.16 5.586L14.414 9.84 8.707 15.543l-4.257.652.652-4.257 5.707-5.707z" />
                        </svg>
                        Add Book
                    </button>
                </div>
            </div>


            <section className="bg-[#FFF3DF] py-8">
                <div className="w-[60%] mx-auto bg-[#FFFDF8]  border border-[#FDE68A] rounded-2xl shadow-lg p-8 ">
                    <form onSubmit={postBook} className="flex flex-col space-y-6 text-center">
                        <h1 className="text-black text-2xl font-bold "> 📖 Add New Book</h1>
                        <h3 className="text-black">Fill in the details below to add a new book to your library.</h3>


                        <div className="flex flex-row justify-between space-x-4">
                            <div className="w-1/2">
                                <label className="block mb-2 font-bold text-black">Title*</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-2 font-bold text-black">Author*</label>
                                <input
                                    type="text"
                                    name="author"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>
                        </div>


                        <div className="flex flex-row justify-between space-x-4">
                            <div className="w-1/2">
                                <div>
                                    <label className="block mb-2 font-bold text-black">Category</label>
                                    <input
                                        type="text"
                                        placeholder="category"
                                        className="w-full border border-blue-200 rounded px-4 py-2"
                                    />
                                </div>
                            </div>

                            <div className="w-1/2">
                                <div>
                                    <label className="block mb-2 font-bold text-black">Publication Year</label>
                                    <input
                                        type="date"
                                        name="publicationYear"
                                        className="w-full border border-blue-200 rounded px-4 py-2"
                                    />
                                </div>
                            </div>
                        </div>


                        <div>
                            <label className="block mb-2 font-bold text-black">Cover Image URL</label>
                            <input
                                type="text"
                                name="image"
                                className="w-full border border-blue-200 rounded px-4 py-2"
                            />
                        </div>



                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
                            >
                                Add Book
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
}

