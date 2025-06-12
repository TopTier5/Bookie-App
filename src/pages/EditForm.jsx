import { Link } from "react-router";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { apiClient } from "../api/client";

function EditForm() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [book, setBook] = useState({});

    const getBook = () => {
        apiClient.get(`/api/v1/books/${id}`)
            .then((response) => {
                console.log(response.data);
                setBook(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(getBook, []);


    const putBook = (event) => {
        event.preventDefault();

        // Collect form input
        const data = new FormData(event.target);

        // Post data to api
        
        apiClient.put(`/api/v1/books/${id}`, data, {
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
                <div className="flex flex-col gap-4 p-4 w-full md:flex-row md:items-center md:justify-between">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Back to Book
                    </Link>

                    <div className="absolute top-0 left-50 p-4">
                        <div className="text-center md:text-left">
                            <h1 className="text-xl  font-semibold text-gray-800 ">Edit Book </h1>
                            <h2 className="text-base  font-medium text-gray-800 ">Update Book Information</h2>
                        </div>
                    </div>
                </div>
            </div>


            <section className="bg-[#FFF3DF] py-8 ">
                <div className="w-[60%] mx-auto my-[5%] bg-[#FFFDF8]  border border-[#FDE68A] rounded-2xl shadow-lg p-8">
                    <form onSubmit={putBook} className="flex flex-col space-y-6 text-center">
                        <h1 className="text-black text-2xl font-bold self-center"> 📔 Edit Book</h1>

                        <div className="grid grid-cols-2 gap-4 justify-between space-x-4">
                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Title*</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                    defaultValue={book.title}>
                                </input>
                            </div>

                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Author*</label>
                                <input
                                    type="text"
                                    name="author"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                    defaultValue={book.author}

                                />
                            </div>




                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Publication Year</label>
                                <input
                                    type="date"
                                    name="publicationYear"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                    defaultValue={book.publicationYear}
                                />
                            </div>



                            <div className="w-20%">
                                <label className="block mb-2 font-bold text-black">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                    defaultValue={book.category}
                                />
                            </div>
                        </div>


                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 w-[100%] text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
                            >
                                💾   Update Book
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}


export default EditForm; 
