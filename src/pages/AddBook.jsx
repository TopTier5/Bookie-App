import React from "react";
import Navbar from "../components/Navbar";
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
            <Navbar />
            <section className="bg-[#FFF3DF] ">
                <div className="w-[60%] mx-auto bg-[#FFFDF8]  border border-[#FDE68A] rounded-2xl shadow-lg p-8">
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
