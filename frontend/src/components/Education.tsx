import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education: React.FC = () => {
  const educationTimeline = [
    {
      year: "2023 - 2027",
      institution: "Chandigarh Engineering College - CGC , Landran, Mohali, India",
      degree: "Bachelor's Of Technology in Computer Science",
      grade : "7.9 CGPA",
      description:
        "Focused on Full stack Web development, algorithms, and data structures. Participated in coding competitions and collaborated on academic projects and Open Source contributions.",
    },
    {
      year: "2022 - 2023",
      institution: "L.S.M.S Vidya Mandir, Khanna, India",
      degree: "12th - CBSE Board",
      grade : "86.7%",
      description:
        "Excelled in Non-Medical and computer science. Developed an early interest in programming and web development.",
    },
  ];

  return (
    <div className="relative">
      <div className="border-l-4 border-[#ff2655] absolute h-full left-5 top-0"></div>
      <div className="space-y-5">
        {educationTimeline.map((edu, index) => (
          <div
            key={index}
            className="flex items-start relative space-x-4 pl-6 pb-4"
          >
            {/* Timeline Circle */}
            <div className="absolute left-0 w-10 h-8 rounded-full bg-[#ff2655] flex items-center justify-center text-white shadow-md">
              <FaGraduationCap />
            </div>
            {/* Education Details */}
            <div>
              <h3 className="text-xl font-semibold text-[#ff2655]">
                {edu.degree}
              </h3>
              <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">
                {edu.institution}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {edu.year}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {edu.grade}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
