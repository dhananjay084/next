// components/Card.js
import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
interface cards {
    icon: string; // The icon is a URL or path to the image (string)
    title: string; // The title should be a string
    description: string;
}
const Card = ({ icon, title, description }: cards) => {
    return (
        <div className="group  p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
            <div className="flex justify-start items-center mb-4">
                {/* Use Image component from Next.js */}
                <Image
                    src={icon}
                    alt={title}
                    width={100}
                    height={100}
                    className="rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />

            </div>
            <h3 className="text-lg font-semibold text-grayscale group-hover:text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-600 ">{description}</p>
            <div className="h-1 mt-3 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        </div>
    );
};

export default Card;
