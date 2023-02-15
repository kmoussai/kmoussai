import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  // const changeTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <>
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
        <Image
          src="/bg-profile.jpeg"
          alt="avatar"
          className=" mx-auto border rounded-full "
          height="128"
          width="128"
          quality="100"
        />
      </div>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Khalid</span> Moussaid
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        target="blank"
        href="https://drive.google.com/file/d/1KFlP94_GDxPMpq8XCD9AYWmBiAc9mzlI/view?usp=sharing"
        download="khalid moussaid Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <span>Download CV</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a
          href="https://www.twitter.com/kmoussai_"
          target="blank"
        >
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/kmoussai"
          target="blank"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://github.com/kmoussai"
          target="blank"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Casablanca, Morocco</span>
        </div>
        <p className="my-2 ">
          <a href="mailto:k.moussaid@outlook.com">k.moussaid@outlook.com</a>{" "}
        </p>
        <p className="my-2">
          {" "}
          <a href="tel:+212627570221">+212 6 27 57 02 21</a>{" "}
        </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:k.moussaid@outlook.com")}
      >
        Email me
      </button>
      {/* <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        Toggle Theme
      </button> */}
    </>
  );
};

export default Sidebar;
