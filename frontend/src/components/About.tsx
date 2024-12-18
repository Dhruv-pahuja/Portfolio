import React, { useState } from "react";
import { Skills, Education, Experience } from "./index";

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="about"
      className="min-h-[80vh] w-full mt-5 md:mt-2 flex flex-col items-center justify-center px-1 bg-gray-100 dark:bg-black text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl w-full text-center ">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 w-full">
          <div className="w-1/3 h-70 hidden md:block rounded-lg overflow-hidden border-4 border-gray-300 dark:border-gray-700">
            <img
              src="/developer.webp"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3 flex flex-col text-center md:self-start mt-4">
            <h1 className="text-3xl font-bold mb-4 ">
              <span className="text-[#ff2655]">Ab</span>o
              <span className="text-[#ff2655]">u</span>t M
              <span className="text-[#ff2655]">e</span>
            </h1>
            <p className="md:text-xl leading-relaxed text-base">
              I'm a Full Stack Developer with a passion for building beautiful
              and functional websites. I have experience in building web
              applications using modern technologies like React, Next.js,
              Node.js, and MongoDB. I love to learn new things and explore new
              technologies. I'm always open to new opportunities and challenges.
            </p>
            <div>
              <ul className="flex md:justify-around justify-center p-4 m-2 font-semibold w-full whitespace-nowrap md:overflow-x-none">
                {["skills", "experience", "education"].map((tab) => (
                  <li
                    key={tab}
                    className={`mx-2 cursor-pointer relative group ${
                      activeTab === tab
                        ? "text-[#ff2655] border-b-2 border-[#ff2655]"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    <span
                      className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#ff2655] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                        activeTab === tab ? "scale-x-100" : ""
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              {activeTab === "skills" && <Skills />}
              {activeTab === "experience" && <Experience />}
              {activeTab === "education" && <Education />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
