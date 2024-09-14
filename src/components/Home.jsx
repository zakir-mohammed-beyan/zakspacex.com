import Header from "../Header";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { MdMarkEmailRead } from "react-icons/md";

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
          <h1
            className="D-DIN-Bold flex flex-col uppercase font-extrabold text-xl md:text-4xl
           showRightWhite "
          >
            <h1>
              <span className="text-indigo-400 text-base md:text-2xl mr-2">
                ZakTechies:
              </span>
              The Nexus of
            </h1>
            <span className=" text-[19.3px]  md:text-[32px]">
              Next-Gen Technologies.
            </span>
          </h1>
          <h1 className="mt-12 flex items-center showRightWhite">
            Welcome to
            <span className="font-semibold ml-1">ZakTechies.net</span>
            <BsFillPatchCheckFill className=" ml-3 text-blue-600" />
          </h1>

          <span>
            <p className="mt-3 hidden md:block">
              At ZakTechies, we lead the way in privacy, technology, and
              promotion. Our mission is to empower businesses <br /> and
              individuals to thrive securely in the digital age. With
              cutting-edge privacy devices, innovative software, solutions and
              advanced SaaS products, we simplify the complex and drive
              technology forward. <br /> At ZakTechies, innovation meets impact,
              creating a future where privacy technology and <br />
              promotion unlock new possibilities.
            </p>

            <p className="mt-3 md:hidden">
              At ZakTechies, we lead the way in privacy, technology, and
              promotion. Our mission is to empower businesses and individuals to
              thrive securely in the digital age. With cutting-edge privacy
              devices, innovative software solutions, and advanced SaaS
              products, we simplify the complex and drive technology forward. At
              ZakTechies, innovation meets impact, creating a future where
              privacy technology and promotion unlock new possibilities.
            </p>
          </span>
          <div className="flex flex-col md:flex-row gap-10 md:gap-[13%] md:items-start items-center md:mt-20 mt-10">
            <button
              className=" group relative overflow-hidden px-5 py-4
             whitespace-nowrap border-l border-r border-blue-300 "
            >
              <span
                className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out
               bg-gray-50 group-hover:w-0"
              ></span>
              <span className="relative z-10 flex items-center justify-center gap-2 showRightGray">
                Get in touch with us.
                <MdMarkEmailRead className=" text-lg" />
              </span>
            </button>

            <button className="showRightWhite group relative border-[0.5px]  rounded-full px-5 py-4 space-x-2 whitespace-nowrap  ">
              <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-in-out bg-gray-100 group-hover:w-full"></span>
              <span className="relative z-10 flex items-center justify-center gap-2 text-gray-500">
                Discover Future Techies
                <HiExternalLink className=" text-lg" />
              </span>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
