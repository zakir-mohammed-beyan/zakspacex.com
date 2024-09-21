import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-tranparent");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const changeNavbarBgOnScroll = () => {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setNavbarBg(scrollY > 100 ? "bg-yellow-300 shadow-md" : "bg-amber-400");
    } else {
      setNavbarBg(
        scrollY > 100 ? " bg-yellow-300 shadow-md" : "bg-transparent"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBgOnScroll);
    return () => window.removeEventListener("scroll", changeNavbarBgOnScroll);
  }, []);

  const menuItems = [
    { name: "Updates", to: "updates" },
    { name: "Mission", to: "mission" },
    { name: "Vision", to: "vision" },
    { name: "Explore", to: "explore" },
    { name: "Software", to: "software" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`${navbarBg} transition-colors duration-300 fixed w-full top-0 left-0 z-50 `}
    >
      <nav className="h-[12vh] flex items-center justify-between px-[10%]">
        <ScrollLink
          to="updates"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <div>
            <img
              className=" w-1/2"
              src="/public//assets/DXC Logo Horiz_Purple+Black RGB.png"
              alt=""
            />
          </div>
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 relative">
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
          className={`fixed -z-50 top-[10vh] left-0 w-full h-fit px-[10%] py-[10vh] text-start bg-lime-400 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-start justify-start">
            <ul className="flex flex-col items-start gap-5">
              {menuItems.map((item) => (
                <MenuItem key={item.name} name={item.name} to={item.to} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const MenuItem = ({ name, to }) => (
  <li className="relative group">
    <ScrollLink
      className="uppercase font-medium transition-colors duration-300
       hover:text-gray-400 cursor-pointer 
       tracking-wide"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="text-indigo-600"
    >
      {name}
    </ScrollLink>
    <span className="absolute bg-indigo-500 h-0.5 w-0 left-1/2 bottom-[-5px] transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
  </li>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Header;
