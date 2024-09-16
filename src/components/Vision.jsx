const Vision = () => {
  return (
    <section
      id="vision"
      className="flex flex-col bg-slate-300 
      h-fit w-full py-[10vh] px-[10%]"
    >
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-center text-4xl font-extrabold tracking-wide text-gray-800">
          Our Vision
        </h1>
        <div
          className="flex flex-col
         md:flex-row items-center md:justify-between w-full mt-10"
        >
          <div className="w-full md:w-[65%]">
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-medium md:font-semibold mr-1">
                At ZakTechies,
              </span>
              our vision is to be a global leader in crafting secure, innovative
              digital solutions that redefine how businesses and individuals
              interact with technology. We envision a future where privacy and
              security are fundamental rights in the digital world, and where
              advanced technology seamlessly integrates into everyday life,
              driving growth, efficiency, and trust. Through continuous
              innovation, we aim to build a more secure and connected world,
              empowering our clients to reach new heights in a digital era
              marked by constant evolution.
            </p>
          </div>
          <div className="w-full md:w-[25%] pt-10 md:pt-0">
            <img
              src="/public/assets/-high-tech-virtual-reality-glasses.avif"
              alt="mission image"
              className="w-full h-auto rounded-lg shadow-lg
               transition-transform duration-300 hover:scale-105
                "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
