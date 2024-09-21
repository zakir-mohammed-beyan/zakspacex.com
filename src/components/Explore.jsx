const Explore = () => {
  return (
    <section id="explore">
      <div
        className="flex flex-col md:flex-row 
      w-full 
      h-fit py-[10vh] px-[10%] md:gap-x-20 bg-white"
      >
        <h1 className="md:hidden uppercase text-center text-4xl font-extrabold tracking-wide">
          Our <span className=" text-indigo-500">Services</span>
        </h1>
        <div className="w-full md:w-[35%] mt-10 md:mt-0">
          <img
            src="/public/assets/Explore-image.png"
            alt="mission image"
            className="w-full h-fit rounded-lg shadow-lg
        custom-transform2"
          />
        </div>

        <div className="flex flex-col items-center w-full md:w-[65%]">
          <h1 className=" hidden md:block uppercase text-center text-4xl font-extrabold tracking-wide">
            Our <span className=" text-indigo-500">Services</span>
          </h1>
          <div className="mt-10">
            <p className="text-sm md:text-base leading-relaxed">
              <span className=" font-semibold ">ZakTechies</span>, offers a
              comprehensive suite of services designed to meet the demands of
              today’s digital world: Web Design: Building responsive, visually
              engaging websites that deliver seamless user experiences. Mobile
              and Desktop Application Design: Crafting innovative applications
              tailored for both mobile and desktop platforms. Graphic Design:
              Creating impactful visual content that communicates your brand
              effectively. Social Media Management: Enhancing your online
              presence with strategic social media campaigns. Photography and
              Video Production: Capturing high-quality images and videos to
              showcase your products or services. E-Commerce Solutions:
              Developing secure, scalable online stores to drive your business
              growth. Stock/Inventory Management Systems: Implementing efficient
              systems to manage your stock and inventory. E-Learning Platforms:
              Building interactive, user-friendly e-learning platforms for
              education and training. Digital Business Cards: Designing sleek,
              modern digital business cards that leave a lasting impression.
              Security Systems: Providing advanced security solutions to protect
              your digital assets and data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
