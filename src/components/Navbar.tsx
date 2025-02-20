import { useState } from "react";
import { motion } from "framer-motion";
import { a } from "motion/react-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");

  // Funzione per alternare la visibilità del menu mobile
  const toggleMenu = (): void => {
    console.log("bottone premuto");
    setIsMenuOpen(!isMenuOpen);
  };

  interface Link {
    href: string;
    label: string;
  }

  const links: Link[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Progetti" },
    { href: "#contacts", label: "Contatti" },
  ];


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
        <div className="max-w-screen-lg mx-auto flex items-center justify-between pr-1 pt-2 ">
          {/* <!-- Logo a sinistra --> */}
          <div className="flex flex-start pl-2 md:pl-0">
            {/* <a href="#">Logo</a> */}
            <img src="logoBianco.png" alt="logo" className="w-16 h-16" />
          </div>

          {/* <!-- Menu --> */}
          <div className="hidden md:flex space-x-6">
            {links.map((link: Link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-white hover:text-gray-300 focus:outline-none relative ${
                  activeLink === link.href
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-100"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
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
          } top-[79px]`}
          style={{ transformOrigin: "top" }}
        >
          {links.map((links:Link) => (
            <div key={links.href} className="border-b-2 border-gray-500 w-full box-border flex justify-center p-3">
              <a
                href={links.href}
                className="text-white hover:text-gray-300 text-lg"
              onClick={toggleMenu}

              >
                {links.label}
              </a>
            </div>
          ))}

          <div className="border-b-2 border-gray-500 w-full box-border flex justify-center p-2">
            <a href="https://github.com/MarcoCaiazza" target="blank">
              <img
                src="githubWhite.png"
                alt="icons-github"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/marco-caiazza-8898a3266/"
              target="blank"
            >
              <img
                src="linkedinWhite.png"
                alt="icons-linkedin"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
