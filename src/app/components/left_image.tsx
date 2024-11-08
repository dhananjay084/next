import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Buy_domain from '@public/buy_domian.svg';
import { Card } from 'react-bootstrap';
import 'animate.css';

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
      className={`flex justify-center items-center py-10 px-6 bg-gray-50 max-w-[95%] md:max-w-[85%] mx-auto mt-16 rounded-[25px] ${
        isVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'
      }`}
    >
      <Card className="flex flex-col md:flex-row items-start p-6 w-full items-center">
        {/* Left Side */}
        <div className="flex-1 md:pr-6 mb-6 md:mb-0">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">Buy and sell domains</h2>
          <p className="text-gray-600 mb-4">
            Dan.com is a marketplace for domain names. We make sure buying, selling and transferring domains goes smoothly and hassle-free.
          </p>

          <h2 className="text-blue-600 text-lg font-semibold mb-2">Transparency first</h2>
          <p className="text-gray-600 mb-4">
            No hidden costs. No complicated math. You’ll never be in the dark, whether you’re buying or selling.
          </p>
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Effortless trading</h2>
          <p className="text-gray-600 mb-4">
            By using state of the art technology, domain name trading is super simple thanks to our easy-to-use platform.
          </p>
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Secure transactions</h2>
          <p className="text-gray-600 mb-4">
            Security is important to us. Our fraud prevention team monitors all transactions & keeps you safe.
          </p>
          <div className="mt-14">
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline border border-blue-600 py-4 px-8 rounded-[15px]"
            >
              Get to know us
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full">
          <Image
            src={Buy_domain}
            alt="Buy domain"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
};

export default LeftImage;
