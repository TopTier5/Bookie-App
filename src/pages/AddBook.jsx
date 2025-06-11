import React from "react";
import Navbar from "../components/Navbar";

export default function AddBook() {
    return (
        <>
            <Navbar />

            <div className="w-[60%] mx-auto mt-10 bg-[#FFFCF6]   border border-[#FFFCF7] rounded-2xl shadow-lg p-8">
                <form className="flex flex-col space-y-6">
                    
            
                    <div className="flex flex-row justify-between space-x-4">
                        <div className="w-1/2">
                            <label className="block mb-2 font-bold text-black">Title*</label>
                            <input 
                                type="text" 
                                placeholder="Enter book title" 
                                className="w-full border border-blue-200 rounded px-4 py-2"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block mb-2 font-bold text-black">Author*</label>
                            <input 
                                type="text" 
                                placeholder="Enter author name" 
                                className="w-full border border-blue-200 rounded px-4 py-2"
                            />
                        </div>
                    </div>

        
                    <div className="flex flex-row justify-between space-x-4">
                        <div className="w-1/2 space-y-4">
                            <div>
                                <label className="block mb-2 font-bold text-black">Genre</label>
                                <input 
                                    type="text" 
                                    placeholder="Literature" 
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-bold text-black">Status</label>
                                <input 
                                    type="text" 
                                    placeholder="Available " 
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>
                        </div>

                        <div className="w-1/2 space-y-4">
                            <div>
                                <label className="block mb-2 font-bold text-black">Pages</label>
                                <input 
                                    type="number" 
                                    placeholder=" 30" 
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-bold text-black">Location</label>
                                <input 
                                    type="text" 
                                    placeholder="location" 
                                    className="w-full border border-blue-200 rounded px-4 py-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Cover URL */}
                    <div>
                        <label className="block mb-2 font-bold text-black">Cover Image URL</label>
                        <input 
                            type="url" 
                            placeholder="https://" 
                            className="w-full border border-blue-200 rounded px-4 py-2"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 font-bold text-black">Description</label>
                        <textarea 
                            placeholder="Enter book description"
                            className="w-full border border-blue-200 rounded px-4 py-2 min-h-[100px]"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
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
        </>
    );
}
