import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Investor from '@public/investor.svg';
import { Card } from 'react-bootstrap';
import 'animate.css'; // Ensure animate.css is included

const LeftImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const leftImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility when the component enters the viewport
          }
        });
      },
      { threshold: 0.1 }
    );

    // Capture the current reference in a local variable
    const currentRef = leftImageRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={leftImageRef}
      className={`flex justify-center items-center py-10 px-6 bg-gray-50 max-w-[95%] md:max-w-[85%] mx-auto mt-16 rounded-[25px] ${
        isVisible ? 'animate__animated animate__fadeInRight' : 'opacity-0'
      }`}
    >
      <Card className="flex flex-col-reverse md:flex-row-reverse items-start p-6 w-full items-center">
        {/* Left Side */}
        <div className="flex-1 md:pr-6 mb-6 md:mb-0 md:ml-[4%]">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">Here for domain investors too</h2>
          <p className="text-gray-600 mb-4">
            As a domain investor, you have particular needs. We get it! So we built a special platform just for domain investors. With its clear interface, bulk domain name uploading and editing features, selling is easier than ever.
          </p>

          <div className="mt-14">
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline border border-blue-600 py-4 px-8 rounded-[15px]"
            >
              Discover our platform
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full">
          <Image
            src={Investor}
            alt="Investor"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
};

export default LeftImage;
