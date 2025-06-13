import React from "react";
import { apiClient } from "../api/client";
import { Link } from "react-router";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";




export default function AddBook() {
    const navigate = useNavigate();

    const postBook = async (data) => {
        

        // Post data to api
        try {
            const response = await apiClient.post("/api/v1/books", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
            navigate("/displaypages");
        }
            catch (error) {
            console.log(error);



        }
        
                  
               
        
    };
    return (
        <>


            <div className="flex items-center justify-between mb-6 bg-white w-full ">
                <div className="flex flex-row">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Back to Library
                    </Link>

                    <div className="absolute top-0 left-50 p-4">     
                        <div className="text-center md:text-left">
                        <h1 className="text-xl sm:text-xl font-semibold text-gray-800">Book Details</h1>
                        <p>View and manage book information</p>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-3 mr-10">
                    <div className="flex items-center px-4 py-2 font-bold text-gray-800 ">📖 Add Book
                    </div>
                </div>
            </div>


            <section className="bg-[#FFF3DF] py-8">
                <div className="w-[60%] mx-auto bg-[#FFFDF8]  border border-[#FDE68A] rounded-2xl shadow-lg p-8 ">
                    <form action={postBook} className="flex flex-col space-y-6 text-center">
                        <h1 className="text-black text-2xl font-bold "> 📖 Add New Book</h1>
                        <h3 className="text-black">Fill in the details below to add a new book to your library.</h3>

                        <div className="grid grid-cols-2 gap-4 justify-between space-x-4">
                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Title*</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                    required>
                                </input>
                            </div>

                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Author*</label>
                                <input
                                    type="text"
                                    name="author"
                                    className="w-full border border-blue-200 rounded px-4 py-2"

                                />
                            </div>




                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Publication Year</label>
                                <input
                                    type="date"
                                    name="publicationYear"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>



                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>

                        </div>

                        <div className="w-120%">
                            <label className="block mb-2 font-bold text-black">Cover Image URL</label>
                            <input
                                type="text"
                                name="image"
                                className="w-full border border-blue-200 rounded px-4 py-2"
                            />
                        </div>

                        <div className="w-120%">
                            <label className="block mb-2 font-bold text-black">Description</label>
                            <input
                                type="text"
                                name="description"
                                className="w-full border border-blue-200 rounded px-4 py-2"
                            />
                        </div>






                        <div className="">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white w-[100%] px-6 py-2 rounded hover:bg-blue-800 transition-colors"
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

