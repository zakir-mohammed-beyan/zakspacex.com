import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { Link as ScrollLink } from "react-scroll";
import PropTypes from "prop-types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Techies", to: "home" },
    { name: "Mission", to: "mission" },
    { name: "Vision", to: "vision" },
    { name: "Updates", to: "updates" },
    { name: "Software", to: "software" },
    { name: "Contact", to: "contact" },
  ];

  const socialIcons = [
    { Icon: ImInstagram, label: "Instagram", className: "text-pink-500" },
    { Icon: FaFacebookSquare, label: "Facebook" },
    { Icon: FaSquareXTwitter, label: "Twitter" },
    { Icon: FaLinkedin, label: "LinkedIn" },
  ];

  return (
    <header className="bg-white fixed w-full top-0 left-0 z-50 shadow-sm">
      <nav className="h-[10vh] flex items-center justify-between px-6 lg:px-28 xl:px-[10%] showRightWhite">
        <h1 className="text-lg font-extrabold showRightWhite">ZakTechies</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 showRightWhite">
          {menuItems.map((item) => (
            <MenuItem key={item.name} name={item.name} to={item.to} />
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-3 text-xl items-center">
          {socialIcons.map(
            (
              { Icon, label, className = "text-blue-700 text-[23px]" },
              index
            ) => (
              <SocialIcon
                key={index}
                Icon={Icon}
                label={label}
                className={className}
              />
            )
          )}
        </div>

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
          className={`fixed z-40 top-[10vh] left-0 w-full h-full bg-gray-100
            transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8">
              {menuItems.map((item) => (
                <MenuItem key={item.name} name={item.name} to={item.to} />
              ))}
            </ul>
            <button className="group px-5 py-2 rounded-full bg-lime-400 mt-3">
              Try4free
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// MenuItem Component
const MenuItem = ({ name, to }) => (
  <li className="relative group">
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="uppercase font-medium transition-colors duration-300 hover:text-gray-400 cursor-pointer"
      activeClass=" text-indigo-500 "
    >
      {name}
    </ScrollLink>
    <span className="absolute bg-indigo-500 h-0.5 w-0 left-1/2 bottom-0 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
  </li>
);

// SocialIcon Component
const SocialIcon = ({ Icon, label, className }) => (
  <div className="group cursor-pointer relative">
    <Icon
      className={`transition-transform transform group-hover:-translate-y-2 ${className}`}
    />
    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-[-20px] text-sm">
      {label}
    </span>
  </div>
);

// Add PropTypes validation for MenuItem
MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

// Add PropTypes validation for SocialIcon
SocialIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired, // Icon should be a React component
  label: PropTypes.string.isRequired, // Label is a string
  className: PropTypes.string, // ClassName is optional
};

export default Header;
