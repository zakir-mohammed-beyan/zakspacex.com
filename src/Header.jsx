import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const changeNavbarBgOnScroll = () => {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      if (scrollY > 100) {
        setNavbarBg("bg-[#EDDEDE]");
      } else {
        setNavbarBg("bg-[#E5E7EB]");
      }
    } else {
      if (scrollY > 100) {
        setNavbarBg("bg-[#EDDEDE] shadow-md");
      } else {
        setNavbarBg("bg-transparent");
      }
    }
  };

  useEffect(() => {
    // Set the initial background color based on the device type
    if (window.innerWidth < 768) {
      setNavbarBg("bg-[#E5E7EB]");
    } else {
      setNavbarBg("bg-transparent");
    }

    window.addEventListener("scroll", changeNavbarBgOnScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", changeNavbarBgOnScroll);
  }, []);

  const menuItems = [
    { name: "Techies", to: "home" },
    { name: "Mission", to: "mission" },
    { name: "Vision", to: "vision" },
    { name: "Updates", to: "updates" },
    { name: "Software", to: "software" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`${navbarBg} transition-colors duration-300 fixed w-full top-0 left-0 z-50`}
    >
      <nav className="h-[10vh] flex items-center justify-between px-[10%]">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="text-lg font-extrabold cursor-pointer">ZakTechies</h1>
        </ScrollLink>

        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.name} name={item.name} to={item.to} />
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="z-50 text-3xl md:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <IoCloseSharp /> : <AiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed z-40 top-[10vh] left-0 w-full h-full
            bg-gray-100 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8 ">
              {menuItems.map((item) => (
                <MenuItem key={item.name} name={item.name} to={item.to} />
              ))}
            </ul>
            <button className="group px-5 py-2 rounded-full bg-lime-400 mt-3 uppercase font-medium">
              Try4free
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

const MenuItem = ({ name, to }) => (
  <li className="relative group">
    <ScrollLink
      className="uppercase font-medium transition-colors
       duration-300 hover:text-gray-400 text-gray-800
        cursor-pointer md:text-[14px] xl:text-base tracking-wide"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="text-indigo-600"
    >
      {name}
    </ScrollLink>
    <span className="absolute bg-indigo-500 h-0.5 w-0 left-1/2 bottom-0 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
  </li>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Header;
