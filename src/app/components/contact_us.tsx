import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Dots from '@public/dots.svg';
import Reception from '@public/reception.webp';
import Man from '@public/man.webp';
import { Card } from 'react-bootstrap';
import 'animate.css'; // Ensure animate.css is included

const LeftImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const leftImageRef = useRef<HTMLDivElement>(null);

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

    // Store the current reference in a local variable
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
      className={`flex justify-center items-center px-6 bg-[#242f47] max-w-[95%] md:max-w-[85%] mx-auto mt-16 rounded-[35px] ${
        isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
      }`}
    >
      <Card className="flex flex-col md:flex-row items-start p-6 w-full items-center">
        {/* Left Side */}
        <div className="flex-1 md:pr-6 mb-6 md:mb-0 text-white">
          <h2 className="text-4xl font-semibold text-white mb-2">Build your online business</h2>
          <p className="text-white mb-4">
            Dan.com is a marketplace for domain names. We make sure buying, selling, and transferring domains goes smoothly and hassle-free.
          </p>

          <div className="mt-14">
            <a
              href="#"
              className="text-white font-medium hover:underline border border-white py-4 px-8 rounded-[15px]"
            >
              Get to know us
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full relative hidden md:block">
          {/* Dots Image */}
          <Image
            src={Dots}
            alt="dots"
            className={`absolute top-[-20%] left-0 ${isVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
          />
          
          {/* Reception Image */}
          <Image
            src={Reception}
            alt="robot"
            className={`w-full h-auto rounded-lg ${isVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
          />

          {/* Man Image */}
          <Image
            src={Man}
            alt="person"
            className={`w-[50px] sm:w-[100px] md:w-[150px] h-auto rounded-lg absolute top-[10%] sm:top-[12%] md:top-[15%] right-[-5%] sm:right-[-5%] md:right-[-5%] lg:right-[-5%] hidden xl:block ${
              isVisible ? 'animate__animated animate__fadeInRight' : 'opacity-0'
            }`}
          />
        </div>
      </Card>
    </div>
  );
};

export default LeftImage;
