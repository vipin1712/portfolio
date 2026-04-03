import React, { useState } from "react";
import avatarImg from "../../assets/vipin.jpeg";
import TextChange from "../TextChange";
import Resume from "../../assets/Resume.pdf";



import {
  RiPhoneLine,
  RiMailLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
} from "react-icons/ri";

// import Ashok_Resume from "Ashok_Resume.docx";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-around items-center md:items-start p-5 md:p-10 sm:p-20">
      <div className="w-full md:w-2/4 md:pt-10 self-center">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-normal tracking-tight mb-4">
          <TextChange isHover={isHover} />
        </h1>
        <p className="text-base sm:text-lg md:text-2xl tracking-tight mb-5">
          I am a passionate and dedicated web developer with expertise in front-end and back-end development. I love learning new technologies and applying my skills to solve real-world challenges.
        </p>

        {/* CV Download Button */}
        <div className="text-center mt-5">
          <button
            className="bg-green-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 transform hover:scale-110 hover:bg-green-600 transition-all duration-300 animate-pulse-on-hover outline-none"
          >

            <a
              href={Resume}
              download="Vipin_Kumar_Resume.pdf"
              className="bg-green-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 
             transform hover:scale-110 hover:bg-green-600 transition-all duration-300"
            >
              <FaDownload size={20} /> Download Resume
            </a>


          </button>
        </div>


        {/* Icon Links Section */}
        <div className="mt-5 flex flex-wrap gap-8 text-3xl items-center justify-start">
          {/* Phone Icon */}
          <a
            href="tel:+918004828716"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl 
             transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
          >
            <RiPhoneLine color="#1A73E8" size={32} />
          </a>


          {/* Email Icon */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300">
            <a href="mailto:vipinkumar45703@gmail.com">
              <RiMailLine color="#D93025" size={32} />
            </a>
          </span>

          {/* GitHub Icon */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300">
            <a href="https://github.com/vipin1712" target="_blank" rel="noopener noreferrer">
              <RiGithubLine color="#ffff" size={32} />
            </a>
          </span>

          {/* LinkedIn Icon */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300">
            <a href="https://www.linkedin.com/in/vipinkumar/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinBoxLine color="#0077B5" size={32} />
            </a>
          </span>

          {/* WhatsApp Icon */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300">
            <a href="https://wa.me/8004828716" target="_blank" rel="noopener noreferrer">
              <RiWhatsappLine color="#25D366" size={32} />
            </a>
          </span>
        </div>
      </div>

      {/* Avatar Image */}
      <div
        className="mt-5 md:mt-0 self-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          className="cursor-pointer w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full shadow-md sm:shadow-lg md:shadow-2xl border-0 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_18px_8px_rgba(136,223,30,0.7)] sm:hover:shadow-[0_0_25px_10px_rgba(136,223,30,0.7)] md:hover:shadow-[0_0_30px_12px_rgba(136,223,30,0.7)]"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
