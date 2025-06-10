import React from 'react';
import NotFoundImage from '../assets/images/pic1.jpg'; // Adjust path based on your file structure

const NotFoundPage = () => {
    return (
        // Use the imported image in your style attribute
        <div
            className="w-full h-screen flex items-center justify-center bg-contain bg-center bg-no-repeat" // Add utility classes for styling
            style={{ backgroundImage: `url(${NotFoundImage})` }}
        >
            <p className="text-black text-4xl font-bold">Page Not Found</p>
        </div>
    );
};

export default NotFoundPage;