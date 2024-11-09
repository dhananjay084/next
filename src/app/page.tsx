'use client';
import { useEffect } from 'react';
import Clouds from "@public/clouds.svg";
import LeftImage from "@public/land_left.svg";
import RightImage from "@public/land_right.svg";
import Image from 'next/image';
import LeftScene from "@public/scene_left.png";
import RightScene from "@public/scene_right.png";
// import { CiSearch } from "react-icons/ci";
import Custom_Card from "../app/components/Card";
import Fire from "@public/fire.svg";
import Cards from "@public/cards.svg";
import Shirt from "@public/shirt.svg";
import Robot1 from "@public/robot1.webp";
import Robot2 from "@public/robot2.webp";
import Testimonial from '../../src/app/components/contact_us';
// import LeftImageSection from "../app/components/left_image";
import { MdKeyboardArrowRight } from "react-icons/md";
// import RightImageSection from "../app/components/right_image";
import { MdPlayCircleOutline } from "react-icons/md";
import Banner_Image from '@public/banner_image.webp'
import { MdOutlinePlayArrow } from "react-icons/md";
import { GoInbox } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import Teams from "@public/teams.png";
import Customer from '@public/customers.png';
import CustomerData from '@public/customer_data.png';
import Flow from '@public/flow.png';
import Chat from "@public/chat.png"
import 'animate.css';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInDown'); // Trigger fade-in animation
        }
      });
    }, { threshold: 0.1 });

    // Observing all animate-on-scroll elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el)); // Cleanup observer on unmount
    };
  }, []);


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
      <div className="relative w-full bg-[#B9DEFF] flex items-center justify-center flex-col pt-[100px]">
  <Image
    src={Clouds}
    alt="Clouds"
    className="absolute top-[-45%] left-0 w-full object-cover animate-on-scroll"
  />

  {/* Left and Right Images on Top */}
  <div className="absolute top-[10%] left-0 w-[40%] md:w-[30%] animate-on-scroll hidden sm:block">
    <Image src={LeftImage} alt="Left Image" className="w-full h-auto" />
  </div>
  <div className="absolute top-[10%] right-0 w-[40%] md:w-[30%] animate-on-scroll hidden sm:block">
    <Image src={RightImage} alt="Right Image" className="w-full h-auto" />
  </div>

  {/* Left and Right Scenes on Bottom */}
  <div className="absolute bottom-0 left-0 w-[40%] md:w-[30%] animate-on-scroll z-50 hidden sm:block">
    <Image src={LeftScene} alt="Left Scene" className="w-full h-auto" />
  </div>
  <div className="absolute bottom-0 right-0 w-[40%] md:w-[30%] animate-on-scroll z-50 hidden sm:block">
    <Image src={RightScene} alt="Right Scene" className="w-full h-auto" />
  </div>

  {/* Main Content */}
  <div className="z-10 text-center px-4 sm:px-6 animate-on-scroll animate__zoomIn max-w-full sm:max-w-[60%] lg:max-w-[40%]">
    {/* New Crisp v4 Notification */}
    <div className='mb-[10px] sm:mb-[20px] bg-[#1972f51a] border border-[#1972f5] rounded-full max-w-fit flex justify-center items-center mx-auto py-[5px] sm:py-[7px] px-[7px] sm:px-[9px] text-[#1972f5] font-normal text-sm sm:text-base'>
      <span className='bg-[#1972f5] text-white rounded-full px-[6px] sm:px-[8px] mr-[2px] sm:mr-[4px] text-xs sm:text-sm'>NEW</span>
      The new Crisp v4 is out!
      <MdKeyboardArrowRight />
    </div>

    {/* Main Heading */}
    <h2 className="text-2xl sm:text-4xl md:text-[48px] font-normal leading-[32px] sm:leading-[56px] text-black mb-[10px] sm:mb-[20px]">
      The future of customer support is here
    </h2>

    {/* Description Text */}
    <p className="text-sm sm:text-base mb-[15px] sm:mb-[20px]">
      The all-in-one AI-powered business messaging platform that gathers teams, conversations, data, and knowledge in one place.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[5%] justify-center">
      <button className="bg-custom-gradient border border-[#3d7fde] text-white py-[8px] sm:py-[10px] px-[16px] sm:px-[20px] rounded-[10px] sm:rounded-[14px] text-sm sm:text-base">
        Use Crisp for free
      </button>
      <button className="flex items-center bg-white border text-black py-[8px] sm:py-[10px] px-[16px] sm:px-[20px] rounded-[10px] sm:rounded-[14px] text-sm sm:text-base">
        <MdPlayCircleOutline className="mr-1" /> What is Crisp?
      </button>
    </div>
  </div>

  {/* Banner Image with Play Button */}
  <div className="w-full sm:max-w-[60%] z-40 mx-auto mt-[15px] sm:mt-[20px] border-[3px] sm:border-[5px] border-grey rounded-[10px] sm:rounded-[20px] relative">
    <span className="bg-white text-black rounded-full p-3 sm:p-6 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] shadow-2xl border border-white">
      <MdOutlinePlayArrow />
    </span>
    <Image src={Banner_Image} alt="" className="rounded-[8px] sm:rounded-[16px]" />
  </div>
