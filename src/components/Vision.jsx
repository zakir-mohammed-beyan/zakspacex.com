const Vision = () => {
  return (
    <section
      id="vision"
      className="flex flex-col md:flex-row bg-gray-900
      h-fit w-full py-[10vh] px-[10%] md:gap-x-20 text-white"
    >
      <h1
        className="md:hidden mb-10 md:mb-0 uppercase text-center
      text-4xl font-extrabold tracking-wide "
      >
        Our Vision
      </h1>
      <div className="md:hidden w-full md:w-[35%] md:mb-0">
        <img
          src="/public/assets/Vission-image.png"
          alt="vision image"
          className="w-full h-auto rounded-lg shadow-lg
          custom-transform1"
        />
      </div>
      <div className="flex flex-col items-center w-full md:w-[65%]">
        <h1 className="hidden md:block uppercase text-center text-4xl font-extrabold tracking-wide ">
          Our Vision
        </h1>
        <div className="mt-10">
          <p className="text-sm md:text-base leading-relaxed">
            We envision ZakTechies as a global leader in digital technology
            services. Our vision is to shape the future by delivering impactful,
            reliable solutions that integrate seamlessly into everyday life. We
            aspire to foster a secure, connected digital ecosystem where
            businesses thrive. By staying at the forefront of technological
            advancements, we aim to empower our clients and drive success. Our
            commitment to innovation, quality, and security will guide us in
            building a more inclusive and digitally enhanced world.
          </p>
        </div>
      </div>
      <div className="hidden md:block w-full md:w-[35%] mb-10 md:mb-0">
        <img
          src="/public/assets/Vission-image.png"
          alt="vision image"
          className="w-full h-auto rounded-lg shadow-lg
          custom-transform1"
        />
      </div>
    </section>
  );
};

export default Vision;
