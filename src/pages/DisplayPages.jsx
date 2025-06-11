import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";

function DisplayPages() {
    return (
        <>
            <div className="border rounded-lg border-gray-50 bg-gray-50 w-[35%] h-10 mt-5 flex justify-around items-center ml-5">
                <span className="hover:bg-white px-2 py-2 rounded text-sm font-medium bg-white cursor-pointer ml-0">All Pages</span>
                <span className="hover:bg-white px-2 py-2 rounded  text-sm font-medium cursor-pointer">Available</span>
                <span className="hover:bg-white px-2 py-2 rounded  text-sm font-medium cursor-pointer">Checked Out</span>
                <span className="hover:bg-white px-2 py-2 rounded  text-sm font-medium cursor-pointer">Reserved</span>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(n => <BookCard key={n} />)}


            </div>
        </>

    );
}
export default DisplayPages 