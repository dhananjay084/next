import Clouds from "@public/clouds.svg";
import LeftImage from "@public/land_left.svg";
import RightImage from "@public/land_right.svg";
import Image from 'next/image';
import LeftScene from "@public/scene_left.png";
import RightScene from "@public/scene_right.png";
import { CiSearch } from "react-icons/ci";
import Custom_Card from "../app/components/Card";
import Fire from "@public/fire.svg";
import Cards from "@public/cards.svg";
import Shirt from "@public/shirt.svg";
import Robot1 from "@public/robot1.webp";
import Robot2 from "@public/robot2.webp";
import Testimonial from '../../src/app/components/contact_us';
import LeftImageSection from ".././app/components/left_image";
import RightImageSection from ".././app/components/right_image";

export default function Home() {
  const cardsData = [
    {
      icon: Fire,
      title: 'Popular domain names',
      description: 'Take a look at the most popular domain names. And buy them immediately. Or make a good offer.',
    },
    {
      icon: Cards,
      title: '3-letter domain names',
      description: '3-letter domain names are short, sweet, and super easy to remember. Check ‘em all out here.',
    },
    {
      icon: Shirt,
      title: 'Premium domain names',
      description: 'Premium domain names are usually short, easy to brand, and use a popular extension like .com.',
    },
  ];

  return (
    <>
      <div className="relative w-full h-screen bg-[#e8f1fe] flex items-center justify-center">
        {/* Clouds Image */}
        <Image
          src={Clouds}
          alt="Clouds"
          className="absolute top-[-45%] left-0 w-full object-cover"
        />

        {/* Left and Right Images */}
        <div className="absolute top-[10%] left-0 w-[40%] md:w-[30%]">
          <Image
            src={LeftImage}
            alt="Left Image"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute top-[10%] right-0 w-[40%] md:w-[30%]">
          <Image
            src={RightImage}
            alt="Right Image"
            className="w-full h-auto"
          />
        </div>

        {/* Scene Images */}
        <div className="absolute bottom-0 left-0 w-[40%] md:w-[30%]">
          <Image
            src={LeftScene}
            alt="Left Scene"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[40%] md:w-[30%]">
          <Image
            src={RightScene}
            alt="Right Scene"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Claim your space<br /> in the digital world
          </h2>

          <div className="relative w-full mt-6 md:mt-8">
            <input
              type="search"
              className="border border-[#1972f5] rounded-[25px] py-4 px-8 w-full pr-12"
              placeholder="Search"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#1972f5] p-4 rounded-[20px]">
              <CiSearch />
            </span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col justify-center items-center mt-24  max-w-[95%] md:max-w-[85%]  border-2 border-white shadow-[0_0_0_1px_#eaecf5] bg-[#fcfcfd] mx-auto rounded-[25px] relative">
        <Image
          src={Robot1}
          alt="robot"
          className="max-w-[250px]  md:max-w-[400px] translate-y-[-30%]"

        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] md:max-w-[80%] mx-auto">
          {cardsData.map((card, index) => (
            <Custom_Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />

          ))}
          <Image
            src={Robot2}
            alt="robot"
            className="max-w-[250px]  md:max-w-[400px] translate-y-[30%]"


          />
        </div>
      </div>
      <LeftImageSection />
      <RightImageSection />

      <Testimonial />
    </>
  );
}