</div>

<h2 className="text-center text-3xl sm:text-[46px] leading-8 sm:leading-[56px] max-w-[90%] sm:max-w-[50%] mx-auto mt-[50px] sm:mt-[100px]">
  Meet the workspace that delights your <span className="text-[#1972f5]">teams</span> & <span className="text-[#1972f5]">customers</span>
</h2>

<div className="mt-12 sm:mt-24 max-w-[95%] md:max-w-[85%] animate-on-scroll animate__fadeInUp mx-auto flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between">
  {/* Left Card */}
  <div className="bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] w-full sm:max-w-[49%]">
    <div className="p-4">
      <p className="flex text-[#1972f5] items-center gap-[10px]">
        <GoInbox /> Inbox
      </p>
      <p className="my-[10px] sm:my-[20px] text-lg sm:text-[20px]">
        Centralize your inbound messages
      </p>
      <p className="text-[#5d6b98] text-sm sm:text-base">
        Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.
      </p>
      <p className="flex text-[#1972f5] items-center gap-[10px] mt-[10px] sm:mt-[20px]">
        Learn More <FaChevronRight />
      </p>
    </div>
    <Image src={Teams} alt="Teams" className="w-full rounded-b-[25px]" />
  </div>

  {/* Right Card */}
  <div className="bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] w-full sm:max-w-[49%] flex flex-col justify-between">
    <div className="p-4">
      <p className="flex text-[#1972f5] items-center gap-[10px]">
        <GoInbox /> Inbox
      </p>
      <p className="my-[10px] sm:my-[20px] text-lg sm:text-[20px]">
        Centralize your inbound messages
      </p>
      <p className="text-[#5d6b98] text-sm sm:text-base">
        Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.
      </p>
      <p className="flex text-[#1972f5] items-center gap-[10px] mt-[10px] sm:mt-[20px]">
        Learn More <FaChevronRight />
      </p>
    </div>
    <Image src={Customer} alt="Customer" className="w-full rounded-b-[25px]" />
  </div>
</div>

<div className="bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] max-w-[95%] md:max-w-[85%] mx-auto my-4 flex flex-col sm:flex-row">
  <div className="p-4 flex-1">
    <p className="flex text-[#1972f5] items-center gap-[10px]">
      <GoInbox /> Inbox
    </p>
    <p className="my-[10px] sm:my-[20px] text-lg sm:text-[20px]">
      Centralize your inbound messages
    </p>
    <p className="text-[#5d6b98] text-sm sm:text-base">
      Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.
    </p>
    <p className="flex text-[#1972f5] items-center gap-[10px] mt-[10px] sm:mt-[20px]">
      Learn More <FaChevronRight />
    </p>
  </div>
  
  <Image src={CustomerData} alt="Customer Data" className="w-full sm:w-[50%] rounded-b-[25px] sm:rounded-none sm:rounded-r-[25px]" />
</div>

