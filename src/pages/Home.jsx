import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Home (){
    return(
        <>
        <div>
        <Sidebar />

        <div>
        <Navbar />
        <section className=" flex min-h-screen flex-1">
            <div className="grid grid-cols-4 gap-5 border-b-grey">
                <h1>Total books <br /> 6</h1> 
                <h3>Total collection</h3>
                
            </div>

        </section>
        </div>
        </div>
         </>
    );
}
export default Home