const Mission = () => {
  return (
    <section
      id="mission"
      className="flex flex-col md:flex-row 
      w-full 
      h-fit py-[10vh] px-[10%] md:gap-x-20 bg-amber-400"
    >
      <h1
        className="md:hidden uppercase
       text-center text-4xl font-extrabold
       tracking-wide text-gray-800"
      >
        Our Mission
      </h1>
      <div className="w-full md:w-[35%] mt-10 md:mt-0">
        <img
          src="/public/assets/Mission-image.png"
          alt="mission image"
          className="w-full h-auto rounded-lg shadow-lg
          transition-transform duration-300 
          hover:scale-110"
        />
      </div>

      <div className="flex flex-col items-center w-full md:w-[65%]">
        <h1
          className=" hidden md:block uppercase 
        text-center text-4xl font-extrabold
        tracking-wide text-gray-800"
        >
          Our Mission
        </h1>
        <div className="mt-10">
          <p className="text-sm md:text-base leading-relaxed">
            At ZakTechies, our mission is to empower businesses with
            cutting-edge digital solutions. We strive to create innovative web
            designs, mobile applications, and graphic content that enhance user
            experiences. Our goal is to help clients grow through strategic
            social media management, high-quality photography, and e-commerce
            solutions. We focus on delivering efficient stock management systems
            and interactive e-learning platforms. Protecting our clients’
            digital assets is at the core of our services, as we provide
            advanced security systems. Our mission is to turn ideas into reality
            with exceptional service and value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
