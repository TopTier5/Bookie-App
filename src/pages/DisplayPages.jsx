import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

function DisplayPages() {
    return (
        <>
            <h1 className="text-4xl text-purple-600">This is our Display Pages</h1>
            <div className="grid grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16].map(n => <BookCard key={n} />)}

            </div>
        </>

    );
}
export default DisplayPages 