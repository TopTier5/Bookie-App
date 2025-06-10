import Navbar from "../components/Navbar";
import React, { useState } from "react";


export default function AddBook() {

    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    const handleDecrease = () => setYear((prev) => prev - 1);
    const handleIncrease = () => setYear((prev) => prev + 1);

    return (
        <>
            <Navbar />
            <section className="bg-[#FFF1DB] flex items-center justify-center min-h-screen">
                <form
                    action="https://formspree.io/f/xkgrddoa"
                    method="POST"
                    class="bg-white p-2 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-black text-bold w-[30%] mx-auto text-center pt-32">Add New Book</h1>

                    <div className="flex flex-row gap-2
                     mb-4">
                        <div>
                            <label className="">title</label>
                            <input
                                type="title"
                                className="Title*"
                                placeholder="Book Title"
                                class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="">Author</label>
                            <input
                                type="author"
                                className="Author*"
                                placeholder="Author's name"
                                class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>



                    <div className="flex flex-row gap-2 mb-4">
                        <label className="">ISBN</label>
                        <input
                            type="isbn"
                            className="ISBN"
                            placeholder="ISBN number"
                            class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <div>
                            <label className="mr-4 font-medium">Year:</label>
                            <button
                                type="button"
                                onClick={handleDecrease}
                                className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                            >-</button>
                            <input
                                type="number"
                                name="year"
                                value={year}
                                readOnly
                                className="w-20 text-center border-t border-b border-gray-300"
                            />
                            <button
                                type="button"
                                onClick={handleIncrease}
                                className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                            >+</button>
                        </div>
                        {/* ...other inputs... */}

                    </div>



                <div className="flex flex-row gap-2 mb-4">
                    <label className="">ISBN</label>
                    <input
                        type="genre"
                        className="Genre"
                        placeholder="Please enter the genre"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div className="mb-4 flex items-center">
                        <label className="mr-4 font-medium">Pages</label>
                        <button
                            type="button"
                            onClick={handleDecrease}
                            className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                        >-</button>
                        <input
                            type="number"
                            name="pages"
                            readOnly
                            className="w-20 text-center border-t border-b border-gray-300"
                        />
                        <button
                            type="button"
                            onClick={handleIncrease}
                            className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                        >+</button>
                    </div>
                    
                    {/* ...other inputs... */}
                </div>

                    <div className="flex flex-col w-[30%]">
                        <label className="text-white" htmlFor="status">Status</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md">
                            <option selected disabled>Available</option>
                            <option value="checked out">Checked Out </option>
                            <option value="reserved">Reserved</option>
                        </select>
                    </div>


                    <input
                        type="location"
                        className="Location"
                        placeholder="Please enter the location"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />


                    <input
                        type="image"
                        className="Image"
                        placeholder="Please enter the image URL"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        className="description"
                        placeholder="Your description"
                        rows="6"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>


                    <div class="flex justify-end">
                        <button
                            type="add book"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-200"
                        > Add Book
                        </button>
                    </div>

                </form>

            </section>
        </>
    )
}

