import Mail from "../components/icons/mail";
import Phone from "../components/icons/phone";
import Resume from "../components/icons/resume";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex pl-0 md:pl-48 flex-col flex-1 gap-4 md:gap-36">
        <div className="flex bg-black w-full md:w-1/2 h-16 text-white p-2 md:p-2 justify-center items-end">
          <h1 className="font-bold text-3xl ">Khalid MOUSSAID</h1>
        </div>
        <div className="flex flex-col pl-8 md:pl-0 pr-8">
          <p>
            I am a frontend developer with a passion for writing code and
            solving problems. I have experience working with ReactJS and enjoy
            using it to create interactive and user-friendly web applications.
            In my free time, I enjoy staying up-to-date with the latest
            developments in the world of frontend development and exploring new
            technologies. I am always eager to learn and take on new challenges,
            and I am dedicated to producing high-quality work.
          </p>
          <div className="flex gap-4 mt-4 flex-col">
            <div>
              <a
                className="flex gap-4 items-center"
                href="mailto:k.moussaid@outlook.com"
              >
                <Mail />
                k.moussaid@outlook.com
              </a>
            </div>

            <div>
              <a
                className="flex gap-4 items-center"
                href="tel:00212627570221"
              >
                <Phone />
                +212 6 27 57 02 21
              </a>
            </div>

            <div>
              <a
                className="flex gap-4 items-center"
                href="https://drive.google.com/file/d/1-1EFPPwd1GWpcHFBWRF4mE77JQ3tgo5l/view?usp=sharing"
              >
                <Resume />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex hidden">
        <Image
          width="700"
          height="100"
          src="/bg-profile.jpeg"
          alt="kmoussai or khalid moussaid profile image"
        />
      </div>
    </div>
  );
}
