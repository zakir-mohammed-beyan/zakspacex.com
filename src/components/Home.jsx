import PropTypes from "prop-types";
import Header from "../Header";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { BsFillSendCheckFill } from "react-icons/bs";

// Reusable Social Media Button component
const SocialMediaButton = ({
  Icon,
  textColor = "text-blue-600",
  hoverColor = "bg-blue-600",
  borderColor = "border-blue-600",
}) => {
  return (
    <span
      className={`flex relative group items-center 
        justify-center bg-transparent overflow-hidden
      border rounded-full shadow ${borderColor}
       w-11 h-11 cursor-pointer hover:text-white ${textColor}`}
    >
      <Icon className="relative z-10 text-xl" />
      <span
        className={`${hoverColor} absolute h-full w-full left-0 top-0 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100`}
      ></span>
    </span>
  );
};

// Define PropTypes for the component
SocialMediaButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
  borderColor: PropTypes.string,
};

const Home = () => {
  return (
    <section id="home" className="h-[100vh] w-full flex flex-col">
      <Header />
      <span className="absolute top-0 right-0 h-full w-fit -z-50 hidden md:block">
        <img
          className="w-full h-full object-cover bg-center showRightWhite"
          src="/public/assets/futuristic-high-tech-virtual.png"
          alt=""
        />
      </span>
      <div className=" pt-[15vh] md:pt-[20vh] flex px-6 md:px-28 xl:px-[10%] h-full w-full">
        <div className="flex flex-col w-full h-full md:w-[68%]">
          <span className=" flex flex-col uppercase showRightWhite font-extrabold">
            <h1 className=" first-letter:text-5xl md:first-letter:text-8xl text-3xl md:text-5xl">
              code the future,
            </h1>
            <h1 className=" ml-[14%] md:ml-[8.2%] text-[26px] md:text-[43px] ">
              build the world.
            </h1>
          </span>

          <h1 className="mt-10 flex items-center sm:text-xl showRightWhite">
            Welcome to
            <span className=" text-xl sm:text-2xl font-bold ml-1">
              Zakspacex
            </span>
            <BsFillPatchCheckFill className=" ml-3 text-blue-600" />
          </h1>

          <p className="showRightWhite mt-3">
            At Zakspacex, we lead the way in privacy, technology, and promotion.
            Our mission is to empower businesses and individuals to thrive
            securely in the digital age. With cutting-edge privacy devices,
            innovative software solutions, and advanced SaaS products, we
            simplify the complex and drive technology forward. At Zakspacex,
            innovation meets impact, creating a future where privacy,
            technology, and promotion unlock new possibilities.
          </p>
          <div className="flex flex-col md:flex-row gap-10 md:gap-[15%] md:items-start items-center md:mt-10 mt-5">
            <span className="flex flex-col gap-10">
              <button className="group relative bg-transparent overflow-hidden shadow-md px-5 py-4 space-x-2 whitespace-nowrap">
                <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-in-out bg-lime-400 group-hover:w-full"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get in touch with us.
                  <BsFillSendCheckFill className=" text-xl" />
                </span>
              </button>
              <div className="flex gap-5 showRightWhite">
                <SocialMediaButton Icon={FaFacebook} />
                <SocialMediaButton
                  Icon={FaInstagram}
                  hoverColor="bg-pink-600"
                  borderColor="border-pink-600"
                  textColor="text-pink-600"
                />
                <SocialMediaButton Icon={FaLinkedinIn} />
                <SocialMediaButton Icon={FaXTwitter} />
              </div>
            </span>

            <button className="group relative shadow-md px-5 py-4 space-x-2 whitespace-nowrap">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out bg-lime-400 group-hover:w-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2 ">
                Explore more.
                <HiExternalLink className=" text-lg" />
              </span>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
