import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Cards {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: Cards) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility when the card enters the viewport
          }
        });
      },
      { threshold: 0.1 }
    );

    // Store the current reference in a local variable
    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 ${
        isVisible ? 'animate__animated animate__zoomIn' : 'opacity-0'
      }`}
    >
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
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
      <div className="h-1 mt-3 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
    </div>
  );
};

export default Card;
