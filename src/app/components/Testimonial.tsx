import React from 'react';
import Image from 'next/image';
import { Card } from 'react-bootstrap';

const TestimonialsSection = () => {
  const testimonials = [
    {
      imageSrc: '/path-to-video-thumbnail1.jpg',
      logo: 'Decathlon',
      reviewText: 'Crisp has been amazing...',
      reviewerName: 'Chris Sees',
      reviewerCompany: 'Hoxton Mix',
      reviewContent:
        'What I really like in Crisp is the level of reliability...',
      rating: 5,
    },
    {
      imageSrc: '/path-to-video-thumbnail2.jpg',
      logo: 'Reedsy',
      reviewText: 'Since we\'ve started using Crisp...',
      reviewerName: 'Carlos Costa',
      reviewerCompany: 'Foca',
      reviewContent:
        'We are able to measure and manage all mediums effectively...',
      rating: 5,
    },
    {
      imageSrc: '/path-to-video-thumbnail3.jpg',
      logo: 'Emma',
      reviewText: 'Crisp support is stellar...',
      reviewerName: 'Tiphaine Bruel',
      reviewerCompany: 'SSShake',
      reviewContent:
        'It gives me peace of mind to know that...',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-4 bg-gray-50 shadow-lg rounded-xl flex flex-col justify-center items-center"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.logo}
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={200}
              />
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-md shadow">
                <span className="text-xs font-semibold text-gray-800">
                  {testimonial.logo}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <h5 className="text-lg font-bold text-gray-700">
                {testimonial.reviewerName}
              </h5>
              <p className="text-sm text-blue-600 mb-2">
                {testimonial.reviewerCompany}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {testimonial.reviewText}
              </p>
              <div className="text-yellow-500 mb-2">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-sm text-gray-500 italic">
                {testimonial.reviewContent}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
