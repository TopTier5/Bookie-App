


function EditForm() {

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
                    <div className="">
                        <h1 className="text-xl sm:text-l font-semibold text-gray-800 ml-10">Edit Book </h1>
                        <h2 className="text-l sm:text-m font-medium text-gray-800 ml-10">Update Book Information</h2>
                    </div>
                </div>
                </div>             
               

                <section className="bg-[#FFF3DF] py-8 ">
                    <div className="w-[60%] mx-auto my-[5%] bg-[#FFFDF8]  border border-[#FDE68A] rounded-2xl shadow-lg p-8">
                        <form className="flex flex-col space-y-6 text-center">
                            <h1 className="text-black text-2xl font-bold self-center"> 📔 Edit Book</h1>

                            <div className="grid grid-cols-2 gap-4 justify-between space-x-4">
                                <div className="w-20%">
                                    <label className="block mb-2 font-bold text-black">Title*</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="w-full border border-blue-200 rounded px-4 py-2"
                                    />
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


                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
                                >
                                    Edit Book
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            
            </>
            )
}


            export default EditForm; 
