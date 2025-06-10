  import React from 'react';
 import napo2 from '../assets/images/napo2.jpg';
 import war from '../assets/images/war.webp';
 import Richard from '../assets/images/Richard.jpg';
 import eli1 from '../assets/images/eli1.jpg';
 import fall from '../assets/images/fall.webp';
 import baby1 from '../assets/images/napo2.jpg';
 import react from '../assets/images/react.jpg';
 import millio from '../assets/images/millio.jpg';
 import dad from '../assets/images/dad.jpg';
 import eli3 from '../assets/images/eli3.jpg';
 import elis2 from '../assets/images/elis2.jpg';
 import js from '../assets/images/js.jpg';
 import noexcus from '../assets/images/noexcus.webp'


function BookCard(){
    return(
    

    <div className="rounded-lg overflow-hidden shadow-2xl bg-white text-gray-400 mt-5 ml-5">
      <div className="relative">
    
        {/* Book1 Image */}
         <img src={dad} />
         {/* <img src={noexcus} /> */}
         {/* <img src={napo2} /> */}
         {/* <img src={war} />
         <img src={Richard} />
         <img src={eli1} />
         <img src={fall} />
         <img src={baby1} />
          <img src={noexcus} />
         <img src={react} />
         <img src={millio} />
         <img src={fall} />
         <img src={elis2} />
          <img src={Richard} />
         <img src={eli3} />
         <img src={js} /> */}
       
        <div className="absolute top-4 left-4 bg-white text-purple-500 text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-xl mb-2">Think and Grow Rich</div>
        <p className="text-gray-400 text-base flex items-center mb-2">
          {/* User icon*/}
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
          Napoleon Hills
        </p>

        <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
          <p className="flex items-center">
            {/* calendar icon */}
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            1925
          </p>
          <p className="flex items-center">
            <span className="text-xs font-bold">#</span> 180p
          </p>
        </div>

        <div className="flex justify-between items-center text-gray-400 text-sm">
          <p className='rounded-full px-3 py-1 bg-gray-100 shadow-lg'>Self Development</p>
          <p className="flex items-center">
            {/*location icon */}
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            A-001
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