<div className="max-w-[95%] md:max-w-[85%] animate-on-scroll animate__fadeInUp mx-auto flex flex-col md:flex-row justify-between">
  {/* First Section */}
  <div className="bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] w-full md:max-w-[49%] mb-4 md:mb-0">
    <div className="p-4">
      <p className="flex text-[#1972f5] items-center gap-[10px]">
        <GoInbox /> Inbox
      </p>
      <p className="my-[20px] text-lg md:text-[20px]">Centralize your inbound messages</p>
      <p className="text-[#5d6b98] text-sm md:text-base">
        Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.
      </p>
      <p className="flex text-[#1972f5] items-center gap-[10px] mt-[20px]">
        Learn More <FaChevronRight />
      </p>
    </div>
    <Image src={Flow} alt="" className="w-full rounded-b-[25px] md:rounded-none md:rounded-r-[25px]" />
  </div>

  {/* Second Section with Two Inner Boxes */}
  <div className="w-full md:max-w-[49%] flex flex-col gap-4">
    {/* Inner Box 1 */}
    <div className="bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] flex flex-col">
      <div className="p-4">
        <p className="flex text-[#1972f5] items-center gap-[10px]">
          <GoInbox /> Inbox
        </p>
        <p className="my-[20px] text-lg md:text-[20px]">Centralize your inbound messages</p>
        <p className="text-[#5d6b98] text-sm md:text-base">
          Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.
        </p>
        <p className="flex text-[#1972f5] items-center gap-[10px] mt-[20px]">
          Learn More <FaChevronRight />
        </p>
      </div>
      <Image src={Chat} alt="" className="w-full rounded-b-[25px] md:rounded-none md:rounded-r-[25px]" />
    </div>

    {/* Inner Box 2 */}
    <div className="bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] flex flex-col">
      <div className="p-4">
        <p className="flex text-[#1972f5] items-center gap-[10px]">
          <GoInbox /> Inbox
        </p>
        <p className="my-[20px] text-lg md:text-[20px]">Centralize your inbound messages</p>
        <p className="text-[#5d6b98] text-sm md:text-base">
          Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.
        </p>
        <p className="flex text-[#1972f5] items-center gap-[10px] mt-[20px]">
          Learn More <FaChevronRight />
        </p>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col justify-center items-center mt-20 md:mt-40 max-w-[95%] md:max-w-[85%] border-2 border-white shadow-[0_0_0_1px_#eaecf5] bg-[#fcfcfd] mx-auto rounded-[25px] relative animate-on-scroll animate__fadeInUp p-8 md:p-16">
  {/* Top Robot Image */}
  <Image
    src={Robot1}
    alt="robot"
    className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[400px] absolute animate-on-scroll animate__bounceIn top-[-10%]"
  />

  {/* Heading */}
  <h2 className="text-[24px] sm:text-[32px] md:text-[40px] leading-[30px] sm:leading-[40px] md:leading-[48px] max-w-[90%] md:max-w-[60%] mx-auto text-center mb-6 md:mb-8">
    Built for customer support,<br className="hidden md:block" /> marketing, and sales. <span className="text-[#1972f5]">All together.</span>
  </h2>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[90%] md:max-w-[80%] mx-auto mb-6 md:mb-8">
    {cardsData.map((card, index) => (
      <Custom_Card key={index} icon={card.icon} title={card.title} description={card.description} />
    ))}
  </div>

  {/* Bottom Banner Image */}
  <Image src={Banner_Image} alt="" className="rounded-[16px] w-full mb-4 md:mb-0" />

  {/* Bottom Robot Image */}
  <Image
    src={Robot2}
    alt="robot"
    className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[400px] absolute animate-on-scroll animate__bounceIn bottom-[-5%] left-0"
  />
</div>

<h2 className="text-[#344055] text-[24px] sm:text-[32px] md:text-[40px] leading-[32px] sm:leading-[40px] md:leading-[48px] max-w-[90%] md:max-w-[50%] text-center mx-auto mt-16 md:mt-32">
  600,000 companies have <br className="hidden md:block" /> already made the move
</h2>

<div className="bg-black text-white shadow-2xl py-2 px-4 sm:py-[6px] sm:px-[18px] rounded-[12px] border border-black max-w-fit mx-auto mt-4 sm:mt-8 text-center">
  See their testimonials
</div>


      {/* <LeftImageSection />
      <RightImageSection /> */}
      <Testimonial />
    </>
  );
}
