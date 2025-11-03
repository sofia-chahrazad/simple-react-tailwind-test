import { useState } from 'react';
//import Closel from '@/assets/icons/lock-close.svg?react';
import LogoIcon from '@/assets/icons/logo.svg?react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-7">
            <LogoIcon className="h-20 w-auto" />
        </div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="text-[#fdc808] hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-[#fdc808] hover:text-blue-600">About</a></li>
          <li><a href="#" className="text-[#fdc808] hover:text-blue-600">Services</a></li>
          <li><a href="#" className="text-[#fdc808] hover:text-blue-600">Contact</a></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <li><a href="#" className="block text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="block text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#" className="block text-gray-700 hover:text-blue-600">Services</a></li>
          <li><a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}