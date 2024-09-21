import PropTypes from "prop-types";
import exampleImage1 from "/public/assets/cards-line-1.jpg";
import exampleImage2 from "/public/assets/cards-line-2.avif";
import exampleImage3 from "/public/assets/cards-line-3.avif";
import exampleImage4 from "/public/assets/cards-line-4.avif";
import exampleImage5 from "/public/assets/cards-line-5.jpg";
import exampleImage6 from "/public/assets/cards-line-6.avif";
import exampleImage7 from "/public/assets/cards-line-7.avif";
import exampleImage8 from "/public/assets/cards-line-8.jpg";
import exampleImage9 from "/public/assets/cards-line-9.jpg";

// Separate Card Component
const Card = ({ service, image, description }) => {
  return (
    <div
      className="bg-white outline-none border-none rounded-lg overflow-hidden transition-transform duration-300 
          hover:scale-90 pb-10"
    >
      <img
        className="w-full h-fit object-cover "
        src={image}
        alt={`${service} image`}
      />
      <div className="pt-10 px-5 text-center">
        <h3 className="text-2xl font-semibold mb-4">{service}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Prop Types Validation
Card.propTypes = {
  service: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Cards = () => {
  const cards = [
    {
      title: "Web Development",
      description:
        "Learn more about how our web design services can benefit your business.",
      image: exampleImage1,
    },
    {
      title: "Apps Development",
      description:
        "Explore our innovative app design services tailored for both mobile and desktop platforms.",
      image: exampleImage2,
    },
    {
      title: "Digital Business Cards",
      description:
        "Design sleek, modern digital business cards that leave a lasting impression.",
      image: exampleImage3,
    },
    {
      title: "Social Media Management",
      description:
        "Enhance your online presence with strategic social media campaigns.",
      image: exampleImage4,
    },

    {
      title: "E-Commerce Solutions",
      description:
        "Develop secure, scalable online stores to drive your business growth.",
      image: exampleImage5,
    },
    {
      title: "Stock/Inventory Management Systems",
      description:
        "Implement efficient systems to manage your stock and inventory seamlessly.",
      image: exampleImage6,
    },
    {
      title: "E-Learning Platforms",
      description:
        "Build interactive, user-friendly e-learning platforms for education and training.",
      image: exampleImage7,
    },
    {
      title: "Security Systems",
      description:
        "Provide advanced security solutions to protect your digital assets and data.",
      image: exampleImage8,
    },
    {
      title: "Graphic Design",
      description:
        "We create impactful visual content to communicate your brand effectively.",
      image: exampleImage9,
    },
  ];

  return (
    <section id="software" className="py-[10vh] px-[10%] bg-gray-800 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            service={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
