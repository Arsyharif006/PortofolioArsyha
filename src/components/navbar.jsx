
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  
  return (
    <>
      <nav className={`bg-gray-800 fixed top-0 w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <div className="flex-shrink-0 flex items-center ml-3">
              <h1 className="text-gray-300 font-semibold font-pins">Arsyha</h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                to="dashboard"
                smooth={true}
                duration={1000}
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Dashboard
              </Link>
                <Link
                to="skills"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Skills
              </Link>
                <Link
                to="experiences"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="certificates"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Certificates
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Contact
              </Link>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="sm:hidden">
              <button
                type="button"
                className="text-gray-400 hover:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`sm:hidden ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
                to="dashboard"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Dashboard
              </Link>
          <Link
                to="skills"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="experiences"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="certificates"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Certificates
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                Contact
              </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;