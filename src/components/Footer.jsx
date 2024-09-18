import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className=" flex items-center justify-between
       w-full py-5 px-[10%] bg-indigo-500
     text-white "
    >
      <p className=" font-medium">
        Copyright © 2024 by Zakir Mohammed | All Rights Reserved.
      </p>
      <ScrollLink
        to="updates"
        smooth={true}
        duration={500}
        className="
         bg-gray-600 p-3 rounded-full
          hover:bg-gray-500 transition duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white" />
      </ScrollLink>
    </footer>
  );
};

export default Footer;
