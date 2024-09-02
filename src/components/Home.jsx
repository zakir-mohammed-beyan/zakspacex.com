import PropTypes from "prop-types";
import Header from "../Header";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
    <section className="bg-transparent h-[100vh] w-full flex flex-col">
      <Header />
      <div className="pt-[20vh] flex px-6 md:px-28 xl:px-[10%]">
        <div className="flex flex-col w-full h-full md:w-[68%]">
          <h1 className="showRightWhite flex font-extrabold uppercase text-6xl">
            Code the Future, <br /> Build the World.
          </h1>

          <h1 className="mt-10 flex items-center text-xl showRightWhite">
            Welcome to
            <span className="text-2xl font-bold ml-1"> Zakspacex</span>
            <BsFillPatchCheckFill className=" ml-3 text-blue-600" />
          </h1>

          <p className="showRightWhite mt-3">
            Hi, {`I'm`}Zakir Mohammed, a dynamic computer engineer with a
            diverse skill set in full-stack development, mobile app creation,
            graphic design, video editing, and digital marketing. Passionate
            about merging technology with creativity, <br /> I craft innovative
            solutions that go beyond expectations. From ideation to execution, I
            am dedicated to delivering high-quality results that drive success
            and create lasting impact.
          </p>
          <div className="flex flex-col md:items-start items-center justify-center">
            <button
              className="showRightWhite relative group mt-10 bg-transparent shadow-md px-5 py-4 
            whitespace-nowrap flex items-center justify-center space-x-2"
            >
              <span className="text-lg ">Get in touch with us.</span>
              <img
                src="/public/assets/Getintouch.png"
                alt="Get in touch"
                className="w-6 rounded-full"
              />
              <span className="absolute h-full w-full left-0 top-0 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>

            <div className="mt-12 flex gap-5 showRightWhite">
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
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
