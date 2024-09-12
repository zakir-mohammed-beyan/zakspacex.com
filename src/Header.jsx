import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Mission", to: "mission" },
    { name: "Vision", to: "vision" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <li key={item.name} className="relative group">
        <ScrollLink
          className="text-[17px] transition-colors duration-300 hover:text-gray-400 cursor-pointer"
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="text-indigo-600"
        >
          {item.name}
        </ScrollLink>
        <span className="absolute bg-indigo-600 h-0.5 w-0 left-1/2 bottom-0 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
      </li>
    ));

  // Define PropTypes for the component

  return (
    <header className="bg-white fixed w-full top-0 left-0 z-50 shadow-sm">
      <nav className="h-[10vh] flex items-center justify-between px-6 lg:px-28 xl:px-[10%]">
        <h1 className="flex items-center justify-center text-lg font-extrabold showRightWhite gap-3">
          ZakTechies
          <div className="flex gap-3 text-lg">
            <FaFacebook className=" cursor-pointer" />
            <AiFillInstagram className=" cursor-pointer" />
            <FaLinkedinIn className=" cursor-pointer" />
          </div>
        </h1>
        {/*
          <div className="showRightWhite">
          <img
            className="w-32"
            src="/public/assets/ZakTechies.png"
            alt="ZakTechies Logo"
          />
        </div>
        */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center showRightWhite">
          {renderMenuItems()}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="z-50 text-3xl md:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <IoCloseSharp /> : <AiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed z-40 top-0 left-0 w-full h-full bg-yellowgreen transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8">
              {renderMenuItems()}
            </ul>
            <button className="mt-8 px-6 py-3 bg-white text-yellowgreen font-semibold rounded-full shadow-lg">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
