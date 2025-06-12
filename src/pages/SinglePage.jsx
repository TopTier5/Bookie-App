import Navbar from "../components/Navbar";
import war2 from "../assets/images/war2.webp";


function SinglePage (){
    return(
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/*Navbar */}
      <div className="flex items-center justify-between mb-6 bg-white w-full ">
        <div className="flex flex-row">
            <a href="/library" className="flex items-center text-gray-600 hover:text-blue-600 ml-20">
          {/* Back Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Library
        </a>
        {/* <h1 className="h-15">┃</h1> */}
        <div className="ml-10">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Book Details</h1>
        <p>View and manage book information</p>
        </div>
        </div>
        
        <div className="flex space-x-3 mr-10">
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            {/* Edit Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-7.793 7.793-2.828.707.707-2.828 7.793-7.793zM10.16 5.586L14.414 9.84 8.707 15.543l-4.257.652.652-4.257 5.707-5.707z" />
            </svg>
            Edit
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            {/* Delete Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 112 0v1a1 1 0 11-2 0v-1z" clipRule="evenodd" />
            </svg>
            Delete
          </button>
        </div>
      </div>





      {/* Main Content Card */}
        {/* Left Section - Book Image */}
        {/* <div className="md:w-1/3 relative flex-shrink-0"> */}
        <div className="flex flex-row">
        <div className=" relative">
            <div className="absolute top-7 left-4 bg-gray-300 text-black text-xs font-semibold px-3 py-1 rounded-full hover:bg-white">
            Available
          </div>
          <img src={war2} className="w-[80%] h-[85%] rounded-lg object-cover shadow-sm mt-5" />
        </div>

      <div className="p-6 flex flex-col gap-3">
        <div className="border rounded-xl border-gray-300 bg-white shadow-lg">
        {/* Right Section - Book Details */}
        <div className="md:w-2/3 flex-row">
          <div className=" relative flex items-center justify-between mb-2 ">
            <h2 className="text-3xl font-bold text-gray-900  ml-10 mt-5">Think and Grow Rich</h2>
            <div className="absolute top-5 right-0 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full border border-green-200">
              Available
            </div>
          </div>
          <p className="text-gray-600 flex items-center mb-4 ml-10 text-lg">
            {/* Author Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className=" text-sm h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Napoleon Hills
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-nowrap px-5 ml-6 mt-8 ">
          A timeless American classic about the Jazz Age and the pursuit of the American Dream. Set in the summer <br /> of 1922, the story follows Nick Carraway as he observes his mysterious neighbor Jay Gatsby and his <br />obsession with the beautiful Daisy Buchanan.
          </p>
          </div>
          </div>
          

            {/* Book info begins */}
          <div className="border rounded-xl border-gray-300 mt-5 bg-white shadow-lg px-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 ml-8">Book Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {/* ISBN */}
            <div className="flex items-center">
              {/* Icon for ISBN/Pages */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 0a2 2 0 00-2 2v4a-2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2h-2zm-6 8a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z" />
              </svg>
              <div>
                <p className="font-medium text-gray-600 text-sm">ISBN</p>
                <p>978-0-7432-7356-5</p>
              </div>
            </div>

            {/* Pages */}
            <div className="flex items-center">
              {/* Icon for ISBN/Pages */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 0a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2h-2zm-6 8a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z" />
              </svg>
              <div>
                <p className="font-medium text-gray-600 text-sm">Pages</p>
                <p>180 pages</p>
              </div>
            </div>

            {/* Published Year */}
            <div className="flex items-center">
              {/* Icon for Calendar */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-gray-600 text-sm">Published Year</p>
                <p>1925</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              {/* Icon for Location */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-gray-600 text-sm">Location</p>
                <p>A-001</p>
              </div>
            </div>

            {/* Genre */}
            <div className="flex items-center">
              {/* Icon for Genre (Book icon, or something similar) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0117 8.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1h2v2H7V6zm3 0h2v2h-2V6zm3 0h2v2h-2V6z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium text-gray-600 text-sm">Genre</p>
                <p>Classic Literature</p>
              </div>
            </div>

          </div>
          </div>
          {/* End of book info */}
          </div>
      </div>
      </div>
    // </div>
  );
};

export default SinglePage