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
      <div className="relative w-full  bg-[#B9DEFF] flex items-center justify-center flex-col pt-[100px]">
        <Image
          src={Clouds}
          alt="Clouds"
          className="absolute top-[-45%] left-0 w-full object-cover animate-on-scroll"
        />

        <div className="absolute top-[10%] left-0 w-[40%] md:w-[30%] animate-on-scroll">
          <Image src={LeftImage} alt="Left Image" className="w-full h-auto" />
        </div>
        <div className="absolute top-[10%] right-0 w-[40%] md:w-[30%] animate-on-scroll">
          <Image src={RightImage} alt="Right Image" className="w-full h-auto" />
        </div>

        <div className="absolute bottom-0 left-0 w-[40%] md:w-[30%] animate-on-scroll z-50">
          <Image src={LeftScene} alt="Left Scene" className="w-full h-auto" />
        </div>
        <div className="absolute bottom-0 right-0 w-[40%] md:w-[30%] animate-on-scroll z-50">
          <Image src={RightScene} alt="Right Scene" className="w-full h-auto" />
        </div>

        <div className="z-10 text-center px-6 animate-on-scroll animate__zoomIn max-w-[40%]">
          <div className='mb-[20px] bg-[#1972f51a] border border-[#1972f5] rounded-[100px] max-w-fit flex justify-center items-center mx-auto py-[7px] px-[9px] text-[#1972f5] font-normal'>
            <span className='bg-[#1972f5] text-[#fff] rounded-[100px] px-[8px] mr-[4px]'>NEW</span>
            The new Crisp v4 is out!
            <MdKeyboardArrowRight />
          </div>
          <h2 className="text-4xl md:text-[48px] font-normal leading-[56px] text-black mb-[20px]">
            The future of customer support is here
          </h2>
          <p className='mb-[20px]'>The all-in-one AI-powered business messaging platform that gathers teams, conversations, data and knowledge, around one place.</p>
          {/* <div className="relative w-full mt-6 md:mt-8 animate-on-scroll animate__fadeInUp">
            <input
              type="search"
              className="border border-[#1972f5] rounded-[25px] py-4 px-8 w-full pr-12"
              placeholder="Search"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#1972f5] p-4 rounded-[20px]">
              <CiSearch />
            </span>
          </div> */}
          <span className='flex items-center gap-[5%] justify-center'>
            <button className='bg-custom-gradient border border-[#3d7fde] text-white py-[10px] px-[20px] rounded-[14px]'>Use Crisp for free</button>
            <button className='flex items-center bg-white border text-black py-[10px] px-[20px] rounded-[14px]'>
              <MdPlayCircleOutline />What is Crisp?
            </button>
          </span>
        </div>
        <div className='max-w-[60%] z-40 mx-auto  mt-[20px] border-[5px] border-grey rounded-[20px] relative'>
          <span className='bg-white text-black rounded-full p-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl border border-white'>< MdOutlinePlayArrow /></span>
          <Image src={Banner_Image} alt={''} className='rounded-[16px]' />
        </div>
      </div>
      <h2 className='text-center text-[46px] leading-[56px] max-w-[50%] mx-auto mt-[100px]'>Meet the workspace that delights your <span className='text-[#1972f5]'>teams</span> & <span className='text-[#1972f5]'>customers</span></h2>
      <div className=' mt-24 max-w-[95%] md:max-w-[85%] animate-on-scroll animate__fadeInUp mx-auto flex justify-between'>
        <div className='bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] max-w-[49%]'>
          <div className='p-4'><p className='flex text-[#1972f5] items-center gap-[10px] '><GoInbox /> Inbox</p>
            <p className='my-[20px] text-[20px]'>Centralize your inbound messages</p>
            <p className='text-[#5d6b98]'>Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.</p>
            <p className='flex text-[#1972f5] items-center gap-[10px] mt-[20px] '>Learn More<FaChevronRight /> </p></div>

          <Image src={Teams} alt='' />
        </div>
        <div className='bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] max-w-[49%] flex flex-col justify-between'>
          <div className='p-4'>
            <p className='flex text-[#1972f5] items-center gap-[10px] '><GoInbox /> Inbox</p>
            <p className='my-[20px] text-[20px]'>Centralize your inbound messages</p>
            <p className='text-[#5d6b98]'>Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.</p>
            <p className='flex text-[#1972f5] items-center gap-[10px] mt-[20px] '>Learn More<FaChevronRight /> </p>
          </div>
          <Image src={Customer} alt='' className='flex-end' />
        </div>
      </div>
      <div className='bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] max-w-[95%] md:max-w-[85%] mx-auto my-4 flex'>
          <div className='p-4'><p className='flex text-[#1972f5] items-center gap-[10px] '><GoInbox /> Inbox</p>
            <p className='my-[20px] text-[20px]'>Centralize your inbound messages</p>
            <p className='text-[#5d6b98]'>Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.</p>
            <p className='flex text-[#1972f5] items-center gap-[10px] mt-[20px] '>Learn More<FaChevronRight /> </p></div>

          <Image src={CustomerData} alt='' />
        </div>
        <div className=' max-w-[95%] md:max-w-[85%] animate-on-scroll animate__fadeInUp mx-auto flex justify-between'>
        <div className='bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5] max-w-[49%]'>
          <div className='p-4'><p className='flex text-[#1972f5] items-center gap-[10px] '><GoInbox /> Inbox</p>
            <p className='my-[20px] text-[20px]'>Centralize your inbound messages</p>
            <p className='text-[#5d6b98]'>Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.</p>
            <p className='flex text-[#1972f5] items-center gap-[10px] mt-[20px] '>Learn More<FaChevronRight /> </p></div>

          <Image src={Flow} alt='' />
        </div>
        <div className='max-w-[49%] flex flex-col justify-between'>
        <div className='bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5]  flex flex-col'>
          <div className='p-4'>
            <p className='flex text-[#1972f5] items-center gap-[10px] '><GoInbox /> Inbox</p>
            <p className='my-[20px] text-[20px]'>Centralize your inbound messages</p>
            <p className='text-[#5d6b98]'>Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.</p>
            <p className='flex text-[#1972f5] items-center gap-[10px] mt-[20px] '>Learn More<FaChevronRight /> </p>
          </div>
          <Image src={Chat} alt='' className='flex-end' />
        </div>
        <div className='bg-[#fcfcfd] rounded-[25px] border-2 border-white shadow-[0_0_0_1px_#eaecf5]  flex flex-col'>
          <div className='p-4'>
            <p className='flex text-[#1972f5] items-center gap-[10px] '><GoInbox /> Inbox</p>
            <p className='my-[20px] text-[20px]'>Centralize your inbound messages</p>
            <p className='text-[#5d6b98]'>Centralize all your inbound conversations from emails, website chat, WhatsApp, Messenger, phone, and more into one collaborative inbox. This allows multiple team members to access, manage, and respond to messages efficiently.</p>
            <p className='flex text-[#1972f5] items-center gap-[10px] mt-[20px] '>Learn More<FaChevronRight /> </p>
          </div>
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-40 max-w-[95%] md:max-w-[85%] border-2 border-white shadow-[0_0_0_1px_#eaecf5] bg-[#fcfcfd] mx-auto rounded-[25px] relative animate-on-scroll animate__fadeInUp p-16">
        <Image
          src={Robot1}
          alt="robot"
          className="max-w-[250px] md:max-w-[400px] absolute animate-on-scroll animate__bounceIn top-[-10%]"
        />
<h2 className='text-[40px] leading-[48px] max-w-[60%] max-auto text-center mb-8'>Built for customer support,<br/> marketing, and sales. <span className='text-[#1972f5]'>All together.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] md:max-w-[80%] mx-auto mb-8">
          {cardsData.map((card, index) => (
            <Custom_Card key={index} icon={card.icon} title={card.title} description={card.description} />
          ))}

        
        </div>
        <Image src={Banner_Image} alt={''} className='rounded-[16px]' />
  <Image
            src={Robot2}
            alt="robot"
            className="max-w-[250px] md:max-w-[400px] absolute animate-on-scroll animate__bounceIn bottom-[-5%] left-0"
          />
      </div>
      <h2 className='text-[#344055] text-[40px] leading-[48px] max-w-[50%] text-center mx-auto mt-32'>
      600,000 companies have <br/>already made the move
      </h2>
      <div className='bg-black text-white shadow-2xl py-[6px] px-[18px] rounded-[12px] border border-black max-w-fit mx-auto mt-8'>See their testimonials</div>

      {/* <LeftImageSection />
      <RightImageSection /> */}
      <Testimonial />
    </>
  );
}
