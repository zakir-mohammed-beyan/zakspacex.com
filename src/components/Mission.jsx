const Mission = () => {
  return (
    <section
      id="mission"
      className="flex flex-col bg-[#EDDEDE]
      w-full 
      h-fit py-[10vh] px-[10%]"
    >
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-center text-4xl font-extrabold tracking-wide text-gray-800">
          Our Mission
        </h1>
        <div
          className="flex flex-col
         md:flex-row items-center md:justify-between w-full mt-10"
        >
          <div className="w-full md:w-[25%] pb-10 md:pb-0">
            <img
              src="/public/assets/close-up-vibrant-colors-4k-cyberpunk-world-boy-wearing-vr-headset-retro-illustrations_861655-2329.avif"
              alt="mission image"
              className="w-full h-auto rounded-lg shadow-lg
               transition-transform duration-300 
              hover:scale-105"
            />
          </div>
          <div className="w-full md:w-[65%]">
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-medium md:font-semibold mr-1">
                At ZakTechies,
              </span>
              our mission is to harness the power of advanced technologies to
              create secure, innovative solutions for the future. We are
              committed to prioritizing privacy and security in everything we
              build, delivering high-impact tools and software that provide
              tangible value to both businesses and individuals. By leveraging
              the latest in technology and digital strategy, we empower our
              clients to navigate the evolving digital landscape with
              confidence. Our focus on state-of-the-art privacy solutions,
              software development, and growth-driven promotional strategies
              ensures that we protect what matters most while driving forward
              the next wave of digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
