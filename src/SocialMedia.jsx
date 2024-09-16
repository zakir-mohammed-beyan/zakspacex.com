import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import PropTypes from "prop-types";

const Tempo = () => {
  const socialIcons = [
    {
      Icon: ImInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/zakspacex/?hl=en",
      className: "text-pink-500",
    },
    {
      Icon: FaFacebookSquare,
      label: "Facebook",
      url: "https://www.facebook.com/theshroudedsoul/",
    },
    {
      Icon: FaSquareXTwitter,
      label: "Twitter",
      url: "https://www.twitter.com",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com",
    },
  ];

  return (
    <section>
      <div className="flex gap-4 text-xl items-center">
        {socialIcons.map(
          (
            { Icon, label, url, className = "text-blue-700 text-[23px]" },
            index
          ) => (
            <SocialIcon
              key={index}
              Icon={Icon}
              label={label}
              url={url}
              className={className}
            />
          )
        )}
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon, label, url, className }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group cursor-pointer relative"
  >
    <Icon
      className={`transition-transform transform group-hover:-translate-y-2 ${className}`}
    />
    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-[-20px] text-sm">
      {label}
    </span>
  </a>
);

SocialIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Tempo;
