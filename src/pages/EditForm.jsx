import Navbar from "../components/Navbar";


function EditForm() {

    return (
        <>
            <Navbar />
            
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
                                <label className="block mb-2 font-bold text-black">Cateogry</label>
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
