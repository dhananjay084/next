import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import Image from 'next/image';
import Logo from '@public/header_logo.svg';
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 text-gray-600 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Language Selector */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo"  />

            </div>
            
          </div>

          {/* Product Links */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h6 className="font-bold text-gray-700">Product</h6>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center">
                Testimonials <BsFillStarFill className="ml-1 text-yellow-500" /> 4.5
              </li>
              <li>Comparisons</li>
              <li>Alternatives</li>
              <li>Integrations</li>
              <li>Developer Hub</li>
              <li>Ask a demo</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h6 className="font-bold text-gray-700">Company</h6>
            <ul className="mt-2 space-y-1">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Brand Assets</li>
              <li>Partnerships</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h6 className="font-bold text-gray-700">Resources</h6>
            <ul className="mt-2 space-y-1">
              <li>Read our blog</li>
              <li>Help Center</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full sm:w-1/2 md:w-1/5">
            <h6 className="font-bold text-gray-700">Legal</h6>
            <ul className="mt-2 space-y-1">
              <li>Terms of use</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-xs text-gray-500">
          <div>© 2024 Dan.com</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaGithub />
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-1">
              <span className="text-green-500">●</span>
              <span>System status</span>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
