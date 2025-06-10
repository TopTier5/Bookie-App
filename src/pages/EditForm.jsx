import Navbar from "../components/Navbar";


export default function EditForm() {
    return (
        <>
            <Navbar />
            <section className="bg-#FFF1DB flex items-center justify-center min-h-screen">
                <form
                    action="https://formspree.io/f/xkgrddoa"
                    method="POST"
                    class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-black text-bold w-[30%] mx-auto text-center pt-32">Add New Book</h1>




                    <input
                        type="author"
                        className="author"
                        placeholder="Please enter the author's name"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />


                    <input
                        type="email"
                        className="email"
                        placeholder="Please enter your email"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />


                    <input
                        type="email"
                        className="email"
                        placeholder="Please enter your email"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        className="description"
                        placeholder="Your description"
                        rows="4"
                        class="w-full border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </section>
        </>
    )
}

