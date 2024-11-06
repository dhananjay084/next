"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@public/header_logo.svg';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons for hamburger and close button

const Header = () => {
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg('bg-white shadow-lg');
            } else {
                setNavbarBg('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
            <nav className="container mx-auto flex items-center justify-between p-4 md:px-8">
                <div className="flex items-center gap-[5%]">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <Image src={Logo} alt="Logo" />
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/features" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Buy a domain</Link>
                        <Link href="/apps" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Sell your domain</Link>
                        <Link href="/pricing" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Learn</Link>
                        <Link href="/integrations" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Company</Link>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-[12px] hover:bg-blue-700">Login</button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4">
                    <div className="flex flex-col space-y-4">
                        <Link href="/features" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Buy a domain</Link>
                        <Link href="/apps" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Sell your domain</Link>
                        <Link href="/pricing" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Learn</Link>
                        <Link href="/integrations" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Company</Link>
                        <button 
                            className="bg-blue-600 text-white px-4 py-2 rounded-[12px] hover:bg-blue-700" 
                            onClick={() => setMenuOpen(false)}
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
