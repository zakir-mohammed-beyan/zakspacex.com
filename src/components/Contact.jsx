import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
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

  return (
    <div>
      <div className="flex gap-5 mt-6 showRightWhite">
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
  );
};

export default Contact;
