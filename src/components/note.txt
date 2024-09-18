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
    ariaLabel,
    url, // New prop for the URL
  }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel} // Accessibility improvement
      >
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
      </a>
    );
  };

  // Define PropTypes for the component
  SocialMediaButton.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    textColor: PropTypes.string,
    hoverColor: PropTypes.string,
    borderColor: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired, // Add ariaLabel as required
    url: PropTypes.string.isRequired, // URL is required now
  };

  // Define default props
  SocialMediaButton.defaultProps = {
    textColor: "text-blue-600",
    hoverColor: "bg-blue-600",
    borderColor: "border-blue-600",
  };

  return (
    <section id="contact">
      <div className="flex gap-5 mt-6 showRightWhite">
        <SocialMediaButton
          Icon={FaFacebook}
          ariaLabel="Facebook"
          url="https://www.facebook.com/theshroudedsoul/" // Facebook URL
        />
        <SocialMediaButton
          Icon={FaInstagram}
          hoverColor="bg-pink-600"
          borderColor="border-pink-600"
          textColor="text-pink-600"
          ariaLabel="Instagram"
          url="https://www.instagram.com/zakspacex/?hl=en" // Instagram URL
        />
        <SocialMediaButton
          Icon={FaLinkedinIn}
          ariaLabel="LinkedIn"
          url="https://www.linkedin.com/in/yourprofile/" // LinkedIn URL
        />
        <SocialMediaButton
          Icon={FaXTwitter}
          ariaLabel="X (formerly Twitter)"
          url="https://www.twitter.com/yourprofile/" // X (Twitter) URL
        />
      </div>
    </section>
  );
};

export default Contact;
