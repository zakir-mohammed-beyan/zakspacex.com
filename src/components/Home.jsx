import Header from "../Header";
import SocialMedia from "../SocialMedia";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <section
      id="updates"
      className="relative h-full 2xl:h-screen w-full flex flex-col"
    >
      <Header />

      <div className=" hidden md:block absolute top-1/4 right-5 z-10">
        <img
          className="w-full h-full opacity-100"
          src="/public/assets/Stay-up-to-date.svg"
          alt="Home Background Image"
        />
      </div>

      <div className="pb-[22.5vh] pt-[20vh] md:pt-[24vh] flex px-[10%] h-full w-full z-10">
        <div className="flex flex-col w-full h-full lg:w-[90%] 2xl:w-[72%]">
          <h1
            className="font-extrabold leading-5 md:leading-10
            tracking-wide text-indigo-500
           uppercase"
          >
            <span className="text-3xl md:text-7xl D-DIN-Bold ">
              High-quality
            </span>
            <br />
            <span className=" text-base md:text-3xl">software guaranteed</span>
          </h1>

          <h1 className="mt-12 flex items-center text-sm md:text-lg">
            Welcome to
            <span className="font-medium md:font-semibold ml-1 text-sm md:text-lg">
              ZakTechies
            </span>
            <BsFillPatchCheckFill className="ml-1 text-blue-600 text-sm" />
          </h1>

          <span className="mt-3">
            <p className=" text-base leading-relaxed">
              <span className="font-medium md:font-semibold mr-1">
                At ZakTechies,
              </span>
              we lead the way in privacy, technology, and promotion. Our mission
              is to empower businesses and individuals to thrive securely in the
              digital age. With cutting-edge privacy devices, innovative
              software, solutions and advanced SaaS products, we simplify the
              complex and drive technology forward. At ZakTechies, innovation
              meets impact, creating a future where privacy technology and
              promotion unlock new possibilities.
            </p>
          </span>

          <div
            className="flex flex-col md:flex-row gap-14
           md:gap-10 items-center md:mt-20 mt-14"
          >
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              <button
                className="group relative overflow-hidden px-5 py-4
                whitespace-nowrap border-l border-r border-blue-300"
              >
                <span
                  className="absolute inset-0 w-0 h-full transition-all 
                duration-300 ease-in-out bg-gray-100 group-hover:w-full"
                ></span>
                <span
                  className="relative z-10 flex items-center
                 justify-center gap-2 text-base"
                >
                  {`Don't hesitate to reach out.`}
                  <MdMarkEmailRead className="text-xl" />
                </span>
              </button>
            </ScrollLink>
            <span>
              <SocialMedia />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
