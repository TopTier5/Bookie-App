import NotFoundImage from '../assets/images/pic1.jpg';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${NotFoundImage})` }}>
            <div>
                <p className="text-black text-4xl font-bold h-[80vh] text-center">Page Not Found</p>

                <div className="text-center">
                    <Link to="/">
                        <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2 rounded-md text-sm font-medium cursor-pointer">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </section>



    );
};

export default NotFoundPage;