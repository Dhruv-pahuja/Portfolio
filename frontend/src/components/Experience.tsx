import React from "react";
import { FaCode, FaGithub} from "react-icons/fa";

const Experience: React.FC = () => {
  const experiences = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Web Development",
      description:
        "6+ months of experience with React, Next.js, Node.js,Express.js, MongoDB, Tailwind CSS, and TypeScript. Built  responsive projects like 'BookNest' and 'Chirp'.",
    },
    {
      icon: <FaGithub className="text-3xl"/>,
      title: "Open Source",
      description:
        "Contributed to open-source projects in GSSoC-extd 2024,hacktoberfest, focusing on collaboration and clean code. Aspiring to participate in programs like GSoC.",
    },
    
  ];

  return (
    <div className="flex flex-col gap-8 mt-4 mx-h-[420px] overflow-auto md:overflow-visible">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <div className="flex-shrink-0">{exp.icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-[#f73b64]">
              {exp.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
