import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Hamburger icon
import { IoCloseSharp } from "react-icons/io5"; // Close icon
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = ["Home", "Mission", "Vision", "Service", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <li key={item} className="relative group">
        <Link
          to={`/${item.toLowerCase()}`} // Dynamic link to pages
          className={`text-lg transition-colors duration-300 ${
            item === "Home" ? "text-indigo" : ""
          } hover:text-gray-400`}
        >
          {item}
        </Link>
        <span className="absolute bg-indigo h-0.5 w-0 left-1/2 bottom-0 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
      </li>
    ));
  };

  return (
    <header
      className=" bg-white shadow-sm fixed w-full h-[10vh] top-0 left-0 flex items-center 
    justify-between px-6 lg:px-28 xl:px-[10%] py-8 z-50"
    >
      <span className=" showRightWhite">
        <img
          className="w-36"
          src="/public/assets/Explore-It-banner-art.png"
          alt="Explore-it"
        />
      </span>

      <div className=" flex gap-20">
        <ul className="hidden gap-8 md:flex md:flex-row md:items-center showRightWhite ">
          {renderMenuItems()}
        </ul>
        <span className=" showRightWhite">
        <button className=" overflow-hidden px-3 py-2 sm:px-5 sm:py-3 bg-blue-500 text-white border-none outline-none rounded-full">
          Try it now
        </button>
        </span>
       
      </div>

      {/* Mobile Menu Icon */}
      <div
        onClick={toggleMenu}
        className="z-50 text-3xl cursor-pointer md:hidden"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <IoCloseSharp /> : <AiOutlineMenu />}
      </div>

      {/* Mobile Menu - Smooth Transition */}
      <div
        className={`fixed z-50 top-[10vh] left-0 w-full h-full bg-yellowgreen flex flex-col items-center justify-start pt-[15vh]
           transform transition-transform duration-300 ease-in-out ${
             isMenuOpen ? "translate-x-0" : "-translate-x-full"
           } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 text-lg ">
          {renderMenuItems()}
        </ul>
        <span className="mt-4">
        <button className=" overflow-hidden px-5 py-3 font-medium bg-white text-yellowgreen outline-none border-none rounded-full">
          GET IN TOUCH
        </button>
        </span>
        
      </div>
    </header>
  );
};

export default Header;

