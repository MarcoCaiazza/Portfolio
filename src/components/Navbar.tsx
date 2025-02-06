import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funzione per alternare la visibilità del menu mobile
  const toggleMenu = () => {
    console.log("bottone premuto");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        className="bg-gray-800 sticky top-0 z-50 shadow-2xl h-[80px]"
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 100,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <div className="max-w-screen-lg mx-auto flex items-center justify-between pt-1.5 pr-1">
          {/* <!-- Logo a sinistra --> */}
          <div className="flex flex-start">
            {/* <a href="#">Logo</a> */}
            <img src="logoBianco.png" alt="logo" className="w-16 h-16 "/>
          </div>

          {/* <!-- Menu --> */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-white hover:text-gray-300 text-decoration"
            >
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="text-white hover:text-gray-300">
              Projects
            </a>
            <a href="#contacts" className="text-white hover:text-gray-300">
              Contacts
            </a>
          </div>

          {/* <!-- Bottone per mobile --> */}
          <div className="md:hidden">
            <button
              id="menu-button"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Menu Mobile --> */}
        <div
          id="menu-mobile"
          className={`absolute left-0 right-0 bg-gray-700 flex flex-col text-2xl transition-all duration-500 ease-in-out transform overflow-hidden z-40 ${
            isMenuOpen ? "scale-y-100 opacity-100 " : "scale-y-0 opacity-0"
          } top-[64px]`}
          style={{ transformOrigin: "top" }}
        >
          <div className="border-b-2 border-gray-500  w-full box-border flex justify-center p-3">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </div>
          <div className="border-b-2 border-gray-500 w-full box-border flex justify-center p-3">
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </div>
          <div className="border-b-2 border-gray-500 w-full box-border flex justify-center p-3">
            <a href="#" className="text-white hover:text-gray-300">
              Projects
            </a>
          </div>
          <div className="border-b-2 border-gray-500 w-full box-border flex justify-center p-3">
            <a href="#" className="text-white hover:text-gray-300">
              Contacts
            </a>
          </div>
          <div className="border-b-2 border-gray-500 w-full box-border flex justify-center p-3">
            <a href="#" className="text-white hover:text-gray-300">
              Logo linkedin github
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
