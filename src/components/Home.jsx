import Header from "../Header";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { BsFillSendCheckFill } from "react-icons/bs";

const Home = () => {
  return (
    <section id="home" className="h-full w-full flex flex-col showRightWhite">
      <Header />

      <div className="absolute top-[5vh] right-[-3.3%] h-full w-fit -z-50 hidden md:block">
        <img
          className="w-full h-full object-cover"
          src="/public/assets/ZakTechies home-bg.jpg"
          alt=""
        />
      </div>

      <div className="pb-[24vh] pt-[15vh] md:pt-[22.2vh] flex px-6 md:px-28 xl:px-[10%] h-full w-full">
        <div className="flex flex-col w-full h-full md:w-[68%]">
          <span className=" flex flex-col uppercase font-extrabold">
            <h1 className="text-xl md:text-4xl showRightWhite">
              ZakTechies: The Nexus of <br /> Advanced Technologies
            </h1>
          </span>

          <h1 className="mt-12 flex items-center showRightWhite">
            Welcome to
            <span className="font-semibold ml-1">ZakTechies.net</span>
            <BsFillPatchCheckFill className=" ml-3 text-blue-600" />
          </h1>

          <p className="mt-3 hidden md:block">
            At Zakspacex, we lead the way in privacy, technology, and promotion.
            Our mission is to empower businesses <br /> and individuals to
            thrive securely in the digital age. With cutting-edge privacy
            devices, innovative software solutions and advanced SaaS products,
            we simplify the complex and drive technology forward. <br /> At
            Zakspacex, innovation meets impact, creating a future where privacy
            technology and <br />
            promotion unlock new possibilities.
          </p>

          <p className="mt-3 md:hidden">
            At Zakspacex, we lead the way in privacy, technology, and promotion.
            Our mission is to empower businesses and individuals to thrive
            securely in the digital age. With cutting-edge privacy devices,
            innovative software solutions, and advanced SaaS products, we
            simplify the complex and drive technology forward. At Zakspacex,
            innovation meets impact, creating a future where privacy technology
            and promotion unlock new possibilities.
          </p>
          <div className="flex flex-col md:flex-row gap-10 md:gap-[15%] md:items-start items-center md:mt-20 mt-10">
            <span className="flex flex-col gap-10">
              <button className="showRightWhite group relative bg-transparent overflow-hidden shadow-md px-5 py-4 space-x-2 whitespace-nowrap  ">
                <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-in-out bg-gray-100 group-hover:w-full"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get in touch with us.
                  <BsFillSendCheckFill className=" text-xl" />
                </span>
              </button>
            </span>

            <button className="showRightWhite group relative border-indigo-600 border rounded-full px-5 py-4 space-x-2 whitespace-nowrap  ">
              <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-in-out bg-gray-100 group-hover:w-full"></span>

              <span className="relative z-10 flex items-center justify-center gap-2 ">
                Explore Technologies.
                <HiExternalLink className=" text-lg" />
              </span>
            </button>
            {/*
              
            <button className="showRightWhite group relative border-indigo-600 border rounded-full  px-5 py-4 space-x-2 whitespace-nowrap text-white hover:text-black ">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out bg-indigo-500 rounded-full group-hover:w-0"></span>

              <span className="relative z-10 flex items-center justify-center gap-2 ">
                Explore Technologies.
                <HiExternalLink className=" text-lg" />
              </span>
            </button>
              */}
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
